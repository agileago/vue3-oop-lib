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
 *   公司下某场景分类下的全部标签
 */
export interface AIDictLabelDataOutput {
  /**
   * @description
   *   权重主键 存在id 修改  不存在 新增
   * @format int64
   */
  id: number;
  /**
   * @description
   *   分类名称, 拼接规则，类型/全路径
   */
  name: string;
}

/**
 * @description
 *   AI标签识别入参
 */
export interface AILabelInput {
  /**
   * @description
   *   ai标识
   * @format int32
   */
  aiType: number;
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
   *   场景分类id
   * @format int64
   */
  dictDataId: number;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   类型。0:系统；1:事件描述；2:呼叫中心通话录音
   * @format int32
   */
  source: number;
}

/**
 * @description
 *   添加事件关联标签
 */
export interface AddLabelInput {
  /** @format int64 */
  eventId: number;
  list: Array<LabelNameModel>;
}

/**
 * @description
 *   任务措施和通知策略添加入参
 */
export interface AddNodeTaskInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   模板内容
   */
  content: string;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否必须  1:必须
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   是否预置任务
   * @format int32
   */
  isPreTask: number;
  /**
   * @description
   *   适用级别
   */
  level: string;
  /**
   * @description
   *   模板id  为null  为自定义模板
   * @format int64
   */
  msgId: number;
  /**
   * @description
   *   流程环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   流程环节名称
   */
  nodeName: string;
  /**
   * @description
   *   发布渠道  任务措施  1：app 2：icome   通知策略： 1：短信 2：外呼 3：icome
   */
  noticeType: string;
  /**
   * @description
   *   人员列表
   */
  personList: Array<EmergencyScenePerplanPersonOutput>;
  /**
   * @description
   *   预案id
   * @format int64
   */
  scenePreplanId: number;
  /**
   * @description
   *   任务描述
   */
  taskDescribe: string;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
  /**
   * @description
   *   任务措施类型 1：自定义 2:字典id
   * @format int32
   */
  taskType: number;
}

/**
 * @description
 *   启动终止可选群组入参
 */
export interface AddressListTreeInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
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

/**
 * @description
 *   通讯录组
 */
export interface AddressListTreeOutput {
  children: Array<AddressListTreeOutput>;
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
   *   icome是否可勾选，实体下是否有其他事件在该群中未结束
   */
  sessionStatus: boolean;
  /**
   * @description
   *   true：icome群组；false:非icome群组
   */
  status: boolean;
}

/**
 * @description
 *   查询调整险情分级后数据
 */
export interface AdjustInput {
  /**
   * @description
   *   应急事件主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   应急预案主键
   * @format int64
   */
  preplanId: number;
  /**
   * @description
   *   应急预案等级
   * @format int32
   */
  preplanLevel: number;
}

/**
 * @description
 *   查询调整险情分级参数
 */
export interface AdjustOutput {
  /**
   * @description
   *   群组ID
   */
  groupIds: Array<number>;
  /**
   * @description
   *   短信内容
   */
  messageContent: string;
  /**
   * @description
   *   外呼内容
   */
  phoneContent: string;
  /**
   * @description
   *   响应级别划分标准
   */
  text: string;
}

/**
 * @description
 *   绑定标签到预案
 */
export interface BatchLabelToPreplanInput {
  /**
   * @description
   *   绑定的标签id
   */
  labelIds: Array<number>;
  /**
   * @description
   *   预案id
   * @format int64
   */
  preplanId: number;
}

/**
 * @description
 *   呼叫中心 详情
 */
export interface CallCenterProcessOutput {
  billNum: string;
  description: string;
  operator: string;
  orderStatus: string;
  result: string;
  status: string;
  time: string;
}

export interface CallCenterProcessResultOutput {
  ecode: string;
  ename: string;
  list: Array<CallCenterProcessOutput>;
}

/**
 * @description
 *   外呼实体
 */
export interface CallInput {
  companyCode: string;
  itcode: string;
  msg: string;
  name: string;
  phoneNum: string;
  /** @format int64 */
  taskId: number;
  /** @format int32 */
  type: number;
}

/**
 * @description
 *   发送外呼人员集合
 */
export interface CallList {
  callTemplate: string;
  /** @format int64 */
  callTemplateId: number;
  /**
   * @description
   *   是否是网格人员，true：是
   */
  gridIdentification: boolean;
  groupName: string;
  icomeCardSend: boolean;
  icomeContent: string;
  /** @format int64 */
  icomeId: number;
  /**
   * @description
   *   icom群组发送列表
   */
  icomeList: Array<EmergencyNoticeIcomeInput>;
  icomeSend: boolean;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   账号
   */
  itcode: string;
  msgTemplate: string;
  /** @format int64 */
  msgTemplateId: number;
  /**
   * @description
   *   名称
   */
  name: string;
  sendMsg: boolean;
  sendPhone: boolean;
  /**
   * @description
   *   手机号
   */
  telephone: string;
  userName: string;
}

/**
 * @description
 *   任务中心取消接口入参
 */
export interface CancelTaskInput {
  /**
   * @description
   *   取消原因
   */
  cancelReason: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
}

/**
 * @description
 *   事件已调度车辆信息列表
 */
export interface CarDispatchOutput {
  /**
   * @description
   *   开始调度时间 yyyy-MM-dd HH:mm:ss
   */
  beginTime: string;
  /**
   * @description
   *   公司编码 例0011
   */
  companyCode: string;
  /**
   * @description
   *   事件结束时间 yyyy-MM-dd HH:mm:ss
   */
  endTime: string;
  /**
   * @description
   *   车牌号
   */
  licensePlate: string;
  /**
   * @description
   *   调度车辆短信信息
   */
  msg: string;
  /**
   * @description
   *   用户姓名
   */
  phone: string;
  /**
   * @description
   *   调度车辆电话信息
   */
  phoneMsg: string;
  /**
   * @description
   *   是否已到达 2:已到达
   * @format int32
   */
  taskStatus: number;
  /**
   * @description
   *   用户姓名
   */
  username: string;
}

/**
 * @description
 *   查询车辆点检详情
 */
export interface CarInspectionDetailReq {
  /**
   * @description
   *   分类全路径
   */
  categoryPaths: Array<string>;
  /**
   * @description
   *   点检日期 格式：yyyy-MM-dd
   */
  inspectDate: string;
  /**
   * @description
   *   车牌
   */
  licensePlate: string;
  /**
   * @description
   *   模糊查询
   */
  searchWord: string;
}

/**
 * @description
 *   点检
 */
export interface CarInspectionDetailVO {
  /**
   * @description
   *   点检项
   */
  categorySupplies: Array<CategorySuppliesVO>;
  /**
   * @description
   *   企业编码
   */
  companyCode: string;
  /**
   * @description
   *   企业名称
   */
  companyName: string;
  /**
   * @description
   *   已完成项目数
   * @format int32
   */
  completedItems: number;
  /**
   * @description
   *   点检日期 格式：yyyy-MM-dd
   */
  inspectDate: string;
  /**
   * @description
   *   点检id
   * @format int64
   */
  inspectionId: number;
  /**
   * @description
   *   点检结果
   */
  inspectionSummary: string;
  /**
   * @description
   *   检查名称
   */
  inspectionTitle: string;
  /**
   * @description
   *   车牌
   */
  licensePlate: string;
  /**
   * @description
   *   手机号
   */
  phone: string;
  /**
   * @description
   *   进度
   */
  progress: number;
  /**
   * @description
   *   区域编号
   */
  region: string;
  /**
   * @description
   *   区域名称
   */
  regionName: string;
  /**
   * @description
   *   点检状态 0-未开始 1-进行中 2-已完成
   * @format int32
   */
  status: number;
  /**
   * @description
   *   项目总数
   * @format int32
   */
  totalItems: number;
  /**
   * @description
   *   未完成项目数
   * @format int32
   */
  uncompletedItems: number;
  /**
   * @description
   *   姓名
   */
  username: string;
  /**
   * @description
   *   车辆标签
   */
  vehicleLabel: string;
}

/**
 * @description
 *   车辆点检
 */
export interface CarInspectionReq {
  /**
   * @description
   *   点检日期 格式：yyyy-MM-dd
   */
  inspectDate: string;
  /**
   * @description
   *   车牌
   */
  licensePlate: string;
}

/**
 * @description
 *   分类
 */
export interface CategorySuppliesVO {
  /**
   * @description
   *   分类名称
   */
  categoryName: string;
  /**
   * @description
   *   分类全路径
   */
  categoryPath: string;
  /**
   * @description
   *   项
   */
  items: Array<InspectionSuppliesVO>;
}

/**
 * @description
 *   换班入参实体
 */
export interface ChangeDutyReqInput {
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

/**
 * @description
 *   点检记录详情
 */
export interface CheckDetail {
  /**
   * @description
   *   点检结果
   */
  checkResult: string;
  /**
   * @description
   *   点检结果列表
   */
  checkResultList: Array<string>;
  /**
   * @description
   *   点检详情
   */
  detail: Array<GoodsCheckInfo>;
  /**
   * @description
   *   详情标题
   */
  title: string;
}

/**
 * @description
 *   点检入参实体
 */
export interface CheckInReqInput {
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

/**
 * @description
 *   校验人在任务里是否存在
 */
export interface CheckItcodeInput {
  /** @format int32 */
  groupId: number;
  itcode: string;
  /** @format int64 */
  roleId: number;
}

/**
 * @description
 *   物资点检记录
 */
export interface CheckRecordInfo {
  /**
   * @description
   *   点检结果
   */
  checkResult: string;
  /**
   * @description
   *   点检日期
   */
  date: string;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   完成时间
   */
  time: string;
  /**
   * @description
   *   点检人
   */
  username: string;
}

/**
 * @description
 *   公司详情
 */
export interface Company {
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
}

/**
 * @description
 *   查询实体下公司
 */
export interface CompanyStationOrganInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   实体编码
   */
  cpmoCode: string;
  /**
   * @description
   *   站点ID
   */
  locId: string;
}

/**
 * @description
 *   公司树
 */
export interface CompanyTree {
  /**
   * @description
   *   树子集
   */
  children: Array<CompanyTree>;
  /**
   * @description
   *   公司/实体编码
   */
  code: string;
  /**
   * @description
   *   实体id
   * @format int64
   */
  deptId: number;
  /**
   * @description
   *   公司/实体名称
   */
  name: string;
  /**
   * @description
   *   公司类型 0-实体 1-公司
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   现场确认人员实体
 */
export interface ConfirmListInput {
  /**
   * @description
   *   现场确认人员网格
   */
  confirmLocationCode: string;
  /**
   * @description
   *   现场确认人员网格名称
   */
  confirmLocationName: string;
  /**
   * @description
   *   现场确认人员
   */
  confirmUser: string;
  /**
   * @description
   *   现场确认人员名称
   */
  confirmUserName: string;
  /**
   * @description
   *   现场确认人员电话
   */
  confirmUserPhone: string;
}

/**
 * @description
 *   呼叫中心详情实体
 */
export interface ContentInput {
  billNum: string;
  content: string;
  operator: string;
}

/**
 * @description
 *   图层实体
 */
export interface ControlPlanInput {
  eqptCode: string;
  layerId: string;
}

/**
 * @description
 *   控制预案信息
 */
export interface ControlPlanOutput {
  baseCode: string;
  date: string;
  details: any;
  ecode: string;
  planState: string;
  user: string;
}

/**
 * @description
 *   事发地周围范围内调压器近几天的数据
 */
export interface DailyChartInput {
  deviceId: string;
  ecode: string;
  latitude: number;
  longitude: number;
  standId: string;
  /** @format int32 */
  type: number;
}

/**
 * @description
 *   调压器详情
 */
export interface DetectionDetailOutput {
  connectionmethod: string;
  controlingtype: string;
  dno_name: string;
  eqptcode: string;
  eqptstatus: string;
  eqpttype: string;
  /** @format int64 */
  gid: number;
  installationway: string;
  location: string;
  manufacturer: string;
  material: string;
  model: string;
  pressurerating: string;
  specification: string;
  switchingstatus: string;
  welldepth: string;
}

/**
 * @description
 *   区域
 */
export interface DetonationAreaOutput {
  communityName: string;
  unit: string;
}

/**
 * @description
 *   爆管分析明细入参
 */
export interface DetonationDetailsInput {
  /**
   * @description
   *   房产编号
   */
  buildCode: string;
  /**
   * @description
   *   合同号
   */
  contractNumber: string;
  /**
   * @description
   *   BP
   */
  partner: string;
  /**
   * @description
   *   客户名称
   */
  partner_txt: string;
  /**
   * @description
   *   客户类型
   */
  partner_type: string;
  /**
   * @description
   *   表钢号
   */
  steelGrade: string;
  /**
   * @description
   *   连接对象编号
   */
  tplnr: string;
  /**
   * @description
   *   连接对象描述
   */
  tplnr_txt: string;
  /**
   * @description
   *   1：BP/客户类型/连接对象编号/连接对象描述/客户名称;2：/房产编号/表钢号/合同号;3:混合查;
   */
  type: string;
}

/**
 * @description
 *   爆管分析返回明细
 */
export interface DetonationDetailsOutput {
  /**
   * @description
   *   房产编号
   */
  buildCode: string;
  /**
   * @description
   *   合同号
   */
  contractNumber: string;
  /**
   * @description
   *   客户描述
   */
  customerProfile: string;
  /**
   * @description
   *   表钢号
   */
  steelGrade: string;
}

/**
 * @description
 *   压力曲线数据
 */
export interface DeviceChartOutput {
  datas: {
    [propertyName: string]: Array<string>;
  };
  deviceId: string;
  deviceName: string;
  ecode: string;
  standId: string;
  /** @format int32 */
  type: number;
  unit: string;
}

/**
 * @description
 *   获取物资装备全部类别
 */
export interface DeviceDict {
  /**
   * @description
   *   子集类别
   */
  childs: Array<DeviceDict>;
  /**
   * @description
   *   类别名称
   */
  deviceName: string;
  /**
   * @description
   *   id
   * @format int32
   */
  id: number;
}

/**
 * @description
 *   设备
 */
export interface DeviceOutput {
  address: string;
  deviceCode: string;
  deviceType: string;
}

/**
 * @description
 *   文件描述
 */
export interface DictData {
  /** @format int64 */
  dictId: number;
  dictLabel: string;
  dictType: string;
  dictValue: string;
}

/**
 * @description
 *   可编辑字典数据
 */
export interface DictDataEditable {
  /**
   * @description
   *   是否勾选；0：未勾选，1：已勾选
   * @format int32
   */
  checkFlag: number;
  /**
   * @description
   *   实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   删除标志；0：未删除，1：已删除
   * @format int32
   */
  deleteFlag: number;
  /**
   * @description
   *   字典值id
   * @format int64
   */
  dictId: number;
  /**
   * @description
   *   字典值标签
   */
  dictLabel: string;
  /**
   * @description
   *   字典类型
   */
  dictType: string;
  /**
   * @description
   *   字典键值
   */
  dictValue: string;
  /**
   * @description
   *   是否可编辑；0：可编辑，1：不可编辑
   * @format int32
   */
  editable: number;
  /**
   * @description
   *   父节点id
   * @format int64
   */
  parentId: number;
}

/**
 * @description
 *   可编辑字典数据模型
 */
export interface DictDataEditableInput {
  /**
   * @description
   *   是否勾选；0：未勾选，1：已勾选
   * @format int32
   */
  checkFlag: number;
  /**
   * @description
   *   公司编码四位数
   */
  cpmoCop: string;
  /**
   * @description
   *   删除标志；0：未删除，1：已删除
   * @format int32
   */
  deleteFlag: number;
  /**
   * @description
   *   字典标签
   */
  dictLabel: string;
  /**
   * @description
   *   字典键值
   */
  dictValue: string;
  /**
   * @description
   *   是否可编辑；0：可编辑，1：不可编辑
   * @format int32
   */
  editable: number;
  /**
   * @description
   *   字典值id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   父节点id
   * @format int64
   */
  parentId: number;
}

/**
 * @description
 *   字典类型输出
 */
export interface DictDataEditableOutput {
  /**
   * @description
   *   字典数据列表
   */
  dictData: Array<DictDataEditable>;
  /**
   * @description
   *   字典名称
   */
  dictName: string;
  /**
   * @description
   *   字典类型
   */
  dictType: string;
  /**
   * @description
   *   字典类型id
   * @format int64
   */
  id: number;
}

/**
 * @description
 *   字典数据
 */
export interface DictDataOutput {
  dictData: Array<DictData>;
  dictName: string;
  dictType: string;
  /** @format int64 */
  id: number;
}

/**
 * @description
 *   字典
 */
export interface DictLabelOutput {
  /** @format int64 */
  id: number;
  labelList: Array<DictLabelOutput>;
  name: string;
  /** @format int64 */
  parentId: number;
  /** @format int32 */
  type: number;
}

/**
 * @description
 *   可编辑字典类型模型
 */
export interface DictTypeInput {
  /**
   * @description
   *   可编辑字典数据模型
   */
  dictDataEditableInputList: Array<DictDataEditableInput>;
  /**
   * @description
   *   字典名称
   */
  dictName: string;
  /**
   * @description
   *   字典类型
   */
  dictType: string;
}

/**
 * @description
 *   资源调配入参实体
 */
export interface DispatchInput {
  companyCode: string;
  endLatitude: string;
  endLongitude: string;
  endPostion: string;
  eventCode: string;
  itcode: string;
  licensePlate: string;
  organCode: string;
  organName: string;
  phone: string;
  region: string;
  startLatitude: string;
  startLongitude: string;
  status: boolean;
  /** @format int32 */
  trafficType: number;
  /** @format int32 */
  type: number;
  username: string;
}

/**
 * @description
 *   资源调配详情入参实体
 */
export interface DispatchResourceInput {
  content: string;
  cpmoCode: string;
  distance: string;
  eventCode: string;
  /** @format int64 */
  eventId: number;
  flag: boolean;
  /** @format int64 */
  gasId: number;
  gasType: string;
  /** @format int32 */
  isDispatch: number;
  itcode: string;
  latitude: string;
  licensePlate: string;
  longitude: string;
  operationStep: string;
  /** @format int32 */
  range: number;
  /** @format int32 */
  source: number;
  status: boolean;
  /** @format int32 */
  transportation: number;
  /** @format int32 */
  type: number;
}

/**
 * @description
 *   资源调配接口
 */
export interface DispatchResourceOutput {
  /** @format date-time */
  actualArriveTime: string;
  address: string;
  arriveTime: string;
  companyCode: string;
  companyName: string;
  /** @format date-time */
  createTime: string;
  distance: string;
  distanceNumber: number;
  distanceTime: string;
  /** @format int64 */
  eventId: number;
  gpsTime: string;
  id: string;
  inspectionSummary: Array<string>;
  itcode: string;
  latitude: number;
  latitudeMkt: number;
  licensePlate: string;
  longitude: number;
  longitudeMkt: number;
  /** @format int32 */
  number: number;
  organCode: string;
  organName: string;
  phone: string;
  region: string;
  /** @format int32 */
  status: number;
  taskStatus: string;
  taskType: string;
  tasks: Array<{
    [propertyName: string]: string;
  }>;
  /** @format int32 */
  trafficType: number;
  /** @format int32 */
  type: number;
  userStatus: string;
  username: string;
  vehicleType: string;
}

/**
 * @description
 *   获取某天某个岗位的值班信息入参实体
 */
export interface DutyDateQueryInput {
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
   *   岗位编号
   * @format int64
   */
  positionId: number;
}

/**
 * @description
 *   排班值班
 */
export interface DutyOutput {
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
  person: PersonOutput;
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

/**
 * @description
 *   岗位人员
 */
export interface DutyPositionDto {
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

/**
 * @description
 *   工单任务通用反馈
 */
export interface EmeProOrderFeedBackOutput {
  /**
   * @description
   *   反馈时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   耗时时间
   */
  distanceTime: string;
  /**
   * @description
   *   应急事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   反馈人电话
   */
  feedbackPhone: string;
  /**
   * @description
   *   任务类型（1关阀，2抢修, 3停气通知，4恢复停气通知
   * @format int32
   */
  feedbackType: number;
  /**
   * @description
   *   反馈人ItCode
   */
  feedbackUserId: string;
  /**
   * @description
   *   反馈时人员位置
   */
  feedbackUserLocation: string;
  /**
   * @description
   *   反馈人名称
   */
  feedbackUserName: string;
  /**
   * @description
   *   实际完成时间
   * @format date-time
   */
  overTime: string;
}

/**
 * @description
 *   呼叫中心应急事件详情
 */
export interface EmergencyCallCenterDetailOutput {
  /**
   * @description
   *   音频文件地址
   */
  audioUrl: string;
  audioUrlValue: string;
  billNum: string;
  billOrderSourceText: string;
  callId: string;
  /** @format int32 */
  clientType: number;
  contents: Array<string>;
  contractNo: string;
  /** @format date-time */
  createTime: string;
  /** @format int32 */
  createUserId: number;
  createUsername: string;
  dealUserCorpCode: string;
  dealUserCorpName: string;
  eventCode: string;
  /** @format int64 */
  id: number;
  name: string;
  /** @format date-time */
  orderCreateTime: string;
  /** @format date-time */
  orderUpdateTime: string;
  /** @format int32 */
  questionFirstClassId: number;
  questionFirstClassName: string;
  /** @format int32 */
  questionSecondClassId: number;
  questionSecondClassName: string;
  remindOrder: Array<RemindOrderEntity>;
  /** @format int32 */
  remindTimes: number;
  riskLocationDetail: string;
  stateName: string;
  tel: string;
  threePartyConversationText: string;
  tripartiteCausesDesc: string;
  /** @format date-time */
  updateTime: string;
}

/**
 * @description
 *   获取实体下面的默认关联公司
 */
export interface EmergencyCompCodeOutput {
  compCode: string;
  compCodeTxt: string;
}

/**
 * @description
 *   信息监测数据实体
 */
export interface EmergencyDetectionInput {
  compCode: string;
  cpmoCop: string;
  /** @format int32 */
  distance: number;
  /** @format int64 */
  eventId: number;
  eventStatusName: string;
  lat: string;
  lng: string;
  /** @format int32 */
  type: number;
}

/**
 * @description
 *   调压器/阀井列表
 */
export interface EmergencyDetectionOutput {
  category: string;
  /** @format date-time */
  createTime: string;
  deviceIds: Array<string>;
  distance: string;
  dnoName: string;
  ecode: string;
  eqptcode: string;
  eqpttype: string;
  eventCode: string;
  /** @format double */
  exitPressure: number;
  hasAlert: boolean;
  hasData: boolean;
  hasIot: boolean;
  /** @format int64 */
  id: number;
  inletExitPressure: string;
  /** @format double */
  inletPressure: number;
  installationMethod: string;
  location: string;
  materialQuality: string;
  /** @format double */
  methaneConcentration: number;
  standId: string;
  type: string;
  unit: string;
  /** @format date-time */
  updateTime: string;
  xcoordinate: string;
  ycoordinate: string;
}

/**
 * @description
 *   字典
 */
export interface EmergencyDictDataInput {
  /**
   * @description
   *   公司编码四位数
   */
  cpmoCop: string;
  /**
   * @description
   *   字典id值
   * @format int64
   */
  dictId: number;
  /**
   * @description
   *   应急事件id
   * @format int64
   */
  emergencyId: number;
  /**
   * @description
   *   itCode
   */
  itCode: string;
}

/**
 * @description
 *   应急事件所属节点树形结构
 */
export interface EmergencyDictDataOutput {
  /**
   * @description
   *   激活状态；0：非激活状态，1：激活状态
   * @format int32
   */
  active: number;
  /**
   * @description
   *   是否勾选；0：未勾选，1：已勾选
   * @format int32
   */
  checkFlag: number;
  /**
   * @description
   *   实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   字典id值
   * @format int64
   */
  dictId: number;
  /**
   * @description
   *   字典标签，一般中文，例如：防护用品、生命救助
   */
  dictLabel: string;
  /**
   * @description
   *   包含子节点列表
   */
  dictList: Array<EmergencyDictDataOutput>;
  /**
   * @description
   *   字典类型，一般用中文对应的英文译文来表示，如：EMERGENCY_PERSONNEL_LEVEL
   */
  dictType: string;
  /**
   * @description
   *   字典键值，dictValue表示数字值，如预案状态中的0,1,2,3,4
   */
  dictValue: string;
  /**
   * @description
   *   是否可编辑；0：可编辑，1：不可编辑
   * @format int32
   */
  editable: number;
  /**
   * @description
   *   父节点id
   * @format int64
   */
  parentId: number;
}

/**
 * @description
 *   标签实体
 */
export interface EmergencyEnterpriseDictLabelDataAddInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   场景分类id
   * @format int32
   */
  dictDataId: number;
  /** @format int32 */
  isAdd: number;
  /**
   * @description
   *   1:工艺设施；2:空间类型；3:泄漏情况；4:事故原因；5:事故后果；6:重点区域；7:燃气管段；8:事故类型
   * @format int32
   */
  labelType: number;
  /**
   * @description
   *   分类名称
   */
  name: string;
  /**
   * @description
   *   父级id 如果为顶级 传 0
   * @format int64
   */
  parentId: number;
  /**
   * @description
   *   1 分类   2标签
   * @format int32
   */
  type: number;
  /**
   * @description
   *   labelType=5的时候 传值 json  {'min':最小数  ,'max':最大数}
   */
  value: string;
}

/**
 * @description
 *   标签实体
 */
export interface EmergencyEnterpriseDictLabelDataInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   场景分类id
   * @format int32
   */
  dictDataId: number;
  /**
   * @description
   *   场景预案id
   * @format int64
   */
  scenePreplanId: number;
}

/**
 * @description
 *   标签实体
 */
export interface EmergencyEnterpriseDictLabelDataOutput {
  /**
   * @description
   *   是否是被当前预案选择 ture ： 选中  false  未选择
   */
  checked: boolean;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   场景分类id
   * @format int64
   */
  dictDataId: number;
  /**
   * @description
   *   权重主键 存在id 修改  不存在 新增
   * @format int64
   */
  id: number;
  /**
   * @description
   *   0 = 初始  1 = 自定义
   * @format int32
   */
  isAdd: number;
  /**
   * @description
   *   全路径标签分类名称
   */
  labelName: string;
  /**
   * @description
   *   全路径标签分类id
   */
  labelPath: string;
  /**
   * @description
   *   1:工艺设施；2:空间类型；3:泄漏情况；4:事故原因；5:事故后果；6:重点区域；7:燃气管段；8:事故类型
   * @format int32
   */
  labelType: number;
  /**
   * @description
   *   分类名称
   */
  name: string;
  /**
   * @description
   *   父级id
   * @format int64
   */
  parentId: number;
  slist: Array<EmergencyEnterpriseDictLabelDataOutput>;
  /**
   * @description
   *   排序
   * @format int32
   */
  sortCode: number;
  /**
   * @description
   *   1 = 分类  2 = 标签
   * @format int32
   */
  type: number;
  value: string;
}

/**
 * @description
 *   应急启动通讯录人员详情
 */
export interface EmergencyEventAddressListDetails {
  /**
   * @description
   *   人员手机号
   */
  mobile: string;
  /**
   * @description
   *   人员账号-itcode
   */
  userAccount: string;
  /**
   * @description
   *   人员名称
   */
  userName: string;
}

/**
 * @description
 *   应急启动通讯录详情
 */
export interface EmergencyEventAddressListOutput {
  /**
   * @description
   *   应急事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   通讯录组列表详情
   */
  groupDetails: {
    /**
        @description
          通讯录组列表详情 */
    [propertyName: string]: Array<EmergencyEventAddressListDetails>;
  };
  /**
   * @description
   *   通讯录组列表
   */
  groupNames: Array<string>;
}

/**
 * @description
 *   用户关联事件列表
 */
export interface EmergencyEventAppListDataOutput {
  /**
   * @description
   *   应急事件列表
   */
  list: Array<EmergencyEventEntryAppOutput>;
  /**
   * @description
   *   当前用户的位置信息
   */
  position: PositionInfoOutput;
}

/**
 * @description
 *   险情确认入参
 */
export interface EmergencyEventConfirmInput {
  addRemark: string;
  /** @format int32 */
  casualties: number;
  confirmEventLatitude: number;
  confirmEventLocation: string;
  confirmEventLongitude: number;
  confirmPipeline: string;
  dangerousType: string;
  /** @format int32 */
  eventLevel: number;
  eventName: string;
  /** @format date-time */
  eventStartTime: string;
  eventType: string;
  /** @format int64 */
  id: number;
  /** @format int32 */
  influenceProduction: number;
  /** @format int32 */
  influenceRange: number;
  locationCode: string;
  locationName: string;
  /** @format int32 */
  misReport: number;
  pipeInfo: string;
}

/**
 * @description
 *   事件险情确认人员
 */
export interface EmergencyEventConfirmPersonOutput {
  /** @format date-time */
  beginTime: string;
  confirmUser: string;
  confirmUserName: string;
  confirmUserPhone: string;
  createItcode: string;
  /** @format date-time */
  createTime: string;
  /** @format int32 */
  dr: number;
  /** @format int64 */
  eventId: number;
  /** @format date-time */
  finishTime: string;
  /** @format int64 */
  id: number;
}

/**
 * @description
 *   事件详情（App）
 */
export interface EmergencyEventDetailAppOutput {
  /**
   * @description
   *   事件详情
   */
  event: EmergencyEventOutput;
  /**
   * @description
   *   当前用户的位置信息
   */
  position: PositionInfoOutput;
}

/**
 * @description
 *   用户itcode查询应急事件
 */
export interface EmergencyEventEntryAppOutput {
  /**
   * @description
   *   到达现场时间
   * @format date-time
   */
  arrivedTime: string;
  /**
   * @description
   *   到达现场时间
   * @format int64
   */
  arrivedTimeTemp: number;
  /**
   * @description
   *   启动响应发信息批次id
   * @format int64
   */
  batchId: number;
  /**
   * @description
   *   追加催单表主键
   * @format int64
   */
  callId: number;
  /**
   * @description
   *   0：不追，1：追
   * @format int32
   */
  chase: number;
  /**
   * @description
   *   确认完成时间
   * @format date-time
   */
  confirmCompleteTime: string;
  /**
   * @description
   *   确认完成时间
   * @format int64
   */
  confirmCompleteTimeTemp: number;
  confirmUser: string;
  confirmUserName: string;
  content: string;
  /**
   * @description
   *   是否客服岗位
   */
  customerServicePost: boolean;
  /**
   * @description
   *   险情分类
   */
  dangerousType: string;
  /**
   * @description
   *   险情分类名称
   */
  dangerousTypeCn: string;
  /** @format int32 */
  distance: number;
  /**
   * @description
   *   行政区划代码
   */
  districtId: string;
  /**
   * @description
   *   结束时间
   * @format date-time
   */
  endTime: string;
  /**
   * @description
   *   结束时间
   * @format int64
   */
  endTimeTemp: number;
  /**
   * @description
   *   实体公司编码
   */
  entityCode: string;
  /**
   * @description
   *   管段编码
   */
  eqptcode: string;
  /**
   * @description
   *   事件编码
   */
  eventCode: string;
  /**
   * @description
   *   事发公司编码
   */
  eventCompanyCode: string;
  /**
   * @description
   *   纬度
   */
  eventLatitude: number;
  /**
   * @description
   *   墨卡托纬度
   */
  eventLatitudeMo: number;
  /**
   * @description
   *   险情分级（1-一级紧急 2-二级紧急 3-三级紧急）
   * @format int32
   */
  eventLevel: number;
  /**
   * @description
   *   事件地点
   */
  eventLocation: string;
  /**
   * @description
   *   经度
   */
  eventLongitude: number;
  /**
   * @description
   *   墨卡托经度
   */
  eventLongitudeMo: number;
  /**
   * @description
   *   事件名称
   */
  eventName: string;
  /**
   * @description
   *   事件来源code
   * @format int32
   */
  eventSource: number;
  /**
   * @description
   *   事件来源名称
   */
  eventSourceName: string;
  /**
   * @description
   *   事发时间
   */
  eventStartTime: string;
  /**
   * @description
   *   事件状态名称
   */
  eventStatusName: string;
  /**
   * @description
   *   事件类型编号
   */
  eventType: string;
  /**
   * @description
   *   事件主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否已经上报用户位置确认。1:已经上报；0:还未上报
   * @format int32
   */
  isUserReport: number;
  /**
   * @description
   *   启动预案时间
   * @format date-time
   */
  launchTime: string;
  /**
   * @description
   *   启动预案时间
   * @format int64
   */
  launchTimeTemp: number;
  /**
   * @description
   *   图层id
   */
  layerid: string;
  /**
   * @description
   *   误报标志；0-否，1-是
   * @format int32
   */
  misReport: number;
  /**
   * @description
   *   是否需要险情确认
   * @format int32
   */
  needConfirmRisk: number;
  /**
   * @description
   *   夜间模式：0-否；1-是
   * @format int32
   */
  nightMode: number;
  /**
   * @description
   *   夜间模式值班人itcode
   */
  nightUserItcode: string;
  /**
   * @description
   *   夜间模式值班人名称
   */
  nightUserName: string;
  /**
   * @description
   *   事件节点
   * @format double
   */
  operationStep: number;
  /**
   * @description
   *   是否想修岗位
   */
  orderRepairPost: boolean;
  /**
   * @description
   *   是否管阀岗位
   */
  orderValuePost: boolean;
  pipeInfo: string;
  /**
   * @description
   *   管段信息
   */
  pipeNameInfo: string;
  /**
   * @description
   *   接警时间
   * @format date-time
   */
  receiveTime: string;
  /**
   * @description
   *   接警时间
   * @format int64
   */
  receiveTimeTemp: number;
  /**
   * @description
   *   0：不催，1：催
   * @format int32
   */
  remind: number;
  remindOrder: string;
  /**
   * @description
   *   上报时间
   * @format date-time
   */
  reportTime: string;
  /**
   * @description
   *   上报时间
   * @format int64
   */
  reportTimeTemp: number;
  /** @format int32 */
  reportType: number;
  /**
   * @description
   *   上传人itcode
   */
  reportUserAccount: string;
  /**
   * @description
   *   上报人姓名
   */
  reportUserName: string;
  /**
   * @description
   *   上报人手机号
   */
  reportUserPhone: string;
  /**
   * @description
   *   是否可以发送险情位置确认短信。1：可以发送；0:屏蔽，不显示
   * @format int32
   */
  sendConfirmSms: number;
  /**
   * @description
   *   追加是否已读（1：已读；0：未读）
   * @format int32
   */
  showContent: number;
  /**
   * @description
   *   催单是否已读（1：已读；0：未读）
   * @format int32
   */
  showRemindOrder: number;
}

/**
 * @description
 *   应急事件
 */
export interface EmergencyEventEntryOutput {
  /**
   * @description
   *   启动响应发信息批次id
   * @format int64
   */
  batchId: number;
  /**
   * @description
   *   追加催单表主键
   * @format int64
   */
  callId: number;
  /**
   * @description
   *   0：不追，1：追
   * @format int32
   */
  chase: number;
  confirmUser: string;
  confirmUserName: string;
  content: string;
  /** @format int32 */
  distance: number;
  /**
   * @description
   *   行政区划代码
   */
  districtId: string;
  /**
   * @description
   *   实体公司编码
   */
  entityCode: string;
  /**
   * @description
   *   管段编码
   */
  eqptcode: string;
  /**
   * @description
   *   事件编码
   */
  eventCode: string;
  /**
   * @description
   *   事发公司编码
   */
  eventCompanyCode: string;
  /**
   * @description
   *   纬度
   */
  eventLatitude: number;
  /**
   * @description
   *   事件地点
   */
  eventLocation: string;
  /**
   * @description
   *   经度
   */
  eventLongitude: number;
  /**
   * @description
   *   事件名称
   */
  eventName: string;
  /**
   * @description
   *   事件来源code
   * @format int32
   */
  eventSource: number;
  /**
   * @description
   *   事件来源名称
   */
  eventSourceName: string;
  /**
   * @description
   *   事发时间
   */
  eventStartTime: string;
  /**
   * @description
   *   事件状态名称
   */
  eventStatusName: string;
  /**
   * @description
   *   事件主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否已经上报用户位置确认。1:已经上报；0:还未上报
   * @format int32
   */
  isUserReport: number;
  /** @format date-time */
  launchTime: string;
  /**
   * @description
   *   图层id
   */
  layerid: string;
  /**
   * @description
   *   误报标志；0-否，1-
   * @format int32
   */
  misReport: number;
  /**
   * @description
   *   是否需要险情确认
   * @format int32
   */
  needConfirmRisk: number;
  /**
   * @description
   *   夜间模式：0-否；1-是
   * @format int32
   */
  nightMode: number;
  /**
   * @description
   *   夜间模式值班人itcode
   */
  nightUserItcode: string;
  /**
   * @description
   *   夜间模式值班人名称
   */
  nightUserName: string;
  /**
   * @description
   *   事件节点
   * @format double
   */
  operationStep: number;
  pipeInfo: string;
  /**
   * @description
   *   0：不催，1：催
   * @format int32
   */
  remind: number;
  remindOrder: string;
  /** @format int32 */
  reportType: number;
  /**
   * @description
   *   上传人itcode
   */
  reportUserAccount: string;
  /**
   * @description
   *   上传人名称
   */
  reportUserName: string;
  /**
   * @description
   *   上传人手机号
   */
  reportUserPhone: string;
  /**
   * @description
   *   是否可以发送险情位置确认短信。1：可以发送；0:屏蔽，不显示
   * @format int32
   */
  sendConfirmSms: number;
  /**
   * @description
   *   追加是否已读（1：已读；0：未读）
   * @format int32
   */
  showContent: number;
  /**
   * @description
   *   催单是否已读（1：已读；0：未读）
   * @format int32
   */
  showRemindOrder: number;
}

/**
 * @description
 *   事件反馈实体
 */
export interface EmergencyEventFeedbackOutput {
  alarmId: string;
  /** @format date-time */
  createTime: string;
  distanceTime: string;
  ecode: string;
  /** @format int64 */
  eventId: number;
  feedbackAddr: string;
  feedbackAddrGeom: string;
  /**
   * @description
   *   反馈时人员位置
   */
  feedbackUserLocation: string;
  /** @format int32 */
  isLeakDetection: number;
  /** @format int32 */
  isPressureHolding: number;
  /** @format int32 */
  isPressureTest: number;
  /** @format int32 */
  isRecover: number;
  itcode: string;
  livePhotos: string;
  pipeExpireReason: string;
  remark: string;
  /** @format int32 */
  status: number;
  userName: string;
}

/**
 * @description
 *   启动应急预案抢险入参
 */
export interface EmergencyEventGroupInput {
  /** @format int64 */
  batchId: number;
  callTemplate: string;
  /** @format int64 */
  callTemplateId: number;
  /**
   * @description
   *   事发地公司编码
   */
  companyCode: string;
  /**
   * @description
   *   参与者中心短token
   */
  ennUnifiedCsrfToken: string;
  /**
   * @description
   *   险情分级（1-一级紧急 2-二级紧急 3-三级紧急）
   * @format int32
   */
  eventLevel: number;
  eventName: string;
  /**
   * @description
   *   任务分发人信息
   */
  executorInfos: Array<EmergencyStartExecutorInfoInput>;
  /**
   * @description
   *   用户登录token
   */
  externalToken: string;
  /**
   * @description
   *   参与者中心code
   */
  grantCode: string;
  groupInfos: Array<Array<EmergencyPrePlanPersonInput>>;
  /** @format int32 */
  groupType: number;
  /**
   * @description
   *   是否发送普通卡片消息, true普通卡片，false采用互动卡片发送
   */
  icomeCardSend: boolean;
  icomeContent: string;
  /** @format int64 */
  icomeId: number;
  /**
   * @description
   *   icom群组发送列表
   */
  icomeList: Array<EmergencyNoticeIcomeInput>;
  icomeSend: boolean;
  /** @format int64 */
  id: number;
  info: Array<EmergencyPrePlanPersonInput>;
  infos: Array<EmergencyPrePlanPersonInput>;
  itcode: string;
  msgTemplate: string;
  /** @format int64 */
  msgTemplateId: number;
  /**
   * @description
   *   事发地网格编码
   */
  organCode: string;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  phone: string;
  /** @format int64 */
  prePlanId: number;
  prePlanName: string;
  /**
   * @description
   *   预案类型，1:常规预案；2:场景预案
   * @format int32
   */
  preplanType: number;
  sendMsg: boolean;
  sendPhone: boolean;
  slist: Array<EmergencyStrategy>;
  /** @format int32 */
  status: number;
  tlist: Array<StartTaskInput>;
  userName: string;
}

/**
 * @description
 *   事件群组实体
 */
export interface EmergencyEventGroupOutput {
  /** @format date-time */
  createTime: string;
  /** @format int32 */
  deleteFlag: number;
  /** @format int64 */
  eventId: number;
  eventName: string;
  /** @format int32 */
  groupId: number;
  groupName: string;
  /** @format int32 */
  groupType: number;
  /** @format int64 */
  id: number;
  mobile: string;
  /** @format int64 */
  prePlanId: number;
  prePlanName: string;
  /** @format int32 */
  updateTime: number;
  userAccount: string;
  /** @format int64 */
  userId: number;
  userName: string;
  /** @format int32 */
  userType: number;
}

/**
 * @description
 *   icome入参
 */
export interface EmergencyEventIcomeInput {
  sessionId: string;
}

/**
 * @description
 *   根据事件获取群组信息
 */
export interface EmergencyEventIcomeOutput {
  /** @format int64 */
  eventId: number;
  /** @format int64 */
  id: number;
  sessionId: string;
  /** @format int32 */
  status: number;
}

/**
 * @description
 *   新增应急事件入参
 */
export interface EmergencyEventInput {
  /**
   * @description
   *   新增应急事件备注
   */
  addRemark: string;
  /**
   * @description
   *   app端上报ID
   * @format int64
   */
  appEventId: number;
  /**
   * @description
   *   三方施工编号
   */
  businessCode: string;
  /**
   * @description
   *   现场确认用户列表
   */
  confirmList: Array<ConfirmListInput>;
  /**
   * @description
   *   影响管段
   */
  confirmPipeline: string;
  /**
   * @description
   *   险情分类
   */
  dangerousType: string;
  /**
   * @description
   *   公司编码
   */
  ecode: string;
  /**
   * @description
   *   事件发生结束时间 筛选条件
   */
  endTimeCondition: string;
  /**
   * @description
   *   企业实体编码
   */
  entityCode: string;
  /**
   * @description
   *   事件编号
   */
  eventCode: string;
  /**
   * @description
   *   事发公司编码
   */
  eventCompanyCode: string;
  /**
   * @description
   *   事件所属公司列表 筛选条件
   */
  eventCompanyList: Array<string>;
  /**
   * @description
   *   事发公司
   */
  eventCompanyName: string;
  /**
   * @description
   *   纬度
   */
  eventLatitude: number;
  /**
   * @description
   *   事件地点
   */
  eventLocation: string;
  /**
   * @description
   *   经度
   */
  eventLongitude: number;
  /**
   * @description
   *   事件名称
   */
  eventName: string;
  /**
   * @description
   *   事发时间
   * @format date-time
   */
  eventStartTime: string;
  /**
   * @description
   *   站点id
   */
  eventStationId: string;
  /**
   * @description
   *   站点名称
   */
  eventStationName: string;
  /**
   * @description
   *   事件状态
   * @format int32
   */
  eventStatus: number;
  /**
   * @description
   *   事件类型
   */
  eventType: string;
  /**
   * @description
   *   事件主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   所属区域编号
   */
  locationCode: string;
  /**
   * @description
   *   所属区域名称
   */
  locationName: string;
  /**
   * @description
   *   误报标志；0-否，1-是
   * @format int32
   */
  misReport: number;
  /**
   * @description
   *   不需要险情确认；0：不是，1：是
   * @format int32
   */
  needConfirmRisk: number;
  /**
   * @description
   *   事件是否正常结束
   * @format int32
   */
  normal: number;
  /**
   * @description
   *   前端页面当前操作步骤 0-app上报  1-新增 2-险情确认 3-启动应急抢险 4-事件终止
   * @format double
   */
  operationStep: number;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /**
   * @description
   *   管段id
   */
  pipeId: string;
  /**
   * @description
   *   管道信息json
   */
  pipeInfo: string;
  /**
   * @description
   *   接警时间
   * @format date-time
   */
  receiveTime: string;
  /**
   * @description
   *   接警人id
   * @format int64
   */
  receiveUserId: number;
  /**
   * @description
   *   接警人姓名(ItCode)
   */
  receiveUserName: string;
  /**
   * @description
   *   接警人手机号
   */
  receiveUserPhone: string;
  /**
   * @description
   *   接警人姓名(中文)
   */
  receiveUserRealName: string;
  /**
   * @description
   *   是否演练事件；0：不是，1：是
   * @format int32
   */
  rehearsal: number;
  /**
   * @description
   *   上报人类型
   * @format int32
   */
  reportType: number;
  /**
   * @description
   *   上报人账号
   */
  reportUserAccount: string;
  /**
   * @description
   *   员工id
   * @format int64
   */
  reportUserId: number;
  /**
   * @description
   *   上报人姓名
   */
  reportUserName: string;
  /**
   * @description
   *   上报人手机号
   */
  reportUserPhone: string;
  /**
   * @description
   *   告警来源, 1:基础运营上报；5:三方施工上报
   * @format int32
   */
  source: number;
  /**
   * @description
   *   事件发生开始时间 筛选条件
   */
  startTimeCondition: string;
  /**
   * @description
   *   按距离派发标识
   * @format int32
   */
  status: number;
}

/**
 * @description
 *   事件网格实体
 */
export interface EmergencyEventLocNameOutput {
  eventCompanyCode: string;
  eventCompanyName: string;
  eventStationId: string;
  eventStationName: string;
  locId: string;
  locParentId: string;
  locationCode: string;
  locationName: string;
}

/**
 * @description
 *   网格编码查询处置人
 */
export interface EmergencyEventLocUserOutput {
  dealLoctionCode: string;
  dealLoctionName: string;
  dealUserAccount: string;
  dealUserName: string;
  landline: string;
  phone: string;
}

/**
 * @description
 *   合并应急事件入参
 */
export interface EmergencyEventMergeInput {
  cpmoCop: string;
  /** @format int64 */
  eventId: number;
}

/**
 * @description
 *   事件数据返回
 */
export interface EmergencyEventOutput {
  /**
   * @description
   *   新增文字备注
   */
  addRemark: string;
  /**
   * @description
   *   app端上报ID
   * @format int64
   */
  appEventId: number;
  /**
   * @description
   *   新增语音备注
   */
  appRemark: string;
  /**
   * @description
   *   启动响应发信息批次id
   * @format int64
   */
  batchId: number;
  /**
   * @description
   *   人员伤亡（1-人员伤亡 2-4人或以上 3-4人及以下 4-无人员伤亡）
   * @format int32
   */
  casualties: number;
  /**
   * @description
   *   确认险情分类编号
   */
  confirmDangerousType: string;
  /**
   * @description
   *   确认险情分类
   */
  confirmDangerousTypeName: string;
  /**
   * @description
   *   确认地点纬度
   */
  confirmEventLatitude: number;
  /**
   * @description
   *   确认事件地点
   */
  confirmEventLocation: string;
  /**
   * @description
   *   确认地点经度
   */
  confirmEventLongitude: number;
  /**
   * @description
   *   确认事件类型编号
   */
  confirmEventType: string;
  /**
   * @description
   *   确认事件类型
   */
  confirmEventTypeName: string;
  /**
   * @description
   *   app现场确认反馈图片
   */
  confirmImg: string;
  confirmPerson: Array<EmergencyEventConfirmPersonOutput>;
  /**
   * @description
   *   确认关联管道
   */
  confirmPipeline: string;
  /**
   * @description
   *   确认语音备注
   */
  confirmRemark: string;
  /**
   * @description
   *   现场确认时间
   */
  confirmTime: string;
  /**
   * @description
   *   现场确认人员
   */
  confirmUser: string;
  /**
   * @description
   *   现场确认人
   */
  confirmUserName: string;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   险情分类编号
   */
  dangerousType: string;
  /** @format int64 */
  dangerousTypeId: number;
  /**
   * @description
   *   针对列表的险情类型展示
   */
  dangerousTypeListDisplay: string;
  /**
   * @description
   *   险情分类
   */
  dangerousTypeName: string;
  /**
   * @description
   *   终止反馈人员网格组织
   */
  dealLocationCode: string;
  /**
   * @description
   *   终止反馈人员网格组织名称
   */
  dealLocationName: string;
  /**
   * @description
   *   处理备注
   */
  dealRemark: string;
  /**
   * @description
   *   处置人账号
   */
  dealUserAccount: string;
  /**
   * @description
   *   处置人id
   * @format int64
   */
  dealUserId: number;
  /**
   * @description
   *   处置人姓名
   */
  dealUserName: string;
  /**
   * @description
   *   行政区划编码
   */
  districtId: string;
  /**
   * @description
   *   管理实体编码
   */
  ecode: string;
  /**
   * @description
   *   事件结束时间
   * @format date-time
   */
  endTime: string;
  /**
   * @description
   *   企业实体编码
   */
  entityCode: string;
  /**
   * @description
   *   事件编号
   */
  eventCode: string;
  /**
   * @description
   *   事发公司编码
   */
  eventCompanyCode: string;
  /**
   * @description
   *   事发公司
   */
  eventCompanyName: string;
  /**
   * @description
   *   纬度
   */
  eventLatitude: number;
  /**
   * @description
   *   险情分级（1-一级紧急 2-二级紧急 3-三级紧急）
   * @format int32
   */
  eventLevel: number;
  /**
   * @description
   *   事件地点
   */
  eventLocation: string;
  /**
   * @description
   *   经度
   */
  eventLongitude: number;
  /**
   * @description
   *   事件名称
   */
  eventName: string;
  /**
   * @description
   *   事发时间
   * @format date-time
   */
  eventStartTime: string;
  /**
   * @description
   *   站点id
   */
  eventStationId: string;
  /**
   * @description
   *   站点名称
   */
  eventStationName: string;
  /**
   * @description
   *   事件状态
   * @format int32
   */
  eventStatus: number;
  /**
   * @description
   *   事件状态
   */
  eventStatusName: string;
  /**
   * @description
   *   事件类型编号
   */
  eventType: string;
  /** @format int64 */
  eventTypeId: number;
  /**
   * @description
   *   针对列表的事件类型展示
   */
  eventTypeListDisplay: string;
  /**
   * @description
   *   事件类型
   */
  eventTypeName: string;
  /**
   * @description
   *   反馈时人员位置
   */
  feedbackUserLocation: string;
  /**
   * @description
   *   事件主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否影响生产（1 可能导致停产 2-不导致停产 3-可能影响用户供气 4-不影响用户供气）
   * @format int32
   */
  influenceProduction: number;
  /**
   * @description
   *   影响范围（1-造成特定用户停气 2-50户以上 3-50户以下 4-5个以上 5-5个或以下）
   * @format int32
   */
  influenceRange: number;
  /**
   * @description
   *   是否下发过险情确认工单
   */
  isConfirm: boolean;
  /**
   * @description
   *   启动预案时间
   * @format date-time
   */
  launchTime: string;
  /**
   * @description
   *   启动响应人
   */
  launchUserName: string;
  /**
   * @description
   *   所属区域编号
   */
  locationCode: string;
  /**
   * @description
   *   所属区域名称
   */
  locationName: string;
  /**
   * @description
   *   误报标志；0-否，1-是
   * @format int32
   */
  misReport: number;
  /**
   * @description
   *   误报标志名称
   */
  misReportName: string;
  /**
   * @description
   *   不需要险情确认；0：不是，1：是
   * @format int32
   */
  needConfirmRisk: number;
  /**
   * @description
   *   夜间模式：0-否；1-是
   * @format int32
   */
  nightMode: number;
  /**
   * @description
   *   事件是否正常结束
   * @format int32
   */
  normal: number;
  /**
   * @description
   *   前端页面当前操作步骤 0-app上报  1-新增 2-险情确认 3-启动应急抢险 4-事件终止
   * @format double
   */
  operationStep: number;
  /**
   * @description
   *   前端页面当前操作步骤名称
   */
  operationStepName: string;
  /**
   * @description
   *   管段id
   */
  pipeId: string;
  /**
   * @description
   *   管道信息json
   */
  pipeInfo: string;
  /**
   * @description
   *   接警时间
   * @format date-time
   */
  receiveTime: string;
  /**
   * @description
   *   接警人id
   * @format int64
   */
  receiveUserId: number;
  /**
   * @description
   *   接警人姓名
   */
  receiveUserName: string;
  receiveUserPhone: string;
  receiveUserRealName: string;
  /**
   * @description
   *   是否为演练事件   0 ： 不是   1：是
   * @format int32
   */
  rehearsal: number;
  /**
   * @description
   *   上报人类型
   * @format int32
   */
  reportType: number;
  /**
   * @description
   *   上报人类型名称
   */
  reportTypeName: string;
  /**
   * @description
   *   上报人账号
   */
  reportUserAccount: string;
  /**
   * @description
   *   员工id
   * @format int64
   */
  reportUserId: number;
  /**
   * @description
   *   上报人姓名
   */
  reportUserName: string;
  /**
   * @description
   *   上报人手机号
   */
  reportUserPhone: string;
  /**
   * @description
   *   告警来源
   * @format int32
   */
  source: number;
  /**
   * @description
   *   告警来源名称
   */
  sourceName: string;
}

/**
 * @description
 *   根据事件主键id获取应急人员
 */
export interface EmergencyEventPeopleOutput {
  /** @format int32 */
  arriveStatus: number;
  callResult: string;
  endTime: string;
  groupName: string;
  /** @format int32 */
  groupType: number;
  itcode: string;
  mobile: string;
  msgResult: string;
  startTime: string;
  userName: string;
}

/**
 * @description
 *   企业下人员位置信息
 */
export interface EmergencyEventPositionOutput {
  phone: string;
  truename: string;
  username: string;
  x: string;
  y: string;
}

/**
 * @description
 *   险情终止入参
 */
export interface EmergencyEventTerminationInput {
  dealLocationCode: string;
  dealLocationName: string;
  dealMobile: string;
  dealRemark: string;
  dealUserAccount: string;
  /** @format int64 */
  dealUserId: number;
  dealUserName: string;
  /**
   * @description
   *   处置人集合
   */
  deals: Array<TerminationPersonInput>;
  /**
   * @description
   *   参与者中心短token
   */
  ennUnifiedCsrfToken: string;
  /**
   * @description
   *   任务分发人信息
   */
  executorInfos: Array<EmergencyStartExecutorInfoInput>;
  /**
   * @description
   *   工作台登录
   */
  grantCode: string;
  groupInfos: Array<Array<EmergencyPrePlanPersonInput>>;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   下发恢复通气任务人员手机号
   */
  mobile: string;
  /**
   * @description
   *   工作台登录token
   */
  token: string;
  /**
   * @description
   *   下发恢复通气任务人员账号-itcode
   */
  userAccount: string;
  /**
   * @description
   *   下发恢复通气任务人员名称
   */
  userName: string;
}

/**
 * @description
 *   事件设备入参
 */
export interface EmergencyEventVideoInput {
  deviceCode: string;
  /** @format int64 */
  deviceId: number;
  deviceName: string;
  /** @format int64 */
  eventId: number;
  videoName: string;
  /** @format int32 */
  videoType: number;
  videoUrl: string;
}

/**
 * @description
 *   事件视频实体
 */
export interface EmergencyEventVideoOutput {
  /** @format int32 */
  bindStatus: number;
  /** @format date-time */
  createTime: string;
  deviceCode: string;
  deviceName: string;
  /** @format date-time */
  endTime: string;
  /** @format int64 */
  eventId: number;
  /** @format int64 */
  id: number;
  videoName: string;
  /** @format int32 */
  videoType: number;
  videoUrl: string;
}

/**
 * @description
 *   终止响应提交实体
 */
export interface EmergencyFeedbackInputDto {
  /**
   * @description
   *   应急事件唯一编号 eventCode
   */
  alarmId: string;
  /**
   * @description
   *   公司四位编码
   */
  ecode: string;
  /**
   * @description
   *   反馈位置
   */
  feedbackAddr: string;
  /**
   * @description
   *   反馈位置经纬度
   */
  feedbackAddrGeom: string;
  /**
   * @description
   *   是否进行周边检漏 1是 2否
   * @format int32
   */
  isLeakDetection: number;
  /**
   * @description
   *   是否保压 1 是 2 否
   * @format int32
   */
  isPressureHolding: number;
  /**
   * @description
   *   恢复供气后是否对中压管网进行压力测试 0否 1是
   * @format int32
   */
  isPressureTest: number;
  /**
   * @description
   *   施工现场警示标识及道路是否恢复 0 否 1 是
   * @format int32
   */
  isRecover: number;
  /**
   * @description
   *   当前登陆人itcode
   */
  itcode: string;
  /**
   * @description
   *   现场照片url  ,号分割
   */
  livePhotos: Array<string>;
  /**
   * @description
   *   备注
   */
  remark: string;
  /** @format int32 */
  status: number;
  /**
   * @description
   *   当前登陆人
   */
  userName: string;
}

/**
 * @description
 *   重点区域详情
 */
export interface EmergencyFocusAreaDetailsOutput {
  areaLevelCode: string;
  code: string;
  compCode: string;
  /** @format int64 */
  enterpriseDataId: number;
  /** @format int32 */
  id: number;
  identifyBasis: string;
  identifyBasisName: string;
  /** @format date-time */
  identifyTime: string;
  /** @format int32 */
  identifyWay: number;
  /** @format int32 */
  level: number;
  name: string;
  /** @format int32 */
  number: number;
  pressurera: string;
}

/**
 * @description
 *   事件icome信息
 */
export interface EmergencyIcomeMsgInput {
  /** @format date-time */
  createTime: string;
  /** @format int64 */
  id: number;
  message: string;
  sendPersonItcode: string;
  sendPersonUsername: string;
  /** @format date-time */
  sendTime: string;
  sessionId: string;
  /** @format int32 */
  type: number;
}

/**
 * @description
 *   地图调取人员位置接口
 */
export interface EmergencyMapPersonOutput {
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   是否调配  1：已经调配  0 ： 可调配
   * @format int32
   */
  isDispatch: number;
  /**
   * @description
   *   itcode
   */
  itcode: string;
  /**
   * @description
   *   维度
   */
  latitude: number;
  /**
   * @description
   *   车牌号
   */
  licensePlate: string;
  /**
   * @description
   *   精度
   */
  longitude: number;
  /**
   * @description
   *   在线离线状态  1在线  0离线
   * @format int32
   */
  online: number;
  /**
   * @description
   *   用户名称
   */
  userName: string;
}

/**
 * @description
 *   手机端节点进展实体
 */
export interface EmergencyMobileEvolve {
  /**
   * @description
   *   字典值
   * @format int64
   */
  dictId: number;
  /**
   * @description
   *   人员手机号
   */
  mobile: string;
  /**
   * @description
   *   任务开始时间
   * @format date-time
   */
  startTime: string;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
  /**
   * @description
   *   0 空 2 完成 1 任务反馈
   * @format int32
   */
  type: number;
  /**
   * @description
   *   执行人
   */
  userName: string;
}

/**
 * @description
 *   手机端节点进展实体
 */
export interface EmergencyMobileEvolveOutput {
  /**
   * @description
   *   确认地点纬度
   */
  confirmEventLatitude: number;
  /**
   * @description
   *   确认地点经度
   */
  confirmEventLongitude: number;
  /**
   * @description
   *   实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   进展列表
   */
  emergencyMobileEvolveList: Array<EmergencyMobileEvolve>;
  /**
   * @description
   *   管段id
   */
  pipeId: string;
}

export interface EmergencyMobileFeedbackOutput {
  feedbackTxt: string;
  timeDesc: string;
}

/**
 * @description
 *   获取模板内容
 */
export interface EmergencyMsgInput {
  /** @format int64 */
  id: number;
  infos: Array<MsgTemplateInfo>;
  pipe: PipeInfo;
}

/**
 * @description
 *   消息配置接口实体
 */
export interface EmergencyMsgTemplateConfigInputDto {
  /**
   * @description
   *   公司编码，逗号分割
   */
  compCode: string;
  /**
   * @description
   *   公司编码,后台传参用
   */
  compCodes: string;
  cpmoCop: string;
  /** @format date-time */
  createTime: string;
  createUserAccount: string;
  createUserName: string;
  /** @format int32 */
  deleteStatus: number;
  /**
   * @description
   *   主键 添加不传 修改有非空校验
   * @format int64
   */
  id: number;
  /**
   * @description
   *   呼叫内容
   */
  msg: string;
  /**
   * @description
   *   模板名称
   */
  name: string;
  /**
   * @description
   *   当前页码 列表必传 其他不传
   * @format int32
   */
  pageNum: number;
  /**
   * @description
   *   每页条数 列表必传 其他不传
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   状态 0：开启 1：禁用
   * @format int32
   */
  status: number;
  /**
   * @description
   *   模版类型，1：呼叫，2：短信  多个类型 ,号分割
   */
  type: string;
  /** @format date-time */
  updateTime: string;
  updateUserAccount: string;
  updateUserName: string;
}

/**
 * @description
 *   消息配置返回实体
 */
export interface EmergencyMsgTemplateConfigOutput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  compName: string;
  cpmoCop: string;
  /** @format date-time */
  createTime: string;
  createUserAccount: string;
  createUserName: string;
  /** @format int32 */
  deleteStatus: number;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   呼叫内容
   */
  msg: string;
  /**
   * @description
   *   模板名称
   */
  name: string;
  /**
   * @description
   *   状态 0：开启 1：禁用
   * @format int32
   */
  status: number;
  /**
   * @description
   *   模版类型，1：呼叫，2：短信  多个类型 ,号分割
   */
  type: string;
  /** @format date-time */
  updateTime: string;
  updateUserAccount: string;
  updateUserName: string;
}

/**
 * @description
 *   通知中心 icom通知群组 实体
 */
export interface EmergencyNoticeIcomeInput {
  /** @format date-time */
  createTime: string;
  /**
   * @description
   *   群组id
   * @format int64
   */
  groupId: number;
  /**
   * @description
   *   群组名称
   */
  groupName: string;
  requestId: string;
  /**
   * @description
   *   icom群组id
   */
  sessionId: string;
}

/**
 * @description
 *   启动响应通知设置
 */
export interface EmergencyNoticeInformationInputDto {
  /**
   * @description
   *   手机联系人id
   */
  addressBook: string;
  /**
   * @description
   *   主键ID
   * @format int64
   * @example
   *   10000121
   */
  id: number;
  itcode: string;
  /**
   * @description
   *    短信模板  启动响应通知配置时 不能为空
   * @format int64
   */
  msgTemplate: number;
  /** @format int32 */
  noticeType: number;
  /**
   * @description
   *   公司编码
   */
  orgId: string;
  /**
   * @description
   *    外呼模板   启动响应通知配置时 不能为空
   * @format int64
   */
  phoneTemplate: number;
  /**
   * @description
   *   预案id
   * @format int64
   */
  preplanId: number;
  /**
   * @description
   *   1:启动响应通知配置 2:终止响应通知配置 不能为空
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   响应通知配置返回实体
 */
export interface EmergencyNoticeInformationOutputDto {
  /**
   * @description
   *   手机联系人id
   */
  addressBook: string;
  /**
   * @description
   *   主键ID
   * @format int64
   */
  id: number;
  /**
   * @description
   *   短信模板
   */
  msgTemplate: string;
  /**
   * @description
   *   1: 应急预案配置  2: 系统配置管理
   * @format int32
   */
  noticeType: number;
  /**
   * @description
   *   外呼模板
   */
  phoneTemplate: string;
  /**
   * @description
   *   预案id
   * @format int64
   */
  preplanId: number;
  /**
   * @description
   *   1:启动响应通知配置 2:终止响应通知配置 不能为空
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   通知中心 实体
 */
export interface EmergencyNoticeRecordInput {
  /**
   * @description
   *   外呼短信模板内容 确认发送时 短信和外呼模板不可都为空 type =2
   */
  callContent: string;
  /**
   * @description
   *   外呼模板id
   * @format int64
   */
  callId: number;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /** @format date-time */
  createTime: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   事件等级
   * @format int32
   */
  eventLevel: number;
  icomeCardSend: boolean;
  /**
   * @description
   *   短信模板内容 确认发送时 短信,外呼,icom模板不可都为空 type =2
   */
  icomeContent: string;
  /**
   * @description
   *   icome模板id
   * @format int64
   */
  icomeId: number;
  /**
   * @description
   *   icom群组发送列表
   */
  icomeList: Array<EmergencyNoticeIcomeInput>;
  icomeSend: boolean;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  itcode: string;
  /**
   * @description
   *   短信模板内容 确认发送时 短信和外呼模板不可都为空 type =2
   */
  msgContent: string;
  /**
   * @description
   *   短信模板id
   * @format int64
   */
  msgId: number;
  /**
   * @description
   *   通知接收人
   */
  personList: Array<NoticePersonInput>;
  phone: string;
  prePlanName: string;
  sendMsg: boolean;
  sendPhone: boolean;
  /** @format int64 */
  taskId: number;
  /**
   * @description
   *   状态 1:草稿  2:正式
   * @format int32
   */
  type: number;
  /**
   * @description
   *   发送人姓名
   */
  userName: string;
}

/**
 * @description
 *   通知中心列表
 */
export interface EmergencyNoticeRecordOutput {
  /**
   * @description
   *   外呼短信模板内容 确认发送时 短信和外呼模板不可都为空 type =2
   */
  callContent: string;
  /**
   * @description
   *   外呼 （成功/总数）
   */
  callCount: string;
  /**
   * @description
   *   外呼模板id
   * @format int64
   */
  callId: number;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   发送时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   icom模板内容
   */
  icomeContent: string;
  /**
   * @description
   *   icom返回内容结果
   */
  icomeList: Array<EmergencyNoticeIcomeInput>;
  icomeSend: boolean;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  itcode: string;
  /**
   * @description
   *   返回内容结果
   */
  list: Array<EmergencyNoticeSendPersonOutput>;
  /**
   * @description
   *   短信模板内容 确认发送时 短信和外呼模板不可都为空 type =2
   */
  msgContent: string;
  /**
   * @description
   *   短信 （成功/总数）
   */
  msgCount: string;
  /**
   * @description
   *   短信模板id
   * @format int64
   */
  msgId: number;
  /**
   * @description
   *   通知渠道
   */
  publishMethod: string;
  sendMsg: boolean;
  sendPhone: boolean;
  /**
   * @description
   *   接收人名称集合
   */
  sendUserNames: string;
  /**
   * @description
   *   1 ： 通知中心原有数据  2：通知策略取消的数据
   * @format int32
   */
  source: number;
  /**
   * @description
   *   是否是手动取消的任务 2 是
   * @format int32
   */
  status: number;
  /** @format int64 */
  taskId: number;
  taskName: string;
  /**
   * @description
   *   发送人姓名
   */
  userName: string;
}

/**
 * @description
 *   通知中心人员
 */
export interface EmergencyNoticeSendPersonOutput {
  /**
   * @description
   *   外呼通知结果
   */
  callStatus: string;
  /** @format date-time */
  createTime: string;
  /**
   * @description
   *   通话时长
   * @format int32
   */
  duration: number;
  /**
   * @description
   *   通话时长
   */
  durationFormat: string;
  /**
   * @description
   *   群组名称
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
   *   itcode
   */
  itcode: string;
  /**
   * @description
   *   短信通知结果
   */
  msgStatus: string;
  /**
   * @description
   *   手机号
   */
  phoneNum: string;
  /**
   * @description
   *   记录表主键
   * @format int64
   */
  recordId: number;
  /**
   * @description
   *   姓名
   */
  userName: string;
}

/**
 * @description
 *   撤布防设备出参
 */
export interface EmergencyPipeStatusOutput {
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   gis设备编号
   */
  gisEqptcode: string;
  /**
   * @description
   *   iot设备名称
   */
  iotDeviceName: string;
  /**
   * @description
   *   iot设备序列号
   */
  iotSerialnumber: string;
}

/**
 * @description
 *   v基础运营平台返回值输出
 */
export interface EmergencyPrePlanOutput {
  ecode: string;
  grid: string;
  gridName: string;
  station: string;
  stationName: string;
}

/**
 * @description
 *   应急预案人员实体入参
 */
export interface EmergencyPrePlanPersonInput {
  callTemplate: string;
  /** @format int64 */
  callTemplateId: number;
  /**
   * @description
   *   是否是网格人员，true：是
   */
  gridIdentification: boolean;
  /** @format int32 */
  groupId: number;
  /**
   * @description
   *   群组名称最多输入50字!
   */
  groupName: string;
  /**
   * @description
   *   群组类别不能为空
   * @format int32
   */
  groupType: number;
  icomeCardSend: boolean;
  icomeContent: string;
  /** @format int64 */
  icomeId: number;
  /**
   * @description
   *   icom群组发送列表
   */
  icomeList: Array<EmergencyNoticeIcomeInput>;
  icomeSend: boolean;
  /**
   * @description
   *   人员手机号最多输入20字!
   */
  mobile: string;
  msgTemplate: string;
  /** @format int64 */
  msgTemplateId: number;
  sendMsg: boolean;
  sendPhone: boolean;
  /**
   * @description
   *   sessionId
   */
  sessionId: string;
  /**
   * @description
   *   通知id
   * @format int64
   */
  sid: number;
  /**
   * @description
   *   人员账号最多输入50字!
   */
  userAccount: string;
  /** @format int64 */
  userId: number;
  /**
   * @description
   *   人员名称最多输入50字!
   */
  userName: string;
  /** @format int32 */
  userType: number;
}

/**
 * @description
 *   新增应急预案实体类
 */
export interface EmergencyPreplanAddInput {
  addressBook: string;
  attachment: Array<OnlineFile>;
  authorizeExplanation: string;
  authorizeUnitCode: string;
  authorizeUnitName: string;
  /**
   * @description
   *   终止响应通知设置 新UI应急预案整合添加
   */
  endResponseNotice: EmergencyNoticeInformationInputDto;
  endTime: string;
  eventType: string;
  glstdm: string;
  /** @format int64 */
  msgTemplate: number;
  name: string;
  number: string;
  onlinePreplan: Array<OnlineFile>;
  orgId: string;
  /** @format int64 */
  phoneTemplate: number;
  releaseTime: string;
  releaseUnitCode: string;
  releaseUnitName: string;
  remark: string;
  reportUnitCode: string;
  reportUnitName: string;
  /**
   * @description
   *   应急响应级别集合 新UI应急预案整合添加
   */
  responseDetailsList: Array<ResponseDetails>;
  /**
   * @description
   *   启动响应通知设置 新UI应急预案整合添加
   */
  startResponseNotice: EmergencyNoticeInformationInputDto;
  startTime: string;
  /**
   * @description
   *   场站编码
   */
  stationCode: string;
  /**
   * @description
   *   场站名称
   */
  stationName: string;
  type: string;
  version: string;
}

/**
 * @description
 *   文件描述
 */
export interface EmergencyPreplanAddOutput {
  /** @format int64 */
  id: number;
}

/**
 * @description
 *   获取通讯录目录 入参
 */
export interface EmergencyPreplanAddressListInputDto {
  /**
   * @description
   *   公司编码
   * @example
   *   0161
   */
  compCode: string;
  /**
   * @description
   *   模糊搜索
   */
  likeSearch: string;
}

/**
 * @description
 *   预案通讯录
 */
export interface EmergencyPreplanAddressListOutputDto {
  children: Array<EmergencyPreplanAddressListOutputDto>;
  /**
   * @description
   *   公司名称
   */
  compCodeTxt: string;
  /**
   * @description
   *   职责描述
   */
  description: string;
  /**
   * @description
   *   群组id
   * @format int64
   */
  groupId: number;
  /**
   * @description
   *   群组名称
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
   *   itcode
   */
  itcode: string;
  /**
   * @description
   *   人员名称
   */
  name: string;
  /**
   * @description
   *   手机号
   */
  phoneNum: string;
  /**
   * @description
   *   职位
   */
  position: string;
  /**
   * @description
   *   响应级别
   */
  preplanLevel: string;
  sessionId: string;
  sessionName: string;
  status: boolean;
}

/**
 * @description
 *   查询应急预案详情输出
 */
export interface EmergencyPreplanDetailOutput {
  addressBook: string;
  /**
   * @description
   *   通知组织列表
   */
  announcementOrgOutputList: Array<{
    [propertyName: string]: any;
  }>;
  attachment: Array<OnlineFile>;
  authorizeExplanation: string;
  authorizeUnitCode: string;
  authorizeUnitName: string;
  endTime: string;
  /** @format int32 */
  eventLevel: number;
  eventLevelName: string;
  eventType: string;
  glstdm: string;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   模板信息
   */
  infos: Array<MsgTemplateInfo>;
  /**
   * @description
   *   任务分发列表
   */
  missionDispatchOutputList: Array<{
    [propertyName: string]: any;
  }>;
  /** @format int64 */
  msgTemplate: number;
  name: string;
  number: string;
  onlinePreplan: Array<OnlineFile>;
  orgId: string;
  /** @format int64 */
  phoneTemplate: number;
  releaseTime: string;
  releaseUnitCode: string;
  releaseUnitName: string;
  remark: string;
  reportUnitCode: string;
  reportUnitName: string;
  startTime: string;
  type: string;
  version: string;
}

/**
 * @description
 *   查询应急预案列表实体类
 */
export interface EmergencyPreplanListInput {
  glstdm: string;
  isFull: boolean;
  name: string;
  orgId: string;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  type: number;
}

/**
 * @description
 *   查询应急预案列表输出
 */
export interface EmergencyPreplanListOutput {
  /** @format int64 */
  id: number;
  isRelated: boolean;
  name: string;
  number: string;
  orgId: string;
  orgName: string;
  releaseTime: string;
  stationCode: string;
  stationName: string;
  type: string;
}

/**
 * @description
 *   查询应急预案详情输出
 */
export interface EmergencyPreplanNewDetailOutput {
  addressBook: string;
  /**
   * @description
   *   通知组织列表
   */
  announcementOrgOutputList: Array<{
    [propertyName: string]: any;
  }>;
  attachment: Array<OnlineFile>;
  authorizeExplanation: string;
  authorizeUnitCode: string;
  authorizeUnitName: string;
  /**
   * @description
   *   终止响应通知设置 新UI应急预案整合添加
   */
  endResponseNotice: EmergencyNoticeInformationOutputDto;
  endTime: string;
  /** @format int32 */
  eventLevel: number;
  eventLevelName: string;
  eventType: string;
  glstdm: string;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   模板信息
   */
  infos: Array<MsgTemplateInfo>;
  /**
   * @description
   *   任务分发列表
   */
  missionDispatchOutputList: Array<{
    [propertyName: string]: any;
  }>;
  /** @format int64 */
  msgTemplate: number;
  name: string;
  number: string;
  onlinePreplan: Array<OnlineFile>;
  orgId: string;
  /** @format int64 */
  phoneTemplate: number;
  releaseTime: string;
  releaseUnitCode: string;
  releaseUnitName: string;
  remark: string;
  reportUnitCode: string;
  reportUnitName: string;
  /**
   * @description
   *   应急响应级别集合 新UI应急预案整合添加
   */
  responseDetailsList: Array<ResponseDetails>;
  /**
   * @description
   *   启动响应通知设置 新UI应急预案整合添加
   */
  startResponseNotice: EmergencyNoticeInformationOutputDto;
  startTime: string;
  /**
   * @description
   *   场站编码
   */
  stationCode: string;
  /**
   * @description
   *   场站名称
   */
  stationName: string;
  type: string;
  version: string;
}

/**
 * @description
 *   编辑应急预案实体类
 */
export interface EmergencyPreplanUpdateInput {
  addressBook: string;
  attachment: Array<OnlineFile>;
  authorizeExplanation: string;
  authorizeUnitCode: string;
  authorizeUnitName: string;
  /**
   * @description
   *   终止响应通知设置 新UI应急预案整合添加
   */
  endResponseNotice: EmergencyNoticeInformationInputDto;
  endTime: string;
  eventType: string;
  glstdm: string;
  /** @format int64 */
  id: number;
  /** @format int64 */
  msgTemplate: number;
  name: string;
  number: string;
  onlinePreplan: Array<OnlineFile>;
  orgId: string;
  /** @format int64 */
  phoneTemplate: number;
  releaseTime: string;
  releaseUnitCode: string;
  releaseUnitName: string;
  remark: string;
  reportUnitCode: string;
  reportUnitName: string;
  /**
   * @description
   *   应急响应级别集合 新UI应急预案整合添加
   */
  responseDetailsList: Array<ResponseDetails>;
  /**
   * @description
   *   启动响应通知设置 新UI应急预案整合添加
   */
  startResponseNotice: EmergencyNoticeInformationInputDto;
  startTime: string;
  /**
   * @description
   *   场站编码
   */
  stationCode: string;
  /**
   * @description
   *   场站名称
   */
  stationName: string;
  type: string;
  version: string;
}

/**
 * @description
 *   应急进度添加
 */
export interface EmergencyProcessAddOutput {
  /** @format int64 */
  id: number;
}

/**
 * @description
 *   应急进度
 */
export interface EmergencyProgressInput {
  /** @format date-time */
  createTime: string;
  createUid: string;
  /** @format int64 */
  emergencyId: number;
  /** @format int32 */
  emergencyOrderType: number;
  /** @format int64 */
  id: number;
  /** @format int64 */
  mergeId: number;
  progress: string;
  sessionId: string;
  /** @format date-time */
  updateTime: string;
  updateUid: string;
}

/**
 * @description
 *   应急进度列表
 */
export interface EmergencyProgressListOutput {
  /** @format date-time */
  createTime: string;
  createTimeStr: string;
  createUid: string;
  /** @format int64 */
  did: number;
  /** @format int64 */
  emergencyId: number;
  /** @format int32 */
  emergencyOrderType: number;
  gasId: string;
  /** @format int64 */
  id: number;
  /** @format int64 */
  mergeId: number;
  progress: string;
}

/**
 * @description
 *   应急进度
 */
export interface EmergencyProgressOutput {
  /** @format date-time */
  createTime: string;
  createUid: string;
  /** @format int64 */
  emergencyId: number;
  /** @format int32 */
  emergencyOrderType: number;
  /** @format int64 */
  gasId: number;
  /** @format int64 */
  id: number;
  progress: string;
  /** @format date-time */
  updateTime: string;
  updateUid: string;
}

/**
 * @description
 *   确认接警入参（APP）
 */
export interface EmergencyReciveInput {
  /**
   * @description
   *   事件Id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   接警人itcode
   */
  itcode: string;
  /**
   * @description
   *   接警人id
   * @format int64
   */
  userId: number;
  /**
   * @description
   *   接警人姓名
   */
  userName: string;
}

/**
 * @description
 *   事件文件实体
 */
export interface EmergencyReviewFileInput {
  /**
   * @description
   *   应急事件id
   * @format int64
   */
  emergencyId: number;
  /**
   * @description
   *   文件名称
   */
  fileName: string;
  /**
   * @description
   *   文件路径
   */
  fileUrl: string;
}

/**
 * @description
 *   复盘文件列表
 */
export interface EmergencyReviewFileOutput {
  /**
   * @description
   *   应急事件id
   * @format int64
   */
  emergencyId: number;
  /**
   * @description
   *   文件名称
   */
  fileName: string;
  /**
   * @description
   *   文件路径
   */
  fileUrl: string;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
}

/**
 * @description
 *   复盘实体
 */
export interface EmergencyReviewInput {
  /**
   * @description
   *   泄漏点情况
   */
  conditions: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   出站口温度
   */
  gasTemperature: number;
  /**
   * @description
   *   泄露口面积
   */
  leakMouth: number;
  /**
   * @description
   *   管径
   */
  pipeDiameter: number;
  /**
   * @description
   *   管道环境
   */
  pipeEnvironment: string;
  /**
   * @description
   *   管道压力类型
   */
  pipePressureType: string;
}

/**
 * @description
 *   复盘实体
 */
export interface EmergencyReviewOutput {
  /**
   * @description
   *   泄漏点情况
   */
  conditions: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   出站口温度
   */
  gasTemperature: number;
  /**
   * @description
   *   泄露口面积
   */
  leakMouth: number;
  /**
   * @description
   *   管径
   */
  pipeDiameter: number;
  /**
   * @description
   *   管道环境
   */
  pipeEnvironment: string;
  /**
   * @description
   *   管道压力类型
   */
  pipePressureType: string;
}

/**
 * @description
 *   关健节点接口
 */
export interface EmergencySceneNodeListOutput {
  /**
   * @description
   *   描述
   */
  content: string;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /** @format int32 */
  isNeed: number;
  /**
   * @description
   *   节点下详情
   */
  list: Array<EmergencySceneNodeListOutput>;
  /**
   * @description
   *   节点id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   节点名称
   */
  nodeName: string;
  /**
   * @description
   *   节点 1 = 未完成  2 = 完成 3=节点下无任务策略
   * @format int32
   */
  nodeType: number;
  /**
   * @description
   *   任务id/通知策略id
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   任务名称/通知策略名称
   */
  taskName: string;
  /**
   * @description
   *   任务是否完成 1：待发布/未完成 2：执行中 3：已完成 4：已取消 5：草稿
   * @format int32
   */
  taskType: number;
  /**
   * @description
   *    1 = 任务措施  2 = 通知策略
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   流程环节预置流程出参
 */
export interface EmergencySceneNodeOutput {
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否必须  1:必须
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   是否预置任务
   * @format int32
   */
  isPreTask: number;
  /**
   * @description
   *   适用级别
   */
  level: string;
  /** @format int64 */
  msgId: number;
  /**
   * @description
   *   流程环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   流程环节名称
   */
  nodeName: string;
  /**
   * @description
   *   发布渠道
   */
  noticeType: string;
  /**
   * @description
   *   人员列表
   */
  personList: Array<EmergencyScenePerplanPersonOutput>;
  /**
   * @description
   *   预案id
   * @format int64
   */
  scenePreplanId: number;
  /**
   * @description
   *   任务描述
   */
  taskDescribe: string;
  /**
   * @description
   *   任务id
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
  /**
   * @description
   *   任务措施类型 1：自定义 2:字典id
   * @format int32
   */
  taskType: number;
}

/**
 * @description
 *   场景预案任务措施出参
 */
export interface EmergencySceneNodeTaskOutput {
  /**
   * @description
   *   是否必需
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   是否预置任务
   * @format int32
   */
  isPreTask: number;
  /**
   * @description
   *   任务id
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
}

/**
 * @description
 *   流程环节预置流程详情出参
 */
export interface EmergencySceneNoticeStrategyDetailsOutput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   模板内容
   */
  content: string;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否必须  1：是
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   是否预置 1:是
   * @format int32
   */
  isPreTask: number;
  /**
   * @description
   *   级别  1，2，3
   */
  level: string;
  /**
   * @description
   *   模板id
   * @format int64
   */
  msgId: number;
  /**
   * @description
   *   通知名称
   */
  name: string;
  /**
   * @description
   *   流程环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   流程环节名称
   */
  nodeName: string;
  /**
   * @description
   *   1：短信 2：外呼  3：icome 多个,号分割
   */
  noticeType: string;
  /**
   * @description
   *   人员列表
   */
  personList: Array<EmergencyScenePerplanPersonOutput>;
  /**
   * @description
   *   预案id
   * @format int64
   */
  scenePreplanId: number;
  /**
   * @description
   *   模板类型 1：自定义  2：模板
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   流程环节预置流程出参
 */
export interface EmergencySceneNoticeStrategyOutput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   模板内容
   */
  content: string;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否必须  1：是
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   是否预置 1:是
   * @format int32
   */
  isPreTask: number;
  /**
   * @description
   *   级别  1，2，3
   */
  level: string;
  /**
   * @description
   *   模板id
   * @format int64
   */
  msgId: number;
  /**
   * @description
   *   通知名称
   */
  name: string;
  /**
   * @description
   *   流程环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   流程环节名称
   */
  nodeName: string;
  /** @format int32 */
  nodeType: number;
  /**
   * @description
   *   1：短信 2：外呼  3：icome 多个,号分割
   */
  noticeType: string;
  /**
   * @description
   *   人员列表
   */
  personList: Array<EmergencyScenePerplanPersonOutput>;
  /**
   * @description
   *   预案id
   * @format int64
   */
  scenePreplanId: number;
  /**
   * @description
   *   模板类型 1：自定义  2：模板
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   任务措施和通知策略详情出参
 */
export interface EmergencyScenePerplanPersonOutput {
  /**
   * @description
   *   角色id
   * @format int64
   */
  groupId: number;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   itcode
   */
  itcode: string;
  /**
   * @description
   *   关联级别
   * @format int32
   */
  level: number;
  /**
   * @description
   *   手机号
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
   *   角色名称
   */
  roleName: string;
  /**
   * @description
   *   来源     1:任务人员 2:措施人员
   * @format int32
   */
  source: number;
  /**
   * @description
   *   措施或策略id
   * @format int64
   */
  strategyId: number;
  /**
   * @description
   *   名称
   */
  username: string;
}

/**
 * @description
 *   场景预案新增编辑入参
 */
export interface EmergencyScenePreplanInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   场景分类id
   * @format int32
   */
  dictLabelId: number;
  /**
   * @description
   *   应急指挥体系集合
   */
  groupList: Array<SceneGroupInput>;
  /**
   * @description
   *   预案id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   响应分级集合
   */
  levelList: Array<SceneLevelInput>;
  /**
   * @description
   *   预案名称
   */
  name: string;
  /**
   * @description
   *   场景标签集合
   */
  sceneLabelList: Array<LabelListInput>;
  /**
   * @description
   *   预案状态：1:启用；2:停用；3:草稿
   * @format int32
   */
  status: number;
  /**
   * @description
   *   权重标签集合
   */
  weightList: Array<LabelWeightListInput>;
}

/**
 * @description
 *   场景预案列表
 */
export interface EmergencyScenePreplanListParamInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   场景预案名称
   */
  contains: string;
  /**
   * @description
   *   实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   场景分类id
   * @format int32
   */
  dictLabelId: number;
  /** @format int64 */
  id: number;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /**
   * @description
   *   场景预案状态 1:启用；2:停用；3:草稿
   * @format int32
   */
  status: number;
  /**
   * @description
   *   按照最近使用的场景预案进行排序
   */
  usageTime: string;
}

/**
 * @description
 *   场景预案列表出参
 */
export interface EmergencyScenePreplanOutput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   公司名称
   */
  compCodeTxt: string;
  /**
   * @description
   *   场景预案id
   */
  dictLabelId: string;
  /**
   * @description
   *   场景预案名称
   */
  dictPathName: string;
  /**
   * @description
   *   预案id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   预案名称
   */
  name: string;
  /**
   * @description
   *   使用次数
   * @format int32
   */
  number: number;
  /**
   * @description
   *   场景预案状态  1:启用；2:停用；3:草稿
   * @format int32
   */
  status: number;
  /**
   * @description
   *   最近更新时间
   * @format date-time
   */
  updateTime: string;
  /**
   * @description
   *   最近使用时间
   * @format date-time
   */
  usageTime: string;
  /**
   * @description
   *   word文档地址
   */
  wordUrl: string;
}

/**
 * @description
 *   App查询用户关联应急事件
 */
export interface EmergencySearchByUserInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   日期范围：1-今日；7-7日内 30-30日内；
   * @format int32
   */
  dateRange: number;
  /**
   * @description
   *   结束日期
   */
  endDate: string;
  /**
   * @description
   *   管理实体编码
   */
  entityCode: string;
  /**
   * @description
   *   事件状态：1-待接警  2-现场确认中 3-现场确认完成 4-待启动 5-抢险中 6-已终止
   * @format int32
   */
  eventStatus: number;
  /**
   * @description
   *   事件类型编号
   */
  eventType: string;
  /**
   * @description
   *   用户账号
   */
  itcode: string;
  /**
   * @description
   *   排序方式：升序-asc；降序：desc
   */
  orderType: string;
  /**
   * @description
   *   开始日期
   */
  startDate: string;
}

/**
 * @description
 *   应急启动执行人信息入参
 */
export interface EmergencyStartExecutorInfoInput {
  content: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   群组名称
   */
  groupName: string;
  /**
   * @description
   *   是否必须  1：必须
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   人员手机号
   */
  mobile: string;
  /**
   * @description
   *   节点id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   节点名称
   */
  nodeName: string;
  /**
   * @description
   *   人员类型（1关阀，2抢修，3客服,4降压，5封堵）
   * @format int32
   */
  personType: number;
  /**
   * @description
   *   下发方式
   */
  publishMethod: string;
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
   *   任务id
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
  /** @format int32 */
  taskType: number;
  /**
   * @description
   *   人员账号-itcode
   */
  userAccount: string;
  /**
   * @description
   *   人员名称
   */
  userName: string;
}

/**
 * @description
 *   启动应急任务分发人信息表
 */
export interface EmergencyStartExecutorInfoOutput {
  /**
   * @description
   *   应急事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   人员手机号
   */
  mobile: string;
  /**
   * @description
   *   人员类型（1关阀，2抢修，3客服,4降压运行，5封堵）
   * @format int32
   */
  personType: number;
  /**
   * @description
   *   值班岗位
   */
  positionName: string;
  /**
   * @description
   *   人员账号-itcode
   */
  userAccount: string;
  /**
   * @description
   *   人员名称
   */
  userName: string;
}

/**
 * @description
 *   应急事件状态
 */
export interface EmergencyStatusInput {
  /** @format double */
  eventStatus: number;
  /** @format int64 */
  id: number;
}

/**
 * @description
 *   通知策略详情入参实体
 */
export interface EmergencyStrategy {
  callTemplate: string;
  /** @format int64 */
  callTemplateId: number;
  icomeContent: string;
  /** @format int64 */
  icomeId: number;
  msgTemplate: string;
  /** @format int64 */
  msgTemplateId: number;
  plist: Array<TaskPersonInput>;
  /**
   * @description
   *   通知策略id
   * @format int64
   */
  strategyId: number;
}

/**
 * @description
 *   任务中心入参
 */
export interface EmergencyTaskInput {
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
}

/**
 * @description
 *   任务列表入参
 */
export interface EmergencyTaskListInput {
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   发布渠道 （1:app工单；2:icome待办
   * @format int32
   */
  publishMethod: number;
  /**
   * @description
   *   状态类型 1：待发布 2：执行中 3：已完成 4：已取消
   * @format int32
   */
  taskStatus: number;
}

/**
 * @description
 *   任务状态数量实体
 */
export interface EmergencyTaskListOutput {
  /**
   * @description
   *   取消原因
   */
  cancelReason: string;
  /**
   * @description
   *   取消时间
   * @format date-time
   */
  cancelTime: string;
  /** @format int64 */
  eventId: number;
  /**
   * @description
   *   反馈内容
   */
  finishContent: string;
  /**
   * @description
   *   完成时间
   * @format date-time
   */
  finishTime: string;
  /**
   * @description
   *   反馈人
   */
  finishUsername: string;
  /**
   * @description
   *   督办时间
   * @format date-time
   */
  handleTime: string;
  /**
   * @description
   *   是否必须
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   消息模版id
   * @format int64
   */
  msgId: number;
  /**
   * @description
   *   环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   环节名称
   */
  nodeName: string;
  /**
   * @description
   *   任务类型
   * @format int32
   */
  nodeType: number;
  /**
   * @description
   *   执行人信息
   */
  personList: Array<EmergencyTaskPersonList>;
  /**
   * @description
   *   发布渠道（1:app工单；2:icome待办）多个逗号分隔
   */
  publishMethod: string;
  /**
   * @description
   *   发布时间
   * @format date-time
   */
  publishTime: string;
  /**
   * @description
   *   任务描述
   */
  remarks: string;
  /** @format int32 */
  status: number;
  /**
   * @description
   *   任务措施id（自定义的为0）
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   id
   * @format int64
   */
  taskMessageId: number;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
  /**
   * @description
   *   状态（1：待发布 2：执行中 3：已完成 4：已取消 5：草稿）务
   * @format int32
   */
  taskStatus: number;
  /**
   * @description
   *   1：任务 2：信息 3：自建任务
   * @format int32
   */
  taskType: number;
  /**
   * @description
   *   更新人
   */
  updateItcode: string;
  /**
   * @description
   *   更新人名称
   */
  updateName: string;
  /** @format date-time */
  updateTime: string;
}

/**
 * @description
 *   任务状态数量实体
 */
export interface EmergencyTaskNumberOutput {
  /**
   * @description
   *   已取消数量
   * @format int32
   */
  cancelNum: number;
  /**
   * @description
   *   已完成数量
   * @format int32
   */
  finishNum: number;
  /**
   * @description
   *   执行中数量
   * @format int32
   */
  publishNum: number;
  /**
   * @description
   *   待发布数量
   * @format int32
   */
  unPublishNum: number;
}

/**
 * @description
 *   添加删除执行人接口
 */
export interface EmergencyTaskPersonInput {
  /**
   * @description
   *   如果人员被删除的 需要传id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   itcode
   */
  itcode: string;
  /**
   * @description
   *   手机号
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
   *   角色名称
   */
  roleName: string;
  /**
   * @description
   *   1 == 添加  2 == 删除
   * @format int32
   */
  status: number;
  /**
   * @description
   *   任务id
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   任务中心主键
   * @format int64
   */
  taskMessageId: number;
  /**
   * @description
   *   真实姓名
   */
  username: string;
}

/**
 * @description
 *   启动应急任务执行人
 */
export interface EmergencyTaskPersonList {
  /**
   * @description
   *   调用状态 1:在途中；2:不可用；3:可调用 4:已到达 5:离线  6 已调配里离线  7：当前事件获取其他事件已调配离线状态
   * @format int32
   */
  dispatchStatus: number;
  /**
   * @description
   *   距离
   */
  distance: string;
  distanceNumber: number;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   itcode
   */
  itcode: string;
  /**
   * @description
   *   纬度
   */
  latitude: number;
  /**
   * @description
   *   纬度mkt
   */
  latitudeMkt: number;
  /**
   * @description
   *   经度
   */
  longitude: number;
  /**
   * @description
   *   经度mkt
   */
  longitudeMkt: number;
  /**
   * @description
   *   手机号
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
   *   角色名称
   */
  roleName: string;
  /**
   * @description
   *   人员状态   1:已到达
   * @format int32
   */
  status: number;
  /**
   * @description
   *   策略id
   * @format int64
   */
  strategyId: number;
  /**
   * @description
   *   真实姓名
   */
  username: string;
}

/**
 * @description
 *   终止任务下发接口实体
 */
export interface EmergencyTerminationTaskInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   事件编码
   */
  eventCode: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   事件名称
   */
  eventName: string;
  /**
   * @description
   *   任务分发人信息
   */
  executorInfos: Array<EmergencyStartExecutorInfoInput>;
  /**
   * @description
   *   通知策略下发参数
   */
  groupInfos: Array<Array<EmergencyPrePlanPersonInput>>;
  /**
   * @description
   *   icom群组发送列表
   */
  icomeList: Array<EmergencyNoticeIcomeInput>;
  /**
   * @description
   *   级别
   * @format int32
   */
  level: number;
  /**
   * @description
   *   节点id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   预案id
   * @format int64
   */
  prePlanId: number;
  /**
   * @description
   *   预案名称
   */
  preplanName: string;
  /**
   * @description
   *   预案类型 1:常规预案；2:场景预案
   * @format int32
   */
  preplanType: number;
  /**
   * @description
   *   节点名称
   */
  taskName: string;
}

/**
 * @description
 *   应急人流信息查询
 */
export interface EmergencyTrafficInput {
  /**
   * @description
   *   数据查询人员
   */
  createUser: string;
  /**
   * @description
   *   数据所属事件ID
   * @format int64
   */
  eventId: number;
}

/**
 * @description
 *   应急人流信息查询
 */
export interface EmergencyTrafficOutput {
  /**
   * @description
   *   数据查询时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   数据查询人员
   */
  createUser: string;
  /**
   * @description
   *   数据所属事件ID
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   数据信息
   */
  result: {
    /**
        @description
          数据信息 */
    [propertyName: string]: any;
  };
}

/**
 * @description
 *   获取天气信息出参
 */
export interface EmergencyWeatherOutput {
  alert: string;
  /** @format date-time */
  createTime: string;
  districtId: string;
  /** @format int64 */
  id: number;
  location: string;
  rh: string;
  temp: string;
  text: string;
  /** @format date-time */
  updateTime: string;
  uptime: string;
  windClass: string;
  windDir: string;
}

/**
 * @description
 *   物资装备清单列表
 */
export interface EventDeviceListInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   公司编码
   */
  companyCodes: Array<string>;
  /**
   * @description
   *   实体编码
   */
  cpmoCode: string;
  /**
   * @description
   *   装备清单名称
   */
  deviceName: string;
  /**
   * @description
   *   类别
   */
  deviceTypeIds: Array<number>;
  /**
   * @description
   *   距离
   * @format int32
   */
  distance: number;
  /**
   * @description
   *   事件ID
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   储备库ID
   */
  goodsId: string;
  /**
   * @description
   *   储备库名称
   */
  goodsName: string;
  /**
   * @description
   *   区域编码
   */
  organCode: string;
  /**
   * @description
   *   1:数量由多到少；2:距离由近到远
   * @format int32
   */
  sortType: number;
  /**
   * @description
   *   站编码
   */
  stationCode: string;
}

/**
 * @description
 *   物资装备清单列表
 */
export interface EventDeviceOutput {
  /**
   * @description
   *   物资储备库地址
   */
  address: string;
  /**
   * @description
   *   装备名称
   */
  deviceName: string;
  /**
   * @description
   *   物资装备类别ID
   * @format int32
   */
  deviceTypeId: number;
  /**
   * @description
   *   物资装备类别名称
   */
  deviceTypeName: string;
  /**
   * @description
   *   距离
   */
  distance: string;
  /**
   * @description
   *   距离
   * @format double
   */
  distanceDouble: number;
  /**
   * @description
   *   物资储备库id
   * @format int64
   */
  goodsId: number;
  /**
   * @description
   *   物资储备库名称
   */
  goodsName: string;
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   纬度（墨卡托坐标系）
   */
  latitude: number;
  /**
   * @description
   *   经度（墨拉托坐标系）
   */
  longitude: number;
  /**
   * @description
   *   规格型号
   */
  model: string;
  /**
   * @description
   *   规定数量
   */
  number: number;
  /**
   * @description
   *   单位
   */
  unit: string;
  /**
   * @description
   *   负责人itcode
   */
  userItcode: string;
  /**
   * @description
   *   负责人名称
   */
  userName: string;
  /**
   * @description
   *   负责人联系方式
   */
  userPhone: string;
}

/**
 * @description
 *   事件归档结束任务详情
 */
export interface EventEndTaskDetailOutput {
  alarmId: string;
  /** @format date-time */
  createTime: string;
  distanceTime: string;
  ecode: string;
  /**
   * @description
   *   结束原因
   */
  endReason: string;
  /**
   * @description
   *   结束应急操作人员
   */
  endUserName: string;
  /** @format int64 */
  eventId: number;
  feedbackAddr: string;
  feedbackAddrGeom: string;
  /**
   * @description
   *   反馈时人员位置
   */
  feedbackUserLocation: string;
  /**
   * @description
   *   文件附件
   */
  fileUrl: string;
  /** @format int32 */
  isLeakDetection: number;
  /** @format int32 */
  isPressureHolding: number;
  /** @format int32 */
  isPressureTest: number;
  /** @format int32 */
  isRecover: number;
  itcode: string;
  livePhotos: string;
  /**
   * @description
   *   是否误报
   * @format int32
   */
  misReport: number;
  /**
   * @description
   *   是否正常结束
   * @format int32
   */
  normal: number;
  /**
   * @description
   *   操作时间
   */
  operateTime: string;
  pipeExpireReason: string;
  /**
   * @description
   *   情况说明
   */
  remark: string;
  /** @format int32 */
  status: number;
  userName: string;
  /**
   * @description
   *   联系方式
   */
  verifyUserPhone: string;
  /**
   * @description
   *   核实对象
   */
  verifyUsername: string;
}

/**
 * @description
 *   物资储备库列表
 */
export interface EventGoodsListInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   公司编码
   */
  companyCodes: Array<string>;
  /**
   * @description
   *   实体编码
   */
  cpmoCode: string;
  /**
   * @description
   *   装备清单名称
   */
  deviceName: string;
  /**
   * @description
   *   距离
   * @format int32
   */
  distance: number;
  /**
   * @description
   *   事件ID
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   物资库id
   */
  goodsIds: Array<number>;
  /**
   * @description
   *   储备库名称
   */
  goodsName: string;
  /**
   * @description
   *   区域编码
   */
  organCode: string;
  /**
   * @description
   *   站编码
   */
  stationCode: string;
}

/**
 * @description
 *   物资储备库列表
 */
export interface EventGoodsOutput {
  /**
   * @description
   *   物资储备库地址
   */
  address: string;
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
   *   距离
   */
  distance: string;
  /**
   * @description
   *   距离
   * @format double
   */
  distanceDouble: number;
  /**
   * @description
   *   物资储备库名称
   */
  goodsName: string;
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   纬度（墨卡托坐标系）
   */
  latitude: number;
  /**
   * @description
   *   经度（墨拉托坐标系）
   */
  longitude: number;
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
   *   站点编码
   */
  stationCode: string;
  /**
   * @description
   *   站点名称
   */
  stationName: string;
  /**
   * @description
   *   负责人itcode
   */
  userItcode: string;
  /**
   * @description
   *   负责人名称
   */
  userName: string;
  /**
   * @description
   *   负责人联系方式
   */
  userPhone: string;
}

/**
 * @description
 *   事件icome入参实体
 */
export interface EventIcomeInput {
  sessionId: string;
}

/**
 * @description
 *   icome多个事件完成标记事件节点
 */
export interface EventIcomeNodeInput {
  dictList: Array<DictDataEditableInput>;
  /** @format int64 */
  eventId: number;
  itcode: string;
  username: string;
}

/**
 * @description
 *   查询应急预案详情
 */
export interface EventLevelAdjustInput {
  /**
   * @description
   *   外呼内容
   */
  callTemplate: string;
  /**
   * @description
   *   险情分级（1-一级紧急 2-二级紧急 3-三级紧急）
   * @format int32
   */
  eventLevel: number;
  /**
   * @description
   *   场景预案通知组织列表
   */
  groups: Array<EmergencyPrePlanPersonInput>;
  icomeContent: string;
  /** @format int64 */
  icomeId: number;
  /**
   * @description
   *   icom群组发送列表
   */
  icomeList: Array<EmergencyNoticeIcomeInput>;
  icomeSend: boolean;
  /**
   * @description
   *   应急事件主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   通知组织列表
   */
  infos: Array<EmergencyPrePlanPersonInput>;
  /**
   * @description
   *   短信内容
   */
  msgTemplate: string;
  /**
   * @description
   *   应急预案主键
   * @format int64
   */
  prePlanId: number;
  /**
   * @description
   *   应急预案名称
   */
  prePlanName: string;
  /**
   * @description
   *   应急预案类型 1:常规预案；2:场景预案
   * @format int32
   */
  preplanType: number;
  /**
   * @description
   *   是否发送短信
   */
  sendMsg: boolean;
  /**
   * @description
   *   是否发送外呼
   */
  sendPhone: boolean;
}

/**
 * @description
 *   查询应急预案详情输出
 */
export interface EventLevelAdjustListOutput {
  eventLevelAdjustOutput: EventLevelAdjustOutput;
  /**
   * @description
   *   调整应急列表
   */
  list: Array<EventLevelAdjustOutput>;
}

/**
 * @description
 *   查询应急预案详情输出
 */
export interface EventLevelAdjustOutput {
  /**
   * @description
   *   通知组织列表
   */
  announcementOrgOutputList: Array<{
    [propertyName: string]: any;
  }>;
  /**
   * @description
   *   附件
   */
  attachment: Array<OnlineFile>;
  /**
   * @description
   *   险情分级（1-一级紧急 2-二级紧急 3-三级紧急）
   * @format int32
   */
  eventLevel: number;
  /**
   * @description
   *   险情分级名称
   */
  eventLevelName: string;
  /**
   * @description
   *   预案id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   模板信息
   */
  infos: Array<MsgTemplateInfo>;
  /**
   * @description
   *   启动响应时间
   * @format date-time
   */
  launchTime: string;
  /**
   * @description
   *   启动响应人员
   */
  launchUserName: string;
  /**
   * @description
   *   任务分发列表
   */
  missionDispatchOutputList: Array<{
    [propertyName: string]: any;
  }>;
  /**
   * @description
   *   预案名称
   */
  name: string;
  /**
   * @description
   *   电子预案信息
   */
  onlinePreplan: Array<OnlineFile>;
  /**
   * @description
   *   预案类型，1:常规预案；2:场景预案
   * @format int32
   */
  preplanType: number;
  /**
   * @description
   *   响应级别划分标准
   */
  text: string;
}

/**
 * @description
 *   任务中心添加或修改入参
 */
export interface EventNodeAddOrUpdInput {
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   id  添加时为null   id 不等于null  修改
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否必须
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   消息模版
   * @format int64
   */
  msgId: number;
  /**
   * @description
   *   节点id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   节点名称
   */
  nodeName: string;
  /**
   * @description
   *   1：常规配置  2：场景预案自定义 默认1
   * @format int32
   */
  nodeType: number;
  /**
   * @description
   *   执行人集合
   */
  personList: Array<EmergencyTaskPersonList>;
  /**
   * @description
   *   发布渠道（1:app工单；2:icome待办），多个逗号分隔
   */
  publishMethod: string;
  /**
   * @description
   *   描述
   */
  remarks: string;
  /**
   * @description
   *   任务id
   * @format int64
   */
  taskId: number;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
  /**
   * @description
   *   任务状态 1：待发布 2 执行中  3 已完成  4：已取消  5 草稿
   * @format int32
   */
  taskStatus: number;
  /**
   * @description
   *   任务类型 1：任务 2：信息  3：自建任务 默认：3
   * @format int32
   */
  taskType: number;
}

/**
 * @description
 *   获取节点列表入参
 */
export interface EventNodeListOutput {
  /**
   * @description
   *   节点id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   节点名称
   */
  nodeName: string;
}

/**
 * @description
 *   事件节点
 */
export interface EventNodeOutput {
  text: string;
  /** @format int64 */
  value: number;
}

/**
 * @description
 *   事件合并详情
 */
export interface EventReportDetailOuput {
  appRemark: string;
  /**
   * @description
   *   音频文件地址
   */
  audioUrl: string;
  billNum: string;
  billOrderSourceText: string;
  /** @format int32 */
  clientType: number;
  confirmPipeline: string;
  content: string;
  contents: Array<string>;
  contractNo: string;
  /** @format date-time */
  createTime: string;
  createUserPhone: string;
  createUsername: string;
  dangerousType: string;
  dealUserCorpCode: string;
  dealUserCorpName: string;
  /** @format int64 */
  eventId: number;
  eventType: string;
  /** @format int64 */
  id: number;
  name: string;
  /** @format date-time */
  orderCreateTime: string;
  /** @format date-time */
  orderUpdateTime: string;
  /** @format int32 */
  questionFirstClassId: number;
  questionFirstClassName: string;
  /** @format int32 */
  questionSecondClassId: number;
  questionSecondClassName: string;
  remindOrder: Array<RemindOrderEntity>;
  remindOrders: string;
  /** @format int32 */
  remindTimes: number;
  riskLocationDetail: string;
  /** @format int32 */
  source: number;
  stateName: string;
  tel: string;
  threePartyConversationText: string;
  tripartiteCausesDesc: string;
  /** @format date-time */
  updateTime: string;
}

/**
 * @description
 *   任务类型出参
 */
export interface EventTaskTypeOutput {
  /**
   * @description
   *   是否可添加
   * @format int32
   */
  isAdd: number;
  /**
   * @description
   *   流程环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   流程环节名称
   */
  nodeName: string;
  /**
   * @description
   *   类型id
   * @format int64
   */
  typeId: number;
  /**
   * @description
   *   类型名称
   */
  typeName: string;
}

/**
 * @description
 *   事件节点
 */
export interface EventUnFinishNodeOutput {
  /** @format int64 */
  eventId: number;
  eventName: string;
  multiCheckboxItems: Array<EventNodeOutput>;
}

/**
 * @description
 *   入参
 */
export interface EventUnNormalEndInput {
  /**
   * @description
   *   结束原因
   */
  endReason: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   文件附件
   */
  fileUrl: string;
  /**
   * @description
   *   是否下发过险情确认工单
   */
  isConfirm: boolean;
  /**
   * @description
   *   情况说明
   */
  remark: string;
  /**
   * @description
   *   联系方式
   */
  verifyUserPhone: string;
  /**
   * @description
   *   核实对象
   */
  verifyUsername: string;
}

/**
 * @description
 *   消息配置动态数据类型实体
 */
export interface ExampleOutput {
  /**
   * @description
   *   动态数据类型字段
   */
  key: string;
  list: Array<ExampleOutput>;
  /**
   * @description
   *   样例数据
   */
  value: string;
}

/**
 * @description
 *   专家群组
 */
export interface ExpertGroupOutput {
  /**
   * @description
   *   企业编码
   */
  compCode: string;
  /**
   * @description
   *   企业名称
   */
  compCodeTxt: string;
  /**
   * @description
   *   群组编号
   * @format int32
   */
  groupId: number;
  /**
   * @description
   *   群组名称
   */
  name: string;
}

/**
 * @description
 *   专家与联系人
 */
export interface ExpertGroupQueryInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
}

/**
 * @description
 *   保存专家群组
 */
export interface ExpertGroupSavedReqInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   群组id集合
   */
  groupIds: Array<number>;
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
}

/**
 * @description
 *   查询专家
 */
export interface ExpertOutput {
  /**
   * @description
   *   it code
   */
  itcode: string;
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
  /**
   * @description
   *   职位
   */
  position: string;
}

/**
 * @description
 *   查询专家
 */
export interface ExpertQueryInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   查询关键字(姓名或者电话号码)
   */
  searchWord: string;
}

/**
 * @description
 *   到期批量提醒
 */
export interface ExpireRemindInput {
  /**
   * @description
   *   所属公司
   */
  companyCode: string;
  /**
   * @description
   *   物资清单id
   * @format int64
   */
  deviceId: number;
  /**
   * @description
   *   物资清单ids
   */
  deviceIds: string;
  /**
   * @description
   *   到期时间
   */
  expireDate: string;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
  /**
   * @description
   *   提醒时间(多个逗号分割)
   */
  remindDate: string;
  /**
   * @description
   *   提醒方式(多个逗号分割)
   */
  remindMethod: string;
  /**
   * @description
   *   储备库负责人itcode
   */
  sendPersonItcode: string;
}

/**
 * @description
 *   封堵反馈图片存储
 */
export interface FeedbackImgInput {
  /**
   * @description
   *   应急事件id
   * @format int64
   */
  emergencyId: number;
  /**
   * @description
   *   封堵反馈地图图片
   */
  imgUrl: string;
}

export interface FileUploadOutput {
  fileName: string;
  fileUrl: string;
}

/**
 * @description
 *   获取对应公司下的重点区域
 */
export interface FocusAreaDetailsInput {
  companyCode: string;
  contains: string;
  /** @format int32 */
  flag: number;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
}

/**
 * @description
 *   气源数据实体
 */
export interface GasSourceInput {
  cpmoCop: string;
  /** @format int64 */
  eventId: number;
  eventStatusName: string;
  lat: string;
  lng: string;
  stationName: string;
}

/**
 * @description
 *   气源列表
 */
export interface GasSourceOutput {
  distance: string;
  latitude: string;
  longitude: string;
  stationCode: string;
  stationName: string;
  stationType: string;
}

/**
 * @description
 *   补气点
 */
export interface GisGasSupplyOutput {
  compCode: string;
  control: string;
  /** @format date-time */
  createTime: string;
  /** @format date-time */
  crttime: string;
  crtuser: string;
  describe: string;
  gasCode: string;
  /** @format int32 */
  gid: number;
  gps: string;
  gpsstatus: string;
  /** @format int64 */
  id: number;
  latitude: string;
  layerId: string;
  longitude: string;
  management: string;
  model: string;
  pointNum: string;
  region: string;
  remark: string;
  supplyCapacity: string;
  supplyDevice: string;
  supplyName: string;
  supplyPositon: string;
  taskid: string;
  type: string;
  /** @format date-time */
  updateTime: string;
}

/**
 * @description
 *   补气点
 */
export interface GisGasSupplyOutputDto {
  control: string;
  /** @format date-time */
  createTime: string;
  /** @format date-time */
  crttime: string;
  crtuser: string;
  describe: string;
  /** @format int32 */
  emergencyPry: number;
  gasCode: string;
  /** @format int32 */
  gid: number;
  gps: string;
  gpsstatus: string;
  /** @format int64 */
  id: number;
  latitude: string;
  longitude: string;
  management: string;
  model: string;
  pointNum: string;
  region: string;
  remark: string;
  supplyCapacity: string;
  supplyDevice: string;
  supplyName: string;
  supplyPositon: string;
  taskid: string;
  type: string;
  /** @format date-time */
  updateTime: string;
}

/**
 * @description
 *   获取全部储备库
 */
export interface Goods {
  /**
   * @description
   *   距离
   * @format double
   */
  distance: number;
  /**
   * @description
   *   储备库id
   * @format int64
   */
  goodsId: number;
  /**
   * @description
   *   储备库名称
   */
  goodsName: string;
}

/**
 * @description
 *   随车物资清单
 */
export interface GoodsCheckInfo {
  /**
   * @description
   *   分类
   */
  category: string;
  /**
   * @description
   *   工具名称
   */
  deviceName: string;
  /**
   * @description
   *   点检反馈
   */
  feedback: string;
  /**
   * @description
   *   是否完好 0-必备 1-选配
   * @format int32
   */
  intact: number;
  /**
   * @description
   *   规格型号
   */
  model: string;
  /**
   * @description
   *   数量
   * @format int32
   */
  nums: number;
  /**
   * @description
   *   单位
   */
  unit: string;
}

/**
 * @description
 *   点检记录列表筛选参数
 */
export interface GoodsCheckQueryDTO {
  /**
   * @description
   *   天数 1-近一周 2-近一个月 3-近半年 4-近一年
   * @format int32
   */
  dateCount: number;
  /**
   * @description
   *   结束时间
   */
  endDate: string;
  /**
   * @description
   *   车牌号
   */
  licensePlate: string;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /**
   * @description
   *   开始时间
   */
  startDate: string;
}

/**
 * @description
 *   应急物资库删除
 */
export interface GoodsDelInput {
  /**
   * @description
   *   物资主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
}

/**
 * @description
 *   应急物资库详情
 */
export interface GoodsDetailOutput {
  /**
   * @description
   *   物资储备库地址
   */
  address: string;
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
   *   物资储备库名称
   */
  goodsName: string;
  /**
   * @description
   *   物资储备库地址纬度
   */
  latitude: number;
  /**
   * @description
   *   物资储备库地址经度
   */
  longitude: number;
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
   *   站点编码
   */
  stationCode: string;
  /**
   * @description
   *   站点名称
   */
  stationName: string;
  /**
   * @description
   *   负责人itcode
   */
  userItcode: string;
  /**
   * @description
   *   负责人名称
   */
  userName: string;
  /**
   * @description
   *   负责人联系方式
   */
  userPhone: string;
}

/**
 * @description
 *   点检记录详情筛选参数
 */
export interface GoodsDetailQueryDTO {
  /**
   * @description
   *   是否缺少项 0-非 1-是
   * @format int32
   */
  flag: number;
  /**
   * @description
   *   点检主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   关键字
   */
  keywords: string;
  /**
   * @description
   *   车牌号
   */
  licensePlate: string;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /**
   * @description
   *   子类别名称
   */
  types: Array<string>;
}

/**
 * @description
 *   物资装备清单批量删除
 */
export interface GoodsDeviceBatchDelInput {
  /**
   * @description
   *   装备清单id,逗号分割
   */
  deviceIds: string;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
}

/**
 * @description
 *   物资装备清单列表
 */
export interface GoodsDeviceCountOutput {
  /**
   * @description
   *   到期物资数量
   * @format int64
   */
  overdueNumber: number;
  /**
   * @description
   *   短缺物资数量
   * @format int64
   */
  shortNumber: number;
}

/**
 * @description
 *   物资装备清单删除
 */
export interface GoodsDeviceDelInput {
  /**
   * @description
   *   装备清单id
   * @format int64
   */
  deviceId: number;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
}

/**
 * @description
 *   物资装备清单详情
 */
export interface GoodsDeviceDetailOutput {
  /**
   * @description
   *   购买日期
   */
  buyDate: string;
  /**
   * @description
   *   装备名称
   */
  deviceName: string;
  /**
   * @description
   *   物资装备类别id
   * @format int32
   */
  deviceTypeId: number;
  /**
   * @description
   *   物资装备类别名称
   */
  deviceTypeName: string;
  /**
   * @description
   *   初始库存数量
   */
  initNumber: number;
  /**
   * @description
   *   生产厂商
   */
  manufacturer: string;
  /**
   * @description
   *   规格型号
   */
  model: string;
  /**
   * @description
   *   规定数量
   */
  number: number;
  /**
   * @description
   *   物资装备图片
   */
  pictures: string;
  /**
   * @description
   *   备注
   */
  remarks: string;
  /**
   * @description
   *   单位
   */
  unit: string;
}

/**
 * @description
 *   物资装备清单新增
 */
export interface GoodsDeviceInput {
  /**
   * @description
   *   购买日期
   */
  buyDate: string;
  /**
   * @description
   *   装备清单id
   * @format int64
   */
  deviceId: number;
  /**
   * @description
   *   装备名称
   */
  deviceName: string;
  /**
   * @description
   *   物资装备类别id
   * @format int32
   */
  deviceTypeId: number;
  /**
   * @description
   *   装备库id
   * @format int64
   */
  goodsId: number;
  /**
   * @description
   *   初始库存数量
   */
  initNumber: number;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
  /**
   * @description
   *   生产厂商
   */
  manufacturer: string;
  /**
   * @description
   *   规格型号
   */
  model: string;
  /**
   * @description
   *   规定数量
   */
  number: number;
  /**
   * @description
   *   物资装备图片
   */
  pictures: string;
  /**
   * @description
   *   备注
   */
  remarks: string;
  /**
   * @description
   *   单位
   */
  unit: string;
}

/**
 * @description
 *   物资装备清单列表
 */
export interface GoodsDeviceListInput {
  /**
   * @description
   *   类别ID
   */
  deviceTypeIds: Array<number>;
  /**
   * @description
   *   物资主键
   * @format int64
   */
  goodsId: number;
  /**
   * @description
   *   物资储备库名称
   */
  goodsName: string;
  /**
   * @description
   *   到期物资查看（0:未到期；1：即将到期或已到期）
   * @format int32
   */
  isOverdue: number;
  /**
   * @description
   *   短缺物资查看（0:不存在短缺；1: 存在短缺）
   * @format int32
   */
  isShort: number;
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
}

/**
 * @description
 *   物资装备清单列表
 */
export interface GoodsDeviceListOutput {
  /**
   * @description
   *   所属公司
   */
  companyCode: string;
  /**
   * @description
   *   装备名称
   */
  deviceName: string;
  /**
   * @description
   *   物资装备类别id
   * @format int32
   */
  deviceTypeId: number;
  /**
   * @description
   *   物资装备类别名称
   */
  deviceTypeName: string;
  /**
   * @description
   *   到期日期
   */
  expireDate: string;
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   初始库存数量
   */
  initNumber: number;
  /**
   * @description
   *   规格型号
   */
  model: string;
  /**
   * @description
   *   是否手动添加 0-否 1-是
   * @format int32
   */
  necessary: number;
  /**
   * @description
   *   规定数量
   */
  number: number;
  /**
   * @description
   *   单位
   */
  unit: string;
}

/**
 * @description
 *   物资
 */
export interface GoodsDeviceQueryOutput {
  /**
   * @description
   *   物资名称
   */
  deviceName: string;
  /**
   * @description
   *   出入库数量
   */
  number: number;
  /**
   * @description
   *   单位
   */
  unit: string;
}

/**
 * @description
 *   物资批量出入库实体
 */
export interface GoodsDeviceStockRecordsBatchInputDto {
  /**
   * @description
   *   物资清单数据
   */
  devices: Array<GoodsDeviceStockRecordsOutInputDto>;
  /**
   * @description
   *   储备库id
   * @format int64
   */
  goodsId: number;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
  /**
   * @description
   *   领取人itcode
   */
  receiveItcode: string;
  /**
   * @description
   *   领取人姓名
   */
  receiveName: string;
  /**
   * @description
   *   出入库时间('yyyy-MM-dd HH:mm:ss')
   */
  receiveTime: string;
  /**
   * @description
   *   当前登录人
   */
  userName: string;
}

/**
 * @description
 *   物资出入库实体
 */
export interface GoodsDeviceStockRecordsOutInputDto {
  /**
   * @description
   *   物资清单id
   * @format int64
   */
  deviceId: number;
  /**
   * @description
   *   物资装备名称
   */
  deviceName: string;
  /**
   * @description
   *   储备库id
   * @format int64
   */
  goodsId: number;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
  /**
   * @description
   *   出库数量
   */
  number: number;
  /**
   * @description
   *   领取人itcode
   */
  receiveItcode: string;
  /**
   * @description
   *   领取人姓名
   */
  receiveName: string;
  /**
   * @description
   *   出入库时间('yyyy-MM-dd HH:mm:ss')
   */
  receiveTime: string;
  /**
   * @description
   *   单位
   */
  unit: string;
  /**
   * @description
   *   当前登录人
   */
  userName: string;
}

/**
 * @description
 *   出入库记录列表查询
 */
export interface GoodsDeviceStockRecordsQueryInput {
  /** @format int64 */
  batchId: number;
  /**
   * @description
   *   查询
   */
  deviceName: string;
  /**
   * @description
   *   结束时间
   */
  endTime: string;
  /**
   * @description
   *   储备库id
   * @format int64
   */
  goodsId: number;
  /**
   * @description
   *   当前页
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
   *   开始时间
   */
  startTime: string;
  /**
   * @description
   *   1:入库 2：出库
   * @format int32
   */
  stockType: number;
}

/**
 * @description
 *   物资出入库
 */
export interface GoodsDeviceStockRecordsQueryOutput {
  /**
   * @description
   *   id
   * @format int64
   */
  batchId: number;
  /**
   * @description
   *   出入库清单集合
   */
  devices: Array<GoodsDeviceQueryOutput>;
  /**
   * @description
   *   领取人名称
   */
  receiveName: string;
  /**
   * @description
   *   出入库时间
   */
  receiveTime: string;
  /**
   * @description
   *   记录类别 1:入库 2：出库
   * @format int32
   */
  stockType: number;
  /**
   * @description
   *   更新人:操作人
   */
  updateUserName: string;
}

/**
 * @description
 *   随车物资清单
 */
export interface GoodsInfo {
  /**
   * @description
   *   分类
   */
  category: string;
  /**
   * @description
   *   分类Id
   */
  categoryId: string;
  /**
   * @description
   *   子分类
   */
  categorySon: string;
  /**
   * @description
   *   当前数量
   * @format int32
   */
  currentNums: number;
  /**
   * @description
   *   名称
   */
  deviceName: string;
  /**
   * @description
   *   操作 1-固定物资 0-自定义物资
   * @format int32
   */
  fix: number;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   规格型号
   */
  model: string;
  /**
   * @description
   *   0-必备 1-选配
   * @format int32
   */
  necessary: number;
  /**
   * @description
   *   备注
   */
  note: string;
  /**
   * @description
   *   数量
   * @format int32
   */
  nums: number;
  /**
   * @description
   *   单位
   */
  unit: string;
}

/**
 * @description
 *   随车物资清单
 */
export interface GoodsInfoInput {
  /**
   * @description
   *   分类唯一标识
   * @format int64
   */
  categoryId: number;
  /**
   * @description
   *   名称
   */
  deviceName: string;
  /**
   * @description
   *   当前实体编码
   */
  entityCode: string;
  /**
   * @description
   *   物资主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   规格型号
   */
  model: string;
  /**
   * @description
   *   0-必备 1-选配
   * @format int32
   */
  necessary: number;
  /**
   * @description
   *   备注
   */
  note: string;
  /**
   * @description
   *   数量
   * @format int32
   */
  nums: number;
  /**
   * @description
   *   单位
   */
  unit: string;
  /**
   * @description
   *   车辆主键
   * @format int64
   */
  vehicleId: number;
}

/**
 * @description
 *   应急物资库
 */
export interface GoodsInput {
  /**
   * @description
   *   物资储备库地址
   */
  address: string;
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
   *   物资储备库名称
   */
  goodsName: string;
  /**
   * @description
   *   物资主键
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
   *   物资储备库地址纬度
   */
  latitude: number;
  /**
   * @description
   *   物资储备库地址经度
   */
  longitude: number;
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
   *   站点编码
   */
  stationCode: string;
  /**
   * @description
   *   站点名称
   */
  stationName: string;
  /**
   * @description
   *   负责人itcode
   */
  userItcode: string;
  /**
   * @description
   *   负责人名称
   */
  userName: string;
  /**
   * @description
   *   负责人联系方式
   */
  userPhone: string;
}

/**
 * @description
 *   应急物资库列表
 */
export interface GoodsListInput {
  /**
   * @description
   *   实体编码
   */
  cpmoCode: string;
}

/**
 * @description
 *   应急物资库列表
 */
export interface GoodsOutput {
  /**
   * @description
   *   物资储备库地址
   */
  address: string;
  /**
   * @description
   *   物资储备库名称
   */
  goodsName: string;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   点检提醒（0:不存在；1:未点检；2:已点检）
   * @format int32
   */
  isCheck: number;
  /**
   * @description
   *   短缺提醒（0:不存在短缺；1: 存在短缺）
   * @format int32
   */
  isShort: number;
  /**
   * @description
   *   负责人itcode
   */
  userItcode: string;
  /**
   * @description
   *   负责人名称
   */
  userName: string;
  /**
   * @description
   *   负责人联系方式
   */
  userPhone: string;
}

/**
 * @description
 *   装备清单物资
 */
export interface GoodsRemindInput {
  /**
   * @description
   *   储备库id
   * @format int64
   */
  goodsId: number;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
}

/**
 * @description
 *   全部分类
 */
export interface GoodsTypeInfo {
  /**
   * @description
   *   分类名称
   */
  category: string;
  /**
   * @description
   *   分类Id
   */
  categoryId: string;
  /**
   * @description
   *   子分类
   */
  children: Array<GoodsTypeInfo>;
  /**
   * @description
   *   分类数量
   * @format int32
   */
  nums: number;
}

/**
 * @description
 *   呼叫中心-获取当天绿色通道值班人员信息
 */
export interface GreenChannelOutput {
  mobile: string;
  name: string;
  /** @format int64 */
  positionId: number;
  positionName: string;
  positionShortName: string;
  /** @format int32 */
  sceneType: number;
}

export interface HourIndexOutput {
  /**
   * @description
   *   时间
   */
  time: string;
  /**
   * @description
   *   浓度值
   */
  value: string;
}

/**
 * @description
 *   自定义任务icome反馈
 */
export interface IcomeFeedbackTaskInput {
  /**
   * @description
   *   反馈内容
   */
  finishContent: string;
  /**
   * @description
   *   反馈人itcode
   */
  itcode: string;
  /**
   * @description
   *   任务id
   * @format int64
   */
  taskMessageId: number;
}

/**
 * @description
 *   icome群组查询
 */
export interface IcomeInput {
  sessionId: string;
}

/**
 * @description
 *   车牌号实体
 */
export interface InitializeGoodsInput {
  /**
   * @description
   *   车牌号
   */
  licensePlate: string;
}

/**
 * @description
 *   巡检车列表
 */
export interface InspectCarInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   实体编码
   */
  cpmoCode: string;
  /**
   * @description
   *   距离
   * @format int32
   */
  distance: number;
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

/**
 * @description
 *   巡检车列表
 */
export interface InspectCarOutput {
  /**
   * @description
   *   执行区域===
   */
  areaName: string;
  /**
   * @description
   *   种类====
   */
  category: string;
  /**
   * @description
   *   所属公司===cpmo_cop_txt
   */
  companyCode: string;
  /**
   * @description
   *   所属公司===cpmo_cop_txt
   */
  companyName: string;
  /**
   * @description
   *   车辆id
   * @format int64
   */
  deviceId: number;
  /**
   * @description
   *   企业设备编码
   */
  deviceId1: string;
  /**
   * @description
   *   事发地点距离
   */
  distance: number;
  /**
   * @description
   *   设备编码====serialnumber
   */
  eqptcode: string;
  /**
   * @description
   *   设备名称=====device_name
   */
  eqptname: string;
  /**
   * @description
   *   设备分类====
   */
  eqpttype: string;
  /**
   * @description
   *   乙烷====PCc2
   */
  ethane: number;
  /**
   * @description
   *   纬度===latitude
   */
  latitude: number;
  /**
   * @description
   *   经度===longitude
   */
  longitude: number;
  /**
   * @description
   *   激光甲烷===concentration
   */
  methane: number;
  /**
   * @description
   *   所属组织===cpmo_cop_txt
   */
  orgCode: string;
  /**
   * @description
   *   所属组织===cpmo_cop_txt
   */
  orgName: string;
  /**
   * @description
   *   泵吸甲烷===PCc1
   */
  pump: number;
  /**
   * @description
   *   上报位置
   */
  reportLocation: string;
  /**
   * @description
   *   上报时间====timeStamp
   */
  reportTime: string;
  /**
   * @description
   *   速度====speed
   */
  speed: number;
  /**
   * @description
   *   所属站点===staid
   */
  stationCode: string;
  /**
   * @description
   *   所属站点===staid
   */
  stationName: string;
  /**
   * @description
   *   风向====windDirection
   */
  windDirection: number;
  /**
   * @description
   *   风速=====windSpeed
   */
  windSpeed: number;
  /**
   * @description
   *   墨卡托经度===longitude
   */
  x: number;
  /**
   * @description
   *   墨卡托纬度===latitude
   */
  y: number;
}

/**
 * @description
 *   车辆点检查询
 */
export interface InspectedCarReq {
  /**
   * @description
   *   点检日期 格式：yyyy-MM-dd
   */
  inspectDate: string;
  /**
   * @description
   *   当前用户手机号
   */
  phone: string;
}

/**
 * @description
 *   查询车辆信息
 */
export interface InspectedCarVO {
  /**
   * @description
   *   企业编码
   */
  companyCode: string;
  /**
   * @description
   *   企业名称
   */
  companyName: string;
  /**
   * @description
   *   已完成项目数
   * @format int32
   */
  completedItems: number;
  /**
   * @description
   *   点检日期 格式：yyyy-MM-dd
   */
  inspectDate: string;
  /**
   * @description
   *   点检id
   * @format int64
   */
  inspectionId: number;
  /**
   * @description
   *   点检结果
   */
  inspectionSummary: string;
  /**
   * @description
   *   检查名称
   */
  inspectionTitle: string;
  /**
   * @description
   *   车牌
   */
  licensePlate: string;
  /**
   * @description
   *   手机号
   */
  phone: string;
  /**
   * @description
   *   进度
   */
  progress: number;
  /**
   * @description
   *   区域编号
   */
  region: string;
  /**
   * @description
   *   区域名称
   */
  regionName: string;
  /**
   * @description
   *   点检状态 0-未开始 1-进行中 2-已完成
   * @format int32
   */
  status: number;
  /**
   * @description
   *   项目总数
   * @format int32
   */
  totalItems: number;
  /**
   * @description
   *   未完成项目数
   * @format int32
   */
  uncompletedItems: number;
  /**
   * @description
   *   姓名
   */
  username: string;
  /**
   * @description
   *   车辆标签
   */
  vehicleLabel: string;
}

/**
 * @description
 *   查询物资信息
 */
export interface InspectionSuppliesVO {
  /**
   * @description
   *   大分类
   */
  category: string;
  /**
   * @description
   *   分类路径
   */
  categoryPath: string;
  /**
   * @description
   *   小分类
   */
  categorySon: string;
  /**
   * @description
   *   设备名称
   */
  deviceName: string;
  /**
   * @description
   *   反馈内容
   */
  feedbackContent: string;
  /**
   * @description
   *   0-自定义物资 1-固定物资
   * @format int32
   */
  fix: number;
  /**
   * @description
   *   物资id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   0-完好 1-缺少
   * @format int32
   */
  isLack: number;
  /**
   * @description
   *   缺少数量
   * @format int32
   */
  lackNum: number;
  /**
   * @description
   *   规格模型
   */
  model: string;
  /**
   * @description
   *   0-必须 1-非必须
   * @format int32
   */
  necessary: number;
  /**
   * @description
   *   备注
   */
  note: string;
  /**
   * @description
   *   数量
   * @format int32
   */
  num: number;
  /**
   * @description
   *   物资检查状态 0-未检查 1-已检查
   * @format int32
   */
  status: number;
  /**
   * @description
   *   单位
   */
  unit: string;
}

/**
 * @description
 *   标签入参
 */
export interface LabelListInput {
  /**
   * @description
   *   标签id
   * @format int64
   */
  enterpriseLabelId: number;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   标签全名称
   */
  label: string;
  /**
   * @description
   *   1:涉事工艺设施；2：空间类型；3:泄漏情况；4:事故原因；5:事故后果；6:重点区域；7:燃气管段；8:事故类型
   * @format int32
   */
  labelType: number;
}

/**
 * @description
 *   添加事件标签接口
 */
export interface LabelNameModel {
  /**
   * @description
   *   是否为ai标识 1:是
   * @format int32
   */
  aiType: number;
  /** @format int32 */
  dr: number;
  /**
   * @description
   *   公司标签库id
   * @format int64
   */
  enterpriseLabelId: number;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   标签全路径
   */
  label: string;
  /**
   * @description
   *   场景标签类型
   * @format int32
   */
  labelType: number;
  /**
   * @description
   *   标签名称
   */
  name: string;
  /** @format int32 */
  source: number;
  /**
   * @description
   *   1 分类   2标签
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   获取事件相关标签列表1
 */
export interface LabelNameModelOutput {
  /**
   * @description
   *   是否是ai标签  1： 是
   * @format int32
   */
  aiType: number;
  /**
   * @description
   *   公司标签库id
   * @format int64
   */
  enterpriseLabelId: number;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   标签全路径
   */
  label: string;
  /**
   * @description
   *   标签类型
   * @format int32
   */
  labelType: number;
  /**
   * @description
   *   标签名称
   */
  name: string;
  /**
   * @description
   *   来源 0:系统匹配； 1:录音；2:事件详情
   * @format int32
   */
  source: number;
}

/**
 * @description
 *   标签权重实体
 */
export interface LabelWeightListInput {
  /**
   * @description
   *   权重主键 存在id 修改  不存在 新增
   * @format int64
   */
  id: number;
  /**
   * @description
   *   1:涉事工艺设施；2：空间类型；3:泄漏情况；4:事故原因；5:事故后果；6:重点区域；7:燃气管段；8:事故类型
   * @format int32
   */
  labelType: number;
  /**
   * @description
   *   场景预案id
   * @format int64
   */
  scenePreplanId: number;
  /**
   * @description
   *   标签权重
   */
  weight: number;
}

/**
 * @description
 *   标签权重实体
 */
export interface LabelWeightListOutput {
  /**
   * @description
   *   权重主键 存在id 修改  不存在 新增
   * @format int64
   */
  id: number;
  /**
   * @description
   *   1:涉事工艺设施；2：空间类型；3:泄漏情况；4:事故原因；5:事故后果；6:重点区域；7:燃气管段；8:事故类型
   * @format int32
   */
  labelType: number;
  /**
   * @description
   *   场景预案id
   * @format int64
   */
  scenePreplanId: number;
  /**
   * @description
   *   标签权重
   */
  weight: number;
}

export interface Link {
  href: string;
  templated: boolean;
}

/**
 * @description
 *   经纬度实体
 */
export interface LngLatInput {
  latitude: string;
  longitude: string;
}

/**
 * @description
 *   地图调压器撒点入参
 */
export interface LongLatInput {
  latitude: number;
  longitude: number;
}

/**
 * @description
 *   公司实体
 */
export interface MMdOrganizationOutput {
  compCode: string;
  compCodeTxt: string;
}

/**
 * @description
 *   地图调压器撒点
 */
export interface MapDeviceOutput {
  address: string;
  deviceId: string;
  deviceName: string;
  deviceType: string;
  ecode: string;
  /** @format int32 */
  isShowPressure: number;
  latitude: number;
  longitude: number;
  standId: string;
  unit: string;
}

/**
 * @description
 *   甲烷浓度曲线请求接口
 */
export interface MethaneConcentrationInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   设备编码
   */
  eqptcode: string;
  /**
   * @description
   *   站点id
   */
  standId: string;
}

/**
 * @description
 *   阀井甲烷浓度
 */
export interface MethaneConcentrationOutput {
  /**
   * @description
   *   甲烷浓度数据列表
   */
  indexList: Array<HourIndexOutput>;
  /**
   * @description
   *   单位
   */
  unit: string;
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
 *   外呼模板
 */
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

export interface MsgTemplateInfo {
  /** @format int64 */
  id: number;
  msg: string;
  sendMsg: string;
  type: string;
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

/**
 * @description
 *   网格人员
 */
export interface NetworkShowDangerWoUserDTO {
  organCode: string;
  organName: string;
  responsible: string;
  responsibleItcode: string;
  responsiblePhone: string;
  /** @format int32 */
  status: number;
  userItcode: string;
  userLandline: string;
  userName: string;
  userPhone: string;
}

/**
 * @description
 *   夜间模式配置入参对象
 */
export interface NightModeFomrInput {
  /**
   * @description
   *   配置状态：0-关闭；1-开启
   * @format int32
   */
  cnfStatus: number;
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   客服岗位Id
   */
  customerServicePost: string;
  /**
   * @description
   *   结束时间：HH:mm
   */
  endTime: string;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   夜间值守岗位Id
   */
  nightDutyPost: string;
  /**
   * @description
   *   抢修岗位Id
   */
  orderRepairPost: string;
  /**
   * @description
   *   管阀岗位Id
   */
  orderValuePost: string;
  /**
   * @description
   *   开始时间：HH:mm
   */
  startTime: string;
}

/**
 * @description
 *   夜间模式配置出参
 */
export interface NightModeOutput {
  /**
   * @description
   *   配置状态：0-关闭；1-开启
   * @format int32
   */
  cnfStatus: number;
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   客服岗位Id
   */
  customerServicePost: string;
  /**
   * @description
   *   结束时间：HH:mm
   */
  endTime: string;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   夜间值守岗位Id
   */
  nightDutyPost: string;
  /**
   * @description
   *   抢修岗位Id
   */
  orderRepairPost: string;
  /**
   * @description
   *   管阀岗位Id
   */
  orderValuePost: string;
  /**
   * @description
   *   开始时间：HH:mm
   */
  startTime: string;
}

/**
 * @description
 *   夜间值守模式配置
 */
export interface NightModeValidOutput {
  /**
   * @description
   *   夜间模式是否在用：false-未使用；true-在使用。未使用夜间模式的不需要提示任何消息
   */
  cnfEnable: boolean;
  /**
   * @description
   *   配置异常提示文本
   */
  msg: string;
  /**
   * @description
   *   展示内容
   */
  text: string;
  /**
   * @description
   *   配置是否正常：true-正常，false-异常
   */
  valid: boolean;
}

/**
 * @description
 *   添加时 通知接收人
 */
export interface NoticePersonInput {
  /** @format date-time */
  createTime: string;
  /**
   * @description
   *   群组名称
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
   *   itcode
   */
  itcode: string;
  /**
   * @description
   *   手机号
   */
  phoneNum: string;
  /**
   * @description
   *   记录表主键
   * @format int64
   */
  recordId: number;
  /**
   * @description
   *   姓名
   */
  userName: string;
}

/**
 * @description
 *   查询列表
 */
export interface NoticeRecordInput {
  compCop: string;
  companyCode: string;
  endTime: string;
  /** @format int64 */
  eventId: number;
  startTime: string;
  /** @format int32 */
  status: number;
  /** @format int32 */
  type: number;
}

/**
 * @description
 *   在线文件
 */
export interface OnlineFile {
  name: string;
  url: string;
}

/**
 * @description
 *   区域
 */
export interface Organ {
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
 *   获取某人某时间段的值班日历入参实体
 */
export interface PersonDutyCalendarQueryInput {
  /**
   * @description
   *   开始日期
   */
  beginDate: string;
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

/**
 * @description
 *   获取某人当天值班信息入参实体
 */
export interface PersonDutyQueryInput {
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

/**
 * @description
 *   岗位人员
 */
export interface PersonOutput {
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

/**
 * @description
 *   应急爆管分析
 */
export interface PipeAnalyseAddInput {
  /**
   * @description
   *   管段地址
   */
  address: string;
  /**
   * @description
   *   管段编码
   */
  confirmPipeline: string;
  /**
   * @description
   *   事件主键
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   当前登录人itcode
   */
  itcode: string;
  /**
   * @description
   *   当前登录人名称
   */
  name: string;
  /**
   * @description
   *   管段ID
   */
  pipeId: string;
  /**
   * @description
   *   管段信息
   */
  pipeInfo: string;
}

/**
 * @description
 *   应急物资库
 */
export interface PipeAnalyseMsgInput {
  /**
   * @description
   *   影响小区 楼号
   */
  areaList: Array<DetonationAreaOutput>;
  /**
   * @description
   *   区域名称
   */
  areaNames: Array<string>;
  /**
   * @description
   *   小区名称
   */
  communityNames: Array<string>;
  /**
   * @description
   *   事件名称
   */
  eventName: string;
  /**
   * @description
   *   气源位置
   */
  gasSource: Array<string>;
  /**
   * @description
   *   管段位置
   */
  location: string;
  /**
   * @description
   *   小区编码，逗号分割
   */
  tplnr: string;
  /**
   * @description
   *   用户数
   * @format int32
   */
  userCount: number;
  /**
   * @description
   *   阀门名称
   */
  valveNames: Array<string>;
}

/**
 * @description
 *   应急爆管分析
 */
export interface PipeAnalyseOutput {
  /**
   * @description
   *   管段地址
   */
  address: string;
  /**
   * @description
   *   管段编码
   */
  confirmPipeline: string;
  /**
   * @description
   *   事件主键
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   管段ID
   */
  pipeId: string;
  /**
   * @description
   *   管段信息
   */
  pipeInfo: string;
}

export interface PipeInfo {
  depth: string;
  diameter: string;
  gid: string;
  layerid: string;
  location: string;
  material: string;
  pipeCode: string;
  pressureLevel: string;
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

/**
 * @description
 *   人员
 */
export interface PositionInfoOutput {
  /**
   * @description
   *   纬度(84 坐标)
   */
  lat: number;
  /**
   * @description
   *   经度(84 坐标)
   */
  lon: number;
  /**
   * @description
   *   坐标点 x(墨卡托)
   */
  x: number;
  /**
   * @description
   *   坐标点 y(墨卡托)
   */
  y: number;
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

/**
 * @description
 *   值守班组人员
 */
export interface PositionPersonOutput {
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
 *   查询岗位已选择的值守班组人员入参实体
 */
export interface PositionPersonQueryInput {
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
 *   推荐响应级别详细返回实体
 */
export interface PreplanLevelDetailOutput {
  checked: boolean;
  /**
   * @description
   *   标签id
   * @format int64
   */
  enterpriseLabelId: number;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   标签类型 1:工艺设施；2:空间类型；3:泄漏情况；4:事故原因；5:事故后果；6:重点区域；7:燃气管段；8:事故类型
   * @format int32
   */
  labelType: number;
  /**
   * @description
   *   级别
   * @format int32
   */
  level: number;
  /**
   * @description
   *   标签名称
   */
  name: string;
  /**
   * @description
   *   预案id
   * @format int64
   */
  scenePreplanId: number;
}

/**
 * @description
 *   推荐响应级别入参实体
 */
export interface PreplanLevelIutput {
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   场景预案id
   * @format int64
   */
  preplanId: number;
}

/**
 * @description
 *   推荐响应级别返回实体
 */
export interface PreplanLevelOutput {
  /**
   * @description
   *   分级标签集合
   */
  details: Array<PreplanLevelDetailOutput>;
  /**
   * @description
   *   groupId集合
   */
  groupId: Array<number>;
  /**
   * @description
   *   级别
   * @format int32
   */
  level: number;
  /**
   * @description
   *   是否是推荐级别  true：是
   */
  status: boolean;
}

/**
 * @description
 *   压力曲线设备列表
 */
export interface PressureDeviceOutput {
  /**
   * @description
   *   设备Id
   */
  deviceId: string;
  /**
   * @description
   *   设备名称
   */
  deviceName: string;
  /**
   * @description
   *   公司编码
   */
  ecode: string;
  /**
   * @description
   *   设备编码
   */
  eqptcode: string;
  /**
   * @description
   *   纬度
   */
  latitude: string;
  /**
   * @description
   *   设备地址
   */
  location: string;
  /**
   * @description
   *   经度
   */
  longitude: string;
  /**
   * @description
   *   站点id
   */
  standId: string;
}

export interface ProgressNoticeCnfDto {
  /**
   * @description
   *   手机联系人分组id
   */
  addressBookId: string;
  /**
   * @description
   *   外呼模板内容
   */
  callTemplate: string;
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   管理实体编码
   */
  entityCode: string;
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number;
  /**
   * @description
   *   短信模板内容
   */
  msgTemplate: string;
  /**
   * @description
   *   配置类型：type=1 事件上报配置；type=2 完成接警配置；type=3 险情确认配置
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   进度通知配置入参
 */
export interface ProgressNoticeCnfInput {
  /**
   * @description
   *   险情确认配置
   */
  confirmCnf: ProgressNoticeCnfDto;
  /**
   * @description
   *   完成接警配置
   */
  receivedCnf: ProgressNoticeCnfDto;
  /**
   * @description
   *   事件上报配置
   */
  reportCnf: ProgressNoticeCnfDto;
}

/**
 * @description
 *   进度通知配置出参
 */
export interface ProgressNoticeCnfOutput {
  /**
   * @description
   *   险情确认配置
   */
  confirmCnf: ProgressNoticeCnfDto;
  /**
   * @description
   *   完成接警配置
   */
  receivedCnf: ProgressNoticeCnfDto;
  /**
   * @description
   *   事件上报配置
   */
  reportCnf: ProgressNoticeCnfDto;
}

/**
 * @description
 *   发布接口入参
 */
export interface PublishInput {
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   任务中心id集合
   */
  taskIds: Array<number>;
}

/**
 * @description
 *   请求压力曲线设备列表参数对象
 */
export interface QueryPressureDeviceInput {
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string;
  /**
   * @description
   *   事件Id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   事件中心点纬度
   */
  latitude: number;
  /**
   * @description
   *   事件中心点经度
   */
  longitude: number;
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

/**
 * @description
 *   推荐预案入参实体
 */
export interface RecommendPreplanInput {
  /**
   * @description
   *   是否只显示推荐的预案 是 = true  否 = false
   */
  checked: boolean;
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   模糊搜索
   */
  contains: string;
  /** @format int64 */
  dictId: number;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
}

/**
 * @description
 *   推荐预案返回实体
 */
export interface RecommendPreplanOutput {
  /** @format int32 */
  checkedLabel: number;
  /**
   * @description
   *   公司编码
   */
  compCode: string;
  /**
   * @description
   *   场景分类id
   * @format int64
   */
  dictLabelId: number;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   标签
   */
  labelList: Array<string>;
  /**
   * @description
   *   预案名称
   */
  name: string;
  /**
   * @description
   *   数值
   */
  number: number;
  /** @format date-time */
  updateTime: string;
  /** @format int32 */
  usageNumber: number;
  /** @format date-time */
  usageTime: string;
  weight: number;
}

/**
 * @description
 *   到期提醒详情
 */
export interface RemindDetailOutput {
  /**
   * @description
   *   提醒内容
   */
  content: string;
  /**
   * @description
   *   物资清单id
   * @format int64
   */
  deviceId: number;
  /**
   * @description
   *   到期时间
   */
  expireDate: string;
  /**
   * @description
   *   提醒时间(多个逗号分割)
   */
  remindDate: string;
  /**
   * @description
   *   提醒方式(多个逗号分割)
   */
  remindMethod: string;
  /**
   * @description
   *   储备库负责人itcode
   */
  sendPersonItcode: string;
}

/**
 * @description
 *   呼叫中心应急事件详情
 */
export interface RemindOrderEntity {
  count: string;
  describe: string;
  reason: string;
  /** @format date-time */
  time: string;
}

/**
 * @description
 *   催单实体
 */
export interface RemindOrderInput {
  billNum: string;
  /** @format int32 */
  count: number;
  description: string;
  operator: string;
  /** @format int32 */
  reason: number;
}

/**
 * @description
 *   响应级别实体字段
 */
export interface ResponseDetails {
  /**
   * @description
   *   级别 1:一级响应 2:二级响应  .....
   * @format int32
   */
  level: number;
  /**
   * @description
   *   响应级别划分标准
   */
  text: string;
}

/**
 * @description
 *   添加响应级别实体
 */
export interface ResponseInputDto {
  /**
   * @description
   *   预案id
   * @format int64
   */
  preplanId: number;
  /**
   * @description
   *   应急响应级别集合
   */
  responseDetailsList: Array<ResponseDetails>;
}

/**
 * @description
 *   响应通知实体
 */
export interface ResponseNoticeOutputDto {
  /**
   * @description
   *   手机联系人分组id
   * @format int64
   */
  addressBookId: number;
  /**
   * @description
   *   外呼模板
   */
  callMsg: string;
  /**
   * @description
   *   公司名称
   */
  companyName: string;
  /**
   * @description
   *   公司人员
   */
  companyPeople: Array<any>;
  /**
   * @description
   *   事发地网格人员
   */
  gridPersonInfos: Array<any>;
  /**
   * @description
   *   短信模板
   */
  smsMsg: string;
}

/**
 * @description
 *   添加响应级别实体
 */
export interface ResponseOutputDto {
  /**
   * @description
   *   预案id
   * @format int64
   */
  preplanId: number;
  /**
   * @description
   *   应急响应级别集合
   */
  responseDetailsList: Array<ResponseDetails>;
}

/**
 * @description
 *   启动响应： 响应分级 响应通知 提交实体
 */
export interface ResponseSubmitOutputDto {
  /**
   * @description
   *   外呼模板
   */
  callMsg: string;
  /**
   * @description
   *   参与者中心短token
   */
  ennUnifiedCsrfToken: string;
  /**
   * @description
   *   实体编码
   */
  entityCode: string;
  /**
   * @description
   *   任务分发人信息
   */
  executorInfos: Array<EmergencyStartExecutorInfoInput>;
  /**
   * @description
   *   用户登录token
   */
  externalToken: string;
  /**
   * @description
   *   参与者中心code
   */
  grantCode: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   当前登陆人itcode
   */
  itcode: string;
  /**
   * @description
   *   预案类型，1:常规预案；2:场景预案
   * @format int32
   */
  level: number;
  /**
   * @description
   *   发送人员名单
   */
  people: Array<CallList>;
  /**
   * @description
   *   当前登陆人手机号
   */
  phone: string;
  /**
   * @description
   *   预案名称
   */
  prePlanName: string;
  /**
   * @description
   *   预案id
   * @format int64
   */
  preplanId: number;
  /**
   * @description
   *   响应分级级别
   * @format int32
   */
  preplanType: number;
  /**
   * @description
   *   短信模板
   */
  smsMsg: string;
  /**
   * @description
   *   当前登陆人名称
   */
  userName: string;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutput {
  code: string;
  data: any;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   场景预案之通讯录入参
 */
export interface SceneGroupInput {
  /**
   * @description
   *   通讯录id
   * @format int32
   */
  groupId: number;
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   等级
   * @format int32
   */
  level: number;
}

/**
 * @description
 *   场景预案指挥体系
 */
export interface SceneGroupOutput {
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
   *   等级
   * @format int32
   */
  level: number;
}

/**
 * @description
 *   添加场景
 */
export interface SceneLabel {
  /** @format int32 */
  checked: number;
  compCode: string;
  dictName: string;
  /** @format int64 */
  id: number;
  /** @format int64 */
  labelId: number;
  labelName: string;
  /** @format int32 */
  sceneType: number;
}

/**
 * @description
 *   场景预案响应分级
 */
export interface SceneLevelInput {
  /**
   * @description
   *   响应级别；1:一级响应；2:二级响应；3:三级响应；4:四级响应
   * @format int32
   */
  level: number;
  /**
   * @description
   *   场景标签集合
   */
  sceneLabelList: Array<LabelListInput>;
}

/**
 * @description
 *   任务措施和通知策略详情出参
 */
export interface SceneNodeDetailsOutput {
  /**
   * @description
   *   id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否必须  1:必须
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   是否预置任务
   * @format int32
   */
  isPreTask: number;
  /**
   * @description
   *   适用级别
   */
  level: string;
  /**
   * @description
   *   模板id  为null  为自定义模板
   * @format int64
   */
  msgId: number;
  msgIdStr: string;
  /**
   * @description
   *   流程环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   流程环节名称
   */
  nodeName: string;
  /**
   * @description
   *   发布渠道  任务措施  1：app 2：icome   通知策略： 1：短信 2：外呼 3：icome
   */
  noticeType: string;
  /**
   * @description
   *   人员列表
   */
  personList: Array<EmergencyScenePerplanPersonOutput>;
  /**
   * @description
   *   预案id
   * @format int64
   */
  scenePreplanId: number;
  /**
   * @description
   *   任务描述
   */
  taskDescribe: string;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
  /**
   * @description
   *   任务措施类型 1：自定义 2:字典id
   * @format int32
   */
  taskType: number;
}

/**
 * @description
 *   场景预案之流程环节
 */
export interface SceneNodeInput {
  /**
   * @description
   *   流程环节描述
   */
  nodeDescribe: string;
  /**
   * @description
   *   流程环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   流程环节名称
   */
  nodeName: string;
  /**
   * @description
   *   预案id
   * @format int64
   */
  scenePreplanId: number;
  /**
   * @description
   *   类型；1:前置；2:后置
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   场景预案之流程环节
 */
export interface SceneNodeOutput {
  /**
   * @description
   *   流程环节描述
   */
  nodeDescribe: string;
  /**
   * @description
   *   流程环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   流程环节名称
   */
  nodeName: string;
  /**
   * @description
   *   预案id
   * @format int64
   */
  scenePreplanId: number;
  /**
   * @description
   *   任务措施数量
   * @format int32
   */
  taskNum: number;
}

/**
 * @description
 *   场景预案启动选择列表
 */
export interface ScenePreplanChooseOutput {
  /**
   * @description
   *   预案id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   预案名称
   */
  name: string;
  /**
   * @description
   *   响应级别及通讯录群组
   */
  sceneGroupList: Array<SceneGroupOutput>;
}

/**
 * @description
 *   节点和通知策略入参
 */
export interface SceneTaskNodeInput {
  /**
   * @description
   *   主键ids
   */
  ids: Array<number>;
  /**
   * @description
   *   是否必须   1：必须
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   响应级别
   */
  level: string;
  /**
   * @description
   *   节点id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   任务措施  发布渠道（1：app 2： icome代办  通知策略： 1：短信 2：外呼 3：icome
   * @format int32
   */
  noticeType: number;
  /**
   * @description
   *   预案id
   * @format int64
   */
  preplanId: number;
  /**
   * @description
   *   模糊查询
   */
  strLike: string;
}

/**
 * @description
 *   消息置顶
 */
export interface SetTopReqDTO {
  /**
   * @description
   *   消息主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   置顶标志 0-取消置顶 1-置顶
   * @format int32
   */
  topFlag: number;
}

/**
 * @description
 *   临时补气点
 */
export interface ShortSupplyInput {
  address: string;
  companyCode: string;
  eventCode: string;
  /** @format int64 */
  id: number;
  latitude: string;
  longitude: string;
  remark: string;
}

/**
 * @description
 *   确认人员选择（带路径规划版）
 */
export interface ShowDangerWoUserPositionInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   事件纬度
   */
  eventLat: number;
  /**
   * @description
   *   事件经度
   */
  eventLng: number;
  /**
   * @description
   *   组织编码
   */
  organCode: string;
}

/**
 * @description
 *   任务启动 任务实体
 */
export interface StartTaskExampleInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   响应级别
   * @format int32
   */
  level: number;
  /** @format int64 */
  nodeId: number;
  /**
   * @description
   *   预案id
   * @format int64
   */
  preplanId: number;
  /**
   * @description
   *   任务集合
   */
  taskInputs: Array<StartTaskInput>;
}

/**
 * @description
 *   启动任务实体
 */
export interface StartTaskInput {
  /**
   * @description
   *   描述
   */
  content: string;
  /**
   * @description
   *   节点id
   * @format int64
   */
  nodeId: number;
  nodeName: string;
  /**
   * @description
   *   集合
   */
  personInputs: Array<TaskPersonInput>;
  /**
   * @description
   *   发布渠道（1:app工单；2:icome待办），多个逗号分隔
   */
  publishMethod: string;
  /**
   * @description
   *   任务id
   * @format int64
   */
  taskId: number;
  taskName: string;
  /**
   * @description
   *   任务状态 1：待发布 2 执行中  3 已完成  4：已取消  5 草稿
   * @format int32
   */
  taskStatus: number;
  /**
   * @description
   *   任务类型 1：任务 2：信息  3：自建任务 默认：3
   * @format int32
   */
  taskType: number;
}

/**
 * @description
 *   站组织
 */
export interface Station {
  /**
   * @description
   *   站点id
   * @format int32
   */
  locId: number;
  /**
   * @description
   *   站组织编码
   */
  stationCode: string;
  /**
   * @description
   *   站组织名称
   */
  stationName: string;
}

/**
 * @description
 *   预案下级单位
 */
export interface StationListOutput {
  /**
   * @description
   *   厂站编码
   */
  stationCode: string;
  /**
   * @description
   *   厂站名称
   */
  stationName: string;
}

/**
 * @description
 *   物资批量缺失
 */
export interface SuppliesBatchReq {
  suppliesIdList: Array<number>;
}

/**
 * @description
 *   查询车辆点检物资分类
 */
export interface SuppliesCategoryReq {
  /**
   * @description
   *   点检日期 格式：yyyy-MM-dd
   */
  inspectDate: string;
  /**
   * @description
   *   车牌
   */
  licensePlate: string;
}

/**
 * @description
 *   物资反馈
 */
export interface SuppliesFeedbackReq {
  /**
   * @description
   *   反馈内容
   */
  content: string;
  /**
   * @description
   *   物资id
   * @format int64
   */
  suppliesId: number;
}

/**
 * @description
 *   查询物资信息
 */
export interface SuppliesInspectionCategoryVO {
  /**
   * @description
   *   分类名称
   */
  categoryName: string;
  /**
   * @description
   *   分类全路径
   */
  categoryPath: string;
  /**
   * @description
   *   下级
   */
  children: Array<SuppliesInspectionCategoryVO>;
  /**
   * @description
   *   状态 0-未完成 1-已完成
   * @format int32
   */
  status: number;
  /**
   * @description
   *   物资总数
   * @format int32
   */
  suppliesCount: number;
}

/**
 * @description
 *   物资完好
 */
export interface SuppliesIntactReq {
  /**
   * @description
   *   物资id
   * @format int64
   */
  suppliesId: number;
}

/**
 * @description
 *   物资缺失
 */
export interface SuppliesLackReq {
  /**
   * @description
   *   反馈内容
   */
  content: string;
  /**
   * @description
   *   数量
   * @format int32
   */
  num: number;
  /**
   * @description
   *   物资id
   * @format int64
   */
  suppliesId: number;
}

/**
 * @description
 *   补气点入参
 */
export interface SupplyGasInput {
  compCode: string;
  eventCode: string;
  gasCode: string;
  /** @format int64 */
  gasId: number;
  /** @format int32 */
  gasType: number;
  id: string;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
}

/**
 * @description
 *   入参
 */
export interface TaskInput {
  /**
   * @description
   *   公司编码
   */
  companyCode: string;
  /**
   * @description
   *   事件id
   * @format int64
   */
  eventId: number;
  /**
   * @description
   *   节点id 任务措施-> 0 为 启动中的   10 为终止响应    通知策略  9 = 应急启动  10 应急完成
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   预案id
   * @format int64
   */
  preplanId: number;
  /**
   * @description
   *   1 = 任务措施 2 = 通知策略
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   获取默认策略
 */
export interface TaskOutput {
  /**
   * @description
   *   是否必须 1:必须
   * @format int32
   */
  isNeed: number;
  /**
   * @description
   *   是否预置
   * @format int32
   */
  isPreTask: number;
  /**
   * @description
   *   环节id
   * @format int64
   */
  nodeId: number;
  /**
   * @description
   *   环节名称
   */
  nodeName: string;
  /**
   * @description
   *   任务名称
   */
  taskName: string;
  /**
   * @description
   *   是否已存在  1:存在
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   任务人员入参
 */
export interface TaskPersonInput {
  /**
   * @description
   *   itcode
   */
  itcode: string;
  /**
   * @description
   *   手机号
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
   *   角色名称
   */
  roleName: string;
  /**
   * @description
   *   真实姓名
   */
  username: string;
}

/**
 * @description
 *   终止任务人员
 */
export interface TerminationPersonInput {
  dealMobile: string;
  dealUserAccount: string;
  /** @format int64 */
  dealUserId: number;
  dealUserName: string;
}

/**
 * @description
 *   第三方施工实体
 */
export interface ThirdConstructionOutput {
  /**
   * @description
   *   地址
   */
  address: string;
  ccode: string;
  /**
   * @description
   *   code
   */
  code: string;
  /**
   * @description
   *   id
   * @format int64
   */
  detailId: number;
  /** @format int64 */
  id: number;
  /**
   * @description
   *   纬度
   */
  latitude: number;
  /**
   * @description
   *   管控级别
   */
  level: string;
  /**
   * @description
   *   经度
   */
  longitude: number;
  /**
   * @description
   *   施工点名称
   */
  name: string;
  /**
   * @description
   *   备注
   */
  remark: string;
  /**
   * @description
   *   上报人电话
   */
  reportPhone: string;
  /**
   * @description
   *   上报时间
   */
  reportTime: string;
  /**
   * @description
   *   上报人
   */
  reportUserName: string;
  /**
   * @description
   *   工单状态
   */
  state: string;
  /**
   * @description
   *   责任人信息
   */
  thirdDutyOutputs: Array<ThirdDutyOutput>;
  thirdDutyOutputsJson: string;
}

/**
 * @description
 *   上报人联系方式
 */
export interface ThirdDutyOutput {
  /**
   * @description
   *   责任人电话
   */
  telephone: string;
  /**
   * @description
   *   责任人名称
   */
  userName: string;
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

/**
 * @description
 *   车辆信息实体
 */
export interface VehicleInfo {
  /**
   * @description
   *   所属公司编码
   */
  companyCode: string;
  /**
   * @description
   *   车辆唯一标识
   * @format int64
   */
  id: number;
  /**
   * @description
   *   是否需要物资点检 0-需要 1-不需要
   * @format int32
   */
  inspection: number;
  /**
   * @description
   *   异常
   */
  inspectionSummaryList: Array<string>;
  /**
   * @description
   *   车牌号
   */
  licensePlate: string;
  /**
   * @description
   *   车辆负责人手机号
   */
  phone: string;
  /**
   * @description
   *   车辆负责人职位ID
   * @format int64
   */
  positionId: number;
  /**
   * @description
   *   所属区域名称
   */
  region: string;
  /**
   * @description
   *   车辆负责人名称
   */
  username: string;
  /**
   * @description
   *   车辆分类标签
   */
  vehicleLabel: string;
}

/**
 * @description
 *   车辆位置
 */
export interface VehicleLocationOutput {
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
  /**
   * @description
   *   车辆类型:1抢险车,2补汽车
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   获取车辆地图上显示的信息
 */
export interface VehicleMapOutput {
  /**
   * @description
   *   所属公司名称
   */
  companyName: string;
  /**
   * @description
   *   车牌号
   */
  licensePlate: string;
  /**
   * @description
   *   位置更新时间
   */
  locationUpdateTime: string;
  /**
   * @description
   *   车辆负责人手机号
   */
  phone: string;
  /**
   * @description
   *   所属区域名称
   */
  region: string;
  /**
   * @description
   *   车辆负责人名称
   */
  username: string;
  /**
   * @description
   *   车辆分类标签
   */
  vehicleLabel: string;
}

/**
 * @description
 *   查询车辆清单
 */
export interface VehicleSortInput {
  /**
   * @description
   *   所属公司编码
   */
  companyCode: string;
  /**
   * @description
   *   所属实体编码
   */
  entityCode: string;
  /**
   * @description
   *   关键词
   */
  keywords: string;
}

/**
 * @description
 *   车辆清单
 */
export interface VehicleSortOutput {
  /**
   * @description
   *   所属公司名称
   */
  companyName: string;
  /**
   * @description
   *   车辆数量
   * @format int32
   */
  number: number;
  /**
   * @description
   *   车辆数量
   */
  vehicleInfoList: Array<VehicleInfo>;
}

/**
 * @description
 *   车辆详情
 */
export interface VehicleTrackDetailOutput {
  /**
   * @description
   *   方向
   * @format int32
   */
  direction: number;
  /**
   * @description
   *   时间
   */
  gpsTime: string;
  /**
   * @description
   *   海拔
   * @format int32
   */
  height: number;
  /**
   * @description
   *   行驶时长
   */
  hours: string;
  /**
   * @description
   *   纵坐标
   */
  latitude: number;
  /**
   * @description
   *   车牌号
   */
  licensePlate: string;
  /**
   * @description
   *   横坐标
   */
  longitude: number;
  /**
   * @description
   *   墨卡托横坐标
   */
  mercatorX: number;
  /**
   * @description
   *   墨卡托纵坐标
   */
  mercatorY: number;
  /**
   * @description
   *   行驶里程，单位公里
   */
  mileage: number;
  /**
   * @description
   *   速度
   * @format int32
   */
  speed: number;
}

/**
 * @description
 *   车辆轨迹信息
 */
export interface VehicleTrackInput {
  /**
   * @description
   *   结束时间
   */
  endTime: string;
  /**
   * @description
   *   车牌号
   */
  licensePlate: string;
  /**
   * @description
   *   开始时间
   */
  startTime: string;
}

/**
 * @description
 *   车辆轨迹详情
 */
export interface VehicleTrackOutput {
  /**
   * @description
   *   轨迹详情
   */
  details: Array<VehicleTrackDetailOutput>;
  /**
   * @description
   *   总数
   * @format int32
   */
  total: number;
  /**
   * @description
   *   总里程，单位公里
   */
  totalMileage: number;
}

export interface View {
  contentType: string;
}

/**
 * @description
 *   智能提醒人员信息
 */
export interface WarningMsgInput {
  companyCode: string;
  eventId: string;
  itcode: string;
  phone: string;
  userName: string;
}

/**
 * @description
 *   查询消息列表
 */
export interface WarningMsgQueryDTO {
  /**
   * @description
   *   应急事件id
   * @format int64
   */
  emergencyId: number;
}

/**
 * @description
 *   提醒信息
 */
export interface WarningMsgVO {
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number;
  /**
   * @description
   *   消息内容
   */
  msgContent: string;
  /**
   * @description
   *   是否置顶 0-否 1-是
   * @format int32
   */
  topFlag: number;
}

/**
 * @description
 *   分页参数
 */
export interface PageResultOutputCheckRecordInfo {
  data: Array<CheckRecordInfo>;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/**
 * @description
 *   分页参数
 */
export interface PageResultOutputEmergencyEventGroupOutput {
  data: Array<EmergencyEventGroupOutput>;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/**
 * @description
 *   分页参数
 */
export interface PageResultOutputEmergencyEventOutput {
  data: Array<EmergencyEventOutput>;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/**
 * @description
 *   分页参数
 */
export interface PageResultOutputEmergencyFocusAreaDetailsOutput {
  data: Array<EmergencyFocusAreaDetailsOutput>;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/**
 * @description
 *   分页参数
 */
export interface PageResultOutputEmergencyPreplanListOutput {
  data: Array<EmergencyPreplanListOutput>;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/**
 * @description
 *   分页参数
 */
export interface PageResultOutputEmergencyScenePreplanOutput {
  data: Array<EmergencyScenePreplanOutput>;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/**
 * @description
 *   分页参数
 */
export interface PageResultOutputGoodsDeviceListOutput {
  data: Array<GoodsDeviceListOutput>;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/**
 * @description
 *   分页参数
 */
export interface PageResultOutputGoodsInfo {
  data: Array<GoodsInfo>;
  /** @format int32 */
  pageIndex: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
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

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputDetectionDetailOutput {
  code: string;
  data: DetectionDetailOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputDeviceDict {
  code: string;
  data: DeviceDict;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputEmergencyDetectionOutput {
  code: string;
  data: EmergencyDetectionOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputEmergencyEventAppListDataOutput {
  code: string;
  data: EmergencyEventAppListDataOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputEmergencyWeatherOutput {
  code: string;
  data: EmergencyWeatherOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputGoodsDetailOutput {
  code: string;
  data: GoodsDetailOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputGoodsDeviceCountOutput {
  code: string;
  data: GoodsDeviceCountOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputGoodsDeviceDetailOutput {
  code: string;
  data: GoodsDeviceDetailOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListCompany {
  code: string;
  data: Array<Company>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListDispatchResourceOutput {
  code: string;
  data: Array<DispatchResourceOutput>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListDutyPositionDto {
  code: string;
  data: Array<DutyPositionDto>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListEmergencyDetectionOutput {
  code: string;
  data: Array<EmergencyDetectionOutput>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListEventDeviceOutput {
  code: string;
  data: Array<EventDeviceOutput>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListEventGoodsOutput {
  code: string;
  data: Array<EventGoodsOutput>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListGasSourceOutput {
  code: string;
  data: Array<GasSourceOutput>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListGoodsOutput {
  code: string;
  data: Array<GoodsOutput>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListGoods {
  code: string;
  data: Array<Goods>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListOrgan {
  code: string;
  data: Array<Organ>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputListStation {
  code: string;
  data: Array<Station>;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputMapStringObject {
  code: string;
  data: any;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputMethaneConcentrationOutput {
  code: string;
  data: MethaneConcentrationOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputNightModeOutput {
  code: string;
  data: NightModeOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputNightModeValidOutput {
  code: string;
  data: NightModeValidOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputProgressNoticeCnfOutput {
  code: string;
  data: ProgressNoticeCnfOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputRemindDetailOutput {
  code: string;
  data: RemindDetailOutput;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputInt {
  code: string;
  /** @format int32 */
  data: number;
  msg: string;
  success: boolean;
}

/**
 * @description
 *   返回值封装类
 */
export interface ResultOutputString {
  code: string;
  data: string;
  msg: string;
  success: boolean;
}
