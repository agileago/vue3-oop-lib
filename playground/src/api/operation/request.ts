/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import {
  operationRequester as requester,
  type AxiosRequestConfig,
} from "../http";
import type {
  TimeDictionaryDto,
  WorkbenchDeskPhoneInputDTO,
  WorkbenchTitleInputDto,
  SubScribeEventFeignVo,
  DevicePushConfigAddInputDto,
  DevicePushConfigOutputDto,
  DevicePushConfigQueryInputDto,
  ResultPageDataListDevicePushConfigOutputDto,
  DevicePushConfigUpdateInputDto,
  ChangeDutyReqDTO,
  CheckInReqDTO,
  DutyExportQueryDTO,
  DutyDateQueryDTO,
  DutyVO,
  PersonDutyQueryDTO,
  PersonDutyCalendarQueryDTO,
  DutyQueryDTO,
  DutyTableVO,
  DutyReqDTO,
  PersonQueryDTO,
  PersonVO,
  PositionPersonQueryDTO,
  PositionPersonVO,
  PersonReqDTO,
  PositionInsertedReqDTO,
  PositionGreenChannelFlagReqDTO,
  PositionStatusReqDTO,
  PositionVO,
  PositionDutyQueryDTO,
  DutyPositionVO,
  PositionQueryDTO,
  PageResultPositionVO,
  PositionUpdatedReqDTO,
  EnterpriseWhiteListDto,
  ResultPageDataListEnterpriseWhiteListDto,
  MMdOrganizationDto,
  CpmoCopTreeDto,
  FaultDispatchInputDto,
  FaultDisposalInputDto,
  FaultDisposalProcessOutputDTO,
  FaultFeedbackInfoOutput,
  FaultInputDto,
  ResultPageDataListFaultOutputDto,
  FaultDispatchSettingsDto,
  FaultDispatchSettingsSaveDto,
  WorkbenchTitlesOutput,
  ResultPageDataListWorkbenchTitleOutput,
  WorkbenchTitleOutput,
  HelpCenterQuestionTypeDto,
  HelpCenterInDto,
  ResultPageDataListHelpCenterDto,
  HelpCenterDto,
  HelpCenterInRespondDto,
  IComeInputDto,
  OverdueIComeInputDto,
  UnqualifiedEvaluationInputDto,
  WeeklyEvaluationInputDto,
  IndoorAlertorOfflineConfigDto,
  IndoorAlertorOfflineConfigInputDto,
  LngLatDTO,
  ResultPageDataListTgshInfoDTO,
  TgshInfoDTO,
  DangerListDTO,
  HiddenDangerDTO,
  DangerTypeDTO,
  CompanyCodeDTO,
  NetworkbenchShowDangerDTO,
  NetWorkShowDangerSpaceDto,
  NetworkShowDangerWoOrganDTO,
  NetworkShowDangerWoUserDTO,
  NetworkShowDangerWoUserInputDTO,
  StandLocationDto,
  IotAlarmAddDto,
  IotAlarmUpdateDto,
  IotAlarmQueryDto,
  PageInfoIotAlarmOutPutDto,
  IotAlarmParentOutDto,
  EvaluationCloseOrderDto,
  EvaluationCloseOrderSearchPageDto,
  EvaluationCloseOrderPageDto,
  Result,
  VirtualOrganizationCreateDto,
  R,
  CollectRewardViolationRecordInputDto,
  CollectRewardViolationRecordDto,
  OrganizationPortraitAlarmDto,
  OrganizationPortraitCheckDto,
  OrganizationPortraitDangerDto,
  OrganizationPortraitIndoorRescueDto,
  OrganizationPortraitInputDto,
  ResultPageDataListOrganizationPortraitDto,
  PriorityTrackingDto,
  PushReportConfigDto,
  WorkbenchDeskPhoneDTO,
  WorkbenchTitleInfoOutput,
  WorkbenchTitles,
  AddRectifyEvaluateDto,
  StationRectifyQueryDto,
  ResultPageListStationCheckRectifyDto,
  RectifyRecordInfo,
  StationCheckRectifyDetailDto,
  PriorityTrackingInputDto,
  PriorityTrackingOutputDto,
  UserInfoDTO,
  ParticipantResp,
  BatchDelRecordInputDto,
  SynCompanyConfigInputDto,
  PriorityTrackingNumOutputDto,
  PageDataVideoDangerWorkDto,
  PageDataBallheadCameraDto,
  WorkbenchOutboundConfigInputDto,
  RoleWhiteListDTO,
  AddressBookDto,
  AddressBookInputDto,
  AddressBookUserIdDto,
  AlarmDisposalProcessInputDto,
  AlarmShowDangerInputDto,
  AlarmWorkbenchDto,
  AlarmDisposalProcessDto,
  AlarmDisposalAttachmentDto,
  AlarmShowDangerOtherCentreInputDto,
  AlarmRewardViolationRecordInputDto,
  AlarmRewardViolationRecordDto,
  WorkbenchAlarmRiskPushConfigQueryInputDto,
  WorkbenchAlarmRiskPushConfigOutputDto,
  ResultPageDataListWorkbenchAlarmRiskPushConfigOutputDto,
  WorkbenchAlarmRiskPushConfigInputDto,
  AlarmShowDangerRescueInputDto,
  ResultPageDataListAlarmShowDangerRescueOutputDto,
  TodayWorkProduct,
  TopSentenceOutputDto,
  WorkbenchAlarmStandardCauseQueryInputDto,
  WorkbenchMultipleConfigDto,
  WorkbenchAlarmStandardInputDto,
  AlarmStandardCauseUpdDto,
  AnalyseRewardViolationRecordInputDto,
  AnalyseRewardViolationRecordDto,
  AnalysisConfigInputDto,
  AnalysisConfigDto,
  AnalysisConfigPullDownItemOutputDto,
  AnalysisConfigItemPageInputDto,
  ResultPageDataListAnalysisConfigItemOutputDto,
  AnalysisConfigItemInputDto,
  AnalysisConfigSortInputDto,
  AnnouncementDto,
  AnnouncementInputDto,
  AreaDutyPersonConfigOutputDto,
  AreaDutyPersonInputDto,
  AutoDisposalDto,
  AutoDisposalInputDto,
  QueryExpertEvalDataDto,
  CheckRewardViolationRecordInputDto,
  CheckRewardViolationRecordDto,
  CheckProportionDto,
  CheckProportionSaveInputDto,
  CheckRectifyInputDto,
  ResultPageDataListCheckRectifyOutputDto,
  ProblemRectifyInputDTO,
  ProblemRectifyOutputDTO,
  CheckKeyProcessDict,
  CheckWorkbenchNewInputDto,
  CheckWorkbenchDetailDto,
  StationCheckWorkInputDto,
  StationCheckWorkListOutputDto,
  CheckWorkbenchTitleDto,
  CurrentDayEvaluateInputDto,
  StationCheckWorkEvaluateOutputDto,
  CheckWorkbenchInputDto,
  CheckWorkbenchDto,
  WorkbenchCityOutput,
  ResultPageDataListConfinedSpacePageDto,
  ConfinedSpaceDangerAppraiseDto,
  ConfinedSpaceDetailDto,
  ContingencyPlanDto,
  DangerRewardViolationRecordInputDto,
  DangerRewardViolationRecordDto,
  ProDangerWorkStandardConfigDto,
  WorkRegulationInputDto,
  DangerousWorkInputDto,
  DangerousWorkWorkbenchDto,
  PageDataNetworkDangerRegulationOutputDTO,
  DangerRedisInputDTO,
  DisposalCommentShortcutDto,
  DisposalCommentShortcutInputDto,
  EnterprisePushConfigAddInputDto,
  EnterprisePushConfigInputDto,
  FeedbackOverdueConfigInputDto,
  FeedbackOverdueConfigOutPutDto,
  FeedbackOverdueSaveDto,
  WorkbenchParentOutboundDto,
  WorkbenchParentOutboundConfigDto,
  RoleWhiteListDto,
  UserInfoDto,
  VideoBallAndHatReqDto,
  VideoBallAndHatRespDto,
  VideoRuleRespDto,
  VideoWarnReqDto,
  VideoWarnRespDto,
  GisMapInputDto,
  IndoorRescueDisposalProcessDto,
  JointDisposalQueryDto,
  ResultPageDataListJointDisposalOutputDto,
  JointDisposalReceiveEnterpriseDto,
  MonitorGuidelineAddDto,
  MonitorGuidelineModifyDto,
  MonitorGuidelineDto,
  UnqualifiedItemDto,
  MonitorGuidelineSearchDto,
  ResultPageDataListMonitorGuidelineDto,
  MultipleConfigDetailDto,
  MultipleConfigTypeInfoDto,
  MultipleConfigDto,
  MultipleConfigQueryDto,
  PageInfoMultipleConfigOutPutDto,
  MultipleConfigDtoInputDto,
  ResultPageDataListMultipleConfigDto,
  MultipleConfigAddDto,
  NavigationInputDto,
  NavigationConfigInputDto,
  NavigationConfigDto,
  NetworkAlarmSpaceDto,
  WorkbenchDeskPhoneInfoOutputDto,
  ResultPageDataListWorkbenchOutboundConfigDto,
  UnusedDeskNumSearchInput,
  ScreenContentQueryDto,
  PageInfoScreenContentOutPutDto,
  AlarmUpdatePipIputDto,
  SystemTopicConfigInputDto,
  SystemTopicConfigOutputDto,
  SystemTopicConfigQueryInputDto,
  ResultPageDataListSystemTopicConfigOutputDto,
  SystemTopicCofigOtherInputDto,
  SystemTopicDto,
  AlarmRiskDescriptionOutput,
  WorkbenchUserFocusInputDTO,
  IndoorRescueDisposalAttachmentDto,
  IndoorRescueInputDto,
  IndoorRescueWorkbenchDto,
  RewardViolationRecordAttachmentDto,
  RiskRewardViolationRecordInputDto,
  RiskRewardViolationRecordDto,
  RootCauseBatchSaveDto,
  RootCauseDto,
  RootCauseSaveDto,
  OutboundRecordDto,
  ScreenContentAddDto,
  StationModuleQueryInputDto,
  ResultPageDataListStationModuleOutputDto,
  StationModuleInputDto,
  ScreenContentInputDto,
  ScreenContentDtoPage,
  MMdOrganizationInputDto,
  ScreenRegionModuleOutputDto,
  WorkbenchSearchListInputDto,
  ResultPageDataListAlarmRiskEvaluationHistoryOutputDto,
  ResultPageDataListIndoorRescueShowDto,
  WorkbenchSearchListOtherCentreInputDto,
  ShieldDeviceConfigAddInputDto,
  DeviceInfoDetailsOutputDto,
  ShieldDeviceConfigQueryInputDto,
  ResultPageDataListShieldDeviceConfigOutputDto,
  ShieldDeviceConfigInputDto,
  ShieldDeviceCodeInfoOutputDto,
  ShieldDeviceInfoOutputDto,
  ShowDangerDisposalAttachmentDto,
  ShowDangerDisposalProcessDto,
  ShowDangerDto,
  SubScribeEventVo,
  SueWarnRiskInputDto,
  SystemBasicInformationInputDto,
  SystemBasicInformationOutputDto,
  TimeoutRemindConfigOutputDto,
  TimeoutRemindInputDto,
  UnqualifiedEvaluationReqDto,
  UnqualifiedEvaluationRespDto,
  UnqualifiedEvaluationSaveDto,
  AlarmStandardCauseInputDto,
  WorkbenchOutboundUpdateInputDto,
  SwitchUserEntityInputDto,
  VideoAuthConfigOutput,
  VideoOverviewDangerWorkVideoDto,
  PageDataVideoOverviewProjectVideoDto,
  ViolationRewardDto,
  ViolationRewardInputDto,
  ViolationRewardMetadataInputDto,
  ViolationRewardMetadataDto,
  ResultPageDataListViolationRewardMetadataDto,
  WeatherDto,
  WeatherWarningDto,
  WeatherSummaryDto,
  WorkGuideDto,
  WorkGuideInputDto,
} from "./definition";

/** @description response type for apiOperationGetTimeDictGetTimeDictAll */
interface ApiOperationGetTimeDictGetTimeDictAllResponse {
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

type ApiOperationGetTimeDictGetTimeDictAllResponseSuccess =
  ApiOperationGetTimeDictGetTimeDictAllResponse[200];
/**
 * @description
 *   查询时间字典
 * @tags 时间字典
 * @produces *
 */
export const apiOperationGetTimeDictGetTimeDictAll = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetTimeDictGetTimeDictAllResponseSuccess>(
    "/TimeDict/getTimeDictAll",
    { method: "get" },
    config
  );

type ApiOperationPostAddBatchDeskPhoneInfoOption =
  Array<WorkbenchDeskPhoneInputDTO>;

/** @description response type for apiOperationPostAddBatchDeskPhoneInfo */
interface ApiOperationPostAddBatchDeskPhoneInfoResponse {
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

type ApiOperationPostAddBatchDeskPhoneInfoResponseSuccess =
  ApiOperationPostAddBatchDeskPhoneInfoResponse[200];
/**
 * @description
 *   添加管理实体的坐席电话信息接口
 * @tags 外呼配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostAddBatchDeskPhoneInfo = (
  option?: ApiOperationPostAddBatchDeskPhoneInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostAddBatchDeskPhoneInfoResponseSuccess>(
    "/add/batch/deskPhoneInfo",
    { method: "post", body: option },
    config
  );

type ApiOperationPostAddWorkbenchInfoOption = WorkbenchTitleInputDto;

/** @description response type for apiOperationPostAddWorkbenchInfo */
interface ApiOperationPostAddWorkbenchInfoResponse {
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

type ApiOperationPostAddWorkbenchInfoResponseSuccess =
  ApiOperationPostAddWorkbenchInfoResponse[200];
/**
 * @description
 *   添加企业实体信息接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostAddWorkbenchInfo = (
  option?: ApiOperationPostAddWorkbenchInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostAddWorkbenchInfoResponseSuccess>(
    "/add/workbench/info",
    { method: "post", body: option },
    config
  );

type ApiOperationGetAlarmAndRiskExportAlarmExportOption = {
  /**
    @description
      管理实体代码 */
  cpmoCop: string;
  /**
    @description
      结束时间
    @format int64 */
  endTime: number;
  /**
    @description
      场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景,选中多个用逗号分隔 */
  sceneCode: string;
  /**
    @description
      开始时间
    @format int64 */
  startTime: number;
  /**
    @description
      处置状态，待处理：1 处置中：4 已解除：5 */
  statusCode: string;
};

/** @description response type for apiOperationGetAlarmAndRiskExportAlarmExport */
interface ApiOperationGetAlarmAndRiskExportAlarmExportResponse {
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

type ApiOperationGetAlarmAndRiskExportAlarmExportResponseSuccess =
  ApiOperationGetAlarmAndRiskExportAlarmExportResponse[200];
/**
 * @description
 *   告警导出
 * @tags 示险告警导出接口
 * @produces *
 */
export const apiOperationGetAlarmAndRiskExportAlarmExport = (
  option?: ApiOperationGetAlarmAndRiskExportAlarmExportOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetAlarmAndRiskExportAlarmExportResponseSuccess>(
    "/alarmAndRiskExport/alarmExport",
    { method: "get", query: option },
    config
  );

type ApiOperationGetAlarmAndRiskExportCloseOrderExportOption = {
  /**
    @description
      管理实体代码 */
  cpmoCop: string;
  /**
    @description
      结束时间
    @format int64 */
  endTime: number;
  /**
    @description
      评价状态，待评价：1 已评价：2 */
  evalueType: string;
  /**
    @description
      场景，1：管网场景，2：场站场景,选中多个用逗号分隔 */
  sceneCode: string;
  /**
    @description
      开始时间
    @format int64 */
  startTime: number;
};

/** @description response type for apiOperationGetAlarmAndRiskExportCloseOrderExport */
interface ApiOperationGetAlarmAndRiskExportCloseOrderExportResponse {
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

type ApiOperationGetAlarmAndRiskExportCloseOrderExportResponseSuccess =
  ApiOperationGetAlarmAndRiskExportCloseOrderExportResponse[200];
/**
 * @description
 *   关单评价导出
 * @tags 示险告警导出接口
 * @produces *
 */
export const apiOperationGetAlarmAndRiskExportCloseOrderExport = (
  option?: ApiOperationGetAlarmAndRiskExportCloseOrderExportOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetAlarmAndRiskExportCloseOrderExportResponseSuccess>(
    "/alarmAndRiskExport/closeOrderExport",
    { method: "get", query: option },
    config
  );

type ApiOperationGetAlarmAndRiskExportRiskExportOption = {
  /**
    @description
      管理实体代码 */
  cpmoCop: string;
  /**
    @description
      结束时间
    @format int64 */
  endTime: number;
  /**
    @description
      场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景,场景选中多个用逗号分隔 */
  sceneCode: string;
  /**
    @description
      开始时间
    @format int64 */
  startTime: number;
  /**
    @description
      处置状态，待处理：1 处置中：4 已解除：5 */
  statusCode: string;
};

/** @description response type for apiOperationGetAlarmAndRiskExportRiskExport */
interface ApiOperationGetAlarmAndRiskExportRiskExportResponse {
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

type ApiOperationGetAlarmAndRiskExportRiskExportResponseSuccess =
  ApiOperationGetAlarmAndRiskExportRiskExportResponse[200];
/**
 * @description
 *   示险导出
 * @tags 示险告警导出接口
 * @produces *
 */
export const apiOperationGetAlarmAndRiskExportRiskExport = (
  option?: ApiOperationGetAlarmAndRiskExportRiskExportOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetAlarmAndRiskExportRiskExportResponseSuccess>(
    "/alarmAndRiskExport/riskExport",
    { method: "get", query: option },
    config
  );

type ApiOperationGetApiEventServiceV1EventSubscriptionViewCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationGetApiEventServiceV1EventSubscriptionViewCpmoCop */
interface ApiOperationGetApiEventServiceV1EventSubscriptionViewCpmoCopResponse {
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

type ApiOperationGetApiEventServiceV1EventSubscriptionViewCpmoCopResponseSuccess =
  ApiOperationGetApiEventServiceV1EventSubscriptionViewCpmoCopResponse[200];
/**
 * @description
 *   eventSubscriptionView
 * @tags $-proxy-363
 * @produces *
 */
export const apiOperationGetApiEventServiceV1EventSubscriptionViewCpmoCop = (
  option?: ApiOperationGetApiEventServiceV1EventSubscriptionViewCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetApiEventServiceV1EventSubscriptionViewCpmoCopResponseSuccess>(
    "/api/eventService/v1/eventSubscriptionView/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiOperationPostApiEventServiceV1EventUnSubscriptionByEventTypesOption =
  SubScribeEventFeignVo;

/** @description response type for apiOperationPostApiEventServiceV1EventUnSubscriptionByEventTypes */
interface ApiOperationPostApiEventServiceV1EventUnSubscriptionByEventTypesResponse {
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

type ApiOperationPostApiEventServiceV1EventUnSubscriptionByEventTypesResponseSuccess =
  ApiOperationPostApiEventServiceV1EventUnSubscriptionByEventTypesResponse[200];
/**
 * @description
 *   eventUnSubscriptionByEventTypes
 * @tags $-proxy-363
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostApiEventServiceV1EventUnSubscriptionByEventTypes =
  (
    option?: ApiOperationPostApiEventServiceV1EventUnSubscriptionByEventTypesOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationPostApiEventServiceV1EventUnSubscriptionByEventTypesResponseSuccess>(
      "/api/eventService/v1/eventUnSubscriptionByEventTypes",
      { method: "post", body: option },
      config
    );

type ApiOperationPostCallOutCommonOption = {
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

/** @description response type for apiOperationPostCallOutCommon */
interface ApiOperationPostCallOutCommonResponse {
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

type ApiOperationPostCallOutCommonResponseSuccess =
  ApiOperationPostCallOutCommonResponse[200];
/**
 * @description
 *   短信外呼对外接口
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostCallOutCommon = (
  option?: ApiOperationPostCallOutCommonOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostCallOutCommonResponseSuccess>(
    "/callOut/common",
    { method: "post", query: option },
    config
  );

type ApiOperationPostCallOutOutOption = {
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

/** @description response type for apiOperationPostCallOutOut */
interface ApiOperationPostCallOutOutResponse {
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

type ApiOperationPostCallOutOutResponseSuccess =
  ApiOperationPostCallOutOutResponse[200];
/**
 * @description
 *   返回信息，KEY：姓名(手机号)，VALUE:OK(成功),其它错误原因
 *   呼叫短信
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostCallOutOut = (
  option?: ApiOperationPostCallOutOutOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostCallOutOutResponseSuccess>(
    "/callOut/out",
    { method: "post", query: option },
    config
  );

type ApiOperationPostCallOutSpecialOption = {
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

/** @description response type for apiOperationPostCallOutSpecial */
interface ApiOperationPostCallOutSpecialResponse {
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

type ApiOperationPostCallOutSpecialResponseSuccess =
  ApiOperationPostCallOutSpecialResponse[200];
/**
 * @description
 *   短信外呼对外接口(聚安卫士使用，支持给座机打电话)
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostCallOutSpecial = (
  option?: ApiOperationPostCallOutSpecialOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostCallOutSpecialResponseSuccess>(
    "/callOut/special",
    { method: "post", query: option },
    config
  );

type ApiOperationPostDevicePushConfigAddDevicePushConfigOption =
  DevicePushConfigAddInputDto;

/** @description response type for apiOperationPostDevicePushConfigAddDevicePushConfig */
interface ApiOperationPostDevicePushConfigAddDevicePushConfigResponse {
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

type ApiOperationPostDevicePushConfigAddDevicePushConfigResponseSuccess =
  ApiOperationPostDevicePushConfigAddDevicePushConfigResponse[200];
/**
 * @description
 *   新增物联设备配置信息
 * @tags 物联设备推送配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostDevicePushConfigAddDevicePushConfig = (
  option?: ApiOperationPostDevicePushConfigAddDevicePushConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostDevicePushConfigAddDevicePushConfigResponseSuccess>(
    "/devicePushConfig/addDevicePushConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostDevicePushConfigDeleteBatchDevicePushConfigOption =
  Array<number>;

/** @description response type for apiOperationPostDevicePushConfigDeleteBatchDevicePushConfig */
interface ApiOperationPostDevicePushConfigDeleteBatchDevicePushConfigResponse {
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

type ApiOperationPostDevicePushConfigDeleteBatchDevicePushConfigResponseSuccess =
  ApiOperationPostDevicePushConfigDeleteBatchDevicePushConfigResponse[200];
/**
 * @description
 *   批量删除物联设备配置信息
 * @tags 物联设备推送配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostDevicePushConfigDeleteBatchDevicePushConfig = (
  option?: ApiOperationPostDevicePushConfigDeleteBatchDevicePushConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostDevicePushConfigDeleteBatchDevicePushConfigResponseSuccess>(
    "/devicePushConfig/deleteBatchDevicePushConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationGetDevicePushConfigDeleteDevicePushConfigIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetDevicePushConfigDeleteDevicePushConfigId */
interface ApiOperationGetDevicePushConfigDeleteDevicePushConfigIdResponse {
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

type ApiOperationGetDevicePushConfigDeleteDevicePushConfigIdResponseSuccess =
  ApiOperationGetDevicePushConfigDeleteDevicePushConfigIdResponse[200];
/**
 * @description
 *   删除物联设备配置信息
 * @tags 物联设备推送配置模块
 * @produces *
 */
export const apiOperationGetDevicePushConfigDeleteDevicePushConfigId = (
  option?: ApiOperationGetDevicePushConfigDeleteDevicePushConfigIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetDevicePushConfigDeleteDevicePushConfigIdResponseSuccess>(
    "/devicePushConfig/deleteDevicePushConfig/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationGetDevicePushConfigDeleteDevicePushConfigByEcodeEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetDevicePushConfigDeleteDevicePushConfigByEcodeEcode */
interface ApiOperationGetDevicePushConfigDeleteDevicePushConfigByEcodeEcodeResponse {
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

type ApiOperationGetDevicePushConfigDeleteDevicePushConfigByEcodeEcodeResponseSuccess =
  ApiOperationGetDevicePushConfigDeleteDevicePushConfigByEcodeEcodeResponse[200];
/**
 * @description
 *   根据企业编码删除物联设备配置信息
 * @tags 物联设备推送配置模块
 * @produces *
 */
export const apiOperationGetDevicePushConfigDeleteDevicePushConfigByEcodeEcode =
  (
    option?: ApiOperationGetDevicePushConfigDeleteDevicePushConfigByEcodeEcodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetDevicePushConfigDeleteDevicePushConfigByEcodeEcodeResponseSuccess>(
      "/devicePushConfig/deleteDevicePushConfigByEcode/:ecode",
      { method: "get", path: option },
      config
    );

type ApiOperationGetDevicePushConfigGetDevicePushConfigDetailsIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetDevicePushConfigGetDevicePushConfigDetailsId */
interface ApiOperationGetDevicePushConfigGetDevicePushConfigDetailsIdResponse {
  /**
   * @description
   *   OK
   */
  200: DevicePushConfigOutputDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetDevicePushConfigGetDevicePushConfigDetailsIdResponseSuccess =
  ApiOperationGetDevicePushConfigGetDevicePushConfigDetailsIdResponse[200];
/**
 * @description
 *   物联设备屏蔽配置信息-详情接口
 * @tags 物联设备推送配置模块
 * @produces *
 */
export const apiOperationGetDevicePushConfigGetDevicePushConfigDetailsId = (
  option?: ApiOperationGetDevicePushConfigGetDevicePushConfigDetailsIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetDevicePushConfigGetDevicePushConfigDetailsIdResponseSuccess>(
    "/devicePushConfig/getDevicePushConfigDetails/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostDevicePushConfigGetDevicePushConfigListOption =
  DevicePushConfigQueryInputDto;

/** @description response type for apiOperationPostDevicePushConfigGetDevicePushConfigList */
interface ApiOperationPostDevicePushConfigGetDevicePushConfigListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListDevicePushConfigOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostDevicePushConfigGetDevicePushConfigListResponseSuccess =
  ApiOperationPostDevicePushConfigGetDevicePushConfigListResponse[200];
/**
 * @description
 *   获取物联设备推送配置列表
 * @tags 物联设备推送配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostDevicePushConfigGetDevicePushConfigList = (
  option?: ApiOperationPostDevicePushConfigGetDevicePushConfigListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostDevicePushConfigGetDevicePushConfigListResponseSuccess>(
    "/devicePushConfig/getDevicePushConfigList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostDevicePushConfigGetPushStatusEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationPostDevicePushConfigGetPushStatusEcode */
interface ApiOperationPostDevicePushConfigGetPushStatusEcodeResponse {
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

type ApiOperationPostDevicePushConfigGetPushStatusEcodeResponseSuccess =
  ApiOperationPostDevicePushConfigGetPushStatusEcodeResponse[200];
/**
 * @description
 *   根据实体编码获取屏蔽/推送标志位 0-屏蔽 1-推送 2-无数据
 * @tags 物联设备推送配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostDevicePushConfigGetPushStatusEcode = (
  option?: ApiOperationPostDevicePushConfigGetPushStatusEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostDevicePushConfigGetPushStatusEcodeResponseSuccess>(
    "/devicePushConfig/getPushStatus/:ecode",
    { method: "post", path: option },
    config
  );

/** @description request parameter type for apiOperationPostDevicePushConfigImportDevicePushConfig */
interface ApiOperationPostDevicePushConfigImportDevicePushConfigOption {
  /**
   * @description
   *   设备编码
   */
  query?: {
    /**
        @description
          设备编码 */
    "configAddInputDtoList[0].deviceCode": string;
    /**
        @description
          设备id */
    "configAddInputDtoList[0].deviceId": string;
    /**
        @description
          设备类型名称 */
    "configAddInputDtoList[0].deviceTypeName": string;
    /**
        @description
          企业实体编码
        @x-example "10000800" */
    ecode: string;
    /**
        @description
          结束日期
        @format date */
    endDate: string;
    /**
        @description
          屏蔽/推送原因 */
    reason: string;
    /**
        @description
          开始日期
        @format date */
    startDate: string;
    /**
        @description
          屏蔽/推送系统 */
    systemCodes: Array<string>;
    /**
        @description
          数据类型：0：屏蔽：1：推送
        @format int32 */
    type: number;
  };
}

/** @description request parameter type for apiOperationPostDevicePushConfigImportDevicePushConfig */
interface ApiOperationPostDevicePushConfigImportDevicePushConfigOption {
  /**
   * @description
   *   file
   */
  body: File;
}

/** @description response type for apiOperationPostDevicePushConfigImportDevicePushConfig */
interface ApiOperationPostDevicePushConfigImportDevicePushConfigResponse {
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

type ApiOperationPostDevicePushConfigImportDevicePushConfigResponseSuccess =
  ApiOperationPostDevicePushConfigImportDevicePushConfigResponse[200];
/**
 * @description
 *   物联设备推送配置导入
 * @tags 物联设备推送配置模块
 * @produces *
 * @consumes multipart/form-data
 */
export const apiOperationPostDevicePushConfigImportDevicePushConfig = (
  option: ApiOperationPostDevicePushConfigImportDevicePushConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostDevicePushConfigImportDevicePushConfigResponseSuccess>(
    "/devicePushConfig/importDevicePushConfig",
    { method: "post", ...option },
    config
  );

type ApiOperationPostDevicePushConfigUpdateDevicePushConfigOption =
  DevicePushConfigUpdateInputDto;

/** @description response type for apiOperationPostDevicePushConfigUpdateDevicePushConfig */
interface ApiOperationPostDevicePushConfigUpdateDevicePushConfigResponse {
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

type ApiOperationPostDevicePushConfigUpdateDevicePushConfigResponseSuccess =
  ApiOperationPostDevicePushConfigUpdateDevicePushConfigResponse[200];
/**
 * @description
 *   物联设备屏蔽配置信息-编辑接口
 * @tags 物联设备推送配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostDevicePushConfigUpdateDevicePushConfig = (
  option?: ApiOperationPostDevicePushConfigUpdateDevicePushConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostDevicePushConfigUpdateDevicePushConfigResponseSuccess>(
    "/devicePushConfig/updateDevicePushConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyDutyChangeDutyOption = ChangeDutyReqDTO;

/** @description response type for apiOperationPostEmergencyDutyChangeDuty */
interface ApiOperationPostEmergencyDutyChangeDutyResponse {
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

type ApiOperationPostEmergencyDutyChangeDutyResponseSuccess =
  ApiOperationPostEmergencyDutyChangeDutyResponse[200];
/**
 * @description
 *   换班
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyDutyChangeDuty = (
  option?: ApiOperationPostEmergencyDutyChangeDutyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyDutyChangeDutyResponseSuccess>(
    "/emergency/duty/changeDuty",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyDutyCheckInOption = CheckInReqDTO;

/** @description response type for apiOperationPostEmergencyDutyCheckIn */
interface ApiOperationPostEmergencyDutyCheckInResponse {
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

type ApiOperationPostEmergencyDutyCheckInResponseSuccess =
  ApiOperationPostEmergencyDutyCheckInResponse[200];
/**
 * @description
 *   值班确认
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyDutyCheckIn = (
  option?: ApiOperationPostEmergencyDutyCheckInOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyDutyCheckInResponseSuccess>(
    "/emergency/duty/checkIn",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyDutyExportDutyTableOption = DutyExportQueryDTO;

/** @description response type for apiOperationPostEmergencyDutyExportDutyTable */
interface ApiOperationPostEmergencyDutyExportDutyTableResponse {
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

type ApiOperationPostEmergencyDutyExportDutyTableResponseSuccess =
  ApiOperationPostEmergencyDutyExportDutyTableResponse[200];
/**
 * @description
 *   导出值班表
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyDutyExportDutyTable = (
  option?: ApiOperationPostEmergencyDutyExportDutyTableOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyDutyExportDutyTableResponseSuccess>(
    "/emergency/duty/exportDutyTable",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyDutyGetDutyOption = DutyDateQueryDTO;

/** @description response type for apiOperationPostEmergencyDutyGetDuty */
interface ApiOperationPostEmergencyDutyGetDutyResponse {
  /**
   * @description
   *   OK
   */
  200: DutyVO;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostEmergencyDutyGetDutyResponseSuccess =
  ApiOperationPostEmergencyDutyGetDutyResponse[200];
/**
 * @description
 *   获取某天某个岗位的值班信息
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyDutyGetDuty = (
  option?: ApiOperationPostEmergencyDutyGetDutyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyDutyGetDutyResponseSuccess>(
    "/emergency/duty/getDuty",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyDutyGetPersonalDutyOption = PersonDutyQueryDTO;

/** @description response type for apiOperationPostEmergencyDutyGetPersonalDuty */
interface ApiOperationPostEmergencyDutyGetPersonalDutyResponse {
  /**
   * @description
   *   OK
   */
  200: DutyVO;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostEmergencyDutyGetPersonalDutyResponseSuccess =
  ApiOperationPostEmergencyDutyGetPersonalDutyResponse[200];
/**
 * @description
 *   获取某人当天值班信息
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyDutyGetPersonalDuty = (
  option?: ApiOperationPostEmergencyDutyGetPersonalDutyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyDutyGetPersonalDutyResponseSuccess>(
    "/emergency/duty/getPersonalDuty",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyDutyGetPersonalDutyCalendarOption =
  PersonDutyCalendarQueryDTO;

/** @description response type for apiOperationPostEmergencyDutyGetPersonalDutyCalendar */
interface ApiOperationPostEmergencyDutyGetPersonalDutyCalendarResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DutyVO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostEmergencyDutyGetPersonalDutyCalendarResponseSuccess =
  ApiOperationPostEmergencyDutyGetPersonalDutyCalendarResponse[200];
/**
 * @description
 *   获取某人某时间段的值班日历
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyDutyGetPersonalDutyCalendar = (
  option?: ApiOperationPostEmergencyDutyGetPersonalDutyCalendarOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyDutyGetPersonalDutyCalendarResponseSuccess>(
    "/emergency/duty/getPersonalDutyCalendar",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyDutyQueryDutyTableOption = DutyQueryDTO;

/** @description response type for apiOperationPostEmergencyDutyQueryDutyTable */
interface ApiOperationPostEmergencyDutyQueryDutyTableResponse {
  /**
   * @description
   *   OK
   */
  200: DutyTableVO;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostEmergencyDutyQueryDutyTableResponseSuccess =
  ApiOperationPostEmergencyDutyQueryDutyTableResponse[200];
/**
 * @description
 *   查询值班表
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyDutyQueryDutyTable = (
  option?: ApiOperationPostEmergencyDutyQueryDutyTableOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyDutyQueryDutyTableResponseSuccess>(
    "/emergency/duty/queryDutyTable",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyDutySaveDutyTableOption = DutyReqDTO;

/** @description response type for apiOperationPostEmergencyDutySaveDutyTable */
interface ApiOperationPostEmergencyDutySaveDutyTableResponse {
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

type ApiOperationPostEmergencyDutySaveDutyTableResponseSuccess =
  ApiOperationPostEmergencyDutySaveDutyTableResponse[200];
/**
 * @description
 *   保存值班表
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyDutySaveDutyTable = (
  option?: ApiOperationPostEmergencyDutySaveDutyTableOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyDutySaveDutyTableResponseSuccess>(
    "/emergency/duty/saveDutyTable",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationPostEmergencyJobChangeDutyConfirmFlagUnconfirmed */
interface ApiOperationPostEmergencyJobChangeDutyConfirmFlagUnconfirmedResponse {
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

type ApiOperationPostEmergencyJobChangeDutyConfirmFlagUnconfirmedResponseSuccess =
  ApiOperationPostEmergencyJobChangeDutyConfirmFlagUnconfirmedResponse[200];
/**
 * @description
 *   变更值班表确认状态为未确认
 * @tags 应急值守：调度任务
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyJobChangeDutyConfirmFlagUnconfirmed = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyJobChangeDutyConfirmFlagUnconfirmedResponseSuccess>(
    "/emergency/job/changeDutyConfirmFlagUnconfirmed",
    { method: "post" },
    config
  );

/** @description response type for apiOperationPostEmergencyJobReminderConfirmDuty */
interface ApiOperationPostEmergencyJobReminderConfirmDutyResponse {
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

type ApiOperationPostEmergencyJobReminderConfirmDutyResponseSuccess =
  ApiOperationPostEmergencyJobReminderConfirmDutyResponse[200];
/**
 * @description
 *   提醒确认值班
 * @tags 应急值守：调度任务
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyJobReminderConfirmDuty = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyJobReminderConfirmDutyResponseSuccess>(
    "/emergency/job/reminderConfirmDuty",
    { method: "post" },
    config
  );

/** @description response type for apiOperationPostEmergencyJobSyncPerson */
interface ApiOperationPostEmergencyJobSyncPersonResponse {
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

type ApiOperationPostEmergencyJobSyncPersonResponseSuccess =
  ApiOperationPostEmergencyJobSyncPersonResponse[200];
/**
 * @description
 *   同步人员信息
 * @tags 应急值守：调度任务
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyJobSyncPerson = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyJobSyncPersonResponseSuccess>(
    "/emergency/job/syncPerson",
    { method: "post" },
    config
  );

type ApiOperationGetEmergencyPersonGetEntityCodeItCodeOption = {
  /**
    @description
      itCode */
  itCode: string;
};

/** @description response type for apiOperationGetEmergencyPersonGetEntityCodeItCode */
interface ApiOperationGetEmergencyPersonGetEntityCodeItCodeResponse {
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

type ApiOperationGetEmergencyPersonGetEntityCodeItCodeResponseSuccess =
  ApiOperationGetEmergencyPersonGetEntityCodeItCodeResponse[200];
/**
 * @description
 *   通过itcode获取entityCode
 * @tags 应急值守：值守班组人员
 * @produces *
 */
export const apiOperationGetEmergencyPersonGetEntityCodeItCode = (
  option?: ApiOperationGetEmergencyPersonGetEntityCodeItCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetEmergencyPersonGetEntityCodeItCodeResponseSuccess>(
    "/emergency/person/getEntityCode/:itCode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostEmergencyPersonQueryOption = PersonQueryDTO;

/** @description response type for apiOperationPostEmergencyPersonQuery */
interface ApiOperationPostEmergencyPersonQueryResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PersonVO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostEmergencyPersonQueryResponseSuccess =
  ApiOperationPostEmergencyPersonQueryResponse[200];
/**
 * @description
 *   查询管理实体下所有值守班组人员
 * @tags 应急值守：值守班组人员
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyPersonQuery = (
  option?: ApiOperationPostEmergencyPersonQueryOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyPersonQueryResponseSuccess>(
    "/emergency/person/query",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyPersonQueryByPositionOption =
  PositionPersonQueryDTO;

/** @description response type for apiOperationPostEmergencyPersonQueryByPosition */
interface ApiOperationPostEmergencyPersonQueryByPositionResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PositionPersonVO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostEmergencyPersonQueryByPositionResponseSuccess =
  ApiOperationPostEmergencyPersonQueryByPositionResponse[200];
/**
 * @description
 *   查询岗位已选择的值守班组人员
 * @tags 应急值守：值守班组人员
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyPersonQueryByPosition = (
  option?: ApiOperationPostEmergencyPersonQueryByPositionOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyPersonQueryByPositionResponseSuccess>(
    "/emergency/person/queryByPosition",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyPersonSaveOption = PersonReqDTO;

/** @description response type for apiOperationPostEmergencyPersonSave */
interface ApiOperationPostEmergencyPersonSaveResponse {
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

type ApiOperationPostEmergencyPersonSaveResponseSuccess =
  ApiOperationPostEmergencyPersonSaveResponse[200];
/**
 * @description
 *   保存人员
 * @tags 应急值守：值守班组人员
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyPersonSave = (
  option?: ApiOperationPostEmergencyPersonSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyPersonSaveResponseSuccess>(
    "/emergency/person/save",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyPositionAddOption = PositionInsertedReqDTO;

/** @description response type for apiOperationPostEmergencyPositionAdd */
interface ApiOperationPostEmergencyPositionAddResponse {
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

type ApiOperationPostEmergencyPositionAddResponseSuccess =
  ApiOperationPostEmergencyPositionAddResponse[200];
/**
 * @description
 *   新增岗位
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyPositionAdd = (
  option?: ApiOperationPostEmergencyPositionAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyPositionAddResponseSuccess>(
    "/emergency/position/add",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyPositionChangeGreenChannelContactFlagOption =
  PositionGreenChannelFlagReqDTO;

/** @description response type for apiOperationPostEmergencyPositionChangeGreenChannelContactFlag */
interface ApiOperationPostEmergencyPositionChangeGreenChannelContactFlagResponse {
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

type ApiOperationPostEmergencyPositionChangeGreenChannelContactFlagResponseSuccess =
  ApiOperationPostEmergencyPositionChangeGreenChannelContactFlagResponse[200];
/**
 * @description
 *   变更绿色通道联系人标志
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyPositionChangeGreenChannelContactFlag = (
  option?: ApiOperationPostEmergencyPositionChangeGreenChannelContactFlagOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyPositionChangeGreenChannelContactFlagResponseSuccess>(
    "/emergency/position/changeGreenChannelContactFlag",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyPositionChangeStatusOption = PositionStatusReqDTO;

/** @description response type for apiOperationPostEmergencyPositionChangeStatus */
interface ApiOperationPostEmergencyPositionChangeStatusResponse {
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

type ApiOperationPostEmergencyPositionChangeStatusResponseSuccess =
  ApiOperationPostEmergencyPositionChangeStatusResponse[200];
/**
 * @description
 *   更改启停状态
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyPositionChangeStatus = (
  option?: ApiOperationPostEmergencyPositionChangeStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyPositionChangeStatusResponseSuccess>(
    "/emergency/position/changeStatus",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyPositionDeleteIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationPostEmergencyPositionDeleteId */
interface ApiOperationPostEmergencyPositionDeleteIdResponse {
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

type ApiOperationPostEmergencyPositionDeleteIdResponseSuccess =
  ApiOperationPostEmergencyPositionDeleteIdResponse[200];
/**
 * @description
 *   删除岗位
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyPositionDeleteId = (
  option?: ApiOperationPostEmergencyPositionDeleteIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyPositionDeleteIdResponseSuccess>(
    "/emergency/position/delete/:id",
    { method: "post", path: option },
    config
  );

type ApiOperationGetEmergencyPositionGetIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetEmergencyPositionGetId */
interface ApiOperationGetEmergencyPositionGetIdResponse {
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

type ApiOperationGetEmergencyPositionGetIdResponseSuccess =
  ApiOperationGetEmergencyPositionGetIdResponse[200];
/**
 * @description
 *   根据id获取岗位信息
 * @tags 应急值守：岗位管理
 * @produces *
 */
export const apiOperationGetEmergencyPositionGetId = (
  option?: ApiOperationGetEmergencyPositionGetIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetEmergencyPositionGetIdResponseSuccess>(
    "/emergency/position/get/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostEmergencyPositionListOption = PositionDutyQueryDTO;

/** @description response type for apiOperationPostEmergencyPositionList */
interface ApiOperationPostEmergencyPositionListResponse {
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

type ApiOperationPostEmergencyPositionListResponseSuccess =
  ApiOperationPostEmergencyPositionListResponse[200];
/**
 * @description
 *   岗位下拉数据
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyPositionList = (
  option?: ApiOperationPostEmergencyPositionListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyPositionListResponseSuccess>(
    "/emergency/position/list",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyPositionQueryOption = PositionQueryDTO;

/** @description response type for apiOperationPostEmergencyPositionQuery */
interface ApiOperationPostEmergencyPositionQueryResponse {
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

type ApiOperationPostEmergencyPositionQueryResponseSuccess =
  ApiOperationPostEmergencyPositionQueryResponse[200];
/**
 * @description
 *   分页查询岗位数据
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyPositionQuery = (
  option?: ApiOperationPostEmergencyPositionQueryOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyPositionQueryResponseSuccess>(
    "/emergency/position/query",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEmergencyPositionUpdateOption = PositionUpdatedReqDTO;

/** @description response type for apiOperationPostEmergencyPositionUpdate */
interface ApiOperationPostEmergencyPositionUpdateResponse {
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

type ApiOperationPostEmergencyPositionUpdateResponseSuccess =
  ApiOperationPostEmergencyPositionUpdateResponse[200];
/**
 * @description
 *   更新岗位
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEmergencyPositionUpdate = (
  option?: ApiOperationPostEmergencyPositionUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEmergencyPositionUpdateResponseSuccess>(
    "/emergency/position/update",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEnterpriseAddWhiteListConfigOption =
  EnterpriseWhiteListDto;

/** @description response type for apiOperationPostEnterpriseAddWhiteListConfig */
interface ApiOperationPostEnterpriseAddWhiteListConfigResponse {
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

type ApiOperationPostEnterpriseAddWhiteListConfigResponseSuccess =
  ApiOperationPostEnterpriseAddWhiteListConfigResponse[200];
/**
 * @description
 *   添加企业白名单配置接口
 * @tags 企业白名单配置相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEnterpriseAddWhiteListConfig = (
  option?: ApiOperationPostEnterpriseAddWhiteListConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEnterpriseAddWhiteListConfigResponseSuccess>(
    "/enterprise/addWhiteList/config",
    { method: "post", body: option },
    config
  );

type ApiOperationGetEnterpriseQueryAllWhiteListConfigPageNumPageSizeCpmoCopOption =
  {
    /**
    @description
      cpmoCop */
    cpmoCop: string;
    /**
    @description
      pageNum
    @format int32 */
    pageNum: number;
    /**
    @description
      pageSize
    @format int32 */
    pageSize: number;
  };

/** @description response type for apiOperationGetEnterpriseQueryAllWhiteListConfigPageNumPageSizeCpmoCop */
interface ApiOperationGetEnterpriseQueryAllWhiteListConfigPageNumPageSizeCpmoCopResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListEnterpriseWhiteListDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetEnterpriseQueryAllWhiteListConfigPageNumPageSizeCpmoCopResponseSuccess =
  ApiOperationGetEnterpriseQueryAllWhiteListConfigPageNumPageSizeCpmoCopResponse[200];
/**
 * @description
 *   查询所有企业白名单配置接口
 * @tags 企业白名单配置相关API
 * @produces *
 */
export const apiOperationGetEnterpriseQueryAllWhiteListConfigPageNumPageSizeCpmoCop =
  (
    option?: ApiOperationGetEnterpriseQueryAllWhiteListConfigPageNumPageSizeCpmoCopOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetEnterpriseQueryAllWhiteListConfigPageNumPageSizeCpmoCopResponseSuccess>(
      "/enterprise/queryAllWhiteList/config/:pageNum/:pageSize/:cpmoCop",
      { method: "get", path: option },
      config
    );

type ApiOperationPostEnterpriseUpdateWhiteListInfoOption =
  EnterpriseWhiteListDto;

/** @description response type for apiOperationPostEnterpriseUpdateWhiteListInfo */
interface ApiOperationPostEnterpriseUpdateWhiteListInfoResponse {
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

type ApiOperationPostEnterpriseUpdateWhiteListInfoResponseSuccess =
  ApiOperationPostEnterpriseUpdateWhiteListInfoResponse[200];
/**
 * @description
 *   编辑企业白名单配置信息接口
 * @tags 企业白名单配置相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEnterpriseUpdateWhiteListInfo = (
  option?: ApiOperationPostEnterpriseUpdateWhiteListInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEnterpriseUpdateWhiteListInfoResponseSuccess>(
    "/enterprise/update/whiteListInfo",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEnterpriseUpdateIsConfigWhiteListOption =
  EnterpriseWhiteListDto;

/** @description response type for apiOperationPostEnterpriseUpdateIsConfigWhiteList */
interface ApiOperationPostEnterpriseUpdateIsConfigWhiteListResponse {
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

type ApiOperationPostEnterpriseUpdateIsConfigWhiteListResponseSuccess =
  ApiOperationPostEnterpriseUpdateIsConfigWhiteListResponse[200];
/**
 * @description
 *   企业白名单配置开关接口
 * @tags 企业白名单配置相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEnterpriseUpdateIsConfigWhiteList = (
  option?: ApiOperationPostEnterpriseUpdateIsConfigWhiteListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEnterpriseUpdateIsConfigWhiteListResponseSuccess>(
    "/enterprise/updateIsConfig/whiteList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostEnterpriseV1FindAllCpmoCopByCompanyCodeCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationPostEnterpriseV1FindAllCpmoCopByCompanyCodeCpmoCop */
interface ApiOperationPostEnterpriseV1FindAllCpmoCopByCompanyCodeCpmoCopResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MMdOrganizationDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostEnterpriseV1FindAllCpmoCopByCompanyCodeCpmoCopResponseSuccess =
  ApiOperationPostEnterpriseV1FindAllCpmoCopByCompanyCodeCpmoCopResponse[200];
/**
 * @description
 *   findAllCpmoCopByCompanyCodeV2
 * @tags 企业编码通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEnterpriseV1FindAllCpmoCopByCompanyCodeCpmoCop = (
  option?: ApiOperationPostEnterpriseV1FindAllCpmoCopByCompanyCodeCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEnterpriseV1FindAllCpmoCopByCompanyCodeCpmoCopResponseSuccess>(
    "/enterprise/v1/findAllCpmoCopByCompanyCode/:cpmoCop",
    { method: "post", path: option },
    config
  );

type ApiOperationPostEnterpriseV1GetCpmoCopTreeOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationPostEnterpriseV1GetCpmoCopTree */
interface ApiOperationPostEnterpriseV1GetCpmoCopTreeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CpmoCopTreeDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostEnterpriseV1GetCpmoCopTreeResponseSuccess =
  ApiOperationPostEnterpriseV1GetCpmoCopTreeResponse[200];
/**
 * @description
 *   获取实体树形结构  compCop : 可选(不传 表示查询全部实体的树形结构)
 * @tags 企业编码通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEnterpriseV1GetCpmoCopTree = (
  option?: ApiOperationPostEnterpriseV1GetCpmoCopTreeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEnterpriseV1GetCpmoCopTreeResponseSuccess>(
    "/enterprise/v1/getCpmoCopTree",
    { method: "post", query: option },
    config
  );

type ApiOperationPostEnterpriseV1GetOrganCodeTreeByCompCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationPostEnterpriseV1GetOrganCodeTreeByCompCop */
interface ApiOperationPostEnterpriseV1GetOrganCodeTreeByCompCopResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CpmoCopTreeDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostEnterpriseV1GetOrganCodeTreeByCompCopResponseSuccess =
  ApiOperationPostEnterpriseV1GetOrganCodeTreeByCompCopResponse[200];
/**
 * @description
 *   获取实体下公司下网格树形结构  compCop : 实体编码
 * @tags 企业编码通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostEnterpriseV1GetOrganCodeTreeByCompCop = (
  option?: ApiOperationPostEnterpriseV1GetOrganCodeTreeByCompCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostEnterpriseV1GetOrganCodeTreeByCompCopResponseSuccess>(
    "/enterprise/v1/getOrganCodeTreeByCompCop",
    { method: "post", query: option },
    config
  );

type ApiOperationPostFaultDispatchOption = FaultDispatchInputDto;

/** @description response type for apiOperationPostFaultDispatch */
interface ApiOperationPostFaultDispatchResponse {
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

type ApiOperationPostFaultDispatchResponseSuccess =
  ApiOperationPostFaultDispatchResponse[200];
/**
 * @description
 *   处置
 * @tags 物联设备故障管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostFaultDispatch = (
  option?: ApiOperationPostFaultDispatchOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostFaultDispatchResponseSuccess>(
    "/fault/dispatch",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationGetFaultEqTypeList */
interface ApiOperationGetFaultEqTypeListResponse {
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

type ApiOperationGetFaultEqTypeListResponseSuccess =
  ApiOperationGetFaultEqTypeListResponse[200];
/**
 * @description
 *   设备类型统计
 * @tags 物联设备故障管理
 * @produces *
 */
export const apiOperationGetFaultEqTypeList = (config?: AxiosRequestConfig) =>
  requester<ApiOperationGetFaultEqTypeListResponseSuccess>(
    "/fault/eqTypeList",
    { method: "get" },
    config
  );

type ApiOperationPostFaultFaultDisposalOption = FaultDisposalInputDto;

/** @description response type for apiOperationPostFaultFaultDisposal */
interface ApiOperationPostFaultFaultDisposalResponse {
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

type ApiOperationPostFaultFaultDisposalResponseSuccess =
  ApiOperationPostFaultFaultDisposalResponse[200];
/**
 * @description
 *   工作台手动处置
 * @tags 物联设备故障管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostFaultFaultDisposal = (
  option?: ApiOperationPostFaultFaultDisposalOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostFaultFaultDisposalResponseSuccess>(
    "/fault/faultDisposal",
    { method: "post", body: option },
    config
  );

type ApiOperationGetFaultGetFaultDisposalProcessFaultIdOption = {
  /**
    @description
      faultId
    @format int64 */
  faultId: number;
};

/** @description response type for apiOperationGetFaultGetFaultDisposalProcessFaultId */
interface ApiOperationGetFaultGetFaultDisposalProcessFaultIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<FaultDisposalProcessOutputDTO>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetFaultGetFaultDisposalProcessFaultIdResponseSuccess =
  ApiOperationGetFaultGetFaultDisposalProcessFaultIdResponse[200];
/**
 * @description
 *   根据故障id查询故障处置进度
 * @tags 物联设备故障管理
 * @produces *
 */
export const apiOperationGetFaultGetFaultDisposalProcessFaultId = (
  option?: ApiOperationGetFaultGetFaultDisposalProcessFaultIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetFaultGetFaultDisposalProcessFaultIdResponseSuccess>(
    "/fault/getFaultDisposalProcess/:faultId",
    { method: "get", path: option },
    config
  );

type ApiOperationGetFaultGetFaultFeedbackInfoByFaultIdOption = {
  /**
    @description
      faultId
    @format int64 */
  faultId: number;
};

/** @description response type for apiOperationGetFaultGetFaultFeedbackInfoByFaultId */
interface ApiOperationGetFaultGetFaultFeedbackInfoByFaultIdResponse {
  /**
   * @description
   *   OK
   */
  200: FaultFeedbackInfoOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetFaultGetFaultFeedbackInfoByFaultIdResponseSuccess =
  ApiOperationGetFaultGetFaultFeedbackInfoByFaultIdResponse[200];
/**
 * @description
 *   根据故障id查询反馈信息
 * @tags 物联设备故障管理
 * @produces *
 */
export const apiOperationGetFaultGetFaultFeedbackInfoByFaultId = (
  option?: ApiOperationGetFaultGetFaultFeedbackInfoByFaultIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetFaultGetFaultFeedbackInfoByFaultIdResponseSuccess>(
    "/fault/getFaultFeedbackInfoByFaultId",
    { method: "get", query: option },
    config
  );

/** @description response type for apiOperationGetFaultProblemTypeList */
interface ApiOperationGetFaultProblemTypeListResponse {
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

type ApiOperationGetFaultProblemTypeListResponseSuccess =
  ApiOperationGetFaultProblemTypeListResponse[200];
/**
 * @description
 *   故障问题统计
 * @tags 物联设备故障管理
 * @produces *
 */
export const apiOperationGetFaultProblemTypeList = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetFaultProblemTypeListResponseSuccess>(
    "/fault/problemTypeList",
    { method: "get" },
    config
  );

type ApiOperationPostFaultQueryFaultListOption = FaultInputDto;

/** @description response type for apiOperationPostFaultQueryFaultList */
interface ApiOperationPostFaultQueryFaultListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListFaultOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostFaultQueryFaultListResponseSuccess =
  ApiOperationPostFaultQueryFaultListResponse[200];
/**
 * @description
 *   查询故障列表
 * @tags 物联设备故障管理
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostFaultQueryFaultList = (
  option?: ApiOperationPostFaultQueryFaultListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostFaultQueryFaultListResponseSuccess>(
    "/fault/queryFaultList",
    { method: "post", body: option },
    config
  );

type ApiOperationGetFaultDispatchGetFaultDispatchSettingsEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetFaultDispatchGetFaultDispatchSettingsEcode */
interface ApiOperationGetFaultDispatchGetFaultDispatchSettingsEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: FaultDispatchSettingsDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetFaultDispatchGetFaultDispatchSettingsEcodeResponseSuccess =
  ApiOperationGetFaultDispatchGetFaultDispatchSettingsEcodeResponse[200];
/**
 * @description
 *   根据企业编码查询自动处置配置信息
 * @tags 物联设备故障处置信息
 * @produces *
 */
export const apiOperationGetFaultDispatchGetFaultDispatchSettingsEcode = (
  option?: ApiOperationGetFaultDispatchGetFaultDispatchSettingsEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetFaultDispatchGetFaultDispatchSettingsEcodeResponseSuccess>(
    "/faultDispatch/getFaultDispatchSettings/:ecode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostFaultDispatchSaveFaultDispatchSettingsOption =
  FaultDispatchSettingsSaveDto;

/** @description response type for apiOperationPostFaultDispatchSaveFaultDispatchSettings */
interface ApiOperationPostFaultDispatchSaveFaultDispatchSettingsResponse {
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

type ApiOperationPostFaultDispatchSaveFaultDispatchSettingsResponseSuccess =
  ApiOperationPostFaultDispatchSaveFaultDispatchSettingsResponse[200];
/**
 * @description
 *   保存自动处置配置信息
 * @tags 物联设备故障处置信息
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostFaultDispatchSaveFaultDispatchSettings = (
  option?: ApiOperationPostFaultDispatchSaveFaultDispatchSettingsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostFaultDispatchSaveFaultDispatchSettingsResponseSuccess>(
    "/faultDispatch/saveFaultDispatchSettings",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationPostGetAllDeptList */
interface ApiOperationPostGetAllDeptListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WorkbenchTitlesOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostGetAllDeptListResponseSuccess =
  ApiOperationPostGetAllDeptListResponse[200];
/**
 * @description
 *   查询所有部门的信息接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostGetAllDeptList = (config?: AxiosRequestConfig) =>
  requester<ApiOperationPostGetAllDeptListResponseSuccess>(
    "/get/allDept/list",
    { method: "post" },
    config
  );

/** @description response type for apiOperationPostGetAllOrganizationList */
interface ApiOperationPostGetAllOrganizationListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MMdOrganizationDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostGetAllOrganizationListResponseSuccess =
  ApiOperationPostGetAllOrganizationListResponse[200];
/**
 * @description
 *   获取所有企业实体接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostGetAllOrganizationList = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostGetAllOrganizationListResponseSuccess>(
    "/get/allOrganization/list",
    { method: "post" },
    config
  );

/** @description response type for apiOperationPostGetAllOrganizationTitleList */
interface ApiOperationPostGetAllOrganizationTitleListResponse {
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

type ApiOperationPostGetAllOrganizationTitleListResponseSuccess =
  ApiOperationPostGetAllOrganizationTitleListResponse[200];
/**
 * @description
 *   获取所有地区下所有实体接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostGetAllOrganizationTitleList = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostGetAllOrganizationTitleListResponseSuccess>(
    "/get/allOrganizationTitle/list",
    { method: "post" },
    config
  );

type ApiOperationPostGetAllWorkbenchConfigOption = WorkbenchTitleInputDto;

/** @description response type for apiOperationPostGetAllWorkbenchConfig */
interface ApiOperationPostGetAllWorkbenchConfigResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListWorkbenchTitleOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostGetAllWorkbenchConfigResponseSuccess =
  ApiOperationPostGetAllWorkbenchConfigResponse[200];
/**
 * @description
 *   获取所有企业实体配置情况接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostGetAllWorkbenchConfig = (
  option?: ApiOperationPostGetAllWorkbenchConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostGetAllWorkbenchConfigResponseSuccess>(
    "/get/allWorkbench/config",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationPostGetAllWorkbenchList */
interface ApiOperationPostGetAllWorkbenchListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WorkbenchTitleOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostGetAllWorkbenchListResponseSuccess =
  ApiOperationPostGetAllWorkbenchListResponse[200];
/**
 * @description
 *   获取所有企业实体标题信息接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostGetAllWorkbenchList = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostGetAllWorkbenchListResponseSuccess>(
    "/get/allWorkbench/list",
    { method: "post" },
    config
  );

type ApiOperationGetGetChildrenCompanyCodeEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetGetChildrenCompanyCodeEcode */
interface ApiOperationGetGetChildrenCompanyCodeEcodeResponse {
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

type ApiOperationGetGetChildrenCompanyCodeEcodeResponseSuccess =
  ApiOperationGetGetChildrenCompanyCodeEcodeResponse[200];
/**
 * @description
 *   获取总公司下的所有子公司编码
 * @tags 企业实体配置模块相关API
 * @produces *
 */
export const apiOperationGetGetChildrenCompanyCodeEcode = (
  option?: ApiOperationGetGetChildrenCompanyCodeEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetGetChildrenCompanyCodeEcodeResponseSuccess>(
    "/get/children/companyCode/:ecode",
    { method: "get", path: option },
    config
  );

/** @description response type for apiOperationPostGetDeskPhoneInfo */
interface ApiOperationPostGetDeskPhoneInfoResponse {
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

type ApiOperationPostGetDeskPhoneInfoResponseSuccess =
  ApiOperationPostGetDeskPhoneInfoResponse[200];
/**
 * @description
 *   获取三方坐席电话信息接口
 * @tags 外呼配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostGetDeskPhoneInfo = (config?: AxiosRequestConfig) =>
  requester<ApiOperationPostGetDeskPhoneInfoResponseSuccess>(
    "/get/deskPhoneInfo",
    { method: "post" },
    config
  );

type ApiOperationGetGetParentCompanyCodeEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetGetParentCompanyCodeEcode */
interface ApiOperationGetGetParentCompanyCodeEcodeResponse {
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

type ApiOperationGetGetParentCompanyCodeEcodeResponseSuccess =
  ApiOperationGetGetParentCompanyCodeEcodeResponse[200];
/**
 * @description
 *   获取总公司编码
 * @tags 企业实体配置模块相关API
 * @produces *
 */
export const apiOperationGetGetParentCompanyCodeEcode = (
  option?: ApiOperationGetGetParentCompanyCodeEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetGetParentCompanyCodeEcodeResponseSuccess>(
    "/get/parent/companyCode/:ecode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostGetWorkbenchSceneConfigOption = WorkbenchTitleInputDto;

/** @description response type for apiOperationPostGetWorkbenchSceneConfig */
interface ApiOperationPostGetWorkbenchSceneConfigResponse {
  /**
   * @description
   *   OK
   */
  200: WorkbenchTitleOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostGetWorkbenchSceneConfigResponseSuccess =
  ApiOperationPostGetWorkbenchSceneConfigResponse[200];
/**
 * @description
 *   获取场景配置情况接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostGetWorkbenchSceneConfig = (
  option?: ApiOperationPostGetWorkbenchSceneConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostGetWorkbenchSceneConfigResponseSuccess>(
    "/get/workbench/sceneConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostHelpCenterAddQuestionInfoOption = {
  /**
    @description
      file */
  file: string;
  founder: string;
  /**
    @format int32 */
  id: number;
  images: Array<File>;
  isCommonQuest: string;
  itCode: string;
  pictureUrl: Array<string>;
  questionDesc: string;
  questionNumber: string;
  questionTitle: string;
  questionType: string;
  video: string;
};

/** @description response type for apiOperationPostHelpCenterAddQuestionInfo */
interface ApiOperationPostHelpCenterAddQuestionInfoResponse {
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

type ApiOperationPostHelpCenterAddQuestionInfoResponseSuccess =
  ApiOperationPostHelpCenterAddQuestionInfoResponse[200];
/**
 * @description
 *   创建（提交）问题接口
 * @tags 帮助中心模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostHelpCenterAddQuestionInfo = (
  option?: ApiOperationPostHelpCenterAddQuestionInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostHelpCenterAddQuestionInfoResponseSuccess>(
    "/helpCenter/add/questionInfo",
    { method: "post", query: option },
    config
  );

type ApiOperationPostHelpCenterAddQuestionTypeOption =
  Array<HelpCenterQuestionTypeDto>;

/** @description response type for apiOperationPostHelpCenterAddQuestionType */
interface ApiOperationPostHelpCenterAddQuestionTypeResponse {
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

type ApiOperationPostHelpCenterAddQuestionTypeResponseSuccess =
  ApiOperationPostHelpCenterAddQuestionTypeResponse[200];
/**
 * @description
 *   添加问题类型接口
 * @tags 帮助中心-问题类型编辑相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostHelpCenterAddQuestionType = (
  option?: ApiOperationPostHelpCenterAddQuestionTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostHelpCenterAddQuestionTypeResponseSuccess>(
    "/helpCenter/add/questionType",
    { method: "post", body: option },
    config
  );

type ApiOperationGetHelpCenterDeleteQuestionInfoIdOption = {
  /**
    @description
      id
    @format int32 */
  id: number;
};

/** @description response type for apiOperationGetHelpCenterDeleteQuestionInfoId */
interface ApiOperationGetHelpCenterDeleteQuestionInfoIdResponse {
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

type ApiOperationGetHelpCenterDeleteQuestionInfoIdResponseSuccess =
  ApiOperationGetHelpCenterDeleteQuestionInfoIdResponse[200];
/**
 * @description
 *   删除问题内容接口
 * @tags 帮助中心模块相关API
 * @produces *
 */
export const apiOperationGetHelpCenterDeleteQuestionInfoId = (
  option?: ApiOperationGetHelpCenterDeleteQuestionInfoIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetHelpCenterDeleteQuestionInfoIdResponseSuccess>(
    "/helpCenter/delete/questionInfo/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationGetHelpCenterDeleteQuestionTypeIdOption = {
  /**
    @description
      id
    @format int32 */
  id: number;
};

/** @description response type for apiOperationGetHelpCenterDeleteQuestionTypeId */
interface ApiOperationGetHelpCenterDeleteQuestionTypeIdResponse {
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

type ApiOperationGetHelpCenterDeleteQuestionTypeIdResponseSuccess =
  ApiOperationGetHelpCenterDeleteQuestionTypeIdResponse[200];
/**
 * @description
 *   删除问题类型接口
 * @tags 帮助中心-问题类型编辑相关API
 * @produces *
 */
export const apiOperationGetHelpCenterDeleteQuestionTypeId = (
  option?: ApiOperationGetHelpCenterDeleteQuestionTypeIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetHelpCenterDeleteQuestionTypeIdResponseSuccess>(
    "/helpCenter/delete/questionType/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostHelpCenterGetAllQuestionRecordsOption = HelpCenterInDto;

/** @description response type for apiOperationPostHelpCenterGetAllQuestionRecords */
interface ApiOperationPostHelpCenterGetAllQuestionRecordsResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListHelpCenterDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostHelpCenterGetAllQuestionRecordsResponseSuccess =
  ApiOperationPostHelpCenterGetAllQuestionRecordsResponse[200];
/**
 * @description
 *   用户端查询所有问题记录接口
 * @tags 帮助中心模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostHelpCenterGetAllQuestionRecords = (
  option?: ApiOperationPostHelpCenterGetAllQuestionRecordsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostHelpCenterGetAllQuestionRecordsResponseSuccess>(
    "/helpCenter/get/allQuestion/records",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationPostHelpCenterGetAlltype */
interface ApiOperationPostHelpCenterGetAlltypeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<HelpCenterQuestionTypeDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostHelpCenterGetAlltypeResponseSuccess =
  ApiOperationPostHelpCenterGetAlltypeResponse[200];
/**
 * @description
 *   查询所有问题类型接口
 * @tags 帮助中心-问题类型编辑相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostHelpCenterGetAlltype = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostHelpCenterGetAlltypeResponseSuccess>(
    "/helpCenter/get/alltype",
    { method: "post" },
    config
  );

type ApiOperationPostHelpCenterGetQuestionRecordsOption = HelpCenterInDto;

/** @description response type for apiOperationPostHelpCenterGetQuestionRecords */
interface ApiOperationPostHelpCenterGetQuestionRecordsResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListHelpCenterDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostHelpCenterGetQuestionRecordsResponseSuccess =
  ApiOperationPostHelpCenterGetQuestionRecordsResponse[200];
/**
 * @description
 *   后台查询问题记录接口
 * @tags 帮助中心模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostHelpCenterGetQuestionRecords = (
  option?: ApiOperationPostHelpCenterGetQuestionRecordsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostHelpCenterGetQuestionRecordsResponseSuccess>(
    "/helpCenter/get/question/records",
    { method: "post", body: option },
    config
  );

type ApiOperationGetHelpCenterQueryQuestionDetailsIdOption = {
  /**
    @description
      id
    @format int32 */
  id: number;
};

/** @description response type for apiOperationGetHelpCenterQueryQuestionDetailsId */
interface ApiOperationGetHelpCenterQueryQuestionDetailsIdResponse {
  /**
   * @description
   *   OK
   */
  200: HelpCenterDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetHelpCenterQueryQuestionDetailsIdResponseSuccess =
  ApiOperationGetHelpCenterQueryQuestionDetailsIdResponse[200];
/**
 * @description
 *   问题详情查询接口
 * @tags 帮助中心模块相关API
 * @produces *
 */
export const apiOperationGetHelpCenterQueryQuestionDetailsId = (
  option?: ApiOperationGetHelpCenterQueryQuestionDetailsIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetHelpCenterQueryQuestionDetailsIdResponseSuccess>(
    "/helpCenter/query/questionDetails/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostHelpCenterUpdateQuestionRespondInfoOption =
  HelpCenterInRespondDto;

/** @description response type for apiOperationPostHelpCenterUpdateQuestionRespondInfo */
interface ApiOperationPostHelpCenterUpdateQuestionRespondInfoResponse {
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

type ApiOperationPostHelpCenterUpdateQuestionRespondInfoResponseSuccess =
  ApiOperationPostHelpCenterUpdateQuestionRespondInfoResponse[200];
/**
 * @description
 *   反馈问题内容接口
 * @tags 帮助中心模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostHelpCenterUpdateQuestionRespondInfo = (
  option?: ApiOperationPostHelpCenterUpdateQuestionRespondInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostHelpCenterUpdateQuestionRespondInfoResponseSuccess>(
    "/helpCenter/update/question/respondInfo",
    { method: "post", body: option },
    config
  );

type ApiOperationPostHelpCenterUpdateQuestionInfoOption = {
  /**
    @description
      file */
  file: string;
  founder: string;
  /**
    @format int32 */
  id: number;
  images: Array<File>;
  isCommonQuest: string;
  itCode: string;
  pictureUrl: Array<string>;
  questionDesc: string;
  questionNumber: string;
  questionTitle: string;
  questionType: string;
  video: string;
};

/** @description response type for apiOperationPostHelpCenterUpdateQuestionInfo */
interface ApiOperationPostHelpCenterUpdateQuestionInfoResponse {
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

type ApiOperationPostHelpCenterUpdateQuestionInfoResponseSuccess =
  ApiOperationPostHelpCenterUpdateQuestionInfoResponse[200];
/**
 * @description
 *   编辑问题内容接口
 * @tags 帮助中心模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostHelpCenterUpdateQuestionInfo = (
  option?: ApiOperationPostHelpCenterUpdateQuestionInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostHelpCenterUpdateQuestionInfoResponseSuccess>(
    "/helpCenter/update/questionInfo",
    { method: "post", query: option },
    config
  );

type ApiOperationPostHelpCenterUpdateQuestionTypeOption =
  HelpCenterQuestionTypeDto;

/** @description response type for apiOperationPostHelpCenterUpdateQuestionType */
interface ApiOperationPostHelpCenterUpdateQuestionTypeResponse {
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

type ApiOperationPostHelpCenterUpdateQuestionTypeResponseSuccess =
  ApiOperationPostHelpCenterUpdateQuestionTypeResponse[200];
/**
 * @description
 *   更新问题类型接口
 * @tags 帮助中心-问题类型编辑相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostHelpCenterUpdateQuestionType = (
  option?: ApiOperationPostHelpCenterUpdateQuestionTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostHelpCenterUpdateQuestionTypeResponseSuccess>(
    "/helpCenter/update/questionType",
    { method: "post", body: option },
    config
  );

type ApiOperationPostHkApiEventServiceV1EventSubscriptionByEventTypesOption =
  SubScribeEventFeignVo;

/** @description response type for apiOperationPostHkApiEventServiceV1EventSubscriptionByEventTypes */
interface ApiOperationPostHkApiEventServiceV1EventSubscriptionByEventTypesResponse {
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

type ApiOperationPostHkApiEventServiceV1EventSubscriptionByEventTypesResponseSuccess =
  ApiOperationPostHkApiEventServiceV1EventSubscriptionByEventTypesResponse[200];
/**
 * @description
 *   eventSubscriptionByEventTypes
 * @tags $-proxy-363
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostHkApiEventServiceV1EventSubscriptionByEventTypes =
  (
    option?: ApiOperationPostHkApiEventServiceV1EventSubscriptionByEventTypesOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationPostHkApiEventServiceV1EventSubscriptionByEventTypesResponseSuccess>(
      "/hk/api/eventService/v1/eventSubscriptionByEventTypes",
      { method: "post", body: option },
      config
    );

/** @description request parameter type for apiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCop */
interface ApiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCopOption {
  /**
   * @description
   *   cpmoCop
   */
  path: {
    /**
        @description
          cpmoCop */
    cpmoCop: string;
  };
}

/** @description request parameter type for apiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCop */
interface ApiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCopOption {
  /**
   * @description
   *   param
   */
  query: {
    /**
        @description
          param */
    param: string;
  };
}

/** @description response type for apiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCop */
interface ApiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCopResponse {
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

type ApiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCopResponseSuccess =
  ApiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCopResponse[200];
/**
 * @description
 *   getCameraCode
 * @tags $-proxy-363
 * @produces *
 */
export const apiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCop = (
  option: ApiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetHkApiResourceV1CamerasIndexCodeCpmoCopResponseSuccess>(
    "/hk/api/resource/v1/cameras/indexCode/:cpmoCop",
    { method: "get", ...option },
    config
  );

/** @description request parameter type for apiOperationGetHkApiVideoV1EventsPictureCpmoCop */
interface ApiOperationGetHkApiVideoV1EventsPictureCpmoCopOption {
  /**
   * @description
   *   cpmoCop
   */
  path: {
    /**
        @description
          cpmoCop */
    cpmoCop: string;
  };
}

/** @description request parameter type for apiOperationGetHkApiVideoV1EventsPictureCpmoCop */
interface ApiOperationGetHkApiVideoV1EventsPictureCpmoCopOption {
  /**
   * @description
   *   picUri
   */
  query: {
    /**
        @description
          picUri */
    picUri: string;
    /**
        @description
          svrIndexCode */
    svrIndexCode: string;
  };
}

/** @description response type for apiOperationGetHkApiVideoV1EventsPictureCpmoCop */
interface ApiOperationGetHkApiVideoV1EventsPictureCpmoCopResponse {
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

type ApiOperationGetHkApiVideoV1EventsPictureCpmoCopResponseSuccess =
  ApiOperationGetHkApiVideoV1EventsPictureCpmoCopResponse[200];
/**
 * @description
 *   getPicture
 * @tags $-proxy-363
 * @produces *
 */
export const apiOperationGetHkApiVideoV1EventsPictureCpmoCop = (
  option: ApiOperationGetHkApiVideoV1EventsPictureCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetHkApiVideoV1EventsPictureCpmoCopResponseSuccess>(
    "/hk/api/video/v1/events/picture/:cpmoCop",
    { method: "get", ...option },
    config
  );

type ApiOperationPostIComePushMessageOption = IComeInputDto;

/** @description response type for apiOperationPostIComePushMessage */
interface ApiOperationPostIComePushMessageResponse {
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

type ApiOperationPostIComePushMessageResponseSuccess =
  ApiOperationPostIComePushMessageResponse[200];
/**
 * @description
 *   推送消息
 * @tags iCome推送
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostIComePushMessage = (
  option?: ApiOperationPostIComePushMessageOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostIComePushMessageResponseSuccess>(
    "/iCome/pushMessage",
    { method: "post", body: option },
    config
  );

type ApiOperationPostIComePushOverdueMessageOption = OverdueIComeInputDto;

/** @description response type for apiOperationPostIComePushOverdueMessage */
interface ApiOperationPostIComePushOverdueMessageResponse {
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

type ApiOperationPostIComePushOverdueMessageResponseSuccess =
  ApiOperationPostIComePushOverdueMessageResponse[200];
/**
 * @description
 *   反馈超期推送消息
 * @tags iCome推送
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostIComePushOverdueMessage = (
  option?: ApiOperationPostIComePushOverdueMessageOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostIComePushOverdueMessageResponseSuccess>(
    "/iCome/pushOverdueMessage",
    { method: "post", body: option },
    config
  );

type ApiOperationPostIComePushUnqualifiedEvaluationMessageOption =
  UnqualifiedEvaluationInputDto;

/** @description response type for apiOperationPostIComePushUnqualifiedEvaluationMessage */
interface ApiOperationPostIComePushUnqualifiedEvaluationMessageResponse {
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

type ApiOperationPostIComePushUnqualifiedEvaluationMessageResponseSuccess =
  ApiOperationPostIComePushUnqualifiedEvaluationMessageResponse[200];
/**
 * @description
 *   常规监察/危险作业评价不合格推送消息
 * @tags iCome推送
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostIComePushUnqualifiedEvaluationMessage = (
  option?: ApiOperationPostIComePushUnqualifiedEvaluationMessageOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostIComePushUnqualifiedEvaluationMessageResponseSuccess>(
    "/iCome/pushUnqualifiedEvaluationMessage",
    { method: "post", body: option },
    config
  );

type ApiOperationPostIComePushWeeklyEvaluationMessageOption =
  WeeklyEvaluationInputDto;

/** @description response type for apiOperationPostIComePushWeeklyEvaluationMessage */
interface ApiOperationPostIComePushWeeklyEvaluationMessageResponse {
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

type ApiOperationPostIComePushWeeklyEvaluationMessageResponseSuccess =
  ApiOperationPostIComePushWeeklyEvaluationMessageResponse[200];
/**
 * @description
 *   常规监察/危险作业周评推送消息
 * @tags iCome推送
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostIComePushWeeklyEvaluationMessage = (
  option?: ApiOperationPostIComePushWeeklyEvaluationMessageOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostIComePushWeeklyEvaluationMessageResponseSuccess>(
    "/iCome/pushWeeklyEvaluationMessage",
    { method: "post", body: option },
    config
  );

type ApiOperationGetIndoorAlertorOfflineConfigGetByMultipleConfigIdOption = {
  /**
    @description
      multipleConfigId
    @format int64 */
  multipleConfigId: number;
};

/** @description response type for apiOperationGetIndoorAlertorOfflineConfigGetByMultipleConfigId */
interface ApiOperationGetIndoorAlertorOfflineConfigGetByMultipleConfigIdResponse {
  /**
   * @description
   *   OK
   */
  200: IndoorAlertorOfflineConfigDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetIndoorAlertorOfflineConfigGetByMultipleConfigIdResponseSuccess =
  ApiOperationGetIndoorAlertorOfflineConfigGetByMultipleConfigIdResponse[200];
/**
 * @description
 *   根据多元配置ID获取报警器离线配置
 *   获取报警器离线配置
 * @tags 户内报警器离线配置API
 * @produces *
 */
export const apiOperationGetIndoorAlertorOfflineConfigGetByMultipleConfigId = (
  option?: ApiOperationGetIndoorAlertorOfflineConfigGetByMultipleConfigIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetIndoorAlertorOfflineConfigGetByMultipleConfigIdResponseSuccess>(
    "/indoorAlertorOfflineConfig/getByMultipleConfigId",
    { method: "get", query: option },
    config
  );

type ApiOperationGetIndoorAlertorOfflineConfigGetConfigOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetIndoorAlertorOfflineConfigGetConfig */
interface ApiOperationGetIndoorAlertorOfflineConfigGetConfigResponse {
  /**
   * @description
   *   OK
   */
  200: IndoorAlertorOfflineConfigDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetIndoorAlertorOfflineConfigGetConfigResponseSuccess =
  ApiOperationGetIndoorAlertorOfflineConfigGetConfigResponse[200];
/**
 * @description
 *   根据管理实体编码获取报警器离线配置
 *   获取报警器离线配置
 * @tags 户内报警器离线配置API
 * @produces *
 */
export const apiOperationGetIndoorAlertorOfflineConfigGetConfig = (
  option?: ApiOperationGetIndoorAlertorOfflineConfigGetConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetIndoorAlertorOfflineConfigGetConfigResponseSuccess>(
    "/indoorAlertorOfflineConfig/getConfig",
    { method: "get", query: option },
    config
  );

type ApiOperationPostIndoorAlertorOfflineConfigSaveOption =
  IndoorAlertorOfflineConfigInputDto;

/** @description response type for apiOperationPostIndoorAlertorOfflineConfigSave */
interface ApiOperationPostIndoorAlertorOfflineConfigSaveResponse {
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

type ApiOperationPostIndoorAlertorOfflineConfigSaveResponseSuccess =
  ApiOperationPostIndoorAlertorOfflineConfigSaveResponse[200];
/**
 * @description
 *   保存
 *   保存
 * @tags 户内报警器离线配置API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostIndoorAlertorOfflineConfigSave = (
  option?: ApiOperationPostIndoorAlertorOfflineConfigSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostIndoorAlertorOfflineConfigSaveResponseSuccess>(
    "/indoorAlertorOfflineConfig/save",
    { method: "post", body: option },
    config
  );

type ApiOperationPostLngLatQueryLngLatToAddressOption = LngLatDTO;

/** @description response type for apiOperationPostLngLatQueryLngLatToAddress */
interface ApiOperationPostLngLatQueryLngLatToAddressResponse {
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

type ApiOperationPostLngLatQueryLngLatToAddressResponseSuccess =
  ApiOperationPostLngLatQueryLngLatToAddressResponse[200];
/**
 * @description
 *   经纬度坐标获取天地图地址详情 LngLatDTO中longitude,lantitude必传
 *   经纬度坐标获取天地图地址详情
 * @tags 获取天地图地址详情
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostLngLatQueryLngLatToAddress = (
  option?: ApiOperationPostLngLatQueryLngLatToAddressOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostLngLatQueryLngLatToAddressResponseSuccess>(
    "/lngLat/queryLngLatToAddress",
    { method: "post", body: option },
    config
  );

type ApiOperationGetLoginInfoGetLoginTimeItcodeOption = {
  /**
    @description
      itcode */
  itcode: string;
};

/** @description response type for apiOperationGetLoginInfoGetLoginTimeItcode */
interface ApiOperationGetLoginInfoGetLoginTimeItcodeResponse {
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

type ApiOperationGetLoginInfoGetLoginTimeItcodeResponseSuccess =
  ApiOperationGetLoginInfoGetLoginTimeItcodeResponse[200];
/**
 * @description
 *   根据Itcode获取最近一次登录时间
 * @tags 系统访问记录API
 * @produces *
 */
export const apiOperationGetLoginInfoGetLoginTimeItcode = (
  option?: ApiOperationGetLoginInfoGetLoginTimeItcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetLoginInfoGetLoginTimeItcodeResponseSuccess>(
    "/loginInfo/getLoginTime/:itcode",
    { method: "get", path: option },
    config
  );

type ApiOperationGetNetworkShowV1GetContractCompanyCodePageIndexPageSizeOption =
  {
    /**
    @description
      companyCode */
    companyCode: string;
    /**
    @description
      pageIndex
    @format int32 */
    pageIndex: number;
    /**
    @description
      pageSize
    @format int32 */
    pageSize: number;
  };

/** @description response type for apiOperationGetNetworkShowV1GetContractCompanyCodePageIndexPageSize */
interface ApiOperationGetNetworkShowV1GetContractCompanyCodePageIndexPageSizeResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListTgshInfoDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetNetworkShowV1GetContractCompanyCodePageIndexPageSizeResponseSuccess =
  ApiOperationGetNetworkShowV1GetContractCompanyCodePageIndexPageSizeResponse[200];
/**
 * @description
 *   合同账户列表
 * @tags 管网场景—示险
 * @produces *
 */
export const apiOperationGetNetworkShowV1GetContractCompanyCodePageIndexPageSize =
  (
    option?: ApiOperationGetNetworkShowV1GetContractCompanyCodePageIndexPageSizeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetNetworkShowV1GetContractCompanyCodePageIndexPageSizeResponseSuccess>(
      "/network/show/v1/getContract/:companyCode/:pageIndex/:pageSize",
      { method: "get", path: option },
      config
    );

type ApiOperationGetNetworkShowV1GetContractByGidGidOption = {
  /**
    @description
      gid */
  gid: string;
};

/** @description response type for apiOperationGetNetworkShowV1GetContractByGidGid */
interface ApiOperationGetNetworkShowV1GetContractByGidGidResponse {
  /**
   * @description
   *   OK
   */
  200: TgshInfoDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetNetworkShowV1GetContractByGidGidResponseSuccess =
  ApiOperationGetNetworkShowV1GetContractByGidGidResponse[200];
/**
 * @description
 *   合同账户列表确定按钮
 * @tags 管网场景—示险
 * @produces *
 */
export const apiOperationGetNetworkShowV1GetContractByGidGid = (
  option?: ApiOperationGetNetworkShowV1GetContractByGidGidOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetNetworkShowV1GetContractByGidGidResponseSuccess>(
    "/network/show/v1/getContractByGid/:gid",
    { method: "get", path: option },
    config
  );

type ApiOperationGetNetworkShowV1GetContractListStringPageIndexPageSizeOption =
  {
    /**
    @description
      pageIndex
    @format int32 */
    pageIndex: number;
    /**
    @description
      pageSize
    @format int32 */
    pageSize: number;
    /**
    @description
      string */
    string: string;
  };

/** @description response type for apiOperationGetNetworkShowV1GetContractListStringPageIndexPageSize */
interface ApiOperationGetNetworkShowV1GetContractListStringPageIndexPageSizeResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListTgshInfoDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetNetworkShowV1GetContractListStringPageIndexPageSizeResponseSuccess =
  ApiOperationGetNetworkShowV1GetContractListStringPageIndexPageSizeResponse[200];
/**
 * @description
 *   合同账户列表--查询
 * @tags 管网场景—示险
 * @produces *
 */
export const apiOperationGetNetworkShowV1GetContractListStringPageIndexPageSize =
  (
    option?: ApiOperationGetNetworkShowV1GetContractListStringPageIndexPageSizeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetNetworkShowV1GetContractListStringPageIndexPageSizeResponseSuccess>(
      "/network/show/v1/getContractList/:string/:pageIndex/:pageSize",
      { method: "get", path: option },
      config
    );

/** @description response type for apiOperationGetNetworkShowV1GetFaultType */
interface ApiOperationGetNetworkShowV1GetFaultTypeResponse {
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

type ApiOperationGetNetworkShowV1GetFaultTypeResponseSuccess =
  ApiOperationGetNetworkShowV1GetFaultTypeResponse[200];
/**
 * @description
 *   故障类型列表
 * @tags 管网场景—示险
 * @produces *
 */
export const apiOperationGetNetworkShowV1GetFaultType = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetNetworkShowV1GetFaultTypeResponseSuccess>(
    "/network/show/v1/getFaultType",
    { method: "get" },
    config
  );

type ApiOperationPostNetworkShowV1GetHiddenDangersOption = HiddenDangerDTO;

/** @description response type for apiOperationPostNetworkShowV1GetHiddenDangers */
interface ApiOperationPostNetworkShowV1GetHiddenDangersResponse {
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

type ApiOperationPostNetworkShowV1GetHiddenDangersResponseSuccess =
  ApiOperationPostNetworkShowV1GetHiddenDangersResponse[200];
/**
 * @description
 *   隐患类别列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostNetworkShowV1GetHiddenDangers = (
  option?: ApiOperationPostNetworkShowV1GetHiddenDangersOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostNetworkShowV1GetHiddenDangersResponseSuccess>(
    "/network/show/v1/getHiddenDangers",
    { method: "post", body: option },
    config
  );

type ApiOperationPostNetworkShowV1GetLevelOption = CompanyCodeDTO;

/** @description response type for apiOperationPostNetworkShowV1GetLevel */
interface ApiOperationPostNetworkShowV1GetLevelResponse {
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

type ApiOperationPostNetworkShowV1GetLevelResponseSuccess =
  ApiOperationPostNetworkShowV1GetLevelResponse[200];
/**
 * @description
 *   隐患等级列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostNetworkShowV1GetLevel = (
  option?: ApiOperationPostNetworkShowV1GetLevelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostNetworkShowV1GetLevelResponseSuccess>(
    "/network/show/v1/getLevel",
    { method: "post", body: option },
    config
  );

type ApiOperationPostNetworkShowV1GetMeasureOption = CompanyCodeDTO;

/** @description response type for apiOperationPostNetworkShowV1GetMeasure */
interface ApiOperationPostNetworkShowV1GetMeasureResponse {
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

type ApiOperationPostNetworkShowV1GetMeasureResponseSuccess =
  ApiOperationPostNetworkShowV1GetMeasureResponse[200];
/**
 * @description
 *   拟采取措施列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostNetworkShowV1GetMeasure = (
  option?: ApiOperationPostNetworkShowV1GetMeasureOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostNetworkShowV1GetMeasureResponseSuccess>(
    "/network/show/v1/getMeasure",
    { method: "post", body: option },
    config
  );

type ApiOperationGetNetworkShowV1GetNetworkShowDangerDetailIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetNetworkShowV1GetNetworkShowDangerDetailId */
interface ApiOperationGetNetworkShowV1GetNetworkShowDangerDetailIdResponse {
  /**
   * @description
   *   OK
   */
  200: NetworkbenchShowDangerDTO;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetNetworkShowV1GetNetworkShowDangerDetailIdResponseSuccess =
  ApiOperationGetNetworkShowV1GetNetworkShowDangerDetailIdResponse[200];
/**
 * @description
 *   示险详情与处置
 * @tags 管网场景—示险
 * @produces *
 */
export const apiOperationGetNetworkShowV1GetNetworkShowDangerDetailId = (
  option?: ApiOperationGetNetworkShowV1GetNetworkShowDangerDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetNetworkShowV1GetNetworkShowDangerDetailIdResponseSuccess>(
    "/network/show/v1/getNetworkShowDangerDetail/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetNetworkShowV1GetNetworkShowDangerSpaceDetailId */
interface ApiOperationGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdResponse {
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

type ApiOperationGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdResponseSuccess =
  ApiOperationGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdResponse[200];
/**
 * @description
 *   示险详情-有限空间作业手续缺失 riskCode:pn_risk_021
 * @tags 管网场景—示险
 * @produces *
 */
export const apiOperationGetNetworkShowV1GetNetworkShowDangerSpaceDetailId = (
  option?: ApiOperationGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetNetworkShowV1GetNetworkShowDangerSpaceDetailIdResponseSuccess>(
    "/network/show/v1/getNetworkShowDangerSpaceDetail/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostNetworkShowV1GetOrganizationOption = CompanyCodeDTO;

/** @description response type for apiOperationPostNetworkShowV1GetOrganization */
interface ApiOperationPostNetworkShowV1GetOrganizationResponse {
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

type ApiOperationPostNetworkShowV1GetOrganizationResponseSuccess =
  ApiOperationPostNetworkShowV1GetOrganizationResponse[200];
/**
 * @description
 *   所属组织列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostNetworkShowV1GetOrganization = (
  option?: ApiOperationPostNetworkShowV1GetOrganizationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostNetworkShowV1GetOrganizationResponseSuccess>(
    "/network/show/v1/getOrganization",
    { method: "post", body: option },
    config
  );

type ApiOperationPostNetworkShowV1GetProcessingOrganizationOption =
  CompanyCodeDTO;

/** @description response type for apiOperationPostNetworkShowV1GetProcessingOrganization */
interface ApiOperationPostNetworkShowV1GetProcessingOrganizationResponse {
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

type ApiOperationPostNetworkShowV1GetProcessingOrganizationResponseSuccess =
  ApiOperationPostNetworkShowV1GetProcessingOrganizationResponse[200];
/**
 * @description
 *   处理组织列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostNetworkShowV1GetProcessingOrganization = (
  option?: ApiOperationPostNetworkShowV1GetProcessingOrganizationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostNetworkShowV1GetProcessingOrganizationResponseSuccess>(
    "/network/show/v1/getProcessingOrganization",
    { method: "post", body: option },
    config
  );

type ApiOperationGetNetworkShowV1GetShowDangerWoOrganCompanyCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
};

/** @description response type for apiOperationGetNetworkShowV1GetShowDangerWoOrganCompanyCode */
interface ApiOperationGetNetworkShowV1GetShowDangerWoOrganCompanyCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<NetworkShowDangerWoOrganDTO>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetNetworkShowV1GetShowDangerWoOrganCompanyCodeResponseSuccess =
  ApiOperationGetNetworkShowV1GetShowDangerWoOrganCompanyCodeResponse[200];
/**
 * @description
 *   查询第三方施工不达标工单组织名称
 * @tags 管网场景—示险
 * @produces *
 */
export const apiOperationGetNetworkShowV1GetShowDangerWoOrganCompanyCode = (
  option?: ApiOperationGetNetworkShowV1GetShowDangerWoOrganCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetNetworkShowV1GetShowDangerWoOrganCompanyCodeResponseSuccess>(
    "/network/show/v1/getShowDangerWoOrgan/:companyCode",
    { method: "get", path: option },
    config
  );

type ApiOperationGetNetworkShowV1GetShowDangerWoUserCompanyCodeOrganCodeOption =
  {
    /**
    @description
      companyCode */
    companyCode: string;
    /**
    @description
      organCode */
    organCode: string;
  };

/** @description response type for apiOperationGetNetworkShowV1GetShowDangerWoUserCompanyCodeOrganCode */
interface ApiOperationGetNetworkShowV1GetShowDangerWoUserCompanyCodeOrganCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<NetworkShowDangerWoUserDTO>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetNetworkShowV1GetShowDangerWoUserCompanyCodeOrganCodeResponseSuccess =
  ApiOperationGetNetworkShowV1GetShowDangerWoUserCompanyCodeOrganCodeResponse[200];
/**
 * @description
 *   查询第三方施工不达标工单组织人员
 * @tags 管网场景—示险
 * @produces *
 */
export const apiOperationGetNetworkShowV1GetShowDangerWoUserCompanyCodeOrganCode =
  (
    option?: ApiOperationGetNetworkShowV1GetShowDangerWoUserCompanyCodeOrganCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetNetworkShowV1GetShowDangerWoUserCompanyCodeOrganCodeResponseSuccess>(
      "/network/show/v1/getShowDangerWoUser/:companyCode/:organCode",
      { method: "get", path: option },
      config
    );

type ApiOperationPostNetworkShowV1GetShowDangerWoUsersOption =
  NetworkShowDangerWoUserInputDTO;

/** @description response type for apiOperationPostNetworkShowV1GetShowDangerWoUsers */
interface ApiOperationPostNetworkShowV1GetShowDangerWoUsersResponse {
  /**
   * @description
   *   OK
   */
  200: Array<NetworkShowDangerWoUserDTO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostNetworkShowV1GetShowDangerWoUsersResponseSuccess =
  ApiOperationPostNetworkShowV1GetShowDangerWoUsersResponse[200];
/**
 * @description
 *   查询第三方施工不达标工单组织人员post
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostNetworkShowV1GetShowDangerWoUsers = (
  option?: ApiOperationPostNetworkShowV1GetShowDangerWoUsersOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostNetworkShowV1GetShowDangerWoUsersResponseSuccess>(
    "/network/show/v1/getShowDangerWoUsers",
    { method: "post", body: option },
    config
  );

type ApiOperationPostNetworkShowV1GetTypeExtendOption = CompanyCodeDTO;

/** @description response type for apiOperationPostNetworkShowV1GetTypeExtend */
interface ApiOperationPostNetworkShowV1GetTypeExtendResponse {
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

type ApiOperationPostNetworkShowV1GetTypeExtendResponseSuccess =
  ApiOperationPostNetworkShowV1GetTypeExtendResponse[200];
/**
 * @description
 *   类型列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostNetworkShowV1GetTypeExtend = (
  option?: ApiOperationPostNetworkShowV1GetTypeExtendOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostNetworkShowV1GetTypeExtendResponseSuccess>(
    "/network/show/v1/getTypeExtend",
    { method: "post", body: option },
    config
  );

type ApiOperationPostNetworkShowV1GetTypesOfHiddenDangersOption =
  CompanyCodeDTO;

/** @description response type for apiOperationPostNetworkShowV1GetTypesOfHiddenDangers */
interface ApiOperationPostNetworkShowV1GetTypesOfHiddenDangersResponse {
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

type ApiOperationPostNetworkShowV1GetTypesOfHiddenDangersResponseSuccess =
  ApiOperationPostNetworkShowV1GetTypesOfHiddenDangersResponse[200];
/**
 * @description
 *   隐患类型列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostNetworkShowV1GetTypesOfHiddenDangers = (
  option?: ApiOperationPostNetworkShowV1GetTypesOfHiddenDangersOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostNetworkShowV1GetTypesOfHiddenDangersResponseSuccess>(
    "/network/show/v1/getTypesOfHiddenDangers",
    { method: "post", body: option },
    config
  );

type ApiOperationPostNetworkShowV1GetWhetherDangerOption = CompanyCodeDTO;

/** @description response type for apiOperationPostNetworkShowV1GetWhetherDanger */
interface ApiOperationPostNetworkShowV1GetWhetherDangerResponse {
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

type ApiOperationPostNetworkShowV1GetWhetherDangerResponseSuccess =
  ApiOperationPostNetworkShowV1GetWhetherDangerResponse[200];
/**
 * @description
 *   是否故障列表
 * @tags 管网场景—示险
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostNetworkShowV1GetWhetherDanger = (
  option?: ApiOperationPostNetworkShowV1GetWhetherDangerOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostNetworkShowV1GetWhetherDangerResponseSuccess>(
    "/network/show/v1/getWhetherDanger",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationGetOperationStandLocationGet */
interface ApiOperationGetOperationStandLocationGetResponse {
  /**
   * @description
   *   OK
   */
  200: Array<StandLocationDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetOperationStandLocationGetResponseSuccess =
  ApiOperationGetOperationStandLocationGetResponse[200];
/**
 * @description
 *   所有站点位置
 * @tags 站点信息服务
 * @produces *
 */
export const apiOperationGetOperationStandLocationGet = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetOperationStandLocationGetResponseSuccess>(
    "/operation/stand/location/get",
    { method: "get" },
    config
  );

type ApiOperationPostOperationWorkbenchIotAlarmTypeAddOption = IotAlarmAddDto;

/** @description response type for apiOperationPostOperationWorkbenchIotAlarmTypeAdd */
interface ApiOperationPostOperationWorkbenchIotAlarmTypeAddResponse {
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

type ApiOperationPostOperationWorkbenchIotAlarmTypeAddResponseSuccess =
  ApiOperationPostOperationWorkbenchIotAlarmTypeAddResponse[200];
/**
 * @description
 *   物联告警类型添加接口
 * @tags 物联白名单
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOperationWorkbenchIotAlarmTypeAdd = (
  option?: ApiOperationPostOperationWorkbenchIotAlarmTypeAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOperationWorkbenchIotAlarmTypeAddResponseSuccess>(
    "/operation/workbench/iot/alarm/type/add",
    { method: "post", body: option },
    config
  );

type ApiOperationPostOperationWorkbenchIotAlarmTypeAddIotOption =
  IotAlarmAddDto;

/** @description response type for apiOperationPostOperationWorkbenchIotAlarmTypeAddIot */
interface ApiOperationPostOperationWorkbenchIotAlarmTypeAddIotResponse {
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

type ApiOperationPostOperationWorkbenchIotAlarmTypeAddIotResponseSuccess =
  ApiOperationPostOperationWorkbenchIotAlarmTypeAddIotResponse[200];
/**
 * @description
 *   物联告警类型添加接口，调用物联平台接口
 * @tags 物联白名单
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOperationWorkbenchIotAlarmTypeAddIot = (
  option?: ApiOperationPostOperationWorkbenchIotAlarmTypeAddIotOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOperationWorkbenchIotAlarmTypeAddIotResponseSuccess>(
    "/operation/workbench/iot/alarm/type/addIot",
    { method: "post", body: option },
    config
  );

type ApiOperationPostOperationWorkbenchIotAlarmTypeDeleteOption = {
  /**
    @description
      scene
    @format int32 */
  scene: number;
  /**
    @description
      systemCode
    @format int32 */
  systemCode: number;
  /**
    @description
      typeCode */
  typeCode: string;
};

/** @description response type for apiOperationPostOperationWorkbenchIotAlarmTypeDelete */
interface ApiOperationPostOperationWorkbenchIotAlarmTypeDeleteResponse {
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

type ApiOperationPostOperationWorkbenchIotAlarmTypeDeleteResponseSuccess =
  ApiOperationPostOperationWorkbenchIotAlarmTypeDeleteResponse[200];
/**
 * @description
 *   物联告警类型删除接口
 * @tags 物联白名单
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOperationWorkbenchIotAlarmTypeDelete = (
  option?: ApiOperationPostOperationWorkbenchIotAlarmTypeDeleteOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOperationWorkbenchIotAlarmTypeDeleteResponseSuccess>(
    "/operation/workbench/iot/alarm/type/delete",
    { method: "post", query: option },
    config
  );

type ApiOperationPostOperationWorkbenchIotAlarmTypeEditOption =
  IotAlarmUpdateDto;

/** @description response type for apiOperationPostOperationWorkbenchIotAlarmTypeEdit */
interface ApiOperationPostOperationWorkbenchIotAlarmTypeEditResponse {
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

type ApiOperationPostOperationWorkbenchIotAlarmTypeEditResponseSuccess =
  ApiOperationPostOperationWorkbenchIotAlarmTypeEditResponse[200];
/**
 * @description
 *   物联告警类型修改接口
 * @tags 物联白名单
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOperationWorkbenchIotAlarmTypeEdit = (
  option?: ApiOperationPostOperationWorkbenchIotAlarmTypeEditOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOperationWorkbenchIotAlarmTypeEditResponseSuccess>(
    "/operation/workbench/iot/alarm/type/edit",
    { method: "post", body: option },
    config
  );

type ApiOperationPostOperationWorkbenchIotAlarmTypesOption = IotAlarmQueryDto;

/** @description response type for apiOperationPostOperationWorkbenchIotAlarmTypes */
interface ApiOperationPostOperationWorkbenchIotAlarmTypesResponse {
  /**
   * @description
   *   OK
   */
  200: PageInfoIotAlarmOutPutDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostOperationWorkbenchIotAlarmTypesResponseSuccess =
  ApiOperationPostOperationWorkbenchIotAlarmTypesResponse[200];
/**
 * @description
 *   物联告警类型分页查询接口
 * @tags 物联白名单
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOperationWorkbenchIotAlarmTypes = (
  option?: ApiOperationPostOperationWorkbenchIotAlarmTypesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOperationWorkbenchIotAlarmTypesResponseSuccess>(
    "/operation/workbench/iot/alarm/types",
    { method: "post", body: option },
    config
  );

type ApiOperationPostOperationWorkbenchParentIotAlarmTypeAddOption = {
  /**
    @description
      parentTypeName */
  parentTypeName: string;
};

/** @description response type for apiOperationPostOperationWorkbenchParentIotAlarmTypeAdd */
interface ApiOperationPostOperationWorkbenchParentIotAlarmTypeAddResponse {
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

type ApiOperationPostOperationWorkbenchParentIotAlarmTypeAddResponseSuccess =
  ApiOperationPostOperationWorkbenchParentIotAlarmTypeAddResponse[200];
/**
 * @description
 *   物联告警大类添加接口
 * @tags 物联白名单
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOperationWorkbenchParentIotAlarmTypeAdd = (
  option?: ApiOperationPostOperationWorkbenchParentIotAlarmTypeAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOperationWorkbenchParentIotAlarmTypeAddResponseSuccess>(
    "/operation/workbench/parent/iot/alarm/type/add",
    { method: "post", query: option },
    config
  );

/** @description response type for apiOperationPostOperationWorkbenchParentIotAlarmTypes */
interface ApiOperationPostOperationWorkbenchParentIotAlarmTypesResponse {
  /**
   * @description
   *   OK
   */
  200: Array<IotAlarmParentOutDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostOperationWorkbenchParentIotAlarmTypesResponseSuccess =
  ApiOperationPostOperationWorkbenchParentIotAlarmTypesResponse[200];
/**
 * @description
 *   物联告警大类查询接口
 * @tags 物联白名单
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOperationWorkbenchParentIotAlarmTypes = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOperationWorkbenchParentIotAlarmTypesResponseSuccess>(
    "/operation/workbench/parent/iot/alarm/types",
    { method: "post" },
    config
  );

type ApiOperationGetOrderGetEvaluationCloseOrdersByWorkOrderWorkOrderIdOption =
  {
    /**
    @description
      工单Id */
    workOrderId: string;
  };

/** @description response type for apiOperationGetOrderGetEvaluationCloseOrdersByWorkOrderWorkOrderId */
interface ApiOperationGetOrderGetEvaluationCloseOrdersByWorkOrderWorkOrderIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EvaluationCloseOrderDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetOrderGetEvaluationCloseOrdersByWorkOrderWorkOrderIdResponseSuccess =
  ApiOperationGetOrderGetEvaluationCloseOrdersByWorkOrderWorkOrderIdResponse[200];
/**
 * @description
 *   查询场站告警详情
 * @tags 关单评价接口
 * @produces *
 */
export const apiOperationGetOrderGetEvaluationCloseOrdersByWorkOrderWorkOrderId =
  (
    option?: ApiOperationGetOrderGetEvaluationCloseOrdersByWorkOrderWorkOrderIdOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetOrderGetEvaluationCloseOrdersByWorkOrderWorkOrderIdResponseSuccess>(
      "/order/getEvaluationCloseOrdersByWorkOrder/:workOrderId",
      { method: "get", path: option },
      config
    );

type ApiOperationGetOrderGetOneEvaluationCloseOrderByWorkOrderIdWorkOrderIdEcodeTypeCodeOption =
  {
    /**
    @description
      ecode */
    ecode: string;
    /**
    @description
      typeCode */
    typeCode: string;
    /**
    @description
      workOrderId */
    workOrderId: string;
  };

/** @description response type for apiOperationGetOrderGetOneEvaluationCloseOrderByWorkOrderIdWorkOrderIdEcodeTypeCode */
interface ApiOperationGetOrderGetOneEvaluationCloseOrderByWorkOrderIdWorkOrderIdEcodeTypeCodeResponse {
  /**
   * @description
   *   OK
   */
  200: EvaluationCloseOrderDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetOrderGetOneEvaluationCloseOrderByWorkOrderIdWorkOrderIdEcodeTypeCodeResponseSuccess =
  ApiOperationGetOrderGetOneEvaluationCloseOrderByWorkOrderIdWorkOrderIdEcodeTypeCodeResponse[200];
/**
 * @description
 *   查询评价记录
 * @tags 关单评价接口
 * @produces *
 */
export const apiOperationGetOrderGetOneEvaluationCloseOrderByWorkOrderIdWorkOrderIdEcodeTypeCode =
  (
    option?: ApiOperationGetOrderGetOneEvaluationCloseOrderByWorkOrderIdWorkOrderIdEcodeTypeCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetOrderGetOneEvaluationCloseOrderByWorkOrderIdWorkOrderIdEcodeTypeCodeResponseSuccess>(
      "/order/getOneEvaluationCloseOrderByWorkOrderId/:workOrderId/:ecode/:typeCode",
      { method: "get", path: option },
      config
    );

type ApiOperationPostOrderListOption = EvaluationCloseOrderSearchPageDto;

/** @description response type for apiOperationPostOrderList */
interface ApiOperationPostOrderListResponse {
  /**
   * @description
   *   OK
   */
  200: EvaluationCloseOrderPageDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostOrderListResponseSuccess =
  ApiOperationPostOrderListResponse[200];
/**
 * @description
 *   工作台查询列表
 * @tags 关单评价接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOrderList = (
  option?: ApiOperationPostOrderListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOrderListResponseSuccess>(
    "/order/list",
    { method: "post", body: option },
    config
  );

type ApiOperationPutOrderSaveEvaluationCloseOrderOption =
  EvaluationCloseOrderDto;

/** @description response type for apiOperationPutOrderSaveEvaluationCloseOrder */
interface ApiOperationPutOrderSaveEvaluationCloseOrderResponse {
  /**
   * @description
   *   OK
   */
  200: Result;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPutOrderSaveEvaluationCloseOrderResponseSuccess =
  ApiOperationPutOrderSaveEvaluationCloseOrderResponse[200];
/**
 * @description
 *   保存评价记录
 * @tags 关单评价接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPutOrderSaveEvaluationCloseOrder = (
  option?: ApiOperationPutOrderSaveEvaluationCloseOrderOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPutOrderSaveEvaluationCloseOrderResponseSuccess>(
    "/order/saveEvaluationCloseOrder",
    { method: "put", body: option },
    config
  );

type ApiOperationPostOrganizationAddBasicConfigOption = WorkbenchTitleInputDto;

/** @description response type for apiOperationPostOrganizationAddBasicConfig */
interface ApiOperationPostOrganizationAddBasicConfigResponse {
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

type ApiOperationPostOrganizationAddBasicConfigResponseSuccess =
  ApiOperationPostOrganizationAddBasicConfigResponse[200];
/**
 * @description
 *   公司管理-新增
 * @tags 企业组织通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOrganizationAddBasicConfig = (
  option?: ApiOperationPostOrganizationAddBasicConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOrganizationAddBasicConfigResponseSuccess>(
    "/organization/addBasicConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostOrganizationCreateVirtualOrganizationOption =
  VirtualOrganizationCreateDto;

/** @description response type for apiOperationPostOrganizationCreateVirtualOrganization */
interface ApiOperationPostOrganizationCreateVirtualOrganizationResponse {
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

type ApiOperationPostOrganizationCreateVirtualOrganizationResponseSuccess =
  ApiOperationPostOrganizationCreateVirtualOrganizationResponse[200];
/**
 * @description
 *   新增虚拟管理实体
 * @tags 企业组织通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOrganizationCreateVirtualOrganization = (
  option?: ApiOperationPostOrganizationCreateVirtualOrganizationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOrganizationCreateVirtualOrganizationResponseSuccess>(
    "/organization/createVirtualOrganization",
    { method: "post", body: option },
    config
  );

type ApiOperationPostOrganizationDeleteVirtualOrganizationCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationPostOrganizationDeleteVirtualOrganizationCpmoCop */
interface ApiOperationPostOrganizationDeleteVirtualOrganizationCpmoCopResponse {
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

type ApiOperationPostOrganizationDeleteVirtualOrganizationCpmoCopResponseSuccess =
  ApiOperationPostOrganizationDeleteVirtualOrganizationCpmoCopResponse[200];
/**
 * @description
 *   根据管理实体编码删除虚拟管理实体
 * @tags 企业组织通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOrganizationDeleteVirtualOrganizationCpmoCop = (
  option?: ApiOperationPostOrganizationDeleteVirtualOrganizationCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOrganizationDeleteVirtualOrganizationCpmoCopResponseSuccess>(
    "/organization/deleteVirtualOrganization/:cpmoCop",
    { method: "post", path: option },
    config
  );

type ApiOperationGetOrganizationGetAbbreviationsOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationGetOrganizationGetAbbreviations */
interface ApiOperationGetOrganizationGetAbbreviationsResponse {
  /**
   * @description
   *   OK
   */
  200: WorkbenchTitleOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetOrganizationGetAbbreviationsResponseSuccess =
  ApiOperationGetOrganizationGetAbbreviationsResponse[200];
/**
 * @description
 *   根据管理实体编码获取实体所属地区
 * @tags 企业组织通用接口
 * @produces *
 */
export const apiOperationGetOrganizationGetAbbreviations = (
  option?: ApiOperationGetOrganizationGetAbbreviationsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetOrganizationGetAbbreviationsResponseSuccess>(
    "/organization/getAbbreviations",
    { method: "get", query: option },
    config
  );

type ApiOperationPostOrganizationGetByCompCodesOption = Array<string>;

/** @description response type for apiOperationPostOrganizationGetByCompCodes */
interface ApiOperationPostOrganizationGetByCompCodesResponse {
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

type ApiOperationPostOrganizationGetByCompCodesResponseSuccess =
  ApiOperationPostOrganizationGetByCompCodesResponse[200];
/**
 * @description
 *   根据公司编码获取实体编码
 * @tags 企业组织通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOrganizationGetByCompCodes = (
  option?: ApiOperationPostOrganizationGetByCompCodesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOrganizationGetByCompCodesResponseSuccess>(
    "/organization/getByCompCodes",
    { method: "post", body: option },
    config
  );

type ApiOperationGetOrganizationGetCpmoCopByCompanyCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
};

/** @description response type for apiOperationGetOrganizationGetCpmoCopByCompanyCode */
interface ApiOperationGetOrganizationGetCpmoCopByCompanyCodeResponse {
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

type ApiOperationGetOrganizationGetCpmoCopByCompanyCodeResponseSuccess =
  ApiOperationGetOrganizationGetCpmoCopByCompanyCodeResponse[200];
/**
 * @description
 *   根据公司编码查询实体编码
 * @tags 企业组织通用接口
 * @produces *
 */
export const apiOperationGetOrganizationGetCpmoCopByCompanyCode = (
  option?: ApiOperationGetOrganizationGetCpmoCopByCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetOrganizationGetCpmoCopByCompanyCodeResponseSuccess>(
    "/organization/getCpmoCopByCompanyCode",
    { method: "get", query: option },
    config
  );

type ApiOperationPostOrganizationIsVirtualEntityCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationPostOrganizationIsVirtualEntityCpmoCop */
interface ApiOperationPostOrganizationIsVirtualEntityCpmoCopResponse {
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

type ApiOperationPostOrganizationIsVirtualEntityCpmoCopResponseSuccess =
  ApiOperationPostOrganizationIsVirtualEntityCpmoCopResponse[200];
/**
 * @description
 *   判断是否是虚拟实体 0-真实实体，1-虚拟实体
 * @tags 企业组织通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOrganizationIsVirtualEntityCpmoCop = (
  option?: ApiOperationPostOrganizationIsVirtualEntityCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOrganizationIsVirtualEntityCpmoCopResponseSuccess>(
    "/organization/isVirtualEntity/:cpmoCop",
    { method: "post", path: option },
    config
  );

type ApiOperationPostOrganizationListAllOrganizationOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationPostOrganizationListAllOrganization */
interface ApiOperationPostOrganizationListAllOrganizationResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MMdOrganizationDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostOrganizationListAllOrganizationResponseSuccess =
  ApiOperationPostOrganizationListAllOrganizationResponse[200];
/**
 * @description
 *   获取公司列表
 * @tags 企业组织通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOrganizationListAllOrganization = (
  option?: ApiOperationPostOrganizationListAllOrganizationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOrganizationListAllOrganizationResponseSuccess>(
    "/organization/listAllOrganization",
    { method: "post", query: option },
    config
  );

type ApiOperationGetOrganizationListAllVirtualCompCodeCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationGetOrganizationListAllVirtualCompCodeCpmoCop */
interface ApiOperationGetOrganizationListAllVirtualCompCodeCpmoCopResponse {
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

type ApiOperationGetOrganizationListAllVirtualCompCodeCpmoCopResponseSuccess =
  ApiOperationGetOrganizationListAllVirtualCompCodeCpmoCopResponse[200];
/**
 * @description
 *   根据管理实体编码获取虚拟实体下所有公司
 * @tags 企业组织通用接口
 * @produces *
 */
export const apiOperationGetOrganizationListAllVirtualCompCodeCpmoCop = (
  option?: ApiOperationGetOrganizationListAllVirtualCompCodeCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetOrganizationListAllVirtualCompCodeCpmoCopResponseSuccess>(
    "/organization/listAllVirtualCompCode/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiOperationPostOrganizationListOrganizationCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationPostOrganizationListOrganizationCpmoCop */
interface ApiOperationPostOrganizationListOrganizationCpmoCopResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MMdOrganizationDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostOrganizationListOrganizationCpmoCopResponseSuccess =
  ApiOperationPostOrganizationListOrganizationCpmoCopResponse[200];
/**
 * @description
 *   根据管理实体编码查询管理实体
 * @tags 企业组织通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOrganizationListOrganizationCpmoCop = (
  option?: ApiOperationPostOrganizationListOrganizationCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOrganizationListOrganizationCpmoCopResponseSuccess>(
    "/organization/listOrganization/:cpmoCop",
    { method: "post", path: option },
    config
  );

type ApiOperationPostOrganizationUpdateBasicConfigOption =
  WorkbenchTitleInputDto;

/** @description response type for apiOperationPostOrganizationUpdateBasicConfig */
interface ApiOperationPostOrganizationUpdateBasicConfigResponse {
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

type ApiOperationPostOrganizationUpdateBasicConfigResponseSuccess =
  ApiOperationPostOrganizationUpdateBasicConfigResponse[200];
/**
 * @description
 *   公司管理-修改
 * @tags 企业组织通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOrganizationUpdateBasicConfig = (
  option?: ApiOperationPostOrganizationUpdateBasicConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOrganizationUpdateBasicConfigResponseSuccess>(
    "/organization/updateBasicConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostOrganizationUpdateVirtualOrganizationOption =
  VirtualOrganizationCreateDto;

/** @description response type for apiOperationPostOrganizationUpdateVirtualOrganization */
interface ApiOperationPostOrganizationUpdateVirtualOrganizationResponse {
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

type ApiOperationPostOrganizationUpdateVirtualOrganizationResponseSuccess =
  ApiOperationPostOrganizationUpdateVirtualOrganizationResponse[200];
/**
 * @description
 *   更新虚拟管理实体
 * @tags 企业组织通用接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostOrganizationUpdateVirtualOrganization = (
  option?: ApiOperationPostOrganizationUpdateVirtualOrganizationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostOrganizationUpdateVirtualOrganizationResponseSuccess>(
    "/organization/updateVirtualOrganization",
    { method: "post", body: option },
    config
  );

type ApiOperationPostPortraitGetCollectRewardViolationRecordOption =
  CollectRewardViolationRecordInputDto;

/** @description response type for apiOperationPostPortraitGetCollectRewardViolationRecord */
interface ApiOperationPostPortraitGetCollectRewardViolationRecordResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CollectRewardViolationRecordDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostPortraitGetCollectRewardViolationRecordResponseSuccess =
  ApiOperationPostPortraitGetCollectRewardViolationRecordResponse[200];
/**
 * @description
 *   违规或奖励查询详情接口
 * @tags 组织画像模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostPortraitGetCollectRewardViolationRecord = (
  option?: ApiOperationPostPortraitGetCollectRewardViolationRecordOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostPortraitGetCollectRewardViolationRecordResponseSuccess>(
    "/portrait/get/collectRewardViolation/record",
    { method: "post", body: option },
    config
  );

type ApiOperationPostPortraitGetOrganizationPortraitAlarmIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationPostPortraitGetOrganizationPortraitAlarmId */
interface ApiOperationPostPortraitGetOrganizationPortraitAlarmIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<OrganizationPortraitAlarmDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostPortraitGetOrganizationPortraitAlarmIdResponseSuccess =
  ApiOperationPostPortraitGetOrganizationPortraitAlarmIdResponse[200];
/**
 * @description
 *   告警或示险查询详情接口
 * @tags 组织画像模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostPortraitGetOrganizationPortraitAlarmId = (
  option?: ApiOperationPostPortraitGetOrganizationPortraitAlarmIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostPortraitGetOrganizationPortraitAlarmIdResponseSuccess>(
    "/portrait/get/organizationPortrait/alarm/:id",
    { method: "post", path: option },
    config
  );

type ApiOperationPostPortraitGetOrganizationPortraitCheckIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationPostPortraitGetOrganizationPortraitCheckId */
interface ApiOperationPostPortraitGetOrganizationPortraitCheckIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<OrganizationPortraitCheckDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostPortraitGetOrganizationPortraitCheckIdResponseSuccess =
  ApiOperationPostPortraitGetOrganizationPortraitCheckIdResponse[200];
/**
 * @description
 *   常规监察查询详情接口
 * @tags 组织画像模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostPortraitGetOrganizationPortraitCheckId = (
  option?: ApiOperationPostPortraitGetOrganizationPortraitCheckIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostPortraitGetOrganizationPortraitCheckIdResponseSuccess>(
    "/portrait/get/organizationPortrait/check/:id",
    { method: "post", path: option },
    config
  );

type ApiOperationPostPortraitGetOrganizationPortraitDangerIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationPostPortraitGetOrganizationPortraitDangerId */
interface ApiOperationPostPortraitGetOrganizationPortraitDangerIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<OrganizationPortraitDangerDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostPortraitGetOrganizationPortraitDangerIdResponseSuccess =
  ApiOperationPostPortraitGetOrganizationPortraitDangerIdResponse[200];
/**
 * @description
 *   危险作业查询详情接口
 * @tags 组织画像模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostPortraitGetOrganizationPortraitDangerId = (
  option?: ApiOperationPostPortraitGetOrganizationPortraitDangerIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostPortraitGetOrganizationPortraitDangerIdResponseSuccess>(
    "/portrait/get/organizationPortrait/danger/:id",
    { method: "post", path: option },
    config
  );

type ApiOperationPostPortraitGetOrganizationPortraitIndoorIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationPostPortraitGetOrganizationPortraitIndoorId */
interface ApiOperationPostPortraitGetOrganizationPortraitIndoorIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<OrganizationPortraitIndoorRescueDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostPortraitGetOrganizationPortraitIndoorIdResponseSuccess =
  ApiOperationPostPortraitGetOrganizationPortraitIndoorIdResponse[200];
/**
 * @description
 *   户内查询详情接口
 * @tags 组织画像模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostPortraitGetOrganizationPortraitIndoorId = (
  option?: ApiOperationPostPortraitGetOrganizationPortraitIndoorIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostPortraitGetOrganizationPortraitIndoorIdResponseSuccess>(
    "/portrait/get/organizationPortrait/indoor/:id",
    { method: "post", path: option },
    config
  );

type ApiOperationPostPortraitGetOrganizationPortraitListOption =
  OrganizationPortraitInputDto;

/** @description response type for apiOperationPostPortraitGetOrganizationPortraitList */
interface ApiOperationPostPortraitGetOrganizationPortraitListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListOrganizationPortraitDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostPortraitGetOrganizationPortraitListResponseSuccess =
  ApiOperationPostPortraitGetOrganizationPortraitListResponse[200];
/**
 * @description
 *   组织画像列表查询接口
 * @tags 组织画像模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostPortraitGetOrganizationPortraitList = (
  option?: ApiOperationPostPortraitGetOrganizationPortraitListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostPortraitGetOrganizationPortraitListResponseSuccess>(
    "/portrait/get/organizationPortrait/list",
    { method: "post", body: option },
    config
  );

type ApiOperationGetProblemFeedbackGetPriorityTrackingListOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetProblemFeedbackGetPriorityTrackingList */
interface ApiOperationGetProblemFeedbackGetPriorityTrackingListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PriorityTrackingDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetProblemFeedbackGetPriorityTrackingListResponseSuccess =
  ApiOperationGetProblemFeedbackGetPriorityTrackingListResponse[200];
/**
 * @description
 *   获取要事跟踪列表
 *   获取要事跟踪列表
 * @tags 问题反馈API
 * @produces *
 */
export const apiOperationGetProblemFeedbackGetPriorityTrackingList = (
  option?: ApiOperationGetProblemFeedbackGetPriorityTrackingListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetProblemFeedbackGetPriorityTrackingListResponseSuccess>(
    "/problemFeedback/getPriorityTrackingList",
    { method: "get", query: option },
    config
  );

type ApiOperationPutPushReportAddPushReportConfigOption = PushReportConfigDto;

/** @description response type for apiOperationPutPushReportAddPushReportConfig */
interface ApiOperationPutPushReportAddPushReportConfigResponse {
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

type ApiOperationPutPushReportAddPushReportConfigResponseSuccess =
  ApiOperationPutPushReportAddPushReportConfigResponse[200];
/**
 * @description
 *   icome推送报表配置新增
 * @tags icome推送报表配置接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPutPushReportAddPushReportConfig = (
  option?: ApiOperationPutPushReportAddPushReportConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPutPushReportAddPushReportConfigResponseSuccess>(
    "/pushReport/addPushReportConfig",
    { method: "put", body: option },
    config
  );

type ApiOperationDeletePushReportDeletePushReportIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationDeletePushReportDeletePushReportId */
interface ApiOperationDeletePushReportDeletePushReportIdResponse {
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

type ApiOperationDeletePushReportDeletePushReportIdResponseSuccess =
  ApiOperationDeletePushReportDeletePushReportIdResponse[200];
/**
 * @description
 *   icome推送报表配置删除
 * @tags icome推送报表配置接口
 * @produces *
 */
export const apiOperationDeletePushReportDeletePushReportId = (
  option?: ApiOperationDeletePushReportDeletePushReportIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationDeletePushReportDeletePushReportIdResponseSuccess>(
    "/pushReport/deletePushReport/:id",
    { method: "delete", path: option },
    config
  );

type ApiOperationPostPushReportFindDeptByCpmoCopOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationPostPushReportFindDeptByCpmoCop */
interface ApiOperationPostPushReportFindDeptByCpmoCopResponse {
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

type ApiOperationPostPushReportFindDeptByCpmoCopResponseSuccess =
  ApiOperationPostPushReportFindDeptByCpmoCopResponse[200];
/**
 * @description
 *   获取跟当前实体下同级的实体
 * @tags 获取部门模块api
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostPushReportFindDeptByCpmoCop = (
  option?: ApiOperationPostPushReportFindDeptByCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostPushReportFindDeptByCpmoCopResponseSuccess>(
    "/pushReport/findDeptByCpmoCop",
    { method: "post", query: option },
    config
  );

type ApiOperationGetPushReportGetPushReportByentityCodeEntityCodeOption = {
  /**
    @description
      entityCode */
  entityCode: string;
};

/** @description response type for apiOperationGetPushReportGetPushReportByentityCodeEntityCode */
interface ApiOperationGetPushReportGetPushReportByentityCodeEntityCodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PushReportConfigDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetPushReportGetPushReportByentityCodeEntityCodeResponseSuccess =
  ApiOperationGetPushReportGetPushReportByentityCodeEntityCodeResponse[200];
/**
 * @description
 *   icome推送报表配置查询
 * @tags icome推送报表配置接口
 * @produces *
 */
export const apiOperationGetPushReportGetPushReportByentityCodeEntityCode = (
  option?: ApiOperationGetPushReportGetPushReportByentityCodeEntityCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetPushReportGetPushReportByentityCodeEntityCodeResponseSuccess>(
    "/pushReport/getPushReportByentityCode/:entityCode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostPushReportOpenOrClosePushReportOption =
  PushReportConfigDto;

/** @description response type for apiOperationPostPushReportOpenOrClosePushReport */
interface ApiOperationPostPushReportOpenOrClosePushReportResponse {
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

type ApiOperationPostPushReportOpenOrClosePushReportResponseSuccess =
  ApiOperationPostPushReportOpenOrClosePushReportResponse[200];
/**
 * @description
 *   开启或关闭，0关闭，1开启
 * @tags icome推送报表配置接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostPushReportOpenOrClosePushReport = (
  option?: ApiOperationPostPushReportOpenOrClosePushReportOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostPushReportOpenOrClosePushReportResponseSuccess>(
    "/pushReport/openOrClosePushReport",
    { method: "post", body: option },
    config
  );

type ApiOperationPostPushReportUpdatePushReportOption = PushReportConfigDto;

/** @description response type for apiOperationPostPushReportUpdatePushReport */
interface ApiOperationPostPushReportUpdatePushReportResponse {
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

type ApiOperationPostPushReportUpdatePushReportResponseSuccess =
  ApiOperationPostPushReportUpdatePushReportResponse[200];
/**
 * @description
 *   根据主键修改配置
 * @tags icome推送报表配置接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostPushReportUpdatePushReport = (
  option?: ApiOperationPostPushReportUpdatePushReportOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostPushReportUpdatePushReportResponseSuccess>(
    "/pushReport/updatePushReport",
    { method: "post", body: option },
    config
  );

type ApiOperationPostQueryDeskPhoneInfoListEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationPostQueryDeskPhoneInfoListEcode */
interface ApiOperationPostQueryDeskPhoneInfoListEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WorkbenchDeskPhoneDTO>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostQueryDeskPhoneInfoListEcodeResponseSuccess =
  ApiOperationPostQueryDeskPhoneInfoListEcodeResponse[200];
/**
 * @description
 *   获取企业实体坐席电话信息接口
 * @tags 外呼配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostQueryDeskPhoneInfoListEcode = (
  option?: ApiOperationPostQueryDeskPhoneInfoListEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostQueryDeskPhoneInfoListEcodeResponseSuccess>(
    "/query/deskPhoneInfo/list/:ecode",
    { method: "post", path: option },
    config
  );

type ApiOperationGetQueryIsUseDeskPhoneInfoEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetQueryIsUseDeskPhoneInfoEcode */
interface ApiOperationGetQueryIsUseDeskPhoneInfoEcodeResponse {
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

type ApiOperationGetQueryIsUseDeskPhoneInfoEcodeResponseSuccess =
  ApiOperationGetQueryIsUseDeskPhoneInfoEcodeResponse[200];
/**
 * @description
 *   获取该地区可使用的坐席电话接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetQueryIsUseDeskPhoneInfoEcode = (
  option?: ApiOperationGetQueryIsUseDeskPhoneInfoEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetQueryIsUseDeskPhoneInfoEcodeResponseSuccess>(
    "/query/isUseDeskPhoneInfo/:ecode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostQueryWorkbenchTitleOption = WorkbenchTitleInputDto;

/** @description response type for apiOperationPostQueryWorkbenchTitle */
interface ApiOperationPostQueryWorkbenchTitleResponse {
  /**
   * @description
   *   OK
   */
  200: WorkbenchTitleInfoOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostQueryWorkbenchTitleResponseSuccess =
  ApiOperationPostQueryWorkbenchTitleResponse[200];
/**
 * @description
 *   获取企业实体标题接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostQueryWorkbenchTitle = (
  option?: ApiOperationPostQueryWorkbenchTitleOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostQueryWorkbenchTitleResponseSuccess>(
    "/query/workbench/title",
    { method: "post", body: option },
    config
  );

type ApiOperationPostQueryWorkbenchTitleListOption = WorkbenchTitles;

/** @description response type for apiOperationPostQueryWorkbenchTitleList */
interface ApiOperationPostQueryWorkbenchTitleListResponse {
  /**
   * @description
   *   OK
   */
  200: WorkbenchTitlesOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostQueryWorkbenchTitleListResponseSuccess =
  ApiOperationPostQueryWorkbenchTitleListResponse[200];
/**
 * @description
 *   根据实体编码查询实体名称接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostQueryWorkbenchTitleList = (
  option?: ApiOperationPostQueryWorkbenchTitleListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostQueryWorkbenchTitleListResponseSuccess>(
    "/query/workbenchTitle/list",
    { method: "post", body: option },
    config
  );

type ApiOperationPostRectifyAddRectifyEvaluateOption = AddRectifyEvaluateDto;

/** @description response type for apiOperationPostRectifyAddRectifyEvaluate */
interface ApiOperationPostRectifyAddRectifyEvaluateResponse {
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

type ApiOperationPostRectifyAddRectifyEvaluateResponseSuccess =
  ApiOperationPostRectifyAddRectifyEvaluateResponse[200];
/**
 * @description
 *   添加问题整改评价记录
 * @tags 常规监察问题反馈rest服务接口封装
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostRectifyAddRectifyEvaluate = (
  option?: ApiOperationPostRectifyAddRectifyEvaluateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostRectifyAddRectifyEvaluateResponseSuccess>(
    "/rectify/addRectifyEvaluate",
    { method: "post", body: option },
    config
  );

type ApiOperationPostRectifyGetListOption = StationRectifyQueryDto;

/** @description response type for apiOperationPostRectifyGetList */
interface ApiOperationPostRectifyGetListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageListStationCheckRectifyDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostRectifyGetListResponseSuccess =
  ApiOperationPostRectifyGetListResponse[200];
/**
 * @description
 *   查询问题整改工单列表
 * @tags 常规监察问题反馈rest服务接口封装
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostRectifyGetList = (
  option?: ApiOperationPostRectifyGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostRectifyGetListResponseSuccess>(
    "/rectify/getList",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationGetRectifyGetRectifyBusinessTypes */
interface ApiOperationGetRectifyGetRectifyBusinessTypesResponse {
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

type ApiOperationGetRectifyGetRectifyBusinessTypesResponseSuccess =
  ApiOperationGetRectifyGetRectifyBusinessTypesResponse[200];
/**
 * @description
 *   获取问题反馈类型列表
 * @tags 常规监察问题反馈rest服务接口封装
 * @produces *
 */
export const apiOperationGetRectifyGetRectifyBusinessTypes = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetRectifyGetRectifyBusinessTypesResponseSuccess>(
    "/rectify/getRectifyBusinessTypes",
    { method: "get" },
    config
  );

type ApiOperationGetRectifyGetRectifyFlagTaskIdOption = {
  /**
    @description
      taskId
    @format int64 */
  taskId: number;
};

/** @description response type for apiOperationGetRectifyGetRectifyFlagTaskId */
interface ApiOperationGetRectifyGetRectifyFlagTaskIdResponse {
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

type ApiOperationGetRectifyGetRectifyFlagTaskIdResponseSuccess =
  ApiOperationGetRectifyGetRectifyFlagTaskIdResponse[200];
/**
 * @description
 *   getRectifyFlag
 * @tags 常规监察问题反馈rest服务接口封装
 * @produces *
 */
export const apiOperationGetRectifyGetRectifyFlagTaskId = (
  option?: ApiOperationGetRectifyGetRectifyFlagTaskIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetRectifyGetRectifyFlagTaskIdResponseSuccess>(
    "/rectify/getRectifyFlag/:taskId",
    { method: "get", path: option },
    config
  );

type ApiOperationGetRectifyGetRectifyHistoryRecordsTaskIdOption = {
  /**
    @description
      taskId
    @format int64 */
  taskId: number;
};

/** @description response type for apiOperationGetRectifyGetRectifyHistoryRecordsTaskId */
interface ApiOperationGetRectifyGetRectifyHistoryRecordsTaskIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<RectifyRecordInfo>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetRectifyGetRectifyHistoryRecordsTaskIdResponseSuccess =
  ApiOperationGetRectifyGetRectifyHistoryRecordsTaskIdResponse[200];
/**
 * @description
 *   查询反馈历史记录信息
 * @tags 常规监察问题反馈rest服务接口封装
 * @produces *
 */
export const apiOperationGetRectifyGetRectifyHistoryRecordsTaskId = (
  option?: ApiOperationGetRectifyGetRectifyHistoryRecordsTaskIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetRectifyGetRectifyHistoryRecordsTaskIdResponseSuccess>(
    "/rectify/getRectifyHistoryRecords/:taskId",
    { method: "get", path: option },
    config
  );

type ApiOperationGetRectifyGetStationRectifyDetailIdCpmoCopOption = {
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

/** @description response type for apiOperationGetRectifyGetStationRectifyDetailIdCpmoCop */
interface ApiOperationGetRectifyGetStationRectifyDetailIdCpmoCopResponse {
  /**
   * @description
   *   OK
   */
  200: StationCheckRectifyDetailDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetRectifyGetStationRectifyDetailIdCpmoCopResponseSuccess =
  ApiOperationGetRectifyGetStationRectifyDetailIdCpmoCopResponse[200];
/**
 * @description
 *   查询问题整改工单详情
 * @tags 常规监察问题反馈rest服务接口封装
 * @produces *
 */
export const apiOperationGetRectifyGetStationRectifyDetailIdCpmoCop = (
  option?: ApiOperationGetRectifyGetStationRectifyDetailIdCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetRectifyGetStationRectifyDetailIdCpmoCopResponseSuccess>(
    "/rectify/getStationRectifyDetail/:id/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiOperationPostRectifyGetTrackingListOption = PriorityTrackingInputDto;

/** @description response type for apiOperationPostRectifyGetTrackingList */
interface ApiOperationPostRectifyGetTrackingListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PriorityTrackingOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostRectifyGetTrackingListResponseSuccess =
  ApiOperationPostRectifyGetTrackingListResponse[200];
/**
 * @description
 *   查询要事跟踪问题整改工单列表
 * @tags 常规监察问题反馈rest服务接口封装
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostRectifyGetTrackingList = (
  option?: ApiOperationPostRectifyGetTrackingListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostRectifyGetTrackingListResponseSuccess>(
    "/rectify/getTrackingList",
    { method: "post", body: option },
    config
  );

type ApiOperationGetRectifyGetUnreadListCountCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationGetRectifyGetUnreadListCountCpmoCop */
interface ApiOperationGetRectifyGetUnreadListCountCpmoCopResponse {
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

type ApiOperationGetRectifyGetUnreadListCountCpmoCopResponseSuccess =
  ApiOperationGetRectifyGetUnreadListCountCpmoCopResponse[200];
/**
 * @description
 *   获取工单列表中未读点的数目
 * @tags 常规监察问题反馈rest服务接口封装
 * @produces *
 */
export const apiOperationGetRectifyGetUnreadListCountCpmoCop = (
  option?: ApiOperationGetRectifyGetUnreadListCountCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetRectifyGetUnreadListCountCpmoCopResponseSuccess>(
    "/rectify/getUnreadListCount/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiOperationPostSafeParticipantOption = UserInfoDTO;

/** @description response type for apiOperationPostSafeParticipant */
interface ApiOperationPostSafeParticipantResponse {
  /**
   * @description
   *   OK
   */
  200: ParticipantResp;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostSafeParticipantResponseSuccess =
  ApiOperationPostSafeParticipantResponse[200];
/**
 * @description
 *   获取参与者鉴权信息
 * @tags 参与者中心相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostSafeParticipant = (
  option?: ApiOperationPostSafeParticipantOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostSafeParticipantResponseSuccess>(
    "/safe/participant",
    { method: "post", body: option },
    config
  );

type ApiOperationPostStationDeleteAlarmEventIdWorkflowNoOption = {
  /**
    @description
      eventId */
  eventId: string;
  /**
    @description
      workflowNo */
  workflowNo: string;
};

/** @description response type for apiOperationPostStationDeleteAlarmEventIdWorkflowNo */
interface ApiOperationPostStationDeleteAlarmEventIdWorkflowNoResponse {
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

type ApiOperationPostStationDeleteAlarmEventIdWorkflowNoResponseSuccess =
  ApiOperationPostStationDeleteAlarmEventIdWorkflowNoResponse[200];
/**
 * @description
 *   删除厂站告警记录
 * @tags 厂站删除相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostStationDeleteAlarmEventIdWorkflowNo = (
  option?: ApiOperationPostStationDeleteAlarmEventIdWorkflowNoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostStationDeleteAlarmEventIdWorkflowNoResponseSuccess>(
    "/station/deleteAlarm/:eventId/:workflowNo",
    { method: "post", path: option },
    config
  );

type ApiOperationPostStationDeleteBatchesOption = BatchDelRecordInputDto;

/** @description response type for apiOperationPostStationDeleteBatches */
interface ApiOperationPostStationDeleteBatchesResponse {
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

type ApiOperationPostStationDeleteBatchesResponseSuccess =
  ApiOperationPostStationDeleteBatchesResponse[200];
/**
 * @description
 *   批量删除告警和示险
 * @tags 厂站删除相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostStationDeleteBatches = (
  option?: ApiOperationPostStationDeleteBatchesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostStationDeleteBatchesResponseSuccess>(
    "/station/deleteBatches",
    { method: "post", body: option },
    config
  );

type ApiOperationPostStationDeleteRiskEventIdWorkflowNoOption = {
  /**
    @description
      eventId */
  eventId: string;
  /**
    @description
      workflowNo */
  workflowNo: string;
};

/** @description response type for apiOperationPostStationDeleteRiskEventIdWorkflowNo */
interface ApiOperationPostStationDeleteRiskEventIdWorkflowNoResponse {
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

type ApiOperationPostStationDeleteRiskEventIdWorkflowNoResponseSuccess =
  ApiOperationPostStationDeleteRiskEventIdWorkflowNoResponse[200];
/**
 * @description
 *   删除厂站示险记录
 * @tags 厂站删除相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostStationDeleteRiskEventIdWorkflowNo = (
  option?: ApiOperationPostStationDeleteRiskEventIdWorkflowNoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostStationDeleteRiskEventIdWorkflowNoResponseSuccess>(
    "/station/deleteRisk/:eventId/:workflowNo",
    { method: "post", path: option },
    config
  );

type ApiOperationPostStationDeleteTaskTaskIdWorkflowNoOption = {
  /**
    @description
      taskId
    @format int64 */
  taskId: number;
  /**
    @description
      workflowNo */
  workflowNo: string;
};

/** @description response type for apiOperationPostStationDeleteTaskTaskIdWorkflowNo */
interface ApiOperationPostStationDeleteTaskTaskIdWorkflowNoResponse {
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

type ApiOperationPostStationDeleteTaskTaskIdWorkflowNoResponseSuccess =
  ApiOperationPostStationDeleteTaskTaskIdWorkflowNoResponse[200];
/**
 * @description
 *   删除厂站常规监察记录
 * @tags 厂站删除相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostStationDeleteTaskTaskIdWorkflowNo = (
  option?: ApiOperationPostStationDeleteTaskTaskIdWorkflowNoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostStationDeleteTaskTaskIdWorkflowNoResponseSuccess>(
    "/station/deleteTask/:taskId/:workflowNo",
    { method: "post", path: option },
    config
  );

type ApiOperationPostSynPushConfigCompanyOption = SynCompanyConfigInputDto;

/** @description response type for apiOperationPostSynPushConfigCompany */
interface ApiOperationPostSynPushConfigCompanyResponse {
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

type ApiOperationPostSynPushConfigCompanyResponseSuccess =
  ApiOperationPostSynPushConfigCompanyResponse[200];
/**
 * @description
 *   消息推送公司配置同步缓存
 * @tags 消息推送配置同步缓存
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostSynPushConfigCompany = (
  option?: ApiOperationPostSynPushConfigCompanyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostSynPushConfigCompanyResponseSuccess>(
    "/synPushConfig/company",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationPostSynPushConfigTopic */
interface ApiOperationPostSynPushConfigTopicResponse {
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

type ApiOperationPostSynPushConfigTopicResponseSuccess =
  ApiOperationPostSynPushConfigTopicResponse[200];
/**
 * @description
 *   全量同步系统主题缓存
 * @tags 消息推送配置同步缓存
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostSynPushConfigTopic = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostSynPushConfigTopicResponseSuccess>(
    "/synPushConfig/topic",
    { method: "post" },
    config
  );

type ApiOperationPostTrackAlarmAndRiskOption = PriorityTrackingInputDto;

/** @description response type for apiOperationPostTrackAlarmAndRisk */
interface ApiOperationPostTrackAlarmAndRiskResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PriorityTrackingOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostTrackAlarmAndRiskResponseSuccess =
  ApiOperationPostTrackAlarmAndRiskResponse[200];
/**
 * @description
 *   告警示险
 * @tags 要事跟踪
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostTrackAlarmAndRisk = (
  option?: ApiOperationPostTrackAlarmAndRiskOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostTrackAlarmAndRiskResponseSuccess>(
    "/track/alarmAndRisk",
    { method: "post", body: option },
    config
  );

type ApiOperationPostTrackAllOption = PriorityTrackingInputDto;

/** @description response type for apiOperationPostTrackAll */
interface ApiOperationPostTrackAllResponse {
  /**
   * @description
   *   OK
   */
  200: PriorityTrackingDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostTrackAllResponseSuccess =
  ApiOperationPostTrackAllResponse[200];
/**
 * @description
 *   全部要事
 * @tags 要事跟踪
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostTrackAll = (
  option?: ApiOperationPostTrackAllOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostTrackAllResponseSuccess>(
    "/track/all",
    { method: "post", body: option },
    config
  );

type ApiOperationPostTrackAllNumOption = PriorityTrackingInputDto;

/** @description response type for apiOperationPostTrackAllNum */
interface ApiOperationPostTrackAllNumResponse {
  /**
   * @description
   *   OK
   */
  200: PriorityTrackingNumOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostTrackAllNumResponseSuccess =
  ApiOperationPostTrackAllNumResponse[200];
/**
 * @description
 *   各要事跟踪数量
 * @tags 要事跟踪
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostTrackAllNum = (
  option?: ApiOperationPostTrackAllNumOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostTrackAllNumResponseSuccess>(
    "/track/allNum",
    { method: "post", body: option },
    config
  );

type ApiOperationPostTrackProjectPunishOption = PriorityTrackingInputDto;

/** @description response type for apiOperationPostTrackProjectPunish */
interface ApiOperationPostTrackProjectPunishResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PriorityTrackingOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostTrackProjectPunishResponseSuccess =
  ApiOperationPostTrackProjectPunishResponse[200];
/**
 * @description
 *   工程处罚
 * @tags 要事跟踪
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostTrackProjectPunish = (
  option?: ApiOperationPostTrackProjectPunishOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostTrackProjectPunishResponseSuccess>(
    "/track/project/punish",
    { method: "post", body: option },
    config
  );

type ApiOperationPostTrackRectifyProblemOption = PriorityTrackingInputDto;

/** @description response type for apiOperationPostTrackRectifyProblem */
interface ApiOperationPostTrackRectifyProblemResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PriorityTrackingOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostTrackRectifyProblemResponseSuccess =
  ApiOperationPostTrackRectifyProblemResponse[200];
/**
 * @description
 *   问题整改
 * @tags 要事跟踪
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostTrackRectifyProblem = (
  option?: ApiOperationPostTrackRectifyProblemOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostTrackRectifyProblemResponseSuccess>(
    "/track/rectify/problem",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationGetUid */
interface ApiOperationGetUidResponse {
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

type ApiOperationGetUidResponseSuccess = ApiOperationGetUidResponse[200];
/**
 * @description
 *   getUid
 * @tags $-proxy-146
 * @produces *
 */
export const apiOperationGetUid = (config?: AxiosRequestConfig) =>
  requester<ApiOperationGetUidResponseSuccess>(
    "/uid",
    { method: "get" },
    config
  );

type ApiOperationGetUidParseOption = {
  /**
    @description
      param0
    @format int64 */
  param0: number;
};

/** @description response type for apiOperationGetUidParse */
interface ApiOperationGetUidParseResponse {
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

type ApiOperationGetUidParseResponseSuccess =
  ApiOperationGetUidParseResponse[200];
/**
 * @description
 *   parseUid
 * @tags $-proxy-146
 * @produces *
 */
export const apiOperationGetUidParse = (
  option?: ApiOperationGetUidParseOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetUidParseResponseSuccess>(
    "/uid/parse",
    { method: "get", query: option },
    config
  );

type ApiOperationPostUpdateDeskPhoneInfoOption =
  Array<WorkbenchDeskPhoneInputDTO>;

/** @description response type for apiOperationPostUpdateDeskPhoneInfo */
interface ApiOperationPostUpdateDeskPhoneInfoResponse {
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

type ApiOperationPostUpdateDeskPhoneInfoResponseSuccess =
  ApiOperationPostUpdateDeskPhoneInfoResponse[200];
/**
 * @description
 *   更新该实体的坐席电话信息接口
 * @tags 外呼配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostUpdateDeskPhoneInfo = (
  option?: ApiOperationPostUpdateDeskPhoneInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostUpdateDeskPhoneInfoResponseSuccess>(
    "/update/deskPhoneInfo",
    { method: "post", body: option },
    config
  );

type ApiOperationPostUpdateWorkbenchCityInfoOption = WorkbenchTitleInputDto;

/** @description response type for apiOperationPostUpdateWorkbenchCityInfo */
interface ApiOperationPostUpdateWorkbenchCityInfoResponse {
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

type ApiOperationPostUpdateWorkbenchCityInfoResponseSuccess =
  ApiOperationPostUpdateWorkbenchCityInfoResponse[200];
/**
 * @description
 *   更改企业城市信息接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostUpdateWorkbenchCityInfo = (
  option?: ApiOperationPostUpdateWorkbenchCityInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostUpdateWorkbenchCityInfoResponseSuccess>(
    "/update/workbench/city/info",
    { method: "post", body: option },
    config
  );

type ApiOperationGetVideoOverviewDangerWorkVideoListOption = {
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

/** @description response type for apiOperationGetVideoOverviewDangerWorkVideoList */
interface ApiOperationGetVideoOverviewDangerWorkVideoListResponse {
  /**
   * @description
   *   OK
   */
  200: PageDataVideoDangerWorkDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetVideoOverviewDangerWorkVideoListResponseSuccess =
  ApiOperationGetVideoOverviewDangerWorkVideoListResponse[200];
/**
 * @description
 *   危险作业视频列表
 * @tags 视频总览API
 * @produces *
 */
export const apiOperationGetVideoOverviewDangerWorkVideoList = (
  option?: ApiOperationGetVideoOverviewDangerWorkVideoListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetVideoOverviewDangerWorkVideoListResponseSuccess>(
    "/videoOverview/dangerWorkVideoList",
    { method: "get", query: option },
    config
  );

type ApiOperationGetVideoOverviewProjectVideoListOption = {
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

/** @description response type for apiOperationGetVideoOverviewProjectVideoList */
interface ApiOperationGetVideoOverviewProjectVideoListResponse {
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

type ApiOperationGetVideoOverviewProjectVideoListResponseSuccess =
  ApiOperationGetVideoOverviewProjectVideoListResponse[200];
/**
 * @description
 *   项目视频列表
 * @tags 视频总览API
 * @produces *
 */
export const apiOperationGetVideoOverviewProjectVideoList = (
  option?: ApiOperationGetVideoOverviewProjectVideoListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetVideoOverviewProjectVideoListResponseSuccess>(
    "/videoOverview/projectVideoList",
    { method: "get", query: option },
    config
  );

type ApiOperationGetViolationTicketGetPriorityTrackingListOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetViolationTicketGetPriorityTrackingList */
interface ApiOperationGetViolationTicketGetPriorityTrackingListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<PriorityTrackingDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetViolationTicketGetPriorityTrackingListResponseSuccess =
  ApiOperationGetViolationTicketGetPriorityTrackingListResponse[200];
/**
 * @description
 *   获取要事跟踪列表
 *   获取要事跟踪列表
 * @tags 处罚单API
 * @produces *
 */
export const apiOperationGetViolationTicketGetPriorityTrackingList = (
  option?: ApiOperationGetViolationTicketGetPriorityTrackingListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetViolationTicketGetPriorityTrackingListResponseSuccess>(
    "/violationTicket/getPriorityTrackingList",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchAddOutboundConfigOption =
  WorkbenchOutboundConfigInputDto;

/** @description response type for apiOperationPostWorkbenchAddOutboundConfig */
interface ApiOperationPostWorkbenchAddOutboundConfigResponse {
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

type ApiOperationPostWorkbenchAddOutboundConfigResponseSuccess =
  ApiOperationPostWorkbenchAddOutboundConfigResponse[200];
/**
 * @description
 *   95158坐席电话配置 添加接口
 * @tags 外呼配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAddOutboundConfig = (
  option?: ApiOperationPostWorkbenchAddOutboundConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAddOutboundConfigResponseSuccess>(
    "/workbench/addOutboundConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAddRoleWhiteListOption = Array<RoleWhiteListDTO>;

/** @description response type for apiOperationPostWorkbenchAddRoleWhiteList */
interface ApiOperationPostWorkbenchAddRoleWhiteListResponse {
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

type ApiOperationPostWorkbenchAddRoleWhiteListResponseSuccess =
  ApiOperationPostWorkbenchAddRoleWhiteListResponse[200];
/**
 * @description
 *   角色白名单——增加
 * @tags 角色白名单
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAddRoleWhiteList = (
  option?: ApiOperationPostWorkbenchAddRoleWhiteListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAddRoleWhiteListResponseSuccess>(
    "/workbench/addRoleWhiteList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAddressBookAddAddressBookOption = AddressBookDto;

/** @description response type for apiOperationPostWorkbenchAddressBookAddAddressBook */
interface ApiOperationPostWorkbenchAddressBookAddAddressBookResponse {
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

type ApiOperationPostWorkbenchAddressBookAddAddressBookResponseSuccess =
  ApiOperationPostWorkbenchAddressBookAddAddressBookResponse[200];
/**
 * @description
 *   姓名,电话,职位,场景,企业编码必传
 *   添加通讯录信息
 * @tags 通讯录信息模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAddressBookAddAddressBook = (
  option?: ApiOperationPostWorkbenchAddressBookAddAddressBookOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAddressBookAddAddressBookResponseSuccess>(
    "/workbench/addressBook/addAddressBook",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchAddressBookDelAddressBookIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiOperationGetWorkbenchAddressBookDelAddressBookId */
interface ApiOperationGetWorkbenchAddressBookDelAddressBookIdResponse {
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

type ApiOperationGetWorkbenchAddressBookDelAddressBookIdResponseSuccess =
  ApiOperationGetWorkbenchAddressBookDelAddressBookIdResponse[200];
/**
 * @description
 *   id必传
 *   根据id删除通讯录
 * @tags 通讯录信息模块
 * @produces *
 */
export const apiOperationGetWorkbenchAddressBookDelAddressBookId = (
  option?: ApiOperationGetWorkbenchAddressBookDelAddressBookIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAddressBookDelAddressBookIdResponseSuccess>(
    "/workbench/addressBook/delAddressBook/:id",
    { method: "get", path: option },
    config
  );

/** @description response type for apiOperationGetWorkbenchAddressBookExportTemplate */
interface ApiOperationGetWorkbenchAddressBookExportTemplateResponse {
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

type ApiOperationGetWorkbenchAddressBookExportTemplateResponseSuccess =
  ApiOperationGetWorkbenchAddressBookExportTemplateResponse[200];
/**
 * @description
 *   通讯录导入模板
 * @tags 通讯录信息模块
 * @produces *
 */
export const apiOperationGetWorkbenchAddressBookExportTemplate = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAddressBookExportTemplateResponseSuccess>(
    "/workbench/addressBook/exportTemplate",
    { method: "get" },
    config
  );

type ApiOperationPostWorkbenchAddressBookGetAddressBook4MessageOption =
  AddressBookInputDto;

/** @description response type for apiOperationPostWorkbenchAddressBookGetAddressBook4Message */
interface ApiOperationPostWorkbenchAddressBookGetAddressBook4MessageResponse {
  /**
   * @description
   *   OK
   */
  200: Array<any>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAddressBookGetAddressBook4MessageResponseSuccess =
  ApiOperationPostWorkbenchAddressBookGetAddressBook4MessageResponse[200];
/**
 * @description
 *   通讯录信息查询 AddressBookInputDot中companyCode,sceneCode,message,userId必传
 *   通讯录信息查询
 * @tags 通讯录信息模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAddressBookGetAddressBook4Message = (
  option?: ApiOperationPostWorkbenchAddressBookGetAddressBook4MessageOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAddressBookGetAddressBook4MessageResponseSuccess>(
    "/workbench/addressBook/getAddressBook4Message",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAddressBookGetAddressBookListOption =
  AddressBookInputDto;

/** @description response type for apiOperationPostWorkbenchAddressBookGetAddressBookList */
interface ApiOperationPostWorkbenchAddressBookGetAddressBookListResponse {
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

type ApiOperationPostWorkbenchAddressBookGetAddressBookListResponseSuccess =
  ApiOperationPostWorkbenchAddressBookGetAddressBookListResponse[200];
/**
 * @description
 *   获取通讯录信息列表 AddressBookInputDot中companyCode,sceneCode,userId必传
 *   通讯录信息列表
 * @tags 通讯录信息模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAddressBookGetAddressBookList = (
  option?: ApiOperationPostWorkbenchAddressBookGetAddressBookListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAddressBookGetAddressBookListResponseSuccess>(
    "/workbench/addressBook/getAddressBookList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAddressBookGetAddressBookUserIdListOption =
  AddressBookInputDto;

/** @description response type for apiOperationPostWorkbenchAddressBookGetAddressBookUserIdList */
interface ApiOperationPostWorkbenchAddressBookGetAddressBookUserIdListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AddressBookUserIdDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAddressBookGetAddressBookUserIdListResponseSuccess =
  ApiOperationPostWorkbenchAddressBookGetAddressBookUserIdListResponse[200];
/**
 * @description
 *   通讯录用户信息查询中sceneCode必传
 *   通讯录用户信息查询
 * @tags 通讯录信息模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAddressBookGetAddressBookUserIdList = (
  option?: ApiOperationPostWorkbenchAddressBookGetAddressBookUserIdListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAddressBookGetAddressBookUserIdListResponseSuccess>(
    "/workbench/addressBook/getAddressBookUserIdList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAddressBookGetIsLeaderByPhoneOption =
  AddressBookInputDto;

/** @description response type for apiOperationPostWorkbenchAddressBookGetIsLeaderByPhone */
interface ApiOperationPostWorkbenchAddressBookGetIsLeaderByPhoneResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AddressBookDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAddressBookGetIsLeaderByPhoneResponseSuccess =
  ApiOperationPostWorkbenchAddressBookGetIsLeaderByPhoneResponse[200];
/**
 * @description
 *   通过手机号查询当前网络的网格长
 *   网格长查询
 * @tags 通讯录信息模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAddressBookGetIsLeaderByPhone = (
  option?: ApiOperationPostWorkbenchAddressBookGetIsLeaderByPhoneOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAddressBookGetIsLeaderByPhoneResponseSuccess>(
    "/workbench/addressBook/getIsLeaderByPhone",
    { method: "post", body: option },
    config
  );

/** @description request parameter type for apiOperationPostWorkbenchAddressBookImportAddressBook */
interface ApiOperationPostWorkbenchAddressBookImportAddressBookOption {
  query?: {
    companyCode: string;
    cpmoCop: string;
    message: string;
    /**
        @format int32 */
    pageNum: number;
    /**
        @format int32 */
    pageSize: number;
    phones: Array<string>;
    sceneCode: Array<string>;
    sceneCodeStr: string;
    userId: string;
  };
}

/** @description request parameter type for apiOperationPostWorkbenchAddressBookImportAddressBook */
interface ApiOperationPostWorkbenchAddressBookImportAddressBookOption {
  /**
   * @description
   *   filePath
   */
  body: File;
}

/** @description response type for apiOperationPostWorkbenchAddressBookImportAddressBook */
interface ApiOperationPostWorkbenchAddressBookImportAddressBookResponse {
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

type ApiOperationPostWorkbenchAddressBookImportAddressBookResponseSuccess =
  ApiOperationPostWorkbenchAddressBookImportAddressBookResponse[200];
/**
 * @description
 *   通讯录用户信息查询中companyCode必传
 *   通讯录导入
 * @tags 通讯录信息模块
 * @produces *
 * @consumes multipart/form-data
 */
export const apiOperationPostWorkbenchAddressBookImportAddressBook = (
  option: ApiOperationPostWorkbenchAddressBookImportAddressBookOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAddressBookImportAddressBookResponseSuccess>(
    "/workbench/addressBook/importAddressBook",
    { method: "post", ...option },
    config
  );

type ApiOperationPostWorkbenchAddressBookUpdAddressBookOption = AddressBookDto;

/** @description response type for apiOperationPostWorkbenchAddressBookUpdAddressBook */
interface ApiOperationPostWorkbenchAddressBookUpdAddressBookResponse {
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

type ApiOperationPostWorkbenchAddressBookUpdAddressBookResponseSuccess =
  ApiOperationPostWorkbenchAddressBookUpdAddressBookResponse[200];
/**
 * @description
 *   id必传
 *   根据id修改通讯录信息
 * @tags 通讯录信息模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAddressBookUpdAddressBook = (
  option?: ApiOperationPostWorkbenchAddressBookUpdAddressBookOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAddressBookUpdAddressBookResponseSuccess>(
    "/workbench/addressBook/updAddressBook",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAlarmAddDisposalProcessOption =
  AlarmDisposalProcessInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmAddDisposalProcess */
interface ApiOperationPostWorkbenchAlarmAddDisposalProcessResponse {
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

type ApiOperationPostWorkbenchAlarmAddDisposalProcessResponseSuccess =
  ApiOperationPostWorkbenchAlarmAddDisposalProcessResponse[200];
/**
 * @description
 *   alarmId,alarmStatus,statusCode,sceneCode,nodeName必传
 *   处置中 打电话增加通话记录
 * @tags 处置进度API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmAddDisposalProcess = (
  option?: ApiOperationPostWorkbenchAlarmAddDisposalProcessOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmAddDisposalProcessResponseSuccess>(
    "/workbench/alarm/addDisposalProcess",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAlarmDeleteFileFileIdOption = {
  /**
    @description
      fileId
    @format int64 */
  fileId: number;
};

/** @description response type for apiOperationPostWorkbenchAlarmDeleteFileFileId */
interface ApiOperationPostWorkbenchAlarmDeleteFileFileIdResponse {
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

type ApiOperationPostWorkbenchAlarmDeleteFileFileIdResponseSuccess =
  ApiOperationPostWorkbenchAlarmDeleteFileFileIdResponse[200];
/**
 * @description
 *   删除告警处置附件
 *   删除告警处置附件
 * @tags 告警工作台附件相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmDeleteFileFileId = (
  option?: ApiOperationPostWorkbenchAlarmDeleteFileFileIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmDeleteFileFileIdResponseSuccess>(
    "/workbench/alarm/deleteFile/:fileId",
    { method: "post", path: option },
    config
  );

type ApiOperationPostWorkbenchAlarmGetAlarmListOption = AlarmShowDangerInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmGetAlarmList */
interface ApiOperationPostWorkbenchAlarmGetAlarmListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AlarmWorkbenchDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAlarmGetAlarmListResponseSuccess =
  ApiOperationPostWorkbenchAlarmGetAlarmListResponse[200];
/**
 * @description
 *   告警信息一级列表查询 InputDTO中companyCode必传
 *   获取告警信息列表
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmGetAlarmList = (
  option?: ApiOperationPostWorkbenchAlarmGetAlarmListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmGetAlarmListResponseSuccess>(
    "/workbench/alarm/getAlarmList",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchAlarmGetDisposalProcessListOption = {
  /**
    @description
      alarmId
    @format int64 */
  alarmId: number;
};

/** @description response type for apiOperationGetWorkbenchAlarmGetDisposalProcessList */
interface ApiOperationGetWorkbenchAlarmGetDisposalProcessListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AlarmDisposalProcessDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchAlarmGetDisposalProcessListResponseSuccess =
  ApiOperationGetWorkbenchAlarmGetDisposalProcessListResponse[200];
/**
 * @description
 *   根据告警ID获取告警处置进度列表
 *   获取告警处置进度列表
 * @tags 处置进度API
 * @produces *
 */
export const apiOperationGetWorkbenchAlarmGetDisposalProcessList = (
  option?: ApiOperationGetWorkbenchAlarmGetDisposalProcessListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAlarmGetDisposalProcessListResponseSuccess>(
    "/workbench/alarm/getDisposalProcessList",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchAlarmGetFileListOption = {
  /**
    @description
      alarmId
    @format int64 */
  alarmId: number;
};

/** @description response type for apiOperationGetWorkbenchAlarmGetFileList */
interface ApiOperationGetWorkbenchAlarmGetFileListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AlarmDisposalAttachmentDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchAlarmGetFileListResponseSuccess =
  ApiOperationGetWorkbenchAlarmGetFileListResponse[200];
/**
 * @description
 *   查询告警处置附件列表
 *   查询告警处置附件列表
 * @tags 告警工作台附件相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchAlarmGetFileList = (
  option?: ApiOperationGetWorkbenchAlarmGetFileListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAlarmGetFileListResponseSuccess>(
    "/workbench/alarm/getFileList",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchAlarmOtherCentreGetAlarmListOption =
  AlarmShowDangerOtherCentreInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmOtherCentreGetAlarmList */
interface ApiOperationPostWorkbenchAlarmOtherCentreGetAlarmListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AlarmWorkbenchDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAlarmOtherCentreGetAlarmListResponseSuccess =
  ApiOperationPostWorkbenchAlarmOtherCentreGetAlarmListResponse[200];
/**
 * @description
 *   告警信息一级列表查询 InputDTO中companyCode必传
 *   其他中心-获取告警信息列表
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmOtherCentreGetAlarmList = (
  option?: ApiOperationPostWorkbenchAlarmOtherCentreGetAlarmListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmOtherCentreGetAlarmListResponseSuccess>(
    "/workbench/alarm/otherCentre/getAlarmList",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchAlarmQueryAlarmDetailListOption = {
  /**
    @description
      ids
    @format int64 */
  ids: number;
};

/** @description response type for apiOperationGetWorkbenchAlarmQueryAlarmDetailList */
interface ApiOperationGetWorkbenchAlarmQueryAlarmDetailListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AlarmWorkbenchDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchAlarmQueryAlarmDetailListResponseSuccess =
  ApiOperationGetWorkbenchAlarmQueryAlarmDetailListResponse[200];
/**
 * @description
 *   根据告警id获取告警信息
 * @tags 告警工作台相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchAlarmQueryAlarmDetailList = (
  option?: ApiOperationGetWorkbenchAlarmQueryAlarmDetailListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAlarmQueryAlarmDetailListResponseSuccess>(
    "/workbench/alarm/queryAlarmDetailList",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchAlarmQueryAlarmListOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchAlarmQueryAlarmList */
interface ApiOperationGetWorkbenchAlarmQueryAlarmListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AlarmWorkbenchDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchAlarmQueryAlarmListResponseSuccess =
  ApiOperationGetWorkbenchAlarmQueryAlarmListResponse[200];
/**
 * @description
 *   根据实体编码获取告警信息
 * @tags 告警工作台相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchAlarmQueryAlarmList = (
  option?: ApiOperationGetWorkbenchAlarmQueryAlarmListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAlarmQueryAlarmListResponseSuccess>(
    "/workbench/alarm/queryAlarmList",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchAlarmRewardviolationrecordAddOption =
  AlarmRewardViolationRecordInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmRewardviolationrecordAdd */
interface ApiOperationPostWorkbenchAlarmRewardviolationrecordAddResponse {
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

type ApiOperationPostWorkbenchAlarmRewardviolationrecordAddResponseSuccess =
  ApiOperationPostWorkbenchAlarmRewardviolationrecordAddResponse[200];
/**
 * @description
 *   添加告警奖罚记录
 *   添加告警奖罚记录
 * @tags 告警奖励罚款相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmRewardviolationrecordAdd = (
  option?: ApiOperationPostWorkbenchAlarmRewardviolationrecordAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmRewardviolationrecordAddResponseSuccess>(
    "/workbench/alarm/rewardviolationrecord/add",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchAlarmRewardviolationrecordListOption = {
  /**
    @description
      alarmSecondId */
  alarmSecondId: string;
};

/** @description response type for apiOperationGetWorkbenchAlarmRewardviolationrecordList */
interface ApiOperationGetWorkbenchAlarmRewardviolationrecordListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AlarmRewardViolationRecordDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchAlarmRewardviolationrecordListResponseSuccess =
  ApiOperationGetWorkbenchAlarmRewardviolationrecordListResponse[200];
/**
 * @description
 *   查询告警奖罚记录列表
 *   查询告警奖罚记录列表
 * @tags 告警奖励罚款相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchAlarmRewardviolationrecordList = (
  option?: ApiOperationGetWorkbenchAlarmRewardviolationrecordListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAlarmRewardviolationrecordListResponseSuccess>(
    "/workbench/alarm/rewardviolationrecord/list",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchAlarmRewardviolationrecordUpdateOption =
  AlarmRewardViolationRecordInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmRewardviolationrecordUpdate */
interface ApiOperationPostWorkbenchAlarmRewardviolationrecordUpdateResponse {
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

type ApiOperationPostWorkbenchAlarmRewardviolationrecordUpdateResponseSuccess =
  ApiOperationPostWorkbenchAlarmRewardviolationrecordUpdateResponse[200];
/**
 * @description
 *   更新告警奖罚记录
 *   更新告警奖罚记录
 * @tags 告警奖励罚款相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmRewardviolationrecordUpdate = (
  option?: ApiOperationPostWorkbenchAlarmRewardviolationrecordUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmRewardviolationrecordUpdateResponseSuccess>(
    "/workbench/alarm/rewardviolationrecord/update",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAlarmUploadFilesOption = {
  /**
    @description
      alarmId
    @format int64 */
  alarmId: number;
  /**
    @description
      file */
  file: string;
};

/** @description response type for apiOperationPostWorkbenchAlarmUploadFiles */
interface ApiOperationPostWorkbenchAlarmUploadFilesResponse {
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

type ApiOperationPostWorkbenchAlarmUploadFilesResponseSuccess =
  ApiOperationPostWorkbenchAlarmUploadFilesResponse[200];
/**
 * @description
 *   上传告警处置附件
 *   上传告警处置附件
 * @tags 告警工作台附件相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmUploadFiles = (
  option?: ApiOperationPostWorkbenchAlarmUploadFilesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmUploadFilesResponseSuccess>(
    "/workbench/alarm/uploadFiles",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchAlarmRiskPushConfigGetAlarmRiskOption =
  WorkbenchAlarmRiskPushConfigQueryInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmRiskPushConfigGetAlarmRisk */
interface ApiOperationPostWorkbenchAlarmRiskPushConfigGetAlarmRiskResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WorkbenchAlarmRiskPushConfigOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAlarmRiskPushConfigGetAlarmRiskResponseSuccess =
  ApiOperationPostWorkbenchAlarmRiskPushConfigGetAlarmRiskResponse[200];
/**
 * @description
 *   查询告警或示险类型接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmRiskPushConfigGetAlarmRisk = (
  option?: ApiOperationPostWorkbenchAlarmRiskPushConfigGetAlarmRiskOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmRiskPushConfigGetAlarmRiskResponseSuccess>(
    "/workbench/alarmRiskPushConfig/getAlarmRisk",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAlarmRiskPushConfigGetListOption =
  WorkbenchAlarmRiskPushConfigQueryInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmRiskPushConfigGetList */
interface ApiOperationPostWorkbenchAlarmRiskPushConfigGetListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListWorkbenchAlarmRiskPushConfigOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAlarmRiskPushConfigGetListResponseSuccess =
  ApiOperationPostWorkbenchAlarmRiskPushConfigGetListResponse[200];
/**
 * @description
 *   查询配置信息-列表接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmRiskPushConfigGetList = (
  option?: ApiOperationPostWorkbenchAlarmRiskPushConfigGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmRiskPushConfigGetListResponseSuccess>(
    "/workbench/alarmRiskPushConfig/getList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAlarmRiskPushConfigUpdateConfigOption =
  WorkbenchAlarmRiskPushConfigInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmRiskPushConfigUpdateConfig */
interface ApiOperationPostWorkbenchAlarmRiskPushConfigUpdateConfigResponse {
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

type ApiOperationPostWorkbenchAlarmRiskPushConfigUpdateConfigResponseSuccess =
  ApiOperationPostWorkbenchAlarmRiskPushConfigUpdateConfigResponse[200];
/**
 * @description
 *   编辑是否推送系统和公司接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmRiskPushConfigUpdateConfig = (
  option?: ApiOperationPostWorkbenchAlarmRiskPushConfigUpdateConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmRiskPushConfigUpdateConfigResponseSuccess>(
    "/workbench/alarmRiskPushConfig/updateConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchAlarmRiskPushConfigUpdateEnableIdEnabelOption = {
  /**
    @description
      enabel
    @format int32 */
  enabel: number;
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchAlarmRiskPushConfigUpdateEnableIdEnabel */
interface ApiOperationGetWorkbenchAlarmRiskPushConfigUpdateEnableIdEnabelResponse {
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

type ApiOperationGetWorkbenchAlarmRiskPushConfigUpdateEnableIdEnabelResponseSuccess =
  ApiOperationGetWorkbenchAlarmRiskPushConfigUpdateEnableIdEnabelResponse[200];
/**
 * @description
 *   编辑是否推送接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchAlarmRiskPushConfigUpdateEnableIdEnabel = (
  option?: ApiOperationGetWorkbenchAlarmRiskPushConfigUpdateEnableIdEnabelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAlarmRiskPushConfigUpdateEnableIdEnabelResponseSuccess>(
    "/workbench/alarmRiskPushConfig/updateEnable/:id/:enabel",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchAlarmShowDangerGetAlarmShowDangerRescueListOption =
  AlarmShowDangerRescueInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmShowDangerGetAlarmShowDangerRescueList */
interface ApiOperationPostWorkbenchAlarmShowDangerGetAlarmShowDangerRescueListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListAlarmShowDangerRescueOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAlarmShowDangerGetAlarmShowDangerRescueListResponseSuccess =
  ApiOperationPostWorkbenchAlarmShowDangerGetAlarmShowDangerRescueListResponse[200];
/**
 * @description
 *   获取告警示险处置列表
 * @tags 工作台首页告警示险处置改版API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmShowDangerGetAlarmShowDangerRescueList =
  (
    option?: ApiOperationPostWorkbenchAlarmShowDangerGetAlarmShowDangerRescueListOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationPostWorkbenchAlarmShowDangerGetAlarmShowDangerRescueListResponseSuccess>(
      "/workbench/alarmShowDanger/getAlarmShowDangerRescueList",
      { method: "post", body: option },
      config
    );

type ApiOperationPostWorkbenchAlarmShowDangerGetTodayWorkProductEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationPostWorkbenchAlarmShowDangerGetTodayWorkProductEcode */
interface ApiOperationPostWorkbenchAlarmShowDangerGetTodayWorkProductEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: TodayWorkProduct;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAlarmShowDangerGetTodayWorkProductEcodeResponseSuccess =
  ApiOperationPostWorkbenchAlarmShowDangerGetTodayWorkProductEcodeResponse[200];
/**
 * @description
 *   今日工作成果
 * @tags 工作台首页告警示险处置改版API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmShowDangerGetTodayWorkProductEcode =
  (
    option?: ApiOperationPostWorkbenchAlarmShowDangerGetTodayWorkProductEcodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationPostWorkbenchAlarmShowDangerGetTodayWorkProductEcodeResponseSuccess>(
      "/workbench/alarmShowDanger/getTodayWorkProduct/:ecode",
      { method: "post", path: option },
      config
    );

type ApiOperationPostWorkbenchAlarmShowDangerGetTopSentenceNumOption =
  AlarmShowDangerRescueInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmShowDangerGetTopSentenceNum */
interface ApiOperationPostWorkbenchAlarmShowDangerGetTopSentenceNumResponse {
  /**
   * @description
   *   OK
   */
  200: TopSentenceOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAlarmShowDangerGetTopSentenceNumResponseSuccess =
  ApiOperationPostWorkbenchAlarmShowDangerGetTopSentenceNumResponse[200];
/**
 * @description
 *   获取告警示险处置顶部一句话
 * @tags 工作台首页告警示险处置改版API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmShowDangerGetTopSentenceNum = (
  option?: ApiOperationPostWorkbenchAlarmShowDangerGetTopSentenceNumOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmShowDangerGetTopSentenceNumResponseSuccess>(
    "/workbench/alarmShowDanger/getTopSentenceNum",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAlarmStandardCauseGetListOption =
  WorkbenchAlarmStandardCauseQueryInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmStandardCauseGetList */
interface ApiOperationPostWorkbenchAlarmStandardCauseGetListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WorkbenchMultipleConfigDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAlarmStandardCauseGetListResponseSuccess =
  ApiOperationPostWorkbenchAlarmStandardCauseGetListResponse[200];
/**
 * @description
 *   查询告警标准原因配置接口
 * @tags 标准配置接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmStandardCauseGetList = (
  option?: ApiOperationPostWorkbenchAlarmStandardCauseGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmStandardCauseGetListResponseSuccess>(
    "/workbench/alarmStandardCause/getList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAlarmStandardCauseAddOption =
  WorkbenchAlarmStandardInputDto;

/** @description response type for apiOperationPostWorkbenchAlarmStandardCauseAdd */
interface ApiOperationPostWorkbenchAlarmStandardCauseAddResponse {
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

type ApiOperationPostWorkbenchAlarmStandardCauseAddResponseSuccess =
  ApiOperationPostWorkbenchAlarmStandardCauseAddResponse[200];
/**
 * @description
 *   标准配置新增接口
 * @tags 标准配置接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmStandardCauseAdd = (
  option?: ApiOperationPostWorkbenchAlarmStandardCauseAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmStandardCauseAddResponseSuccess>(
    "/workbench/alarmStandardCauseAdd",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAlarmStandardCauseUpdOption =
  AlarmStandardCauseUpdDto;

/** @description response type for apiOperationPostWorkbenchAlarmStandardCauseUpd */
interface ApiOperationPostWorkbenchAlarmStandardCauseUpdResponse {
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

type ApiOperationPostWorkbenchAlarmStandardCauseUpdResponseSuccess =
  ApiOperationPostWorkbenchAlarmStandardCauseUpdResponse[200];
/**
 * @description
 *   标准配置修改接口
 * @tags 标准配置接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAlarmStandardCauseUpd = (
  option?: ApiOperationPostWorkbenchAlarmStandardCauseUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAlarmStandardCauseUpdResponseSuccess>(
    "/workbench/alarmStandardCauseUpd",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAnalyseRewardviolationrecordAddOption =
  AnalyseRewardViolationRecordInputDto;

/** @description response type for apiOperationPostWorkbenchAnalyseRewardviolationrecordAdd */
interface ApiOperationPostWorkbenchAnalyseRewardviolationrecordAddResponse {
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

type ApiOperationPostWorkbenchAnalyseRewardviolationrecordAddResponseSuccess =
  ApiOperationPostWorkbenchAnalyseRewardviolationrecordAddResponse[200];
/**
 * @description
 *   添加分析预测奖罚记录
 *   添加分析预测奖罚记录
 * @tags 分析预测奖罚相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnalyseRewardviolationrecordAdd = (
  option?: ApiOperationPostWorkbenchAnalyseRewardviolationrecordAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnalyseRewardviolationrecordAddResponseSuccess>(
    "/workbench/analyse/rewardviolationrecord/add",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchAnalyseRewardviolationrecordListOption = {
  /**
    @description
      proId */
  proId: string;
};

/** @description response type for apiOperationGetWorkbenchAnalyseRewardviolationrecordList */
interface ApiOperationGetWorkbenchAnalyseRewardviolationrecordListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AnalyseRewardViolationRecordDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchAnalyseRewardviolationrecordListResponseSuccess =
  ApiOperationGetWorkbenchAnalyseRewardviolationrecordListResponse[200];
/**
 * @description
 *   查询分析预测奖罚记录列表
 *   查询分析预测奖罚记录列表
 * @tags 分析预测奖罚相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchAnalyseRewardviolationrecordList = (
  option?: ApiOperationGetWorkbenchAnalyseRewardviolationrecordListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAnalyseRewardviolationrecordListResponseSuccess>(
    "/workbench/analyse/rewardviolationrecord/list",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchAnalyseRewardviolationrecordUpdateOption =
  AnalyseRewardViolationRecordInputDto;

/** @description response type for apiOperationPostWorkbenchAnalyseRewardviolationrecordUpdate */
interface ApiOperationPostWorkbenchAnalyseRewardviolationrecordUpdateResponse {
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

type ApiOperationPostWorkbenchAnalyseRewardviolationrecordUpdateResponseSuccess =
  ApiOperationPostWorkbenchAnalyseRewardviolationrecordUpdateResponse[200];
/**
 * @description
 *   更新分析预测奖罚记录
 *   更新分析预测奖罚记录
 * @tags 分析预测奖罚相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnalyseRewardviolationrecordUpdate = (
  option?: ApiOperationPostWorkbenchAnalyseRewardviolationrecordUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnalyseRewardviolationrecordUpdateResponseSuccess>(
    "/workbench/analyse/rewardviolationrecord/update",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchAnalysisDeleteRiskAnalysisConfigEcodeContentCodeOption =
  {
    /**
    @description
      contentCode */
    contentCode: string;
    /**
    @description
      ecode */
    ecode: string;
  };

/** @description response type for apiOperationGetWorkbenchAnalysisDeleteRiskAnalysisConfigEcodeContentCode */
interface ApiOperationGetWorkbenchAnalysisDeleteRiskAnalysisConfigEcodeContentCodeResponse {
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

type ApiOperationGetWorkbenchAnalysisDeleteRiskAnalysisConfigEcodeContentCodeResponseSuccess =
  ApiOperationGetWorkbenchAnalysisDeleteRiskAnalysisConfigEcodeContentCodeResponse[200];
/**
 * @description
 *   示险阈值配置，删除删除
 * @tags 分析预测模块
 * @produces *
 */
export const apiOperationGetWorkbenchAnalysisDeleteRiskAnalysisConfigEcodeContentCode =
  (
    option?: ApiOperationGetWorkbenchAnalysisDeleteRiskAnalysisConfigEcodeContentCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetWorkbenchAnalysisDeleteRiskAnalysisConfigEcodeContentCodeResponseSuccess>(
      "/workbench/analysis/deleteRiskAnalysisConfig/:ecode/:contentCode",
      { method: "get", path: option },
      config
    );

type ApiOperationPostWorkbenchAnalysisGetAnalysisListOption =
  AnalysisConfigInputDto;

/** @description response type for apiOperationPostWorkbenchAnalysisGetAnalysisList */
interface ApiOperationPostWorkbenchAnalysisGetAnalysisListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AnalysisConfigDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAnalysisGetAnalysisListResponseSuccess =
  ApiOperationPostWorkbenchAnalysisGetAnalysisListResponse[200];
/**
 * @description
 *   分析预测查询 InputDTO中companyCode,sceneCode必传
 *   分析预测查询
 * @tags 分析预测模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnalysisGetAnalysisList = (
  option?: ApiOperationPostWorkbenchAnalysisGetAnalysisListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnalysisGetAnalysisListResponseSuccess>(
    "/workbench/analysis/getAnalysisList",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchAnalysisGetPullDownAnalysisConfigEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchAnalysisGetPullDownAnalysisConfigEcode */
interface ApiOperationGetWorkbenchAnalysisGetPullDownAnalysisConfigEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AnalysisConfigPullDownItemOutputDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchAnalysisGetPullDownAnalysisConfigEcodeResponseSuccess =
  ApiOperationGetWorkbenchAnalysisGetPullDownAnalysisConfigEcodeResponse[200];
/**
 * @description
 *   分析预测，示险阈值配置下拉列表
 * @tags 分析预测模块
 * @produces *
 */
export const apiOperationGetWorkbenchAnalysisGetPullDownAnalysisConfigEcode = (
  option?: ApiOperationGetWorkbenchAnalysisGetPullDownAnalysisConfigEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAnalysisGetPullDownAnalysisConfigEcodeResponseSuccess>(
    "/workbench/analysis/getPullDownAnalysisConfig/:ecode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchAnalysisGetRiskAnalysisConfigOption =
  AnalysisConfigItemPageInputDto;

/** @description response type for apiOperationPostWorkbenchAnalysisGetRiskAnalysisConfig */
interface ApiOperationPostWorkbenchAnalysisGetRiskAnalysisConfigResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListAnalysisConfigItemOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAnalysisGetRiskAnalysisConfigResponseSuccess =
  ApiOperationPostWorkbenchAnalysisGetRiskAnalysisConfigResponse[200];
/**
 * @description
 *   分析预测，示险阈值配置列表
 * @tags 分析预测模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnalysisGetRiskAnalysisConfig = (
  option?: ApiOperationPostWorkbenchAnalysisGetRiskAnalysisConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnalysisGetRiskAnalysisConfigResponseSuccess>(
    "/workbench/analysis/getRiskAnalysisConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAnalysisInsertOrUpdateAnalysisOption =
  AnalysisConfigItemInputDto;

/** @description response type for apiOperationPostWorkbenchAnalysisInsertOrUpdateAnalysis */
interface ApiOperationPostWorkbenchAnalysisInsertOrUpdateAnalysisResponse {
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

type ApiOperationPostWorkbenchAnalysisInsertOrUpdateAnalysisResponseSuccess =
  ApiOperationPostWorkbenchAnalysisInsertOrUpdateAnalysisResponse[200];
/**
 * @description
 *   示险阈值配置，添加和编辑接口
 * @tags 分析预测模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnalysisInsertOrUpdateAnalysis = (
  option?: ApiOperationPostWorkbenchAnalysisInsertOrUpdateAnalysisOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnalysisInsertOrUpdateAnalysisResponseSuccess>(
    "/workbench/analysis/insertOrUpdateAnalysis",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAnalysisUpdIsCheckedOption =
  AnalysisConfigInputDto;

/** @description response type for apiOperationPostWorkbenchAnalysisUpdIsChecked */
interface ApiOperationPostWorkbenchAnalysisUpdIsCheckedResponse {
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

type ApiOperationPostWorkbenchAnalysisUpdIsCheckedResponseSuccess =
  ApiOperationPostWorkbenchAnalysisUpdIsCheckedResponse[200];
/**
 * @description
 *   分析预测编辑 AnalysisConfigInputDto中id,isChecked必传
 *   分析预测编辑
 * @tags 分析预测模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnalysisUpdIsChecked = (
  option?: ApiOperationPostWorkbenchAnalysisUpdIsCheckedOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnalysisUpdIsCheckedResponseSuccess>(
    "/workbench/analysis/updIsChecked",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAnalysisUpdateAnalysisSortOption =
  Array<AnalysisConfigSortInputDto>;

/** @description response type for apiOperationPostWorkbenchAnalysisUpdateAnalysisSort */
interface ApiOperationPostWorkbenchAnalysisUpdateAnalysisSortResponse {
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

type ApiOperationPostWorkbenchAnalysisUpdateAnalysisSortResponseSuccess =
  ApiOperationPostWorkbenchAnalysisUpdateAnalysisSortResponse[200];
/**
 * @description
 *   分析预测自定义排序
 * @tags 分析预测模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnalysisUpdateAnalysisSort = (
  option?: ApiOperationPostWorkbenchAnalysisUpdateAnalysisSortOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnalysisUpdateAnalysisSortResponseSuccess>(
    "/workbench/analysis/updateAnalysisSort",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAnnouncementDeleteAnnouncementIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationPostWorkbenchAnnouncementDeleteAnnouncementId */
interface ApiOperationPostWorkbenchAnnouncementDeleteAnnouncementIdResponse {
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

type ApiOperationPostWorkbenchAnnouncementDeleteAnnouncementIdResponseSuccess =
  ApiOperationPostWorkbenchAnnouncementDeleteAnnouncementIdResponse[200];
/**
 * @description
 *   删除公告信息
 *   删除公告信息
 * @tags 公告API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnnouncementDeleteAnnouncementId = (
  option?: ApiOperationPostWorkbenchAnnouncementDeleteAnnouncementIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnnouncementDeleteAnnouncementIdResponseSuccess>(
    "/workbench/announcement/deleteAnnouncement/:id",
    { method: "post", path: option },
    config
  );

type ApiOperationPostWorkbenchAnnouncementGetAnnouncementDetailIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationPostWorkbenchAnnouncementGetAnnouncementDetailId */
interface ApiOperationPostWorkbenchAnnouncementGetAnnouncementDetailIdResponse {
  /**
   * @description
   *   OK
   */
  200: AnnouncementDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAnnouncementGetAnnouncementDetailIdResponseSuccess =
  ApiOperationPostWorkbenchAnnouncementGetAnnouncementDetailIdResponse[200];
/**
 * @description
 *   查询公告详情
 *   查询公告详情
 * @tags 公告API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnnouncementGetAnnouncementDetailId = (
  option?: ApiOperationPostWorkbenchAnnouncementGetAnnouncementDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnnouncementGetAnnouncementDetailIdResponseSuccess>(
    "/workbench/announcement/getAnnouncementDetail/:id",
    { method: "post", path: option },
    config
  );

/** @description response type for apiOperationGetWorkbenchAnnouncementGetLastAnnouncement */
interface ApiOperationGetWorkbenchAnnouncementGetLastAnnouncementResponse {
  /**
   * @description
   *   OK
   */
  200: AnnouncementDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchAnnouncementGetLastAnnouncementResponseSuccess =
  ApiOperationGetWorkbenchAnnouncementGetLastAnnouncementResponse[200];
/**
 * @description
 *   获取最近一次改版公告
 *   获取最近一次改版公告
 * @tags 公告API
 * @produces *
 */
export const apiOperationGetWorkbenchAnnouncementGetLastAnnouncement = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAnnouncementGetLastAnnouncementResponseSuccess>(
    "/workbench/announcement/getLastAnnouncement",
    { method: "get" },
    config
  );

type ApiOperationPostWorkbenchAnnouncementInsertAnnouncementOption = {
  /**
    @description
      body */
  body: string;
  /**
    @description
      cacheTime
    @format int32 */
  cacheTime: number;
  /**
    @description
      cpmoCop */
  cpmoCop: string;
  /**
    @description
      file */
  file: string;
  /**
    @description
      status
    @format int32 */
  status: number;
  /**
    @description
      title */
  title: string;
};

/** @description response type for apiOperationPostWorkbenchAnnouncementInsertAnnouncement */
interface ApiOperationPostWorkbenchAnnouncementInsertAnnouncementResponse {
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

type ApiOperationPostWorkbenchAnnouncementInsertAnnouncementResponseSuccess =
  ApiOperationPostWorkbenchAnnouncementInsertAnnouncementResponse[200];
/**
 * @description
 *   新增公告信息
 *   新增公告信息
 * @tags 公告API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnnouncementInsertAnnouncement = (
  option?: ApiOperationPostWorkbenchAnnouncementInsertAnnouncementOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnnouncementInsertAnnouncementResponseSuccess>(
    "/workbench/announcement/insertAnnouncement",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchAnnouncementQueryListOption =
  AnnouncementInputDto;

/** @description response type for apiOperationPostWorkbenchAnnouncementQueryList */
interface ApiOperationPostWorkbenchAnnouncementQueryListResponse {
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

type ApiOperationPostWorkbenchAnnouncementQueryListResponseSuccess =
  ApiOperationPostWorkbenchAnnouncementQueryListResponse[200];
/**
 * @description
 *   公告列表查询
 *   公告列表查询
 * @tags 公告API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnnouncementQueryList = (
  option?: ApiOperationPostWorkbenchAnnouncementQueryListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnnouncementQueryListResponseSuccess>(
    "/workbench/announcement/queryList",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationPostWorkbenchAnnouncementSelectCache */
interface ApiOperationPostWorkbenchAnnouncementSelectCacheResponse {
  /**
   * @description
   *   OK
   */
  200: AnnouncementDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchAnnouncementSelectCacheResponseSuccess =
  ApiOperationPostWorkbenchAnnouncementSelectCacheResponse[200];
/**
 * @description
 *   查询redis缓存公告信息
 *   查询redis缓存公告信息
 * @tags 公告API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnnouncementSelectCache = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnnouncementSelectCacheResponseSuccess>(
    "/workbench/announcement/selectCache",
    { method: "post" },
    config
  );

type ApiOperationPostWorkbenchAnnouncementUpdateAnnouncementOption = {
  /**
    @description
      body */
  body: string;
  /**
    @description
      cacheTime
    @format int32 */
  cacheTime: number;
  /**
    @description
      cpmoCop */
  cpmoCop: string;
  /**
    @description
      file */
  file: string;
  /**
    @description
      fileUrl */
  fileUrl: string;
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
  /**
    @description
      title */
  title: string;
};

/** @description response type for apiOperationPostWorkbenchAnnouncementUpdateAnnouncement */
interface ApiOperationPostWorkbenchAnnouncementUpdateAnnouncementResponse {
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

type ApiOperationPostWorkbenchAnnouncementUpdateAnnouncementResponseSuccess =
  ApiOperationPostWorkbenchAnnouncementUpdateAnnouncementResponse[200];
/**
 * @description
 *   修改公告信息
 *   修改公告信息
 * @tags 公告API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAnnouncementUpdateAnnouncement = (
  option?: ApiOperationPostWorkbenchAnnouncementUpdateAnnouncementOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAnnouncementUpdateAnnouncementResponseSuccess>(
    "/workbench/announcement/updateAnnouncement",
    { method: "post", query: option },
    config
  );

type ApiOperationGetWorkbenchAreaDutyPersonGetConfigsTypeCodeEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      typeCode */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchAreaDutyPersonGetConfigsTypeCodeEcode */
interface ApiOperationGetWorkbenchAreaDutyPersonGetConfigsTypeCodeEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AreaDutyPersonConfigOutputDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchAreaDutyPersonGetConfigsTypeCodeEcodeResponseSuccess =
  ApiOperationGetWorkbenchAreaDutyPersonGetConfigsTypeCodeEcodeResponse[200];
/**
 * @description
 *   保存责任人配置
 *   获取责任人配置
 * @tags 工作台区域责任人配置相关
 * @produces *
 */
export const apiOperationGetWorkbenchAreaDutyPersonGetConfigsTypeCodeEcode = (
  option?: ApiOperationGetWorkbenchAreaDutyPersonGetConfigsTypeCodeEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAreaDutyPersonGetConfigsTypeCodeEcodeResponseSuccess>(
    "/workbench/areaDutyPerson/getConfigs/:typeCode/:ecode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsOption =
  AreaDutyPersonInputDto;

/** @description response type for apiOperationPostWorkbenchAreaDutyPersonSaveConfigs */
interface ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsResponse {
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

type ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsResponseSuccess =
  ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsResponse[200];
/**
 * @description
 *   保存责任人配置
 *   保存责任人配置
 * @tags 工作台区域责任人配置相关
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAreaDutyPersonSaveConfigs = (
  option?: ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsResponseSuccess>(
    "/workbench/areaDutyPerson/saveConfigs",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsAnalysisOption =
  AreaDutyPersonInputDto;

/** @description response type for apiOperationPostWorkbenchAreaDutyPersonSaveConfigsAnalysis */
interface ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsAnalysisResponse {
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

type ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsAnalysisResponseSuccess =
  ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsAnalysisResponse[200];
/**
 * @description
 *   保存责任人配置
 *   配置下发校验
 * @tags 工作台区域责任人配置相关
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAreaDutyPersonSaveConfigsAnalysis = (
  option?: ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsAnalysisOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAreaDutyPersonSaveConfigsAnalysisResponseSuccess>(
    "/workbench/areaDutyPerson/saveConfigsAnalysis",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchAutoDisposalGetAreaTypeOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchAutoDisposalGetAreaType */
interface ApiOperationGetWorkbenchAutoDisposalGetAreaTypeResponse {
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

type ApiOperationGetWorkbenchAutoDisposalGetAreaTypeResponseSuccess =
  ApiOperationGetWorkbenchAutoDisposalGetAreaTypeResponse[200];
/**
 * @description
 *   获取责任人区域类型
 * @tags 自动处置配置API
 * @produces *
 */
export const apiOperationGetWorkbenchAutoDisposalGetAreaType = (
  option?: ApiOperationGetWorkbenchAutoDisposalGetAreaTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAutoDisposalGetAreaTypeResponseSuccess>(
    "/workbench/autoDisposal/getAreaType",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchAutoDisposalGetEnabledAutoDisposalOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      类型编码 */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchAutoDisposalGetEnabledAutoDisposal */
interface ApiOperationGetWorkbenchAutoDisposalGetEnabledAutoDisposalResponse {
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

type ApiOperationGetWorkbenchAutoDisposalGetEnabledAutoDisposalResponseSuccess =
  ApiOperationGetWorkbenchAutoDisposalGetEnabledAutoDisposalResponse[200];
/**
 * @description
 *   根据管理实体编码和类型编码获取启用的自动处置配置
 *   获取启用的自动处置配置
 * @tags 自动处置配置API
 * @produces *
 */
export const apiOperationGetWorkbenchAutoDisposalGetEnabledAutoDisposal = (
  option?: ApiOperationGetWorkbenchAutoDisposalGetEnabledAutoDisposalOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchAutoDisposalGetEnabledAutoDisposalResponseSuccess>(
    "/workbench/autoDisposal/getEnabledAutoDisposal",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchAutoDisposalSaveOption = AutoDisposalInputDto;

/** @description response type for apiOperationPostWorkbenchAutoDisposalSave */
interface ApiOperationPostWorkbenchAutoDisposalSaveResponse {
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

type ApiOperationPostWorkbenchAutoDisposalSaveResponseSuccess =
  ApiOperationPostWorkbenchAutoDisposalSaveResponse[200];
/**
 * @description
 *   保存自动处置配置
 *   保存
 * @tags 自动处置配置API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAutoDisposalSave = (
  option?: ApiOperationPostWorkbenchAutoDisposalSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAutoDisposalSaveResponseSuccess>(
    "/workbench/autoDisposal/save",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchAutoDisposalUpdateAreaTypeOption = {
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

/** @description response type for apiOperationPostWorkbenchAutoDisposalUpdateAreaType */
interface ApiOperationPostWorkbenchAutoDisposalUpdateAreaTypeResponse {
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

type ApiOperationPostWorkbenchAutoDisposalUpdateAreaTypeResponseSuccess =
  ApiOperationPostWorkbenchAutoDisposalUpdateAreaTypeResponse[200];
/**
 * @description
 *   保存责任人区域类型
 * @tags 自动处置配置API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchAutoDisposalUpdateAreaType = (
  option?: ApiOperationPostWorkbenchAutoDisposalUpdateAreaTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchAutoDisposalUpdateAreaTypeResponseSuccess>(
    "/workbench/autoDisposal/updateAreaType",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchBatchDeleteRecordsOption = BatchDelRecordInputDto;

/** @description response type for apiOperationPostWorkbenchBatchDeleteRecords */
interface ApiOperationPostWorkbenchBatchDeleteRecordsResponse {
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

type ApiOperationPostWorkbenchBatchDeleteRecordsResponseSuccess =
  ApiOperationPostWorkbenchBatchDeleteRecordsResponse[200];
/**
 * @description
 *   批量删除管网相关记录接口
 * @tags 告警、示险、危险作业批量删除模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchBatchDeleteRecords = (
  option?: ApiOperationPostWorkbenchBatchDeleteRecordsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchBatchDeleteRecordsResponseSuccess>(
    "/workbench/batch/delete/records",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchBatchdelRecordinfoOption = BatchDelRecordInputDto;

/** @description response type for apiOperationPostWorkbenchBatchdelRecordinfo */
interface ApiOperationPostWorkbenchBatchdelRecordinfoResponse {
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

type ApiOperationPostWorkbenchBatchdelRecordinfoResponseSuccess =
  ApiOperationPostWorkbenchBatchdelRecordinfoResponse[200];
/**
 * @description
 *   批量删除工作台记录接口
 * @tags delete-record-controller
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchBatchdelRecordinfo = (
  option?: ApiOperationPostWorkbenchBatchdelRecordinfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchBatchdelRecordinfoResponseSuccess>(
    "/workbench/batchdel/recordinfo",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchBigDataGetExpertEvalDataOption =
  QueryExpertEvalDataDto;

/** @description response type for apiOperationPostWorkbenchBigDataGetExpertEvalData */
interface ApiOperationPostWorkbenchBigDataGetExpertEvalDataResponse {
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

type ApiOperationPostWorkbenchBigDataGetExpertEvalDataResponseSuccess =
  ApiOperationPostWorkbenchBigDataGetExpertEvalDataResponse[200];
/**
 * @description
 *   获取专家评审结果，用于icome详情展示
 * @tags 大数据API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchBigDataGetExpertEvalData = (
  option?: ApiOperationPostWorkbenchBigDataGetExpertEvalDataOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchBigDataGetExpertEvalDataResponseSuccess>(
    "/workbench/bigData/getExpertEvalData",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchByIdIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiOperationGetWorkbenchByIdId */
interface ApiOperationGetWorkbenchByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WorkbenchMultipleConfigDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchByIdIdResponseSuccess =
  ApiOperationGetWorkbenchByIdIdResponse[200];
/**
 * @description
 *   标准配置详情接口
 * @tags 标准配置接口
 * @produces *
 */
export const apiOperationGetWorkbenchByIdId = (
  option?: ApiOperationGetWorkbenchByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchByIdIdResponseSuccess>(
    "/workbench/byId/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchCheckRewardviolationrecordAddOption =
  CheckRewardViolationRecordInputDto;

/** @description response type for apiOperationPostWorkbenchCheckRewardviolationrecordAdd */
interface ApiOperationPostWorkbenchCheckRewardviolationrecordAddResponse {
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

type ApiOperationPostWorkbenchCheckRewardviolationrecordAddResponseSuccess =
  ApiOperationPostWorkbenchCheckRewardviolationrecordAddResponse[200];
/**
 * @description
 *   添加常规监察奖罚记录
 *   添加常规监察奖罚记录
 * @tags 常规监察奖罚相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckRewardviolationrecordAdd = (
  option?: ApiOperationPostWorkbenchCheckRewardviolationrecordAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckRewardviolationrecordAddResponseSuccess>(
    "/workbench/check/rewardviolationrecord/add",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchCheckRewardviolationrecordListOption = {
  /**
    @description
      checkSecondId */
  checkSecondId: string;
};

/** @description response type for apiOperationGetWorkbenchCheckRewardviolationrecordList */
interface ApiOperationGetWorkbenchCheckRewardviolationrecordListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CheckRewardViolationRecordDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchCheckRewardviolationrecordListResponseSuccess =
  ApiOperationGetWorkbenchCheckRewardviolationrecordListResponse[200];
/**
 * @description
 *   查询常规监察奖罚记录列表
 *   查询常规监察奖罚记录列表
 * @tags 常规监察奖罚相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchCheckRewardviolationrecordList = (
  option?: ApiOperationGetWorkbenchCheckRewardviolationrecordListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchCheckRewardviolationrecordListResponseSuccess>(
    "/workbench/check/rewardviolationrecord/list",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchCheckRewardviolationrecordUpdateOption =
  CheckRewardViolationRecordInputDto;

/** @description response type for apiOperationPostWorkbenchCheckRewardviolationrecordUpdate */
interface ApiOperationPostWorkbenchCheckRewardviolationrecordUpdateResponse {
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

type ApiOperationPostWorkbenchCheckRewardviolationrecordUpdateResponseSuccess =
  ApiOperationPostWorkbenchCheckRewardviolationrecordUpdateResponse[200];
/**
 * @description
 *   更新常规监察奖罚记录
 *   更新常规监察奖罚记录
 * @tags 常规监察奖罚相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckRewardviolationrecordUpdate = (
  option?: ApiOperationPostWorkbenchCheckRewardviolationrecordUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckRewardviolationrecordUpdateResponseSuccess>(
    "/workbench/check/rewardviolationrecord/update",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchCheckProportionGetCheckProportionMultipleConfigIdOption =
  {
    /**
    @description
      multipleConfigId
    @format int64 */
    multipleConfigId: number;
  };

/** @description response type for apiOperationGetWorkbenchCheckProportionGetCheckProportionMultipleConfigId */
interface ApiOperationGetWorkbenchCheckProportionGetCheckProportionMultipleConfigIdResponse {
  /**
   * @description
   *   OK
   */
  200: CheckProportionDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchCheckProportionGetCheckProportionMultipleConfigIdResponseSuccess =
  ApiOperationGetWorkbenchCheckProportionGetCheckProportionMultipleConfigIdResponse[200];
/**
 * @description
 *   getCheckProportion
 * @tags 常规监察抽查比例API
 * @produces *
 */
export const apiOperationGetWorkbenchCheckProportionGetCheckProportionMultipleConfigId =
  (
    option?: ApiOperationGetWorkbenchCheckProportionGetCheckProportionMultipleConfigIdOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetWorkbenchCheckProportionGetCheckProportionMultipleConfigIdResponseSuccess>(
      "/workbench/checkProportion/getCheckProportion/:multipleConfigId",
      { method: "get", path: option },
      config
    );

type ApiOperationPostWorkbenchCheckProportionSaveOption =
  CheckProportionSaveInputDto;

/** @description response type for apiOperationPostWorkbenchCheckProportionSave */
interface ApiOperationPostWorkbenchCheckProportionSaveResponse {
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

type ApiOperationPostWorkbenchCheckProportionSaveResponseSuccess =
  ApiOperationPostWorkbenchCheckProportionSaveResponse[200];
/**
 * @description
 *   抽查比例
 *   保存抽查比例
 * @tags 常规监察抽查比例API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckProportionSave = (
  option?: ApiOperationPostWorkbenchCheckProportionSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckProportionSaveResponseSuccess>(
    "/workbench/checkProportion/save",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchCheckRectifyGetCountCompanyCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
};

/** @description response type for apiOperationGetWorkbenchCheckRectifyGetCountCompanyCode */
interface ApiOperationGetWorkbenchCheckRectifyGetCountCompanyCodeResponse {
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

type ApiOperationGetWorkbenchCheckRectifyGetCountCompanyCodeResponseSuccess =
  ApiOperationGetWorkbenchCheckRectifyGetCountCompanyCodeResponse[200];
/**
 * @description
 *   问题反馈记录未查看统计
 * @tags 问题反馈记录
 * @produces *
 */
export const apiOperationGetWorkbenchCheckRectifyGetCountCompanyCode = (
  option?: ApiOperationGetWorkbenchCheckRectifyGetCountCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchCheckRectifyGetCountCompanyCodeResponseSuccess>(
    "/workbench/checkRectify/getCount/:companyCode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchCheckRectifyGetListOption = CheckRectifyInputDto;

/** @description response type for apiOperationPostWorkbenchCheckRectifyGetList */
interface ApiOperationPostWorkbenchCheckRectifyGetListResponse {
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

type ApiOperationPostWorkbenchCheckRectifyGetListResponseSuccess =
  ApiOperationPostWorkbenchCheckRectifyGetListResponse[200];
/**
 * @description
 *   问题反馈记录列表
 * @tags 问题反馈记录
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckRectifyGetList = (
  option?: ApiOperationPostWorkbenchCheckRectifyGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckRectifyGetListResponseSuccess>(
    "/workbench/checkRectify/getList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchCheckRectifyGetProblemRectifyOption =
  ProblemRectifyInputDTO;

/** @description response type for apiOperationPostWorkbenchCheckRectifyGetProblemRectify */
interface ApiOperationPostWorkbenchCheckRectifyGetProblemRectifyResponse {
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

type ApiOperationPostWorkbenchCheckRectifyGetProblemRectifyResponseSuccess =
  ApiOperationPostWorkbenchCheckRectifyGetProblemRectifyResponse[200];
/**
 * @description
 *   要事跟踪-问题整改列表
 * @tags 问题反馈记录
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckRectifyGetProblemRectify = (
  option?: ApiOperationPostWorkbenchCheckRectifyGetProblemRectifyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckRectifyGetProblemRectifyResponseSuccess>(
    "/workbench/checkRectify/getProblemRectify",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationPostWorkbenchCheckRectifyPushOverdueRectify */
interface ApiOperationPostWorkbenchCheckRectifyPushOverdueRectifyResponse {
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

type ApiOperationPostWorkbenchCheckRectifyPushOverdueRectifyResponseSuccess =
  ApiOperationPostWorkbenchCheckRectifyPushOverdueRectifyResponse[200];
/**
 * @description
 *   超期未整改推送icome
 * @tags 问题反馈记录
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckRectifyPushOverdueRectify = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckRectifyPushOverdueRectifyResponseSuccess>(
    "/workbench/checkRectify/pushOverdueRectify",
    { method: "post" },
    config
  );

/** @description response type for apiOperationGetWorkbenchCheckWorkGetCheckKeyProcessDictLevelList */
interface ApiOperationGetWorkbenchCheckWorkGetCheckKeyProcessDictLevelListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CheckKeyProcessDict>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchCheckWorkGetCheckKeyProcessDictLevelListResponseSuccess =
  ApiOperationGetWorkbenchCheckWorkGetCheckKeyProcessDictLevelListResponse[200];
/**
 * @description
 *   一级工序列表
 *   一级工序查询
 * @tags 常规监察工作台相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchCheckWorkGetCheckKeyProcessDictLevelList =
  (config?: AxiosRequestConfig) =>
    requester<ApiOperationGetWorkbenchCheckWorkGetCheckKeyProcessDictLevelListResponseSuccess>(
      "/workbench/checkWork/getCheckKeyProcessDictLevelList",
      { method: "get" },
      config
    );

type ApiOperationPostWorkbenchCheckWorkGetCheckWorkDetailListOption =
  CheckWorkbenchNewInputDto;

/** @description response type for apiOperationPostWorkbenchCheckWorkGetCheckWorkDetailList */
interface ApiOperationPostWorkbenchCheckWorkGetCheckWorkDetailListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CheckWorkbenchDetailDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchCheckWorkGetCheckWorkDetailListResponseSuccess =
  ApiOperationPostWorkbenchCheckWorkGetCheckWorkDetailListResponse[200];
/**
 * @description
 *   新版常规监察工作台列表数据获取
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckWorkGetCheckWorkDetailList = (
  option?: ApiOperationPostWorkbenchCheckWorkGetCheckWorkDetailListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckWorkGetCheckWorkDetailListResponseSuccess>(
    "/workbench/checkWork/getCheckWorkDetailList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchCheckWorkGetCheckWorkListDataOption =
  Array<StationCheckWorkInputDto>;

/** @description response type for apiOperationPostWorkbenchCheckWorkGetCheckWorkListData */
interface ApiOperationPostWorkbenchCheckWorkGetCheckWorkListDataResponse {
  /**
   * @description
   *   OK
   */
  200: Array<StationCheckWorkListOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchCheckWorkGetCheckWorkListDataResponseSuccess =
  ApiOperationPostWorkbenchCheckWorkGetCheckWorkListDataResponse[200];
/**
 * @description
 *   获取厂站常规监察一级列表
 * @tags 厂站常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckWorkGetCheckWorkListData = (
  option?: ApiOperationPostWorkbenchCheckWorkGetCheckWorkListDataOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckWorkGetCheckWorkListDataResponseSuccess>(
    "/workbench/checkWork/getCheckWorkListData",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchCheckWorkGetCheckWorkTitleDataOption =
  CheckWorkbenchNewInputDto;

/** @description response type for apiOperationPostWorkbenchCheckWorkGetCheckWorkTitleData */
interface ApiOperationPostWorkbenchCheckWorkGetCheckWorkTitleDataResponse {
  /**
   * @description
   *   OK
   */
  200: CheckWorkbenchTitleDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchCheckWorkGetCheckWorkTitleDataResponseSuccess =
  ApiOperationPostWorkbenchCheckWorkGetCheckWorkTitleDataResponse[200];
/**
 * @description
 *   新版常规监察工作台标题栏数据获取
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckWorkGetCheckWorkTitleData = (
  option?: ApiOperationPostWorkbenchCheckWorkGetCheckWorkTitleDataOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckWorkGetCheckWorkTitleDataResponseSuccess>(
    "/workbench/checkWork/getCheckWorkTitleData",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationGetWorkbenchCheckWorkGetChildCheckKeyProcessDictLevelList */
interface ApiOperationGetWorkbenchCheckWorkGetChildCheckKeyProcessDictLevelListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CheckKeyProcessDict>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchCheckWorkGetChildCheckKeyProcessDictLevelListResponseSuccess =
  ApiOperationGetWorkbenchCheckWorkGetChildCheckKeyProcessDictLevelListResponse[200];
/**
 * @description
 *   二级工序列表
 *   二级工序查询
 * @tags 常规监察工作台相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchCheckWorkGetChildCheckKeyProcessDictLevelList =
  (config?: AxiosRequestConfig) =>
    requester<ApiOperationGetWorkbenchCheckWorkGetChildCheckKeyProcessDictLevelListResponseSuccess>(
      "/workbench/checkWork/getChildCheckKeyProcessDictLevelList",
      { method: "get" },
      config
    );

type ApiOperationPostWorkbenchCheckWorkGetCurrentDayEvaluateOption =
  Array<CurrentDayEvaluateInputDto>;

/** @description response type for apiOperationPostWorkbenchCheckWorkGetCurrentDayEvaluate */
interface ApiOperationPostWorkbenchCheckWorkGetCurrentDayEvaluateResponse {
  /**
   * @description
   *   OK
   */
  200: Array<StationCheckWorkEvaluateOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchCheckWorkGetCurrentDayEvaluateResponseSuccess =
  ApiOperationPostWorkbenchCheckWorkGetCurrentDayEvaluateResponse[200];
/**
 * @description
 *   获取厂站常规监察当前登录人今日评价结果
 * @tags 厂站常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckWorkGetCurrentDayEvaluate = (
  option?: ApiOperationPostWorkbenchCheckWorkGetCurrentDayEvaluateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckWorkGetCurrentDayEvaluateResponseSuccess>(
    "/workbench/checkWork/getCurrentDayEvaluate",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchCheckWorkGetStationCheckTitleDataOption =
  Array<StationCheckWorkInputDto>;

/** @description response type for apiOperationPostWorkbenchCheckWorkGetStationCheckTitleData */
interface ApiOperationPostWorkbenchCheckWorkGetStationCheckTitleDataResponse {
  /**
   * @description
   *   OK
   */
  200: Array<StationCheckWorkEvaluateOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchCheckWorkGetStationCheckTitleDataResponseSuccess =
  ApiOperationPostWorkbenchCheckWorkGetStationCheckTitleDataResponse[200];
/**
 * @description
 *   获取厂站常规监察今日评价数据列表
 * @tags 厂站常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckWorkGetStationCheckTitleData = (
  option?: ApiOperationPostWorkbenchCheckWorkGetStationCheckTitleDataOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckWorkGetStationCheckTitleDataResponseSuccess>(
    "/workbench/checkWork/getStationCheckTitleData",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchCheckWorkGetcheckKeyProcessDictLevelCascadeOption =
  CheckKeyProcessDict;

/** @description response type for apiOperationGetWorkbenchCheckWorkGetcheckKeyProcessDictLevelCascade */
interface ApiOperationGetWorkbenchCheckWorkGetcheckKeyProcessDictLevelCascadeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CheckKeyProcessDict>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchCheckWorkGetcheckKeyProcessDictLevelCascadeResponseSuccess =
  ApiOperationGetWorkbenchCheckWorkGetcheckKeyProcessDictLevelCascadeResponse[200];
/**
 * @description
 *   根据一级工序编码查询二级工序 CheckKeyProcessDict中一级code必传
 *   联级工序查询
 * @tags 常规监察工作台相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchCheckWorkGetcheckKeyProcessDictLevelCascade =
  (
    option?: ApiOperationGetWorkbenchCheckWorkGetcheckKeyProcessDictLevelCascadeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetWorkbenchCheckWorkGetcheckKeyProcessDictLevelCascadeResponseSuccess>(
      "/workbench/checkWork/getcheckKeyProcessDictLevelCascade",
      { method: "get", body: option },
      config
    );

type ApiOperationPostWorkbenchCheckWorkGetcheckWorkListOption =
  CheckWorkbenchInputDto;

/** @description response type for apiOperationPostWorkbenchCheckWorkGetcheckWorkList */
interface ApiOperationPostWorkbenchCheckWorkGetcheckWorkListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CheckWorkbenchDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchCheckWorkGetcheckWorkListResponseSuccess =
  ApiOperationPostWorkbenchCheckWorkGetcheckWorkListResponse[200];
/**
 * @description
 *   常规监察一级列表查询 InputDTO中companyCode必传
 *   常规监察工作台查询
 * @tags 常规监察工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCheckWorkGetcheckWorkList = (
  option?: ApiOperationPostWorkbenchCheckWorkGetcheckWorkListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCheckWorkGetcheckWorkListResponseSuccess>(
    "/workbench/checkWork/getcheckWorkList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchCityInfoOption = WorkbenchTitles;

/** @description response type for apiOperationPostWorkbenchCityInfo */
interface ApiOperationPostWorkbenchCityInfoResponse {
  /**
   * @description
   *   OK
   */
  200: WorkbenchCityOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchCityInfoResponseSuccess =
  ApiOperationPostWorkbenchCityInfoResponse[200];
/**
 * @description
 *   更改企业城市信息接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchCityInfo = (
  option?: ApiOperationPostWorkbenchCityInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchCityInfoResponseSuccess>(
    "/workbench/city/info",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchConfinedSpaceDangerOption = {
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

/** @description response type for apiOperationGetWorkbenchConfinedSpaceDanger */
interface ApiOperationGetWorkbenchConfinedSpaceDangerResponse {
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

type ApiOperationGetWorkbenchConfinedSpaceDangerResponseSuccess =
  ApiOperationGetWorkbenchConfinedSpaceDangerResponse[200];
/**
 * @description
 *   危险作业-有限空间-列表查询
 * @tags 危险作业模块
 * @produces *
 */
export const apiOperationGetWorkbenchConfinedSpaceDanger = (
  option?: ApiOperationGetWorkbenchConfinedSpaceDangerOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchConfinedSpaceDangerResponseSuccess>(
    "/workbench/confinedSpaceDanger",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchConfinedSpaceDangerOption =
  ConfinedSpaceDangerAppraiseDto;

/** @description response type for apiOperationPostWorkbenchConfinedSpaceDanger */
interface ApiOperationPostWorkbenchConfinedSpaceDangerResponse {
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

type ApiOperationPostWorkbenchConfinedSpaceDangerResponseSuccess =
  ApiOperationPostWorkbenchConfinedSpaceDangerResponse[200];
/**
 * @description
 *   危险作业-有限空间-评价
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchConfinedSpaceDanger = (
  option?: ApiOperationPostWorkbenchConfinedSpaceDangerOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchConfinedSpaceDangerResponseSuccess>(
    "/workbench/confinedSpaceDanger",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchConfinedSpaceDangerWorkNoOption = {
  /**
    @description
      workNo */
  workNo: string;
};

/** @description response type for apiOperationGetWorkbenchConfinedSpaceDangerWorkNo */
interface ApiOperationGetWorkbenchConfinedSpaceDangerWorkNoResponse {
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

type ApiOperationGetWorkbenchConfinedSpaceDangerWorkNoResponseSuccess =
  ApiOperationGetWorkbenchConfinedSpaceDangerWorkNoResponse[200];
/**
 * @description
 *   危险作业-有限空间-查看详情
 * @tags 危险作业模块
 * @produces *
 */
export const apiOperationGetWorkbenchConfinedSpaceDangerWorkNo = (
  option?: ApiOperationGetWorkbenchConfinedSpaceDangerWorkNoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchConfinedSpaceDangerWorkNoResponseSuccess>(
    "/workbench/confinedSpaceDanger/:workNo",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchContingencyPlanGetContingencyPlansOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      类型编码 */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchContingencyPlanGetContingencyPlans */
interface ApiOperationGetWorkbenchContingencyPlanGetContingencyPlansResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ContingencyPlanDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchContingencyPlanGetContingencyPlansResponseSuccess =
  ApiOperationGetWorkbenchContingencyPlanGetContingencyPlansResponse[200];
/**
 * @description
 *   根据管理实体编码和类型编码获取应急预案
 *   获取应急预案
 * @tags 应急预案API
 * @produces *
 */
export const apiOperationGetWorkbenchContingencyPlanGetContingencyPlans = (
  option?: ApiOperationGetWorkbenchContingencyPlanGetContingencyPlansOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchContingencyPlanGetContingencyPlansResponseSuccess>(
    "/workbench/contingencyPlan/getContingencyPlans",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchContingencyPlanGetOneIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchContingencyPlanGetOneId */
interface ApiOperationGetWorkbenchContingencyPlanGetOneIdResponse {
  /**
   * @description
   *   OK
   */
  200: ContingencyPlanDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchContingencyPlanGetOneIdResponseSuccess =
  ApiOperationGetWorkbenchContingencyPlanGetOneIdResponse[200];
/**
 * @description
 *   根据ID获取应急预案
 *   获取应急预案
 * @tags 应急预案API
 * @produces *
 */
export const apiOperationGetWorkbenchContingencyPlanGetOneId = (
  option?: ApiOperationGetWorkbenchContingencyPlanGetOneIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchContingencyPlanGetOneIdResponseSuccess>(
    "/workbench/contingencyPlan/getOne/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchContingencyPlanRemoveIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationPostWorkbenchContingencyPlanRemoveId */
interface ApiOperationPostWorkbenchContingencyPlanRemoveIdResponse {
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

type ApiOperationPostWorkbenchContingencyPlanRemoveIdResponseSuccess =
  ApiOperationPostWorkbenchContingencyPlanRemoveIdResponse[200];
/**
 * @description
 *   删除应急预案
 *   删除应急预案
 * @tags 应急预案API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchContingencyPlanRemoveId = (
  option?: ApiOperationPostWorkbenchContingencyPlanRemoveIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchContingencyPlanRemoveIdResponseSuccess>(
    "/workbench/contingencyPlan/remove/:id",
    { method: "post", path: option },
    config
  );

/** @description request parameter type for apiOperationPostWorkbenchContingencyPlanSaveMultipleConfigId */
interface ApiOperationPostWorkbenchContingencyPlanSaveMultipleConfigIdOption {
  /**
   * @description
   *   file
   */
  query?: {
    /**
        @description
          file */
    file: string;
  };
}

/** @description request parameter type for apiOperationPostWorkbenchContingencyPlanSaveMultipleConfigId */
interface ApiOperationPostWorkbenchContingencyPlanSaveMultipleConfigIdOption {
  /**
   * @description
   *   multipleConfigId
   * @format int64
   */
  path: {
    /**
        @description
          multipleConfigId
        @format int64 */
    multipleConfigId: number;
  };
}

/** @description response type for apiOperationPostWorkbenchContingencyPlanSaveMultipleConfigId */
interface ApiOperationPostWorkbenchContingencyPlanSaveMultipleConfigIdResponse {
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

type ApiOperationPostWorkbenchContingencyPlanSaveMultipleConfigIdResponseSuccess =
  ApiOperationPostWorkbenchContingencyPlanSaveMultipleConfigIdResponse[200];
/**
 * @description
 *   保存应急预案
 *   保存应急预案
 * @tags 应急预案API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchContingencyPlanSaveMultipleConfigId = (
  option: ApiOperationPostWorkbenchContingencyPlanSaveMultipleConfigIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchContingencyPlanSaveMultipleConfigIdResponseSuccess>(
    "/workbench/contingencyPlan/save/:multipleConfigId",
    { method: "post", ...option },
    config
  );

type ApiOperationPostWorkbenchDangerRewardviolationrecordAddOption =
  DangerRewardViolationRecordInputDto;

/** @description response type for apiOperationPostWorkbenchDangerRewardviolationrecordAdd */
interface ApiOperationPostWorkbenchDangerRewardviolationrecordAddResponse {
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

type ApiOperationPostWorkbenchDangerRewardviolationrecordAddResponseSuccess =
  ApiOperationPostWorkbenchDangerRewardviolationrecordAddResponse[200];
/**
 * @description
 *   添加危险作业奖罚记录
 *   添加危险作业奖罚记录
 * @tags 危险作业奖罚相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchDangerRewardviolationrecordAdd = (
  option?: ApiOperationPostWorkbenchDangerRewardviolationrecordAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchDangerRewardviolationrecordAddResponseSuccess>(
    "/workbench/danger/rewardviolationrecord/add",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchDangerRewardviolationrecordListOption = {
  /**
    @description
      dangerSecondId */
  dangerSecondId: string;
};

/** @description response type for apiOperationGetWorkbenchDangerRewardviolationrecordList */
interface ApiOperationGetWorkbenchDangerRewardviolationrecordListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerRewardViolationRecordDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchDangerRewardviolationrecordListResponseSuccess =
  ApiOperationGetWorkbenchDangerRewardviolationrecordListResponse[200];
/**
 * @description
 *   查询危险作业奖罚记录列表
 *   查询危险作业奖罚记录列表
 * @tags 危险作业奖罚相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchDangerRewardviolationrecordList = (
  option?: ApiOperationGetWorkbenchDangerRewardviolationrecordListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchDangerRewardviolationrecordListResponseSuccess>(
    "/workbench/danger/rewardviolationrecord/list",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchDangerRewardviolationrecordUpdateOption =
  DangerRewardViolationRecordInputDto;

/** @description response type for apiOperationPostWorkbenchDangerRewardviolationrecordUpdate */
interface ApiOperationPostWorkbenchDangerRewardviolationrecordUpdateResponse {
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

type ApiOperationPostWorkbenchDangerRewardviolationrecordUpdateResponseSuccess =
  ApiOperationPostWorkbenchDangerRewardviolationrecordUpdateResponse[200];
/**
 * @description
 *   更新危险作业奖罚记录
 *   更新危险作业奖罚记录
 * @tags 危险作业奖罚相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchDangerRewardviolationrecordUpdate = (
  option?: ApiOperationPostWorkbenchDangerRewardviolationrecordUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchDangerRewardviolationrecordUpdateResponseSuccess>(
    "/workbench/danger/rewardviolationrecord/update",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchDangerWorkStandardConfigGetListByWorkTypeIndexOption =
  {
    /**
    @description
      ecode */
    ecode: string;
    /**
    @description
      workTypeIndex */
    workTypeIndex: string;
  };

/** @description response type for apiOperationGetWorkbenchDangerWorkStandardConfigGetListByWorkTypeIndex */
interface ApiOperationGetWorkbenchDangerWorkStandardConfigGetListByWorkTypeIndexResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ProDangerWorkStandardConfigDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchDangerWorkStandardConfigGetListByWorkTypeIndexResponseSuccess =
  ApiOperationGetWorkbenchDangerWorkStandardConfigGetListByWorkTypeIndexResponse[200];
/**
 * @description
 *   获取某个管理实体下某种危险作业类型的作业标准列表
 *   获取作业标准列表
 * @tags 危险作业作业标准配置API
 * @produces *
 */
export const apiOperationGetWorkbenchDangerWorkStandardConfigGetListByWorkTypeIndex =
  (
    option?: ApiOperationGetWorkbenchDangerWorkStandardConfigGetListByWorkTypeIndexOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetWorkbenchDangerWorkStandardConfigGetListByWorkTypeIndexResponseSuccess>(
      "/workbench/dangerWorkStandardConfig/getListByWorkTypeIndex",
      { method: "get", query: option },
      config
    );

type ApiOperationPostWorkbenchDangerousCountUnderwayWorkOption =
  WorkRegulationInputDto;

/** @description response type for apiOperationPostWorkbenchDangerousCountUnderwayWork */
interface ApiOperationPostWorkbenchDangerousCountUnderwayWorkResponse {
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

type ApiOperationPostWorkbenchDangerousCountUnderwayWorkResponseSuccess =
  ApiOperationPostWorkbenchDangerousCountUnderwayWorkResponse[200];
/**
 * @description
 *   作业监管查询 InputDTO中ecode必传
 *   作业监管进行中数
 * @tags 危险作业模块-作业监管
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchDangerousCountUnderwayWork = (
  option?: ApiOperationPostWorkbenchDangerousCountUnderwayWorkOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchDangerousCountUnderwayWorkResponseSuccess>(
    "/workbench/dangerous/countUnderwayWork",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchDangerousGetDangerousListOption =
  DangerousWorkInputDto;

/** @description response type for apiOperationPostWorkbenchDangerousGetDangerousList */
interface ApiOperationPostWorkbenchDangerousGetDangerousListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DangerousWorkWorkbenchDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchDangerousGetDangerousListResponseSuccess =
  ApiOperationPostWorkbenchDangerousGetDangerousListResponse[200];
/**
 * @description
 *   首页危险作业列表查询
 *   首页危险作业列表查询
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchDangerousGetDangerousList = (
  option?: ApiOperationPostWorkbenchDangerousGetDangerousListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchDangerousGetDangerousListResponseSuccess>(
    "/workbench/dangerous/getDangerousList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchDangerousGetWorkRegulationListOption =
  WorkRegulationInputDto;

/** @description response type for apiOperationPostWorkbenchDangerousGetWorkRegulationList */
interface ApiOperationPostWorkbenchDangerousGetWorkRegulationListResponse {
  /**
   * @description
   *   OK
   */
  200: PageDataNetworkDangerRegulationOutputDTO;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchDangerousGetWorkRegulationListResponseSuccess =
  ApiOperationPostWorkbenchDangerousGetWorkRegulationListResponse[200];
/**
 * @description
 *   作业监管查询 InputDTO中ecode必传
 *   作业监管列表查询
 * @tags 危险作业模块-作业监管
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchDangerousGetWorkRegulationList = (
  option?: ApiOperationPostWorkbenchDangerousGetWorkRegulationListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchDangerousGetWorkRegulationListResponseSuccess>(
    "/workbench/dangerous/getWorkRegulationList",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchDelCheckByCodeIdWorkNodeCodeOption = {
  /**
    @description
      id */
  id: string;
  /**
    @description
      workNodeCode */
  workNodeCode: string;
};

/** @description response type for apiOperationGetWorkbenchDelCheckByCodeIdWorkNodeCode */
interface ApiOperationGetWorkbenchDelCheckByCodeIdWorkNodeCodeResponse {
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

type ApiOperationGetWorkbenchDelCheckByCodeIdWorkNodeCodeResponseSuccess =
  ApiOperationGetWorkbenchDelCheckByCodeIdWorkNodeCodeResponse[200];
/**
 * @description
 *   id 为数据体id 必填
 *   管网常规检查删除数据接口
 * @tags 管网常规检查删除接口
 * @produces *
 */
export const apiOperationGetWorkbenchDelCheckByCodeIdWorkNodeCode = (
  option?: ApiOperationGetWorkbenchDelCheckByCodeIdWorkNodeCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchDelCheckByCodeIdWorkNodeCodeResponseSuccess>(
    "/workbench/delCheckByCode/:id/:workNodeCode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchDelCheckByCodeIdWorkNodeCodeOption = {
  /**
    @description
      id */
  id: string;
  /**
    @description
      workNodeCode */
  workNodeCode: string;
};

/** @description response type for apiOperationPostWorkbenchDelCheckByCodeIdWorkNodeCode */
interface ApiOperationPostWorkbenchDelCheckByCodeIdWorkNodeCodeResponse {
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

type ApiOperationPostWorkbenchDelCheckByCodeIdWorkNodeCodeResponseSuccess =
  ApiOperationPostWorkbenchDelCheckByCodeIdWorkNodeCodeResponse[200];
/**
 * @description
 *   id 为数据体id 必填
 *   管网常规检查删除数据接口
 * @tags 删除管网常规检查模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchDelCheckByCodeIdWorkNodeCode = (
  option?: ApiOperationPostWorkbenchDelCheckByCodeIdWorkNodeCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchDelCheckByCodeIdWorkNodeCodeResponseSuccess>(
    "/workbench/delCheckByCode/:id/:workNodeCode",
    { method: "post", path: option },
    config
  );

type ApiOperationDeleteWorkbenchDeleteOutboundConfigOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      分机号 */
  extensionNum: string;
};

/** @description response type for apiOperationDeleteWorkbenchDeleteOutboundConfig */
interface ApiOperationDeleteWorkbenchDeleteOutboundConfigResponse {
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

type ApiOperationDeleteWorkbenchDeleteOutboundConfigResponseSuccess =
  ApiOperationDeleteWorkbenchDeleteOutboundConfigResponse[200];
/**
 * @description
 *   95158坐席电话配置 分机删除接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationDeleteWorkbenchDeleteOutboundConfig = (
  option?: ApiOperationDeleteWorkbenchDeleteOutboundConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationDeleteWorkbenchDeleteOutboundConfigResponseSuccess>(
    "/workbench/deleteOutboundConfig",
    { method: "delete", query: option },
    config
  );

type ApiOperationPostWorkbenchDeleteRedisDangerOption = DangerRedisInputDTO;

/** @description response type for apiOperationPostWorkbenchDeleteRedisDanger */
interface ApiOperationPostWorkbenchDeleteRedisDangerResponse {
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

type ApiOperationPostWorkbenchDeleteRedisDangerResponseSuccess =
  ApiOperationPostWorkbenchDeleteRedisDangerResponse[200];
/**
 * @description
 *   危险作业-删除redis缓存
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchDeleteRedisDanger = (
  option?: ApiOperationPostWorkbenchDeleteRedisDangerOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchDeleteRedisDangerResponseSuccess>(
    "/workbench/deleteRedisDanger",
    { method: "post", body: option },
    config
  );

type ApiOperationDeleteWorkbenchDeleteRoleWhiteListIcomeNumCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
  /**
    @description
      icomeNum */
  icomeNum: string;
};

/** @description response type for apiOperationDeleteWorkbenchDeleteRoleWhiteListIcomeNumCpmoCop */
interface ApiOperationDeleteWorkbenchDeleteRoleWhiteListIcomeNumCpmoCopResponse {
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

type ApiOperationDeleteWorkbenchDeleteRoleWhiteListIcomeNumCpmoCopResponseSuccess =
  ApiOperationDeleteWorkbenchDeleteRoleWhiteListIcomeNumCpmoCopResponse[200];
/**
 * @description
 *   角色白名单——删除
 * @tags 角色白名单
 * @produces *
 */
export const apiOperationDeleteWorkbenchDeleteRoleWhiteListIcomeNumCpmoCop = (
  option?: ApiOperationDeleteWorkbenchDeleteRoleWhiteListIcomeNumCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationDeleteWorkbenchDeleteRoleWhiteListIcomeNumCpmoCopResponseSuccess>(
    "/workbench/deleteRoleWhiteList/:icomeNum/:cpmoCop",
    { method: "delete", path: option },
    config
  );

type ApiOperationGetWorkbenchDisposalCommentShortcutGetOfCategoryOption = {
  /**
    @description
      分类 */
  category: string;
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      类型编码 */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchDisposalCommentShortcutGetOfCategory */
interface ApiOperationGetWorkbenchDisposalCommentShortcutGetOfCategoryResponse {
  /**
   * @description
   *   OK
   */
  200: Array<DisposalCommentShortcutDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchDisposalCommentShortcutGetOfCategoryResponseSuccess =
  ApiOperationGetWorkbenchDisposalCommentShortcutGetOfCategoryResponse[200];
/**
 * @description
 *   根据管理实体编码、类型编码和分类获取快捷处置建议
 *   获取某个分类的快捷处置建议
 * @tags 快捷处置建议配置API
 * @produces *
 */
export const apiOperationGetWorkbenchDisposalCommentShortcutGetOfCategory = (
  option?: ApiOperationGetWorkbenchDisposalCommentShortcutGetOfCategoryOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchDisposalCommentShortcutGetOfCategoryResponseSuccess>(
    "/workbench/disposalCommentShortcut/getOfCategory",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchDisposalCommentShortcutSaveOption =
  DisposalCommentShortcutInputDto;

/** @description response type for apiOperationPostWorkbenchDisposalCommentShortcutSave */
interface ApiOperationPostWorkbenchDisposalCommentShortcutSaveResponse {
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

type ApiOperationPostWorkbenchDisposalCommentShortcutSaveResponseSuccess =
  ApiOperationPostWorkbenchDisposalCommentShortcutSaveResponse[200];
/**
 * @description
 *   保存快捷处置建议配置
 *   保存
 * @tags 快捷处置建议配置API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchDisposalCommentShortcutSave = (
  option?: ApiOperationPostWorkbenchDisposalCommentShortcutSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchDisposalCommentShortcutSaveResponseSuccess>(
    "/workbench/disposalCommentShortcut/save",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchEnterpriseAddOption =
  EnterprisePushConfigAddInputDto;

/** @description response type for apiOperationPostWorkbenchEnterpriseAdd */
interface ApiOperationPostWorkbenchEnterpriseAddResponse {
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

type ApiOperationPostWorkbenchEnterpriseAddResponseSuccess =
  ApiOperationPostWorkbenchEnterpriseAddResponse[200];
/**
 * @description
 *   add
 * @tags 公司数据推送API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchEnterpriseAdd = (
  option?: ApiOperationPostWorkbenchEnterpriseAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchEnterpriseAddResponseSuccess>(
    "/workbench/enterprise/add",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchEnterpriseDelIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchEnterpriseDelId */
interface ApiOperationGetWorkbenchEnterpriseDelIdResponse {
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

type ApiOperationGetWorkbenchEnterpriseDelIdResponseSuccess =
  ApiOperationGetWorkbenchEnterpriseDelIdResponse[200];
/**
 * @description
 *   del
 * @tags 公司数据推送API
 * @produces *
 */
export const apiOperationGetWorkbenchEnterpriseDelId = (
  option?: ApiOperationGetWorkbenchEnterpriseDelIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchEnterpriseDelIdResponseSuccess>(
    "/workbench/enterprise/del/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchEnterpriseGetIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchEnterpriseGetId */
interface ApiOperationGetWorkbenchEnterpriseGetIdResponse {
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

type ApiOperationGetWorkbenchEnterpriseGetIdResponseSuccess =
  ApiOperationGetWorkbenchEnterpriseGetIdResponse[200];
/**
 * @description
 *   get
 * @tags 公司数据推送API
 * @produces *
 */
export const apiOperationGetWorkbenchEnterpriseGetId = (
  option?: ApiOperationGetWorkbenchEnterpriseGetIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchEnterpriseGetIdResponseSuccess>(
    "/workbench/enterprise/get/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchEnterprisePushListOption =
  EnterprisePushConfigInputDto;

/** @description response type for apiOperationPostWorkbenchEnterprisePushList */
interface ApiOperationPostWorkbenchEnterprisePushListResponse {
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

type ApiOperationPostWorkbenchEnterprisePushListResponseSuccess =
  ApiOperationPostWorkbenchEnterprisePushListResponse[200];
/**
 * @description
 *   list
 * @tags 公司数据推送API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchEnterprisePushList = (
  option?: ApiOperationPostWorkbenchEnterprisePushListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchEnterprisePushListResponseSuccess>(
    "/workbench/enterprise/push/list",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchEnterpriseUpdOption =
  EnterprisePushConfigAddInputDto;

/** @description response type for apiOperationPostWorkbenchEnterpriseUpd */
interface ApiOperationPostWorkbenchEnterpriseUpdResponse {
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

type ApiOperationPostWorkbenchEnterpriseUpdResponseSuccess =
  ApiOperationPostWorkbenchEnterpriseUpdResponse[200];
/**
 * @description
 *   upd
 * @tags 公司数据推送API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchEnterpriseUpd = (
  option?: ApiOperationPostWorkbenchEnterpriseUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchEnterpriseUpdResponseSuccess>(
    "/workbench/enterprise/upd",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchFeedbackOverdueGetConfigOption =
  FeedbackOverdueConfigInputDto;

/** @description response type for apiOperationPostWorkbenchFeedbackOverdueGetConfig */
interface ApiOperationPostWorkbenchFeedbackOverdueGetConfigResponse {
  /**
   * @description
   *   OK
   */
  200: Array<FeedbackOverdueConfigOutPutDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchFeedbackOverdueGetConfigResponseSuccess =
  ApiOperationPostWorkbenchFeedbackOverdueGetConfigResponse[200];
/**
 * @description
 *   getConfig
 * @tags 反馈超期对外接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchFeedbackOverdueGetConfig = (
  option?: ApiOperationPostWorkbenchFeedbackOverdueGetConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchFeedbackOverdueGetConfigResponseSuccess>(
    "/workbench/feedbackOverdue/getConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchFeedbackOverdueSaveConfigOption =
  FeedbackOverdueSaveDto;

/** @description response type for apiOperationPostWorkbenchFeedbackOverdueSaveConfig */
interface ApiOperationPostWorkbenchFeedbackOverdueSaveConfigResponse {
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

type ApiOperationPostWorkbenchFeedbackOverdueSaveConfigResponseSuccess =
  ApiOperationPostWorkbenchFeedbackOverdueSaveConfigResponse[200];
/**
 * @description
 *   saveConfig
 * @tags 反馈超期对外接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchFeedbackOverdueSaveConfig = (
  option?: ApiOperationPostWorkbenchFeedbackOverdueSaveConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchFeedbackOverdueSaveConfigResponseSuccess>(
    "/workbench/feedbackOverdue/saveConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchGetAccountidItCodeOption = {
  /**
    @description
      itCode */
  itCode: string;
};

/** @description response type for apiOperationGetWorkbenchGetAccountidItCode */
interface ApiOperationGetWorkbenchGetAccountidItCodeResponse {
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

type ApiOperationGetWorkbenchGetAccountidItCodeResponseSuccess =
  ApiOperationGetWorkbenchGetAccountidItCodeResponse[200];
/**
 * @description
 *   根据itcode获取accountid
 * @tags token相关
 * @produces *
 */
export const apiOperationGetWorkbenchGetAccountidItCode = (
  option?: ApiOperationGetWorkbenchGetAccountidItCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchGetAccountidItCodeResponseSuccess>(
    "/workbench/getAccountid/:itCode",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchGetIsOpenOutboundOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchGetIsOpenOutbound */
interface ApiOperationGetWorkbenchGetIsOpenOutboundResponse {
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

type ApiOperationGetWorkbenchGetIsOpenOutboundResponseSuccess =
  ApiOperationGetWorkbenchGetIsOpenOutboundResponse[200];
/**
 * @description
 *   95158坐席电话配置 查询是否开通接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchGetIsOpenOutbound = (
  option?: ApiOperationGetWorkbenchGetIsOpenOutboundOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchGetIsOpenOutboundResponseSuccess>(
    "/workbench/getIsOpenOutbound",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchGetOutboundExplicitEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchGetOutboundExplicitEcode */
interface ApiOperationGetWorkbenchGetOutboundExplicitEcodeResponse {
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

type ApiOperationGetWorkbenchGetOutboundExplicitEcodeResponseSuccess =
  ApiOperationGetWorkbenchGetOutboundExplicitEcodeResponse[200];
/**
 * @description
 *   95158坐席电话配置 查询（外显号码）接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchGetOutboundExplicitEcode = (
  option?: ApiOperationGetWorkbenchGetOutboundExplicitEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchGetOutboundExplicitEcodeResponseSuccess>(
    "/workbench/getOutboundExplicit/:ecode",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchGetParentExtensionNumOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchGetParentExtensionNum */
interface ApiOperationGetWorkbenchGetParentExtensionNumResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WorkbenchParentOutboundDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchGetParentExtensionNumResponseSuccess =
  ApiOperationGetWorkbenchGetParentExtensionNumResponse[200];
/**
 * @description
 *   95158坐席电话配置 获取总公司分机列表接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchGetParentExtensionNum = (
  option?: ApiOperationGetWorkbenchGetParentExtensionNumOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchGetParentExtensionNumResponseSuccess>(
    "/workbench/getParentExtensionNum",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchGetParentOutboundConfigOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      extensionNum */
  extensionNum: string;
};

/** @description response type for apiOperationGetWorkbenchGetParentOutboundConfig */
interface ApiOperationGetWorkbenchGetParentOutboundConfigResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WorkbenchParentOutboundConfigDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchGetParentOutboundConfigResponseSuccess =
  ApiOperationGetWorkbenchGetParentOutboundConfigResponse[200];
/**
 * @description
 *   95158坐席电话配置 获取总公司坐席电话接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchGetParentOutboundConfig = (
  option?: ApiOperationGetWorkbenchGetParentOutboundConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchGetParentOutboundConfigResponseSuccess>(
    "/workbench/getParentOutboundConfig",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchGetRoleWhiteListIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchGetRoleWhiteListId */
interface ApiOperationGetWorkbenchGetRoleWhiteListIdResponse {
  /**
   * @description
   *   OK
   */
  200: RoleWhiteListDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchGetRoleWhiteListIdResponseSuccess =
  ApiOperationGetWorkbenchGetRoleWhiteListIdResponse[200];
/**
 * @description
 *   角色白名单——查询
 * @tags 角色白名单
 * @produces *
 */
export const apiOperationGetWorkbenchGetRoleWhiteListId = (
  option?: ApiOperationGetWorkbenchGetRoleWhiteListIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchGetRoleWhiteListIdResponseSuccess>(
    "/workbench/getRoleWhiteList/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchGetSubscribeEventCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationPostWorkbenchGetSubscribeEventCpmoCop */
interface ApiOperationPostWorkbenchGetSubscribeEventCpmoCopResponse {
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

type ApiOperationPostWorkbenchGetSubscribeEventCpmoCopResponseSuccess =
  ApiOperationPostWorkbenchGetSubscribeEventCpmoCopResponse[200];
/**
 * @description
 *   查询视频告警事件订阅
 * @tags 视频告警模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchGetSubscribeEventCpmoCop = (
  option?: ApiOperationPostWorkbenchGetSubscribeEventCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchGetSubscribeEventCpmoCopResponseSuccess>(
    "/workbench/getSubscribeEvent/:cpmoCop",
    { method: "post", path: option },
    config
  );

type ApiOperationGetWorkbenchGetTokenItCodeOption = {
  /**
    @description
      itCode */
  itCode: string;
};

/** @description response type for apiOperationGetWorkbenchGetTokenItCode */
interface ApiOperationGetWorkbenchGetTokenItCodeResponse {
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

type ApiOperationGetWorkbenchGetTokenItCodeResponseSuccess =
  ApiOperationGetWorkbenchGetTokenItCodeResponse[200];
/**
 * @description
 *   getToken
 * @tags h获取forItsm的token接口
 * @produces *
 */
export const apiOperationGetWorkbenchGetTokenItCode = (
  option?: ApiOperationGetWorkbenchGetTokenItCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchGetTokenItCodeResponseSuccess>(
    "/workbench/getToken/:itCode",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchGetUserInfoItCodeOption = {
  /**
    @description
      itCode */
  itCode: string;
};

/** @description response type for apiOperationGetWorkbenchGetUserInfoItCode */
interface ApiOperationGetWorkbenchGetUserInfoItCodeResponse {
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

type ApiOperationGetWorkbenchGetUserInfoItCodeResponseSuccess =
  ApiOperationGetWorkbenchGetUserInfoItCodeResponse[200];
/**
 * @description
 *   根据itcode获取用户信息
 * @tags token相关
 * @produces *
 */
export const apiOperationGetWorkbenchGetUserInfoItCode = (
  option?: ApiOperationGetWorkbenchGetUserInfoItCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchGetUserInfoItCodeResponseSuccess>(
    "/workbench/getUserInfo/:itCode",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchGetUserTokenWorkNoOption = {
  /**
    @description
      workNo */
  workNo: string;
};

/** @description response type for apiOperationGetWorkbenchGetUserTokenWorkNo */
interface ApiOperationGetWorkbenchGetUserTokenWorkNoResponse {
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

type ApiOperationGetWorkbenchGetUserTokenWorkNoResponseSuccess =
  ApiOperationGetWorkbenchGetUserTokenWorkNoResponse[200];
/**
 * @description
 *   坐席获取登录token
 * @tags token相关
 * @produces *
 */
export const apiOperationGetWorkbenchGetUserTokenWorkNo = (
  option?: ApiOperationGetWorkbenchGetUserTokenWorkNoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchGetUserTokenWorkNoResponseSuccess>(
    "/workbench/getUserToken/:workNo",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchGetVideoCameraInfoOption = VideoBallAndHatReqDto;

/** @description response type for apiOperationPostWorkbenchGetVideoCameraInfo */
interface ApiOperationPostWorkbenchGetVideoCameraInfoResponse {
  /**
   * @description
   *   OK
   */
  200: Array<VideoBallAndHatRespDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchGetVideoCameraInfoResponseSuccess =
  ApiOperationPostWorkbenchGetVideoCameraInfoResponse[200];
/**
 * @description
 *   获取视频相机信息
 * @tags 视频告警模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchGetVideoCameraInfo = (
  option?: ApiOperationPostWorkbenchGetVideoCameraInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchGetVideoCameraInfoResponseSuccess>(
    "/workbench/getVideoCameraInfo",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationGetWorkbenchGetVideoRuleInfo */
interface ApiOperationGetWorkbenchGetVideoRuleInfoResponse {
  /**
   * @description
   *   OK
   */
  200: VideoRuleRespDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchGetVideoRuleInfoResponseSuccess =
  ApiOperationGetWorkbenchGetVideoRuleInfoResponse[200];
/**
 * @description
 *   获取视频告警规则
 * @tags 视频告警模块
 * @produces *
 */
export const apiOperationGetWorkbenchGetVideoRuleInfo = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchGetVideoRuleInfoResponseSuccess>(
    "/workbench/getVideoRuleInfo",
    { method: "get" },
    config
  );

type ApiOperationPostWorkbenchGetVideoWarnNumberOption = VideoWarnReqDto;

/** @description response type for apiOperationPostWorkbenchGetVideoWarnNumber */
interface ApiOperationPostWorkbenchGetVideoWarnNumberResponse {
  /**
   * @description
   *   OK
   */
  200: Array<VideoWarnRespDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchGetVideoWarnNumberResponseSuccess =
  ApiOperationPostWorkbenchGetVideoWarnNumberResponse[200];
/**
 * @description
 *   获取视频告警数量
 * @tags 视频告警模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchGetVideoWarnNumber = (
  option?: ApiOperationPostWorkbenchGetVideoWarnNumberOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchGetVideoWarnNumberResponseSuccess>(
    "/workbench/getVideoWarnNumber",
    { method: "post", body: option },
    config
  );

/** @description request parameter type for apiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCode */
interface ApiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCodeOption {
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

/** @description request parameter type for apiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCode */
interface ApiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCodeOption {
  /**
   * @description
   *   gisMapInputDtos
   */
  body: Array<GisMapInputDto>;
}

/** @description response type for apiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCode */
interface ApiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCodeResponse {
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

type ApiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCodeResponseSuccess =
  ApiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCodeResponse[200];
/**
 * @description
 *   地图配置(添加/编辑)
 * @tags Gis地图配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCode = (
  option: ApiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchGisMapAddOrUpdGisMapCompanyCodeResponseSuccess>(
    "/workbench/gisMap/addOrUpdGisMap/:companyCode",
    { method: "post", ...option },
    config
  );

type ApiOperationGetWorkbenchGisMapDeleteGisMapByCompanyCodeCompanyCodeOption =
  {
    /**
    @description
      companyCode */
    companyCode: string;
  };

/** @description response type for apiOperationGetWorkbenchGisMapDeleteGisMapByCompanyCodeCompanyCode */
interface ApiOperationGetWorkbenchGisMapDeleteGisMapByCompanyCodeCompanyCodeResponse {
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

type ApiOperationGetWorkbenchGisMapDeleteGisMapByCompanyCodeCompanyCodeResponseSuccess =
  ApiOperationGetWorkbenchGisMapDeleteGisMapByCompanyCodeCompanyCodeResponse[200];
/**
 * @description
 *   删除对应地图配置
 * @tags Gis地图配置模块
 * @produces *
 */
export const apiOperationGetWorkbenchGisMapDeleteGisMapByCompanyCodeCompanyCode =
  (
    option?: ApiOperationGetWorkbenchGisMapDeleteGisMapByCompanyCodeCompanyCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetWorkbenchGisMapDeleteGisMapByCompanyCodeCompanyCodeResponseSuccess>(
      "/workbench/gisMap/deleteGisMapByCompanyCode/:companyCode",
      { method: "get", path: option },
      config
    );

type ApiOperationPostWorkbenchGisMapFindGisMapCompanyCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
};

/** @description response type for apiOperationPostWorkbenchGisMapFindGisMapCompanyCode */
interface ApiOperationPostWorkbenchGisMapFindGisMapCompanyCodeResponse {
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

type ApiOperationPostWorkbenchGisMapFindGisMapCompanyCodeResponseSuccess =
  ApiOperationPostWorkbenchGisMapFindGisMapCompanyCodeResponse[200];
/**
 * @description
 *   地图配置页面展示
 * @tags Gis地图配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchGisMapFindGisMapCompanyCode = (
  option?: ApiOperationPostWorkbenchGisMapFindGisMapCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchGisMapFindGisMapCompanyCodeResponseSuccess>(
    "/workbench/gisMap/findGisMap/:companyCode",
    { method: "post", path: option },
    config
  );

type ApiOperationPostWorkbenchGisMapFindGisMapByCompanyCodeOption =
  GisMapInputDto;

/** @description response type for apiOperationPostWorkbenchGisMapFindGisMapByCompanyCode */
interface ApiOperationPostWorkbenchGisMapFindGisMapByCompanyCodeResponse {
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

type ApiOperationPostWorkbenchGisMapFindGisMapByCompanyCodeResponseSuccess =
  ApiOperationPostWorkbenchGisMapFindGisMapByCompanyCodeResponse[200];
/**
 * @description
 *   findGisMapByCompanyCode
 * @tags Gis地图配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchGisMapFindGisMapByCompanyCode = (
  option?: ApiOperationPostWorkbenchGisMapFindGisMapByCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchGisMapFindGisMapByCompanyCodeResponseSuccess>(
    "/workbench/gisMap/findGisMapByCompanyCode",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchIndoorRescueDisposalProcessOption =
  IndoorRescueDisposalProcessDto;

/** @description response type for apiOperationPostWorkbenchIndoorRescueDisposalProcess */
interface ApiOperationPostWorkbenchIndoorRescueDisposalProcessResponse {
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

type ApiOperationPostWorkbenchIndoorRescueDisposalProcessResponseSuccess =
  ApiOperationPostWorkbenchIndoorRescueDisposalProcessResponse[200];
/**
 * @description
 *   新增户内抢险处置进度
 *   新增户内抢险处置进度
 * @tags 处置进度API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchIndoorRescueDisposalProcess = (
  option?: ApiOperationPostWorkbenchIndoorRescueDisposalProcessOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchIndoorRescueDisposalProcessResponseSuccess>(
    "/workbench/indoor/rescue/disposalProcess",
    { method: "post", body: option },
    config
  );

/** @description request parameter type for apiOperationPutWorkbenchIndoorRescueDisposalProcessId */
interface ApiOperationPutWorkbenchIndoorRescueDisposalProcessIdOption {
  /**
   * @description
   *   id
   * @format int64
   */
  path: {
    /**
        @description
          id
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for apiOperationPutWorkbenchIndoorRescueDisposalProcessId */
interface ApiOperationPutWorkbenchIndoorRescueDisposalProcessIdOption {
  /**
   * @description
   *   processDto
   */
  body: IndoorRescueDisposalProcessDto;
}

/** @description response type for apiOperationPutWorkbenchIndoorRescueDisposalProcessId */
interface ApiOperationPutWorkbenchIndoorRescueDisposalProcessIdResponse {
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

type ApiOperationPutWorkbenchIndoorRescueDisposalProcessIdResponseSuccess =
  ApiOperationPutWorkbenchIndoorRescueDisposalProcessIdResponse[200];
/**
 * @description
 *   根据主键ID更新户内抢险处置进度
 *   更新户内抢险处置进度
 * @tags 处置进度API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPutWorkbenchIndoorRescueDisposalProcessId = (
  option: ApiOperationPutWorkbenchIndoorRescueDisposalProcessIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPutWorkbenchIndoorRescueDisposalProcessIdResponseSuccess>(
    "/workbench/indoor/rescue/disposalProcess/:id",
    { method: "put", ...option },
    config
  );

type ApiOperationDeleteWorkbenchIndoorRescueDisposalProcessIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationDeleteWorkbenchIndoorRescueDisposalProcessId */
interface ApiOperationDeleteWorkbenchIndoorRescueDisposalProcessIdResponse {
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

type ApiOperationDeleteWorkbenchIndoorRescueDisposalProcessIdResponseSuccess =
  ApiOperationDeleteWorkbenchIndoorRescueDisposalProcessIdResponse[200];
/**
 * @description
 *   根据主键ID户内抢险处置进度
 *   删除户内抢险处置进度
 * @tags 处置进度API
 * @produces *
 */
export const apiOperationDeleteWorkbenchIndoorRescueDisposalProcessId = (
  option?: ApiOperationDeleteWorkbenchIndoorRescueDisposalProcessIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationDeleteWorkbenchIndoorRescueDisposalProcessIdResponseSuccess>(
    "/workbench/indoor/rescue/disposalProcess/:id",
    { method: "delete", path: option },
    config
  );

type ApiOperationGetWorkbenchIndoorRescueGetDisposalProcessListIndoorRescueIdOption =
  {
    /**
    @description
      indoorRescueId
    @format int64 */
    indoorRescueId: number;
  };

/** @description response type for apiOperationGetWorkbenchIndoorRescueGetDisposalProcessListIndoorRescueId */
interface ApiOperationGetWorkbenchIndoorRescueGetDisposalProcessListIndoorRescueIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<IndoorRescueDisposalProcessDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchIndoorRescueGetDisposalProcessListIndoorRescueIdResponseSuccess =
  ApiOperationGetWorkbenchIndoorRescueGetDisposalProcessListIndoorRescueIdResponse[200];
/**
 * @description
 *   根据户内抢险ID获取户内抢险处置进度列表
 *   获取户内抢险处置进度列表
 * @tags 处置进度API
 * @produces *
 */
export const apiOperationGetWorkbenchIndoorRescueGetDisposalProcessListIndoorRescueId =
  (
    option?: ApiOperationGetWorkbenchIndoorRescueGetDisposalProcessListIndoorRescueIdOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetWorkbenchIndoorRescueGetDisposalProcessListIndoorRescueIdResponseSuccess>(
      "/workbench/indoor/rescue/getDisposalProcessList/:indoorRescueId",
      { method: "get", path: option },
      config
    );

type ApiOperationPostWorkbenchInitRoleOption = RoleWhiteListDTO;

/** @description response type for apiOperationPostWorkbenchInitRole */
interface ApiOperationPostWorkbenchInitRoleResponse {
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

type ApiOperationPostWorkbenchInitRoleResponseSuccess =
  ApiOperationPostWorkbenchInitRoleResponse[200];
/**
 * @description
 *   角色白名单——一键初始化
 * @tags 角色白名单
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchInitRole = (
  option?: ApiOperationPostWorkbenchInitRoleOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchInitRoleResponseSuccess>(
    "/workbench/initRole",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchInitializeAnalysisConfigOption =
  WorkbenchTitleInputDto;

/** @description response type for apiOperationPostWorkbenchInitializeAnalysisConfig */
interface ApiOperationPostWorkbenchInitializeAnalysisConfigResponse {
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

type ApiOperationPostWorkbenchInitializeAnalysisConfigResponseSuccess =
  ApiOperationPostWorkbenchInitializeAnalysisConfigResponse[200];
/**
 * @description
 *   初始化分析预测配置接口
 * @tags 企业实体配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchInitializeAnalysisConfig = (
  option?: ApiOperationPostWorkbenchInitializeAnalysisConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchInitializeAnalysisConfigResponseSuccess>(
    "/workbench/initialize/analysisConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchJointDisposalAddOption = {
  /**
    @description
      事项描述 */
  description: string;
  /**
    @description
      所属实体编码 */
  ecode: string;
  /**
    @description
      file */
  file: string;
  /**
    @description
      接收企业编码 */
  receiveEnterpriseCode: string;
  /**
    @description
      接收企业名称 */
  receiveEnterpriseName: string;
  /**
    @description
      建议动作：1-线下核实  2-建议核实并处罚
    @format int32 */
  suggestAction: number;
  /**
    @description
      事项标题 */
  title: string;
};

/** @description response type for apiOperationPostWorkbenchJointDisposalAdd */
interface ApiOperationPostWorkbenchJointDisposalAddResponse {
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

type ApiOperationPostWorkbenchJointDisposalAddResponseSuccess =
  ApiOperationPostWorkbenchJointDisposalAddResponse[200];
/**
 * @description
 *   添加联合处置单
 *   添加联合处置单
 * @tags 联合处置闭环相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchJointDisposalAdd = (
  option?: ApiOperationPostWorkbenchJointDisposalAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchJointDisposalAddResponseSuccess>(
    "/workbench/jointDisposal/add",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchJointDisposalGetListOption =
  JointDisposalQueryDto;

/** @description response type for apiOperationPostWorkbenchJointDisposalGetList */
interface ApiOperationPostWorkbenchJointDisposalGetListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListJointDisposalOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchJointDisposalGetListResponseSuccess =
  ApiOperationPostWorkbenchJointDisposalGetListResponse[200];
/**
 * @description
 *   联合处置单分页查询
 * @tags 联合处置闭环相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchJointDisposalGetList = (
  option?: ApiOperationPostWorkbenchJointDisposalGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchJointDisposalGetListResponseSuccess>(
    "/workbench/jointDisposal/getList",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchJointDisposalGetReceiveEnterpriseListEcodeOption =
  {
    /**
    @description
      ecode */
    ecode: string;
  };

/** @description response type for apiOperationGetWorkbenchJointDisposalGetReceiveEnterpriseListEcode */
interface ApiOperationGetWorkbenchJointDisposalGetReceiveEnterpriseListEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<JointDisposalReceiveEnterpriseDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchJointDisposalGetReceiveEnterpriseListEcodeResponseSuccess =
  ApiOperationGetWorkbenchJointDisposalGetReceiveEnterpriseListEcodeResponse[200];
/**
 * @description
 *   联合处置单列表接收企业下拉框
 * @tags 联合处置闭环相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchJointDisposalGetReceiveEnterpriseListEcode =
  (
    option?: ApiOperationGetWorkbenchJointDisposalGetReceiveEnterpriseListEcodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetWorkbenchJointDisposalGetReceiveEnterpriseListEcodeResponseSuccess>(
      "/workbench/jointDisposal/getReceiveEnterpriseList/:ecode",
      { method: "get", path: option },
      config
    );

type ApiOperationPostWorkbenchListOption = WorkbenchAlarmStandardInputDto;

/** @description response type for apiOperationPostWorkbenchList */
interface ApiOperationPostWorkbenchListResponse {
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

type ApiOperationPostWorkbenchListResponseSuccess =
  ApiOperationPostWorkbenchListResponse[200];
/**
 * @description
 *   标准配置列表接口
 * @tags 标准配置接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchList = (
  option?: ApiOperationPostWorkbenchListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchListResponseSuccess>(
    "/workbench/list",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchMonitorGuidelineAddOption =
  MonitorGuidelineAddDto;

/** @description response type for apiOperationPostWorkbenchMonitorGuidelineAdd */
interface ApiOperationPostWorkbenchMonitorGuidelineAddResponse {
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

type ApiOperationPostWorkbenchMonitorGuidelineAddResponseSuccess =
  ApiOperationPostWorkbenchMonitorGuidelineAddResponse[200];
/**
 * @description
 *   添加监察指引
 *   添加监察指引
 * @tags 监察指引API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchMonitorGuidelineAdd = (
  option?: ApiOperationPostWorkbenchMonitorGuidelineAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchMonitorGuidelineAddResponseSuccess>(
    "/workbench/monitorGuideline/add",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchMonitorGuidelineEnableOption =
  MonitorGuidelineModifyDto;

/** @description response type for apiOperationPostWorkbenchMonitorGuidelineEnable */
interface ApiOperationPostWorkbenchMonitorGuidelineEnableResponse {
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

type ApiOperationPostWorkbenchMonitorGuidelineEnableResponseSuccess =
  ApiOperationPostWorkbenchMonitorGuidelineEnableResponse[200];
/**
 * @description
 *   启用停用
 *   启用停用
 * @tags 监察指引API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchMonitorGuidelineEnable = (
  option?: ApiOperationPostWorkbenchMonitorGuidelineEnableOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchMonitorGuidelineEnableResponseSuccess>(
    "/workbench/monitorGuideline/enable",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchMonitorGuidelineGetGuidelinesOption = {
  /**
    @description
      子类型编码 */
  subTypeCode: string;
  /**
    @description
      类型编码 */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchMonitorGuidelineGetGuidelines */
interface ApiOperationGetWorkbenchMonitorGuidelineGetGuidelinesResponse {
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

type ApiOperationGetWorkbenchMonitorGuidelineGetGuidelinesResponseSuccess =
  ApiOperationGetWorkbenchMonitorGuidelineGetGuidelinesResponse[200];
/**
 * @description
 *   获取指引内容
 *   获取指引内容
 * @tags 监察指引API
 * @produces *
 */
export const apiOperationGetWorkbenchMonitorGuidelineGetGuidelines = (
  option?: ApiOperationGetWorkbenchMonitorGuidelineGetGuidelinesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchMonitorGuidelineGetGuidelinesResponseSuccess>(
    "/workbench/monitorGuideline/getGuidelines",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchMonitorGuidelineGetOneIdOption = {
  /**
    @description
      id
    @format int32 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchMonitorGuidelineGetOneId */
interface ApiOperationGetWorkbenchMonitorGuidelineGetOneIdResponse {
  /**
   * @description
   *   OK
   */
  200: MonitorGuidelineDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchMonitorGuidelineGetOneIdResponseSuccess =
  ApiOperationGetWorkbenchMonitorGuidelineGetOneIdResponse[200];
/**
 * @description
 *   根据ID获取监察指引
 *   获取监察指引
 * @tags 监察指引API
 * @produces *
 */
export const apiOperationGetWorkbenchMonitorGuidelineGetOneId = (
  option?: ApiOperationGetWorkbenchMonitorGuidelineGetOneIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchMonitorGuidelineGetOneIdResponseSuccess>(
    "/workbench/monitorGuideline/getOne/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchMonitorGuidelineGetUnqualifiedItemsOption = {
  /**
    @description
      子类型编码 */
  subTypeCode: string;
  /**
    @description
      类型编码 */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchMonitorGuidelineGetUnqualifiedItems */
interface ApiOperationGetWorkbenchMonitorGuidelineGetUnqualifiedItemsResponse {
  /**
   * @description
   *   OK
   */
  200: Array<UnqualifiedItemDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchMonitorGuidelineGetUnqualifiedItemsResponseSuccess =
  ApiOperationGetWorkbenchMonitorGuidelineGetUnqualifiedItemsResponse[200];
/**
 * @description
 *   获取不合格项
 *   获取不合格项
 * @tags 监察指引API
 * @produces *
 */
export const apiOperationGetWorkbenchMonitorGuidelineGetUnqualifiedItems = (
  option?: ApiOperationGetWorkbenchMonitorGuidelineGetUnqualifiedItemsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchMonitorGuidelineGetUnqualifiedItemsResponseSuccess>(
    "/workbench/monitorGuideline/getUnqualifiedItems",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchMonitorGuidelineModifyOption =
  MonitorGuidelineModifyDto;

/** @description response type for apiOperationPostWorkbenchMonitorGuidelineModify */
interface ApiOperationPostWorkbenchMonitorGuidelineModifyResponse {
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

type ApiOperationPostWorkbenchMonitorGuidelineModifyResponseSuccess =
  ApiOperationPostWorkbenchMonitorGuidelineModifyResponse[200];
/**
 * @description
 *   修改监察指引
 *   修改监察指引
 * @tags 监察指引API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchMonitorGuidelineModify = (
  option?: ApiOperationPostWorkbenchMonitorGuidelineModifyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchMonitorGuidelineModifyResponseSuccess>(
    "/workbench/monitorGuideline/modify",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchMonitorGuidelineSearchOption =
  MonitorGuidelineSearchDto;

/** @description response type for apiOperationPostWorkbenchMonitorGuidelineSearch */
interface ApiOperationPostWorkbenchMonitorGuidelineSearchResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListMonitorGuidelineDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchMonitorGuidelineSearchResponseSuccess =
  ApiOperationPostWorkbenchMonitorGuidelineSearchResponse[200];
/**
 * @description
 *   搜索监察指引
 *   搜索监察指引
 * @tags 监察指引API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchMonitorGuidelineSearch = (
  option?: ApiOperationPostWorkbenchMonitorGuidelineSearchOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchMonitorGuidelineSearchResponseSuccess>(
    "/workbench/monitorGuideline/search",
    { method: "post", body: option },
    config
  );

/** @description request parameter type for apiOperationPostWorkbenchMultipleConfigEnableId */
interface ApiOperationPostWorkbenchMultipleConfigEnableIdOption {
  /**
   * @description
   *   enable
   */
  body: boolean;
}

/** @description request parameter type for apiOperationPostWorkbenchMultipleConfigEnableId */
interface ApiOperationPostWorkbenchMultipleConfigEnableIdOption {
  /**
   * @description
   *   id
   * @format int64
   */
  path: {
    /**
        @description
          id
        @format int64 */
    id: number;
  };
}

/** @description response type for apiOperationPostWorkbenchMultipleConfigEnableId */
interface ApiOperationPostWorkbenchMultipleConfigEnableIdResponse {
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

type ApiOperationPostWorkbenchMultipleConfigEnableIdResponseSuccess =
  ApiOperationPostWorkbenchMultipleConfigEnableIdResponse[200];
/**
 * @description
 *   启用或停用
 *   启用或停用
 * @tags 多元配置API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchMultipleConfigEnableId = (
  option: ApiOperationPostWorkbenchMultipleConfigEnableIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchMultipleConfigEnableIdResponseSuccess>(
    "/workbench/multipleConfig/enable/:id",
    { method: "post", ...option },
    config
  );

type ApiOperationGetWorkbenchMultipleConfigGetDetailIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchMultipleConfigGetDetailId */
interface ApiOperationGetWorkbenchMultipleConfigGetDetailIdResponse {
  /**
   * @description
   *   OK
   */
  200: MultipleConfigDetailDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchMultipleConfigGetDetailIdResponseSuccess =
  ApiOperationGetWorkbenchMultipleConfigGetDetailIdResponse[200];
/**
 * @description
 *   根据ID获取多元配置详情
 *   获取多元配置详情
 * @tags 多元配置API
 * @produces *
 */
export const apiOperationGetWorkbenchMultipleConfigGetDetailId = (
  option?: ApiOperationGetWorkbenchMultipleConfigGetDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchMultipleConfigGetDetailIdResponseSuccess>(
    "/workbench/multipleConfig/getDetail/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchMultipleConfigGetEnabledTypeInfosOption = {
  /**
    @description
      分类 */
  category: string;
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      场景
    @format int32 */
  sceneCode: number;
};

/** @description response type for apiOperationGetWorkbenchMultipleConfigGetEnabledTypeInfos */
interface ApiOperationGetWorkbenchMultipleConfigGetEnabledTypeInfosResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MultipleConfigTypeInfoDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchMultipleConfigGetEnabledTypeInfosResponseSuccess =
  ApiOperationGetWorkbenchMultipleConfigGetEnabledTypeInfosResponse[200];
/**
 * @description
 *   根据管理实体编码获取启用的多元配置类型信息
 *   获取某个管理实体启用的多元配置类型信息
 * @tags 多元配置API
 * @produces *
 */
export const apiOperationGetWorkbenchMultipleConfigGetEnabledTypeInfos = (
  option?: ApiOperationGetWorkbenchMultipleConfigGetEnabledTypeInfosOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchMultipleConfigGetEnabledTypeInfosResponseSuccess>(
    "/workbench/multipleConfig/getEnabledTypeInfos",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchMultipleConfigGetOfEcodeOption = {
  /**
    @description
      分类 */
  category: string;
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      场景
    @format int32 */
  sceneCode: number;
};

/** @description response type for apiOperationGetWorkbenchMultipleConfigGetOfEcode */
interface ApiOperationGetWorkbenchMultipleConfigGetOfEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MultipleConfigDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchMultipleConfigGetOfEcodeResponseSuccess =
  ApiOperationGetWorkbenchMultipleConfigGetOfEcodeResponse[200];
/**
 * @description
 *   根据管理实体编码获取多元配置
 *   获取某个管理实体的多元配置
 * @tags 多元配置API
 * @produces *
 */
export const apiOperationGetWorkbenchMultipleConfigGetOfEcode = (
  option?: ApiOperationGetWorkbenchMultipleConfigGetOfEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchMultipleConfigGetOfEcodeResponseSuccess>(
    "/workbench/multipleConfig/getOfEcode",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchMultipleConfigGetTypeInfosOption = {
  /**
    @description
      分类 */
  category: string;
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      场景
    @format int32 */
  sceneCode: number;
};

/** @description response type for apiOperationGetWorkbenchMultipleConfigGetTypeInfos */
interface ApiOperationGetWorkbenchMultipleConfigGetTypeInfosResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MultipleConfigTypeInfoDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchMultipleConfigGetTypeInfosResponseSuccess =
  ApiOperationGetWorkbenchMultipleConfigGetTypeInfosResponse[200];
/**
 * @description
 *   根据管理实体编码获取多元配置类型信息
 *   获取某个管理实体的多元配置类型信息
 * @tags 多元配置API
 * @produces *
 */
export const apiOperationGetWorkbenchMultipleConfigGetTypeInfos = (
  option?: ApiOperationGetWorkbenchMultipleConfigGetTypeInfosOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchMultipleConfigGetTypeInfosResponseSuccess>(
    "/workbench/multipleConfig/getTypeInfos",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchMultipleConfigPageListOption =
  MultipleConfigQueryDto;

/** @description response type for apiOperationPostWorkbenchMultipleConfigPageList */
interface ApiOperationPostWorkbenchMultipleConfigPageListResponse {
  /**
   * @description
   *   OK
   */
  200: PageInfoMultipleConfigOutPutDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchMultipleConfigPageListResponseSuccess =
  ApiOperationPostWorkbenchMultipleConfigPageListResponse[200];
/**
 * @description
 *   工作台白名单分页查询接口
 * @tags 多元配置API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchMultipleConfigPageList = (
  option?: ApiOperationPostWorkbenchMultipleConfigPageListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchMultipleConfigPageListResponseSuccess>(
    "/workbench/multipleConfig/pageList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchMultipleConfigQueryOption =
  MultipleConfigDtoInputDto;

/** @description response type for apiOperationPostWorkbenchMultipleConfigQuery */
interface ApiOperationPostWorkbenchMultipleConfigQueryResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListMultipleConfigDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchMultipleConfigQueryResponseSuccess =
  ApiOperationPostWorkbenchMultipleConfigQueryResponse[200];
/**
 * @description
 *   根据条件查询多元配置
 *   查询多元配置
 * @tags 多元配置API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchMultipleConfigQuery = (
  option?: ApiOperationPostWorkbenchMultipleConfigQueryOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchMultipleConfigQueryResponseSuccess>(
    "/workbench/multipleConfig/query",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchMultipleConfigSaveMultipleConfigOption =
  MultipleConfigAddDto;

/** @description response type for apiOperationPostWorkbenchMultipleConfigSaveMultipleConfig */
interface ApiOperationPostWorkbenchMultipleConfigSaveMultipleConfigResponse {
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

type ApiOperationPostWorkbenchMultipleConfigSaveMultipleConfigResponseSuccess =
  ApiOperationPostWorkbenchMultipleConfigSaveMultipleConfigResponse[200];
/**
 * @description
 *   工作台白名单添加接口
 * @tags 多元配置API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchMultipleConfigSaveMultipleConfig = (
  option?: ApiOperationPostWorkbenchMultipleConfigSaveMultipleConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchMultipleConfigSaveMultipleConfigResponseSuccess>(
    "/workbench/multipleConfig/saveMultipleConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchNavigationAddNavigationOption =
  NavigationInputDto;

/** @description response type for apiOperationPostWorkbenchNavigationAddNavigation */
interface ApiOperationPostWorkbenchNavigationAddNavigationResponse {
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

type ApiOperationPostWorkbenchNavigationAddNavigationResponseSuccess =
  ApiOperationPostWorkbenchNavigationAddNavigationResponse[200];
/**
 * @description
 *   便携导航信息添加
 *   便携导航信息添加
 * @tags 便捷导航模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchNavigationAddNavigation = (
  option?: ApiOperationPostWorkbenchNavigationAddNavigationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchNavigationAddNavigationResponseSuccess>(
    "/workbench/navigation/addNavigation",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchNavigationDelNavigationByIdOption =
  NavigationInputDto;

/** @description response type for apiOperationPostWorkbenchNavigationDelNavigationById */
interface ApiOperationPostWorkbenchNavigationDelNavigationByIdResponse {
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

type ApiOperationPostWorkbenchNavigationDelNavigationByIdResponseSuccess =
  ApiOperationPostWorkbenchNavigationDelNavigationByIdResponse[200];
/**
 * @description
 *   便携导航信息删除 NavigationInputDto中id,deleteFlag必传
 *   便携导航信息删除
 * @tags 便捷导航模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchNavigationDelNavigationById = (
  option?: ApiOperationPostWorkbenchNavigationDelNavigationByIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchNavigationDelNavigationByIdResponseSuccess>(
    "/workbench/navigation/delNavigationById",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchNavigationGetConfigListOption =
  NavigationConfigInputDto;

/** @description response type for apiOperationPostWorkbenchNavigationGetConfigList */
interface ApiOperationPostWorkbenchNavigationGetConfigListResponse {
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

type ApiOperationPostWorkbenchNavigationGetConfigListResponseSuccess =
  ApiOperationPostWorkbenchNavigationGetConfigListResponse[200];
/**
 * @description
 *   便携导航配置查询接口 NavigationConfigInputDto 中,cpmoCop必传
 *   便携导航配置查询接口
 * @tags 便捷导航模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchNavigationGetConfigList = (
  option?: ApiOperationPostWorkbenchNavigationGetConfigListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchNavigationGetConfigListResponseSuccess>(
    "/workbench/navigation/getConfigList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchNavigationGetNavigationListOption =
  NavigationInputDto;

/** @description response type for apiOperationPostWorkbenchNavigationGetNavigationList */
interface ApiOperationPostWorkbenchNavigationGetNavigationListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<NavigationConfigDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchNavigationGetNavigationListResponseSuccess =
  ApiOperationPostWorkbenchNavigationGetNavigationListResponse[200];
/**
 * @description
 *   便捷导航信息列表 InputDTO中companyCode,sceneCode必传
 *   便捷导航信息列表
 * @tags 便捷导航模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchNavigationGetNavigationList = (
  option?: ApiOperationPostWorkbenchNavigationGetNavigationListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchNavigationGetNavigationListResponseSuccess>(
    "/workbench/navigation/getNavigationList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchNavigationIsEnableOption = NavigationInputDto;

/** @description response type for apiOperationPostWorkbenchNavigationIsEnable */
interface ApiOperationPostWorkbenchNavigationIsEnableResponse {
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

type ApiOperationPostWorkbenchNavigationIsEnableResponseSuccess =
  ApiOperationPostWorkbenchNavigationIsEnableResponse[200];
/**
 * @description
 *   便携导航信息是否启用 NavigationInputDto中id,enable必传
 *   便携导航信息是否启用
 * @tags 便捷导航模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchNavigationIsEnable = (
  option?: ApiOperationPostWorkbenchNavigationIsEnableOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchNavigationIsEnableResponseSuccess>(
    "/workbench/navigation/isEnable",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchNavigationUpdNavigationOption =
  NavigationInputDto;

/** @description response type for apiOperationPostWorkbenchNavigationUpdNavigation */
interface ApiOperationPostWorkbenchNavigationUpdNavigationResponse {
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

type ApiOperationPostWorkbenchNavigationUpdNavigationResponseSuccess =
  ApiOperationPostWorkbenchNavigationUpdNavigationResponse[200];
/**
 * @description
 *   便携导航修改 NavigationInputDto中id必传
 *   便携导航修改
 * @tags 便捷导航模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchNavigationUpdNavigation = (
  option?: ApiOperationPostWorkbenchNavigationUpdNavigationOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchNavigationUpdNavigationResponseSuccess>(
    "/workbench/navigation/updNavigation",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchNavigationUpdSordCodeOption =
  Array<NavigationInputDto>;

/** @description response type for apiOperationPostWorkbenchNavigationUpdSordCode */
interface ApiOperationPostWorkbenchNavigationUpdSordCodeResponse {
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

type ApiOperationPostWorkbenchNavigationUpdSordCodeResponseSuccess =
  ApiOperationPostWorkbenchNavigationUpdSordCodeResponse[200];
/**
 * @description
 *   便携导航排序 NavigationInputDto中id,sortCode,sortStatus必传
 *   便携导航排序
 * @tags 便捷导航模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchNavigationUpdSordCode = (
  option?: ApiOperationPostWorkbenchNavigationUpdSordCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchNavigationUpdSordCodeResponseSuccess>(
    "/workbench/navigation/updSordCode",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchNetWorkDangerFileDownloadOption = {
  /**
    @description
      woCode */
  woCode: string;
};

/** @description response type for apiOperationPostWorkbenchNetWorkDangerFileDownload */
interface ApiOperationPostWorkbenchNetWorkDangerFileDownloadResponse {
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

type ApiOperationPostWorkbenchNetWorkDangerFileDownloadResponseSuccess =
  ApiOperationPostWorkbenchNetWorkDangerFileDownloadResponse[200];
/**
 * @description
 *   危险作业作业方案下载 woCode必传
 *   危险作业作业方案下载 network_danger
 * @tags 危险作业模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchNetWorkDangerFileDownload = (
  option?: ApiOperationPostWorkbenchNetWorkDangerFileDownloadOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchNetWorkDangerFileDownloadResponseSuccess>(
    "/workbench/netWorkDanger/fileDownload",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchNetworkAlarmSpaceDetailIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiOperationPostWorkbenchNetworkAlarmSpaceDetailId */
interface ApiOperationPostWorkbenchNetworkAlarmSpaceDetailIdResponse {
  /**
   * @description
   *   OK
   */
  200: NetworkAlarmSpaceDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchNetworkAlarmSpaceDetailIdResponseSuccess =
  ApiOperationPostWorkbenchNetworkAlarmSpaceDetailIdResponse[200];
/**
 * @description
 *   告警详情-有限空间作业手续缺失 alarmTypeCode:pn_alarm_21
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchNetworkAlarmSpaceDetailId = (
  option?: ApiOperationPostWorkbenchNetworkAlarmSpaceDetailIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchNetworkAlarmSpaceDetailIdResponseSuccess>(
    "/workbench/networkAlarmSpaceDetail/:id",
    { method: "post", path: option },
    config
  );

type ApiOperationGetWorkbenchOtherCentreGetEcodeListEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchOtherCentreGetEcodeListEcode */
interface ApiOperationGetWorkbenchOtherCentreGetEcodeListEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WorkbenchTitleInfoOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchOtherCentreGetEcodeListEcodeResponseSuccess =
  ApiOperationGetWorkbenchOtherCentreGetEcodeListEcodeResponse[200];
/**
 * @description
 *   查询其他中心接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchOtherCentreGetEcodeListEcode = (
  option?: ApiOperationGetWorkbenchOtherCentreGetEcodeListEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchOtherCentreGetEcodeListEcodeResponseSuccess>(
    "/workbench/otherCentre/getEcodeList/:ecode",
    { method: "get", path: option },
    config
  );

type ApiOperationDeleteWorkbenchOutboundConfigDeleteOption = {
  /**
    @description
      整体删除，传所有坐席的id； 删除一天坐席，传对应的一个id
    @format int64 */
  ids: number;
};

/** @description response type for apiOperationDeleteWorkbenchOutboundConfigDelete */
interface ApiOperationDeleteWorkbenchOutboundConfigDeleteResponse {
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

type ApiOperationDeleteWorkbenchOutboundConfigDeleteResponseSuccess =
  ApiOperationDeleteWorkbenchOutboundConfigDeleteResponse[200];
/**
 * @description
 *   95158坐席电话配置 删除接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationDeleteWorkbenchOutboundConfigDelete = (
  option?: ApiOperationDeleteWorkbenchOutboundConfigDeleteOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationDeleteWorkbenchOutboundConfigDeleteResponseSuccess>(
    "/workbench/outboundConfig/delete",
    { method: "delete", query: option },
    config
  );

type ApiOperationGetWorkbenchOutboundConfigGetDetailsOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      分机号 */
  extensionNum: string;
};

/** @description response type for apiOperationGetWorkbenchOutboundConfigGetDetails */
interface ApiOperationGetWorkbenchOutboundConfigGetDetailsResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WorkbenchDeskPhoneInfoOutputDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchOutboundConfigGetDetailsResponseSuccess =
  ApiOperationGetWorkbenchOutboundConfigGetDetailsResponse[200];
/**
 * @description
 *   95158坐席电话配置 详情接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchOutboundConfigGetDetails = (
  option?: ApiOperationGetWorkbenchOutboundConfigGetDetailsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchOutboundConfigGetDetailsResponseSuccess>(
    "/workbench/outboundConfig/getDetails",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchOutboundConfigGetListOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      pageNum
    @format int32 */
  pageNum: number;
  /**
    @description
      pageSize
    @format int32 */
  pageSize: number;
};

/** @description response type for apiOperationGetWorkbenchOutboundConfigGetList */
interface ApiOperationGetWorkbenchOutboundConfigGetListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListWorkbenchOutboundConfigDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchOutboundConfigGetListResponseSuccess =
  ApiOperationGetWorkbenchOutboundConfigGetListResponse[200];
/**
 * @description
 *   95158坐席电话配置 列表接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchOutboundConfigGetList = (
  option?: ApiOperationGetWorkbenchOutboundConfigGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchOutboundConfigGetListResponseSuccess>(
    "/workbench/outboundConfig/getList",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchOutboundConfigGetListByEcodeEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchOutboundConfigGetListByEcodeEcode */
interface ApiOperationGetWorkbenchOutboundConfigGetListByEcodeEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListWorkbenchOutboundConfigDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchOutboundConfigGetListByEcodeEcodeResponseSuccess =
  ApiOperationGetWorkbenchOutboundConfigGetListByEcodeEcodeResponse[200];
/**
 * @description
 *   实体企业的95158坐席电话配置 列表接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchOutboundConfigGetListByEcodeEcode = (
  option?: ApiOperationGetWorkbenchOutboundConfigGetListByEcodeEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchOutboundConfigGetListByEcodeEcodeResponseSuccess>(
    "/workbench/outboundConfig/getListByEcode/:ecode",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchOutboundConfigGetOutboundNumInfoFullDeskNumOption =
  {
    /**
    @description
      全作座号 */
    fullDeskNum: string;
  };

/** @description response type for apiOperationGetWorkbenchOutboundConfigGetOutboundNumInfoFullDeskNum */
interface ApiOperationGetWorkbenchOutboundConfigGetOutboundNumInfoFullDeskNumResponse {
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

type ApiOperationGetWorkbenchOutboundConfigGetOutboundNumInfoFullDeskNumResponseSuccess =
  ApiOperationGetWorkbenchOutboundConfigGetOutboundNumInfoFullDeskNumResponse[200];
/**
 * @description
 *   95158坐席电话配置 查询密码与外呼号
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchOutboundConfigGetOutboundNumInfoFullDeskNum =
  (
    option?: ApiOperationGetWorkbenchOutboundConfigGetOutboundNumInfoFullDeskNumOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetWorkbenchOutboundConfigGetOutboundNumInfoFullDeskNumResponseSuccess>(
      "/workbench/outboundConfig/getOutboundNumInfo/:fullDeskNum",
      { method: "get", path: option },
      config
    );

type ApiOperationGetWorkbenchOutboundConfigIsOpenOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      是否开启：0 关闭，1 开启
    @format int32 */
  enable: number;
  /**
    @description
      分机号 */
  extensionNum: string;
};

/** @description response type for apiOperationGetWorkbenchOutboundConfigIsOpen */
interface ApiOperationGetWorkbenchOutboundConfigIsOpenResponse {
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

type ApiOperationGetWorkbenchOutboundConfigIsOpenResponseSuccess =
  ApiOperationGetWorkbenchOutboundConfigIsOpenResponse[200];
/**
 * @description
 *   95158坐席电话配置 （是否启用）接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchOutboundConfigIsOpen = (
  option?: ApiOperationGetWorkbenchOutboundConfigIsOpenOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchOutboundConfigIsOpenResponseSuccess>(
    "/workbench/outboundConfig/isOpen",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchOutboundConfigUnusedDeskNumsOption =
  UnusedDeskNumSearchInput;

/** @description response type for apiOperationPostWorkbenchOutboundConfigUnusedDeskNums */
interface ApiOperationPostWorkbenchOutboundConfigUnusedDeskNumsResponse {
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

type ApiOperationPostWorkbenchOutboundConfigUnusedDeskNumsResponseSuccess =
  ApiOperationPostWorkbenchOutboundConfigUnusedDeskNumsResponse[200];
/**
 * @description
 *   根据ecode获取未使用坐席号接口
 * @tags 外呼配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchOutboundConfigUnusedDeskNums = (
  option?: ApiOperationPostWorkbenchOutboundConfigUnusedDeskNumsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchOutboundConfigUnusedDeskNumsResponseSuccess>(
    "/workbench/outboundConfig/unusedDeskNums",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchOutboundConfigUpdateSignFlagOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      坐席号 */
  outboundNum: string;
  /**
    @description
      坐席签约状态：0：未签，1：签入
    @format int32 */
  signFlag: number;
};

/** @description response type for apiOperationGetWorkbenchOutboundConfigUpdateSignFlag */
interface ApiOperationGetWorkbenchOutboundConfigUpdateSignFlagResponse {
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

type ApiOperationGetWorkbenchOutboundConfigUpdateSignFlagResponseSuccess =
  ApiOperationGetWorkbenchOutboundConfigUpdateSignFlagResponse[200];
/**
 * @description
 *   95158坐席电话配置 （更新坐席状态）接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchOutboundConfigUpdateSignFlag = (
  option?: ApiOperationGetWorkbenchOutboundConfigUpdateSignFlagOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchOutboundConfigUpdateSignFlagResponseSuccess>(
    "/workbench/outboundConfig/updateSignFlag",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchOutboundExplicitSaveOption = {
  /**
    @description
      ecode */
  ecode: string;
  /**
    @description
      outboundNum */
  outboundNum: string;
};

/** @description response type for apiOperationGetWorkbenchOutboundExplicitSave */
interface ApiOperationGetWorkbenchOutboundExplicitSaveResponse {
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

type ApiOperationGetWorkbenchOutboundExplicitSaveResponseSuccess =
  ApiOperationGetWorkbenchOutboundExplicitSaveResponse[200];
/**
 * @description
 *   95158坐席电话配置 保存（外显号码）接口
 * @tags 外呼配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchOutboundExplicitSave = (
  option?: ApiOperationGetWorkbenchOutboundExplicitSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchOutboundExplicitSaveResponseSuccess>(
    "/workbench/outboundExplicit/save",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchPageListOption = ScreenContentQueryDto;

/** @description response type for apiOperationPostWorkbenchPageList */
interface ApiOperationPostWorkbenchPageListResponse {
  /**
   * @description
   *   OK
   */
  200: PageInfoScreenContentOutPutDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchPageListResponseSuccess =
  ApiOperationPostWorkbenchPageListResponse[200];
/**
 * @description
 *   上屏白名单分页查询接口
 * @tags 上屏条目模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchPageList = (
  option?: ApiOperationPostWorkbenchPageListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchPageListResponseSuccess>(
    "/workbench/pageList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchPipSpaceAlarmUpdateStatusOption =
  AlarmUpdatePipIputDto;

/** @description response type for apiOperationPostWorkbenchPipSpaceAlarmUpdateStatus */
interface ApiOperationPostWorkbenchPipSpaceAlarmUpdateStatusResponse {
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

type ApiOperationPostWorkbenchPipSpaceAlarmUpdateStatusResponseSuccess =
  ApiOperationPostWorkbenchPipSpaceAlarmUpdateStatusResponse[200];
/**
 * @description
 *   更新管网告警处置状态
 *   更新管网有限空间告警处置状态
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchPipSpaceAlarmUpdateStatus = (
  option?: ApiOperationPostWorkbenchPipSpaceAlarmUpdateStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchPipSpaceAlarmUpdateStatusResponseSuccess>(
    "/workbench/pip/space/alarm/updateStatus",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchPushSystemTopicAddConfigOption =
  SystemTopicConfigInputDto;

/** @description response type for apiOperationPostWorkbenchPushSystemTopicAddConfig */
interface ApiOperationPostWorkbenchPushSystemTopicAddConfigResponse {
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

type ApiOperationPostWorkbenchPushSystemTopicAddConfigResponseSuccess =
  ApiOperationPostWorkbenchPushSystemTopicAddConfigResponse[200];
/**
 * @description
 *   推送系统配置信息-添加接口
 * @tags 推送系统配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchPushSystemTopicAddConfig = (
  option?: ApiOperationPostWorkbenchPushSystemTopicAddConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchPushSystemTopicAddConfigResponseSuccess>(
    "/workbench/push/systemTopic/addConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationDeleteWorkbenchPushSystemTopicDeleteConfigIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationDeleteWorkbenchPushSystemTopicDeleteConfigId */
interface ApiOperationDeleteWorkbenchPushSystemTopicDeleteConfigIdResponse {
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

type ApiOperationDeleteWorkbenchPushSystemTopicDeleteConfigIdResponseSuccess =
  ApiOperationDeleteWorkbenchPushSystemTopicDeleteConfigIdResponse[200];
/**
 * @description
 *   推送系统配置信息-删除接口
 * @tags 推送系统配置模块
 * @produces *
 */
export const apiOperationDeleteWorkbenchPushSystemTopicDeleteConfigId = (
  option?: ApiOperationDeleteWorkbenchPushSystemTopicDeleteConfigIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationDeleteWorkbenchPushSystemTopicDeleteConfigIdResponseSuccess>(
    "/workbench/push/systemTopic/deleteConfig/:id",
    { method: "delete", path: option },
    config
  );

/** @description response type for apiOperationPostWorkbenchPushSystemTopicGetAllSystemName */
interface ApiOperationPostWorkbenchPushSystemTopicGetAllSystemNameResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicConfigOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchPushSystemTopicGetAllSystemNameResponseSuccess =
  ApiOperationPostWorkbenchPushSystemTopicGetAllSystemNameResponse[200];
/**
 * @description
 *   获取所有配置系统名称接口
 * @tags 推送系统配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchPushSystemTopicGetAllSystemName = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchPushSystemTopicGetAllSystemNameResponseSuccess>(
    "/workbench/push/systemTopic/getAllSystemName",
    { method: "post" },
    config
  );

type ApiOperationPostWorkbenchPushSystemTopicGetConfigListOption =
  SystemTopicConfigQueryInputDto;

/** @description response type for apiOperationPostWorkbenchPushSystemTopicGetConfigList */
interface ApiOperationPostWorkbenchPushSystemTopicGetConfigListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListSystemTopicConfigOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchPushSystemTopicGetConfigListResponseSuccess =
  ApiOperationPostWorkbenchPushSystemTopicGetConfigListResponse[200];
/**
 * @description
 *   推送系统配置信息-列表接口
 * @tags 推送系统配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchPushSystemTopicGetConfigList = (
  option?: ApiOperationPostWorkbenchPushSystemTopicGetConfigListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchPushSystemTopicGetConfigListResponseSuccess>(
    "/workbench/push/systemTopic/getConfigList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchPushSystemTopicGetOtherSystemNameOption =
  SystemTopicCofigOtherInputDto;

/** @description response type for apiOperationPostWorkbenchPushSystemTopicGetOtherSystemName */
interface ApiOperationPostWorkbenchPushSystemTopicGetOtherSystemNameResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicConfigOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchPushSystemTopicGetOtherSystemNameResponseSuccess =
  ApiOperationPostWorkbenchPushSystemTopicGetOtherSystemNameResponse[200];
/**
 * @description
 *   获取配置过topic的系统
 *   获取三方其他配置系统名称接口
 * @tags 推送系统配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchPushSystemTopicGetOtherSystemName = (
  option?: ApiOperationPostWorkbenchPushSystemTopicGetOtherSystemNameOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchPushSystemTopicGetOtherSystemNameResponseSuccess>(
    "/workbench/push/systemTopic/getOtherSystemName",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchPushSystemTopicUpdateConfigOption =
  SystemTopicConfigInputDto;

/** @description response type for apiOperationPostWorkbenchPushSystemTopicUpdateConfig */
interface ApiOperationPostWorkbenchPushSystemTopicUpdateConfigResponse {
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

type ApiOperationPostWorkbenchPushSystemTopicUpdateConfigResponseSuccess =
  ApiOperationPostWorkbenchPushSystemTopicUpdateConfigResponse[200];
/**
 * @description
 *   推送系统配置信息-编辑接口
 * @tags 推送系统配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchPushSystemTopicUpdateConfig = (
  option?: ApiOperationPostWorkbenchPushSystemTopicUpdateConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchPushSystemTopicUpdateConfigResponseSuccess>(
    "/workbench/push/systemTopic/updateConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetAlarmDisposalPushTopicOption = {
  /**
    @description
      公司编码例如：0161 */
  companyCode: string;
  /**
    @description
      场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景
    @format int32 */
  sceneCode: number;
  /**
    @description
      告警类型例如：pn_1000709_iot */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetAlarmDisposalPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetAlarmDisposalPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetAlarmDisposalPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetAlarmDisposalPushTopicResponse[200];
/**
 * @description
 *   查询告警处置topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetAlarmDisposalPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetAlarmDisposalPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetAlarmDisposalPushTopicResponseSuccess>(
    "/workbench/pushConfig/getAlarmDisposalPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetAlarmPushTopicOption = {
  /**
    @description
      公司编码例如：0161 */
  companyCode: string;
  /**
    @description
      场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景
    @format int32 */
  sceneCode: number;
  /**
    @description
      告警类型例如：pn_1000709_iot */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetAlarmPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetAlarmPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetAlarmPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetAlarmPushTopicResponse[200];
/**
 * @description
 *   查询告警topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetAlarmPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetAlarmPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetAlarmPushTopicResponseSuccess>(
    "/workbench/pushConfig/getAlarmPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetAlarmRiskPushEcodeOption = {
  /**
    @description
      管理实体编码例如：50298136 */
  ecode: string;
  /**
    @description
      告警类型例如：pn_1000709_iot */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetAlarmRiskPushEcode */
interface ApiOperationGetWorkbenchPushConfigGetAlarmRiskPushEcodeResponse {
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

type ApiOperationGetWorkbenchPushConfigGetAlarmRiskPushEcodeResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetAlarmRiskPushEcodeResponse[200];
/**
 * @description
 *   查询推送其他中心信息接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetAlarmRiskPushEcode = (
  option?: ApiOperationGetWorkbenchPushConfigGetAlarmRiskPushEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetAlarmRiskPushEcodeResponseSuccess>(
    "/workbench/pushConfig/getAlarmRiskPushEcode",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetAlarmWoPushTopicOption = {
  /**
    @description
      公司编码例如：0161 */
  companyCode: string;
  /**
    @description
      场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景
    @format int32 */
  sceneCode: number;
  /**
    @description
      告警类型例如：pn_1000709_iot */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetAlarmWoPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetAlarmWoPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetAlarmWoPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetAlarmWoPushTopicResponse[200];
/**
 * @description
 *   查询告警工单topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetAlarmWoPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetAlarmWoPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetAlarmWoPushTopicResponseSuccess>(
    "/workbench/pushConfig/getAlarmWoPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetAnalysisPushTopicOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      sceneCode
    @format int32 */
  sceneCode: number;
  /**
    @description
      typeCode */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetAnalysisPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetAnalysisPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetAnalysisPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetAnalysisPushTopicResponse[200];
/**
 * @description
 *   查询分析预测topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetAnalysisPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetAnalysisPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetAnalysisPushTopicResponseSuccess>(
    "/workbench/pushConfig/getAnalysisPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetCheckPushTopicOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      sceneCode
    @format int32 */
  sceneCode: number;
  /**
    @description
      typeCode */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetCheckPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetCheckPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetCheckPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetCheckPushTopicResponse[200];
/**
 * @description
 *   查询常规监察topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetCheckPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetCheckPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetCheckPushTopicResponseSuccess>(
    "/workbench/pushConfig/getCheckPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetDangerousWorkDisposalPushTopicOption =
  {
    /**
    @description
      companyCode */
    companyCode: string;
    /**
    @description
      sceneCode
    @format int32 */
    sceneCode: number;
    /**
    @description
      typeCode */
    typeCode: string;
  };

/** @description response type for apiOperationGetWorkbenchPushConfigGetDangerousWorkDisposalPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetDangerousWorkDisposalPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetDangerousWorkDisposalPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetDangerousWorkDisposalPushTopicResponse[200];
/**
 * @description
 *   查询危险作业处置topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetDangerousWorkDisposalPushTopic =
  (
    option?: ApiOperationGetWorkbenchPushConfigGetDangerousWorkDisposalPushTopicOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetWorkbenchPushConfigGetDangerousWorkDisposalPushTopicResponseSuccess>(
      "/workbench/pushConfig/getDangerousWorkDisposalPushTopic",
      { method: "get", query: option },
      config
    );

type ApiOperationGetWorkbenchPushConfigGetDangerousWorkPushTopicOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      sceneCode
    @format int32 */
  sceneCode: number;
  /**
    @description
      typeCode */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetDangerousWorkPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetDangerousWorkPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetDangerousWorkPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetDangerousWorkPushTopicResponse[200];
/**
 * @description
 *   查询危险作业topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetDangerousWorkPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetDangerousWorkPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetDangerousWorkPushTopicResponseSuccess>(
    "/workbench/pushConfig/getDangerousWorkPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetEventDisposalPushTopicOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      sceneCode
    @format int32 */
  sceneCode: number;
  /**
    @description
      typeCode */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetEventDisposalPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetEventDisposalPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetEventDisposalPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetEventDisposalPushTopicResponse[200];
/**
 * @description
 *   查询事件处置topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetEventDisposalPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetEventDisposalPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetEventDisposalPushTopicResponseSuccess>(
    "/workbench/pushConfig/getEventDisposalPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetEventPushTopicOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      sceneCode
    @format int32 */
  sceneCode: number;
  /**
    @description
      typeCode */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetEventPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetEventPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetEventPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetEventPushTopicResponse[200];
/**
 * @description
 *   查询事件topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetEventPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetEventPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetEventPushTopicResponseSuccess>(
    "/workbench/pushConfig/getEventPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetEventWoPushTopicOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      sceneCode
    @format int32 */
  sceneCode: number;
  /**
    @description
      typeCode */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetEventWoPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetEventWoPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetEventWoPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetEventWoPushTopicResponse[200];
/**
 * @description
 *   查询事件工单topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetEventWoPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetEventWoPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetEventWoPushTopicResponseSuccess>(
    "/workbench/pushConfig/getEventWoPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetRiskDisposalPushTopicOption = {
  /**
    @description
      公司编码例如：0161 */
  companyCode: string;
  /**
    @description
      场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景
    @format int32 */
  sceneCode: number;
  /**
    @description
      告警类型例如：pn_1000709_iot */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetRiskDisposalPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetRiskDisposalPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetRiskDisposalPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetRiskDisposalPushTopicResponse[200];
/**
 * @description
 *   查询示险处置topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetRiskDisposalPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetRiskDisposalPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetRiskDisposalPushTopicResponseSuccess>(
    "/workbench/pushConfig/getRiskDisposalPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetRiskPushTopicOption = {
  /**
    @description
      公司编码例如：0161 */
  companyCode: string;
  /**
    @description
      场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景
    @format int32 */
  sceneCode: number;
  /**
    @description
      告警类型例如：pn_1000709_iot */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetRiskPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetRiskPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetRiskPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetRiskPushTopicResponse[200];
/**
 * @description
 *   查询示险topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetRiskPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetRiskPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetRiskPushTopicResponseSuccess>(
    "/workbench/pushConfig/getRiskPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchPushConfigGetRiskWoPushTopicOption = {
  /**
    @description
      公司编码例如：0161 */
  companyCode: string;
  /**
    @description
      场景，1：管网场景，2：场站场景，3：户内场景，4：工程场景
    @format int32 */
  sceneCode: number;
  /**
    @description
      告警类型例如：pn_1000709_iot */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchPushConfigGetRiskWoPushTopic */
interface ApiOperationGetWorkbenchPushConfigGetRiskWoPushTopicResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemTopicDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchPushConfigGetRiskWoPushTopicResponseSuccess =
  ApiOperationGetWorkbenchPushConfigGetRiskWoPushTopicResponse[200];
/**
 * @description
 *   查询示险工单topic接口
 * @tags 推送白名单-告警示险配置模块相关API
 * @produces *
 */
export const apiOperationGetWorkbenchPushConfigGetRiskWoPushTopic = (
  option?: ApiOperationGetWorkbenchPushConfigGetRiskWoPushTopicOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchPushConfigGetRiskWoPushTopicResponseSuccess>(
    "/workbench/pushConfig/getRiskWoPushTopic",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchQueryAlarmRiskDescriptionAlarmRiskCodeOption = {
  /**
    @description
      alarmRiskCode */
  alarmRiskCode: string;
};

/** @description response type for apiOperationGetWorkbenchQueryAlarmRiskDescriptionAlarmRiskCode */
interface ApiOperationGetWorkbenchQueryAlarmRiskDescriptionAlarmRiskCodeResponse {
  /**
   * @description
   *   OK
   */
  200: AlarmRiskDescriptionOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchQueryAlarmRiskDescriptionAlarmRiskCodeResponseSuccess =
  ApiOperationGetWorkbenchQueryAlarmRiskDescriptionAlarmRiskCodeResponse[200];
/**
 * @description
 *   根据告警示险code查询描述
 * @tags 告警示险说明
 * @produces *
 */
export const apiOperationGetWorkbenchQueryAlarmRiskDescriptionAlarmRiskCode = (
  option?: ApiOperationGetWorkbenchQueryAlarmRiskDescriptionAlarmRiskCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchQueryAlarmRiskDescriptionAlarmRiskCodeResponseSuccess>(
    "/workbench/queryAlarmRiskDescription/:alarmRiskCode",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchQueryRoleWhiteListCpmoCopOption = {
  /**
    @description
      cpmoCop */
  cpmoCop: string;
};

/** @description response type for apiOperationGetWorkbenchQueryRoleWhiteListCpmoCop */
interface ApiOperationGetWorkbenchQueryRoleWhiteListCpmoCopResponse {
  /**
   * @description
   *   OK
   */
  200: Array<RoleWhiteListDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchQueryRoleWhiteListCpmoCopResponseSuccess =
  ApiOperationGetWorkbenchQueryRoleWhiteListCpmoCopResponse[200];
/**
 * @description
 *   角色白名单——列表展示
 * @tags 角色白名单
 * @produces *
 */
export const apiOperationGetWorkbenchQueryRoleWhiteListCpmoCop = (
  option?: ApiOperationGetWorkbenchQueryRoleWhiteListCpmoCopOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchQueryRoleWhiteListCpmoCopResponseSuccess>(
    "/workbench/queryRoleWhiteList/:cpmoCop",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchQueryWorkbenchMultipleConfigOption =
  WorkbenchAlarmStandardInputDto;

/** @description response type for apiOperationPostWorkbenchQueryWorkbenchMultipleConfig */
interface ApiOperationPostWorkbenchQueryWorkbenchMultipleConfigResponse {
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

type ApiOperationPostWorkbenchQueryWorkbenchMultipleConfigResponseSuccess =
  ApiOperationPostWorkbenchQueryWorkbenchMultipleConfigResponse[200];
/**
 * @description
 *   标准配置新增页面-类型接口
 * @tags 标准配置接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchQueryWorkbenchMultipleConfig = (
  option?: ApiOperationPostWorkbenchQueryWorkbenchMultipleConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchQueryWorkbenchMultipleConfigResponseSuccess>(
    "/workbench/queryWorkbenchMultipleConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchRemoveWorkbenchUserFocusOption =
  WorkbenchUserFocusInputDTO;

/** @description response type for apiOperationPostWorkbenchRemoveWorkbenchUserFocus */
interface ApiOperationPostWorkbenchRemoveWorkbenchUserFocusResponse {
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

type ApiOperationPostWorkbenchRemoveWorkbenchUserFocusResponseSuccess =
  ApiOperationPostWorkbenchRemoveWorkbenchUserFocusResponse[200];
/**
 * @description
 *   删除用户关注
 * @tags 工作台用户关注
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchRemoveWorkbenchUserFocus = (
  option?: ApiOperationPostWorkbenchRemoveWorkbenchUserFocusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchRemoveWorkbenchUserFocusResponseSuccess>(
    "/workbench/removeWorkbenchUserFocus",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchRescueDisposalAttachmentGetListOption = {
  /**
    @description
      rescueId
    @format int64 */
  rescueId: number;
};

/** @description response type for apiOperationGetWorkbenchRescueDisposalAttachmentGetList */
interface ApiOperationGetWorkbenchRescueDisposalAttachmentGetListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<IndoorRescueDisposalAttachmentDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchRescueDisposalAttachmentGetListResponseSuccess =
  ApiOperationGetWorkbenchRescueDisposalAttachmentGetListResponse[200];
/**
 * @description
 *   根据抢险ID获取处置附件列表
 *   获取处置附件列表
 * @tags 户内抢险工作台附件相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchRescueDisposalAttachmentGetList = (
  option?: ApiOperationGetWorkbenchRescueDisposalAttachmentGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchRescueDisposalAttachmentGetListResponseSuccess>(
    "/workbench/rescue/disposalAttachment/getList",
    { method: "get", query: option },
    config
  );

type ApiOperationDeleteWorkbenchRescueDisposalAttachmentRemoveIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationDeleteWorkbenchRescueDisposalAttachmentRemoveId */
interface ApiOperationDeleteWorkbenchRescueDisposalAttachmentRemoveIdResponse {
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

type ApiOperationDeleteWorkbenchRescueDisposalAttachmentRemoveIdResponseSuccess =
  ApiOperationDeleteWorkbenchRescueDisposalAttachmentRemoveIdResponse[200];
/**
 * @description
 *   根据ID删除处置附件
 *   删除处置附件
 * @tags 户内抢险工作台附件相关接口
 * @produces *
 */
export const apiOperationDeleteWorkbenchRescueDisposalAttachmentRemoveId = (
  option?: ApiOperationDeleteWorkbenchRescueDisposalAttachmentRemoveIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationDeleteWorkbenchRescueDisposalAttachmentRemoveIdResponseSuccess>(
    "/workbench/rescue/disposalAttachment/remove/:id",
    { method: "delete", path: option },
    config
  );

type ApiOperationPostWorkbenchRescueDisposalAttachmentUploadFilesOption = {
  /**
    @description
      file */
  file: string;
  /**
    @description
      rescueId
    @format int64 */
  rescueId: number;
};

/** @description response type for apiOperationPostWorkbenchRescueDisposalAttachmentUploadFiles */
interface ApiOperationPostWorkbenchRescueDisposalAttachmentUploadFilesResponse {
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

type ApiOperationPostWorkbenchRescueDisposalAttachmentUploadFilesResponseSuccess =
  ApiOperationPostWorkbenchRescueDisposalAttachmentUploadFilesResponse[200];
/**
 * @description
 *   上传抢险处置附件
 *   上传抢险处置附件
 * @tags 户内抢险工作台附件相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchRescueDisposalAttachmentUploadFiles = (
  option?: ApiOperationPostWorkbenchRescueDisposalAttachmentUploadFilesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchRescueDisposalAttachmentUploadFilesResponseSuccess>(
    "/workbench/rescue/disposalAttachment/uploadFiles",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchRescueGetRescueListOption = IndoorRescueInputDto;

/** @description response type for apiOperationPostWorkbenchRescueGetRescueList */
interface ApiOperationPostWorkbenchRescueGetRescueListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<IndoorRescueWorkbenchDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchRescueGetRescueListResponseSuccess =
  ApiOperationPostWorkbenchRescueGetRescueListResponse[200];
/**
 * @description
 *   户内抢险一级列表查询 InputDTO中companyCode必传
 *   户内抢险工作台查询
 * @tags 户内抢险模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchRescueGetRescueList = (
  option?: ApiOperationPostWorkbenchRescueGetRescueListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchRescueGetRescueListResponseSuccess>(
    "/workbench/rescue/getRescueList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchRewardviolationrecordUploadFilesOption = {
  /**
    @description
      file */
  file: string;
};

/** @description response type for apiOperationPostWorkbenchRewardviolationrecordUploadFiles */
interface ApiOperationPostWorkbenchRewardviolationrecordUploadFilesResponse {
  /**
   * @description
   *   OK
   */
  200: Array<RewardViolationRecordAttachmentDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchRewardviolationrecordUploadFilesResponseSuccess =
  ApiOperationPostWorkbenchRewardviolationrecordUploadFilesResponse[200];
/**
 * @description
 *   上传奖罚记录附件
 *   上传奖罚记录附件
 * @tags 奖罚项附件相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchRewardviolationrecordUploadFiles = (
  option?: ApiOperationPostWorkbenchRewardviolationrecordUploadFilesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchRewardviolationrecordUploadFilesResponseSuccess>(
    "/workbench/rewardviolationrecord/uploadFiles",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchRiskRewardviolationrecordAddOption =
  RiskRewardViolationRecordInputDto;

/** @description response type for apiOperationPostWorkbenchRiskRewardviolationrecordAdd */
interface ApiOperationPostWorkbenchRiskRewardviolationrecordAddResponse {
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

type ApiOperationPostWorkbenchRiskRewardviolationrecordAddResponseSuccess =
  ApiOperationPostWorkbenchRiskRewardviolationrecordAddResponse[200];
/**
 * @description
 *   添加示险奖罚记录
 *   添加示险奖罚记录
 * @tags 示险奖励罚款相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchRiskRewardviolationrecordAdd = (
  option?: ApiOperationPostWorkbenchRiskRewardviolationrecordAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchRiskRewardviolationrecordAddResponseSuccess>(
    "/workbench/risk/rewardviolationrecord/add",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchRiskRewardviolationrecordListOption = {
  /**
    @description
      riskSecondId */
  riskSecondId: string;
};

/** @description response type for apiOperationGetWorkbenchRiskRewardviolationrecordList */
interface ApiOperationGetWorkbenchRiskRewardviolationrecordListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<RiskRewardViolationRecordDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchRiskRewardviolationrecordListResponseSuccess =
  ApiOperationGetWorkbenchRiskRewardviolationrecordListResponse[200];
/**
 * @description
 *   查询示险奖罚记录列表
 *   查询示险奖罚记录列表
 * @tags 示险奖励罚款相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchRiskRewardviolationrecordList = (
  option?: ApiOperationGetWorkbenchRiskRewardviolationrecordListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchRiskRewardviolationrecordListResponseSuccess>(
    "/workbench/risk/rewardviolationrecord/list",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchRiskRewardviolationrecordUpdateOption =
  RiskRewardViolationRecordInputDto;

/** @description response type for apiOperationPostWorkbenchRiskRewardviolationrecordUpdate */
interface ApiOperationPostWorkbenchRiskRewardviolationrecordUpdateResponse {
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

type ApiOperationPostWorkbenchRiskRewardviolationrecordUpdateResponseSuccess =
  ApiOperationPostWorkbenchRiskRewardviolationrecordUpdateResponse[200];
/**
 * @description
 *   更新示险奖罚记录
 *   更新示险奖罚记录
 * @tags 示险奖励罚款相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchRiskRewardviolationrecordUpdate = (
  option?: ApiOperationPostWorkbenchRiskRewardviolationrecordUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchRiskRewardviolationrecordUpdateResponseSuccess>(
    "/workbench/risk/rewardviolationrecord/update",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchRootCauseBatchSaveOption = RootCauseBatchSaveDto;

/** @description response type for apiOperationPostWorkbenchRootCauseBatchSave */
interface ApiOperationPostWorkbenchRootCauseBatchSaveResponse {
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

type ApiOperationPostWorkbenchRootCauseBatchSaveResponseSuccess =
  ApiOperationPostWorkbenchRootCauseBatchSaveResponse[200];
/**
 * @description
 *   批量保存根本原因配置
 *   批量保存
 * @tags 根本原因配置API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchRootCauseBatchSave = (
  option?: ApiOperationPostWorkbenchRootCauseBatchSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchRootCauseBatchSaveResponseSuccess>(
    "/workbench/rootCause/batchSave",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchRootCauseGetRootCausesOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      类型编码 */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchRootCauseGetRootCauses */
interface ApiOperationGetWorkbenchRootCauseGetRootCausesResponse {
  /**
   * @description
   *   OK
   */
  200: Array<RootCauseDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchRootCauseGetRootCausesResponseSuccess =
  ApiOperationGetWorkbenchRootCauseGetRootCausesResponse[200];
/**
 * @description
 *   根据管理实体编码和类型编码获取根本原因
 *   获取根本原因
 * @tags 根本原因配置API
 * @produces *
 */
export const apiOperationGetWorkbenchRootCauseGetRootCauses = (
  option?: ApiOperationGetWorkbenchRootCauseGetRootCausesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchRootCauseGetRootCausesResponseSuccess>(
    "/workbench/rootCause/getRootCauses",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchRootCauseSaveOption = RootCauseSaveDto;

/** @description response type for apiOperationPostWorkbenchRootCauseSave */
interface ApiOperationPostWorkbenchRootCauseSaveResponse {
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

type ApiOperationPostWorkbenchRootCauseSaveResponseSuccess =
  ApiOperationPostWorkbenchRootCauseSaveResponse[200];
/**
 * @description
 *   保存根本原因配置
 *   保存
 * @tags 根本原因配置API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchRootCauseSave = (
  option?: ApiOperationPostWorkbenchRootCauseSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchRootCauseSaveResponseSuccess>(
    "/workbench/rootCause/save",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchSaveOutboundRecordOption = OutboundRecordDto;

/** @description response type for apiOperationPostWorkbenchSaveOutboundRecord */
interface ApiOperationPostWorkbenchSaveOutboundRecordResponse {
  /**
   * @description
   *   OK
   */
  200: OutboundRecordDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchSaveOutboundRecordResponseSuccess =
  ApiOperationPostWorkbenchSaveOutboundRecordResponse[200];
/**
 * @description
 *   保存外呼记录
 * @tags 外呼配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSaveOutboundRecord = (
  option?: ApiOperationPostWorkbenchSaveOutboundRecordOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSaveOutboundRecordResponseSuccess>(
    "/workbench/saveOutboundRecord",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchSaveScreenContentOption = ScreenContentAddDto;

/** @description response type for apiOperationPostWorkbenchSaveScreenContent */
interface ApiOperationPostWorkbenchSaveScreenContentResponse {
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

type ApiOperationPostWorkbenchSaveScreenContentResponseSuccess =
  ApiOperationPostWorkbenchSaveScreenContentResponse[200];
/**
 * @description
 *   上屏白名单添加接口
 * @tags 上屏条目模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSaveScreenContent = (
  option?: ApiOperationPostWorkbenchSaveScreenContentOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSaveScreenContentResponseSuccess>(
    "/workbench/saveScreenContent",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchSaveWorkbenchUserFocusOption =
  WorkbenchUserFocusInputDTO;

/** @description response type for apiOperationPostWorkbenchSaveWorkbenchUserFocus */
interface ApiOperationPostWorkbenchSaveWorkbenchUserFocusResponse {
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

type ApiOperationPostWorkbenchSaveWorkbenchUserFocusResponseSuccess =
  ApiOperationPostWorkbenchSaveWorkbenchUserFocusResponse[200];
/**
 * @description
 *   保存用户关注
 * @tags 工作台用户关注
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSaveWorkbenchUserFocus = (
  option?: ApiOperationPostWorkbenchSaveWorkbenchUserFocusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSaveWorkbenchUserFocusResponseSuccess>(
    "/workbench/saveWorkbenchUserFocus",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchScreenGetStationInfoOption =
  StationModuleQueryInputDto;

/** @description response type for apiOperationPostWorkbenchScreenGetStationInfo */
interface ApiOperationPostWorkbenchScreenGetStationInfoResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListStationModuleOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchScreenGetStationInfoResponseSuccess =
  ApiOperationPostWorkbenchScreenGetStationInfoResponse[200];
/**
 * @description
 *   推送白名单-大屏站点配置列表接口
 * @tags 上屏条目模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchScreenGetStationInfo = (
  option?: ApiOperationPostWorkbenchScreenGetStationInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchScreenGetStationInfoResponseSuccess>(
    "/workbench/screen/getStationInfo",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchScreenStationGetStationTypeListEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchScreenStationGetStationTypeListEcode */
interface ApiOperationGetWorkbenchScreenStationGetStationTypeListEcodeResponse {
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

type ApiOperationGetWorkbenchScreenStationGetStationTypeListEcodeResponseSuccess =
  ApiOperationGetWorkbenchScreenStationGetStationTypeListEcodeResponse[200];
/**
 * @description
 *   推送白名单-大屏站点查询类型下拉列表接口
 * @tags 上屏条目模块
 * @produces *
 */
export const apiOperationGetWorkbenchScreenStationGetStationTypeListEcode = (
  option?: ApiOperationGetWorkbenchScreenStationGetStationTypeListEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchScreenStationGetStationTypeListEcodeResponseSuccess>(
    "/workbench/screen/station/getStationTypeList/:ecode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchScreenStationUpdateEnableOption =
  StationModuleInputDto;

/** @description response type for apiOperationPostWorkbenchScreenStationUpdateEnable */
interface ApiOperationPostWorkbenchScreenStationUpdateEnableResponse {
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

type ApiOperationPostWorkbenchScreenStationUpdateEnableResponseSuccess =
  ApiOperationPostWorkbenchScreenStationUpdateEnableResponse[200];
/**
 * @description
 *   推送白名单-编辑是否推送接口
 * @tags 上屏条目模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchScreenStationUpdateEnable = (
  option?: ApiOperationPostWorkbenchScreenStationUpdateEnableOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchScreenStationUpdateEnableResponseSuccess>(
    "/workbench/screen/station/updateEnable",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchScreenStationUpdatePushOtherEcodeOption =
  StationModuleInputDto;

/** @description response type for apiOperationPostWorkbenchScreenStationUpdatePushOtherEcode */
interface ApiOperationPostWorkbenchScreenStationUpdatePushOtherEcodeResponse {
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

type ApiOperationPostWorkbenchScreenStationUpdatePushOtherEcodeResponseSuccess =
  ApiOperationPostWorkbenchScreenStationUpdatePushOtherEcodeResponse[200];
/**
 * @description
 *   推送白名单-编辑推送公司接口
 * @tags 上屏条目模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchScreenStationUpdatePushOtherEcode = (
  option?: ApiOperationPostWorkbenchScreenStationUpdatePushOtherEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchScreenStationUpdatePushOtherEcodeResponseSuccess>(
    "/workbench/screen/station/updatePushOtherEcode",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchScreenContentGetScreenContentListOption =
  ScreenContentInputDto;

/** @description response type for apiOperationPostWorkbenchScreenContentGetScreenContentList */
interface ApiOperationPostWorkbenchScreenContentGetScreenContentListResponse {
  /**
   * @description
   *   OK
   */
  200: ScreenContentDtoPage;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchScreenContentGetScreenContentListResponseSuccess =
  ApiOperationPostWorkbenchScreenContentGetScreenContentListResponse[200];
/**
 * @description
 *   上屏条目查询
 * @tags 上屏条目模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchScreenContentGetScreenContentList = (
  option?: ApiOperationPostWorkbenchScreenContentGetScreenContentListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchScreenContentGetScreenContentListResponseSuccess>(
    "/workbench/screenContent/getScreenContentList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchScreenContentMMdOrganizationListOption =
  MMdOrganizationInputDto;

/** @description response type for apiOperationPostWorkbenchScreenContentMMdOrganizationList */
interface ApiOperationPostWorkbenchScreenContentMMdOrganizationListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<MMdOrganizationDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchScreenContentMMdOrganizationListResponseSuccess =
  ApiOperationPostWorkbenchScreenContentMMdOrganizationListResponse[200];
/**
 * @description
 *   上屏条目所属公司
 * @tags 上屏条目模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchScreenContentMMdOrganizationList = (
  option?: ApiOperationPostWorkbenchScreenContentMMdOrganizationListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchScreenContentMMdOrganizationListResponseSuccess>(
    "/workbench/screenContent/mMdOrganizationList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchScreenContentUpOnScreenOption =
  Array<ScreenContentInputDto>;

/** @description response type for apiOperationPostWorkbenchScreenContentUpOnScreen */
interface ApiOperationPostWorkbenchScreenContentUpOnScreenResponse {
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

type ApiOperationPostWorkbenchScreenContentUpOnScreenResponseSuccess =
  ApiOperationPostWorkbenchScreenContentUpOnScreenResponse[200];
/**
 * @description
 *   上屏条目批量修改
 * @tags 上屏条目模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchScreenContentUpOnScreen = (
  option?: ApiOperationPostWorkbenchScreenContentUpOnScreenOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchScreenContentUpOnScreenResponseSuccess>(
    "/workbench/screenContent/upOnScreen",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchScreenContentUpScreenContentOption =
  ScreenContentInputDto;

/** @description response type for apiOperationPostWorkbenchScreenContentUpScreenContent */
interface ApiOperationPostWorkbenchScreenContentUpScreenContentResponse {
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

type ApiOperationPostWorkbenchScreenContentUpScreenContentResponseSuccess =
  ApiOperationPostWorkbenchScreenContentUpScreenContentResponse[200];
/**
 * @description
 *   上屏条目修改
 * @tags 上屏条目模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchScreenContentUpScreenContent = (
  option?: ApiOperationPostWorkbenchScreenContentUpScreenContentOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchScreenContentUpScreenContentResponseSuccess>(
    "/workbench/screenContent/upScreenContent",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchScreenRegionModuleGetListOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationPostWorkbenchScreenRegionModuleGetList */
interface ApiOperationPostWorkbenchScreenRegionModuleGetListResponse {
  /**
   * @description
   *   OK
   */
  200: ScreenRegionModuleOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchScreenRegionModuleGetListResponseSuccess =
  ApiOperationPostWorkbenchScreenRegionModuleGetListResponse[200];
/**
 * @description
 *   获取重点区域信息-列表接口
 * @tags 大屏重点区域
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchScreenRegionModuleGetList = (
  option?: ApiOperationPostWorkbenchScreenRegionModuleGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchScreenRegionModuleGetListResponseSuccess>(
    "/workbench/screenRegionModule/getList",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchSearchPageAlarmListOption =
  WorkbenchSearchListInputDto;

/** @description response type for apiOperationPostWorkbenchSearchPageAlarmList */
interface ApiOperationPostWorkbenchSearchPageAlarmListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListAlarmRiskEvaluationHistoryOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchSearchPageAlarmListResponseSuccess =
  ApiOperationPostWorkbenchSearchPageAlarmListResponse[200];
/**
 * @description
 *   告警信息一级列表查询 InputDTO中ecode必传
 *   查询告警信息列表
 * @tags 工作台搜索列表相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSearchPageAlarmList = (
  option?: ApiOperationPostWorkbenchSearchPageAlarmListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSearchPageAlarmListResponseSuccess>(
    "/workbench/search/page/alarmList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchSearchPageDangerWorkTypeListOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationPostWorkbenchSearchPageDangerWorkTypeList */
interface ApiOperationPostWorkbenchSearchPageDangerWorkTypeListResponse {
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

type ApiOperationPostWorkbenchSearchPageDangerWorkTypeListResponseSuccess =
  ApiOperationPostWorkbenchSearchPageDangerWorkTypeListResponse[200];
/**
 * @description
 *   危险作业作业类别查询 ecode必传
 *   查询危险作业作业类别列表
 * @tags 工作台搜索列表相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSearchPageDangerWorkTypeList = (
  option?: ApiOperationPostWorkbenchSearchPageDangerWorkTypeListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSearchPageDangerWorkTypeListResponseSuccess>(
    "/workbench/search/page/dangerWorkTypeList",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchSearchPageIndoorRescueListOption =
  WorkbenchSearchListInputDto;

/** @description response type for apiOperationPostWorkbenchSearchPageIndoorRescueList */
interface ApiOperationPostWorkbenchSearchPageIndoorRescueListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListIndoorRescueShowDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchSearchPageIndoorRescueListResponseSuccess =
  ApiOperationPostWorkbenchSearchPageIndoorRescueListResponse[200];
/**
 * @description
 *   户内抢险信息列表 InputDTO中ecode必传
 *   查询户内抢险信息列表
 * @tags 工作台搜索列表相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSearchPageIndoorRescueList = (
  option?: ApiOperationPostWorkbenchSearchPageIndoorRescueListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSearchPageIndoorRescueListResponseSuccess>(
    "/workbench/search/page/indoorRescueList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchSearchPageOrderListOption =
  WorkbenchSearchListInputDto;

/** @description response type for apiOperationPostWorkbenchSearchPageOrderList */
interface ApiOperationPostWorkbenchSearchPageOrderListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListAlarmRiskEvaluationHistoryOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchSearchPageOrderListResponseSuccess =
  ApiOperationPostWorkbenchSearchPageOrderListResponse[200];
/**
 * @description
 *   关单评价列表查询 InputDTO中ecode必传
 *   查询关单评价列表
 * @tags 工作台搜索列表相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSearchPageOrderList = (
  option?: ApiOperationPostWorkbenchSearchPageOrderListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSearchPageOrderListResponseSuccess>(
    "/workbench/search/page/orderList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchSearchPageOtherCentreAlarmListOption =
  WorkbenchSearchListOtherCentreInputDto;

/** @description response type for apiOperationPostWorkbenchSearchPageOtherCentreAlarmList */
interface ApiOperationPostWorkbenchSearchPageOtherCentreAlarmListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListAlarmRiskEvaluationHistoryOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchSearchPageOtherCentreAlarmListResponseSuccess =
  ApiOperationPostWorkbenchSearchPageOtherCentreAlarmListResponse[200];
/**
 * @description
 *   告警信息一级列表查询 InputDTO中ecode必传
 *   其他中心-查询告警信息列表
 * @tags 工作台搜索列表相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSearchPageOtherCentreAlarmList = (
  option?: ApiOperationPostWorkbenchSearchPageOtherCentreAlarmListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSearchPageOtherCentreAlarmListResponseSuccess>(
    "/workbench/search/page/otherCentre/alarmList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchSearchPageOtherCentreRiskListOption =
  WorkbenchSearchListOtherCentreInputDto;

/** @description response type for apiOperationPostWorkbenchSearchPageOtherCentreRiskList */
interface ApiOperationPostWorkbenchSearchPageOtherCentreRiskListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListAlarmRiskEvaluationHistoryOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchSearchPageOtherCentreRiskListResponseSuccess =
  ApiOperationPostWorkbenchSearchPageOtherCentreRiskListResponse[200];
/**
 * @description
 *   示险信息一级列表查询 InputDTO中ecode必传
 *   其他中心-查询示险信息列表
 * @tags 工作台搜索列表相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSearchPageOtherCentreRiskList = (
  option?: ApiOperationPostWorkbenchSearchPageOtherCentreRiskListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSearchPageOtherCentreRiskListResponseSuccess>(
    "/workbench/search/page/otherCentre/riskList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchSearchPageRiskListOption =
  WorkbenchSearchListInputDto;

/** @description response type for apiOperationPostWorkbenchSearchPageRiskList */
interface ApiOperationPostWorkbenchSearchPageRiskListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListAlarmRiskEvaluationHistoryOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchSearchPageRiskListResponseSuccess =
  ApiOperationPostWorkbenchSearchPageRiskListResponse[200];
/**
 * @description
 *   示险信息一级列表查询 InputDTO中ecode必传
 *   查询示险信息列表
 * @tags 工作台搜索列表相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSearchPageRiskList = (
  option?: ApiOperationPostWorkbenchSearchPageRiskListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSearchPageRiskListResponseSuccess>(
    "/workbench/search/page/riskList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchShieldDeviceAddConfigOption =
  ShieldDeviceConfigAddInputDto;

/** @description response type for apiOperationPostWorkbenchShieldDeviceAddConfig */
interface ApiOperationPostWorkbenchShieldDeviceAddConfigResponse {
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

type ApiOperationPostWorkbenchShieldDeviceAddConfigResponseSuccess =
  ApiOperationPostWorkbenchShieldDeviceAddConfigResponse[200];
/**
 * @description
 *   物联设备屏蔽配置信息-添加接口
 * @tags 物联设备屏蔽配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchShieldDeviceAddConfig = (
  option?: ApiOperationPostWorkbenchShieldDeviceAddConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchShieldDeviceAddConfigResponseSuccess>(
    "/workbench/shield/device/addConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchShieldDeviceDeleteConfigIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchShieldDeviceDeleteConfigId */
interface ApiOperationGetWorkbenchShieldDeviceDeleteConfigIdResponse {
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

type ApiOperationGetWorkbenchShieldDeviceDeleteConfigIdResponseSuccess =
  ApiOperationGetWorkbenchShieldDeviceDeleteConfigIdResponse[200];
/**
 * @description
 *   物联设备屏蔽配置信息-删除接口
 * @tags 物联设备屏蔽配置模块
 * @produces *
 */
export const apiOperationGetWorkbenchShieldDeviceDeleteConfigId = (
  option?: ApiOperationGetWorkbenchShieldDeviceDeleteConfigIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchShieldDeviceDeleteConfigIdResponseSuccess>(
    "/workbench/shield/device/deleteConfig/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchShieldDeviceDetailsIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiOperationGetWorkbenchShieldDeviceDetailsId */
interface ApiOperationGetWorkbenchShieldDeviceDetailsIdResponse {
  /**
   * @description
   *   OK
   */
  200: DeviceInfoDetailsOutputDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchShieldDeviceDetailsIdResponseSuccess =
  ApiOperationGetWorkbenchShieldDeviceDetailsIdResponse[200];
/**
 * @description
 *   物联设备屏蔽配置信息-详情接口
 * @tags 物联设备屏蔽配置模块
 * @produces *
 */
export const apiOperationGetWorkbenchShieldDeviceDetailsId = (
  option?: ApiOperationGetWorkbenchShieldDeviceDetailsIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchShieldDeviceDetailsIdResponseSuccess>(
    "/workbench/shield/device/details/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchShieldDeviceGetConfigListOption =
  ShieldDeviceConfigQueryInputDto;

/** @description response type for apiOperationPostWorkbenchShieldDeviceGetConfigList */
interface ApiOperationPostWorkbenchShieldDeviceGetConfigListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListShieldDeviceConfigOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchShieldDeviceGetConfigListResponseSuccess =
  ApiOperationPostWorkbenchShieldDeviceGetConfigListResponse[200];
/**
 * @description
 *   物联设备屏蔽配置信息-列表接口
 * @tags 物联设备屏蔽配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchShieldDeviceGetConfigList = (
  option?: ApiOperationPostWorkbenchShieldDeviceGetConfigListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchShieldDeviceGetConfigListResponseSuccess>(
    "/workbench/shield/device/getConfigList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchShieldDeviceUpdateConfigOption =
  ShieldDeviceConfigInputDto;

/** @description response type for apiOperationPostWorkbenchShieldDeviceUpdateConfig */
interface ApiOperationPostWorkbenchShieldDeviceUpdateConfigResponse {
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

type ApiOperationPostWorkbenchShieldDeviceUpdateConfigResponseSuccess =
  ApiOperationPostWorkbenchShieldDeviceUpdateConfigResponse[200];
/**
 * @description
 *   物联设备屏蔽配置信息-编辑接口
 * @tags 物联设备屏蔽配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchShieldDeviceUpdateConfig = (
  option?: ApiOperationPostWorkbenchShieldDeviceUpdateConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchShieldDeviceUpdateConfigResponseSuccess>(
    "/workbench/shield/device/updateConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchShieldDeviceCodeListOption =
  ShieldDeviceConfigQueryInputDto;

/** @description response type for apiOperationPostWorkbenchShieldDeviceCodeList */
interface ApiOperationPostWorkbenchShieldDeviceCodeListResponse {
  /**
   * @description
   *   OK
   */
  200: ShieldDeviceCodeInfoOutputDto;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchShieldDeviceCodeListResponseSuccess =
  ApiOperationPostWorkbenchShieldDeviceCodeListResponse[200];
/**
 * @description
 *   设备编码-列表接口
 * @tags 物联设备屏蔽配置模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchShieldDeviceCodeList = (
  option?: ApiOperationPostWorkbenchShieldDeviceCodeListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchShieldDeviceCodeListResponseSuccess>(
    "/workbench/shield/deviceCodeList",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchShieldDeviceTypeListEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchShieldDeviceTypeListEcode */
interface ApiOperationGetWorkbenchShieldDeviceTypeListEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ShieldDeviceInfoOutputDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchShieldDeviceTypeListEcodeResponseSuccess =
  ApiOperationGetWorkbenchShieldDeviceTypeListEcodeResponse[200];
/**
 * @description
 *   设备类型下拉-列表接口
 * @tags 物联设备屏蔽配置模块
 * @produces *
 */
export const apiOperationGetWorkbenchShieldDeviceTypeListEcode = (
  option?: ApiOperationGetWorkbenchShieldDeviceTypeListEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchShieldDeviceTypeListEcodeResponseSuccess>(
    "/workbench/shield/deviceTypeList/:ecode",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchShowDangerDisposalAttachmentAddOption = {
  /**
    @description
      file */
  file: string;
  /**
    @description
      showDangerId
    @format int64 */
  showDangerId: number;
};

/** @description response type for apiOperationPostWorkbenchShowDangerDisposalAttachmentAdd */
interface ApiOperationPostWorkbenchShowDangerDisposalAttachmentAddResponse {
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

type ApiOperationPostWorkbenchShowDangerDisposalAttachmentAddResponseSuccess =
  ApiOperationPostWorkbenchShowDangerDisposalAttachmentAddResponse[200];
/**
 * @description
 *   添加处置附件
 *   添加处置附件
 * @tags 示险处置附件API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchShowDangerDisposalAttachmentAdd = (
  option?: ApiOperationPostWorkbenchShowDangerDisposalAttachmentAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchShowDangerDisposalAttachmentAddResponseSuccess>(
    "/workbench/showDanger/disposalAttachment/add",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchShowDangerDisposalAttachmentBatchAddOption =
  Array<ShowDangerDisposalAttachmentDto>;

/** @description response type for apiOperationPostWorkbenchShowDangerDisposalAttachmentBatchAdd */
interface ApiOperationPostWorkbenchShowDangerDisposalAttachmentBatchAddResponse {
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

type ApiOperationPostWorkbenchShowDangerDisposalAttachmentBatchAddResponseSuccess =
  ApiOperationPostWorkbenchShowDangerDisposalAttachmentBatchAddResponse[200];
/**
 * @description
 *   批量添加处置附件
 *   批量添加处置附件
 * @tags 示险处置附件API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchShowDangerDisposalAttachmentBatchAdd = (
  option?: ApiOperationPostWorkbenchShowDangerDisposalAttachmentBatchAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchShowDangerDisposalAttachmentBatchAddResponseSuccess>(
    "/workbench/showDanger/disposalAttachment/batch/add",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchShowDangerDisposalAttachmentGetListOption = {
  /**
    @description
      showDangerId
    @format int64 */
  showDangerId: number;
};

/** @description response type for apiOperationGetWorkbenchShowDangerDisposalAttachmentGetList */
interface ApiOperationGetWorkbenchShowDangerDisposalAttachmentGetListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ShowDangerDisposalAttachmentDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchShowDangerDisposalAttachmentGetListResponseSuccess =
  ApiOperationGetWorkbenchShowDangerDisposalAttachmentGetListResponse[200];
/**
 * @description
 *   根据示险ID获取处置附件列表
 *   获取处置附件列表
 * @tags 示险处置附件API
 * @produces *
 */
export const apiOperationGetWorkbenchShowDangerDisposalAttachmentGetList = (
  option?: ApiOperationGetWorkbenchShowDangerDisposalAttachmentGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchShowDangerDisposalAttachmentGetListResponseSuccess>(
    "/workbench/showDanger/disposalAttachment/getList",
    { method: "get", query: option },
    config
  );

type ApiOperationDeleteWorkbenchShowDangerDisposalAttachmentRemoveIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationDeleteWorkbenchShowDangerDisposalAttachmentRemoveId */
interface ApiOperationDeleteWorkbenchShowDangerDisposalAttachmentRemoveIdResponse {
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

type ApiOperationDeleteWorkbenchShowDangerDisposalAttachmentRemoveIdResponseSuccess =
  ApiOperationDeleteWorkbenchShowDangerDisposalAttachmentRemoveIdResponse[200];
/**
 * @description
 *   根据ID删除处置附件
 *   删除处置附件
 * @tags 示险处置附件API
 * @produces *
 */
export const apiOperationDeleteWorkbenchShowDangerDisposalAttachmentRemoveId = (
  option?: ApiOperationDeleteWorkbenchShowDangerDisposalAttachmentRemoveIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationDeleteWorkbenchShowDangerDisposalAttachmentRemoveIdResponseSuccess>(
    "/workbench/showDanger/disposalAttachment/remove/:id",
    { method: "delete", path: option },
    config
  );

type ApiOperationGetWorkbenchShowDangerGetDisposalProcessListOption = {
  /**
    @description
      showDangerId
    @format int64 */
  showDangerId: number;
};

/** @description response type for apiOperationGetWorkbenchShowDangerGetDisposalProcessList */
interface ApiOperationGetWorkbenchShowDangerGetDisposalProcessListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ShowDangerDisposalProcessDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchShowDangerGetDisposalProcessListResponseSuccess =
  ApiOperationGetWorkbenchShowDangerGetDisposalProcessListResponse[200];
/**
 * @description
 *   根据示险ID获取示险处置进度列表
 *   获取示险处置进度列表
 * @tags 处置进度API
 * @produces *
 */
export const apiOperationGetWorkbenchShowDangerGetDisposalProcessList = (
  option?: ApiOperationGetWorkbenchShowDangerGetDisposalProcessListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchShowDangerGetDisposalProcessListResponseSuccess>(
    "/workbench/showDanger/getDisposalProcessList",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchShowDangerGetShowDangerListOption =
  AlarmShowDangerInputDto;

/** @description response type for apiOperationPostWorkbenchShowDangerGetShowDangerList */
interface ApiOperationPostWorkbenchShowDangerGetShowDangerListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ShowDangerDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchShowDangerGetShowDangerListResponseSuccess =
  ApiOperationPostWorkbenchShowDangerGetShowDangerListResponse[200];
/**
 * @description
 *   示险信息一级列表查询 InputDTO中companyCode必传
 *   获取示险信息列表
 * @tags 示险工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchShowDangerGetShowDangerList = (
  option?: ApiOperationPostWorkbenchShowDangerGetShowDangerListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchShowDangerGetShowDangerListResponseSuccess>(
    "/workbench/showDanger/getShowDangerList",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchShowDangerOtherCentreGetShowDangerListOption =
  AlarmShowDangerOtherCentreInputDto;

/** @description response type for apiOperationPostWorkbenchShowDangerOtherCentreGetShowDangerList */
interface ApiOperationPostWorkbenchShowDangerOtherCentreGetShowDangerListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ShowDangerDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchShowDangerOtherCentreGetShowDangerListResponseSuccess =
  ApiOperationPostWorkbenchShowDangerOtherCentreGetShowDangerListResponse[200];
/**
 * @description
 *   示险信息一级列表查询 InputDTO中companyCode必传
 *   其他中心，示险列表查询
 * @tags 示险工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchShowDangerOtherCentreGetShowDangerList = (
  option?: ApiOperationPostWorkbenchShowDangerOtherCentreGetShowDangerListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchShowDangerOtherCentreGetShowDangerListResponseSuccess>(
    "/workbench/showDanger/otherCentre/getShowDangerList",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchShowDangerQueryShowDangerDetailListOption = {
  /**
    @description
      ids
    @format int64 */
  ids: number;
};

/** @description response type for apiOperationGetWorkbenchShowDangerQueryShowDangerDetailList */
interface ApiOperationGetWorkbenchShowDangerQueryShowDangerDetailListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ShowDangerDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchShowDangerQueryShowDangerDetailListResponseSuccess =
  ApiOperationGetWorkbenchShowDangerQueryShowDangerDetailListResponse[200];
/**
 * @description
 *   根据示险id获取告警信息
 * @tags 示险工作台相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchShowDangerQueryShowDangerDetailList = (
  option?: ApiOperationGetWorkbenchShowDangerQueryShowDangerDetailListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchShowDangerQueryShowDangerDetailListResponseSuccess>(
    "/workbench/showDanger/queryShowDangerDetailList",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchShowDangerQueryShowDangerListOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchShowDangerQueryShowDangerList */
interface ApiOperationGetWorkbenchShowDangerQueryShowDangerListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ShowDangerDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchShowDangerQueryShowDangerListResponseSuccess =
  ApiOperationGetWorkbenchShowDangerQueryShowDangerListResponse[200];
/**
 * @description
 *   根据实体编码查询示险信息
 * @tags 示险工作台相关接口
 * @produces *
 */
export const apiOperationGetWorkbenchShowDangerQueryShowDangerList = (
  option?: ApiOperationGetWorkbenchShowDangerQueryShowDangerListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchShowDangerQueryShowDangerListResponseSuccess>(
    "/workbench/showDanger/queryShowDangerList",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchSubscribeEventOption = SubScribeEventVo;

/** @description response type for apiOperationPostWorkbenchSubscribeEvent */
interface ApiOperationPostWorkbenchSubscribeEventResponse {
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

type ApiOperationPostWorkbenchSubscribeEventResponseSuccess =
  ApiOperationPostWorkbenchSubscribeEventResponse[200];
/**
 * @description
 *   视频告警事件订阅
 * @tags 视频告警模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSubscribeEvent = (
  option?: ApiOperationPostWorkbenchSubscribeEventOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSubscribeEventResponseSuccess>(
    "/workbench/subscribeEvent",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchSueWarningRiskOption = SueWarnRiskInputDto;

/** @description response type for apiOperationPostWorkbenchSueWarningRisk */
interface ApiOperationPostWorkbenchSueWarningRiskResponse {
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

type ApiOperationPostWorkbenchSueWarningRiskResponseSuccess =
  ApiOperationPostWorkbenchSueWarningRiskResponse[200];
/**
 * @description
 *   告警和示险修改有效无效接口  1:有效, 2:测试, 3:误报
 * @tags 告警工作台相关接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSueWarningRisk = (
  option?: ApiOperationPostWorkbenchSueWarningRiskOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSueWarningRiskResponseSuccess>(
    "/workbench/sueWarningRisk",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchSystemBasicInfoAddOption =
  SystemBasicInformationInputDto;

/** @description response type for apiOperationPostWorkbenchSystemBasicInfoAdd */
interface ApiOperationPostWorkbenchSystemBasicInfoAddResponse {
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

type ApiOperationPostWorkbenchSystemBasicInfoAddResponseSuccess =
  ApiOperationPostWorkbenchSystemBasicInfoAddResponse[200];
/**
 * @description
 *   添加 系统基本信息-列表接口
 * @tags 推送系统配置--系统基本信息模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSystemBasicInfoAdd = (
  option?: ApiOperationPostWorkbenchSystemBasicInfoAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSystemBasicInfoAddResponseSuccess>(
    "/workbench/system/basicInfo/add",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchSystemBasicInfoDeleteIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchSystemBasicInfoDeleteId */
interface ApiOperationGetWorkbenchSystemBasicInfoDeleteIdResponse {
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

type ApiOperationGetWorkbenchSystemBasicInfoDeleteIdResponseSuccess =
  ApiOperationGetWorkbenchSystemBasicInfoDeleteIdResponse[200];
/**
 * @description
 *   删除 系统基本信息-列表接口
 * @tags 推送系统配置--系统基本信息模块
 * @produces *
 */
export const apiOperationGetWorkbenchSystemBasicInfoDeleteId = (
  option?: ApiOperationGetWorkbenchSystemBasicInfoDeleteIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchSystemBasicInfoDeleteIdResponseSuccess>(
    "/workbench/system/basicInfo/delete/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchSystemBasicInfoGetListOption = {
  /**
    @description
      query */
  query: string;
};

/** @description response type for apiOperationPostWorkbenchSystemBasicInfoGetList */
interface ApiOperationPostWorkbenchSystemBasicInfoGetListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SystemBasicInformationOutputDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchSystemBasicInfoGetListResponseSuccess =
  ApiOperationPostWorkbenchSystemBasicInfoGetListResponse[200];
/**
 * @description
 *   获取所有系统基本信息列表-列表接口
 * @tags 推送系统配置--系统基本信息模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSystemBasicInfoGetList = (
  option?: ApiOperationPostWorkbenchSystemBasicInfoGetListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSystemBasicInfoGetListResponseSuccess>(
    "/workbench/system/basicInfo/getList",
    { method: "post", query: option },
    config
  );

type ApiOperationPostWorkbenchSystemBasicInfoUpdateOption =
  SystemBasicInformationInputDto;

/** @description response type for apiOperationPostWorkbenchSystemBasicInfoUpdate */
interface ApiOperationPostWorkbenchSystemBasicInfoUpdateResponse {
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

type ApiOperationPostWorkbenchSystemBasicInfoUpdateResponseSuccess =
  ApiOperationPostWorkbenchSystemBasicInfoUpdateResponse[200];
/**
 * @description
 *   更新 系统基本信息-列表接口
 * @tags 推送系统配置--系统基本信息模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchSystemBasicInfoUpdate = (
  option?: ApiOperationPostWorkbenchSystemBasicInfoUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchSystemBasicInfoUpdateResponseSuccess>(
    "/workbench/system/basicInfo/update",
    { method: "post", body: option },
    config
  );

type ApiOperationDeleteWorkbenchTimeoutRemindConfigDeleteByIdIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationDeleteWorkbenchTimeoutRemindConfigDeleteByIdId */
interface ApiOperationDeleteWorkbenchTimeoutRemindConfigDeleteByIdIdResponse {
  /**
   * @description
   *   OK
   */
  200: boolean;
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

type ApiOperationDeleteWorkbenchTimeoutRemindConfigDeleteByIdIdResponseSuccess =
  ApiOperationDeleteWorkbenchTimeoutRemindConfigDeleteByIdIdResponse[200];
/**
 * @description
 *   根据主键删除超时提醒配置数据
 * @tags 超时提醒API
 * @produces *
 */
export const apiOperationDeleteWorkbenchTimeoutRemindConfigDeleteByIdId = (
  option?: ApiOperationDeleteWorkbenchTimeoutRemindConfigDeleteByIdIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationDeleteWorkbenchTimeoutRemindConfigDeleteByIdIdResponseSuccess>(
    "/workbench/timeoutRemindConfig/deleteById/:id",
    { method: "delete", path: option },
    config
  );

type ApiOperationGetWorkbenchTimeoutRemindConfigListOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchTimeoutRemindConfigList */
interface ApiOperationGetWorkbenchTimeoutRemindConfigListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<TimeoutRemindConfigOutputDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchTimeoutRemindConfigListResponseSuccess =
  ApiOperationGetWorkbenchTimeoutRemindConfigListResponse[200];
/**
 * @description
 *   超时提醒列表
 *   超时提醒列表
 * @tags 超时提醒API
 * @produces *
 */
export const apiOperationGetWorkbenchTimeoutRemindConfigList = (
  option?: ApiOperationGetWorkbenchTimeoutRemindConfigListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchTimeoutRemindConfigListResponseSuccess>(
    "/workbench/timeoutRemindConfig/list",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchTimeoutRemindConfigSaveOption =
  TimeoutRemindInputDto;

/** @description response type for apiOperationPostWorkbenchTimeoutRemindConfigSave */
interface ApiOperationPostWorkbenchTimeoutRemindConfigSaveResponse {
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

type ApiOperationPostWorkbenchTimeoutRemindConfigSaveResponseSuccess =
  ApiOperationPostWorkbenchTimeoutRemindConfigSaveResponse[200];
/**
 * @description
 *   新增超时提醒
 *   新增超时提醒
 * @tags 超时提醒API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchTimeoutRemindConfigSave = (
  option?: ApiOperationPostWorkbenchTimeoutRemindConfigSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchTimeoutRemindConfigSaveResponseSuccess>(
    "/workbench/timeoutRemindConfig/save",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchTimeoutRemindConfigUpdateOption =
  TimeoutRemindInputDto;

/** @description response type for apiOperationPostWorkbenchTimeoutRemindConfigUpdate */
interface ApiOperationPostWorkbenchTimeoutRemindConfigUpdateResponse {
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

type ApiOperationPostWorkbenchTimeoutRemindConfigUpdateResponseSuccess =
  ApiOperationPostWorkbenchTimeoutRemindConfigUpdateResponse[200];
/**
 * @description
 *   修改超时提醒
 *   修改超时提醒
 * @tags 超时提醒API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchTimeoutRemindConfigUpdate = (
  option?: ApiOperationPostWorkbenchTimeoutRemindConfigUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchTimeoutRemindConfigUpdateResponseSuccess>(
    "/workbench/timeoutRemindConfig/update",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationGetWorkbenchTokenRefresh */
interface ApiOperationGetWorkbenchTokenRefreshResponse {
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

type ApiOperationGetWorkbenchTokenRefreshResponseSuccess =
  ApiOperationGetWorkbenchTokenRefreshResponse[200];
/**
 * @description
 *   供前端调用刷新token过期时间
 * @tags token相关
 * @produces *
 */
export const apiOperationGetWorkbenchTokenRefresh = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchTokenRefreshResponseSuccess>(
    "/workbench/token/refresh",
    { method: "get" },
    config
  );

type ApiOperationPostWorkbenchUnSubscribeEventOption = SubScribeEventVo;

/** @description response type for apiOperationPostWorkbenchUnSubscribeEvent */
interface ApiOperationPostWorkbenchUnSubscribeEventResponse {
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

type ApiOperationPostWorkbenchUnSubscribeEventResponseSuccess =
  ApiOperationPostWorkbenchUnSubscribeEventResponse[200];
/**
 * @description
 *   取消视频告警事件订阅
 * @tags 视频告警模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchUnSubscribeEvent = (
  option?: ApiOperationPostWorkbenchUnSubscribeEventOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchUnSubscribeEventResponseSuccess>(
    "/workbench/unSubscribeEvent",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchUnqualifiedEvaluationGetConfigOption =
  UnqualifiedEvaluationReqDto;

/** @description response type for apiOperationPostWorkbenchUnqualifiedEvaluationGetConfig */
interface ApiOperationPostWorkbenchUnqualifiedEvaluationGetConfigResponse {
  /**
   * @description
   *   OK
   */
  200: Array<UnqualifiedEvaluationRespDto>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationPostWorkbenchUnqualifiedEvaluationGetConfigResponseSuccess =
  ApiOperationPostWorkbenchUnqualifiedEvaluationGetConfigResponse[200];
/**
 * @description
 *   getConfig
 * @tags 不合格评价配置对外接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchUnqualifiedEvaluationGetConfig = (
  option?: ApiOperationPostWorkbenchUnqualifiedEvaluationGetConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchUnqualifiedEvaluationGetConfigResponseSuccess>(
    "/workbench/unqualifiedEvaluation/getConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchUnqualifiedEvaluationSaveConfigOption =
  UnqualifiedEvaluationSaveDto;

/** @description response type for apiOperationPostWorkbenchUnqualifiedEvaluationSaveConfig */
interface ApiOperationPostWorkbenchUnqualifiedEvaluationSaveConfigResponse {
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

type ApiOperationPostWorkbenchUnqualifiedEvaluationSaveConfigResponseSuccess =
  ApiOperationPostWorkbenchUnqualifiedEvaluationSaveConfigResponse[200];
/**
 * @description
 *   saveConfig
 * @tags 不合格评价配置对外接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchUnqualifiedEvaluationSaveConfig = (
  option?: ApiOperationPostWorkbenchUnqualifiedEvaluationSaveConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchUnqualifiedEvaluationSaveConfigResponseSuccess>(
    "/workbench/unqualifiedEvaluation/saveConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchUpdEnableOption = AlarmStandardCauseInputDto;

/** @description response type for apiOperationPostWorkbenchUpdEnable */
interface ApiOperationPostWorkbenchUpdEnableResponse {
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

type ApiOperationPostWorkbenchUpdEnableResponseSuccess =
  ApiOperationPostWorkbenchUpdEnableResponse[200];
/**
 * @description
 *   修改启用状态按钮
 * @tags 标准配置接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchUpdEnable = (
  option?: ApiOperationPostWorkbenchUpdEnableOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchUpdEnableResponseSuccess>(
    "/workbench/updEnable",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchUpdateOutboundConfigOption =
  WorkbenchOutboundUpdateInputDto;

/** @description response type for apiOperationPostWorkbenchUpdateOutboundConfig */
interface ApiOperationPostWorkbenchUpdateOutboundConfigResponse {
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

type ApiOperationPostWorkbenchUpdateOutboundConfigResponseSuccess =
  ApiOperationPostWorkbenchUpdateOutboundConfigResponse[200];
/**
 * @description
 *   95158坐席电话配置 编辑接口
 * @tags 外呼配置模块相关API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchUpdateOutboundConfig = (
  option?: ApiOperationPostWorkbenchUpdateOutboundConfigOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchUpdateOutboundConfigResponseSuccess>(
    "/workbench/updateOutboundConfig",
    { method: "post", body: option },
    config
  );

type ApiOperationPutWorkbenchUpdateRoleWhiteListOption = RoleWhiteListDTO;

/** @description response type for apiOperationPutWorkbenchUpdateRoleWhiteList */
interface ApiOperationPutWorkbenchUpdateRoleWhiteListResponse {
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

type ApiOperationPutWorkbenchUpdateRoleWhiteListResponseSuccess =
  ApiOperationPutWorkbenchUpdateRoleWhiteListResponse[200];
/**
 * @description
 *   角色白名单——修改
 * @tags 角色白名单
 * @produces *
 * @consumes application/json
 */
export const apiOperationPutWorkbenchUpdateRoleWhiteList = (
  option?: ApiOperationPutWorkbenchUpdateRoleWhiteListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPutWorkbenchUpdateRoleWhiteListResponseSuccess>(
    "/workbench/updateRoleWhiteList",
    { method: "put", body: option },
    config
  );

type ApiOperationPostWorkbenchUserEntitySwitchOption = SwitchUserEntityInputDto;

/** @description response type for apiOperationPostWorkbenchUserEntitySwitch */
interface ApiOperationPostWorkbenchUserEntitySwitchResponse {
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

type ApiOperationPostWorkbenchUserEntitySwitchResponseSuccess =
  ApiOperationPostWorkbenchUserEntitySwitchResponse[200];
/**
 * @description
 *   用户切换实体校验接口
 * @tags 工作台用户接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchUserEntitySwitch = (
  option?: ApiOperationPostWorkbenchUserEntitySwitchOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchUserEntitySwitchResponseSuccess>(
    "/workbench/user/entity/switch",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationGetWorkbenchUserGetUserInfo */
interface ApiOperationGetWorkbenchUserGetUserInfoResponse {
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

type ApiOperationGetWorkbenchUserGetUserInfoResponseSuccess =
  ApiOperationGetWorkbenchUserGetUserInfoResponse[200];
/**
 * @description
 *   获取用户信息
 * @tags 工作台用户接口
 * @produces *
 */
export const apiOperationGetWorkbenchUserGetUserInfo = (
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchUserGetUserInfoResponseSuccess>(
    "/workbench/user/getUserInfo",
    { method: "get" },
    config
  );

type ApiOperationPostWorkbenchUserUploadAvatarOption = string;

/** @description response type for apiOperationPostWorkbenchUserUploadAvatar */
interface ApiOperationPostWorkbenchUserUploadAvatarResponse {
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

type ApiOperationPostWorkbenchUserUploadAvatarResponseSuccess =
  ApiOperationPostWorkbenchUserUploadAvatarResponse[200];
/**
 * @description
 *   上传头像
 * @tags 工作台用户接口
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchUserUploadAvatar = (
  option?: ApiOperationPostWorkbenchUserUploadAvatarOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchUserUploadAvatarResponseSuccess>(
    "/workbench/user/uploadAvatar",
    { method: "post", body: option },
    config
  );

type ApiOperationGetWorkbenchVideoAuthDelVideoCompanyCodeSourceTypeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      source */
  source: string;
  /**
    @description
      type
    @format int32 */
  type: number;
};

/** @description response type for apiOperationGetWorkbenchVideoAuthDelVideoCompanyCodeSourceType */
interface ApiOperationGetWorkbenchVideoAuthDelVideoCompanyCodeSourceTypeResponse {
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

type ApiOperationGetWorkbenchVideoAuthDelVideoCompanyCodeSourceTypeResponseSuccess =
  ApiOperationGetWorkbenchVideoAuthDelVideoCompanyCodeSourceTypeResponse[200];
/**
 * @description
 *   根据场景去获取字段
 * @tags 视频配置
 * @produces *
 */
export const apiOperationGetWorkbenchVideoAuthDelVideoCompanyCodeSourceType = (
  option?: ApiOperationGetWorkbenchVideoAuthDelVideoCompanyCodeSourceTypeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchVideoAuthDelVideoCompanyCodeSourceTypeResponseSuccess>(
    "/workbench/video/auth/delVideo/:companyCode/:source/:type",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchVideoAuthGetVideoCompanyCodeSourceOption = {
  /**
    @description
      companyCode */
  companyCode: string;
  /**
    @description
      source */
  source: string;
};

/** @description response type for apiOperationGetWorkbenchVideoAuthGetVideoCompanyCodeSource */
interface ApiOperationGetWorkbenchVideoAuthGetVideoCompanyCodeSourceResponse {
  /**
   * @description
   *   OK
   */
  200: VideoAuthConfigOutput;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchVideoAuthGetVideoCompanyCodeSourceResponseSuccess =
  ApiOperationGetWorkbenchVideoAuthGetVideoCompanyCodeSourceResponse[200];
/**
 * @description
 *   根据场景去获取字段
 * @tags 视频配置
 * @produces *
 */
export const apiOperationGetWorkbenchVideoAuthGetVideoCompanyCodeSource = (
  option?: ApiOperationGetWorkbenchVideoAuthGetVideoCompanyCodeSourceOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchVideoAuthGetVideoCompanyCodeSourceResponseSuccess>(
    "/workbench/video/auth/getVideo/:companyCode/:source",
    { method: "get", path: option },
    config
  );

type ApiOperationPostWorkbenchVideoAuthSaveVideoOption = VideoAuthConfigOutput;

/** @description response type for apiOperationPostWorkbenchVideoAuthSaveVideo */
interface ApiOperationPostWorkbenchVideoAuthSaveVideoResponse {
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

type ApiOperationPostWorkbenchVideoAuthSaveVideoResponseSuccess =
  ApiOperationPostWorkbenchVideoAuthSaveVideoResponse[200];
/**
 * @description
 *   保存视频配置
 * @tags 视频配置
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchVideoAuthSaveVideo = (
  option?: ApiOperationPostWorkbenchVideoAuthSaveVideoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchVideoAuthSaveVideoResponseSuccess>(
    "/workbench/video/auth/saveVideo",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchVideoCallbackCompanyCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
};

/** @description response type for apiOperationPostWorkbenchVideoCallbackCompanyCode */
interface ApiOperationPostWorkbenchVideoCallbackCompanyCodeResponse {
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

type ApiOperationPostWorkbenchVideoCallbackCompanyCodeResponseSuccess =
  ApiOperationPostWorkbenchVideoCallbackCompanyCodeResponse[200];
/**
 * @description
 *   海康视频订阅事件回调接口
 * @tags 视频告警模块
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchVideoCallbackCompanyCode = (
  option?: ApiOperationPostWorkbenchVideoCallbackCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchVideoCallbackCompanyCodeResponseSuccess>(
    "/workbench/videoCallback/:companyCode",
    { method: "post", path: option },
    config
  );

type ApiOperationGetWorkbenchVideoOverviewDangerWorkVideoListOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      页码
    @format int32 */
  pageNum: number;
  /**
    @description
      每页条数
    @format int32 */
  pageSize: number;
  /**
    @description
      场景编码数组
    @format int32 */
  sceneCodes: number;
};

/** @description response type for apiOperationGetWorkbenchVideoOverviewDangerWorkVideoList */
interface ApiOperationGetWorkbenchVideoOverviewDangerWorkVideoListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<VideoOverviewDangerWorkVideoDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchVideoOverviewDangerWorkVideoListResponseSuccess =
  ApiOperationGetWorkbenchVideoOverviewDangerWorkVideoListResponse[200];
/**
 * @description
 *   危险作业视频分页列表
 *   危险作业视频分页列表
 * @tags 视频总览API
 * @produces *
 */
export const apiOperationGetWorkbenchVideoOverviewDangerWorkVideoList = (
  option?: ApiOperationGetWorkbenchVideoOverviewDangerWorkVideoListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchVideoOverviewDangerWorkVideoListResponseSuccess>(
    "/workbench/videoOverview/dangerWorkVideoList",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchVideoOverviewProjectVideoListOption = {
  /**
    @description
      companies */
  companies: string;
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      页码
    @format int32 */
  pageNum: number;
  /**
    @description
      每页条数
    @format int32 */
  pageSize: number;
  /**
    @description
      场景编码数组
    @format int32 */
  sceneCodes: number;
};

/** @description response type for apiOperationGetWorkbenchVideoOverviewProjectVideoList */
interface ApiOperationGetWorkbenchVideoOverviewProjectVideoListResponse {
  /**
   * @description
   *   OK
   */
  200: PageDataVideoOverviewProjectVideoDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchVideoOverviewProjectVideoListResponseSuccess =
  ApiOperationGetWorkbenchVideoOverviewProjectVideoListResponse[200];
/**
 * @description
 *   项目视频分页列表
 *   项目视频分页列表
 * @tags 视频总览API
 * @produces *
 */
export const apiOperationGetWorkbenchVideoOverviewProjectVideoList = (
  option?: ApiOperationGetWorkbenchVideoOverviewProjectVideoListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchVideoOverviewProjectVideoListResponseSuccess>(
    "/workbench/videoOverview/projectVideoList",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchViolationRewardGetRewardsOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      类型编码 */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchViolationRewardGetRewards */
interface ApiOperationGetWorkbenchViolationRewardGetRewardsResponse {
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

type ApiOperationGetWorkbenchViolationRewardGetRewardsResponseSuccess =
  ApiOperationGetWorkbenchViolationRewardGetRewardsResponse[200];
/**
 * @description
 *   根据管理实体编码和类型编码获取奖励项
 *   获取奖励项
 * @tags 违规项奖励项API
 * @produces *
 */
export const apiOperationGetWorkbenchViolationRewardGetRewards = (
  option?: ApiOperationGetWorkbenchViolationRewardGetRewardsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchViolationRewardGetRewardsResponseSuccess>(
    "/workbench/violationReward/getRewards",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchViolationRewardGetViolationsOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      类型编码 */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchViolationRewardGetViolations */
interface ApiOperationGetWorkbenchViolationRewardGetViolationsResponse {
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

type ApiOperationGetWorkbenchViolationRewardGetViolationsResponseSuccess =
  ApiOperationGetWorkbenchViolationRewardGetViolationsResponse[200];
/**
 * @description
 *   根据管理实体编码和类型编码获取违规项
 *   获取违规项
 * @tags 违规项奖励项API
 * @produces *
 */
export const apiOperationGetWorkbenchViolationRewardGetViolations = (
  option?: ApiOperationGetWorkbenchViolationRewardGetViolationsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchViolationRewardGetViolationsResponseSuccess>(
    "/workbench/violationReward/getViolations",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchViolationRewardSaveOption =
  ViolationRewardInputDto;

/** @description response type for apiOperationPostWorkbenchViolationRewardSave */
interface ApiOperationPostWorkbenchViolationRewardSaveResponse {
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

type ApiOperationPostWorkbenchViolationRewardSaveResponseSuccess =
  ApiOperationPostWorkbenchViolationRewardSaveResponse[200];
/**
 * @description
 *   保存违规项奖励项
 *   保存违规项奖励项
 * @tags 违规项奖励项API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchViolationRewardSave = (
  option?: ApiOperationPostWorkbenchViolationRewardSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchViolationRewardSaveResponseSuccess>(
    "/workbench/violationReward/save",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchViolationRewardMetadataAddOption =
  ViolationRewardMetadataInputDto;

/** @description response type for apiOperationPostWorkbenchViolationRewardMetadataAdd */
interface ApiOperationPostWorkbenchViolationRewardMetadataAddResponse {
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

type ApiOperationPostWorkbenchViolationRewardMetadataAddResponseSuccess =
  ApiOperationPostWorkbenchViolationRewardMetadataAddResponse[200];
/**
 * @description
 *   新增违规项奖励项元数据
 *   新增违规项奖励项元数据
 * @tags 违规项奖励项元数据API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchViolationRewardMetadataAdd = (
  option?: ApiOperationPostWorkbenchViolationRewardMetadataAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchViolationRewardMetadataAddResponseSuccess>(
    "/workbench/violationRewardMetadata/add",
    { method: "post", body: option },
    config
  );

/** @description response type for apiOperationGetWorkbenchViolationRewardMetadataGetAllProjectViolations */
interface ApiOperationGetWorkbenchViolationRewardMetadataGetAllProjectViolationsResponse {
  /**
   * @description
   *   OK
   */
  200: Array<ViolationRewardMetadataDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchViolationRewardMetadataGetAllProjectViolationsResponseSuccess =
  ApiOperationGetWorkbenchViolationRewardMetadataGetAllProjectViolationsResponse[200];
/**
 * @description
 *   获取所有工程场景违规项元数据
 *   获取所有工程场景违规项元数据
 * @tags 违规项奖励项元数据API
 * @produces *
 */
export const apiOperationGetWorkbenchViolationRewardMetadataGetAllProjectViolations =
  (config?: AxiosRequestConfig) =>
    requester<ApiOperationGetWorkbenchViolationRewardMetadataGetAllProjectViolationsResponseSuccess>(
      "/workbench/violationRewardMetadata/getAllProjectViolations",
      { method: "get" },
      config
    );

type ApiOperationGetWorkbenchViolationRewardMetadataGetOneIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationGetWorkbenchViolationRewardMetadataGetOneId */
interface ApiOperationGetWorkbenchViolationRewardMetadataGetOneIdResponse {
  /**
   * @description
   *   OK
   */
  200: ViolationRewardMetadataDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchViolationRewardMetadataGetOneIdResponseSuccess =
  ApiOperationGetWorkbenchViolationRewardMetadataGetOneIdResponse[200];
/**
 * @description
 *   根据ID获取违规项奖励项元数据
 *   获取违规项奖励项元数据
 * @tags 违规项奖励项元数据API
 * @produces *
 */
export const apiOperationGetWorkbenchViolationRewardMetadataGetOneId = (
  option?: ApiOperationGetWorkbenchViolationRewardMetadataGetOneIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchViolationRewardMetadataGetOneIdResponseSuccess>(
    "/workbench/violationRewardMetadata/getOne/:id",
    { method: "get", path: option },
    config
  );

type ApiOperationGetWorkbenchViolationRewardMetadataGetOptionsOption = {
  /**
    @description
      分类 */
  category: string;
  /**
    @description
      场景编码
    @format int32 */
  sceneCode: number;
};

/** @description response type for apiOperationGetWorkbenchViolationRewardMetadataGetOptions */
interface ApiOperationGetWorkbenchViolationRewardMetadataGetOptionsResponse {
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

type ApiOperationGetWorkbenchViolationRewardMetadataGetOptionsResponseSuccess =
  ApiOperationGetWorkbenchViolationRewardMetadataGetOptionsResponse[200];
/**
 * @description
 *   获取某个分类某个场景的元数据下拉框选项
 *   获取元数据下拉框选项
 * @tags 违规项奖励项元数据API
 * @produces *
 */
export const apiOperationGetWorkbenchViolationRewardMetadataGetOptions = (
  option?: ApiOperationGetWorkbenchViolationRewardMetadataGetOptionsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchViolationRewardMetadataGetOptionsResponseSuccess>(
    "/workbench/violationRewardMetadata/getOptions",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchViolationRewardMetadataGetPagingListOption = {
  /**
    @description
      分类 */
  category: string;
  /**
    @description
      项目名称 */
  itemName: string;
  /**
    @description
      页码
    @format int32 */
  pageNum: number;
  /**
    @description
      每页条数
    @format int32 */
  pageSize: number;
  /**
    @description
      场景编码
    @format int32 */
  sceneCode: number;
  /**
    @description
      类型名称 */
  typeName: string;
};

/** @description response type for apiOperationGetWorkbenchViolationRewardMetadataGetPagingList */
interface ApiOperationGetWorkbenchViolationRewardMetadataGetPagingListResponse {
  /**
   * @description
   *   OK
   */
  200: ResultPageDataListViolationRewardMetadataDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchViolationRewardMetadataGetPagingListResponseSuccess =
  ApiOperationGetWorkbenchViolationRewardMetadataGetPagingListResponse[200];
/**
 * @description
 *   根据条件获取违规项奖励项元数据分页列表
 *   获取违规项奖励项元数据分页列表
 * @tags 违规项奖励项元数据API
 * @produces *
 */
export const apiOperationGetWorkbenchViolationRewardMetadataGetPagingList = (
  option?: ApiOperationGetWorkbenchViolationRewardMetadataGetPagingListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchViolationRewardMetadataGetPagingListResponseSuccess>(
    "/workbench/violationRewardMetadata/getPagingList",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchViolationRewardMetadataGetProjectViolationOption =
  {
    /**
    @description
      项目编码 */
    itemCode: string;
  };

/** @description response type for apiOperationGetWorkbenchViolationRewardMetadataGetProjectViolation */
interface ApiOperationGetWorkbenchViolationRewardMetadataGetProjectViolationResponse {
  /**
   * @description
   *   OK
   */
  200: ViolationRewardMetadataDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchViolationRewardMetadataGetProjectViolationResponseSuccess =
  ApiOperationGetWorkbenchViolationRewardMetadataGetProjectViolationResponse[200];
/**
 * @description
 *   根据项目编码获取工程场景的违规项元数据
 *   获取工程场景违规项元数据
 * @tags 违规项奖励项元数据API
 * @produces *
 */
export const apiOperationGetWorkbenchViolationRewardMetadataGetProjectViolation =
  (
    option?: ApiOperationGetWorkbenchViolationRewardMetadataGetProjectViolationOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiOperationGetWorkbenchViolationRewardMetadataGetProjectViolationResponseSuccess>(
      "/workbench/violationRewardMetadata/getProjectViolation",
      { method: "get", query: option },
      config
    );

type ApiOperationPostWorkbenchViolationRewardMetadataModifyOption =
  ViolationRewardMetadataInputDto;

/** @description response type for apiOperationPostWorkbenchViolationRewardMetadataModify */
interface ApiOperationPostWorkbenchViolationRewardMetadataModifyResponse {
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

type ApiOperationPostWorkbenchViolationRewardMetadataModifyResponseSuccess =
  ApiOperationPostWorkbenchViolationRewardMetadataModifyResponse[200];
/**
 * @description
 *   修改违规项奖励项元数据
 *   修改违规项奖励项元数据
 * @tags 违规项奖励项元数据API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchViolationRewardMetadataModify = (
  option?: ApiOperationPostWorkbenchViolationRewardMetadataModifyOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchViolationRewardMetadataModifyResponseSuccess>(
    "/workbench/violationRewardMetadata/modify",
    { method: "post", body: option },
    config
  );

type ApiOperationPostWorkbenchViolationRewardMetadataRemoveIdOption = {
  /**
    @description
      id
    @format int64 */
  id: number;
};

/** @description response type for apiOperationPostWorkbenchViolationRewardMetadataRemoveId */
interface ApiOperationPostWorkbenchViolationRewardMetadataRemoveIdResponse {
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

type ApiOperationPostWorkbenchViolationRewardMetadataRemoveIdResponseSuccess =
  ApiOperationPostWorkbenchViolationRewardMetadataRemoveIdResponse[200];
/**
 * @description
 *   删除违规项奖励项元数据
 *   删除违规项奖励项元数据
 * @tags 违规项奖励项元数据API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchViolationRewardMetadataRemoveId = (
  option?: ApiOperationPostWorkbenchViolationRewardMetadataRemoveIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchViolationRewardMetadataRemoveIdResponseSuccess>(
    "/workbench/violationRewardMetadata/remove/:id",
    { method: "post", path: option },
    config
  );

type ApiOperationGetWorkbenchWeatherGet24HWeatherForecastOfCityOption = {
  /**
    @description
      city */
  city: string;
};

/** @description response type for apiOperationGetWorkbenchWeatherGet24HWeatherForecastOfCity */
interface ApiOperationGetWorkbenchWeatherGet24HWeatherForecastOfCityResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WeatherDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchWeatherGet24HWeatherForecastOfCityResponseSuccess =
  ApiOperationGetWorkbenchWeatherGet24HWeatherForecastOfCityResponse[200];
/**
 * @description
 *   获取城市24小时的天气预报
 *   获取城市24小时的天气预报
 * @tags 工作台天气API
 * @produces *
 */
export const apiOperationGetWorkbenchWeatherGet24HWeatherForecastOfCity = (
  option?: ApiOperationGetWorkbenchWeatherGet24HWeatherForecastOfCityOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchWeatherGet24HWeatherForecastOfCityResponseSuccess>(
    "/workbench/weather/get24HWeatherForecastOfCity",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchWeatherGetWeatherForecastOfCityOption = {
  /**
    @description
      city */
  city: string;
};

/** @description response type for apiOperationGetWorkbenchWeatherGetWeatherForecastOfCity */
interface ApiOperationGetWorkbenchWeatherGetWeatherForecastOfCityResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WeatherDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchWeatherGetWeatherForecastOfCityResponseSuccess =
  ApiOperationGetWorkbenchWeatherGetWeatherForecastOfCityResponse[200];
/**
 * @description
 *   获取城市的天气预报
 *   获取城市的天气预报
 * @tags 工作台天气API
 * @produces *
 */
export const apiOperationGetWorkbenchWeatherGetWeatherForecastOfCity = (
  option?: ApiOperationGetWorkbenchWeatherGetWeatherForecastOfCityOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchWeatherGetWeatherForecastOfCityResponseSuccess>(
    "/workbench/weather/getWeatherForecastOfCity",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchWeatherGetWeatherWarningsOfCityOption = {
  /**
    @description
      city */
  city: string;
  /**
    @description
      limit
    @format int32 */
  limit: number;
  /**
    @description
      recentDays
    @format int32 */
  recentDays: number;
};

/** @description response type for apiOperationGetWorkbenchWeatherGetWeatherWarningsOfCity */
interface ApiOperationGetWorkbenchWeatherGetWeatherWarningsOfCityResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WeatherWarningDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchWeatherGetWeatherWarningsOfCityResponseSuccess =
  ApiOperationGetWorkbenchWeatherGetWeatherWarningsOfCityResponse[200];
/**
 * @description
 *   获取城市最近几天发布的天气预警（最多7天）
 *   获取城市最近几天发布的天气预警
 * @tags 工作台天气API
 * @produces *
 */
export const apiOperationGetWorkbenchWeatherGetWeatherWarningsOfCity = (
  option?: ApiOperationGetWorkbenchWeatherGetWeatherWarningsOfCityOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchWeatherGetWeatherWarningsOfCityResponseSuccess>(
    "/workbench/weather/getWeatherWarningsOfCity",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchWeatherGetWeathersOfEcodeOption = {
  /**
    @description
      ecode */
  ecode: string;
};

/** @description response type for apiOperationGetWorkbenchWeatherGetWeathersOfEcode */
interface ApiOperationGetWorkbenchWeatherGetWeathersOfEcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<WeatherSummaryDto>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchWeatherGetWeathersOfEcodeResponseSuccess =
  ApiOperationGetWorkbenchWeatherGetWeathersOfEcodeResponse[200];
/**
 * @description
 *   获取管理实体涉及的城市天气信息
 *   获取管理实体涉及的城市天气信息
 * @tags 工作台天气API
 * @produces *
 */
export const apiOperationGetWorkbenchWeatherGetWeathersOfEcode = (
  option?: ApiOperationGetWorkbenchWeatherGetWeathersOfEcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchWeatherGetWeathersOfEcodeResponseSuccess>(
    "/workbench/weather/getWeathersOfEcode",
    { method: "get", query: option },
    config
  );

type ApiOperationGetWorkbenchWorkGuideGetWorkGuideOption = {
  /**
    @description
      管理实体编码 */
  ecode: string;
  /**
    @description
      类型编码 */
  typeCode: string;
};

/** @description response type for apiOperationGetWorkbenchWorkGuideGetWorkGuide */
interface ApiOperationGetWorkbenchWorkGuideGetWorkGuideResponse {
  /**
   * @description
   *   OK
   */
  200: WorkGuideDto;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiOperationGetWorkbenchWorkGuideGetWorkGuideResponseSuccess =
  ApiOperationGetWorkbenchWorkGuideGetWorkGuideResponse[200];
/**
 * @description
 *   根据管理实体编码和类型编码获取作业指导
 *   获取作业指导
 * @tags 作业指导API
 * @produces *
 */
export const apiOperationGetWorkbenchWorkGuideGetWorkGuide = (
  option?: ApiOperationGetWorkbenchWorkGuideGetWorkGuideOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationGetWorkbenchWorkGuideGetWorkGuideResponseSuccess>(
    "/workbench/workGuide/getWorkGuide",
    { method: "get", query: option },
    config
  );

type ApiOperationPostWorkbenchWorkGuideSaveOption = WorkGuideInputDto;

/** @description response type for apiOperationPostWorkbenchWorkGuideSave */
interface ApiOperationPostWorkbenchWorkGuideSaveResponse {
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

type ApiOperationPostWorkbenchWorkGuideSaveResponseSuccess =
  ApiOperationPostWorkbenchWorkGuideSaveResponse[200];
/**
 * @description
 *   保存作业指导
 *   保存作业指导
 * @tags 作业指导API
 * @produces *
 * @consumes application/json
 */
export const apiOperationPostWorkbenchWorkGuideSave = (
  option?: ApiOperationPostWorkbenchWorkGuideSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiOperationPostWorkbenchWorkGuideSaveResponseSuccess>(
    "/workbench/workGuide/save",
    { method: "post", body: option },
    config
  );
