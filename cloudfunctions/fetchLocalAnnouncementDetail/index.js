// 云函数入口文件
// eslint-disable-next-line import/no-commonjs
const cloud = require("wx-server-sdk");

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }); // 使用当前云环境
const db = cloud.database();

// 云函数入口函数
// eslint-disable-next-line import/no-commonjs
exports.main = async (event) => {
  const { link_id } = event;
  try {
    const res = await db
      .collection("local_announcement_detail")
      .where({
        link_id,
      })
      .get();
    if (!res) return;
    return res.data;
  } catch (err) {
    console.log("获取地方公告详情出错：" + err);
  }
};
