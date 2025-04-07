/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import {
  pipelineRequester as requester,
  type AxiosRequestConfig,
} from "../http";
import type {
  TimeDictionaryDto,
  NetworkBrominatedAlarmFeedbackInputDTO,
  NetworkBrominatedAlarmFeedbackDTO,
  CheckTimeDTO,
  GisproOrgEqlinkDetailHDTO,
  DangerousProblemTypeAddInputDTO,
  DangerousProblemTypeOutputDTO,
  DangerousProblemTypeInputDTO,
  ResultPageDataListDangerousProblemTypeOutputDTO,
  DangerousProblemTypeUpdateInputDTO,
  NetworkEvaluationConfigInputDTO,
  NetworkEvaluationConfigSearchDTO,
  ResultPageDataListNetworkEvaluationConfigDTO,
  IComeInputDto,
  OverdueIComeInputDto,
  UnqualifiedEvaluationInputDto,
  WeeklyEvaluationInputDto,
  MsgTemplateSaveInput,
  MsgTemplate,
  TypeOutput,
  QueryTypeInput,
  PageInfo,
  GridPersonalInfoDTO,
  NetworkShowDangerInputDto,
  R,
  DangerListDTO,
  HiddenDangerDTO,
  DangerTypeDTO,
  CompanyCodeDTO,
  NetWorkShowDangerSpaceDto,
  ShowDangerUnconfigInputDTO,
  ResultPageDataListShowDangerUnconfigDetailHDTO,
  GridPersonalInfoOrganDTO,
  GridPersonalInfoUserDTO,
  NetworkShowDangerWoParamDTO,
  PipelineSendWoInputDTO,
  NetworkStationPersonnelInfoInputDTO,
  NetworkStationPersonnelParamInputDTO,
  NetworkWoConfigInput,
  CategoryTypeOutput,
  NetworkDangerCheckFeedbackInputDto,
  ResultPageDataListNetworkDangerCheckFeedbackOutputDto,
  NetworkDangerEvaluateEditDTO,
  NetworkEvaluationInfoDTO,
  FileUploadInput,
  FileUploadOutput,
  TemporarySignature,
  NetworkPositionDTO,
  AlarmWorkbenchDto,
  DangerousWorkWorkbenchDto,
  IndoorRescueWorkbenchDto,
  ShowDangerWorkbenchDto,
  VehicleLocationInputDTO,
  ViolationExportExcelInputDTO,
  ResultPageDataListPipelineViolationExcelModel,
  DangerWorkAuditResultInputDto,
  AutoDisposalDto,
  AutoDisposalInputDto,
  BatchDelRecordInputDto,
  CheckRectifyInputDto,
  ResultPageDataListCheckRectifyOutputDto,
  ProblemRectifyInputDTO,
  ProblemRectifyOutputDTO,
  ResultPageDataListConfinedSpacePageDto,
  ConfinedSpaceDangerAppraiseDto,
  ConfinedSpaceDetailDto,
  DangerRedisInputDTO,
  DangerWorkProblemRecordUpdateInputDto,
  NetworkDangerRegulationDTO,
  NetworkDangerRegulationOutputDTO,
  PipelineAnalyticalInpout,
  CheckSupervisionScreenDTO,
  DangerWorkProblemRecordOutputDto,
  NetworkEvaluationInfoInputDTO,
  DangerWorkProblemRecordListInputDto,
  ResultPageListDangerWorkProblemRecordOutputDto,
  DangerWorkProblemInputDto,
  ViolationRewardDto,
  WorkbenchSearchShowListInputDTO,
  ResultPageDataListHistoryDangerWorkShowDTO,
  DangerWorkProblemRecordInputDto,
  NetworkDangerDTO,
  DangerFindCameraInputDto,
  NetWorkDangerNewDto,
  NetworkDangerInputDTO,
  NetworkDangerUpdateDTO,
  AlarmProblemRecordDTO,
  AIAlarmMaintenanceDTO,
  NetworkAlarmInspectionHandleDTO,
  AlarmIntelligentAnalysisInputDTO,
  AlarmIntelligentAnalysisOutputDTO,
  AlarmDetailsInputDto,
  AlarmProblemRecordSearchDTO,
  ResultPageDataListAlarmProblemRecordOutputDTO,
  AlarmUpdatePipIputDto,
  BallheadCameraDto,
  BallheadCameraThirdDto,
  PageDataBallheadCameraDto,
  PipelineUpdateInputDTO,
  NetworkCheckInputDTO,
  ResultPageDataListNetworkCheckDTO,
  CheckDetailsInputDto,
  CheckMsgDetailDto,
  NetworkCheckSupervisionInputDTO,
  ResultPageDataListNetworkCheckSupervisionDTO,
  CheckRectifyOutput,
  FeedBackDetailsOutput,
  CheckTodayResultsInputDTO,
  SuperviseWorkOutputDTO,
  ImageAiErrorTypeInputDTO,
  SuperviseWorkInputDTO,
  CheckWorkbenchListOutputDto,
  ProjectVideoDto,
  NetworkCheckImageAiInputDTO,
  SubScribeEventVo,
  SwitchUserEntityInputDto,
  UserInfoDto,
} from "./definition";

/** @description response type for apiPipelineGetTimeDictGetTimeDictAll */
interface ApiPipelineGetTimeDictGetTimeDictAllResponse {
  /**
   * @description
   *   OK
   */
  200: Array<TimeDictionaryDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetTimeDictGetTimeDictAllResponseSuccess =
  ApiPipelineGetTimeDictGetTimeDictAllResponse[200];
/**
 * @description
 *   查询时间字典
 * @tags 时间字典
 * @produces *
 */
export const apiPipelineGetTimeDictGetTimeDictAll = (
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetTimeDictGetTimeDictAllResponseSuccess>(
    "/TimeDict/getTimeDictAll",
    { method: "get" },
    config
  );

type ApiPipelinePostBrominatedAlarmGetFeedBackListOption =
  NetworkBrominatedAlarmFeedbackInputDTO;

/** @description response type for apiPipelinePostBrominatedAlarmGetFeedBackList */
interface ApiPipelinePostBrominatedAlarmGetFeedBackListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<NetworkBrominatedAlarmFeedbackDTO>;
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

type ApiPipelinePostBrominatedAlarmGetFeedBackListResponseSuccess =
  ApiPipelinePostBrominatedAlarmGetFeedBackListResponse[200];
/**
 * @description
 *   查询加臭告警反馈人反馈接口
 * @tags 加臭告警反馈人反馈模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostBrominatedAlarmGetFeedBackList = (
  option?: ApiPipelinePostBrominatedAlarmGetFeedBackListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostBrominatedAlarmGetFeedBackListResponseSuccess>(
    "/brominated/alarm/get/feedBackList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostCallOutCommonOption = {
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
  "users[0].name": string;
  "users[0].phoneNum": string;
  /**
    @format int32 */
  "users[0].userType": number;
};

/** @description response type for apiPipelinePostCallOutCommon */
interface ApiPipelinePostCallOutCommonResponse {
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

type ApiPipelinePostCallOutCommonResponseSuccess =
  ApiPipelinePostCallOutCommonResponse[200];
/**
 * @description
 *   短信外呼对外接口
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostCallOutCommon = (
  option?: ApiPipelinePostCallOutCommonOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostCallOutCommonResponseSuccess>(
    "/callOut/common",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostCallOutOutOption = {
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

/** @description response type for apiPipelinePostCallOutOut */
interface ApiPipelinePostCallOutOutResponse {
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

type ApiPipelinePostCallOutOutResponseSuccess =
  ApiPipelinePostCallOutOutResponse[200];
/**
 * @description
 *   返回信息，KEY：姓名(手机号)，VALUE:OK(成功),其它错误原因
 *   呼叫短信
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostCallOutOut = (
  option?: ApiPipelinePostCallOutOutOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostCallOutOutResponseSuccess>(
    "/callOut/out",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostCallOutSpecialOption = {
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

/** @description response type for apiPipelinePostCallOutSpecial */
interface ApiPipelinePostCallOutSpecialResponse {
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

type ApiPipelinePostCallOutSpecialResponseSuccess =
  ApiPipelinePostCallOutSpecialResponse[200];
/**
 * @description
 *   短信外呼对外接口(聚安卫士使用，支持给座机打电话)
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostCallOutSpecial = (
  option?: ApiPipelinePostCallOutSpecialOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostCallOutSpecialResponseSuccess>(
    "/callOut/special",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostCommonCheckTimeOption = CheckTimeDTO;

/** @description response type for apiPipelinePostCommonCheckTime */
interface ApiPipelinePostCommonCheckTimeResponse {
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

type ApiPipelinePostCommonCheckTimeResponseSuccess =
  ApiPipelinePostCommonCheckTimeResponse[200];
/**
 * @description
 *   类型 type： 1 危险作业； 2 常规监察； woCode 工单编号
 *   危险作业常规监察，是否可以编辑不合格项时间校验接口
 * @tags 通用接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostCommonCheckTime = (
  option?: ApiPipelinePostCommonCheckTimeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostCommonCheckTimeResponseSuccess>(
    "/common/checkTime",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetCommonGetGisHandlerInfoOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      eqId */
  eqId: string;
};

/** @description response type for apiPipelineGetCommonGetGisHandlerInfo */
interface ApiPipelineGetCommonGetGisHandlerInfoResponse {
  /**
   * @description
   *   OK
   */
  200: GisproOrgEqlinkDetailHDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetCommonGetGisHandlerInfoResponseSuccess =
  ApiPipelineGetCommonGetGisHandlerInfoResponse[200];
/**
 * @description
 *   查询gis责任人信息
 * @tags 通用接口
 * @produces *
 */
export const apiPipelineGetCommonGetGisHandlerInfo = (
  option?: ApiPipelineGetCommonGetGisHandlerInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetCommonGetGisHandlerInfoResponseSuccess>(
    "/common/getGisHandlerInfo",
    { method: "get", query: option },
    config
  );

type ApiPipelinePostDangerousProblemTypeAddOption =
  DangerousProblemTypeAddInputDTO;

/** @description response type for apiPipelinePostDangerousProblemTypeAdd */
interface ApiPipelinePostDangerousProblemTypeAddResponse {
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

type ApiPipelinePostDangerousProblemTypeAddResponseSuccess =
  ApiPipelinePostDangerousProblemTypeAddResponse[200];
/**
 * @description
 *   添加问题类型配置信息
 * @tags dangerous-problem-type-controller
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostDangerousProblemTypeAdd = (
  option?: ApiPipelinePostDangerousProblemTypeAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostDangerousProblemTypeAddResponseSuccess>(
    "/dangerousProblemType/add",
    { method: "post", body: option },
    config
  );

type ApiPipelineDeleteDangerousProblemTypeDeleteIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelineDeleteDangerousProblemTypeDeleteId */
interface ApiPipelineDeleteDangerousProblemTypeDeleteIdResponse {
  /**
   * @description
   *   OK
   */
  200: number;
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

type ApiPipelineDeleteDangerousProblemTypeDeleteIdResponseSuccess =
  ApiPipelineDeleteDangerousProblemTypeDeleteIdResponse[200];
/**
 * @description
 *   删除问题类型配置信息
 * @tags dangerous-problem-type-controller
 * @produces *
 */
export const apiPipelineDeleteDangerousProblemTypeDeleteId = (
  option?: ApiPipelineDeleteDangerousProblemTypeDeleteIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineDeleteDangerousProblemTypeDeleteIdResponseSuccess>(
    "/dangerousProblemType/delete/:id",
    { method: "delete", path: option },
    config
  );

type ApiPipelineGetDangerousProblemTypeGetDangerousProblemTypeIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelineGetDangerousProblemTypeGetDangerousProblemTypeId */
interface ApiPipelineGetDangerousProblemTypeGetDangerousProblemTypeIdResponse {
  /**
   * @description
   *   OK
   */
  200: DangerousProblemTypeOutputDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetDangerousProblemTypeGetDangerousProblemTypeIdResponseSuccess =
  ApiPipelineGetDangerousProblemTypeGetDangerousProblemTypeIdResponse[200];
/**
 * @description
 *   获取问题类型配置信息
 * @tags dangerous-problem-type-controller
 * @produces *
 */
export const apiPipelineGetDangerousProblemTypeGetDangerousProblemTypeId = (
  option?: ApiPipelineGetDangerousProblemTypeGetDangerousProblemTypeIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetDangerousProblemTypeGetDangerousProblemTypeIdResponseSuccess>(
    "/dangerousProblemType/getDangerousProblemType/:id",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostDangerousProblemTypeGetDangerousProblemTypeListOption =
  DangerousProblemTypeInputDTO;

/** @description response type for apiPipelinePostDangerousProblemTypeGetDangerousProblemTypeList */
interface ApiPipelinePostDangerousProblemTypeGetDangerousProblemTypeListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListDangerousProblemTypeOutputDTO;
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

type ApiPipelinePostDangerousProblemTypeGetDangerousProblemTypeListResponseSuccess =
  ApiPipelinePostDangerousProblemTypeGetDangerousProblemTypeListResponse[200];
/**
 * @description
 *   获取问题类型配置列表
 * @tags dangerous-problem-type-controller
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostDangerousProblemTypeGetDangerousProblemTypeList = (
  option?: ApiPipelinePostDangerousProblemTypeGetDangerousProblemTypeListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostDangerousProblemTypeGetDangerousProblemTypeListResponseSuccess>(
    "/dangerousProblemType/getDangerousProblemTypeList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostDangerousProblemTypeUpdateOption =
  DangerousProblemTypeUpdateInputDTO;

/** @description response type for apiPipelinePostDangerousProblemTypeUpdate */
interface ApiPipelinePostDangerousProblemTypeUpdateResponse {
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

type ApiPipelinePostDangerousProblemTypeUpdateResponseSuccess =
  ApiPipelinePostDangerousProblemTypeUpdateResponse[200];
/**
 * @description
 *   编辑问题类型配置信息
 * @tags dangerous-problem-type-controller
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostDangerousProblemTypeUpdate = (
  option?: ApiPipelinePostDangerousProblemTypeUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostDangerousProblemTypeUpdateResponseSuccess>(
    "/dangerousProblemType/update",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostEvaluationAddEvaluationConfigOption =
  NetworkEvaluationConfigInputDTO;

/** @description response type for apiPipelinePostEvaluationAddEvaluationConfig */
interface ApiPipelinePostEvaluationAddEvaluationConfigResponse {
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

type ApiPipelinePostEvaluationAddEvaluationConfigResponseSuccess =
  ApiPipelinePostEvaluationAddEvaluationConfigResponse[200];
/**
 * @description
 *   评价配置新增接口
 * @tags 管网评价配置 相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostEvaluationAddEvaluationConfig = (
  option?: ApiPipelinePostEvaluationAddEvaluationConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostEvaluationAddEvaluationConfigResponseSuccess>(
    "/evaluation/addEvaluationConfig",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetEvaluationDeleteEvaluationConfigIdOption = {
  /**
    @description
      id
    @format int32 */
  id: number;
};

/** @description response type for apiPipelineGetEvaluationDeleteEvaluationConfigId */
interface ApiPipelineGetEvaluationDeleteEvaluationConfigIdResponse {
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

type ApiPipelineGetEvaluationDeleteEvaluationConfigIdResponseSuccess =
  ApiPipelineGetEvaluationDeleteEvaluationConfigIdResponse[200];
/**
 * @description
 *   评价配置删除接口
 * @tags 管网评价配置 相关接口
 * @produces *
 */
export const apiPipelineGetEvaluationDeleteEvaluationConfigId = (
  option?: ApiPipelineGetEvaluationDeleteEvaluationConfigIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetEvaluationDeleteEvaluationConfigIdResponseSuccess>(
    "/evaluation/deleteEvaluationConfig/:id",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostEvaluationGetConfigListOption =
  NetworkEvaluationConfigSearchDTO;

/** @description response type for apiPipelinePostEvaluationGetConfigList */
interface ApiPipelinePostEvaluationGetConfigListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListNetworkEvaluationConfigDTO;
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

type ApiPipelinePostEvaluationGetConfigListResponseSuccess =
  ApiPipelinePostEvaluationGetConfigListResponse[200];
/**
 * @description
 *   查询评价配置信息列表接口
 * @tags 管网评价配置 相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostEvaluationGetConfigList = (
  option?: ApiPipelinePostEvaluationGetConfigListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostEvaluationGetConfigListResponseSuccess>(
    "/evaluation/getConfigList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostEvaluationUpdateEvaluationConfigOption =
  NetworkEvaluationConfigInputDTO;

/** @description response type for apiPipelinePostEvaluationUpdateEvaluationConfig */
interface ApiPipelinePostEvaluationUpdateEvaluationConfigResponse {
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

type ApiPipelinePostEvaluationUpdateEvaluationConfigResponseSuccess =
  ApiPipelinePostEvaluationUpdateEvaluationConfigResponse[200];
/**
 * @description
 *   评价配置信息更新接口
 * @tags 管网评价配置 相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostEvaluationUpdateEvaluationConfig = (
  option?: ApiPipelinePostEvaluationUpdateEvaluationConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostEvaluationUpdateEvaluationConfigResponseSuccess>(
    "/evaluation/updateEvaluationConfig",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostIComePushMessageOption = IComeInputDto;

/** @description response type for apiPipelinePostIComePushMessage */
interface ApiPipelinePostIComePushMessageResponse {
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

type ApiPipelinePostIComePushMessageResponseSuccess =
  ApiPipelinePostIComePushMessageResponse[200];
/**
 * @description
 *   推送消息
 * @tags iCome推送
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostIComePushMessage = (
  option?: ApiPipelinePostIComePushMessageOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostIComePushMessageResponseSuccess>(
    "/iCome/pushMessage",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostIComePushOverdueMessageOption = OverdueIComeInputDto;

/** @description response type for apiPipelinePostIComePushOverdueMessage */
interface ApiPipelinePostIComePushOverdueMessageResponse {
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

type ApiPipelinePostIComePushOverdueMessageResponseSuccess =
  ApiPipelinePostIComePushOverdueMessageResponse[200];
/**
 * @description
 *   反馈超期推送消息
 * @tags iCome推送
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostIComePushOverdueMessage = (
  option?: ApiPipelinePostIComePushOverdueMessageOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostIComePushOverdueMessageResponseSuccess>(
    "/iCome/pushOverdueMessage",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostIComePushUnqualifiedEvaluationMessageOption =
  UnqualifiedEvaluationInputDto;

/** @description response type for apiPipelinePostIComePushUnqualifiedEvaluationMessage */
interface ApiPipelinePostIComePushUnqualifiedEvaluationMessageResponse {
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

type ApiPipelinePostIComePushUnqualifiedEvaluationMessageResponseSuccess =
  ApiPipelinePostIComePushUnqualifiedEvaluationMessageResponse[200];
/**
 * @description
 *   常规监察/危险作业评价不合格推送消息
 * @tags iCome推送
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostIComePushUnqualifiedEvaluationMessage = (
  option?: ApiPipelinePostIComePushUnqualifiedEvaluationMessageOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostIComePushUnqualifiedEvaluationMessageResponseSuccess>(
    "/iCome/pushUnqualifiedEvaluationMessage",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostIComePushWeeklyEvaluationMessageOption =
  WeeklyEvaluationInputDto;

/** @description response type for apiPipelinePostIComePushWeeklyEvaluationMessage */
interface ApiPipelinePostIComePushWeeklyEvaluationMessageResponse {
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

type ApiPipelinePostIComePushWeeklyEvaluationMessageResponseSuccess =
  ApiPipelinePostIComePushWeeklyEvaluationMessageResponse[200];
/**
 * @description
 *   常规监察/危险作业周评推送消息
 * @tags iCome推送
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostIComePushWeeklyEvaluationMessage = (
  option?: ApiPipelinePostIComePushWeeklyEvaluationMessageOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostIComePushWeeklyEvaluationMessageResponseSuccess>(
    "/iCome/pushWeeklyEvaluationMessage",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostMsgTemplateDelOption = {
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

/** @description response type for apiPipelinePostMsgTemplateDel */
interface ApiPipelinePostMsgTemplateDelResponse {
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

type ApiPipelinePostMsgTemplateDelResponseSuccess =
  ApiPipelinePostMsgTemplateDelResponse[200];
/**
 * @description
 *   删除
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostMsgTemplateDel = (
  option?: ApiPipelinePostMsgTemplateDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostMsgTemplateDelResponseSuccess>(
    "/msgTemplate/del",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostMsgTemplateDelNewOption = MsgTemplateSaveInput;

/** @description response type for apiPipelinePostMsgTemplateDelNew */
interface ApiPipelinePostMsgTemplateDelNewResponse {
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

type ApiPipelinePostMsgTemplateDelNewResponseSuccess =
  ApiPipelinePostMsgTemplateDelNewResponse[200];
/**
 * @description
 *   删除
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostMsgTemplateDelNew = (
  option?: ApiPipelinePostMsgTemplateDelNewOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostMsgTemplateDelNewResponseSuccess>(
    "/msgTemplate/delNew",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeOption =
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

/** @description response type for apiPipelineGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCode */
interface ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponse {
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

type ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponseSuccess =
  ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponse[200];
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiPipelineGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCode =
  (
    option?: ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponseSuccess>(
      "/msgTemplate/getAllTemplateByCompCode/:companyCode/:scene/:typeCode",
      { method: "get", path: option },
      config
    );

type ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeOption =
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

/** @description response type for apiPipelineGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeType */
interface ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponse {
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

type ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponseSuccess =
  ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponse[200];
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiPipelineGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeType =
  (
    option?: ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiPipelineGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponseSuccess>(
      "/msgTemplate/getAllTemplateByCompCodeAndModel/:companyCode/:scene/:typeCode/:type",
      { method: "get", path: option },
      config
    );

type ApiPipelineGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      scene */
  scene: string;
};

/** @description response type for apiPipelineGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeScene */
interface ApiPipelineGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponse {
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

type ApiPipelineGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponseSuccess =
  ApiPipelineGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponse[200];
/**
 * @description
 *   查询管理实体下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiPipelineGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeScene = (
  option?: ApiPipelineGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponseSuccess>(
    "/msgTemplate/getAllTemplateByCpmoCode/:cpmoCode/:scene",
    { method: "get", path: option },
    config
  );

type ApiPipelineGetMsgTemplateGetAllTemplateByIdTemplateIdOption = {
  /**
    @description
      templateId
    @format int64 */
  templateId: number;
};

/** @description response type for apiPipelineGetMsgTemplateGetAllTemplateByIdTemplateId */
interface ApiPipelineGetMsgTemplateGetAllTemplateByIdTemplateIdResponse {
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

type ApiPipelineGetMsgTemplateGetAllTemplateByIdTemplateIdResponseSuccess =
  ApiPipelineGetMsgTemplateGetAllTemplateByIdTemplateIdResponse[200];
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiPipelineGetMsgTemplateGetAllTemplateByIdTemplateId = (
  option?: ApiPipelineGetMsgTemplateGetAllTemplateByIdTemplateIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetMsgTemplateGetAllTemplateByIdTemplateIdResponseSuccess>(
    "/msgTemplate/getAllTemplateById/:templateId",
    { method: "get", path: option },
    config
  );

type ApiPipelineGetMsgTemplateGetTemplateTypeCodeTemplateIdOption = {
  /**
    @description
      templateId */
  templateId: string;
};

/** @description response type for apiPipelineGetMsgTemplateGetTemplateTypeCodeTemplateId */
interface ApiPipelineGetMsgTemplateGetTemplateTypeCodeTemplateIdResponse {
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

type ApiPipelineGetMsgTemplateGetTemplateTypeCodeTemplateIdResponseSuccess =
  ApiPipelineGetMsgTemplateGetTemplateTypeCodeTemplateIdResponse[200];
/**
 * @description
 *   查询当前下配置typeCode类型
 * @tags 信息模版
 * @produces *
 */
export const apiPipelineGetMsgTemplateGetTemplateTypeCodeTemplateId = (
  option?: ApiPipelineGetMsgTemplateGetTemplateTypeCodeTemplateIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetMsgTemplateGetTemplateTypeCodeTemplateIdResponseSuccess>(
    "/msgTemplate/getTemplateTypeCode/:templateId",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostMsgTemplateGetTypeListOption = QueryTypeInput;

/** @description response type for apiPipelinePostMsgTemplateGetTypeList */
interface ApiPipelinePostMsgTemplateGetTypeListResponse {
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

type ApiPipelinePostMsgTemplateGetTypeListResponseSuccess =
  ApiPipelinePostMsgTemplateGetTypeListResponse[200];
/**
 * @description
 *   查询模板可配置类型
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostMsgTemplateGetTypeList = (
  option?: ApiPipelinePostMsgTemplateGetTypeListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostMsgTemplateGetTypeListResponseSuccess>(
    "/msgTemplate/getTypeList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostMsgTemplateListOption = {
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

/** @description response type for apiPipelinePostMsgTemplateList */
interface ApiPipelinePostMsgTemplateListResponse {
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

type ApiPipelinePostMsgTemplateListResponseSuccess =
  ApiPipelinePostMsgTemplateListResponse[200];
/**
 * @description
 *   查询
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostMsgTemplateList = (
  option?: ApiPipelinePostMsgTemplateListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostMsgTemplateListResponseSuccess>(
    "/msgTemplate/list",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostMsgTemplateSaveOption = {
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

/** @description response type for apiPipelinePostMsgTemplateSave */
interface ApiPipelinePostMsgTemplateSaveResponse {
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

type ApiPipelinePostMsgTemplateSaveResponseSuccess =
  ApiPipelinePostMsgTemplateSaveResponse[200];
/**
 * @description
 *   保存
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostMsgTemplateSave = (
  option?: ApiPipelinePostMsgTemplateSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostMsgTemplateSaveResponseSuccess>(
    "/msgTemplate/save",
    { method: "post", query: option },
    config
  );

/** @description response type for apiPipelineGetMsgTemplateSensitiveWords */
interface ApiPipelineGetMsgTemplateSensitiveWordsResponse {
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

type ApiPipelineGetMsgTemplateSensitiveWordsResponseSuccess =
  ApiPipelineGetMsgTemplateSensitiveWordsResponse[200];
/**
 * @description
 *   查询敏感词汇
 * @tags 信息模版
 * @produces *
 */
export const apiPipelineGetMsgTemplateSensitiveWords = (
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetMsgTemplateSensitiveWordsResponseSuccess>(
    "/msgTemplate/sensitive/words",
    { method: "get" },
    config
  );

type ApiPipelinePostMsgTemplateTemplateSaveOption = MsgTemplateSaveInput;

/** @description response type for apiPipelinePostMsgTemplateTemplateSave */
interface ApiPipelinePostMsgTemplateTemplateSaveResponse {
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

type ApiPipelinePostMsgTemplateTemplateSaveResponseSuccess =
  ApiPipelinePostMsgTemplateTemplateSaveResponse[200];
/**
 * @description
 *   批量添加模板
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostMsgTemplateTemplateSave = (
  option?: ApiPipelinePostMsgTemplateTemplateSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostMsgTemplateTemplateSaveResponseSuccess>(
    "/msgTemplate/templateSave",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostMsgTemplateTemplateUpdOption = MsgTemplateSaveInput;

/** @description response type for apiPipelinePostMsgTemplateTemplateUpd */
interface ApiPipelinePostMsgTemplateTemplateUpdResponse {
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

type ApiPipelinePostMsgTemplateTemplateUpdResponseSuccess =
  ApiPipelinePostMsgTemplateTemplateUpdResponse[200];
/**
 * @description
 *   批量修改模板
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostMsgTemplateTemplateUpd = (
  option?: ApiPipelinePostMsgTemplateTemplateUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostMsgTemplateTemplateUpdResponseSuccess>(
    "/msgTemplate/templateUpd",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostMsgTemplateValidUniqueOption = {
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

/** @description response type for apiPipelinePostMsgTemplateValidUnique */
interface ApiPipelinePostMsgTemplateValidUniqueResponse {
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

type ApiPipelinePostMsgTemplateValidUniqueResponseSuccess =
  ApiPipelinePostMsgTemplateValidUniqueResponse[200];
/**
 * @description
 *   重复校验，true为无重复，校验通过
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostMsgTemplateValidUnique = (
  option?: ApiPipelinePostMsgTemplateValidUniqueOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostMsgTemplateValidUniqueResponseSuccess>(
    "/msgTemplate/validUnique",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostNetworkDangerWoGetAreaNameListOption = {
  /**
    @description
      compCop */
  compCop: string;
};

/** @description response type for apiPipelinePostNetworkDangerWoGetAreaNameList */
interface ApiPipelinePostNetworkDangerWoGetAreaNameListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<GridPersonalInfoDTO>;
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

type ApiPipelinePostNetworkDangerWoGetAreaNameListResponseSuccess =
  ApiPipelinePostNetworkDangerWoGetAreaNameListResponse[200];
/**
 * @description
 *   获取网格信息接口
 * @tags 网格信息模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkDangerWoGetAreaNameList = (
  option?: ApiPipelinePostNetworkDangerWoGetAreaNameListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkDangerWoGetAreaNameListResponseSuccess>(
    "/network/danger/wo/getAreaNameList",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostNetworkDangerWoGetListOption = {
  /**
    @description
      compCop */
  compCop: string;
};

/** @description response type for apiPipelinePostNetworkDangerWoGetList */
interface ApiPipelinePostNetworkDangerWoGetListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<GridPersonalInfoDTO>;
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

type ApiPipelinePostNetworkDangerWoGetListResponseSuccess =
  ApiPipelinePostNetworkDangerWoGetListResponse[200];
/**
 * @description
 *   获取网格信息接口
 * @tags 网格信息模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkDangerWoGetList = (
  option?: ApiPipelinePostNetworkDangerWoGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkDangerWoGetListResponseSuccess>(
    "/network/danger/wo/getList",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostNetworkShowV1BengBuRiskApplyRollbackOption =
  NetworkShowDangerInputDto;

/** @description response type for apiPipelinePostNetworkShowV1BengBuRiskApplyRollback */
interface ApiPipelinePostNetworkShowV1BengBuRiskApplyRollbackResponse {
  /**
   * @description
   *   OK
   */
  200: R;
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

type ApiPipelinePostNetworkShowV1BengBuRiskApplyRollbackResponseSuccess =
  ApiPipelinePostNetworkShowV1BengBuRiskApplyRollbackResponse[200];
/**
 * @description
 *   管网蚌埠城管示险，申请回退接口
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1BengBuRiskApplyRollback = (
  option?: ApiPipelinePostNetworkShowV1BengBuRiskApplyRollbackOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1BengBuRiskApplyRollbackResponseSuccess>(
    "/network/show/v1/bengBuRisk/applyRollback",
    { method: "post", body: option },
    config
  );

/** @description response type for apiPipelineGetNetworkShowV1GetFaultType */
interface ApiPipelineGetNetworkShowV1GetFaultTypeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerListDTO>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetNetworkShowV1GetFaultTypeResponseSuccess =
  ApiPipelineGetNetworkShowV1GetFaultTypeResponse[200];
/**
 * @description
 *   故障类型列表
 * @tags 管网场景—示险
 * @produces *
 */
export const apiPipelineGetNetworkShowV1GetFaultType = (
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetNetworkShowV1GetFaultTypeResponseSuccess>(
    "/network/show/v1/getFaultType",
    { method: "get" },
    config
  );

type ApiPipelinePostNetworkShowV1GetHiddenDangersOption = HiddenDangerDTO;

/** @description response type for apiPipelinePostNetworkShowV1GetHiddenDangers */
interface ApiPipelinePostNetworkShowV1GetHiddenDangersResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerTypeDTO>;
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

type ApiPipelinePostNetworkShowV1GetHiddenDangersResponseSuccess =
  ApiPipelinePostNetworkShowV1GetHiddenDangersResponse[200];
/**
 * @description
 *   隐患类别列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1GetHiddenDangers = (
  option?: ApiPipelinePostNetworkShowV1GetHiddenDangersOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1GetHiddenDangersResponseSuccess>(
    "/network/show/v1/getHiddenDangers",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkShowV1GetLevelOption = CompanyCodeDTO;

/** @description response type for apiPipelinePostNetworkShowV1GetLevel */
interface ApiPipelinePostNetworkShowV1GetLevelResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerListDTO>;
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

type ApiPipelinePostNetworkShowV1GetLevelResponseSuccess =
  ApiPipelinePostNetworkShowV1GetLevelResponse[200];
/**
 * @description
 *   隐患等级列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1GetLevel = (
  option?: ApiPipelinePostNetworkShowV1GetLevelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1GetLevelResponseSuccess>(
    "/network/show/v1/getLevel",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkShowV1GetMeasureOption = CompanyCodeDTO;

/** @description response type for apiPipelinePostNetworkShowV1GetMeasure */
interface ApiPipelinePostNetworkShowV1GetMeasureResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerListDTO>;
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

type ApiPipelinePostNetworkShowV1GetMeasureResponseSuccess =
  ApiPipelinePostNetworkShowV1GetMeasureResponse[200];
/**
 * @description
 *   拟采取措施列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1GetMeasure = (
  option?: ApiPipelinePostNetworkShowV1GetMeasureOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1GetMeasureResponseSuccess>(
    "/network/show/v1/getMeasure",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetNetworkShowV1GetNetworkShowDangerDetailIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelineGetNetworkShowV1GetNetworkShowDangerDetailId */
interface ApiPipelineGetNetworkShowV1GetNetworkShowDangerDetailIdResponse {
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

type ApiPipelineGetNetworkShowV1GetNetworkShowDangerDetailIdResponseSuccess =
  ApiPipelineGetNetworkShowV1GetNetworkShowDangerDetailIdResponse[200];
/**
 * @description
 *   示险详情与处置
 * @tags 管网场景—示险
 * @produces *
 */
export const apiPipelineGetNetworkShowV1GetNetworkShowDangerDetailId = (
  option?: ApiPipelineGetNetworkShowV1GetNetworkShowDangerDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetNetworkShowV1GetNetworkShowDangerDetailIdResponseSuccess>(
    "/network/show/v1/getNetworkShowDangerDetail/:id",
    { method: "get", path: option },
    config
  );

type ApiPipelineGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelineGetNetworkShowV1GetNetworkShowDangerSpaceDetailId */
interface ApiPipelineGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdResponse {
  /**
   * @description
   *   OK
   */
  200: NetWorkShowDangerSpaceDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdResponseSuccess =
  ApiPipelineGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdResponse[200];
/**
 * @description
 *   示险详情-有限空间作业手续缺失 riskCode:pn_risk_021
 * @tags 管网场景—示险
 * @produces *
 */
export const apiPipelineGetNetworkShowV1GetNetworkShowDangerSpaceDetailId = (
  option?: ApiPipelineGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdResponseSuccess>(
    "/network/show/v1/getNetworkShowDangerSpaceDetail/:id",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostNetworkShowV1GetOrganizationOption = CompanyCodeDTO;

/** @description response type for apiPipelinePostNetworkShowV1GetOrganization */
interface ApiPipelinePostNetworkShowV1GetOrganizationResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerListDTO>;
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

type ApiPipelinePostNetworkShowV1GetOrganizationResponseSuccess =
  ApiPipelinePostNetworkShowV1GetOrganizationResponse[200];
/**
 * @description
 *   所属组织列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1GetOrganization = (
  option?: ApiPipelinePostNetworkShowV1GetOrganizationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1GetOrganizationResponseSuccess>(
    "/network/show/v1/getOrganization",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkShowV1GetProcessingOrganizationOption =
  CompanyCodeDTO;

/** @description response type for apiPipelinePostNetworkShowV1GetProcessingOrganization */
interface ApiPipelinePostNetworkShowV1GetProcessingOrganizationResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerListDTO>;
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

type ApiPipelinePostNetworkShowV1GetProcessingOrganizationResponseSuccess =
  ApiPipelinePostNetworkShowV1GetProcessingOrganizationResponse[200];
/**
 * @description
 *   处理组织列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1GetProcessingOrganization = (
  option?: ApiPipelinePostNetworkShowV1GetProcessingOrganizationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1GetProcessingOrganizationResponseSuccess>(
    "/network/show/v1/getProcessingOrganization",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkShowV1GetShowDangerUnconfigListOption =
  ShowDangerUnconfigInputDTO;

/** @description response type for apiPipelinePostNetworkShowV1GetShowDangerUnconfigList */
interface ApiPipelinePostNetworkShowV1GetShowDangerUnconfigListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListShowDangerUnconfigDetailHDTO;
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

type ApiPipelinePostNetworkShowV1GetShowDangerUnconfigListResponseSuccess =
  ApiPipelinePostNetworkShowV1GetShowDangerUnconfigListResponse[200];
/**
 * @description
 *   物联设备阈值未配置示险列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1GetShowDangerUnconfigList = (
  option?: ApiPipelinePostNetworkShowV1GetShowDangerUnconfigListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1GetShowDangerUnconfigListResponseSuccess>(
    "/network/show/v1/getShowDangerUnconfigList",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetNetworkShowV1GetShowDangerWoByEcodeEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiPipelineGetNetworkShowV1GetShowDangerWoByEcodeEcode */
interface ApiPipelineGetNetworkShowV1GetShowDangerWoByEcodeEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<GridPersonalInfoOrganDTO>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetNetworkShowV1GetShowDangerWoByEcodeEcodeResponseSuccess =
  ApiPipelineGetNetworkShowV1GetShowDangerWoByEcodeEcodeResponse[200];
/**
 * @description
 *   查询企业实体下所有网格组
 * @tags 管网场景—示险
 * @produces *
 */
export const apiPipelineGetNetworkShowV1GetShowDangerWoByEcodeEcode = (
  option?: ApiPipelineGetNetworkShowV1GetShowDangerWoByEcodeEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetNetworkShowV1GetShowDangerWoByEcodeEcodeResponseSuccess>(
    "/network/show/v1/getShowDangerWoByEcode/:ecode",
    { method: "get", path: option },
    config
  );

type ApiPipelineGetNetworkShowV1GetShowDangerWoCompanyUserCompanyCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
};

/** @description response type for apiPipelineGetNetworkShowV1GetShowDangerWoCompanyUserCompanyCode */
interface ApiPipelineGetNetworkShowV1GetShowDangerWoCompanyUserCompanyCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<GridPersonalInfoUserDTO>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetNetworkShowV1GetShowDangerWoCompanyUserCompanyCodeResponseSuccess =
  ApiPipelineGetNetworkShowV1GetShowDangerWoCompanyUserCompanyCodeResponse[200];
/**
 * @description
 *   查询企业实体下所有人员
 * @tags 管网场景—示险
 * @produces *
 */
export const apiPipelineGetNetworkShowV1GetShowDangerWoCompanyUserCompanyCode =
  (
    option?: ApiPipelineGetNetworkShowV1GetShowDangerWoCompanyUserCompanyCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiPipelineGetNetworkShowV1GetShowDangerWoCompanyUserCompanyCodeResponseSuccess>(
      "/network/show/v1/getShowDangerWoCompanyUser/:companyCode",
      { method: "get", path: option },
      config
    );

type ApiPipelineGetNetworkShowV1GetShowDangerWoOrganCompanyCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
};

/** @description response type for apiPipelineGetNetworkShowV1GetShowDangerWoOrganCompanyCode */
interface ApiPipelineGetNetworkShowV1GetShowDangerWoOrganCompanyCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<GridPersonalInfoOrganDTO>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetNetworkShowV1GetShowDangerWoOrganCompanyCodeResponseSuccess =
  ApiPipelineGetNetworkShowV1GetShowDangerWoOrganCompanyCodeResponse[200];
/**
 * @description
 *   查询第三方施工不达标工单组织名称
 * @tags 管网场景—示险
 * @produces *
 */
export const apiPipelineGetNetworkShowV1GetShowDangerWoOrganCompanyCode = (
  option?: ApiPipelineGetNetworkShowV1GetShowDangerWoOrganCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetNetworkShowV1GetShowDangerWoOrganCompanyCodeResponseSuccess>(
    "/network/show/v1/getShowDangerWoOrgan/:companyCode",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostNetworkShowV1GetShowDangerWoUserOption =
  NetworkShowDangerWoParamDTO;

/** @description response type for apiPipelinePostNetworkShowV1GetShowDangerWoUser */
interface ApiPipelinePostNetworkShowV1GetShowDangerWoUserResponse {
  /**
   * @description
   *   OK
   */
  200: Array<GridPersonalInfoUserDTO>;
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

type ApiPipelinePostNetworkShowV1GetShowDangerWoUserResponseSuccess =
  ApiPipelinePostNetworkShowV1GetShowDangerWoUserResponse[200];
/**
 * @description
 *   查询第三方施工不达标工单组织人员
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1GetShowDangerWoUser = (
  option?: ApiPipelinePostNetworkShowV1GetShowDangerWoUserOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1GetShowDangerWoUserResponseSuccess>(
    "/network/show/v1/getShowDangerWoUser",
    { method: "post", body: option },
    config
  );

/** @description response type for apiPipelineGetNetworkShowV1GetTimeDictAll */
interface ApiPipelineGetNetworkShowV1GetTimeDictAllResponse {
  /**
   * @description
   *   OK
   */
  200: Array<TimeDictionaryDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetNetworkShowV1GetTimeDictAllResponseSuccess =
  ApiPipelineGetNetworkShowV1GetTimeDictAllResponse[200];
/**
 * @description
 *   查询时间字典
 * @tags 管网场景—示险
 * @produces *
 */
export const apiPipelineGetNetworkShowV1GetTimeDictAll = (
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetNetworkShowV1GetTimeDictAllResponseSuccess>(
    "/network/show/v1/getTimeDictAll",
    { method: "get" },
    config
  );

type ApiPipelinePostNetworkShowV1GetTypeExtendOption = CompanyCodeDTO;

/** @description response type for apiPipelinePostNetworkShowV1GetTypeExtend */
interface ApiPipelinePostNetworkShowV1GetTypeExtendResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerListDTO>;
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

type ApiPipelinePostNetworkShowV1GetTypeExtendResponseSuccess =
  ApiPipelinePostNetworkShowV1GetTypeExtendResponse[200];
/**
 * @description
 *   类型列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1GetTypeExtend = (
  option?: ApiPipelinePostNetworkShowV1GetTypeExtendOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1GetTypeExtendResponseSuccess>(
    "/network/show/v1/getTypeExtend",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkShowV1GetTypesOfHiddenDangersOption = CompanyCodeDTO;

/** @description response type for apiPipelinePostNetworkShowV1GetTypesOfHiddenDangers */
interface ApiPipelinePostNetworkShowV1GetTypesOfHiddenDangersResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerListDTO>;
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

type ApiPipelinePostNetworkShowV1GetTypesOfHiddenDangersResponseSuccess =
  ApiPipelinePostNetworkShowV1GetTypesOfHiddenDangersResponse[200];
/**
 * @description
 *   隐患类型列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1GetTypesOfHiddenDangers = (
  option?: ApiPipelinePostNetworkShowV1GetTypesOfHiddenDangersOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1GetTypesOfHiddenDangersResponseSuccess>(
    "/network/show/v1/getTypesOfHiddenDangers",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkShowV1GetWhetherDangerOption = CompanyCodeDTO;

/** @description response type for apiPipelinePostNetworkShowV1GetWhetherDanger */
interface ApiPipelinePostNetworkShowV1GetWhetherDangerResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerTypeDTO>;
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

type ApiPipelinePostNetworkShowV1GetWhetherDangerResponseSuccess =
  ApiPipelinePostNetworkShowV1GetWhetherDangerResponse[200];
/**
 * @description
 *   是否故障列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1GetWhetherDanger = (
  option?: ApiPipelinePostNetworkShowV1GetWhetherDangerOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1GetWhetherDangerResponseSuccess>(
    "/network/show/v1/getWhetherDanger",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkShowV1HandleDoneStatusOption =
  NetworkShowDangerInputDto;

/** @description response type for apiPipelinePostNetworkShowV1HandleDoneStatus */
interface ApiPipelinePostNetworkShowV1HandleDoneStatusResponse {
  /**
   * @description
   *   OK
   */
  200: R;
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

type ApiPipelinePostNetworkShowV1HandleDoneStatusResponseSuccess =
  ApiPipelinePostNetworkShowV1HandleDoneStatusResponse[200];
/**
 * @description
 *   更新管网告警处置状态
 *   提交处置接口
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1HandleDoneStatus = (
  option?: ApiPipelinePostNetworkShowV1HandleDoneStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1HandleDoneStatusResponseSuccess>(
    "/network/show/v1/handleDoneStatus",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkShowV1SendRiskRtgOverdueOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      woCode */
  woCode: string;
};

/** @description response type for apiPipelinePostNetworkShowV1SendRiskRtgOverdue */
interface ApiPipelinePostNetworkShowV1SendRiskRtgOverdueResponse {
  /**
   * @description
   *   OK
   */
  200: R;
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

type ApiPipelinePostNetworkShowV1SendRiskRtgOverdueResponseSuccess =
  ApiPipelinePostNetworkShowV1SendRiskRtgOverdueResponse[200];
/**
 * @description
 *   隐患工单逾期提醒
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1SendRiskRtgOverdue = (
  option?: ApiPipelinePostNetworkShowV1SendRiskRtgOverdueOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1SendRiskRtgOverdueResponseSuccess>(
    "/network/show/v1/send/riskRtgOverdue",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostNetworkShowV1SendWoOption = PipelineSendWoInputDTO;

/** @description response type for apiPipelinePostNetworkShowV1SendWo */
interface ApiPipelinePostNetworkShowV1SendWoResponse {
  /**
   * @description
   *   OK
   */
  200: R;
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

type ApiPipelinePostNetworkShowV1SendWoResponseSuccess =
  ApiPipelinePostNetworkShowV1SendWoResponse[200];
/**
 * @description
 *   管网示险发起工单接口
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkShowV1SendWo = (
  option?: ApiPipelinePostNetworkShowV1SendWoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkShowV1SendWoResponseSuccess>(
    "/network/show/v1/sendWo",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetNetworkStationPersonnelInfoDeleteByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelineGetNetworkStationPersonnelInfoDeleteByIdId */
interface ApiPipelineGetNetworkStationPersonnelInfoDeleteByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: R;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetNetworkStationPersonnelInfoDeleteByIdIdResponseSuccess =
  ApiPipelineGetNetworkStationPersonnelInfoDeleteByIdIdResponse[200];
/**
 * @description
 *   删除单条管网视频告警站点联系人
 * @tags 管网场景—视频告警站点联系人配置
 * @produces *
 */
export const apiPipelineGetNetworkStationPersonnelInfoDeleteByIdId = (
  option?: ApiPipelineGetNetworkStationPersonnelInfoDeleteByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetNetworkStationPersonnelInfoDeleteByIdIdResponseSuccess>(
    "/network/station/personnel/info/deleteById/:id",
    { method: "get", path: option },
    config
  );

type ApiPipelineGetNetworkStationPersonnelInfoGetPersonDetailIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelineGetNetworkStationPersonnelInfoGetPersonDetailId */
interface ApiPipelineGetNetworkStationPersonnelInfoGetPersonDetailIdResponse {
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

type ApiPipelineGetNetworkStationPersonnelInfoGetPersonDetailIdResponseSuccess =
  ApiPipelineGetNetworkStationPersonnelInfoGetPersonDetailIdResponse[200];
/**
 * @description
 *   查询管网视频告警站点联系人详情
 * @tags 管网场景—视频告警站点联系人配置
 * @produces *
 */
export const apiPipelineGetNetworkStationPersonnelInfoGetPersonDetailId = (
  option?: ApiPipelineGetNetworkStationPersonnelInfoGetPersonDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetNetworkStationPersonnelInfoGetPersonDetailIdResponseSuccess>(
    "/network/station/personnel/info/getPersonDetail/:id",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostNetworkStationPersonnelInfoInsertSinglePersionOption =
  NetworkStationPersonnelInfoInputDTO;

/** @description response type for apiPipelinePostNetworkStationPersonnelInfoInsertSinglePersion */
interface ApiPipelinePostNetworkStationPersonnelInfoInsertSinglePersionResponse {
  /**
   * @description
   *   OK
   */
  200: R;
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

type ApiPipelinePostNetworkStationPersonnelInfoInsertSinglePersionResponseSuccess =
  ApiPipelinePostNetworkStationPersonnelInfoInsertSinglePersionResponse[200];
/**
 * @description
 *   添加管网视频告警站点联系人
 * @tags 管网场景—视频告警站点联系人配置
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkStationPersonnelInfoInsertSinglePersion = (
  option?: ApiPipelinePostNetworkStationPersonnelInfoInsertSinglePersionOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkStationPersonnelInfoInsertSinglePersionResponseSuccess>(
    "/network/station/personnel/info/insertSinglePersion",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkStationPersonnelInfoQueryPersonListOption =
  NetworkStationPersonnelParamInputDTO;

/** @description response type for apiPipelinePostNetworkStationPersonnelInfoQueryPersonList */
interface ApiPipelinePostNetworkStationPersonnelInfoQueryPersonListResponse {
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

type ApiPipelinePostNetworkStationPersonnelInfoQueryPersonListResponseSuccess =
  ApiPipelinePostNetworkStationPersonnelInfoQueryPersonListResponse[200];
/**
 * @description
 *   查询管网视频告警站点联系人列表
 * @tags 管网场景—视频告警站点联系人配置
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkStationPersonnelInfoQueryPersonList = (
  option?: ApiPipelinePostNetworkStationPersonnelInfoQueryPersonListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkStationPersonnelInfoQueryPersonListResponseSuccess>(
    "/network/station/personnel/info/queryPersonList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkStationPersonnelInfoUpdateSinglePersionOption =
  NetworkStationPersonnelInfoInputDTO;

/** @description response type for apiPipelinePostNetworkStationPersonnelInfoUpdateSinglePersion */
interface ApiPipelinePostNetworkStationPersonnelInfoUpdateSinglePersionResponse {
  /**
   * @description
   *   OK
   */
  200: R;
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

type ApiPipelinePostNetworkStationPersonnelInfoUpdateSinglePersionResponseSuccess =
  ApiPipelinePostNetworkStationPersonnelInfoUpdateSinglePersionResponse[200];
/**
 * @description
 *   修改管网视频告警站点联系人
 * @tags 管网场景—视频告警站点联系人配置
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkStationPersonnelInfoUpdateSinglePersion = (
  option?: ApiPipelinePostNetworkStationPersonnelInfoUpdateSinglePersionOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkStationPersonnelInfoUpdateSinglePersionResponseSuccess>(
    "/network/station/personnel/info/updateSinglePersion",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkWoConfigDelIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelinePostNetworkWoConfigDelId */
interface ApiPipelinePostNetworkWoConfigDelIdResponse {
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

type ApiPipelinePostNetworkWoConfigDelIdResponseSuccess =
  ApiPipelinePostNetworkWoConfigDelIdResponse[200];
/**
 * @description
 *   删除工单配置
 * @tags 管网场景—管网工单配置
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkWoConfigDelId = (
  option?: ApiPipelinePostNetworkWoConfigDelIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkWoConfigDelIdResponseSuccess>(
    "/network/wo/config/del/:id",
    { method: "post", path: option },
    config
  );

type ApiPipelinePostNetworkWoConfigGetTypeOption = NetworkWoConfigInput;

/** @description response type for apiPipelinePostNetworkWoConfigGetType */
interface ApiPipelinePostNetworkWoConfigGetTypeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CategoryTypeOutput>;
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

type ApiPipelinePostNetworkWoConfigGetTypeResponseSuccess =
  ApiPipelinePostNetworkWoConfigGetTypeResponse[200];
/**
 * @description
 *   新增时查询未配置告警类型
 * @tags 管网场景—管网工单配置
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkWoConfigGetType = (
  option?: ApiPipelinePostNetworkWoConfigGetTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkWoConfigGetTypeResponseSuccess>(
    "/network/wo/config/getType",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkWoConfigInsertOption = NetworkWoConfigInput;

/** @description response type for apiPipelinePostNetworkWoConfigInsert */
interface ApiPipelinePostNetworkWoConfigInsertResponse {
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

type ApiPipelinePostNetworkWoConfigInsertResponseSuccess =
  ApiPipelinePostNetworkWoConfigInsertResponse[200];
/**
 * @description
 *   新增未配置告警类型
 * @tags 管网场景—管网工单配置
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkWoConfigInsert = (
  option?: ApiPipelinePostNetworkWoConfigInsertOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkWoConfigInsertResponseSuccess>(
    "/network/wo/config/insert",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkWoConfigQueryWoConfigOption = NetworkWoConfigInput;

/** @description response type for apiPipelinePostNetworkWoConfigQueryWoConfig */
interface ApiPipelinePostNetworkWoConfigQueryWoConfigResponse {
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

type ApiPipelinePostNetworkWoConfigQueryWoConfigResponseSuccess =
  ApiPipelinePostNetworkWoConfigQueryWoConfigResponse[200];
/**
 * @description
 *   查询管网工单配置列表
 * @tags 管网场景—管网工单配置
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkWoConfigQueryWoConfig = (
  option?: ApiPipelinePostNetworkWoConfigQueryWoConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkWoConfigQueryWoConfigResponseSuccess>(
    "/network/wo/config/queryWoConfig",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkWoConfigUpdateOption = NetworkWoConfigInput;

/** @description response type for apiPipelinePostNetworkWoConfigUpdate */
interface ApiPipelinePostNetworkWoConfigUpdateResponse {
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

type ApiPipelinePostNetworkWoConfigUpdateResponseSuccess =
  ApiPipelinePostNetworkWoConfigUpdateResponse[200];
/**
 * @description
 *   修改工单配置告警类型
 * @tags 管网场景—管网工单配置
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkWoConfigUpdate = (
  option?: ApiPipelinePostNetworkWoConfigUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkWoConfigUpdateResponseSuccess>(
    "/network/wo/config/update",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkDangerCheckFeedbackExportNetworkDangerCheckFeedbackOption =
  NetworkDangerCheckFeedbackInputDto;

/** @description response type for apiPipelinePostNetworkDangerCheckFeedbackExportNetworkDangerCheckFeedback */
interface ApiPipelinePostNetworkDangerCheckFeedbackExportNetworkDangerCheckFeedbackResponse {
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

type ApiPipelinePostNetworkDangerCheckFeedbackExportNetworkDangerCheckFeedbackResponseSuccess =
  ApiPipelinePostNetworkDangerCheckFeedbackExportNetworkDangerCheckFeedbackResponse[200];
/**
 * @description
 *   导出管网危险作业联合检查
 * @tags 管网危险作业联合检查
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkDangerCheckFeedbackExportNetworkDangerCheckFeedback =
  (
    option?: ApiPipelinePostNetworkDangerCheckFeedbackExportNetworkDangerCheckFeedbackOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiPipelinePostNetworkDangerCheckFeedbackExportNetworkDangerCheckFeedbackResponseSuccess>(
      "/networkDangerCheckFeedback/export/networkDangerCheckFeedback",
      { method: "post", body: option },
      config
    );

type ApiPipelinePostNetworkDangerCheckFeedbackQueryOption =
  NetworkDangerCheckFeedbackInputDto;

/** @description response type for apiPipelinePostNetworkDangerCheckFeedbackQuery */
interface ApiPipelinePostNetworkDangerCheckFeedbackQueryResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListNetworkDangerCheckFeedbackOutputDto;
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

type ApiPipelinePostNetworkDangerCheckFeedbackQueryResponseSuccess =
  ApiPipelinePostNetworkDangerCheckFeedbackQueryResponse[200];
/**
 * @description
 *   查询管网危险作业联合检查
 * @tags 管网危险作业联合检查
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkDangerCheckFeedbackQuery = (
  option?: ApiPipelinePostNetworkDangerCheckFeedbackQueryOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkDangerCheckFeedbackQueryResponseSuccess>(
    "/networkDangerCheckFeedback/query",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostNetworkDangerEvaluateEditEvaluationOption =
  NetworkDangerEvaluateEditDTO;

/** @description response type for apiPipelinePostNetworkDangerEvaluateEditEvaluation */
interface ApiPipelinePostNetworkDangerEvaluateEditEvaluationResponse {
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

type ApiPipelinePostNetworkDangerEvaluateEditEvaluationResponseSuccess =
  ApiPipelinePostNetworkDangerEvaluateEditEvaluationResponse[200];
/**
 * @description
 *   编辑评价信息
 * @tags 管网评价信息模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostNetworkDangerEvaluateEditEvaluation = (
  option?: ApiPipelinePostNetworkDangerEvaluateEditEvaluationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostNetworkDangerEvaluateEditEvaluationResponseSuccess>(
    "/networkDangerEvaluate/editEvaluation",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetNetworkDangerEvaluateGetEvaluationInfoIdOption = {
  /**
    @description
      id
    @format int32 */
  id: number;
};

/** @description response type for apiPipelineGetNetworkDangerEvaluateGetEvaluationInfoId */
interface ApiPipelineGetNetworkDangerEvaluateGetEvaluationInfoIdResponse {
  /**
   * @description
   *   OK
   */
  200: NetworkEvaluationInfoDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetNetworkDangerEvaluateGetEvaluationInfoIdResponseSuccess =
  ApiPipelineGetNetworkDangerEvaluateGetEvaluationInfoIdResponse[200];
/**
 * @description
 *   获取评价信息
 * @tags 管网评价信息模块
 * @produces *
 */
export const apiPipelineGetNetworkDangerEvaluateGetEvaluationInfoId = (
  option?: ApiPipelineGetNetworkDangerEvaluateGetEvaluationInfoIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetNetworkDangerEvaluateGetEvaluationInfoIdResponseSuccess>(
    "/networkDangerEvaluate/getEvaluationInfo/:id",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostObsUploadOption = FileUploadInput;

/** @description response type for apiPipelinePostObsUpload */
interface ApiPipelinePostObsUploadResponse {
  /**
   * @description
   *   OK
   */
  200: FileUploadOutput;
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

type ApiPipelinePostObsUploadResponseSuccess =
  ApiPipelinePostObsUploadResponse[200];
/**
 * @description
 *   uploadFile
 * @tags $-proxy-272
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostObsUpload = (
  option?: ApiPipelinePostObsUploadOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostObsUploadResponseSuccess>(
    "/obs/upload",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetObsUploadSignOption = {
  /**
    @description
      contentType */
  contentType: string;
  /**
    @description
      fileName */
  fileName: string;
  /**
    @description
      path */
  path: string;
};

/** @description response type for apiPipelineGetObsUploadSign */
interface ApiPipelineGetObsUploadSignResponse {
  /**
   * @description
   *   OK
   */
  200: TemporarySignature;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetObsUploadSignResponseSuccess =
  ApiPipelineGetObsUploadSignResponse[200];
/**
 * @description
 *   获取上传签名地址-前端用
 * @tags $-proxy-272
 * @produces *
 */
export const apiPipelineGetObsUploadSign = (
  option?: ApiPipelineGetObsUploadSignOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetObsUploadSignResponseSuccess>(
    "/obs/upload/sign",
    { method: "get", query: option },
    config
  );

type ApiPipelinePostPipelineSendCallOutResultStatusOption = string;

/** @description response type for apiPipelinePostPipelineSendCallOutResultStatus */
interface ApiPipelinePostPipelineSendCallOutResultStatusResponse {
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

type ApiPipelinePostPipelineSendCallOutResultStatusResponseSuccess =
  ApiPipelinePostPipelineSendCallOutResultStatusResponse[200];
/**
 * @description
 *   外呼回调接口
 * @tags 管网外呼模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostPipelineSendCallOutResultStatus = (
  option?: ApiPipelinePostPipelineSendCallOutResultStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostPipelineSendCallOutResultStatusResponseSuccess>(
    "/pipeline/sendCallOutResultStatus",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetPositionGetPositionInfoIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiPipelineGetPositionGetPositionInfoId */
interface ApiPipelineGetPositionGetPositionInfoIdResponse {
  /**
   * @description
   *   OK
   */
  200: NetworkPositionDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetPositionGetPositionInfoIdResponseSuccess =
  ApiPipelineGetPositionGetPositionInfoIdResponse[200];
/**
 * @description
 *   查询管网人员位置信息接口
 * @tags 管网人员位置信息模块
 * @produces *
 */
export const apiPipelineGetPositionGetPositionInfoId = (
  option?: ApiPipelineGetPositionGetPositionInfoIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetPositionGetPositionInfoIdResponseSuccess>(
    "/position/get/position/info/:id",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostPositionGetPositionInfoListOption = Array<string>;

/** @description response type for apiPipelinePostPositionGetPositionInfoList */
interface ApiPipelinePostPositionGetPositionInfoListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: Array<NetworkPositionDTO>;
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

type ApiPipelinePostPositionGetPositionInfoListResponseSuccess =
  ApiPipelinePostPositionGetPositionInfoListResponse[200];
/**
 * @description
 *   查询多个管网人员位置信息接口
 * @tags 管网人员位置信息模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostPositionGetPositionInfoList = (
  option?: ApiPipelinePostPositionGetPositionInfoListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostPositionGetPositionInfoListResponseSuccess>(
    "/position/get/positionInfo/list",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostPushScreenAlarmByIdOption = AlarmWorkbenchDto;

/** @description response type for apiPipelinePostPushScreenAlarmById */
interface ApiPipelinePostPushScreenAlarmByIdResponse {
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

type ApiPipelinePostPushScreenAlarmByIdResponseSuccess =
  ApiPipelinePostPushScreenAlarmByIdResponse[200];
/**
 * @description
 *   screenPushAlarmById
 * @tags $-proxy-175
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostPushScreenAlarmById = (
  option?: ApiPipelinePostPushScreenAlarmByIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostPushScreenAlarmByIdResponseSuccess>(
    "/push/screen/alarm/byId",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostPushScreenAlarmEventOption = AlarmWorkbenchDto;

/** @description response type for apiPipelinePostPushScreenAlarmEvent */
interface ApiPipelinePostPushScreenAlarmEventResponse {
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

type ApiPipelinePostPushScreenAlarmEventResponseSuccess =
  ApiPipelinePostPushScreenAlarmEventResponse[200];
/**
 * @description
 *   screenPushAlarmByEventId
 * @tags $-proxy-175
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostPushScreenAlarmEvent = (
  option?: ApiPipelinePostPushScreenAlarmEventOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostPushScreenAlarmEventResponseSuccess>(
    "/push/screen/alarm/event",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostPushScreenDangerOption = Array<DangerousWorkWorkbenchDto>;

/** @description response type for apiPipelinePostPushScreenDanger */
interface ApiPipelinePostPushScreenDangerResponse {
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

type ApiPipelinePostPushScreenDangerResponseSuccess =
  ApiPipelinePostPushScreenDangerResponse[200];
/**
 * @description
 *   screenPushDangerByType
 * @tags $-proxy-175
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostPushScreenDanger = (
  option?: ApiPipelinePostPushScreenDangerOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostPushScreenDangerResponseSuccess>(
    "/push/screen/danger",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostPushScreenIndoorRescueOption = IndoorRescueWorkbenchDto;

/** @description response type for apiPipelinePostPushScreenIndoorRescue */
interface ApiPipelinePostPushScreenIndoorRescueResponse {
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

type ApiPipelinePostPushScreenIndoorRescueResponseSuccess =
  ApiPipelinePostPushScreenIndoorRescueResponse[200];
/**
 * @description
 *   screenPushIndoorRescue
 * @tags $-proxy-175
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostPushScreenIndoorRescue = (
  option?: ApiPipelinePostPushScreenIndoorRescueOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostPushScreenIndoorRescueResponseSuccess>(
    "/push/screen/indoorRescue",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostPushScreenRiskByIdOption = ShowDangerWorkbenchDto;

/** @description response type for apiPipelinePostPushScreenRiskById */
interface ApiPipelinePostPushScreenRiskByIdResponse {
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

type ApiPipelinePostPushScreenRiskByIdResponseSuccess =
  ApiPipelinePostPushScreenRiskByIdResponse[200];
/**
 * @description
 *   screenPushRiskById
 * @tags $-proxy-175
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostPushScreenRiskById = (
  option?: ApiPipelinePostPushScreenRiskByIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostPushScreenRiskByIdResponseSuccess>(
    "/push/screen/risk/byId",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostPushScreenRiskEventOption = ShowDangerWorkbenchDto;

/** @description response type for apiPipelinePostPushScreenRiskEvent */
interface ApiPipelinePostPushScreenRiskEventResponse {
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

type ApiPipelinePostPushScreenRiskEventResponseSuccess =
  ApiPipelinePostPushScreenRiskEventResponse[200];
/**
 * @description
 *   screenPushRiskByEventId
 * @tags $-proxy-175
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostPushScreenRiskEvent = (
  option?: ApiPipelinePostPushScreenRiskEventOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostPushScreenRiskEventResponseSuccess>(
    "/push/screen/risk/event",
    { method: "post", body: option },
    config
  );

/** @description response type for apiPipelineGetUid */
interface ApiPipelineGetUidResponse {
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

type ApiPipelineGetUidResponseSuccess = ApiPipelineGetUidResponse[200];
/**
 * @description
 *   getUid
 * @tags $-proxy-132
 * @produces *
 */
export const apiPipelineGetUid = (config?: AxiosRequestConfig) =>
  requester<ApiPipelineGetUidResponseSuccess>(
    "/uid",
    { method: "get" },
    config
  );

type ApiPipelineGetUidParseOption = {
  /**
    @description
      param0
    @format int64 */
  param0: number;
};

/** @description response type for apiPipelineGetUidParse */
interface ApiPipelineGetUidParseResponse {
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

type ApiPipelineGetUidParseResponseSuccess =
  ApiPipelineGetUidParseResponse[200];
/**
 * @description
 *   parseUid
 * @tags $-proxy-132
 * @produces *
 */
export const apiPipelineGetUidParse = (
  option?: ApiPipelineGetUidParseOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetUidParseResponseSuccess>(
    "/uid/parse",
    { method: "get", query: option },
    config
  );

type ApiPipelinePostVehicleLocationGetLocationInfoOption =
  VehicleLocationInputDTO;

/** @description response type for apiPipelinePostVehicleLocationGetLocationInfo */
interface ApiPipelinePostVehicleLocationGetLocationInfoResponse {
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

type ApiPipelinePostVehicleLocationGetLocationInfoResponseSuccess =
  ApiPipelinePostVehicleLocationGetLocationInfoResponse[200];
/**
 * @description
 *   获取车辆的最新位置信息接口
 * @tags 获取车辆的最新位置信息API
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostVehicleLocationGetLocationInfo = (
  option?: ApiPipelinePostVehicleLocationGetLocationInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostVehicleLocationGetLocationInfoResponseSuccess>(
    "/vehicle/location/get/locationInfo",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostVehicleLocationGetLocationInfoEcodeOption =
  VehicleLocationInputDTO;

/** @description response type for apiPipelinePostVehicleLocationGetLocationInfoEcode */
interface ApiPipelinePostVehicleLocationGetLocationInfoEcodeResponse {
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

type ApiPipelinePostVehicleLocationGetLocationInfoEcodeResponseSuccess =
  ApiPipelinePostVehicleLocationGetLocationInfoEcodeResponse[200];
/**
 * @description
 *   getLatestLocationInfoEcode
 * @tags 获取车辆的最新位置信息API
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostVehicleLocationGetLocationInfoEcode = (
  option?: ApiPipelinePostVehicleLocationGetLocationInfoEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostVehicleLocationGetLocationInfoEcodeResponseSuccess>(
    "/vehicle/location/get/locationInfoEcode",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostVehicleLocationGetVehicleBasicsInfoOption =
  VehicleLocationInputDTO;

/** @description response type for apiPipelinePostVehicleLocationGetVehicleBasicsInfo */
interface ApiPipelinePostVehicleLocationGetVehicleBasicsInfoResponse {
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

type ApiPipelinePostVehicleLocationGetVehicleBasicsInfoResponseSuccess =
  ApiPipelinePostVehicleLocationGetVehicleBasicsInfoResponse[200];
/**
 * @description
 *   获取车辆的最新位置信息接口
 * @tags 获取车辆的最新位置信息API
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostVehicleLocationGetVehicleBasicsInfo = (
  option?: ApiPipelinePostVehicleLocationGetVehicleBasicsInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostVehicleLocationGetVehicleBasicsInfoResponseSuccess>(
    "/vehicle/location/get/vehicleBasicsInfo",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetViolationItemPipelineExportViolationRecordsListOption = {
  /**
    @description
      评价开始时间 */
  beginPjTime: string;
  /**
    @description
      更新开始时间 */
  beginUpdateTime: string;
  /**
    @description
      企业实体编号 */
  ecode: string;
  /**
    @description
      评价结束时间 */
  endPjTime: string;
  /**
    @description
      更新开始时间 */
  endUpdateTime: string;
  /**
    @description
      场景编号，0：全部、1：关单评价、 3：危险作业、4 ：常规监察
    @format int32 */
  sceneCode: number;
};

/** @description response type for apiPipelineGetViolationItemPipelineExportViolationRecordsList */
interface ApiPipelineGetViolationItemPipelineExportViolationRecordsListResponse {
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

type ApiPipelineGetViolationItemPipelineExportViolationRecordsListResponseSuccess =
  ApiPipelineGetViolationItemPipelineExportViolationRecordsListResponse[200];
/**
 * @description
 *   导出违规项记录接口
 * @tags 管网-导出违规项API
 * @produces *
 */
export const apiPipelineGetViolationItemPipelineExportViolationRecordsList = (
  option?: ApiPipelineGetViolationItemPipelineExportViolationRecordsListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetViolationItemPipelineExportViolationRecordsListResponseSuccess>(
    "/violationItem/pipeline/export/violationRecords/list",
    { method: "get", query: option },
    config
  );

type ApiPipelinePostViolationItemPipelineQueryViolationRecordsListOption =
  ViolationExportExcelInputDTO;

/** @description response type for apiPipelinePostViolationItemPipelineQueryViolationRecordsList */
interface ApiPipelinePostViolationItemPipelineQueryViolationRecordsListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListPipelineViolationExcelModel;
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

type ApiPipelinePostViolationItemPipelineQueryViolationRecordsListResponseSuccess =
  ApiPipelinePostViolationItemPipelineQueryViolationRecordsListResponse[200];
/**
 * @description
 *   查询违规记录接口
 * @tags 管网-导出违规项API
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostViolationItemPipelineQueryViolationRecordsList = (
  option?: ApiPipelinePostViolationItemPipelineQueryViolationRecordsListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostViolationItemPipelineQueryViolationRecordsListResponseSuccess>(
    "/violationItem/pipeline/query/violationRecords/list",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchAuditResultOption = DangerWorkAuditResultInputDto;

/** @description response type for apiPipelinePostWorkbenchAuditResult */
interface ApiPipelinePostWorkbenchAuditResultResponse {
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

type ApiPipelinePostWorkbenchAuditResultResponseSuccess =
  ApiPipelinePostWorkbenchAuditResultResponse[200];
/**
 * @description
 *   (商丘新碰接) 审核接口
 *   新碰接审核结果
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchAuditResult = (
  option?: ApiPipelinePostWorkbenchAuditResultOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchAuditResultResponseSuccess>(
    "/workbench/auditResult",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchAutoDisposalGetAreaTypeOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelineGetWorkbenchAutoDisposalGetAreaType */
interface ApiPipelineGetWorkbenchAutoDisposalGetAreaTypeResponse {
  /**
   * @description
   *   OK
   */
  200: AutoDisposalDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchAutoDisposalGetAreaTypeResponseSuccess =
  ApiPipelineGetWorkbenchAutoDisposalGetAreaTypeResponse[200];
/**
 * @description
 *   获取责任人区域类型
 * @tags 自动处置配置API
 * @produces *
 */
export const apiPipelineGetWorkbenchAutoDisposalGetAreaType = (
  option?: ApiPipelineGetWorkbenchAutoDisposalGetAreaTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchAutoDisposalGetAreaTypeResponseSuccess>(
    "/workbench/autoDisposal/getAreaType",
    { method: "get", query: option },
    config
  );

type ApiPipelineGetWorkbenchAutoDisposalGetEnabledAutoDisposalOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      类型编码 */
  typeCode: string;
};

/** @description response type for apiPipelineGetWorkbenchAutoDisposalGetEnabledAutoDisposal */
interface ApiPipelineGetWorkbenchAutoDisposalGetEnabledAutoDisposalResponse {
  /**
   * @description
   *   OK
   */
  200: AutoDisposalDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchAutoDisposalGetEnabledAutoDisposalResponseSuccess =
  ApiPipelineGetWorkbenchAutoDisposalGetEnabledAutoDisposalResponse[200];
/**
 * @description
 *   根据管理实体编码和类型编码获取启用的自动处置配置
 *   获取启用的自动处置配置
 * @tags 自动处置配置API
 * @produces *
 */
export const apiPipelineGetWorkbenchAutoDisposalGetEnabledAutoDisposal = (
  option?: ApiPipelineGetWorkbenchAutoDisposalGetEnabledAutoDisposalOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchAutoDisposalGetEnabledAutoDisposalResponseSuccess>(
    "/workbench/autoDisposal/getEnabledAutoDisposal",
    { method: "get", query: option },
    config
  );

type ApiPipelinePostWorkbenchAutoDisposalSaveOption = AutoDisposalInputDto;

/** @description response type for apiPipelinePostWorkbenchAutoDisposalSave */
interface ApiPipelinePostWorkbenchAutoDisposalSaveResponse {
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

type ApiPipelinePostWorkbenchAutoDisposalSaveResponseSuccess =
  ApiPipelinePostWorkbenchAutoDisposalSaveResponse[200];
/**
 * @description
 *   保存自动处置配置
 *   保存
 * @tags 自动处置配置API
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchAutoDisposalSave = (
  option?: ApiPipelinePostWorkbenchAutoDisposalSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchAutoDisposalSaveResponseSuccess>(
    "/workbench/autoDisposal/save",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchAutoDisposalUpdateAreaTypeOption = {
  /**
    @description
      areaType
    @format int32 */
  areaType: number;
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelinePostWorkbenchAutoDisposalUpdateAreaType */
interface ApiPipelinePostWorkbenchAutoDisposalUpdateAreaTypeResponse {
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

type ApiPipelinePostWorkbenchAutoDisposalUpdateAreaTypeResponseSuccess =
  ApiPipelinePostWorkbenchAutoDisposalUpdateAreaTypeResponse[200];
/**
 * @description
 *   保存责任人区域类型
 * @tags 自动处置配置API
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchAutoDisposalUpdateAreaType = (
  option?: ApiPipelinePostWorkbenchAutoDisposalUpdateAreaTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchAutoDisposalUpdateAreaTypeResponseSuccess>(
    "/workbench/autoDisposal/updateAreaType",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostWorkbenchBatchDeleteRecordsOption = BatchDelRecordInputDto;

/** @description response type for apiPipelinePostWorkbenchBatchDeleteRecords */
interface ApiPipelinePostWorkbenchBatchDeleteRecordsResponse {
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

type ApiPipelinePostWorkbenchBatchDeleteRecordsResponseSuccess =
  ApiPipelinePostWorkbenchBatchDeleteRecordsResponse[200];
/**
 * @description
 *   批量删除管网相关记录接口
 * @tags 告警、示险、危险作业批量删除模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchBatchDeleteRecords = (
  option?: ApiPipelinePostWorkbenchBatchDeleteRecordsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchBatchDeleteRecordsResponseSuccess>(
    "/workbench/batch/delete/records",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchCheckRectifyGetCountCompanyCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
};

/** @description response type for apiPipelineGetWorkbenchCheckRectifyGetCountCompanyCode */
interface ApiPipelineGetWorkbenchCheckRectifyGetCountCompanyCodeResponse {
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

type ApiPipelineGetWorkbenchCheckRectifyGetCountCompanyCodeResponseSuccess =
  ApiPipelineGetWorkbenchCheckRectifyGetCountCompanyCodeResponse[200];
/**
 * @description
 *   问题反馈记录未查看统计
 * @tags 问题反馈记录
 * @produces *
 */
export const apiPipelineGetWorkbenchCheckRectifyGetCountCompanyCode = (
  option?: ApiPipelineGetWorkbenchCheckRectifyGetCountCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchCheckRectifyGetCountCompanyCodeResponseSuccess>(
    "/workbench/checkRectify/getCount/:companyCode",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostWorkbenchCheckRectifyGetListOption = CheckRectifyInputDto;

/** @description response type for apiPipelinePostWorkbenchCheckRectifyGetList */
interface ApiPipelinePostWorkbenchCheckRectifyGetListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListCheckRectifyOutputDto;
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

type ApiPipelinePostWorkbenchCheckRectifyGetListResponseSuccess =
  ApiPipelinePostWorkbenchCheckRectifyGetListResponse[200];
/**
 * @description
 *   问题反馈记录列表
 * @tags 问题反馈记录
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchCheckRectifyGetList = (
  option?: ApiPipelinePostWorkbenchCheckRectifyGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchCheckRectifyGetListResponseSuccess>(
    "/workbench/checkRectify/getList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchCheckRectifyGetProblemRectifyOption =
  ProblemRectifyInputDTO;

/** @description response type for apiPipelinePostWorkbenchCheckRectifyGetProblemRectify */
interface ApiPipelinePostWorkbenchCheckRectifyGetProblemRectifyResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ProblemRectifyOutputDTO>;
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

type ApiPipelinePostWorkbenchCheckRectifyGetProblemRectifyResponseSuccess =
  ApiPipelinePostWorkbenchCheckRectifyGetProblemRectifyResponse[200];
/**
 * @description
 *   要事跟踪-问题整改列表
 * @tags 问题反馈记录
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchCheckRectifyGetProblemRectify = (
  option?: ApiPipelinePostWorkbenchCheckRectifyGetProblemRectifyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchCheckRectifyGetProblemRectifyResponseSuccess>(
    "/workbench/checkRectify/getProblemRectify",
    { method: "post", body: option },
    config
  );

/** @description response type for apiPipelinePostWorkbenchCheckRectifyPushOverdueRectify */
interface ApiPipelinePostWorkbenchCheckRectifyPushOverdueRectifyResponse {
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

type ApiPipelinePostWorkbenchCheckRectifyPushOverdueRectifyResponseSuccess =
  ApiPipelinePostWorkbenchCheckRectifyPushOverdueRectifyResponse[200];
/**
 * @description
 *   超期未整改推送icome
 * @tags 问题反馈记录
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchCheckRectifyPushOverdueRectify = (
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchCheckRectifyPushOverdueRectifyResponseSuccess>(
    "/workbench/checkRectify/pushOverdueRectify",
    { method: "post" },
    config
  );

type ApiPipelineGetWorkbenchConfinedSpaceDangerOption = {
  /**
    @description
      comCode */
  comCode: string;
  /**
    @description
      page
    @format int32 */
  page: number;
  /**
    @description
      size
    @format int32 */
  size: number;
  /**
    @description
      0-未开始  1-进行中 2-已完成
    @format int32 */
  status: number;
};

/** @description response type for apiPipelineGetWorkbenchConfinedSpaceDanger */
interface ApiPipelineGetWorkbenchConfinedSpaceDangerResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListConfinedSpacePageDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchConfinedSpaceDangerResponseSuccess =
  ApiPipelineGetWorkbenchConfinedSpaceDangerResponse[200];
/**
 * @description
 *   危险作业-有限空间-列表查询
 * @tags 危险作业模块
 * @produces *
 */
export const apiPipelineGetWorkbenchConfinedSpaceDanger = (
  option?: ApiPipelineGetWorkbenchConfinedSpaceDangerOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchConfinedSpaceDangerResponseSuccess>(
    "/workbench/confinedSpaceDanger",
    { method: "get", query: option },
    config
  );

type ApiPipelinePostWorkbenchConfinedSpaceDangerOption =
  ConfinedSpaceDangerAppraiseDto;

/** @description response type for apiPipelinePostWorkbenchConfinedSpaceDanger */
interface ApiPipelinePostWorkbenchConfinedSpaceDangerResponse {
  /**
   * @description
   *   OK
   */
  200: ConfinedSpaceDetailDto;
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

type ApiPipelinePostWorkbenchConfinedSpaceDangerResponseSuccess =
  ApiPipelinePostWorkbenchConfinedSpaceDangerResponse[200];
/**
 * @description
 *   危险作业-有限空间-评价
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchConfinedSpaceDanger = (
  option?: ApiPipelinePostWorkbenchConfinedSpaceDangerOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchConfinedSpaceDangerResponseSuccess>(
    "/workbench/confinedSpaceDanger",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchConfinedSpaceDangerWorkNoOption = {
  /**
    @description
      workNo */
  workNo: string;
};

/** @description response type for apiPipelineGetWorkbenchConfinedSpaceDangerWorkNo */
interface ApiPipelineGetWorkbenchConfinedSpaceDangerWorkNoResponse {
  /**
   * @description
   *   OK
   */
  200: ConfinedSpaceDetailDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchConfinedSpaceDangerWorkNoResponseSuccess =
  ApiPipelineGetWorkbenchConfinedSpaceDangerWorkNoResponse[200];
/**
 * @description
 *   危险作业-有限空间-查看详情
 * @tags 危险作业模块
 * @produces *
 */
export const apiPipelineGetWorkbenchConfinedSpaceDangerWorkNo = (
  option?: ApiPipelineGetWorkbenchConfinedSpaceDangerWorkNoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchConfinedSpaceDangerWorkNoResponseSuccess>(
    "/workbench/confinedSpaceDanger/:workNo",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostWorkbenchDelCheckByCodeIdWorkNodeCodeOption = {
  /**
    @description
      id */
  id: string;
  /**
    @description
      workNodeCode */
  workNodeCode: string;
};

/** @description response type for apiPipelinePostWorkbenchDelCheckByCodeIdWorkNodeCode */
interface ApiPipelinePostWorkbenchDelCheckByCodeIdWorkNodeCodeResponse {
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

type ApiPipelinePostWorkbenchDelCheckByCodeIdWorkNodeCodeResponseSuccess =
  ApiPipelinePostWorkbenchDelCheckByCodeIdWorkNodeCodeResponse[200];
/**
 * @description
 *   id 为数据体id 必填
 *   管网常规检查删除数据接口
 * @tags 删除管网常规检查模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchDelCheckByCodeIdWorkNodeCode = (
  option?: ApiPipelinePostWorkbenchDelCheckByCodeIdWorkNodeCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchDelCheckByCodeIdWorkNodeCodeResponseSuccess>(
    "/workbench/delCheckByCode/:id/:workNodeCode",
    { method: "post", path: option },
    config
  );

type ApiPipelinePostWorkbenchDeleteDangeroursWoCodeOption = {
  /**
    @description
      woCode */
  woCode: string;
};

/** @description response type for apiPipelinePostWorkbenchDeleteDangeroursWoCode */
interface ApiPipelinePostWorkbenchDeleteDangeroursWoCodeResponse {
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

type ApiPipelinePostWorkbenchDeleteDangeroursWoCodeResponseSuccess =
  ApiPipelinePostWorkbenchDeleteDangeroursWoCodeResponse[200];
/**
 * @description
 *   删除管网告警相关记录接口
 * @tags 告警、危险作业作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchDeleteDangeroursWoCode = (
  option?: ApiPipelinePostWorkbenchDeleteDangeroursWoCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchDeleteDangeroursWoCodeResponseSuccess>(
    "/workbench/delete/dangerours/:woCode",
    { method: "post", path: option },
    config
  );

type ApiPipelineDeleteWorkbenchDeleteProblemRecordIdOption = {
  /**
    @description
      id
    @format int32 */
  id: number;
};

/** @description response type for apiPipelineDeleteWorkbenchDeleteProblemRecordId */
interface ApiPipelineDeleteWorkbenchDeleteProblemRecordIdResponse {
  /**
   * @description
   *   OK
   */
  200: number;
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

type ApiPipelineDeleteWorkbenchDeleteProblemRecordIdResponseSuccess =
  ApiPipelineDeleteWorkbenchDeleteProblemRecordIdResponse[200];
/**
 * @description
 *   危险作业-删除问题记录接口
 * @tags 危险作业模块
 * @produces *
 */
export const apiPipelineDeleteWorkbenchDeleteProblemRecordId = (
  option?: ApiPipelineDeleteWorkbenchDeleteProblemRecordIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineDeleteWorkbenchDeleteProblemRecordIdResponseSuccess>(
    "/workbench/deleteProblemRecord/:id",
    { method: "delete", path: option },
    config
  );

type ApiPipelinePostWorkbenchDeleteRedisDangerOption = DangerRedisInputDTO;

/** @description response type for apiPipelinePostWorkbenchDeleteRedisDanger */
interface ApiPipelinePostWorkbenchDeleteRedisDangerResponse {
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

type ApiPipelinePostWorkbenchDeleteRedisDangerResponseSuccess =
  ApiPipelinePostWorkbenchDeleteRedisDangerResponse[200];
/**
 * @description
 *   危险作业-删除redis缓存
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchDeleteRedisDanger = (
  option?: ApiPipelinePostWorkbenchDeleteRedisDangerOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchDeleteRedisDangerResponseSuccess>(
    "/workbench/deleteRedisDanger",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchDisposalProblemRecordOption =
  DangerWorkProblemRecordUpdateInputDto;

/** @description response type for apiPipelinePostWorkbenchDisposalProblemRecord */
interface ApiPipelinePostWorkbenchDisposalProblemRecordResponse {
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

type ApiPipelinePostWorkbenchDisposalProblemRecordResponseSuccess =
  ApiPipelinePostWorkbenchDisposalProblemRecordResponse[200];
/**
 * @description
 *   危险作业-处置问题记录接口
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchDisposalProblemRecord = (
  option?: ApiPipelinePostWorkbenchDisposalProblemRecordOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchDisposalProblemRecordResponseSuccess>(
    "/workbench/disposalProblemRecord",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchGetCountUnderwayWorkOption =
  NetworkDangerRegulationDTO;

/** @description response type for apiPipelinePostWorkbenchGetCountUnderwayWork */
interface ApiPipelinePostWorkbenchGetCountUnderwayWorkResponse {
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

type ApiPipelinePostWorkbenchGetCountUnderwayWorkResponseSuccess =
  ApiPipelinePostWorkbenchGetCountUnderwayWorkResponse[200];
/**
 * @description
 *   危险作业-作业监管进行中作业数
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchGetCountUnderwayWork = (
  option?: ApiPipelinePostWorkbenchGetCountUnderwayWorkOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchGetCountUnderwayWorkResponseSuccess>(
    "/workbench/get/countUnderwayWork",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchGetNetworkDangerRegulationListOption =
  NetworkDangerRegulationDTO;

/** @description response type for apiPipelinePostWorkbenchGetNetworkDangerRegulationList */
interface ApiPipelinePostWorkbenchGetNetworkDangerRegulationListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<NetworkDangerRegulationOutputDTO>;
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

type ApiPipelinePostWorkbenchGetNetworkDangerRegulationListResponseSuccess =
  ApiPipelinePostWorkbenchGetNetworkDangerRegulationListResponse[200];
/**
 * @description
 *   危险作业-作业监管列表
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchGetNetworkDangerRegulationList = (
  option?: ApiPipelinePostWorkbenchGetNetworkDangerRegulationListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchGetNetworkDangerRegulationListResponseSuccess>(
    "/workbench/get/networkDangerRegulation/list",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchGetAnalyticalDetailsByContentNameOption =
  PipelineAnalyticalInpout;

/** @description response type for apiPipelinePostWorkbenchGetAnalyticalDetailsByContentName */
interface ApiPipelinePostWorkbenchGetAnalyticalDetailsByContentNameResponse {
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

type ApiPipelinePostWorkbenchGetAnalyticalDetailsByContentNameResponseSuccess =
  ApiPipelinePostWorkbenchGetAnalyticalDetailsByContentNameResponse[200];
/**
 * @description
 *   管网分析预测二级页面
 * @tags 管网分析预测二级页面
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchGetAnalyticalDetailsByContentName = (
  option?: ApiPipelinePostWorkbenchGetAnalyticalDetailsByContentNameOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchGetAnalyticalDetailsByContentNameResponseSuccess>(
    "/workbench/getAnalyticalDetailsByContentName",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchGetCheckSupervisionScreenInfoIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelineGetWorkbenchGetCheckSupervisionScreenInfoId */
interface ApiPipelineGetWorkbenchGetCheckSupervisionScreenInfoIdResponse {
  /**
   * @description
   *   OK
   */
  200: CheckSupervisionScreenDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchGetCheckSupervisionScreenInfoIdResponseSuccess =
  ApiPipelineGetWorkbenchGetCheckSupervisionScreenInfoIdResponse[200];
/**
 * @description
 *   常规监察第三方施工监察信息，大屏展示信息
 * @tags 常规监察工作台相关接口
 * @produces *
 */
export const apiPipelineGetWorkbenchGetCheckSupervisionScreenInfoId = (
  option?: ApiPipelineGetWorkbenchGetCheckSupervisionScreenInfoIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchGetCheckSupervisionScreenInfoIdResponseSuccess>(
    "/workbench/getCheckSupervision/screenInfo/:id",
    { method: "get", path: option },
    config
  );

type ApiPipelineGetWorkbenchGetCountUserEvaluateNumItcodeOption = {
  /**
    @description
      itcode */
  itcode: string;
};

/** @description response type for apiPipelineGetWorkbenchGetCountUserEvaluateNumItcode */
interface ApiPipelineGetWorkbenchGetCountUserEvaluateNumItcodeResponse {
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

type ApiPipelineGetWorkbenchGetCountUserEvaluateNumItcodeResponseSuccess =
  ApiPipelineGetWorkbenchGetCountUserEvaluateNumItcodeResponse[200];
/**
 * @description
 *   危险作业-统计登录用户当日评价数
 * @tags 危险作业模块
 * @produces *
 */
export const apiPipelineGetWorkbenchGetCountUserEvaluateNumItcode = (
  option?: ApiPipelineGetWorkbenchGetCountUserEvaluateNumItcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchGetCountUserEvaluateNumItcodeResponseSuccess>(
    "/workbench/getCountUserEvaluateNum/:itcode",
    { method: "get", path: option },
    config
  );

type ApiPipelineGetWorkbenchGetDisposalProblemRecordIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiPipelineGetWorkbenchGetDisposalProblemRecordId */
interface ApiPipelineGetWorkbenchGetDisposalProblemRecordIdResponse {
  /**
   * @description
   *   OK
   */
  200: DangerWorkProblemRecordOutputDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchGetDisposalProblemRecordIdResponseSuccess =
  ApiPipelineGetWorkbenchGetDisposalProblemRecordIdResponse[200];
/**
 * @description
 *   危险作业-查看处置信息接口
 * @tags 危险作业模块
 * @produces *
 */
export const apiPipelineGetWorkbenchGetDisposalProblemRecordId = (
  option?: ApiPipelineGetWorkbenchGetDisposalProblemRecordIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchGetDisposalProblemRecordIdResponseSuccess>(
    "/workbench/getDisposalProblemRecord/:id",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostWorkbenchGetNetworkEvaluationInfoOption =
  NetworkEvaluationInfoInputDTO;

/** @description response type for apiPipelinePostWorkbenchGetNetworkEvaluationInfo */
interface ApiPipelinePostWorkbenchGetNetworkEvaluationInfoResponse {
  /**
   * @description
   *   OK
   */
  200: Array<NetworkEvaluationInfoDTO>;
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

type ApiPipelinePostWorkbenchGetNetworkEvaluationInfoResponseSuccess =
  ApiPipelinePostWorkbenchGetNetworkEvaluationInfoResponse[200];
/**
 * @description
 *   查询危险作业（评价合格不合格）详情接口
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchGetNetworkEvaluationInfo = (
  option?: ApiPipelinePostWorkbenchGetNetworkEvaluationInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchGetNetworkEvaluationInfoResponseSuccess>(
    "/workbench/getNetworkEvaluationInfo",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchGetProblemRecordListOption =
  DangerWorkProblemRecordListInputDto;

/** @description response type for apiPipelinePostWorkbenchGetProblemRecordList */
interface ApiPipelinePostWorkbenchGetProblemRecordListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageListDangerWorkProblemRecordOutputDto;
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

type ApiPipelinePostWorkbenchGetProblemRecordListResponseSuccess =
  ApiPipelinePostWorkbenchGetProblemRecordListResponse[200];
/**
 * @description
 *   危险作业-问题记录列表接口
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchGetProblemRecordList = (
  option?: ApiPipelinePostWorkbenchGetProblemRecordListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchGetProblemRecordListResponseSuccess>(
    "/workbench/getProblemRecordList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchGetProblemTypeListOption =
  DangerWorkProblemInputDto;

/** @description response type for apiPipelinePostWorkbenchGetProblemTypeList */
interface ApiPipelinePostWorkbenchGetProblemTypeListResponse {
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

type ApiPipelinePostWorkbenchGetProblemTypeListResponseSuccess =
  ApiPipelinePostWorkbenchGetProblemTypeListResponse[200];
/**
 * @description
 *   危险作业-问题类型列表
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchGetProblemTypeList = (
  option?: ApiPipelinePostWorkbenchGetProblemTypeListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchGetProblemTypeListResponseSuccess>(
    "/workbench/getProblemTypeList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchGetSubscribeEventCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiPipelinePostWorkbenchGetSubscribeEventCpmoCop */
interface ApiPipelinePostWorkbenchGetSubscribeEventCpmoCopResponse {
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

type ApiPipelinePostWorkbenchGetSubscribeEventCpmoCopResponseSuccess =
  ApiPipelinePostWorkbenchGetSubscribeEventCpmoCopResponse[200];
/**
 * @description
 *   查询视频告警事件订阅
 * @tags 视频告警模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchGetSubscribeEventCpmoCop = (
  option?: ApiPipelinePostWorkbenchGetSubscribeEventCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchGetSubscribeEventCpmoCopResponseSuccess>(
    "/workbench/getSubscribeEvent/:cpmoCop",
    { method: "post", path: option },
    config
  );

type ApiPipelineGetWorkbenchGetViolationItemsEcodeTypeCodeOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      typeCode */
  typeCode: string;
};

/** @description response type for apiPipelineGetWorkbenchGetViolationItemsEcodeTypeCode */
interface ApiPipelineGetWorkbenchGetViolationItemsEcodeTypeCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ViolationRewardDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchGetViolationItemsEcodeTypeCodeResponseSuccess =
  ApiPipelineGetWorkbenchGetViolationItemsEcodeTypeCodeResponse[200];
/**
 * @description
 *   获取危险作业违规项
 * @tags 危险作业模块
 * @produces *
 */
export const apiPipelineGetWorkbenchGetViolationItemsEcodeTypeCode = (
  option?: ApiPipelineGetWorkbenchGetViolationItemsEcodeTypeCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchGetViolationItemsEcodeTypeCodeResponseSuccess>(
    "/workbench/getViolationItems/:ecode/:typeCode",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostWorkbenchHistoryRecordDangerListOption =
  WorkbenchSearchShowListInputDTO;

/** @description response type for apiPipelinePostWorkbenchHistoryRecordDangerList */
interface ApiPipelinePostWorkbenchHistoryRecordDangerListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListHistoryDangerWorkShowDTO;
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

type ApiPipelinePostWorkbenchHistoryRecordDangerListResponseSuccess =
  ApiPipelinePostWorkbenchHistoryRecordDangerListResponse[200];
/**
 * @description
 *   历史记录查询 InputDTO中ecode必传
 *   查询危险作业历史信息列表
 * @tags 管网场景—工作台历史记录
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchHistoryRecordDangerList = (
  option?: ApiPipelinePostWorkbenchHistoryRecordDangerListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchHistoryRecordDangerListResponseSuccess>(
    "/workbench/historyRecord/dangerList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchInsertProblemRecordOption =
  DangerWorkProblemRecordInputDto;

/** @description response type for apiPipelinePostWorkbenchInsertProblemRecord */
interface ApiPipelinePostWorkbenchInsertProblemRecordResponse {
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

type ApiPipelinePostWorkbenchInsertProblemRecordResponseSuccess =
  ApiPipelinePostWorkbenchInsertProblemRecordResponse[200];
/**
 * @description
 *   危险作业-新增问题记录接口
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchInsertProblemRecord = (
  option?: ApiPipelinePostWorkbenchInsertProblemRecordOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchInsertProblemRecordResponseSuccess>(
    "/workbench/insertProblemRecord",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchNetWorkDangerFileDownloadOption = {
  /**
    @description
      woCode */
  woCode: string;
};

/** @description response type for apiPipelinePostWorkbenchNetWorkDangerFileDownload */
interface ApiPipelinePostWorkbenchNetWorkDangerFileDownloadResponse {
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

type ApiPipelinePostWorkbenchNetWorkDangerFileDownloadResponseSuccess =
  ApiPipelinePostWorkbenchNetWorkDangerFileDownloadResponse[200];
/**
 * @description
 *   危险作业作业方案下载 woCode必传
 *   危险作业作业方案下载 network_danger
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchNetWorkDangerFileDownload = (
  option?: ApiPipelinePostWorkbenchNetWorkDangerFileDownloadOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchNetWorkDangerFileDownloadResponseSuccess>(
    "/workbench/netWorkDanger/fileDownload",
    { method: "post", query: option },
    config
  );

type ApiPipelinePostWorkbenchNetWorkDangerFileDownloadsOption = {
  /**
    @description
      status */
  status: string;
  /**
    @description
      woCode */
  woCode: string;
};

/** @description response type for apiPipelinePostWorkbenchNetWorkDangerFileDownloads */
interface ApiPipelinePostWorkbenchNetWorkDangerFileDownloadsResponse {
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

type ApiPipelinePostWorkbenchNetWorkDangerFileDownloadsResponseSuccess =
  ApiPipelinePostWorkbenchNetWorkDangerFileDownloadsResponse[200];
/**
 * @description
 *   dangersFileDownloads
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchNetWorkDangerFileDownloads = (
  option?: ApiPipelinePostWorkbenchNetWorkDangerFileDownloadsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchNetWorkDangerFileDownloadsResponseSuccess>(
    "/workbench/netWorkDanger/fileDownloads",
    { method: "post", query: option },
    config
  );

type ApiPipelineGetWorkbenchNetWorkDangerFindCameraEcodeLimitOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      limit
    @format int32 */
  limit: number;
};

/** @description response type for apiPipelineGetWorkbenchNetWorkDangerFindCameraEcodeLimit */
interface ApiPipelineGetWorkbenchNetWorkDangerFindCameraEcodeLimitResponse {
  /**
   * @description
   *   OK
   */
  200: Array<NetworkDangerDTO>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchNetWorkDangerFindCameraEcodeLimitResponseSuccess =
  ApiPipelineGetWorkbenchNetWorkDangerFindCameraEcodeLimitResponse[200];
/**
 * @description
 *   视频总览接口
 * @tags 危险作业模块
 * @produces *
 */
export const apiPipelineGetWorkbenchNetWorkDangerFindCameraEcodeLimit = (
  option?: ApiPipelineGetWorkbenchNetWorkDangerFindCameraEcodeLimitOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchNetWorkDangerFindCameraEcodeLimitResponseSuccess>(
    "/workbench/netWorkDanger/findCamera/:ecode/:limit",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostWorkbenchNetWorkDangerFindCameraNameAndStatusOption =
  DangerFindCameraInputDto;

/** @description response type for apiPipelinePostWorkbenchNetWorkDangerFindCameraNameAndStatus */
interface ApiPipelinePostWorkbenchNetWorkDangerFindCameraNameAndStatusResponse {
  /**
   * @description
   *   OK
   */
  200: Array<{
    [propertyName: string]: any;
  }>;
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

type ApiPipelinePostWorkbenchNetWorkDangerFindCameraNameAndStatusResponseSuccess =
  ApiPipelinePostWorkbenchNetWorkDangerFindCameraNameAndStatusResponse[200];
/**
 * @description
 *   根据球机编码查询状态以及名称
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchNetWorkDangerFindCameraNameAndStatus = (
  option?: ApiPipelinePostWorkbenchNetWorkDangerFindCameraNameAndStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchNetWorkDangerFindCameraNameAndStatusResponseSuccess>(
    "/workbench/netWorkDanger/findCameraNameAndStatus",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchNetWorkDangerFindDangerousDetailsWoCodeOption = {
  /**
    @description
      woCode */
  woCode: string;
};

/** @description response type for apiPipelineGetWorkbenchNetWorkDangerFindDangerousDetailsWoCode */
interface ApiPipelineGetWorkbenchNetWorkDangerFindDangerousDetailsWoCodeResponse {
  /**
   * @description
   *   OK
   */
  200: NetworkDangerDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchNetWorkDangerFindDangerousDetailsWoCodeResponseSuccess =
  ApiPipelineGetWorkbenchNetWorkDangerFindDangerousDetailsWoCodeResponse[200];
/**
 * @description
 *   碰接和置换详情查询
 *   危险作业详情接口
 * @tags 危险作业模块
 * @produces *
 */
export const apiPipelineGetWorkbenchNetWorkDangerFindDangerousDetailsWoCode = (
  option?: ApiPipelineGetWorkbenchNetWorkDangerFindDangerousDetailsWoCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchNetWorkDangerFindDangerousDetailsWoCodeResponseSuccess>(
    "/workbench/netWorkDanger/findDangerousDetails/:woCode",
    { method: "get", path: option },
    config
  );

type ApiPipelineGetWorkbenchNetWorkDangerFindShangQiuDangerousDetailsIdOption =
  {
    /**
    @description
      id */
    id: string;
  };

/** @description response type for apiPipelineGetWorkbenchNetWorkDangerFindShangQiuDangerousDetailsId */
interface ApiPipelineGetWorkbenchNetWorkDangerFindShangQiuDangerousDetailsIdResponse {
  /**
   * @description
   *   OK
   */
  200: NetWorkDangerNewDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchNetWorkDangerFindShangQiuDangerousDetailsIdResponseSuccess =
  ApiPipelineGetWorkbenchNetWorkDangerFindShangQiuDangerousDetailsIdResponse[200];
/**
 * @description
 *   新碰接详情
 *   商丘危险作业详情查询接口
 * @tags 危险作业模块
 * @produces *
 */
export const apiPipelineGetWorkbenchNetWorkDangerFindShangQiuDangerousDetailsId =
  (
    option?: ApiPipelineGetWorkbenchNetWorkDangerFindShangQiuDangerousDetailsIdOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiPipelineGetWorkbenchNetWorkDangerFindShangQiuDangerousDetailsIdResponseSuccess>(
      "/workbench/netWorkDanger/findShangQiuDangerousDetails/:id",
      { method: "get", path: option },
      config
    );

type ApiPipelinePostWorkbenchNetWorkDangerFindShangQiuDangerousListOption =
  NetworkDangerInputDTO;

/** @description response type for apiPipelinePostWorkbenchNetWorkDangerFindShangQiuDangerousList */
interface ApiPipelinePostWorkbenchNetWorkDangerFindShangQiuDangerousListResponse {
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

type ApiPipelinePostWorkbenchNetWorkDangerFindShangQiuDangerousListResponseSuccess =
  ApiPipelinePostWorkbenchNetWorkDangerFindShangQiuDangerousListResponse[200];
/**
 * @description
 *   商丘危险作业查询接口  network_danger_contact_new
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchNetWorkDangerFindShangQiuDangerousList = (
  option?: ApiPipelinePostWorkbenchNetWorkDangerFindShangQiuDangerousListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchNetWorkDangerFindShangQiuDangerousListResponseSuccess>(
    "/workbench/netWorkDanger/findShangQiuDangerousList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchNetWorkDangerGetWorkDangerListOption =
  NetworkDangerInputDTO;

/** @description response type for apiPipelinePostWorkbenchNetWorkDangerGetWorkDangerList */
interface ApiPipelinePostWorkbenchNetWorkDangerGetWorkDangerListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<NetworkDangerDTO>;
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

type ApiPipelinePostWorkbenchNetWorkDangerGetWorkDangerListResponseSuccess =
  ApiPipelinePostWorkbenchNetWorkDangerGetWorkDangerListResponse[200];
/**
 * @description
 *   碰接和置换列表查询
 *   危险作业列表查询 network_danger
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchNetWorkDangerGetWorkDangerList = (
  option?: ApiPipelinePostWorkbenchNetWorkDangerGetWorkDangerListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchNetWorkDangerGetWorkDangerListResponseSuccess>(
    "/workbench/netWorkDanger/getWorkDangerList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchNetWorkDangerSubmitDisposalOption =
  NetworkDangerUpdateDTO;

/** @description response type for apiPipelinePostWorkbenchNetWorkDangerSubmitDisposal */
interface ApiPipelinePostWorkbenchNetWorkDangerSubmitDisposalResponse {
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

type ApiPipelinePostWorkbenchNetWorkDangerSubmitDisposalResponseSuccess =
  ApiPipelinePostWorkbenchNetWorkDangerSubmitDisposalResponse[200];
/**
 * @description
 *   处置提交接口
 *   危险作业处置接口 network_danger
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchNetWorkDangerSubmitDisposal = (
  option?: ApiPipelinePostWorkbenchNetWorkDangerSubmitDisposalOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchNetWorkDangerSubmitDisposalResponseSuccess>(
    "/workbench/netWorkDanger/submitDisposal",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipAlarmAddAlarmProblemRecordOption =
  AlarmProblemRecordDTO;

/** @description response type for apiPipelinePostWorkbenchPipAlarmAddAlarmProblemRecord */
interface ApiPipelinePostWorkbenchPipAlarmAddAlarmProblemRecordResponse {
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

type ApiPipelinePostWorkbenchPipAlarmAddAlarmProblemRecordResponseSuccess =
  ApiPipelinePostWorkbenchPipAlarmAddAlarmProblemRecordResponse[200];
/**
 * @description
 *   添加告警问题记录接口
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipAlarmAddAlarmProblemRecord = (
  option?: ApiPipelinePostWorkbenchPipAlarmAddAlarmProblemRecordOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipAlarmAddAlarmProblemRecordResponseSuccess>(
    "/workbench/pip/alarm/addAlarmProblemRecord",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchPipAlarmAiEquipmentMaintenancePressuresDeviceIdOption =
  {
    /**
    @description
      deviceId */
    deviceId: string;
  };

/** @description response type for apiPipelineGetWorkbenchPipAlarmAiEquipmentMaintenancePressuresDeviceId */
interface ApiPipelineGetWorkbenchPipAlarmAiEquipmentMaintenancePressuresDeviceIdResponse {
  /**
   * @description
   *   OK
   */
  200: AIAlarmMaintenanceDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchPipAlarmAiEquipmentMaintenancePressuresDeviceIdResponseSuccess =
  ApiPipelineGetWorkbenchPipAlarmAiEquipmentMaintenancePressuresDeviceIdResponse[200];
/**
 * @description
 *   查询AI告警设备维保数据
 * @tags 告警工作台相关接口
 * @produces *
 */
export const apiPipelineGetWorkbenchPipAlarmAiEquipmentMaintenancePressuresDeviceId =
  (
    option?: ApiPipelineGetWorkbenchPipAlarmAiEquipmentMaintenancePressuresDeviceIdOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiPipelineGetWorkbenchPipAlarmAiEquipmentMaintenancePressuresDeviceIdResponseSuccess>(
      "/workbench/pip/alarm/ai/equipment/maintenance/pressures/:deviceId",
      { method: "get", path: option },
      config
    );

type ApiPipelineGetWorkbenchPipAlarmGetInspectionAlarmDetailsEventIdAlarmTypeCodeOption =
  {
    /**
    @description
      alarmTypeCode */
    alarmTypeCode: string;
    /**
    @description
      eventId */
    eventId: string;
  };

/** @description response type for apiPipelineGetWorkbenchPipAlarmGetInspectionAlarmDetailsEventIdAlarmTypeCode */
interface ApiPipelineGetWorkbenchPipAlarmGetInspectionAlarmDetailsEventIdAlarmTypeCodeResponse {
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

type ApiPipelineGetWorkbenchPipAlarmGetInspectionAlarmDetailsEventIdAlarmTypeCodeResponseSuccess =
  ApiPipelineGetWorkbenchPipAlarmGetInspectionAlarmDetailsEventIdAlarmTypeCodeResponse[200];
/**
 * @description
 *   接口已弃用
 *   查询超时告警和无人机、巡检车详情
 * @tags 告警工作台相关接口
 * @produces *
 */
export const apiPipelineGetWorkbenchPipAlarmGetInspectionAlarmDetailsEventIdAlarmTypeCode =
  (
    option?: ApiPipelineGetWorkbenchPipAlarmGetInspectionAlarmDetailsEventIdAlarmTypeCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiPipelineGetWorkbenchPipAlarmGetInspectionAlarmDetailsEventIdAlarmTypeCodeResponseSuccess>(
      "/workbench/pip/alarm/getInspectionAlarmDetails/:eventId/:alarmTypeCode",
      { method: "get", path: option },
      config
    );

type ApiPipelineGetWorkbenchPipAlarmGetInspectionHandleBusinessIdOption = {
  /**
    @description
      businessId */
  businessId: string;
};

/** @description response type for apiPipelineGetWorkbenchPipAlarmGetInspectionHandleBusinessId */
interface ApiPipelineGetWorkbenchPipAlarmGetInspectionHandleBusinessIdResponse {
  /**
   * @description
   *   OK
   */
  200: NetworkAlarmInspectionHandleDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchPipAlarmGetInspectionHandleBusinessIdResponseSuccess =
  ApiPipelineGetWorkbenchPipAlarmGetInspectionHandleBusinessIdResponse[200];
/**
 * @description
 *   查询巡检车告警处置详情
 * @tags 告警工作台相关接口
 * @produces *
 */
export const apiPipelineGetWorkbenchPipAlarmGetInspectionHandleBusinessId = (
  option?: ApiPipelineGetWorkbenchPipAlarmGetInspectionHandleBusinessIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipAlarmGetInspectionHandleBusinessIdResponseSuccess>(
    "/workbench/pip/alarm/getInspectionHandle/:businessId",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostWorkbenchPipAlarmGetIntelligentAnalysisOption =
  AlarmIntelligentAnalysisInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipAlarmGetIntelligentAnalysis */
interface ApiPipelinePostWorkbenchPipAlarmGetIntelligentAnalysisResponse {
  /**
   * @description
   *   OK
   */
  200: AlarmIntelligentAnalysisOutputDTO;
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

type ApiPipelinePostWorkbenchPipAlarmGetIntelligentAnalysisResponseSuccess =
  ApiPipelinePostWorkbenchPipAlarmGetIntelligentAnalysisResponse[200];
/**
 * @description
 *   告警智能分析信息接口
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipAlarmGetIntelligentAnalysis = (
  option?: ApiPipelinePostWorkbenchPipAlarmGetIntelligentAnalysisOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipAlarmGetIntelligentAnalysisResponseSuccess>(
    "/workbench/pip/alarm/getIntelligentAnalysis",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipAlarmGetPipAlarmDetailsOption =
  AlarmDetailsInputDto;

/** @description response type for apiPipelinePostWorkbenchPipAlarmGetPipAlarmDetails */
interface ApiPipelinePostWorkbenchPipAlarmGetPipAlarmDetailsResponse {
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

type ApiPipelinePostWorkbenchPipAlarmGetPipAlarmDetailsResponseSuccess =
  ApiPipelinePostWorkbenchPipAlarmGetPipAlarmDetailsResponse[200];
/**
 * @description
 *   管网场景告警信息详情
 *   查询告警信息详情
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipAlarmGetPipAlarmDetails = (
  option?: ApiPipelinePostWorkbenchPipAlarmGetPipAlarmDetailsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipAlarmGetPipAlarmDetailsResponseSuccess>(
    "/workbench/pip/alarm/getPipAlarmDetails",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipAlarmGetProblemRecordListOption =
  AlarmProblemRecordSearchDTO;

/** @description response type for apiPipelinePostWorkbenchPipAlarmGetProblemRecordList */
interface ApiPipelinePostWorkbenchPipAlarmGetProblemRecordListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListAlarmProblemRecordOutputDTO;
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

type ApiPipelinePostWorkbenchPipAlarmGetProblemRecordListResponseSuccess =
  ApiPipelinePostWorkbenchPipAlarmGetProblemRecordListResponse[200];
/**
 * @description
 *   查询告警问题记录列表接口
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipAlarmGetProblemRecordList = (
  option?: ApiPipelinePostWorkbenchPipAlarmGetProblemRecordListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipAlarmGetProblemRecordListResponseSuccess>(
    "/workbench/pip/alarm/getProblemRecordList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipAlarmSendBrominatedWoOption =
  PipelineSendWoInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipAlarmSendBrominatedWo */
interface ApiPipelinePostWorkbenchPipAlarmSendBrominatedWoResponse {
  /**
   * @description
   *   OK
   */
  200: R;
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

type ApiPipelinePostWorkbenchPipAlarmSendBrominatedWoResponseSuccess =
  ApiPipelinePostWorkbenchPipAlarmSendBrominatedWoResponse[200];
/**
 * @description
 *   管网加臭告警工作台发起工单
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipAlarmSendBrominatedWo = (
  option?: ApiPipelinePostWorkbenchPipAlarmSendBrominatedWoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipAlarmSendBrominatedWoResponseSuccess>(
    "/workbench/pip/alarm/sendBrominatedWo",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipAlarmSendWoOption = PipelineSendWoInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipAlarmSendWo */
interface ApiPipelinePostWorkbenchPipAlarmSendWoResponse {
  /**
   * @description
   *   OK
   */
  200: R;
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

type ApiPipelinePostWorkbenchPipAlarmSendWoResponseSuccess =
  ApiPipelinePostWorkbenchPipAlarmSendWoResponse[200];
/**
 * @description
 *   管网告警工作台发起工单
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipAlarmSendWo = (
  option?: ApiPipelinePostWorkbenchPipAlarmSendWoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipAlarmSendWoResponseSuccess>(
    "/workbench/pip/alarm/sendWo",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipAlarmUpdateStatusOption = AlarmUpdatePipIputDto;

/** @description response type for apiPipelinePostWorkbenchPipAlarmUpdateStatus */
interface ApiPipelinePostWorkbenchPipAlarmUpdateStatusResponse {
  /**
   * @description
   *   OK
   */
  200: R;
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

type ApiPipelinePostWorkbenchPipAlarmUpdateStatusResponseSuccess =
  ApiPipelinePostWorkbenchPipAlarmUpdateStatusResponse[200];
/**
 * @description
 *   更新管网告警处置状态
 *   更新管网告警处置状态
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipAlarmUpdateStatus = (
  option?: ApiPipelinePostWorkbenchPipAlarmUpdateStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipAlarmUpdateStatusResponseSuccess>(
    "/workbench/pip/alarm/updateStatus",
    { method: "post", body: option },
    config
  );

/** @description response type for apiPipelinePostWorkbenchPipAlarmUploadFile */
interface ApiPipelinePostWorkbenchPipAlarmUploadFileResponse {
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

type ApiPipelinePostWorkbenchPipAlarmUploadFileResponseSuccess =
  ApiPipelinePostWorkbenchPipAlarmUploadFileResponse[200];
/**
 * @description
 *   泉州告警图片上传接口
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipAlarmUploadFile = (
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipAlarmUploadFileResponseSuccess>(
    "/workbench/pip/alarm/uploadFile",
    { method: "post" },
    config
  );

type ApiPipelinePostWorkbenchPipSpaceAlarmUpdateStatusOption =
  AlarmUpdatePipIputDto;

/** @description response type for apiPipelinePostWorkbenchPipSpaceAlarmUpdateStatus */
interface ApiPipelinePostWorkbenchPipSpaceAlarmUpdateStatusResponse {
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

type ApiPipelinePostWorkbenchPipSpaceAlarmUpdateStatusResponseSuccess =
  ApiPipelinePostWorkbenchPipSpaceAlarmUpdateStatusResponse[200];
/**
 * @description
 *   接口已弃用
 *   更新管网有限空间告警处置状态
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipSpaceAlarmUpdateStatus = (
  option?: ApiPipelinePostWorkbenchPipSpaceAlarmUpdateStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipSpaceAlarmUpdateStatusResponseSuccess>(
    "/workbench/pip/space/alarm/updateStatus",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineBallheadCameraGetCameraListOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      查询状态 1:在线球机 0:离线球机
    @format int32 */
  status: number;
};

/** @description response type for apiPipelineGetWorkbenchPipelineBallheadCameraGetCameraList */
interface ApiPipelineGetWorkbenchPipelineBallheadCameraGetCameraListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<BallheadCameraDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchPipelineBallheadCameraGetCameraListResponseSuccess =
  ApiPipelineGetWorkbenchPipelineBallheadCameraGetCameraListResponse[200];
/**
 * @description
 *   第三方施工监控获取球机列表
 *   第三方施工监控获取球机列表
 * @tags 球机-网管模块
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineBallheadCameraGetCameraList = (
  option?: ApiPipelineGetWorkbenchPipelineBallheadCameraGetCameraListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineBallheadCameraGetCameraListResponseSuccess>(
    "/workbench/pipeline/ballheadCamera/getCameraList",
    { method: "get", query: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineBallheadCameraGetThirdCameraOption = {
  /**
    @description
      企业实体编码 */
  ecode: string;
  /**
    @description
      球机id */
  eventSource: string;
};

/** @description response type for apiPipelineGetWorkbenchPipelineBallheadCameraGetThirdCamera */
interface ApiPipelineGetWorkbenchPipelineBallheadCameraGetThirdCameraResponse {
  /**
   * @description
   *   OK
   */
  200: BallheadCameraThirdDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchPipelineBallheadCameraGetThirdCameraResponseSuccess =
  ApiPipelineGetWorkbenchPipelineBallheadCameraGetThirdCameraResponse[200];
/**
 * @description
 *   第三方施工监控球机告警详情查询接口
 *   第三方施工监控球机告警详情查询接口
 * @tags 球机-网管模块
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineBallheadCameraGetThirdCamera = (
  option?: ApiPipelineGetWorkbenchPipelineBallheadCameraGetThirdCameraOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineBallheadCameraGetThirdCameraResponseSuccess>(
    "/workbench/pipeline/ballheadCamera/getThirdCamera",
    { method: "get", query: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineBallheadCameraGetVideoLiveListOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      limit
    @format int32 */
  limit: number;
};

/** @description response type for apiPipelineGetWorkbenchPipelineBallheadCameraGetVideoLiveList */
interface ApiPipelineGetWorkbenchPipelineBallheadCameraGetVideoLiveListResponse {
  /**
   * @description
   *   OK
   */
  200: PageDataBallheadCameraDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchPipelineBallheadCameraGetVideoLiveListResponseSuccess =
  ApiPipelineGetWorkbenchPipelineBallheadCameraGetVideoLiveListResponse[200];
/**
 * @description
 *   获取没有绑定项目在线球机列表
 *   获取没有绑定项目在线球机列表
 * @tags 球机-网管模块
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineBallheadCameraGetVideoLiveList = (
  option?: ApiPipelineGetWorkbenchPipelineBallheadCameraGetVideoLiveListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineBallheadCameraGetVideoLiveListResponseSuccess>(
    "/workbench/pipeline/ballheadCamera/getVideoLiveList",
    { method: "get", query: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineBallheadCameraOfflineListOption = {
  /**
    @description
      contains */
  contains: string;
  /**
    @description
      管理实体编码 */
  ecode: string;
};

/** @description response type for apiPipelineGetWorkbenchPipelineBallheadCameraOfflineList */
interface ApiPipelineGetWorkbenchPipelineBallheadCameraOfflineListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<BallheadCameraDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchPipelineBallheadCameraOfflineListResponseSuccess =
  ApiPipelineGetWorkbenchPipelineBallheadCameraOfflineListResponse[200];
/**
 * @description
 *   获取离线球机列表
 *   获取离线球机列表
 * @tags 球机-网管模块
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineBallheadCameraOfflineList = (
  option?: ApiPipelineGetWorkbenchPipelineBallheadCameraOfflineListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineBallheadCameraOfflineListResponseSuccess>(
    "/workbench/pipeline/ballheadCamera/offlineList",
    { method: "get", query: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineBallheadCameraOnlineListOption = {
  /**
    @description
      contains */
  contains: string;
  /**
    @description
      管理实体编码 */
  ecode: string;
};

/** @description response type for apiPipelineGetWorkbenchPipelineBallheadCameraOnlineList */
interface ApiPipelineGetWorkbenchPipelineBallheadCameraOnlineListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<BallheadCameraDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchPipelineBallheadCameraOnlineListResponseSuccess =
  ApiPipelineGetWorkbenchPipelineBallheadCameraOnlineListResponse[200];
/**
 * @description
 *   获取在线球机列表
 *   获取在线球机列表
 * @tags 球机-网管模块
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineBallheadCameraOnlineList = (
  option?: ApiPipelineGetWorkbenchPipelineBallheadCameraOnlineListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineBallheadCameraOnlineListResponseSuccess>(
    "/workbench/pipeline/ballheadCamera/onlineList",
    { method: "get", query: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshAlarmCountOption = {
  [propertyName: string]: any;
};

/** @description response type for apiPipelinePostWorkbenchPipelineBallheadCameraRefreshAlarmCount */
interface ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshAlarmCountResponse {
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

type ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshAlarmCountResponseSuccess =
  ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshAlarmCountResponse[200];
/**
 * @description
 *   refreshAlarmBallheadCameraCount
 * @tags 球机-网管模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineBallheadCameraRefreshAlarmCount = (
  option?: ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshAlarmCountOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshAlarmCountResponseSuccess>(
    "/workbench/pipeline/ballheadCamera/refreshAlarmCount",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshCountOption = {
  [propertyName: string]: any;
};

/** @description response type for apiPipelinePostWorkbenchPipelineBallheadCameraRefreshCount */
interface ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshCountResponse {
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

type ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshCountResponseSuccess =
  ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshCountResponse[200];
/**
 * @description
 *   refreshBallheadCameraCount
 * @tags 球机-网管模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineBallheadCameraRefreshCount = (
  option?: ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshCountOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineBallheadCameraRefreshCountResponseSuccess>(
    "/workbench/pipeline/ballheadCamera/refreshCount",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineCheckAddPipelineCheckCommentOption =
  PipelineUpdateInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipelineCheckAddPipelineCheckComment */
interface ApiPipelinePostWorkbenchPipelineCheckAddPipelineCheckCommentResponse {
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

type ApiPipelinePostWorkbenchPipelineCheckAddPipelineCheckCommentResponseSuccess =
  ApiPipelinePostWorkbenchPipelineCheckAddPipelineCheckCommentResponse[200];
/**
 * @description
 *   管网常规监察详细页面，追加评价按钮
 *   管网常规监察三级页面提交按钮
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineCheckAddPipelineCheckComment = (
  option?: ApiPipelinePostWorkbenchPipelineCheckAddPipelineCheckCommentOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineCheckAddPipelineCheckCommentResponseSuccess>(
    "/workbench/pipeline/check/addPipelineCheckComment",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineCheckExportsOption = NetworkCheckInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipelineCheckExports */
interface ApiPipelinePostWorkbenchPipelineCheckExportsResponse {
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

type ApiPipelinePostWorkbenchPipelineCheckExportsResponseSuccess =
  ApiPipelinePostWorkbenchPipelineCheckExportsResponse[200];
/**
 * @description
 *   常规检查一级页面导出按钮 (cpmoCop,pageIndex,pageSize,checkType)必传
 *   常规检查一级页面导出按钮
 * @tags 常规监察导出接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineCheckExports = (
  option?: ApiPipelinePostWorkbenchPipelineCheckExportsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineCheckExportsResponseSuccess>(
    "/workbench/pipeline/check/exports",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineCheckGetCheckDeatilsListOption =
  NetworkCheckInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipelineCheckGetCheckDeatilsList */
interface ApiPipelinePostWorkbenchPipelineCheckGetCheckDeatilsListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListNetworkCheckDTO;
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

type ApiPipelinePostWorkbenchPipelineCheckGetCheckDeatilsListResponseSuccess =
  ApiPipelinePostWorkbenchPipelineCheckGetCheckDeatilsListResponse[200];
/**
 * @description
 *   三方施工详情列表查询接口 (cpmoCop,pageIndex,pageSize,checkType)必传
 *   常规检查一级页面
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineCheckGetCheckDeatilsList = (
  option?: ApiPipelinePostWorkbenchPipelineCheckGetCheckDeatilsListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineCheckGetCheckDeatilsListResponseSuccess>(
    "/workbench/pipeline/check/getCheckDeatilsList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineCheckGetCheckDetailsOption =
  CheckDetailsInputDto;

/** @description response type for apiPipelinePostWorkbenchPipelineCheckGetCheckDetails */
interface ApiPipelinePostWorkbenchPipelineCheckGetCheckDetailsResponse {
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

type ApiPipelinePostWorkbenchPipelineCheckGetCheckDetailsResponseSuccess =
  ApiPipelinePostWorkbenchPipelineCheckGetCheckDetailsResponse[200];
/**
 * @description
 *   管网常规监察详细信息，每个类型对应不同的详细信息
 *   管网常规监察三级页面详细信息
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineCheckGetCheckDetails = (
  option?: ApiPipelinePostWorkbenchPipelineCheckGetCheckDetailsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineCheckGetCheckDetailsResponseSuccess>(
    "/workbench/pipeline/check/getCheckDetails",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineCheckGetScreenPointsEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiPipelineGetWorkbenchPipelineCheckGetScreenPointsEcode */
interface ApiPipelineGetWorkbenchPipelineCheckGetScreenPointsEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CheckMsgDetailDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchPipelineCheckGetScreenPointsEcodeResponseSuccess =
  ApiPipelineGetWorkbenchPipelineCheckGetScreenPointsEcodeResponse[200];
/**
 * @description
 *   ecode 8位实体编码
 *   常规检查三方施工地大屏图撒点接口
 * @tags 常规监察工作台相关接口
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineCheckGetScreenPointsEcode = (
  option?: ApiPipelineGetWorkbenchPipelineCheckGetScreenPointsEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineCheckGetScreenPointsEcodeResponseSuccess>(
    "/workbench/pipeline/check/getScreenPoints/:ecode",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineCheckListNewSpotOption =
  NetworkCheckInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipelineCheckListNewSpot */
interface ApiPipelinePostWorkbenchPipelineCheckListNewSpotResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListNetworkCheckDTO;
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

type ApiPipelinePostWorkbenchPipelineCheckListNewSpotResponseSuccess =
  ApiPipelinePostWorkbenchPipelineCheckListNewSpotResponse[200];
/**
 * @description
 *   常规检查一级抽查页面 (cpmoCop,pageIndex,pageSize,checkType)必传
 *   常规检查一级抽查页面
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineCheckListNewSpot = (
  option?: ApiPipelinePostWorkbenchPipelineCheckListNewSpotOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineCheckListNewSpotResponseSuccess>(
    "/workbench/pipeline/check/listNewSpot",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineCheckListNewV1Option =
  NetworkCheckInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipelineCheckListNewV1 */
interface ApiPipelinePostWorkbenchPipelineCheckListNewV1Response {
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

type ApiPipelinePostWorkbenchPipelineCheckListNewV1ResponseSuccess =
  ApiPipelinePostWorkbenchPipelineCheckListNewV1Response[200];
/**
 * @description
 *   常规检查一级页面 (cpmoCop,pageIndex,pageSize,checkType)必传
 *   常规检查一级页面
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineCheckListNewV1 = (
  option?: ApiPipelinePostWorkbenchPipelineCheckListNewV1Option,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineCheckListNewV1ResponseSuccess>(
    "/workbench/pipeline/check/listNewV1",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineCheckSupervisionListOption =
  NetworkCheckSupervisionInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipelineCheckSupervisionList */
interface ApiPipelinePostWorkbenchPipelineCheckSupervisionListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListNetworkCheckSupervisionDTO;
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

type ApiPipelinePostWorkbenchPipelineCheckSupervisionListResponseSuccess =
  ApiPipelinePostWorkbenchPipelineCheckSupervisionListResponse[200];
/**
 * @description
 *   常规检查一级页面 (cpmoCop,pageIndex,pageSize)必传
 *   常规检查一级页面(三方施工、监管记录)
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineCheckSupervisionList = (
  option?: ApiPipelinePostWorkbenchPipelineCheckSupervisionListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineCheckSupervisionListResponseSuccess>(
    "/workbench/pipeline/check/supervisionList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineCheckUpdatePipelineCheckOption =
  PipelineUpdateInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipelineCheckUpdatePipelineCheck */
interface ApiPipelinePostWorkbenchPipelineCheckUpdatePipelineCheckResponse {
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

type ApiPipelinePostWorkbenchPipelineCheckUpdatePipelineCheckResponseSuccess =
  ApiPipelinePostWorkbenchPipelineCheckUpdatePipelineCheckResponse[200];
/**
 * @description
 *   管网常规监察详细页面，提交评价以及等级的按钮
 *   管网常规监察三级页面提交按钮
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineCheckUpdatePipelineCheck = (
  option?: ApiPipelinePostWorkbenchPipelineCheckUpdatePipelineCheckOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineCheckUpdatePipelineCheckResponseSuccess>(
    "/workbench/pipeline/check/updatePipelineCheck",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineFeedbackOption = CheckRectifyOutput;

/** @description response type for apiPipelinePostWorkbenchPipelineFeedback */
interface ApiPipelinePostWorkbenchPipelineFeedbackResponse {
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

type ApiPipelinePostWorkbenchPipelineFeedbackResponseSuccess =
  ApiPipelinePostWorkbenchPipelineFeedbackResponse[200];
/**
 * @description
 *   常规检查抽查按钮
 *   常规检查发起工单按钮
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineFeedback = (
  option?: ApiPipelinePostWorkbenchPipelineFeedbackOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineFeedbackResponseSuccess>(
    "/workbench/pipeline/feedback",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineFindFeedBackBySourceIdSourceIdOption = {
  /**
    @description
      SourceId */
  SourceId: string;
};

/** @description response type for apiPipelineGetWorkbenchPipelineFindFeedBackBySourceIdSourceId */
interface ApiPipelineGetWorkbenchPipelineFindFeedBackBySourceIdSourceIdResponse {
  /**
   * @description
   *   OK
   */
  200: FeedBackDetailsOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchPipelineFindFeedBackBySourceIdSourceIdResponseSuccess =
  ApiPipelineGetWorkbenchPipelineFindFeedBackBySourceIdSourceIdResponse[200];
/**
 * @description
 *   反馈详情接口
 *   反馈详情接口
 * @tags 常规监察工作台相关接口
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineFindFeedBackBySourceIdSourceId = (
  option?: ApiPipelineGetWorkbenchPipelineFindFeedBackBySourceIdSourceIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineFindFeedBackBySourceIdSourceIdResponseSuccess>(
    "/workbench/pipeline/findFeedBackBySourceId/:SourceId",
    { method: "get", path: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineFindRemarkIdCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiPipelineGetWorkbenchPipelineFindRemarkIdCpmoCop */
interface ApiPipelineGetWorkbenchPipelineFindRemarkIdCpmoCopResponse {
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

type ApiPipelineGetWorkbenchPipelineFindRemarkIdCpmoCopResponseSuccess =
  ApiPipelineGetWorkbenchPipelineFindRemarkIdCpmoCopResponse[200];
/**
 * @description
 *   二级页面查看评论 (id,,cpmoCop)必传
 *   二级页面查看评论
 * @tags 常规监察工作台相关接口
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineFindRemarkIdCpmoCop = (
  option?: ApiPipelineGetWorkbenchPipelineFindRemarkIdCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineFindRemarkIdCpmoCopResponseSuccess>(
    "/workbench/pipeline/findRemark/:id/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineFindResultByCodeCodeOption = {
  /**
    @description
      code */
  code: string;
};

/** @description response type for apiPipelineGetWorkbenchPipelineFindResultByCodeCode */
interface ApiPipelineGetWorkbenchPipelineFindResultByCodeCodeResponse {
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

type ApiPipelineGetWorkbenchPipelineFindResultByCodeCodeResponseSuccess =
  ApiPipelineGetWorkbenchPipelineFindResultByCodeCodeResponse[200];
/**
 * @description
 *   常规检查发起工单按钮回显接口
 *   常规检查发起工单按钮回显接口
 * @tags 常规监察工作台相关接口
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineFindResultByCodeCode = (
  option?: ApiPipelineGetWorkbenchPipelineFindResultByCodeCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineFindResultByCodeCodeResponseSuccess>(
    "/workbench/pipeline/findResultByCode/:code",
    { method: "get", path: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineGetCheckTodayResultsCountOption =
  Array<CheckTodayResultsInputDTO>;

/** @description response type for apiPipelinePostWorkbenchPipelineGetCheckTodayResultsCount */
interface ApiPipelinePostWorkbenchPipelineGetCheckTodayResultsCountResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SuperviseWorkOutputDTO>;
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

type ApiPipelinePostWorkbenchPipelineGetCheckTodayResultsCountResponseSuccess =
  ApiPipelinePostWorkbenchPipelineGetCheckTodayResultsCountResponse[200];
/**
 * @description
 *   今日成果
 *   常规监察评价和不合格数
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineGetCheckTodayResultsCount = (
  option?: ApiPipelinePostWorkbenchPipelineGetCheckTodayResultsCountOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineGetCheckTodayResultsCountResponseSuccess>(
    "/workbench/pipeline/getCheckTodayResults/count",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineGetImageAiErrorTypeListOption =
  ImageAiErrorTypeInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipelineGetImageAiErrorTypeList */
interface ApiPipelinePostWorkbenchPipelineGetImageAiErrorTypeListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<{
    [propertyName: string]: string;
  }>;
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

type ApiPipelinePostWorkbenchPipelineGetImageAiErrorTypeListResponseSuccess =
  ApiPipelinePostWorkbenchPipelineGetImageAiErrorTypeListResponse[200];
/**
 * @description
 *   常规监察AI识别异常类型列表
 *   常规监察AI识别异常类型列表
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineGetImageAiErrorTypeList = (
  option?: ApiPipelinePostWorkbenchPipelineGetImageAiErrorTypeListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineGetImageAiErrorTypeListResponseSuccess>(
    "/workbench/pipeline/getImageAiErrorTypeList",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineGetSuperviseWorkCountOption =
  Array<SuperviseWorkInputDTO>;

/** @description response type for apiPipelinePostWorkbenchPipelineGetSuperviseWorkCount */
interface ApiPipelinePostWorkbenchPipelineGetSuperviseWorkCountResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SuperviseWorkOutputDTO>;
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

type ApiPipelinePostWorkbenchPipelineGetSuperviseWorkCountResponseSuccess =
  ApiPipelinePostWorkbenchPipelineGetSuperviseWorkCountResponse[200];
/**
 * @description
 *   今日监察
 *   今日评价统计和今日评价不合格统计
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineGetSuperviseWorkCount = (
  option?: ApiPipelinePostWorkbenchPipelineGetSuperviseWorkCountOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineGetSuperviseWorkCountResponseSuccess>(
    "/workbench/pipeline/getSuperviseWork/count",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineGetSuperviseWorkItemCountOption =
  Array<SuperviseWorkInputDTO>;

/** @description response type for apiPipelinePostWorkbenchPipelineGetSuperviseWorkItemCount */
interface ApiPipelinePostWorkbenchPipelineGetSuperviseWorkItemCountResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CheckWorkbenchListOutputDto>;
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

type ApiPipelinePostWorkbenchPipelineGetSuperviseWorkItemCountResponseSuccess =
  ApiPipelinePostWorkbenchPipelineGetSuperviseWorkItemCountResponse[200];
/**
 * @description
 *   今日监察
 *   待监察数、已监察数、不合格数、作业量统计
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineGetSuperviseWorkItemCount = (
  option?: ApiPipelinePostWorkbenchPipelineGetSuperviseWorkItemCountOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineGetSuperviseWorkItemCountResponseSuccess>(
    "/workbench/pipeline/getSuperviseWorkItem/count",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineGetVideoAuthConfigOption = {
  /**
    @description
      企业实体编码 */
  ecode: string;
  /**
    @description
      设备配置来源 , 场站外网：station
                  场站内网: ,stationIn
                  工程：project
                  管网：pipeline
                  第三方视频配置: pipeline-alarm  */
  source: string;
  /**
    @description
      类型 1 海康 2 大华 4 第三方监控
    @format int32 */
  type: number;
};

/** @description response type for apiPipelineGetWorkbenchPipelineGetVideoAuthConfig */
interface ApiPipelineGetWorkbenchPipelineGetVideoAuthConfigResponse {
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

type ApiPipelineGetWorkbenchPipelineGetVideoAuthConfigResponseSuccess =
  ApiPipelineGetWorkbenchPipelineGetVideoAuthConfigResponse[200];
/**
 * @description
 *   获取第三方监控账号信息接口
 * @tags 球机-网管模块
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineGetVideoAuthConfig = (
  option?: ApiPipelineGetWorkbenchPipelineGetVideoAuthConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineGetVideoAuthConfigResponseSuccess>(
    "/workbench/pipeline/getVideoAuthConfig",
    { method: "get", query: option },
    config
  );

type ApiPipelinePostWorkbenchPipelinePipelineRandomCheckV1Option =
  NetworkCheckInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipelinePipelineRandomCheckV1 */
interface ApiPipelinePostWorkbenchPipelinePipelineRandomCheckV1Response {
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

type ApiPipelinePostWorkbenchPipelinePipelineRandomCheckV1ResponseSuccess =
  ApiPipelinePostWorkbenchPipelinePipelineRandomCheckV1Response[200];
/**
 * @description
 *   常规检查抽查按钮 (cpmoCop,,checkType，random)必传
 *   常规检查抽查按钮
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelinePipelineRandomCheckV1 = (
  option?: ApiPipelinePostWorkbenchPipelinePipelineRandomCheckV1Option,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelinePipelineRandomCheckV1ResponseSuccess>(
    "/workbench/pipeline/pipelineRandomCheckV1",
    { method: "post", body: option },
    config
  );

type ApiPipelineGetWorkbenchPipelineProjectVideoOption = {
  /**
    @description
      球机编号 */
  cameraCodes: string;
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      项目名称 */
  projectName: string;
};

/** @description response type for apiPipelineGetWorkbenchPipelineProjectVideo */
interface ApiPipelineGetWorkbenchPipelineProjectVideoResponse {
  /**
   * @description
   *   OK
   */
  200: ProjectVideoDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchPipelineProjectVideoResponseSuccess =
  ApiPipelineGetWorkbenchPipelineProjectVideoResponse[200];
/**
 * @description
 *   包括项目信息、球机列表
 *   获取项目视频信息
 * @tags 球机-网管模块
 * @produces *
 */
export const apiPipelineGetWorkbenchPipelineProjectVideo = (
  option?: ApiPipelineGetWorkbenchPipelineProjectVideoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchPipelineProjectVideoResponseSuccess>(
    "/workbench/pipeline/projectVideo",
    { method: "get", query: option },
    config
  );

type ApiPipelinePostWorkbenchPipelineUpdateImageAiAccuracyOption =
  NetworkCheckImageAiInputDTO;

/** @description response type for apiPipelinePostWorkbenchPipelineUpdateImageAiAccuracy */
interface ApiPipelinePostWorkbenchPipelineUpdateImageAiAccuracyResponse {
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

type ApiPipelinePostWorkbenchPipelineUpdateImageAiAccuracyResponseSuccess =
  ApiPipelinePostWorkbenchPipelineUpdateImageAiAccuracyResponse[200];
/**
 * @description
 *   提交接口
 *   现场情况接口
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchPipelineUpdateImageAiAccuracy = (
  option?: ApiPipelinePostWorkbenchPipelineUpdateImageAiAccuracyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchPipelineUpdateImageAiAccuracyResponseSuccess>(
    "/workbench/pipeline/updateImageAi/accuracy",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchRedisHasKeyEcodeWorkTypeCodeOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      workTypeCode
    @format int32 */
  workTypeCode: number;
};

/** @description response type for apiPipelinePostWorkbenchRedisHasKeyEcodeWorkTypeCode */
interface ApiPipelinePostWorkbenchRedisHasKeyEcodeWorkTypeCodeResponse {
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

type ApiPipelinePostWorkbenchRedisHasKeyEcodeWorkTypeCodeResponseSuccess =
  ApiPipelinePostWorkbenchRedisHasKeyEcodeWorkTypeCodeResponse[200];
/**
 * @description
 *   危险作业-查询redis缓存
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchRedisHasKeyEcodeWorkTypeCode = (
  option?: ApiPipelinePostWorkbenchRedisHasKeyEcodeWorkTypeCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchRedisHasKeyEcodeWorkTypeCodeResponseSuccess>(
    "/workbench/redisHasKey/:ecode/:workTypeCode",
    { method: "post", path: option },
    config
  );

/** @description response type for apiPipelinePostWorkbenchRzReceiveAlarmThird */
interface ApiPipelinePostWorkbenchRzReceiveAlarmThirdResponse {
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

type ApiPipelinePostWorkbenchRzReceiveAlarmThirdResponseSuccess =
  ApiPipelinePostWorkbenchRzReceiveAlarmThirdResponse[200];
/**
 * @description
 *   认知平台接收视频告警
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchRzReceiveAlarmThird = (
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchRzReceiveAlarmThirdResponseSuccess>(
    "/workbench/rz/receiveAlarmThird",
    { method: "post" },
    config
  );

type ApiPipelinePostWorkbenchSubscribeEventOption = SubScribeEventVo;

/** @description response type for apiPipelinePostWorkbenchSubscribeEvent */
interface ApiPipelinePostWorkbenchSubscribeEventResponse {
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

type ApiPipelinePostWorkbenchSubscribeEventResponseSuccess =
  ApiPipelinePostWorkbenchSubscribeEventResponse[200];
/**
 * @description
 *   视频告警事件订阅
 * @tags 视频告警模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchSubscribeEvent = (
  option?: ApiPipelinePostWorkbenchSubscribeEventOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchSubscribeEventResponseSuccess>(
    "/workbench/subscribeEvent",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchUnSubscribeEventOption = SubScribeEventVo;

/** @description response type for apiPipelinePostWorkbenchUnSubscribeEvent */
interface ApiPipelinePostWorkbenchUnSubscribeEventResponse {
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

type ApiPipelinePostWorkbenchUnSubscribeEventResponseSuccess =
  ApiPipelinePostWorkbenchUnSubscribeEventResponse[200];
/**
 * @description
 *   取消视频告警事件订阅
 * @tags 视频告警模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchUnSubscribeEvent = (
  option?: ApiPipelinePostWorkbenchUnSubscribeEventOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchUnSubscribeEventResponseSuccess>(
    "/workbench/unSubscribeEvent",
    { method: "post", body: option },
    config
  );

type ApiPipelinePostWorkbenchUserEntitySwitchOption = SwitchUserEntityInputDto;

/** @description response type for apiPipelinePostWorkbenchUserEntitySwitch */
interface ApiPipelinePostWorkbenchUserEntitySwitchResponse {
  /**
   * @description
   *   OK
   */
  200: R;
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

type ApiPipelinePostWorkbenchUserEntitySwitchResponseSuccess =
  ApiPipelinePostWorkbenchUserEntitySwitchResponse[200];
/**
 * @description
 *   用户切换实体校验接口
 * @tags 工作台用户接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchUserEntitySwitch = (
  option?: ApiPipelinePostWorkbenchUserEntitySwitchOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchUserEntitySwitchResponseSuccess>(
    "/workbench/user/entity/switch",
    { method: "post", body: option },
    config
  );

/** @description response type for apiPipelineGetWorkbenchUserGetUserInfo */
interface ApiPipelineGetWorkbenchUserGetUserInfoResponse {
  /**
   * @description
   *   OK
   */
  200: UserInfoDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiPipelineGetWorkbenchUserGetUserInfoResponseSuccess =
  ApiPipelineGetWorkbenchUserGetUserInfoResponse[200];
/**
 * @description
 *   获取用户信息
 * @tags 工作台用户接口
 * @produces *
 */
export const apiPipelineGetWorkbenchUserGetUserInfo = (
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelineGetWorkbenchUserGetUserInfoResponseSuccess>(
    "/workbench/user/getUserInfo",
    { method: "get" },
    config
  );

type ApiPipelinePostWorkbenchUserUploadAvatarOption = string;

/** @description response type for apiPipelinePostWorkbenchUserUploadAvatar */
interface ApiPipelinePostWorkbenchUserUploadAvatarResponse {
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

type ApiPipelinePostWorkbenchUserUploadAvatarResponseSuccess =
  ApiPipelinePostWorkbenchUserUploadAvatarResponse[200];
/**
 * @description
 *   上传头像
 * @tags 工作台用户接口
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchUserUploadAvatar = (
  option?: ApiPipelinePostWorkbenchUserUploadAvatarOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchUserUploadAvatarResponseSuccess>(
    "/workbench/user/uploadAvatar",
    { method: "post", body: option },
    config
  );

/** @description request parameter type for apiPipelinePostWorkbenchVideoCallbackCompanyCode */
interface ApiPipelinePostWorkbenchVideoCallbackCompanyCodeOption {
  /**
   * @description
   *   companyCode
   */
  path: {
    /**
        @description
          companyCode */
    companyCode: string;
  };
}

/** @description request parameter type for apiPipelinePostWorkbenchVideoCallbackCompanyCode */
interface ApiPipelinePostWorkbenchVideoCallbackCompanyCodeOption {
  /**
   * @description
   *   source
   * @default pipelineVideoAlarm
   */
  query?: {
    /**
        @description
          source
        @default pipelineVideoAlarm */
    source: string;
  };
}

/** @description response type for apiPipelinePostWorkbenchVideoCallbackCompanyCode */
interface ApiPipelinePostWorkbenchVideoCallbackCompanyCodeResponse {
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

type ApiPipelinePostWorkbenchVideoCallbackCompanyCodeResponseSuccess =
  ApiPipelinePostWorkbenchVideoCallbackCompanyCodeResponse[200];
/**
 * @description
 *   海康视频订阅事件回调接口
 * @tags 视频告警模块
 * @produces *
 * @consumes application/json
 */
export const apiPipelinePostWorkbenchVideoCallbackCompanyCode = (
  option: ApiPipelinePostWorkbenchVideoCallbackCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiPipelinePostWorkbenchVideoCallbackCompanyCodeResponseSuccess>(
    "/workbench/videoCallback/:companyCode",
    { method: "post", ...option },
    config
  );
