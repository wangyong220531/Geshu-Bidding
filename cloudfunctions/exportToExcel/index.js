// eslint-disable-next-line import/no-commonjs
const cloud = require("wx-server-sdk");
// eslint-disable-next-line import/no-commonjs
// const fs = require("fs");
// eslint-disable-next-line import/no-commonjs
// const path = require("path");
// eslint-disable-next-line import/no-commonjs
const xlsx = require("node-xlsx");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

// eslint-disable-next-line import/no-commonjs
exports.main = async (event) => {
  const { data } = event;

  try {
    const buffer = xlsx.build([{ name: "Sheet 1", data }]);
    const res = await cloud.uploadFile({
      cloudPath: "purchaseAnnouncementsExportFolder/采购（征集）公告数据.xlsx",
      fileContent: Buffer.from(buffer),
    });
    if (!res) return;
    return res.fileID;
  } catch (err) {
    console.error("导出 Excel 出错:", err);
    throw err;
  }
};
