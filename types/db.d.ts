/**
 * 采购（意向）公开
 */
declare interface PurchaseIntentionDisclosure {
  _id: string;
  title: string;
  href: string;
  time: string;
  is_deleted: boolean
}

/**
 * 采购（意向）公开详情表字段
 */
declare interface PurchaseIntentionDisclosureDetail {
  _id: string;
  link_id: string;
  no: string;
  projectName: string;
  purchaseRequirementsSummary: string;
  purchaseBudget: string;
  expectedPurchaseMonth: string;
  whetherForSmallAndMediumEnterprise: string;
  whetherPurchaseEnergySavingAndEnvironmentalLabelingProducts: string;
  remark: string;
}

/**
 * 单个采购（征集）公告详情
 */
declare interface PurchaseSolicitationAnnouncementDetail {
  _id: string;
  link_id: string;
  title: string;
  project_name: string;
  project_no: string;
  project_principal: string;
  principal_contact: string;
}
