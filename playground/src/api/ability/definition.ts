/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
export type ModelAndViewStatus =
  | "ACCEPTED"
  | "ALREADY_REPORTED"
  | "BAD_GATEWAY"
  | "BAD_REQUEST"
  | "BANDWIDTH_LIMIT_EXCEEDED"
  | "CHECKPOINT"
  | "CONFLICT"
  | "CONTINUE"
  | "CREATED"
  | "DESTINATION_LOCKED"
  | "EXPECTATION_FAILED"
  | "FAILED_DEPENDENCY"
  | "FORBIDDEN"
  | "FOUND"
  | "GATEWAY_TIMEOUT"
  | "GONE"
  | "HTTP_VERSION_NOT_SUPPORTED"
  | "IM_USED"
  | "INSUFFICIENT_SPACE_ON_RESOURCE"
  | "INSUFFICIENT_STORAGE"
  | "INTERNAL_SERVER_ERROR"
  | "I_AM_A_TEAPOT"
  | "LENGTH_REQUIRED"
  | "LOCKED"
  | "LOOP_DETECTED"
  | "METHOD_FAILURE"
  | "METHOD_NOT_ALLOWED"
  | "MOVED_PERMANENTLY"
  | "MOVED_TEMPORARILY"
  | "MULTIPLE_CHOICES"
  | "MULTI_STATUS"
  | "NETWORK_AUTHENTICATION_REQUIRED"
  | "NON_AUTHORITATIVE_INFORMATION"
  | "NOT_ACCEPTABLE"
  | "NOT_EXTENDED"
  | "NOT_FOUND"
  | "NOT_IMPLEMENTED"
  | "NOT_MODIFIED"
  | "NO_CONTENT"
  | "OK"
  | "PARTIAL_CONTENT"
  | "PAYLOAD_TOO_LARGE"
  | "PAYMENT_REQUIRED"
  | "PERMANENT_REDIRECT"
  | "PRECONDITION_FAILED"
  | "PRECONDITION_REQUIRED"
  | "PROCESSING"
  | "PROXY_AUTHENTICATION_REQUIRED"
  | "REQUESTED_RANGE_NOT_SATISFIABLE"
  | "REQUEST_ENTITY_TOO_LARGE"
  | "REQUEST_HEADER_FIELDS_TOO_LARGE"
  | "REQUEST_TIMEOUT"
  | "REQUEST_URI_TOO_LONG"
  | "RESET_CONTENT"
  | "SEE_OTHER"
  | "SERVICE_UNAVAILABLE"
  | "SWITCHING_PROTOCOLS"
  | "TEMPORARY_REDIRECT"
  | "TOO_EARLY"
  | "TOO_MANY_REQUESTS"
  | "UNAUTHORIZED"
  | "UNAVAILABLE_FOR_LEGAL_REASONS"
  | "UNPROCESSABLE_ENTITY"
  | "UNSUPPORTED_MEDIA_TYPE"
  | "UPGRADE_REQUIRED"
  | "URI_TOO_LONG"
  | "USE_PROXY"
  | "VARIANT_ALSO_NEGOTIATES";
export interface AccountInput {
  compCode: string;
  cpmoCop: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
}

export interface AddressGroupDelInput {
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   ID
   * @format int32
   */
  id: number;
  itcode: string;
  /**
   * @description
   *   操作人账号
   */
  optUserAccount: string;
  /**
   * @description
   *   操作人姓名
   */
  optUserName: string;
  /**
   * @description
   *   应急角色ids
   */
  roleIds: string;
  /** @format int32 */
  type: number;
}

export interface AddressGroupSaveInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   职责描述
   */
  description: string;
  /**
   * @description
   *   有值为更新，空为新增
   * @format int32
   */
  id: number;
  /**
   * @description
   *   群组名称
   */
  name: string;
  /**
   * @description
   *   操作人账号
   */
  optUserAccount: string;
  /**
   * @description
   *   操作人姓名
   */
  optUserName: string;
  /**
   * @description
   *   区域编码
   */
  organCode: string;
  /**
   * @description
   *   关联应急预案等级
   */
  preplanLevel: string;
  /**
   * @description
   *   应急角色ids
   */
  roleIds: string;
  /**
   * @description
   *   站点编码
   */
  stationCode: string;
}

export interface AddressGroupSearchInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   多选公司编码
   */
  compCodes: Array<string>;
  /**
   * @description
   *   公司名，模糊查询
   */
  compNameLike: string;
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   群组ID，有值时结果为最多一条的List
   * @format int32
   */
  id: number;
  /**
   * @description
   *   群组名，模糊查询
   */
  nameLike: string;
  /**
   * @description
   *   区域名称，模糊查询
   */
  organCode: string;
  /**
   * @description
   *   页面码，从1开始
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   单页长度，默认10
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   站点名称，模糊查询
   */
  stationCode: string;
}

export interface AddressListDelInput {
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   ID
   * @format int32
   */
  id: number;
  itcode: string;
  /**
   * @description
   *   操作人账号
   */
  optUserAccount: string;
  /**
   * @description
   *   操作人姓名
   */
  optUserName: string;
  /**
   * @description
   *   应急角色ids
   */
  roleIds: string;
  /** @format int32 */
  type: number;
}

export interface AddressListInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   群组ID
   */
  groupIds: Array<number>;
  /**
   * @description
   *   是否获取icome群组 为空不获取 1 获取
   * @format int32
   */
  icomeGroup: number;
  /**
   * @description
   *   是否获取空区域的群组 为空不获取 1 获取
   * @format int32
   */
  organBlank: number;
  /**
   * @description
   *   区域编码
   */
  organCode: string;
  /**
   * @description
   *   预案编码
   * @format int64
   */
  preplanId: number;
  /**
   * @description
   *   应急预案等级
   * @format int32
   */
  preplanLevel: number;
  /**
   * @description
   *   是否获取空站点的群组 为空不获取 1 获取
   * @format int32
   */
  stationBlank: number;
  /**
   * @description
   *   站点编码
   */
  stationCode: string;
}

export interface AddressListSaveInput {
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   群组ID
   * @format int32
   */
  groupId: number;
  /**
   * @description
   *   有值为更新，空为新增
   * @format int32
   */
  id: number;
  /**
   * @description
   *   itCode
   */
  itcode: string;
  /**
   * @description
   *   姓名
   */
  name: string;
  /**
   * @description
   *   操作人账号
   */
  optUserAccount: string;
  /**
   * @description
   *   操作人姓名
   */
  optUserName: string;
  /**
   * @description
   *   电话号码
   */
  phoneNum: string;
  /**
   * @description
   *   职位
   */
  position: string;
  /**
   * @description
   *   应急角色ids
   */
  roleIds: string;
}

export interface AddressListSearchInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   公司名，模糊查询
   */
  compNameLike: string;
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   群组ID
   */
  groupId: string;
  /**
   * @description
   *   群组名，模糊查询
   */
  groupNameLike: string;
  /**
   * @description
   *   ID，有值时结果为最多一条的List
   * @format int32
   */
  id: number;
  /**
   * @description
   *   itCode,模糊查询
   */
  itcodeLike: string;
  /**
   * @description
   *   姓名，模糊查询
   */
  nameLike: string;
  /**
   * @description
   *   页面码，从1开始
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   单页长度，默认10
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   电话号码,模糊查询
   */
  phoneNumLike: string;
  /**
   * @description
   *   职位,模糊查询
   */
  positionLike: string;
  /** @format int32 */
  type: number;
}

/**
 * @description
 *   通讯录组
 */
export interface AddressListTree {
  children: Array<AddressListTree>;
  compCodeTxt: string;
  description: string;
  /**
   * @description
   *   ID
   */
  id: string;
  /**
   * @description
   *   账号
   */
  itcode: string;
  /**
   * @description
   *   名称
   */
  label: string;
  oragnName: string;
  /**
   * @description
   *   手机号，只有第三层通讯录有
   */
  phoneNum: string;
  /**
   * @description
   *   职位
   */
  position: string;
  preplanLevel: string;
  preplanLevelTxt: string;
  sessionId: string;
  /**
   * @description
   *   true：icome群组；false:非icome群组
   */
  status: boolean;
}

/**
 * @description
 *   外呼人员
 */
export interface CallOutPeople {
  /**
   * @description
   *   姓名
   */
  name: string;
  /**
   * @description
   *   电话号码
   */
  phoneNum: string;
}

/**
 * @description
 *   外呼人员（支持给座机打电话）
 */
export interface CallOutPeopleSpecial {
  /**
   * @description
   *   姓名
   */
  name: string;
  /**
   * @description
   *   电话号码
   */
  phoneNum: string;
}

export interface CallRecordInput {
  endTime: string;
  startTime: string;
}

export interface CallRecordsInputDto {
  callId: string;
  /** @format date-time */
  endTime: string;
  /** @format int64 */
  id: number;
  remark: string;
  soundUrl: string;
  /** @format date-time */
  startTime: string;
}

/**
 * @description
 *   三方通话录音
 */
export interface CallRecordsOutput {
  /**
   * @description
   *   话务id
   */
  callId: string;
  /**
   * @description
   *   抢险单号
   */
  remark: string;
  /**
   * @description
   *   录音地址
   */
  soundUrl: string;
  /**
   * @description
   *   录音文字
   */
  value: string;
}

export interface CompSearchInput {
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   模版类型,，空，1：呼叫，2：短信。有值时，表示有这个模版的公司
   * @format int32
   */
  templateType: number;
}

/**
 * @description
 *   应急通讯录群组信息
 */
export interface EmergencyGroupOutput {
  /**
   * @description
   *   群组id
   * @format int32
   */
  groupId: number;
  /**
   * @description
   *   群组名称
   */
  groupName: string;
  /**
   * @description
   *   组内人员
   */
  groupRoleList: Array<EmergencyGroupRoleOutput>;
  /**
   * @description
   *   人员个数
   * @format int32
   */
  number: number;
}

/**
 * @description
 *   应急角色分组出参
 */
export interface EmergencyGroupRoleOutput {
  /**
   * @description
   *   人员个数
   * @format int32
   */
  personNum: number;
  /**
   * @description
   *   职责
   */
  roleGroupDuty: string;
  /**
   * @description
   *   角色分组id
   * @format int64
   */
  roleGroupId: number;
  /**
   * @description
   *   角色分组名称
   */
  roleGroupName: string;
  /**
   * @description
   *   组内人员
   */
  roleGroupPersonList: Array<EmergencyGroupRolePersonOutput>;
}

/**
 * @description
 *   人员信息
 */
export interface EmergencyGroupRolePersonOutput {
  /**
   * @description
   *   itcode
   */
  itcode: string;
  /**
   * @description
   *   职位
   */
  personPosition: string;
  /**
   * @description
   *   角色
   */
  personRole: string;
  /**
   * @description
   *   角色职责
   */
  personRoleDuty: string;
  /**
   * @description
   *   手机号
   */
  phoneNum: string;
  /** @format int64 */
  roleId: number;
  roleName: string;
  /**
   * @description
   *   姓名
   */
  username: string;
}

export interface EmergencyRoleAddInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   应急角色分组id
   * @format int64
   */
  groupId: number;
  /**
   * @description
   *   编辑必填/新增不填写
   * @format int64
   */
  id: number;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
  /**
   * @description
   *   角色职责
   */
  roleDuty: string;
  /**
   * @description
   *   角色名称
   */
  roleName: string;
  /**
   * @description
   *   可匹配人员数量
   * @format int32
   */
  roleNumber: number;
}

export interface EmergencyRoleDelInput {
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   ids,多个逗号分割
   */
  ids: string;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
}

export interface EmergencyRoleGroupAddInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   分组职责
   */
  duty: string;
  /**
   * @description
   *   分组名称
   */
  groupName: string;
  /**
   * @description
   *   编辑必填/新增不填写
   * @format int64
   */
  id: number;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
}

export interface EmergencyRoleGroupDelInput {
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
}

export interface EmergencyRoleGroupListInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
}

export interface EmergencyRoleGroupListOutput {
  /**
   * @description
   *   分组职责
   */
  duty: string;
  /**
   * @description
   *   分组名称
   */
  groupName: string;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   角色数量
   * @format int32
   */
  roleNumber: number;
}

export interface EmergencyRoleListInput {
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   应急角色分组id
   * @format int64
   */
  groupId: number;
  /**
   * @description
   *   页面码，从1开始
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   单页长度，默认10
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   角色名称模糊搜索
   */
  roleName: string;
}

export interface EmergencyRoleListOutput {
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   角色职责
   */
  roleDuty: string;
  /**
   * @description
   *   角色名称
   */
  roleName: string;
  /**
   * @description
   *   可匹配人员数量
   * @format int32
   */
  roleNumber: number;
}

/**
 * @description
 *   icome群组关联
 */
export interface IcomeGroupInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   群组id
   * @format int32
   */
  groupId: number;
  /**
   * @description
   *   群主
   */
  groupLeader: string;
  /**
   * @description
   *   群主姓名
   */
  groupLeaderName: string;
  /**
   * @description
   *   群成员itcode,多个逗号分割
   */
  groupMembers: string;
  /**
   * @description
   *   群名称
   */
  groupName: string;
  /**
   * @description
   *   当前操作人员itcode
   */
  itcode: string;
  /**
   * @description
   *   是否接受启动前的icome群组消息
   * @format int32
   */
  noticeProgressType: number;
  /**
   * @description
   *   通讯录人数
   * @format int32
   */
  number: number;
  /**
   * @description
   *   群会话id
   */
  sessionId: string;
}

/**
 * @description
 *   查看icome群组信息
 */
export interface IcomeGroupOutput {
  /**
   * @description
   *   绑定状态
   * @format int32
   */
  bindStatus: number;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   群组id
   * @format int32
   */
  groupId: number;
  /**
   * @description
   *   群主
   */
  groupLeader: string;
  /**
   * @description
   *   群主姓名
   */
  groupLeaderName: string;
  /**
   * @description
   *   群名称
   */
  groupName: string;
  /**
   * @description
   *   通讯录人数
   * @format int32
   */
  number: number;
  /**
   * @description
   *   群会话id
   */
  sessionId: string;
}

export interface IcomeServiceAccountSendMsgInput {
  content: string;
  heading: string;
  itcodes: string;
}

/**
 * @description
 *   待办内容
 */
export interface IcomeTodoInput {
  /**
   * @description
   *   任务链接
   */
  appUrl: string;
  /**
   * @description
   *   任务描述
   */
  description: string;
  /**
   * @description
   *   创建人itcode
   */
  operatorId: string;
  /**
   * @description
   *   参与人id
   */
  participantIds: string;
  /**
   * @description
   *   任务id，任务主键
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   任务名称
   */
  title: string;
}

export interface ModelAndView {
  empty: boolean;
  model: any;
  modelMap: {
    [propertyName: string]: any;
  };
  reference: boolean;
  status: ModelAndViewStatus;
  view: View;
  viewName: string;
}

export interface MsgAccount {
  callAccount: string;
  callKey: string;
  callPin: string;
  callPwd: string;
  /** @format int32 */
  callStatus: number;
  compCode: string;
  compCodeName: string;
  cpmoCop: string;
  cpmoCopName: string;
  createUserItcode: string;
  createUserName: string;
  /** @format int64 */
  id: number;
  noteAccount: string;
  notePwd: string;
  /** @format int32 */
  noteStatus: number;
  updateUserItcode: string;
  updateUserName: string;
}

export interface MsgAccountModel {
  callAccount: string;
  callKey: string;
  callPin: string;
  callPwd: string;
  /** @format int32 */
  callStatus: number;
  compCode: string;
  compCodeName: string;
  cpmoCop: string;
  cpmoCopName: string;
  /** @format date-time */
  createTime: string;
  createUserItcode: string;
  createUserName: string;
  /** @format int32 */
  deleteFlag: number;
  /** @format int64 */
  id: number;
  noteAccount: string;
  notePwd: string;
  noteSalt: string;
  /** @format int32 */
  noteStatus: number;
  noteUserId: string;
  /** @format date-time */
  updateTime: string;
  updateUserItcode: string;
  updateUserName: string;
}

export interface MsgTemplate {
  compCode: string;
  /** @format int64 */
  id: number;
  model: string;
  msg: string;
  name: string;
  /** @format int32 */
  templateType: number;
  type: string;
  typeCode: string;
}

export interface MsgTemplateDelInput {
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   ID
   * @format int32
   */
  id: number;
  itcode: string;
  /**
   * @description
   *   操作人账号
   */
  optUserAccount: string;
  /**
   * @description
   *   操作人姓名
   */
  optUserName: string;
  /**
   * @description
   *   应急角色ids
   */
  roleIds: string;
  /** @format int32 */
  type: number;
}

/**
 * @description
 *   信息模版
 */
export interface MsgTemplateSaveInput {
  /**
   * @description
   *   外呼账号
   */
  account: string;
  /**
   * @description
   *   callKey
   */
  callKey: string;
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  cpmoCop: string;
  /**
   * @description
   *   有值为更新，空为新增
   * @format int32
   */
  id: number;
  /**
   * @description
   *   功能模块，告警 1  示险  2  抢险 5,选中多个用逗号分隔
   */
  model: string;
  /**
   * @description
   *   模板主体
   */
  msg: string;
  /**
   * @description
   *   模版名称
   */
  name: string;
  /** @format int64 */
  newId: number;
  /**
   * @description
   *   操作人账号
   */
  optUserAccount: string;
  /**
   * @description
   *   操作人姓名
   */
  optUserName: string;
  /**
   * @description
   *   PIN
   */
  pin: string;
  /**
   * @description
   *   密码
   */
  pwd: string;
  /**
   * @description
   *   应急角色ids
   */
  roleIds: string;
  /**
   * @description
   *   场景 1：管网场景，2：场站场景，3：户内场景，4：工程场景
   * @format int32
   */
  scene: number;
  /**
   * @description
   *   状态，0：禁用，1：启用
   * @format int32
   */
  status: number;
  /**
   * @description
   *   模板id
   * @format int64
   */
  templateId: number;
  /**
   * @description
   *   模板类型：1：通用模板；2：自定义模板
   * @format int32
   */
  templateType: number;
  /**
   * @description
   *   类型，1：呼叫，2：短信
   * @format int32
   */
  type: number;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
  /**
   * @description
   *   类型编码数组
   */
  typeCodes: Array<string>;
}

export interface MsgTemplateSearchInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   公司名，模糊查询
   */
  compNameLike: string;
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   模版ID，有值时结果为最多一条的List
   * @format int32
   */
  id: number;
  /**
   * @description
   *   功能模块，告警 1  示险  2  抢险 5,选中多个用逗号分隔
   */
  model: string;
  /**
   * @description
   *   页面码，从1开始
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   单页长度，默认10
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   关联类型查询
   */
  relationType: string;
  /**
   * @description
   *   场景 1：管网场景，2：场站场景，3：户内场景，4：工程场景
   */
  sceneList: Array<number>;
  /**
   * @description
   *   省公司，模糊查询
   */
  shengLike: string;
  /**
   * @description
   *   管理实体，模糊查询
   */
  subNameLike: string;
  /**
   * @description
   *   类型，1：呼叫，2：短信,空：全部
   * @format int32
   */
  type: number;
  types: Array<string>;
}

/**
 * @description
 *   信息模版唯一信息
 */
export interface MsgTemplateValidUniqueInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   场景
   * @format int32
   */
  scene: number;
  /**
   * @description
   *   类型，1：呼叫，2：短信
   * @format int32
   */
  type: number;
}

export interface PageInfo {
  /** @format int64 */
  endRow: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  list: Array<any>;
  /** @format int32 */
  navigateFirstPage: number;
  /** @format int32 */
  navigateLastPage: number;
  /** @format int32 */
  navigatePages: number;
  navigatepageNums: Array<number>;
  /** @format int32 */
  nextPage: number;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  pages: number;
  /** @format int32 */
  prePage: number;
  /** @format int32 */
  size: number;
  /** @format int64 */
  startRow: number;
  /** @format int64 */
  total: number;
}

/**
 * @description
 *   应急角色选择
 */
export interface PersonRoleInput {
  /**
   * @description
   *   通讯录所属公司编码
   */
  companyCode: string;
  /**
   * @description
   *   群组id
   * @format int64
   */
  groupId: number;
  /** @format int32 */
  type: number;
}

export interface PhoneCallOutInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   外呼、短信内容
   */
  msg: string;
  /**
   * @description
   *   场景
   * @format int32
   */
  scene: number;
  /**
   * @description
   *   任务ID
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   类型，1：外呼，2：短信
   * @format int32
   */
  type: number;
  /**
   * @description
   *   外呼人员列表
   */
  users: Array<CallOutPeople>;
}

export interface PhoneCallOutSpecialInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   外呼、短信内容
   */
  msg: string;
  /**
   * @description
   *   场景
   * @format int32
   */
  scene: number;
  /**
   * @description
   *   任务ID
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   类型，1：外呼，2：短信
   * @format int32
   */
  type: number;
  /**
   * @description
   *   外呼人员列表
   */
  users: Array<CallOutPeopleSpecial>;
}

/**
 * @description
 *   通话记录
 */
export interface PhoneCallRecordOutput {
  /**
   * @description
   *   外呼结果
   */
  callResult: string;
  /** @format date-time */
  createTime: string;
  /**
   * @description
   *   通话时长
   * @format int32
   */
  duration: number;
  /** @format date-time */
  endTime: string;
  /**
   * @description
   *   ID
   * @format int32
   */
  id: number;
  /**
   * @description
   *   外呼内容
   */
  msg: string;
  /**
   * @description
   *   姓名
   */
  name: string;
  /**
   * @description
   *   电话号码
   */
  phoneNum: string;
}

export interface PhoneCallSearchInput {
  /**
   * @description
   *   呼叫结果
   */
  callResult: string;
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   呼叫时间查询，结束时间
   * @format date-time
   */
  endTime: string;
  /**
   * @description
   *   页面码，从1开始
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   单页长度，默认10
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   场景 1：管网场景，2：场站场景，3：户内场景，4：工程场景
   */
  sceneList: Array<number>;
  /**
   * @description
   *   呼叫时间查询，起始时间
   * @format date-time
   */
  startTime: string;
  /**
   * @description
   *   呼叫对象，姓名、手机号:模糊查询
   */
  target: string;
}

/**
 * @description
 *   短信记录
 */
export interface PhoneMsgRecordOutput {
  /** @format date-time */
  createTime: string;
  /**
   * @description
   *   ID
   * @format int32
   */
  id: number;
  /**
   * @description
   *   外呼内容
   */
  msg: string;
  /**
   * @description
   *   短信结果
   */
  msgResult: string;
  /**
   * @description
   *   姓名
   */
  name: string;
  /**
   * @description
   *   电话号码
   */
  phoneNum: string;
}

export interface PhoneMsgSearchInput {
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   短信发送时间查询，结束时间
   * @format date-time
   */
  msgEndTime: string;
  /**
   * @description
   *   短信发送结果
   */
  msgResult: string;
  /**
   * @description
   *   短信发送时间查询，起始时间
   * @format date-time
   */
  msgStartTime: string;
  /**
   * @description
   *   短信发送对象，姓名、手机号:模糊查询
   */
  msgTarget: string;
  /**
   * @description
   *   页面码，从1开始
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   单页长度，默认10
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   场景 1：管网场景，2：场站场景，3：户内场景，4：工程场景
   */
  sceneList: Array<number>;
}

export interface PhoneOptSaveInput {
  /**
   * @description
   *   通讯录Ids
   */
  address_list_ids: Array<number>;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   发送信息
   */
  msg: string;
  /**
   * @description
   *   无ID人员列表，附近人员
   */
  no_id_users: Array<PhonePojo>;
  /**
   * @description
   *   场景
   * @format int32
   */
  scene: number;
  /**
   * @description
   *   任务ID
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   信息模版ID
   * @format int64
   */
  template_id: number;
  /**
   * @description
   *   类型，1：呼叫，2：短信
   * @format int32
   */
  type: number;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
}

/**
 * @description
 *   无ID人员，附近人员
 */
export interface PhonePojo {
  /**
   * @description
   *   姓名
   */
  name: string;
  /**
   * @description
   *   电话号码
   */
  phone_num: string;
}

export interface QueryTypeInput {
  category: string;
  companyCode: string;
  cpmoCop: string;
  sceneCode: string;
  /** @format int32 */
  templateType: number;
  /** @format int32 */
  type: number;
  typeCode: string;
}

export interface RoleBySessionIdInput {
  sessionId: string;
}

/**
 * @description
 *   应急角色选择渲染
 */
export interface RoleGroupChooseOutput {
  /** @format int32 */
  groupId: number;
  groupName: string;
  /**
   * @description
   *   itcode
   */
  itcode: string;
  /**
   * @description
   *   phone
   */
  phone: string;
  /**
   * @description
   *   角色id
   * @format int64
   */
  roleId: number;
  /**
   * @description
   *   角色名称，分组和角色逗号分割
   */
  roleName: string;
  /**
   * @description
   *   userName
   */
  userName: string;
}

/**
 * @description
 *   应急角色选择下拉
 */
export interface RoleGroupOutput {
  /**
   * @description
   *   应急角色个数
   */
  details: Array<RoleOutput>;
  /**
   * @description
   *   应急角色个数
   * @format int32
   */
  number: number;
  /**
   * @description
   *   应急角色分组id
   */
  roleGroupId: string;
  /**
   * @description
   *   应急角色分组
   */
  roleGroupName: string;
}

export interface RoleOutput {
  /**
   * @description
   *   已关联人数
   * @format int32
   */
  relateNumber: number;
  /**
   * @description
   *   角色id
   * @format int64
   */
  roleId: number;
  /**
   * @description
   *   角色名称
   */
  roleName: string;
  /**
   * @description
   *   可关联人数
   * @format int32
   */
  sumRelateNumber: number;
  /**
   * @description
   *   剩余可关联人数
   * @format int32
   */
  unRelateNumber: number;
  /**
   * @description
   *   人员
   */
  users: Array<any>;
}

/**
 * @description
 *   场景预案之应急指挥体系出参
 */
export interface SceneGroupListOutput {
  /**
   * @description
   *   通讯录id
   * @format int32
   */
  groupId: number;
  /**
   * @description
   *   通讯录名称
   */
  groupName: string;
  /**
   * @description
   *   通讯录角色分组
   */
  roleList: Array<SceneRoleGroupOutput>;
}

/**
 * @description
 *   场景预案之角色分组出参
 */
export interface SceneRoleGroupOutput {
  /**
   * @description
   *   分组职责
   */
  roleDuty: string;
  /**
   * @description
   *   角色id
   * @format int64
   */
  roleId: number;
  /**
   * @description
   *   角色名称
   */
  roleName: string;
  /**
   * @description
   *   组内人员列表
   */
  rolePersonList: Array<SceneRolePersonOutput>;
}

/**
 * @description
 *   场景预案之应急指挥体系应急角色人员列表
 */
export interface SceneRolePersonOutput {
  /**
   * @description
   *   职责
   */
  duty: string;
  /**
   * @description
   *   人员itcode
   */
  itcode: string;
  /**
   * @description
   *   电话
   */
  phone: string;
  /**
   * @description
   *   职位
   */
  position: string;
  /**
   * @description
   *   角色
   */
  roleName: string;
  /**
   * @description
   *   人员姓名
   */
  username: string;
}

export interface SuperInput {
  /**
   * @description
   *   操作人所属实体编码
   */
  cpmoCop: string;
}

export interface Type {
  category: string;
  typeCode: string;
  typeName: string;
}

export interface TypeOutput {
  alarmList: Array<Type>;
  children: Array<Type>;
  rescue: Type;
  showDangerList: Array<Type>;
  treeData: any;
  typeCode: string;
  typeName: string;
}

export interface View {
  contentType: string;
}

export interface PageInfoEmergencyRoleListOutput {
  /** @format int64 */
  endRow: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  list: Array<EmergencyRoleListOutput>;
  /** @format int32 */
  navigateFirstPage: number;
  /** @format int32 */
  navigateLastPage: number;
  /** @format int32 */
  navigatePages: number;
  navigatepageNums: Array<number>;
  /** @format int32 */
  nextPage: number;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  pages: number;
  /** @format int32 */
  prePage: number;
  /** @format int32 */
  size: number;
  /** @format int64 */
  startRow: number;
  /** @format int64 */
  total: number;
}
