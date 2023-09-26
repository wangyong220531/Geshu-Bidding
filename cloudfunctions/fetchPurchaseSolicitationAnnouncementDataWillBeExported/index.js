// eslint-disable-next-line import/no-commonjs
const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

// 云函数的入口函数
// eslint-disable-next-line import/no-commonjs
exports.main = async () => {
  try {
    // 获取数据库实例
    const db = cloud.database();

    const result = await db
      .collection("purchase_solicitation_announcement")
      .aggregate()
      .lookup({
        from: "purchase_solicitation_announcement_detail",
        localField: "_id",
        foreignField: "link_id",
        as: "detail",
      })
      .match({
        detail: {
          $ne: [],
        },
        is_deleted: false,
      })
      .limit(100)
      .end();

    // 返回查询结果
    return {
      statusCode: 200,
      data: result.list,
    };
  } catch (error) {
    // 查询出错，返回错误信息
    return {
      statusCode: 500,
      data: error.message,
    };
  }
};
