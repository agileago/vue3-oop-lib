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
export interface AIAlarmMaintenanceDTO {
  feedbackName: string;
  feedbackTime: string;
  gid: string;
  pressures: Array<AIAlarmMaintenancePressureDTO>;
  remarks: string;
}

export interface AIAlarmMaintenancePressureDTO {
  type: string;
  unit: string;
  value: string;
}

export interface AlarmDTO {
  alarmTime: string;
  /** @format int64 */
  id: number;
  rootCause: string;
}

export interface AlarmDetailsInputDto {
  /**
   * @description
   *   一级表eventId
   */
  eventId: string;
  /**
   * @description
   *   一级表主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   告警类型
   */
  typeCode: string;
}

export interface AlarmIntelligentAnalysisInputDTO {
  /**
   * @description
   *   告警时间
   * @format date-time
   */
  alarmTime: string;
  /**
   * @description
   *   告警类型
   */
  alarmTypeCode: string;
  /**
   * @description
   *   公司4位编码
   */
  companyCode: string;
  /**
   * @description
   *   企业实体编码
   */
  ecode: string;
  /**
   * @description
   *   iot设备编码
   */
  eqCode: string;
  /**
   * @description
   *   iot设备id
   * @format int64
   */
  eqGid: number;
  /**
   * @description
   *   告警的坐标点 x(墨卡托)
   */
  x: number;
  /**
   * @description
   *   告警的坐标点 y(墨卡托)
   */
  y: number;
}

export interface AlarmIntelligentAnalysisOutputDTO {
  /**
   * @description
   *   出现过的告警列表
   */
  alarmList: Array<AlarmDTO>;
  /**
   * @description
   *   频次最多的原因
   */
  mostReason: string;
  /**
   * @description
   *   负责人名字
   */
  name: string;
  /**
   * @description
   *   负责人电话
   */
  phone: string;
  /**
   * @description
   *   出现次数
   * @format int32
   */
  times: number;
  userList: Array<UserDTO>;
}

export interface AlarmProblemRecordDTO {
  /**
   * @description
   *   告警id
   */
  alarmId: string;
  /**
   * @description
   *   告警类型
   */
  alarmTypeCode: string;
  /**
   * @description
   *   图片地址，多个用逗号隔开
   */
  pictureUrl: string;
  /**
   * @description
   *   问题描述
   */
  problemDsc: string;
}

export interface AlarmProblemRecordOutputDTO {
  alarmId: string;
  alarmTypeCode: string;
  /** @format date-time */
  createTime: string;
  /** @format int64 */
  id: number;
  operatorItcode: string;
  operatorName: string;
  pictureUrl: string;
  problemDsc: string;
}

export interface AlarmProblemRecordSearchDTO {
  /**
   * @description
   *   告警id
   */
  alarmId: string;
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
   *   告警类型编码
   */
  alarmTypeCode: string;
  /**
   * @description
   *   是否开启自动派单标识(0未开启 1开启)
   * @format int32
   */
  autoStatus: number;
  /**
   * @description
   *   设备ID
   */
  deviceId: string;
  /**
   * @description
   *   处置中时间
   */
  dispatchWorkTime: string;
  /**
   * @description
   *   是否误报(1:误报；0:非误报)
   * @format int32
   */
  errFlag: number;
  /**
   * @description
   *   评论
   * @example
   *   此处评论
   */
  evaluation: string;
  /**
   * @description
   *   异常类型编码
   */
  exceptionCode: string;
  /**
   * @description
   *   异常类型名称
   */
  exceptionType: string;
  /**
   * @description
   *   反馈人ITCODE
   */
  feedbackItcode: string;
  /**
   * @description
   *   反馈人名字
   */
  feedbackName: string;
  /**
   * @description
   *   反馈人电话
   */
  feedbackPhone: string;
  /**
   * @description
   *   反馈时间
   */
  feedbackTime: string;
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
   *   告警时间
   */
  happenTime: string;
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
   *   测点编码
   */
  metric: string;
  /**
   * @description
   *   告警其他原因描述
   */
  otherCause: string;
  /**
   * @description
   *   解除时间
   */
  releaseTime: string;
  /** @format date-time */
  resolveTime: string;
  resolveUser: string;
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
   *   告警类型(3:iot告警;7:烟台外部告警;8:ai告警；13：泉州哨兵设备告警)
   * @format int32
   */
  sourceCode: number;
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
   *   更新时间（手动处置时间）
   */
  updateTime: string;
  /**
   * @description
   *   更新人英文名（itcode）
   */
  updateUser: string;
  /**
   * @description
   *   更新人中文名
   */
  updateUserName: string;
  /**
   * @description
   *   告警类型编码（错误）
   */
  warnType: string;
  /**
   * @description
   *   发起工单状态
   * @format int32
   */
  woStatus: number;
}

export interface AlarmWorkbenchDto {
  alarmContent: string;
  /** @format date-time */
  alarmTime: string;
  alarmTypeCode: string;
  companyCode: string;
  companyName: string;
  /** @format date-time */
  createTime: string;
  enableAutoDisposal: boolean;
  evaluation: string;
  eventId: string;
  /** @format int64 */
  id: number;
  latitude: number;
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
  /** @format int32 */
  woStatus: number;
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
 *   网管—球机信息Dto
 */
export interface BallheadCameraDto {
  address: string;
  /**
   * @description
   *   球机基本信息列表
   */
  ballheadCamerasInfo: Array<BallheadCameraInfoDto>;
  /**
   * @description
   *   球机编码
   */
  code: string;
  /**
   * @description
   *   球机名称
   */
  name: string;
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
 *   网管—球机信息info
 */
export interface BallheadCameraInfoDto {
  /**
   * @description
   *   球机编码
   */
  code: string;
  /**
   * @description
   *   球机名称
   */
  name: string;
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

export interface BallheadCameraThirdDto {
  alarmRecords: Array<BallheadCameraDto>;
  ballheadCameras: Array<CameraDto>;
  clevel: string;
  companyCode: string;
  constrAddress: string;
  constrName: string;
  constrUnit: string;
  contract: string;
  contractTelephone: string;
  disclose: string;
  eventId: string;
  eventSource: string;
  handlerUserItcode: string;
  handlerUserName: string;
  handlerUserPhone: string;
  /** @format int64 */
  id: number;
  snappedImageUrl: string;
  woCode: string;
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

export interface CameraDto {
  eventSource: string;
  name: string;
  /** @format int32 */
  status: number;
}

export interface CategoryTypeOutput {
  category: string;
  typeCode: string;
  typeName: string;
}

export interface CheckDetailsInputDto {
  /** @format int64 */
  checkId: number;
  code: string;
}

export interface CheckMsgDetailDto {
  /**
   * @description
   *   唯一标识
   */
  id: string;
  /**
   * @description
   *   纬度
   */
  latitude: number;
  /**
   * @description
   *   经度
   */
  longitude: number;
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

export interface CheckRectifyOutput {
  address: string;
  addressGeom: string;
  appraisePerson: string;
  appraisePhone: string;
  /** @format int32 */
  appraiseResult: number;
  /** @format date-time */
  appraiseTime: string;
  assignUser: string;
  assignUserCode: string;
  businessType: string;
  ccode: string;
  /** @format date-time */
  createTime: string;
  dealOrg: string;
  ecode: string;
  eqModel: string;
  eqName: string;
  feedbackStatus: string;
  /** @format int64 */
  id: number;
  locCode: string;
  problemDesc: string;
  requiredImg: string;
  /** @format date-time */
  requiredTime: string;
  rewards: string;
  /** @format int32 */
  scene: number;
  sourceId: string;
  success: boolean;
  taskCode: string;
  /** @format date-time */
  taskCompleteTime: string;
  /** @format int32 */
  taskType: number;
  violation: string;
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

export interface CheckSupervisionScreenDTO {
  address: string;
  /** @format int32 */
  checkFlag: number;
  /** @format int64 */
  checkId: number;
  clevel: string;
  code: string;
  contacts: string;
  contactsPhone: string;
  createTime: string;
  createUserPhone: string;
  createUserid: string;
  evaluateUserName: string;
  name: string;
  sgDistance: string;
  sgWay: string;
  /** @format int64 */
  supervisionId: number;
  updateTime: string;
}

export interface CheckTimeDTO {
  /**
   * @description
   *   类型 type： 1 危险作业； 2 常规监察
   * @format int32
   */
  type: number;
  /**
   * @description
   *   工单编号
   */
  woCode: string;
}

export interface CheckTodayResultsInputDTO {
  checkTypeCode: string;
  ecode: string;
  itcode: string;
}

export interface CheckWorkbenchListOutputDto {
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

export interface CompanyCodeDTO {
  companyCode: string;
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
 *   有限空间详情
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
 *   有限空间分页
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

export interface DangerFindCameraInputDto {
  cameraCodeList: Array<string>;
  ecode: string;
}

export interface DangerFormFiledsDto {
  alias: string;
  name: string;
  /** @format int32 */
  orderby: number;
  person: Array<Person>;
  type: string;
  unit: string;
  value: string;
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

export interface DangerTypeDTO {
  dangersList: Array<DangerListDTO>;
  label: string;
  value: string;
}

/**
 * @description
 *   碰接审核结果回传
 */
export interface DangerWorkAuditResultInputDto {
  /**
   * @description
   *   审核意见
   */
  auditOpinion: string;
  /**
   * @description
   *   审核结果，1 通过，2 驳回
   * @format int32
   */
  auditResult: number;
  /**
   * @description
   *   危险作业编码（碰接 pn_danger_001 置换(工商户) pn_danger_002 置换(外网) pn_danger_003） 碰接（新） pn_danger_004
   */
  dangerCode: string;
  /**
   * @description
   *   管理实体编码
   */
  ecode: string;
  /**
   * @description
   *   工作流任务id
   */
  taskId: string;
  /**
   * @description
   *   工单编号
   */
  woCode: string;
}

/**
 * @description
 *   危险作业问题类型列表获取
 */
export interface DangerWorkProblemInputDto {
  cpmoCop: string;
  /**
   * @description
   *   场景编码
   * @format int32
   */
  sceneCode: number;
  /**
   * @description
   *   作业类别编码
   * @format int32
   */
  workTypeCode: number;
}

export interface DangerWorkProblemRecordInputDto {
  ccode: string;
  dangerTypeCode: string;
  deviceType: string;
  pictureUrl: string;
  problemDsc: string;
  problemType: string;
  woCode: string;
}

export interface DangerWorkProblemRecordListInputDto {
  /**
   * @description
   *   排序顺序 true：顺序 false：倒序（默认倒序）
   * @example
   *   false
   */
  asc: boolean;
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
  woCode: string;
}

export interface DangerWorkProblemRecordOutputDto {
  /** @format date-time */
  createTime: string;
  deviceType: string;
  disposalPeople: string;
  disposalResults: string;
  /** @format date-time */
  disposalTime: string;
  /** @format int32 */
  id: number;
  /** @format int32 */
  misinformation: number;
  operatorName: string;
  pictureUrl: string;
  problemDsc: string;
  problemSource: string;
  problemType: string;
}

export interface DangerWorkProblemRecordUpdateInputDto {
  disposalResults: string;
  /** @format int32 */
  id: number;
  /** @format int32 */
  misinformation: number;
}

export interface DangerousProblemTypeAddInputDTO {
  cpmoCop: string;
  problemType: string;
  /** @format byte */
  sceneCode: string;
  /** @format byte */
  workTypeCode: string;
}

export interface DangerousProblemTypeInputDTO {
  cpmoCop: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  /** @format byte */
  sceneCode: string;
  /** @format byte */
  workTypeCode: string;
}

export interface DangerousProblemTypeOutputDTO {
  cpmoCop: string;
  createTime: string;
  createUser: string;
  /** @format int64 */
  id: number;
  problemType: string;
  /** @format byte */
  sceneCode: string;
  /** @format byte */
  workTypeCode: string;
}

export interface DangerousProblemTypeUpdateInputDTO {
  cpmoCop: string;
  /** @format date-time */
  createTime: string;
  /** @format int64 */
  id: number;
  problemType: string;
  /** @format byte */
  sceneCode: string;
  /** @format byte */
  workTypeCode: string;
}

export interface DangerousWorkWorkbenchDto {
  companyCode: string;
  eventId: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  sceneCode: number;
  /** @format int32 */
  workCount: number;
  /** @format int32 */
  workTypeCode: number;
}

/**
 * @description
 *   反馈详情反参实体
 */
export interface FeedBackDetailsOutput {
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
   *   发起时间
   * @format date-time
   */
  appraiseTime: string;
  /**
   * @description
   *   责任人
   */
  assignUser: string;
  /**
   * @description
   *   作业类型
   */
  businessType: string;
  details: Array<{
    [propertyName: string]: string;
  }>;
  /**
   * @description
   *   整改工单状态
   */
  feedbackStatus: string;
  /**
   * @description
   *   问题描述
   */
  problemDesc: string;
  /**
   * @description
   *   照片
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
   *   任务完成时间
   * @format date-time
   */
  taskCompleteTime: string;
  /**
   * @description
   *   整改工单编号
   */
  woCode: string;
}

export interface Fields {
  fieldAlias: string;
  photos: Array<string>;
}

export interface FileUploadInput {
  /**
   * @description
   *   文件类型
   */
  contentType: string;
  /**
   * @description
   *   文件内容二进制字节数组
   * @format byte
   */
  fileData: string;
  /**
   * @description
   *   文件名，需带后缀
   */
  fileName: string;
  /**
   * @description
   *   文件自定义路径前缀（为空则上传到operation/路径下，最好再加个业务前缀）
   */
  path: string;
}

export interface FileUploadOutput {
  fileName: string;
  fileUrl: string;
}

export interface GasSources {
  chargePersonItcode: string;
  chargePersonName: string;
  gasSourceSite: string;
  gasSourceSiteCode: string;
  sourceRemark: string;
}

export interface GisproOrgEqlinkDetailHDTO {
  itcode: string;
  telnumber: string;
  userName: string;
  userid: string;
}

export interface GridPersonalInfoDTO {
  belStation: string;
  companyCode: string;
  /** @format int64 */
  id: number;
  locGeom: string;
  locId: string;
  locParentId: string;
  locType: string;
  organCode: string;
  organName: string;
  stationType: string;
  tag: string;
  treeList: Array<GridPersonalInfoDTO>;
  userItcode: string;
  userLandline: string;
  userName: string;
  userPhone: string;
}

export interface GridPersonalInfoOrganDTO {
  organCode: string;
  organName: string;
}

export interface GridPersonalInfoUserDTO {
  locType: string;
  userItcode: string;
  userLandline: string;
  userName: string;
  userPhone: string;
}

export interface HiddenDangerDTO {
  companyCode: string;
  value: string;
}

export interface HistoryDangerWorkShowDTO {
  /**
   * @description
   *   作业实际开始时间
   */
  actualStime: string;
  /**
   * @description
   *   作业位置
   */
  address: string;
  /**
   * @description
   *   评价结果
   */
  appraise: string;
  /**
   * @description
   *   评价结果code
   * @format int32
   */
  appraiseCode: number;
  /**
   * @description
   *   企业编码
   */
  companyCode: string;
  /**
   * @description
   *   公司名称
   */
  companyName: string;
  /**
   * @description
   *   评价内容
   */
  evaluationContent: string;
  /**
   * @description
   *   评价时间
   */
  evaluationTime: string;
  /**
   * @description
   *   专家评价描述
   */
  expertEvalDesc: string;
  /**
   * @description
   *   专家评价结果 1-合格 2-不合格
   */
  expertEvalResult: string;
  /**
   * @description
   *   专家评价时间
   */
  expertEvalTime: string;
  /**
   * @description
   *   专家评价人姓名
   */
  expertRealName: string;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   状态
   * @format int32
   */
  status: number;
  /**
   * @description
   *   状态名称
   */
  statusName: string;
  /**
   * @description
   *   评价不合格项
   */
  unqualifiedItem: string;
  /**
   * @description
   *   作业名称
   */
  workName: string;
  /**
   * @description
   *   作业编号
   */
  workNo: string;
  /**
   * @description
   *   作业开始时间
   */
  workStartTime: string;
  /**
   * @description
   *   作业类别编码：1：高出作业，2：深基坑作业，3：吊装作业，4：碰接（带气动火），5：置换作业，6：有限空间. 7：碰接（新）
   * @format int32
   */
  workTypeCode: number;
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

export interface ImageAiErrorTypeInputDTO {
  module: string;
  /** @format int32 */
  sceneCode: number;
  typeCode: string;
}

export interface IndoorRescueWorkbenchDto {
  companyCode: string;
  content: string;
  eventId: string;
  /** @format int64 */
  id: number;
  latitude: number;
  /** @format int32 */
  level: number;
  location: string;
  longitude: number;
  /** @format int32 */
  statusCode: number;
  /** @format date-time */
  time: string;
  /** @format int32 */
  timeout: number;
  typeCode: string;
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

export interface NetWorkDangerNewDto {
  cameraCodes: string;
  cameraName: string;
  checkMethaneValue: string;
  checkValue: string;
  companyName: string;
  currentNodeName: string;
  details: any;
  dispersionEquip: string;
  filedsDtoList: Array<DangerFormFiledsDto>;
  forCheck: NetworkContactNewForCheckOutput;
  forPrepare: NetworkContactNewForPrepareOutput;
  iotEquips: Array<NetworkDangerDeviceInfoDTO>;
  metricList: Array<NetworkDangerMetricDTO>;
  sceneCantor: Array<SceneCantorOutput>;
  securityCustody: Array<SceneCantorOutput>;
  /** @format int32 */
  timeOut: number;
  violationItemDtoList: Array<ViolationItemOutputDTO>;
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
   * @format date-time
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
   * @format date-time
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

export interface NetworkAlarmInspectionHandleDTO {
  address: string;
  addressGeom: string;
  alarmReason: string;
  alarmRemark: string;
  businessId: string;
  ccode: string;
  ecode: string;
  handleResult: string;
  /** @format int32 */
  handleStatus: number;
  handleTime: string;
  handleUserItcode: string;
  handleUserName: string;
  handleUserPhone: string;
  /** @format int64 */
  id: number;
  photo: string;
  taskCode: string;
}

export interface NetworkBrominatedAlarmFeedbackDTO {
  chargePersonItcode: string;
  chargePersonName: string;
  chargePersonPhone: string;
  /** @format date-time */
  createTime: string;
  distance: string;
  feedbackItcode: string;
  feedbackName: string;
  feedbackPhone: string;
  /** @format date-time */
  feedbackTime: string;
  gasSourceSite: string;
  gasSourceSiteCode: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  isFeedback: number;
  isNormal: string;
  /** @format int32 */
  isWo: number;
  localePicList: Array<string>;
  localePics: string;
  reason: string;
  taskCode: string;
  /** @format date-time */
  updateTime: string;
}

export interface NetworkBrominatedAlarmFeedbackInputDTO {
  gasSourceSiteCode: string;
  taskCode: string;
}

export interface NetworkCheckDTO {
  addEvaluateGrade: string;
  address: string;
  aiErrorMessage: string;
  /** @format int32 */
  aiResult: number;
  allAppraise: string;
  /** @format int32 */
  appraise: number;
  appraiseContext: string;
  appraiseTime: string;
  areaCode: string;
  areaName: string;
  ccode: string;
  checkType: string;
  /** @format int32 */
  checked: number;
  code: string;
  /** @format date-time */
  createTime: string;
  createUserid: string;
  customerDesc: string;
  customerType: string;
  /** @format int64 */
  detailId: number;
  detailsInfo: string;
  ecode: string;
  eqCode: string;
  evaluateUserItcode: string;
  evaluateUserName: string;
  expertEvalDesc: string;
  expertEvalResult: string;
  expertEvalTime: string;
  expertRealName: string;
  expertUserName: string;
  feedbackPhotos: Array<NetworkCheckFeedbackPhotos>;
  /** @format date-time */
  finishTime: string;
  /** @format int32 */
  flag: number;
  functionName: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  iotMonitored: number;
  iotRelStatus: string;
  isAppraise: string;
  latitude: number;
  level: string;
  locCode: string;
  locName: string;
  longitude: number;
  name: string;
  /** @format int32 */
  newFlag: number;
  phone: string;
  recId: string;
  remark: string;
  /** @format date-time */
  reportTime: string;
  reporter: string;
  reporterPhone: string;
  /** @format int64 */
  resultId: number;
  sgDistance: string;
  sgProcess: string;
  sgStage: string;
  siteName: string;
  sponsor: string;
  spotTime: string;
  state: string;
  supervisionId: string;
  /**
   * @description
   *   评价不合格项
   */
  unqualifiedItem: string;
  /** @format date-time */
  updateTime: string;
  violationContent: string;
  workNodeCode: string;
}

export interface NetworkCheckFeedbackPhotos {
  fields: Array<Fields>;
  type: string;
}

export interface NetworkCheckImageAiInputDTO {
  /** @format byte */
  accuracy: string;
  /** @format int64 */
  id: number;
  remarks: string;
}

/**
 * @description
 *   管网常规监察二级页面入参
 */
export interface NetworkCheckInputDTO {
  /**
   * @description
   *   是否追评（0 未追评，1 追评）
   * @format int32
   */
  addAppraise: number;
  /**
   * @description
   *   追评等级（合格、不合格）
   */
  addEvaluateGrade: string;
  /**
   * @description
   *   ai识别结果
   */
  aiErrorMessage: string;
  /**
   * @description
   *   ai识别标记 0:未识别  1: 识别正常 2: 识别异常
   * @format int32
   */
  aiResult: number;
  /**
   * @description
   *   是否全部评论：0 ：否， 1 ：是
   * @format int32
   */
  allAppraise: number;
  /**
   * @description
   *   评价单选框（0 不合格 1 合格 2 优秀）3 未评价
   * @format int32
   */
  appraise: number;
  /**
   * @description
   *   评价结束时间
   */
  appraiseEndTime: string;
  /**
   * @description
   *   评价开始时间
   */
  appraiseStartTime: string;
  /**
   * @description
   *   查询的月份
   */
  checkMonth: string;
  /**
   * @description
   *   管网的常规监察类型
   */
  checkType: string;
  /**
   * @description
   *   抽查人
   */
  checkUser: string;
  /**
   * @description
   *   已抽查（0:未抽查，1：已抽查）
   * @format int32
   */
  checked: number;
  /**
   * @description
   *   模糊搜索字段
   */
  contains: string;
  /**
   * @description
   *   当前登录的实体ID
   */
  cpmoCop: string;
  /**
   * @description
   *   用户类型
   */
  customerType: string;
  ecode: string;
  /**
   * @description
   *   结束时间
   */
  endTime: string;
  /**
   * @description
   *   专家是否评价 0-未评价 1-评价
   * @format int32
   */
  expertEval: number;
  /**
   * @description
   *   专家评价结果 1-合格 2-不合格
   */
  expertEvalResult: string;
  /**
   * @description
   *   专家评价人姓名
   */
  expertRealName: string;
  /**
   * @description
   *   是否物联设备监测 0：未监测 ，1：监测
   * @format int32
   */
  iotMonitored: number;
  /**
   * @description
   *   级别
   */
  level: string;
  /**
   * @description
   *   站点code
   */
  organCode: string;
  /**
   * @description
   *   分页查询的查询页码
   * @format int32
   */
  pageIndex: number;
  /**
   * @description
   *   分页查询每页数量
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   抽查百分比
   */
  random: string;
  /** @format int32 */
  randomNum: number;
  /**
   * @description
   *   区域集合
   */
  secondOpValue: Array<string>;
  /**
   * @description
   *   主办人
   */
  sponsor: string;
  /**
   * @description
   *   抽查结束时间
   */
  spotEndTime: string;
  /**
   * @description
   *   抽查开始时间
   */
  spotStartTime: string;
  /**
   * @description
   *   开始时间
   */
  startTime: string;
  /**
   * @description
   *   状态(1:已完成)
   */
  state: string;
  /**
   * @description
   *   状态集合(1:已完成)
   */
  states: Array<string>;
}

export interface NetworkCheckSupervisionDTO {
  address: string;
  /** @format int32 */
  appraise: number;
  appraiseContext: string;
  appraiseState: string;
  appraiseTime: string;
  ccode: string;
  checkType: string;
  code: string;
  companyName: string;
  createUserid: string;
  evaluateUserName: string;
  /** @format int64 */
  id: number;
  locCode: string;
  locName: string;
  name: string;
  /** @format int32 */
  newFlag: number;
  /** @format date-time */
  reportTime: string;
  sgStage: string;
  state: string;
  /** @format int64 */
  supervisionId: number;
  supervisionInfo: string;
  /**
   * @description
   *   评价不合格原因
   */
  unqualifiedItem: string;
  /** @format date-time */
  updateTime: string;
}

export interface NetworkCheckSupervisionInputDTO {
  /**
   * @description
   *   是否追评（0 未追评，1 追评）
   * @format int32
   */
  addAppraise: number;
  /**
   * @description
   *   追评等级（合格、不合格）
   */
  addEvaluateGrade: string;
  /**
   * @description
   *   评价单选框（0 不合格 1 合格 2 优秀）3 未评价
   * @format int32
   */
  appraise: number;
  /**
   * @description
   *   评价结束时间
   */
  appraiseEndTime: string;
  /**
   * @description
   *   评价开始时间
   */
  appraiseStartTime: string;
  /**
   * @description
   *   模糊搜索字段
   */
  contains: string;
  /**
   * @description
   *   当前登录的实体ID
   */
  cpmoCop: string;
  ecode: string;
  /**
   * @description
   *   监管结束时间
   */
  endTime: string;
  /**
   * @description
   *   级别
   */
  level: string;
  organCode: string;
  /**
   * @description
   *   分页查询的查询页码
   * @format int32
   */
  pageIndex: number;
  /**
   * @description
   *   分页查询每页数量
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   区域集合
   */
  secondOpValue: Array<string>;
  /**
   * @description
   *   监管开始时间
   */
  startTime: string;
  /**
   * @description
   *   当前状态(1:已完成)
   */
  states: Array<string>;
}

export interface NetworkContactNewForCheckOutput {
  /**
   * @description
   *   放散现场警戒图片,多个用逗号隔开
   */
  alertImg: string;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   0:失效; 1:生效
   * @format int32
   */
  deleteFlag: number;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   是否确定气源控制阀门及调压器 0否、1是
   * @format int32
   */
  isConfirmControlValve: number;
  /**
   * @description
   *   作业点职责是否已明确 0否、1是
   * @format int32
   */
  isConfirmDuty: number;
  /**
   * @description
   *   放散现场警戒是否为完成 0否、1是
   * @format int32
   */
  isConfirmFinishAlert: number;
  /**
   * @description
   *   放散点是否已确定 0否、1是
   * @format int32
   */
  isConfirmReleasePoint: number;
  /**
   * @description
   *   是否明确停气范围 0否、1是
   * @format int32
   */
  isConfirmStopGasRange: number;
  /**
   * @description
   *   工具及材料是否准备齐全 0否、1是
   * @format int32
   */
  isConfirmToolEnough: number;
  /**
   * @description
   *   作业人员穿戴是否合规 0否、1是
   * @format int32
   */
  isConfirmWearStandard: number;
  /**
   * @description
   *   停气通知是否完成发放 0否、1是
   * @format int32
   */
  isFinishStopGas: number;
  /**
   * @description
   *   作业人员是否学习控制方案  0否、1是
   * @format int32
   */
  isStudyControl: number;
  /**
   * @description
   *   放散点是否已确定备注
   */
  releasePointRemark: string;
  /**
   * @description
   *   是否明确停气范围备注
   */
  stopGasRangeRemark: string;
  /**
   * @description
   *   作业人员学习控制方案照片,多个用逗号隔开
   */
  studyControlImg: string;
  /**
   * @description
   *   修改时间
   */
  taskId: string;
  /**
   * @description
   *   工具及材料图片,多个用逗号隔开
   */
  toolImg: string;
  /**
   * @description
   *   修改时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   作业人员穿戴是否合规图片,多个用逗号隔开
   */
  wearImg: string;
  /**
   * @description
   *   工单编号唯一
   */
  woCode: string;
}

export interface NetworkContactNewForPrepareOutput {
  /**
   * @description
   *   施工队长信息列表
   */
  constCaptain: string;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   0:失效; 1:生效
   * @format int32
   */
  deleteFlag: number;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   物联设备关联信息
   */
  iotEquip: string;
  /**
   * @description
   *   碰接结束时间
   * @format date-time
   */
  pjEndTime: string;
  /**
   * @description
   *   碰接开始时间
   * @format date-time
   */
  pjStartTime: string;
  /**
   * @description
   *   现场作业与施工人员照片,多个用逗号隔开
   */
  sceneUserImg: string;
  /**
   * @description
   *   实施人员信息列表
   */
  taskImplementer: string;
  /**
   * @description
   *   运营人员信息列表
   */
  taskOperator: string;
  taskOperatorJson: TsgJSON;
  /**
   * @description
   *   修改时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   检测视频设备关联信息
   */
  videoEquip: string;
  /**
   * @description
   *   工单编号唯一
   */
  woCode: string;
}

export interface NetworkDangerCheckFeedbackInputDto {
  /**
   * @description
   *   实际开始时间
   */
  actualStime: string;
  ccodes: Array<string>;
  /**
   * @description
   *   危险作业类型：4碰接 5置换 6有限空间 7新碰接
   * @format int32
   */
  dangerTypeCode: number;
  /**
   * @description
   *   管理实体编码
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
   *   作业名称
   */
  woName: string;
}

export interface NetworkDangerCheckFeedbackOutputDto {
  /**
   * @description
   *   实际结束时间
   */
  actualEtime: string;
  /**
   * @description
   *   实际开始时间
   */
  actualStime: string;
  /**
   * @description
   *   地址
   */
  address: string;
  /**
   * @description
   *   检查状态：1已发送; 2已反馈
   * @format int32
   */
  checkStatus: number;
  /**
   * @description
   *   公司编码
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
   *   危险作业id
   * @format int64
   */
  dangerId: number;
  /**
   * @description
   *   危险作业类型：4碰接 5置换 6有限空间 7新碰接
   * @format int32
   */
  dangerTypeCode: number;
  /**
   * @description
   *   删除标志；0：未删除，1：已删除
   */
  deleteFlag: boolean;
  /**
   * @description
   *   主键
   * @format int32
   */
  id: number;
  /**
   * @description
   *   计划结束时间
   */
  planEtime: string;
  /**
   * @description
   *   计划开始时间
   */
  planStime: string;
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
  /**
   * @description
   *   作业名称
   */
  woName: string;
}

export interface NetworkDangerDTO {
  acceptUser: Array<NetworkDangerPersonnelInformationDTO>;
  address: string;
  assistUser: Array<NetworkDangerPersonnelInformationDTO>;
  cameraArray: Array<any>;
  cameraCodes: string;
  /** @format date-time */
  cameraCodesUpdateTime: string;
  ccode: string;
  companyName: string;
  /** @format int32 */
  count: number;
  currentNodeName: string;
  dangerCode: string;
  dangerCodes: Array<string>;
  dispersionEquip: string;
  ecode: string;
  engineeringName: string;
  /** @format int32 */
  evaluateFlag: number;
  evaluationPeople: string;
  evaluationPeopleItcode: string;
  /** @format date-time */
  evaluationTime: string;
  expertEvalDesc: string;
  expertEvalResult: string;
  expertEvalTime: string;
  expertRealName: string;
  expertUnqualifiedItem: string;
  expertUserName: string;
  expertViolationType: string;
  filedsDtoList: Array<DangerFormFiledsDto>;
  /** @format int64 */
  id: number;
  image: string;
  iotEquips: Array<NetworkDangerMetricDTO>;
  locCode: string;
  locCodes: Array<string>;
  networkDangerPersonnelInformation: Array<NetworkDangerPersonnelInformationDTO>;
  networkDangerPersonnelInformationDTOS: Array<NetworkDangerPersonnelInformationDTO>;
  /** @format int32 */
  newFlag: number;
  /** @format date-time */
  pjActualEtime: string;
  /** @format date-time */
  pjActualStime: string;
  /** @format date-time */
  pjPlanEtime: string;
  /** @format date-time */
  pjPlanStime: string;
  remark: string;
  sceneCantorId: string;
  securityCustodyId: string;
  /** @format int32 */
  statusCode: number;
  subStatename: string;
  /** @format int32 */
  sumScore: number;
  typeCode: string;
  /** @format date-time */
  updateTime: string;
  userName: string;
  violationItemDtoList: Array<ViolationItemOutputDTO>;
  woCode: string;
  woName: string;
  woState: string;
  workAfter: string;
  workFront: string;
  workMiddle: string;
  /** @format date-time */
  zyEndTime: string;
  /** @format date-time */
  zyStartTime: string;
}

export interface NetworkDangerDeviceInfoDTO {
  deviceId: string;
  domainCode: string;
  gisEquipId: string;
  gisEquipName: string;
  iotName: string;
  metric: string;
  metricTxt: string;
  metricValue: string;
  staid: string;
  type: string;
}

export interface NetworkDangerEvaluateEditDTO {
  dangerCode: string;
  /** @format int32 */
  evaluateFlag: number;
  remark: string;
  /** @format int32 */
  sceneCode: number;
  unqualifiedItemDtos: Array<UnqualifiedItemDto>;
  woCode: string;
}

export interface NetworkDangerInputDTO {
  companyCode: string;
  contains: string;
  currentNodeName: string;
  dangerCode: string;
  dangerEndTime: string;
  dangerStartTime: string;
  ecode: string;
  locCodes: Array<string>;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  statusCode: number;
  woCode: string;
}

export interface NetworkDangerMetricDTO {
  metricName: string;
  type: string;
  value: string;
}

export interface NetworkDangerPersonnelInformationDTO {
  personnelId: string;
  phone: string;
  realName: string;
  userName: string;
}

export interface NetworkDangerRegulationDTO {
  ecode: string;
  typeCode: Array<string>;
}

export interface NetworkDangerRegulationOutputDTO {
  address: string;
  cameraCodes: string;
  chargePerson: string;
  companyCode: string;
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

export interface NetworkDangerUpdateDTO {
  address: string;
  cameraCodes: string;
  cpmoCop: string;
  currentNodeName: string;
  dangerCode: string;
  dispersionEquip: string;
  ecode: string;
  /** @format int32 */
  evaluateFlag: number;
  evaluationPeople: string;
  evaluationPeopleItcode: string;
  evaluationTime: string;
  image: string;
  iotEquips: Array<NetworkDangerMetricDTO>;
  laber: string;
  networkDangerPersonnelInformationDTOS: Array<NetworkDangerPersonnelInformationDTO>;
  pjActualEtime: string;
  pjActualStime: string;
  pjPlanEtime: string;
  pjPlanStime: string;
  remark: string;
  sceneCantorId: string;
  securityCustodyId: string;
  subStatename: string;
  /** @format int32 */
  sumScore: number;
  unqualifiedItem: string;
  userName: string;
  violationItemDtoList: Array<ViolationItemDto>;
  woCode: string;
  woName: string;
  woState: string;
  workAfter: string;
  workFront: string;
  workMiddle: string;
}

export interface NetworkEvaluationConfigDTO {
  category: string;
  cpmoCop: string;
  cpmoCopTxt: string;
  /** @format int32 */
  enable: number;
  /** @format int32 */
  id: number;
  typeCode: string;
  typeCodeName: string;
}

export interface NetworkEvaluationConfigInputDTO {
  category: string;
  cpmoCop: string;
  cpmoCopTxt: string;
  /** @format int32 */
  enable: number;
  /** @format int32 */
  id: number;
  typeCode: string;
  typeCodeName: string;
}

export interface NetworkEvaluationConfigSearchDTO {
  /**
   * @description
   *   实体编码
   */
  cpmoCop: string;
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
}

export interface NetworkEvaluationInfoDTO {
  /** @format int32 */
  dangerTypeCode: number;
  evaluateContent: string;
  evaluateGrade: string;
  evaluationPeople: string;
  evaluationPeopleItcode: string;
  /** @format date-time */
  evaluationTime: string;
  /** @format int32 */
  id: number;
  unqualifiedItem: string;
  woCode: string;
}

export interface NetworkEvaluationInfoInputDTO {
  /** @format int32 */
  addFlag: number;
  checkTypeCode: string;
  /** @format int32 */
  dangerTypeCode: number;
  woCode: string;
}

export interface NetworkPositionDTO {
  accuracy: number;
  ccode: string;
  cpmoCode: string;
  ecode: string;
  id: string;
  lat: number;
  lon: number;
  phone: string;
  speed: number;
  state: string;
  /** @format date-time */
  time: string;
  truename: string;
  usercode: string;
  username: string;
  x: number;
  y: number;
}

/**
 * @description
 *   示险更新评论标记传入dto(管网)
 */
export interface NetworkShowDangerInputDto {
  /**
   * @description
   *   企业编码
   */
  companyCode: string;
  /**
   * @description
   *   设备ID
   */
  deviceId: string;
  /**
   * @description
   *   是否误报(1:误报；0:非误报)
   * @format int32
   */
  errFlag: number;
  /**
   * @description
   *   异常类型编码
   */
  exceptionCode: string;
  /**
   * @description
   *   异常类型名称
   */
  exceptionType: string;
  /**
   * @description
   *   反馈人ITCODE
   */
  feedbackItcode: string;
  /**
   * @description
   *   反馈人名字
   */
  feedbackName: string;
  /**
   * @description
   *   反馈人电话
   */
  feedbackPhone: string;
  /**
   * @description
   *   反馈时间
   */
  feedbackTime: string;
  /**
   * @description
   *   处置描述
   * @example
   *   此处评论
   */
  handleResult: string;
  /**
   * @description
   *   处置状态编码
   * @format int32
   * @example
   *   1
   */
  handleStatus: number;
  /**
   * @description
   *   处置人itcode
   */
  handleUserItcode: string;
  /**
   * @description
   *   处置人姓名
   * @example
   *   张三
   */
  handleUserName: string;
  /**
   * @description
   *   隐患id
   */
  hiddenDangersId: string;
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
   *   测点编码
   */
  metric: string;
  /**
   * @description
   *   示险编码
   */
  riskCode: string;
  /**
   * @description
   *   示险工作台主键id
   * @format int64
   * @example
   *   123
   */
  riskId: number;
  /**
   * @description
   *   示险时间
   */
  riskTime: string;
  /**
   * @description
   *   ai示险根本原因
   */
  rootCause: string;
  /**
   * @description
   *   类型
   * @example
   *   常规性
   */
  typeExtend: string;
}

export interface NetworkShowDangerWoParamDTO {
  cpmoCop: string;
  locId: string;
  organCode: string;
}

export interface NetworkStationPersonnelInfoInputDTO {
  businessCode: string;
  businessName: string;
  companyCode: string;
  companyName: string;
  /** @format date-time */
  createTime: string;
  createUser: string;
  deleteFlag: boolean;
  /** @format int64 */
  id: number;
  lat: string;
  lng: string;
  masterContactName: string;
  masterContactNumber: string;
  stationCode: string;
  stationId: string;
  stationName: string;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
}

export interface NetworkStationPersonnelParamInputDTO {
  businessCode: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  stationName: string;
}

export interface NetworkWoConfigInput {
  alarmContent: string;
  alarmTypeCode: string;
  category: string;
  cpmoCop: string;
  cpmoCopTxt: string;
  /** @format date-time */
  createTime: string;
  createUser: string;
  /** @format int64 */
  id: number;
  orderTopic: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  /** @format date-time */
  updateTime: string;
  updateUser: string;
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

export interface Person {
  phone: string;
  realName: string;
  userName: string;
}

export interface PipelineAnalyticalInpout {
  companyCode: string;
  contentName: string;
  countMonth: string;
  endTime: string;
  locCode: string;
  locName: string;
  organCode: string;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  secondOpValue: Array<string>;
  startTime: string;
  state: string;
}

/**
 * @description
 *   管网告警工单入参
 */
export interface PipelineSendWoInputDTO {
  acceptUserItcode: string;
  address: string;
  alarmTypeCode: string;
  almLeak: string;
  annotation: string;
  attachments: string;
  belongGrid: string;
  belongOrg: string;
  buriedInfo: string;
  businessContacts: string;
  businessName: string;
  businessPhone: string;
  cameraIndexCode: string;
  caseCode: string;
  chargePerson: string;
  chargePersonPhone: string;
  clsName: string;
  code: string;
  controlLevel: string;
  customName: string;
  dataTopic: string;
  deviceKinds: string;
  deviceName: string;
  deviceSn: string;
  deviceState: string;
  deviceType: string;
  distance: string;
  ecode: string;
  eqAddress: string;
  eqCode: string;
  eqName: string;
  eqRemark: string;
  eqType: string;
  gasSourcesList: Array<GasSources>;
  /** @format int64 */
  id: number;
  incidentDesc: string;
  incidentTitle: string;
  incidentType: string;
  iotEquips: string;
  /** @format int32 */
  isAutoDisposal: number;
  /** @format int32 */
  isMdp: number;
  isPipe: string;
  isSignJd: string;
  level: string;
  limitMaxValue: number;
  limitMinValue: number;
  locCode: string;
  locName: string;
  measureAddress: string;
  measureValue: string;
  metricName: string;
  name: string;
  needArriveTime: string;
  organName: string;
  pcc1: string;
  pcc2: string;
  photo: Array<string>;
  plat: string;
  remark: string;
  riskAlert: string;
  riskName: string;
  riskReason: string;
  riskTime: string;
  rootCause: string;
  /** @format int32 */
  sendWoWay: number;
  /** @format int32 */
  sourceCode: number;
  sourceId: string;
  speed: string;
  /** @format int32 */
  statusCode: number;
  targetPath: string;
  taskAddress: string;
  taskCode: string;
  taskName: string;
  taskRemark: string;
  topic: string;
  unit: string;
  user: string;
  userItcode: string;
  userName: string;
  userPhone: string;
  userid: string;
  warnLevel: string;
  warnName: string;
  warnReason: string;
  warnRemark: string;
  warnSign: string;
  warnTime: string;
  windDirection: string;
  windSpeed: string;
  wlEqCode: string;
  wlEqId: string;
  wlEqName: string;
  wlEqType: string;
  wlEqTypeName: string;
  wlStationId: string;
  x: string;
  y: string;
}

/**
 * @description
 *   管网常规监察提交评价详情入参
 */
export interface PipelineUpdateInputDTO {
  /**
   * @description
   *   评价（0 不合格 1 合格 2 优秀）
   * @format int32
   */
  appraise: number;
  /**
   * @description
   *   评价详情
   */
  appraiseContext: string;
  /**
   * @description
   *   管网一级表的主键ID
   * @format int64
   */
  checkId: number;
  /**
   * @description
   *   管网当前的类型
   */
  checkType: string;
  /**
   * @description
   *   工单编码
   */
  code: string;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   是否详情评价：1 是
   * @format int32
   */
  detailFlag: number;
  /**
   * @description
   *   评价人itcode
   */
  evaluateUserItcode: string;
  /**
   * @description
   *   评价人姓名
   */
  evaluateUserName: string;
  /**
   * @description
   *   奖惩分数
   */
  grossScore: string;
  rectify: CheckRectifyOutput;
  /**
   * @description
   *   反馈状态：1:反馈  0:未反馈
   * @format int32
   */
  rectifyStatus: number;
  /**
   * @description
   *   管网日常监管三级表id
   * @format int64
   */
  supervisionId: number;
  /**
   * @description
   *   评价不合格项
   */
  unqualifiedItem: string;
  villationItem: Array<ViolationItemDto>;
  /**
   * @description
   *   违规内容
   */
  violationContent: string;
  /**
   * @description
   *   违规内容数组
   */
  violationContents: Array<string>;
}

export interface PipelineViolationExcelModel {
  alarmContent: string;
  evaluationPerple: string;
  evaluationTime: string;
  handlerUser: string;
  /** @format int32 */
  id: number;
  location: string;
  score: string;
  serialNumber: string;
  typeCode: string;
  updateTime: string;
  violation: string;
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

/**
 * @description
 *   分析预测详情—项目人员信息
 */
export interface ProjectPersonDto {
  /**
   * @description
   *   电话
   */
  phone: string;
  /**
   * @description
   *   真实姓名
   */
  realName: string;
  /**
   * @description
   *   人员类型
   */
  type: string;
  /**
   * @description
   *   用户名
   */
  userName: string;
}

/**
 * @description
 *   分析预测详情—项目视频信息
 */
export interface ProjectVideoDto {
  /**
   * @description
   *   球机列表
   */
  ballheadCameras: Array<BallheadCameraDto>;
  code: string;
  /** @format int64 */
  eventId: number;
  eventStatus: string;
  /**
   * @description
   *   多能工
   */
  multitaskerDTOS: Array<ProjectPersonDto>;
  /**
   * @description
   *   现场指挥
   */
  onsiteCommandDTOS: Array<ProjectPersonDto>;
  /** @format date-time */
  pjActualStime: string;
  /**
   * @description
   *   项目名称
   */
  projectName: string;
  /**
   * @description
   *   安全监护
   */
  safetyMonitoringDTOS: Array<ProjectPersonDto>;
  sgProcess: string;
  sgStage: string;
  /**
   * @description
   *   主办人
   */
  sponsorDTOS: Array<ProjectPersonDto>;
  state: string;
  statusCode: string;
  /**
   * @description
   *   施工信息列表
   */
  units: Array<UnitInfoDto>;
  woCode: string;
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

export interface R {
  /** @format int32 */
  code: number;
  data: any;
  msg: string;
}

export interface SceneCantorOutput {
  lat: number;
  lon: number;
  phone: string;
  realName: string;
  userName: string;
  x: number;
  y: number;
}

export interface ShowDangerUnconfigDetailHDTO {
  alarmRuleTxt: string;
  compCodeTxt: string;
  cutPressure: string;
  deviceLocation: string;
  deviceName: string;
  deviceTypeName: string;
  gisDeviceCode: string;
  handler: string;
  iotDeviceCode: string;
  remark: string;
  sceneName: string;
  stationName: string;
  unconfigCause: string;
}

export interface ShowDangerUnconfigInputDTO {
  /**
   * @description
   *   8位实体编码，例如：10000800
   */
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
  /**
   * @description
   *   场景名称，例如：管网
   */
  sceneName: string;
  /**
   * @description
   *   示险类型编码，例如：pn_risk_016
   */
  typeCode: string;
  /**
   * @description
   *   未生效原因，例如：未配置阈值
   */
  unconfigCause: string;
}

export interface ShowDangerWorkbenchDto {
  companyCode: string;
  /** @format date-time */
  createTime: string;
  dangerContent: string;
  /** @format date-time */
  dangerTime: string;
  dangerTypeCode: string;
  enableAutoDisposal: boolean;
  evaluation: string;
  eventId: string;
  /** @format int64 */
  id: number;
  latitude: number;
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
  /** @format int32 */
  woStatus: number;
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

export interface SuperviseWorkInputDTO {
  checkTypeCode: string;
  ecode: string;
  /** @format int32 */
  proportion: number;
}

export interface SuperviseWorkOutputDTO {
  checkTypeCode: string;
  /** @format int32 */
  evaluateCount: number;
  /** @format int32 */
  unqualifiedCount: number;
}

export interface SwitchUserEntityInputDto {
  ecode: string;
  /** @format int32 */
  type: number;
}

export interface TemporarySignature {
  actualSignedRequestHeaders: {
    [propertyName: string]: string;
  };
  /** @format int32 */
  code: number;
  fileUrl: string;
  msg: string;
  /** @format int64 */
  sdkOperateLogId: number;
  signedUrl: string;
}

export interface TimeDictionaryDto {
  dicTime: string;
  /** @format int32 */
  id: number;
  timeUnit: string;
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

export interface UnitInfoDto {
  unit: string;
  unitCode: string;
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

export interface UnqualifiedItemDto {
  name: string;
  subNames: Array<string>;
}

export interface UserDTO {
  name: string;
  phone: string;
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

export interface VehicleLocationInputDTO {
  ecode: string;
  sessionid: string;
  vehicle: string;
}

export interface View {
  contentType: string;
}

export interface Violation {
  category: string;
  /** @format int32 */
  isSelected: number;
  name: string;
  /** @format int32 */
  score: number;
}

export interface ViolationExportExcelInputDTO {
  /** @format date-time */
  beginPjTime: string;
  /** @format date-time */
  beginUpdateTime: string;
  ecode: string;
  /** @format date-time */
  endPjTime: string;
  /** @format date-time */
  endUpdateTime: string;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  sceneCode: number;
}

export interface ViolationItemDto {
  category: string;
  /** @format int32 */
  isSelected: number;
  /** @format int32 */
  score: number;
  typeCode: string;
  typeName: string;
  violationContent: string;
}

export interface ViolationItemOutputDTO {
  content: Array<Violation>;
  type: string;
}

export interface ViolationRewardDto {
  category: string;
  /** @format int32 */
  defaultValue: number;
  description: string;
  editable: boolean;
  /** @format int64 */
  id: number;
  /** @format int32 */
  isSelected: number;
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

export interface WorkbenchSearchShowListInputDTO {
  /**
   * @description
   *   评价结果,F-不合格,P-合格,E-优秀(工程危险作业有这个选项,关单评价没有),N-未评价(危险作业有这个选项,关单评价没有)[F,P,E,N]
   */
  appraise: Array<string>;
  /**
   * @description
   *   管理实体代码
   * @example
   *   10000800
   */
  ecode: string;
  /**
   * @description
   *   作业结束时间 yyyy-MM-dd
   * @format date-time
   * @example
   *   2022-07-19
   */
  endDate: string;
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
   *   专家是否评价 0-未评价 1-评价
   * @format int32
   */
  expertEval: number;
  /**
   * @description
   *   专家评价结果 1-合格 2-不合格
   */
  expertEvalResult: string;
  /**
   * @description
   *   专家评价人姓名
   */
  expertRealName: string;
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
   *   搜索名称（名称/位置/id/(告警/示险原因)）
   */
  searchName: string;
  /**
   * @description
   *   作业开始时间 : yyyy-MM-dd
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
   *   类型编码: 4：碰接（带气动火），5：置换作业，6：有限空间,7:碰接（新）
   */
  typeCode: string;
}

export type TsgJSON = any;

export interface PageDataBallheadCameraDto {
  data: Array<BallheadCameraDto>;
  /** @format int64 */
  total: number;
}

export interface ResultPageDataListAlarmProblemRecordOutputDTO {
  data: Array<AlarmProblemRecordOutputDTO>;
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

export interface ResultPageDataListDangerousProblemTypeOutputDTO {
  data: Array<DangerousProblemTypeOutputDTO>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListHistoryDangerWorkShowDTO {
  data: Array<HistoryDangerWorkShowDTO>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListNetworkCheckDTO {
  data: Array<NetworkCheckDTO>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListNetworkCheckSupervisionDTO {
  data: Array<NetworkCheckSupervisionDTO>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListNetworkDangerCheckFeedbackOutputDto {
  data: Array<NetworkDangerCheckFeedbackOutputDto>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListNetworkEvaluationConfigDTO {
  data: Array<NetworkEvaluationConfigDTO>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListPipelineViolationExcelModel {
  data: Array<PipelineViolationExcelModel>;
  /** @format int32 */
  total: number;
}

export interface ResultPageDataListShowDangerUnconfigDetailHDTO {
  data: Array<ShowDangerUnconfigDetailHDTO>;
  /** @format int32 */
  total: number;
}

export interface ResultPageListDangerWorkProblemRecordOutputDto {
  data: Array<DangerWorkProblemRecordOutputDto>;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  pageTotal: number;
  /** @format int64 */
  recordTotal: number;
}
