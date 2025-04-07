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
/**
 * @description
 *   任务反馈评价入参
 */
export interface AddRectifyEvaluateDto {
  /**
   * @description
   *   反馈详情id
   * @format int64
   */
  checkRectifyDetailId: number;
  /**
   * @description
   *   评价内容
   */
  evaluateContent: string;
  /**
   * @description
   *   评价等级
   */
  evaluateGrade: string;
  /**
   * @description
   *   评价是否需要反馈0：默认值，为空自动填充 1：需要，2：不需要
   * @format int32
   */
  feedBackSign: number;
  /**
   * @description
   *   问题照片，多个用逗号隔开
   */
  problemImg: string;
  /**
   * @description
   *   要求整改时间
   * @format date-time
   */
  requiredTime: string;
  /**
   * @description
   *   任务Id
   * @format int64
   */
  taskId: number;
}

export interface AddStandardCause {
  /** @format int64 */
  multipleConfigId: number;
  typeCode: string;
  typeName: string;
}

/**
 * @description
 *   通讯录信息
 */
export interface AddressBookDto {
  /**
   * @description
   *   企业编码
   */
  companyCode: string;
  createTime: string;
  /** @format byte */
  deleteFlag: string;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   是否是网格长,0是1否
   */
  isReseauLeader: string;
  /**
   * @description
   *   职位/备注
   */
  job: string;
  /**
   * @description
   *   姓名
   */
  name: string;
  /**
   * @description
   *   所属网络
   */
  netWorkArea: string;
  /**
   * @description
   *   电话号码
   */
  phone: string;
  phones: Array<string>;
  reseauLeader: string;
  reseauLeaderPhone: string;
  /**
   * @description
   *   场景: 1-管网，2-厂站，3-户内，4-工程，5-泛能,多个场景用逗号隔开
   */
  sceneCode: string;
  text: string;
  /** @format int32 */
  userId: number;
  userItCode: string;
  userName: string;
}

export interface AddressBookInputDto {
  companyCode: string;
  cpmoCop: string;
  message: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  phones: Array<string>;
  sceneCode: Array<string>;
  sceneCodeStr: string;
  userId: string;
}

export interface AddressBookUserIdDto {
  userId: string;
  userName: string;
}

export interface AlarmDisposalAttachmentDto {
  /** @format int64 */
  alarmId: number;
  fileName: string;
  fileUrl: string;
  /** @format int64 */
  id: number;
}

export interface AlarmDisposalProcessDto {
  /** @format int64 */
  alarmId: number;
  /** @format date-time */
  createTime: string;
  /** @format int64 */
  id: number;
  nodeContent: string;
  nodeName: string;
  operator: string;
  operatorPhone: string;
  /** @format int32 */
  sceneCode: number;
}

export interface AlarmDisposalProcessInputDto {
  /** @format int64 */
  alarmId: number;
  /** @format int32 */
  alarmStatus: number;
  /** @format date-time */
  createTime: string;
  groupCode: string;
  nodeContent: string;
  nodeName: string;
  operator: string;
  operatorPhone: string;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  statusCode: number;
  /** @format int32 */
  type: number;
}

export interface AlarmRewardViolationRecordDto {
  /**
   * @description
   *   告警二级表主键（场站是event_id）
   */
  alarmSecondId: string;
  /**
   * @description
   *   罚款或奖励金额
   */
  amount: number;
  /**
   * @description
   *   附件列表
   */
  attachmentList: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   创建人姓名
   */
  createUser: string;
  /**
   * @description
   *   违规或奖励项编码
   */
  dealCode: string;
  /**
   * @description
   *   违规或奖励项名称
   */
  dealName: string;
  /**
   * @description
   *   处理类型（1-违规项；2-奖励项）
   * @format int32
   */
  dealType: number;
  /**
   * @description
   *   主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   描述
   */
  remark: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景 ,5-泛能场景
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   违规或奖励目标编码
   */
  targetCode: string;
  /**
   * @description
   *   违规或奖励目标名称
   */
  targetName: string;
  /**
   * @description
   *   创建人电话
   */
  telephone: string;
  /**
   * @description
   *   处理单单号
   */
  ticketNo: string;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   更新人姓名
   */
  updateUser: string;
}

export interface AlarmRewardViolationRecordInputDto {
  /**
   * @description
   *   告警二级表主键（场站是event_id）
   * @example
   *   10000121
   */
  alarmSecondId: string;
  /**
   * @description
   *   罚款或奖励金额
   * @example
   *   10000121
   */
  amount: number;
  /**
   * @description
   *   附件列表
   */
  attachmentList: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   公司编码
   * @example
   *   0142
   */
  ccode: string;
  /**
   * @description
   *   创建人姓名
   * @example
   *   张三
   */
  createUser: string;
  /**
   * @description
   *   违规或奖励项编码
   * @example
   *   10000121
   */
  dealCode: string;
  /**
   * @description
   *   违规或奖励项名称
   * @example
   *   10000121
   */
  dealName: string;
  /**
   * @description
   *   处理类型（1-违规项；2-奖励项）
   * @format int32
   * @example
   *   10000121
   */
  dealType: number;
  /**
   * @description
   *   主键ID
   * @format int64
   * @example
   *   10000121
   */
  id: number;
  /**
   * @description
   *   项⽬id
   * @example
   *   10000121
   */
  proId: string;
  /**
   * @description
   *   描述
   * @example
   *   10000121
   */
  remark: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景 ,5-泛能场景
   * @format int32
   * @example
   *   10000121
   */
  sceneCode: number;
  /**
   * @description
   *   违规或奖励目标编码
   * @example
   *   10000121
   */
  targetCode: string;
  /**
   * @description
   *   违规或奖励目标名称
   * @example
   *   10000121
   */
  targetName: string;
  /**
   * @description
   *   创建人电话
   * @example
   *   13624223454
   */
  telephone: string;
  /**
   * @description
   *   处理单单号
   * @example
   *   10000121
   */
  ticketNo: string;
}

/**
 * @description
 *   告警示险说明
 */
export interface AlarmRiskDescriptionOutput {
  /**
   * @description
   *   告警示险编码
   */
  alarmRiskCode: string;
  /**
   * @description
   *   到场时长
   */
  arrivalDuration: string;
  /**
   * @description
   *   关单时长
   */
  closeDuration: string;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   创建人
   */
  createUser: string;
  /**
   * @description
   *   主键
   * @format int32
   */
  id: number;
  /**
   * @description
   *   等级
   */
  level: string;
  /**
   * @description
   *   告警示险名称
   */
  name: string;
  /**
   * @description
   *   注释|曾用名
   */
  notes: string;
  /**
   * @description
   *   响应时长
   */
  responseDuration: string;
  /**
   * @description
   *   规则
   */
  rule: string;
  /**
   * @description
   *   场景；1：管网，2：场站，3：户内，4：工程，5：泛能
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   二级场景
   */
  subScene: string;
  /**
   * @description
   *   类型:标准类，试点类，增值类
   */
  type: string;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   更新人
   */
  updateUser: string;
}

/**
 * @description
 *   告警示险关单评价历史记录输出dto
 */
export interface AlarmRiskEvaluationHistoryOutputDto {
  alarmRuleId: string;
  /**
   * @description
   *   告警/示险时间
   * @format date-time
   */
  alarmTime: string;
  /**
   * @description
   *   评价结果
   */
  appraise: string;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   公司
   */
  companyName: string;
  cpmoCop: string;
  /**
   * @description
   *   数据类型, 1有效,2无效
   * @format int32
   */
  dataType: number;
  /**
   * @description
   *   数据类型名称
   */
  dataTypeName: string;
  /**
   * @description
   *   设备编码
   */
  eqCode: string;
  /**
   * @description
   *   设备名称
   */
  eqName: string;
  /**
   * @description
   *   处置描述
   */
  evaluation: string;
  /**
   * @description
   *   记录eventId
   */
  eventId: string;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否是双密告警 是否可以删除 isDel == 1 不可删  isDel == 0 可删
   * @format int32
   */
  isDel: number;
  /**
   * @description
   *   是否评价： 0： 未评价， 1： 已评价
   * @format int32
   */
  isEvaluate: number;
  /**
   * @description
   *   告警级别， 1：高，2：中，3：低
   * @format int32
   */
  level: number;
  /**
   * @description
   *   位置
   */
  location: string;
  metricTargetPath: string;
  /**
   * @description
   *   名称标题
   */
  oldTypeName: string;
  /**
   * @description
   *   示险原因
   */
  riskReason: string;
  /**
   * @description
   *   告警原因
   */
  rootCause: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景，5：泛能
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   展示的状态名称
   */
  showStatusName: string;
  /**
   * @description
   *   状态
   * @format int32
   */
  statusCode: number;
  /**
   * @description
   *   状态名称
   */
  statusName: string;
  /**
   * @description
   *   二级分类：管网、聚安卫士、无人站
   */
  subCategory: Array<string>;
  subCategoryStr: string;
  /**
   * @description
   *   类型,1告警,2示险
   * @format int32
   */
  type: number;
  /**
   * @description
   *   类型code
   */
  typeCode: string;
  /**
   * @description
   *   告警或示险类型
   */
  typeCodes: Array<string>;
  /**
   * @description
   *   新名称标题
   */
  typeName: string;
  /**
   * @description
   *   焊机类型；1：热熔，2：电熔
   */
  weldMachineType: string;
  /** @format int32 */
  woStatus: number;
  /**
   * @description
   *   工单编号
   */
  workOrderNo: string;
}

/**
 * @description
 *   告警示险传入实体
 */
export interface AlarmShowDangerInputDto {
  /**
   * @description
   *   标题
   */
  alarmContent: string;
  /**
   * @description
   *   企业编码
   * @example
   *   0161
   */
  companyCode: string;
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  cpmoCop: string;
  endTime: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   0
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  /**
   * @description
   *   场景(数组)
   * @example
   *   \['1','2','3'\]
   */
  sceneCode: Array<string>;
  startTime: string;
  /**
   * @description
   *   处置状态(数组)
   * @example
   *   \['1','2','3'\]
   */
  statusCode: Array<string>;
  /**
   * @description
   *   是否评价： 0： 未评价， 1： 已评价
   * @example
   *   0
   */
  whetherEvaluate: Array<number>;
}

/**
 * @description
 *   其他中心告警示险传入实体
 */
export interface AlarmShowDangerOtherCentreInputDto {
  /**
   * @description
   *   标题
   */
  alarmContent: string;
  /**
   * @description
   *   查询数据的企业编码
   * @example
   *   10000800
   */
  cpmoCop: string;
  /**
   * @description
   *   当前管理实体代码
   * @example
   *   10000800
   */
  ecode: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   0
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  /**
   * @description
   *   场景(数组)
   * @example
   *   \['1','2','3'\]
   */
  sceneCode: Array<string>;
  /**
   * @description
   *   处置状态(数组)
   * @example
   *   \['1','2','3'\]
   */
  statusCode: Array<string>;
  /**
   * @description
   *   是否评价： 0： 未评价， 1： 已评价
   * @example
   *   0
   */
  whetherEvaluate: Array<number>;
}

/**
 * @description
 *   工作台改版告警示险抢险传入实体
 */
export interface AlarmShowDangerRescueInputDto {
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  cpmoCop: string;
  /**
   * @description
   *   是否评价： 0： 未评价， 1： 已评价
   * @format int32
   * @example
   *   0
   */
  isEvaluate: number;
  /**
   * @description
   *   类别 数组  1-告警  2-户内抢险 3-示险
   * @example
   *   1,2,3
   */
  module: Array<string>;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   0
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  /**
   * @description
   *   场景(数组)
   * @example
   *   1,2,3
   */
  sceneCode: Array<string>;
  /**
   * @description
   *   处置状态 0-全部 1-待处置 4-处置中
   * @format int32
   * @example
   *   1
   */
  statusCode: number;
}

/**
 * @description
 *   告警示险户内抢险输出DTO
 */
export interface AlarmShowDangerRescueOutputDto {
  /**
   * @description
   *   是否开启自动派单标识(0未开启 1开启)
   * @format int32
   */
  autoStatus: number;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   标题
   */
  content: string;
  /**
   * @description
   *   告警示险抢险详情id
   */
  eventId: string;
  /**
   * @description
   *   告警示险抢险时间
   */
  happenTime: string;
  /**
   * @description
   *   主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否评价： 0： 未评价， 1： 已评价
   * @format int32
   */
  isEvaluate: number;
  /**
   * @description
   *   纬度
   */
  latitude: number;
  /**
   * @description
   *   告警级别 1-高 2-中 3-低
   * @format int32
   */
  level: number;
  /**
   * @description
   *   位置
   */
  location: string;
  /**
   * @description
   *   经度
   */
  longitude: number;
  /**
   * @description
   *   分类 1-告警  2-户内抢险 3-示险
   * @format int32
   */
  module: number;
  /**
   * @description
   *   示险-压力试验异常试验类型（1强度，2气密）
   */
  pressureTestType: string;
  /**
   * @description
   *   负责人
   */
  principal: string;
  /**
   * @description
   *   负责人电话
   */
  principalPhone: string;
  /**
   * @description
   *   项目ID
   */
  projectId: string;
  /**
   * @description
   *   告警/示险/户内抢险 原因
   */
  reason: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景，5：泛能
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   展示的状态名称
   */
  showStatusName: string;
  /**
   * @description
   *   状态， 1-待处置，4-处置中，5-已解除
   * @format int32
   */
  statusCode: number;
  /**
   * @description
   *   状态名称
   */
  statusName: string;
  /**
   * @description
   *   超时标识（1超时，0不超时）
   * @format int32
   */
  timeOut: number;
  /**
   * @description
   *   类型code
   */
  typeCode: string;
  /**
   * @description
   *   焊机类型；1：热熔，2：电熔
   */
  weldMachineType: string;
  /**
   * @description
   *   发起工单状态（0：未发起 1 发起 3 已完结）
   * @format int32
   */
  woStatus: number;
}

export interface AlarmStandardCauseInputDto {
  ecode: string;
  enable: boolean;
  sceneCode: string;
  typeCode: string;
}

export interface AlarmStandardCauseUpdDto {
  content: string;
  /** @format int64 */
  id: number;
}

/**
 * @description
 *   告警更新评论标记传入dto(管网)
 */
export interface AlarmUpdatePipIputDto {
  /**
   * @description
   *   告警设备指标主键id(主表，设备指标)
   */
  alarmId: string;
  /**
   * @description
   *   二级表id
   * @format int64
   * @example
   *   1
   */
  alarmMsgId: number;
  /**
   * @description
   *   评论
   * @example
   *   此处评论
   */
  evaluation: string;
  /**
   * @description
   *   处置人itcode
   */
  handleUserItcode: string;
  /**
   * @description
   *   处置人姓名
   */
  handleUserName: string;
  /**
   * @description
   *   处置人电话
   */
  handleUserPhone: string;
  /**
   * @description
   *   一级主表id
   * @format int64
   * @example
   *   123
   */
  id: number;
  /**
   * @description
   *   处置状态编码
   * @format int32
   * @example
   *   1
   */
  statusCode: number;
  /**
   * @description
   *   发起工单状态
   * @format int32
   */
  woStatus: number;
}

export interface AlarmWorkbenchDto {
  alarmContent: string;
  alarmContentNew: string;
  /** @format date-time */
  alarmTime: string;
  alarmTypeCode: string;
  /** @format int32 */
  autoStatus: number;
  companyCode: string;
  /** @format date-time */
  createTime: string;
  evaluation: string;
  eventId: string;
  /** @format int64 */
  id: number;
  latitude: number;
  levTotalDto: LevTotalDto;
  /** @format int32 */
  level: number;
  location: string;
  longitude: number;
  orgId: string;
  projectId: string;
  projectName: string;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  statusCode: number;
  /** @format int32 */
  timeout: number;
  weldMachineType: string;
  /** @format int32 */
  woStatus: number;
}

export interface AnalyseRewardViolationRecordDto {
  /**
   * @description
   *   罚款或奖励金额
   */
  amount: number;
  /**
   * @description
   *   附件列表
   */
  attachmentList: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   创建人姓名
   */
  createUser: string;
  /**
   * @description
   *   违规或奖励项编码
   */
  dealCode: string;
  /**
   * @description
   *   违规或奖励项名称
   */
  dealName: string;
  /**
   * @description
   *   处理类型（1-违规项；2-奖励项）
   * @format int32
   */
  dealType: number;
  /**
   * @description
   *   主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   项目ID
   */
  proId: string;
  /**
   * @description
   *   描述
   */
  remark: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景 ,5-泛能场景
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   违规或奖励目标编码
   */
  targetCode: string;
  /**
   * @description
   *   违规或奖励目标名称
   */
  targetName: string;
  /**
   * @description
   *   创建人电话
   */
  telephone: string;
  /**
   * @description
   *   处理单单号
   */
  ticketNo: string;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   更新人姓名
   */
  updateUser: string;
}

export interface AnalyseRewardViolationRecordInputDto {
  /**
   * @description
   *   罚款或奖励金额
   * @example
   *   10000121
   */
  amount: number;
  /**
   * @description
   *   附件列表
   */
  attachmentList: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   公司编码
   * @example
   *   0142
   */
  ccode: string;
  /**
   * @description
   *   创建人姓名
   * @example
   *   张三
   */
  createUser: string;
  /**
   * @description
   *   违规或奖励项编码
   * @example
   *   10000121
   */
  dealCode: string;
  /**
   * @description
   *   违规或奖励项名称
   * @example
   *   10000121
   */
  dealName: string;
  /**
   * @description
   *   处理类型（1-违规项；2-奖励项）
   * @format int32
   * @example
   *   10000121
   */
  dealType: number;
  /**
   * @description
   *   主键ID
   * @format int64
   * @example
   *   10000121
   */
  id: number;
  /**
   * @description
   *   项目ID
   * @example
   *   10000121
   */
  proId: string;
  /**
   * @description
   *   描述
   * @example
   *   10000121
   */
  remark: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景 ,5-泛能场景
   * @format int32
   * @example
   *   10000121
   */
  sceneCode: number;
  /**
   * @description
   *   违规或奖励目标编码
   * @example
   *   10000121
   */
  targetCode: string;
  /**
   * @description
   *   违规或奖励目标名称
   * @example
   *   10000121
   */
  targetName: string;
  /**
   * @description
   *   创建人电话
   * @example
   *   13624223454
   */
  telephone: string;
  /**
   * @description
   *   处理单单号
   * @example
   *   10000121
   */
  ticketNo: string;
}

export interface AnalysisConfigDto {
  /** @format int32 */
  checkedSortCode: number;
  companyCode: string;
  compareSymbols: string;
  contentCode: string;
  contentName: string;
  createTime: string;
  data: {
    [propertyName: string]: any;
  };
  /** @format int64 */
  id: number;
  /** @format int32 */
  isChecked: number;
  kpiDataUpdateTime: string;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  sortCode: number;
  threshold: string;
  updateUser: string;
}

export interface AnalysisConfigInputDto {
  /**
   * @description
   *   企业编码
   * @example
   *   0161
   */
  companyCode: string;
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  cpmoCop: string;
  /**
   * @description
   *   是否只显示当前月份数据
   * @format int32
   * @example
   *   1：当前月份，null：不是
   */
  currentMonth: number;
  /**
   * @description
   *   主键
   * @format int64
   * @example
   *   161
   */
  id: number;
  /**
   * @description
   *   是否选中标识
   * @format int32
   * @example
   *   161
   */
  isChecked: number;
  /**
   * @description
   *   场景
   * @example
   *   1
   */
  sceneCode: Array<string>;
}

export interface AnalysisConfigItemInputDto {
  /**
   * @description
   *   动作 插入：0，更新：1
   * @format int32
   */
  action: number;
  compareSymbols: string;
  contentCode: string;
  ecode: string;
  /** @format double */
  threshold: number;
}

export interface AnalysisConfigItemOutputDto {
  compareSymbols: string;
  contentCode: string;
  contentName: string;
  sceneName: string;
  threshold: string;
}

export interface AnalysisConfigItemPageInputDto {
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  ecode: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   0
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
}

export interface AnalysisConfigPullDownItemOutputDto {
  contentCode: string;
  contentName: string;
  sceneName: string;
}

/**
 * @description
 *   分析预测排序入参
 */
export interface AnalysisConfigSortInputDto {
  /**
   * @description
   *   选中后的排序编号
   * @format int32
   * @example
   *   1
   */
  checkedSortCode: number;
  /**
   * @description
   *   主键
   * @format int64
   * @example
   *   12345678
   */
  id: number;
}

export interface AnnouncementAttachmentDto {
  /** @format int64 */
  announcementId: number;
  /** @format date-time */
  createTime: string;
  createUser: string;
  deleteFlag: boolean;
  fileName: string;
  fileUrl: string;
  /** @format int64 */
  id: number;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
}

export interface AnnouncementDto {
  announcementAttachmentDtoList: Array<AnnouncementAttachmentDto>;
  body: string;
  /** @format int32 */
  cacheTime: number;
  /** @format date-time */
  createTime: string;
  createUser: string;
  deleteFlag: boolean;
  /** @format int64 */
  id: number;
  pubTime: string;
  /** @format date-time */
  publishTime: string;
  /** @format int32 */
  status: number;
  title: string;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
}

export interface AnnouncementInputDto {
  endCreateTime: string;
  endpublishTime: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  startCreateTime: string;
  startpublishTime: string;
  /** @format int32 */
  status: number;
  title: string;
}

export interface AreaDutyPersonConfigOutputDto {
  /**
   * @description
   *   区域类型
   * @format int32
   */
  areaType: number;
  /**
   * @description
   *   公司编码
   */
  companyCodes: Array<string>;
}

/**
 * @description
 *   区域责任人配置详情
 */
export interface AreaDutyPersonDetail {
  /**
   * @description
   *   区域类型
   * @format int32
   */
  areaType: number;
  /**
   * @description
   *   公司编码
   */
  companyCodes: Array<string>;
}

/**
 * @description
 *   区域责任人保存入参
 */
export interface AreaDutyPersonInputDto {
  /**
   * @description
   *   公司配置信息
   */
  areaDutyPersonDetails: Array<AreaDutyPersonDetail>;
  /**
   * @description
   *   管理实体编码
   */
  ecode: string;
  /**
   * @description
   *   多元配置ID
   * @format int64
   */
  multipleConfigId: number;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
}

export interface AutoDisposalDto {
  /** @format int32 */
  areaType: number;
  autoDispatchEnable: boolean;
  autoNotifyEnable: boolean;
  autoResolveEnable: boolean;
  /** @format date-time */
  createTime: string;
  createUser: string;
  deleteFlag: boolean;
  /** @format int32 */
  dispatchAcceptWoTime: number;
  /** @format int32 */
  dispatchArrivalTime: number;
  dispatchArrivalTimeUnit: string;
  enable: boolean;
  /** @format int64 */
  id: number;
  /** @format int64 */
  multipleConfigId: number;
  notifyChannels: Array<string>;
  /** @format int32 */
  notifyDelaySec: number;
  notifyMode: string;
  notifyNightModeEnable: boolean;
  notifyNightModeEnd: LocalTime;
  notifyNightModeStart: LocalTime;
  notifyRoles: Array<AutoNotifyRoleDto>;
  /** @format int32 */
  notifyTimes: number;
  /** @format int32 */
  resolveHourLower: number;
  /** @format int32 */
  resolveHourUpper: number;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
}

/**
 * @description
 *   自动处置配置入参
 */
export interface AutoDisposalInputDto {
  /**
   * @description
   *   责任人取值配置项
   * @format int32
   */
  areaType: number;
  /**
   * @description
   *   自动派单是否启用
   */
  autoDispatchEnable: boolean;
  /**
   * @description
   *   自动通知是否启用
   */
  autoNotifyEnable: boolean;
  /**
   * @description
   *   自动解除是否启用
   */
  autoResolveEnable: boolean;
  /**
   * @description
   *   要求接单时间
   * @format int32
   */
  dispatchAcceptWoTime: number;
  /**
   * @description
   *   派单要求到达时间
   * @format int32
   */
  dispatchArrivalTime: number;
  /**
   * @description
   *   派单要求到达时间单位
   */
  dispatchArrivalTimeUnit: string;
  /**
   * @description
   *   是否启用
   */
  enable: boolean;
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   多元配置ID
   * @format int64
   */
  multipleConfigId: number;
  /**
   * @description
   *   通知渠道
   */
  notifyChannels: Array<string>;
  /**
   * @description
   *   通知延时秒数
   * @format int32
   */
  notifyDelaySec: number;
  /**
   * @description
   *   通知模式
   */
  notifyMode: string;
  /**
   * @description
   *   夜间模式是否启用
   */
  notifyNightModeEnable: boolean;
  /**
   * @description
   *   夜间模式结束时间
   */
  notifyNightModeEnd: string;
  /**
   * @description
   *   夜间模式开始时间
   */
  notifyNightModeStart: string;
  /**
   * @description
   *   通知角色
   */
  notifyRoles: Array<AutoNotifyRoleInputDto>;
  /**
   * @description
   *   通知次数
   * @format int32
   */
  notifyTimes: number;
  /**
   * @description
   *   解除条件小时数下限
   * @format int32
   */
  resolveHourLower: number;
  /**
   * @description
   *   解除条件小时数上限
   * @format int32
   */
  resolveHourUpper: number;
}

export interface AutoNotifyRoleDto {
  /** @format int64 */
  autoDisposalId: number;
  /** @format date-time */
  createTime: string;
  createUser: string;
  deleteFlag: boolean;
  /** @format int64 */
  id: number;
  /** @format int32 */
  order: number;
  role: string;
  /** @format int32 */
  sceneCode: number;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
}

/**
 * @description
 *   自动通知角色入参
 */
export interface AutoNotifyRoleInputDto {
  /**
   * @description
   *   顺序
   * @format int32
   */
  order: number;
  /**
   * @description
   *   角色
   */
  role: string;
  /**
   * @description
   *   角色所属场景编码
   * @format int32
   */
  sceneCode: number;
}

/**
 * @description
 *   分析预测详情—球机信息
 */
export interface BallheadCameraDto {
  /**
   * @description
   *   智能分析提示
   */
  analysisPrompt: string;
  /**
   * @description
   *   项目所属公司编码
   */
  ccode: string;
  /**
   * @description
   *   球机编码
   */
  code: string;
  /**
   * @description
   *   设备类型
   */
  deviceType: string;
  /**
   * @description
   *   球机名称
   */
  name: string;
  /**
   * @description
   *   项目ID
   * @format int64
   */
  projectId: number;
  /**
   * @description
   *   项目经理姓名
   */
  projectManagerName: string;
  /**
   * @description
   *   项目经理电话
   */
  projectManagerPhone: string;
  /**
   * @description
   *   项目名称
   */
  projectName: string;
  /**
   * @description
   *   回放截止时间
   * @format date-time
   */
  replayTimeEnd: string;
  /**
   * @description
   *   回放起始时间
   * @format date-time
   */
  replayTimeStart: string;
  /**
   * @description
   *   在线状态 1在线 0离线
   * @format int32
   */
  status: number;
}

/**
 * @description
 *   批量删除入参Dto
 */
export interface BatchDelRecordInputDto {
  /**
   * @description
   *   事件ID列表
   */
  eventIdList: Array<string>;
  /**
   * @description
   *   主键ID列表（危险作业是二级表ID，其他事一级表ID）
   * @example
   *   \{132323,2312}\
   */
  idList: Array<number>;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景，5：泛能
   * @format int32
   * @example
   *   1
   */
  sceneCode: number;
  /**
   * @description
   *   类型，1：告警，2：示险，3：关单评价，4：危险作业，5：户内抢险
   * @format int32
   * @example
   *   1
   */
  typeCode: number;
  /**
   * @description
   *   作业类别编码(管网专用)：4：碰接（带气动火），5：置换作业，6：有限空间,7:碰接（新）
   * @format int32
   * @example
   *   4
   */
  workTypeCode: number;
  /**
   * @description
   *   工作流表单编号
   * @example
   *   SC123123123213
   */
  workflowNo: string;
}

export interface ChangeDutyReqDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   日期 yyyy-MM-dd
   */
  dutyDate: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   当前登录人itcode
   */
  itCode: string;
  /**
   * @description
   *   待交换的人员itcode
   */
  otherItCode: string;
  /**
   * @description
   *   岗位编号
   * @format int64
   */
  positionId: number;
}

export interface CheckInReqDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   日期 yyyy-MM-dd
   */
  dutyDate: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   人员itcode
   */
  itCode: string;
  /**
   * @description
   *   岗位编号
   * @format int64
   */
  positionId: number;
}

export interface CheckKeyProcessDict {
  code: string;
  createTime: string;
  deleteFlag: boolean;
  /** @format int32 */
  id: number;
  /** @format int32 */
  level: number;
  name: string;
  /** @format int32 */
  parentId: number;
}

export interface CheckProportionDto {
  /** @format int64 */
  id: number;
  /** @format int64 */
  multipleConfigId: number;
  /** @format int32 */
  proportion: number;
}

/**
 * @description
 *   常规监察比例保存入参
 */
export interface CheckProportionSaveInputDto {
  /**
   * @description
   *   常规监察类型
   */
  checkTypeCode: string;
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   多元配置ID
   * @format int64
   */
  multipleConfigId: number;
  /**
   * @description
   *   抽查比例
   * @format int32
   */
  proportion: number;
}

export interface CheckRectifyInputDto {
  /**
   * @description
   *   责任人
   */
  assignUser: string;
  /**
   * @description
   *   业务类型
   */
  businessType: string;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   处理组织
   */
  dealOrg: string;
  /**
   * @description
   *   企业实体编码
   */
  ecode: string;
  /**
   * @description
   *   结束 反馈时间
   */
  endFeedBackTime: string;
  /**
   * @description
   *   结束 要求整改时间
   */
  endRequiredTime: string;
  /**
   * @description
   *   反馈状态
   */
  feedbackState: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   0
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  /**
   * @description
   *   场景：1 管网
   */
  scene: string;
  /**
   * @description
   *   开始 反馈时间
   */
  startFeedBackTime: string;
  /**
   * @description
   *   开始 要求整改时间
   */
  startRequiredTime: string;
  /**
   * @description
   *   任务编号
   */
  taskCode: string;
  /**
   * @description
   *   反馈编码
   */
  woCode: string;
}

export interface CheckRectifyOutputDto {
  /**
   * @description
   *   地址
   */
  address: string;
  /**
   * @description
   *   发起人
   */
  appraisePerson: string;
  /**
   * @description
   *   发起人电话
   */
  appraisePhone: string;
  /**
   * @description
   *   评价结果 0 不合格 1 合格
   * @format int32
   */
  appraiseResult: number;
  /**
   * @description
   *   发起时间
   */
  appraiseTime: string;
  /**
   * @description
   *   责任人
   */
  assignUser: string;
  /**
   * @description
   *   责任人itcode
   */
  assignUserCode: string;
  /**
   * @description
   *   业务类型编码
   */
  businessType: string;
  /**
   * @description
   *   业务类型
   */
  businessTypeName: string;
  /**
   * @description
   *   处理组织（所属站点）
   */
  dealOrg: string;
  /**
   * @description
   *   企业编码
   */
  ecode: string;
  /**
   * @description
   *   设备编号
   */
  eqModel: string;
  /**
   * @description
   *   设备名称
   */
  eqName: string;
  /**
   * @description
   *   反馈状态
   */
  feedbackState: string;
  /** @format int64 */
  id: number;
  locCode: string;
  /**
   * @description
   *   所属区域
   */
  organName: string;
  /**
   * @description
   *   问题描述
   */
  problemDesc: string;
  /** @format int32 */
  queryFlag: number;
  /**
   * @description
   *   问题图片
   */
  requiredImg: string;
  /**
   * @description
   *   要求整改时间
   */
  requiredTime: string;
  /**
   * @description
   *   奖励项
   */
  rewards: string;
  /**
   * @description
   *   场景  1:管网
   * @format int32
   */
  scene: number;
  /**
   * @description
   *   来源id
   */
  sourceId: string;
  /**
   * @description
   *   任务编号
   */
  taskCode: string;
  /**
   * @description
   *   任务完成时间（反馈时间）
   */
  taskCompleteTime: string;
  /**
   * @description
   *   任务类型 0:常规  1:临时
   * @format int32
   */
  taskType: number;
  /**
   * @description
   *   违规项
   */
  violation: string;
  /**
   * @description
   *   工单编号
   */
  woCode: string;
}

export interface CheckRewardViolationRecordDto {
  /**
   * @description
   *   罚款或奖励金额
   */
  amount: number;
  /**
   * @description
   *   附件列表
   */
  attachmentList: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   常规监察二级表主键或者分组ID
   */
  checkSecondId: string;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   创建人姓名
   */
  createUser: string;
  /**
   * @description
   *   违规或奖励项编码
   */
  dealCode: string;
  /**
   * @description
   *   违规或奖励项名称
   */
  dealName: string;
  /**
   * @description
   *   处理类型（1-违规项；2-奖励项）
   * @format int32
   */
  dealType: number;
  /**
   * @description
   *   主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   描述
   */
  remark: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景 ,5-泛能场景
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   违规或奖励目标编码
   */
  targetCode: string;
  /**
   * @description
   *   违规或奖励目标名称
   */
  targetName: string;
  /**
   * @description
   *   创建人电话
   */
  telephone: string;
  /**
   * @description
   *   处理单单号
   */
  ticketNo: string;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   更新人姓名
   */
  updateUser: string;
}

export interface CheckRewardViolationRecordInputDto {
  /**
   * @description
   *   罚款或奖励金额
   * @example
   *   10000121
   */
  amount: number;
  /**
   * @description
   *   附件列表
   */
  attachmentList: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   公司编码
   * @example
   *   0412
   */
  ccode: string;
  /**
   * @description
   *   常规监察二级表主键或者分组ID
   * @example
   *   10000121
   */
  checkSecondId: string;
  /**
   * @description
   *   创建人姓名
   * @example
   *   张三
   */
  createUser: string;
  /**
   * @description
   *   违规或奖励项编码
   * @example
   *   10000121
   */
  dealCode: string;
  /**
   * @description
   *   违规或奖励项名称
   * @example
   *   10000121
   */
  dealName: string;
  /**
   * @description
   *   处理类型（1-违规项；2-奖励项）
   * @format int32
   * @example
   *   10000121
   */
  dealType: number;
  /**
   * @description
   *   主键ID
   * @format int64
   * @example
   *   10000121
   */
  id: number;
  /**
   * @description
   *   项⽬id
   * @example
   *   10000121
   */
  proId: string;
  /**
   * @description
   *   描述
   * @example
   *   10000121
   */
  remark: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景 ,5-泛能场景
   * @format int32
   * @example
   *   10000121
   */
  sceneCode: number;
  /**
   * @description
   *   违规或奖励目标编码
   * @example
   *   10000121
   */
  targetCode: string;
  /**
   * @description
   *   违规或奖励目标名称
   * @example
   *   10000121
   */
  targetName: string;
  /**
   * @description
   *   创建人电话
   * @example
   *   13624223454
   */
  telephone: string;
  /**
   * @description
   *   处理单单号
   * @example
   *   10000121
   */
  ticketNo: string;
}

export interface CheckWorkbenchDetailDto {
  checkContent: string;
  checkTypeCode: string;
  checkTypeDesc: string;
  /** @format int32 */
  sceneCode: number;
  superviseStatus: string;
  /** @format int32 */
  supervisedCount: number;
  /** @format int32 */
  unqualifiedCount: number;
  /** @format int32 */
  unsupervisedCount: number;
  /** @format int32 */
  workCount: number;
}

export interface CheckWorkbenchDto {
  checkContent: string;
  checkTypeCode: string;
  /** @format int32 */
  checkedCount: number;
  companyCode: string;
  createTime: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  totalCount: number;
  /** @format int32 */
  unqualifiedCount: number;
}

/**
 * @description
 *   告警示险传入实体
 */
export interface CheckWorkbenchInputDto {
  /**
   * @description
   *   标题
   */
  alarmContent: string;
  /**
   * @description
   *   企业编码
   * @example
   *   0161
   */
  companyCode: string;
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  cpmoCop: string;
  endTime: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   0
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  /**
   * @description
   *   场景(数组)
   * @example
   *   \['1','2','3'\]
   */
  sceneCode: Array<string>;
  startTime: string;
  /**
   * @description
   *   处置状态(数组)
   * @example
   *   \['1','2','3'\]
   */
  statusCode: Array<string>;
  /**
   * @description
   *   是否评价： 0： 未评价， 1： 已评价
   * @example
   *   0
   */
  whetherEvaluate: Array<number>;
}

export interface CheckWorkbenchNewInputDto {
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  cpmoCop: string;
  /**
   * @description
   *   场景(数组)
   * @example
   *   \['1','2','3'\]
   */
  sceneCode: Array<string>;
}

export interface CheckWorkbenchTitleDto {
  /**
   * @description
   *   今日评价数
   * @format int32
   */
  evaluateCount: number;
  /**
   * @description
   *   今日评价不合格数
   * @format int32
   */
  unqualifiedCount: number;
}

export interface CollectRewardViolationRecordDto {
  amount: number;
  createTime: string;
  dealCode: string;
  dealName: string;
  /** @format int32 */
  dealType: number;
  /** @format int64 */
  id: number;
  /** @format int64 */
  portraitId: number;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  sendStatus: number;
  targetCode: string;
  targetName: string;
  type: string;
}

export interface CollectRewardViolationRecordInputDto {
  /** @format int32 */
  dealType: number;
  /** @format int32 */
  moduleCode: number;
  /** @format int64 */
  portraitId: number;
}

export interface CompanyCodeDTO {
  companyCode: string;
}

export interface CompanyDetail {
  /**
   * @description
   *   已配置推送的icome账号list，多个用逗号隔开
   */
  accountList: string;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
}

export interface CompanyInfo {
  /**
   * @description
   *   已配置推送的icome账号list，多个用逗号隔开
   */
  accountList: string;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   公司名称
   */
  companyCodeName: string;
}

/**
 * @description
 *   提交评价详情入参
 */
export interface ConfinedSpaceDangerAppraiseDto {
  /**
   * @description
   *   评价详情
   */
  appraise: string;
  /**
   * @description
   *   处置记录
   */
  dispose: string;
  /**
   * @description
   *   操作环境识别-1：三脚架，2：风机，3：氧气面罩，4：安全帽，5：四合一监测仪，6：安全带，7：对讲机
   */
  secureAiRecognitionList: string;
  /**
   * @description
   *   评价（0 不合格 1 合格 2 优秀） 不修改不传参数或者为null
   * @format int32
   */
  statusCode: number;
  /**
   * @description
   *   作业编号
   */
  workNo: string;
}

export interface ConfinedSpaceDangerDeviceDto {
  /**
   * @description
   *   作业地址
   */
  address: string;
  /**
   * @description
   *   设备类型
   */
  deviceType: string;
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   设备名称
   */
  name: string;
  /**
   * @description
   *   作业编号
   */
  workNo: string;
}

/**
 * @description
 *   有限空间
 */
export interface ConfinedSpaceDetailDto {
  /**
   * @description
   *   作业地址
   */
  address: string;
  /**
   * @description
   *   申请报备人员
   */
  applyPersonnel: string;
  /**
   * @description
   *   评价
   */
  appraise: string;
  /**
   * @description
   *   企业编码
   */
  companyCode: string;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   数据参数jsonArray
   */
  detectorMeterList: string;
  /**
   * @description
   *   气体检测仪仪表照片
   */
  detectorMonitorImage: string;
  /**
   * @description
   *   设备列表
   */
  deviceList: Array<ConfinedSpaceDangerDeviceDto>;
  /**
   * @description
   *   处置记录
   */
  dispose: string;
  /**
   * @description
   *   作业监控视频
   */
  monitorVideo: string;
  /**
   * @description
   *   现场指挥人员
   */
  operationPersonnel: string;
  /**
   * @description
   *   流程人员jsonArray
   */
  personList: string;
  /**
   * @description
   *   作业计划时间
   */
  planDate: string;
  /**
   * @description
   *   计划名称
   */
  planName: string;
  /**
   * @description
   *   报备时间
   */
  reportTime: string;
  /**
   * @description
   *   操作环境识别- 1：三脚架，2：风机，3：氧气面罩，n4：安全帽，5：四合一监测仪，n6：安全带，7：对讲机
   */
  secureAiRecognitionList: string;
  /**
   * @description
   *   作业报备照片
   */
  secureReportImage: string;
  /**
   * @description
   *   处理环节
   */
  status: string;
  /**
   * @description
   *   评价-等级（0 优秀 1 合格 2 不合格）
   * @format int32
   */
  statusCode: number;
  /**
   * @description
   *   现场监护人员
   */
  supervisoryPersonnel: string;
  /**
   * @description
   *   修改时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   作业实际时间
   */
  workDate: string;
  /**
   * @description
   *   完成时间
   */
  workFinishTime: string;
  /**
   * @description
   *   作业编号
   */
  workNo: string;
  /**
   * @description
   *   现场工作人员
   */
  workPersonnel: string;
  /**
   * @description
   *   作业名称
   */
  workTitle: string;
  /**
   * @description
   *   审批工作流路径
   */
  workflowUrl: string;
}

/**
 * @description
 *   有限空间
 */
export interface ConfinedSpacePageDto {
  /**
   * @description
   *   作业地址
   */
  address: string;
  /**
   * @description
   *   企业编码
   */
  companyCode: string;
  /**
   * @description
   *   气体检测仪仪表照片
   */
  detectorMonitorImage: string;
  /**
   * @description
   *   作业监控视频
   */
  monitorVideo: string;
  /**
   * @description
   *   作业计划时间
   */
  planDate: string;
  /**
   * @description
   *   计划名称
   */
  planName: string;
  /**
   * @description
   *   作业报备照片
   */
  secureReportImage: string;
  /**
   * @description
   *   处理环节 (0 未进行 1 进行中 2 已完成)
   */
  status: string;
  /**
   * @description
   *   作业实际时间
   */
  workDate: string;
  /**
   * @description
   *   作业编号
   */
  workNo: string;
  /**
   * @description
   *   作业名称
   */
  workTitle: string;
  /**
   * @description
   *   审批工作流路径
   */
  workflowUrl: string;
}

export interface ContingencyPlanDto {
  fileName: string;
  fileUrl: string;
  /** @format int64 */
  id: number;
  /** @format int64 */
  multipleConfigId: number;
}

export interface CpmoCopTreeDto {
  code: string;
  name: string;
  treeList: Array<CpmoCopTreeDto>;
}

export interface CurrentDayEvaluateInputDto {
  checkTypeCode: string;
  ecode: string;
  itcode: string;
}

export interface DangerListDTO {
  label: string;
  value: string;
}

export interface DangerRedisInputDTO {
  cpmoCop: string;
  woCode: string;
  /** @format int32 */
  workTypeCode: number;
}

export interface DangerRewardViolationRecordDto {
  /**
   * @description
   *   罚款或奖励金额
   */
  amount: number;
  /**
   * @description
   *   附件列表
   */
  attachmentList: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   创建人姓名
   */
  createUser: string;
  /**
   * @description
   *   危险作业二级表主键
   */
  dangerSecondId: string;
  /**
   * @description
   *   违规或奖励项编码
   */
  dealCode: string;
  /**
   * @description
   *   违规或奖励项名称
   */
  dealName: string;
  /**
   * @description
   *   处理类型（1-违规项；2-奖励项）
   * @format int32
   */
  dealType: number;
  /**
   * @description
   *   主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   描述
   */
  remark: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景 ,5-泛能场景
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   违规或奖励目标编码
   */
  targetCode: string;
  /**
   * @description
   *   违规或奖励目标名称
   */
  targetName: string;
  /**
   * @description
   *   创建人电话
   */
  telephone: string;
  /**
   * @description
   *   处理单单号
   */
  ticketNo: string;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   更新人姓名
   */
  updateUser: string;
}

export interface DangerRewardViolationRecordInputDto {
  /**
   * @description
   *   罚款或奖励金额
   * @example
   *   10000121
   */
  amount: number;
  /**
   * @description
   *   附件列表
   */
  attachmentList: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   公司编码
   * @example
   *   0412
   */
  ccode: string;
  /**
   * @description
   *   创建人姓名
   * @example
   *   张三
   */
  createUser: string;
  /**
   * @description
   *   危险作业二级表主键
   * @example
   *   10000121
   */
  dangerSecondId: string;
  /**
   * @description
   *   违规或奖励项编码
   * @example
   *   10000121
   */
  dealCode: string;
  /**
   * @description
   *   违规或奖励项名称
   * @example
   *   10000121
   */
  dealName: string;
  /**
   * @description
   *   处理类型（1-违规项；2-奖励项）
   * @format int32
   * @example
   *   10000121
   */
  dealType: number;
  /**
   * @description
   *   主键ID
   * @format int64
   * @example
   *   10000121
   */
  id: number;
  /**
   * @description
   *   项⽬id
   * @example
   *   10000121
   */
  proId: string;
  /**
   * @description
   *   描述
   * @example
   *   10000121
   */
  remark: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景 ,5-泛能场景
   * @format int32
   * @example
   *   10000121
   */
  sceneCode: number;
  /**
   * @description
   *   违规或奖励目标编码
   * @example
   *   10000121
   */
  targetCode: string;
  /**
   * @description
   *   违规或奖励目标名称
   * @example
   *   10000121
   */
  targetName: string;
  /**
   * @description
   *   创建人电话
   * @example
   *   13624223454
   */
  telephone: string;
  /**
   * @description
   *   处理单单号
   * @example
   *   10000121
   */
  ticketNo: string;
}

export interface DangerTypeDTO {
  dangersList: Array<DangerListDTO>;
  label: string;
  value: string;
}

export interface DangerousWorkInputDto {
  /**
   * @description
   *   企业编码
   * @example
   *   0161
   */
  companyCode: string;
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  cpmoCop: string;
  /**
   * @description
   *   是否只显示当前月份数据
   * @format int32
   * @example
   *   1：当前月份，null：不是
   */
  currentMonth: number;
  /**
   * @description
   *   主键
   * @format int64
   * @example
   *   161
   */
  id: number;
  /**
   * @description
   *   是否选中标识
   * @format int32
   * @example
   *   161
   */
  isChecked: number;
  /**
   * @description
   *   场景
   * @example
   *   1
   */
  sceneCode: Array<string>;
}

export interface DangerousWorkWorkbenchDto {
  /** @format int32 */
  aiCount: number;
  companyCode: string;
  /** @format int32 */
  deviceOnlineCount: number;
  /** @format int64 */
  id: number;
  /** @format int32 */
  newFlag: number;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  workCount: number;
  /** @format int32 */
  workTypeCode: number;
}

export interface DeviceConfigAddInputDto {
  /**
   * @description
   *   设备编码
   */
  deviceCode: string;
  /**
   * @description
   *   设备id
   */
  deviceId: string;
  /**
   * @description
   *   设备类型名称
   */
  deviceTypeName: string;
}

export interface DeviceInfoDetailsOutputDto {
  deviceCode: string;
  deviceId: string;
  deviceTypeName: string;
  endTime: string;
  /** @format int64 */
  id: number;
  shieldReason: string;
  shieldSystem: Array<string>;
  startTime: string;
}

export interface DeviceInfoOutputDto {
  deviceCode: string;
  deviceId: string;
  deviceName: string;
  deviceType: string;
  deviceTypeName: string;
}

export interface DevicePushConfigAddInputDto {
  /**
   * @description
   *   设备信息集合
   */
  configAddInputDtoList: Array<DeviceConfigAddInputDto>;
  /**
   * @description
   *   企业实体编码
   * @example
   *   10000800
   */
  ecode: string;
  /**
   * @description
   *   结束日期
   * @format date
   */
  endDate: string;
  /**
   * @description
   *   屏蔽/推送原因
   */
  reason: string;
  /**
   * @description
   *   开始日期
   * @format date
   */
  startDate: string;
  /**
   * @description
   *   屏蔽/推送系统
   */
  systemCodes: Array<string>;
  /**
   * @description
   *   数据类型：0：屏蔽：1：推送
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   物联设备推配置
 */
export interface DevicePushConfigOutputDto {
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   创建人
   */
  createUser: string;
  /**
   * @description
   *   设备编码
   */
  deviceCode: string;
  /**
   * @description
   *   设备id
   */
  deviceId: string;
  /**
   * @description
   *   设备类型
   */
  deviceType: string;
  /**
   * @description
   *   企业实体编码
   */
  ecode: string;
  /**
   * @description
   *   结束日期
   * @format date
   */
  endDate: string;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   原因
   */
  reason: string;
  /**
   * @description
   *   开始日期
   * @format date
   */
  startDate: string;
  /**
   * @description
   *   推送系统
   */
  systemCode: string;
  /**
   * @description
   *   数据类型：0：屏蔽：1：推送
   * @format int32
   */
  type: number;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   更新人
   */
  updateUser: string;
}

export interface DevicePushConfigQueryInputDto {
  deviceCode: string;
  deviceType: string;
  ecode: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   1
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  systemCode: string;
}

export interface DevicePushConfigUpdateInputDto {
  /**
   * @description
   *   结束日期
   * @format date
   */
  endDate: string;
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   屏蔽/推送原因
   */
  reason: string;
  /**
   * @description
   *   开始日期
   * @format date
   */
  startDate: string;
  /**
   * @description
   *   推送/屏蔽系统
   */
  systemCode: string;
}

export interface DisposalCommentShortcutDto {
  category: string;
  comment: string;
  /** @format int64 */
  id: number;
  /** @format int64 */
  multipleConfigId: number;
}

/**
 * @description
 *   快捷处置建议配置入参
 */
export interface DisposalCommentShortcutInputDto {
  /**
   * @description
   *   多元配置ID
   * @format int64
   */
  multipleConfigId: number;
  /**
   * @description
   *   快捷处置建议
   */
  shortcuts: Array<ShortcutInputDto>;
}

export interface DutyDateQueryDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   日期
   */
  dutyDate: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   用户itcode
   */
  itCode: string;
  /**
   * @description
   *   岗位编号
   * @format int64
   */
  positionId: number;
}

export interface DutyExportQueryDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   企业名称
   */
  corpName: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   月份 格式：yyyy-MM，默认当前月
   */
  month: string;
  /**
   * @description
   *   区域编码 当区域编码有值的时候  公司编码必传
   */
  organCode: string;
}

export interface DutyPositionVO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   公司名称
   */
  companyName: string;
  /**
   * @description
   *   创建时间
   */
  createTime: string;
  /**
   * @description
   *   值班开始时间 格式(HH:mm)
   */
  dutyBeginTime: string;
  /**
   * @description
   *   值班结束时间 格式(HH:mm)
   */
  dutyEndTime: string;
  /**
   * @description
   *   排班状态 1-正常排班 2-当月部分未排班 3-当月未排班
   * @format int32
   */
  dutyStatus: number;
  /**
   * @description
   *   实体代码
   */
  entityCode: string;
  /**
   * @description
   *   绿色通道联系人标志 0-否 1-是
   * @format int32
   */
  greenChannelContactFlag: number;
  /**
   * @description
   *   主键编号
   * @format int64
   */
  id: number;
  /**
   * @description
   *   区域编码
   */
  organCode: string;
  /**
   * @description
   *   区域名称
   */
  organName: string;
  /**
   * @description
   *   人员列表
   */
  personList: Array<PersonVO>;
  /**
   * @description
   *   岗位职责
   */
  positionDescription: string;
  /**
   * @description
   *   岗位名称
   */
  positionName: string;
  /**
   * @description
   *   岗位简称
   */
  positionShortName: string;
  /**
   * @description
   *   场景类型 1-户内 2-户外 3-厂站 4-其它 5-通用(默认类型)
   * @format int32
   */
  sceneType: number;
  /**
   * @description
   *   启用状态 0-禁用 1-启用
   * @format int32
   */
  status: number;
}

export interface DutyQueryDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   月份 格式：yyyy-MM，默认当前月
   */
  month: string;
  /**
   * @description
   *   区域编码 当区域编码有值的时候  公司编码必传
   */
  organCode: string;
}

export interface DutyReqDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   当前登录人的itcode
   */
  loginUserItCode: string;
  /**
   * @description
   *   当前登录人姓名
   */
  loginUserName: string;
  /**
   * @description
   *   月份 格式：yyyy-MM
   */
  month: string;
  /**
   * @description
   *   区域编码 当区域编码有值的时候  公司编码必传
   */
  organCode: string;
  /**
   * @description
   *   行数据
   */
  rows: Array<DutyRowVO>;
}

export interface DutyRowVO {
  /**
   * @description
   *   该日期岗位值班数据
   */
  data: Array<DutyVO>;
  /**
   * @description
   *   值班日期 示例：8月01日
   */
  dutyDate: string;
  /**
   * @description
   *   值班星期 示例：星期二
   */
  dutyWeek: string;
}

export interface DutyTableVO {
  /**
   * @description
   *   岗位列表
   */
  positions: Array<PositionVO>;
  /**
   * @description
   *   所有行数据
   */
  rows: Array<DutyRowVO>;
}

export interface DutyVO {
  /**
   * @description
   *   确认标志 0-未确认 1-已确认 2-待确认
   * @format int32
   */
  confirmFlag: number;
  /**
   * @description
   *   确认时间
   */
  confirmTime: string;
  /**
   * @description
   *   值班开始时间 HH:mm
   */
  dutyBeginTime: string;
  /**
   * @description
   *   值班日期 yyyy-MM-dd
   */
  dutyDate: string;
  /**
   * @description
   *   值班结束时间 HH:mm
   */
  dutyEndTime: string;
  /**
   * @description
   *   值班人信息
   */
  person: PersonVO;
  /**
   * @description
   *   岗位编号
   * @format int64
   */
  positionId: number;
  /**
   * @description
   *   岗位名称
   */
  positionName: string;
  /**
   * @description
   *   岗位简称
   */
  positionShortName: string;
}

export interface EnterprisePushConfigAddInputDto {
  category: string;
  companyCode: string;
  /** @format date-time */
  createTime: string;
  createUser: string;
  /** @format int32 */
  deleteFlag: number;
  ecode: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  isEnable: number;
  pushSystem: Array<string>;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  status: number;
  typeInfoList: Array<TypeInfo>;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
}

export interface EnterprisePushConfigInputDto {
  category: string;
  companyCode: string;
  ecode: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  pushSystem: string;
  /** @format int32 */
  sceneCode: number;
}

export interface EnterpriseWhiteListDto {
  cpmoCop: string;
  /** @format date-time */
  createTime: string;
  /** @format int32 */
  id: number;
  isConfig: string;
  sceneCode: string;
  screenName: string;
  screenTypeCode: string;
  typeCode: string;
  /** @format date-time */
  updateTime: string;
}

/**
 * @description
 *   关单评价实体
 */
export interface EvaluationCloseOrderDto {
  /**
   * @description
   *   位置
   */
  address: string;
  /**
   * @description
   *   类别，告警或者示险
   */
  alarmOrRisk: string;
  /**
   * @description
   *   告警类型
   */
  alarmTypeCode: string;
  behaiverList: Array<IllegalBehaiverDto>;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   评价内容
   */
  content: string;
  /**
   * @description
   *   评价时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   企业编号
   */
  ecode: string;
  /**
   * @description
   *   合格状况
   */
  evaluationFlag: string;
  /**
   * @description
   *   评价人
   */
  evaluationProple: string;
  /**
   * @description
   *   评价类型
   */
  evaluationType: string;
  /**
   * @description
   *   负责人/处置人itcode
   */
  handleUserItcodes: string;
  /**
   * @description
   *   负责人/处置人姓名
   */
  handleUserName: string;
  /**
   * @description
   *   是否已评价(0:未评价；1:已评价)
   * @format int32
   */
  isEvaluation: number;
  /**
   * @description
   *   网格编码
   */
  locCode: string;
  /**
   * @description
   *   告警/示险名称/作业类型描述
   */
  name: string;
  networkDangerViolationItemDto: NetworkDangerViolationItemDto;
  /**
   * @description
   *   告警其他原因
   */
  otherCause: string;
  /**
   * @description
   *   告警根本原因
   */
  rootCause: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景
   */
  sceneCode: string;
  /**
   * @description
   *   奖惩项总分
   */
  score: string;
  /**
   * @description
   *   来源id
   */
  sourceId: string;
  violationItemList: Array<NetworkDangerViolationItemDto>;
  violationRewardList: Array<ViolationRewardDto>;
  /**
   * @description
   *   关联工单id
   * @format int64
   */
  workOrderId: number;
}

/**
 * @description
 *   关单列表
 */
export interface EvaluationCloseOrderListDto {
  /**
   * @description
   *   告警或示险时间
   * @format date-time
   */
  alarmTime: string;
  /**
   * @description
   *   公司id
   */
  companyCode: string;
  /**
   * @description
   *   内容
   */
  content: string;
  /**
   * @description
   *   是否评价 0未评价 1已评价
   * @format int32
   */
  count: number;
  /**
   * @description
   *   时间id
   */
  eventId: string;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   等级
   * @format int32
   */
  level: number;
  /**
   * @description
   *   位置
   */
  location: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   类型 1 报警 2 示险
   * @format int32
   */
  type: number;
  /**
   * @description
   *   告警或示险编码  联系开发人员
   */
  typeCode: string;
}

/**
 * @description
 *   关单分页
 */
export interface EvaluationCloseOrderPageDto {
  evaluationCloseOrderListDtoList: Array<EvaluationCloseOrderListDto>;
  /**
   * @description
   *   总数
   * @format int64
   */
  total: number;
}

export interface EvaluationCloseOrderSearchPageDto {
  /**
   * @description
   *   报警内容
   * @example
   *   这里是一条报警内容
   */
  alarmContent: string;
  /**
   * @description
   *   组织编码
   * @example
   *   1000
   */
  comCode: string;
  /**
   * @description
   *   页码
   * @format int32
   * @example
   *   1
   */
  page: number;
  /**
   * @description
   *   场景编码数组
   * @example
   *   \['1','2','3'\]
   */
  sceneCodes: Array<string>;
  /**
   * @description
   *   每页记录个数
   * @format int32
   * @example
   *   10
   */
  size: number;
  /**
   * @description
   *   状态数组
   * @example
   *   \['1','2','3'\]
   */
  status: Array<string>;
  /**
   * @description
   *   类型数组
   * @example
   *   \['1','2','3'\]
   */
  type: Array<string>;
}

export interface FaultDispatchInputDto {
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   派单人itcode
   */
  itcode: string;
  /**
   * @description
   *   派单人所属网格
   */
  locCode: string;
  /**
   * @description
   *   派单人姓名
   */
  name: string;
  /**
   * @description
   *   派单人电话
   */
  phone: string;
  /**
   * @description
   *   平台
   * @example
   *   app|pc
   */
  plat: string;
}

export interface FaultDispatchOutput {
  /**
   * @description
   *   创建人
   */
  createBy: string;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   企业编码
   */
  ecode: string;
  /**
   * @description
   *   是否启用；1：启用，0：停用
   */
  enable: boolean;
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   派单人itcode
   */
  itcode: string;
  /**
   * @description
   *   派单人所属网格
   */
  locCode: string;
  /**
   * @description
   *   派单人姓名
   */
  name: string;
  /**
   * @description
   *   派单人电话
   */
  phone: string;
  /**
   * @description
   *   自动派单类型:(0:基础,1:高级)
   * @format int32
   */
  type: number;
  /**
   * @description
   *   更新人
   */
  updateBy: string;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
}

export interface FaultDispatchSettingsDto {
  /**
   * @description
   *   高级的
   */
  advancedList: Array<FaultDispatchOutput>;
  /**
   * @description
   *   基础的
   */
  basicList: Array<FaultDispatchOutput>;
  /**
   * @description
   *   是否启用；1：启用，0：停用
   */
  enable: boolean;
}

export interface FaultDispatchSettingsInputDto {
  /**
   * @description
   *   企业编码
   */
  ecode: string;
  /**
   * @description
   *   是否启用；1：启用，0：停用
   */
  enable: boolean;
  /**
   * @description
   *   派单人itcode
   */
  itcode: string;
  /**
   * @description
   *   派单人所属网格
   */
  locCode: string;
  /**
   * @description
   *   派单人姓名
   */
  name: string;
  /**
   * @description
   *   派单人电话
   */
  phone: string;
  /**
   * @description
   *   自动派单类型:(0:基础,1:高级)
   * @format int32
   */
  type: number;
}

export interface FaultDispatchSettingsSaveDto {
  faultDispatchSettingsInputDtos: Array<FaultDispatchSettingsInputDto>;
}

/**
 * @description
 *   故障管理-故障处置
 */
export interface FaultDisposalInputDto {
  /**
   * @description
   *   是否开启自动派单
   * @format int32
   */
  autoStatus: number;
  /**
   * @description
   *   工作台处置建议
   */
  disposalAdvice: string;
  /**
   * @description
   *   处置状态
   * @format int32
   */
  disposalStatus: number;
  /**
   * @description
   *   故障id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   告警根因
   */
  rootCause: string;
  /**
   * @description
   *   工单状态
   * @format int32
   */
  woStatus: number;
}

export interface FaultDisposalProcessOutputDTO {
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   创建人
   */
  createUser: string;
  /**
   * @description
   *   workbench_fault_info主键
   * @format int64
   */
  faultId: number;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   节点内容
   */
  nodeContent: string;
  /**
   * @description
   *   节点名称
   */
  nodeName: string;
  /**
   * @description
   *   操作人员
   */
  operator: string;
  /**
   * @description
   *   操作人员电话
   */
  operatorPhone: string;
}

export interface FaultFeedbackInfoOutput {
  /**
   * @description
   *   创建人
   */
  createBy: string;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   故障管理表主键id
   * @format int64
   */
  faultId: number;
  /**
   * @description
   *   反馈描述，工单处置内容
   */
  feedbackDesc: string;
  /**
   * @description
   *   反馈人itcode
   */
  feedbackItcode: string;
  /**
   * @description
   *   反馈人
   */
  feedbackName: string;
  /**
   * @description
   *   反馈人电话
   */
  feedbackPhone: string;
  /**
   * @description
   *   反馈图片，多个用逗号隔开
   */
  feedbackPicture: string;
  /**
   * @description
   *   反馈结果(是否解决):是|否
   */
  feedbackResult: string;
  /**
   * @description
   *   反馈时间
   * @format date-time
   */
  feedbackTime: string;
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   更新人
   */
  updateBy: string;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   工单编号
   */
  woCode: string;
}

export interface FaultInputDto {
  /**
   * @description
   *   实体编码
   */
  ecode: string;
  /**
   * @description
   *   设备类型
   */
  eqType: string;
  /**
   * @description
   *   设备编号/设备名称/位置/公司名称
   */
  likeParam: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   1
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   10
   */
  pageSize: number;
  /**
   * @description
   *   故障问题
   */
  problemTypeName: string;
  /**
   * @description
   *   状态
   * @format int32
   */
  statusCode: number;
}

export interface FaultOutputDto {
  /**
   * @description
   *   设备故障告警id
   */
  alarmId: string;
  /**
   * @description
   *   故障开始时间
   * @format date-time
   */
  alarmTime: string;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   公司名称
   */
  companyName: string;
  /**
   * @description
   *   创建人
   */
  createBy: string;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   派发工单时间
   * @format date-time
   */
  dispatchWorkTime: string;
  /**
   * @description
   *   工作台处置建议
   */
  disposalAdvice: string;
  /**
   * @description
   *   设备编号
   */
  eqCode: string;
  /**
   * @description
   *   物联设备id
   */
  eqGid: string;
  /**
   * @description
   *   设备名称
   */
  eqName: string;
  /**
   * @description
   *   设备类型
   */
  eqType: string;
  /**
   * @description
   *   处置建议
   */
  handleSuggestion: string;
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   物联报文
   */
  iotMsg: string;
  /**
   * @description
   *   纬度(管网gis:ycoordinate)
   * @format double
   */
  latitude: number;
  /**
   * @description
   *   故障等级， 1：高，2：中，3：低
   * @format int32
   */
  level: number;
  /**
   * @description
   *   告警位置
   */
  location: string;
  /**
   * @description
   *   经度(管网gis:xcoordinate)
   * @format double
   */
  longitude: number;
  /**
   * @description
   *   问题类型编码
   */
  problemTypeCode: string;
  /**
   * @description
   *   问题类型名称:设备持续离线; 疑似压力探头损坏;疑似流量计硬件故障;电池电压低预警;sim卡余量不足预警等
   */
  problemTypeName: string;
  /**
   * @description
   *   解除时间
   * @format date-time
   */
  resolveTime: string;
  /**
   * @description
   *   解除方式；1：工作台解除，2：业务系统解除
   * @format int32
   */
  resolveWay: number;
  /**
   * @description
   *   告警根本原因
   */
  rootCause: string;
  /**
   * @description
   *   站名称
   */
  stationName: string;
  /**
   * @description
   *   处理状态编码：1：待处置，4：处置中，5：已完成
   * @format int32
   */
  statusCode: number;
  /**
   * @description
   *   更新人
   */
  updateBy: string;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   工单状态（0：未发起 1 已发起 3 已完结 4发起中）
   * @format int32
   */
  woStatus: number;
  /**
   * @description
   *   处置工单内容
   */
  workOrderContent: string;
}

export interface FeedbackOverdueConfigDto {
  /**
   * @description
   *   企业编码
   */
  ecode: string;
  /**
   * @description
   *   总公司标识
   */
  primaryEcode: boolean;
}

/**
 * @description
 *   反馈超期配置查询DTO
 */
export interface FeedbackOverdueConfigInputDto {
  /**
   * @description
   *   企业列表
   */
  configs: Array<FeedbackOverdueConfigDto>;
  /**
   * @description
   *   子类型编码
   */
  subTypeCode: string;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
}

/**
 * @description
 *   反馈超期配置响应DTO
 */
export interface FeedbackOverdueConfigOutPutDto {
  /**
   * @description
   *   需要推送的icome账号list，多个用逗号隔开
   */
  accountList: string;
  /**
   * @description
   *   公司列表
   */
  companyInfo: Array<CompanyInfo>;
  /**
   * @description
   *   企业编码
   */
  ecode: string;
  /**
   * @description
   *   推送人员列表
   */
  pushPerson: Array<PushPersonInfo>;
}

export interface FeedbackOverdueInfo {
  /**
   * @description
   *   已配置推送的icome账号list，多个用逗号隔开
   */
  accountList: string;
  /**
   * @description
   *   公司列表
   */
  companyDetail: Array<CompanyDetail>;
  /**
   * @description
   *   企业编码
   */
  ecode: string;
  /**
   * @description
   *   总公司标识
   */
  primaryEcode: boolean;
}

export interface FeedbackOverdueSaveDto {
  /**
   * @description
   *   当前企业实体配置详情
   */
  details: Array<FeedbackOverdueInfo>;
  /**
   * @description
   *   模块编码；ndangerous_work | check
   */
  module: string;
  /**
   * @description
   *   模块名称；ndangerous_work：危险作业，check：常规监察
   */
  moduleName: string;
  /**
   * @description
   *   多元配置ID
   * @format int64
   */
  multipleConfigId: number;
  /**
   * @description
   *   场景编码
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   子类型编码
   */
  subTypeCode: string;
  /**
   * @description
   *   类型编码
   */
  subTypeName: string;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
  /**
   * @description
   *   类型编码
   */
  typeName: string;
}

export interface GisMapInputDto {
  centerX: string;
  centerY: string;
  companyCode: string;
  companyName: string;
  /** @format int32 */
  gisType: number;
  layerKey: string;
  layerValue: string;
  /** @format int32 */
  oldHatType: number;
  /** @format int32 */
  orderStatus: number;
  /** @format int32 */
  type: number;
  zoom: string;
}

export interface HelpCenterDto {
  createTime: string;
  feedbackTime: string;
  founder: string;
  handler: string;
  /** @format int32 */
  id: number;
  isCommonQuest: string;
  itCode: string;
  pictureUrl: Array<string>;
  problemFeedback: string;
  questionDesc: string;
  questionNumber: string;
  questionTitle: string;
  questionType: string;
  respond: string;
  /** @format date-time */
  updateTime: string;
  videoUrl: string;
}

export interface HelpCenterInDto {
  /** @format int32 */
  id: number;
  isCommonQuest: string;
  itCode: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  questionNumber: string;
  questionTitle: string;
  questionType: string;
}

export interface HelpCenterInRespondDto {
  handler: string;
  handlerItCode: string;
  /** @format int32 */
  id: number;
  problemFeedback: string;
  questionNumber: string;
}

export interface HelpCenterQuestionTypeDto {
  /** @format date-time */
  createTime: string;
  /** @format int32 */
  id: number;
  typeCode: string;
  typeName: string;
  /** @format date-time */
  updateTime: string;
}

export interface HiddenDangerDTO {
  companyCode: string;
  value: string;
}

/**
 * @description
 *   iCome推送消息传入实体
 */
export interface IComeInputDto {
  /**
   * @description
   *   文本内容
   * @example
   *   提醒内容：江汉路中压，危险作业手续异常 告警时间 、负责人
   */
  content: string;
  /**
   * @description
   *   管理实体
   * @example
   *   50298136
   */
  cpmoCop: string;
  /**
   * @description
   *   详情页URL 传null则没有详情页
   * @example
   *   screen.enn.cn
   */
  detailUrl: string;
  /**
   * @description
   *   级别， 1：高，2：中，3：低
   * @format int32
   * @example
   *   1
   */
  level: number;
  /**
   * @description
   *   推送时间
   * @example
   *   2021-12-15 12:23:23
   */
  pushTime: string;
  /**
   * @description
   *   上屏种类编码
   * @example
   *   pn_risk_005
   */
  screenTypeCode: string;
  /**
   * @description
   *   状态
   * @example
   *   待处置
   */
  status: string;
  /**
   * @description
   *   标题
   * @example
   *   危险作业手续异常
   */
  title: string;
  /**
   * @description
   *   类型
   * @example
   *   管网
   */
  type: string;
  /**
   * @description
   *   被推送人
   * @example
   *   10098567,5487664
   */
  users: string;
}

/**
 * @description
 *   违规内容
 */
export interface IllegalBehaiverDto {
  /**
   * @description
   *   违规内容
   */
  illegalBehaiver: string;
  /**
   * @description
   *   违规编码
   */
  illegalBehaiverCode: string;
}

export interface IndoorAlertorOfflineConfigDto {
  /** @format date-time */
  createTime: string;
  createUser: string;
  deleteFlag: boolean;
  /** @format int64 */
  id: number;
  /** @format int64 */
  multipleConfigId: number;
  /** @format int32 */
  offlineDuration: number;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
}

/**
 * @description
 *   户内报警器离线配置保存入参
 */
export interface IndoorAlertorOfflineConfigInputDto {
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   多元配置ID
   * @format int64
   */
  multipleConfigId: number;
  /**
   * @description
   *   离线时长，单位秒
   * @format int32
   */
  offlineDuration: number;
}

export interface IndoorRescueDisposalAttachmentDto {
  /** @format date-time */
  createTime: string;
  createUser: string;
  deleteFlag: boolean;
  fileName: string;
  fileUrl: string;
  /** @format int64 */
  id: number;
  /** @format int64 */
  rescueId: number;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
}

export interface IndoorRescueDisposalProcessDto {
  /**
   * @description
   *   创建时间
   */
  createTime: string;
  /**
   * @description
   *   删除状态
   * @format int32
   */
  deleteFlag: number;
  /**
   * @description
   *   是否可编辑
   * @format int32
   */
  enableEdit: number;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   indoor_rescue_workbench表的主键
   * @format int64
   */
  indoorRescueId: number;
  /**
   * @description
   *   节点内容
   */
  nodeContent: string;
  /**
   * @description
   *   节点名称
   */
  nodeName: string;
  /**
   * @description
   *   操作人员
   */
  operator: string;
  /**
   * @description
   *   操作人员电话
   */
  operatorPhone: string;
  /**
   * @description
   *   场景
   * @format int32
   */
  sceneCode: number;
}

/**
 * @description
 *   户内抢险处置进度传入实体
 */
export interface IndoorRescueInputDto {
  /**
   * @description
   *   标题
   */
  alarmContent: string;
  /**
   * @description
   *   企业编码
   * @example
   *   0161
   */
  companyCode: string;
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  cpmoCop: string;
  endTime: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   0
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  /**
   * @description
   *   场景(数组)
   * @example
   *   \['1','2','3'\]
   */
  sceneCode: Array<string>;
  startTime: string;
  /**
   * @description
   *   处置状态(数组)
   * @example
   *   \['1','2','3'\]
   */
  statusCode: Array<string>;
  /**
   * @description
   *   是否评价： 0： 未评价， 1： 已评价
   * @example
   *   0
   */
  whetherEvaluate: Array<number>;
}

export interface IndoorRescueShowDto {
  /**
   * @description
   *   企业编码
   */
  companyCode: string;
  /**
   * @description
   *   公司
   */
  companyName: string;
  /**
   * @description
   *   抢险原因
   */
  content: string;
  /**
   * @description
   *   数据类型, 1有效,2测试,3误报
   * @format int32
   */
  dataType: number;
  /**
   * @description
   *   数据类型名称
   */
  dataTypeName: string;
  /**
   * @description
   *   处置结果
   */
  dealMethod: string;
  /**
   * @description
   *   抢险事件详情id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   抢险位置
   */
  location: string;
  /**
   * @description
   *   抢险标题（名称）
   */
  rescueContent: string;
  /**
   * @description
   *   抢险时间
   * @format date-time
   */
  rescueTime: string;
  /**
   * @description
   *   类型编码：cs_rescue_01: 户内抢险，cs_leak_alarm：泄露报警
   */
  rescueTypeCode: string;
  /**
   * @description
   *   处理状态编码：1：待处置，2：处置中，3：已解决
   * @format int32
   */
  statusCode: number;
  /**
   * @description
   *   处理状态名称
   */
  statusName: string;
}

export interface IndoorRescueWorkbenchDto {
  companyCode: string;
  /** @format date-time */
  createTime: string;
  /** @format int64 */
  eventId: number;
  /** @format int64 */
  id: number;
  level: string;
  location: string;
  /** @format int32 */
  orderStatusCode: number;
  rescueContent: string;
  /** @format date-time */
  rescueTime: string;
  rescueTypeCode: string;
  /** @format int32 */
  statusCode: number;
  /** @format int32 */
  timeout: number;
  workOrderNo: string;
}

/**
 * @description
 *   物联告警添加传入Dto
 */
export interface IotAlarmAddDto {
  /**
   * @description
   *   告警等级
   * @example
   *   1：高，2：中，3：低
   */
  levels: Array<number>;
  /**
   * @description
   *   注释
   * @example
   *   压力异常
   */
  oldTypeName: string;
  /**
   * @description
   *   告警大类编码
   */
  parentTypeCode: string;
  /**
   * @description
   *   场景
   * @format int32
   * @example
   *   1：管网，2：厂站，3：户内，5：泛能
   */
  scene: number;
  /**
   * @description
   *   系统编码
   * @example
   *   1：智能运营，2：双密
   */
  systemCodes: Array<number>;
  /**
   * @description
   *   告警类型编码
   * @example
   *   pn_1000113_iot
   */
  typeCode: string;
  /**
   * @description
   *   告警类型名称
   * @example
   *   加气站进口压力异常
   */
  typeName: string;
}

/**
 * @description
 *   物联告警页面输出Dto
 */
export interface IotAlarmOutPutDto {
  /**
   * @description
   *   唯一编号
   * @format int64
   */
  id: number;
  /**
   * @description
   *   告警大类编码
   */
  parentTypeCode: string;
  /**
   * @description
   *   告警大类名称
   */
  parentTypeName: string;
  /**
   * @description
   *   场景编号
   * @example
   *   1：管网，2：厂站，3：户内，5：泛能
   */
  scene: string;
  /**
   * @description
   *   系统编码
   * @example
   *   1：智能运营，2：双密
   */
  systemCode: string;
  /**
   * @description
   *   告警类型编码
   */
  typeCode: string;
  /**
   * @description
   *   告警类型名称
   */
  typeName: string;
}

/**
 * @description
 *   物联告警大类输出Dto
 */
export interface IotAlarmParentOutDto {
  /**
   * @description
   *   告警大类编码
   */
  parentTypeCode: string;
  /**
   * @description
   *   告警大类名称
   */
  parentTypeName: string;
}

/**
 * @description
 *   物联告警查询传入Dto
 */
export interface IotAlarmQueryDto {
  /**
   * @description
   *   当前页
   * @format int32
   * @example
   *   2
   */
  pageNum: number;
  /**
   * @description
   *   每页条数
   * @format int32
   * @example
   *   5
   */
  pageSize: number;
  /**
   * @description
   *   场景编号
   * @example
   *   1：管网，2：厂站，3：户内，5：泛能
   */
  scenes: Array<number>;
  /**
   * @description
   *   系统编码
   * @format int32
   * @example
   *   1：智能运营，2：双密
   */
  systemCode: number;
  /**
   * @description
   *   告警类型编码
   */
  typeCode: string;
  /**
   * @description
   *   告警类型名称
   */
  typeName: string;
}

/**
 * @description
 *   物联告警更新传入Dto
 */
export interface IotAlarmUpdateDto {
  /**
   * @description
   *   场景
   * @format int32
   * @example
   *   1：管网，2：厂站，3：户内，5：泛能
   */
  scene: number;
  /**
   * @description
   *   系统编码
   * @format int32
   * @example
   *   1：智能运营，2：双密
   */
  systemCode: number;
  /**
   * @description
   *   告警类型编码
   * @example
   *   pn_1000113_iot
   */
  typeCode: string;
  /**
   * @description
   *   告警类型名称
   * @example
   *   加气站进口压力异常
   */
  typeName: string;
}

/**
 * @description
 *   联合处置单输出DTO
 */
export interface JointDisposalOutputDto {
  /**
   * @description
   *   主键Id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   发起时间
   * @format date-time
   */
  initiationTime: string;
  /**
   * @description
   *   发起人姓名
   */
  initiationUserName: string;
  /**
   * @description
   *   接收企业编码
   */
  receiveEnterpriseCode: string;
  /**
   * @description
   *   接收企业名称
   */
  receiveEnterpriseName: string;
  /**
   * @description
   *   展示的状态名称
   */
  showStatusName: string;
  /**
   * @description
   *   状态（1-已发送  2-已反馈）
   * @format int32
   */
  statusCode: number;
  /**
   * @description
   *   事项标题
   */
  title: string;
}

/**
 * @description
 *   联合处置列表查询Dto
 */
export interface JointDisposalQueryDto {
  /**
   * @description
   *   所属实体编码
   */
  ecode: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   0
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  /**
   * @description
   *   接收企业编码
   */
  receiveEnterpriseCode: string;
  /**
   * @description
   *   状态（1-已发送  2-已反馈）
   */
  statusCode: string;
  /**
   * @description
   *   事项标题
   */
  title: string;
}

/**
 * @description
 *   联合处置单列表接收企业下拉框输出DTO
 */
export interface JointDisposalReceiveEnterpriseDto {
  /**
   * @description
   *   接收企业编码
   */
  receiveEnterpriseCode: string;
  /**
   * @description
   *   接收企业名称
   */
  receiveEnterpriseName: string;
}

export interface LevTotalDto {
  /** @format int32 */
  highLev: number;
  /** @format int32 */
  lowLev: number;
  /** @format int32 */
  midLev: number;
}

export interface LngLatDTO {
  /**
   * @description
   *   纬度
   */
  latitude: string;
  /**
   * @description
   *   经度
   */
  longitude: string;
}

export interface LocalTime {
  /** @format int32 */
  hour: number;
  /** @format int32 */
  minute: number;
  /** @format int32 */
  nano: number;
  /** @format int32 */
  second: number;
}

export interface MMdOrganizationDto {
  compCode: string;
  compCodeTxt: string;
  ecode: string;
  ename: string;
}

/**
 * @description
 *   上屏条目设置查询所属公司
 */
export interface MMdOrganizationInputDto {
  /**
   * @description
   *   管理实体
   */
  cpmoCop: string;
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

/**
 * @description
 *   监察指引添加入参
 */
export interface MonitorGuidelineAddDto {
  /**
   * @description
   *   指引内容
   */
  guidelines: Array<string>;
  /**
   * @description
   *   模块
   */
  module: string;
  /**
   * @description
   *   模块名称
   */
  moduleName: string;
  /**
   * @description
   *   场景编码
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   子类型编码
   */
  subTypeCode: string;
  /**
   * @description
   *   子类型名称
   */
  subTypeName: string;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
  /**
   * @description
   *   类型名称
   */
  typeName: string;
  /**
   * @description
   *   不合格记录
   */
  unqualifiedItem: Array<UnqualifiedItemDto>;
}

export interface MonitorGuidelineDto {
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   创建人
   */
  createUser: string;
  /**
   * @description
   *   删除标志
   */
  deleteFlag: boolean;
  /**
   * @description
   *   是否启用
   */
  enable: boolean;
  /**
   * @description
   *   是否存在指引内容
   */
  existGuidelines: boolean;
  /**
   * @description
   *   是否存在不合格项
   */
  existUnqualifiedItems: boolean;
  /**
   * @description
   *   指引内容
   */
  guidelines: Array<string>;
  /**
   * @description
   *   ID
   * @format int32
   */
  id: number;
  /**
   * @description
   *   模块
   */
  module: string;
  /**
   * @description
   *   模块名称
   */
  moduleName: string;
  /**
   * @description
   *   场景编码
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   场景名称
   */
  sceneName: string;
  /**
   * @description
   *   子类型编码
   */
  subTypeCode: string;
  /**
   * @description
   *   子类型名称
   */
  subTypeName: string;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
  /**
   * @description
   *   类型名称
   */
  typeName: string;
  unqualifiedItems: Array<UnqualifiedItemDto>;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   更新人
   */
  updateUser: string;
}

/**
 * @description
 *   监察指引修改入参
 */
export interface MonitorGuidelineModifyDto {
  /**
   * @description
   *   是否启用
   */
  enable: boolean;
  /**
   * @description
   *   指引内容
   */
  guidelines: Array<string>;
  /**
   * @description
   *   ID
   * @format int32
   */
  id: number;
  /**
   * @description
   *   不合格项
   */
  unqualifiedItem: Array<UnqualifiedItemDto>;
}

/**
 * @description
 *   监察指引搜索入参
 */
export interface MonitorGuidelineSearchDto {
  /**
   * @description
   *   页号
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   每页条数
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   场景编码
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   搜索文本
   */
  searchText: string;
}

/**
 * @description
 *   工作台白名单添加传入Dto
 */
export interface MultipleConfigAddDto {
  /**
   * @description
   *   类型
   * @example
   *   alarm：告警，show_danger：示险，dangerous_work：危险作业，check：常规监察，indoor_rescue：户内抢险
   */
  category: string;
  /**
   * @description
   *   等级
   * @example
   *   高，中，低
   */
  level: Array<string>;
  /**
   * @description
   *   注释
   * @example
   *   焊口不合格
   */
  oldTypeName: string;
  /**
   * @description
   *   场景编号
   * @format int32
   * @example
   *   1：管网，2：厂站，3：户内，4：工程，5：泛能
   */
  sceneCode: number;
  /**
   * @description
   *   名称编码
   * @example
   *   pt_alarm_003
   */
  typeCode: string;
  /**
   * @description
   *   名称
   * @example
   *   PE管道焊口不合格
   */
  typeName: string;
}

export interface MultipleConfigDetailDto {
  autoDisposal: AutoDisposalDto;
  contingencyPlans: Array<ContingencyPlanDto>;
  ecode: string;
  /** @format int64 */
  id: number;
  rewards: Array<ViolationRewardDto>;
  rootCauses: Array<RootCauseDto>;
  shortcuts: Array<DisposalCommentShortcutDto>;
  standardCauseFlag: boolean;
  typeCode: string;
  typeName: string;
  violations: Array<ViolationRewardDto>;
  workGuide: WorkGuideDto;
}

export interface MultipleConfigDto {
  /** @format int32 */
  autoDisposalConfigured: number;
  category: string;
  contingencyPlanConfigured: boolean;
  ecode: string;
  enable: boolean;
  /** @format int64 */
  id: number;
  level: string;
  oldTypeName: string;
  rewardConfigured: boolean;
  rootCauseConfigured: boolean;
  /** @format int32 */
  sceneCode: number;
  standardCauseFlag: boolean;
  subCategory: Array<string>;
  subCategoryStr: string;
  typeCode: string;
  typeName: string;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
  violationConfigured: boolean;
  workGuideConfigured: boolean;
}

export interface MultipleConfigDtoInputDto {
  autoDisposalConfigured: string;
  category: string;
  contingencyPlanConfigured: string;
  ecode: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  rewardConfigured: string;
  rootCauseConfigured: string;
  /** @format int32 */
  sceneCode: number;
  subCategory: string;
  typeName: string;
  violationConfigured: string;
  workGuideConfigured: string;
}

/**
 * @description
 *   工作台白名单页面输出Dto
 */
export interface MultipleConfigOutPutDto {
  /**
   * @description
   *   类型
   * @example
   *   alarm：告警，show_danger：示险，dangerous_work：危险作业，check：常规监察，indoor_rescue：户内抢险
   */
  category: string;
  /**
   * @description
   *   实体编码
   * @example
   *   50298136
   */
  ecode: string;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   等级
   * @example
   *   高/中/低
   */
  level: string;
  /**
   * @description
   *   场景
   * @example
   *   1：管网，2：厂站，3：户内，4：工程，5：泛能
   */
  sceneName: string;
  /**
   * @description
   *   名称编码
   * @example
   *   pt_alarm_003
   */
  typeCode: string;
  /**
   * @description
   *   名称
   * @example
   *   PE管道焊口不合格
   */
  typeName: string;
}

/**
 * @description
 *   工作台白名单查询传入Dto
 */
export interface MultipleConfigQueryDto {
  /**
   * @description
   *   当前页
   * @format int32
   * @example
   *   2
   */
  pageNum: number;
  /**
   * @description
   *   每页条数
   * @format int32
   * @example
   *   5
   */
  pageSize: number;
  /**
   * @description
   *   场景编号
   * @example
   *   1：管网，2：厂站，3：户内，4：工程，5：泛能
   */
  sceneCode: Array<number>;
  /**
   * @description
   *   名称
   * @example
   *   PE管道焊口不合格
   */
  typeName: string;
}

export interface MultipleConfigTypeInfoDto {
  /**
   * @description
   *   注释|曾用名
   */
  oldTypeName: string;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
  /**
   * @description
   *   类型名称
   */
  typeName: string;
}

export interface NavigationConfigDto {
  companyCode: string;
  createTime: string;
  /** @format byte */
  deleteFlag: string;
  /** @format int32 */
  enable: number;
  /** @format int64 */
  id: number;
  name: string;
  remark: string;
  sceneCodes: string;
  /** @format int32 */
  sortCode: number;
  url: string;
}

export interface NavigationConfigInputDto {
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  cpmoCop: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  /**
   * @description
   *   场景（数组）
   * @example
   *   1
   */
  sceneCode: Array<string>;
}

export interface NavigationInputDto {
  /**
   * @description
   *   企业编码
   * @example
   *   0161
   */
  companyCode: string;
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  cpmoCop: string;
  /**
   * @description
   *   是否只显示当前月份数据
   * @format int32
   * @example
   *   1：当前月份，null：不是
   */
  currentMonth: number;
  /**
   * @description
   *   逻辑删除
   * @format int32
   */
  deleteFlag: number;
  /**
   * @description
   *   是否启用；1：启用，0：停用
   * @format int32
   */
  enable: number;
  /**
   * @description
   *   主键
   * @format int64
   * @example
   *   161
   */
  id: number;
  /**
   * @description
   *   是否选中标识
   * @format int32
   * @example
   *   161
   */
  isChecked: number;
  /**
   * @description
   *   名称
   */
  name: string;
  /**
   * @description
   *   备注
   */
  remark: string;
  /**
   * @description
   *   场景
   * @example
   *   1
   */
  sceneCode: Array<string>;
  /**
   * @description
   *   场景复选框
   */
  sceneCodes: string;
  /**
   * @description
   *   排序编号
   * @format int32
   */
  sortCode: number;
  /**
   * @description
   *   网址链接
   */
  url: string;
}

export interface NetWorkShowDangerSpaceDto {
  /**
   * @description
   *   评价
   */
  appraise: string;
  /**
   * @description
   *   示险标题
   */
  dangerContent: string;
  /**
   * @description
   *   主键id
   * @format int64
   */
  detailId: number;
  /** @format int32 */
  evaluateStatus: number;
  /**
   * @description
   *   要求整改完成时间
   */
  handTime: string;
  /**
   * @description
   *   负责人
   */
  handler: string;
  /**
   * @description
   *   负责人电话
   */
  handlerPhone: string;
  /**
   * @description
   *   纬度
   */
  latitude: number;
  /**
   * @description
   *   告警级别， 1：高，2：中，3：低
   * @format int32
   */
  level: number;
  /**
   * @description
   *   经度
   */
  longitude: number;
  /**
   * @description
   *   所属组织
   */
  organization: string;
  /**
   * @description
   *   示险编码
   */
  riskCode: string;
  /**
   * @description
   *   示险时间(yyyy-MM-dd hh:mm:ss)
   */
  riskDateTime: string;
  /**
   * @description
   *   show_danger主表主键id
   * @format int64
   */
  riskId: number;
  /**
   * @description
   *   示险名称
   */
  riskName: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   处理状态编码：1：待处置，2：待确认，3：确认中，4：处置中，5：已完成，6：误报
   * @format int32
   */
  statusCode: number;
  /**
   * @description
   *   作业名称
   */
  workName: string;
  /**
   * @description
   *   整改类型
   */
  workType: string;
}

export interface NetworkAlarmSpaceDto {
  /**
   * @description
   *   告警标题，如：流量计温度告警
   */
  alarmContent: string;
  /**
   * @description
   *   评价
   */
  appraise: string;
  /**
   * @description
   *   主键id
   * @format int64
   */
  detailId: number;
  /** @format int32 */
  evaluateStatus: number;
  /**
   * @description
   *   要求整改完成时间
   */
  handTime: string;
  /**
   * @description
   *   纬度
   */
  latitude: number;
  /**
   * @description
   *   告警级别， 1：高，2：中，3：低
   * @format int32
   */
  level: number;
  /**
   * @description
   *   经度
   */
  longitude: number;
  /**
   * @description
   *   负责人
   */
  officer: string;
  /**
   * @description
   *   负责人电话
   */
  officerPhone: string;
  /**
   * @description
   *   所属组织
   */
  organization: string;
  /**
   * @description
   *   示险编码
   */
  riskCode: string;
  /**
   * @description
   *   示险时间(yyyy-MM-dd hh:mm:ss)
   */
  riskDateTime: string;
  /**
   * @description
   *   alarm_workbench主表主键id
   * @format int64
   */
  riskId: number;
  /**
   * @description
   *   示险名称
   */
  riskName: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   处理状态编码：1：待处置，2：待确认，3：确认中，4：处置中，5：已完成，6：误报
   * @format int32
   */
  statusCode: number;
  /**
   * @description
   *   作业名称
   */
  workName: string;
  /**
   * @description
   *   整改类型
   */
  workType: string;
}

export interface NetworkDangerRegulationOutputDTO {
  address: string;
  analysisPrompt: string;
  cameraCodes: string;
  chargePerson: string;
  /** @format int32 */
  focusFlag: number;
  /**
   * @description
   *   危险作业ID
   * @format int64
   */
  id: number;
  /** @format int32 */
  sceneCode: number;
  startTime: string;
  /** @format int32 */
  status: number;
  statusName: string;
  /** @format int32 */
  typeCode: number;
  violationsTimes: string;
  woCode: string;
  workName: string;
}

/**
 * @description
 *   奖惩项
 */
export interface NetworkDangerViolationItemDto {
  category: string;
  /** @format int64 */
  id: number;
  projectId: string;
  /** @format int32 */
  sceneCode: number;
  score: string;
  violationCategory: string;
  violationContent: string;
}

export interface NetworkShowDangerWoOrganDTO {
  organCode: string;
  organName: string;
}

export interface NetworkShowDangerWoUserDTO {
  userItcode: string;
  userLandline: string;
  userName: string;
  userPhone: string;
}

export interface NetworkShowDangerWoUserInputDTO {
  companyCode: string;
  erpCode: string;
  organCode: string;
}

export interface NetworkbenchShowDangerDTO {
  appraise: string;
  companyCode: string;
  controlLevel: string;
  createTime: string;
  dangerContent: string;
  dangerTime: string;
  dangerTypeCode: string;
  detailId: string;
  ecode: string;
  /** @format int32 */
  effectiveRange: number;
  evaluation: string;
  feedbackItcode: string;
  feedbackName: string;
  feedbackPhone: string;
  feedbackTime: string;
  handler: string;
  handlerItcode: string;
  handlerPhone: string;
  /** @format int64 */
  id: number;
  isJD: string;
  isNormal: string;
  isPipe: string;
  isWarning: string;
  /** @format int32 */
  level: number;
  locCode: string;
  localePics: string;
  orgCode: string;
  picList: Array<string>;
  plateNumbe: string;
  quotaName: string;
  reason: string;
  relAddress: string;
  relContinue: string;
  relDown: string;
  relIsSign: string;
  relLevel: string;
  relName: string;
  relNo: string;
  relPipename: string;
  relRate: string;
  relTotal: string;
  relWarning: string;
  riskCode: string;
  riskDateTime: string;
  /** @format int64 */
  riskId: number;
  riskLev: string;
  riskName: string;
  /** @format int32 */
  speedRange: number;
  /** @format double */
  speedThan: number;
  /** @format int32 */
  statusCode: number;
  superSpeedMileage: number;
  superSpeedRatio: string;
  taskAddress: string;
  taskAddressGeom: string;
  taskCode: string;
  taskName: string;
  thresholdDes: string;
  totalMileage: number;
  updateTime: string;
  /** @format int32 */
  woStatus: number;
}

export interface OrganizationPortraitAlarmDto {
  /** @format int32 */
  high: number;
  /** @format int64 */
  id: number;
  /** @format int32 */
  low: number;
  /** @format int32 */
  middle: number;
  portraitId: string;
  /** @format int32 */
  sceneCode: number;
  typeCode: string;
  typeName: string;
}

export interface OrganizationPortraitCheckDto {
  /** @format int32 */
  finishCount: number;
  /** @format int64 */
  id: number;
  portraitId: string;
  ratio: string;
  /** @format int32 */
  sceneCode: number;
  typeCode: string;
  typeName: string;
  /** @format int32 */
  violationCount: number;
}

export interface OrganizationPortraitDangerDto {
  /** @format int32 */
  finishCount: number;
  /** @format int64 */
  id: number;
  portraitId: string;
  ratio: string;
  /** @format int32 */
  sceneCode: number;
  typeCode: string;
  typeName: string;
  /** @format int32 */
  violationCount: number;
}

export interface OrganizationPortraitDto {
  /** @format int32 */
  alarm: number;
  companyCode: string;
  /** @format date-time */
  createTime: string;
  /** @format int32 */
  dangerWork: number;
  groupContent: string;
  groupName: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  normalCheck: number;
  phoneNumber: string;
  reportTime: string;
  responsiblePerson: string;
  /** @format int32 */
  risk: number;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  score: number;
  typeCode: string;
}

export interface OrganizationPortraitIndoorRescueDto {
  /** @format int32 */
  finishCount: number;
  /** @format int64 */
  id: number;
  portraitId: string;
  /** @format int32 */
  sceneCode: number;
  typeName: string;
}

export interface OrganizationPortraitInputDto {
  companyCode: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  reportTime: string;
  /** @format int32 */
  sceneCode: number;
}

export interface OutboundNumInfo {
  /**
   * @description
   *   坐席号
   */
  outboundNum: string;
  /**
   * @description
   *   加密后密码
   */
  password: string;
}

export interface OutboundRecordDto {
  /** @format date-time */
  createTime: string;
  deskNum: string;
  ecode: string;
  extensionNum: string;
  outboundNum: string;
}

export interface OverdueIComeInputDto {
  /**
   * @description
   *   公司编码
   * @example
   *   0161
   */
  companyCode: string;
  /**
   * @description
   *   文本内容
   * @example
   *   问题描述、地址、责任人、要求反馈时间
   */
  content: string;
  /**
   * @description
   *   详情页URL 传null则没有详情页
   * @example
   *   screen.enn.cn
   */
  detailUrl: string;
  /**
   * @description
   *   场景名称
   * @example
   *   管网
   */
  sceneName: string;
  /**
   * @description
   *   标题
   * @example
   *   超期未整改
   */
  title: string;
  typeCode: string;
}

export interface ParticipantResp {
  /**
   * @description
   *   ennUnifiedCsrfToken
   */
  csrfToken: string;
  /**
   * @description
   *   grantCode
   */
  grantCode: string;
  /**
   * @description
   *   tenantId
   */
  tenantId: string;
  /**
   * @description
   *   ennUnifiedAuthorization
   */
  token: string;
}

export interface PersonDutyCalendarQueryDTO {
  /**
   * @description
   *   开始日期
   */
  beginDate: string;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   结束日期
   */
  endDate: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   人员itcode
   */
  itCode: string;
}

export interface PersonDutyQueryDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   值班日期
   */
  dutyDate: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   人员itcode
   */
  itCode: string;
}

export interface PersonQueryDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   区域编码
   */
  organCode: string;
  /**
   * @description
   *   姓名/手机号模糊查询
   */
  searchWord: string;
}

export interface PersonReqDTO {
  /**
   * @description
   *   公司编码(4位编码)
   */
  entityCode: string;
  /**
   * @description
   *   itcode
   */
  itCode: string;
  /**
   * @description
   *   手机号
   */
  mobile: string;
  /**
   * @description
   *   姓名
   */
  name: string;
}

export interface PersonVO {
  /**
   * @description
   *   itcode
   */
  itCode: string;
  /**
   * @description
   *   手机号
   */
  mobile: string;
  /**
   * @description
   *   姓名
   */
  name: string;
}

export interface PositionDutyQueryDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   月份(用于排班状态查询) 格式：yyyy-MM，默认当前月
   */
  month: string;
  /**
   * @description
   *   是否需要排班状态 true-需要 false-不需要
   */
  needDutyStatus: boolean;
  /**
   * @description
   *   区域编码 当区域编码有值的时候  公司编码必传
   */
  organCode: string;
  /**
   * @description
   *   启用状态 0-禁用 1-启用
   * @format int32
   */
  status: number;
}

export interface PositionGreenChannelFlagReqDTO {
  /**
   * @description
   *   启用状态 0-否 1-是
   * @format int32
   */
  flag: number;
  /**
   * @description
   *   岗位主键编号
   * @format int64
   */
  id: number;
}

export interface PositionInsertedReqDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   值班开始时间 格式(HH:mm)
   */
  dutyBeginTime: string;
  /**
   * @description
   *   值班结束时间 格式(HH:mm)
   */
  dutyEndTime: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   绿色通道联系人标志 0-否 1-是
   * @format int32
   */
  greenChannelContactFlag: number;
  /**
   * @description
   *   当前登录人的itcode
   */
  loginUserItCode: string;
  /**
   * @description
   *   当前登录人姓名
   */
  loginUserName: string;
  /**
   * @description
   *   区域编码 当区域编码有值的时候  公司编码必传
   */
  organCode: string;
  /**
   * @description
   *   人员列表
   */
  personList: Array<PersonVO>;
  /**
   * @description
   *   岗位职责
   */
  positionDescription: string;
  /**
   * @description
   *   岗位名称
   */
  positionName: string;
  /**
   * @description
   *   岗位简称
   */
  positionShortName: string;
  /**
   * @description
   *   场景类型 1-户内 2-户外 3-厂站 4-其它 5-通用(默认类型)
   * @format int32
   */
  sceneType: number;
}

export interface PositionPersonQueryDTO {
  /**
   * @description
   *   值班日期
   */
  dutyDate: string;
  /**
   * @description
   *   岗位编号
   * @format int64
   */
  positionId: number;
}

export interface PositionPersonVO {
  /**
   * @description
   *   1-不可用 0-可用
   * @format int32
   */
  disabled: number;
  /**
   * @description
   *   itcode
   */
  itCode: string;
  /**
   * @description
   *   手机号
   */
  mobile: string;
  /**
   * @description
   *   姓名
   */
  name: string;
}

/**
 * @description
 *   分页查询请求对象
 */
export interface PositionQueryDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   区域编码 当区域编码有值的时候  公司编码必传
   */
  organCode: string;
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   岗位名称/岗位简称模糊查询
   */
  searchWord: string;
  /**
   * @description
   *   启用状态 0-禁用 1-启用
   * @format int32
   */
  status: number;
}

export interface PositionStatusReqDTO {
  /**
   * @description
   *   岗位主键编号
   * @format int64
   */
  id: number;
  /**
   * @description
   *   启用状态 0-禁用 1-启用
   * @format int32
   */
  status: number;
}

export interface PositionUpdatedReqDTO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   值班开始时间 格式(HH:mm)
   */
  dutyBeginTime: string;
  /**
   * @description
   *   值班结束时间 格式(HH:mm)
   */
  dutyEndTime: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   绿色通道联系人标志 0-否 1-是
   * @format int32
   */
  greenChannelContactFlag: number;
  /**
   * @description
   *   主键编号
   * @format int64
   */
  id: number;
  /**
   * @description
   *   当前登录人的itcode
   */
  loginUserItCode: string;
  /**
   * @description
   *   当前登录人姓名
   */
  loginUserName: string;
  /**
   * @description
   *   区域编码 当区域编码有值的时候  公司编码必传
   */
  organCode: string;
  /**
   * @description
   *   人员列表
   */
  personList: Array<PersonVO>;
  /**
   * @description
   *   岗位职责
   */
  positionDescription: string;
  /**
   * @description
   *   岗位名称
   */
  positionName: string;
  /**
   * @description
   *   岗位简称
   */
  positionShortName: string;
  /**
   * @description
   *   场景类型 1-户内 2-户外 3-厂站 4-其它 5-通用(默认类型)
   * @format int32
   */
  sceneType: number;
}

export interface PositionVO {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   公司名称
   */
  companyName: string;
  /**
   * @description
   *   创建时间
   */
  createTime: string;
  /**
   * @description
   *   值班开始时间 格式(HH:mm)
   */
  dutyBeginTime: string;
  /**
   * @description
   *   值班结束时间 格式(HH:mm)
   */
  dutyEndTime: string;
  /**
   * @description
   *   实体代码
   */
  entityCode: string;
  /**
   * @description
   *   绿色通道联系人标志 0-否 1-是
   * @format int32
   */
  greenChannelContactFlag: number;
  /**
   * @description
   *   主键编号
   * @format int64
   */
  id: number;
  /**
   * @description
   *   区域编码
   */
  organCode: string;
  /**
   * @description
   *   区域名称
   */
  organName: string;
  /**
   * @description
   *   人员列表
   */
  personList: Array<PersonVO>;
  /**
   * @description
   *   岗位职责
   */
  positionDescription: string;
  /**
   * @description
   *   岗位名称
   */
  positionName: string;
  /**
   * @description
   *   岗位简称
   */
  positionShortName: string;
  /**
   * @description
   *   场景类型 1-户内 2-户外 3-厂站 4-其它 5-通用(默认类型)
   * @format int32
   */
  sceneType: number;
  /**
   * @description
   *   启用状态 0-禁用 1-启用
   * @format int32
   */
  status: number;
}

/**
 * @description
 *   要事跟踪实体
 */
export interface PriorityTrackingDto {
  /**
   * @description
   *   告警示险列表
   */
  alarmRiskList: Array<PriorityTrackingOutputDto>;
  /**
   * @description
   *   告警示险数量
   * @format int32
   */
  alarmRiskNum: number;
  /**
   * @description
   *   全部列表
   */
  allList: Array<PriorityTrackingOutputDto>;
  /**
   * @description
   *   全部数量
   * @format int32
   */
  allNum: number;
  /**
   * @description
   *   工程处罚列表
   */
  projectPunishList: Array<PriorityTrackingOutputDto>;
  /**
   * @description
   *   工程处罚数量
   * @format int32
   */
  projectPunishNum: number;
  /**
   * @description
   *   问题整改列表
   */
  rectifyProblemList: Array<PriorityTrackingOutputDto>;
  /**
   * @description
   *   问题整改数量
   * @format int32
   */
  rectifyProblemNum: number;
}

/**
 * @description
 *   要事跟踪传入实体
 */
export interface PriorityTrackingInputDto {
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  ecode: string;
  /**
   * @description
   *   场景(数组)
   * @example
   *   \['1','2','3'\]
   */
  sceneCode: Array<string>;
}

/**
 * @description
 *   要事跟踪数量实体
 */
export interface PriorityTrackingNumOutputDto {
  /**
   * @description
   *   告警示险数量
   * @format int32
   */
  alarmRiskNum: number;
  /**
   * @description
   *   全部数量
   * @format int32
   */
  allNum: number;
  /**
   * @description
   *   工程处罚数量
   * @format int32
   */
  projectPunishNum: number;
  /**
   * @description
   *   问题整改数量
   * @format int32
   */
  rectifyProblemNum: number;
}

/**
 * @description
 *   要事跟踪实体
 */
export interface PriorityTrackingOutputDto {
  /**
   * @description
   *   地址
   */
  address: string;
  /**
   * @description
   *   告警或示险
   */
  alarmOrRisk: string;
  /**
   * @description
   *   是否开启自动派单标识(0未开启 1开启)
   * @format int32
   */
  autoStatus: number;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   内容
   */
  content: string;
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  ecode: string;
  /**
   * @description
   *   事件编码
   */
  eventId: string;
  /**
   * @description
   *   工程处罚的主键id
   */
  fineId: string;
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   告警示险等级
   * @format int32
   */
  level: number;
  /**
   * @description
   *   姓名
   */
  name: string;
  /**
   * @description
   *   数据来源 1-问题整改 2-工程处罚 3-告警示险
   * @format int32
   */
  origin: number;
  /**
   * @description
   *   手机号
   */
  phone: string;
  /**
   * @description
   *   示险-压力试验异常试验类型（1强度，2气密）
   */
  pressureTestType: string;
  /**
   * @description
   *   角色名称
   */
  roleName: string;
  /**
   * @description
   *   场景
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   状态
   */
  status: string;
  /**
   * @description
   *   时间
   */
  time: string;
  /**
   * @description
   *   超时标识（1超时，0不超时）
   * @format int32
   */
  timeOut: number;
  /**
   * @description
   *   标题
   */
  title: string;
  /**
   * @description
   *   标题人
   */
  titlePerson: string;
  /**
   * @description
   *   类型
   */
  type: string;
  /**
   * @description
   *   告警示险类型编码
   */
  typeCode: string;
  /**
   * @description
   *   焊机类型；1：热熔，2：电熔
   */
  weldMachineType: string;
  /**
   * @description
   *   关单评价；0：待评价，1：已评价
   */
  woCloseEvaluation: boolean;
  /**
   * @description
   *   发起工单状态（0：未发起 1 发起）
   * @format int32
   */
  woStatus: number;
}

export interface ProDangerWorkStandardConfigDto {
  code: string;
  name: string;
}

export interface ProblemRectifyInputDTO {
  ecode: string;
}

export interface ProblemRectifyOutputDTO {
  content: string;
  ecode: string;
  /** @format int64 */
  id: number;
  name: string;
  phone: string;
  /** @format date-time */
  requiredTime: string;
  roleName: string;
  status: string;
  time: string;
  titlePerson: string;
  type: string;
}

export interface PushPersonInfo {
  /**
   * @description
   *   推送icome人员名称
   */
  icomeName: string;
  /**
   * @description
   *   推送icome人员账号
   */
  icomeNum: string;
}

export interface PushReportConfigDto {
  /**
   * @description
   *   企业实体代码
   */
  entityCode: string;
  /**
   * @description
   *   icome账号
   */
  icomeAcc: string;
  /**
   * @description
   *   icome编号
   */
  icomeCode: string;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   是否推送，0推送，1不推送
   */
  isPush: string;
  /**
   * @description
   *   姓名
   */
  name: string;
  /**
   * @description
   *   职位
   */
  position: string;
}

export interface QueryExpertEvalDataDto {
  reqBody: {
    [propertyName: string]: any;
  };
  url: string;
}

export interface R {
  /** @format int32 */
  code: number;
  data: any;
  msg: string;
}

/**
 * @description
 *   反馈记录信息
 */
export interface RectifyRecordInfo {
  /**
   * @description
   *   发起人
   */
  appraisePerson: string;
  /**
   * @description
   *   发起人电话
   */
  appraisePhone: string;
  /**
   * @description
   *   发起时间
   * @format date-time
   */
  appraiseTime: string;
  /**
   * @description
   *   反馈记录详情表主键
   * @format int64
   */
  checkRectifyDetailId: number;
  /**
   * @description
   *   反馈记录一级表主键
   * @format int64
   */
  checkRectifyId: number;
  /**
   * @description
   *   反馈评价描述
   */
  evaluateContent: string;
  /**
   * @description
   *   反馈评价等级：合格|不合格
   */
  evaluateGrade: string;
  /**
   * @description
   *   是否需要再次反馈：0：默认值，为空自动填充 1：需要，2：不需要
   * @format int32
   */
  feedBackSign: number;
  /**
   * @description
   *   处理人
   */
  feedbackPerson: string;
  /**
   * @description
   *   处理人电话
   */
  feedbackPersonPhone: string;
  /**
   * @description
   *   反馈状态:未处理|已处理
   */
  feedbackStatus: string;
  /**
   * @description
   *   常规监察任务主键
   * @format int64
   */
  monitorTaskId: number;
  /**
   * @description
   *   问题图片或者反馈图片，多个用逗号隔开
   */
  photoInfos: string;
  /**
   * @description
   *   问题描述
   */
  problemDesc: string;
  /**
   * @description
   *   处理时间
   * @format date-time
   */
  rectifyCompleteTime: string;
  /**
   * @description
   *   处理描述
   */
  rectifyDesc: string;
  /**
   * @description
   *   要求整改时间
   * @format date-time
   */
  requiredTime: string;
  /**
   * @description
   *   反馈单号
   */
  woCode: string;
}

export interface Result {
  /** @format int32 */
  code: number;
  msg: string;
  obj: any;
}

export interface RewardViolationRecordAttachmentDto {
  fileName: string;
  fileUrl: string;
}

export interface RiskRewardViolationRecordDto {
  /**
   * @description
   *   罚款或奖励金额
   */
  amount: number;
  /**
   * @description
   *   附件列表
   */
  attachmentList: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   创建人姓名
   */
  createUser: string;
  /**
   * @description
   *   违规或奖励项编码
   */
  dealCode: string;
  /**
   * @description
   *   违规或奖励项名称
   */
  dealName: string;
  /**
   * @description
   *   处理类型（1-违规项；2-奖励项）
   * @format int32
   */
  dealType: number;
  /**
   * @description
   *   主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   描述
   */
  remark: string;
  /**
   * @description
   *   示险二级表主键(场站是event_id)
   */
  riskSecondId: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景 ,5-泛能场景
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   违规或奖励目标编码
   */
  targetCode: string;
  /**
   * @description
   *   违规或奖励目标名称
   */
  targetName: string;
  /**
   * @description
   *   创建人电话
   */
  telephone: string;
  /**
   * @description
   *   处理单单号
   */
  ticketNo: string;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   更新人姓名
   */
  updateUser: string;
}

export interface RiskRewardViolationRecordInputDto {
  /**
   * @description
   *   罚款或奖励金额
   * @example
   *   10000121
   */
  amount: number;
  /**
   * @description
   *   附件列表
   */
  attachmentList: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   公司编码
   * @example
   *   0412
   */
  ccode: string;
  /**
   * @description
   *   创建人姓名
   * @example
   *   张三
   */
  createUser: string;
  /**
   * @description
   *   违规或奖励项编码
   * @example
   *   10000121
   */
  dealCode: string;
  /**
   * @description
   *   违规或奖励项名称
   * @example
   *   10000121
   */
  dealName: string;
  /**
   * @description
   *   处理类型（1-违规项；2-奖励项）
   * @format int32
   * @example
   *   10000121
   */
  dealType: number;
  /**
   * @description
   *   主键ID
   * @format int64
   * @example
   *   10000121
   */
  id: number;
  /**
   * @description
   *   项⽬id
   * @example
   *   10000121
   */
  proId: string;
  /**
   * @description
   *   描述
   * @example
   *   10000121
   */
  remark: string;
  /**
   * @description
   *   示险二级表主键(场站是event_id)
   * @example
   *   10000121
   */
  riskSecondId: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景 ,5-泛能场景
   * @format int32
   * @example
   *   10000121
   */
  sceneCode: number;
  /**
   * @description
   *   违规或奖励目标编码
   * @example
   *   10000121
   */
  targetCode: string;
  /**
   * @description
   *   违规或奖励目标名称
   * @example
   *   10000121
   */
  targetName: string;
  /**
   * @description
   *   创建人电话
   * @example
   *   13624223454
   */
  telephone: string;
  /**
   * @description
   *   处理单单号
   * @example
   *   10000121
   */
  ticketNo: string;
}

export interface RoleWhiteListDTO {
  cpmoCop: string;
  /** @format date-time */
  createTime: string;
  icomeAccount: string;
  icomeNum: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  initStatus: number;
  name: string;
  position: string;
}

export interface RoleWhiteListDto {
  cpmoCop: string;
  /** @format date-time */
  createTime: string;
  icomeAccount: string;
  icomeNum: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  initStatus: number;
  name: string;
  position: string;
}

/**
 * @description
 *   根本原因配置批量保存入参
 */
export interface RootCauseBatchSaveDto {
  /**
   * @description
   *   根本原因内容
   */
  contents: Array<string>;
  /**
   * @description
   *   多元配置ID
   */
  multipleConfigIds: Array<number>;
}

export interface RootCauseDto {
  content: string;
  /** @format int32 */
  enable: number;
  /** @format int64 */
  id: number;
  /** @format int64 */
  multipleConfigId: number;
}

/**
 * @description
 *   根本原因配置保存入参
 */
export interface RootCauseSaveDto {
  /**
   * @description
   *   根本原因内容
   */
  contents: Array<string>;
  /**
   * @description
   *   多元配置ID
   * @format int64
   */
  multipleConfigId: number;
}

/**
 * @description
 *   上屏白名单添加传入Dto
 */
export interface ScreenContentAddDto {
  /**
   * @description
   *   等级
   * @example
   *   1：高，2：中，3：低
   */
  level: Array<number>;
  /**
   * @description
   *   注释
   * @example
   *   焊口不合格
   */
  oldScreenName: string;
  /**
   * @description
   *   场景编号
   * @format int32
   * @example
   *   1：管网，2：厂站，3：户内，4：工程，5：泛能
   */
  sceneCode: number;
  /**
   * @description
   *   名称
   * @example
   *   PE管道焊口不合格
   */
  screenName: string;
  /**
   * @description
   *   名称编码
   * @example
   *   pt_alarm_003
   */
  screenTypeCode: string;
  /**
   * @description
   *   类型
   * @format int32
   * @example
   *   1：告警 ，2：示险，3：危险作业
   */
  typeCode: number;
}

export interface ScreenContentDto {
  accountList: string;
  companyCode: string;
  /** @format date-time */
  createTime: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  level: number;
  modeCodes: string;
  oldScreenName: string;
  /** @format int32 */
  onScreen: number;
  popupUrl: string;
  /** @format int32 */
  pushFlag: number;
  /** @format int32 */
  sceneCode: number;
  screenName: string;
  screenTypeCode: string;
  subAccountList: string;
  subCategory: Array<string>;
  /** @format int32 */
  typeCode: number;
}

export interface ScreenContentDtoPage {
  /** @format int32 */
  pageCount: number;
  screenContentDtos: Array<ScreenContentDto>;
}

/**
 * @description
 *   上屏条目传入实体
 */
export interface ScreenContentInputDto {
  /**
   * @description
   *   需要推送的icome账号数组
   */
  accountList: string;
  companyCode: string;
  /**
   * @description
   *   当前页
   * @format int32
   */
  correntpage: number;
  /**
   * @description
   *   管理实体
   */
  cpmoCop: string;
  /**
   * @description
   *   是否只显示当前月份数据
   * @format int32
   * @example
   *   1：当前月份，null：不是
   */
  currentMonth: number;
  /**
   * @description
   *   主键
   * @format int64
   * @example
   *   161
   */
  id: number;
  /**
   * @description
   *   是否选中标识
   * @format int32
   * @example
   *   161
   */
  isChecked: number;
  /**
   * @description
   *   级别
   * @format int32
   */
  level: number;
  /**
   * @description
   *   交互方式
   */
  modeCodes: string;
  /**
   * @description
   *   上屏开关
   * @format int32
   */
  onScreen: number;
  /**
   * @description
   *   总页
   * @format int32
   */
  pageCount: number;
  /**
   * @description
   *   分页页码
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   弹窗URL
   */
  popupUrl: string;
  /**
   * @description
   *   是否推送角色白名单
   * @format int32
   */
  pushFlag: number;
  /**
   * @description
   *   场景
   * @example
   *   1
   */
  sceneCode: Array<string>;
  /**
   * @description
   *   上屏种类编码
   */
  screenTypeCode: string;
  /**
   * @description
   *   需要推送(子公司)的icome账号数组
   */
  subAccountList: string;
  /**
   * @description
   *   管网二级分类
   */
  subCategory: string;
  /**
   * @description
   *   类型
   * @format int32
   */
  typeCode: number;
  /**
   * @description
   *   类型s
   */
  typeCodes: Array<number>;
}

/**
 * @description
 *   上屏白名单页面输出Dto
 */
export interface ScreenContentOutPutDto {
  /**
   * @description
   *   实体编码
   * @example
   *   50298136
   */
  companyCode: string;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   等级
   * @example
   *   1：高，2：中，3：低
   */
  level: string;
  /**
   * @description
   *   场景
   * @example
   *   1：管网，2：厂站，3：户内，4：工程，5：泛能
   */
  sceneName: string;
  /**
   * @description
   *   名称
   * @example
   *   PE管道焊口不合格
   */
  screenName: string;
  /**
   * @description
   *   名称编码
   * @example
   *   pt_alarm_003
   */
  screenTypeCode: string;
  /**
   * @description
   *   类型
   * @example
   *   1：告警 ，2：示险，3：危险作业
   */
  typeName: string;
}

/**
 * @description
 *   上屏白名单查询传入Dto
 */
export interface ScreenContentQueryDto {
  /**
   * @description
   *   当前页
   * @format int32
   * @example
   *   2
   */
  pageNum: number;
  /**
   * @description
   *   每页条数
   * @format int32
   * @example
   *   5
   */
  pageSize: number;
  /**
   * @description
   *   场景编号
   * @example
   *   1：管网，2：厂站，3：户内，4：工程，5：泛能
   */
  sceneCode: Array<number>;
  /**
   * @description
   *   名称
   * @example
   *   PE管道焊口不合格
   */
  screenName: string;
}

export interface ScreenRegionModuleDto {
  /** @format int32 */
  businessNum: number;
  /** @format int32 */
  cellCoverageNum: number;
  coordinate: string;
  ecode: string;
  /** @format int64 */
  id: number;
  lowPressurePipeline: string;
  middlePressurePipeline: string;
  regionName: string;
  regulatorCabinet: string;
  valveWell: string;
}

export interface ScreenRegionModuleOutputDto {
  ecode: string;
  /** @format int64 */
  id: number;
  regionName: string;
  screenRegionModuleOutputDtos: Array<ScreenRegionModuleDto>;
}

export interface ShieldDeviceCodeInfoOutputDto {
  /**
   * @description
   *   查询的全部设备编码
   */
  deviceCodes: Array<DeviceInfoOutputDto>;
  deviceType: string;
  /**
   * @description
   *   设备编码已选择个数
   * @format int32
   */
  hasSelected: number;
  /**
   * @description
   *   已选择的设备编码列表
   */
  hasSelectedDeviceCodes: Array<DeviceInfoOutputDto>;
  /**
   * @description
   *   设备编码未选择个数
   * @format int32
   */
  notSelected: number;
  /**
   * @description
   *   设备编码总个数
   * @format int32
   */
  total: number;
}

export interface ShieldDeviceConfigAddInputDto {
  /**
   * @description
   *   设备信息集合
   */
  configAddInputDtoList: Array<DeviceConfigAddInputDto>;
  /**
   * @description
   *   企业实体编码
   * @example
   *   10000800
   */
  ecode: string;
  /**
   * @description
   *   屏蔽结束时间
   * @example
   *   yyyy-MM-dd
   */
  endTime: string;
  /**
   * @description
   *   屏蔽原因
   */
  shieldReason: string;
  /**
   * @description
   *   屏蔽系统编码 多个用 , 隔开
   */
  shieldSystem: string;
  /**
   * @description
   *   屏蔽开始时间
   * @example
   *   yyyy-MM-dd
   */
  startTime: string;
}

export interface ShieldDeviceConfigInputDto {
  deviceCode: string;
  deviceId: string;
  deviceType: string;
  ecode: string;
  endTime: string;
  /** @format int64 */
  id: number;
  shieldReason: string;
  shieldSystem: string;
  startTime: string;
}

export interface ShieldDeviceConfigOutputDto {
  deviceCode: string;
  deviceType: string;
  /** @format int64 */
  id: number;
  shieldReason: string;
  shieldSystem: string;
  shieldTime: string;
}

export interface ShieldDeviceConfigQueryInputDto {
  deviceCode: string;
  deviceTypeName: string;
  ecode: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   1
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  shieldSystem: string;
}

export interface ShieldDeviceInfoOutputDto {
  deviceType: string;
  deviceTypeName: string;
}

/**
 * @description
 *   快捷建议入参
 */
export interface ShortcutInputDto {
  /**
   * @description
   *   分类
   */
  category: string;
  /**
   * @description
   *   建议
   */
  comment: string;
}

export interface ShowDangerDisposalAttachmentDto {
  /** @format date-time */
  createTime: string;
  createUser: string;
  deleteFlag: boolean;
  fileName: string;
  fileUrl: string;
  /** @format int64 */
  id: number;
  /** @format int64 */
  showDangerId: number;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
}

export interface ShowDangerDisposalProcessDto {
  /** @format date-time */
  createTime: string;
  /** @format int64 */
  id: number;
  nodeContent: string;
  nodeName: string;
  operator: string;
  operatorPhone: string;
  /** @format int32 */
  sceneCode: number;
  /** @format int64 */
  showDangerId: number;
}

export interface ShowDangerDto {
  /** @format int32 */
  autoStatus: number;
  companyCode: string;
  createTime: string;
  dangerContent: string;
  dangerContentNew: string;
  /** @format date-time */
  dangerTime: string;
  dangerTypeCode: string;
  evaluation: string;
  eventId: string;
  handler: string;
  /** @format int64 */
  id: number;
  latitude: number;
  levTotalDto: LevTotalDto;
  /** @format int32 */
  level: number;
  location: string;
  longitude: number;
  orgId: string;
  pressureTestType: string;
  projectId: string;
  projectName: string;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  statusCode: number;
  /** @format int32 */
  timeout: number;
  weldMachineType: string;
}

/**
 * @description
 *   站点位置Dto
 */
export interface StandLocationDto {
  /**
   * @description
   *   纬度
   */
  latitude: string;
  /**
   * @description
   *   经度
   */
  longitude: string;
  /**
   * @description
   *   站点Code
   */
  stationCode: string;
}

/**
 * @description
 *   问题整改工单列表
 */
export interface StationCheckRectifyDetailDto {
  /**
   * @description
   *   设备地址
   */
  address: string;
  /**
   * @description
   *   发起人
   */
  appraisePerson: string;
  /**
   * @description
   *   发起人电话
   */
  appraisePhone: string;
  /**
   * @description
   *   发起时间
   * @format date-time
   */
  appraiseTime: string;
  /**
   * @description
   *   反馈类型
   */
  businessType: string;
  /**
   * @description
   *   设备型号
   */
  eqModel: string;
  /**
   * @description
   *   设备名称
   */
  eqName: string;
  /**
   * @description
   *   处理人
   */
  feedbackPerson: string;
  /**
   * @description
   *   处理人电话
   */
  feedbackPersonPhone: string;
  /**
   * @description
   *   反馈状态
   */
  feedbackStatus: string;
  /**
   * @description
   *   任务id
   * @format int64
   */
  monitorTaskId: number;
  /**
   * @description
   *   问题描述
   */
  problemDesc: string;
  /**
   * @description
   *   处理时间
   * @format date-time
   */
  rectifyCompleteTime: string;
  /**
   * @description
   *   处理描述
   */
  rectifyDesc: string;
  /**
   * @description
   *   处理相关照片
   */
  rectifyImg: string;
  /**
   * @description
   *   相关照片
   */
  requiredImg: string;
  /**
   * @description
   *   要求整改时间
   * @format date-time
   */
  requiredTime: string;
  /**
   * @description
   *   厂站名称
   */
  stationName: string;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
  /**
   * @description
   *   反馈单号
   */
  woCode: string;
}

/**
 * @description
 *   问题整改工单列表1
 */
export interface StationCheckRectifyDto {
  /**
   * @description
   *   发起人
   */
  appraisePerson: string;
  /**
   * @description
   *   发起时间
   * @format date-time
   */
  appraiseTime: string;
  /**
   * @description
   *   处理人
   */
  assignUser: string;
  /**
   * @description
   *   反馈类型
   */
  businessType: string;
  /**
   * @description
   *   企业编码
   */
  ecode: string;
  /**
   * @description
   *   状态
   */
  feedbackStatus: string;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   问题描述
   */
  problemDesc: string;
  /**
   * @description
   *   处理时间
   * @format date-time
   */
  rectifyCompleteTime: string;
  /**
   * @description
   *   是否小红点
   */
  redDot: boolean;
  /**
   * @description
   *   要求反馈时间
   * @format date-time
   */
  requiredTime: string;
  /**
   * @description
   *   反馈单号
   */
  woCode: string;
}

export interface StationCheckWorkEvaluateOutputDto {
  checkTypeCode: string;
  /** @format int32 */
  evaluateCount: number;
  /** @format int32 */
  unqualifiedCount: number;
}

export interface StationCheckWorkInputDto {
  checkTypeCode: string;
  ecode: string;
  /** @format int32 */
  proportion: number;
}

export interface StationCheckWorkListOutputDto {
  checkTypeCode: string;
  /** @format int32 */
  supervisedCount: number;
  /** @format int32 */
  unqualifiedCount: number;
  /** @format int32 */
  unsupervisedCount: number;
  /** @format int32 */
  workCount: number;
}

export interface StationModuleInputDto {
  /** @format int32 */
  enabled: number;
  /** @format int64 */
  moduleId: number;
  pushOtherEcode: string;
  stationName: string;
  stationType: string;
}

export interface StationModuleOutputDto {
  /** @format int32 */
  enabled: number;
  /** @format int64 */
  moduleId: number;
  moduleName: string;
  pushOtherEcode: string;
  stationCode: string;
  stationName: string;
  stationType: string;
}

export interface StationModuleQueryInputDto {
  ecode: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   1
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  stationName: string;
  stationType: string;
}

/**
 * @description
 *   告警规则查询实体2
 */
export interface StationRectifyQueryDto {
  /**
   * @description
   *   发起结束时间
   */
  appraiseEndTime: string;
  /**
   * @description
   *   发起开始时间
   */
  appraiseStartTime: string;
  /**
   * @description
   *   排序顺序 true：顺序 false：倒序（默认倒序）
   * @example
   *   false
   */
  asc: boolean;
  /**
   * @description
   *   反馈类型
   */
  businessType: string;
  /**
   * @description
   *   实体编码
   */
  compCodes: Array<string>;
  /**
   * @description
   *   公司编码
   */
  ecode: string;
  /**
   * @description
   *   反馈结束时间
   */
  feedbackEndTime: string;
  /**
   * @description
   *   反馈开始时间
   */
  feedbackStartTime: string;
  /**
   * @description
   *   状态
   */
  feedbackStatus: string;
  /**
   * @description
   *   页号（默认不分页）
   * @format int32
   * @example
   *   1
   */
  pageNum: number;
  /**
   * @description
   *   页大小（默认不分页）
   * @format int32
   * @example
   *   10
   */
  pageSize: number;
  /**
   * @description
   *   整改开始时间
   */
  requireStartTime: string;
  /**
   * @description
   *   整改结束时间
   */
  requiredEndTime: string;
  /**
   * @description
   *   反馈单号
   */
  woCode: string;
}

export interface SubScribeEventFeignVo {
  cpmoCop: string;
  eventLvl: Array<number>;
  eventTypes: Array<number>;
  /** @format int32 */
  subType: number;
}

export interface SubScribeEventVo {
  cpmoCop: string;
  /**
   * @description
   *   事件等级，0-未配置，1-低，2-中，3-高
   */
  eventLvl: Array<number>;
  /**
   * @description
   *   事件类型
   */
  eventTypes: Array<number>;
  /**
   * @description
   *   订阅类型，0-订阅原始事件，1-联动事件，2-原始事件和联动事件，不填使用默认值0
   * @format int32
   */
  subType: number;
}

export interface SueWarnRiskInputDto {
  /** @format int32 */
  dataType: number;
  id: string;
  /** @format int32 */
  status: number;
  sueList: Array<SueWarnRiskInputDto>;
}

export interface SwitchUserEntityInputDto {
  ecode: string;
  /** @format int32 */
  type: number;
}

export interface SynCompanyConfigInputDto {
  /**
   * @description
   *   实体编码
   */
  ecode: string;
  /**
   * @description
   *   告警|示险类型集合
   */
  typeCodes: Array<string>;
}

export interface SystemBasicInformationInputDto {
  /** @format int64 */
  id: number;
  systemCode: string;
  systemName: string;
}

export interface SystemBasicInformationOutputDto {
  /** @format int64 */
  id: number;
  systemCode: string;
  systemName: string;
}

export interface SystemTopicCofigOtherInputDto {
  /**
   * @description
   *   业务模块分类； alarm：告警， show_danger
   */
  category: string;
  /**
   * @description
   *   场景； 1：管网， 2：场站， 3：户内， 4：工程， 5：泛能
   * @format int32
   */
  sceneCode: number;
}

export interface SystemTopicConfigInputDto {
  /**
   * @description
   *   业务模块分类； alarm：告警， show_danger
   */
  category: string;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   场景； 1：管网， 2：场站， 3：户内， 4：工程， 5：泛能
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   系统编码
   */
  systemCode: string;
  /**
   * @description
   *   系统名称
   */
  systemName: string;
  /**
   * @description
   *   topic名称
   */
  topic: string;
  /**
   * @description
   *   工单关联告警类型
   */
  topicRelationType: string;
  /** @format int32 */
  topicType: number;
  /**
   * @description
   *   topic类型
   */
  topicTypeName: string;
}

export interface SystemTopicConfigOutputDto {
  category: string;
  disposalSyncSystem: string;
  /** @format int64 */
  id: number;
  relationList: Array<TopicRelation>;
  /** @format int32 */
  sceneCode: number;
  systemCode: string;
  systemName: string;
  topic: string;
  topicRelationType: string;
  topicType: string;
  topicTypeName: string;
}

export interface SystemTopicConfigQueryInputDto {
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   1
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  queryConditions: string;
  /** @format int32 */
  sceneCode: number;
  systemCode: string;
  systemName: string;
  topicTypeName: string;
}

export interface SystemTopicDto {
  systemCode: string;
  systemName: string;
  topic: string;
}

export interface TgshInfoDTO {
  addrContract: string;
  addressBook: string;
  alias: string;
  baseprice: string;
  brschDep1: string;
  brschDep2: string;
  compCodeTxt: string;
  companycode: string;
  contactNum: string;
  contactNum2: string;
  contactPeople: string;
  contactphone: string;
  contractAccount: string;
  contractAccountDesc: string;
  contractCode: string;
  customerDesc: string;
  customerNum: string;
  customerStatus: string;
  customerType: string;
  ecode: string;
  gasProperties: string;
  geom: string;
  /** @format int32 */
  gid: number;
  gisCode: string;
  gmtModifiedby: string;
  isHistory: string;
  isSend: string;
  label: string;
  latitude: number;
  legalOrgTxt: string;
  longitude: number;
  maxflow: string;
  meterQuantity: string;
  orderSet: string;
  partner: string;
  partnerTxt: string;
  replaceTime: string;
  serge: string;
  /** @format int32 */
  showType: number;
  smsNum: string;
  stationId: string;
  /** @format date-time */
  sysInsertTime: string;
  updateTime: string;
  vstelle: string;
  workZone: string;
  workZoneBm: string;
  ykkqty: string;
}

export interface TimeDictionaryDto {
  dicTime: string;
  /** @format int32 */
  id: number;
  timeUnit: string;
}

/**
 * @description
 *   超时提醒返回参数
 */
export interface TimeoutRemindConfigOutputDto {
  /**
   * @description
   *   分类；alarm：告警，show_danger：示险
   */
  category: string;
  /**
   * @description
   *   分类；alarm：告警，show_danger：示险
   */
  categoryTxt: string;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   创建人
   */
  createUser: string;
  /**
   * @description
   *   持续次数
   * @format int32
   */
  duration: number;
  /**
   * @description
   *   实体编码
   */
  ecode: string;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   间隔时间（分钟）
   * @format int32
   */
  intervalTime: number;
}

/**
 * @description
 *   超时提醒新增或修改入参
 */
export interface TimeoutRemindInputDto {
  /**
   * @description
   *   分类；alarm：告警，show_danger：示险
   */
  category: string;
  /**
   * @description
   *   持续次数
   * @format int32
   */
  duration: number;
  /**
   * @description
   *   实体编码
   */
  ecode: string;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   间隔时间（分钟）
   * @format int32
   */
  intervalTime: number;
}

/**
 * @description
 *   工作台首页左侧个人信息导航区今日工作成果实体
 */
export interface TodayWorkProduct {
  /**
   * @description
   *   告警示险处置量
   * @format int32
   */
  alarmShowDangerTotal: number;
  /**
   * @description
   *   告警示险评价量
   * @format int32
   */
  appraiseTotal: number;
  /**
   * @description
   *   告警示险评价不合格量
   * @format int32
   */
  appraiseUnqualifiedTotal: number;
  /**
   * @description
   *   危险做业评价量
   * @format int32
   */
  dangerWorkEvaluateTotal: number;
  /**
   * @description
   *   数据示险处置量
   * @format int32
   */
  dataShowDangerTotal: number;
  /**
   * @description
   *   常规监察评价量
   * @format int32
   */
  evaluateTotal: number;
  /**
   * @description
   *   常规监察不合格量
   * @format int32
   */
  unqualifiedTotal: number;
}

/**
 * @description
 *   告警示险处置顶部一句话对应数据输出DTO
 */
export interface TopSentenceOutputDto {
  /**
   * @description
   *   当前待评价状态的告警统计总数
   * @format int32
   */
  alarmNotEvaluatedNum: number;
  /**
   * @description
   *   当前待处置状态的告警统计数
   * @format int32
   */
  alarmUnhandledNum: number;
  /**
   * @description
   *   当前处置中状态的告警示险户内户内抢险的统计总数
   * @format int32
   */
  handlingNum: number;
  /**
   * @description
   *   当前待处置状态的户内抢险统计数
   * @format int32
   */
  rescueUnhandledNum: number;
  /**
   * @description
   *   当前待处置状态的示险统计数
   * @format int32
   */
  showDangerUnhandledNum: number;
}

export interface TopicRelation {
  typeCode: string;
  typeName: string;
}

export interface TypeInfo {
  typeCode: string;
  typeName: string;
}

export interface UnqualifiedEvaluationConfigDto {
  /**
   * @description
   *   企业编码
   */
  ecode: string;
  /**
   * @description
   *   总公司标识
   */
  primaryEcode: boolean;
}

export interface UnqualifiedEvaluationInfo {
  /**
   * @description
   *   已配置推送的icome账号list，多个用逗号隔开
   */
  accountList: string;
  /**
   * @description
   *   公司列表
   */
  companyDetail: Array<CompanyDetail>;
  /**
   * @description
   *   企业编码
   */
  ecode: string;
  /**
   * @description
   *   总公司标识
   */
  primaryEcode: boolean;
}

/**
 * @description
 *   危险作业,常规检查不合格评价推送icome入参
 */
export interface UnqualifiedEvaluationInputDto {
  /**
   * @description
   *   公司编码
   * @example
   *   0161
   */
  companyCode: string;
  /**
   * @description
   *   文本内容
   * @example
   *   问题描述、地址、责任人、要求反馈时间
   */
  content: string;
  /**
   * @description
   *   详情页URL 传null则没有详情页
   * @example
   *   screen.enn.cn
   */
  detailUrl: string;
  /**
   * @description
   *   场景名称
   * @example
   *   管网
   */
  sceneName: string;
  typeCode: string;
}

/**
 * @description
 *   不合格评价配置查询DTO
 */
export interface UnqualifiedEvaluationReqDto {
  /**
   * @description
   *   企业列表
   */
  configs: Array<UnqualifiedEvaluationConfigDto>;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
}

/**
 * @description
 *   不合格评价配置响应DTO
 */
export interface UnqualifiedEvaluationRespDto {
  /**
   * @description
   *   需要推送的icome账号list，多个用逗号隔开
   */
  accountList: string;
  /**
   * @description
   *   公司列表
   */
  companyInfo: Array<CompanyInfo>;
  /**
   * @description
   *   企业编码
   */
  ecode: string;
  /**
   * @description
   *   推送人员列表
   */
  pushPerson: Array<PushPersonInfo>;
}

export interface UnqualifiedEvaluationSaveDto {
  /**
   * @description
   *   当前企业实体配置详情
   */
  details: Array<UnqualifiedEvaluationInfo>;
  /**
   * @description
   *   模块编码；ndangerous_work | check
   */
  module: string;
  /**
   * @description
   *   模块名称；ndangerous_work：危险作业，check：常规监察
   */
  moduleName: string;
  /**
   * @description
   *   多元配置ID
   * @format int64
   */
  multipleConfigId: number;
  /**
   * @description
   *   场景编码
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
  /**
   * @description
   *   类型编码
   */
  typeName: string;
}

export interface UnqualifiedItemDto {
  name: string;
  subNames: Array<string>;
}

export interface UnusedDeskNumSearchInput {
  ecodeList: Array<string>;
  /** @format int64 */
  expUserId: number;
}

export interface UserInfoDTO {
  password: string;
  userName: string;
}

export interface UserInfoDto {
  companyCode: string;
  companyName: string;
  email: string;
  empNo: string;
  employeeContract: string;
  glst: string;
  glstdm: string;
  mobile: string;
  orgCode: string;
  orgName: string;
  orgPath: string;
  postCode: string;
  postName: string;
  realName: string;
  status: string;
  teleNo: string;
  userId: string;
  userName: string;
  userType: string;
}

export interface VideoAuthConfigOutput {
  companyCode: string;
  password: string;
  source: string;
  /** @format int32 */
  type: number;
  username: string;
  videoAppSecret: string;
  videoAppkey: string;
  videoCallBackUrl: string;
  videoHost: string;
}

export interface VideoBallAndHatReqDto {
  /**
   * @description
   *   公司实体编码
   */
  companyCode: string;
  /**
   * @description
   *   场景枚举
   * @format int32
   */
  sceneCode: number;
}

export interface VideoBallAndHatRespDto {
  /**
   * @description
   *   场景名称
   */
  cameraType: string;
  /**
   * @description
   *   在线数量
   * @format int32
   */
  onlineNumber: number;
  /**
   * @description
   *   注册数量
   * @format int32
   */
  registerNumber: number;
}

export interface VideoDangerWorkDto {
  /** @format int32 */
  aiCount: number;
  cameraCode: string;
  ccode: string;
  cname: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  newFlag: number;
  /** @format int64 */
  proId: number;
  proName: string;
  /** @format int32 */
  status: number;
  subTypeId: string;
  subTypeName: string;
  typeCode: string;
  /** @format date-time */
  workStartTime: string;
  workTypeCode: string;
  workTypeName: string;
}

export interface VideoOverviewDangerWorkVideoDto {
  /**
   * @description
   *   视频设备编码
   */
  cameraCode: string;
  /**
   * @description
   *   公司编码
   */
  ccode: string;
  /**
   * @description
   *   公司名称
   */
  cname: string;
  /**
   * @description
   *   危险作业ID
   * @format int64
   */
  dangerWorkId: number;
  /**
   * @description
   *   危险作业项目名称
   */
  projectName: string;
  /**
   * @description
   *   场景编码
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   危险作业状态
   */
  status: string;
  /**
   * @description
   *   危险作业子类型编码
   */
  subTypeCode: string;
  /**
   * @description
   *   危险作业子类型名称
   */
  subTypeName: string;
  /**
   * @description
   *   危险作业类型编码
   */
  typeCode: string;
  /**
   * @description
   *   危险作业类型名称
   */
  typeName: string;
  /**
   * @description
   *   作业单号（管网场景特有）
   */
  woCode: string;
  /**
   * @description
   *   危险作业开始时间
   * @format date-time
   */
  workStartTime: string;
}

export interface VideoOverviewProjectVideoDto {
  /**
   * @description
   *   智能分析提示
   */
  analysisPrompt: string;
  /**
   * @description
   *   视频设备编码
   */
  cameraCode: string;
  /**
   * @description
   *   视频设备名称
   */
  cameraName: string;
  /**
   * @description
   *   是否关注
   */
  focus: boolean;
  /**
   * @description
   *   项目ID
   * @format int64
   */
  projectId: number;
  /**
   * @description
   *   项目经理姓名
   */
  projectManagerName: string;
  /**
   * @description
   *   项目经理电话
   */
  projectManagerPhone: string;
  /**
   * @description
   *   项目名称
   */
  projectName: string;
  /**
   * @description
   *   场景编码
   * @format int32
   */
  sceneCode: number;
}

export interface VideoRuleRespDto {
  /**
   * @description
   *   球机告警比例
   */
  ballCamerasProportion: string;
  /**
   * @description
   *   刷新频率
   */
  refreshFrequency: string;
  /**
   * @description
   *   告警名称
   */
  ruleName: string;
  /**
   * @description
   *   安全帽告警比例
   */
  safetyHatProportion: string;
}

/**
 * @description
 *   视频告警数量入参
 */
export interface VideoWarnReqDto {
  /**
   * @description
   *   播放视频的Id列表
   */
  videoIds: Array<string>;
}

/**
 * @description
 *   视频告警数量出参
 */
export interface VideoWarnRespDto {
  /**
   * @description
   *   播放视频的Id
   */
  videoId: string;
  /**
   * @description
   *   告警数量
   * @format int32
   */
  warnNumber: number;
}

export interface View {
  contentType: string;
}

export interface ViolationRewardDto {
  category: string;
  /** @format int32 */
  defaultValue: number;
  description: string;
  editable: boolean;
  /** @format int64 */
  id: number;
  itemCode: string;
  itemName: string;
  /** @format int32 */
  lowerThreshold: number;
  /** @format int64 */
  metadataId: number;
  /** @format int64 */
  multipleConfigId: number;
  typeCode: string;
  typeName: string;
  /** @format int32 */
  upperThreshold: number;
}

/**
 * @description
 *   违规项奖励项保存入参
 */
export interface ViolationRewardInputDto {
  /**
   * @description
   *   多元配置ID
   * @format int64
   */
  multipleConfigId: number;
  /**
   * @description
   *   违规项奖励项
   */
  violationRewards: Array<ViolationRewardDto>;
}

export interface ViolationRewardMetadataDto {
  category: string;
  /** @format date-time */
  createTime: string;
  createUser: string;
  /** @format int32 */
  defaultValue: number;
  deleteFlag: boolean;
  /** @format int64 */
  id: number;
  itemCode: string;
  itemName: string;
  /** @format int32 */
  lowerThreshold: number;
  /** @format int32 */
  sceneCode: number;
  typeCode: string;
  typeName: string;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
  /** @format int32 */
  upperThreshold: number;
}

/**
 * @description
 *   违规项奖励项元数据保存入参
 */
export interface ViolationRewardMetadataInputDto {
  /**
   * @description
   *   分类
   */
  category: string;
  /**
   * @description
   *   默认值
   * @format int32
   */
  defaultValue: number;
  /**
   * @description
   *   元数据ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   项目编码
   */
  itemCode: string;
  /**
   * @description
   *   项目名称
   */
  itemName: string;
  /**
   * @description
   *   阈值下限
   * @format int32
   */
  lowerThreshold: number;
  /**
   * @description
   *   场景
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   类型编码
   */
  typeCode: string;
  /**
   * @description
   *   类型名称
   */
  typeName: string;
  /**
   * @description
   *   阈值上限
   * @format int32
   */
  upperThreshold: number;
}

export interface VirtualOrganizationCreateDto {
  /**
   * @description
   *   企业所在地
   */
  abbreviations: string;
  /**
   * @description
   *   公司列表
   */
  companyCodes: Array<string>;
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   管理实体名称
   */
  cpmoCopTxt: string;
  /**
   * @description
   *   更新前管理实体编码
   */
  oldCpmoCop: string;
}

/**
 * @description
 *   天气DTO
 */
export interface WeatherDto {
  /**
   * @description
   *   日期
   */
  date: string;
  /**
   * @description
   *   星期
   */
  dayOfWeek: string;
  /**
   * @description
   *   最高温度
   */
  highestTemperature: string;
  /**
   * @description
   *   湿度
   */
  humidity: string;
  /**
   * @description
   *   最低温度
   */
  lowestTemperature: string;
  /**
   * @description
   *   降水概率
   */
  precipitationProbability: string;
  /**
   * @description
   *   降雪量
   */
  snowfall: string;
  /**
   * @description
   *   温度
   */
  temperature: string;
  /**
   * @description
   *   时间
   */
  time: string;
  /**
   * @description
   *   紫外线强度
   */
  ultravioletIntensity: string;
  /**
   * @description
   *   数据更新时间
   */
  updateTime: string;
  /**
   * @description
   *   天气气象
   */
  weather: string;
  /**
   * @description
   *   风向
   */
  windDirection: string;
  /**
   * @description
   *   风力等级
   */
  windScale: string;
  /**
   * @description
   *   风速
   */
  windSpeed: string;
}

/**
 * @description
 *   天气概要DTO
 */
export interface WeatherSummaryDto {
  /**
   * @description
   *   城市
   */
  city: string;
  /**
   * @description
   *   温度
   */
  temperature: string;
  /**
   * @description
   *   预警级别
   */
  warningLevel: string;
  /**
   * @description
   *   预警类型
   */
  warningType: string;
  /**
   * @description
   *   天气
   */
  weather: string;
}

/**
 * @description
 *   天气预警DTO
 */
export interface WeatherWarningDto {
  /**
   * @description
   *   发布时间
   */
  publishTime: string;
  /**
   * @description
   *   预警内容
   */
  warningContent: string;
  /**
   * @description
   *   预警级别
   */
  warningLevel: string;
  /**
   * @description
   *   预警标题
   */
  warningTitle: string;
  /**
   * @description
   *   预警类型
   */
  warningType: string;
}

/**
 * @description
 *   危险作业,常规检查周评推送icome入参
 */
export interface WeeklyEvaluationInputDto {
  /**
   * @description
   *   文本内容
   */
  content: string;
  /**
   * @description
   *   详情页URL 传null则没有详情页
   */
  detailUrl: string;
  /**
   * @description
   *   推送人
   */
  receivers: Array<string>;
}

export interface WorkGuideDto {
  guideContent: string;
  /** @format int64 */
  id: number;
  /** @format int64 */
  multipleConfigId: number;
}

/**
 * @description
 *   作业指导保存入参
 */
export interface WorkGuideInputDto {
  /**
   * @description
   *   作业指导内容
   */
  guideContent: string;
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   多元配置ID
   * @format int64
   */
  multipleConfigId: number;
}

export interface WorkRegulationInputDto {
  companyCodes: Array<string>;
  ecode: string;
  /**
   * @description
   *   当前页
   * @format int32
   * @example
   *   2
   */
  pageNum: number;
  /**
   * @description
   *   每页条数
   * @format int32
   * @example
   *   5
   */
  pageSize: number;
  /**
   * @description
   *   场景(数组)
   * @example
   *   \['1','2','3'\]
   */
  sceneCode: Array<string>;
  /** @format int32 */
  workType: number;
}

export interface WorkbenchAlarmRiskPushConfigInputDto {
  /** @format int64 */
  id: number;
  pushCompanyCode: string;
  pushSystem: string;
}

export interface WorkbenchAlarmRiskPushConfigOutputDto {
  canSelectSystemList: Array<SystemBasicInformationOutputDto>;
  category: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  isEnable: number;
  oldTypeName: string;
  pushCompanyCode: Array<string>;
  pushSystem: Array<string>;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  status: number;
  typeCode: string;
  typeName: string;
}

export interface WorkbenchAlarmRiskPushConfigQueryInputDto {
  category: string;
  ecode: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   1
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  /** @format int32 */
  sceneCode: number;
  typeCode: string;
  typeName: string;
}

export interface WorkbenchAlarmStandardCauseQueryInputDto {
  /**
   * @description
   *   管理实体编码
   * @example
   *   50298136
   */
  ecode: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景，5：泛能
   * @format int32
   * @example
   *   1
   */
  sceneCode: number;
  /**
   * @description
   *   类型编码
   */
  typeCode: Array<string>;
}

export interface WorkbenchAlarmStandardInputDto {
  category: string;
  content: string;
  /** @format date-time */
  createTime: string;
  createUser: string;
  ecode: string;
  enable: boolean;
  /** @format int64 */
  id: number;
  /** @format int64 */
  multipleConfigId: number;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  sceneCode: number;
  typeCode: string;
  typeCodes: Array<AddStandardCause>;
  typeName: string;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
}

export interface WorkbenchCityOutput {
  city: string;
  cpmoCop: string;
}

export interface WorkbenchDeskPhoneDTO {
  canOutboundNum: string;
  checkedPhotoInfo: string;
  cpmoCop: string;
  cpmoCopName: string;
  deskPhotoInfo: string;
  ecode: string;
  /** @format int64 */
  id: number;
}

export interface WorkbenchDeskPhoneInfoInputDto {
  /**
   * @description
   *   分机号
   */
  extensionNum: string;
  /**
   * @description
   *   坐席信息集合
   */
  outboundNumInfoList: Array<OutboundNumInfo>;
}

export interface WorkbenchDeskPhoneInfoOutputDto {
  /**
   * @description
   *   管理实体编码
   * @example
   *   50298136
   */
  ecode: string;
  /**
   * @description
   *   分机号
   */
  extensionNum: string;
  /**
   * @description
   *   总公司配置的分机号集合
   */
  extensionNumList: Array<string>;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   坐席信息集合
   */
  outboundNumInfoList: Array<OutboundNumInfo>;
}

export interface WorkbenchDeskPhoneInputDTO {
  cpmoCop: string;
  /** @format date-time */
  createTime: string;
  /** @format date-time */
  createTime1: string;
  createUser: string;
  ecode: string;
  /** @format int64 */
  id: number;
  outboundNum: string;
  /** @format date-time */
  updateTime: string;
  /** @format date-time */
  updateTime1: string;
  updateUser: string;
}

export interface WorkbenchMultipleConfigDto {
  content: string;
  ecode: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  sceneCode: number;
  typeCode: string;
  typeName: string;
}

export interface WorkbenchOutboundConfigDto {
  ecode: string;
  enable: boolean;
  ename: string;
  extensionNum: string;
  /** @format int64 */
  id: number;
  outboundNum: string;
}

export interface WorkbenchOutboundConfigInputDto {
  deskPhoneInfoInputDtoList: Array<WorkbenchDeskPhoneInfoInputDto>;
  /**
   * @description
   *   管理实体编码
   * @example
   *   50298136
   */
  ecode: string;
}

export interface WorkbenchOutboundUpdateInputDto {
  deskPhoneInfoInputDtoList: Array<WorkbenchDeskPhoneInfoInputDto>;
  /**
   * @description
   *   管理实体编码
   * @example
   *   50298136
   */
  ecode: string;
  /**
   * @description
   *   分机号
   */
  extensionNum: string;
}

export interface WorkbenchParentOutboundConfigDto {
  ecode: string;
  enable: boolean;
  /**
   * @description
   *   分机号
   */
  extensionNum: string;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   坐席号
   */
  outboundNum: string;
  /**
   * @description
   *   加密后密码
   */
  password: string;
}

export interface WorkbenchParentOutboundDto {
  ecode: string;
  /**
   * @description
   *   分机号
   */
  extensionNum: string;
  /** @format int64 */
  id: number;
}

/**
 * @description
 *   工作台搜索列表入参Dto
 */
export interface WorkbenchSearchListInputDto {
  /**
   * @description
   *   告警名称(管网专用)
   */
  alarmContent: string;
  /**
   * @description
   *   评价结果,F-不合格,P-合格,E-优秀(工程危险作业有这个选项,关单评价没有),N-未评价(危险作业有这个选项,关单评价没有)[F,P,E,N]
   */
  appraise: Array<string>;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  cpmoCop: Array<string>;
  /**
   * @description
   *   告警示险数据类型,1有效,2无效
   * @format int32
   * @example
   *   1
   */
  dataType: number;
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  ecode: Array<string>;
  /**
   * @description
   *   当前管理实体代码
   * @example
   *   10000800
   */
  ecode0: string;
  /**
   * @description
   *   结束时间 yyyy-MM-dd
   * @format date-time
   * @example
   *   2022-07-19
   */
  endDate: string;
  /**
   * @description
   *   设备编码(管网专用,管网告警有设备编码才会传这个字段)
   * @example
   *   868591054772248
   */
  eqCode: string;
  /**
   * @description
   *   设备名称(管网专用,管网告警有设备名称才会传这个字段)
   */
  eqName: string;
  /**
   * @description
   *   评价结束时间 yyyy-MM-dd
   * @format date-time
   * @example
   *   2022-07-19
   */
  evaluationEndDate: string;
  /**
   * @description
   *   评价开始时间 : yyyy-MM-dd
   * @format date-time
   * @example
   *   2022-07-18
   */
  evaluationStartDate: string;
  /**
   * @description
   *   ID(管网专用,管网告警有设备名称才会传这个字段)
   */
  id: string;
  /**
   * @description
   *   是否评价： 0： 未评价， 1： 已评价
   * @format int32
   * @example
   *   0
   */
  isEvaluate: number;
  /**
   * @description
   *   位置(管网专用)
   */
  location: string;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   1
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  /**
   * @description
   *   实际作业结束时间 yyyy-MM-dd
   * @format date-time
   * @example
   *   2022-07-19
   */
  pjActualEndtime: string;
  /**
   * @description
   *   实际作业开始时间 : yyyy-MM-dd
   * @format date-time
   * @example
   *   2022-07-18
   */
  pjActualStarttime: string;
  /**
   * @description
   *   处置描述
   */
  releaseEvaluation: string;
  /**
   * @description
   *   告警原因(管网专用)
   */
  rootCause: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景，5：泛能
   * @format int32
   * @example
   *   1
   */
  sceneCode: number;
  /**
   * @description
   *   搜索名称（名称/位置/id/(告警/示险原因)）
   */
  searchName: string;
  /**
   * @description
   *   开始时间 : yyyy-MM-dd
   * @format date-time
   * @example
   *   2022-07-18
   */
  startDate: string;
  /**
   * @description
   *   处置状态
   * @format int32
   * @example
   *   1
   */
  statusCode: number;
  /**
   * @description
   *   二级分类：管网、聚安卫士、无人站
   */
  subCategory: string;
  /**
   * @description
   *   类型编码数组
   */
  typeCodes: Array<string>;
  typeName: Array<string>;
}

/**
 * @description
 *   工作台搜索列表入参Dto
 */
export interface WorkbenchSearchListOtherCentreInputDto {
  /**
   * @description
   *   评价结果,F-不合格,P-合格,E-优秀(工程危险作业有这个选项,关单评价没有),N-未评价(危险作业有这个选项,关单评价没有)[F,P,E,N]
   */
  appraise: Array<string>;
  cpmoCop: Array<string>;
  /**
   * @description
   *   告警示险数据类型,1有效,2无效
   * @format int32
   * @example
   *   1
   */
  dataType: number;
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  ecode: Array<string>;
  /**
   * @description
   *   当前管理实体代码
   * @example
   *   10000800
   */
  ecode0: string;
  /**
   * @description
   *   结束时间 yyyy-MM-dd
   * @format date-time
   * @example
   *   2022-07-19
   */
  endDate: string;
  /**
   * @description
   *   设备编码(管网专用,管网告警有设备编码才会传这个字段)
   * @example
   *   868591054772248
   */
  eqCode: string;
  /**
   * @description
   *   是否评价： 0： 未评价， 1： 已评价
   * @format int32
   * @example
   *   0
   */
  isEvaluate: number;
  /**
   * @description
   *   页号
   * @format int32
   * @example
   *   1
   */
  pageNum: number;
  /**
   * @description
   *   页大小
   * @format int32
   * @example
   *   3
   */
  pageSize: number;
  /**
   * @description
   *   处置描述
   */
  releaseEvaluation: string;
  /**
   * @description
   *   场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景，5：泛能
   * @format int32
   * @example
   *   1
   */
  sceneCode: number;
  /**
   * @description
   *   搜索名称（名称/位置/id/(告警/示险原因)）
   */
  searchName: string;
  /**
   * @description
   *   开始时间 : yyyy-MM-dd
   * @format date-time
   * @example
   *   2022-07-18
   */
  startDate: string;
  /**
   * @description
   *   处置状态
   * @format int32
   * @example
   *   1
   */
  statusCode: number;
  /**
   * @description
   *   二级分类：管网、聚安卫士、无人站
   */
  subCategory: string;
  /**
   * @description
   *   类型编码数组
   */
  typeCodes: Array<string>;
  typeName: Array<string>;
}

export interface WorkbenchTitleInfoOutput {
  ecode: string;
  ename: string;
  regionCode: string;
  regionName: string;
}

export interface WorkbenchTitleInputDto {
  abbreviations: string;
  ecode: string;
  ename: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  operation: number;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  regionCode: string;
  regionName: string;
  searchCriteria: string;
}

export interface WorkbenchTitleOutput {
  abbreviations: string;
  /** @format int32 */
  alarmSize: number;
  ancestors: string;
  callIsConfig: string;
  /** @format int32 */
  checkSize: number;
  /** @format int32 */
  dangerousWorkSize: number;
  ecode: string;
  ename: string;
  gisIsConfig: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  operate: number;
  /** @format int64 */
  pid: number;
  queryCode: string;
  regionCode: string;
  regionName: string;
  /** @format int32 */
  showDangerSize: number;
  /** @format int32 */
  size: number;
  status: string;
  treeList: Array<WorkbenchTitleOutput>;
  videoIsConfig: string;
}

export interface WorkbenchTitles {
  cpmoCop: string;
}

export interface WorkbenchTitlesOutput {
  cpmoCop: string;
  title: string;
}

/**
 * @description
 *   工作台用户收藏
 */
export interface WorkbenchUserFocusInputDTO {
  /**
   * @description
   *   关注对象唯一标识;危险作业:危险作业id+woCode(危险作业id与woCode中间无符号),工程施工: projectId-cameraCode(中间有个-)
   */
  objectId: string;
  /**
   * @description
   *   关注对象类型;1-危险作业,2-工程实况
   * @format int32
   */
  objectType: number;
  /**
   * @description
   *   场景编码;1-管网场景,2-场站场景,3-户内场景,4-工程场景,5-泛能
   * @format int32
   */
  sceneCode: number;
}

export interface PageDataBallheadCameraDto {
  data: Array<BallheadCameraDto>;
  /** @format int64 */
  total: number;
}

export interface PageDataNetworkDangerRegulationOutputDTO {
  data: Array<NetworkDangerRegulationOutputDTO>;
  /** @format int64 */
  total: number;
}

export interface PageDataVideoDangerWorkDto {
  data: Array<VideoDangerWorkDto>;
  /** @format int64 */
  total: number;
}

export interface PageDataVideoOverviewProjectVideoDto {
  data: Array<VideoOverviewProjectVideoDto>;
  /** @format int64 */
  total: number;
}

export interface PageInfoIotAlarmOutPutDto {
  list: Array<IotAlarmOutPutDto>;
  /** @format int32 */
  totalCount: number;
}

export interface PageInfoMultipleConfigOutPutDto {
  list: Array<MultipleConfigOutPutDto>;
  /** @format int32 */
  totalCount: number;
}

export interface PageInfoScreenContentOutPutDto {
  list: Array<ScreenContentOutPutDto>;
  /** @format int32 */
  totalCount: number;
}

export interface PageResultPositionVO {
  /**
   * @description
   *   数据
   */
  data: Array<PositionVO>;
  /**
   * @description
   *   页码
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   单页数量
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   总数
   * @format int64
   */
  totalCount: number;
  /**
   * @description
   *   总页数
   * @format int64
   */
  totalPages: number;
}

export interface ResultPageDataListAlarmRiskEvaluationHistoryOutputDto {
  data: Array<AlarmRiskEvaluationHistoryOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListAlarmShowDangerRescueOutputDto {
  data: Array<AlarmShowDangerRescueOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListAnalysisConfigItemOutputDto {
  data: Array<AnalysisConfigItemOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListCheckRectifyOutputDto {
  data: Array<CheckRectifyOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListConfinedSpacePageDto {
  data: Array<ConfinedSpacePageDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListDevicePushConfigOutputDto {
  data: Array<DevicePushConfigOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListEnterpriseWhiteListDto {
  data: Array<EnterpriseWhiteListDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListFaultOutputDto {
  data: Array<FaultOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListHelpCenterDto {
  data: Array<HelpCenterDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListIndoorRescueShowDto {
  data: Array<IndoorRescueShowDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListJointDisposalOutputDto {
  data: Array<JointDisposalOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListMonitorGuidelineDto {
  data: Array<MonitorGuidelineDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListMultipleConfigDto {
  data: Array<MultipleConfigDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListOrganizationPortraitDto {
  data: Array<OrganizationPortraitDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListShieldDeviceConfigOutputDto {
  data: Array<ShieldDeviceConfigOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListStationModuleOutputDto {
  data: Array<StationModuleOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListSystemTopicConfigOutputDto {
  data: Array<SystemTopicConfigOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListTgshInfoDTO {
  data: Array<TgshInfoDTO>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListViolationRewardMetadataDto {
  data: Array<ViolationRewardMetadataDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListWorkbenchAlarmRiskPushConfigOutputDto {
  data: Array<WorkbenchAlarmRiskPushConfigOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListWorkbenchOutboundConfigDto {
  data: Array<WorkbenchOutboundConfigDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListWorkbenchTitleOutput {
  data: Array<WorkbenchTitleOutput>;
  /** @format int32 */
  total: number;
}

export interface ResultPageListStationCheckRectifyDto {
  data: Array<StationCheckRectifyDto>;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  pageTotal: number;
  /** @format int64 */
  recordTotal: number;
}
