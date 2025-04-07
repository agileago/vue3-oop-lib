/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import {
  emergencyRequester as requester,
  type AxiosRequestConfig,
} from "../http";
import type {
  Link,
  EventLevelAdjustInput,
  AdjustInput,
  AdjustOutput,
  EventLevelAdjustOutput,
  EventLevelAdjustListOutput,
  CompanyStationOrganInput,
  ResultOutputListCompany,
  CallInput,
  ResultOutputListStation,
  ControlPlanInput,
  ControlPlanOutput,
  ResultOutput,
  ResultOutputEmergencyDetectionOutput,
  ResultOutputDetectionDetailOutput,
  EmergencyDetectionInput,
  ResultOutputListEmergencyDetectionOutput,
  GasSourceInput,
  ResultOutputListGasSourceOutput,
  ResultOutputEmergencyWeatherOutput,
  InspectCarInput,
  InspectCarOutput,
  MethaneConcentrationInput,
  ResultOutputMethaneConcentrationOutput,
  GoodsRemindInput,
  ResultOutputString,
  ResultOutputInt,
  ExpireRemindInput,
  ResultOutputRemindDetailOutput,
  DailyChartInput,
  DeviceChartOutput,
  QueryPressureDeviceInput,
  PressureDeviceOutput,
  GoodsDeviceStockRecordsBatchInputDto,
  GoodsDeviceStockRecordsQueryOutput,
  GoodsDeviceStockRecordsOutInputDto,
  GoodsDeviceStockRecordsQueryInput,
  DeviceOutput,
  EventIcomeNodeInput,
  EmergencyDictDataInput,
  EmergencyDictDataOutput,
  IcomeInput,
  EmergencySceneNodeListOutput,
  DictDataOutput,
  DictDataEditableOutput,
  DictTypeInput,
  DispatchResourceInput,
  ResultOutputMapStringObject,
  DispatchInput,
  DispatchResourceOutput,
  WarningMsgInput,
  ChangeDutyReqInput,
  CheckInReqInput,
  DutyDateQueryInput,
  DutyOutput,
  PersonDutyQueryInput,
  PersonDutyCalendarQueryInput,
  PositionInsertedReqDTO,
  PositionGreenChannelFlagReqDTO,
  PositionStatusReqDTO,
  PositionVO,
  PositionDutyQueryDTO,
  DutyPositionVO,
  PositionQueryDTO,
  PageResultPositionVO,
  PositionUpdatedReqDTO,
  EmergencyEventInput,
  CarDispatchOutput,
  ContentInput,
  EmergencyCallCenterDetailOutput,
  GreenChannelOutput,
  CallCenterProcessResultOutput,
  RemindOrderInput,
  EmergencyEventConfirmInput,
  EmergencyEventOutput,
  EventDeviceListInput,
  ResultOutputListEventDeviceOutput,
  EventEndTaskDetailOutput,
  EmergencyEventPeopleOutput,
  EmergencyEventFeedbackOutput,
  EmergencyEventEntryOutput,
  EmergencyCompCodeOutput,
  EmergencyEventLocUserOutput,
  EmergencyEventDetailAppOutput,
  DetonationDetailsInput,
  DetonationDetailsOutput,
  DictLabelOutput,
  EmergencyEventAddressListOutput,
  CompanyTree,
  EmergencyEventIcomeInput,
  EmergencyEventLocNameOutput,
  EmergencyEventPositionOutput,
  NetworkShowDangerWoUserDTO,
  ShowDangerWoUserPositionInput,
  ThirdConstructionOutput,
  EventGoodsListInput,
  ResultOutputListEventGoodsOutput,
  EmergencyEventGroupInput,
  PageResultOutputEmergencyEventGroupOutput,
  EmergencyEventGroupOutput,
  IcomeFeedbackTaskInput,
  EmergencyEventIcomeOutput,
  EmergencyTaskListOutput,
  PageResultOutputEmergencyEventOutput,
  EmergencySearchByUserInput,
  ResultOutputEmergencyEventAppListDataOutput,
  EmergencyMobileEvolveOutput,
  EmergencyMsgInput,
  EmergencyPrePlanOutput,
  EmergencyPreplanDetailOutput,
  EmergencyTrafficInput,
  EmergencyTrafficOutput,
  EmergencyReciveInput,
  EmergencyReviewFileInput,
  EmergencyReviewFileOutput,
  FeedbackImgInput,
  EventNodeAddOrUpdInput,
  EmergencyTaskPersonInput,
  CancelTaskInput,
  EventNodeListOutput,
  EmergencyTaskListInput,
  PublishInput,
  EmergencyTaskInput,
  EmergencyTaskNumberOutput,
  EventTaskTypeOutput,
  EmergencyEventTerminationInput,
  EventUnNormalEndInput,
  EventIcomeInput,
  EventUnFinishNodeOutput,
  VehicleTrackInput,
  VehicleTrackOutput,
  EmergencyEventVideoInput,
  EmergencyEventVideoOutput,
  ExpertGroupQueryInput,
  ExpertGroupOutput,
  ExpertGroupSavedReqInput,
  ExpertQueryInput,
  ExpertOutput,
  SupplyGasInput,
  GisGasSupplyOutputDto,
  FocusAreaDetailsInput,
  PageResultOutputEmergencyFocusAreaDetailsOutput,
  VehicleLocationOutput,
  VehicleMapOutput,
  GisGasSupplyOutput,
  ResultOutputListGoods,
  GoodsInput,
  GoodsDelInput,
  GoodsDeviceInput,
  GoodsDeviceBatchDelInput,
  GoodsDeviceListInput,
  ResultOutputGoodsDeviceCountOutput,
  GoodsDeviceDelInput,
  ResultOutputGoodsDeviceDetailOutput,
  ResultOutputDeviceDict,
  PageResultOutputGoodsDeviceListOutput,
  GoodsListInput,
  ResultOutputListGoodsOutput,
  ResultOutputGoodsDetailOutput,
  EmergencyIcomeMsgInput,
  LngLatInput,
  ResultOutputListDispatchResourceOutput,
  LongLatInput,
  MapDeviceOutput,
  EventReportDetailOuput,
  EmergencyEventMergeInput,
  EmergencyMsgTemplateConfigInputDto,
  MsgTemplate,
  ExampleOutput,
  EmergencyMsgTemplateConfigOutput,
  MsgTemplateSaveInput,
  TypeOutput,
  QueryTypeInput,
  PageInfo,
  ResultOutputNightModeValidOutput,
  ResultOutputNightModeOutput,
  ResultOutputListDutyPositionDto,
  NightModeFomrInput,
  EmergencyNoticeRecordInput,
  EmergencyNoticeRecordOutput,
  EmergencyPreplanAddressListInputDto,
  EmergencyPreplanAddressListOutputDto,
  EmergencyNoticeInformationInputDto,
  ResponseInputDto,
  EmergencyFeedbackInputDto,
  EmergencyNoticeInformationOutputDto,
  ResponseOutputDto,
  ResponseNoticeOutputDto,
  EmergencyStartExecutorInfoOutput,
  ResponseSubmitOutputDto,
  NoticeRecordInput,
  PositionPersonQueryInput,
  PositionPersonOutput,
  PhoneCallSearchInput,
  PhoneCallRecordOutput,
  PhoneMsgRecordOutput,
  PipeAnalyseAddInput,
  PipeAnalyseMsgInput,
  PipeAnalyseOutput,
  EmergencyPipeStatusOutput,
  EmergencyPreplanAddInput,
  EmergencyPreplanAddOutput,
  MMdOrganizationOutput,
  EmergencyPreplanListInput,
  PageResultOutputEmergencyPreplanListOutput,
  EmergencyPreplanNewDetailOutput,
  EmergencyPreplanUpdateInput,
  StationListOutput,
  EmergencyProgressInput,
  EmergencyProcessAddOutput,
  EmergencyStatusInput,
  CallCenterProcessOutput,
  EmeProOrderFeedBackOutput,
  EmergencyProgressListOutput,
  EmergencyMobileFeedbackOutput,
  EmergencyProgressOutput,
  ResultOutputProgressNoticeCnfOutput,
  ProgressNoticeCnfInput,
  EmergencyMapPersonOutput,
  EmergencyReviewInput,
  EmergencyReviewOutput,
  SceneNodeInput,
  EmergencySceneNodeOutput,
  SceneNodeOutput,
  AddNodeTaskInput,
  EmergencySceneNoticeStrategyDetailsOutput,
  SceneTaskNodeInput,
  EmergencySceneNoticeStrategyOutput,
  SceneNodeDetailsOutput,
  CheckItcodeInput,
  TaskInput,
  TaskOutput,
  StartTaskExampleInput,
  EmergencySceneNodeTaskOutput,
  EmergencyEnterpriseDictLabelDataAddInput,
  AddLabelInput,
  AILabelInput,
  LabelNameModelOutput,
  BatchLabelToPreplanInput,
  PreplanLevelIutput,
  PreplanLevelOutput,
  RecommendPreplanInput,
  RecommendPreplanOutput,
  EmergencyEnterpriseDictLabelDataInput,
  AIDictLabelDataOutput,
  LabelWeightListOutput,
  EmergencyEnterpriseDictLabelDataOutput,
  LabelWeightListInput,
  EmergencyScenePreplanInput,
  FileUploadOutput,
  EmergencyScenePreplanListParamInput,
  PageResultOutputEmergencyScenePreplanOutput,
  SceneLabel,
  ScenePreplanChooseOutput,
  ShortSupplyInput,
  ResultOutputListOrgan,
  CarInspectionReq,
  InspectedCarReq,
  InspectedCarVO,
  SuppliesCategoryReq,
  SuppliesInspectionCategoryVO,
  CarInspectionDetailReq,
  CategorySuppliesVO,
  CarInspectionDetailVO,
  SuppliesFeedbackReq,
  SuppliesIntactReq,
  SuppliesBatchReq,
  SuppliesLackReq,
  EmergencyTerminationTaskInput,
  GoodsInfoInput,
  GoodsDetailQueryDTO,
  CheckDetail,
  GoodsCheckQueryDTO,
  PageResultOutputCheckRecordInfo,
  PageResultOutputGoodsInfo,
  GoodsTypeInfo,
  InitializeGoodsInput,
  VehicleInfo,
  VehicleSortInput,
  VehicleSortOutput,
  WarningMsgQueryDTO,
  WarningMsgVO,
  SetTopReqDTO,
} from "./definition";

type ApiEmergencyGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentOption =
  {
    /**
    @description
      f */
    f: string;
    /**
    @description
      isExact */
    isExact: boolean;
    /**
    @description
      layerId */
    layerId: string;
    /**
    @description
      objectId */
    objectId: string;
  };

/** @description response type for apiEmergencyGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccident */
interface ApiEmergencyGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentResponseSuccess =
  ApiEmergencyGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentResponse[200];
/**
 * @description
 *   爆管分析
 * @tags gis-controller
 * @produces *
 */
export const apiEmergencyGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccident =
  (
    option?: ApiEmergencyGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentResponseSuccess>(
      "/ServiceEngine/rest/services/NetServer/editgw/PipeAnalyse/accident",
      { method: "get", query: option },
      config
    );

type ApiEmergencyGetServiceEngineRestServicesNetServerEditgwMetasOption = {
  /**
    @description
      codes */
  codes: string;
  /**
    @description
      f */
  f: string;
};

/** @description response type for apiEmergencyGetServiceEngineRestServicesNetServerEditgwMetas */
interface ApiEmergencyGetServiceEngineRestServicesNetServerEditgwMetasResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetServiceEngineRestServicesNetServerEditgwMetasResponseSuccess =
  ApiEmergencyGetServiceEngineRestServicesNetServerEditgwMetasResponse[200];
/**
 * @description
 *   获取图层元数据
 * @tags gis-controller
 * @produces *
 */
export const apiEmergencyGetServiceEngineRestServicesNetServerEditgwMetas = (
  option?: ApiEmergencyGetServiceEngineRestServicesNetServerEditgwMetasOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetServiceEngineRestServicesNetServerEditgwMetasResponseSuccess>(
    "/ServiceEngine/rest/services/NetServer/editgw/metas",
    { method: "get", query: option },
    config
  );

/** @description request parameter type for apiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQuery */
interface ApiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQueryOption {
  /**
   * @description
   *   layerid
   */
  path: {
    /**
        @description
          layerid */
    layerid: string;
    /**
        @description
          serverName */
    serverName: string;
  };
}

/** @description request parameter type for apiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQuery */
interface ApiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQueryOption {
  /**
   * @description
   *   pipeNetLayerType
   */
  query: {
    /**
        @description
          pipeNetLayerType */
    pipeNetLayerType: string;
    /**
        @description
          returnGeometry */
    returnGeometry: boolean;
    /**
        @description
          where */
    where: string;
  };
}

/** @description response type for apiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQuery */
interface ApiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQueryResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQueryResponseSuccess =
  ApiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQueryResponse[200];
/**
 * @description
 *   单图层设备数据
 * @tags gis-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQuery =
  (
    option: ApiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQueryOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyPostServiceEngineRestServicesNetServerServerNameLayeridQueryResponseSuccess>(
      "/ServiceEngine/rest/services/NetServer/:serverName/:layerid/query",
      { method: "post", ...option },
      config
    );

/** @description response type for apiEmergencyGetActuator */
interface ApiEmergencyGetActuatorResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: {
      [propertyName: string]: Link;
    };
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetActuatorResponseSuccess =
  ApiEmergencyGetActuatorResponse[200];
/**
 * @description
 *   links
 * @tags web-mvc-links-handler
 * @produces application/json,application/vnd.spring-boot.actuator.v2+json,application/vnd.spring-boot.actuator.v3+json
 */
export const apiEmergencyGetActuator = (config?: AxiosRequestConfig) =>
  requester<ApiEmergencyGetActuatorResponseSuccess>(
    "/actuator",
    { method: "get" },
    config
  );

type ApiEmergencyGetActuatorHealthOption = {
  [propertyName: string]: string;
};

/** @description response type for apiEmergencyGetActuatorHealth */
interface ApiEmergencyGetActuatorHealthResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetActuatorHealthResponseSuccess =
  ApiEmergencyGetActuatorHealthResponse[200];
/**
 * @description
 *   handle
 * @tags operation-handler
 * @produces application/json,application/vnd.spring-boot.actuator.v2+json,application/vnd.spring-boot.actuator.v3+json
 */
export const apiEmergencyGetActuatorHealth = (
  option?: ApiEmergencyGetActuatorHealthOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetActuatorHealthResponseSuccess>(
    "/actuator/health/**",
    { method: "get", body: option },
    config
  );

type ApiEmergencyGetAddressAddressOption = {
  /**
    @description
      address */
  address: string;
};

/** @description response type for apiEmergencyGetAddressAddress */
interface ApiEmergencyGetAddressAddressResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetAddressAddressResponseSuccess =
  ApiEmergencyGetAddressAddressResponse[200];
/**
 * @description
 *   addressToLngLat
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetAddressAddress = (
  option?: ApiEmergencyGetAddressAddressOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetAddressAddressResponseSuccess>(
    "/address/:address",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostAdjustEventLevelOption = EventLevelAdjustInput;

/** @description response type for apiEmergencyPostAdjustEventLevel */
interface ApiEmergencyPostAdjustEventLevelResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostAdjustEventLevelResponseSuccess =
  ApiEmergencyPostAdjustEventLevelResponse[200];
/**
 * @description
 *   调整响应级别
 * @tags 调整险情分级
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostAdjustEventLevel = (
  option?: ApiEmergencyPostAdjustEventLevelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostAdjustEventLevelResponseSuccess>(
    "/adjust/eventLevel",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostAdjustQueryAdjustListOption = AdjustInput;

/** @description response type for apiEmergencyPostAdjustQueryAdjustList */
interface ApiEmergencyPostAdjustQueryAdjustListResponse {
  /**
   * @description
   *   OK
   */
  200: AdjustOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostAdjustQueryAdjustListResponseSuccess =
  ApiEmergencyPostAdjustQueryAdjustListResponse[200];
/**
 * @description
 *   查询调整险情分级后数据
 * @tags 调整险情分级
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostAdjustQueryAdjustList = (
  option?: ApiEmergencyPostAdjustQueryAdjustListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostAdjustQueryAdjustListResponseSuccess>(
    "/adjust/queryAdjustList",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetAdjustQueryLastInfoIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetAdjustQueryLastInfoId */
interface ApiEmergencyGetAdjustQueryLastInfoIdResponse {
  /**
   * @description
   *   OK
   */
  200: EventLevelAdjustOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetAdjustQueryLastInfoIdResponseSuccess =
  ApiEmergencyGetAdjustQueryLastInfoIdResponse[200];
/**
 * @description
 *   查询最近一次险情分级数据（用于回显）
 * @tags 调整险情分级
 * @produces *
 */
export const apiEmergencyGetAdjustQueryLastInfoId = (
  option?: ApiEmergencyGetAdjustQueryLastInfoIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetAdjustQueryLastInfoIdResponseSuccess>(
    "/adjust/queryLastInfo/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetAdjustQueryListIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetAdjustQueryListId */
interface ApiEmergencyGetAdjustQueryListIdResponse {
  /**
   * @description
   *   OK
   */
  200: EventLevelAdjustListOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetAdjustQueryListIdResponseSuccess =
  ApiEmergencyGetAdjustQueryListIdResponse[200];
/**
 * @description
 *   查询所有险情分级数据
 * @tags 调整险情分级
 * @produces *
 */
export const apiEmergencyGetAdjustQueryListId = (
  option?: ApiEmergencyGetAdjustQueryListIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetAdjustQueryListIdResponseSuccess>(
    "/adjust/queryList/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostAllCompanyOption = CompanyStationOrganInput;

/** @description response type for apiEmergencyPostAllCompany */
interface ApiEmergencyPostAllCompanyResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListCompany;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostAllCompanyResponseSuccess =
  ApiEmergencyPostAllCompanyResponse[200];
/**
 * @description
 *   实体下全部公司
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostAllCompany = (
  option?: ApiEmergencyPostAllCompanyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostAllCompanyResponseSuccess>(
    "/all/company",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostCallOption = CallInput;

/** @description response type for apiEmergencyPostCall */
interface ApiEmergencyPostCallResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostCallResponseSuccess = ApiEmergencyPostCallResponse[200];
/**
 * @description
 *   call
 * @tags callcenter-bill-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostCall = (
  option?: ApiEmergencyPostCallOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostCallResponseSuccess>(
    "/call",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostCallOutCommonOption = {
  companyCode: string;
  msg: string;
  /**
    @format int32 */
  scene: number;
  /**
    @format int64 */
  taskId: number;
  /**
    @description
      类型，1：外呼，2：短信
    @format int32 */
  type: number;
  /**
    @description
      姓名 */
  "users[0].name": string;
  /**
    @description
      电话号码 */
  "users[0].phoneNum": string;
};

/** @description response type for apiEmergencyPostCallOutCommon */
interface ApiEmergencyPostCallOutCommonResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: string;
  };
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostCallOutCommonResponseSuccess =
  ApiEmergencyPostCallOutCommonResponse[200];
/**
 * @description
 *   短信外呼对外接口
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostCallOutCommon = (
  option?: ApiEmergencyPostCallOutCommonOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostCallOutCommonResponseSuccess>(
    "/callOut/common",
    { method: "post", query: option },
    config
  );

type ApiEmergencyPostCallOutOutOption = {
  address_list_ids: Array<number>;
  companyCode: string;
  msg: string;
  /**
    @description
      姓名 */
  "no_id_users[0].name": string;
  /**
    @description
      电话号码 */
  "no_id_users[0].phone_num": string;
  /**
    @format int32 */
  scene: number;
  /**
    @format int64 */
  taskId: number;
  /**
    @format int64 */
  template_id: number;
  /**
    @description
      类型，1：呼叫，2：短信
    @format int32 */
  type: number;
  typeCode: string;
};

/** @description response type for apiEmergencyPostCallOutOut */
interface ApiEmergencyPostCallOutOutResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: string;
  };
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostCallOutOutResponseSuccess =
  ApiEmergencyPostCallOutOutResponse[200];
/**
 * @description
 *   返回信息，KEY：姓名(手机号)，VALUE:OK(成功),其它错误原因
 *   呼叫短信
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostCallOutOut = (
  option?: ApiEmergencyPostCallOutOutOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostCallOutOutResponseSuccess>(
    "/callOut/out",
    { method: "post", query: option },
    config
  );

type ApiEmergencyPostCallOutSpecialOption = {
  companyCode: string;
  msg: string;
  /**
    @format int32 */
  scene: number;
  /**
    @format int64 */
  taskId: number;
  /**
    @description
      类型，1：外呼，2：短信
    @format int32 */
  type: number;
  /**
    @description
      姓名 */
  "users[0].name": string;
  /**
    @description
      电话号码 */
  "users[0].phoneNum": string;
};

/** @description response type for apiEmergencyPostCallOutSpecial */
interface ApiEmergencyPostCallOutSpecialResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: string;
  };
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostCallOutSpecialResponseSuccess =
  ApiEmergencyPostCallOutSpecialResponse[200];
/**
 * @description
 *   短信外呼对外接口(聚安卫士使用，支持给座机打电话)
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostCallOutSpecial = (
  option?: ApiEmergencyPostCallOutSpecialOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostCallOutSpecialResponseSuccess>(
    "/callOut/special",
    { method: "post", query: option },
    config
  );

type ApiEmergencyGetCarEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiEmergencyGetCarEcode */
interface ApiEmergencyGetCarEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetCarEcodeResponseSuccess =
  ApiEmergencyGetCarEcodeResponse[200];
/**
 * @description
 *   selectCars
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetCarEcode = (
  option?: ApiEmergencyGetCarEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetCarEcodeResponseSuccess>(
    "/car/:ecode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetChangeGasEventCodeGasIdOption = {
  /**
    @description
      eventCode */
  eventCode: string;
  /**
    @description
      gasId
    @format int64 */
  gasId: number;
};

/** @description response type for apiEmergencyGetChangeGasEventCodeGasId */
interface ApiEmergencyGetChangeGasEventCodeGasIdResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetChangeGasEventCodeGasIdResponseSuccess =
  ApiEmergencyGetChangeGasEventCodeGasIdResponse[200];
/**
 * @description
 *   changeGas
 * @tags dispatch-controller
 * @produces *
 */
export const apiEmergencyGetChangeGasEventCodeGasId = (
  option?: ApiEmergencyGetChangeGasEventCodeGasIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetChangeGasEventCodeGasIdResponseSuccess>(
    "/change/gas/:eventCode/:gasId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetChangeTransportationEventIdTransportationOption = {
  /**
    @description
      eventId */
  eventId: string;
  /**
    @description
      transportation
    @format int32 */
  transportation: number;
};

/** @description response type for apiEmergencyGetChangeTransportationEventIdTransportation */
interface ApiEmergencyGetChangeTransportationEventIdTransportationResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetChangeTransportationEventIdTransportationResponseSuccess =
  ApiEmergencyGetChangeTransportationEventIdTransportationResponse[200];
/**
 * @description
 *   changeTransportation
 * @tags dispatch-controller
 * @produces *
 */
export const apiEmergencyGetChangeTransportationEventIdTransportation = (
  option?: ApiEmergencyGetChangeTransportationEventIdTransportationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetChangeTransportationEventIdTransportationResponseSuccess>(
    "/change/transportation/:eventId/:transportation",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostCompanyAllStationOption = CompanyStationOrganInput;

/** @description response type for apiEmergencyPostCompanyAllStation */
interface ApiEmergencyPostCompanyAllStationResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListStation;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostCompanyAllStationResponseSuccess =
  ApiEmergencyPostCompanyAllStationResponse[200];
/**
 * @description
 *   公司下的全部站组织
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostCompanyAllStation = (
  option?: ApiEmergencyPostCompanyAllStationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostCompanyAllStationResponseSuccess>(
    "/company/all/station",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostControlPlanListOption = ControlPlanInput;

/** @description response type for apiEmergencyPostControlPlanList */
interface ApiEmergencyPostControlPlanListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ControlPlanOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostControlPlanListResponseSuccess =
  ApiEmergencyPostControlPlanListResponse[200];
/**
 * @description
 *   getControlPlans
 * @tags emergency-control-plan-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostControlPlanList = (
  option?: ApiEmergencyPostControlPlanListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostControlPlanListResponseSuccess>(
    "/control/plan/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetControlPlanBaseCodeOption = {
  /**
    @description
      baseCode */
  baseCode: string;
};

/** @description response type for apiEmergencyGetControlPlanBaseCode */
interface ApiEmergencyGetControlPlanBaseCodeResponse {
  /**
   * @description
   *   OK
   */
  200: ControlPlanOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetControlPlanBaseCodeResponseSuccess =
  ApiEmergencyGetControlPlanBaseCodeResponse[200];
/**
 * @description
 *   getControlPlanDetail
 * @tags emergency-control-plan-controller
 * @produces *
 */
export const apiEmergencyGetControlPlanBaseCode = (
  option?: ApiEmergencyGetControlPlanBaseCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetControlPlanBaseCodeResponseSuccess>(
    "/control/plan/:baseCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetConvertCoordinateTypeXYOption = {
  /**
    @description
      type
    @format int32 */
  type: number;
  /**
    @description
      x */
  x: string;
  /**
    @description
      y */
  y: string;
};

/** @description response type for apiEmergencyGetConvertCoordinateTypeXY */
interface ApiEmergencyGetConvertCoordinateTypeXYResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: number;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetConvertCoordinateTypeXYResponseSuccess =
  ApiEmergencyGetConvertCoordinateTypeXYResponse[200];
/**
 * @description
 *   convertCoordinate
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetConvertCoordinateTypeXY = (
  option?: ApiEmergencyGetConvertCoordinateTypeXYOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetConvertCoordinateTypeXYResponseSuccess>(
    "/convert/coordinate/:type/:x/:y",
    { method: "get", path: option },
    config
  );

/** @description response type for apiEmergencyGetDealEventNameHistory */
interface ApiEmergencyGetDealEventNameHistoryResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDealEventNameHistoryResponseSuccess =
  ApiEmergencyGetDealEventNameHistoryResponse[200];
/**
 * @description
 *   dealEventNameHistory
 * @tags deal-history-controller
 * @produces *
 */
export const apiEmergencyGetDealEventNameHistory = (
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDealEventNameHistoryResponseSuccess>(
    "/deal/eventName/history",
    { method: "get" },
    config
  );

type ApiEmergencyGetDetectionCpmoLayerCpmoCopLayerStatesOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
  /**
    @description
      layerStates */
  layerStates: boolean;
};

/** @description response type for apiEmergencyGetDetectionCpmoLayerCpmoCopLayerStates */
interface ApiEmergencyGetDetectionCpmoLayerCpmoCopLayerStatesResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDetectionCpmoLayerCpmoCopLayerStatesResponseSuccess =
  ApiEmergencyGetDetectionCpmoLayerCpmoCopLayerStatesResponse[200];
/**
 * @description
 *   设置实体图层状态
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiEmergencyGetDetectionCpmoLayerCpmoCopLayerStates = (
  option?: ApiEmergencyGetDetectionCpmoLayerCpmoCopLayerStatesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDetectionCpmoLayerCpmoCopLayerStatesResponseSuccess>(
    "/detection/cpmoLayer/:cpmoCop/:layerStates",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetDetectionDetectionDIdOption = {
  /**
    @description
      dId
    @format int64 */
  dId: number;
};

/** @description response type for apiEmergencyGetDetectionDetectionDId */
interface ApiEmergencyGetDetectionDetectionDIdResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputEmergencyDetectionOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDetectionDetectionDIdResponseSuccess =
  ApiEmergencyGetDetectionDetectionDIdResponse[200];
/**
 * @description
 *   调压器/阀井
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiEmergencyGetDetectionDetectionDId = (
  option?: ApiEmergencyGetDetectionDetectionDIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDetectionDetectionDIdResponseSuccess>(
    "/detection/detection/:dId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetDetectionDetectionDetailEqptcodeOption = {
  /**
    @description
      eqptcode */
  eqptcode: string;
};

/** @description response type for apiEmergencyGetDetectionDetectionDetailEqptcode */
interface ApiEmergencyGetDetectionDetectionDetailEqptcodeResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputDetectionDetailOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDetectionDetectionDetailEqptcodeResponseSuccess =
  ApiEmergencyGetDetectionDetectionDetailEqptcodeResponse[200];
/**
 * @description
 *   根据设备编码查询调压器/阀井设备详情
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiEmergencyGetDetectionDetectionDetailEqptcode = (
  option?: ApiEmergencyGetDetectionDetectionDetailEqptcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDetectionDetectionDetailEqptcodeResponseSuccess>(
    "/detection/detectionDetail/:eqptcode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostDetectionDetectionListOption = EmergencyDetectionInput;

/** @description response type for apiEmergencyPostDetectionDetectionList */
interface ApiEmergencyPostDetectionDetectionListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListEmergencyDetectionOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDetectionDetectionListResponseSuccess =
  ApiEmergencyPostDetectionDetectionListResponse[200];
/**
 * @description
 *   调压器/阀井列表
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDetectionDetectionList = (
  option?: ApiEmergencyPostDetectionDetectionListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDetectionDetectionListResponseSuccess>(
    "/detection/detectionList",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDetectionGasSourceListOption = GasSourceInput;

/** @description response type for apiEmergencyPostDetectionGasSourceList */
interface ApiEmergencyPostDetectionGasSourceListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListGasSourceOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDetectionGasSourceListResponseSuccess =
  ApiEmergencyPostDetectionGasSourceListResponse[200];
/**
 * @description
 *   气源列表
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDetectionGasSourceList = (
  option?: ApiEmergencyPostDetectionGasSourceListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDetectionGasSourceListResponseSuccess>(
    "/detection/gasSourceList",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetDetectionGetCpmoLayerCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiEmergencyGetDetectionGetCpmoLayerCpmoCop */
interface ApiEmergencyGetDetectionGetCpmoLayerCpmoCopResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDetectionGetCpmoLayerCpmoCopResponseSuccess =
  ApiEmergencyGetDetectionGetCpmoLayerCpmoCopResponse[200];
/**
 * @description
 *   获取实体图层状态
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiEmergencyGetDetectionGetCpmoLayerCpmoCop = (
  option?: ApiEmergencyGetDetectionGetCpmoLayerCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDetectionGetCpmoLayerCpmoCopResponseSuccess>(
    "/detection/getCpmoLayer/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetDetectionGetTrafficEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetDetectionGetTrafficEventId */
interface ApiEmergencyGetDetectionGetTrafficEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: string;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDetectionGetTrafficEventIdResponseSuccess =
  ApiEmergencyGetDetectionGetTrafficEventIdResponse[200];
/**
 * @description
 *   获取路况信息（石明珠）
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiEmergencyGetDetectionGetTrafficEventId = (
  option?: ApiEmergencyGetDetectionGetTrafficEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDetectionGetTrafficEventIdResponseSuccess>(
    "/detection/getTraffic/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetDetectionGetWeatherOption = {
  /**
    @description
      districtId */
  districtId: string;
  /**
    @description
      lat */
  lat: string;
  /**
    @description
      lng */
  lng: string;
};

/** @description response type for apiEmergencyGetDetectionGetWeather */
interface ApiEmergencyGetDetectionGetWeatherResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputEmergencyWeatherOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDetectionGetWeatherResponseSuccess =
  ApiEmergencyGetDetectionGetWeatherResponse[200];
/**
 * @description
 *   获取天气信息
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiEmergencyGetDetectionGetWeather = (
  option?: ApiEmergencyGetDetectionGetWeatherOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDetectionGetWeatherResponseSuccess>(
    "/detection/getWeather",
    { method: "get", query: option },
    config
  );

type ApiEmergencyPostDetectionInspectCarListOption = InspectCarInput;

/** @description response type for apiEmergencyPostDetectionInspectCarList */
interface ApiEmergencyPostDetectionInspectCarListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<InspectCarOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDetectionInspectCarListResponseSuccess =
  ApiEmergencyPostDetectionInspectCarListResponse[200];
/**
 * @description
 *   inspectCarList
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDetectionInspectCarList = (
  option?: ApiEmergencyPostDetectionInspectCarListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDetectionInspectCarListResponseSuccess>(
    "/detection/inspectCar/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDetectionMethaneConcentrationOption =
  MethaneConcentrationInput;

/** @description response type for apiEmergencyPostDetectionMethaneConcentration */
interface ApiEmergencyPostDetectionMethaneConcentrationResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputMethaneConcentrationOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDetectionMethaneConcentrationResponseSuccess =
  ApiEmergencyPostDetectionMethaneConcentrationResponse[200];
/**
 * @description
 *   甲烷浓度
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDetectionMethaneConcentration = (
  option?: ApiEmergencyPostDetectionMethaneConcentrationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDetectionMethaneConcentrationResponseSuccess>(
    "/detection/methaneConcentration",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDetectionMethaneConcentrationCurveOption =
  MethaneConcentrationInput;

/** @description response type for apiEmergencyPostDetectionMethaneConcentrationCurve */
interface ApiEmergencyPostDetectionMethaneConcentrationCurveResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputMethaneConcentrationOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDetectionMethaneConcentrationCurveResponseSuccess =
  ApiEmergencyPostDetectionMethaneConcentrationCurveResponse[200];
/**
 * @description
 *   甲烷浓度曲线
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDetectionMethaneConcentrationCurve = (
  option?: ApiEmergencyPostDetectionMethaneConcentrationCurveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDetectionMethaneConcentrationCurveResponseSuccess>(
    "/detection/methaneConcentrationCurve",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDetectionReloadDectionDeviceOption =
  EmergencyDetectionInput;

/** @description response type for apiEmergencyPostDetectionReloadDectionDevice */
interface ApiEmergencyPostDetectionReloadDectionDeviceResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDetectionReloadDectionDeviceResponseSuccess =
  ApiEmergencyPostDetectionReloadDectionDeviceResponse[200];
/**
 * @description
 *   位置发生改变 生成新的信息监测数据接口
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDetectionReloadDectionDevice = (
  option?: ApiEmergencyPostDetectionReloadDectionDeviceOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDetectionReloadDectionDeviceResponseSuccess>(
    "/detection/reloadDectionDevice",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetDetectionDeviceIdMetricOption = {
  /**
    @description
      deviceId */
  deviceId: string;
  /**
    @description
      metric */
  metric: string;
};

/** @description response type for apiEmergencyGetDetectionDeviceIdMetric */
interface ApiEmergencyGetDetectionDeviceIdMetricResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDetectionDeviceIdMetricResponseSuccess =
  ApiEmergencyGetDetectionDeviceIdMetricResponse[200];
/**
 * @description
 *   getUnit
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiEmergencyGetDetectionDeviceIdMetric = (
  option?: ApiEmergencyGetDetectionDeviceIdMetricOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDetectionDeviceIdMetricResponseSuccess>(
    "/detection/:deviceId/:metric",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostDeviceCheckRemindOption = GoodsRemindInput;

/** @description response type for apiEmergencyPostDeviceCheckRemind */
interface ApiEmergencyPostDeviceCheckRemindResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputString;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceCheckRemindResponseSuccess =
  ApiEmergencyPostDeviceCheckRemindResponse[200];
/**
 * @description
 *   装备清单定期点检提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceCheckRemind = (
  option?: ApiEmergencyPostDeviceCheckRemindOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceCheckRemindResponseSuccess>(
    "/device/check/remind",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceCheckRemindConfirmOption = GoodsRemindInput;

/** @description response type for apiEmergencyPostDeviceCheckRemindConfirm */
interface ApiEmergencyPostDeviceCheckRemindConfirmResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputInt;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceCheckRemindConfirmResponseSuccess =
  ApiEmergencyPostDeviceCheckRemindConfirmResponse[200];
/**
 * @description
 *   装备清单物资到期提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceCheckRemindConfirm = (
  option?: ApiEmergencyPostDeviceCheckRemindConfirmOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceCheckRemindConfirmResponseSuccess>(
    "/device/check/remind/confirm",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceExpireBatchRemindOption = ExpireRemindInput;

/** @description response type for apiEmergencyPostDeviceExpireBatchRemind */
interface ApiEmergencyPostDeviceExpireBatchRemindResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceExpireBatchRemindResponseSuccess =
  ApiEmergencyPostDeviceExpireBatchRemindResponse[200];
/**
 * @description
 *   设置到期批量提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceExpireBatchRemind = (
  option?: ApiEmergencyPostDeviceExpireBatchRemindOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceExpireBatchRemindResponseSuccess>(
    "/device/expire/batch/remind",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceExpireRemindOption = ExpireRemindInput;

/** @description response type for apiEmergencyPostDeviceExpireRemind */
interface ApiEmergencyPostDeviceExpireRemindResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceExpireRemindResponseSuccess =
  ApiEmergencyPostDeviceExpireRemindResponse[200];
/**
 * @description
 *   设置到期提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceExpireRemind = (
  option?: ApiEmergencyPostDeviceExpireRemindOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceExpireRemindResponseSuccess>(
    "/device/expire/remind",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceExpireRemindDelOption = ExpireRemindInput;

/** @description response type for apiEmergencyPostDeviceExpireRemindDel */
interface ApiEmergencyPostDeviceExpireRemindDelResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceExpireRemindDelResponseSuccess =
  ApiEmergencyPostDeviceExpireRemindDelResponse[200];
/**
 * @description
 *   设置到期提醒删除
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceExpireRemindDel = (
  option?: ApiEmergencyPostDeviceExpireRemindDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceExpireRemindDelResponseSuccess>(
    "/device/expire/remind/del",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceExpireRemindDetailOption = ExpireRemindInput;

/** @description response type for apiEmergencyPostDeviceExpireRemindDetail */
interface ApiEmergencyPostDeviceExpireRemindDetailResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputRemindDetailOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceExpireRemindDetailResponseSuccess =
  ApiEmergencyPostDeviceExpireRemindDetailResponse[200];
/**
 * @description
 *   到期提醒详情
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceExpireRemindDetail = (
  option?: ApiEmergencyPostDeviceExpireRemindDetailOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceExpireRemindDetailResponseSuccess>(
    "/device/expire/remind/detail",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceExpireRemindInfoOption = GoodsRemindInput;

/** @description response type for apiEmergencyPostDeviceExpireRemindInfo */
interface ApiEmergencyPostDeviceExpireRemindInfoResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputString;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceExpireRemindInfoResponseSuccess =
  ApiEmergencyPostDeviceExpireRemindInfoResponse[200];
/**
 * @description
 *   装备清单物资到期提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceExpireRemindInfo = (
  option?: ApiEmergencyPostDeviceExpireRemindInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceExpireRemindInfoResponseSuccess>(
    "/device/expire/remind/info",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDevicePressureChartOption = DailyChartInput;

/** @description response type for apiEmergencyPostDevicePressureChart */
interface ApiEmergencyPostDevicePressureChartResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DeviceChartOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDevicePressureChartResponseSuccess =
  ApiEmergencyPostDevicePressureChartResponse[200];
/**
 * @description
 *   getDeviceRecentDailyValue
 * @tags pressure-chart-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDevicePressureChart = (
  option?: ApiEmergencyPostDevicePressureChartOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDevicePressureChartResponseSuccess>(
    "/device/pressure/chart",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDevicePressureDevlistOption = QueryPressureDeviceInput;

/** @description response type for apiEmergencyPostDevicePressureDevlist */
interface ApiEmergencyPostDevicePressureDevlistResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PressureDeviceOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDevicePressureDevlistResponseSuccess =
  ApiEmergencyPostDevicePressureDevlistResponse[200];
/**
 * @description
 *   查询压力曲线设备列表
 * @tags pressure-chart-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDevicePressureDevlist = (
  option?: ApiEmergencyPostDevicePressureDevlistOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDevicePressureDevlistResponseSuccess>(
    "/device/pressure/devlist",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceShortRemindOption = GoodsRemindInput;

/** @description response type for apiEmergencyPostDeviceShortRemind */
interface ApiEmergencyPostDeviceShortRemindResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputString;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceShortRemindResponseSuccess =
  ApiEmergencyPostDeviceShortRemindResponse[200];
/**
 * @description
 *   装备清单物资短缺提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceShortRemind = (
  option?: ApiEmergencyPostDeviceShortRemindOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceShortRemindResponseSuccess>(
    "/device/short/remind",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceStockBatchInOption =
  GoodsDeviceStockRecordsBatchInputDto;

/** @description response type for apiEmergencyPostDeviceStockBatchIn */
interface ApiEmergencyPostDeviceStockBatchInResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceStockBatchInResponseSuccess =
  ApiEmergencyPostDeviceStockBatchInResponse[200];
/**
 * @description
 *   1.1.19装备清单入库
 *   装备清单批量入库
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceStockBatchIn = (
  option?: ApiEmergencyPostDeviceStockBatchInOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceStockBatchInResponseSuccess>(
    "/device/stock/batch/in",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceStockBatchOutOption =
  GoodsDeviceStockRecordsBatchInputDto;

/** @description response type for apiEmergencyPostDeviceStockBatchOut */
interface ApiEmergencyPostDeviceStockBatchOutResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceStockBatchOutResponseSuccess =
  ApiEmergencyPostDeviceStockBatchOutResponse[200];
/**
 * @description
 *   1.1.18装备清单入库
 *   装备清单批量出库
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceStockBatchOut = (
  option?: ApiEmergencyPostDeviceStockBatchOutOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceStockBatchOutResponseSuccess>(
    "/device/stock/batch/out",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceStockDetailsIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyPostDeviceStockDetailsId */
interface ApiEmergencyPostDeviceStockDetailsIdResponse {
  /**
   * @description
   *   OK
   */
  200: GoodsDeviceStockRecordsQueryOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceStockDetailsIdResponseSuccess =
  ApiEmergencyPostDeviceStockDetailsIdResponse[200];
/**
 * @description
 *   出入库记录详情
 *   出入库记录详情
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceStockDetailsId = (
  option?: ApiEmergencyPostDeviceStockDetailsIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceStockDetailsIdResponseSuccess>(
    "/device/stock/details/:id",
    { method: "post", path: option },
    config
  );

type ApiEmergencyPostDeviceStockInOption = GoodsDeviceStockRecordsOutInputDto;

/** @description response type for apiEmergencyPostDeviceStockIn */
interface ApiEmergencyPostDeviceStockInResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceStockInResponseSuccess =
  ApiEmergencyPostDeviceStockInResponse[200];
/**
 * @description
 *   1.1.17装备清单入库
 *   装备清单入库
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceStockIn = (
  option?: ApiEmergencyPostDeviceStockInOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceStockInResponseSuccess>(
    "/device/stock/in",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceStockListOption = GoodsDeviceStockRecordsQueryInput;

/** @description response type for apiEmergencyPostDeviceStockList */
interface ApiEmergencyPostDeviceStockListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceStockListResponseSuccess =
  ApiEmergencyPostDeviceStockListResponse[200];
/**
 * @description
 *   出入库记录列表查询
 *   出入库记录列表查询
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceStockList = (
  option?: ApiEmergencyPostDeviceStockListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceStockListResponseSuccess>(
    "/device/stock/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDeviceStockOutOption = GoodsDeviceStockRecordsOutInputDto;

/** @description response type for apiEmergencyPostDeviceStockOut */
interface ApiEmergencyPostDeviceStockOutResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDeviceStockOutResponseSuccess =
  ApiEmergencyPostDeviceStockOutResponse[200];
/**
 * @description
 *   1.1.16装备清单出库
 *   装备清单出库
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDeviceStockOut = (
  option?: ApiEmergencyPostDeviceStockOutOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDeviceStockOutResponseSuccess>(
    "/device/stock/out",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetDeviceDeviceIdOption = {
  /**
    @description
      deviceId */
  deviceId: string;
};

/** @description response type for apiEmergencyGetDeviceDeviceId */
interface ApiEmergencyGetDeviceDeviceIdResponse {
  /**
   * @description
   *   OK
   */
  200: DeviceOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDeviceDeviceIdResponseSuccess =
  ApiEmergencyGetDeviceDeviceIdResponse[200];
/**
 * @description
 *   getDevice
 * @tags pressure-chart-controller
 * @produces *
 */
export const apiEmergencyGetDeviceDeviceId = (
  option?: ApiEmergencyGetDeviceDeviceIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDeviceDeviceIdResponseSuccess>(
    "/device/:deviceId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostDictChangeCpmoToCompOption = {
  /**
    @description
      entityCode */
  entityCode: string;
};

/** @description response type for apiEmergencyPostDictChangeCpmoToComp */
interface ApiEmergencyPostDictChangeCpmoToCompResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDictChangeCpmoToCompResponseSuccess =
  ApiEmergencyPostDictChangeCpmoToCompResponse[200];
/**
 * @description
 *   字典进度标记并记录日志
 * @tags 字典接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDictChangeCpmoToComp = (
  option?: ApiEmergencyPostDictChangeCpmoToCompOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDictChangeCpmoToCompResponseSuccess>(
    "/dict/change/cpmoToComp",
    { method: "post", query: option },
    config
  );

type ApiEmergencyPostDictIcomeMakeTagAndLogOption = EventIcomeNodeInput;

/** @description response type for apiEmergencyPostDictIcomeMakeTagAndLog */
interface ApiEmergencyPostDictIcomeMakeTagAndLogResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDictIcomeMakeTagAndLogResponseSuccess =
  ApiEmergencyPostDictIcomeMakeTagAndLogResponse[200];
/**
 * @description
 *   icome多个事件完成标记事件节点
 * @tags 字典接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDictIcomeMakeTagAndLog = (
  option?: ApiEmergencyPostDictIcomeMakeTagAndLogOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDictIcomeMakeTagAndLogResponseSuccess>(
    "/dict/icome/makeTagAndLog",
    { method: "post", body: option },
    config
  );

/** @description response type for apiEmergencyGetDictInitConfig */
interface ApiEmergencyGetDictInitConfigResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDictInitConfigResponseSuccess =
  ApiEmergencyGetDictInitConfigResponse[200];
/**
 * @description
 *   initConfig
 * @tags 字典接口
 * @produces *
 */
export const apiEmergencyGetDictInitConfig = (config?: AxiosRequestConfig) =>
  requester<ApiEmergencyGetDictInitConfigResponseSuccess>(
    "/dict/init/config",
    { method: "get" },
    config
  );

type ApiEmergencyPostDictMakeTagAndLogOption = EmergencyDictDataInput;

/** @description response type for apiEmergencyPostDictMakeTagAndLog */
interface ApiEmergencyPostDictMakeTagAndLogResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDictMakeTagAndLogResponseSuccess =
  ApiEmergencyPostDictMakeTagAndLogResponse[200];
/**
 * @description
 *   字典进度标记并记录日志
 * @tags 字典接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDictMakeTagAndLog = (
  option?: ApiEmergencyPostDictMakeTagAndLogOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDictMakeTagAndLogResponseSuccess>(
    "/dict/makeTagAndLog",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetDictQueryEmergencyProgressDictOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
  /**
    @description
      emergencyId
    @format int64 */
  emergencyId: number;
};

/** @description response type for apiEmergencyGetDictQueryEmergencyProgressDict */
interface ApiEmergencyGetDictQueryEmergencyProgressDictResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyDictDataOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDictQueryEmergencyProgressDictResponseSuccess =
  ApiEmergencyGetDictQueryEmergencyProgressDictResponse[200];
/**
 * @description
 *   获取应急事件节点列表
 * @tags 字典接口
 * @produces *
 */
export const apiEmergencyGetDictQueryEmergencyProgressDict = (
  option?: ApiEmergencyGetDictQueryEmergencyProgressDictOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDictQueryEmergencyProgressDictResponseSuccess>(
    "/dict/queryEmergencyProgressDict",
    { method: "get", query: option },
    config
  );

type ApiEmergencyPostDictQueryEmergencyProgressDictBySessionIdOption =
  IcomeInput;

/** @description response type for apiEmergencyPostDictQueryEmergencyProgressDictBySessionId */
interface ApiEmergencyPostDictQueryEmergencyProgressDictBySessionIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyDictDataOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDictQueryEmergencyProgressDictBySessionIdResponseSuccess =
  ApiEmergencyPostDictQueryEmergencyProgressDictBySessionIdResponse[200];
/**
 * @description
 *   获取应急事件节点列表
 * @tags 字典接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDictQueryEmergencyProgressDictBySessionId = (
  option?: ApiEmergencyPostDictQueryEmergencyProgressDictBySessionIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDictQueryEmergencyProgressDictBySessionIdResponseSuccess>(
    "/dict/queryEmergencyProgressDictBySessionId",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetDictQuerySceneNodeListEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetDictQuerySceneNodeListEventId */
interface ApiEmergencyGetDictQuerySceneNodeListEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencySceneNodeListOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDictQuerySceneNodeListEventIdResponseSuccess =
  ApiEmergencyGetDictQuerySceneNodeListEventIdResponse[200];
/**
 * @description
 *   获取场景预案应急事件节点列表
 * @tags 字典接口
 * @produces *
 */
export const apiEmergencyGetDictQuerySceneNodeListEventId = (
  option?: ApiEmergencyGetDictQuerySceneNodeListEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDictQuerySceneNodeListEventIdResponseSuccess>(
    "/dict/querySceneNodeList/:eventId",
    { method: "get", path: option },
    config
  );

/** @description response type for apiEmergencyGetDictQuerySysDict */
interface ApiEmergencyGetDictQuerySysDictResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: DictDataOutput;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDictQuerySysDictResponseSuccess =
  ApiEmergencyGetDictQuerySysDictResponse[200];
/**
 * @description
 *   查询所有字典值
 * @tags 字典接口
 * @produces *
 */
export const apiEmergencyGetDictQuerySysDict = (config?: AxiosRequestConfig) =>
  requester<ApiEmergencyGetDictQuerySysDictResponseSuccess>(
    "/dict/querySysDict",
    { method: "get" },
    config
  );

type ApiEmergencyGetDictQuerySysDictEditableCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiEmergencyGetDictQuerySysDictEditableCpmoCop */
interface ApiEmergencyGetDictQuerySysDictEditableCpmoCopResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: DictDataEditableOutput;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDictQuerySysDictEditableCpmoCopResponseSuccess =
  ApiEmergencyGetDictQuerySysDictEditableCpmoCopResponse[200];
/**
 * @description
 *   查询所有可编辑的字典值
 * @tags 字典接口
 * @produces *
 */
export const apiEmergencyGetDictQuerySysDictEditableCpmoCop = (
  option?: ApiEmergencyGetDictQuerySysDictEditableCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDictQuerySysDictEditableCpmoCopResponseSuccess>(
    "/dict/querySysDictEditable/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetDictUpdateNodeByEventIdEventIdNodeIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
  /**
    @description
      nodeId
    @format int64 */
  nodeId: number;
};

/** @description response type for apiEmergencyGetDictUpdateNodeByEventIdEventIdNodeId */
interface ApiEmergencyGetDictUpdateNodeByEventIdEventIdNodeIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDictUpdateNodeByEventIdEventIdNodeIdResponseSuccess =
  ApiEmergencyGetDictUpdateNodeByEventIdEventIdNodeIdResponse[200];
/**
 * @description
 *   关键节点设置已完成
 * @tags 字典接口
 * @produces *
 */
export const apiEmergencyGetDictUpdateNodeByEventIdEventIdNodeId = (
  option?: ApiEmergencyGetDictUpdateNodeByEventIdEventIdNodeIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDictUpdateNodeByEventIdEventIdNodeIdResponseSuccess>(
    "/dict/updateNodeByEventId/:eventId/:nodeId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostDictUpdateSysDictEditableOption = Array<DictTypeInput>;

/** @description response type for apiEmergencyPostDictUpdateSysDictEditable */
interface ApiEmergencyPostDictUpdateSysDictEditableResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDictUpdateSysDictEditableResponseSuccess =
  ApiEmergencyPostDictUpdateSysDictEditableResponse[200];
/**
 * @description
 *   更新可编辑字典值
 * @tags 字典接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDictUpdateSysDictEditable = (
  option?: ApiEmergencyPostDictUpdateSysDictEditableOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDictUpdateSysDictEditableResponseSuccess>(
    "/dict/updateSysDictEditable",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetDispatchDetailCpmoCodeIdTypeEventCodeOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      eventCode */
  eventCode: string;
  /**
    @description
      id */
  id: string;
  /**
    @description
      type
    @format int32 */
  type: number;
};

/** @description response type for apiEmergencyGetDispatchDetailCpmoCodeIdTypeEventCode */
interface ApiEmergencyGetDispatchDetailCpmoCodeIdTypeEventCodeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: number;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetDispatchDetailCpmoCodeIdTypeEventCodeResponseSuccess =
  ApiEmergencyGetDispatchDetailCpmoCodeIdTypeEventCodeResponse[200];
/**
 * @description
 *   getDispatchDetail
 * @tags dispatch-controller
 * @produces *
 */
export const apiEmergencyGetDispatchDetailCpmoCodeIdTypeEventCode = (
  option?: ApiEmergencyGetDispatchDetailCpmoCodeIdTypeEventCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetDispatchDetailCpmoCodeIdTypeEventCodeResponseSuccess>(
    "/dispatch/detail/:cpmoCode/:id/:type/:eventCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostDispatchResourceOption = DispatchResourceInput;

/** @description response type for apiEmergencyPostDispatchResource */
interface ApiEmergencyPostDispatchResourceResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputMapStringObject;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDispatchResourceResponseSuccess =
  ApiEmergencyPostDispatchResourceResponse[200];
/**
 * @description
 *   dispatchResource
 * @tags dispatch-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDispatchResource = (
  option?: ApiEmergencyPostDispatchResourceOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDispatchResourceResponseSuccess>(
    "/dispatch/resource",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDispatchSiteOption = DispatchInput;

/** @description response type for apiEmergencyPostDispatchSite */
interface ApiEmergencyPostDispatchSiteResponse {
  /**
   * @description
   *   OK
   */
  200: DispatchResourceOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDispatchSiteResponseSuccess =
  ApiEmergencyPostDispatchSiteResponse[200];
/**
 * @description
 *   dispatchSite
 * @tags dispatch-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDispatchSite = (
  option?: ApiEmergencyPostDispatchSiteOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDispatchSiteResponseSuccess>(
    "/dispatch/site",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDispatchWarningMsgOption = WarningMsgInput;

/** @description response type for apiEmergencyPostDispatchWarningMsg */
interface ApiEmergencyPostDispatchWarningMsgResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDispatchWarningMsgResponseSuccess =
  ApiEmergencyPostDispatchWarningMsgResponse[200];
/**
 * @description
 *   dispatchWarningMsg
 * @tags dispatch-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDispatchWarningMsg = (
  option?: ApiEmergencyPostDispatchWarningMsgOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDispatchWarningMsgResponseSuccess>(
    "/dispatch/warningMsg",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDutyChangeDutyOption = ChangeDutyReqInput;

/** @description response type for apiEmergencyPostDutyChangeDuty */
interface ApiEmergencyPostDutyChangeDutyResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDutyChangeDutyResponseSuccess =
  ApiEmergencyPostDutyChangeDutyResponse[200];
/**
 * @description
 *   换班
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDutyChangeDuty = (
  option?: ApiEmergencyPostDutyChangeDutyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDutyChangeDutyResponseSuccess>(
    "/duty/changeDuty",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDutyCheckInOption = CheckInReqInput;

/** @description response type for apiEmergencyPostDutyCheckIn */
interface ApiEmergencyPostDutyCheckInResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDutyCheckInResponseSuccess =
  ApiEmergencyPostDutyCheckInResponse[200];
/**
 * @description
 *   值班确认
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDutyCheckIn = (
  option?: ApiEmergencyPostDutyCheckInOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDutyCheckInResponseSuccess>(
    "/duty/checkIn",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDutyGetDutyOption = DutyDateQueryInput;

/** @description response type for apiEmergencyPostDutyGetDuty */
interface ApiEmergencyPostDutyGetDutyResponse {
  /**
   * @description
   *   OK
   */
  200: DutyOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDutyGetDutyResponseSuccess =
  ApiEmergencyPostDutyGetDutyResponse[200];
/**
 * @description
 *   获取某天某个岗位的值班信息
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDutyGetDuty = (
  option?: ApiEmergencyPostDutyGetDutyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDutyGetDutyResponseSuccess>(
    "/duty/getDuty",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDutyGetPersonalDutyOption = PersonDutyQueryInput;

/** @description response type for apiEmergencyPostDutyGetPersonalDuty */
interface ApiEmergencyPostDutyGetPersonalDutyResponse {
  /**
   * @description
   *   OK
   */
  200: DutyOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDutyGetPersonalDutyResponseSuccess =
  ApiEmergencyPostDutyGetPersonalDutyResponse[200];
/**
 * @description
 *   获取某人当天值班信息
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDutyGetPersonalDuty = (
  option?: ApiEmergencyPostDutyGetPersonalDutyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDutyGetPersonalDutyResponseSuccess>(
    "/duty/getPersonalDuty",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostDutyGetPersonalDutyCalendarOption =
  PersonDutyCalendarQueryInput;

/** @description response type for apiEmergencyPostDutyGetPersonalDutyCalendar */
interface ApiEmergencyPostDutyGetPersonalDutyCalendarResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DutyOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostDutyGetPersonalDutyCalendarResponseSuccess =
  ApiEmergencyPostDutyGetPersonalDutyCalendarResponse[200];
/**
 * @description
 *   获取某人某时间段的值班日历
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostDutyGetPersonalDutyCalendar = (
  option?: ApiEmergencyPostDutyGetPersonalDutyCalendarOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostDutyGetPersonalDutyCalendarResponseSuccess>(
    "/duty/getPersonalDutyCalendar",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEmergencyPositionAddOption = PositionInsertedReqDTO;

/** @description response type for apiEmergencyPostEmergencyPositionAdd */
interface ApiEmergencyPostEmergencyPositionAddResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEmergencyPositionAddResponseSuccess =
  ApiEmergencyPostEmergencyPositionAddResponse[200];
/**
 * @description
 *   新增岗位
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEmergencyPositionAdd = (
  option?: ApiEmergencyPostEmergencyPositionAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEmergencyPositionAddResponseSuccess>(
    "/emergency/position/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEmergencyPositionChangeGreenChannelContactFlagOption =
  PositionGreenChannelFlagReqDTO;

/** @description response type for apiEmergencyPostEmergencyPositionChangeGreenChannelContactFlag */
interface ApiEmergencyPostEmergencyPositionChangeGreenChannelContactFlagResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEmergencyPositionChangeGreenChannelContactFlagResponseSuccess =
  ApiEmergencyPostEmergencyPositionChangeGreenChannelContactFlagResponse[200];
/**
 * @description
 *   变更绿色通道联系人标志
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEmergencyPositionChangeGreenChannelContactFlag = (
  option?: ApiEmergencyPostEmergencyPositionChangeGreenChannelContactFlagOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEmergencyPositionChangeGreenChannelContactFlagResponseSuccess>(
    "/emergency/position/changeGreenChannelContactFlag",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEmergencyPositionChangeStatusOption = PositionStatusReqDTO;

/** @description response type for apiEmergencyPostEmergencyPositionChangeStatus */
interface ApiEmergencyPostEmergencyPositionChangeStatusResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEmergencyPositionChangeStatusResponseSuccess =
  ApiEmergencyPostEmergencyPositionChangeStatusResponse[200];
/**
 * @description
 *   更改启停状态
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEmergencyPositionChangeStatus = (
  option?: ApiEmergencyPostEmergencyPositionChangeStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEmergencyPositionChangeStatusResponseSuccess>(
    "/emergency/position/changeStatus",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEmergencyPositionDeleteIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyPostEmergencyPositionDeleteId */
interface ApiEmergencyPostEmergencyPositionDeleteIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEmergencyPositionDeleteIdResponseSuccess =
  ApiEmergencyPostEmergencyPositionDeleteIdResponse[200];
/**
 * @description
 *   删除岗位
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEmergencyPositionDeleteId = (
  option?: ApiEmergencyPostEmergencyPositionDeleteIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEmergencyPositionDeleteIdResponseSuccess>(
    "/emergency/position/delete/:id",
    { method: "post", path: option },
    config
  );

type ApiEmergencyGetEmergencyPositionGetIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEmergencyPositionGetId */
interface ApiEmergencyGetEmergencyPositionGetIdResponse {
  /**
   * @description
   *   OK
   */
  200: PositionVO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEmergencyPositionGetIdResponseSuccess =
  ApiEmergencyGetEmergencyPositionGetIdResponse[200];
/**
 * @description
 *   根据id获取岗位信息
 * @tags 应急值守：岗位管理
 * @produces *
 */
export const apiEmergencyGetEmergencyPositionGetId = (
  option?: ApiEmergencyGetEmergencyPositionGetIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEmergencyPositionGetIdResponseSuccess>(
    "/emergency/position/get/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEmergencyPositionListOption = PositionDutyQueryDTO;

/** @description response type for apiEmergencyPostEmergencyPositionList */
interface ApiEmergencyPostEmergencyPositionListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DutyPositionVO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEmergencyPositionListResponseSuccess =
  ApiEmergencyPostEmergencyPositionListResponse[200];
/**
 * @description
 *   岗位下拉数据
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEmergencyPositionList = (
  option?: ApiEmergencyPostEmergencyPositionListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEmergencyPositionListResponseSuccess>(
    "/emergency/position/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEmergencyPositionQueryOption = PositionQueryDTO;

/** @description response type for apiEmergencyPostEmergencyPositionQuery */
interface ApiEmergencyPostEmergencyPositionQueryResponse {
  /**
   * @description
   *   OK
   */
  200: PageResultPositionVO;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEmergencyPositionQueryResponseSuccess =
  ApiEmergencyPostEmergencyPositionQueryResponse[200];
/**
 * @description
 *   分页查询岗位数据
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEmergencyPositionQuery = (
  option?: ApiEmergencyPostEmergencyPositionQueryOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEmergencyPositionQueryResponseSuccess>(
    "/emergency/position/query",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEmergencyPositionUpdateOption = PositionUpdatedReqDTO;

/** @description response type for apiEmergencyPostEmergencyPositionUpdate */
interface ApiEmergencyPostEmergencyPositionUpdateResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEmergencyPositionUpdateResponseSuccess =
  ApiEmergencyPostEmergencyPositionUpdateResponse[200];
/**
 * @description
 *   更新岗位
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEmergencyPositionUpdate = (
  option?: ApiEmergencyPostEmergencyPositionUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEmergencyPositionUpdateResponseSuccess>(
    "/emergency/position/update",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventAddOption = EmergencyEventInput;

/** @description response type for apiEmergencyPostEventAdd */
interface ApiEmergencyPostEventAddResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: any;
  };
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventAddResponseSuccess =
  ApiEmergencyPostEventAddResponse[200];
/**
 * @description
 *   应急事件添加
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventAdd = (
  option?: ApiEmergencyPostEventAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventAddResponseSuccess>(
    "/event/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventAllCarsEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetEventAllCarsEventId */
interface ApiEmergencyGetEventAllCarsEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CarDispatchOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventAllCarsEventIdResponseSuccess =
  ApiEmergencyGetEventAllCarsEventIdResponse[200];
/**
 * @description
 *   事件已调度车辆信息列表
 * @tags 事件管理接口
 * @produces *
 */
export const apiEmergencyGetEventAllCarsEventId = (
  option?: ApiEmergencyGetEventAllCarsEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventAllCarsEventIdResponseSuccess>(
    "/event/all/cars/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventCallCenterCancelBillNumOperatorOption = {
  /**
    @description
      billNum */
  billNum: string;
  /**
    @description
      operator */
  operator: string;
};

/** @description response type for apiEmergencyGetEventCallCenterCancelBillNumOperator */
interface ApiEmergencyGetEventCallCenterCancelBillNumOperatorResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventCallCenterCancelBillNumOperatorResponseSuccess =
  ApiEmergencyGetEventCallCenterCancelBillNumOperatorResponse[200];
/**
 * @description
 *   cancelBillNum
 * @tags callcenter-bill-controller
 * @produces *
 */
export const apiEmergencyGetEventCallCenterCancelBillNumOperator = (
  option?: ApiEmergencyGetEventCallCenterCancelBillNumOperatorOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventCallCenterCancelBillNumOperatorResponseSuccess>(
    "/event/callCenter/cancel/:billNum/:operator",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventCallCenterContentOption = ContentInput;

/** @description response type for apiEmergencyPostEventCallCenterContent */
interface ApiEmergencyPostEventCallCenterContentResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventCallCenterContentResponseSuccess =
  ApiEmergencyPostEventCallCenterContentResponse[200];
/**
 * @description
 *   callCenterContent
 * @tags callcenter-bill-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventCallCenterContent = (
  option?: ApiEmergencyPostEventCallCenterContentOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventCallCenterContentResponseSuccess>(
    "/event/callCenter/content",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventCallCenterGetCallCenterDetailBillNumOption = {
  /**
    @description
      billNum */
  billNum: string;
};

/** @description response type for apiEmergencyGetEventCallCenterGetCallCenterDetailBillNum */
interface ApiEmergencyGetEventCallCenterGetCallCenterDetailBillNumResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyCallCenterDetailOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventCallCenterGetCallCenterDetailBillNumResponseSuccess =
  ApiEmergencyGetEventCallCenterGetCallCenterDetailBillNumResponse[200];
/**
 * @description
 *   根据事件编码获取抢险单详情
 * @tags callcenter-bill-controller
 * @produces *
 */
export const apiEmergencyGetEventCallCenterGetCallCenterDetailBillNum = (
  option?: ApiEmergencyGetEventCallCenterGetCallCenterDetailBillNumOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventCallCenterGetCallCenterDetailBillNumResponseSuccess>(
    "/event/callCenter/getCallCenterDetail/:billNum",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventCallCenterGetGreenChannelInfoEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiEmergencyGetEventCallCenterGetGreenChannelInfoEcode */
interface ApiEmergencyGetEventCallCenterGetGreenChannelInfoEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<GreenChannelOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventCallCenterGetGreenChannelInfoEcodeResponseSuccess =
  ApiEmergencyGetEventCallCenterGetGreenChannelInfoEcodeResponse[200];
/**
 * @description
 *   getGreenChannelInfo
 * @tags callcenter-bill-controller
 * @produces *
 */
export const apiEmergencyGetEventCallCenterGetGreenChannelInfoEcode = (
  option?: ApiEmergencyGetEventCallCenterGetGreenChannelInfoEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventCallCenterGetGreenChannelInfoEcodeResponseSuccess>(
    "/event/callCenter/getGreenChannelInfo/:ecode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventCallCenterProgressBillNumOption = {
  /**
    @description
      billNum */
  billNum: string;
};

/** @description response type for apiEmergencyGetEventCallCenterProgressBillNum */
interface ApiEmergencyGetEventCallCenterProgressBillNumResponse {
  /**
   * @description
   *   OK
   */
  200: CallCenterProcessResultOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventCallCenterProgressBillNumResponseSuccess =
  ApiEmergencyGetEventCallCenterProgressBillNumResponse[200];
/**
 * @description
 *   callCenterDealProgress
 * @tags callcenter-bill-controller
 * @produces *
 */
export const apiEmergencyGetEventCallCenterProgressBillNum = (
  option?: ApiEmergencyGetEventCallCenterProgressBillNumOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventCallCenterProgressBillNumResponseSuccess>(
    "/event/callCenter/progress/:billNum",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventCallCenterRemindOrderOption = RemindOrderInput;

/** @description response type for apiEmergencyPostEventCallCenterRemindOrder */
interface ApiEmergencyPostEventCallCenterRemindOrderResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventCallCenterRemindOrderResponseSuccess =
  ApiEmergencyPostEventCallCenterRemindOrderResponse[200];
/**
 * @description
 *   callCenterRemindOrder
 * @tags callcenter-bill-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventCallCenterRemindOrder = (
  option?: ApiEmergencyPostEventCallCenterRemindOrderOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventCallCenterRemindOrderResponseSuccess>(
    "/event/callCenter/remindOrder",
    { method: "post", body: option },
    config
  );

/** @description response type for apiEmergencyGetEventCallCenterRemindOrderOrderEnum */
interface ApiEmergencyGetEventCallCenterRemindOrderOrderEnumResponse {
  /**
   * @description
   *   OK
   */
  200: Array<{
    [propertyName: string]: any;
  }>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventCallCenterRemindOrderOrderEnumResponseSuccess =
  ApiEmergencyGetEventCallCenterRemindOrderOrderEnumResponse[200];
/**
 * @description
 *   remindOrderEnum
 * @tags callcenter-bill-controller
 * @produces *
 */
export const apiEmergencyGetEventCallCenterRemindOrderOrderEnum = (
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventCallCenterRemindOrderOrderEnumResponseSuccess>(
    "/event/callCenter/remindOrder/order/enum",
    { method: "get" },
    config
  );

type ApiEmergencyPostEventConfirmOption = EmergencyEventConfirmInput;

/** @description response type for apiEmergencyPostEventConfirm */
interface ApiEmergencyPostEventConfirmResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventConfirmResponseSuccess =
  ApiEmergencyPostEventConfirmResponse[200];
/**
 * @description
 *   应急事件确认
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventConfirm = (
  option?: ApiEmergencyPostEventConfirmOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventConfirmResponseSuccess>(
    "/event/confirm",
    { method: "post", body: option },
    config
  );

type ApiEmergencyDeleteEventDeleteIdWorkflowNoOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
  /**
    @description
      workflowNo */
  workflowNo: string;
};

/** @description response type for apiEmergencyDeleteEventDeleteIdWorkflowNo */
interface ApiEmergencyDeleteEventDeleteIdWorkflowNoResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   No Content
   */
  204: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
}

type ApiEmergencyDeleteEventDeleteIdWorkflowNoResponseSuccess =
  ApiEmergencyDeleteEventDeleteIdWorkflowNoResponse[200];
/**
 * @description
 *   应急抢险事件删除
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyDeleteEventDeleteIdWorkflowNo = (
  option?: ApiEmergencyDeleteEventDeleteIdWorkflowNoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyDeleteEventDeleteIdWorkflowNoResponseSuccess>(
    "/event/delete/:id/:workflowNo",
    { method: "delete", path: option },
    config
  );

type ApiEmergencyGetEventDetailIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventDetailId */
interface ApiEmergencyGetEventDetailIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyEventOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventDetailIdResponseSuccess =
  ApiEmergencyGetEventDetailIdResponse[200];
/**
 * @description
 *   查询详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventDetailId = (
  option?: ApiEmergencyGetEventDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventDetailIdResponseSuccess>(
    "/event/detail/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventDeviceListOption = EventDeviceListInput;

/** @description response type for apiEmergencyPostEventDeviceList */
interface ApiEmergencyPostEventDeviceListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListEventDeviceOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventDeviceListResponseSuccess =
  ApiEmergencyPostEventDeviceListResponse[200];
/**
 * @description
 *   物资装备清单列表
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventDeviceList = (
  option?: ApiEmergencyPostEventDeviceListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventDeviceListResponseSuccess>(
    "/event/device/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventEndTaskDetailEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetEventEndTaskDetailEventId */
interface ApiEmergencyGetEventEndTaskDetailEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: EventEndTaskDetailOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventEndTaskDetailEventIdResponseSuccess =
  ApiEmergencyGetEventEndTaskDetailEventIdResponse[200];
/**
 * @description
 *   事件归档-应急结束
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventEndTaskDetailEventId = (
  option?: ApiEmergencyGetEventEndTaskDetailEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventEndTaskDetailEventIdResponseSuccess>(
    "/event/end/task/detail/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventEventPeopleIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventEventPeopleId */
interface ApiEmergencyGetEventEventPeopleIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyEventPeopleOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventEventPeopleIdResponseSuccess =
  ApiEmergencyGetEventEventPeopleIdResponse[200];
/**
 * @description
 *   根据事件主键id获取应急人员
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventEventPeopleId = (
  option?: ApiEmergencyGetEventEventPeopleIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventEventPeopleIdResponseSuccess>(
    "/event/eventPeople/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventFeedbackIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventFeedbackId */
interface ApiEmergencyGetEventFeedbackIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyEventFeedbackOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventFeedbackIdResponseSuccess =
  ApiEmergencyGetEventFeedbackIdResponse[200];
/**
 * @description
 *   获取事件反馈详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventFeedbackId = (
  option?: ApiEmergencyGetEventFeedbackIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventFeedbackIdResponseSuccess>(
    "/event/feedback/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetAllEntityCodeOption = {
  /**
    @description
      entityCode */
  entityCode: string;
};

/** @description response type for apiEmergencyGetEventGetAllEntityCode */
interface ApiEmergencyGetEventGetAllEntityCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyEventEntryOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetAllEntityCodeResponseSuccess =
  ApiEmergencyGetEventGetAllEntityCodeResponse[200];
/**
 * @description
 *   获取未终止的应急事件
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetAllEntityCode = (
  option?: ApiEmergencyGetEventGetAllEntityCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetAllEntityCodeResponseSuccess>(
    "/event/getAll/:entityCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetCallCenterDetailEventCodeOption = {
  /**
    @description
      eventCode */
  eventCode: string;
};

/** @description response type for apiEmergencyGetEventGetCallCenterDetailEventCode */
interface ApiEmergencyGetEventGetCallCenterDetailEventCodeResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyCallCenterDetailOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetCallCenterDetailEventCodeResponseSuccess =
  ApiEmergencyGetEventGetCallCenterDetailEventCodeResponse[200];
/**
 * @description
 *   根据事件编码获取抢险单详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetCallCenterDetailEventCode = (
  option?: ApiEmergencyGetEventGetCallCenterDetailEventCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetCallCenterDetailEventCodeResponseSuccess>(
    "/event/getCallCenterDetail/:eventCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetCheckIdByEventIdEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetEventGetCheckIdByEventIdEventId */
interface ApiEmergencyGetEventGetCheckIdByEventIdEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetCheckIdByEventIdEventIdResponseSuccess =
  ApiEmergencyGetEventGetCheckIdByEventIdEventIdResponse[200];
/**
 * @description
 *   根据事件id查询工作台id
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetCheckIdByEventIdEventId = (
  option?: ApiEmergencyGetEventGetCheckIdByEventIdEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetCheckIdByEventIdEventIdResponseSuccess>(
    "/event/getCheckIdByEventId/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetCheckIdByWoCodeWoCodeOption = {
  /**
    @description
      woCode */
  woCode: string;
};

/** @description response type for apiEmergencyGetEventGetCheckIdByWoCodeWoCode */
interface ApiEmergencyGetEventGetCheckIdByWoCodeWoCodeResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetCheckIdByWoCodeWoCodeResponseSuccess =
  ApiEmergencyGetEventGetCheckIdByWoCodeWoCodeResponse[200];
/**
 * @description
 *   根据工单编号查询工作台id
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetCheckIdByWoCodeWoCode = (
  option?: ApiEmergencyGetEventGetCheckIdByWoCodeWoCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetCheckIdByWoCodeWoCodeResponseSuccess>(
    "/event/getCheckIdByWoCode/:woCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetCompCodeCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiEmergencyGetEventGetCompCodeCpmoCop */
interface ApiEmergencyGetEventGetCompCodeCpmoCopResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyCompCodeOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetCompCodeCpmoCopResponseSuccess =
  ApiEmergencyGetEventGetCompCodeCpmoCopResponse[200];
/**
 * @description
 *   获取实体下面的默认关联公司
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetCompCodeCpmoCop = (
  option?: ApiEmergencyGetEventGetCompCodeCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetCompCodeCpmoCopResponseSuccess>(
    "/event/getCompCode/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetDealUserNameEcodeLocCodeOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      locCode */
  locCode: string;
};

/** @description response type for apiEmergencyGetEventGetDealUserNameEcodeLocCode */
interface ApiEmergencyGetEventGetDealUserNameEcodeLocCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyEventLocUserOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetDealUserNameEcodeLocCodeResponseSuccess =
  ApiEmergencyGetEventGetDealUserNameEcodeLocCodeResponse[200];
/**
 * @description
 *   根据网格编码查询处置人
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetDealUserNameEcodeLocCode = (
  option?: ApiEmergencyGetEventGetDealUserNameEcodeLocCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetDealUserNameEcodeLocCodeResponseSuccess>(
    "/event/getDealUserName/:ecode/:locCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetDetailIdItcodeOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
  /**
    @description
      itcode */
  itcode: string;
};

/** @description response type for apiEmergencyGetEventGetDetailIdItcode */
interface ApiEmergencyGetEventGetDetailIdItcodeResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyEventDetailAppOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetDetailIdItcodeResponseSuccess =
  ApiEmergencyGetEventGetDetailIdItcodeResponse[200];
/**
 * @description
 *   查询事件详情（App）
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetDetailIdItcode = (
  option?: ApiEmergencyGetEventGetDetailIdItcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetDetailIdItcodeResponseSuccess>(
    "/event/getDetail/:id/:itcode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventGetDetonationDetailsOption = DetonationDetailsInput;

/** @description response type for apiEmergencyPostEventGetDetonationDetails */
interface ApiEmergencyPostEventGetDetonationDetailsResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DetonationDetailsOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventGetDetonationDetailsResponseSuccess =
  ApiEmergencyPostEventGetDetonationDetailsResponse[200];
/**
 * @description
 *   获取爆管分析明细
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventGetDetonationDetails = (
  option?: ApiEmergencyPostEventGetDetonationDetailsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventGetDetonationDetailsResponseSuccess>(
    "/event/getDetonationDetails",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventGetDictLabelTypeOption = {
  /**
    @description
      type
    @format int32 */
  type: number;
};

/** @description response type for apiEmergencyGetEventGetDictLabelType */
interface ApiEmergencyGetEventGetDictLabelTypeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DictLabelOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetDictLabelTypeResponseSuccess =
  ApiEmergencyGetEventGetDictLabelTypeResponse[200];
/**
 * @description
 *   获取分类标签
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetDictLabelType = (
  option?: ApiEmergencyGetEventGetDictLabelTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetDictLabelTypeResponseSuccess>(
    "/event/getDictLabel/:type",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetEmergencyEventAddressListEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetEventGetEmergencyEventAddressListEventId */
interface ApiEmergencyGetEventGetEmergencyEventAddressListEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyEventAddressListOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetEmergencyEventAddressListEventIdResponseSuccess =
  ApiEmergencyGetEventGetEmergencyEventAddressListEventIdResponse[200];
/**
 * @description
 *   查询应急启动通讯录详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetEmergencyEventAddressListEventId = (
  option?: ApiEmergencyGetEventGetEmergencyEventAddressListEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetEmergencyEventAddressListEventIdResponseSuccess>(
    "/event/getEmergencyEventAddressList/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetEventCompanyTreeEntityCodeOption = {
  /**
    @description
      entityCode */
  entityCode: string;
};

/** @description response type for apiEmergencyGetEventGetEventCompanyTreeEntityCode */
interface ApiEmergencyGetEventGetEventCompanyTreeEntityCodeResponse {
  /**
   * @description
   *   OK
   */
  200: CompanyTree;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetEventCompanyTreeEntityCodeResponseSuccess =
  ApiEmergencyGetEventGetEventCompanyTreeEntityCodeResponse[200];
/**
 * @description
 *   获取事件管理所属公司树
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetEventCompanyTreeEntityCode = (
  option?: ApiEmergencyGetEventGetEventCompanyTreeEntityCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetEventCompanyTreeEntityCodeResponseSuccess>(
    "/event/getEventCompanyTree/:entityCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventGetIcomeEventOption = EmergencyEventIcomeInput;

/** @description response type for apiEmergencyPostEventGetIcomeEvent */
interface ApiEmergencyPostEventGetIcomeEventResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyEventOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventGetIcomeEventResponseSuccess =
  ApiEmergencyPostEventGetIcomeEventResponse[200];
/**
 * @description
 *   getIcomeEvent
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventGetIcomeEvent = (
  option?: ApiEmergencyPostEventGetIcomeEventOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventGetIcomeEventResponseSuccess>(
    "/event/getIcomeEvent",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventGetLastOneIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventGetLastOneId */
interface ApiEmergencyGetEventGetLastOneIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyEventOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetLastOneIdResponseSuccess =
  ApiEmergencyGetEventGetLastOneIdResponse[200];
/**
 * @description
 *   获取最先发生事件
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetLastOneId = (
  option?: ApiEmergencyGetEventGetLastOneIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetLastOneIdResponseSuccess>(
    "/event/getLastOne/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetLocNameEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiEmergencyGetEventGetLocNameEcode */
interface ApiEmergencyGetEventGetLocNameEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyEventLocNameOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetLocNameEcodeResponseSuccess =
  ApiEmergencyGetEventGetLocNameEcodeResponse[200];
/**
 * @description
 *   根据企业查询网格列表接口
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetLocNameEcode = (
  option?: ApiEmergencyGetEventGetLocNameEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetLocNameEcodeResponseSuccess>(
    "/event/getLocName/:ecode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetPdfIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventGetPdfId */
interface ApiEmergencyGetEventGetPdfIdResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetPdfIdResponseSuccess =
  ApiEmergencyGetEventGetPdfIdResponse[200];
/**
 * @description
 *   获取pdf
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetPdfId = (
  option?: ApiEmergencyGetEventGetPdfIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetPdfIdResponseSuccess>(
    "/event/getPdf/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetPositionLocationEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiEmergencyGetEventGetPositionLocationEcode */
interface ApiEmergencyGetEventGetPositionLocationEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyEventPositionOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetPositionLocationEcodeResponseSuccess =
  ApiEmergencyGetEventGetPositionLocationEcodeResponse[200];
/**
 * @description
 *   查询企业下人员位置信息接口
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetPositionLocationEcode = (
  option?: ApiEmergencyGetEventGetPositionLocationEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetPositionLocationEcodeResponseSuccess>(
    "/event/getPositionLocation/:ecode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventGetShowDangerWoResponsibleEcodeOrganCodeOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      organCode */
  organCode: string;
};

/** @description response type for apiEmergencyPostEventGetShowDangerWoResponsibleEcodeOrganCode */
interface ApiEmergencyPostEventGetShowDangerWoResponsibleEcodeOrganCodeResponse {
  /**
   * @description
   *   OK
   */
  200: NetworkShowDangerWoUserDTO;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventGetShowDangerWoResponsibleEcodeOrganCodeResponseSuccess =
  ApiEmergencyPostEventGetShowDangerWoResponsibleEcodeOrganCodeResponse[200];
/**
 * @description
 *   获取基础运营平台数据
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventGetShowDangerWoResponsibleEcodeOrganCode = (
  option?: ApiEmergencyPostEventGetShowDangerWoResponsibleEcodeOrganCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventGetShowDangerWoResponsibleEcodeOrganCodeResponseSuccess>(
    "/event/getShowDangerWoResponsible/:ecode/:organCode",
    { method: "post", path: option },
    config
  );

type ApiEmergencyPostEventGetShowDangerWoUserPositionRouteOption =
  ShowDangerWoUserPositionInput;

/** @description response type for apiEmergencyPostEventGetShowDangerWoUserPositionRoute */
interface ApiEmergencyPostEventGetShowDangerWoUserPositionRouteResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventGetShowDangerWoUserPositionRouteResponseSuccess =
  ApiEmergencyPostEventGetShowDangerWoUserPositionRouteResponse[200];
/**
 * @description
 *   按照组织查询组织内的全部人员
 * @tags 网格人员接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventGetShowDangerWoUserPositionRoute = (
  option?: ApiEmergencyPostEventGetShowDangerWoUserPositionRouteOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventGetShowDangerWoUserPositionRouteResponseSuccess>(
    "/event/getShowDangerWoUser/position/route",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventGetShowDangerWoUserCompanyCodeOrganCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      organCode */
  organCode: string;
};

/** @description response type for apiEmergencyGetEventGetShowDangerWoUserCompanyCodeOrganCode */
interface ApiEmergencyGetEventGetShowDangerWoUserCompanyCodeOrganCodeResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetShowDangerWoUserCompanyCodeOrganCodeResponseSuccess =
  ApiEmergencyGetEventGetShowDangerWoUserCompanyCodeOrganCodeResponse[200];
/**
 * @description
 *   按照组织查询组织内的全部人员
 * @tags 网格人员接口
 * @produces *
 */
export const apiEmergencyGetEventGetShowDangerWoUserCompanyCodeOrganCode = (
  option?: ApiEmergencyGetEventGetShowDangerWoUserCompanyCodeOrganCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetShowDangerWoUserCompanyCodeOrganCodeResponseSuccess>(
    "/event/getShowDangerWoUser/:companyCode/:organCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventGetThirdConstructionGlstdmOption = {
  /**
    @description
      glstdm */
  glstdm: string;
};

/** @description response type for apiEmergencyGetEventGetThirdConstructionGlstdm */
interface ApiEmergencyGetEventGetThirdConstructionGlstdmResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ThirdConstructionOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGetThirdConstructionGlstdmResponseSuccess =
  ApiEmergencyGetEventGetThirdConstructionGlstdmResponse[200];
/**
 * @description
 *   根据企业查询第三方施工接口
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGetThirdConstructionGlstdm = (
  option?: ApiEmergencyGetEventGetThirdConstructionGlstdmOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGetThirdConstructionGlstdmResponseSuccess>(
    "/event/getThirdConstruction/:glstdm",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventGoodsListOption = EventGoodsListInput;

/** @description response type for apiEmergencyPostEventGoodsList */
interface ApiEmergencyPostEventGoodsListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListEventGoodsOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventGoodsListResponseSuccess =
  ApiEmergencyPostEventGoodsListResponse[200];
/**
 * @description
 *   物资储备库列表
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventGoodsList = (
  option?: ApiEmergencyPostEventGoodsListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventGoodsListResponseSuccess>(
    "/event/goods/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventGroupListOption = EmergencyEventGroupInput;

/** @description response type for apiEmergencyPostEventGroupList */
interface ApiEmergencyPostEventGroupListResponse {
  /**
   * @description
   *   OK
   */
  200: PageResultOutputEmergencyEventGroupOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventGroupListResponseSuccess =
  ApiEmergencyPostEventGroupListResponse[200];
/**
 * @description
 *   分页查询应急事件预案人员关系列表
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventGroupList = (
  option?: ApiEmergencyPostEventGroupListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventGroupListResponseSuccess>(
    "/event/groupList",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventGroupByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventGroupByIdId */
interface ApiEmergencyGetEventGroupByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyEventGroupOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventGroupByIdIdResponseSuccess =
  ApiEmergencyGetEventGroupByIdIdResponse[200];
/**
 * @description
 *   查询应急事件预案人员关系
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventGroupByIdId = (
  option?: ApiEmergencyGetEventGroupByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventGroupByIdIdResponseSuccess>(
    "/event/groupById/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventIcomeCustomizeFeedbackOption = IcomeFeedbackTaskInput;

/** @description response type for apiEmergencyPostEventIcomeCustomizeFeedback */
interface ApiEmergencyPostEventIcomeCustomizeFeedbackResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventIcomeCustomizeFeedbackResponseSuccess =
  ApiEmergencyPostEventIcomeCustomizeFeedbackResponse[200];
/**
 * @description
 *   自定义icome任务反馈
 * @tags emergency-event-icome-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventIcomeCustomizeFeedback = (
  option?: ApiEmergencyPostEventIcomeCustomizeFeedbackOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventIcomeCustomizeFeedbackResponseSuccess>(
    "/event/icome/customize/feedback",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventIcomeGroupEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetEventIcomeGroupEventId */
interface ApiEmergencyGetEventIcomeGroupEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyEventIcomeOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventIcomeGroupEventIdResponseSuccess =
  ApiEmergencyGetEventIcomeGroupEventIdResponse[200];
/**
 * @description
 *   根据事件获取群组信息
 * @tags emergency-event-icome-controller
 * @produces *
 */
export const apiEmergencyGetEventIcomeGroupEventId = (
  option?: ApiEmergencyGetEventIcomeGroupEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventIcomeGroupEventIdResponseSuccess>(
    "/event/icome/group/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventIcomeStatusOption = IcomeInput;

/** @description response type for apiEmergencyPostEventIcomeStatus */
interface ApiEmergencyPostEventIcomeStatusResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventIcomeStatusResponseSuccess =
  ApiEmergencyPostEventIcomeStatusResponse[200];
/**
 * @description
 *   updateEventIcomeStatus
 * @tags emergency-event-icome-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventIcomeStatus = (
  option?: ApiEmergencyPostEventIcomeStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventIcomeStatusResponseSuccess>(
    "/event/icome/status",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventIcomeTaskGetByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyPostEventIcomeTaskGetByIdId */
interface ApiEmergencyPostEventIcomeTaskGetByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyTaskListOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventIcomeTaskGetByIdIdResponseSuccess =
  ApiEmergencyPostEventIcomeTaskGetByIdIdResponse[200];
/**
 * @description
 *   任务中心详情查询
 *   任务中心详情查询
 * @tags emergency-event-icome-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventIcomeTaskGetByIdId = (
  option?: ApiEmergencyPostEventIcomeTaskGetByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventIcomeTaskGetByIdIdResponseSuccess>(
    "/event/icome/task/getById/:id",
    { method: "post", path: option },
    config
  );

type ApiEmergencyPostEventListOption = EmergencyEventInput;

/** @description response type for apiEmergencyPostEventList */
interface ApiEmergencyPostEventListResponse {
  /**
   * @description
   *   OK
   */
  200: PageResultOutputEmergencyEventOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventListResponseSuccess =
  ApiEmergencyPostEventListResponse[200];
/**
 * @description
 *   分页获取应急列表
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventList = (
  option?: ApiEmergencyPostEventListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventListResponseSuccess>(
    "/event/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventListByUserOption = EmergencySearchByUserInput;

/** @description response type for apiEmergencyPostEventListByUser */
interface ApiEmergencyPostEventListByUserResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputEmergencyEventAppListDataOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventListByUserResponseSuccess =
  ApiEmergencyPostEventListByUserResponse[200];
/**
 * @description
 *   查询用户关联事件列表（App）
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventListByUser = (
  option?: ApiEmergencyPostEventListByUserOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventListByUserResponseSuccess>(
    "/event/listByUser",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventMobileGetEvolveListIdItcodeOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
  /**
    @description
      itcode */
  itcode: string;
};

/** @description response type for apiEmergencyGetEventMobileGetEvolveListIdItcode */
interface ApiEmergencyGetEventMobileGetEvolveListIdItcodeResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyMobileEvolveOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventMobileGetEvolveListIdItcodeResponseSuccess =
  ApiEmergencyGetEventMobileGetEvolveListIdItcodeResponse[200];
/**
 * @description
 *   获取节点进展列表（h5）
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventMobileGetEvolveListIdItcode = (
  option?: ApiEmergencyGetEventMobileGetEvolveListIdItcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventMobileGetEvolveListIdItcodeResponseSuccess>(
    "/event/mobile/getEvolveList/:id/:itcode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventMsgTemplateOption = EmergencyMsgInput;

/** @description response type for apiEmergencyPostEventMsgTemplate */
interface ApiEmergencyPostEventMsgTemplateResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyMsgInput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventMsgTemplateResponseSuccess =
  ApiEmergencyPostEventMsgTemplateResponse[200];
/**
 * @description
 *   获取发动短信或电话模板内容
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventMsgTemplate = (
  option?: ApiEmergencyPostEventMsgTemplateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventMsgTemplateResponseSuccess>(
    "/event/msg/template",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventNewEmergencyEcodePointOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      point */
  point: string;
};

/** @description response type for apiEmergencyPostEventNewEmergencyEcodePoint */
interface ApiEmergencyPostEventNewEmergencyEcodePointResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyPrePlanOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventNewEmergencyEcodePointResponseSuccess =
  ApiEmergencyPostEventNewEmergencyEcodePointResponse[200];
/**
 * @description
 *   获取基础运营平台数据
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventNewEmergencyEcodePoint = (
  option?: ApiEmergencyPostEventNewEmergencyEcodePointOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventNewEmergencyEcodePointResponseSuccess>(
    "/event/newEmergency/:ecode/:point",
    { method: "post", path: option },
    config
  );

type ApiEmergencyGetEventPipeDetailOption = {
  /**
    @description
      f */
  f: string;
  /**
    @description
      layerId */
  layerId: string;
  /**
    @description
      objectId */
  objectId: string;
};

/** @description response type for apiEmergencyGetEventPipeDetail */
interface ApiEmergencyGetEventPipeDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: any;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventPipeDetailResponseSuccess =
  ApiEmergencyGetEventPipeDetailResponse[200];
/**
 * @description
 *   获取爆管分析数据
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventPipeDetail = (
  option?: ApiEmergencyGetEventPipeDetailOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventPipeDetailResponseSuccess>(
    "/event/pipe/detail",
    { method: "get", query: option },
    config
  );

type ApiEmergencyGetEventPreplanByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventPreplanByIdId */
interface ApiEmergencyGetEventPreplanByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyPreplanDetailOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventPreplanByIdIdResponseSuccess =
  ApiEmergencyGetEventPreplanByIdIdResponse[200];
/**
 * @description
 *   根据事件主键id获取预案详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventPreplanByIdId = (
  option?: ApiEmergencyGetEventPreplanByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventPreplanByIdIdResponseSuccess>(
    "/event/preplanById/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventQueryTrafficOption = EmergencyTrafficInput;

/** @description response type for apiEmergencyPostEventQueryTraffic */
interface ApiEmergencyPostEventQueryTrafficResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyTrafficOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventQueryTrafficResponseSuccess =
  ApiEmergencyPostEventQueryTrafficResponse[200];
/**
 * @description
 *   应急人流信息查询
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventQueryTraffic = (
  option?: ApiEmergencyPostEventQueryTrafficOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventQueryTrafficResponseSuccess>(
    "/event/queryTraffic",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventReceiveByUserOption = EmergencyReciveInput;

/** @description response type for apiEmergencyPostEventReceiveByUser */
interface ApiEmergencyPostEventReceiveByUserResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputString;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventReceiveByUserResponseSuccess =
  ApiEmergencyPostEventReceiveByUserResponse[200];
/**
 * @description
 *   确认接警（App）
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventReceiveByUser = (
  option?: ApiEmergencyPostEventReceiveByUserOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventReceiveByUserResponseSuccess>(
    "/event/receiveByUser",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventReviewfileAddOption = EmergencyReviewFileInput;

/** @description response type for apiEmergencyPostEventReviewfileAdd */
interface ApiEmergencyPostEventReviewfileAddResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventReviewfileAddResponseSuccess =
  ApiEmergencyPostEventReviewfileAddResponse[200];
/**
 * @description
 *   复盘文件新增
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventReviewfileAdd = (
  option?: ApiEmergencyPostEventReviewfileAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventReviewfileAddResponseSuccess>(
    "/event/reviewfile/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventReviewfileDeleteIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventReviewfileDeleteId */
interface ApiEmergencyGetEventReviewfileDeleteIdResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventReviewfileDeleteIdResponseSuccess =
  ApiEmergencyGetEventReviewfileDeleteIdResponse[200];
/**
 * @description
 *   复盘文件删除
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventReviewfileDeleteId = (
  option?: ApiEmergencyGetEventReviewfileDeleteIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventReviewfileDeleteIdResponseSuccess>(
    "/event/reviewfile/delete/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventReviewfileListEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetEventReviewfileListEventId */
interface ApiEmergencyGetEventReviewfileListEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyReviewFileOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventReviewfileListEventIdResponseSuccess =
  ApiEmergencyGetEventReviewfileListEventIdResponse[200];
/**
 * @description
 *   复盘文件列表
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventReviewfileListEventId = (
  option?: ApiEmergencyGetEventReviewfileListEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventReviewfileListEventIdResponseSuccess>(
    "/event/reviewfile/list/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventSaveStemImgUrlOption = FeedbackImgInput;

/** @description response type for apiEmergencyPostEventSaveStemImgUrl */
interface ApiEmergencyPostEventSaveStemImgUrlResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventSaveStemImgUrlResponseSuccess =
  ApiEmergencyPostEventSaveStemImgUrlResponse[200];
/**
 * @description
 *   封堵反馈图片存储
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventSaveStemImgUrl = (
  option?: ApiEmergencyPostEventSaveStemImgUrlOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventSaveStemImgUrlResponseSuccess>(
    "/event/saveStemImgUrl",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventStartOption = EmergencyEventGroupInput;

/** @description response type for apiEmergencyPostEventStart */
interface ApiEmergencyPostEventStartResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventStartResponseSuccess =
  ApiEmergencyPostEventStartResponse[200];
/**
 * @description
 *   启动应急预案
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventStart = (
  option?: ApiEmergencyPostEventStartOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventStartResponseSuccess>(
    "/event/start",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventTaskAddOrUpdOption = EventNodeAddOrUpdInput;

/** @description response type for apiEmergencyPostEventTaskAddOrUpd */
interface ApiEmergencyPostEventTaskAddOrUpdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTaskAddOrUpdResponseSuccess =
  ApiEmergencyPostEventTaskAddOrUpdResponse[200];
/**
 * @description
 *   新建和修改  保存为待发布 和立即发布按钮 以及发布任务按钮接口
 *   新建和修改  保存为待发布 和立即发布按钮 以及发布任务按钮接口
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTaskAddOrUpd = (
  option?: ApiEmergencyPostEventTaskAddOrUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTaskAddOrUpdResponseSuccess>(
    "/event/task/addOrUpd",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventTaskAddOrUpdPersonOption =
  Array<EmergencyTaskPersonInput>;

/** @description response type for apiEmergencyPostEventTaskAddOrUpdPerson */
interface ApiEmergencyPostEventTaskAddOrUpdPersonResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTaskAddOrUpdPersonResponseSuccess =
  ApiEmergencyPostEventTaskAddOrUpdPersonResponse[200];
/**
 * @description
 *   添加或删除执行人
 *   添加或删除执行人
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTaskAddOrUpdPerson = (
  option?: ApiEmergencyPostEventTaskAddOrUpdPersonOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTaskAddOrUpdPersonResponseSuccess>(
    "/event/task/addOrUpdPerson",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventTaskCancelTaskOption = CancelTaskInput;

/** @description response type for apiEmergencyPostEventTaskCancelTask */
interface ApiEmergencyPostEventTaskCancelTaskResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTaskCancelTaskResponseSuccess =
  ApiEmergencyPostEventTaskCancelTaskResponse[200];
/**
 * @description
 *   取消任务
 *   取消任务
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTaskCancelTask = (
  option?: ApiEmergencyPostEventTaskCancelTaskOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTaskCancelTaskResponseSuccess>(
    "/event/task/cancelTask",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventTaskCustomizeFeedbackOption = IcomeFeedbackTaskInput;

/** @description response type for apiEmergencyPostEventTaskCustomizeFeedback */
interface ApiEmergencyPostEventTaskCustomizeFeedbackResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTaskCustomizeFeedbackResponseSuccess =
  ApiEmergencyPostEventTaskCustomizeFeedbackResponse[200];
/**
 * @description
 *   自定义icome任务反馈
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTaskCustomizeFeedback = (
  option?: ApiEmergencyPostEventTaskCustomizeFeedbackOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTaskCustomizeFeedbackResponseSuccess>(
    "/event/task/customize/feedback",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventTaskDelIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventTaskDelId */
interface ApiEmergencyGetEventTaskDelIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventTaskDelIdResponseSuccess =
  ApiEmergencyGetEventTaskDelIdResponse[200];
/**
 * @description
 *   任务中心删除接口
 * @tags 任务中心对应接口
 * @produces *
 */
export const apiEmergencyGetEventTaskDelId = (
  option?: ApiEmergencyGetEventTaskDelIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventTaskDelIdResponseSuccess>(
    "/event/task/del/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventTaskGetByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyPostEventTaskGetByIdId */
interface ApiEmergencyPostEventTaskGetByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyTaskListOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTaskGetByIdIdResponseSuccess =
  ApiEmergencyPostEventTaskGetByIdIdResponse[200];
/**
 * @description
 *   任务中心详情查询
 *   任务中心详情查询
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTaskGetByIdId = (
  option?: ApiEmergencyPostEventTaskGetByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTaskGetByIdIdResponseSuccess>(
    "/event/task/getById/:id",
    { method: "post", path: option },
    config
  );

type ApiEmergencyGetEventTaskGetNodeByEventIdEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetEventTaskGetNodeByEventIdEventId */
interface ApiEmergencyGetEventTaskGetNodeByEventIdEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EventNodeListOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventTaskGetNodeByEventIdEventIdResponseSuccess =
  ApiEmergencyGetEventTaskGetNodeByEventIdEventIdResponse[200];
/**
 * @description
 *   获取事件节点接口
 *   获取事件节点接口
 * @tags 任务中心对应接口
 * @produces *
 */
export const apiEmergencyGetEventTaskGetNodeByEventIdEventId = (
  option?: ApiEmergencyGetEventTaskGetNodeByEventIdEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventTaskGetNodeByEventIdEventIdResponseSuccess>(
    "/event/task/getNodeByEventId/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetEventTaskHandleIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventTaskHandleId */
interface ApiEmergencyGetEventTaskHandleIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventTaskHandleIdResponseSuccess =
  ApiEmergencyGetEventTaskHandleIdResponse[200];
/**
 * @description
 *   任务督办
 *   任务督办
 * @tags 任务中心对应接口
 * @produces *
 */
export const apiEmergencyGetEventTaskHandleId = (
  option?: ApiEmergencyGetEventTaskHandleIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventTaskHandleIdResponseSuccess>(
    "/event/task/handle/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventTaskListOption = EmergencyTaskListInput;

/** @description response type for apiEmergencyPostEventTaskList */
interface ApiEmergencyPostEventTaskListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyTaskListOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTaskListResponseSuccess =
  ApiEmergencyPostEventTaskListResponse[200];
/**
 * @description
 *   任务中心列表查询
 *   任务中心列表查询
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTaskList = (
  option?: ApiEmergencyPostEventTaskListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTaskListResponseSuccess>(
    "/event/task/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventTaskPublishOption = PublishInput;

/** @description response type for apiEmergencyPostEventTaskPublish */
interface ApiEmergencyPostEventTaskPublishResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTaskPublishResponseSuccess =
  ApiEmergencyPostEventTaskPublishResponse[200];
/**
 * @description
 *   发布任务接口 列表发布按钮和一键发布所有任务按钮接口
 *   发布任务接口 列表发布按钮和一键发布所有任务按钮接口
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTaskPublish = (
  option?: ApiEmergencyPostEventTaskPublishOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTaskPublishResponseSuccess>(
    "/event/task/publish",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventTaskStatusNumberOption = EmergencyTaskInput;

/** @description response type for apiEmergencyPostEventTaskStatusNumber */
interface ApiEmergencyPostEventTaskStatusNumberResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyTaskNumberOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTaskStatusNumberResponseSuccess =
  ApiEmergencyPostEventTaskStatusNumberResponse[200];
/**
 * @description
 *   各任务状态数量
 *   各任务状态数量
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTaskStatusNumber = (
  option?: ApiEmergencyPostEventTaskStatusNumberOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTaskStatusNumberResponseSuccess>(
    "/event/task/status/number",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventTaskTypeEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetEventTaskTypeEventId */
interface ApiEmergencyGetEventTaskTypeEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EventTaskTypeOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventTaskTypeEventIdResponseSuccess =
  ApiEmergencyGetEventTaskTypeEventIdResponse[200];
/**
 * @description
 *   任务类型列表
 * @tags 任务中心对应接口
 * @produces *
 */
export const apiEmergencyGetEventTaskTypeEventId = (
  option?: ApiEmergencyGetEventTaskTypeEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventTaskTypeEventIdResponseSuccess>(
    "/event/task/type/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventTerminateOption = EmergencyEventTerminationInput;

/** @description response type for apiEmergencyPostEventTerminate */
interface ApiEmergencyPostEventTerminateResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTerminateResponseSuccess =
  ApiEmergencyPostEventTerminateResponse[200];
/**
 * @description
 *   应急终止
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTerminate = (
  option?: ApiEmergencyPostEventTerminateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTerminateResponseSuccess>(
    "/event/terminate",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventTerminateMisreportOption = EmergencyEventConfirmInput;

/** @description response type for apiEmergencyPostEventTerminateMisreport */
interface ApiEmergencyPostEventTerminateMisreportResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTerminateMisreportResponseSuccess =
  ApiEmergencyPostEventTerminateMisreportResponse[200];
/**
 * @description
 *   终止误报事件
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTerminateMisreport = (
  option?: ApiEmergencyPostEventTerminateMisreportOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTerminateMisreportResponseSuccess>(
    "/event/terminateMisreport",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventTestKafkaProducerOption = {
  [propertyName: string]: any;
};

/** @description response type for apiEmergencyPostEventTestKafkaProducer */
interface ApiEmergencyPostEventTestKafkaProducerResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventTestKafkaProducerResponseSuccess =
  ApiEmergencyPostEventTestKafkaProducerResponse[200];
/**
 * @description
 *   testKafkaProducer
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventTestKafkaProducer = (
  option?: ApiEmergencyPostEventTestKafkaProducerOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventTestKafkaProducerResponseSuccess>(
    "/event/testKafkaProducer",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventUnNormalEndOption = EventUnNormalEndInput;

/** @description response type for apiEmergencyPostEventUnNormalEnd */
interface ApiEmergencyPostEventUnNormalEndResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventUnNormalEndResponseSuccess =
  ApiEmergencyPostEventUnNormalEndResponse[200];
/**
 * @description
 *   事件非正常结束反馈
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventUnNormalEnd = (
  option?: ApiEmergencyPostEventUnNormalEndOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventUnNormalEndResponseSuccess>(
    "/event/unNormal/end",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventUnfinishNodeOption = EventIcomeInput;

/** @description response type for apiEmergencyPostEventUnfinishNode */
interface ApiEmergencyPostEventUnfinishNodeResponse {
  /**
   * @description
   *   OK
   */
  200: EventUnFinishNodeOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventUnfinishNodeResponseSuccess =
  ApiEmergencyPostEventUnfinishNodeResponse[200];
/**
 * @description
 *   根据群组id获取事件未完成节点
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventUnfinishNode = (
  option?: ApiEmergencyPostEventUnfinishNodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventUnfinishNodeResponseSuccess>(
    "/event/unfinish/node",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventVehicleTrackOption = VehicleTrackInput;

/** @description response type for apiEmergencyPostEventVehicleTrack */
interface ApiEmergencyPostEventVehicleTrackResponse {
  /**
   * @description
   *   OK
   */
  200: VehicleTrackOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventVehicleTrackResponseSuccess =
  ApiEmergencyPostEventVehicleTrackResponse[200];
/**
 * @description
 *   车辆轨迹信息
 * @tags 事件管理接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventVehicleTrack = (
  option?: ApiEmergencyPostEventVehicleTrackOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventVehicleTrackResponseSuccess>(
    "/event/vehicle/track",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventVehicleEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetEventVehicleEventId */
interface ApiEmergencyGetEventVehicleEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<string>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventVehicleEventIdResponseSuccess =
  ApiEmergencyGetEventVehicleEventIdResponse[200];
/**
 * @description
 *   事件调度车辆列表
 * @tags 事件管理接口
 * @produces *
 */
export const apiEmergencyGetEventVehicleEventId = (
  option?: ApiEmergencyGetEventVehicleEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventVehicleEventIdResponseSuccess>(
    "/event/vehicle/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostEventVideoAddOption = EmergencyEventVideoInput;

/** @description response type for apiEmergencyPostEventVideoAdd */
interface ApiEmergencyPostEventVideoAddResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventVideoAddResponseSuccess =
  ApiEmergencyPostEventVideoAddResponse[200];
/**
 * @description
 *   保存应急事件录屏文件url
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventVideoAdd = (
  option?: ApiEmergencyPostEventVideoAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventVideoAddResponseSuccess>(
    "/event/video/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostEventVideoUpdateOption = Array<EmergencyEventVideoInput>;

/** @description response type for apiEmergencyPostEventVideoUpdate */
interface ApiEmergencyPostEventVideoUpdateResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostEventVideoUpdateResponseSuccess =
  ApiEmergencyPostEventVideoUpdateResponse[200];
/**
 * @description
 *   更新应急事件设备列表
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostEventVideoUpdate = (
  option?: ApiEmergencyPostEventVideoUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostEventVideoUpdateResponseSuccess>(
    "/event/video/update",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetEventVideoIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetEventVideoId */
interface ApiEmergencyGetEventVideoIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyEventVideoOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetEventVideoIdResponseSuccess =
  ApiEmergencyGetEventVideoIdResponse[200];
/**
 * @description
 *   获取事件影像资料
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetEventVideoId = (
  option?: ApiEmergencyGetEventVideoIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetEventVideoIdResponseSuccess>(
    "/event/video/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostExpertGroupListOption = ExpertGroupQueryInput;

/** @description response type for apiEmergencyPostExpertGroupList */
interface ApiEmergencyPostExpertGroupListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ExpertGroupOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostExpertGroupListResponseSuccess =
  ApiEmergencyPostExpertGroupListResponse[200];
/**
 * @description
 *   查询专家群组
 * @tags 专家与联系人配置
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostExpertGroupList = (
  option?: ApiEmergencyPostExpertGroupListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostExpertGroupListResponseSuccess>(
    "/expert/group/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostExpertGroupSaveOption = ExpertGroupSavedReqInput;

/** @description response type for apiEmergencyPostExpertGroupSave */
interface ApiEmergencyPostExpertGroupSaveResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostExpertGroupSaveResponseSuccess =
  ApiEmergencyPostExpertGroupSaveResponse[200];
/**
 * @description
 *   保存专家群组
 * @tags 专家与联系人配置
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostExpertGroupSave = (
  option?: ApiEmergencyPostExpertGroupSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostExpertGroupSaveResponseSuccess>(
    "/expert/group/save",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostExpertListOption = ExpertQueryInput;

/** @description response type for apiEmergencyPostExpertList */
interface ApiEmergencyPostExpertListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ExpertOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostExpertListResponseSuccess =
  ApiEmergencyPostExpertListResponse[200];
/**
 * @description
 *   查询专家
 * @tags 专家与联系人配置
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostExpertList = (
  option?: ApiEmergencyPostExpertListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostExpertListResponseSuccess>(
    "/expert/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostFixedGasSupplyEmergencyDispatchOption = SupplyGasInput;

/** @description response type for apiEmergencyPostFixedGasSupplyEmergencyDispatch */
interface ApiEmergencyPostFixedGasSupplyEmergencyDispatchResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostFixedGasSupplyEmergencyDispatchResponseSuccess =
  ApiEmergencyPostFixedGasSupplyEmergencyDispatchResponse[200];
/**
 * @description
 *   应急撬调配
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostFixedGasSupplyEmergencyDispatch = (
  option?: ApiEmergencyPostFixedGasSupplyEmergencyDispatchOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostFixedGasSupplyEmergencyDispatchResponseSuccess>(
    "/fixed/gas/supply/emergency/dispatch",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetFixedGasSupplyIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiEmergencyGetFixedGasSupplyId */
interface ApiEmergencyGetFixedGasSupplyIdResponse {
  /**
   * @description
   *   OK
   */
  200: GisGasSupplyOutputDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetFixedGasSupplyIdResponseSuccess =
  ApiEmergencyGetFixedGasSupplyIdResponse[200];
/**
 * @description
 *   固定补气点详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetFixedGasSupplyId = (
  option?: ApiEmergencyGetFixedGasSupplyIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetFixedGasSupplyIdResponseSuccess>(
    "/fixed/gas/supply/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostFocusByCompanyCodeOption = FocusAreaDetailsInput;

/** @description response type for apiEmergencyPostFocusByCompanyCode */
interface ApiEmergencyPostFocusByCompanyCodeResponse {
  /**
   * @description
   *   OK
   */
  200: PageResultOutputEmergencyFocusAreaDetailsOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostFocusByCompanyCodeResponseSuccess =
  ApiEmergencyPostFocusByCompanyCodeResponse[200];
/**
 * @description
 *   获取对应公司下的重点区域
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostFocusByCompanyCode = (
  option?: ApiEmergencyPostFocusByCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostFocusByCompanyCodeResponseSuccess>(
    "/focus/byCompanyCode",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGasSupplyListOption = SupplyGasInput;

/** @description response type for apiEmergencyPostGasSupplyList */
interface ApiEmergencyPostGasSupplyListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGasSupplyListResponseSuccess =
  ApiEmergencyPostGasSupplyListResponse[200];
/**
 * @description
 *   补气点列表
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGasSupplyList = (
  option?: ApiEmergencyPostGasSupplyListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGasSupplyListResponseSuccess>(
    "/gas/supply/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetGetGasEventCodeOption = {
  /**
    @description
      eventCode */
  eventCode: string;
};

/** @description response type for apiEmergencyGetGetGasEventCode */
interface ApiEmergencyGetGetGasEventCodeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: string;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetGetGasEventCodeResponseSuccess =
  ApiEmergencyGetGetGasEventCodeResponse[200];
/**
 * @description
 *   getGasId
 * @tags dispatch-controller
 * @produces *
 */
export const apiEmergencyGetGetGasEventCode = (
  option?: ApiEmergencyGetGetGasEventCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetGetGasEventCodeResponseSuccess>(
    "/get/gas/:eventCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetGetTransportationEventCodeOption = {
  /**
    @description
      eventCode */
  eventCode: string;
};

/** @description response type for apiEmergencyGetGetTransportationEventCode */
interface ApiEmergencyGetGetTransportationEventCodeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: number;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetGetTransportationEventCodeResponseSuccess =
  ApiEmergencyGetGetTransportationEventCodeResponse[200];
/**
 * @description
 *   getTransportation
 * @tags dispatch-controller
 * @produces *
 */
export const apiEmergencyGetGetTransportationEventCode = (
  option?: ApiEmergencyGetGetTransportationEventCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetGetTransportationEventCodeResponseSuccess>(
    "/get/transportation/:eventCode",
    { method: "get", path: option },
    config
  );

/** @description response type for apiEmergencyGetGetTokenTest */
interface ApiEmergencyGetGetTokenTestResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetGetTokenTestResponseSuccess =
  ApiEmergencyGetGetTokenTestResponse[200];
/**
 * @description
 *   getTokenTest
 * @tags 事件管理接口
 * @produces *
 */
export const apiEmergencyGetGetTokenTest = (config?: AxiosRequestConfig) =>
  requester<ApiEmergencyGetGetTokenTestResponseSuccess>(
    "/getTokenTest",
    { method: "get" },
    config
  );

type ApiEmergencyGetGetVehicleLocationEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiEmergencyGetGetVehicleLocationEcode */
interface ApiEmergencyGetGetVehicleLocationEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<VehicleLocationOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetGetVehicleLocationEcodeResponseSuccess =
  ApiEmergencyGetGetVehicleLocationEcodeResponse[200];
/**
 * @description
 *   根据实体获取车辆位置信息
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetGetVehicleLocationEcode = (
  option?: ApiEmergencyGetGetVehicleLocationEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetGetVehicleLocationEcodeResponseSuccess>(
    "/getVehicleLocation/:ecode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetGetVehicleMapInfoIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetGetVehicleMapInfoId */
interface ApiEmergencyGetGetVehicleMapInfoIdResponse {
  /**
   * @description
   *   OK
   */
  200: VehicleMapOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetGetVehicleMapInfoIdResponseSuccess =
  ApiEmergencyGetGetVehicleMapInfoIdResponse[200];
/**
 * @description
 *   获取车辆地图上显示的信息
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetGetVehicleMapInfoId = (
  option?: ApiEmergencyGetGetVehicleMapInfoIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetGetVehicleMapInfoIdResponseSuccess>(
    "/getVehicleMapInfo/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetGisGasLayerLayerIdOption = {
  /**
    @description
      layerId */
  layerId: string;
};

/** @description response type for apiEmergencyGetGisGasLayerLayerId */
interface ApiEmergencyGetGisGasLayerLayerIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<GisGasSupplyOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetGisGasLayerLayerIdResponseSuccess =
  ApiEmergencyGetGisGasLayerLayerIdResponse[200];
/**
 * @description
 *   固定补气点数据查询
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetGisGasLayerLayerId = (
  option?: ApiEmergencyGetGisGasLayerLayerIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetGisGasLayerLayerIdResponseSuccess>(
    "/gis/gas/layer/:layerId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostGoodsOption = EventGoodsListInput;

/** @description response type for apiEmergencyPostGoods */
interface ApiEmergencyPostGoodsResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListGoods;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsResponseSuccess = ApiEmergencyPostGoodsResponse[200];
/**
 * @description
 *   获取全部储备库
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoods = (
  option?: ApiEmergencyPostGoodsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsResponseSuccess>(
    "/goods",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsAddOption = GoodsInput;

/** @description response type for apiEmergencyPostGoodsAdd */
interface ApiEmergencyPostGoodsAddResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsAddResponseSuccess =
  ApiEmergencyPostGoodsAddResponse[200];
/**
 * @description
 *   应急物资库新增
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsAdd = (
  option?: ApiEmergencyPostGoodsAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsAddResponseSuccess>(
    "/goods/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsDelOption = GoodsDelInput;

/** @description response type for apiEmergencyPostGoodsDel */
interface ApiEmergencyPostGoodsDelResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsDelResponseSuccess =
  ApiEmergencyPostGoodsDelResponse[200];
/**
 * @description
 *   应急物资库删除
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsDel = (
  option?: ApiEmergencyPostGoodsDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsDelResponseSuccess>(
    "/goods/del",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsDeviceAddOption = GoodsDeviceInput;

/** @description response type for apiEmergencyPostGoodsDeviceAdd */
interface ApiEmergencyPostGoodsDeviceAddResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsDeviceAddResponseSuccess =
  ApiEmergencyPostGoodsDeviceAddResponse[200];
/**
 * @description
 *   物资装备清单新增
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsDeviceAdd = (
  option?: ApiEmergencyPostGoodsDeviceAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsDeviceAddResponseSuccess>(
    "/goods/device/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsDeviceBatchDelOption = GoodsDeviceBatchDelInput;

/** @description response type for apiEmergencyPostGoodsDeviceBatchDel */
interface ApiEmergencyPostGoodsDeviceBatchDelResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsDeviceBatchDelResponseSuccess =
  ApiEmergencyPostGoodsDeviceBatchDelResponse[200];
/**
 * @description
 *   物资装备清单批量删除
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsDeviceBatchDel = (
  option?: ApiEmergencyPostGoodsDeviceBatchDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsDeviceBatchDelResponseSuccess>(
    "/goods/device/batch/del",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsDeviceCountOption = GoodsDeviceListInput;

/** @description response type for apiEmergencyPostGoodsDeviceCount */
interface ApiEmergencyPostGoodsDeviceCountResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputGoodsDeviceCountOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsDeviceCountResponseSuccess =
  ApiEmergencyPostGoodsDeviceCountResponse[200];
/**
 * @description
 *   物资装备清单列表
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsDeviceCount = (
  option?: ApiEmergencyPostGoodsDeviceCountOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsDeviceCountResponseSuccess>(
    "/goods/device/count",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsDeviceDelOption = GoodsDeviceDelInput;

/** @description response type for apiEmergencyPostGoodsDeviceDel */
interface ApiEmergencyPostGoodsDeviceDelResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsDeviceDelResponseSuccess =
  ApiEmergencyPostGoodsDeviceDelResponse[200];
/**
 * @description
 *   物资装备清单删除
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsDeviceDel = (
  option?: ApiEmergencyPostGoodsDeviceDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsDeviceDelResponseSuccess>(
    "/goods/device/del",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsDeviceDetailDeviceIdOption = {
  /**
    @description
      deviceId
    @format int64 */
  deviceId: number;
};

/** @description response type for apiEmergencyPostGoodsDeviceDetailDeviceId */
interface ApiEmergencyPostGoodsDeviceDetailDeviceIdResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputGoodsDeviceDetailOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsDeviceDetailDeviceIdResponseSuccess =
  ApiEmergencyPostGoodsDeviceDetailDeviceIdResponse[200];
/**
 * @description
 *   物资装备清单详情
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsDeviceDetailDeviceId = (
  option?: ApiEmergencyPostGoodsDeviceDetailDeviceIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsDeviceDetailDeviceIdResponseSuccess>(
    "/goods/device/detail/:deviceId",
    { method: "post", path: option },
    config
  );

/** @description response type for apiEmergencyGetGoodsDeviceDict */
interface ApiEmergencyGetGoodsDeviceDictResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputDeviceDict;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetGoodsDeviceDictResponseSuccess =
  ApiEmergencyGetGoodsDeviceDictResponse[200];
/**
 * @description
 *   获取物资装备全部类别
 * @tags 应急物资接口
 * @produces *
 */
export const apiEmergencyGetGoodsDeviceDict = (config?: AxiosRequestConfig) =>
  requester<ApiEmergencyGetGoodsDeviceDictResponseSuccess>(
    "/goods/device/dict",
    { method: "get" },
    config
  );

type ApiEmergencyPostGoodsDeviceEditOption = GoodsDeviceInput;

/** @description response type for apiEmergencyPostGoodsDeviceEdit */
interface ApiEmergencyPostGoodsDeviceEditResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsDeviceEditResponseSuccess =
  ApiEmergencyPostGoodsDeviceEditResponse[200];
/**
 * @description
 *   物资装备清单编辑
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsDeviceEdit = (
  option?: ApiEmergencyPostGoodsDeviceEditOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsDeviceEditResponseSuccess>(
    "/goods/device/edit",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsDeviceListOption = GoodsDeviceListInput;

/** @description response type for apiEmergencyPostGoodsDeviceList */
interface ApiEmergencyPostGoodsDeviceListResponse {
  /**
   * @description
   *   OK
   */
  200: PageResultOutputGoodsDeviceListOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsDeviceListResponseSuccess =
  ApiEmergencyPostGoodsDeviceListResponse[200];
/**
 * @description
 *   物资装备清单列表
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsDeviceList = (
  option?: ApiEmergencyPostGoodsDeviceListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsDeviceListResponseSuccess>(
    "/goods/device/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsEditOption = GoodsInput;

/** @description response type for apiEmergencyPostGoodsEdit */
interface ApiEmergencyPostGoodsEditResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsEditResponseSuccess =
  ApiEmergencyPostGoodsEditResponse[200];
/**
 * @description
 *   应急物资库编辑
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsEdit = (
  option?: ApiEmergencyPostGoodsEditOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsEditResponseSuccess>(
    "/goods/edit",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsListOption = GoodsListInput;

/** @description response type for apiEmergencyPostGoodsList */
interface ApiEmergencyPostGoodsListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListGoodsOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsListResponseSuccess =
  ApiEmergencyPostGoodsListResponse[200];
/**
 * @description
 *   应急物资库列表
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsList = (
  option?: ApiEmergencyPostGoodsListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsListResponseSuccess>(
    "/goods/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostGoodsGoodsIdOption = {
  /**
    @description
      goodsId
    @format int64 */
  goodsId: number;
};

/** @description response type for apiEmergencyPostGoodsGoodsId */
interface ApiEmergencyPostGoodsGoodsIdResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputGoodsDetailOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostGoodsGoodsIdResponseSuccess =
  ApiEmergencyPostGoodsGoodsIdResponse[200];
/**
 * @description
 *   应急物资库详情
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostGoodsGoodsId = (
  option?: ApiEmergencyPostGoodsGoodsIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostGoodsGoodsIdResponseSuccess>(
    "/goods/:goodsId",
    { method: "post", path: option },
    config
  );

type ApiEmergencyPostIcomeProgressOption = EmergencyIcomeMsgInput;

/** @description response type for apiEmergencyPostIcomeProgress */
interface ApiEmergencyPostIcomeProgressResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostIcomeProgressResponseSuccess =
  ApiEmergencyPostIcomeProgressResponse[200];
/**
 * @description
 *   sendIcomeProgress
 * @tags icome-progress-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostIcomeProgress = (
  option?: ApiEmergencyPostIcomeProgressOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostIcomeProgressResponseSuccess>(
    "/icome/progress",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostLngLatQueryLngLatToAddressOption = LngLatInput;

/** @description response type for apiEmergencyPostLngLatQueryLngLatToAddress */
interface ApiEmergencyPostLngLatQueryLngLatToAddressResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostLngLatQueryLngLatToAddressResponseSuccess =
  ApiEmergencyPostLngLatQueryLngLatToAddressResponse[200];
/**
 * @description
 *   queryLngLatToAddress
 * @tags map-points-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostLngLatQueryLngLatToAddress = (
  option?: ApiEmergencyPostLngLatQueryLngLatToAddressOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostLngLatQueryLngLatToAddressResponseSuccess>(
    "/lngLat/queryLngLatToAddress",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetLocationCarDispatchCpmoCodeEventCodeOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      eventCode */
  eventCode: string;
};

/** @description response type for apiEmergencyGetLocationCarDispatchCpmoCodeEventCode */
interface ApiEmergencyGetLocationCarDispatchCpmoCodeEventCodeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: any;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetLocationCarDispatchCpmoCodeEventCodeResponseSuccess =
  ApiEmergencyGetLocationCarDispatchCpmoCodeEventCodeResponse[200];
/**
 * @description
 *   获取车辆已调度图层接口
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetLocationCarDispatchCpmoCodeEventCode = (
  option?: ApiEmergencyGetLocationCarDispatchCpmoCodeEventCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetLocationCarDispatchCpmoCodeEventCodeResponseSuccess>(
    "/location/car/dispatch/:cpmoCode/:eventCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetLocationCarCpmoCodeEventCodeOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      eventCode */
  eventCode: string;
};

/** @description response type for apiEmergencyGetLocationCarCpmoCodeEventCode */
interface ApiEmergencyGetLocationCarCpmoCodeEventCodeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: any;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetLocationCarCpmoCodeEventCodeResponseSuccess =
  ApiEmergencyGetLocationCarCpmoCodeEventCodeResponse[200];
/**
 * @description
 *   获取车辆图层接口
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetLocationCarCpmoCodeEventCode = (
  option?: ApiEmergencyGetLocationCarCpmoCodeEventCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetLocationCarCpmoCodeEventCodeResponseSuccess>(
    "/location/car/:cpmoCode/:eventCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetLocationGasCpmoCodeEventCodeOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      eventCode */
  eventCode: string;
};

/** @description response type for apiEmergencyGetLocationGasCpmoCodeEventCode */
interface ApiEmergencyGetLocationGasCpmoCodeEventCodeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: any;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetLocationGasCpmoCodeEventCodeResponseSuccess =
  ApiEmergencyGetLocationGasCpmoCodeEventCodeResponse[200];
/**
 * @description
 *   获取补气点图层接口
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetLocationGasCpmoCodeEventCode = (
  option?: ApiEmergencyGetLocationGasCpmoCodeEventCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetLocationGasCpmoCodeEventCodeResponseSuccess>(
    "/location/gas/:cpmoCode/:eventCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostLocationGetResourceOption = DispatchResourceInput;

/** @description response type for apiEmergencyPostLocationGetResource */
interface ApiEmergencyPostLocationGetResourceResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListDispatchResourceOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostLocationGetResourceResponseSuccess =
  ApiEmergencyPostLocationGetResourceResponse[200];
/**
 * @description
 *   获取资源调配信息 图层接口
 * @tags map-points-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostLocationGetResource = (
  option?: ApiEmergencyPostLocationGetResourceOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostLocationGetResourceResponseSuccess>(
    "/location/getResource",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetLocationGetTrackEcodeBtimeEtimeOption = {
  /**
    @description
      btime */
  btime: string;
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      etime */
  etime: string;
};

/** @description response type for apiEmergencyGetLocationGetTrackEcodeBtimeEtime */
interface ApiEmergencyGetLocationGetTrackEcodeBtimeEtimeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: any;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetLocationGetTrackEcodeBtimeEtimeResponseSuccess =
  ApiEmergencyGetLocationGetTrackEcodeBtimeEtimeResponse[200];
/**
 * @description
 *   获取车辆轨迹接口
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetLocationGetTrackEcodeBtimeEtime = (
  option?: ApiEmergencyGetLocationGetTrackEcodeBtimeEtimeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetLocationGetTrackEcodeBtimeEtimeResponseSuccess>(
    "/location/getTrack/:ecode/:btime/:etime",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetLocationPersonDispatchCpmoCodeEventCodeDistanceOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      distance */
  distance: string;
  /**
    @description
      eventCode */
  eventCode: string;
};

/** @description response type for apiEmergencyGetLocationPersonDispatchCpmoCodeEventCodeDistance */
interface ApiEmergencyGetLocationPersonDispatchCpmoCodeEventCodeDistanceResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: any;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetLocationPersonDispatchCpmoCodeEventCodeDistanceResponseSuccess =
  ApiEmergencyGetLocationPersonDispatchCpmoCodeEventCodeDistanceResponse[200];
/**
 * @description
 *   获取人员已调度图层接口
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetLocationPersonDispatchCpmoCodeEventCodeDistance = (
  option?: ApiEmergencyGetLocationPersonDispatchCpmoCodeEventCodeDistanceOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetLocationPersonDispatchCpmoCodeEventCodeDistanceResponseSuccess>(
    "/location/person/dispatch/:cpmoCode/:eventCode/:distance",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetLocationPersonCpmoCodeEventCodeDistanceOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      distance */
  distance: string;
  /**
    @description
      eventCode */
  eventCode: string;
};

/** @description response type for apiEmergencyGetLocationPersonCpmoCodeEventCodeDistance */
interface ApiEmergencyGetLocationPersonCpmoCodeEventCodeDistanceResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: any;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetLocationPersonCpmoCodeEventCodeDistanceResponseSuccess =
  ApiEmergencyGetLocationPersonCpmoCodeEventCodeDistanceResponse[200];
/**
 * @description
 *   获取人员图层接口
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetLocationPersonCpmoCodeEventCodeDistance = (
  option?: ApiEmergencyGetLocationPersonCpmoCodeEventCodeDistanceOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetLocationPersonCpmoCodeEventCodeDistanceResponseSuccess>(
    "/location/person/:cpmoCode/:eventCode/:distance",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetLocationCpmoCodeOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
};

/** @description response type for apiEmergencyGetLocationCpmoCode */
interface ApiEmergencyGetLocationCpmoCodeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: any;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetLocationCpmoCodeResponseSuccess =
  ApiEmergencyGetLocationCpmoCodeResponse[200];
/**
 * @description
 *   获取图层信息接口
 * @tags map-points-controller
 * @produces *
 */
export const apiEmergencyGetLocationCpmoCode = (
  option?: ApiEmergencyGetLocationCpmoCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetLocationCpmoCodeResponseSuccess>(
    "/location/:cpmoCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostMapDeviceOption = LongLatInput;

/** @description response type for apiEmergencyPostMapDevice */
interface ApiEmergencyPostMapDeviceResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MapDeviceOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMapDeviceResponseSuccess =
  ApiEmergencyPostMapDeviceResponse[200];
/**
 * @description
 *   getMapDevice
 * @tags pressure-chart-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMapDevice = (
  option?: ApiEmergencyPostMapDeviceOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMapDeviceResponseSuccess>(
    "/map/device",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetMergeGetDetailsByMergeIdMergeIdOption = {
  /**
    @description
      mergeId
    @format int64 */
  mergeId: number;
};

/** @description response type for apiEmergencyGetMergeGetDetailsByMergeIdMergeId */
interface ApiEmergencyGetMergeGetDetailsByMergeIdMergeIdResponse {
  /**
   * @description
   *   OK
   */
  200: EventReportDetailOuput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMergeGetDetailsByMergeIdMergeIdResponseSuccess =
  ApiEmergencyGetMergeGetDetailsByMergeIdMergeIdResponse[200];
/**
 * @description
 *   getDetailsByMergeId
 * @tags 应急事件合并模块
 * @produces *
 */
export const apiEmergencyGetMergeGetDetailsByMergeIdMergeId = (
  option?: ApiEmergencyGetMergeGetDetailsByMergeIdMergeIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetMergeGetDetailsByMergeIdMergeIdResponseSuccess>(
    "/merge/getDetailsByMergeId/:mergeId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetMergeGetEventReportDetailsIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetMergeGetEventReportDetailsId */
interface ApiEmergencyGetMergeGetEventReportDetailsIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EventReportDetailOuput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMergeGetEventReportDetailsIdResponseSuccess =
  ApiEmergencyGetMergeGetEventReportDetailsIdResponse[200];
/**
 * @description
 *   getEventReportDetails
 * @tags 应急事件合并模块
 * @produces *
 */
export const apiEmergencyGetMergeGetEventReportDetailsId = (
  option?: ApiEmergencyGetMergeGetEventReportDetailsIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetMergeGetEventReportDetailsIdResponseSuccess>(
    "/merge/getEventReportDetails/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostMergeGetMergeEventListOption = EmergencyEventMergeInput;

/** @description response type for apiEmergencyPostMergeGetMergeEventList */
interface ApiEmergencyPostMergeGetMergeEventListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyEventEntryOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMergeGetMergeEventListResponseSuccess =
  ApiEmergencyPostMergeGetMergeEventListResponse[200];
/**
 * @description
 *   getMergeEventList
 * @tags 应急事件合并模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMergeGetMergeEventList = (
  option?: ApiEmergencyPostMergeGetMergeEventListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMergeGetMergeEventListResponseSuccess>(
    "/merge/getMergeEventList",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetMergeMergeEventParentIdEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
  /**
    @description
      parentId
    @format int64 */
  parentId: number;
};

/** @description response type for apiEmergencyGetMergeMergeEventParentIdEventId */
interface ApiEmergencyGetMergeMergeEventParentIdEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMergeMergeEventParentIdEventIdResponseSuccess =
  ApiEmergencyGetMergeMergeEventParentIdEventIdResponse[200];
/**
 * @description
 *   mergeEvent
 * @tags 应急事件合并模块
 * @produces *
 */
export const apiEmergencyGetMergeMergeEventParentIdEventId = (
  option?: ApiEmergencyGetMergeMergeEventParentIdEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetMergeMergeEventParentIdEventIdResponseSuccess>(
    "/merge/mergeEvent/:parentId/:eventId",
    { method: "get", path: option },
    config
  );

/** @description response type for apiEmergencyGetMonitorServer */
interface ApiEmergencyGetMonitorServerResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMonitorServerResponseSuccess =
  ApiEmergencyGetMonitorServerResponse[200];
/**
 * @description
 *   getInfo
 * @tags monitor-controller
 * @produces *
 */
export const apiEmergencyGetMonitorServer = (config?: AxiosRequestConfig) =>
  requester<ApiEmergencyGetMonitorServerResponseSuccess>(
    "/monitor/server",
    { method: "get" },
    config
  );

type ApiEmergencyPostMsgConfigAddOption = EmergencyMsgTemplateConfigInputDto;

/** @description response type for apiEmergencyPostMsgConfigAdd */
interface ApiEmergencyPostMsgConfigAddResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgConfigAddResponseSuccess =
  ApiEmergencyPostMsgConfigAddResponse[200];
/**
 * @description
 *   添加接口
 *   添加接口
 * @tags 应急抢险-消息配置接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgConfigAdd = (
  option?: ApiEmergencyPostMsgConfigAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgConfigAddResponseSuccess>(
    "/msg/config/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostMsgConfigDelIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiEmergencyPostMsgConfigDelId */
interface ApiEmergencyPostMsgConfigDelIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgConfigDelIdResponseSuccess =
  ApiEmergencyPostMsgConfigDelIdResponse[200];
/**
 * @description
 *   删除接口
 *   删除接口 多个参数,号分割
 * @tags 应急抢险-消息配置接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgConfigDelId = (
  option?: ApiEmergencyPostMsgConfigDelIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgConfigDelIdResponseSuccess>(
    "/msg/config/del/:id",
    { method: "post", path: option },
    config
  );

type ApiEmergencyGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeOption = {
  /**
    @description
      compCode */
  compCode: string;
  /**
    @description
      type
    @format int32 */
  type: number;
};

/** @description response type for apiEmergencyGetMsgConfigGetAllTemplateByCompCodeCompCodeType */
interface ApiEmergencyGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MsgTemplate>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeResponseSuccess =
  ApiEmergencyGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeResponse[200];
/**
 * @description
 *   获取公司下的对应模板
 *   获取公司下的对应模板
 * @tags 应急抢险-消息配置接口
 * @produces *
 */
export const apiEmergencyGetMsgConfigGetAllTemplateByCompCodeCompCodeType = (
  option?: ApiEmergencyGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeResponseSuccess>(
    "/msg/config/getAllTemplateByCompCode/:compCode/:type",
    { method: "get", path: option },
    config
  );

/** @description response type for apiEmergencyPostMsgConfigGetExample */
interface ApiEmergencyPostMsgConfigGetExampleResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ExampleOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgConfigGetExampleResponseSuccess =
  ApiEmergencyPostMsgConfigGetExampleResponse[200];
/**
 * @description
 *   信息样例
 *   信息样例
 * @tags 应急抢险-消息配置接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgConfigGetExample = (
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgConfigGetExampleResponseSuccess>(
    "/msg/config/getExample",
    { method: "post" },
    config
  );

type ApiEmergencyGetMsgConfigGetIdIdCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetMsgConfigGetIdIdCpmoCop */
interface ApiEmergencyGetMsgConfigGetIdIdCpmoCopResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyMsgTemplateConfigOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMsgConfigGetIdIdCpmoCopResponseSuccess =
  ApiEmergencyGetMsgConfigGetIdIdCpmoCopResponse[200];
/**
 * @description
 *   详情接口
 *   详情接口
 * @tags 应急抢险-消息配置接口
 * @produces *
 */
export const apiEmergencyGetMsgConfigGetIdIdCpmoCop = (
  option?: ApiEmergencyGetMsgConfigGetIdIdCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetMsgConfigGetIdIdCpmoCopResponseSuccess>(
    "/msg/config/getId/:id/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostMsgConfigListOption = EmergencyMsgTemplateConfigInputDto;

/** @description response type for apiEmergencyPostMsgConfigList */
interface ApiEmergencyPostMsgConfigListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgConfigListResponseSuccess =
  ApiEmergencyPostMsgConfigListResponse[200];
/**
 * @description
 *   列表接口
 *   列表接口
 * @tags 应急抢险-消息配置接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgConfigList = (
  option?: ApiEmergencyPostMsgConfigListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgConfigListResponseSuccess>(
    "/msg/config/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostMsgConfigUpdOption = EmergencyMsgTemplateConfigInputDto;

/** @description response type for apiEmergencyPostMsgConfigUpd */
interface ApiEmergencyPostMsgConfigUpdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgConfigUpdResponseSuccess =
  ApiEmergencyPostMsgConfigUpdResponse[200];
/**
 * @description
 *   修改接口
 *   修改接口
 * @tags 应急抢险-消息配置接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgConfigUpd = (
  option?: ApiEmergencyPostMsgConfigUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgConfigUpdResponseSuccess>(
    "/msg/config/upd",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetMsgConfigUpdStatusIdStatusOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
  /**
    @description
      status
    @format int32 */
  status: number;
};

/** @description response type for apiEmergencyGetMsgConfigUpdStatusIdStatus */
interface ApiEmergencyGetMsgConfigUpdStatusIdStatusResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMsgConfigUpdStatusIdStatusResponseSuccess =
  ApiEmergencyGetMsgConfigUpdStatusIdStatusResponse[200];
/**
 * @description
 *   调整有效无效状态
 *   调整有效无效状态
 * @tags 应急抢险-消息配置接口
 * @produces *
 */
export const apiEmergencyGetMsgConfigUpdStatusIdStatus = (
  option?: ApiEmergencyGetMsgConfigUpdStatusIdStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetMsgConfigUpdStatusIdStatusResponseSuccess>(
    "/msg/config/updStatus/:id/:status",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostMsgTemplateDelOption = {
  /**
    @description
      操作人所属实体编码 */
  cpmoCop: string;
  /**
    @format int32 */
  id: number;
  itcode: string;
  optUserAccount: string;
  optUserName: string;
  roleIds: string;
  /**
    @format int32 */
  type: number;
};

/** @description response type for apiEmergencyPostMsgTemplateDel */
interface ApiEmergencyPostMsgTemplateDelResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgTemplateDelResponseSuccess =
  ApiEmergencyPostMsgTemplateDelResponse[200];
/**
 * @description
 *   删除
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgTemplateDel = (
  option?: ApiEmergencyPostMsgTemplateDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgTemplateDelResponseSuccess>(
    "/msgTemplate/del",
    { method: "post", query: option },
    config
  );

type ApiEmergencyPostMsgTemplateDelNewOption = MsgTemplateSaveInput;

/** @description response type for apiEmergencyPostMsgTemplateDelNew */
interface ApiEmergencyPostMsgTemplateDelNewResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgTemplateDelNewResponseSuccess =
  ApiEmergencyPostMsgTemplateDelNewResponse[200];
/**
 * @description
 *   删除
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgTemplateDelNew = (
  option?: ApiEmergencyPostMsgTemplateDelNewOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgTemplateDelNewResponseSuccess>(
    "/msgTemplate/delNew",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeOption =
  {
    /**
    @description
      companyCode */
    companyCode: string;
    /**
    @description
      scene */
    scene: string;
    /**
    @description
      typeCode */
    typeCode: string;
  };

/** @description response type for apiEmergencyGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCode */
interface ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MsgTemplate>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponseSuccess =
  ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponse[200];
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiEmergencyGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCode =
  (
    option?: ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponseSuccess>(
      "/msgTemplate/getAllTemplateByCompCode/:companyCode/:scene/:typeCode",
      { method: "get", path: option },
      config
    );

type ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeOption =
  {
    /**
    @description
      companyCode */
    companyCode: string;
    /**
    @description
      scene */
    scene: string;
    /**
    @description
      type */
    type: string;
    /**
    @description
      typeCode */
    typeCode: string;
  };

/** @description response type for apiEmergencyGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeType */
interface ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponse {
  /**
   * @description
   *   OK
   */
  200: MsgTemplate;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponseSuccess =
  ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponse[200];
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiEmergencyGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeType =
  (
    option?: ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponseSuccess>(
      "/msgTemplate/getAllTemplateByCompCodeAndModel/:companyCode/:scene/:typeCode/:type",
      { method: "get", path: option },
      config
    );

type ApiEmergencyGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      scene */
  scene: string;
};

/** @description response type for apiEmergencyGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeScene */
interface ApiEmergencyGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MsgTemplate>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponseSuccess =
  ApiEmergencyGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponse[200];
/**
 * @description
 *   查询管理实体下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiEmergencyGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeScene = (
  option?: ApiEmergencyGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponseSuccess>(
    "/msgTemplate/getAllTemplateByCpmoCode/:cpmoCode/:scene",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetMsgTemplateGetAllTemplateByIdTemplateIdOption = {
  /**
    @description
      templateId
    @format int64 */
  templateId: number;
};

/** @description response type for apiEmergencyGetMsgTemplateGetAllTemplateByIdTemplateId */
interface ApiEmergencyGetMsgTemplateGetAllTemplateByIdTemplateIdResponse {
  /**
   * @description
   *   OK
   */
  200: MsgTemplate;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMsgTemplateGetAllTemplateByIdTemplateIdResponseSuccess =
  ApiEmergencyGetMsgTemplateGetAllTemplateByIdTemplateIdResponse[200];
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiEmergencyGetMsgTemplateGetAllTemplateByIdTemplateId = (
  option?: ApiEmergencyGetMsgTemplateGetAllTemplateByIdTemplateIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetMsgTemplateGetAllTemplateByIdTemplateIdResponseSuccess>(
    "/msgTemplate/getAllTemplateById/:templateId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetMsgTemplateGetTemplateTypeCodeTemplateIdOption = {
  /**
    @description
      templateId */
  templateId: string;
};

/** @description response type for apiEmergencyGetMsgTemplateGetTemplateTypeCodeTemplateId */
interface ApiEmergencyGetMsgTemplateGetTemplateTypeCodeTemplateIdResponse {
  /**
   * @description
   *   OK
   */
  200: TypeOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMsgTemplateGetTemplateTypeCodeTemplateIdResponseSuccess =
  ApiEmergencyGetMsgTemplateGetTemplateTypeCodeTemplateIdResponse[200];
/**
 * @description
 *   查询当前下配置typeCode类型
 * @tags 信息模版
 * @produces *
 */
export const apiEmergencyGetMsgTemplateGetTemplateTypeCodeTemplateId = (
  option?: ApiEmergencyGetMsgTemplateGetTemplateTypeCodeTemplateIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetMsgTemplateGetTemplateTypeCodeTemplateIdResponseSuccess>(
    "/msgTemplate/getTemplateTypeCode/:templateId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostMsgTemplateGetTypeListOption = QueryTypeInput;

/** @description response type for apiEmergencyPostMsgTemplateGetTypeList */
interface ApiEmergencyPostMsgTemplateGetTypeListResponse {
  /**
   * @description
   *   OK
   */
  200: TypeOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgTemplateGetTypeListResponseSuccess =
  ApiEmergencyPostMsgTemplateGetTypeListResponse[200];
/**
 * @description
 *   查询模板可配置类型
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgTemplateGetTypeList = (
  option?: ApiEmergencyPostMsgTemplateGetTypeListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgTemplateGetTypeListResponseSuccess>(
    "/msgTemplate/getTypeList",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostMsgTemplateListOption = {
  compCode: string;
  /**
    @description
      公司名，模糊查询 */
  compNameLike: string;
  /**
    @description
      操作人所属实体编码 */
  cpmoCop: string;
  /**
    @format int32 */
  id: number;
  /**
    @description
      功能模块，告警 1  示险  2  抢险 5,选中多个用逗号分隔 */
  model: string;
  /**
    @format int32 */
  pageNum: number;
  /**
    @format int32 */
  pageSize: number;
  /**
    @description
      关联类型查询 */
  relationType: string;
  /**
    @description
      场景 1：管网场景，2：场站场景，3：户内场景，4：工程场景  */
  sceneList: Array<number>;
  /**
    @description
      省公司，模糊查询 */
  shengLike: string;
  /**
    @description
      管理实体，模糊查询 */
  subNameLike: string;
  /**
    @description
      类型，1：呼叫，2：短信,空：全部
    @format int32 */
  type: number;
  types: Array<string>;
};

/** @description response type for apiEmergencyPostMsgTemplateList */
interface ApiEmergencyPostMsgTemplateListResponse {
  /**
   * @description
   *   OK
   */
  200: PageInfo;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgTemplateListResponseSuccess =
  ApiEmergencyPostMsgTemplateListResponse[200];
/**
 * @description
 *   查询
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgTemplateList = (
  option?: ApiEmergencyPostMsgTemplateListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgTemplateListResponseSuccess>(
    "/msgTemplate/list",
    { method: "post", query: option },
    config
  );

type ApiEmergencyPostMsgTemplateSaveOption = {
  /**
    @description
      外呼账号 */
  account: string;
  /**
    @description
      callKey */
  callKey: string;
  compCode: string;
  cpmoCop: string;
  /**
    @format int32 */
  id: number;
  /**
    @description
      功能模块，告警 1  示险  2  抢险 5,选中多个用逗号分隔 */
  model: string;
  /**
    @description
      模板主体 */
  msg: string;
  /**
    @description
      模版名称 */
  name: string;
  /**
    @format int64 */
  newId: number;
  optUserAccount: string;
  optUserName: string;
  /**
    @description
      PIN */
  pin: string;
  /**
    @description
      密码 */
  pwd: string;
  roleIds: string;
  /**
    @description
      场景 1：管网场景，2：场站场景，3：户内场景，4：工程场景 
    @format int32 */
  scene: number;
  /**
    @description
      状态，0：禁用，1：启用
    @format int32 */
  status: number;
  /**
    @description
      模板id
    @format int64 */
  templateId: number;
  /**
    @description
      模板类型：1：通用模板；2：自定义模板
    @format int32 */
  templateType: number;
  /**
    @description
      类型，1：呼叫，2：短信
    @format int32 */
  type: number;
  /**
    @description
      类型编码 */
  typeCode: string;
  /**
    @description
      类型编码数组 */
  typeCodes: Array<string>;
};

/** @description response type for apiEmergencyPostMsgTemplateSave */
interface ApiEmergencyPostMsgTemplateSaveResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgTemplateSaveResponseSuccess =
  ApiEmergencyPostMsgTemplateSaveResponse[200];
/**
 * @description
 *   保存
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgTemplateSave = (
  option?: ApiEmergencyPostMsgTemplateSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgTemplateSaveResponseSuccess>(
    "/msgTemplate/save",
    { method: "post", query: option },
    config
  );

/** @description response type for apiEmergencyGetMsgTemplateSensitiveWords */
interface ApiEmergencyGetMsgTemplateSensitiveWordsResponse {
  /**
   * @description
   *   OK
   */
  200: Array<string>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetMsgTemplateSensitiveWordsResponseSuccess =
  ApiEmergencyGetMsgTemplateSensitiveWordsResponse[200];
/**
 * @description
 *   查询敏感词汇
 * @tags 信息模版
 * @produces *
 */
export const apiEmergencyGetMsgTemplateSensitiveWords = (
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetMsgTemplateSensitiveWordsResponseSuccess>(
    "/msgTemplate/sensitive/words",
    { method: "get" },
    config
  );

type ApiEmergencyPostMsgTemplateTemplateSaveOption = MsgTemplateSaveInput;

/** @description response type for apiEmergencyPostMsgTemplateTemplateSave */
interface ApiEmergencyPostMsgTemplateTemplateSaveResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgTemplateTemplateSaveResponseSuccess =
  ApiEmergencyPostMsgTemplateTemplateSaveResponse[200];
/**
 * @description
 *   批量添加模板
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgTemplateTemplateSave = (
  option?: ApiEmergencyPostMsgTemplateTemplateSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgTemplateTemplateSaveResponseSuccess>(
    "/msgTemplate/templateSave",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostMsgTemplateTemplateUpdOption = MsgTemplateSaveInput;

/** @description response type for apiEmergencyPostMsgTemplateTemplateUpd */
interface ApiEmergencyPostMsgTemplateTemplateUpdResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgTemplateTemplateUpdResponseSuccess =
  ApiEmergencyPostMsgTemplateTemplateUpdResponse[200];
/**
 * @description
 *   批量修改模板
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgTemplateTemplateUpd = (
  option?: ApiEmergencyPostMsgTemplateTemplateUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgTemplateTemplateUpdResponseSuccess>(
    "/msgTemplate/templateUpd",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostMsgTemplateValidUniqueOption = {
  compCode: string;
  /**
    @description
      操作人所属实体编码 */
  cpmoCop: string;
  /**
    @description
      场景
    @format int32 */
  scene: number;
  /**
    @description
      类型，1：呼叫，2：短信
    @format int32 */
  type: number;
};

/** @description response type for apiEmergencyPostMsgTemplateValidUnique */
interface ApiEmergencyPostMsgTemplateValidUniqueResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMsgTemplateValidUniqueResponseSuccess =
  ApiEmergencyPostMsgTemplateValidUniqueResponse[200];
/**
 * @description
 *   重复校验，true为无重复，校验通过
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMsgTemplateValidUnique = (
  option?: ApiEmergencyPostMsgTemplateValidUniqueOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMsgTemplateValidUniqueResponseSuccess>(
    "/msgTemplate/validUnique",
    { method: "post", query: option },
    config
  );

type ApiEmergencyPostMutilDevicePressureChartOption = DailyChartInput;

/** @description response type for apiEmergencyPostMutilDevicePressureChart */
interface ApiEmergencyPostMutilDevicePressureChartResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DeviceChartOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostMutilDevicePressureChartResponseSuccess =
  ApiEmergencyPostMutilDevicePressureChartResponse[200];
/**
 * @description
 *   getRecentDailyValue
 * @tags pressure-chart-controller
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostMutilDevicePressureChart = (
  option?: ApiEmergencyPostMutilDevicePressureChartOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostMutilDevicePressureChartResponseSuccess>(
    "/mutil/device/pressure/chart",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetNightModeCheckvalidCompCodeOption = {
  /**
    @description
      compCode */
  compCode: string;
};

/** @description response type for apiEmergencyGetNightModeCheckvalidCompCode */
interface ApiEmergencyGetNightModeCheckvalidCompCodeResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputNightModeValidOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNightModeCheckvalidCompCodeResponseSuccess =
  ApiEmergencyGetNightModeCheckvalidCompCodeResponse[200];
/**
 * @description
 *   查询管理实体夜间模式是否有效
 * @tags 夜间值守模式配置
 * @produces *
 */
export const apiEmergencyGetNightModeCheckvalidCompCode = (
  option?: ApiEmergencyGetNightModeCheckvalidCompCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetNightModeCheckvalidCompCodeResponseSuccess>(
    "/nightMode/checkvalid/:compCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetNightModeDetailCompCodeOption = {
  /**
    @description
      compCode */
  compCode: string;
};

/** @description response type for apiEmergencyGetNightModeDetailCompCode */
interface ApiEmergencyGetNightModeDetailCompCodeResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputNightModeOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNightModeDetailCompCodeResponseSuccess =
  ApiEmergencyGetNightModeDetailCompCodeResponse[200];
/**
 * @description
 *   根据管理实体编码获取夜间模式配置
 * @tags 夜间值守模式配置
 * @produces *
 */
export const apiEmergencyGetNightModeDetailCompCode = (
  option?: ApiEmergencyGetNightModeDetailCompCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetNightModeDetailCompCodeResponseSuccess>(
    "/nightMode/detail/:compCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetNightModeGetPostListCompCodeOption = {
  /**
    @description
      compCode */
  compCode: string;
};

/** @description response type for apiEmergencyGetNightModeGetPostListCompCode */
interface ApiEmergencyGetNightModeGetPostListCompCodeResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListDutyPositionDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNightModeGetPostListCompCodeResponseSuccess =
  ApiEmergencyGetNightModeGetPostListCompCodeResponse[200];
/**
 * @description
 *   查询岗位列表
 * @tags 夜间值守模式配置
 * @produces *
 */
export const apiEmergencyGetNightModeGetPostListCompCode = (
  option?: ApiEmergencyGetNightModeGetPostListCompCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetNightModeGetPostListCompCodeResponseSuccess>(
    "/nightMode/getPostList/:compCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostNightModeSaveOption = NightModeFomrInput;

/** @description response type for apiEmergencyPostNightModeSave */
interface ApiEmergencyPostNightModeSaveResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputString;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostNightModeSaveResponseSuccess =
  ApiEmergencyPostNightModeSaveResponse[200];
/**
 * @description
 *   保存夜间模式配置
 * @tags 夜间值守模式配置
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostNightModeSave = (
  option?: ApiEmergencyPostNightModeSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostNightModeSaveResponseSuccess>(
    "/nightMode/save",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostNoticeAddOption = EmergencyNoticeRecordInput;

/** @description response type for apiEmergencyPostNoticeAdd */
interface ApiEmergencyPostNoticeAddResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostNoticeAddResponseSuccess =
  ApiEmergencyPostNoticeAddResponse[200];
/**
 * @description
 *   添加接口
 *   添加接口
 * @tags 通知中心接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostNoticeAdd = (
  option?: ApiEmergencyPostNoticeAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostNoticeAddResponseSuccess>(
    "/notice/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetNoticeByDraftEventIdEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetNoticeByDraftEventIdEventId */
interface ApiEmergencyGetNoticeByDraftEventIdEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyNoticeRecordInput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNoticeByDraftEventIdEventIdResponseSuccess =
  ApiEmergencyGetNoticeByDraftEventIdEventIdResponse[200];
/**
 * @description
 *   查询草稿信息 evnetId:事件id
 *   查询草稿信息
 * @tags 通知中心接口
 * @produces *
 */
export const apiEmergencyGetNoticeByDraftEventIdEventId = (
  option?: ApiEmergencyGetNoticeByDraftEventIdEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetNoticeByDraftEventIdEventIdResponseSuccess>(
    "/notice/byDraftEventId/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetNoticeByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetNoticeByIdId */
interface ApiEmergencyGetNoticeByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyNoticeRecordOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNoticeByIdIdResponseSuccess =
  ApiEmergencyGetNoticeByIdIdResponse[200];
/**
 * @description
 *   查询详情页
 *   查询详情页
 * @tags 通知中心接口
 * @produces *
 */
export const apiEmergencyGetNoticeByIdId = (
  option?: ApiEmergencyGetNoticeByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetNoticeByIdIdResponseSuccess>(
    "/notice/byId/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostNoticeGetAddressListOption =
  EmergencyPreplanAddressListInputDto;

/** @description response type for apiEmergencyPostNoticeGetAddressList */
interface ApiEmergencyPostNoticeGetAddressListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyPreplanAddressListOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostNoticeGetAddressListResponseSuccess =
  ApiEmergencyPostNoticeGetAddressListResponse[200];
/**
 * @description
 *   获取通讯录目录 人员信息
 *   获取通讯录目录 人员信息
 * @tags 通知中心接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostNoticeGetAddressList = (
  option?: ApiEmergencyPostNoticeGetAddressListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostNoticeGetAddressListResponseSuccess>(
    "/notice/getAddressList",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostNoticeInformationAddOrUpdNoticeInformationOption =
  EmergencyNoticeInformationInputDto;

/** @description response type for apiEmergencyPostNoticeInformationAddOrUpdNoticeInformation */
interface ApiEmergencyPostNoticeInformationAddOrUpdNoticeInformationResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostNoticeInformationAddOrUpdNoticeInformationResponseSuccess =
  ApiEmergencyPostNoticeInformationAddOrUpdNoticeInformationResponse[200];
/**
 * @description
 *   添加或修改响应通知信息/通过id是否存在来去判断
 *   添加或修改响应通知信息/通过id是否存在来去判断
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostNoticeInformationAddOrUpdNoticeInformation = (
  option?: ApiEmergencyPostNoticeInformationAddOrUpdNoticeInformationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostNoticeInformationAddOrUpdNoticeInformationResponseSuccess>(
    "/notice/information/addOrUpdNoticeInformation",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostNoticeInformationAddOrUpdResponseOption = ResponseInputDto;

/** @description response type for apiEmergencyPostNoticeInformationAddOrUpdResponse */
interface ApiEmergencyPostNoticeInformationAddOrUpdResponseResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostNoticeInformationAddOrUpdResponseResponseSuccess =
  ApiEmergencyPostNoticeInformationAddOrUpdResponseResponse[200];
/**
 * @description
 *   添加或修改响应
 *   添加或修改响应
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostNoticeInformationAddOrUpdResponse = (
  option?: ApiEmergencyPostNoticeInformationAddOrUpdResponseOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostNoticeInformationAddOrUpdResponseResponseSuccess>(
    "/notice/information/addOrUpdResponse",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameOption =
  {
    /**
    @description
      batchId
    @format int64 */
    batchId: number;
    /**
    @description
      id
    @format int64 */
    id: number;
    /**
    @description
      level
    @format int32 */
    level: number;
    /**
    @description
      oldLevel
    @format int32 */
    oldLevel: number;
    /**
    @description
      userName */
    userName: string;
  };

/** @description response type for apiEmergencyGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserName */
interface ApiEmergencyGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameResponseSuccess =
  ApiEmergencyGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameResponse[200];
/**
 * @description
 *   id: 事件id oldLevel:历史响应分级 level: 要修改的级别 batchId:批次id
 *   调整响应级别提交接口
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiEmergencyGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserName =
  (
    option?: ApiEmergencyGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameResponseSuccess>(
      "/notice/information/againLevel/:id/:oldLevel/:level/:batchId/:userName",
      { method: "get", path: option },
      config
    );

type ApiEmergencyPostNoticeInformationFeedbackOption =
  EmergencyFeedbackInputDto;

/** @description response type for apiEmergencyPostNoticeInformationFeedback */
interface ApiEmergencyPostNoticeInformationFeedbackResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostNoticeInformationFeedbackResponseSuccess =
  ApiEmergencyPostNoticeInformationFeedbackResponse[200];
/**
 * @description
 *   调整响应级别 获取级别列表 暂时弃用
 *   终止响应
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostNoticeInformationFeedback = (
  option?: ApiEmergencyPostNoticeInformationFeedbackOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostNoticeInformationFeedbackResponseSuccess>(
    "/notice/information/feedback",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeOption = {
  /**
    @description
      noticeType
    @format int32 */
  noticeType: number;
  /**
    @description
      preplanId */
  preplanId: string;
  /**
    @description
      type
    @format int32 */
  type: number;
};

/** @description response type for apiEmergencyGetNoticeInformationGetByIdPreplanIdNoticeTypeType */
interface ApiEmergencyGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyNoticeInformationOutputDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeResponseSuccess =
  ApiEmergencyGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeResponse[200];
/**
 * @description
 *   根据预案id 和配置类型查询对应配置
 *   preplanId： {预案id 查询 对应下的配置} noticeType：{ 1: 应急预案配置  2: 系统配置管理} type: {noticeType  = 1时 type=1 启动响应通知配置type=2 终止响应通知配置  noticeType = 2时：type=1进展通知配置}
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiEmergencyGetNoticeInformationGetByIdPreplanIdNoticeTypeType = (
  option?: ApiEmergencyGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeResponseSuccess>(
    "/notice/information/getById/:preplanId/:noticeType/:type",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetNoticeInformationGetLevelIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetNoticeInformationGetLevelId */
interface ApiEmergencyGetNoticeInformationGetLevelIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<number>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNoticeInformationGetLevelIdResponseSuccess =
  ApiEmergencyGetNoticeInformationGetLevelIdResponse[200];
/**
 * @description
 *   调整响应级别 获取级别列表
 *   调整响应级别 获取级别列表 id : 事件id
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiEmergencyGetNoticeInformationGetLevelId = (
  option?: ApiEmergencyGetNoticeInformationGetLevelIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetNoticeInformationGetLevelIdResponseSuccess>(
    "/notice/information/getLevel/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetNoticeInformationGetResponseByPreplanIdPreplanIdOption = {
  /**
    @description
      preplanId
    @format int64 */
  preplanId: number;
};

/** @description response type for apiEmergencyGetNoticeInformationGetResponseByPreplanIdPreplanId */
interface ApiEmergencyGetNoticeInformationGetResponseByPreplanIdPreplanIdResponse {
  /**
   * @description
   *   OK
   */
  200: ResponseOutputDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNoticeInformationGetResponseByPreplanIdPreplanIdResponseSuccess =
  ApiEmergencyGetNoticeInformationGetResponseByPreplanIdPreplanIdResponse[200];
/**
 * @description
 *   根据预案id 查询对应响应信息
 *   根据预案id 查询对应响应信息
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiEmergencyGetNoticeInformationGetResponseByPreplanIdPreplanId = (
  option?: ApiEmergencyGetNoticeInformationGetResponseByPreplanIdPreplanIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetNoticeInformationGetResponseByPreplanIdPreplanIdResponseSuccess>(
    "/notice/information/getResponseByPreplanId/:preplanId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetNoticeInformationGetResponseNoticeIdPreplanIdLevelOption = {
  /**
    @description
      id */
  id: string;
  /**
    @description
      level
    @format int32 */
  level: number;
  /**
    @description
      preplanId
    @format int64 */
  preplanId: number;
};

/** @description response type for apiEmergencyGetNoticeInformationGetResponseNoticeIdPreplanIdLevel */
interface ApiEmergencyGetNoticeInformationGetResponseNoticeIdPreplanIdLevelResponse {
  /**
   * @description
   *   OK
   */
  200: ResponseNoticeOutputDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNoticeInformationGetResponseNoticeIdPreplanIdLevelResponseSuccess =
  ApiEmergencyGetNoticeInformationGetResponseNoticeIdPreplanIdLevelResponse[200];
/**
 * @description
 *   id: 事件id  preplanId：预案id level:响应级别 查询响应通知
 *   查询响应通知
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiEmergencyGetNoticeInformationGetResponseNoticeIdPreplanIdLevel =
  (
    option?: ApiEmergencyGetNoticeInformationGetResponseNoticeIdPreplanIdLevelOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyGetNoticeInformationGetResponseNoticeIdPreplanIdLevelResponseSuccess>(
      "/notice/information/getResponseNotice/:id/:preplanId/:level",
      { method: "get", path: option },
      config
    );

type ApiEmergencyGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeOption =
  {
    /**
    @description
      companyCode */
    companyCode: string;
    /**
    @description
      entityCode */
    entityCode: string;
    /**
    @description
      id
    @format int64 */
    id: number;
  };

/** @description response type for apiEmergencyGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCode */
interface ApiEmergencyGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyStartExecutorInfoOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeResponseSuccess =
  ApiEmergencyGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeResponse[200];
/**
 * @description
 *   获取任务分发列表 id : 事件id
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiEmergencyGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCode =
  (
    option?: ApiEmergencyGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeResponseSuccess>(
      "/notice/information/getTaskDistributeList/:id/:entityCode/:companyCode",
      { method: "get", path: option },
      config
    );

type ApiEmergencyPostNoticeInformationResponseSubmitOption =
  ResponseSubmitOutputDto;

/** @description response type for apiEmergencyPostNoticeInformationResponseSubmit */
interface ApiEmergencyPostNoticeInformationResponseSubmitResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostNoticeInformationResponseSubmitResponseSuccess =
  ApiEmergencyPostNoticeInformationResponseSubmitResponse[200];
/**
 * @description
 *   启动响应提交接口 （响应分级提交 响应通知提交）
 *   启动响应提交接口 （响应分级提交 响应通知提交）(APP)
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostNoticeInformationResponseSubmit = (
  option?: ApiEmergencyPostNoticeInformationResponseSubmitOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostNoticeInformationResponseSubmitResponseSuccess>(
    "/notice/information/responseSubmit",
    { method: "post", body: option },
    config
  );

/** @description response type for apiEmergencyPostNoticeInformationTest */
interface ApiEmergencyPostNoticeInformationTestResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostNoticeInformationTestResponseSuccess =
  ApiEmergencyPostNoticeInformationTestResponse[200];
/**
 * @description
 *   test
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostNoticeInformationTest = (
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostNoticeInformationTestResponseSuccess>(
    "/notice/information/test",
    { method: "post" },
    config
  );

type ApiEmergencyPostNoticeListOption = NoticeRecordInput;

/** @description response type for apiEmergencyPostNoticeList */
interface ApiEmergencyPostNoticeListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyNoticeRecordOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostNoticeListResponseSuccess =
  ApiEmergencyPostNoticeListResponse[200];
/**
 * @description
 *   查询列表
 *   查询列表
 * @tags 通知中心接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostNoticeList = (
  option?: ApiEmergencyPostNoticeListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostNoticeListResponseSuccess>(
    "/notice/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetNoticeMsgTemplateEventIdTemplateIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
  /**
    @description
      templateId
    @format int64 */
  templateId: number;
};

/** @description response type for apiEmergencyGetNoticeMsgTemplateEventIdTemplateId */
interface ApiEmergencyGetNoticeMsgTemplateEventIdTemplateIdResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNoticeMsgTemplateEventIdTemplateIdResponseSuccess =
  ApiEmergencyGetNoticeMsgTemplateEventIdTemplateIdResponse[200];
/**
 * @description
 *   获取发动短信或电话模板内容
 * @tags 通知中心接口
 * @produces *
 */
export const apiEmergencyGetNoticeMsgTemplateEventIdTemplateId = (
  option?: ApiEmergencyGetNoticeMsgTemplateEventIdTemplateIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetNoticeMsgTemplateEventIdTemplateIdResponseSuccess>(
    "/notice/msg/template/:eventId/:templateId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetNoticeResendIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetNoticeResendId */
interface ApiEmergencyGetNoticeResendIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetNoticeResendIdResponseSuccess =
  ApiEmergencyGetNoticeResendIdResponse[200];
/**
 * @description
 *   一键重新发送接口
 *   一键重新发送接口
 * @tags 通知中心接口
 * @produces *
 */
export const apiEmergencyGetNoticeResendId = (
  option?: ApiEmergencyGetNoticeResendIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetNoticeResendIdResponseSuccess>(
    "/notice/resend/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetPersonGetEntityCodeItCodeOption = {
  /**
    @description
      itCode */
  itCode: string;
};

/** @description response type for apiEmergencyGetPersonGetEntityCodeItCode */
interface ApiEmergencyGetPersonGetEntityCodeItCodeResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetPersonGetEntityCodeItCodeResponseSuccess =
  ApiEmergencyGetPersonGetEntityCodeItCodeResponse[200];
/**
 * @description
 *   通过itcode获取entityCode
 * @tags 应急值守：值守班组人员
 * @produces *
 */
export const apiEmergencyGetPersonGetEntityCodeItCode = (
  option?: ApiEmergencyGetPersonGetEntityCodeItCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetPersonGetEntityCodeItCodeResponseSuccess>(
    "/person/getEntityCode/:itCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostPersonQueryByPositionOption = PositionPersonQueryInput;

/** @description response type for apiEmergencyPostPersonQueryByPosition */
interface ApiEmergencyPostPersonQueryByPositionResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PositionPersonOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPersonQueryByPositionResponseSuccess =
  ApiEmergencyPostPersonQueryByPositionResponse[200];
/**
 * @description
 *   查询岗位已选择的值守班组人员
 * @tags 应急值守：值守班组人员
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPersonQueryByPosition = (
  option?: ApiEmergencyPostPersonQueryByPositionOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPersonQueryByPositionResponseSuccess>(
    "/person/queryByPosition",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostPhoneCallListOption = PhoneCallSearchInput;

/** @description response type for apiEmergencyPostPhoneCallList */
interface ApiEmergencyPostPhoneCallListResponse {
  /**
   * @description
   *   OK
   */
  200: PageInfo;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPhoneCallListResponseSuccess =
  ApiEmergencyPostPhoneCallListResponse[200];
/**
 * @description
 *   查询
 * @tags 呼叫记录
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPhoneCallList = (
  option?: ApiEmergencyPostPhoneCallListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPhoneCallListResponseSuccess>(
    "/phoneCall/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostPhoneCallSearchByTaskIdTaskIdOption = {
  /**
    @description
      taskId
    @format int64 */
  taskId: number;
};

/** @description response type for apiEmergencyPostPhoneCallSearchByTaskIdTaskId */
interface ApiEmergencyPostPhoneCallSearchByTaskIdTaskIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PhoneCallRecordOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPhoneCallSearchByTaskIdTaskIdResponseSuccess =
  ApiEmergencyPostPhoneCallSearchByTaskIdTaskIdResponse[200];
/**
 * @description
 *   通过任务ID查询
 * @tags 呼叫记录
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPhoneCallSearchByTaskIdTaskId = (
  option?: ApiEmergencyPostPhoneCallSearchByTaskIdTaskIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPhoneCallSearchByTaskIdTaskIdResponseSuccess>(
    "/phoneCall/searchByTaskId/:taskId",
    { method: "post", path: option },
    config
  );

type ApiEmergencyPostPhoneMsgListOption = {
  /**
    @description
      操作人所属实体编码 */
  cpmoCop: string;
  /**
    @format date-time */
  msgEndTime: string;
  msgResult: string;
  /**
    @format date-time */
  msgStartTime: string;
  msgTarget: string;
  /**
    @format int32 */
  pageNum: number;
  /**
    @format int32 */
  pageSize: number;
  /**
    @description
      场景 1：管网场景，2：场站场景，3：户内场景，4：工程场景  */
  sceneList: Array<number>;
};

/** @description response type for apiEmergencyPostPhoneMsgList */
interface ApiEmergencyPostPhoneMsgListResponse {
  /**
   * @description
   *   OK
   */
  200: PageInfo;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPhoneMsgListResponseSuccess =
  ApiEmergencyPostPhoneMsgListResponse[200];
/**
 * @description
 *   查询
 * @tags 短信记录
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPhoneMsgList = (
  option?: ApiEmergencyPostPhoneMsgListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPhoneMsgListResponseSuccess>(
    "/phoneMsg/list",
    { method: "post", query: option },
    config
  );

type ApiEmergencyPostPhoneMsgSearchByTaskIdTaskIdOption = {
  /**
    @description
      taskId
    @format int64 */
  taskId: number;
};

/** @description response type for apiEmergencyPostPhoneMsgSearchByTaskIdTaskId */
interface ApiEmergencyPostPhoneMsgSearchByTaskIdTaskIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PhoneMsgRecordOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPhoneMsgSearchByTaskIdTaskIdResponseSuccess =
  ApiEmergencyPostPhoneMsgSearchByTaskIdTaskIdResponse[200];
/**
 * @description
 *   通过任务ID查询
 * @tags 短信记录
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPhoneMsgSearchByTaskIdTaskId = (
  option?: ApiEmergencyPostPhoneMsgSearchByTaskIdTaskIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPhoneMsgSearchByTaskIdTaskIdResponseSuccess>(
    "/phoneMsg/searchByTaskId/:taskId",
    { method: "post", path: option },
    config
  );

type ApiEmergencyPostPipeAddOption = PipeAnalyseAddInput;

/** @description response type for apiEmergencyPostPipeAdd */
interface ApiEmergencyPostPipeAddResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPipeAddResponseSuccess =
  ApiEmergencyPostPipeAddResponse[200];
/**
 * @description
 *   保存为事件影响管段
 * @tags 应急爆管分析
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPipeAdd = (
  option?: ApiEmergencyPostPipeAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPipeAddResponseSuccess>(
    "/pipe/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostPipeMsgResultOption = PipeAnalyseMsgInput;

/** @description response type for apiEmergencyPostPipeMsgResult */
interface ApiEmergencyPostPipeMsgResultResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPipeMsgResultResponseSuccess =
  ApiEmergencyPostPipeMsgResultResponse[200];
/**
 * @description
 *   推送爆管分析结果
 * @tags 应急爆管分析
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPipeMsgResult = (
  option?: ApiEmergencyPostPipeMsgResultOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPipeMsgResultResponseSuccess>(
    "/pipe/msg/result",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetPipeQueryEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetPipeQueryEventId */
interface ApiEmergencyGetPipeQueryEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: PipeAnalyseOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetPipeQueryEventIdResponseSuccess =
  ApiEmergencyGetPipeQueryEventIdResponse[200];
/**
 * @description
 *   查询事件影响管段
 * @tags 应急爆管分析
 * @produces *
 */
export const apiEmergencyGetPipeQueryEventId = (
  option?: ApiEmergencyGetPipeQueryEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetPipeQueryEventIdResponseSuccess>(
    "/pipe/query/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetPipeStopDeviceEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetPipeStopDeviceEventId */
interface ApiEmergencyGetPipeStopDeviceEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyPipeStatusOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetPipeStopDeviceEventIdResponseSuccess =
  ApiEmergencyGetPipeStopDeviceEventIdResponse[200];
/**
 * @description
 *   事件撤布防设备清单
 * @tags emergency-pipe-status-controller
 * @produces *
 */
export const apiEmergencyGetPipeStopDeviceEventId = (
  option?: ApiEmergencyGetPipeStopDeviceEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetPipeStopDeviceEventIdResponseSuccess>(
    "/pipe/stop/device/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostPreplanAddOption = EmergencyPreplanAddInput;

/** @description response type for apiEmergencyPostPreplanAdd */
interface ApiEmergencyPostPreplanAddResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyPreplanAddOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPreplanAddResponseSuccess =
  ApiEmergencyPostPreplanAddResponse[200];
/**
 * @description
 *   新增应急预案
 * @tags 应急预案接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPreplanAdd = (
  option?: ApiEmergencyPostPreplanAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPreplanAddResponseSuccess>(
    "/preplan/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyDeletePreplanDeleteIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyDeletePreplanDeleteId */
interface ApiEmergencyDeletePreplanDeleteIdResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   No Content
   */
  204: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
}

type ApiEmergencyDeletePreplanDeleteIdResponseSuccess =
  ApiEmergencyDeletePreplanDeleteIdResponse[200];
/**
 * @description
 *   删除应急预案
 * @tags 应急预案接口
 * @produces *
 */
export const apiEmergencyDeletePreplanDeleteId = (
  option?: ApiEmergencyDeletePreplanDeleteIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyDeletePreplanDeleteIdResponseSuccess>(
    "/preplan/delete/:id",
    { method: "delete", path: option },
    config
  );

type ApiEmergencyGetPreplanDetailIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetPreplanDetailId */
interface ApiEmergencyGetPreplanDetailIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyPreplanDetailOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetPreplanDetailIdResponseSuccess =
  ApiEmergencyGetPreplanDetailIdResponse[200];
/**
 * @description
 *   查询预案详情
 * @tags 应急预案接口
 * @produces *
 */
export const apiEmergencyGetPreplanDetailId = (
  option?: ApiEmergencyGetPreplanDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetPreplanDetailIdResponseSuccess>(
    "/preplan/detail/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetPreplanGetPreplanCompInfoCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiEmergencyGetPreplanGetPreplanCompInfoCpmoCop */
interface ApiEmergencyGetPreplanGetPreplanCompInfoCpmoCopResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MMdOrganizationOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetPreplanGetPreplanCompInfoCpmoCopResponseSuccess =
  ApiEmergencyGetPreplanGetPreplanCompInfoCpmoCopResponse[200];
/**
 * @description
 *   获取实体下所有预案关联的公司
 * @tags 应急预案接口
 * @produces *
 */
export const apiEmergencyGetPreplanGetPreplanCompInfoCpmoCop = (
  option?: ApiEmergencyGetPreplanGetPreplanCompInfoCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetPreplanGetPreplanCompInfoCpmoCopResponseSuccess>(
    "/preplan/getPreplanCompInfo/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetPreplanGetPreplanIdEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetPreplanGetPreplanIdEventId */
interface ApiEmergencyGetPreplanGetPreplanIdEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetPreplanGetPreplanIdEventIdResponseSuccess =
  ApiEmergencyGetPreplanGetPreplanIdEventIdResponse[200];
/**
 * @description
 *   getEmergencyStartPreplanId
 * @tags 应急预案接口
 * @produces *
 */
export const apiEmergencyGetPreplanGetPreplanIdEventId = (
  option?: ApiEmergencyGetPreplanGetPreplanIdEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetPreplanGetPreplanIdEventIdResponseSuccess>(
    "/preplan/getPreplanId/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetPreplanGroupGroupIdOption = {
  /**
    @description
      groupId
    @format int32 */
  groupId: number;
};

/** @description response type for apiEmergencyGetPreplanGroupGroupId */
interface ApiEmergencyGetPreplanGroupGroupIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetPreplanGroupGroupIdResponseSuccess =
  ApiEmergencyGetPreplanGroupGroupIdResponse[200];
/**
 * @description
 *   getPreplanGroup
 * @tags 应急预案接口
 * @produces *
 */
export const apiEmergencyGetPreplanGroupGroupId = (
  option?: ApiEmergencyGetPreplanGroupGroupIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetPreplanGroupGroupIdResponseSuccess>(
    "/preplan/group/:groupId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostPreplanListOption = EmergencyPreplanListInput;

/** @description response type for apiEmergencyPostPreplanList */
interface ApiEmergencyPostPreplanListResponse {
  /**
   * @description
   *   OK
   */
  200: PageResultOutputEmergencyPreplanListOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPreplanListResponseSuccess =
  ApiEmergencyPostPreplanListResponse[200];
/**
 * @description
 *   查询预案列表
 * @tags 应急预案接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPreplanList = (
  option?: ApiEmergencyPostPreplanListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPreplanListResponseSuccess>(
    "/preplan/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostPreplanNewAddOption = EmergencyPreplanAddInput;

/** @description response type for apiEmergencyPostPreplanNewAdd */
interface ApiEmergencyPostPreplanNewAddResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPreplanNewAddResponseSuccess =
  ApiEmergencyPostPreplanNewAddResponse[200];
/**
 * @description
 *   新UI新增应急预案
 * @tags 应急预案接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPreplanNewAdd = (
  option?: ApiEmergencyPostPreplanNewAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPreplanNewAddResponseSuccess>(
    "/preplan/new/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetPreplanNewDetailIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetPreplanNewDetailId */
interface ApiEmergencyGetPreplanNewDetailIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyPreplanNewDetailOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetPreplanNewDetailIdResponseSuccess =
  ApiEmergencyGetPreplanNewDetailIdResponse[200];
/**
 * @description
 *   新UI查询预案详情
 * @tags 应急预案接口
 * @produces *
 */
export const apiEmergencyGetPreplanNewDetailId = (
  option?: ApiEmergencyGetPreplanNewDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetPreplanNewDetailIdResponseSuccess>(
    "/preplan/new/detail/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostPreplanNewUpdateOption = EmergencyPreplanUpdateInput;

/** @description response type for apiEmergencyPostPreplanNewUpdate */
interface ApiEmergencyPostPreplanNewUpdateResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostPreplanNewUpdateResponseSuccess =
  ApiEmergencyPostPreplanNewUpdateResponse[200];
/**
 * @description
 *   新UI编辑应急预案
 * @tags 应急预案接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostPreplanNewUpdate = (
  option?: ApiEmergencyPostPreplanNewUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostPreplanNewUpdateResponseSuccess>(
    "/preplan/new/update",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetPreplanQueryPreplanTypePreplanIdOption = {
  /**
    @description
      preplanId
    @format int64 */
  preplanId: number;
};

/** @description response type for apiEmergencyGetPreplanQueryPreplanTypePreplanId */
interface ApiEmergencyGetPreplanQueryPreplanTypePreplanIdResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetPreplanQueryPreplanTypePreplanIdResponseSuccess =
  ApiEmergencyGetPreplanQueryPreplanTypePreplanIdResponse[200];
/**
 * @description
 *   queryPreplanType
 * @tags 应急预案接口
 * @produces *
 */
export const apiEmergencyGetPreplanQueryPreplanTypePreplanId = (
  option?: ApiEmergencyGetPreplanQueryPreplanTypePreplanIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetPreplanQueryPreplanTypePreplanIdResponseSuccess>(
    "/preplan/queryPreplanType/:preplanId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetPreplanStationListCompanyCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
};

/** @description response type for apiEmergencyGetPreplanStationListCompanyCode */
interface ApiEmergencyGetPreplanStationListCompanyCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<StationListOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetPreplanStationListCompanyCodeResponseSuccess =
  ApiEmergencyGetPreplanStationListCompanyCodeResponse[200];
/**
 * @description
 *   getPreplanStationList
 * @tags 应急预案接口
 * @produces *
 */
export const apiEmergencyGetPreplanStationListCompanyCode = (
  option?: ApiEmergencyGetPreplanStationListCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetPreplanStationListCompanyCodeResponseSuccess>(
    "/preplan/station/list/:companyCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPutPreplanUpdateOption = EmergencyPreplanUpdateInput;

/** @description response type for apiEmergencyPutPreplanUpdate */
interface ApiEmergencyPutPreplanUpdateResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyPreplanAddOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPutPreplanUpdateResponseSuccess =
  ApiEmergencyPutPreplanUpdateResponse[200];
/**
 * @description
 *   编辑应急预案
 * @tags 应急预案接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPutPreplanUpdate = (
  option?: ApiEmergencyPutPreplanUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPutPreplanUpdateResponseSuccess>(
    "/preplan/update",
    { method: "put", body: option },
    config
  );

type ApiEmergencyPostProgressOption = EmergencyProgressInput;

/** @description response type for apiEmergencyPostProgress */
interface ApiEmergencyPostProgressResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyProcessAddOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostProgressResponseSuccess =
  ApiEmergencyPostProgressResponse[200];
/**
 * @description
 *   添加应急进度
 * @tags 应急进度接口API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostProgress = (
  option?: ApiEmergencyPostProgressOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostProgressResponseSuccess>(
    "/progress",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostProgressEventStatusOption = EmergencyStatusInput;

/** @description response type for apiEmergencyPostProgressEventStatus */
interface ApiEmergencyPostProgressEventStatusResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostProgressEventStatusResponseSuccess =
  ApiEmergencyPostProgressEventStatusResponse[200];
/**
 * @description
 *   应急事件状态比较
 * @tags 应急进度接口API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostProgressEventStatus = (
  option?: ApiEmergencyPostProgressEventStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostProgressEventStatusResponseSuccess>(
    "/progress/eventStatus",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetProgressGetCallCenterProcessIdOption = {
  /**
    @description
      processId
    @format int64 */
  processId: number;
};

/** @description response type for apiEmergencyGetProgressGetCallCenterProcessId */
interface ApiEmergencyGetProgressGetCallCenterProcessIdResponse {
  /**
   * @description
   *   OK
   */
  200: CallCenterProcessOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetProgressGetCallCenterProcessIdResponseSuccess =
  ApiEmergencyGetProgressGetCallCenterProcessIdResponse[200];
/**
 * @description
 *   查询呼叫中心反馈节点详情
 * @tags 应急进度接口API
 * @produces *
 */
export const apiEmergencyGetProgressGetCallCenterProcessId = (
  option?: ApiEmergencyGetProgressGetCallCenterProcessIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetProgressGetCallCenterProcessIdResponseSuccess>(
    "/progress/getCallCenter/:processId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetProgressGetOrderFeedBackDetailsIdFeedbackTypeOption = {
  /**
    @description
      feedbackType
    @format int32 */
  feedbackType: number;
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetProgressGetOrderFeedBackDetailsIdFeedbackType */
interface ApiEmergencyGetProgressGetOrderFeedBackDetailsIdFeedbackTypeResponse {
  /**
   * @description
   *   OK
   */
  200: EmeProOrderFeedBackOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetProgressGetOrderFeedBackDetailsIdFeedbackTypeResponseSuccess =
  ApiEmergencyGetProgressGetOrderFeedBackDetailsIdFeedbackTypeResponse[200];
/**
 * @description
 *   查询工单任务反馈详情
 * @tags 应急进度接口API
 * @produces *
 */
export const apiEmergencyGetProgressGetOrderFeedBackDetailsIdFeedbackType = (
  option?: ApiEmergencyGetProgressGetOrderFeedBackDetailsIdFeedbackTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetProgressGetOrderFeedBackDetailsIdFeedbackTypeResponseSuccess>(
    "/progress/getOrderFeedBackDetails/:id/:feedbackType",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostProgressListOption = EmergencyProgressInput;

/** @description response type for apiEmergencyPostProgressList */
interface ApiEmergencyPostProgressListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyProgressListOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostProgressListResponseSuccess =
  ApiEmergencyPostProgressListResponse[200];
/**
 * @description
 *   查询应急进度列表
 * @tags 应急进度接口API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostProgressList = (
  option?: ApiEmergencyPostProgressListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostProgressListResponseSuccess>(
    "/progress/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetProgressMobileGetFeedbackListIdSortFlagOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
  /**
    @description
      sortFlag
    @format int32 */
  sortFlag: number;
};

/** @description response type for apiEmergencyGetProgressMobileGetFeedbackListIdSortFlag */
interface ApiEmergencyGetProgressMobileGetFeedbackListIdSortFlagResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyMobileFeedbackOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetProgressMobileGetFeedbackListIdSortFlagResponseSuccess =
  ApiEmergencyGetProgressMobileGetFeedbackListIdSortFlagResponse[200];
/**
 * @description
 *   获取节点反馈记录（h5）
 * @tags 应急进度接口API
 * @produces *
 */
export const apiEmergencyGetProgressMobileGetFeedbackListIdSortFlag = (
  option?: ApiEmergencyGetProgressMobileGetFeedbackListIdSortFlagOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetProgressMobileGetFeedbackListIdSortFlagResponseSuccess>(
    "/progress/mobile/getFeedbackList/:id/:sortFlag",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetProgressMobileNodeCompleteIdNodeNameOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
  /**
    @description
      nodeName */
  nodeName: string;
};

/** @description response type for apiEmergencyGetProgressMobileNodeCompleteIdNodeName */
interface ApiEmergencyGetProgressMobileNodeCompleteIdNodeNameResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetProgressMobileNodeCompleteIdNodeNameResponseSuccess =
  ApiEmergencyGetProgressMobileNodeCompleteIdNodeNameResponse[200];
/**
 * @description
 *   自定义节点完成反馈（h5）---可以使用/dict/makeTagAndLog接口
 * @tags 应急进度接口API
 * @produces *
 */
export const apiEmergencyGetProgressMobileNodeCompleteIdNodeName = (
  option?: ApiEmergencyGetProgressMobileNodeCompleteIdNodeNameOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetProgressMobileNodeCompleteIdNodeNameResponseSuccess>(
    "/progress/mobile/nodeComplete/:id/:nodeName",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetProgressModifyCallStatusCallIdOption = {
  /**
    @description
      callId
    @format int64 */
  callId: number;
};

/** @description response type for apiEmergencyGetProgressModifyCallStatusCallId */
interface ApiEmergencyGetProgressModifyCallStatusCallIdResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetProgressModifyCallStatusCallIdResponseSuccess =
  ApiEmergencyGetProgressModifyCallStatusCallIdResponse[200];
/**
 * @description
 *   应急事件追加催单已读未读状态修改
 * @tags 应急进度接口API
 * @produces *
 */
export const apiEmergencyGetProgressModifyCallStatusCallId = (
  option?: ApiEmergencyGetProgressModifyCallStatusCallIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetProgressModifyCallStatusCallIdResponseSuccess>(
    "/progress/modifyCallStatus/:callId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostProgressNodeIcomeFeedbackOption = EmergencyIcomeMsgInput;

/** @description response type for apiEmergencyPostProgressNodeIcomeFeedback */
interface ApiEmergencyPostProgressNodeIcomeFeedbackResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostProgressNodeIcomeFeedbackResponseSuccess =
  ApiEmergencyPostProgressNodeIcomeFeedbackResponse[200];
/**
 * @description
 *   icome中反馈未完成节点
 * @tags 应急进度接口API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostProgressNodeIcomeFeedback = (
  option?: ApiEmergencyPostProgressNodeIcomeFeedbackOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostProgressNodeIcomeFeedbackResponseSuccess>(
    "/progress/node/icome/feedback",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetProgressIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetProgressId */
interface ApiEmergencyGetProgressIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyProgressOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetProgressIdResponseSuccess =
  ApiEmergencyGetProgressIdResponse[200];
/**
 * @description
 *   根据主键id查询应急进度详情
 * @tags 应急进度接口API
 * @produces *
 */
export const apiEmergencyGetProgressId = (
  option?: ApiEmergencyGetProgressIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetProgressIdResponseSuccess>(
    "/progress/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetProgressNoticeDetailCompCodeOption = {
  /**
    @description
      compCode */
  compCode: string;
};

/** @description response type for apiEmergencyGetProgressNoticeDetailCompCode */
interface ApiEmergencyGetProgressNoticeDetailCompCodeResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputProgressNoticeCnfOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetProgressNoticeDetailCompCodeResponseSuccess =
  ApiEmergencyGetProgressNoticeDetailCompCodeResponse[200];
/**
 * @description
 *   根据公司编码获取进度通知配置
 * @tags 进度通知配置
 * @produces *
 */
export const apiEmergencyGetProgressNoticeDetailCompCode = (
  option?: ApiEmergencyGetProgressNoticeDetailCompCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetProgressNoticeDetailCompCodeResponseSuccess>(
    "/progressNotice/detail/:compCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostProgressNoticeSaveOption = ProgressNoticeCnfInput;

/** @description response type for apiEmergencyPostProgressNoticeSave */
interface ApiEmergencyPostProgressNoticeSaveResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputString;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostProgressNoticeSaveResponseSuccess =
  ApiEmergencyPostProgressNoticeSaveResponse[200];
/**
 * @description
 *   保存通知配置
 * @tags 进度通知配置
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostProgressNoticeSave = (
  option?: ApiEmergencyPostProgressNoticeSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostProgressNoticeSaveResponseSuccess>(
    "/progressNotice/save",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetResourceMapCarCpmoCodeEventIdOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetResourceMapCarCpmoCodeEventId */
interface ApiEmergencyGetResourceMapCarCpmoCodeEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyMapPersonOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetResourceMapCarCpmoCodeEventIdResponseSuccess =
  ApiEmergencyGetResourceMapCarCpmoCodeEventIdResponse[200];
/**
 * @description
 *   实体查询全部抢险车
 * @tags 资源调配地图接口模块
 * @produces *
 */
export const apiEmergencyGetResourceMapCarCpmoCodeEventId = (
  option?: ApiEmergencyGetResourceMapCarCpmoCodeEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetResourceMapCarCpmoCodeEventIdResponseSuccess>(
    "/resource/map/car/:cpmoCode/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetResourceMapGasCarCpmoCodeEventIdOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetResourceMapGasCarCpmoCodeEventId */
interface ApiEmergencyGetResourceMapGasCarCpmoCodeEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyMapPersonOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetResourceMapGasCarCpmoCodeEventIdResponseSuccess =
  ApiEmergencyGetResourceMapGasCarCpmoCodeEventIdResponse[200];
/**
 * @description
 *   实体查询全部补气车
 * @tags 资源调配地图接口模块
 * @produces *
 */
export const apiEmergencyGetResourceMapGasCarCpmoCodeEventId = (
  option?: ApiEmergencyGetResourceMapGasCarCpmoCodeEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetResourceMapGasCarCpmoCodeEventIdResponseSuccess>(
    "/resource/map/gasCar/:cpmoCode/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetResourceMapPersonCpmoCodeEventIdOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetResourceMapPersonCpmoCodeEventId */
interface ApiEmergencyGetResourceMapPersonCpmoCodeEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyMapPersonOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetResourceMapPersonCpmoCodeEventIdResponseSuccess =
  ApiEmergencyGetResourceMapPersonCpmoCodeEventIdResponse[200];
/**
 * @description
 *   全部外勤人员, 无事件时，eventId传0。
 * @tags 资源调配地图接口模块
 * @produces *
 */
export const apiEmergencyGetResourceMapPersonCpmoCodeEventId = (
  option?: ApiEmergencyGetResourceMapPersonCpmoCodeEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetResourceMapPersonCpmoCodeEventIdResponseSuccess>(
    "/resource/map/person/:cpmoCode/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostReviewAddOption = EmergencyReviewInput;

/** @description response type for apiEmergencyPostReviewAdd */
interface ApiEmergencyPostReviewAddResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostReviewAddResponseSuccess =
  ApiEmergencyPostReviewAddResponse[200];
/**
 * @description
 *   添加复盘信息接口
 * @tags 复盘接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostReviewAdd = (
  option?: ApiEmergencyPostReviewAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostReviewAddResponseSuccess>(
    "/review/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetReviewByEventIdEventIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
};

/** @description response type for apiEmergencyGetReviewByEventIdEventId */
interface ApiEmergencyGetReviewByEventIdEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencyReviewOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetReviewByEventIdEventIdResponseSuccess =
  ApiEmergencyGetReviewByEventIdEventIdResponse[200];
/**
 * @description
 *   byEventId
 * @tags 复盘接口
 * @produces *
 */
export const apiEmergencyGetReviewByEventIdEventId = (
  option?: ApiEmergencyGetReviewByEventIdEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetReviewByEventIdEventIdResponseSuccess>(
    "/review/byEventId/:eventId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostSceneNodeAddNodeOption = SceneNodeInput;

/** @description response type for apiEmergencyPostSceneNodeAddNode */
interface ApiEmergencyPostSceneNodeAddNodeResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeAddNodeResponseSuccess =
  ApiEmergencyPostSceneNodeAddNodeResponse[200];
/**
 * @description
 *   添加预案流程环节
 * @tags 场景预案流程环节API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeAddNode = (
  option?: ApiEmergencyPostSceneNodeAddNodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeAddNodeResponseSuccess>(
    "/scene/node/addNode",
    { method: "post", body: option },
    config
  );

/** @description response type for apiEmergencyGetSceneNodeCommon */
interface ApiEmergencyGetSceneNodeCommonResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencySceneNodeOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeCommonResponseSuccess =
  ApiEmergencyGetSceneNodeCommonResponse[200];
/**
 * @description
 *   预置环节列表
 * @tags 场景预案流程环节API
 * @produces *
 */
export const apiEmergencyGetSceneNodeCommon = (config?: AxiosRequestConfig) =>
  requester<ApiEmergencyGetSceneNodeCommonResponseSuccess>(
    "/scene/node/common",
    { method: "get" },
    config
  );

type ApiEmergencyGetSceneNodeDeleteNodeNodeIdOption = {
  /**
    @description
      nodeId
    @format int64 */
  nodeId: number;
};

/** @description response type for apiEmergencyGetSceneNodeDeleteNodeNodeId */
interface ApiEmergencyGetSceneNodeDeleteNodeNodeIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeDeleteNodeNodeIdResponseSuccess =
  ApiEmergencyGetSceneNodeDeleteNodeNodeIdResponse[200];
/**
 * @description
 *   删除预案流程环节
 * @tags 场景预案流程环节API
 * @produces *
 */
export const apiEmergencyGetSceneNodeDeleteNodeNodeId = (
  option?: ApiEmergencyGetSceneNodeDeleteNodeNodeIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneNodeDeleteNodeNodeIdResponseSuccess>(
    "/scene/node/deleteNode/:nodeId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostSceneNodeEditNodeOption = SceneNodeInput;

/** @description response type for apiEmergencyPostSceneNodeEditNode */
interface ApiEmergencyPostSceneNodeEditNodeResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeEditNodeResponseSuccess =
  ApiEmergencyPostSceneNodeEditNodeResponse[200];
/**
 * @description
 *   编辑预案流程环节
 * @tags 场景预案流程环节API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeEditNode = (
  option?: ApiEmergencyPostSceneNodeEditNodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeEditNodeResponseSuccess>(
    "/scene/node/editNode",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetSceneNodeGetNodeListCompanyCodeScenePreplanIdOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      scenePreplanId
    @format int64 */
  scenePreplanId: number;
};

/** @description response type for apiEmergencyGetSceneNodeGetNodeListCompanyCodeScenePreplanId */
interface ApiEmergencyGetSceneNodeGetNodeListCompanyCodeScenePreplanIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SceneNodeOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeGetNodeListCompanyCodeScenePreplanIdResponseSuccess =
  ApiEmergencyGetSceneNodeGetNodeListCompanyCodeScenePreplanIdResponse[200];
/**
 * @description
 *   获取预案流程环节列表
 * @tags 场景预案流程环节API
 * @produces *
 */
export const apiEmergencyGetSceneNodeGetNodeListCompanyCodeScenePreplanId = (
  option?: ApiEmergencyGetSceneNodeGetNodeListCompanyCodeScenePreplanIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneNodeGetNodeListCompanyCodeScenePreplanIdResponseSuccess>(
    "/scene/node/getNodeList/:companyCode/:scenePreplanId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostSceneNodeNoticeAddOption = AddNodeTaskInput;

/** @description response type for apiEmergencyPostSceneNodeNoticeAdd */
interface ApiEmergencyPostSceneNodeNoticeAddResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeNoticeAddResponseSuccess =
  ApiEmergencyPostSceneNodeNoticeAddResponse[200];
/**
 * @description
 *   通知策略添加
 * @tags 场景预案流程节点通知策略API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeNoticeAdd = (
  option?: ApiEmergencyPostSceneNodeNoticeAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeNoticeAddResponseSuccess>(
    "/scene/node/notice/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetSceneNodeNoticeByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetSceneNodeNoticeByIdId */
interface ApiEmergencyGetSceneNodeNoticeByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: EmergencySceneNoticeStrategyDetailsOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeNoticeByIdIdResponseSuccess =
  ApiEmergencyGetSceneNodeNoticeByIdIdResponse[200];
/**
 * @description
 *   vv1 - 通知策略详情 vv1
 * @tags 场景预案流程节点通知策略API
 * @produces *
 */
export const apiEmergencyGetSceneNodeNoticeByIdId = (
  option?: ApiEmergencyGetSceneNodeNoticeByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneNodeNoticeByIdIdResponseSuccess>(
    "/scene/node/notice/byId/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetSceneNodeNoticeDelIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiEmergencyGetSceneNodeNoticeDelId */
interface ApiEmergencyGetSceneNodeNoticeDelIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeNoticeDelIdResponseSuccess =
  ApiEmergencyGetSceneNodeNoticeDelIdResponse[200];
/**
 * @description
 *   通知策略删除 多个删除,号分割
 * @tags 场景预案流程节点通知策略API
 * @produces *
 */
export const apiEmergencyGetSceneNodeNoticeDelId = (
  option?: ApiEmergencyGetSceneNodeNoticeDelIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneNodeNoticeDelIdResponseSuccess>(
    "/scene/node/notice/del/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostSceneNodeNoticeGetSendStrategyEventIdNodeIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
  /**
    @description
      nodeId
    @format int64 */
  nodeId: number;
};

/** @description response type for apiEmergencyPostSceneNodeNoticeGetSendStrategyEventIdNodeId */
interface ApiEmergencyPostSceneNodeNoticeGetSendStrategyEventIdNodeIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyNoticeRecordOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeNoticeGetSendStrategyEventIdNodeIdResponseSuccess =
  ApiEmergencyPostSceneNodeNoticeGetSendStrategyEventIdNodeIdResponse[200];
/**
 * @description
 *   获取启动时的通知策略信息
 * @tags 场景预案流程节点通知策略API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeNoticeGetSendStrategyEventIdNodeId = (
  option?: ApiEmergencyPostSceneNodeNoticeGetSendStrategyEventIdNodeIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeNoticeGetSendStrategyEventIdNodeIdResponseSuccess>(
    "/scene/node/notice/getSendStrategy/:eventId/:nodeId",
    { method: "post", path: option },
    config
  );

type ApiEmergencyPostSceneNodeNoticeListOption = SceneTaskNodeInput;

/** @description response type for apiEmergencyPostSceneNodeNoticeList */
interface ApiEmergencyPostSceneNodeNoticeListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencySceneNoticeStrategyOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeNoticeListResponseSuccess =
  ApiEmergencyPostSceneNodeNoticeListResponse[200];
/**
 * @description
 *   vv1 - 通知策略列表 vv1
 * @tags 场景预案流程节点通知策略API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeNoticeList = (
  option?: ApiEmergencyPostSceneNodeNoticeListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeNoticeListResponseSuccess>(
    "/scene/node/notice/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSceneNodeNoticeUpdOption = AddNodeTaskInput;

/** @description response type for apiEmergencyPostSceneNodeNoticeUpd */
interface ApiEmergencyPostSceneNodeNoticeUpdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeNoticeUpdResponseSuccess =
  ApiEmergencyPostSceneNodeNoticeUpdResponse[200];
/**
 * @description
 *   通知策略修改
 * @tags 场景预案流程节点通知策略API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeNoticeUpd = (
  option?: ApiEmergencyPostSceneNodeNoticeUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeNoticeUpdResponseSuccess>(
    "/scene/node/notice/upd",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSceneNodeTaskAddOption = AddNodeTaskInput;

/** @description response type for apiEmergencyPostSceneNodeTaskAdd */
interface ApiEmergencyPostSceneNodeTaskAddResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeTaskAddResponseSuccess =
  ApiEmergencyPostSceneNodeTaskAddResponse[200];
/**
 * @description
 *   任务措施添加
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeTaskAdd = (
  option?: ApiEmergencyPostSceneNodeTaskAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeTaskAddResponseSuccess>(
    "/scene/node/task/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetSceneNodeTaskByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetSceneNodeTaskByIdId */
interface ApiEmergencyGetSceneNodeTaskByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: SceneNodeDetailsOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeTaskByIdIdResponseSuccess =
  ApiEmergencyGetSceneNodeTaskByIdIdResponse[200];
/**
 * @description
 *   任务措施详情
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiEmergencyGetSceneNodeTaskByIdId = (
  option?: ApiEmergencyGetSceneNodeTaskByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneNodeTaskByIdIdResponseSuccess>(
    "/scene/node/task/byId/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostSceneNodeTaskCheckItcodeOption = CheckItcodeInput;

/** @description response type for apiEmergencyPostSceneNodeTaskCheckItcode */
interface ApiEmergencyPostSceneNodeTaskCheckItcodeResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeTaskCheckItcodeResponseSuccess =
  ApiEmergencyPostSceneNodeTaskCheckItcodeResponse[200];
/**
 * @description
 *   校验人在任务里是否存在
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeTaskCheckItcode = (
  option?: ApiEmergencyPostSceneNodeTaskCheckItcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeTaskCheckItcodeResponseSuccess>(
    "/scene/node/task/checkItcode",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
  /**
    @description
      eventName */
  eventName: string;
  /**
    @description
      preplanId
    @format int64 */
  preplanId: number;
};

/** @description response type for apiEmergencyGetSceneNodeTaskCheckTaskEventIdPreplanIdEventName */
interface ApiEmergencyGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameResponseSuccess =
  ApiEmergencyGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameResponse[200];
/**
 * @description
 *   checkTask
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiEmergencyGetSceneNodeTaskCheckTaskEventIdPreplanIdEventName = (
  option?: ApiEmergencyGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameResponseSuccess>(
    "/scene/node/task/checkTask/:eventId/:preplanId/:eventName",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetSceneNodeTaskCheckTaskIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetSceneNodeTaskCheckTaskId */
interface ApiEmergencyGetSceneNodeTaskCheckTaskIdResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: number;
  };
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeTaskCheckTaskIdResponseSuccess =
  ApiEmergencyGetSceneNodeTaskCheckTaskIdResponse[200];
/**
 * @description
 *   校验必须任务是否都完成
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiEmergencyGetSceneNodeTaskCheckTaskId = (
  option?: ApiEmergencyGetSceneNodeTaskCheckTaskIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneNodeTaskCheckTaskIdResponseSuccess>(
    "/scene/node/task/checkTask/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetSceneNodeTaskDelIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiEmergencyGetSceneNodeTaskDelId */
interface ApiEmergencyGetSceneNodeTaskDelIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeTaskDelIdResponseSuccess =
  ApiEmergencyGetSceneNodeTaskDelIdResponse[200];
/**
 * @description
 *   任务措施删除 多个删除,号分割
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiEmergencyGetSceneNodeTaskDelId = (
  option?: ApiEmergencyGetSceneNodeTaskDelIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneNodeTaskDelIdResponseSuccess>(
    "/scene/node/task/del/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostSceneNodeTaskGetTaskOption = TaskInput;

/** @description response type for apiEmergencyPostSceneNodeTaskGetTask */
interface ApiEmergencyPostSceneNodeTaskGetTaskResponse {
  /**
   * @description
   *   OK
   */
  200: Array<TaskOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeTaskGetTaskResponseSuccess =
  ApiEmergencyPostSceneNodeTaskGetTaskResponse[200];
/**
 * @description
 *   任务措施/通知策略预置任务
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeTaskGetTask = (
  option?: ApiEmergencyPostSceneNodeTaskGetTaskOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeTaskGetTaskResponseSuccess>(
    "/scene/node/task/getTask",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdOption =
  {
    /**
    @description
      nodeName */
    nodeName: string;
    /**
    @description
      scenePreplanId
    @format int64 */
    scenePreplanId: number;
  };

/** @description response type for apiEmergencyGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanId */
interface ApiEmergencyGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdResponseSuccess =
  ApiEmergencyGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdResponse[200];
/**
 * @description
 *   获取对应节点下的任务节点id
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiEmergencyGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanId =
  (
    option?: ApiEmergencyGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdResponseSuccess>(
      "/scene/node/task/getTaskIdByNodeName/:nodeName/:scenePreplanId",
      { method: "get", path: option },
      config
    );

type ApiEmergencyPostSceneNodeTaskListOption = SceneTaskNodeInput;

/** @description response type for apiEmergencyPostSceneNodeTaskList */
interface ApiEmergencyPostSceneNodeTaskListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencySceneNodeOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeTaskListResponseSuccess =
  ApiEmergencyPostSceneNodeTaskListResponse[200];
/**
 * @description
 *   vv1 - 任务措施列表
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeTaskList = (
  option?: ApiEmergencyPostSceneNodeTaskListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeTaskListResponseSuccess>(
    "/scene/node/task/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSceneNodeTaskStartTaskOption = StartTaskExampleInput;

/** @description response type for apiEmergencyPostSceneNodeTaskStartTask */
interface ApiEmergencyPostSceneNodeTaskStartTaskResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeTaskStartTaskResponseSuccess =
  ApiEmergencyPostSceneNodeTaskStartTaskResponse[200];
/**
 * @description
 *   startTask
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeTaskStartTask = (
  option?: ApiEmergencyPostSceneNodeTaskStartTaskOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeTaskStartTaskResponseSuccess>(
    "/scene/node/task/startTask",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSceneNodeTaskUpdOption = AddNodeTaskInput;

/** @description response type for apiEmergencyPostSceneNodeTaskUpd */
interface ApiEmergencyPostSceneNodeTaskUpdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneNodeTaskUpdResponseSuccess =
  ApiEmergencyPostSceneNodeTaskUpdResponse[200];
/**
 * @description
 *   任务措施修改
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneNodeTaskUpd = (
  option?: ApiEmergencyPostSceneNodeTaskUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneNodeTaskUpdResponseSuccess>(
    "/scene/node/task/upd",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetSceneNodeTaskCompanyCodeNodeIdOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      nodeId
    @format int64 */
  nodeId: number;
};

/** @description response type for apiEmergencyGetSceneNodeTaskCompanyCodeNodeId */
interface ApiEmergencyGetSceneNodeTaskCompanyCodeNodeIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencySceneNodeTaskOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneNodeTaskCompanyCodeNodeIdResponseSuccess =
  ApiEmergencyGetSceneNodeTaskCompanyCodeNodeIdResponse[200];
/**
 * @description
 *   获取常规预案预置任务
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiEmergencyGetSceneNodeTaskCompanyCodeNodeId = (
  option?: ApiEmergencyGetSceneNodeTaskCompanyCodeNodeIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneNodeTaskCompanyCodeNodeIdResponseSuccess>(
    "/scene/node/task/:companyCode/:nodeId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostSceneLabelAddLabelOption =
  EmergencyEnterpriseDictLabelDataAddInput;

/** @description response type for apiEmergencyPostSceneLabelAddLabel */
interface ApiEmergencyPostSceneLabelAddLabelResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: any;
  };
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneLabelAddLabelResponseSuccess =
  ApiEmergencyPostSceneLabelAddLabelResponse[200];
/**
 * @description
 *   添加标签
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneLabelAddLabel = (
  option?: ApiEmergencyPostSceneLabelAddLabelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneLabelAddLabelResponseSuccess>(
    "/sceneLabel/addLabel",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSceneLabelAddLabelByEventIdOption = AddLabelInput;

/** @description response type for apiEmergencyPostSceneLabelAddLabelByEventId */
interface ApiEmergencyPostSceneLabelAddLabelByEventIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneLabelAddLabelByEventIdResponseSuccess =
  ApiEmergencyPostSceneLabelAddLabelByEventIdResponse[200];
/**
 * @description
 *   添加事件关联标签
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneLabelAddLabelByEventId = (
  option?: ApiEmergencyPostSceneLabelAddLabelByEventIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneLabelAddLabelByEventIdResponseSuccess>(
    "/sceneLabel/addLabelByEventId",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSceneLabelAiLabelOption = AILabelInput;

/** @description response type for apiEmergencyPostSceneLabelAiLabel */
interface ApiEmergencyPostSceneLabelAiLabelResponse {
  /**
   * @description
   *   OK
   */
  200: Array<LabelNameModelOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneLabelAiLabelResponseSuccess =
  ApiEmergencyPostSceneLabelAiLabelResponse[200];
/**
 * @description
 *   AI识别语义标签
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneLabelAiLabel = (
  option?: ApiEmergencyPostSceneLabelAiLabelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneLabelAiLabelResponseSuccess>(
    "/sceneLabel/ai/label",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSceneLabelBatchLabelToPreplanOption =
  BatchLabelToPreplanInput;

/** @description response type for apiEmergencyPostSceneLabelBatchLabelToPreplan */
interface ApiEmergencyPostSceneLabelBatchLabelToPreplanResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneLabelBatchLabelToPreplanResponseSuccess =
  ApiEmergencyPostSceneLabelBatchLabelToPreplanResponse[200];
/**
 * @description
 *   绑定标签到预案
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneLabelBatchLabelToPreplan = (
  option?: ApiEmergencyPostSceneLabelBatchLabelToPreplanOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneLabelBatchLabelToPreplanResponseSuccess>(
    "/sceneLabel/batchLabelToPreplan",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetSceneLabelCheckLabelByEventIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetSceneLabelCheckLabelByEventIdId */
interface ApiEmergencyGetSceneLabelCheckLabelByEventIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneLabelCheckLabelByEventIdIdResponseSuccess =
  ApiEmergencyGetSceneLabelCheckLabelByEventIdIdResponse[200];
/**
 * @description
 *   初始化事件关联标签结构
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiEmergencyGetSceneLabelCheckLabelByEventIdId = (
  option?: ApiEmergencyGetSceneLabelCheckLabelByEventIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneLabelCheckLabelByEventIdIdResponseSuccess>(
    "/sceneLabel/checkLabelByEventId/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetSceneLabelDelLabelByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetSceneLabelDelLabelByIdId */
interface ApiEmergencyGetSceneLabelDelLabelByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneLabelDelLabelByIdIdResponseSuccess =
  ApiEmergencyGetSceneLabelDelLabelByIdIdResponse[200];
/**
 * @description
 *   删除标签
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiEmergencyGetSceneLabelDelLabelByIdId = (
  option?: ApiEmergencyGetSceneLabelDelLabelByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneLabelDelLabelByIdIdResponseSuccess>(
    "/sceneLabel/delLabelById/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetSceneLabelDelLabelIdByEventIdEventIdLabelIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
  /**
    @description
      labelId
    @format int64 */
  labelId: number;
};

/** @description response type for apiEmergencyGetSceneLabelDelLabelIdByEventIdEventIdLabelId */
interface ApiEmergencyGetSceneLabelDelLabelIdByEventIdEventIdLabelIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneLabelDelLabelIdByEventIdEventIdLabelIdResponseSuccess =
  ApiEmergencyGetSceneLabelDelLabelIdByEventIdEventIdLabelIdResponse[200];
/**
 * @description
 *   delLabelIdByEventId
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiEmergencyGetSceneLabelDelLabelIdByEventIdEventIdLabelId = (
  option?: ApiEmergencyGetSceneLabelDelLabelIdByEventIdEventIdLabelIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneLabelDelLabelIdByEventIdEventIdLabelIdResponseSuccess>(
    "/sceneLabel/delLabelIdByEventId/:eventId/:labelId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetSceneLabelGetAiLabelIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetSceneLabelGetAiLabelId */
interface ApiEmergencyGetSceneLabelGetAiLabelIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<LabelNameModelOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneLabelGetAiLabelIdResponseSuccess =
  ApiEmergencyGetSceneLabelGetAiLabelIdResponse[200];
/**
 * @description
 *   获取初始化事件关联标签
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiEmergencyGetSceneLabelGetAiLabelId = (
  option?: ApiEmergencyGetSceneLabelGetAiLabelIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneLabelGetAiLabelIdResponseSuccess>(
    "/sceneLabel/getAiLabel/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetSceneLabelGetEventLabelByEventIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetSceneLabelGetEventLabelByEventIdId */
interface ApiEmergencyGetSceneLabelGetEventLabelByEventIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<LabelNameModelOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneLabelGetEventLabelByEventIdIdResponseSuccess =
  ApiEmergencyGetSceneLabelGetEventLabelByEventIdIdResponse[200];
/**
 * @description
 *   获取初始化事件关联标签
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiEmergencyGetSceneLabelGetEventLabelByEventIdId = (
  option?: ApiEmergencyGetSceneLabelGetEventLabelByEventIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneLabelGetEventLabelByEventIdIdResponseSuccess>(
    "/sceneLabel/getEventLabelByEventId/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelOption =
  {
    /**
    @description
      level
    @format int32 */
    level: number;
    /**
    @description
      preplanId
    @format int64 */
    preplanId: number;
  };

/** @description response type for apiEmergencyGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevel */
interface ApiEmergencyGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelResponse {
  /**
   * @description
   *   OK
   */
  200: Array<number>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelResponseSuccess =
  ApiEmergencyGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelResponse[200];
/**
 * @description
 *   getGroupIdByPreplanIdAndLevel
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiEmergencyGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevel =
  (
    option?: ApiEmergencyGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelResponseSuccess>(
      "/sceneLabel/getGroupIdByPreplanIdAndLevel/:preplanId/:level",
      { method: "get", path: option },
      config
    );

type ApiEmergencyPostSceneLabelGetLevelOption = PreplanLevelIutput;

/** @description response type for apiEmergencyPostSceneLabelGetLevel */
interface ApiEmergencyPostSceneLabelGetLevelResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PreplanLevelOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneLabelGetLevelResponseSuccess =
  ApiEmergencyPostSceneLabelGetLevelResponse[200];
/**
 * @description
 *   根据预案获取推荐级别
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneLabelGetLevel = (
  option?: ApiEmergencyPostSceneLabelGetLevelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneLabelGetLevelResponseSuccess>(
    "/sceneLabel/getLevel",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetSceneLabelGetPipePreplanIdCodeOption = {
  /**
    @description
      code */
  code: string;
  /**
    @description
      preplanId
    @format int64 */
  preplanId: number;
};

/** @description response type for apiEmergencyGetSceneLabelGetPipePreplanIdCode */
interface ApiEmergencyGetSceneLabelGetPipePreplanIdCodeResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneLabelGetPipePreplanIdCodeResponseSuccess =
  ApiEmergencyGetSceneLabelGetPipePreplanIdCodeResponse[200];
/**
 * @description
 *   当前预案选择的管段是否被其他预案添加过
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiEmergencyGetSceneLabelGetPipePreplanIdCode = (
  option?: ApiEmergencyGetSceneLabelGetPipePreplanIdCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneLabelGetPipePreplanIdCodeResponseSuccess>(
    "/sceneLabel/getPipe/:preplanId/:code",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostSceneLabelGetRecommendPreplanOption =
  RecommendPreplanInput;

/** @description response type for apiEmergencyPostSceneLabelGetRecommendPreplan */
interface ApiEmergencyPostSceneLabelGetRecommendPreplanResponse {
  /**
   * @description
   *   OK
   */
  200: Array<RecommendPreplanOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneLabelGetRecommendPreplanResponseSuccess =
  ApiEmergencyPostSceneLabelGetRecommendPreplanResponse[200];
/**
 * @description
 *   获取推荐预案
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneLabelGetRecommendPreplan = (
  option?: ApiEmergencyPostSceneLabelGetRecommendPreplanOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneLabelGetRecommendPreplanResponseSuccess>(
    "/sceneLabel/getRecommendPreplan",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSceneLabelOutQuerySceneLabelOption =
  EmergencyEnterpriseDictLabelDataInput;

/** @description response type for apiEmergencyPostSceneLabelOutQuerySceneLabel */
interface ApiEmergencyPostSceneLabelOutQuerySceneLabelResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AIDictLabelDataOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneLabelOutQuerySceneLabelResponseSuccess =
  ApiEmergencyPostSceneLabelOutQuerySceneLabelResponse[200];
/**
 * @description
 *   添加标签回显接口
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneLabelOutQuerySceneLabel = (
  option?: ApiEmergencyPostSceneLabelOutQuerySceneLabelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneLabelOutQuerySceneLabelResponseSuccess>(
    "/sceneLabel/out/querySceneLabel",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetSceneLabelQeuryWeightByPreplanIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetSceneLabelQeuryWeightByPreplanIdId */
interface ApiEmergencyGetSceneLabelQeuryWeightByPreplanIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<LabelWeightListOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSceneLabelQeuryWeightByPreplanIdIdResponseSuccess =
  ApiEmergencyGetSceneLabelQeuryWeightByPreplanIdIdResponse[200];
/**
 * @description
 *   获取场景预案关联权重标签接口
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiEmergencyGetSceneLabelQeuryWeightByPreplanIdId = (
  option?: ApiEmergencyGetSceneLabelQeuryWeightByPreplanIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetSceneLabelQeuryWeightByPreplanIdIdResponseSuccess>(
    "/sceneLabel/qeuryWeightByPreplanId/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostSceneLabelQuerySceneLabelOption =
  EmergencyEnterpriseDictLabelDataInput;

/** @description response type for apiEmergencyPostSceneLabelQuerySceneLabel */
interface ApiEmergencyPostSceneLabelQuerySceneLabelResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyEnterpriseDictLabelDataOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneLabelQuerySceneLabelResponseSuccess =
  ApiEmergencyPostSceneLabelQuerySceneLabelResponse[200];
/**
 * @description
 *   添加标签回显接口
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneLabelQuerySceneLabel = (
  option?: ApiEmergencyPostSceneLabelQuerySceneLabelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneLabelQuerySceneLabelResponseSuccess>(
    "/sceneLabel/querySceneLabel",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSceneLabelWeightSaveOption = Array<LabelWeightListInput>;

/** @description response type for apiEmergencyPostSceneLabelWeightSave */
interface ApiEmergencyPostSceneLabelWeightSaveResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSceneLabelWeightSaveResponseSuccess =
  ApiEmergencyPostSceneLabelWeightSaveResponse[200];
/**
 * @description
 *   场景预案关联权重标签保存接口
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSceneLabelWeightSave = (
  option?: ApiEmergencyPostSceneLabelWeightSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSceneLabelWeightSaveResponseSuccess>(
    "/sceneLabel/weightSave",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostScenepreplanAddOrUpdOption = EmergencyScenePreplanInput;

/** @description response type for apiEmergencyPostScenepreplanAddOrUpd */
interface ApiEmergencyPostScenepreplanAddOrUpdResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostScenepreplanAddOrUpdResponseSuccess =
  ApiEmergencyPostScenepreplanAddOrUpdResponse[200];
/**
 * @description
 *   场景预案添加/修改接口
 * @tags 场景预案管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostScenepreplanAddOrUpd = (
  option?: ApiEmergencyPostScenepreplanAddOrUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostScenepreplanAddOrUpdResponseSuccess>(
    "/scenepreplan/addOrUpd",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetScenepreplanBatchDelCpmoCopIdsOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
  /**
    @description
      ids */
  ids: string;
};

/** @description response type for apiEmergencyGetScenepreplanBatchDelCpmoCopIds */
interface ApiEmergencyGetScenepreplanBatchDelCpmoCopIdsResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetScenepreplanBatchDelCpmoCopIdsResponseSuccess =
  ApiEmergencyGetScenepreplanBatchDelCpmoCopIdsResponse[200];
/**
 * @description
 *   批量删除接口
 * @tags 场景预案管理
 * @produces *
 */
export const apiEmergencyGetScenepreplanBatchDelCpmoCopIds = (
  option?: ApiEmergencyGetScenepreplanBatchDelCpmoCopIdsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetScenepreplanBatchDelCpmoCopIdsResponseSuccess>(
    "/scenepreplan/batchDel/:cpmoCop/:ids",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetScenepreplanButtonStatusCpmoCopIdStatusOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
  /**
    @description
      id
    @format int64 */
  id: number;
  /**
    @description
      status
    @format int32 */
  status: number;
};

/** @description response type for apiEmergencyGetScenepreplanButtonStatusCpmoCopIdStatus */
interface ApiEmergencyGetScenepreplanButtonStatusCpmoCopIdStatusResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetScenepreplanButtonStatusCpmoCopIdStatusResponseSuccess =
  ApiEmergencyGetScenepreplanButtonStatusCpmoCopIdStatusResponse[200];
/**
 * @description
 *   修改按钮状态接口
 * @tags 场景预案管理
 * @produces *
 */
export const apiEmergencyGetScenepreplanButtonStatusCpmoCopIdStatus = (
  option?: ApiEmergencyGetScenepreplanButtonStatusCpmoCopIdStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetScenepreplanButtonStatusCpmoCopIdStatusResponseSuccess>(
    "/scenepreplan/buttonStatus/:cpmoCop/:id/:status",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetScenepreplanDocIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetScenepreplanDocId */
interface ApiEmergencyGetScenepreplanDocIdResponse {
  /**
   * @description
   *   OK
   */
  200: FileUploadOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetScenepreplanDocIdResponseSuccess =
  ApiEmergencyGetScenepreplanDocIdResponse[200];
/**
 * @description
 *   getDoc
 * @tags 场景预案管理
 * @produces *
 */
export const apiEmergencyGetScenepreplanDocId = (
  option?: ApiEmergencyGetScenepreplanDocIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetScenepreplanDocIdResponseSuccess>(
    "/scenepreplan/doc/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetScenepreplanGetDetailByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetScenepreplanGetDetailByIdId */
interface ApiEmergencyGetScenepreplanGetDetailByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetScenepreplanGetDetailByIdIdResponseSuccess =
  ApiEmergencyGetScenepreplanGetDetailByIdIdResponse[200];
/**
 * @description
 *   场景预案详情接口
 * @tags 场景预案管理
 * @produces *
 */
export const apiEmergencyGetScenepreplanGetDetailByIdId = (
  option?: ApiEmergencyGetScenepreplanGetDetailByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetScenepreplanGetDetailByIdIdResponseSuccess>(
    "/scenepreplan/getDetailById/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetScenepreplanGroupGroupIdOption = {
  /**
    @description
      groupId
    @format int32 */
  groupId: number;
};

/** @description response type for apiEmergencyGetScenepreplanGroupGroupId */
interface ApiEmergencyGetScenepreplanGroupGroupIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetScenepreplanGroupGroupIdResponseSuccess =
  ApiEmergencyGetScenepreplanGroupGroupIdResponse[200];
/**
 * @description
 *   获取场景预案管理体系
 * @tags 场景预案管理
 * @produces *
 */
export const apiEmergencyGetScenepreplanGroupGroupId = (
  option?: ApiEmergencyGetScenepreplanGroupGroupIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetScenepreplanGroupGroupIdResponseSuccess>(
    "/scenepreplan/group/:groupId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostScenepreplanListOption =
  EmergencyScenePreplanListParamInput;

/** @description response type for apiEmergencyPostScenepreplanList */
interface ApiEmergencyPostScenepreplanListResponse {
  /**
   * @description
   *   OK
   */
  200: PageResultOutputEmergencyScenePreplanOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostScenepreplanListResponseSuccess =
  ApiEmergencyPostScenepreplanListResponse[200];
/**
 * @description
 *   场景预案列表接口
 * @tags 场景预案管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostScenepreplanList = (
  option?: ApiEmergencyPostScenepreplanListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostScenepreplanListResponseSuccess>(
    "/scenepreplan/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeOption = {
  /**
    @description
      compCode */
  compCode: string;
  /**
    @description
      dictId
    @format int64 */
  dictId: number;
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCode */
interface ApiEmergencyGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SceneLabel>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeResponseSuccess =
  ApiEmergencyGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeResponse[200];
/**
 * @description
 *   获取对应标签信息
 * @tags 场景预案管理
 * @produces *
 */
export const apiEmergencyGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCode =
  (
    option?: ApiEmergencyGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeResponseSuccess>(
      "/scenepreplan/queryLabelByPreplanId/:id/:dictId/:compCode",
      { method: "get", path: option },
      config
    );

/** @description response type for apiEmergencyPostScenepreplanSceneLabelAdd */
interface ApiEmergencyPostScenepreplanSceneLabelAddResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostScenepreplanSceneLabelAddResponseSuccess =
  ApiEmergencyPostScenepreplanSceneLabelAddResponse[200];
/**
 * @description
 *   添加场景标签
 * @tags 场景预案管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostScenepreplanSceneLabelAdd = (
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostScenepreplanSceneLabelAddResponseSuccess>(
    "/scenepreplan/sceneLabelAdd",
    { method: "post" },
    config
  );

type ApiEmergencyGetScenepreplanCompCodeOption = {
  /**
    @description
      compCode */
  compCode: string;
};

/** @description response type for apiEmergencyGetScenepreplanCompCode */
interface ApiEmergencyGetScenepreplanCompCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ScenePreplanChooseOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetScenepreplanCompCodeResponseSuccess =
  ApiEmergencyGetScenepreplanCompCodeResponse[200];
/**
 * @description
 *   getScenePreplanByCompCode
 * @tags 场景预案管理
 * @produces *
 */
export const apiEmergencyGetScenepreplanCompCode = (
  option?: ApiEmergencyGetScenepreplanCompCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetScenepreplanCompCodeResponseSuccess>(
    "/scenepreplan/:compCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostShortGasSupplyOption = ShortSupplyInput;

/** @description response type for apiEmergencyPostShortGasSupply */
interface ApiEmergencyPostShortGasSupplyResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostShortGasSupplyResponseSuccess =
  ApiEmergencyPostShortGasSupplyResponse[200];
/**
 * @description
 *   新增/编辑临时补气点
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostShortGasSupply = (
  option?: ApiEmergencyPostShortGasSupplyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostShortGasSupplyResponseSuccess>(
    "/short/gas/supply",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostStationAllOrganOption = CompanyStationOrganInput;

/** @description response type for apiEmergencyPostStationAllOrgan */
interface ApiEmergencyPostStationAllOrganResponse {
  /**
   * @description
   *   OK
   */
  200: ResultOutputListOrgan;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostStationAllOrganResponseSuccess =
  ApiEmergencyPostStationAllOrganResponse[200];
/**
 * @description
 *   站组织下的全部区域
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostStationAllOrgan = (
  option?: ApiEmergencyPostStationAllOrganOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostStationAllOrganResponseSuccess>(
    "/station/all/organ",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectCancelOption = CarInspectionReq;

/** @description response type for apiEmergencyPostSuppliesInspectCancel */
interface ApiEmergencyPostSuppliesInspectCancelResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectCancelResponseSuccess =
  ApiEmergencyPostSuppliesInspectCancelResponse[200];
/**
 * @description
 *   取消点检
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectCancel = (
  option?: ApiEmergencyPostSuppliesInspectCancelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectCancelResponseSuccess>(
    "/suppliesInspect/cancel",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectCarsOption = InspectedCarReq;

/** @description response type for apiEmergencyPostSuppliesInspectCars */
interface ApiEmergencyPostSuppliesInspectCarsResponse {
  /**
   * @description
   *   OK
   */
  200: Array<InspectedCarVO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectCarsResponseSuccess =
  ApiEmergencyPostSuppliesInspectCarsResponse[200];
/**
 * @description
 *   查询车辆信息
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectCars = (
  option?: ApiEmergencyPostSuppliesInspectCarsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectCarsResponseSuccess>(
    "/suppliesInspect/cars",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectCategoriesOption = SuppliesCategoryReq;

/** @description response type for apiEmergencyPostSuppliesInspectCategories */
interface ApiEmergencyPostSuppliesInspectCategoriesResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SuppliesInspectionCategoryVO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectCategoriesResponseSuccess =
  ApiEmergencyPostSuppliesInspectCategoriesResponse[200];
/**
 * @description
 *   查询车辆点检物资分类
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectCategories = (
  option?: ApiEmergencyPostSuppliesInspectCategoriesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectCategoriesResponseSuccess>(
    "/suppliesInspect/categories",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectCategorySuppliesOption =
  CarInspectionDetailReq;

/** @description response type for apiEmergencyPostSuppliesInspectCategorySupplies */
interface ApiEmergencyPostSuppliesInspectCategorySuppliesResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CategorySuppliesVO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectCategorySuppliesResponseSuccess =
  ApiEmergencyPostSuppliesInspectCategorySuppliesResponse[200];
/**
 * @description
 *   查询车辆点检物资项
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectCategorySupplies = (
  option?: ApiEmergencyPostSuppliesInspectCategorySuppliesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectCategorySuppliesResponseSuccess>(
    "/suppliesInspect/categorySupplies",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateOption =
  {
    /**
    @description
      licensePlate */
    licensePlate: string;
  };

/** @description response type for apiEmergencyGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlate */
interface ApiEmergencyGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateResponse {
  /**
   * @description
   *   OK
   */
  200: Array<string>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateResponseSuccess =
  ApiEmergencyGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateResponse[200];
/**
 * @description
 *   异常提醒信息
 * @tags 车辆物资点检
 * @produces *
 */
export const apiEmergencyGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlate =
  (
    option?: ApiEmergencyGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiEmergencyGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateResponseSuccess>(
      "/suppliesInspect/getInspectionSummaryByLicensePlate/:licensePlate",
      { method: "get", path: option },
      config
    );

type ApiEmergencyPostSuppliesInspectInspectionDetailOption =
  CarInspectionDetailReq;

/** @description response type for apiEmergencyPostSuppliesInspectInspectionDetail */
interface ApiEmergencyPostSuppliesInspectInspectionDetailResponse {
  /**
   * @description
   *   OK
   */
  200: CarInspectionDetailVO;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectInspectionDetailResponseSuccess =
  ApiEmergencyPostSuppliesInspectInspectionDetailResponse[200];
/**
 * @description
 *   查询车辆点检详情
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectInspectionDetail = (
  option?: ApiEmergencyPostSuppliesInspectInspectionDetailOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectInspectionDetailResponseSuccess>(
    "/suppliesInspect/inspectionDetail",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectResetOption = CarInspectionReq;

/** @description response type for apiEmergencyPostSuppliesInspectReset */
interface ApiEmergencyPostSuppliesInspectResetResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectResetResponseSuccess =
  ApiEmergencyPostSuppliesInspectResetResponse[200];
/**
 * @description
 *   重新开始点检
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectReset = (
  option?: ApiEmergencyPostSuppliesInspectResetOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectResetResponseSuccess>(
    "/suppliesInspect/reset",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectSubmitOption = CarInspectionReq;

/** @description response type for apiEmergencyPostSuppliesInspectSubmit */
interface ApiEmergencyPostSuppliesInspectSubmitResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectSubmitResponseSuccess =
  ApiEmergencyPostSuppliesInspectSubmitResponse[200];
/**
 * @description
 *   提交点检
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectSubmit = (
  option?: ApiEmergencyPostSuppliesInspectSubmitOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectSubmitResponseSuccess>(
    "/suppliesInspect/submit",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectSuppliesFeedbackOption =
  SuppliesFeedbackReq;

/** @description response type for apiEmergencyPostSuppliesInspectSuppliesFeedback */
interface ApiEmergencyPostSuppliesInspectSuppliesFeedbackResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectSuppliesFeedbackResponseSuccess =
  ApiEmergencyPostSuppliesInspectSuppliesFeedbackResponse[200];
/**
 * @description
 *   物资反馈
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectSuppliesFeedback = (
  option?: ApiEmergencyPostSuppliesInspectSuppliesFeedbackOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectSuppliesFeedbackResponseSuccess>(
    "/suppliesInspect/supplies/feedback",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectSuppliesIntactOption = SuppliesIntactReq;

/** @description response type for apiEmergencyPostSuppliesInspectSuppliesIntact */
interface ApiEmergencyPostSuppliesInspectSuppliesIntactResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectSuppliesIntactResponseSuccess =
  ApiEmergencyPostSuppliesInspectSuppliesIntactResponse[200];
/**
 * @description
 *   物资完好
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectSuppliesIntact = (
  option?: ApiEmergencyPostSuppliesInspectSuppliesIntactOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectSuppliesIntactResponseSuccess>(
    "/suppliesInspect/supplies/intact",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectSuppliesIntactBatchOption =
  SuppliesBatchReq;

/** @description response type for apiEmergencyPostSuppliesInspectSuppliesIntactBatch */
interface ApiEmergencyPostSuppliesInspectSuppliesIntactBatchResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectSuppliesIntactBatchResponseSuccess =
  ApiEmergencyPostSuppliesInspectSuppliesIntactBatchResponse[200];
/**
 * @description
 *   物资批量完好
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectSuppliesIntactBatch = (
  option?: ApiEmergencyPostSuppliesInspectSuppliesIntactBatchOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectSuppliesIntactBatchResponseSuccess>(
    "/suppliesInspect/supplies/intactBatch",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectSuppliesLackOption = SuppliesLackReq;

/** @description response type for apiEmergencyPostSuppliesInspectSuppliesLack */
interface ApiEmergencyPostSuppliesInspectSuppliesLackResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectSuppliesLackResponseSuccess =
  ApiEmergencyPostSuppliesInspectSuppliesLackResponse[200];
/**
 * @description
 *   物资缺失
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectSuppliesLack = (
  option?: ApiEmergencyPostSuppliesInspectSuppliesLackOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectSuppliesLackResponseSuccess>(
    "/suppliesInspect/supplies/lack",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostSuppliesInspectSuppliesLackBatchOption = SuppliesBatchReq;

/** @description response type for apiEmergencyPostSuppliesInspectSuppliesLackBatch */
interface ApiEmergencyPostSuppliesInspectSuppliesLackBatchResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectSuppliesLackBatchResponseSuccess =
  ApiEmergencyPostSuppliesInspectSuppliesLackBatchResponse[200];
/**
 * @description
 *   物资批量缺失
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectSuppliesLackBatch = (
  option?: ApiEmergencyPostSuppliesInspectSuppliesLackBatchOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectSuppliesLackBatchResponseSuccess>(
    "/suppliesInspect/supplies/lackBatch",
    { method: "post", body: option },
    config
  );

/** @description response type for apiEmergencyPostSuppliesInspectSuppliesTask */
interface ApiEmergencyPostSuppliesInspectSuppliesTaskResponse {
  /**
   * @description
   *   OK
   */
  200: Array<string>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostSuppliesInspectSuppliesTaskResponseSuccess =
  ApiEmergencyPostSuppliesInspectSuppliesTaskResponse[200];
/**
 * @description
 *   task
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostSuppliesInspectSuppliesTask = (
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostSuppliesInspectSuppliesTaskResponseSuccess>(
    "/suppliesInspect/supplies/task",
    { method: "post" },
    config
  );

type ApiEmergencyGetTerminationCheckByEventIdEventIdPreplanIdOption = {
  /**
    @description
      eventId
    @format int64 */
  eventId: number;
  /**
    @description
      preplanId
    @format int64 */
  preplanId: number;
};

/** @description response type for apiEmergencyGetTerminationCheckByEventIdEventIdPreplanId */
interface ApiEmergencyGetTerminationCheckByEventIdEventIdPreplanIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetTerminationCheckByEventIdEventIdPreplanIdResponseSuccess =
  ApiEmergencyGetTerminationCheckByEventIdEventIdPreplanIdResponse[200];
/**
 * @description
 *   终止响应操作时，各流程环节的必需任务和通知都需要完成
 * @tags 终止响应场景预案接口模块
 * @produces *
 */
export const apiEmergencyGetTerminationCheckByEventIdEventIdPreplanId = (
  option?: ApiEmergencyGetTerminationCheckByEventIdEventIdPreplanIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetTerminationCheckByEventIdEventIdPreplanIdResponseSuccess>(
    "/termination/checkByEventId/:eventId/:preplanId",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostTerminationTerminationTaskOption =
  EmergencyTerminationTaskInput;

/** @description response type for apiEmergencyPostTerminationTerminationTask */
interface ApiEmergencyPostTerminationTerminationTaskResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostTerminationTerminationTaskResponseSuccess =
  ApiEmergencyPostTerminationTerminationTaskResponse[200];
/**
 * @description
 *   终止响应下发任务接口
 * @tags 终止响应场景预案接口模块
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostTerminationTerminationTask = (
  option?: ApiEmergencyPostTerminationTerminationTaskOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostTerminationTerminationTaskResponseSuccess>(
    "/termination/terminationTask",
    { method: "post", body: option },
    config
  );

/** @description response type for apiEmergencyGetTest */
interface ApiEmergencyGetTestResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetTestResponseSuccess = ApiEmergencyGetTestResponse[200];
/**
 * @description
 *   test
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiEmergencyGetTest = (config?: AxiosRequestConfig) =>
  requester<ApiEmergencyGetTestResponseSuccess>(
    "/test",
    { method: "get" },
    config
  );

/** @description response type for apiEmergencyGetUid */
interface ApiEmergencyGetUidResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetUidResponseSuccess = ApiEmergencyGetUidResponse[200];
/**
 * @description
 *   getUid
 * @tags $-proxy-193
 * @produces *
 */
export const apiEmergencyGetUid = (config?: AxiosRequestConfig) =>
  requester<ApiEmergencyGetUidResponseSuccess>(
    "/uid",
    { method: "get" },
    config
  );

type ApiEmergencyGetUidParseOption = {
  /**
    @description
      param0
    @format int64 */
  param0: number;
};

/** @description response type for apiEmergencyGetUidParse */
interface ApiEmergencyGetUidParseResponse {
  /**
   * @description
   *   OK
   */
  200: string;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetUidParseResponseSuccess =
  ApiEmergencyGetUidParseResponse[200];
/**
 * @description
 *   parseUid
 * @tags $-proxy-193
 * @produces *
 */
export const apiEmergencyGetUidParse = (
  option?: ApiEmergencyGetUidParseOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetUidParseResponseSuccess>(
    "/uid/parse",
    { method: "get", query: option },
    config
  );

type ApiEmergencyPostVehicleAndGoodsGoodsAddOption = GoodsInfoInput;

/** @description response type for apiEmergencyPostVehicleAndGoodsGoodsAdd */
interface ApiEmergencyPostVehicleAndGoodsGoodsAddResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostVehicleAndGoodsGoodsAddResponseSuccess =
  ApiEmergencyPostVehicleAndGoodsGoodsAddResponse[200];
/**
 * @description
 *   新增物资
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostVehicleAndGoodsGoodsAdd = (
  option?: ApiEmergencyPostVehicleAndGoodsGoodsAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostVehicleAndGoodsGoodsAddResponseSuccess>(
    "/vehicleAndGoods/goods/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetVehicleAndGoodsGoodsBatchDeleteIdsOption = {
  /**
    @description
      ids */
  ids: string;
};

/** @description response type for apiEmergencyGetVehicleAndGoodsGoodsBatchDeleteIds */
interface ApiEmergencyGetVehicleAndGoodsGoodsBatchDeleteIdsResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetVehicleAndGoodsGoodsBatchDeleteIdsResponseSuccess =
  ApiEmergencyGetVehicleAndGoodsGoodsBatchDeleteIdsResponse[200];
/**
 * @description
 *   批量删除自定义物资
 * @tags 车辆和物资管理
 * @produces *
 */
export const apiEmergencyGetVehicleAndGoodsGoodsBatchDeleteIds = (
  option?: ApiEmergencyGetVehicleAndGoodsGoodsBatchDeleteIdsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetVehicleAndGoodsGoodsBatchDeleteIdsResponseSuccess>(
    "/vehicleAndGoods/goods/batch/delete/:ids",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostVehicleAndGoodsGoodsBatchSetNumberOption =
  Array<GoodsInfoInput>;

/** @description response type for apiEmergencyPostVehicleAndGoodsGoodsBatchSetNumber */
interface ApiEmergencyPostVehicleAndGoodsGoodsBatchSetNumberResponse {
  /**
   * @description
   *   OK
   */
  200: any;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostVehicleAndGoodsGoodsBatchSetNumberResponseSuccess =
  ApiEmergencyPostVehicleAndGoodsGoodsBatchSetNumberResponse[200];
/**
 * @description
 *   批量设置物资数量
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostVehicleAndGoodsGoodsBatchSetNumber = (
  option?: ApiEmergencyPostVehicleAndGoodsGoodsBatchSetNumberOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostVehicleAndGoodsGoodsBatchSetNumberResponseSuccess>(
    "/vehicleAndGoods/goods/batch/setNumber",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetVehicleAndGoodsGoodsDeleteIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetVehicleAndGoodsGoodsDeleteId */
interface ApiEmergencyGetVehicleAndGoodsGoodsDeleteIdResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetVehicleAndGoodsGoodsDeleteIdResponseSuccess =
  ApiEmergencyGetVehicleAndGoodsGoodsDeleteIdResponse[200];
/**
 * @description
 *   删除自定义物资
 * @tags 车辆和物资管理
 * @produces *
 */
export const apiEmergencyGetVehicleAndGoodsGoodsDeleteId = (
  option?: ApiEmergencyGetVehicleAndGoodsGoodsDeleteIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetVehicleAndGoodsGoodsDeleteIdResponseSuccess>(
    "/vehicleAndGoods/goods/delete/:id",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostVehicleAndGoodsGoodsInspectDetailOption =
  GoodsDetailQueryDTO;

/** @description response type for apiEmergencyPostVehicleAndGoodsGoodsInspectDetail */
interface ApiEmergencyPostVehicleAndGoodsGoodsInspectDetailResponse {
  /**
   * @description
   *   OK
   */
  200: CheckDetail;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostVehicleAndGoodsGoodsInspectDetailResponseSuccess =
  ApiEmergencyPostVehicleAndGoodsGoodsInspectDetailResponse[200];
/**
 * @description
 *   查看点检记录详情
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostVehicleAndGoodsGoodsInspectDetail = (
  option?: ApiEmergencyPostVehicleAndGoodsGoodsInspectDetailOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostVehicleAndGoodsGoodsInspectDetailResponseSuccess>(
    "/vehicleAndGoods/goods/inspect/detail",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostVehicleAndGoodsGoodsInspectListOption = GoodsCheckQueryDTO;

/** @description response type for apiEmergencyPostVehicleAndGoodsGoodsInspectList */
interface ApiEmergencyPostVehicleAndGoodsGoodsInspectListResponse {
  /**
   * @description
   *   OK
   */
  200: PageResultOutputCheckRecordInfo;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostVehicleAndGoodsGoodsInspectListResponseSuccess =
  ApiEmergencyPostVehicleAndGoodsGoodsInspectListResponse[200];
/**
 * @description
 *   查询物资点检记录
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostVehicleAndGoodsGoodsInspectList = (
  option?: ApiEmergencyPostVehicleAndGoodsGoodsInspectListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostVehicleAndGoodsGoodsInspectListResponseSuccess>(
    "/vehicleAndGoods/goods/inspect/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostVehicleAndGoodsGoodsModifyOption = GoodsInfoInput;

/** @description response type for apiEmergencyPostVehicleAndGoodsGoodsModify */
interface ApiEmergencyPostVehicleAndGoodsGoodsModifyResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostVehicleAndGoodsGoodsModifyResponseSuccess =
  ApiEmergencyPostVehicleAndGoodsGoodsModifyResponse[200];
/**
 * @description
 *   编辑自定义物资
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostVehicleAndGoodsGoodsModify = (
  option?: ApiEmergencyPostVehicleAndGoodsGoodsModifyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostVehicleAndGoodsGoodsModifyResponseSuccess>(
    "/vehicleAndGoods/goods/modify",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostVehicleAndGoodsGoodsQueryOption = GoodsDetailQueryDTO;

/** @description response type for apiEmergencyPostVehicleAndGoodsGoodsQuery */
interface ApiEmergencyPostVehicleAndGoodsGoodsQueryResponse {
  /**
   * @description
   *   OK
   */
  200: PageResultOutputGoodsInfo;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostVehicleAndGoodsGoodsQueryResponseSuccess =
  ApiEmergencyPostVehicleAndGoodsGoodsQueryResponse[200];
/**
 * @description
 *   查询随车物资清单
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostVehicleAndGoodsGoodsQuery = (
  option?: ApiEmergencyPostVehicleAndGoodsGoodsQueryOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostVehicleAndGoodsGoodsQueryResponseSuccess>(
    "/vehicleAndGoods/goods/query",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetVehicleAndGoodsGoodsSetNumberIdNumsOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
  /**
    @description
      nums
    @format int32 */
  nums: number;
};

/** @description response type for apiEmergencyGetVehicleAndGoodsGoodsSetNumberIdNums */
interface ApiEmergencyGetVehicleAndGoodsGoodsSetNumberIdNumsResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetVehicleAndGoodsGoodsSetNumberIdNumsResponseSuccess =
  ApiEmergencyGetVehicleAndGoodsGoodsSetNumberIdNumsResponse[200];
/**
 * @description
 *   设置物资数量
 * @tags 车辆和物资管理
 * @produces *
 */
export const apiEmergencyGetVehicleAndGoodsGoodsSetNumberIdNums = (
  option?: ApiEmergencyGetVehicleAndGoodsGoodsSetNumberIdNumsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetVehicleAndGoodsGoodsSetNumberIdNumsResponseSuccess>(
    "/vehicleAndGoods/goods/setNumber/:id/:nums",
    { method: "get", path: option },
    config
  );

type ApiEmergencyGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateOption = {
  /**
    @description
      licensePlate */
  licensePlate: string;
};

/** @description response type for apiEmergencyGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlate */
interface ApiEmergencyGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateResponse {
  /**
   * @description
   *   OK
   */
  200: Array<GoodsTypeInfo>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateResponseSuccess =
  ApiEmergencyGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateResponse[200];
/**
 * @description
 *   查询树形结构全部类别
 * @tags 车辆和物资管理
 * @produces *
 */
export const apiEmergencyGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlate = (
  option?: ApiEmergencyGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateResponseSuccess>(
    "/vehicleAndGoods/goods/tree/getTypeSort/:licensePlate",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostVehicleAndGoodsInitializeGoodsOption =
  InitializeGoodsInput;

/** @description response type for apiEmergencyPostVehicleAndGoodsInitializeGoods */
interface ApiEmergencyPostVehicleAndGoodsInitializeGoodsResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostVehicleAndGoodsInitializeGoodsResponseSuccess =
  ApiEmergencyPostVehicleAndGoodsInitializeGoodsResponse[200];
/**
 * @description
 *   初始化数据接口
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostVehicleAndGoodsInitializeGoods = (
  option?: ApiEmergencyPostVehicleAndGoodsInitializeGoodsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostVehicleAndGoodsInitializeGoodsResponseSuccess>(
    "/vehicleAndGoods/initializeGoods",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostVehicleAndGoodsVehicleAddOption = VehicleInfo;

/** @description response type for apiEmergencyPostVehicleAndGoodsVehicleAdd */
interface ApiEmergencyPostVehicleAndGoodsVehicleAddResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostVehicleAndGoodsVehicleAddResponseSuccess =
  ApiEmergencyPostVehicleAndGoodsVehicleAddResponse[200];
/**
 * @description
 *   新增车辆
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostVehicleAndGoodsVehicleAdd = (
  option?: ApiEmergencyPostVehicleAndGoodsVehicleAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostVehicleAndGoodsVehicleAddResponseSuccess>(
    "/vehicleAndGoods/vehicle/add",
    { method: "post", body: option },
    config
  );

type ApiEmergencyGetVehicleAndGoodsVehicleDeleteIdEntityCodeOption = {
  /**
    @description
      entityCode */
  entityCode: string;
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiEmergencyGetVehicleAndGoodsVehicleDeleteIdEntityCode */
interface ApiEmergencyGetVehicleAndGoodsVehicleDeleteIdEntityCodeResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyGetVehicleAndGoodsVehicleDeleteIdEntityCodeResponseSuccess =
  ApiEmergencyGetVehicleAndGoodsVehicleDeleteIdEntityCodeResponse[200];
/**
 * @description
 *   删除车辆
 * @tags 车辆和物资管理
 * @produces *
 */
export const apiEmergencyGetVehicleAndGoodsVehicleDeleteIdEntityCode = (
  option?: ApiEmergencyGetVehicleAndGoodsVehicleDeleteIdEntityCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyGetVehicleAndGoodsVehicleDeleteIdEntityCodeResponseSuccess>(
    "/vehicleAndGoods/vehicle/delete/:id/:entityCode",
    { method: "get", path: option },
    config
  );

type ApiEmergencyPostVehicleAndGoodsVehicleModifyOption = VehicleInfo;

/** @description response type for apiEmergencyPostVehicleAndGoodsVehicleModify */
interface ApiEmergencyPostVehicleAndGoodsVehicleModifyResponse {
  /**
   * @description
   *   OK
   */
  200: number;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostVehicleAndGoodsVehicleModifyResponseSuccess =
  ApiEmergencyPostVehicleAndGoodsVehicleModifyResponse[200];
/**
 * @description
 *   修改车辆
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostVehicleAndGoodsVehicleModify = (
  option?: ApiEmergencyPostVehicleAndGoodsVehicleModifyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostVehicleAndGoodsVehicleModifyResponseSuccess>(
    "/vehicleAndGoods/vehicle/modify",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostVehicleAndGoodsVehicleQueryOption = VehicleSortInput;

/** @description response type for apiEmergencyPostVehicleAndGoodsVehicleQuery */
interface ApiEmergencyPostVehicleAndGoodsVehicleQueryResponse {
  /**
   * @description
   *   OK
   */
  200: Array<VehicleSortOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostVehicleAndGoodsVehicleQueryResponseSuccess =
  ApiEmergencyPostVehicleAndGoodsVehicleQueryResponse[200];
/**
 * @description
 *   查询车辆清单
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostVehicleAndGoodsVehicleQuery = (
  option?: ApiEmergencyPostVehicleAndGoodsVehicleQueryOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostVehicleAndGoodsVehicleQueryResponseSuccess>(
    "/vehicleAndGoods/vehicle/query",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostWarningMsgGetlastOption = WarningMsgQueryDTO;

/** @description response type for apiEmergencyPostWarningMsgGetlast */
interface ApiEmergencyPostWarningMsgGetlastResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WarningMsgVO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostWarningMsgGetlastResponseSuccess =
  ApiEmergencyPostWarningMsgGetlastResponse[200];
/**
 * @description
 *   查询最新消息列表
 * @tags 消息提醒
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostWarningMsgGetlast = (
  option?: ApiEmergencyPostWarningMsgGetlastOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostWarningMsgGetlastResponseSuccess>(
    "/warningMsg/getlast",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostWarningMsgListOption = WarningMsgQueryDTO;

/** @description response type for apiEmergencyPostWarningMsgList */
interface ApiEmergencyPostWarningMsgListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WarningMsgVO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostWarningMsgListResponseSuccess =
  ApiEmergencyPostWarningMsgListResponse[200];
/**
 * @description
 *   查询消息列表
 * @tags 消息提醒
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostWarningMsgList = (
  option?: ApiEmergencyPostWarningMsgListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostWarningMsgListResponseSuccess>(
    "/warningMsg/list",
    { method: "post", body: option },
    config
  );

type ApiEmergencyPostWarningMsgSetTopOption = SetTopReqDTO;

/** @description response type for apiEmergencyPostWarningMsgSetTop */
interface ApiEmergencyPostWarningMsgSetTopResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiEmergencyPostWarningMsgSetTopResponseSuccess =
  ApiEmergencyPostWarningMsgSetTopResponse[200];
/**
 * @description
 *   设置或取消置顶
 * @tags 消息提醒
 * @produces *
 * @consumes application/json
 */
export const apiEmergencyPostWarningMsgSetTop = (
  option?: ApiEmergencyPostWarningMsgSetTopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiEmergencyPostWarningMsgSetTopResponseSuccess>(
    "/warningMsg/setTop",
    { method: "post", body: option },
    config
  );
