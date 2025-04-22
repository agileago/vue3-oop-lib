/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { appRequester as requester, type AxiosRequestConfig, type DeepPartial } from '../http'
import type { Link,EventLevelAdjustInput,AdjustInput,AdjustOutput,EventLevelAdjustOutput,EventLevelAdjustListOutput,CompanyStationOrganInput,ResultOutputListCompany,CallInput,ResultOutputListStation,ControlPlanInput,ControlPlanOutput,ResultOutput,ResultOutputEmergencyDetectionOutput,ResultOutputDetectionDetailOutput,EmergencyDetectionInput,ResultOutputListEmergencyDetectionOutput,GasSourceInput,ResultOutputListGasSourceOutput,ResultOutputEmergencyWeatherOutput,InspectCarInput,InspectCarOutput,MethaneConcentrationInput,ResultOutputMethaneConcentrationOutput,GoodsRemindInput,ResultOutputString,ResultOutputInt,ExpireRemindInput,ResultOutputRemindDetailOutput,DailyChartInput,DeviceChartOutput,QueryPressureDeviceInput,PressureDeviceOutput,GoodsDeviceStockRecordsBatchInputDto,GoodsDeviceStockRecordsQueryOutput,GoodsDeviceStockRecordsOutInputDto,GoodsDeviceStockRecordsQueryInput,DeviceOutput,EventIcomeNodeInput,EmergencyDictDataInput,EmergencyDictDataOutput,IcomeInput,EmergencySceneNodeListOutput,DictDataOutput,DictDataEditableOutput,DictTypeInput,DispatchResourceInput,ResultOutputMapStringObject,DispatchInput,DispatchResourceOutput,WarningMsgInput,ChangeDutyReqInput,CheckInReqInput,DutyDateQueryInput,DutyOutput,PersonDutyQueryInput,PersonDutyCalendarQueryInput,EmergencyIcomeDutyConfig,PositionInsertedReqDTO,PositionGreenChannelFlagReqDTO,PositionStatusReqDTO,PositionVO,PositionDutyQueryDTO,DutyPositionVO,PositionQueryDTO,PageResultPositionVO,PositionUpdatedReqDTO,ModelAndView,EmergencyEventInput,CarDispatchOutput,ContentInput,EmergencyCallCenterDetailOutput,GreenChannelOutput,CallCenterProcessResultOutput,RemindOrderInput,EmergencyEventConfirmInput,EmergencyEventOutput,EventDeviceListInput,ResultOutputListEventDeviceOutput,EventEndTaskDetailOutput,EmergencyEventPeopleOutput,EmergencyEventFeedbackOutput,EmergencyEventEntryOutput,EmergencyCompCodeOutput,EmergencyEventLocUserOutput,EmergencyEventDetailAppOutput,DetonationDetailsInput,DetonationDetailsOutput,DictLabelOutput,EmergencyEventAddressListOutput,CompanyTree,EmergencyEventIcomeInput,EmergencyEventLocNameOutput,EmergencyEventPositionOutput,NetworkShowDangerWoUserDTO,ShowDangerWoUserPositionInput,ThirdConstructionOutput,EventGoodsListInput,ResultOutputListEventGoodsOutput,EmergencyEventGroupInput,PageResultOutputEmergencyEventGroupOutput,EmergencyEventGroupOutput,IcomeFeedbackTaskInput,EmergencyEventIcomeOutput,EmergencyTaskListOutput,PageResultOutputEmergencyEventOutput,EmergencySearchByUserInput,ResultOutputEmergencyEventAppListDataOutput,EmergencyMobileEvolveOutput,EmergencyMsgInput,EmergencyPrePlanOutput,EmergencyPreplanDetailOutput,EmergencyTrafficInput,EmergencyTrafficOutput,EmergencyReciveInput,EmergencyReviewFileInput,EmergencyReviewFileOutput,FeedbackImgInput,EventNodeAddOrUpdInput,EmergencyTaskPersonInput,CancelTaskInput,EventNodeListOutput,EmergencyTaskListInput,PublishInput,EmergencyTaskInput,EmergencyTaskNumberOutput,EventTaskTypeOutput,EmergencyEventTerminationInput,EventUnNormalEndInput,EventIcomeInput,EventUnFinishNodeOutput,VehicleTrackInput,VehicleTrackOutput,EmergencyEventVideoInput,EmergencyEventVideoOutput,ExpertGroupQueryInput,ExpertGroupOutput,ExpertGroupSavedReqInput,ExpertQueryInput,ExpertOutput,SupplyGasInput,GisGasSupplyOutputDto,FocusAreaDetailsInput,PageResultOutputEmergencyFocusAreaDetailsOutput,VehicleLocationOutput,VehicleMapOutput,GisGasSupplyOutput,ResultOutputListGoods,GoodsInput,GoodsDelInput,GoodsDeviceInput,GoodsDeviceBatchDelInput,GoodsDeviceListInput,ResultOutputGoodsDeviceCountOutput,GoodsDeviceDelInput,ResultOutputGoodsDeviceDetailOutput,ResultOutputDeviceDict,PageResultOutputGoodsDeviceListOutput,GoodsListInput,ResultOutputListGoodsOutput,ResultOutputGoodsDetailOutput,EmergencyIcomeMsgInput,LngLatInput,ResultOutputListDispatchResourceOutput,LongLatInput,MapDeviceOutput,EventReportDetailOuput,EmergencyEventMergeInput,EmergencyMsgTemplateConfigInputDto,MsgTemplate,ExampleOutput,EmergencyMsgTemplateConfigOutput,MsgTemplateSaveInput,TypeOutput,QueryTypeInput,PageInfo,ResultOutputNightModeValidOutput,ResultOutputNightModeOutput,ResultOutputListDutyPositionDto,NightModeFomrInput,EmergencyNoticeRecordInput,EmergencyNoticeRecordOutput,EmergencyPreplanAddressListInputDto,EmergencyPreplanAddressListOutputDto,EmergencyNoticeInformationInputDto,ResponseInputDto,EmergencyFeedbackInputDto,EmergencyNoticeInformationOutputDto,ResponseOutputDto,ResponseNoticeOutputDto,EmergencyStartExecutorInfoOutput,ResponseSubmitOutputDto,NoticeRecordInput,PositionPersonQueryInput,PositionPersonOutput,PhoneCallSearchInput,PhoneCallRecordOutput,PhoneMsgRecordOutput,PipeAnalyseAddInput,PipeAnalyseMsgInput,PipeAnalyseOutput,EmergencyPipeStatusOutput,EmergencyPreplanAddInput,EmergencyPreplanAddOutput,MMdOrganizationOutput,EmergencyPreplanListInput,PageResultOutputEmergencyPreplanListOutput,EmergencyPreplanNewDetailOutput,EmergencyPreplanUpdateInput,StationListOutput,EmergencyProgressInput,EmergencyProcessAddOutput,EmergencyStatusInput,CallCenterProcessOutput,EmeProOrderFeedBackOutput,EmergencyProgressListOutput,EmergencyMobileFeedbackOutput,EmergencyProgressOutput,ResultOutputProgressNoticeCnfOutput,ProgressNoticeCnfInput,EmergencyMapPersonOutput,EmergencyReviewInput,EmergencyReviewOutput,SceneNodeInput,EmergencySceneNodeOutput,SceneNodeOutput,AddNodeTaskInput,EmergencySceneNoticeStrategyDetailsOutput,SceneTaskNodeInput,EmergencySceneNoticeStrategyOutput,SceneNodeDetailsOutput,CheckItcodeInput,TaskInput,TaskOutput,StartTaskExampleInput,EmergencySceneNodeTaskOutput,EmergencyEnterpriseDictLabelDataAddInput,AddLabelInput,AILabelInput,LabelNameModelOutput,BatchLabelToPreplanInput,PreplanLevelIutput,PreplanLevelOutput,RecommendPreplanInput,RecommendPreplanOutput,EmergencyEnterpriseDictLabelDataInput,AIDictLabelDataOutput,LabelWeightListOutput,EmergencyEnterpriseDictLabelDataOutput,LabelWeightListInput,EmergencyScenePreplanInput,FileUploadOutput,EmergencyScenePreplanListParamInput,PageResultOutputEmergencyScenePreplanOutput,SceneLabel,ScenePreplanChooseOutput,ShortSupplyInput,ResultOutputListOrgan,CarInspectionReq,InspectedCarReq,InspectedCarVO,SuppliesCategoryReq,SuppliesInspectionCategoryVO,CarInspectionDetailReq,CategorySuppliesVO,CarInspectionDetailVO,SuppliesFeedbackReq,SuppliesIntactReq,SuppliesBatchReq,SuppliesLackReq,EmergencyTerminationTaskInput,GoodsInfoInput,GoodsDetailQueryDTO,CheckDetail,GoodsCheckQueryDTO,PageResultOutputCheckRecordInfo,PageResultOutputGoodsInfo,GoodsTypeInfo,InitializeGoodsInput,VehicleInfo,VehicleSortInput,VehicleSortOutput,WarningMsgQueryDTO,WarningMsgVO,SetTopReqDTO } from './definition'

type ApiAppGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentOption = {
    /**
    @description
      f */
    'f': string
    /**
    @description
      isExact */
    'isExact': boolean
    /**
    @description
      layerId */
    'layerId': string
    /**
    @description
      objectId */
    'objectId': string
    };

/** @description response type for apiAppGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccident */
interface ApiAppGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentResponse {
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

 type ApiAppGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentResponseSuccess = ApiAppGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentResponse[200]
/**
 * @description
 *   爆管分析
 * @tags gis-controller
 * @produces *
 */
export const apiAppGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccident = (option?: DeepPartial<ApiAppGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentOption>, config?: AxiosRequestConfig) => requester<ApiAppGetServiceEngineRestServicesNetServerEditgwPipeAnalyseAccidentResponseSuccess>('/ServiceEngine/rest/services/NetServer/editgw/PipeAnalyse/accident', { method: 'get', query: option}, config);

type ApiAppGetServiceEngineRestServicesNetServerEditgwMetasOption = {
    /**
    @description
      codes */
    'codes': string
    /**
    @description
      f */
    'f': string
    };

/** @description response type for apiAppGetServiceEngineRestServicesNetServerEditgwMetas */
interface ApiAppGetServiceEngineRestServicesNetServerEditgwMetasResponse {
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

 type ApiAppGetServiceEngineRestServicesNetServerEditgwMetasResponseSuccess = ApiAppGetServiceEngineRestServicesNetServerEditgwMetasResponse[200]
/**
 * @description
 *   获取图层元数据
 * @tags gis-controller
 * @produces *
 */
export const apiAppGetServiceEngineRestServicesNetServerEditgwMetas = (option?: DeepPartial<ApiAppGetServiceEngineRestServicesNetServerEditgwMetasOption>, config?: AxiosRequestConfig) => requester<ApiAppGetServiceEngineRestServicesNetServerEditgwMetasResponseSuccess>('/ServiceEngine/rest/services/NetServer/editgw/metas', { method: 'get', query: option}, config);

/** @description request parameter type for apiAppPostServiceEngineRestServicesNetServerServerNameLayeridQuery */
interface ApiAppPostServiceEngineRestServicesNetServerServerNameLayeridQueryOption {
    /**
     * @description
     *   layerid
     */
    path: {
        /**
        @description
          layerid */
        'layerid': string
        /**
        @description
          serverName */
        'serverName': string
        };
}

/** @description request parameter type for apiAppPostServiceEngineRestServicesNetServerServerNameLayeridQuery */
interface ApiAppPostServiceEngineRestServicesNetServerServerNameLayeridQueryOption {
    /**
     * @description
     *   pipeNetLayerType
     */
    query: {
        /**
        @description
          pipeNetLayerType */
        'pipeNetLayerType': string
        /**
        @description
          returnGeometry */
        'returnGeometry': boolean
        /**
        @description
          where */
        'where': string
        };
}

/** @description response type for apiAppPostServiceEngineRestServicesNetServerServerNameLayeridQuery */
interface ApiAppPostServiceEngineRestServicesNetServerServerNameLayeridQueryResponse {
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

 type ApiAppPostServiceEngineRestServicesNetServerServerNameLayeridQueryResponseSuccess = ApiAppPostServiceEngineRestServicesNetServerServerNameLayeridQueryResponse[200]
/**
 * @description
 *   单图层设备数据
 * @tags gis-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostServiceEngineRestServicesNetServerServerNameLayeridQuery = (option: DeepPartial<ApiAppPostServiceEngineRestServicesNetServerServerNameLayeridQueryOption>, config?: AxiosRequestConfig) => requester<ApiAppPostServiceEngineRestServicesNetServerServerNameLayeridQueryResponseSuccess>('/ServiceEngine/rest/services/NetServer/:serverName/:layerid/query', { method: 'post', ...option}, config);

/** @description response type for apiAppGetActuator */
interface ApiAppGetActuatorResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: {
        [propertyName: string]: Link
        }
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

 type ApiAppGetActuatorResponseSuccess = ApiAppGetActuatorResponse[200]
/**
 * @description
 *   links
 * @tags web-mvc-links-handler
 * @produces application/json,application/vnd.spring-boot.actuator.v2+json,application/vnd.spring-boot.actuator.v3+json
 */
export const apiAppGetActuator = (config?: AxiosRequestConfig) => requester<ApiAppGetActuatorResponseSuccess>('/actuator', { method: 'get'}, config);

type ApiAppGetActuatorHealthOption = {
    [propertyName: string]: string
    };

/** @description response type for apiAppGetActuatorHealth */
interface ApiAppGetActuatorHealthResponse {
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

 type ApiAppGetActuatorHealthResponseSuccess = ApiAppGetActuatorHealthResponse[200]
/**
 * @description
 *   handle
 * @tags operation-handler
 * @produces application/json,application/vnd.spring-boot.actuator.v2+json,application/vnd.spring-boot.actuator.v3+json
 */
export const apiAppGetActuatorHealth = (option?: DeepPartial<ApiAppGetActuatorHealthOption>, config?: AxiosRequestConfig) => requester<ApiAppGetActuatorHealthResponseSuccess>('/actuator/health/**', { method: 'get', body: option}, config);

/** @description response type for apiAppGetAddThirdConstruction */
interface ApiAppGetAddThirdConstructionResponse {
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

 type ApiAppGetAddThirdConstructionResponseSuccess = ApiAppGetAddThirdConstructionResponse[200]
/**
 * @description
 *   addThirdConstruction
 * @tags task-controller
 * @produces *
 */
export const apiAppGetAddThirdConstruction = (config?: AxiosRequestConfig) => requester<ApiAppGetAddThirdConstructionResponseSuccess>('/addThirdConstruction', { method: 'get'}, config);

type ApiAppGetAddressAddressOption = {
    /**
    @description
      address */
    'address': string
    };

/** @description response type for apiAppGetAddressAddress */
interface ApiAppGetAddressAddressResponse {
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

 type ApiAppGetAddressAddressResponseSuccess = ApiAppGetAddressAddressResponse[200]
/**
 * @description
 *   addressToLngLat
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetAddressAddress = (option?: DeepPartial<ApiAppGetAddressAddressOption>, config?: AxiosRequestConfig) => requester<ApiAppGetAddressAddressResponseSuccess>('/address/:address', { method: 'get', path: option}, config);

type ApiAppPostAdjustEventLevelOption = EventLevelAdjustInput;

/** @description response type for apiAppPostAdjustEventLevel */
interface ApiAppPostAdjustEventLevelResponse {
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

 type ApiAppPostAdjustEventLevelResponseSuccess = ApiAppPostAdjustEventLevelResponse[200]
/**
 * @description
 *   调整响应级别
 * @tags 调整险情分级
 * @produces *
 * @consumes application/json
 */
export const apiAppPostAdjustEventLevel = (option?: DeepPartial<ApiAppPostAdjustEventLevelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostAdjustEventLevelResponseSuccess>('/adjust/eventLevel', { method: 'post', body: option}, config);

type ApiAppPostAdjustQueryAdjustListOption = AdjustInput;

/** @description response type for apiAppPostAdjustQueryAdjustList */
interface ApiAppPostAdjustQueryAdjustListResponse {
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

 type ApiAppPostAdjustQueryAdjustListResponseSuccess = ApiAppPostAdjustQueryAdjustListResponse[200]
/**
 * @description
 *   查询调整险情分级后数据
 * @tags 调整险情分级
 * @produces *
 * @consumes application/json
 */
export const apiAppPostAdjustQueryAdjustList = (option?: DeepPartial<ApiAppPostAdjustQueryAdjustListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostAdjustQueryAdjustListResponseSuccess>('/adjust/queryAdjustList', { method: 'post', body: option}, config);

type ApiAppGetAdjustQueryLastInfoIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetAdjustQueryLastInfoId */
interface ApiAppGetAdjustQueryLastInfoIdResponse {
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

 type ApiAppGetAdjustQueryLastInfoIdResponseSuccess = ApiAppGetAdjustQueryLastInfoIdResponse[200]
/**
 * @description
 *   查询最近一次险情分级数据（用于回显）
 * @tags 调整险情分级
 * @produces *
 */
export const apiAppGetAdjustQueryLastInfoId = (option?: DeepPartial<ApiAppGetAdjustQueryLastInfoIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetAdjustQueryLastInfoIdResponseSuccess>('/adjust/queryLastInfo/:id', { method: 'get', path: option}, config);

type ApiAppGetAdjustQueryListIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetAdjustQueryListId */
interface ApiAppGetAdjustQueryListIdResponse {
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

 type ApiAppGetAdjustQueryListIdResponseSuccess = ApiAppGetAdjustQueryListIdResponse[200]
/**
 * @description
 *   查询所有险情分级数据
 * @tags 调整险情分级
 * @produces *
 */
export const apiAppGetAdjustQueryListId = (option?: DeepPartial<ApiAppGetAdjustQueryListIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetAdjustQueryListIdResponseSuccess>('/adjust/queryList/:id', { method: 'get', path: option}, config);

type ApiAppPostAllCompanyOption = CompanyStationOrganInput;

/** @description response type for apiAppPostAllCompany */
interface ApiAppPostAllCompanyResponse {
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

 type ApiAppPostAllCompanyResponseSuccess = ApiAppPostAllCompanyResponse[200]
/**
 * @description
 *   实体下全部公司
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostAllCompany = (option?: DeepPartial<ApiAppPostAllCompanyOption>, config?: AxiosRequestConfig) => requester<ApiAppPostAllCompanyResponseSuccess>('/all/company', { method: 'post', body: option}, config);

/** @description response type for apiAppGetAsyTest */
interface ApiAppGetAsyTestResponse {
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

 type ApiAppGetAsyTestResponseSuccess = ApiAppGetAsyTestResponse[200]
/**
 * @description
 *   testAsync
 * @tags test-controller
 * @produces *
 */
export const apiAppGetAsyTest = (config?: AxiosRequestConfig) => requester<ApiAppGetAsyTestResponseSuccess>('/asy/test', { method: 'get'}, config);

type ApiAppPostCallOption = CallInput;

/** @description response type for apiAppPostCall */
interface ApiAppPostCallResponse {
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

 type ApiAppPostCallResponseSuccess = ApiAppPostCallResponse[200]
/**
 * @description
 *   call
 * @tags callcenter-bill-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostCall = (option?: DeepPartial<ApiAppPostCallOption>, config?: AxiosRequestConfig) => requester<ApiAppPostCallResponseSuccess>('/call', { method: 'post', body: option}, config);

type ApiAppPostCallOutCommonOption = {
    'companyCode': string
    'msg': string
    /**
    @format int32 */
    'scene': number
    /**
    @format int64 */
    'taskId': number
    /**
    @description
      类型，1：外呼，2：短信
    @format int32 */
    'type': number
    /**
    @description
      姓名 */
    'users[0].name': string
    /**
    @description
      电话号码 */
    'users[0].phoneNum': string
    };

/** @description response type for apiAppPostCallOutCommon */
interface ApiAppPostCallOutCommonResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: string
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

 type ApiAppPostCallOutCommonResponseSuccess = ApiAppPostCallOutCommonResponse[200]
/**
 * @description
 *   短信外呼对外接口
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiAppPostCallOutCommon = (option?: DeepPartial<ApiAppPostCallOutCommonOption>, config?: AxiosRequestConfig) => requester<ApiAppPostCallOutCommonResponseSuccess>('/callOut/common', { method: 'post', query: option}, config);

type ApiAppPostCallOutOutOption = {
    'address_list_ids': Array<number>
    'companyCode': string
    'msg': string
    /**
    @description
      姓名 */
    'no_id_users[0].name': string
    /**
    @description
      电话号码 */
    'no_id_users[0].phone_num': string
    /**
    @format int32 */
    'scene': number
    /**
    @format int64 */
    'taskId': number
    /**
    @format int64 */
    'template_id': number
    /**
    @description
      类型，1：呼叫，2：短信
    @format int32 */
    'type': number
    'typeCode': string
    };

/** @description response type for apiAppPostCallOutOut */
interface ApiAppPostCallOutOutResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: string
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

 type ApiAppPostCallOutOutResponseSuccess = ApiAppPostCallOutOutResponse[200]
/**
 * @description
 *   返回信息，KEY：姓名(手机号)，VALUE:OK(成功),其它错误原因
 *   呼叫短信
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiAppPostCallOutOut = (option?: DeepPartial<ApiAppPostCallOutOutOption>, config?: AxiosRequestConfig) => requester<ApiAppPostCallOutOutResponseSuccess>('/callOut/out', { method: 'post', query: option}, config);

type ApiAppPostCallOutSpecialOption = {
    'companyCode': string
    'msg': string
    /**
    @format int32 */
    'scene': number
    /**
    @format int64 */
    'taskId': number
    /**
    @description
      类型，1：外呼，2：短信
    @format int32 */
    'type': number
    /**
    @description
      姓名 */
    'users[0].name': string
    /**
    @description
      电话号码 */
    'users[0].phoneNum': string
    };

/** @description response type for apiAppPostCallOutSpecial */
interface ApiAppPostCallOutSpecialResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: string
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

 type ApiAppPostCallOutSpecialResponseSuccess = ApiAppPostCallOutSpecialResponse[200]
/**
 * @description
 *   短信外呼对外接口(聚安卫士使用，支持给座机打电话)
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiAppPostCallOutSpecial = (option?: DeepPartial<ApiAppPostCallOutSpecialOption>, config?: AxiosRequestConfig) => requester<ApiAppPostCallOutSpecialResponseSuccess>('/callOut/special', { method: 'post', query: option}, config);

type ApiAppGetCarEcodeOption = {
    /**
    @description
      ecode */
    'ecode': string
    };

/** @description response type for apiAppGetCarEcode */
interface ApiAppGetCarEcodeResponse {
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

 type ApiAppGetCarEcodeResponseSuccess = ApiAppGetCarEcodeResponse[200]
/**
 * @description
 *   selectCars
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetCarEcode = (option?: DeepPartial<ApiAppGetCarEcodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetCarEcodeResponseSuccess>('/car/:ecode', { method: 'get', path: option}, config);

type ApiAppGetChangeGasEventCodeGasIdOption = {
    /**
    @description
      eventCode */
    'eventCode': string
    /**
    @description
      gasId
    @format int64 */
    'gasId': number
    };

/** @description response type for apiAppGetChangeGasEventCodeGasId */
interface ApiAppGetChangeGasEventCodeGasIdResponse {
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

 type ApiAppGetChangeGasEventCodeGasIdResponseSuccess = ApiAppGetChangeGasEventCodeGasIdResponse[200]
/**
 * @description
 *   changeGas
 * @tags dispatch-controller
 * @produces *
 */
export const apiAppGetChangeGasEventCodeGasId = (option?: DeepPartial<ApiAppGetChangeGasEventCodeGasIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetChangeGasEventCodeGasIdResponseSuccess>('/change/gas/:eventCode/:gasId', { method: 'get', path: option}, config);

type ApiAppGetChangeTransportationEventIdTransportationOption = {
    /**
    @description
      eventId */
    'eventId': string
    /**
    @description
      transportation
    @format int32 */
    'transportation': number
    };

/** @description response type for apiAppGetChangeTransportationEventIdTransportation */
interface ApiAppGetChangeTransportationEventIdTransportationResponse {
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

 type ApiAppGetChangeTransportationEventIdTransportationResponseSuccess = ApiAppGetChangeTransportationEventIdTransportationResponse[200]
/**
 * @description
 *   changeTransportation
 * @tags dispatch-controller
 * @produces *
 */
export const apiAppGetChangeTransportationEventIdTransportation = (option?: DeepPartial<ApiAppGetChangeTransportationEventIdTransportationOption>, config?: AxiosRequestConfig) => requester<ApiAppGetChangeTransportationEventIdTransportationResponseSuccess>('/change/transportation/:eventId/:transportation', { method: 'get', path: option}, config);

type ApiAppPostCompanyAllStationOption = CompanyStationOrganInput;

/** @description response type for apiAppPostCompanyAllStation */
interface ApiAppPostCompanyAllStationResponse {
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

 type ApiAppPostCompanyAllStationResponseSuccess = ApiAppPostCompanyAllStationResponse[200]
/**
 * @description
 *   公司下的全部站组织
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostCompanyAllStation = (option?: DeepPartial<ApiAppPostCompanyAllStationOption>, config?: AxiosRequestConfig) => requester<ApiAppPostCompanyAllStationResponseSuccess>('/company/all/station', { method: 'post', body: option}, config);

type ApiAppPostControlPlanListOption = ControlPlanInput;

/** @description response type for apiAppPostControlPlanList */
interface ApiAppPostControlPlanListResponse {
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

 type ApiAppPostControlPlanListResponseSuccess = ApiAppPostControlPlanListResponse[200]
/**
 * @description
 *   getControlPlans
 * @tags emergency-control-plan-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostControlPlanList = (option?: DeepPartial<ApiAppPostControlPlanListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostControlPlanListResponseSuccess>('/control/plan/list', { method: 'post', body: option}, config);

type ApiAppGetControlPlanBaseCodeOption = {
    /**
    @description
      baseCode */
    'baseCode': string
    };

/** @description response type for apiAppGetControlPlanBaseCode */
interface ApiAppGetControlPlanBaseCodeResponse {
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

 type ApiAppGetControlPlanBaseCodeResponseSuccess = ApiAppGetControlPlanBaseCodeResponse[200]
/**
 * @description
 *   getControlPlanDetail
 * @tags emergency-control-plan-controller
 * @produces *
 */
export const apiAppGetControlPlanBaseCode = (option?: DeepPartial<ApiAppGetControlPlanBaseCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetControlPlanBaseCodeResponseSuccess>('/control/plan/:baseCode', { method: 'get', path: option}, config);

type ApiAppGetConvertCoordinateTypeXYOption = {
    /**
    @description
      type
    @format int32 */
    'type': number
    /**
    @description
      x */
    'x': string
    /**
    @description
      y */
    'y': string
    };

/** @description response type for apiAppGetConvertCoordinateTypeXY */
interface ApiAppGetConvertCoordinateTypeXYResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: number
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

 type ApiAppGetConvertCoordinateTypeXYResponseSuccess = ApiAppGetConvertCoordinateTypeXYResponse[200]
/**
 * @description
 *   convertCoordinate
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetConvertCoordinateTypeXY = (option?: DeepPartial<ApiAppGetConvertCoordinateTypeXYOption>, config?: AxiosRequestConfig) => requester<ApiAppGetConvertCoordinateTypeXYResponseSuccess>('/convert/coordinate/:type/:x/:y', { method: 'get', path: option}, config);

/** @description response type for apiAppGetDealEventNameHistory */
interface ApiAppGetDealEventNameHistoryResponse {
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

 type ApiAppGetDealEventNameHistoryResponseSuccess = ApiAppGetDealEventNameHistoryResponse[200]
/**
 * @description
 *   dealEventNameHistory
 * @tags deal-history-controller
 * @produces *
 */
export const apiAppGetDealEventNameHistory = (config?: AxiosRequestConfig) => requester<ApiAppGetDealEventNameHistoryResponseSuccess>('/deal/eventName/history', { method: 'get'}, config);

type ApiAppGetDetectionCpmoLayerCpmoCopLayerStatesOption = {
    /**
    @description
      cpmoCop */
    'cpmoCop': string
    /**
    @description
      layerStates */
    'layerStates': boolean
    };

/** @description response type for apiAppGetDetectionCpmoLayerCpmoCopLayerStates */
interface ApiAppGetDetectionCpmoLayerCpmoCopLayerStatesResponse {
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

 type ApiAppGetDetectionCpmoLayerCpmoCopLayerStatesResponseSuccess = ApiAppGetDetectionCpmoLayerCpmoCopLayerStatesResponse[200]
/**
 * @description
 *   设置实体图层状态
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiAppGetDetectionCpmoLayerCpmoCopLayerStates = (option?: DeepPartial<ApiAppGetDetectionCpmoLayerCpmoCopLayerStatesOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDetectionCpmoLayerCpmoCopLayerStatesResponseSuccess>('/detection/cpmoLayer/:cpmoCop/:layerStates', { method: 'get', path: option}, config);

type ApiAppGetDetectionDetectionDIdOption = {
    /**
    @description
      dId
    @format int64 */
    'dId': number
    };

/** @description response type for apiAppGetDetectionDetectionDId */
interface ApiAppGetDetectionDetectionDIdResponse {
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

 type ApiAppGetDetectionDetectionDIdResponseSuccess = ApiAppGetDetectionDetectionDIdResponse[200]
/**
 * @description
 *   调压器/阀井
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiAppGetDetectionDetectionDId = (option?: DeepPartial<ApiAppGetDetectionDetectionDIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDetectionDetectionDIdResponseSuccess>('/detection/detection/:dId', { method: 'get', path: option}, config);

type ApiAppGetDetectionDetectionDetailEqptcodeOption = {
    /**
    @description
      eqptcode */
    'eqptcode': string
    };

/** @description response type for apiAppGetDetectionDetectionDetailEqptcode */
interface ApiAppGetDetectionDetectionDetailEqptcodeResponse {
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

 type ApiAppGetDetectionDetectionDetailEqptcodeResponseSuccess = ApiAppGetDetectionDetectionDetailEqptcodeResponse[200]
/**
 * @description
 *   根据设备编码查询调压器/阀井设备详情
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiAppGetDetectionDetectionDetailEqptcode = (option?: DeepPartial<ApiAppGetDetectionDetectionDetailEqptcodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDetectionDetectionDetailEqptcodeResponseSuccess>('/detection/detectionDetail/:eqptcode', { method: 'get', path: option}, config);

type ApiAppPostDetectionDetectionListOption = EmergencyDetectionInput;

/** @description response type for apiAppPostDetectionDetectionList */
interface ApiAppPostDetectionDetectionListResponse {
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

 type ApiAppPostDetectionDetectionListResponseSuccess = ApiAppPostDetectionDetectionListResponse[200]
/**
 * @description
 *   调压器/阀井列表
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDetectionDetectionList = (option?: DeepPartial<ApiAppPostDetectionDetectionListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDetectionDetectionListResponseSuccess>('/detection/detectionList', { method: 'post', body: option}, config);

type ApiAppPostDetectionGasSourceListOption = GasSourceInput;

/** @description response type for apiAppPostDetectionGasSourceList */
interface ApiAppPostDetectionGasSourceListResponse {
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

 type ApiAppPostDetectionGasSourceListResponseSuccess = ApiAppPostDetectionGasSourceListResponse[200]
/**
 * @description
 *   气源列表
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDetectionGasSourceList = (option?: DeepPartial<ApiAppPostDetectionGasSourceListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDetectionGasSourceListResponseSuccess>('/detection/gasSourceList', { method: 'post', body: option}, config);

type ApiAppGetDetectionGetCpmoLayerCpmoCopOption = {
    /**
    @description
      cpmoCop */
    'cpmoCop': string
    };

/** @description response type for apiAppGetDetectionGetCpmoLayerCpmoCop */
interface ApiAppGetDetectionGetCpmoLayerCpmoCopResponse {
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

 type ApiAppGetDetectionGetCpmoLayerCpmoCopResponseSuccess = ApiAppGetDetectionGetCpmoLayerCpmoCopResponse[200]
/**
 * @description
 *   获取实体图层状态
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiAppGetDetectionGetCpmoLayerCpmoCop = (option?: DeepPartial<ApiAppGetDetectionGetCpmoLayerCpmoCopOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDetectionGetCpmoLayerCpmoCopResponseSuccess>('/detection/getCpmoLayer/:cpmoCop', { method: 'get', path: option}, config);

type ApiAppGetDetectionGetTrafficEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetDetectionGetTrafficEventId */
interface ApiAppGetDetectionGetTrafficEventIdResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: string
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

 type ApiAppGetDetectionGetTrafficEventIdResponseSuccess = ApiAppGetDetectionGetTrafficEventIdResponse[200]
/**
 * @description
 *   获取路况信息（石明珠）
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiAppGetDetectionGetTrafficEventId = (option?: DeepPartial<ApiAppGetDetectionGetTrafficEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDetectionGetTrafficEventIdResponseSuccess>('/detection/getTraffic/:eventId', { method: 'get', path: option}, config);

type ApiAppGetDetectionGetWeatherOption = {
    /**
    @description
      districtId */
    'districtId': string
    /**
    @description
      lat */
    'lat': string
    /**
    @description
      lng */
    'lng': string
    };

/** @description response type for apiAppGetDetectionGetWeather */
interface ApiAppGetDetectionGetWeatherResponse {
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

 type ApiAppGetDetectionGetWeatherResponseSuccess = ApiAppGetDetectionGetWeatherResponse[200]
/**
 * @description
 *   获取天气信息
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiAppGetDetectionGetWeather = (option?: DeepPartial<ApiAppGetDetectionGetWeatherOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDetectionGetWeatherResponseSuccess>('/detection/getWeather', { method: 'get', query: option}, config);

type ApiAppPostDetectionInspectCarListOption = InspectCarInput;

/** @description response type for apiAppPostDetectionInspectCarList */
interface ApiAppPostDetectionInspectCarListResponse {
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

 type ApiAppPostDetectionInspectCarListResponseSuccess = ApiAppPostDetectionInspectCarListResponse[200]
/**
 * @description
 *   inspectCarList
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDetectionInspectCarList = (option?: DeepPartial<ApiAppPostDetectionInspectCarListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDetectionInspectCarListResponseSuccess>('/detection/inspectCar/list', { method: 'post', body: option}, config);

type ApiAppPostDetectionMethaneConcentrationOption = MethaneConcentrationInput;

/** @description response type for apiAppPostDetectionMethaneConcentration */
interface ApiAppPostDetectionMethaneConcentrationResponse {
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

 type ApiAppPostDetectionMethaneConcentrationResponseSuccess = ApiAppPostDetectionMethaneConcentrationResponse[200]
/**
 * @description
 *   甲烷浓度
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDetectionMethaneConcentration = (option?: DeepPartial<ApiAppPostDetectionMethaneConcentrationOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDetectionMethaneConcentrationResponseSuccess>('/detection/methaneConcentration', { method: 'post', body: option}, config);

type ApiAppPostDetectionMethaneConcentrationCurveOption = MethaneConcentrationInput;

/** @description response type for apiAppPostDetectionMethaneConcentrationCurve */
interface ApiAppPostDetectionMethaneConcentrationCurveResponse {
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

 type ApiAppPostDetectionMethaneConcentrationCurveResponseSuccess = ApiAppPostDetectionMethaneConcentrationCurveResponse[200]
/**
 * @description
 *   甲烷浓度曲线
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDetectionMethaneConcentrationCurve = (option?: DeepPartial<ApiAppPostDetectionMethaneConcentrationCurveOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDetectionMethaneConcentrationCurveResponseSuccess>('/detection/methaneConcentrationCurve', { method: 'post', body: option}, config);

type ApiAppPostDetectionReloadDectionDeviceOption = EmergencyDetectionInput;

/** @description response type for apiAppPostDetectionReloadDectionDevice */
interface ApiAppPostDetectionReloadDectionDeviceResponse {
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

 type ApiAppPostDetectionReloadDectionDeviceResponseSuccess = ApiAppPostDetectionReloadDectionDeviceResponse[200]
/**
 * @description
 *   位置发生改变 生成新的信息监测数据接口
 * @tags emergency-detection-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDetectionReloadDectionDevice = (option?: DeepPartial<ApiAppPostDetectionReloadDectionDeviceOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDetectionReloadDectionDeviceResponseSuccess>('/detection/reloadDectionDevice', { method: 'post', body: option}, config);

type ApiAppGetDetectionDeviceIdMetricOption = {
    /**
    @description
      deviceId */
    'deviceId': string
    /**
    @description
      metric */
    'metric': string
    };

/** @description response type for apiAppGetDetectionDeviceIdMetric */
interface ApiAppGetDetectionDeviceIdMetricResponse {
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

 type ApiAppGetDetectionDeviceIdMetricResponseSuccess = ApiAppGetDetectionDeviceIdMetricResponse[200]
/**
 * @description
 *   getUnit
 * @tags emergency-detection-controller
 * @produces *
 */
export const apiAppGetDetectionDeviceIdMetric = (option?: DeepPartial<ApiAppGetDetectionDeviceIdMetricOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDetectionDeviceIdMetricResponseSuccess>('/detection/:deviceId/:metric', { method: 'get', path: option}, config);

type ApiAppPostDeviceCheckRemindOption = GoodsRemindInput;

/** @description response type for apiAppPostDeviceCheckRemind */
interface ApiAppPostDeviceCheckRemindResponse {
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

 type ApiAppPostDeviceCheckRemindResponseSuccess = ApiAppPostDeviceCheckRemindResponse[200]
/**
 * @description
 *   装备清单定期点检提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceCheckRemind = (option?: DeepPartial<ApiAppPostDeviceCheckRemindOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceCheckRemindResponseSuccess>('/device/check/remind', { method: 'post', body: option}, config);

type ApiAppPostDeviceCheckRemindConfirmOption = GoodsRemindInput;

/** @description response type for apiAppPostDeviceCheckRemindConfirm */
interface ApiAppPostDeviceCheckRemindConfirmResponse {
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

 type ApiAppPostDeviceCheckRemindConfirmResponseSuccess = ApiAppPostDeviceCheckRemindConfirmResponse[200]
/**
 * @description
 *   装备清单物资到期提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceCheckRemindConfirm = (option?: DeepPartial<ApiAppPostDeviceCheckRemindConfirmOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceCheckRemindConfirmResponseSuccess>('/device/check/remind/confirm', { method: 'post', body: option}, config);

type ApiAppPostDeviceExpireBatchRemindOption = ExpireRemindInput;

/** @description response type for apiAppPostDeviceExpireBatchRemind */
interface ApiAppPostDeviceExpireBatchRemindResponse {
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

 type ApiAppPostDeviceExpireBatchRemindResponseSuccess = ApiAppPostDeviceExpireBatchRemindResponse[200]
/**
 * @description
 *   设置到期批量提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceExpireBatchRemind = (option?: DeepPartial<ApiAppPostDeviceExpireBatchRemindOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceExpireBatchRemindResponseSuccess>('/device/expire/batch/remind', { method: 'post', body: option}, config);

type ApiAppPostDeviceExpireRemindOption = ExpireRemindInput;

/** @description response type for apiAppPostDeviceExpireRemind */
interface ApiAppPostDeviceExpireRemindResponse {
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

 type ApiAppPostDeviceExpireRemindResponseSuccess = ApiAppPostDeviceExpireRemindResponse[200]
/**
 * @description
 *   设置到期提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceExpireRemind = (option?: DeepPartial<ApiAppPostDeviceExpireRemindOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceExpireRemindResponseSuccess>('/device/expire/remind', { method: 'post', body: option}, config);

type ApiAppPostDeviceExpireRemindDelOption = ExpireRemindInput;

/** @description response type for apiAppPostDeviceExpireRemindDel */
interface ApiAppPostDeviceExpireRemindDelResponse {
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

 type ApiAppPostDeviceExpireRemindDelResponseSuccess = ApiAppPostDeviceExpireRemindDelResponse[200]
/**
 * @description
 *   设置到期提醒删除
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceExpireRemindDel = (option?: DeepPartial<ApiAppPostDeviceExpireRemindDelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceExpireRemindDelResponseSuccess>('/device/expire/remind/del', { method: 'post', body: option}, config);

type ApiAppPostDeviceExpireRemindDetailOption = ExpireRemindInput;

/** @description response type for apiAppPostDeviceExpireRemindDetail */
interface ApiAppPostDeviceExpireRemindDetailResponse {
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

 type ApiAppPostDeviceExpireRemindDetailResponseSuccess = ApiAppPostDeviceExpireRemindDetailResponse[200]
/**
 * @description
 *   到期提醒详情
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceExpireRemindDetail = (option?: DeepPartial<ApiAppPostDeviceExpireRemindDetailOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceExpireRemindDetailResponseSuccess>('/device/expire/remind/detail', { method: 'post', body: option}, config);

type ApiAppPostDeviceExpireRemindInfoOption = GoodsRemindInput;

/** @description response type for apiAppPostDeviceExpireRemindInfo */
interface ApiAppPostDeviceExpireRemindInfoResponse {
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

 type ApiAppPostDeviceExpireRemindInfoResponseSuccess = ApiAppPostDeviceExpireRemindInfoResponse[200]
/**
 * @description
 *   装备清单物资到期提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceExpireRemindInfo = (option?: DeepPartial<ApiAppPostDeviceExpireRemindInfoOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceExpireRemindInfoResponseSuccess>('/device/expire/remind/info', { method: 'post', body: option}, config);

type ApiAppPostDevicePressureChartOption = DailyChartInput;

/** @description response type for apiAppPostDevicePressureChart */
interface ApiAppPostDevicePressureChartResponse {
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

 type ApiAppPostDevicePressureChartResponseSuccess = ApiAppPostDevicePressureChartResponse[200]
/**
 * @description
 *   getDeviceRecentDailyValue
 * @tags pressure-chart-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDevicePressureChart = (option?: DeepPartial<ApiAppPostDevicePressureChartOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDevicePressureChartResponseSuccess>('/device/pressure/chart', { method: 'post', body: option}, config);

type ApiAppPostDevicePressureDevlistOption = QueryPressureDeviceInput;

/** @description response type for apiAppPostDevicePressureDevlist */
interface ApiAppPostDevicePressureDevlistResponse {
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

 type ApiAppPostDevicePressureDevlistResponseSuccess = ApiAppPostDevicePressureDevlistResponse[200]
/**
 * @description
 *   查询压力曲线设备列表
 * @tags pressure-chart-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDevicePressureDevlist = (option?: DeepPartial<ApiAppPostDevicePressureDevlistOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDevicePressureDevlistResponseSuccess>('/device/pressure/devlist', { method: 'post', body: option}, config);

type ApiAppPostDeviceShortRemindOption = GoodsRemindInput;

/** @description response type for apiAppPostDeviceShortRemind */
interface ApiAppPostDeviceShortRemindResponse {
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

 type ApiAppPostDeviceShortRemindResponseSuccess = ApiAppPostDeviceShortRemindResponse[200]
/**
 * @description
 *   装备清单物资短缺提醒
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceShortRemind = (option?: DeepPartial<ApiAppPostDeviceShortRemindOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceShortRemindResponseSuccess>('/device/short/remind', { method: 'post', body: option}, config);

type ApiAppPostDeviceStockBatchInOption = GoodsDeviceStockRecordsBatchInputDto;

/** @description response type for apiAppPostDeviceStockBatchIn */
interface ApiAppPostDeviceStockBatchInResponse {
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

 type ApiAppPostDeviceStockBatchInResponseSuccess = ApiAppPostDeviceStockBatchInResponse[200]
/**
 * @description
 *   1.1.19装备清单入库
 *   装备清单批量入库
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceStockBatchIn = (option?: DeepPartial<ApiAppPostDeviceStockBatchInOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceStockBatchInResponseSuccess>('/device/stock/batch/in', { method: 'post', body: option}, config);

type ApiAppPostDeviceStockBatchOutOption = GoodsDeviceStockRecordsBatchInputDto;

/** @description response type for apiAppPostDeviceStockBatchOut */
interface ApiAppPostDeviceStockBatchOutResponse {
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

 type ApiAppPostDeviceStockBatchOutResponseSuccess = ApiAppPostDeviceStockBatchOutResponse[200]
/**
 * @description
 *   1.1.18装备清单入库
 *   装备清单批量出库
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceStockBatchOut = (option?: DeepPartial<ApiAppPostDeviceStockBatchOutOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceStockBatchOutResponseSuccess>('/device/stock/batch/out', { method: 'post', body: option}, config);

type ApiAppPostDeviceStockDetailsIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppPostDeviceStockDetailsId */
interface ApiAppPostDeviceStockDetailsIdResponse {
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

 type ApiAppPostDeviceStockDetailsIdResponseSuccess = ApiAppPostDeviceStockDetailsIdResponse[200]
/**
 * @description
 *   出入库记录详情
 *   出入库记录详情
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceStockDetailsId = (option?: DeepPartial<ApiAppPostDeviceStockDetailsIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceStockDetailsIdResponseSuccess>('/device/stock/details/:id', { method: 'post', path: option}, config);

type ApiAppPostDeviceStockInOption = GoodsDeviceStockRecordsOutInputDto;

/** @description response type for apiAppPostDeviceStockIn */
interface ApiAppPostDeviceStockInResponse {
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

 type ApiAppPostDeviceStockInResponseSuccess = ApiAppPostDeviceStockInResponse[200]
/**
 * @description
 *   1.1.17装备清单入库
 *   装备清单入库
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceStockIn = (option?: DeepPartial<ApiAppPostDeviceStockInOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceStockInResponseSuccess>('/device/stock/in', { method: 'post', body: option}, config);

type ApiAppPostDeviceStockListOption = GoodsDeviceStockRecordsQueryInput;

/** @description response type for apiAppPostDeviceStockList */
interface ApiAppPostDeviceStockListResponse {
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

 type ApiAppPostDeviceStockListResponseSuccess = ApiAppPostDeviceStockListResponse[200]
/**
 * @description
 *   出入库记录列表查询
 *   出入库记录列表查询
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceStockList = (option?: DeepPartial<ApiAppPostDeviceStockListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceStockListResponseSuccess>('/device/stock/list', { method: 'post', body: option}, config);

type ApiAppPostDeviceStockOutOption = GoodsDeviceStockRecordsOutInputDto;

/** @description response type for apiAppPostDeviceStockOut */
interface ApiAppPostDeviceStockOutResponse {
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

 type ApiAppPostDeviceStockOutResponseSuccess = ApiAppPostDeviceStockOutResponse[200]
/**
 * @description
 *   1.1.16装备清单出库
 *   装备清单出库
 * @tags 物资出入库接口目录
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDeviceStockOut = (option?: DeepPartial<ApiAppPostDeviceStockOutOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDeviceStockOutResponseSuccess>('/device/stock/out', { method: 'post', body: option}, config);

type ApiAppGetDeviceStopEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetDeviceStopEventId */
interface ApiAppGetDeviceStopEventIdResponse {
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

 type ApiAppGetDeviceStopEventIdResponseSuccess = ApiAppGetDeviceStopEventIdResponse[200]
/**
 * @description
 *   stopDevice
 * @tags test-controller
 * @produces *
 */
export const apiAppGetDeviceStopEventId = (option?: DeepPartial<ApiAppGetDeviceStopEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDeviceStopEventIdResponseSuccess>('/device/stop/:eventId', { method: 'get', path: option}, config);

type ApiAppGetDeviceDeviceIdOption = {
    /**
    @description
      deviceId */
    'deviceId': string
    };

/** @description response type for apiAppGetDeviceDeviceId */
interface ApiAppGetDeviceDeviceIdResponse {
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

 type ApiAppGetDeviceDeviceIdResponseSuccess = ApiAppGetDeviceDeviceIdResponse[200]
/**
 * @description
 *   getDevice
 * @tags pressure-chart-controller
 * @produces *
 */
export const apiAppGetDeviceDeviceId = (option?: DeepPartial<ApiAppGetDeviceDeviceIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDeviceDeviceIdResponseSuccess>('/device/:deviceId', { method: 'get', path: option}, config);

type ApiAppPostDictChangeCpmoToCompOption = {
    /**
    @description
      entityCode */
    'entityCode': string
    };

/** @description response type for apiAppPostDictChangeCpmoToComp */
interface ApiAppPostDictChangeCpmoToCompResponse {
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

 type ApiAppPostDictChangeCpmoToCompResponseSuccess = ApiAppPostDictChangeCpmoToCompResponse[200]
/**
 * @description
 *   字典进度标记并记录日志
 * @tags 字典接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDictChangeCpmoToComp = (option?: DeepPartial<ApiAppPostDictChangeCpmoToCompOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDictChangeCpmoToCompResponseSuccess>('/dict/change/cpmoToComp', { method: 'post', query: option}, config);

type ApiAppPostDictIcomeMakeTagAndLogOption = EventIcomeNodeInput;

/** @description response type for apiAppPostDictIcomeMakeTagAndLog */
interface ApiAppPostDictIcomeMakeTagAndLogResponse {
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

 type ApiAppPostDictIcomeMakeTagAndLogResponseSuccess = ApiAppPostDictIcomeMakeTagAndLogResponse[200]
/**
 * @description
 *   icome多个事件完成标记事件节点
 * @tags 字典接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDictIcomeMakeTagAndLog = (option?: DeepPartial<ApiAppPostDictIcomeMakeTagAndLogOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDictIcomeMakeTagAndLogResponseSuccess>('/dict/icome/makeTagAndLog', { method: 'post', body: option}, config);

/** @description response type for apiAppGetDictInitConfig */
interface ApiAppGetDictInitConfigResponse {
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

 type ApiAppGetDictInitConfigResponseSuccess = ApiAppGetDictInitConfigResponse[200]
/**
 * @description
 *   initConfig
 * @tags 字典接口
 * @produces *
 */
export const apiAppGetDictInitConfig = (config?: AxiosRequestConfig) => requester<ApiAppGetDictInitConfigResponseSuccess>('/dict/init/config', { method: 'get'}, config);

type ApiAppPostDictMakeTagAndLogOption = EmergencyDictDataInput;

/** @description response type for apiAppPostDictMakeTagAndLog */
interface ApiAppPostDictMakeTagAndLogResponse {
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

 type ApiAppPostDictMakeTagAndLogResponseSuccess = ApiAppPostDictMakeTagAndLogResponse[200]
/**
 * @description
 *   字典进度标记并记录日志
 * @tags 字典接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDictMakeTagAndLog = (option?: DeepPartial<ApiAppPostDictMakeTagAndLogOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDictMakeTagAndLogResponseSuccess>('/dict/makeTagAndLog', { method: 'post', body: option}, config);

type ApiAppGetDictQueryEmergencyProgressDictOption = {
    /**
    @description
      cpmoCop */
    'cpmoCop': string
    /**
    @description
      emergencyId
    @format int64 */
    'emergencyId': number
    };

/** @description response type for apiAppGetDictQueryEmergencyProgressDict */
interface ApiAppGetDictQueryEmergencyProgressDictResponse {
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

 type ApiAppGetDictQueryEmergencyProgressDictResponseSuccess = ApiAppGetDictQueryEmergencyProgressDictResponse[200]
/**
 * @description
 *   获取应急事件节点列表
 * @tags 字典接口
 * @produces *
 */
export const apiAppGetDictQueryEmergencyProgressDict = (option?: DeepPartial<ApiAppGetDictQueryEmergencyProgressDictOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDictQueryEmergencyProgressDictResponseSuccess>('/dict/queryEmergencyProgressDict', { method: 'get', query: option}, config);

type ApiAppPostDictQueryEmergencyProgressDictBySessionIdOption = IcomeInput;

/** @description response type for apiAppPostDictQueryEmergencyProgressDictBySessionId */
interface ApiAppPostDictQueryEmergencyProgressDictBySessionIdResponse {
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

 type ApiAppPostDictQueryEmergencyProgressDictBySessionIdResponseSuccess = ApiAppPostDictQueryEmergencyProgressDictBySessionIdResponse[200]
/**
 * @description
 *   获取应急事件节点列表
 * @tags 字典接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDictQueryEmergencyProgressDictBySessionId = (option?: DeepPartial<ApiAppPostDictQueryEmergencyProgressDictBySessionIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDictQueryEmergencyProgressDictBySessionIdResponseSuccess>('/dict/queryEmergencyProgressDictBySessionId', { method: 'post', body: option}, config);

type ApiAppGetDictQuerySceneNodeListEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetDictQuerySceneNodeListEventId */
interface ApiAppGetDictQuerySceneNodeListEventIdResponse {
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

 type ApiAppGetDictQuerySceneNodeListEventIdResponseSuccess = ApiAppGetDictQuerySceneNodeListEventIdResponse[200]
/**
 * @description
 *   获取场景预案应急事件节点列表
 * @tags 字典接口
 * @produces *
 */
export const apiAppGetDictQuerySceneNodeListEventId = (option?: DeepPartial<ApiAppGetDictQuerySceneNodeListEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDictQuerySceneNodeListEventIdResponseSuccess>('/dict/querySceneNodeList/:eventId', { method: 'get', path: option}, config);

/** @description response type for apiAppGetDictQuerySysDict */
interface ApiAppGetDictQuerySysDictResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: DictDataOutput
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

 type ApiAppGetDictQuerySysDictResponseSuccess = ApiAppGetDictQuerySysDictResponse[200]
/**
 * @description
 *   查询所有字典值
 * @tags 字典接口
 * @produces *
 */
export const apiAppGetDictQuerySysDict = (config?: AxiosRequestConfig) => requester<ApiAppGetDictQuerySysDictResponseSuccess>('/dict/querySysDict', { method: 'get'}, config);

type ApiAppGetDictQuerySysDictEditableCpmoCopOption = {
    /**
    @description
      cpmoCop */
    'cpmoCop': string
    };

/** @description response type for apiAppGetDictQuerySysDictEditableCpmoCop */
interface ApiAppGetDictQuerySysDictEditableCpmoCopResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: DictDataEditableOutput
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

 type ApiAppGetDictQuerySysDictEditableCpmoCopResponseSuccess = ApiAppGetDictQuerySysDictEditableCpmoCopResponse[200]
/**
 * @description
 *   查询所有可编辑的字典值
 * @tags 字典接口
 * @produces *
 */
export const apiAppGetDictQuerySysDictEditableCpmoCop = (option?: DeepPartial<ApiAppGetDictQuerySysDictEditableCpmoCopOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDictQuerySysDictEditableCpmoCopResponseSuccess>('/dict/querySysDictEditable/:cpmoCop', { method: 'get', path: option}, config);

type ApiAppGetDictUpdateNodeByEventIdEventIdNodeIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    /**
    @description
      nodeId
    @format int64 */
    'nodeId': number
    };

/** @description response type for apiAppGetDictUpdateNodeByEventIdEventIdNodeId */
interface ApiAppGetDictUpdateNodeByEventIdEventIdNodeIdResponse {
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

 type ApiAppGetDictUpdateNodeByEventIdEventIdNodeIdResponseSuccess = ApiAppGetDictUpdateNodeByEventIdEventIdNodeIdResponse[200]
/**
 * @description
 *   关键节点设置已完成
 * @tags 字典接口
 * @produces *
 */
export const apiAppGetDictUpdateNodeByEventIdEventIdNodeId = (option?: DeepPartial<ApiAppGetDictUpdateNodeByEventIdEventIdNodeIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDictUpdateNodeByEventIdEventIdNodeIdResponseSuccess>('/dict/updateNodeByEventId/:eventId/:nodeId', { method: 'get', path: option}, config);

type ApiAppPostDictUpdateSysDictEditableOption = Array<DictTypeInput>;

/** @description response type for apiAppPostDictUpdateSysDictEditable */
interface ApiAppPostDictUpdateSysDictEditableResponse {
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

 type ApiAppPostDictUpdateSysDictEditableResponseSuccess = ApiAppPostDictUpdateSysDictEditableResponse[200]
/**
 * @description
 *   更新可编辑字典值
 * @tags 字典接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDictUpdateSysDictEditable = (option?: DeepPartial<ApiAppPostDictUpdateSysDictEditableOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDictUpdateSysDictEditableResponseSuccess>('/dict/updateSysDictEditable', { method: 'post', body: option}, config);

type ApiAppGetDispatchDetailCpmoCodeIdTypeEventCodeOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    /**
    @description
      eventCode */
    'eventCode': string
    /**
    @description
      id */
    'id': string
    /**
    @description
      type
    @format int32 */
    'type': number
    };

/** @description response type for apiAppGetDispatchDetailCpmoCodeIdTypeEventCode */
interface ApiAppGetDispatchDetailCpmoCodeIdTypeEventCodeResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: number
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

 type ApiAppGetDispatchDetailCpmoCodeIdTypeEventCodeResponseSuccess = ApiAppGetDispatchDetailCpmoCodeIdTypeEventCodeResponse[200]
/**
 * @description
 *   getDispatchDetail
 * @tags dispatch-controller
 * @produces *
 */
export const apiAppGetDispatchDetailCpmoCodeIdTypeEventCode = (option?: DeepPartial<ApiAppGetDispatchDetailCpmoCodeIdTypeEventCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetDispatchDetailCpmoCodeIdTypeEventCodeResponseSuccess>('/dispatch/detail/:cpmoCode/:id/:type/:eventCode', { method: 'get', path: option}, config);

type ApiAppPostDispatchResourceOption = DispatchResourceInput;

/** @description response type for apiAppPostDispatchResource */
interface ApiAppPostDispatchResourceResponse {
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

 type ApiAppPostDispatchResourceResponseSuccess = ApiAppPostDispatchResourceResponse[200]
/**
 * @description
 *   dispatchResource
 * @tags dispatch-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDispatchResource = (option?: DeepPartial<ApiAppPostDispatchResourceOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDispatchResourceResponseSuccess>('/dispatch/resource', { method: 'post', body: option}, config);

type ApiAppPostDispatchSiteOption = DispatchInput;

/** @description response type for apiAppPostDispatchSite */
interface ApiAppPostDispatchSiteResponse {
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

 type ApiAppPostDispatchSiteResponseSuccess = ApiAppPostDispatchSiteResponse[200]
/**
 * @description
 *   dispatchSite
 * @tags dispatch-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDispatchSite = (option?: DeepPartial<ApiAppPostDispatchSiteOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDispatchSiteResponseSuccess>('/dispatch/site', { method: 'post', body: option}, config);

type ApiAppPostDispatchWarningMsgOption = WarningMsgInput;

/** @description response type for apiAppPostDispatchWarningMsg */
interface ApiAppPostDispatchWarningMsgResponse {
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

 type ApiAppPostDispatchWarningMsgResponseSuccess = ApiAppPostDispatchWarningMsgResponse[200]
/**
 * @description
 *   dispatchWarningMsg
 * @tags dispatch-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDispatchWarningMsg = (option?: DeepPartial<ApiAppPostDispatchWarningMsgOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDispatchWarningMsgResponseSuccess>('/dispatch/warningMsg', { method: 'post', body: option}, config);

type ApiAppPostDutyChangeDutyOption = ChangeDutyReqInput;

/** @description response type for apiAppPostDutyChangeDuty */
interface ApiAppPostDutyChangeDutyResponse {
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

 type ApiAppPostDutyChangeDutyResponseSuccess = ApiAppPostDutyChangeDutyResponse[200]
/**
 * @description
 *   换班
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDutyChangeDuty = (option?: DeepPartial<ApiAppPostDutyChangeDutyOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDutyChangeDutyResponseSuccess>('/duty/changeDuty', { method: 'post', body: option}, config);

type ApiAppPostDutyCheckInOption = CheckInReqInput;

/** @description response type for apiAppPostDutyCheckIn */
interface ApiAppPostDutyCheckInResponse {
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

 type ApiAppPostDutyCheckInResponseSuccess = ApiAppPostDutyCheckInResponse[200]
/**
 * @description
 *   值班确认
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDutyCheckIn = (option?: DeepPartial<ApiAppPostDutyCheckInOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDutyCheckInResponseSuccess>('/duty/checkIn', { method: 'post', body: option}, config);

type ApiAppPostDutyGetDutyOption = DutyDateQueryInput;

/** @description response type for apiAppPostDutyGetDuty */
interface ApiAppPostDutyGetDutyResponse {
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

 type ApiAppPostDutyGetDutyResponseSuccess = ApiAppPostDutyGetDutyResponse[200]
/**
 * @description
 *   获取某天某个岗位的值班信息
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDutyGetDuty = (option?: DeepPartial<ApiAppPostDutyGetDutyOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDutyGetDutyResponseSuccess>('/duty/getDuty', { method: 'post', body: option}, config);

type ApiAppPostDutyGetPersonalDutyOption = PersonDutyQueryInput;

/** @description response type for apiAppPostDutyGetPersonalDuty */
interface ApiAppPostDutyGetPersonalDutyResponse {
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

 type ApiAppPostDutyGetPersonalDutyResponseSuccess = ApiAppPostDutyGetPersonalDutyResponse[200]
/**
 * @description
 *   获取某人当天值班信息
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDutyGetPersonalDuty = (option?: DeepPartial<ApiAppPostDutyGetPersonalDutyOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDutyGetPersonalDutyResponseSuccess>('/duty/getPersonalDuty', { method: 'post', body: option}, config);

type ApiAppPostDutyGetPersonalDutyCalendarOption = PersonDutyCalendarQueryInput;

/** @description response type for apiAppPostDutyGetPersonalDutyCalendar */
interface ApiAppPostDutyGetPersonalDutyCalendarResponse {
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

 type ApiAppPostDutyGetPersonalDutyCalendarResponseSuccess = ApiAppPostDutyGetPersonalDutyCalendarResponse[200]
/**
 * @description
 *   获取某人某时间段的值班日历
 * @tags 应急值守：排班值班管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostDutyGetPersonalDutyCalendar = (option?: DeepPartial<ApiAppPostDutyGetPersonalDutyCalendarOption>, config?: AxiosRequestConfig) => requester<ApiAppPostDutyGetPersonalDutyCalendarResponseSuccess>('/duty/getPersonalDutyCalendar', { method: 'post', body: option}, config);

type ApiAppPostEmergencyIcomeDutyConfigAddPersonOption = EmergencyIcomeDutyConfig;

/** @description response type for apiAppPostEmergencyIcomeDutyConfigAddPerson */
interface ApiAppPostEmergencyIcomeDutyConfigAddPersonResponse {
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

 type ApiAppPostEmergencyIcomeDutyConfigAddPersonResponseSuccess = ApiAppPostEmergencyIcomeDutyConfigAddPersonResponse[200]
/**
 * @description
 *   添加人员
 *   添加人员
 * @tags icome群组设置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyIcomeDutyConfigAddPerson = (option?: DeepPartial<ApiAppPostEmergencyIcomeDutyConfigAddPersonOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyIcomeDutyConfigAddPersonResponseSuccess>('/emergency/icome/duty/config/addPerson', { method: 'post', body: option}, config);

type ApiAppPostEmergencyIcomeDutyConfigAddPositionsOption = Array<EmergencyIcomeDutyConfig>;

/** @description response type for apiAppPostEmergencyIcomeDutyConfigAddPositions */
interface ApiAppPostEmergencyIcomeDutyConfigAddPositionsResponse {
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

 type ApiAppPostEmergencyIcomeDutyConfigAddPositionsResponseSuccess = ApiAppPostEmergencyIcomeDutyConfigAddPositionsResponse[200]
/**
 * @description
 *   [{"companyCode":"0011","position":"职位/岗位ID"}]
 *   添加岗位
 * @tags icome群组设置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyIcomeDutyConfigAddPositions = (option?: DeepPartial<ApiAppPostEmergencyIcomeDutyConfigAddPositionsOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyIcomeDutyConfigAddPositionsResponseSuccess>('/emergency/icome/duty/config/addPositions', { method: 'post', body: option}, config);

type ApiAppPostEmergencyIcomeDutyConfigDelByIdsOption = Array<number>;

/** @description response type for apiAppPostEmergencyIcomeDutyConfigDelByIds */
interface ApiAppPostEmergencyIcomeDutyConfigDelByIdsResponse {
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

 type ApiAppPostEmergencyIcomeDutyConfigDelByIdsResponseSuccess = ApiAppPostEmergencyIcomeDutyConfigDelByIdsResponse[200]
/**
 * @description
 *   ["id1", "id2"]
 *   删除岗位
 * @tags icome群组设置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyIcomeDutyConfigDelByIds = (option?: DeepPartial<ApiAppPostEmergencyIcomeDutyConfigDelByIdsOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyIcomeDutyConfigDelByIdsResponseSuccess>('/emergency/icome/duty/config/delByIds', { method: 'post', body: option}, config);

type ApiAppPostEmergencyIcomeDutyConfigGetListOption = EmergencyIcomeDutyConfig;

/** @description response type for apiAppPostEmergencyIcomeDutyConfigGetList */
interface ApiAppPostEmergencyIcomeDutyConfigGetListResponse {
    /**
     * @description
     *   OK
     */
    200: Array<EmergencyIcomeDutyConfig>;
    /**
     * @description
     *   Created
     */
    201: any;
    /**
     * @description
     *   Unauthorized
     */
    401: any;
    /**
     * @description
     *   Forbidden
     */
    403: any;
    /**
     * @description
     *   Not Found
     */
    404: any;
}

 type ApiAppPostEmergencyIcomeDutyConfigGetListResponseSuccess = ApiAppPostEmergencyIcomeDutyConfigGetListResponse[200]
/**
 * @description
 *   获取icome群组设置
 *   获取icome群组设置
 * @tags icome群组设置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyIcomeDutyConfigGetList = (option?: DeepPartial<ApiAppPostEmergencyIcomeDutyConfigGetListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyIcomeDutyConfigGetListResponseSuccess>('/emergency/icome/duty/config/getList', { method: 'post', body: option}, config);

type ApiAppPostEmergencyIcomeDutyConfigGetListByCompanyCodeAndDateOption = EmergencyIcomeDutyConfig;

/** @description response type for apiAppPostEmergencyIcomeDutyConfigGetListByCompanyCodeAndDate */
interface ApiAppPostEmergencyIcomeDutyConfigGetListByCompanyCodeAndDateResponse {
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

 type ApiAppPostEmergencyIcomeDutyConfigGetListByCompanyCodeAndDateResponseSuccess = ApiAppPostEmergencyIcomeDutyConfigGetListByCompanyCodeAndDateResponse[200]
/**
 * @description
 *   获取icome群组设置中itcodes
 *   获取icome群组设置中itcodes
 * @tags icome群组设置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyIcomeDutyConfigGetListByCompanyCodeAndDate = (option?: DeepPartial<ApiAppPostEmergencyIcomeDutyConfigGetListByCompanyCodeAndDateOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyIcomeDutyConfigGetListByCompanyCodeAndDateResponseSuccess>('/emergency/icome/duty/config/getListByCompanyCodeAndDate', { method: 'post', body: option}, config);

type ApiAppPostEmergencyIcomeDutyConfigUpdPersonOption = EmergencyIcomeDutyConfig;

/** @description response type for apiAppPostEmergencyIcomeDutyConfigUpdPerson */
interface ApiAppPostEmergencyIcomeDutyConfigUpdPersonResponse {
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

 type ApiAppPostEmergencyIcomeDutyConfigUpdPersonResponseSuccess = ApiAppPostEmergencyIcomeDutyConfigUpdPersonResponse[200]
/**
 * @description
 *   编辑人员
 *   编辑人员
 * @tags icome群组设置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyIcomeDutyConfigUpdPerson = (option?: DeepPartial<ApiAppPostEmergencyIcomeDutyConfigUpdPersonOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyIcomeDutyConfigUpdPersonResponseSuccess>('/emergency/icome/duty/config/updPerson', { method: 'post', body: option}, config);

type ApiAppPostEmergencyIcomeDutyConfigUpdPositionsOption = Array<EmergencyIcomeDutyConfig>;

/** @description response type for apiAppPostEmergencyIcomeDutyConfigUpdPositions */
interface ApiAppPostEmergencyIcomeDutyConfigUpdPositionsResponse {
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

 type ApiAppPostEmergencyIcomeDutyConfigUpdPositionsResponseSuccess = ApiAppPostEmergencyIcomeDutyConfigUpdPositionsResponse[200]
/**
 * @description
 *   [{"id":12345,"companyCode":"0011","position":"职位/岗位ID"}]
 *   编辑岗位
 * @tags icome群组设置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyIcomeDutyConfigUpdPositions = (option?: DeepPartial<ApiAppPostEmergencyIcomeDutyConfigUpdPositionsOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyIcomeDutyConfigUpdPositionsResponseSuccess>('/emergency/icome/duty/config/updPositions', { method: 'post', body: option}, config);

type ApiAppPostEmergencyPositionAddOption = PositionInsertedReqDTO;

/** @description response type for apiAppPostEmergencyPositionAdd */
interface ApiAppPostEmergencyPositionAddResponse {
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

 type ApiAppPostEmergencyPositionAddResponseSuccess = ApiAppPostEmergencyPositionAddResponse[200]
/**
 * @description
 *   新增岗位
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyPositionAdd = (option?: DeepPartial<ApiAppPostEmergencyPositionAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyPositionAddResponseSuccess>('/emergency/position/add', { method: 'post', body: option}, config);

type ApiAppPostEmergencyPositionChangeGreenChannelContactFlagOption = PositionGreenChannelFlagReqDTO;

/** @description response type for apiAppPostEmergencyPositionChangeGreenChannelContactFlag */
interface ApiAppPostEmergencyPositionChangeGreenChannelContactFlagResponse {
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

 type ApiAppPostEmergencyPositionChangeGreenChannelContactFlagResponseSuccess = ApiAppPostEmergencyPositionChangeGreenChannelContactFlagResponse[200]
/**
 * @description
 *   变更绿色通道联系人标志
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyPositionChangeGreenChannelContactFlag = (option?: DeepPartial<ApiAppPostEmergencyPositionChangeGreenChannelContactFlagOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyPositionChangeGreenChannelContactFlagResponseSuccess>('/emergency/position/changeGreenChannelContactFlag', { method: 'post', body: option}, config);

type ApiAppPostEmergencyPositionChangeStatusOption = PositionStatusReqDTO;

/** @description response type for apiAppPostEmergencyPositionChangeStatus */
interface ApiAppPostEmergencyPositionChangeStatusResponse {
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

 type ApiAppPostEmergencyPositionChangeStatusResponseSuccess = ApiAppPostEmergencyPositionChangeStatusResponse[200]
/**
 * @description
 *   更改启停状态
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyPositionChangeStatus = (option?: DeepPartial<ApiAppPostEmergencyPositionChangeStatusOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyPositionChangeStatusResponseSuccess>('/emergency/position/changeStatus', { method: 'post', body: option}, config);

type ApiAppPostEmergencyPositionDeleteIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppPostEmergencyPositionDeleteId */
interface ApiAppPostEmergencyPositionDeleteIdResponse {
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

 type ApiAppPostEmergencyPositionDeleteIdResponseSuccess = ApiAppPostEmergencyPositionDeleteIdResponse[200]
/**
 * @description
 *   删除岗位
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyPositionDeleteId = (option?: DeepPartial<ApiAppPostEmergencyPositionDeleteIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyPositionDeleteIdResponseSuccess>('/emergency/position/delete/:id', { method: 'post', path: option}, config);

type ApiAppGetEmergencyPositionGetIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEmergencyPositionGetId */
interface ApiAppGetEmergencyPositionGetIdResponse {
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

 type ApiAppGetEmergencyPositionGetIdResponseSuccess = ApiAppGetEmergencyPositionGetIdResponse[200]
/**
 * @description
 *   根据id获取岗位信息
 * @tags 应急值守：岗位管理
 * @produces *
 */
export const apiAppGetEmergencyPositionGetId = (option?: DeepPartial<ApiAppGetEmergencyPositionGetIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEmergencyPositionGetIdResponseSuccess>('/emergency/position/get/:id', { method: 'get', path: option}, config);

type ApiAppPostEmergencyPositionListOption = PositionDutyQueryDTO;

/** @description response type for apiAppPostEmergencyPositionList */
interface ApiAppPostEmergencyPositionListResponse {
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

 type ApiAppPostEmergencyPositionListResponseSuccess = ApiAppPostEmergencyPositionListResponse[200]
/**
 * @description
 *   岗位下拉数据
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyPositionList = (option?: DeepPartial<ApiAppPostEmergencyPositionListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyPositionListResponseSuccess>('/emergency/position/list', { method: 'post', body: option}, config);

type ApiAppPostEmergencyPositionQueryOption = PositionQueryDTO;

/** @description response type for apiAppPostEmergencyPositionQuery */
interface ApiAppPostEmergencyPositionQueryResponse {
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

 type ApiAppPostEmergencyPositionQueryResponseSuccess = ApiAppPostEmergencyPositionQueryResponse[200]
/**
 * @description
 *   分页查询岗位数据
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyPositionQuery = (option?: DeepPartial<ApiAppPostEmergencyPositionQueryOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyPositionQueryResponseSuccess>('/emergency/position/query', { method: 'post', body: option}, config);

type ApiAppPostEmergencyPositionUpdateOption = PositionUpdatedReqDTO;

/** @description response type for apiAppPostEmergencyPositionUpdate */
interface ApiAppPostEmergencyPositionUpdateResponse {
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

 type ApiAppPostEmergencyPositionUpdateResponseSuccess = ApiAppPostEmergencyPositionUpdateResponse[200]
/**
 * @description
 *   更新岗位
 * @tags 应急值守：岗位管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEmergencyPositionUpdate = (option?: DeepPartial<ApiAppPostEmergencyPositionUpdateOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEmergencyPositionUpdateResponseSuccess>('/emergency/position/update', { method: 'post', body: option}, config);

/** @description response type for apiAppGetError */
interface ApiAppGetErrorResponse {
    /**
     * @description
     *   OK
     */
    200: ModelAndView;
    /**
     * @description
     *   Unauthorized
     */
    401: any;
    /**
     * @description
     *   Forbidden
     */
    403: any;
    /**
     * @description
     *   Not Found
     */
    404: any;
}

 type ApiAppGetErrorResponseSuccess = ApiAppGetErrorResponse[200]
/**
 * @description
 *   errorHtml
 * @tags basic-error-controller
 * @produces text/html
 */
export const apiAppGetError = (config?: AxiosRequestConfig) => requester<ApiAppGetErrorResponseSuccess>('/error', { method: 'get'}, config);

/** @description response type for apiAppPutError */
interface ApiAppPutErrorResponse {
    /**
     * @description
     *   OK
     */
    200: ModelAndView;
    /**
     * @description
     *   Created
     */
    201: any;
    /**
     * @description
     *   Unauthorized
     */
    401: any;
    /**
     * @description
     *   Forbidden
     */
    403: any;
    /**
     * @description
     *   Not Found
     */
    404: any;
}

 type ApiAppPutErrorResponseSuccess = ApiAppPutErrorResponse[200]
/**
 * @description
 *   errorHtml
 * @tags basic-error-controller
 * @produces text/html
 * @consumes application/json
 */
export const apiAppPutError = (config?: AxiosRequestConfig) => requester<ApiAppPutErrorResponseSuccess>('/error', { method: 'put'}, config);

/** @description response type for apiAppPostError */
interface ApiAppPostErrorResponse {
    /**
     * @description
     *   OK
     */
    200: ModelAndView;
    /**
     * @description
     *   Created
     */
    201: any;
    /**
     * @description
     *   Unauthorized
     */
    401: any;
    /**
     * @description
     *   Forbidden
     */
    403: any;
    /**
     * @description
     *   Not Found
     */
    404: any;
}

 type ApiAppPostErrorResponseSuccess = ApiAppPostErrorResponse[200]
/**
 * @description
 *   errorHtml
 * @tags basic-error-controller
 * @produces text/html
 * @consumes application/json
 */
export const apiAppPostError = (config?: AxiosRequestConfig) => requester<ApiAppPostErrorResponseSuccess>('/error', { method: 'post'}, config);

/** @description response type for apiAppDeleteError */
interface ApiAppDeleteErrorResponse {
    /**
     * @description
     *   OK
     */
    200: ModelAndView;
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

 type ApiAppDeleteErrorResponseSuccess = ApiAppDeleteErrorResponse[200]
/**
 * @description
 *   errorHtml
 * @tags basic-error-controller
 * @produces text/html
 */
export const apiAppDeleteError = (config?: AxiosRequestConfig) => requester<ApiAppDeleteErrorResponseSuccess>('/error', { method: 'delete'}, config);

/** @description response type for apiAppOptionsError */
interface ApiAppOptionsErrorResponse {
    /**
     * @description
     *   OK
     */
    200: ModelAndView;
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

 type ApiAppOptionsErrorResponseSuccess = ApiAppOptionsErrorResponse[200]
/**
 * @description
 *   errorHtml
 * @tags basic-error-controller
 * @produces text/html
 * @consumes application/json
 */
export const apiAppOptionsError = (config?: AxiosRequestConfig) => requester<ApiAppOptionsErrorResponseSuccess>('/error', { method: 'options'}, config);

/** @description response type for apiAppHeadError */
interface ApiAppHeadErrorResponse {
    /**
     * @description
     *   OK
     */
    200: ModelAndView;
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

 type ApiAppHeadErrorResponseSuccess = ApiAppHeadErrorResponse[200]
/**
 * @description
 *   errorHtml
 * @tags basic-error-controller
 * @produces text/html
 * @consumes application/json
 */
export const apiAppHeadError = (config?: AxiosRequestConfig) => requester<ApiAppHeadErrorResponseSuccess>('/error', { method: 'head'}, config);

/** @description response type for apiAppPatchError */
interface ApiAppPatchErrorResponse {
    /**
     * @description
     *   OK
     */
    200: ModelAndView;
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

 type ApiAppPatchErrorResponseSuccess = ApiAppPatchErrorResponse[200]
/**
 * @description
 *   errorHtml
 * @tags basic-error-controller
 * @produces text/html
 * @consumes application/json
 */
export const apiAppPatchError = (config?: AxiosRequestConfig) => requester<ApiAppPatchErrorResponseSuccess>('/error', { method: 'patch'}, config);

type ApiAppPostEventAddOption = EmergencyEventInput;

/** @description response type for apiAppPostEventAdd */
interface ApiAppPostEventAddResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: any
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

 type ApiAppPostEventAddResponseSuccess = ApiAppPostEventAddResponse[200]
/**
 * @description
 *   应急事件添加
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventAdd = (option?: DeepPartial<ApiAppPostEventAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventAddResponseSuccess>('/event/add', { method: 'post', body: option}, config);

type ApiAppGetEventAllCarsEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetEventAllCarsEventId */
interface ApiAppGetEventAllCarsEventIdResponse {
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

 type ApiAppGetEventAllCarsEventIdResponseSuccess = ApiAppGetEventAllCarsEventIdResponse[200]
/**
 * @description
 *   事件已调度车辆信息列表
 * @tags 事件管理接口
 * @produces *
 */
export const apiAppGetEventAllCarsEventId = (option?: DeepPartial<ApiAppGetEventAllCarsEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventAllCarsEventIdResponseSuccess>('/event/all/cars/:eventId', { method: 'get', path: option}, config);

type ApiAppGetEventCallCenterCancelBillNumOperatorOption = {
    /**
    @description
      billNum */
    'billNum': string
    /**
    @description
      operator */
    'operator': string
    };

/** @description response type for apiAppGetEventCallCenterCancelBillNumOperator */
interface ApiAppGetEventCallCenterCancelBillNumOperatorResponse {
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

 type ApiAppGetEventCallCenterCancelBillNumOperatorResponseSuccess = ApiAppGetEventCallCenterCancelBillNumOperatorResponse[200]
/**
 * @description
 *   cancelBillNum
 * @tags callcenter-bill-controller
 * @produces *
 */
export const apiAppGetEventCallCenterCancelBillNumOperator = (option?: DeepPartial<ApiAppGetEventCallCenterCancelBillNumOperatorOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventCallCenterCancelBillNumOperatorResponseSuccess>('/event/callCenter/cancel/:billNum/:operator', { method: 'get', path: option}, config);

type ApiAppPostEventCallCenterContentOption = ContentInput;

/** @description response type for apiAppPostEventCallCenterContent */
interface ApiAppPostEventCallCenterContentResponse {
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

 type ApiAppPostEventCallCenterContentResponseSuccess = ApiAppPostEventCallCenterContentResponse[200]
/**
 * @description
 *   callCenterContent
 * @tags callcenter-bill-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventCallCenterContent = (option?: DeepPartial<ApiAppPostEventCallCenterContentOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventCallCenterContentResponseSuccess>('/event/callCenter/content', { method: 'post', body: option}, config);

type ApiAppGetEventCallCenterGetCallCenterDetailBillNumOption = {
    /**
    @description
      billNum */
    'billNum': string
    };

/** @description response type for apiAppGetEventCallCenterGetCallCenterDetailBillNum */
interface ApiAppGetEventCallCenterGetCallCenterDetailBillNumResponse {
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

 type ApiAppGetEventCallCenterGetCallCenterDetailBillNumResponseSuccess = ApiAppGetEventCallCenterGetCallCenterDetailBillNumResponse[200]
/**
 * @description
 *   根据事件编码获取抢险单详情
 * @tags callcenter-bill-controller
 * @produces *
 */
export const apiAppGetEventCallCenterGetCallCenterDetailBillNum = (option?: DeepPartial<ApiAppGetEventCallCenterGetCallCenterDetailBillNumOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventCallCenterGetCallCenterDetailBillNumResponseSuccess>('/event/callCenter/getCallCenterDetail/:billNum', { method: 'get', path: option}, config);

type ApiAppGetEventCallCenterGetGreenChannelInfoEcodeOption = {
    /**
    @description
      ecode */
    'ecode': string
    };

/** @description response type for apiAppGetEventCallCenterGetGreenChannelInfoEcode */
interface ApiAppGetEventCallCenterGetGreenChannelInfoEcodeResponse {
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

 type ApiAppGetEventCallCenterGetGreenChannelInfoEcodeResponseSuccess = ApiAppGetEventCallCenterGetGreenChannelInfoEcodeResponse[200]
/**
 * @description
 *   getGreenChannelInfo
 * @tags callcenter-bill-controller
 * @produces *
 */
export const apiAppGetEventCallCenterGetGreenChannelInfoEcode = (option?: DeepPartial<ApiAppGetEventCallCenterGetGreenChannelInfoEcodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventCallCenterGetGreenChannelInfoEcodeResponseSuccess>('/event/callCenter/getGreenChannelInfo/:ecode', { method: 'get', path: option}, config);

type ApiAppGetEventCallCenterProgressBillNumOption = {
    /**
    @description
      billNum */
    'billNum': string
    };

/** @description response type for apiAppGetEventCallCenterProgressBillNum */
interface ApiAppGetEventCallCenterProgressBillNumResponse {
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

 type ApiAppGetEventCallCenterProgressBillNumResponseSuccess = ApiAppGetEventCallCenterProgressBillNumResponse[200]
/**
 * @description
 *   callCenterDealProgress
 * @tags callcenter-bill-controller
 * @produces *
 */
export const apiAppGetEventCallCenterProgressBillNum = (option?: DeepPartial<ApiAppGetEventCallCenterProgressBillNumOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventCallCenterProgressBillNumResponseSuccess>('/event/callCenter/progress/:billNum', { method: 'get', path: option}, config);

type ApiAppPostEventCallCenterRemindOrderOption = RemindOrderInput;

/** @description response type for apiAppPostEventCallCenterRemindOrder */
interface ApiAppPostEventCallCenterRemindOrderResponse {
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

 type ApiAppPostEventCallCenterRemindOrderResponseSuccess = ApiAppPostEventCallCenterRemindOrderResponse[200]
/**
 * @description
 *   callCenterRemindOrder
 * @tags callcenter-bill-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventCallCenterRemindOrder = (option?: DeepPartial<ApiAppPostEventCallCenterRemindOrderOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventCallCenterRemindOrderResponseSuccess>('/event/callCenter/remindOrder', { method: 'post', body: option}, config);

/** @description response type for apiAppGetEventCallCenterRemindOrderOrderEnum */
interface ApiAppGetEventCallCenterRemindOrderOrderEnumResponse {
    /**
     * @description
     *   OK
     */
    200: Array<{
        [propertyName: string]: any
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

 type ApiAppGetEventCallCenterRemindOrderOrderEnumResponseSuccess = ApiAppGetEventCallCenterRemindOrderOrderEnumResponse[200]
/**
 * @description
 *   remindOrderEnum
 * @tags callcenter-bill-controller
 * @produces *
 */
export const apiAppGetEventCallCenterRemindOrderOrderEnum = (config?: AxiosRequestConfig) => requester<ApiAppGetEventCallCenterRemindOrderOrderEnumResponseSuccess>('/event/callCenter/remindOrder/order/enum', { method: 'get'}, config);

type ApiAppPostEventConfirmOption = EmergencyEventConfirmInput;

/** @description response type for apiAppPostEventConfirm */
interface ApiAppPostEventConfirmResponse {
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

 type ApiAppPostEventConfirmResponseSuccess = ApiAppPostEventConfirmResponse[200]
/**
 * @description
 *   应急事件确认
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventConfirm = (option?: DeepPartial<ApiAppPostEventConfirmOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventConfirmResponseSuccess>('/event/confirm', { method: 'post', body: option}, config);

type ApiAppDeleteEventDeleteIdWorkflowNoOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    /**
    @description
      workflowNo */
    'workflowNo': string
    };

/** @description response type for apiAppDeleteEventDeleteIdWorkflowNo */
interface ApiAppDeleteEventDeleteIdWorkflowNoResponse {
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

 type ApiAppDeleteEventDeleteIdWorkflowNoResponseSuccess = ApiAppDeleteEventDeleteIdWorkflowNoResponse[200]
/**
 * @description
 *   应急抢险事件删除
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppDeleteEventDeleteIdWorkflowNo = (option?: DeepPartial<ApiAppDeleteEventDeleteIdWorkflowNoOption>, config?: AxiosRequestConfig) => requester<ApiAppDeleteEventDeleteIdWorkflowNoResponseSuccess>('/event/delete/:id/:workflowNo', { method: 'delete', path: option}, config);

type ApiAppGetEventDetailIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventDetailId */
interface ApiAppGetEventDetailIdResponse {
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

 type ApiAppGetEventDetailIdResponseSuccess = ApiAppGetEventDetailIdResponse[200]
/**
 * @description
 *   查询详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventDetailId = (option?: DeepPartial<ApiAppGetEventDetailIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventDetailIdResponseSuccess>('/event/detail/:id', { method: 'get', path: option}, config);

type ApiAppPostEventDeviceListOption = EventDeviceListInput;

/** @description response type for apiAppPostEventDeviceList */
interface ApiAppPostEventDeviceListResponse {
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

 type ApiAppPostEventDeviceListResponseSuccess = ApiAppPostEventDeviceListResponse[200]
/**
 * @description
 *   物资装备清单列表
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventDeviceList = (option?: DeepPartial<ApiAppPostEventDeviceListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventDeviceListResponseSuccess>('/event/device/list', { method: 'post', body: option}, config);

type ApiAppGetEventEndTaskDetailEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetEventEndTaskDetailEventId */
interface ApiAppGetEventEndTaskDetailEventIdResponse {
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

 type ApiAppGetEventEndTaskDetailEventIdResponseSuccess = ApiAppGetEventEndTaskDetailEventIdResponse[200]
/**
 * @description
 *   事件归档-应急结束
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventEndTaskDetailEventId = (option?: DeepPartial<ApiAppGetEventEndTaskDetailEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventEndTaskDetailEventIdResponseSuccess>('/event/end/task/detail/:eventId', { method: 'get', path: option}, config);

type ApiAppGetEventEventPeopleIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventEventPeopleId */
interface ApiAppGetEventEventPeopleIdResponse {
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

 type ApiAppGetEventEventPeopleIdResponseSuccess = ApiAppGetEventEventPeopleIdResponse[200]
/**
 * @description
 *   根据事件主键id获取应急人员
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventEventPeopleId = (option?: DeepPartial<ApiAppGetEventEventPeopleIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventEventPeopleIdResponseSuccess>('/event/eventPeople/:id', { method: 'get', path: option}, config);

type ApiAppGetEventFeedbackIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventFeedbackId */
interface ApiAppGetEventFeedbackIdResponse {
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

 type ApiAppGetEventFeedbackIdResponseSuccess = ApiAppGetEventFeedbackIdResponse[200]
/**
 * @description
 *   获取事件反馈详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventFeedbackId = (option?: DeepPartial<ApiAppGetEventFeedbackIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventFeedbackIdResponseSuccess>('/event/feedback/:id', { method: 'get', path: option}, config);

type ApiAppGetEventGetAllEntityCodeOption = {
    /**
    @description
      entityCode */
    'entityCode': string
    };

/** @description response type for apiAppGetEventGetAllEntityCode */
interface ApiAppGetEventGetAllEntityCodeResponse {
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

 type ApiAppGetEventGetAllEntityCodeResponseSuccess = ApiAppGetEventGetAllEntityCodeResponse[200]
/**
 * @description
 *   获取未终止的应急事件
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetAllEntityCode = (option?: DeepPartial<ApiAppGetEventGetAllEntityCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetAllEntityCodeResponseSuccess>('/event/getAll/:entityCode', { method: 'get', path: option}, config);

type ApiAppGetEventGetCallCenterDetailEventCodeOption = {
    /**
    @description
      eventCode */
    'eventCode': string
    };

/** @description response type for apiAppGetEventGetCallCenterDetailEventCode */
interface ApiAppGetEventGetCallCenterDetailEventCodeResponse {
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

 type ApiAppGetEventGetCallCenterDetailEventCodeResponseSuccess = ApiAppGetEventGetCallCenterDetailEventCodeResponse[200]
/**
 * @description
 *   根据事件编码获取抢险单详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetCallCenterDetailEventCode = (option?: DeepPartial<ApiAppGetEventGetCallCenterDetailEventCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetCallCenterDetailEventCodeResponseSuccess>('/event/getCallCenterDetail/:eventCode', { method: 'get', path: option}, config);

type ApiAppGetEventGetCheckIdByEventIdEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetEventGetCheckIdByEventIdEventId */
interface ApiAppGetEventGetCheckIdByEventIdEventIdResponse {
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

 type ApiAppGetEventGetCheckIdByEventIdEventIdResponseSuccess = ApiAppGetEventGetCheckIdByEventIdEventIdResponse[200]
/**
 * @description
 *   根据事件id查询工作台id
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetCheckIdByEventIdEventId = (option?: DeepPartial<ApiAppGetEventGetCheckIdByEventIdEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetCheckIdByEventIdEventIdResponseSuccess>('/event/getCheckIdByEventId/:eventId', { method: 'get', path: option}, config);

type ApiAppGetEventGetCheckIdByWoCodeWoCodeOption = {
    /**
    @description
      woCode */
    'woCode': string
    };

/** @description response type for apiAppGetEventGetCheckIdByWoCodeWoCode */
interface ApiAppGetEventGetCheckIdByWoCodeWoCodeResponse {
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

 type ApiAppGetEventGetCheckIdByWoCodeWoCodeResponseSuccess = ApiAppGetEventGetCheckIdByWoCodeWoCodeResponse[200]
/**
 * @description
 *   根据工单编号查询工作台id
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetCheckIdByWoCodeWoCode = (option?: DeepPartial<ApiAppGetEventGetCheckIdByWoCodeWoCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetCheckIdByWoCodeWoCodeResponseSuccess>('/event/getCheckIdByWoCode/:woCode', { method: 'get', path: option}, config);

type ApiAppGetEventGetCompCodeCpmoCopOption = {
    /**
    @description
      cpmoCop */
    'cpmoCop': string
    };

/** @description response type for apiAppGetEventGetCompCodeCpmoCop */
interface ApiAppGetEventGetCompCodeCpmoCopResponse {
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

 type ApiAppGetEventGetCompCodeCpmoCopResponseSuccess = ApiAppGetEventGetCompCodeCpmoCopResponse[200]
/**
 * @description
 *   获取实体下面的默认关联公司
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetCompCodeCpmoCop = (option?: DeepPartial<ApiAppGetEventGetCompCodeCpmoCopOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetCompCodeCpmoCopResponseSuccess>('/event/getCompCode/:cpmoCop', { method: 'get', path: option}, config);

type ApiAppGetEventGetDealUserNameEcodeLocCodeOption = {
    /**
    @description
      ecode */
    'ecode': string
    /**
    @description
      locCode */
    'locCode': string
    };

/** @description response type for apiAppGetEventGetDealUserNameEcodeLocCode */
interface ApiAppGetEventGetDealUserNameEcodeLocCodeResponse {
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

 type ApiAppGetEventGetDealUserNameEcodeLocCodeResponseSuccess = ApiAppGetEventGetDealUserNameEcodeLocCodeResponse[200]
/**
 * @description
 *   根据网格编码查询处置人
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetDealUserNameEcodeLocCode = (option?: DeepPartial<ApiAppGetEventGetDealUserNameEcodeLocCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetDealUserNameEcodeLocCodeResponseSuccess>('/event/getDealUserName/:ecode/:locCode', { method: 'get', path: option}, config);

type ApiAppGetEventGetDetailIdItcodeOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    /**
    @description
      itcode */
    'itcode': string
    };

/** @description response type for apiAppGetEventGetDetailIdItcode */
interface ApiAppGetEventGetDetailIdItcodeResponse {
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

 type ApiAppGetEventGetDetailIdItcodeResponseSuccess = ApiAppGetEventGetDetailIdItcodeResponse[200]
/**
 * @description
 *   查询事件详情（App）
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetDetailIdItcode = (option?: DeepPartial<ApiAppGetEventGetDetailIdItcodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetDetailIdItcodeResponseSuccess>('/event/getDetail/:id/:itcode', { method: 'get', path: option}, config);

type ApiAppPostEventGetDetonationDetailsOption = DetonationDetailsInput;

/** @description response type for apiAppPostEventGetDetonationDetails */
interface ApiAppPostEventGetDetonationDetailsResponse {
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

 type ApiAppPostEventGetDetonationDetailsResponseSuccess = ApiAppPostEventGetDetonationDetailsResponse[200]
/**
 * @description
 *   获取爆管分析明细
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventGetDetonationDetails = (option?: DeepPartial<ApiAppPostEventGetDetonationDetailsOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventGetDetonationDetailsResponseSuccess>('/event/getDetonationDetails', { method: 'post', body: option}, config);

type ApiAppGetEventGetDictLabelTypeOption = {
    /**
    @description
      type
    @format int32 */
    'type': number
    };

/** @description response type for apiAppGetEventGetDictLabelType */
interface ApiAppGetEventGetDictLabelTypeResponse {
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

 type ApiAppGetEventGetDictLabelTypeResponseSuccess = ApiAppGetEventGetDictLabelTypeResponse[200]
/**
 * @description
 *   获取分类标签
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetDictLabelType = (option?: DeepPartial<ApiAppGetEventGetDictLabelTypeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetDictLabelTypeResponseSuccess>('/event/getDictLabel/:type', { method: 'get', path: option}, config);

type ApiAppGetEventGetEmergencyEventAddressListEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetEventGetEmergencyEventAddressListEventId */
interface ApiAppGetEventGetEmergencyEventAddressListEventIdResponse {
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

 type ApiAppGetEventGetEmergencyEventAddressListEventIdResponseSuccess = ApiAppGetEventGetEmergencyEventAddressListEventIdResponse[200]
/**
 * @description
 *   查询应急启动通讯录详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetEmergencyEventAddressListEventId = (option?: DeepPartial<ApiAppGetEventGetEmergencyEventAddressListEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetEmergencyEventAddressListEventIdResponseSuccess>('/event/getEmergencyEventAddressList/:eventId', { method: 'get', path: option}, config);

type ApiAppGetEventGetEventCompanyTreeEntityCodeOption = {
    /**
    @description
      entityCode */
    'entityCode': string
    };

/** @description response type for apiAppGetEventGetEventCompanyTreeEntityCode */
interface ApiAppGetEventGetEventCompanyTreeEntityCodeResponse {
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

 type ApiAppGetEventGetEventCompanyTreeEntityCodeResponseSuccess = ApiAppGetEventGetEventCompanyTreeEntityCodeResponse[200]
/**
 * @description
 *   获取事件管理所属公司树
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetEventCompanyTreeEntityCode = (option?: DeepPartial<ApiAppGetEventGetEventCompanyTreeEntityCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetEventCompanyTreeEntityCodeResponseSuccess>('/event/getEventCompanyTree/:entityCode', { method: 'get', path: option}, config);

type ApiAppPostEventGetIcomeEventOption = EmergencyEventIcomeInput;

/** @description response type for apiAppPostEventGetIcomeEvent */
interface ApiAppPostEventGetIcomeEventResponse {
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

 type ApiAppPostEventGetIcomeEventResponseSuccess = ApiAppPostEventGetIcomeEventResponse[200]
/**
 * @description
 *   getIcomeEvent
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventGetIcomeEvent = (option?: DeepPartial<ApiAppPostEventGetIcomeEventOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventGetIcomeEventResponseSuccess>('/event/getIcomeEvent', { method: 'post', body: option}, config);

type ApiAppGetEventGetLastOneIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventGetLastOneId */
interface ApiAppGetEventGetLastOneIdResponse {
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

 type ApiAppGetEventGetLastOneIdResponseSuccess = ApiAppGetEventGetLastOneIdResponse[200]
/**
 * @description
 *   获取最先发生事件
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetLastOneId = (option?: DeepPartial<ApiAppGetEventGetLastOneIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetLastOneIdResponseSuccess>('/event/getLastOne/:id', { method: 'get', path: option}, config);

type ApiAppGetEventGetLocNameEcodeOption = {
    /**
    @description
      ecode */
    'ecode': string
    };

/** @description response type for apiAppGetEventGetLocNameEcode */
interface ApiAppGetEventGetLocNameEcodeResponse {
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

 type ApiAppGetEventGetLocNameEcodeResponseSuccess = ApiAppGetEventGetLocNameEcodeResponse[200]
/**
 * @description
 *   根据企业查询网格列表接口
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetLocNameEcode = (option?: DeepPartial<ApiAppGetEventGetLocNameEcodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetLocNameEcodeResponseSuccess>('/event/getLocName/:ecode', { method: 'get', path: option}, config);

type ApiAppGetEventGetPdfIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventGetPdfId */
interface ApiAppGetEventGetPdfIdResponse {
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

 type ApiAppGetEventGetPdfIdResponseSuccess = ApiAppGetEventGetPdfIdResponse[200]
/**
 * @description
 *   获取pdf
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetPdfId = (option?: DeepPartial<ApiAppGetEventGetPdfIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetPdfIdResponseSuccess>('/event/getPdf/:id', { method: 'get', path: option}, config);

type ApiAppGetEventGetPositionLocationEcodeOption = {
    /**
    @description
      ecode */
    'ecode': string
    };

/** @description response type for apiAppGetEventGetPositionLocationEcode */
interface ApiAppGetEventGetPositionLocationEcodeResponse {
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

 type ApiAppGetEventGetPositionLocationEcodeResponseSuccess = ApiAppGetEventGetPositionLocationEcodeResponse[200]
/**
 * @description
 *   查询企业下人员位置信息接口
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetPositionLocationEcode = (option?: DeepPartial<ApiAppGetEventGetPositionLocationEcodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetPositionLocationEcodeResponseSuccess>('/event/getPositionLocation/:ecode', { method: 'get', path: option}, config);

type ApiAppPostEventGetShowDangerWoResponsibleEcodeOrganCodeOption = {
    /**
    @description
      ecode */
    'ecode': string
    /**
    @description
      organCode */
    'organCode': string
    };

/** @description response type for apiAppPostEventGetShowDangerWoResponsibleEcodeOrganCode */
interface ApiAppPostEventGetShowDangerWoResponsibleEcodeOrganCodeResponse {
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

 type ApiAppPostEventGetShowDangerWoResponsibleEcodeOrganCodeResponseSuccess = ApiAppPostEventGetShowDangerWoResponsibleEcodeOrganCodeResponse[200]
/**
 * @description
 *   获取基础运营平台数据
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventGetShowDangerWoResponsibleEcodeOrganCode = (option?: DeepPartial<ApiAppPostEventGetShowDangerWoResponsibleEcodeOrganCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventGetShowDangerWoResponsibleEcodeOrganCodeResponseSuccess>('/event/getShowDangerWoResponsible/:ecode/:organCode', { method: 'post', path: option}, config);

type ApiAppPostEventGetShowDangerWoUserPositionRouteOption = ShowDangerWoUserPositionInput;

/** @description response type for apiAppPostEventGetShowDangerWoUserPositionRoute */
interface ApiAppPostEventGetShowDangerWoUserPositionRouteResponse {
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

 type ApiAppPostEventGetShowDangerWoUserPositionRouteResponseSuccess = ApiAppPostEventGetShowDangerWoUserPositionRouteResponse[200]
/**
 * @description
 *   按照组织查询组织内的全部人员
 * @tags 网格人员接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventGetShowDangerWoUserPositionRoute = (option?: DeepPartial<ApiAppPostEventGetShowDangerWoUserPositionRouteOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventGetShowDangerWoUserPositionRouteResponseSuccess>('/event/getShowDangerWoUser/position/route', { method: 'post', body: option}, config);

type ApiAppGetEventGetShowDangerWoUserCompanyCodeOrganCodeOption = {
    /**
    @description
      companyCode */
    'companyCode': string
    /**
    @description
      organCode */
    'organCode': string
    };

/** @description response type for apiAppGetEventGetShowDangerWoUserCompanyCodeOrganCode */
interface ApiAppGetEventGetShowDangerWoUserCompanyCodeOrganCodeResponse {
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

 type ApiAppGetEventGetShowDangerWoUserCompanyCodeOrganCodeResponseSuccess = ApiAppGetEventGetShowDangerWoUserCompanyCodeOrganCodeResponse[200]
/**
 * @description
 *   按照组织查询组织内的全部人员
 * @tags 网格人员接口
 * @produces *
 */
export const apiAppGetEventGetShowDangerWoUserCompanyCodeOrganCode = (option?: DeepPartial<ApiAppGetEventGetShowDangerWoUserCompanyCodeOrganCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetShowDangerWoUserCompanyCodeOrganCodeResponseSuccess>('/event/getShowDangerWoUser/:companyCode/:organCode', { method: 'get', path: option}, config);

type ApiAppGetEventGetThirdConstructionGlstdmOption = {
    /**
    @description
      glstdm */
    'glstdm': string
    };

/** @description response type for apiAppGetEventGetThirdConstructionGlstdm */
interface ApiAppGetEventGetThirdConstructionGlstdmResponse {
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

 type ApiAppGetEventGetThirdConstructionGlstdmResponseSuccess = ApiAppGetEventGetThirdConstructionGlstdmResponse[200]
/**
 * @description
 *   根据企业查询第三方施工接口
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGetThirdConstructionGlstdm = (option?: DeepPartial<ApiAppGetEventGetThirdConstructionGlstdmOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGetThirdConstructionGlstdmResponseSuccess>('/event/getThirdConstruction/:glstdm', { method: 'get', path: option}, config);

type ApiAppPostEventGoodsListOption = EventGoodsListInput;

/** @description response type for apiAppPostEventGoodsList */
interface ApiAppPostEventGoodsListResponse {
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

 type ApiAppPostEventGoodsListResponseSuccess = ApiAppPostEventGoodsListResponse[200]
/**
 * @description
 *   物资储备库列表
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventGoodsList = (option?: DeepPartial<ApiAppPostEventGoodsListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventGoodsListResponseSuccess>('/event/goods/list', { method: 'post', body: option}, config);

type ApiAppPostEventGroupListOption = EmergencyEventGroupInput;

/** @description response type for apiAppPostEventGroupList */
interface ApiAppPostEventGroupListResponse {
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

 type ApiAppPostEventGroupListResponseSuccess = ApiAppPostEventGroupListResponse[200]
/**
 * @description
 *   分页查询应急事件预案人员关系列表
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventGroupList = (option?: DeepPartial<ApiAppPostEventGroupListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventGroupListResponseSuccess>('/event/groupList', { method: 'post', body: option}, config);

type ApiAppGetEventGroupByIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventGroupByIdId */
interface ApiAppGetEventGroupByIdIdResponse {
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

 type ApiAppGetEventGroupByIdIdResponseSuccess = ApiAppGetEventGroupByIdIdResponse[200]
/**
 * @description
 *   查询应急事件预案人员关系
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventGroupByIdId = (option?: DeepPartial<ApiAppGetEventGroupByIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventGroupByIdIdResponseSuccess>('/event/groupById/:id', { method: 'get', path: option}, config);

type ApiAppPostEventIcomeCustomizeFeedbackOption = IcomeFeedbackTaskInput;

/** @description response type for apiAppPostEventIcomeCustomizeFeedback */
interface ApiAppPostEventIcomeCustomizeFeedbackResponse {
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

 type ApiAppPostEventIcomeCustomizeFeedbackResponseSuccess = ApiAppPostEventIcomeCustomizeFeedbackResponse[200]
/**
 * @description
 *   自定义icome任务反馈
 * @tags emergency-event-icome-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventIcomeCustomizeFeedback = (option?: DeepPartial<ApiAppPostEventIcomeCustomizeFeedbackOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventIcomeCustomizeFeedbackResponseSuccess>('/event/icome/customize/feedback', { method: 'post', body: option}, config);

type ApiAppGetEventIcomeGroupEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetEventIcomeGroupEventId */
interface ApiAppGetEventIcomeGroupEventIdResponse {
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

 type ApiAppGetEventIcomeGroupEventIdResponseSuccess = ApiAppGetEventIcomeGroupEventIdResponse[200]
/**
 * @description
 *   根据事件获取群组信息
 * @tags emergency-event-icome-controller
 * @produces *
 */
export const apiAppGetEventIcomeGroupEventId = (option?: DeepPartial<ApiAppGetEventIcomeGroupEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventIcomeGroupEventIdResponseSuccess>('/event/icome/group/:eventId', { method: 'get', path: option}, config);

type ApiAppPostEventIcomeStatusOption = IcomeInput;

/** @description response type for apiAppPostEventIcomeStatus */
interface ApiAppPostEventIcomeStatusResponse {
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

 type ApiAppPostEventIcomeStatusResponseSuccess = ApiAppPostEventIcomeStatusResponse[200]
/**
 * @description
 *   updateEventIcomeStatus
 * @tags emergency-event-icome-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventIcomeStatus = (option?: DeepPartial<ApiAppPostEventIcomeStatusOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventIcomeStatusResponseSuccess>('/event/icome/status', { method: 'post', body: option}, config);

type ApiAppPostEventIcomeTaskGetByIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppPostEventIcomeTaskGetByIdId */
interface ApiAppPostEventIcomeTaskGetByIdIdResponse {
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

 type ApiAppPostEventIcomeTaskGetByIdIdResponseSuccess = ApiAppPostEventIcomeTaskGetByIdIdResponse[200]
/**
 * @description
 *   任务中心详情查询
 *   任务中心详情查询
 * @tags emergency-event-icome-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventIcomeTaskGetByIdId = (option?: DeepPartial<ApiAppPostEventIcomeTaskGetByIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventIcomeTaskGetByIdIdResponseSuccess>('/event/icome/task/getById/:id', { method: 'post', path: option}, config);

type ApiAppPostEventListOption = EmergencyEventInput;

/** @description response type for apiAppPostEventList */
interface ApiAppPostEventListResponse {
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

 type ApiAppPostEventListResponseSuccess = ApiAppPostEventListResponse[200]
/**
 * @description
 *   分页获取应急列表
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventList = (option?: DeepPartial<ApiAppPostEventListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventListResponseSuccess>('/event/list', { method: 'post', body: option}, config);

type ApiAppPostEventListByUserOption = EmergencySearchByUserInput;

/** @description response type for apiAppPostEventListByUser */
interface ApiAppPostEventListByUserResponse {
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

 type ApiAppPostEventListByUserResponseSuccess = ApiAppPostEventListByUserResponse[200]
/**
 * @description
 *   查询用户关联事件列表（App）
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventListByUser = (option?: DeepPartial<ApiAppPostEventListByUserOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventListByUserResponseSuccess>('/event/listByUser', { method: 'post', body: option}, config);

type ApiAppGetEventMobileGetEvolveListIdItcodeOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    /**
    @description
      itcode */
    'itcode': string
    };

/** @description response type for apiAppGetEventMobileGetEvolveListIdItcode */
interface ApiAppGetEventMobileGetEvolveListIdItcodeResponse {
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

 type ApiAppGetEventMobileGetEvolveListIdItcodeResponseSuccess = ApiAppGetEventMobileGetEvolveListIdItcodeResponse[200]
/**
 * @description
 *   获取节点进展列表（h5）
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventMobileGetEvolveListIdItcode = (option?: DeepPartial<ApiAppGetEventMobileGetEvolveListIdItcodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventMobileGetEvolveListIdItcodeResponseSuccess>('/event/mobile/getEvolveList/:id/:itcode', { method: 'get', path: option}, config);

type ApiAppPostEventMsgTemplateOption = EmergencyMsgInput;

/** @description response type for apiAppPostEventMsgTemplate */
interface ApiAppPostEventMsgTemplateResponse {
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

 type ApiAppPostEventMsgTemplateResponseSuccess = ApiAppPostEventMsgTemplateResponse[200]
/**
 * @description
 *   获取发动短信或电话模板内容
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventMsgTemplate = (option?: DeepPartial<ApiAppPostEventMsgTemplateOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventMsgTemplateResponseSuccess>('/event/msg/template', { method: 'post', body: option}, config);

type ApiAppPostEventNewEmergencyEcodePointOption = {
    /**
    @description
      ecode */
    'ecode': string
    /**
    @description
      point */
    'point': string
    };

/** @description response type for apiAppPostEventNewEmergencyEcodePoint */
interface ApiAppPostEventNewEmergencyEcodePointResponse {
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

 type ApiAppPostEventNewEmergencyEcodePointResponseSuccess = ApiAppPostEventNewEmergencyEcodePointResponse[200]
/**
 * @description
 *   获取基础运营平台数据
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventNewEmergencyEcodePoint = (option?: DeepPartial<ApiAppPostEventNewEmergencyEcodePointOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventNewEmergencyEcodePointResponseSuccess>('/event/newEmergency/:ecode/:point', { method: 'post', path: option}, config);

type ApiAppGetEventPipeDetailOption = {
    /**
    @description
      f */
    'f': string
    /**
    @description
      layerId */
    'layerId': string
    /**
    @description
      objectId */
    'objectId': string
    };

/** @description response type for apiAppGetEventPipeDetail */
interface ApiAppGetEventPipeDetailResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: any
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

 type ApiAppGetEventPipeDetailResponseSuccess = ApiAppGetEventPipeDetailResponse[200]
/**
 * @description
 *   获取爆管分析数据
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventPipeDetail = (option?: DeepPartial<ApiAppGetEventPipeDetailOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventPipeDetailResponseSuccess>('/event/pipe/detail', { method: 'get', query: option}, config);

type ApiAppGetEventPreplanByIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventPreplanByIdId */
interface ApiAppGetEventPreplanByIdIdResponse {
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

 type ApiAppGetEventPreplanByIdIdResponseSuccess = ApiAppGetEventPreplanByIdIdResponse[200]
/**
 * @description
 *   根据事件主键id获取预案详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventPreplanByIdId = (option?: DeepPartial<ApiAppGetEventPreplanByIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventPreplanByIdIdResponseSuccess>('/event/preplanById/:id', { method: 'get', path: option}, config);

type ApiAppPostEventQueryTrafficOption = EmergencyTrafficInput;

/** @description response type for apiAppPostEventQueryTraffic */
interface ApiAppPostEventQueryTrafficResponse {
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

 type ApiAppPostEventQueryTrafficResponseSuccess = ApiAppPostEventQueryTrafficResponse[200]
/**
 * @description
 *   应急人流信息查询
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventQueryTraffic = (option?: DeepPartial<ApiAppPostEventQueryTrafficOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventQueryTrafficResponseSuccess>('/event/queryTraffic', { method: 'post', body: option}, config);

type ApiAppPostEventReceiveByUserOption = EmergencyReciveInput;

/** @description response type for apiAppPostEventReceiveByUser */
interface ApiAppPostEventReceiveByUserResponse {
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

 type ApiAppPostEventReceiveByUserResponseSuccess = ApiAppPostEventReceiveByUserResponse[200]
/**
 * @description
 *   确认接警（App）
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventReceiveByUser = (option?: DeepPartial<ApiAppPostEventReceiveByUserOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventReceiveByUserResponseSuccess>('/event/receiveByUser', { method: 'post', body: option}, config);

type ApiAppPostEventReviewfileAddOption = EmergencyReviewFileInput;

/** @description response type for apiAppPostEventReviewfileAdd */
interface ApiAppPostEventReviewfileAddResponse {
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

 type ApiAppPostEventReviewfileAddResponseSuccess = ApiAppPostEventReviewfileAddResponse[200]
/**
 * @description
 *   复盘文件新增
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventReviewfileAdd = (option?: DeepPartial<ApiAppPostEventReviewfileAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventReviewfileAddResponseSuccess>('/event/reviewfile/add', { method: 'post', body: option}, config);

type ApiAppGetEventReviewfileDeleteIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventReviewfileDeleteId */
interface ApiAppGetEventReviewfileDeleteIdResponse {
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

 type ApiAppGetEventReviewfileDeleteIdResponseSuccess = ApiAppGetEventReviewfileDeleteIdResponse[200]
/**
 * @description
 *   复盘文件删除
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventReviewfileDeleteId = (option?: DeepPartial<ApiAppGetEventReviewfileDeleteIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventReviewfileDeleteIdResponseSuccess>('/event/reviewfile/delete/:id', { method: 'get', path: option}, config);

type ApiAppGetEventReviewfileListEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetEventReviewfileListEventId */
interface ApiAppGetEventReviewfileListEventIdResponse {
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

 type ApiAppGetEventReviewfileListEventIdResponseSuccess = ApiAppGetEventReviewfileListEventIdResponse[200]
/**
 * @description
 *   复盘文件列表
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventReviewfileListEventId = (option?: DeepPartial<ApiAppGetEventReviewfileListEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventReviewfileListEventIdResponseSuccess>('/event/reviewfile/list/:eventId', { method: 'get', path: option}, config);

type ApiAppPostEventSaveStemImgUrlOption = FeedbackImgInput;

/** @description response type for apiAppPostEventSaveStemImgUrl */
interface ApiAppPostEventSaveStemImgUrlResponse {
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

 type ApiAppPostEventSaveStemImgUrlResponseSuccess = ApiAppPostEventSaveStemImgUrlResponse[200]
/**
 * @description
 *   封堵反馈图片存储
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventSaveStemImgUrl = (option?: DeepPartial<ApiAppPostEventSaveStemImgUrlOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventSaveStemImgUrlResponseSuccess>('/event/saveStemImgUrl', { method: 'post', body: option}, config);

type ApiAppPostEventStartOption = EmergencyEventGroupInput;

/** @description response type for apiAppPostEventStart */
interface ApiAppPostEventStartResponse {
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

 type ApiAppPostEventStartResponseSuccess = ApiAppPostEventStartResponse[200]
/**
 * @description
 *   启动应急预案
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventStart = (option?: DeepPartial<ApiAppPostEventStartOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventStartResponseSuccess>('/event/start', { method: 'post', body: option}, config);

type ApiAppPostEventTaskAddOrUpdOption = EventNodeAddOrUpdInput;

/** @description response type for apiAppPostEventTaskAddOrUpd */
interface ApiAppPostEventTaskAddOrUpdResponse {
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

 type ApiAppPostEventTaskAddOrUpdResponseSuccess = ApiAppPostEventTaskAddOrUpdResponse[200]
/**
 * @description
 *   新建和修改  保存为待发布 和立即发布按钮 以及发布任务按钮接口 
 *   新建和修改  保存为待发布 和立即发布按钮 以及发布任务按钮接口  
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTaskAddOrUpd = (option?: DeepPartial<ApiAppPostEventTaskAddOrUpdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTaskAddOrUpdResponseSuccess>('/event/task/addOrUpd', { method: 'post', body: option}, config);

type ApiAppPostEventTaskAddOrUpdPersonOption = Array<EmergencyTaskPersonInput>;

/** @description response type for apiAppPostEventTaskAddOrUpdPerson */
interface ApiAppPostEventTaskAddOrUpdPersonResponse {
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

 type ApiAppPostEventTaskAddOrUpdPersonResponseSuccess = ApiAppPostEventTaskAddOrUpdPersonResponse[200]
/**
 * @description
 *   添加或删除执行人
 *   添加或删除执行人
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTaskAddOrUpdPerson = (option?: DeepPartial<ApiAppPostEventTaskAddOrUpdPersonOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTaskAddOrUpdPersonResponseSuccess>('/event/task/addOrUpdPerson', { method: 'post', body: option}, config);

type ApiAppPostEventTaskCancelTaskOption = CancelTaskInput;

/** @description response type for apiAppPostEventTaskCancelTask */
interface ApiAppPostEventTaskCancelTaskResponse {
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

 type ApiAppPostEventTaskCancelTaskResponseSuccess = ApiAppPostEventTaskCancelTaskResponse[200]
/**
 * @description
 *   取消任务
 *   取消任务
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTaskCancelTask = (option?: DeepPartial<ApiAppPostEventTaskCancelTaskOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTaskCancelTaskResponseSuccess>('/event/task/cancelTask', { method: 'post', body: option}, config);

/** @description response type for apiAppPostEventTaskConfirmDetection */
interface ApiAppPostEventTaskConfirmDetectionResponse {
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

 type ApiAppPostEventTaskConfirmDetectionResponseSuccess = ApiAppPostEventTaskConfirmDetectionResponse[200]
/**
 * @description
 *   险情确认任务检测（滞留检测提醒（参考内部应急需求V1.9.0））
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTaskConfirmDetection = (config?: AxiosRequestConfig) => requester<ApiAppPostEventTaskConfirmDetectionResponseSuccess>('/event/task/confirm/detection', { method: 'post'}, config);

type ApiAppPostEventTaskCustomizeFeedbackOption = IcomeFeedbackTaskInput;

/** @description response type for apiAppPostEventTaskCustomizeFeedback */
interface ApiAppPostEventTaskCustomizeFeedbackResponse {
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

 type ApiAppPostEventTaskCustomizeFeedbackResponseSuccess = ApiAppPostEventTaskCustomizeFeedbackResponse[200]
/**
 * @description
 *   自定义icome任务反馈
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTaskCustomizeFeedback = (option?: DeepPartial<ApiAppPostEventTaskCustomizeFeedbackOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTaskCustomizeFeedbackResponseSuccess>('/event/task/customize/feedback', { method: 'post', body: option}, config);

type ApiAppGetEventTaskDelIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventTaskDelId */
interface ApiAppGetEventTaskDelIdResponse {
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

 type ApiAppGetEventTaskDelIdResponseSuccess = ApiAppGetEventTaskDelIdResponse[200]
/**
 * @description
 *   任务中心删除接口
 * @tags 任务中心对应接口
 * @produces *
 */
export const apiAppGetEventTaskDelId = (option?: DeepPartial<ApiAppGetEventTaskDelIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventTaskDelIdResponseSuccess>('/event/task/del/:id', { method: 'get', path: option}, config);

type ApiAppPostEventTaskGetByIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppPostEventTaskGetByIdId */
interface ApiAppPostEventTaskGetByIdIdResponse {
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

 type ApiAppPostEventTaskGetByIdIdResponseSuccess = ApiAppPostEventTaskGetByIdIdResponse[200]
/**
 * @description
 *   任务中心详情查询
 *   任务中心详情查询
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTaskGetByIdId = (option?: DeepPartial<ApiAppPostEventTaskGetByIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTaskGetByIdIdResponseSuccess>('/event/task/getById/:id', { method: 'post', path: option}, config);

type ApiAppGetEventTaskGetNodeByEventIdEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetEventTaskGetNodeByEventIdEventId */
interface ApiAppGetEventTaskGetNodeByEventIdEventIdResponse {
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

 type ApiAppGetEventTaskGetNodeByEventIdEventIdResponseSuccess = ApiAppGetEventTaskGetNodeByEventIdEventIdResponse[200]
/**
 * @description
 *   获取事件节点接口 
 *   获取事件节点接口 
 * @tags 任务中心对应接口
 * @produces *
 */
export const apiAppGetEventTaskGetNodeByEventIdEventId = (option?: DeepPartial<ApiAppGetEventTaskGetNodeByEventIdEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventTaskGetNodeByEventIdEventIdResponseSuccess>('/event/task/getNodeByEventId/:eventId', { method: 'get', path: option}, config);

type ApiAppGetEventTaskHandleIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventTaskHandleId */
interface ApiAppGetEventTaskHandleIdResponse {
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

 type ApiAppGetEventTaskHandleIdResponseSuccess = ApiAppGetEventTaskHandleIdResponse[200]
/**
 * @description
 *   任务督办
 *   任务督办
 * @tags 任务中心对应接口
 * @produces *
 */
export const apiAppGetEventTaskHandleId = (option?: DeepPartial<ApiAppGetEventTaskHandleIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventTaskHandleIdResponseSuccess>('/event/task/handle/:id', { method: 'get', path: option}, config);

type ApiAppPostEventTaskListOption = EmergencyTaskListInput;

/** @description response type for apiAppPostEventTaskList */
interface ApiAppPostEventTaskListResponse {
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

 type ApiAppPostEventTaskListResponseSuccess = ApiAppPostEventTaskListResponse[200]
/**
 * @description
 *   任务中心列表查询
 *   任务中心列表查询
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTaskList = (option?: DeepPartial<ApiAppPostEventTaskListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTaskListResponseSuccess>('/event/task/list', { method: 'post', body: option}, config);

type ApiAppPostEventTaskPublishOption = PublishInput;

/** @description response type for apiAppPostEventTaskPublish */
interface ApiAppPostEventTaskPublishResponse {
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

 type ApiAppPostEventTaskPublishResponseSuccess = ApiAppPostEventTaskPublishResponse[200]
/**
 * @description
 *   发布任务接口 列表发布按钮和一键发布所有任务按钮接口
 *   发布任务接口 列表发布按钮和一键发布所有任务按钮接口
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTaskPublish = (option?: DeepPartial<ApiAppPostEventTaskPublishOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTaskPublishResponseSuccess>('/event/task/publish', { method: 'post', body: option}, config);

type ApiAppPostEventTaskStatusNumberOption = EmergencyTaskInput;

/** @description response type for apiAppPostEventTaskStatusNumber */
interface ApiAppPostEventTaskStatusNumberResponse {
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

 type ApiAppPostEventTaskStatusNumberResponseSuccess = ApiAppPostEventTaskStatusNumberResponse[200]
/**
 * @description
 *   各任务状态数量
 *   各任务状态数量
 * @tags 任务中心对应接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTaskStatusNumber = (option?: DeepPartial<ApiAppPostEventTaskStatusNumberOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTaskStatusNumberResponseSuccess>('/event/task/status/number', { method: 'post', body: option}, config);

type ApiAppGetEventTaskTypeEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetEventTaskTypeEventId */
interface ApiAppGetEventTaskTypeEventIdResponse {
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

 type ApiAppGetEventTaskTypeEventIdResponseSuccess = ApiAppGetEventTaskTypeEventIdResponse[200]
/**
 * @description
 *   任务类型列表
 * @tags 任务中心对应接口
 * @produces *
 */
export const apiAppGetEventTaskTypeEventId = (option?: DeepPartial<ApiAppGetEventTaskTypeEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventTaskTypeEventIdResponseSuccess>('/event/task/type/:eventId', { method: 'get', path: option}, config);

type ApiAppPostEventTerminateOption = EmergencyEventTerminationInput;

/** @description response type for apiAppPostEventTerminate */
interface ApiAppPostEventTerminateResponse {
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

 type ApiAppPostEventTerminateResponseSuccess = ApiAppPostEventTerminateResponse[200]
/**
 * @description
 *   应急终止
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTerminate = (option?: DeepPartial<ApiAppPostEventTerminateOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTerminateResponseSuccess>('/event/terminate', { method: 'post', body: option}, config);

type ApiAppPostEventTerminateMisreportOption = EmergencyEventConfirmInput;

/** @description response type for apiAppPostEventTerminateMisreport */
interface ApiAppPostEventTerminateMisreportResponse {
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

 type ApiAppPostEventTerminateMisreportResponseSuccess = ApiAppPostEventTerminateMisreportResponse[200]
/**
 * @description
 *   终止误报事件
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTerminateMisreport = (option?: DeepPartial<ApiAppPostEventTerminateMisreportOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTerminateMisreportResponseSuccess>('/event/terminateMisreport', { method: 'post', body: option}, config);

type ApiAppPostEventTestKafkaProducerOption = {
    [propertyName: string]: any
    };

/** @description response type for apiAppPostEventTestKafkaProducer */
interface ApiAppPostEventTestKafkaProducerResponse {
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

 type ApiAppPostEventTestKafkaProducerResponseSuccess = ApiAppPostEventTestKafkaProducerResponse[200]
/**
 * @description
 *   testKafkaProducer
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventTestKafkaProducer = (option?: DeepPartial<ApiAppPostEventTestKafkaProducerOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventTestKafkaProducerResponseSuccess>('/event/testKafkaProducer', { method: 'post', body: option}, config);

type ApiAppPostEventUnNormalEndOption = EventUnNormalEndInput;

/** @description response type for apiAppPostEventUnNormalEnd */
interface ApiAppPostEventUnNormalEndResponse {
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

 type ApiAppPostEventUnNormalEndResponseSuccess = ApiAppPostEventUnNormalEndResponse[200]
/**
 * @description
 *   事件非正常结束反馈
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventUnNormalEnd = (option?: DeepPartial<ApiAppPostEventUnNormalEndOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventUnNormalEndResponseSuccess>('/event/unNormal/end', { method: 'post', body: option}, config);

type ApiAppPostEventUnfinishNodeOption = EventIcomeInput;

/** @description response type for apiAppPostEventUnfinishNode */
interface ApiAppPostEventUnfinishNodeResponse {
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

 type ApiAppPostEventUnfinishNodeResponseSuccess = ApiAppPostEventUnfinishNodeResponse[200]
/**
 * @description
 *   根据群组id获取事件未完成节点
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventUnfinishNode = (option?: DeepPartial<ApiAppPostEventUnfinishNodeOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventUnfinishNodeResponseSuccess>('/event/unfinish/node', { method: 'post', body: option}, config);

type ApiAppPostEventVehicleTrackOption = VehicleTrackInput;

/** @description response type for apiAppPostEventVehicleTrack */
interface ApiAppPostEventVehicleTrackResponse {
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

 type ApiAppPostEventVehicleTrackResponseSuccess = ApiAppPostEventVehicleTrackResponse[200]
/**
 * @description
 *   车辆轨迹信息
 * @tags 事件管理接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventVehicleTrack = (option?: DeepPartial<ApiAppPostEventVehicleTrackOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventVehicleTrackResponseSuccess>('/event/vehicle/track', { method: 'post', body: option}, config);

type ApiAppGetEventVehicleEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetEventVehicleEventId */
interface ApiAppGetEventVehicleEventIdResponse {
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

 type ApiAppGetEventVehicleEventIdResponseSuccess = ApiAppGetEventVehicleEventIdResponse[200]
/**
 * @description
 *   事件调度车辆列表
 * @tags 事件管理接口
 * @produces *
 */
export const apiAppGetEventVehicleEventId = (option?: DeepPartial<ApiAppGetEventVehicleEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventVehicleEventIdResponseSuccess>('/event/vehicle/:eventId', { method: 'get', path: option}, config);

type ApiAppPostEventVideoAddOption = EmergencyEventVideoInput;

/** @description response type for apiAppPostEventVideoAdd */
interface ApiAppPostEventVideoAddResponse {
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

 type ApiAppPostEventVideoAddResponseSuccess = ApiAppPostEventVideoAddResponse[200]
/**
 * @description
 *   保存应急事件录屏文件url
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventVideoAdd = (option?: DeepPartial<ApiAppPostEventVideoAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventVideoAddResponseSuccess>('/event/video/add', { method: 'post', body: option}, config);

type ApiAppPostEventVideoUpdateOption = Array<EmergencyEventVideoInput>;

/** @description response type for apiAppPostEventVideoUpdate */
interface ApiAppPostEventVideoUpdateResponse {
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

 type ApiAppPostEventVideoUpdateResponseSuccess = ApiAppPostEventVideoUpdateResponse[200]
/**
 * @description
 *   更新应急事件设备列表
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostEventVideoUpdate = (option?: DeepPartial<ApiAppPostEventVideoUpdateOption>, config?: AxiosRequestConfig) => requester<ApiAppPostEventVideoUpdateResponseSuccess>('/event/video/update', { method: 'post', body: option}, config);

type ApiAppGetEventVideoIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetEventVideoId */
interface ApiAppGetEventVideoIdResponse {
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

 type ApiAppGetEventVideoIdResponseSuccess = ApiAppGetEventVideoIdResponse[200]
/**
 * @description
 *   获取事件影像资料
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetEventVideoId = (option?: DeepPartial<ApiAppGetEventVideoIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetEventVideoIdResponseSuccess>('/event/video/:id', { method: 'get', path: option}, config);

type ApiAppPostExpertGroupListOption = ExpertGroupQueryInput;

/** @description response type for apiAppPostExpertGroupList */
interface ApiAppPostExpertGroupListResponse {
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

 type ApiAppPostExpertGroupListResponseSuccess = ApiAppPostExpertGroupListResponse[200]
/**
 * @description
 *   查询专家群组
 * @tags 专家与联系人配置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostExpertGroupList = (option?: DeepPartial<ApiAppPostExpertGroupListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostExpertGroupListResponseSuccess>('/expert/group/list', { method: 'post', body: option}, config);

type ApiAppPostExpertGroupSaveOption = ExpertGroupSavedReqInput;

/** @description response type for apiAppPostExpertGroupSave */
interface ApiAppPostExpertGroupSaveResponse {
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

 type ApiAppPostExpertGroupSaveResponseSuccess = ApiAppPostExpertGroupSaveResponse[200]
/**
 * @description
 *   保存专家群组
 * @tags 专家与联系人配置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostExpertGroupSave = (option?: DeepPartial<ApiAppPostExpertGroupSaveOption>, config?: AxiosRequestConfig) => requester<ApiAppPostExpertGroupSaveResponseSuccess>('/expert/group/save', { method: 'post', body: option}, config);

type ApiAppPostExpertListOption = ExpertQueryInput;

/** @description response type for apiAppPostExpertList */
interface ApiAppPostExpertListResponse {
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

 type ApiAppPostExpertListResponseSuccess = ApiAppPostExpertListResponse[200]
/**
 * @description
 *   查询专家
 * @tags 专家与联系人配置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostExpertList = (option?: DeepPartial<ApiAppPostExpertListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostExpertListResponseSuccess>('/expert/list', { method: 'post', body: option}, config);

type ApiAppPostFixedGasSupplyEmergencyDispatchOption = SupplyGasInput;

/** @description response type for apiAppPostFixedGasSupplyEmergencyDispatch */
interface ApiAppPostFixedGasSupplyEmergencyDispatchResponse {
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

 type ApiAppPostFixedGasSupplyEmergencyDispatchResponseSuccess = ApiAppPostFixedGasSupplyEmergencyDispatchResponse[200]
/**
 * @description
 *   应急撬调配
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostFixedGasSupplyEmergencyDispatch = (option?: DeepPartial<ApiAppPostFixedGasSupplyEmergencyDispatchOption>, config?: AxiosRequestConfig) => requester<ApiAppPostFixedGasSupplyEmergencyDispatchResponseSuccess>('/fixed/gas/supply/emergency/dispatch', { method: 'post', body: option}, config);

type ApiAppGetFixedGasSupplyIdOption = {
    /**
    @description
      id */
    'id': string
    };

/** @description response type for apiAppGetFixedGasSupplyId */
interface ApiAppGetFixedGasSupplyIdResponse {
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

 type ApiAppGetFixedGasSupplyIdResponseSuccess = ApiAppGetFixedGasSupplyIdResponse[200]
/**
 * @description
 *   固定补气点详情
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetFixedGasSupplyId = (option?: DeepPartial<ApiAppGetFixedGasSupplyIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetFixedGasSupplyIdResponseSuccess>('/fixed/gas/supply/:id', { method: 'get', path: option}, config);

type ApiAppPostFocusByCompanyCodeOption = FocusAreaDetailsInput;

/** @description response type for apiAppPostFocusByCompanyCode */
interface ApiAppPostFocusByCompanyCodeResponse {
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

 type ApiAppPostFocusByCompanyCodeResponseSuccess = ApiAppPostFocusByCompanyCodeResponse[200]
/**
 * @description
 *   获取对应公司下的重点区域
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostFocusByCompanyCode = (option?: DeepPartial<ApiAppPostFocusByCompanyCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppPostFocusByCompanyCodeResponseSuccess>('/focus/byCompanyCode', { method: 'post', body: option}, config);

type ApiAppPostGasSupplyListOption = SupplyGasInput;

/** @description response type for apiAppPostGasSupplyList */
interface ApiAppPostGasSupplyListResponse {
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

 type ApiAppPostGasSupplyListResponseSuccess = ApiAppPostGasSupplyListResponse[200]
/**
 * @description
 *   补气点列表
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGasSupplyList = (option?: DeepPartial<ApiAppPostGasSupplyListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGasSupplyListResponseSuccess>('/gas/supply/list', { method: 'post', body: option}, config);

/** @description response type for apiAppGetGasTask */
interface ApiAppGetGasTaskResponse {
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

 type ApiAppGetGasTaskResponseSuccess = ApiAppGetGasTaskResponse[200]
/**
 * @description
 *   gisTask
 * @tags task-controller
 * @produces *
 */
export const apiAppGetGasTask = (config?: AxiosRequestConfig) => requester<ApiAppGetGasTaskResponseSuccess>('/gasTask', { method: 'get'}, config);

type ApiAppGetGetGasEventCodeOption = {
    /**
    @description
      eventCode */
    'eventCode': string
    };

/** @description response type for apiAppGetGetGasEventCode */
interface ApiAppGetGetGasEventCodeResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: string
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

 type ApiAppGetGetGasEventCodeResponseSuccess = ApiAppGetGetGasEventCodeResponse[200]
/**
 * @description
 *   getGasId
 * @tags dispatch-controller
 * @produces *
 */
export const apiAppGetGetGasEventCode = (option?: DeepPartial<ApiAppGetGetGasEventCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetGetGasEventCodeResponseSuccess>('/get/gas/:eventCode', { method: 'get', path: option}, config);

type ApiAppGetGetLnglatRegionAddressOption = {
    /**
    @description
      address */
    'address': string
    /**
    @description
      region */
    'region': string
    };

/** @description response type for apiAppGetGetLnglatRegionAddress */
interface ApiAppGetGetLnglatRegionAddressResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: number
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

 type ApiAppGetGetLnglatRegionAddressResponseSuccess = ApiAppGetGetLnglatRegionAddressResponse[200]
/**
 * @description
 *   addressToCoordinates
 * @tags test-controller
 * @produces *
 */
export const apiAppGetGetLnglatRegionAddress = (option?: DeepPartial<ApiAppGetGetLnglatRegionAddressOption>, config?: AxiosRequestConfig) => requester<ApiAppGetGetLnglatRegionAddressResponseSuccess>('/get/lnglat/:region/:address', { method: 'get', path: option}, config);

type ApiAppGetGetTransportationEventCodeOption = {
    /**
    @description
      eventCode */
    'eventCode': string
    };

/** @description response type for apiAppGetGetTransportationEventCode */
interface ApiAppGetGetTransportationEventCodeResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: number
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

 type ApiAppGetGetTransportationEventCodeResponseSuccess = ApiAppGetGetTransportationEventCodeResponse[200]
/**
 * @description
 *   getTransportation
 * @tags dispatch-controller
 * @produces *
 */
export const apiAppGetGetTransportationEventCode = (option?: DeepPartial<ApiAppGetGetTransportationEventCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetGetTransportationEventCodeResponseSuccess>('/get/transportation/:eventCode', { method: 'get', path: option}, config);

/** @description response type for apiAppGetGetCarLocation */
interface ApiAppGetGetCarLocationResponse {
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

 type ApiAppGetGetCarLocationResponseSuccess = ApiAppGetGetCarLocationResponse[200]
/**
 * @description
 *   getCarLocation
 * @tags task-controller
 * @produces *
 */
export const apiAppGetGetCarLocation = (config?: AxiosRequestConfig) => requester<ApiAppGetGetCarLocationResponseSuccess>('/getCarLocation', { method: 'get'}, config);

/** @description response type for apiAppGetGetTokenTest */
interface ApiAppGetGetTokenTestResponse {
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

 type ApiAppGetGetTokenTestResponseSuccess = ApiAppGetGetTokenTestResponse[200]
/**
 * @description
 *   getTokenTest
 * @tags 事件管理接口
 * @produces *
 */
export const apiAppGetGetTokenTest = (config?: AxiosRequestConfig) => requester<ApiAppGetGetTokenTestResponseSuccess>('/getTokenTest', { method: 'get'}, config);

type ApiAppGetGetVehicleLocationEcodeOption = {
    /**
    @description
      ecode */
    'ecode': string
    };

/** @description response type for apiAppGetGetVehicleLocationEcode */
interface ApiAppGetGetVehicleLocationEcodeResponse {
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

 type ApiAppGetGetVehicleLocationEcodeResponseSuccess = ApiAppGetGetVehicleLocationEcodeResponse[200]
/**
 * @description
 *   根据实体获取车辆位置信息
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetGetVehicleLocationEcode = (option?: DeepPartial<ApiAppGetGetVehicleLocationEcodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetGetVehicleLocationEcodeResponseSuccess>('/getVehicleLocation/:ecode', { method: 'get', path: option}, config);

type ApiAppGetGetVehicleMapInfoIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetGetVehicleMapInfoId */
interface ApiAppGetGetVehicleMapInfoIdResponse {
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

 type ApiAppGetGetVehicleMapInfoIdResponseSuccess = ApiAppGetGetVehicleMapInfoIdResponse[200]
/**
 * @description
 *   获取车辆地图上显示的信息
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetGetVehicleMapInfoId = (option?: DeepPartial<ApiAppGetGetVehicleMapInfoIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetGetVehicleMapInfoIdResponseSuccess>('/getVehicleMapInfo/:id', { method: 'get', path: option}, config);

type ApiAppGetGisGasLayerLayerIdOption = {
    /**
    @description
      layerId */
    'layerId': string
    };

/** @description response type for apiAppGetGisGasLayerLayerId */
interface ApiAppGetGisGasLayerLayerIdResponse {
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

 type ApiAppGetGisGasLayerLayerIdResponseSuccess = ApiAppGetGisGasLayerLayerIdResponse[200]
/**
 * @description
 *   固定补气点数据查询
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetGisGasLayerLayerId = (option?: DeepPartial<ApiAppGetGisGasLayerLayerIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetGisGasLayerLayerIdResponseSuccess>('/gis/gas/layer/:layerId', { method: 'get', path: option}, config);

type ApiAppPostGoodsOption = EventGoodsListInput;

/** @description response type for apiAppPostGoods */
interface ApiAppPostGoodsResponse {
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

 type ApiAppPostGoodsResponseSuccess = ApiAppPostGoodsResponse[200]
/**
 * @description
 *   获取全部储备库
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoods = (option?: DeepPartial<ApiAppPostGoodsOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsResponseSuccess>('/goods', { method: 'post', body: option}, config);

type ApiAppPostGoodsAddOption = GoodsInput;

/** @description response type for apiAppPostGoodsAdd */
interface ApiAppPostGoodsAddResponse {
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

 type ApiAppPostGoodsAddResponseSuccess = ApiAppPostGoodsAddResponse[200]
/**
 * @description
 *   应急物资库新增
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsAdd = (option?: DeepPartial<ApiAppPostGoodsAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsAddResponseSuccess>('/goods/add', { method: 'post', body: option}, config);

type ApiAppPostGoodsDelOption = GoodsDelInput;

/** @description response type for apiAppPostGoodsDel */
interface ApiAppPostGoodsDelResponse {
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

 type ApiAppPostGoodsDelResponseSuccess = ApiAppPostGoodsDelResponse[200]
/**
 * @description
 *   应急物资库删除
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsDel = (option?: DeepPartial<ApiAppPostGoodsDelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsDelResponseSuccess>('/goods/del', { method: 'post', body: option}, config);

type ApiAppPostGoodsDeviceAddOption = GoodsDeviceInput;

/** @description response type for apiAppPostGoodsDeviceAdd */
interface ApiAppPostGoodsDeviceAddResponse {
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

 type ApiAppPostGoodsDeviceAddResponseSuccess = ApiAppPostGoodsDeviceAddResponse[200]
/**
 * @description
 *   物资装备清单新增
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsDeviceAdd = (option?: DeepPartial<ApiAppPostGoodsDeviceAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsDeviceAddResponseSuccess>('/goods/device/add', { method: 'post', body: option}, config);

type ApiAppPostGoodsDeviceBatchDelOption = GoodsDeviceBatchDelInput;

/** @description response type for apiAppPostGoodsDeviceBatchDel */
interface ApiAppPostGoodsDeviceBatchDelResponse {
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

 type ApiAppPostGoodsDeviceBatchDelResponseSuccess = ApiAppPostGoodsDeviceBatchDelResponse[200]
/**
 * @description
 *   物资装备清单批量删除
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsDeviceBatchDel = (option?: DeepPartial<ApiAppPostGoodsDeviceBatchDelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsDeviceBatchDelResponseSuccess>('/goods/device/batch/del', { method: 'post', body: option}, config);

type ApiAppPostGoodsDeviceCountOption = GoodsDeviceListInput;

/** @description response type for apiAppPostGoodsDeviceCount */
interface ApiAppPostGoodsDeviceCountResponse {
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

 type ApiAppPostGoodsDeviceCountResponseSuccess = ApiAppPostGoodsDeviceCountResponse[200]
/**
 * @description
 *   物资装备清单列表
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsDeviceCount = (option?: DeepPartial<ApiAppPostGoodsDeviceCountOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsDeviceCountResponseSuccess>('/goods/device/count', { method: 'post', body: option}, config);

type ApiAppPostGoodsDeviceDelOption = GoodsDeviceDelInput;

/** @description response type for apiAppPostGoodsDeviceDel */
interface ApiAppPostGoodsDeviceDelResponse {
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

 type ApiAppPostGoodsDeviceDelResponseSuccess = ApiAppPostGoodsDeviceDelResponse[200]
/**
 * @description
 *   物资装备清单删除
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsDeviceDel = (option?: DeepPartial<ApiAppPostGoodsDeviceDelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsDeviceDelResponseSuccess>('/goods/device/del', { method: 'post', body: option}, config);

type ApiAppPostGoodsDeviceDetailDeviceIdOption = {
    /**
    @description
      deviceId
    @format int64 */
    'deviceId': number
    };

/** @description response type for apiAppPostGoodsDeviceDetailDeviceId */
interface ApiAppPostGoodsDeviceDetailDeviceIdResponse {
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

 type ApiAppPostGoodsDeviceDetailDeviceIdResponseSuccess = ApiAppPostGoodsDeviceDetailDeviceIdResponse[200]
/**
 * @description
 *   物资装备清单详情
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsDeviceDetailDeviceId = (option?: DeepPartial<ApiAppPostGoodsDeviceDetailDeviceIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsDeviceDetailDeviceIdResponseSuccess>('/goods/device/detail/:deviceId', { method: 'post', path: option}, config);

/** @description response type for apiAppGetGoodsDeviceDict */
interface ApiAppGetGoodsDeviceDictResponse {
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

 type ApiAppGetGoodsDeviceDictResponseSuccess = ApiAppGetGoodsDeviceDictResponse[200]
/**
 * @description
 *   获取物资装备全部类别
 * @tags 应急物资接口
 * @produces *
 */
export const apiAppGetGoodsDeviceDict = (config?: AxiosRequestConfig) => requester<ApiAppGetGoodsDeviceDictResponseSuccess>('/goods/device/dict', { method: 'get'}, config);

type ApiAppPostGoodsDeviceEditOption = GoodsDeviceInput;

/** @description response type for apiAppPostGoodsDeviceEdit */
interface ApiAppPostGoodsDeviceEditResponse {
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

 type ApiAppPostGoodsDeviceEditResponseSuccess = ApiAppPostGoodsDeviceEditResponse[200]
/**
 * @description
 *   物资装备清单编辑
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsDeviceEdit = (option?: DeepPartial<ApiAppPostGoodsDeviceEditOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsDeviceEditResponseSuccess>('/goods/device/edit', { method: 'post', body: option}, config);

type ApiAppPostGoodsDeviceListOption = GoodsDeviceListInput;

/** @description response type for apiAppPostGoodsDeviceList */
interface ApiAppPostGoodsDeviceListResponse {
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

 type ApiAppPostGoodsDeviceListResponseSuccess = ApiAppPostGoodsDeviceListResponse[200]
/**
 * @description
 *   物资装备清单列表
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsDeviceList = (option?: DeepPartial<ApiAppPostGoodsDeviceListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsDeviceListResponseSuccess>('/goods/device/list', { method: 'post', body: option}, config);

type ApiAppPostGoodsEditOption = GoodsInput;

/** @description response type for apiAppPostGoodsEdit */
interface ApiAppPostGoodsEditResponse {
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

 type ApiAppPostGoodsEditResponseSuccess = ApiAppPostGoodsEditResponse[200]
/**
 * @description
 *   应急物资库编辑
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsEdit = (option?: DeepPartial<ApiAppPostGoodsEditOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsEditResponseSuccess>('/goods/edit', { method: 'post', body: option}, config);

type ApiAppPostGoodsListOption = GoodsListInput;

/** @description response type for apiAppPostGoodsList */
interface ApiAppPostGoodsListResponse {
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

 type ApiAppPostGoodsListResponseSuccess = ApiAppPostGoodsListResponse[200]
/**
 * @description
 *   应急物资库列表
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsList = (option?: DeepPartial<ApiAppPostGoodsListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsListResponseSuccess>('/goods/list', { method: 'post', body: option}, config);

type ApiAppPostGoodsGoodsIdOption = {
    /**
    @description
      goodsId
    @format int64 */
    'goodsId': number
    };

/** @description response type for apiAppPostGoodsGoodsId */
interface ApiAppPostGoodsGoodsIdResponse {
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

 type ApiAppPostGoodsGoodsIdResponseSuccess = ApiAppPostGoodsGoodsIdResponse[200]
/**
 * @description
 *   应急物资库详情
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostGoodsGoodsId = (option?: DeepPartial<ApiAppPostGoodsGoodsIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostGoodsGoodsIdResponseSuccess>('/goods/:goodsId', { method: 'post', path: option}, config);

type ApiAppPostIcomeProgressOption = EmergencyIcomeMsgInput;

/** @description response type for apiAppPostIcomeProgress */
interface ApiAppPostIcomeProgressResponse {
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

 type ApiAppPostIcomeProgressResponseSuccess = ApiAppPostIcomeProgressResponse[200]
/**
 * @description
 *   sendIcomeProgress
 * @tags icome-progress-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostIcomeProgress = (option?: DeepPartial<ApiAppPostIcomeProgressOption>, config?: AxiosRequestConfig) => requester<ApiAppPostIcomeProgressResponseSuccess>('/icome/progress', { method: 'post', body: option}, config);

type ApiAppPostLngLatQueryLngLatToAddressOption = LngLatInput;

/** @description response type for apiAppPostLngLatQueryLngLatToAddress */
interface ApiAppPostLngLatQueryLngLatToAddressResponse {
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

 type ApiAppPostLngLatQueryLngLatToAddressResponseSuccess = ApiAppPostLngLatQueryLngLatToAddressResponse[200]
/**
 * @description
 *   queryLngLatToAddress
 * @tags map-points-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostLngLatQueryLngLatToAddress = (option?: DeepPartial<ApiAppPostLngLatQueryLngLatToAddressOption>, config?: AxiosRequestConfig) => requester<ApiAppPostLngLatQueryLngLatToAddressResponseSuccess>('/lngLat/queryLngLatToAddress', { method: 'post', body: option}, config);

type ApiAppGetLocationCarDispatchCpmoCodeEventCodeOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    /**
    @description
      eventCode */
    'eventCode': string
    };

/** @description response type for apiAppGetLocationCarDispatchCpmoCodeEventCode */
interface ApiAppGetLocationCarDispatchCpmoCodeEventCodeResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: any
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

 type ApiAppGetLocationCarDispatchCpmoCodeEventCodeResponseSuccess = ApiAppGetLocationCarDispatchCpmoCodeEventCodeResponse[200]
/**
 * @description
 *   获取车辆已调度图层接口
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetLocationCarDispatchCpmoCodeEventCode = (option?: DeepPartial<ApiAppGetLocationCarDispatchCpmoCodeEventCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetLocationCarDispatchCpmoCodeEventCodeResponseSuccess>('/location/car/dispatch/:cpmoCode/:eventCode', { method: 'get', path: option}, config);

type ApiAppGetLocationCarCpmoCodeEventCodeOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    /**
    @description
      eventCode */
    'eventCode': string
    };

/** @description response type for apiAppGetLocationCarCpmoCodeEventCode */
interface ApiAppGetLocationCarCpmoCodeEventCodeResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: any
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

 type ApiAppGetLocationCarCpmoCodeEventCodeResponseSuccess = ApiAppGetLocationCarCpmoCodeEventCodeResponse[200]
/**
 * @description
 *   获取车辆图层接口
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetLocationCarCpmoCodeEventCode = (option?: DeepPartial<ApiAppGetLocationCarCpmoCodeEventCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetLocationCarCpmoCodeEventCodeResponseSuccess>('/location/car/:cpmoCode/:eventCode', { method: 'get', path: option}, config);

type ApiAppGetLocationGasCpmoCodeEventCodeOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    /**
    @description
      eventCode */
    'eventCode': string
    };

/** @description response type for apiAppGetLocationGasCpmoCodeEventCode */
interface ApiAppGetLocationGasCpmoCodeEventCodeResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: any
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

 type ApiAppGetLocationGasCpmoCodeEventCodeResponseSuccess = ApiAppGetLocationGasCpmoCodeEventCodeResponse[200]
/**
 * @description
 *   获取补气点图层接口
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetLocationGasCpmoCodeEventCode = (option?: DeepPartial<ApiAppGetLocationGasCpmoCodeEventCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetLocationGasCpmoCodeEventCodeResponseSuccess>('/location/gas/:cpmoCode/:eventCode', { method: 'get', path: option}, config);

type ApiAppPostLocationGetResourceOption = DispatchResourceInput;

/** @description response type for apiAppPostLocationGetResource */
interface ApiAppPostLocationGetResourceResponse {
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

 type ApiAppPostLocationGetResourceResponseSuccess = ApiAppPostLocationGetResourceResponse[200]
/**
 * @description
 *   获取资源调配信息 图层接口
 * @tags map-points-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostLocationGetResource = (option?: DeepPartial<ApiAppPostLocationGetResourceOption>, config?: AxiosRequestConfig) => requester<ApiAppPostLocationGetResourceResponseSuccess>('/location/getResource', { method: 'post', body: option}, config);

type ApiAppGetLocationGetTrackEcodeBtimeEtimeOption = {
    /**
    @description
      btime */
    'btime': string
    /**
    @description
      ecode */
    'ecode': string
    /**
    @description
      etime */
    'etime': string
    };

/** @description response type for apiAppGetLocationGetTrackEcodeBtimeEtime */
interface ApiAppGetLocationGetTrackEcodeBtimeEtimeResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: any
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

 type ApiAppGetLocationGetTrackEcodeBtimeEtimeResponseSuccess = ApiAppGetLocationGetTrackEcodeBtimeEtimeResponse[200]
/**
 * @description
 *   获取车辆轨迹接口
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetLocationGetTrackEcodeBtimeEtime = (option?: DeepPartial<ApiAppGetLocationGetTrackEcodeBtimeEtimeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetLocationGetTrackEcodeBtimeEtimeResponseSuccess>('/location/getTrack/:ecode/:btime/:etime', { method: 'get', path: option}, config);

type ApiAppGetLocationPersonDispatchCpmoCodeEventCodeDistanceOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    /**
    @description
      distance */
    'distance': string
    /**
    @description
      eventCode */
    'eventCode': string
    };

/** @description response type for apiAppGetLocationPersonDispatchCpmoCodeEventCodeDistance */
interface ApiAppGetLocationPersonDispatchCpmoCodeEventCodeDistanceResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: any
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

 type ApiAppGetLocationPersonDispatchCpmoCodeEventCodeDistanceResponseSuccess = ApiAppGetLocationPersonDispatchCpmoCodeEventCodeDistanceResponse[200]
/**
 * @description
 *   获取人员已调度图层接口
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetLocationPersonDispatchCpmoCodeEventCodeDistance = (option?: DeepPartial<ApiAppGetLocationPersonDispatchCpmoCodeEventCodeDistanceOption>, config?: AxiosRequestConfig) => requester<ApiAppGetLocationPersonDispatchCpmoCodeEventCodeDistanceResponseSuccess>('/location/person/dispatch/:cpmoCode/:eventCode/:distance', { method: 'get', path: option}, config);

type ApiAppGetLocationPersonCpmoCodeEventCodeDistanceOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    /**
    @description
      distance */
    'distance': string
    /**
    @description
      eventCode */
    'eventCode': string
    };

/** @description response type for apiAppGetLocationPersonCpmoCodeEventCodeDistance */
interface ApiAppGetLocationPersonCpmoCodeEventCodeDistanceResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: any
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

 type ApiAppGetLocationPersonCpmoCodeEventCodeDistanceResponseSuccess = ApiAppGetLocationPersonCpmoCodeEventCodeDistanceResponse[200]
/**
 * @description
 *   获取人员图层接口
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetLocationPersonCpmoCodeEventCodeDistance = (option?: DeepPartial<ApiAppGetLocationPersonCpmoCodeEventCodeDistanceOption>, config?: AxiosRequestConfig) => requester<ApiAppGetLocationPersonCpmoCodeEventCodeDistanceResponseSuccess>('/location/person/:cpmoCode/:eventCode/:distance', { method: 'get', path: option}, config);

type ApiAppGetLocationCpmoCodeOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    };

/** @description response type for apiAppGetLocationCpmoCode */
interface ApiAppGetLocationCpmoCodeResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: any
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

 type ApiAppGetLocationCpmoCodeResponseSuccess = ApiAppGetLocationCpmoCodeResponse[200]
/**
 * @description
 *   获取图层信息接口
 * @tags map-points-controller
 * @produces *
 */
export const apiAppGetLocationCpmoCode = (option?: DeepPartial<ApiAppGetLocationCpmoCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetLocationCpmoCodeResponseSuccess>('/location/:cpmoCode', { method: 'get', path: option}, config);

type ApiAppPostMapDeviceOption = LongLatInput;

/** @description response type for apiAppPostMapDevice */
interface ApiAppPostMapDeviceResponse {
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

 type ApiAppPostMapDeviceResponseSuccess = ApiAppPostMapDeviceResponse[200]
/**
 * @description
 *   getMapDevice
 * @tags pressure-chart-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMapDevice = (option?: DeepPartial<ApiAppPostMapDeviceOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMapDeviceResponseSuccess>('/map/device', { method: 'post', body: option}, config);

type ApiAppGetMergeGetDetailsByMergeIdMergeIdOption = {
    /**
    @description
      mergeId
    @format int64 */
    'mergeId': number
    };

/** @description response type for apiAppGetMergeGetDetailsByMergeIdMergeId */
interface ApiAppGetMergeGetDetailsByMergeIdMergeIdResponse {
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

 type ApiAppGetMergeGetDetailsByMergeIdMergeIdResponseSuccess = ApiAppGetMergeGetDetailsByMergeIdMergeIdResponse[200]
/**
 * @description
 *   getDetailsByMergeId
 * @tags 应急事件合并模块
 * @produces *
 */
export const apiAppGetMergeGetDetailsByMergeIdMergeId = (option?: DeepPartial<ApiAppGetMergeGetDetailsByMergeIdMergeIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMergeGetDetailsByMergeIdMergeIdResponseSuccess>('/merge/getDetailsByMergeId/:mergeId', { method: 'get', path: option}, config);

type ApiAppGetMergeGetEventReportDetailsIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetMergeGetEventReportDetailsId */
interface ApiAppGetMergeGetEventReportDetailsIdResponse {
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

 type ApiAppGetMergeGetEventReportDetailsIdResponseSuccess = ApiAppGetMergeGetEventReportDetailsIdResponse[200]
/**
 * @description
 *   getEventReportDetails
 * @tags 应急事件合并模块
 * @produces *
 */
export const apiAppGetMergeGetEventReportDetailsId = (option?: DeepPartial<ApiAppGetMergeGetEventReportDetailsIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMergeGetEventReportDetailsIdResponseSuccess>('/merge/getEventReportDetails/:id', { method: 'get', path: option}, config);

type ApiAppPostMergeGetMergeEventListOption = EmergencyEventMergeInput;

/** @description response type for apiAppPostMergeGetMergeEventList */
interface ApiAppPostMergeGetMergeEventListResponse {
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

 type ApiAppPostMergeGetMergeEventListResponseSuccess = ApiAppPostMergeGetMergeEventListResponse[200]
/**
 * @description
 *   getMergeEventList
 * @tags 应急事件合并模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMergeGetMergeEventList = (option?: DeepPartial<ApiAppPostMergeGetMergeEventListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMergeGetMergeEventListResponseSuccess>('/merge/getMergeEventList', { method: 'post', body: option}, config);

type ApiAppGetMergeMergeEventParentIdEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    /**
    @description
      parentId
    @format int64 */
    'parentId': number
    };

/** @description response type for apiAppGetMergeMergeEventParentIdEventId */
interface ApiAppGetMergeMergeEventParentIdEventIdResponse {
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

 type ApiAppGetMergeMergeEventParentIdEventIdResponseSuccess = ApiAppGetMergeMergeEventParentIdEventIdResponse[200]
/**
 * @description
 *   mergeEvent
 * @tags 应急事件合并模块
 * @produces *
 */
export const apiAppGetMergeMergeEventParentIdEventId = (option?: DeepPartial<ApiAppGetMergeMergeEventParentIdEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMergeMergeEventParentIdEventIdResponseSuccess>('/merge/mergeEvent/:parentId/:eventId', { method: 'get', path: option}, config);

/** @description response type for apiAppGetMonitorServer */
interface ApiAppGetMonitorServerResponse {
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

 type ApiAppGetMonitorServerResponseSuccess = ApiAppGetMonitorServerResponse[200]
/**
 * @description
 *   getInfo
 * @tags monitor-controller
 * @produces *
 */
export const apiAppGetMonitorServer = (config?: AxiosRequestConfig) => requester<ApiAppGetMonitorServerResponseSuccess>('/monitor/server', { method: 'get'}, config);

type ApiAppPostMsgConfigAddOption = EmergencyMsgTemplateConfigInputDto;

/** @description response type for apiAppPostMsgConfigAdd */
interface ApiAppPostMsgConfigAddResponse {
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

 type ApiAppPostMsgConfigAddResponseSuccess = ApiAppPostMsgConfigAddResponse[200]
/**
 * @description
 *   添加接口
 *   添加接口
 * @tags 应急抢险-消息配置接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgConfigAdd = (option?: DeepPartial<ApiAppPostMsgConfigAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgConfigAddResponseSuccess>('/msg/config/add', { method: 'post', body: option}, config);

type ApiAppPostMsgConfigDelIdOption = {
    /**
    @description
      id */
    'id': string
    };

/** @description response type for apiAppPostMsgConfigDelId */
interface ApiAppPostMsgConfigDelIdResponse {
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

 type ApiAppPostMsgConfigDelIdResponseSuccess = ApiAppPostMsgConfigDelIdResponse[200]
/**
 * @description
 *   删除接口
 *   删除接口 多个参数,号分割
 * @tags 应急抢险-消息配置接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgConfigDelId = (option?: DeepPartial<ApiAppPostMsgConfigDelIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgConfigDelIdResponseSuccess>('/msg/config/del/:id', { method: 'post', path: option}, config);

type ApiAppGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeOption = {
    /**
    @description
      compCode */
    'compCode': string
    /**
    @description
      type
    @format int32 */
    'type': number
    };

/** @description response type for apiAppGetMsgConfigGetAllTemplateByCompCodeCompCodeType */
interface ApiAppGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeResponse {
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

 type ApiAppGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeResponseSuccess = ApiAppGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeResponse[200]
/**
 * @description
 *   获取公司下的对应模板
 *   获取公司下的对应模板
 * @tags 应急抢险-消息配置接口
 * @produces *
 */
export const apiAppGetMsgConfigGetAllTemplateByCompCodeCompCodeType = (option?: DeepPartial<ApiAppGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMsgConfigGetAllTemplateByCompCodeCompCodeTypeResponseSuccess>('/msg/config/getAllTemplateByCompCode/:compCode/:type', { method: 'get', path: option}, config);

/** @description response type for apiAppPostMsgConfigGetExample */
interface ApiAppPostMsgConfigGetExampleResponse {
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

 type ApiAppPostMsgConfigGetExampleResponseSuccess = ApiAppPostMsgConfigGetExampleResponse[200]
/**
 * @description
 *   信息样例
 *   信息样例
 * @tags 应急抢险-消息配置接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgConfigGetExample = (config?: AxiosRequestConfig) => requester<ApiAppPostMsgConfigGetExampleResponseSuccess>('/msg/config/getExample', { method: 'post'}, config);

type ApiAppGetMsgConfigGetIdIdCpmoCopOption = {
    /**
    @description
      cpmoCop */
    'cpmoCop': string
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetMsgConfigGetIdIdCpmoCop */
interface ApiAppGetMsgConfigGetIdIdCpmoCopResponse {
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

 type ApiAppGetMsgConfigGetIdIdCpmoCopResponseSuccess = ApiAppGetMsgConfigGetIdIdCpmoCopResponse[200]
/**
 * @description
 *   详情接口
 *   详情接口
 * @tags 应急抢险-消息配置接口
 * @produces *
 */
export const apiAppGetMsgConfigGetIdIdCpmoCop = (option?: DeepPartial<ApiAppGetMsgConfigGetIdIdCpmoCopOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMsgConfigGetIdIdCpmoCopResponseSuccess>('/msg/config/getId/:id/:cpmoCop', { method: 'get', path: option}, config);

type ApiAppPostMsgConfigListOption = EmergencyMsgTemplateConfigInputDto;

/** @description response type for apiAppPostMsgConfigList */
interface ApiAppPostMsgConfigListResponse {
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

 type ApiAppPostMsgConfigListResponseSuccess = ApiAppPostMsgConfigListResponse[200]
/**
 * @description
 *   列表接口
 *   列表接口
 * @tags 应急抢险-消息配置接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgConfigList = (option?: DeepPartial<ApiAppPostMsgConfigListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgConfigListResponseSuccess>('/msg/config/list', { method: 'post', body: option}, config);

type ApiAppPostMsgConfigUpdOption = EmergencyMsgTemplateConfigInputDto;

/** @description response type for apiAppPostMsgConfigUpd */
interface ApiAppPostMsgConfigUpdResponse {
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

 type ApiAppPostMsgConfigUpdResponseSuccess = ApiAppPostMsgConfigUpdResponse[200]
/**
 * @description
 *   修改接口
 *   修改接口
 * @tags 应急抢险-消息配置接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgConfigUpd = (option?: DeepPartial<ApiAppPostMsgConfigUpdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgConfigUpdResponseSuccess>('/msg/config/upd', { method: 'post', body: option}, config);

type ApiAppGetMsgConfigUpdStatusIdStatusOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    /**
    @description
      status
    @format int32 */
    'status': number
    };

/** @description response type for apiAppGetMsgConfigUpdStatusIdStatus */
interface ApiAppGetMsgConfigUpdStatusIdStatusResponse {
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

 type ApiAppGetMsgConfigUpdStatusIdStatusResponseSuccess = ApiAppGetMsgConfigUpdStatusIdStatusResponse[200]
/**
 * @description
 *   调整有效无效状态
 *   调整有效无效状态
 * @tags 应急抢险-消息配置接口
 * @produces *
 */
export const apiAppGetMsgConfigUpdStatusIdStatus = (option?: DeepPartial<ApiAppGetMsgConfigUpdStatusIdStatusOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMsgConfigUpdStatusIdStatusResponseSuccess>('/msg/config/updStatus/:id/:status', { method: 'get', path: option}, config);

type ApiAppPostMsgTemplateDelOption = {
    /**
    @description
      操作人所属实体编码 */
    'cpmoCop': string
    /**
    @format int32 */
    'id': number
    'itcode': string
    'optUserAccount': string
    'optUserName': string
    'roleIds': string
    /**
    @format int32 */
    'type': number
    };

/** @description response type for apiAppPostMsgTemplateDel */
interface ApiAppPostMsgTemplateDelResponse {
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

 type ApiAppPostMsgTemplateDelResponseSuccess = ApiAppPostMsgTemplateDelResponse[200]
/**
 * @description
 *   删除
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgTemplateDel = (option?: DeepPartial<ApiAppPostMsgTemplateDelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgTemplateDelResponseSuccess>('/msgTemplate/del', { method: 'post', query: option}, config);

type ApiAppPostMsgTemplateDelNewOption = MsgTemplateSaveInput;

/** @description response type for apiAppPostMsgTemplateDelNew */
interface ApiAppPostMsgTemplateDelNewResponse {
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

 type ApiAppPostMsgTemplateDelNewResponseSuccess = ApiAppPostMsgTemplateDelNewResponse[200]
/**
 * @description
 *   删除
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgTemplateDelNew = (option?: DeepPartial<ApiAppPostMsgTemplateDelNewOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgTemplateDelNewResponseSuccess>('/msgTemplate/delNew', { method: 'post', body: option}, config);

type ApiAppGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeOption = {
    /**
    @description
      companyCode */
    'companyCode': string
    /**
    @description
      scene */
    'scene': string
    /**
    @description
      typeCode */
    'typeCode': string
    };

/** @description response type for apiAppGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCode */
interface ApiAppGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponse {
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

 type ApiAppGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponseSuccess = ApiAppGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponse[200]
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiAppGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCode = (option?: DeepPartial<ApiAppGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponseSuccess>('/msgTemplate/getAllTemplateByCompCode/:companyCode/:scene/:typeCode', { method: 'get', path: option}, config);

type ApiAppGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeOption = {
    /**
    @description
      companyCode */
    'companyCode': string
    /**
    @description
      scene */
    'scene': string
    /**
    @description
      type */
    'type': string
    /**
    @description
      typeCode */
    'typeCode': string
    };

/** @description response type for apiAppGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeType */
interface ApiAppGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponse {
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

 type ApiAppGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponseSuccess = ApiAppGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponse[200]
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiAppGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeType = (option?: DeepPartial<ApiAppGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponseSuccess>('/msgTemplate/getAllTemplateByCompCodeAndModel/:companyCode/:scene/:typeCode/:type', { method: 'get', path: option}, config);

type ApiAppGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    /**
    @description
      scene */
    'scene': string
    };

/** @description response type for apiAppGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeScene */
interface ApiAppGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponse {
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

 type ApiAppGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponseSuccess = ApiAppGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponse[200]
/**
 * @description
 *   查询管理实体下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiAppGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeScene = (option?: DeepPartial<ApiAppGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponseSuccess>('/msgTemplate/getAllTemplateByCpmoCode/:cpmoCode/:scene', { method: 'get', path: option}, config);

type ApiAppGetMsgTemplateGetAllTemplateByIdTemplateIdOption = {
    /**
    @description
      templateId
    @format int64 */
    'templateId': number
    };

/** @description response type for apiAppGetMsgTemplateGetAllTemplateByIdTemplateId */
interface ApiAppGetMsgTemplateGetAllTemplateByIdTemplateIdResponse {
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

 type ApiAppGetMsgTemplateGetAllTemplateByIdTemplateIdResponseSuccess = ApiAppGetMsgTemplateGetAllTemplateByIdTemplateIdResponse[200]
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiAppGetMsgTemplateGetAllTemplateByIdTemplateId = (option?: DeepPartial<ApiAppGetMsgTemplateGetAllTemplateByIdTemplateIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMsgTemplateGetAllTemplateByIdTemplateIdResponseSuccess>('/msgTemplate/getAllTemplateById/:templateId', { method: 'get', path: option}, config);

type ApiAppGetMsgTemplateGetTemplateTypeCodeTemplateIdOption = {
    /**
    @description
      templateId */
    'templateId': string
    };

/** @description response type for apiAppGetMsgTemplateGetTemplateTypeCodeTemplateId */
interface ApiAppGetMsgTemplateGetTemplateTypeCodeTemplateIdResponse {
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

 type ApiAppGetMsgTemplateGetTemplateTypeCodeTemplateIdResponseSuccess = ApiAppGetMsgTemplateGetTemplateTypeCodeTemplateIdResponse[200]
/**
 * @description
 *   查询当前下配置typeCode类型
 * @tags 信息模版
 * @produces *
 */
export const apiAppGetMsgTemplateGetTemplateTypeCodeTemplateId = (option?: DeepPartial<ApiAppGetMsgTemplateGetTemplateTypeCodeTemplateIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetMsgTemplateGetTemplateTypeCodeTemplateIdResponseSuccess>('/msgTemplate/getTemplateTypeCode/:templateId', { method: 'get', path: option}, config);

type ApiAppPostMsgTemplateGetTypeListOption = QueryTypeInput;

/** @description response type for apiAppPostMsgTemplateGetTypeList */
interface ApiAppPostMsgTemplateGetTypeListResponse {
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

 type ApiAppPostMsgTemplateGetTypeListResponseSuccess = ApiAppPostMsgTemplateGetTypeListResponse[200]
/**
 * @description
 *   查询模板可配置类型
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgTemplateGetTypeList = (option?: DeepPartial<ApiAppPostMsgTemplateGetTypeListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgTemplateGetTypeListResponseSuccess>('/msgTemplate/getTypeList', { method: 'post', body: option}, config);

type ApiAppPostMsgTemplateListOption = {
    'compCode': string
    /**
    @description
      公司名，模糊查询 */
    'compNameLike': string
    /**
    @description
      操作人所属实体编码 */
    'cpmoCop': string
    /**
    @format int32 */
    'id': number
    /**
    @description
      功能模块，告警 1  示险  2  抢险 5,选中多个用逗号分隔 */
    'model': string
    /**
    @format int32 */
    'pageNum': number
    /**
    @format int32 */
    'pageSize': number
    /**
    @description
      关联类型查询 */
    'relationType': string
    /**
    @description
      场景 1：管网场景，2：场站场景，3：户内场景，4：工程场景  */
    'sceneList': Array<number>
    /**
    @description
      省公司，模糊查询 */
    'shengLike': string
    /**
    @description
      管理实体，模糊查询 */
    'subNameLike': string
    /**
    @description
      类型，1：呼叫，2：短信,空：全部
    @format int32 */
    'type': number
    'types': Array<string>
    };

/** @description response type for apiAppPostMsgTemplateList */
interface ApiAppPostMsgTemplateListResponse {
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

 type ApiAppPostMsgTemplateListResponseSuccess = ApiAppPostMsgTemplateListResponse[200]
/**
 * @description
 *   查询
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgTemplateList = (option?: DeepPartial<ApiAppPostMsgTemplateListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgTemplateListResponseSuccess>('/msgTemplate/list', { method: 'post', query: option}, config);

type ApiAppPostMsgTemplateSaveOption = {
    /**
    @description
      外呼账号 */
    'account': string
    /**
    @description
      callKey */
    'callKey': string
    'compCode': string
    'cpmoCop': string
    /**
    @format int32 */
    'id': number
    /**
    @description
      功能模块，告警 1  示险  2  抢险 5,选中多个用逗号分隔 */
    'model': string
    /**
    @description
      模板主体 */
    'msg': string
    /**
    @description
      模版名称 */
    'name': string
    /**
    @format int64 */
    'newId': number
    'optUserAccount': string
    'optUserName': string
    /**
    @description
      PIN */
    'pin': string
    /**
    @description
      密码 */
    'pwd': string
    'roleIds': string
    /**
    @description
      场景 1：管网场景，2：场站场景，3：户内场景，4：工程场景 
    @format int32 */
    'scene': number
    /**
    @description
      状态，0：禁用，1：启用
    @format int32 */
    'status': number
    /**
    @description
      模板id
    @format int64 */
    'templateId': number
    /**
    @description
      模板类型：1：通用模板；2：自定义模板
    @format int32 */
    'templateType': number
    /**
    @description
      类型，1：呼叫，2：短信
    @format int32 */
    'type': number
    /**
    @description
      类型编码 */
    'typeCode': string
    /**
    @description
      类型编码数组 */
    'typeCodes': Array<string>
    };

/** @description response type for apiAppPostMsgTemplateSave */
interface ApiAppPostMsgTemplateSaveResponse {
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

 type ApiAppPostMsgTemplateSaveResponseSuccess = ApiAppPostMsgTemplateSaveResponse[200]
/**
 * @description
 *   保存
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgTemplateSave = (option?: DeepPartial<ApiAppPostMsgTemplateSaveOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgTemplateSaveResponseSuccess>('/msgTemplate/save', { method: 'post', query: option}, config);

/** @description response type for apiAppGetMsgTemplateSensitiveWords */
interface ApiAppGetMsgTemplateSensitiveWordsResponse {
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

 type ApiAppGetMsgTemplateSensitiveWordsResponseSuccess = ApiAppGetMsgTemplateSensitiveWordsResponse[200]
/**
 * @description
 *   查询敏感词汇
 * @tags 信息模版
 * @produces *
 */
export const apiAppGetMsgTemplateSensitiveWords = (config?: AxiosRequestConfig) => requester<ApiAppGetMsgTemplateSensitiveWordsResponseSuccess>('/msgTemplate/sensitive/words', { method: 'get'}, config);

type ApiAppPostMsgTemplateTemplateSaveOption = MsgTemplateSaveInput;

/** @description response type for apiAppPostMsgTemplateTemplateSave */
interface ApiAppPostMsgTemplateTemplateSaveResponse {
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

 type ApiAppPostMsgTemplateTemplateSaveResponseSuccess = ApiAppPostMsgTemplateTemplateSaveResponse[200]
/**
 * @description
 *   批量添加模板
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgTemplateTemplateSave = (option?: DeepPartial<ApiAppPostMsgTemplateTemplateSaveOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgTemplateTemplateSaveResponseSuccess>('/msgTemplate/templateSave', { method: 'post', body: option}, config);

type ApiAppPostMsgTemplateTemplateUpdOption = MsgTemplateSaveInput;

/** @description response type for apiAppPostMsgTemplateTemplateUpd */
interface ApiAppPostMsgTemplateTemplateUpdResponse {
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

 type ApiAppPostMsgTemplateTemplateUpdResponseSuccess = ApiAppPostMsgTemplateTemplateUpdResponse[200]
/**
 * @description
 *   批量修改模板
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgTemplateTemplateUpd = (option?: DeepPartial<ApiAppPostMsgTemplateTemplateUpdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgTemplateTemplateUpdResponseSuccess>('/msgTemplate/templateUpd', { method: 'post', body: option}, config);

type ApiAppPostMsgTemplateValidUniqueOption = {
    'compCode': string
    /**
    @description
      操作人所属实体编码 */
    'cpmoCop': string
    /**
    @description
      场景
    @format int32 */
    'scene': number
    /**
    @description
      类型，1：呼叫，2：短信
    @format int32 */
    'type': number
    };

/** @description response type for apiAppPostMsgTemplateValidUnique */
interface ApiAppPostMsgTemplateValidUniqueResponse {
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

 type ApiAppPostMsgTemplateValidUniqueResponseSuccess = ApiAppPostMsgTemplateValidUniqueResponse[200]
/**
 * @description
 *   重复校验，true为无重复，校验通过
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMsgTemplateValidUnique = (option?: DeepPartial<ApiAppPostMsgTemplateValidUniqueOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMsgTemplateValidUniqueResponseSuccess>('/msgTemplate/validUnique', { method: 'post', query: option}, config);

type ApiAppPostMutilDevicePressureChartOption = DailyChartInput;

/** @description response type for apiAppPostMutilDevicePressureChart */
interface ApiAppPostMutilDevicePressureChartResponse {
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

 type ApiAppPostMutilDevicePressureChartResponseSuccess = ApiAppPostMutilDevicePressureChartResponse[200]
/**
 * @description
 *   getRecentDailyValue
 * @tags pressure-chart-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostMutilDevicePressureChart = (option?: DeepPartial<ApiAppPostMutilDevicePressureChartOption>, config?: AxiosRequestConfig) => requester<ApiAppPostMutilDevicePressureChartResponseSuccess>('/mutil/device/pressure/chart', { method: 'post', body: option}, config);

type ApiAppGetNightModeCheckvalidCompCodeOption = {
    /**
    @description
      compCode */
    'compCode': string
    };

/** @description response type for apiAppGetNightModeCheckvalidCompCode */
interface ApiAppGetNightModeCheckvalidCompCodeResponse {
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

 type ApiAppGetNightModeCheckvalidCompCodeResponseSuccess = ApiAppGetNightModeCheckvalidCompCodeResponse[200]
/**
 * @description
 *   查询管理实体夜间模式是否有效
 * @tags 夜间值守模式配置
 * @produces *
 */
export const apiAppGetNightModeCheckvalidCompCode = (option?: DeepPartial<ApiAppGetNightModeCheckvalidCompCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNightModeCheckvalidCompCodeResponseSuccess>('/nightMode/checkvalid/:compCode', { method: 'get', path: option}, config);

type ApiAppGetNightModeDetailCompCodeOption = {
    /**
    @description
      compCode */
    'compCode': string
    };

/** @description response type for apiAppGetNightModeDetailCompCode */
interface ApiAppGetNightModeDetailCompCodeResponse {
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

 type ApiAppGetNightModeDetailCompCodeResponseSuccess = ApiAppGetNightModeDetailCompCodeResponse[200]
/**
 * @description
 *   根据管理实体编码获取夜间模式配置
 * @tags 夜间值守模式配置
 * @produces *
 */
export const apiAppGetNightModeDetailCompCode = (option?: DeepPartial<ApiAppGetNightModeDetailCompCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNightModeDetailCompCodeResponseSuccess>('/nightMode/detail/:compCode', { method: 'get', path: option}, config);

type ApiAppGetNightModeGetPostListCompCodeOption = {
    /**
    @description
      compCode */
    'compCode': string
    };

/** @description response type for apiAppGetNightModeGetPostListCompCode */
interface ApiAppGetNightModeGetPostListCompCodeResponse {
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

 type ApiAppGetNightModeGetPostListCompCodeResponseSuccess = ApiAppGetNightModeGetPostListCompCodeResponse[200]
/**
 * @description
 *   查询岗位列表
 * @tags 夜间值守模式配置
 * @produces *
 */
export const apiAppGetNightModeGetPostListCompCode = (option?: DeepPartial<ApiAppGetNightModeGetPostListCompCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNightModeGetPostListCompCodeResponseSuccess>('/nightMode/getPostList/:compCode', { method: 'get', path: option}, config);

type ApiAppPostNightModeSaveOption = NightModeFomrInput;

/** @description response type for apiAppPostNightModeSave */
interface ApiAppPostNightModeSaveResponse {
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

 type ApiAppPostNightModeSaveResponseSuccess = ApiAppPostNightModeSaveResponse[200]
/**
 * @description
 *   保存夜间模式配置
 * @tags 夜间值守模式配置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostNightModeSave = (option?: DeepPartial<ApiAppPostNightModeSaveOption>, config?: AxiosRequestConfig) => requester<ApiAppPostNightModeSaveResponseSuccess>('/nightMode/save', { method: 'post', body: option}, config);

type ApiAppPostNoticeAddOption = EmergencyNoticeRecordInput;

/** @description response type for apiAppPostNoticeAdd */
interface ApiAppPostNoticeAddResponse {
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

 type ApiAppPostNoticeAddResponseSuccess = ApiAppPostNoticeAddResponse[200]
/**
 * @description
 *   添加接口
 *   添加接口
 * @tags 通知中心接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostNoticeAdd = (option?: DeepPartial<ApiAppPostNoticeAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostNoticeAddResponseSuccess>('/notice/add', { method: 'post', body: option}, config);

type ApiAppGetNoticeByDraftEventIdEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetNoticeByDraftEventIdEventId */
interface ApiAppGetNoticeByDraftEventIdEventIdResponse {
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

 type ApiAppGetNoticeByDraftEventIdEventIdResponseSuccess = ApiAppGetNoticeByDraftEventIdEventIdResponse[200]
/**
 * @description
 *   查询草稿信息 evnetId:事件id   
 *   查询草稿信息
 * @tags 通知中心接口
 * @produces *
 */
export const apiAppGetNoticeByDraftEventIdEventId = (option?: DeepPartial<ApiAppGetNoticeByDraftEventIdEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNoticeByDraftEventIdEventIdResponseSuccess>('/notice/byDraftEventId/:eventId', { method: 'get', path: option}, config);

type ApiAppGetNoticeByIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetNoticeByIdId */
interface ApiAppGetNoticeByIdIdResponse {
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

 type ApiAppGetNoticeByIdIdResponseSuccess = ApiAppGetNoticeByIdIdResponse[200]
/**
 * @description
 *   查询详情页
 *   查询详情页
 * @tags 通知中心接口
 * @produces *
 */
export const apiAppGetNoticeByIdId = (option?: DeepPartial<ApiAppGetNoticeByIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNoticeByIdIdResponseSuccess>('/notice/byId/:id', { method: 'get', path: option}, config);

type ApiAppPostNoticeGetAddressListOption = EmergencyPreplanAddressListInputDto;

/** @description response type for apiAppPostNoticeGetAddressList */
interface ApiAppPostNoticeGetAddressListResponse {
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

 type ApiAppPostNoticeGetAddressListResponseSuccess = ApiAppPostNoticeGetAddressListResponse[200]
/**
 * @description
 *   获取通讯录目录 人员信息
 *   获取通讯录目录 人员信息
 * @tags 通知中心接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostNoticeGetAddressList = (option?: DeepPartial<ApiAppPostNoticeGetAddressListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostNoticeGetAddressListResponseSuccess>('/notice/getAddressList', { method: 'post', body: option}, config);

type ApiAppPostNoticeInformationAddOrUpdNoticeInformationOption = EmergencyNoticeInformationInputDto;

/** @description response type for apiAppPostNoticeInformationAddOrUpdNoticeInformation */
interface ApiAppPostNoticeInformationAddOrUpdNoticeInformationResponse {
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

 type ApiAppPostNoticeInformationAddOrUpdNoticeInformationResponseSuccess = ApiAppPostNoticeInformationAddOrUpdNoticeInformationResponse[200]
/**
 * @description
 *   添加或修改响应通知信息/通过id是否存在来去判断
 *   添加或修改响应通知信息/通过id是否存在来去判断
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 * @consumes application/json
 */
export const apiAppPostNoticeInformationAddOrUpdNoticeInformation = (option?: DeepPartial<ApiAppPostNoticeInformationAddOrUpdNoticeInformationOption>, config?: AxiosRequestConfig) => requester<ApiAppPostNoticeInformationAddOrUpdNoticeInformationResponseSuccess>('/notice/information/addOrUpdNoticeInformation', { method: 'post', body: option}, config);

type ApiAppPostNoticeInformationAddOrUpdResponseOption = ResponseInputDto;

/** @description response type for apiAppPostNoticeInformationAddOrUpdResponse */
interface ApiAppPostNoticeInformationAddOrUpdResponseResponse {
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

 type ApiAppPostNoticeInformationAddOrUpdResponseResponseSuccess = ApiAppPostNoticeInformationAddOrUpdResponseResponse[200]
/**
 * @description
 *   添加或修改响应
 *   添加或修改响应
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 * @consumes application/json
 */
export const apiAppPostNoticeInformationAddOrUpdResponse = (option?: DeepPartial<ApiAppPostNoticeInformationAddOrUpdResponseOption>, config?: AxiosRequestConfig) => requester<ApiAppPostNoticeInformationAddOrUpdResponseResponseSuccess>('/notice/information/addOrUpdResponse', { method: 'post', body: option}, config);

type ApiAppGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameOption = {
    /**
    @description
      batchId
    @format int64 */
    'batchId': number
    /**
    @description
      id
    @format int64 */
    'id': number
    /**
    @description
      level
    @format int32 */
    'level': number
    /**
    @description
      oldLevel
    @format int32 */
    'oldLevel': number
    /**
    @description
      userName */
    'userName': string
    };

/** @description response type for apiAppGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserName */
interface ApiAppGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameResponse {
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

 type ApiAppGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameResponseSuccess = ApiAppGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameResponse[200]
/**
 * @description
 *   id: 事件id oldLevel:历史响应分级 level: 要修改的级别 batchId:批次id
 *   调整响应级别提交接口
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiAppGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserName = (option?: DeepPartial<ApiAppGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNoticeInformationAgainLevelIdOldLevelLevelBatchIdUserNameResponseSuccess>('/notice/information/againLevel/:id/:oldLevel/:level/:batchId/:userName', { method: 'get', path: option}, config);

type ApiAppPostNoticeInformationFeedbackOption = EmergencyFeedbackInputDto;

/** @description response type for apiAppPostNoticeInformationFeedback */
interface ApiAppPostNoticeInformationFeedbackResponse {
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

 type ApiAppPostNoticeInformationFeedbackResponseSuccess = ApiAppPostNoticeInformationFeedbackResponse[200]
/**
 * @description
 *   调整响应级别 获取级别列表 暂时弃用
 *   终止响应
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 * @consumes application/json
 */
export const apiAppPostNoticeInformationFeedback = (option?: DeepPartial<ApiAppPostNoticeInformationFeedbackOption>, config?: AxiosRequestConfig) => requester<ApiAppPostNoticeInformationFeedbackResponseSuccess>('/notice/information/feedback', { method: 'post', body: option}, config);

type ApiAppGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeOption = {
    /**
    @description
      noticeType
    @format int32 */
    'noticeType': number
    /**
    @description
      preplanId */
    'preplanId': string
    /**
    @description
      type
    @format int32 */
    'type': number
    };

/** @description response type for apiAppGetNoticeInformationGetByIdPreplanIdNoticeTypeType */
interface ApiAppGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeResponse {
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

 type ApiAppGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeResponseSuccess = ApiAppGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeResponse[200]
/**
 * @description
 *   根据预案id 和配置类型查询对应配置
 *   preplanId： {预案id 查询 对应下的配置} noticeType：{ 1: 应急预案配置  2: 系统配置管理} type: {noticeType  = 1时 type=1 启动响应通知配置type=2 终止响应通知配置  noticeType = 2时：type=1进展通知配置}
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiAppGetNoticeInformationGetByIdPreplanIdNoticeTypeType = (option?: DeepPartial<ApiAppGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNoticeInformationGetByIdPreplanIdNoticeTypeTypeResponseSuccess>('/notice/information/getById/:preplanId/:noticeType/:type', { method: 'get', path: option}, config);

type ApiAppGetNoticeInformationGetLevelIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetNoticeInformationGetLevelId */
interface ApiAppGetNoticeInformationGetLevelIdResponse {
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

 type ApiAppGetNoticeInformationGetLevelIdResponseSuccess = ApiAppGetNoticeInformationGetLevelIdResponse[200]
/**
 * @description
 *   调整响应级别 获取级别列表
 *   调整响应级别 获取级别列表 id : 事件id
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiAppGetNoticeInformationGetLevelId = (option?: DeepPartial<ApiAppGetNoticeInformationGetLevelIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNoticeInformationGetLevelIdResponseSuccess>('/notice/information/getLevel/:id', { method: 'get', path: option}, config);

type ApiAppGetNoticeInformationGetResponseByPreplanIdPreplanIdOption = {
    /**
    @description
      preplanId
    @format int64 */
    'preplanId': number
    };

/** @description response type for apiAppGetNoticeInformationGetResponseByPreplanIdPreplanId */
interface ApiAppGetNoticeInformationGetResponseByPreplanIdPreplanIdResponse {
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

 type ApiAppGetNoticeInformationGetResponseByPreplanIdPreplanIdResponseSuccess = ApiAppGetNoticeInformationGetResponseByPreplanIdPreplanIdResponse[200]
/**
 * @description
 *   根据预案id 查询对应响应信息
 *   根据预案id 查询对应响应信息
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiAppGetNoticeInformationGetResponseByPreplanIdPreplanId = (option?: DeepPartial<ApiAppGetNoticeInformationGetResponseByPreplanIdPreplanIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNoticeInformationGetResponseByPreplanIdPreplanIdResponseSuccess>('/notice/information/getResponseByPreplanId/:preplanId', { method: 'get', path: option}, config);

type ApiAppGetNoticeInformationGetResponseNoticeIdPreplanIdLevelOption = {
    /**
    @description
      id */
    'id': string
    /**
    @description
      level
    @format int32 */
    'level': number
    /**
    @description
      preplanId
    @format int64 */
    'preplanId': number
    };

/** @description response type for apiAppGetNoticeInformationGetResponseNoticeIdPreplanIdLevel */
interface ApiAppGetNoticeInformationGetResponseNoticeIdPreplanIdLevelResponse {
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

 type ApiAppGetNoticeInformationGetResponseNoticeIdPreplanIdLevelResponseSuccess = ApiAppGetNoticeInformationGetResponseNoticeIdPreplanIdLevelResponse[200]
/**
 * @description
 *   id: 事件id  preplanId：预案id level:响应级别 查询响应通知
 *   查询响应通知
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiAppGetNoticeInformationGetResponseNoticeIdPreplanIdLevel = (option?: DeepPartial<ApiAppGetNoticeInformationGetResponseNoticeIdPreplanIdLevelOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNoticeInformationGetResponseNoticeIdPreplanIdLevelResponseSuccess>('/notice/information/getResponseNotice/:id/:preplanId/:level', { method: 'get', path: option}, config);

type ApiAppGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeOption = {
    /**
    @description
      companyCode */
    'companyCode': string
    /**
    @description
      entityCode */
    'entityCode': string
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCode */
interface ApiAppGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeResponse {
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

 type ApiAppGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeResponseSuccess = ApiAppGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeResponse[200]
/**
 * @description
 *   获取任务分发列表 id : 事件id
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 */
export const apiAppGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCode = (option?: DeepPartial<ApiAppGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNoticeInformationGetTaskDistributeListIdEntityCodeCompanyCodeResponseSuccess>('/notice/information/getTaskDistributeList/:id/:entityCode/:companyCode', { method: 'get', path: option}, config);

type ApiAppPostNoticeInformationResponseSubmitOption = ResponseSubmitOutputDto;

/** @description response type for apiAppPostNoticeInformationResponseSubmit */
interface ApiAppPostNoticeInformationResponseSubmitResponse {
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

 type ApiAppPostNoticeInformationResponseSubmitResponseSuccess = ApiAppPostNoticeInformationResponseSubmitResponse[200]
/**
 * @description
 *   启动响应提交接口 （响应分级提交 响应通知提交）
 *   启动响应提交接口 （响应分级提交 响应通知提交）(APP)
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 * @consumes application/json
 */
export const apiAppPostNoticeInformationResponseSubmit = (option?: DeepPartial<ApiAppPostNoticeInformationResponseSubmitOption>, config?: AxiosRequestConfig) => requester<ApiAppPostNoticeInformationResponseSubmitResponseSuccess>('/notice/information/responseSubmit', { method: 'post', body: option}, config);

/** @description response type for apiAppPostNoticeInformationTest */
interface ApiAppPostNoticeInformationTestResponse {
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

 type ApiAppPostNoticeInformationTestResponseSuccess = ApiAppPostNoticeInformationTestResponse[200]
/**
 * @description
 *   test
 * @tags V0915-{应急预案编辑-预案响应模块-01}
 * @produces *
 * @consumes application/json
 */
export const apiAppPostNoticeInformationTest = (config?: AxiosRequestConfig) => requester<ApiAppPostNoticeInformationTestResponseSuccess>('/notice/information/test', { method: 'post'}, config);

type ApiAppPostNoticeListOption = NoticeRecordInput;

/** @description response type for apiAppPostNoticeList */
interface ApiAppPostNoticeListResponse {
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

 type ApiAppPostNoticeListResponseSuccess = ApiAppPostNoticeListResponse[200]
/**
 * @description
 *   查询列表
 *   查询列表
 * @tags 通知中心接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostNoticeList = (option?: DeepPartial<ApiAppPostNoticeListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostNoticeListResponseSuccess>('/notice/list', { method: 'post', body: option}, config);

type ApiAppGetNoticeMsgTemplateEventIdTemplateIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    /**
    @description
      templateId
    @format int64 */
    'templateId': number
    };

/** @description response type for apiAppGetNoticeMsgTemplateEventIdTemplateId */
interface ApiAppGetNoticeMsgTemplateEventIdTemplateIdResponse {
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

 type ApiAppGetNoticeMsgTemplateEventIdTemplateIdResponseSuccess = ApiAppGetNoticeMsgTemplateEventIdTemplateIdResponse[200]
/**
 * @description
 *   获取发动短信或电话模板内容
 * @tags 通知中心接口
 * @produces *
 */
export const apiAppGetNoticeMsgTemplateEventIdTemplateId = (option?: DeepPartial<ApiAppGetNoticeMsgTemplateEventIdTemplateIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNoticeMsgTemplateEventIdTemplateIdResponseSuccess>('/notice/msg/template/:eventId/:templateId', { method: 'get', path: option}, config);

type ApiAppGetNoticeResendIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetNoticeResendId */
interface ApiAppGetNoticeResendIdResponse {
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

 type ApiAppGetNoticeResendIdResponseSuccess = ApiAppGetNoticeResendIdResponse[200]
/**
 * @description
 *   一键重新发送接口
 *   一键重新发送接口
 * @tags 通知中心接口
 * @produces *
 */
export const apiAppGetNoticeResendId = (option?: DeepPartial<ApiAppGetNoticeResendIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetNoticeResendIdResponseSuccess>('/notice/resend/:id', { method: 'get', path: option}, config);

type ApiAppGetPersonGetEntityCodeItCodeOption = {
    /**
    @description
      itCode */
    'itCode': string
    };

/** @description response type for apiAppGetPersonGetEntityCodeItCode */
interface ApiAppGetPersonGetEntityCodeItCodeResponse {
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

 type ApiAppGetPersonGetEntityCodeItCodeResponseSuccess = ApiAppGetPersonGetEntityCodeItCodeResponse[200]
/**
 * @description
 *   通过itcode获取entityCode
 * @tags 应急值守：值守班组人员
 * @produces *
 */
export const apiAppGetPersonGetEntityCodeItCode = (option?: DeepPartial<ApiAppGetPersonGetEntityCodeItCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetPersonGetEntityCodeItCodeResponseSuccess>('/person/getEntityCode/:itCode', { method: 'get', path: option}, config);

type ApiAppPostPersonQueryByPositionOption = PositionPersonQueryInput;

/** @description response type for apiAppPostPersonQueryByPosition */
interface ApiAppPostPersonQueryByPositionResponse {
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

 type ApiAppPostPersonQueryByPositionResponseSuccess = ApiAppPostPersonQueryByPositionResponse[200]
/**
 * @description
 *   查询岗位已选择的值守班组人员
 * @tags 应急值守：值守班组人员
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPersonQueryByPosition = (option?: DeepPartial<ApiAppPostPersonQueryByPositionOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPersonQueryByPositionResponseSuccess>('/person/queryByPosition', { method: 'post', body: option}, config);

type ApiAppPostPhoneCallListOption = PhoneCallSearchInput;

/** @description response type for apiAppPostPhoneCallList */
interface ApiAppPostPhoneCallListResponse {
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

 type ApiAppPostPhoneCallListResponseSuccess = ApiAppPostPhoneCallListResponse[200]
/**
 * @description
 *   查询
 * @tags 呼叫记录
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPhoneCallList = (option?: DeepPartial<ApiAppPostPhoneCallListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPhoneCallListResponseSuccess>('/phoneCall/list', { method: 'post', body: option}, config);

type ApiAppPostPhoneCallSearchByTaskIdTaskIdOption = {
    /**
    @description
      taskId
    @format int64 */
    'taskId': number
    };

/** @description response type for apiAppPostPhoneCallSearchByTaskIdTaskId */
interface ApiAppPostPhoneCallSearchByTaskIdTaskIdResponse {
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

 type ApiAppPostPhoneCallSearchByTaskIdTaskIdResponseSuccess = ApiAppPostPhoneCallSearchByTaskIdTaskIdResponse[200]
/**
 * @description
 *   通过任务ID查询
 * @tags 呼叫记录
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPhoneCallSearchByTaskIdTaskId = (option?: DeepPartial<ApiAppPostPhoneCallSearchByTaskIdTaskIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPhoneCallSearchByTaskIdTaskIdResponseSuccess>('/phoneCall/searchByTaskId/:taskId', { method: 'post', path: option}, config);

type ApiAppPostPhoneMsgListOption = {
    /**
    @description
      操作人所属实体编码 */
    'cpmoCop': string
    /**
    @format date-time */
    'msgEndTime': string
    'msgResult': string
    /**
    @format date-time */
    'msgStartTime': string
    'msgTarget': string
    /**
    @format int32 */
    'pageNum': number
    /**
    @format int32 */
    'pageSize': number
    /**
    @description
      场景 1：管网场景，2：场站场景，3：户内场景，4：工程场景  */
    'sceneList': Array<number>
    };

/** @description response type for apiAppPostPhoneMsgList */
interface ApiAppPostPhoneMsgListResponse {
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

 type ApiAppPostPhoneMsgListResponseSuccess = ApiAppPostPhoneMsgListResponse[200]
/**
 * @description
 *   查询
 * @tags 短信记录
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPhoneMsgList = (option?: DeepPartial<ApiAppPostPhoneMsgListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPhoneMsgListResponseSuccess>('/phoneMsg/list', { method: 'post', query: option}, config);

type ApiAppPostPhoneMsgSearchByTaskIdTaskIdOption = {
    /**
    @description
      taskId
    @format int64 */
    'taskId': number
    };

/** @description response type for apiAppPostPhoneMsgSearchByTaskIdTaskId */
interface ApiAppPostPhoneMsgSearchByTaskIdTaskIdResponse {
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

 type ApiAppPostPhoneMsgSearchByTaskIdTaskIdResponseSuccess = ApiAppPostPhoneMsgSearchByTaskIdTaskIdResponse[200]
/**
 * @description
 *   通过任务ID查询
 * @tags 短信记录
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPhoneMsgSearchByTaskIdTaskId = (option?: DeepPartial<ApiAppPostPhoneMsgSearchByTaskIdTaskIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPhoneMsgSearchByTaskIdTaskIdResponseSuccess>('/phoneMsg/searchByTaskId/:taskId', { method: 'post', path: option}, config);

type ApiAppPostPipeAddOption = PipeAnalyseAddInput;

/** @description response type for apiAppPostPipeAdd */
interface ApiAppPostPipeAddResponse {
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

 type ApiAppPostPipeAddResponseSuccess = ApiAppPostPipeAddResponse[200]
/**
 * @description
 *   保存为事件影响管段
 * @tags 应急爆管分析
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPipeAdd = (option?: DeepPartial<ApiAppPostPipeAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPipeAddResponseSuccess>('/pipe/add', { method: 'post', body: option}, config);

type ApiAppPostPipeMsgResultOption = PipeAnalyseMsgInput;

/** @description response type for apiAppPostPipeMsgResult */
interface ApiAppPostPipeMsgResultResponse {
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

 type ApiAppPostPipeMsgResultResponseSuccess = ApiAppPostPipeMsgResultResponse[200]
/**
 * @description
 *   推送爆管分析结果
 * @tags 应急爆管分析
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPipeMsgResult = (option?: DeepPartial<ApiAppPostPipeMsgResultOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPipeMsgResultResponseSuccess>('/pipe/msg/result', { method: 'post', body: option}, config);

type ApiAppGetPipeQueryEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetPipeQueryEventId */
interface ApiAppGetPipeQueryEventIdResponse {
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

 type ApiAppGetPipeQueryEventIdResponseSuccess = ApiAppGetPipeQueryEventIdResponse[200]
/**
 * @description
 *   查询事件影响管段
 * @tags 应急爆管分析
 * @produces *
 */
export const apiAppGetPipeQueryEventId = (option?: DeepPartial<ApiAppGetPipeQueryEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetPipeQueryEventIdResponseSuccess>('/pipe/query/:eventId', { method: 'get', path: option}, config);

type ApiAppGetPipeStopDeviceEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetPipeStopDeviceEventId */
interface ApiAppGetPipeStopDeviceEventIdResponse {
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

 type ApiAppGetPipeStopDeviceEventIdResponseSuccess = ApiAppGetPipeStopDeviceEventIdResponse[200]
/**
 * @description
 *   事件撤布防设备清单
 * @tags emergency-pipe-status-controller
 * @produces *
 */
export const apiAppGetPipeStopDeviceEventId = (option?: DeepPartial<ApiAppGetPipeStopDeviceEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetPipeStopDeviceEventIdResponseSuccess>('/pipe/stop/device/:eventId', { method: 'get', path: option}, config);

type ApiAppPostPreplanAddOption = EmergencyPreplanAddInput;

/** @description response type for apiAppPostPreplanAdd */
interface ApiAppPostPreplanAddResponse {
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

 type ApiAppPostPreplanAddResponseSuccess = ApiAppPostPreplanAddResponse[200]
/**
 * @description
 *   新增应急预案
 * @tags 应急预案接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPreplanAdd = (option?: DeepPartial<ApiAppPostPreplanAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPreplanAddResponseSuccess>('/preplan/add', { method: 'post', body: option}, config);

type ApiAppDeletePreplanDeleteIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppDeletePreplanDeleteId */
interface ApiAppDeletePreplanDeleteIdResponse {
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

 type ApiAppDeletePreplanDeleteIdResponseSuccess = ApiAppDeletePreplanDeleteIdResponse[200]
/**
 * @description
 *   删除应急预案
 * @tags 应急预案接口
 * @produces *
 */
export const apiAppDeletePreplanDeleteId = (option?: DeepPartial<ApiAppDeletePreplanDeleteIdOption>, config?: AxiosRequestConfig) => requester<ApiAppDeletePreplanDeleteIdResponseSuccess>('/preplan/delete/:id', { method: 'delete', path: option}, config);

type ApiAppGetPreplanDetailIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetPreplanDetailId */
interface ApiAppGetPreplanDetailIdResponse {
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

 type ApiAppGetPreplanDetailIdResponseSuccess = ApiAppGetPreplanDetailIdResponse[200]
/**
 * @description
 *   查询预案详情
 * @tags 应急预案接口
 * @produces *
 */
export const apiAppGetPreplanDetailId = (option?: DeepPartial<ApiAppGetPreplanDetailIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetPreplanDetailIdResponseSuccess>('/preplan/detail/:id', { method: 'get', path: option}, config);

type ApiAppGetPreplanGetPreplanCompInfoCpmoCopOption = {
    /**
    @description
      cpmoCop */
    'cpmoCop': string
    };

/** @description response type for apiAppGetPreplanGetPreplanCompInfoCpmoCop */
interface ApiAppGetPreplanGetPreplanCompInfoCpmoCopResponse {
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

 type ApiAppGetPreplanGetPreplanCompInfoCpmoCopResponseSuccess = ApiAppGetPreplanGetPreplanCompInfoCpmoCopResponse[200]
/**
 * @description
 *   获取实体下所有预案关联的公司
 * @tags 应急预案接口
 * @produces *
 */
export const apiAppGetPreplanGetPreplanCompInfoCpmoCop = (option?: DeepPartial<ApiAppGetPreplanGetPreplanCompInfoCpmoCopOption>, config?: AxiosRequestConfig) => requester<ApiAppGetPreplanGetPreplanCompInfoCpmoCopResponseSuccess>('/preplan/getPreplanCompInfo/:cpmoCop', { method: 'get', path: option}, config);

type ApiAppGetPreplanGetPreplanIdEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetPreplanGetPreplanIdEventId */
interface ApiAppGetPreplanGetPreplanIdEventIdResponse {
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

 type ApiAppGetPreplanGetPreplanIdEventIdResponseSuccess = ApiAppGetPreplanGetPreplanIdEventIdResponse[200]
/**
 * @description
 *   getEmergencyStartPreplanId
 * @tags 应急预案接口
 * @produces *
 */
export const apiAppGetPreplanGetPreplanIdEventId = (option?: DeepPartial<ApiAppGetPreplanGetPreplanIdEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetPreplanGetPreplanIdEventIdResponseSuccess>('/preplan/getPreplanId/:eventId', { method: 'get', path: option}, config);

type ApiAppGetPreplanGroupGroupIdOption = {
    /**
    @description
      groupId
    @format int32 */
    'groupId': number
    };

/** @description response type for apiAppGetPreplanGroupGroupId */
interface ApiAppGetPreplanGroupGroupIdResponse {
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

 type ApiAppGetPreplanGroupGroupIdResponseSuccess = ApiAppGetPreplanGroupGroupIdResponse[200]
/**
 * @description
 *   getPreplanGroup
 * @tags 应急预案接口
 * @produces *
 */
export const apiAppGetPreplanGroupGroupId = (option?: DeepPartial<ApiAppGetPreplanGroupGroupIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetPreplanGroupGroupIdResponseSuccess>('/preplan/group/:groupId', { method: 'get', path: option}, config);

type ApiAppPostPreplanListOption = EmergencyPreplanListInput;

/** @description response type for apiAppPostPreplanList */
interface ApiAppPostPreplanListResponse {
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

 type ApiAppPostPreplanListResponseSuccess = ApiAppPostPreplanListResponse[200]
/**
 * @description
 *   查询预案列表
 * @tags 应急预案接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPreplanList = (option?: DeepPartial<ApiAppPostPreplanListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPreplanListResponseSuccess>('/preplan/list', { method: 'post', body: option}, config);

type ApiAppPostPreplanNewAddOption = EmergencyPreplanAddInput;

/** @description response type for apiAppPostPreplanNewAdd */
interface ApiAppPostPreplanNewAddResponse {
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

 type ApiAppPostPreplanNewAddResponseSuccess = ApiAppPostPreplanNewAddResponse[200]
/**
 * @description
 *   新UI新增应急预案
 * @tags 应急预案接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPreplanNewAdd = (option?: DeepPartial<ApiAppPostPreplanNewAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPreplanNewAddResponseSuccess>('/preplan/new/add', { method: 'post', body: option}, config);

type ApiAppGetPreplanNewDetailIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetPreplanNewDetailId */
interface ApiAppGetPreplanNewDetailIdResponse {
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

 type ApiAppGetPreplanNewDetailIdResponseSuccess = ApiAppGetPreplanNewDetailIdResponse[200]
/**
 * @description
 *   新UI查询预案详情
 * @tags 应急预案接口
 * @produces *
 */
export const apiAppGetPreplanNewDetailId = (option?: DeepPartial<ApiAppGetPreplanNewDetailIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetPreplanNewDetailIdResponseSuccess>('/preplan/new/detail/:id', { method: 'get', path: option}, config);

type ApiAppPostPreplanNewUpdateOption = EmergencyPreplanUpdateInput;

/** @description response type for apiAppPostPreplanNewUpdate */
interface ApiAppPostPreplanNewUpdateResponse {
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

 type ApiAppPostPreplanNewUpdateResponseSuccess = ApiAppPostPreplanNewUpdateResponse[200]
/**
 * @description
 *   新UI编辑应急预案
 * @tags 应急预案接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostPreplanNewUpdate = (option?: DeepPartial<ApiAppPostPreplanNewUpdateOption>, config?: AxiosRequestConfig) => requester<ApiAppPostPreplanNewUpdateResponseSuccess>('/preplan/new/update', { method: 'post', body: option}, config);

type ApiAppGetPreplanQueryPreplanTypePreplanIdOption = {
    /**
    @description
      preplanId
    @format int64 */
    'preplanId': number
    };

/** @description response type for apiAppGetPreplanQueryPreplanTypePreplanId */
interface ApiAppGetPreplanQueryPreplanTypePreplanIdResponse {
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

 type ApiAppGetPreplanQueryPreplanTypePreplanIdResponseSuccess = ApiAppGetPreplanQueryPreplanTypePreplanIdResponse[200]
/**
 * @description
 *   queryPreplanType
 * @tags 应急预案接口
 * @produces *
 */
export const apiAppGetPreplanQueryPreplanTypePreplanId = (option?: DeepPartial<ApiAppGetPreplanQueryPreplanTypePreplanIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetPreplanQueryPreplanTypePreplanIdResponseSuccess>('/preplan/queryPreplanType/:preplanId', { method: 'get', path: option}, config);

type ApiAppGetPreplanStationListCompanyCodeOption = {
    /**
    @description
      companyCode */
    'companyCode': string
    };

/** @description response type for apiAppGetPreplanStationListCompanyCode */
interface ApiAppGetPreplanStationListCompanyCodeResponse {
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

 type ApiAppGetPreplanStationListCompanyCodeResponseSuccess = ApiAppGetPreplanStationListCompanyCodeResponse[200]
/**
 * @description
 *   getPreplanStationList
 * @tags 应急预案接口
 * @produces *
 */
export const apiAppGetPreplanStationListCompanyCode = (option?: DeepPartial<ApiAppGetPreplanStationListCompanyCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetPreplanStationListCompanyCodeResponseSuccess>('/preplan/station/list/:companyCode', { method: 'get', path: option}, config);

type ApiAppPutPreplanUpdateOption = EmergencyPreplanUpdateInput;

/** @description response type for apiAppPutPreplanUpdate */
interface ApiAppPutPreplanUpdateResponse {
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

 type ApiAppPutPreplanUpdateResponseSuccess = ApiAppPutPreplanUpdateResponse[200]
/**
 * @description
 *   编辑应急预案
 * @tags 应急预案接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPutPreplanUpdate = (option?: DeepPartial<ApiAppPutPreplanUpdateOption>, config?: AxiosRequestConfig) => requester<ApiAppPutPreplanUpdateResponseSuccess>('/preplan/update', { method: 'put', body: option}, config);

type ApiAppPostProgressOption = EmergencyProgressInput;

/** @description response type for apiAppPostProgress */
interface ApiAppPostProgressResponse {
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

 type ApiAppPostProgressResponseSuccess = ApiAppPostProgressResponse[200]
/**
 * @description
 *   添加应急进度
 * @tags 应急进度接口API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostProgress = (option?: DeepPartial<ApiAppPostProgressOption>, config?: AxiosRequestConfig) => requester<ApiAppPostProgressResponseSuccess>('/progress', { method: 'post', body: option}, config);

type ApiAppPostProgressEventStatusOption = EmergencyStatusInput;

/** @description response type for apiAppPostProgressEventStatus */
interface ApiAppPostProgressEventStatusResponse {
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

 type ApiAppPostProgressEventStatusResponseSuccess = ApiAppPostProgressEventStatusResponse[200]
/**
 * @description
 *   应急事件状态比较
 * @tags 应急进度接口API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostProgressEventStatus = (option?: DeepPartial<ApiAppPostProgressEventStatusOption>, config?: AxiosRequestConfig) => requester<ApiAppPostProgressEventStatusResponseSuccess>('/progress/eventStatus', { method: 'post', body: option}, config);

type ApiAppGetProgressGetCallCenterProcessIdOption = {
    /**
    @description
      processId
    @format int64 */
    'processId': number
    };

/** @description response type for apiAppGetProgressGetCallCenterProcessId */
interface ApiAppGetProgressGetCallCenterProcessIdResponse {
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

 type ApiAppGetProgressGetCallCenterProcessIdResponseSuccess = ApiAppGetProgressGetCallCenterProcessIdResponse[200]
/**
 * @description
 *   查询呼叫中心反馈节点详情
 * @tags 应急进度接口API
 * @produces *
 */
export const apiAppGetProgressGetCallCenterProcessId = (option?: DeepPartial<ApiAppGetProgressGetCallCenterProcessIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetProgressGetCallCenterProcessIdResponseSuccess>('/progress/getCallCenter/:processId', { method: 'get', path: option}, config);

type ApiAppGetProgressGetOrderFeedBackDetailsIdFeedbackTypeOption = {
    /**
    @description
      feedbackType
    @format int32 */
    'feedbackType': number
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetProgressGetOrderFeedBackDetailsIdFeedbackType */
interface ApiAppGetProgressGetOrderFeedBackDetailsIdFeedbackTypeResponse {
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

 type ApiAppGetProgressGetOrderFeedBackDetailsIdFeedbackTypeResponseSuccess = ApiAppGetProgressGetOrderFeedBackDetailsIdFeedbackTypeResponse[200]
/**
 * @description
 *   查询工单任务反馈详情
 * @tags 应急进度接口API
 * @produces *
 */
export const apiAppGetProgressGetOrderFeedBackDetailsIdFeedbackType = (option?: DeepPartial<ApiAppGetProgressGetOrderFeedBackDetailsIdFeedbackTypeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetProgressGetOrderFeedBackDetailsIdFeedbackTypeResponseSuccess>('/progress/getOrderFeedBackDetails/:id/:feedbackType', { method: 'get', path: option}, config);

type ApiAppPostProgressListOption = EmergencyProgressInput;

/** @description response type for apiAppPostProgressList */
interface ApiAppPostProgressListResponse {
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

 type ApiAppPostProgressListResponseSuccess = ApiAppPostProgressListResponse[200]
/**
 * @description
 *   查询应急进度列表
 * @tags 应急进度接口API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostProgressList = (option?: DeepPartial<ApiAppPostProgressListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostProgressListResponseSuccess>('/progress/list', { method: 'post', body: option}, config);

type ApiAppGetProgressMobileGetFeedbackListIdSortFlagOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    /**
    @description
      sortFlag
    @format int32 */
    'sortFlag': number
    };

/** @description response type for apiAppGetProgressMobileGetFeedbackListIdSortFlag */
interface ApiAppGetProgressMobileGetFeedbackListIdSortFlagResponse {
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

 type ApiAppGetProgressMobileGetFeedbackListIdSortFlagResponseSuccess = ApiAppGetProgressMobileGetFeedbackListIdSortFlagResponse[200]
/**
 * @description
 *   获取节点反馈记录（h5）
 * @tags 应急进度接口API
 * @produces *
 */
export const apiAppGetProgressMobileGetFeedbackListIdSortFlag = (option?: DeepPartial<ApiAppGetProgressMobileGetFeedbackListIdSortFlagOption>, config?: AxiosRequestConfig) => requester<ApiAppGetProgressMobileGetFeedbackListIdSortFlagResponseSuccess>('/progress/mobile/getFeedbackList/:id/:sortFlag', { method: 'get', path: option}, config);

type ApiAppGetProgressMobileNodeCompleteIdNodeNameOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    /**
    @description
      nodeName */
    'nodeName': string
    };

/** @description response type for apiAppGetProgressMobileNodeCompleteIdNodeName */
interface ApiAppGetProgressMobileNodeCompleteIdNodeNameResponse {
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

 type ApiAppGetProgressMobileNodeCompleteIdNodeNameResponseSuccess = ApiAppGetProgressMobileNodeCompleteIdNodeNameResponse[200]
/**
 * @description
 *   自定义节点完成反馈（h5）---可以使用/dict/makeTagAndLog接口
 * @tags 应急进度接口API
 * @produces *
 */
export const apiAppGetProgressMobileNodeCompleteIdNodeName = (option?: DeepPartial<ApiAppGetProgressMobileNodeCompleteIdNodeNameOption>, config?: AxiosRequestConfig) => requester<ApiAppGetProgressMobileNodeCompleteIdNodeNameResponseSuccess>('/progress/mobile/nodeComplete/:id/:nodeName', { method: 'get', path: option}, config);

type ApiAppGetProgressModifyCallStatusCallIdOption = {
    /**
    @description
      callId
    @format int64 */
    'callId': number
    };

/** @description response type for apiAppGetProgressModifyCallStatusCallId */
interface ApiAppGetProgressModifyCallStatusCallIdResponse {
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

 type ApiAppGetProgressModifyCallStatusCallIdResponseSuccess = ApiAppGetProgressModifyCallStatusCallIdResponse[200]
/**
 * @description
 *   应急事件追加催单已读未读状态修改
 * @tags 应急进度接口API
 * @produces *
 */
export const apiAppGetProgressModifyCallStatusCallId = (option?: DeepPartial<ApiAppGetProgressModifyCallStatusCallIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetProgressModifyCallStatusCallIdResponseSuccess>('/progress/modifyCallStatus/:callId', { method: 'get', path: option}, config);

type ApiAppPostProgressNodeIcomeFeedbackOption = EmergencyIcomeMsgInput;

/** @description response type for apiAppPostProgressNodeIcomeFeedback */
interface ApiAppPostProgressNodeIcomeFeedbackResponse {
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

 type ApiAppPostProgressNodeIcomeFeedbackResponseSuccess = ApiAppPostProgressNodeIcomeFeedbackResponse[200]
/**
 * @description
 *   icome中反馈未完成节点
 * @tags 应急进度接口API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostProgressNodeIcomeFeedback = (option?: DeepPartial<ApiAppPostProgressNodeIcomeFeedbackOption>, config?: AxiosRequestConfig) => requester<ApiAppPostProgressNodeIcomeFeedbackResponseSuccess>('/progress/node/icome/feedback', { method: 'post', body: option}, config);

type ApiAppGetProgressIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetProgressId */
interface ApiAppGetProgressIdResponse {
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

 type ApiAppGetProgressIdResponseSuccess = ApiAppGetProgressIdResponse[200]
/**
 * @description
 *   根据主键id查询应急进度详情
 * @tags 应急进度接口API
 * @produces *
 */
export const apiAppGetProgressId = (option?: DeepPartial<ApiAppGetProgressIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetProgressIdResponseSuccess>('/progress/:id', { method: 'get', path: option}, config);

type ApiAppGetProgressNoticeDetailCompCodeOption = {
    /**
    @description
      compCode */
    'compCode': string
    };

/** @description response type for apiAppGetProgressNoticeDetailCompCode */
interface ApiAppGetProgressNoticeDetailCompCodeResponse {
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

 type ApiAppGetProgressNoticeDetailCompCodeResponseSuccess = ApiAppGetProgressNoticeDetailCompCodeResponse[200]
/**
 * @description
 *   根据公司编码获取进度通知配置
 * @tags 进度通知配置
 * @produces *
 */
export const apiAppGetProgressNoticeDetailCompCode = (option?: DeepPartial<ApiAppGetProgressNoticeDetailCompCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetProgressNoticeDetailCompCodeResponseSuccess>('/progressNotice/detail/:compCode', { method: 'get', path: option}, config);

type ApiAppPostProgressNoticeSaveOption = ProgressNoticeCnfInput;

/** @description response type for apiAppPostProgressNoticeSave */
interface ApiAppPostProgressNoticeSaveResponse {
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

 type ApiAppPostProgressNoticeSaveResponseSuccess = ApiAppPostProgressNoticeSaveResponse[200]
/**
 * @description
 *   保存通知配置
 * @tags 进度通知配置
 * @produces *
 * @consumes application/json
 */
export const apiAppPostProgressNoticeSave = (option?: DeepPartial<ApiAppPostProgressNoticeSaveOption>, config?: AxiosRequestConfig) => requester<ApiAppPostProgressNoticeSaveResponseSuccess>('/progressNotice/save', { method: 'post', body: option}, config);

/** @description response type for apiAppGetPushVehicleAndPosition */
interface ApiAppGetPushVehicleAndPositionResponse {
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

 type ApiAppGetPushVehicleAndPositionResponseSuccess = ApiAppGetPushVehicleAndPositionResponse[200]
/**
 * @description
 *   pushVehicleAndPosition
 * @tags task-controller
 * @produces *
 */
export const apiAppGetPushVehicleAndPosition = (config?: AxiosRequestConfig) => requester<ApiAppGetPushVehicleAndPositionResponseSuccess>('/pushVehicleAndPosition', { method: 'get'}, config);

type ApiAppGetResourceMapCarCpmoCodeEventIdOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetResourceMapCarCpmoCodeEventId */
interface ApiAppGetResourceMapCarCpmoCodeEventIdResponse {
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

 type ApiAppGetResourceMapCarCpmoCodeEventIdResponseSuccess = ApiAppGetResourceMapCarCpmoCodeEventIdResponse[200]
/**
 * @description
 *   实体查询全部抢险车
 * @tags 资源调配地图接口模块
 * @produces *
 */
export const apiAppGetResourceMapCarCpmoCodeEventId = (option?: DeepPartial<ApiAppGetResourceMapCarCpmoCodeEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetResourceMapCarCpmoCodeEventIdResponseSuccess>('/resource/map/car/:cpmoCode/:eventId', { method: 'get', path: option}, config);

type ApiAppGetResourceMapGasCarCpmoCodeEventIdOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetResourceMapGasCarCpmoCodeEventId */
interface ApiAppGetResourceMapGasCarCpmoCodeEventIdResponse {
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

 type ApiAppGetResourceMapGasCarCpmoCodeEventIdResponseSuccess = ApiAppGetResourceMapGasCarCpmoCodeEventIdResponse[200]
/**
 * @description
 *   实体查询全部补气车
 * @tags 资源调配地图接口模块
 * @produces *
 */
export const apiAppGetResourceMapGasCarCpmoCodeEventId = (option?: DeepPartial<ApiAppGetResourceMapGasCarCpmoCodeEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetResourceMapGasCarCpmoCodeEventIdResponseSuccess>('/resource/map/gasCar/:cpmoCode/:eventId', { method: 'get', path: option}, config);

type ApiAppGetResourceMapPersonCpmoCodeEventIdOption = {
    /**
    @description
      cpmoCode */
    'cpmoCode': string
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetResourceMapPersonCpmoCodeEventId */
interface ApiAppGetResourceMapPersonCpmoCodeEventIdResponse {
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

 type ApiAppGetResourceMapPersonCpmoCodeEventIdResponseSuccess = ApiAppGetResourceMapPersonCpmoCodeEventIdResponse[200]
/**
 * @description
 *   全部外勤人员, 无事件时，eventId传0。
 * @tags 资源调配地图接口模块
 * @produces *
 */
export const apiAppGetResourceMapPersonCpmoCodeEventId = (option?: DeepPartial<ApiAppGetResourceMapPersonCpmoCodeEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetResourceMapPersonCpmoCodeEventIdResponseSuccess>('/resource/map/person/:cpmoCode/:eventId', { method: 'get', path: option}, config);

type ApiAppPostReviewAddOption = EmergencyReviewInput;

/** @description response type for apiAppPostReviewAdd */
interface ApiAppPostReviewAddResponse {
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

 type ApiAppPostReviewAddResponseSuccess = ApiAppPostReviewAddResponse[200]
/**
 * @description
 *   添加复盘信息接口
 * @tags 复盘接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostReviewAdd = (option?: DeepPartial<ApiAppPostReviewAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostReviewAddResponseSuccess>('/review/add', { method: 'post', body: option}, config);

type ApiAppGetReviewByEventIdEventIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    };

/** @description response type for apiAppGetReviewByEventIdEventId */
interface ApiAppGetReviewByEventIdEventIdResponse {
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

 type ApiAppGetReviewByEventIdEventIdResponseSuccess = ApiAppGetReviewByEventIdEventIdResponse[200]
/**
 * @description
 *   byEventId
 * @tags 复盘接口
 * @produces *
 */
export const apiAppGetReviewByEventIdEventId = (option?: DeepPartial<ApiAppGetReviewByEventIdEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetReviewByEventIdEventIdResponseSuccess>('/review/byEventId/:eventId', { method: 'get', path: option}, config);

type ApiAppPostSceneNodeAddNodeOption = SceneNodeInput;

/** @description response type for apiAppPostSceneNodeAddNode */
interface ApiAppPostSceneNodeAddNodeResponse {
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

 type ApiAppPostSceneNodeAddNodeResponseSuccess = ApiAppPostSceneNodeAddNodeResponse[200]
/**
 * @description
 *   添加预案流程环节
 * @tags 场景预案流程环节API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeAddNode = (option?: DeepPartial<ApiAppPostSceneNodeAddNodeOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeAddNodeResponseSuccess>('/scene/node/addNode', { method: 'post', body: option}, config);

/** @description response type for apiAppGetSceneNodeCommon */
interface ApiAppGetSceneNodeCommonResponse {
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

 type ApiAppGetSceneNodeCommonResponseSuccess = ApiAppGetSceneNodeCommonResponse[200]
/**
 * @description
 *   预置环节列表
 * @tags 场景预案流程环节API
 * @produces *
 */
export const apiAppGetSceneNodeCommon = (config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeCommonResponseSuccess>('/scene/node/common', { method: 'get'}, config);

type ApiAppGetSceneNodeDeleteNodeNodeIdOption = {
    /**
    @description
      nodeId
    @format int64 */
    'nodeId': number
    };

/** @description response type for apiAppGetSceneNodeDeleteNodeNodeId */
interface ApiAppGetSceneNodeDeleteNodeNodeIdResponse {
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

 type ApiAppGetSceneNodeDeleteNodeNodeIdResponseSuccess = ApiAppGetSceneNodeDeleteNodeNodeIdResponse[200]
/**
 * @description
 *   删除预案流程环节
 * @tags 场景预案流程环节API
 * @produces *
 */
export const apiAppGetSceneNodeDeleteNodeNodeId = (option?: DeepPartial<ApiAppGetSceneNodeDeleteNodeNodeIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeDeleteNodeNodeIdResponseSuccess>('/scene/node/deleteNode/:nodeId', { method: 'get', path: option}, config);

type ApiAppPostSceneNodeEditNodeOption = SceneNodeInput;

/** @description response type for apiAppPostSceneNodeEditNode */
interface ApiAppPostSceneNodeEditNodeResponse {
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

 type ApiAppPostSceneNodeEditNodeResponseSuccess = ApiAppPostSceneNodeEditNodeResponse[200]
/**
 * @description
 *   编辑预案流程环节
 * @tags 场景预案流程环节API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeEditNode = (option?: DeepPartial<ApiAppPostSceneNodeEditNodeOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeEditNodeResponseSuccess>('/scene/node/editNode', { method: 'post', body: option}, config);

type ApiAppGetSceneNodeGetNodeListCompanyCodeScenePreplanIdOption = {
    /**
    @description
      companyCode */
    'companyCode': string
    /**
    @description
      scenePreplanId
    @format int64 */
    'scenePreplanId': number
    };

/** @description response type for apiAppGetSceneNodeGetNodeListCompanyCodeScenePreplanId */
interface ApiAppGetSceneNodeGetNodeListCompanyCodeScenePreplanIdResponse {
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

 type ApiAppGetSceneNodeGetNodeListCompanyCodeScenePreplanIdResponseSuccess = ApiAppGetSceneNodeGetNodeListCompanyCodeScenePreplanIdResponse[200]
/**
 * @description
 *   获取预案流程环节列表
 * @tags 场景预案流程环节API
 * @produces *
 */
export const apiAppGetSceneNodeGetNodeListCompanyCodeScenePreplanId = (option?: DeepPartial<ApiAppGetSceneNodeGetNodeListCompanyCodeScenePreplanIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeGetNodeListCompanyCodeScenePreplanIdResponseSuccess>('/scene/node/getNodeList/:companyCode/:scenePreplanId', { method: 'get', path: option}, config);

type ApiAppPostSceneNodeNoticeAddOption = AddNodeTaskInput;

/** @description response type for apiAppPostSceneNodeNoticeAdd */
interface ApiAppPostSceneNodeNoticeAddResponse {
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

 type ApiAppPostSceneNodeNoticeAddResponseSuccess = ApiAppPostSceneNodeNoticeAddResponse[200]
/**
 * @description
 *   通知策略添加
 * @tags 场景预案流程节点通知策略API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeNoticeAdd = (option?: DeepPartial<ApiAppPostSceneNodeNoticeAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeNoticeAddResponseSuccess>('/scene/node/notice/add', { method: 'post', body: option}, config);

type ApiAppGetSceneNodeNoticeByIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetSceneNodeNoticeByIdId */
interface ApiAppGetSceneNodeNoticeByIdIdResponse {
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

 type ApiAppGetSceneNodeNoticeByIdIdResponseSuccess = ApiAppGetSceneNodeNoticeByIdIdResponse[200]
/**
 * @description
 *   vv1 - 通知策略详情 vv1
 * @tags 场景预案流程节点通知策略API
 * @produces *
 */
export const apiAppGetSceneNodeNoticeByIdId = (option?: DeepPartial<ApiAppGetSceneNodeNoticeByIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeNoticeByIdIdResponseSuccess>('/scene/node/notice/byId/:id', { method: 'get', path: option}, config);

type ApiAppGetSceneNodeNoticeDelIdOption = {
    /**
    @description
      id */
    'id': string
    };

/** @description response type for apiAppGetSceneNodeNoticeDelId */
interface ApiAppGetSceneNodeNoticeDelIdResponse {
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

 type ApiAppGetSceneNodeNoticeDelIdResponseSuccess = ApiAppGetSceneNodeNoticeDelIdResponse[200]
/**
 * @description
 *   通知策略删除 多个删除,号分割
 * @tags 场景预案流程节点通知策略API
 * @produces *
 */
export const apiAppGetSceneNodeNoticeDelId = (option?: DeepPartial<ApiAppGetSceneNodeNoticeDelIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeNoticeDelIdResponseSuccess>('/scene/node/notice/del/:id', { method: 'get', path: option}, config);

type ApiAppPostSceneNodeNoticeGetSendStrategyEventIdNodeIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    /**
    @description
      nodeId
    @format int64 */
    'nodeId': number
    };

/** @description response type for apiAppPostSceneNodeNoticeGetSendStrategyEventIdNodeId */
interface ApiAppPostSceneNodeNoticeGetSendStrategyEventIdNodeIdResponse {
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

 type ApiAppPostSceneNodeNoticeGetSendStrategyEventIdNodeIdResponseSuccess = ApiAppPostSceneNodeNoticeGetSendStrategyEventIdNodeIdResponse[200]
/**
 * @description
 *   获取启动时的通知策略信息
 * @tags 场景预案流程节点通知策略API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeNoticeGetSendStrategyEventIdNodeId = (option?: DeepPartial<ApiAppPostSceneNodeNoticeGetSendStrategyEventIdNodeIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeNoticeGetSendStrategyEventIdNodeIdResponseSuccess>('/scene/node/notice/getSendStrategy/:eventId/:nodeId', { method: 'post', path: option}, config);

type ApiAppPostSceneNodeNoticeListOption = SceneTaskNodeInput;

/** @description response type for apiAppPostSceneNodeNoticeList */
interface ApiAppPostSceneNodeNoticeListResponse {
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

 type ApiAppPostSceneNodeNoticeListResponseSuccess = ApiAppPostSceneNodeNoticeListResponse[200]
/**
 * @description
 *   vv1 - 通知策略列表 vv1
 * @tags 场景预案流程节点通知策略API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeNoticeList = (option?: DeepPartial<ApiAppPostSceneNodeNoticeListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeNoticeListResponseSuccess>('/scene/node/notice/list', { method: 'post', body: option}, config);

type ApiAppPostSceneNodeNoticeUpdOption = AddNodeTaskInput;

/** @description response type for apiAppPostSceneNodeNoticeUpd */
interface ApiAppPostSceneNodeNoticeUpdResponse {
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

 type ApiAppPostSceneNodeNoticeUpdResponseSuccess = ApiAppPostSceneNodeNoticeUpdResponse[200]
/**
 * @description
 *   通知策略修改
 * @tags 场景预案流程节点通知策略API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeNoticeUpd = (option?: DeepPartial<ApiAppPostSceneNodeNoticeUpdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeNoticeUpdResponseSuccess>('/scene/node/notice/upd', { method: 'post', body: option}, config);

type ApiAppPostSceneNodeTaskAddOption = AddNodeTaskInput;

/** @description response type for apiAppPostSceneNodeTaskAdd */
interface ApiAppPostSceneNodeTaskAddResponse {
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

 type ApiAppPostSceneNodeTaskAddResponseSuccess = ApiAppPostSceneNodeTaskAddResponse[200]
/**
 * @description
 *   任务措施添加
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeTaskAdd = (option?: DeepPartial<ApiAppPostSceneNodeTaskAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeTaskAddResponseSuccess>('/scene/node/task/add', { method: 'post', body: option}, config);

type ApiAppGetSceneNodeTaskByIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetSceneNodeTaskByIdId */
interface ApiAppGetSceneNodeTaskByIdIdResponse {
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

 type ApiAppGetSceneNodeTaskByIdIdResponseSuccess = ApiAppGetSceneNodeTaskByIdIdResponse[200]
/**
 * @description
 *   任务措施详情
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiAppGetSceneNodeTaskByIdId = (option?: DeepPartial<ApiAppGetSceneNodeTaskByIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeTaskByIdIdResponseSuccess>('/scene/node/task/byId/:id', { method: 'get', path: option}, config);

type ApiAppPostSceneNodeTaskCheckItcodeOption = CheckItcodeInput;

/** @description response type for apiAppPostSceneNodeTaskCheckItcode */
interface ApiAppPostSceneNodeTaskCheckItcodeResponse {
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

 type ApiAppPostSceneNodeTaskCheckItcodeResponseSuccess = ApiAppPostSceneNodeTaskCheckItcodeResponse[200]
/**
 * @description
 *   校验人在任务里是否存在
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeTaskCheckItcode = (option?: DeepPartial<ApiAppPostSceneNodeTaskCheckItcodeOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeTaskCheckItcodeResponseSuccess>('/scene/node/task/checkItcode', { method: 'post', body: option}, config);

type ApiAppGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    /**
    @description
      eventName */
    'eventName': string
    /**
    @description
      preplanId
    @format int64 */
    'preplanId': number
    };

/** @description response type for apiAppGetSceneNodeTaskCheckTaskEventIdPreplanIdEventName */
interface ApiAppGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameResponse {
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

 type ApiAppGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameResponseSuccess = ApiAppGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameResponse[200]
/**
 * @description
 *   checkTask
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiAppGetSceneNodeTaskCheckTaskEventIdPreplanIdEventName = (option?: DeepPartial<ApiAppGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeTaskCheckTaskEventIdPreplanIdEventNameResponseSuccess>('/scene/node/task/checkTask/:eventId/:preplanId/:eventName', { method: 'get', path: option}, config);

type ApiAppGetSceneNodeTaskCheckTaskIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetSceneNodeTaskCheckTaskId */
interface ApiAppGetSceneNodeTaskCheckTaskIdResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: number
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

 type ApiAppGetSceneNodeTaskCheckTaskIdResponseSuccess = ApiAppGetSceneNodeTaskCheckTaskIdResponse[200]
/**
 * @description
 *   校验必须任务是否都完成
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiAppGetSceneNodeTaskCheckTaskId = (option?: DeepPartial<ApiAppGetSceneNodeTaskCheckTaskIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeTaskCheckTaskIdResponseSuccess>('/scene/node/task/checkTask/:id', { method: 'get', path: option}, config);

type ApiAppGetSceneNodeTaskDelIdOption = {
    /**
    @description
      id */
    'id': string
    };

/** @description response type for apiAppGetSceneNodeTaskDelId */
interface ApiAppGetSceneNodeTaskDelIdResponse {
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

 type ApiAppGetSceneNodeTaskDelIdResponseSuccess = ApiAppGetSceneNodeTaskDelIdResponse[200]
/**
 * @description
 *   任务措施删除 多个删除,号分割
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiAppGetSceneNodeTaskDelId = (option?: DeepPartial<ApiAppGetSceneNodeTaskDelIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeTaskDelIdResponseSuccess>('/scene/node/task/del/:id', { method: 'get', path: option}, config);

type ApiAppPostSceneNodeTaskGetTaskOption = TaskInput;

/** @description response type for apiAppPostSceneNodeTaskGetTask */
interface ApiAppPostSceneNodeTaskGetTaskResponse {
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

 type ApiAppPostSceneNodeTaskGetTaskResponseSuccess = ApiAppPostSceneNodeTaskGetTaskResponse[200]
/**
 * @description
 *   任务措施/通知策略预置任务
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeTaskGetTask = (option?: DeepPartial<ApiAppPostSceneNodeTaskGetTaskOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeTaskGetTaskResponseSuccess>('/scene/node/task/getTask', { method: 'post', body: option}, config);

type ApiAppGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdOption = {
    /**
    @description
      nodeName */
    'nodeName': string
    /**
    @description
      scenePreplanId
    @format int64 */
    'scenePreplanId': number
    };

/** @description response type for apiAppGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanId */
interface ApiAppGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdResponse {
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

 type ApiAppGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdResponseSuccess = ApiAppGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdResponse[200]
/**
 * @description
 *   获取对应节点下的任务节点id
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiAppGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanId = (option?: DeepPartial<ApiAppGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeTaskGetTaskIdByNodeNameNodeNameScenePreplanIdResponseSuccess>('/scene/node/task/getTaskIdByNodeName/:nodeName/:scenePreplanId', { method: 'get', path: option}, config);

type ApiAppPostSceneNodeTaskListOption = SceneTaskNodeInput;

/** @description response type for apiAppPostSceneNodeTaskList */
interface ApiAppPostSceneNodeTaskListResponse {
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

 type ApiAppPostSceneNodeTaskListResponseSuccess = ApiAppPostSceneNodeTaskListResponse[200]
/**
 * @description
 *   vv1 - 任务措施列表
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeTaskList = (option?: DeepPartial<ApiAppPostSceneNodeTaskListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeTaskListResponseSuccess>('/scene/node/task/list', { method: 'post', body: option}, config);

type ApiAppPostSceneNodeTaskStartTaskOption = StartTaskExampleInput;

/** @description response type for apiAppPostSceneNodeTaskStartTask */
interface ApiAppPostSceneNodeTaskStartTaskResponse {
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

 type ApiAppPostSceneNodeTaskStartTaskResponseSuccess = ApiAppPostSceneNodeTaskStartTaskResponse[200]
/**
 * @description
 *   startTask
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeTaskStartTask = (option?: DeepPartial<ApiAppPostSceneNodeTaskStartTaskOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeTaskStartTaskResponseSuccess>('/scene/node/task/startTask', { method: 'post', body: option}, config);

type ApiAppPostSceneNodeTaskUpdOption = AddNodeTaskInput;

/** @description response type for apiAppPostSceneNodeTaskUpd */
interface ApiAppPostSceneNodeTaskUpdResponse {
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

 type ApiAppPostSceneNodeTaskUpdResponseSuccess = ApiAppPostSceneNodeTaskUpdResponse[200]
/**
 * @description
 *   任务措施修改
 * @tags 场景预案流程节点任务措施API
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneNodeTaskUpd = (option?: DeepPartial<ApiAppPostSceneNodeTaskUpdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneNodeTaskUpdResponseSuccess>('/scene/node/task/upd', { method: 'post', body: option}, config);

type ApiAppGetSceneNodeTaskCompanyCodeNodeIdOption = {
    /**
    @description
      companyCode */
    'companyCode': string
    /**
    @description
      nodeId
    @format int64 */
    'nodeId': number
    };

/** @description response type for apiAppGetSceneNodeTaskCompanyCodeNodeId */
interface ApiAppGetSceneNodeTaskCompanyCodeNodeIdResponse {
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

 type ApiAppGetSceneNodeTaskCompanyCodeNodeIdResponseSuccess = ApiAppGetSceneNodeTaskCompanyCodeNodeIdResponse[200]
/**
 * @description
 *   获取常规预案预置任务
 * @tags 场景预案流程节点任务措施API
 * @produces *
 */
export const apiAppGetSceneNodeTaskCompanyCodeNodeId = (option?: DeepPartial<ApiAppGetSceneNodeTaskCompanyCodeNodeIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneNodeTaskCompanyCodeNodeIdResponseSuccess>('/scene/node/task/:companyCode/:nodeId', { method: 'get', path: option}, config);

type ApiAppPostSceneLabelAddLabelOption = EmergencyEnterpriseDictLabelDataAddInput;

/** @description response type for apiAppPostSceneLabelAddLabel */
interface ApiAppPostSceneLabelAddLabelResponse {
    /**
     * @description
     *   OK
     */
    200: {
        [propertyName: string]: any
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

 type ApiAppPostSceneLabelAddLabelResponseSuccess = ApiAppPostSceneLabelAddLabelResponse[200]
/**
 * @description
 *   添加标签
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneLabelAddLabel = (option?: DeepPartial<ApiAppPostSceneLabelAddLabelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneLabelAddLabelResponseSuccess>('/sceneLabel/addLabel', { method: 'post', body: option}, config);

type ApiAppPostSceneLabelAddLabelByEventIdOption = AddLabelInput;

/** @description response type for apiAppPostSceneLabelAddLabelByEventId */
interface ApiAppPostSceneLabelAddLabelByEventIdResponse {
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

 type ApiAppPostSceneLabelAddLabelByEventIdResponseSuccess = ApiAppPostSceneLabelAddLabelByEventIdResponse[200]
/**
 * @description
 *   添加事件关联标签
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneLabelAddLabelByEventId = (option?: DeepPartial<ApiAppPostSceneLabelAddLabelByEventIdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneLabelAddLabelByEventIdResponseSuccess>('/sceneLabel/addLabelByEventId', { method: 'post', body: option}, config);

type ApiAppPostSceneLabelAiLabelOption = AILabelInput;

/** @description response type for apiAppPostSceneLabelAiLabel */
interface ApiAppPostSceneLabelAiLabelResponse {
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

 type ApiAppPostSceneLabelAiLabelResponseSuccess = ApiAppPostSceneLabelAiLabelResponse[200]
/**
 * @description
 *   AI识别语义标签
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneLabelAiLabel = (option?: DeepPartial<ApiAppPostSceneLabelAiLabelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneLabelAiLabelResponseSuccess>('/sceneLabel/ai/label', { method: 'post', body: option}, config);

type ApiAppPostSceneLabelBatchLabelToPreplanOption = BatchLabelToPreplanInput;

/** @description response type for apiAppPostSceneLabelBatchLabelToPreplan */
interface ApiAppPostSceneLabelBatchLabelToPreplanResponse {
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

 type ApiAppPostSceneLabelBatchLabelToPreplanResponseSuccess = ApiAppPostSceneLabelBatchLabelToPreplanResponse[200]
/**
 * @description
 *   绑定标签到预案
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneLabelBatchLabelToPreplan = (option?: DeepPartial<ApiAppPostSceneLabelBatchLabelToPreplanOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneLabelBatchLabelToPreplanResponseSuccess>('/sceneLabel/batchLabelToPreplan', { method: 'post', body: option}, config);

type ApiAppGetSceneLabelCheckLabelByEventIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetSceneLabelCheckLabelByEventIdId */
interface ApiAppGetSceneLabelCheckLabelByEventIdIdResponse {
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

 type ApiAppGetSceneLabelCheckLabelByEventIdIdResponseSuccess = ApiAppGetSceneLabelCheckLabelByEventIdIdResponse[200]
/**
 * @description
 *   初始化事件关联标签结构
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiAppGetSceneLabelCheckLabelByEventIdId = (option?: DeepPartial<ApiAppGetSceneLabelCheckLabelByEventIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneLabelCheckLabelByEventIdIdResponseSuccess>('/sceneLabel/checkLabelByEventId/:id', { method: 'get', path: option}, config);

type ApiAppGetSceneLabelDelLabelByIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetSceneLabelDelLabelByIdId */
interface ApiAppGetSceneLabelDelLabelByIdIdResponse {
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

 type ApiAppGetSceneLabelDelLabelByIdIdResponseSuccess = ApiAppGetSceneLabelDelLabelByIdIdResponse[200]
/**
 * @description
 *   删除标签
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiAppGetSceneLabelDelLabelByIdId = (option?: DeepPartial<ApiAppGetSceneLabelDelLabelByIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneLabelDelLabelByIdIdResponseSuccess>('/sceneLabel/delLabelById/:id', { method: 'get', path: option}, config);

type ApiAppGetSceneLabelDelLabelIdByEventIdEventIdLabelIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    /**
    @description
      labelId
    @format int64 */
    'labelId': number
    };

/** @description response type for apiAppGetSceneLabelDelLabelIdByEventIdEventIdLabelId */
interface ApiAppGetSceneLabelDelLabelIdByEventIdEventIdLabelIdResponse {
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

 type ApiAppGetSceneLabelDelLabelIdByEventIdEventIdLabelIdResponseSuccess = ApiAppGetSceneLabelDelLabelIdByEventIdEventIdLabelIdResponse[200]
/**
 * @description
 *   delLabelIdByEventId
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiAppGetSceneLabelDelLabelIdByEventIdEventIdLabelId = (option?: DeepPartial<ApiAppGetSceneLabelDelLabelIdByEventIdEventIdLabelIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneLabelDelLabelIdByEventIdEventIdLabelIdResponseSuccess>('/sceneLabel/delLabelIdByEventId/:eventId/:labelId', { method: 'get', path: option}, config);

type ApiAppGetSceneLabelGetAiLabelIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetSceneLabelGetAiLabelId */
interface ApiAppGetSceneLabelGetAiLabelIdResponse {
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

 type ApiAppGetSceneLabelGetAiLabelIdResponseSuccess = ApiAppGetSceneLabelGetAiLabelIdResponse[200]
/**
 * @description
 *   获取初始化事件关联标签
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiAppGetSceneLabelGetAiLabelId = (option?: DeepPartial<ApiAppGetSceneLabelGetAiLabelIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneLabelGetAiLabelIdResponseSuccess>('/sceneLabel/getAiLabel/:id', { method: 'get', path: option}, config);

type ApiAppGetSceneLabelGetEventLabelByEventIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetSceneLabelGetEventLabelByEventIdId */
interface ApiAppGetSceneLabelGetEventLabelByEventIdIdResponse {
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

 type ApiAppGetSceneLabelGetEventLabelByEventIdIdResponseSuccess = ApiAppGetSceneLabelGetEventLabelByEventIdIdResponse[200]
/**
 * @description
 *   获取初始化事件关联标签
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiAppGetSceneLabelGetEventLabelByEventIdId = (option?: DeepPartial<ApiAppGetSceneLabelGetEventLabelByEventIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneLabelGetEventLabelByEventIdIdResponseSuccess>('/sceneLabel/getEventLabelByEventId/:id', { method: 'get', path: option}, config);

type ApiAppGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelOption = {
    /**
    @description
      level
    @format int32 */
    'level': number
    /**
    @description
      preplanId
    @format int64 */
    'preplanId': number
    };

/** @description response type for apiAppGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevel */
interface ApiAppGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelResponse {
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

 type ApiAppGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelResponseSuccess = ApiAppGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelResponse[200]
/**
 * @description
 *   getGroupIdByPreplanIdAndLevel
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiAppGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevel = (option?: DeepPartial<ApiAppGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneLabelGetGroupIdByPreplanIdAndLevelPreplanIdLevelResponseSuccess>('/sceneLabel/getGroupIdByPreplanIdAndLevel/:preplanId/:level', { method: 'get', path: option}, config);

type ApiAppPostSceneLabelGetLevelOption = PreplanLevelIutput;

/** @description response type for apiAppPostSceneLabelGetLevel */
interface ApiAppPostSceneLabelGetLevelResponse {
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

 type ApiAppPostSceneLabelGetLevelResponseSuccess = ApiAppPostSceneLabelGetLevelResponse[200]
/**
 * @description
 *   根据预案获取推荐级别
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneLabelGetLevel = (option?: DeepPartial<ApiAppPostSceneLabelGetLevelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneLabelGetLevelResponseSuccess>('/sceneLabel/getLevel', { method: 'post', body: option}, config);

type ApiAppGetSceneLabelGetPipePreplanIdCodeOption = {
    /**
    @description
      code */
    'code': string
    /**
    @description
      preplanId
    @format int64 */
    'preplanId': number
    };

/** @description response type for apiAppGetSceneLabelGetPipePreplanIdCode */
interface ApiAppGetSceneLabelGetPipePreplanIdCodeResponse {
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

 type ApiAppGetSceneLabelGetPipePreplanIdCodeResponseSuccess = ApiAppGetSceneLabelGetPipePreplanIdCodeResponse[200]
/**
 * @description
 *   当前预案选择的管段是否被其他预案添加过
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiAppGetSceneLabelGetPipePreplanIdCode = (option?: DeepPartial<ApiAppGetSceneLabelGetPipePreplanIdCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneLabelGetPipePreplanIdCodeResponseSuccess>('/sceneLabel/getPipe/:preplanId/:code', { method: 'get', path: option}, config);

type ApiAppPostSceneLabelGetRecommendPreplanOption = RecommendPreplanInput;

/** @description response type for apiAppPostSceneLabelGetRecommendPreplan */
interface ApiAppPostSceneLabelGetRecommendPreplanResponse {
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

 type ApiAppPostSceneLabelGetRecommendPreplanResponseSuccess = ApiAppPostSceneLabelGetRecommendPreplanResponse[200]
/**
 * @description
 *   获取推荐预案
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneLabelGetRecommendPreplan = (option?: DeepPartial<ApiAppPostSceneLabelGetRecommendPreplanOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneLabelGetRecommendPreplanResponseSuccess>('/sceneLabel/getRecommendPreplan', { method: 'post', body: option}, config);

type ApiAppPostSceneLabelOutQuerySceneLabelOption = EmergencyEnterpriseDictLabelDataInput;

/** @description response type for apiAppPostSceneLabelOutQuerySceneLabel */
interface ApiAppPostSceneLabelOutQuerySceneLabelResponse {
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

 type ApiAppPostSceneLabelOutQuerySceneLabelResponseSuccess = ApiAppPostSceneLabelOutQuerySceneLabelResponse[200]
/**
 * @description
 *   添加标签回显接口
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneLabelOutQuerySceneLabel = (option?: DeepPartial<ApiAppPostSceneLabelOutQuerySceneLabelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneLabelOutQuerySceneLabelResponseSuccess>('/sceneLabel/out/querySceneLabel', { method: 'post', body: option}, config);

type ApiAppGetSceneLabelQeuryWeightByPreplanIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetSceneLabelQeuryWeightByPreplanIdId */
interface ApiAppGetSceneLabelQeuryWeightByPreplanIdIdResponse {
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

 type ApiAppGetSceneLabelQeuryWeightByPreplanIdIdResponseSuccess = ApiAppGetSceneLabelQeuryWeightByPreplanIdIdResponse[200]
/**
 * @description
 *   获取场景预案关联权重标签接口
 * @tags 场景预案标签管理
 * @produces *
 */
export const apiAppGetSceneLabelQeuryWeightByPreplanIdId = (option?: DeepPartial<ApiAppGetSceneLabelQeuryWeightByPreplanIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSceneLabelQeuryWeightByPreplanIdIdResponseSuccess>('/sceneLabel/qeuryWeightByPreplanId/:id', { method: 'get', path: option}, config);

type ApiAppPostSceneLabelQuerySceneLabelOption = EmergencyEnterpriseDictLabelDataInput;

/** @description response type for apiAppPostSceneLabelQuerySceneLabel */
interface ApiAppPostSceneLabelQuerySceneLabelResponse {
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

 type ApiAppPostSceneLabelQuerySceneLabelResponseSuccess = ApiAppPostSceneLabelQuerySceneLabelResponse[200]
/**
 * @description
 *   添加标签回显接口
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneLabelQuerySceneLabel = (option?: DeepPartial<ApiAppPostSceneLabelQuerySceneLabelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneLabelQuerySceneLabelResponseSuccess>('/sceneLabel/querySceneLabel', { method: 'post', body: option}, config);

type ApiAppPostSceneLabelWeightSaveOption = Array<LabelWeightListInput>;

/** @description response type for apiAppPostSceneLabelWeightSave */
interface ApiAppPostSceneLabelWeightSaveResponse {
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

 type ApiAppPostSceneLabelWeightSaveResponseSuccess = ApiAppPostSceneLabelWeightSaveResponse[200]
/**
 * @description
 *   场景预案关联权重标签保存接口
 * @tags 场景预案标签管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSceneLabelWeightSave = (option?: DeepPartial<ApiAppPostSceneLabelWeightSaveOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSceneLabelWeightSaveResponseSuccess>('/sceneLabel/weightSave', { method: 'post', body: option}, config);

type ApiAppPostScenepreplanAddOrUpdOption = EmergencyScenePreplanInput;

/** @description response type for apiAppPostScenepreplanAddOrUpd */
interface ApiAppPostScenepreplanAddOrUpdResponse {
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

 type ApiAppPostScenepreplanAddOrUpdResponseSuccess = ApiAppPostScenepreplanAddOrUpdResponse[200]
/**
 * @description
 *   场景预案添加/修改接口
 * @tags 场景预案管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostScenepreplanAddOrUpd = (option?: DeepPartial<ApiAppPostScenepreplanAddOrUpdOption>, config?: AxiosRequestConfig) => requester<ApiAppPostScenepreplanAddOrUpdResponseSuccess>('/scenepreplan/addOrUpd', { method: 'post', body: option}, config);

type ApiAppGetScenepreplanBatchDelCpmoCopIdsOption = {
    /**
    @description
      cpmoCop */
    'cpmoCop': string
    /**
    @description
      ids */
    'ids': string
    };

/** @description response type for apiAppGetScenepreplanBatchDelCpmoCopIds */
interface ApiAppGetScenepreplanBatchDelCpmoCopIdsResponse {
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

 type ApiAppGetScenepreplanBatchDelCpmoCopIdsResponseSuccess = ApiAppGetScenepreplanBatchDelCpmoCopIdsResponse[200]
/**
 * @description
 *   批量删除接口
 * @tags 场景预案管理
 * @produces *
 */
export const apiAppGetScenepreplanBatchDelCpmoCopIds = (option?: DeepPartial<ApiAppGetScenepreplanBatchDelCpmoCopIdsOption>, config?: AxiosRequestConfig) => requester<ApiAppGetScenepreplanBatchDelCpmoCopIdsResponseSuccess>('/scenepreplan/batchDel/:cpmoCop/:ids', { method: 'get', path: option}, config);

type ApiAppGetScenepreplanButtonStatusCpmoCopIdStatusOption = {
    /**
    @description
      cpmoCop */
    'cpmoCop': string
    /**
    @description
      id
    @format int64 */
    'id': number
    /**
    @description
      status
    @format int32 */
    'status': number
    };

/** @description response type for apiAppGetScenepreplanButtonStatusCpmoCopIdStatus */
interface ApiAppGetScenepreplanButtonStatusCpmoCopIdStatusResponse {
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

 type ApiAppGetScenepreplanButtonStatusCpmoCopIdStatusResponseSuccess = ApiAppGetScenepreplanButtonStatusCpmoCopIdStatusResponse[200]
/**
 * @description
 *   修改按钮状态接口
 * @tags 场景预案管理
 * @produces *
 */
export const apiAppGetScenepreplanButtonStatusCpmoCopIdStatus = (option?: DeepPartial<ApiAppGetScenepreplanButtonStatusCpmoCopIdStatusOption>, config?: AxiosRequestConfig) => requester<ApiAppGetScenepreplanButtonStatusCpmoCopIdStatusResponseSuccess>('/scenepreplan/buttonStatus/:cpmoCop/:id/:status', { method: 'get', path: option}, config);

type ApiAppGetScenepreplanDocIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetScenepreplanDocId */
interface ApiAppGetScenepreplanDocIdResponse {
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

 type ApiAppGetScenepreplanDocIdResponseSuccess = ApiAppGetScenepreplanDocIdResponse[200]
/**
 * @description
 *   getDoc
 * @tags 场景预案管理
 * @produces *
 */
export const apiAppGetScenepreplanDocId = (option?: DeepPartial<ApiAppGetScenepreplanDocIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetScenepreplanDocIdResponseSuccess>('/scenepreplan/doc/:id', { method: 'get', path: option}, config);

type ApiAppGetScenepreplanGetDetailByIdIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetScenepreplanGetDetailByIdId */
interface ApiAppGetScenepreplanGetDetailByIdIdResponse {
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

 type ApiAppGetScenepreplanGetDetailByIdIdResponseSuccess = ApiAppGetScenepreplanGetDetailByIdIdResponse[200]
/**
 * @description
 *   场景预案详情接口
 * @tags 场景预案管理
 * @produces *
 */
export const apiAppGetScenepreplanGetDetailByIdId = (option?: DeepPartial<ApiAppGetScenepreplanGetDetailByIdIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetScenepreplanGetDetailByIdIdResponseSuccess>('/scenepreplan/getDetailById/:id', { method: 'get', path: option}, config);

type ApiAppGetScenepreplanGroupGroupIdOption = {
    /**
    @description
      groupId
    @format int32 */
    'groupId': number
    };

/** @description response type for apiAppGetScenepreplanGroupGroupId */
interface ApiAppGetScenepreplanGroupGroupIdResponse {
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

 type ApiAppGetScenepreplanGroupGroupIdResponseSuccess = ApiAppGetScenepreplanGroupGroupIdResponse[200]
/**
 * @description
 *   获取场景预案管理体系
 * @tags 场景预案管理
 * @produces *
 */
export const apiAppGetScenepreplanGroupGroupId = (option?: DeepPartial<ApiAppGetScenepreplanGroupGroupIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetScenepreplanGroupGroupIdResponseSuccess>('/scenepreplan/group/:groupId', { method: 'get', path: option}, config);

type ApiAppPostScenepreplanListOption = EmergencyScenePreplanListParamInput;

/** @description response type for apiAppPostScenepreplanList */
interface ApiAppPostScenepreplanListResponse {
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

 type ApiAppPostScenepreplanListResponseSuccess = ApiAppPostScenepreplanListResponse[200]
/**
 * @description
 *   场景预案列表接口
 * @tags 场景预案管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostScenepreplanList = (option?: DeepPartial<ApiAppPostScenepreplanListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostScenepreplanListResponseSuccess>('/scenepreplan/list', { method: 'post', body: option}, config);

type ApiAppGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeOption = {
    /**
    @description
      compCode */
    'compCode': string
    /**
    @description
      dictId
    @format int64 */
    'dictId': number
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCode */
interface ApiAppGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeResponse {
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

 type ApiAppGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeResponseSuccess = ApiAppGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeResponse[200]
/**
 * @description
 *   获取对应标签信息
 * @tags 场景预案管理
 * @produces *
 */
export const apiAppGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCode = (option?: DeepPartial<ApiAppGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetScenepreplanQueryLabelByPreplanIdIdDictIdCompCodeResponseSuccess>('/scenepreplan/queryLabelByPreplanId/:id/:dictId/:compCode', { method: 'get', path: option}, config);

/** @description response type for apiAppPostScenepreplanSceneLabelAdd */
interface ApiAppPostScenepreplanSceneLabelAddResponse {
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

 type ApiAppPostScenepreplanSceneLabelAddResponseSuccess = ApiAppPostScenepreplanSceneLabelAddResponse[200]
/**
 * @description
 *   添加场景标签
 * @tags 场景预案管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostScenepreplanSceneLabelAdd = (config?: AxiosRequestConfig) => requester<ApiAppPostScenepreplanSceneLabelAddResponseSuccess>('/scenepreplan/sceneLabelAdd', { method: 'post'}, config);

type ApiAppGetScenepreplanCompCodeOption = {
    /**
    @description
      compCode */
    'compCode': string
    };

/** @description response type for apiAppGetScenepreplanCompCode */
interface ApiAppGetScenepreplanCompCodeResponse {
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

 type ApiAppGetScenepreplanCompCodeResponseSuccess = ApiAppGetScenepreplanCompCodeResponse[200]
/**
 * @description
 *   getScenePreplanByCompCode
 * @tags 场景预案管理
 * @produces *
 */
export const apiAppGetScenepreplanCompCode = (option?: DeepPartial<ApiAppGetScenepreplanCompCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetScenepreplanCompCodeResponseSuccess>('/scenepreplan/:compCode', { method: 'get', path: option}, config);

/** @description response type for apiAppGetSendData */
interface ApiAppGetSendDataResponse {
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

 type ApiAppGetSendDataResponseSuccess = ApiAppGetSendDataResponse[200]
/**
 * @description
 *   sendData
 * @tags test-controller
 * @produces *
 */
export const apiAppGetSendData = (config?: AxiosRequestConfig) => requester<ApiAppGetSendDataResponseSuccess>('/send/data', { method: 'get'}, config);

type ApiAppPostSendMsgOption = {
    [propertyName: string]: any
    };

/** @description response type for apiAppPostSendMsg */
interface ApiAppPostSendMsgResponse {
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

 type ApiAppPostSendMsgResponseSuccess = ApiAppPostSendMsgResponse[200]
/**
 * @description
 *   sendMessage
 * @tags test-controller
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSendMsg = (option?: DeepPartial<ApiAppPostSendMsgOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSendMsgResponseSuccess>('/send/msg', { method: 'post', body: option}, config);

type ApiAppPostShortGasSupplyOption = ShortSupplyInput;

/** @description response type for apiAppPostShortGasSupply */
interface ApiAppPostShortGasSupplyResponse {
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

 type ApiAppPostShortGasSupplyResponseSuccess = ApiAppPostShortGasSupplyResponse[200]
/**
 * @description
 *   新增/编辑临时补气点
 * @tags 应急事件事件模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostShortGasSupply = (option?: DeepPartial<ApiAppPostShortGasSupplyOption>, config?: AxiosRequestConfig) => requester<ApiAppPostShortGasSupplyResponseSuccess>('/short/gas/supply', { method: 'post', body: option}, config);

type ApiAppPostStationAllOrganOption = CompanyStationOrganInput;

/** @description response type for apiAppPostStationAllOrgan */
interface ApiAppPostStationAllOrganResponse {
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

 type ApiAppPostStationAllOrganResponseSuccess = ApiAppPostStationAllOrganResponse[200]
/**
 * @description
 *   站组织下的全部区域
 * @tags 应急物资接口
 * @produces *
 * @consumes application/json
 */
export const apiAppPostStationAllOrgan = (option?: DeepPartial<ApiAppPostStationAllOrganOption>, config?: AxiosRequestConfig) => requester<ApiAppPostStationAllOrganResponseSuccess>('/station/all/organ', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectCancelOption = CarInspectionReq;

/** @description response type for apiAppPostSuppliesInspectCancel */
interface ApiAppPostSuppliesInspectCancelResponse {
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

 type ApiAppPostSuppliesInspectCancelResponseSuccess = ApiAppPostSuppliesInspectCancelResponse[200]
/**
 * @description
 *   取消点检
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectCancel = (option?: DeepPartial<ApiAppPostSuppliesInspectCancelOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectCancelResponseSuccess>('/suppliesInspect/cancel', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectCarsOption = InspectedCarReq;

/** @description response type for apiAppPostSuppliesInspectCars */
interface ApiAppPostSuppliesInspectCarsResponse {
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

 type ApiAppPostSuppliesInspectCarsResponseSuccess = ApiAppPostSuppliesInspectCarsResponse[200]
/**
 * @description
 *   查询车辆信息
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectCars = (option?: DeepPartial<ApiAppPostSuppliesInspectCarsOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectCarsResponseSuccess>('/suppliesInspect/cars', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectCategoriesOption = SuppliesCategoryReq;

/** @description response type for apiAppPostSuppliesInspectCategories */
interface ApiAppPostSuppliesInspectCategoriesResponse {
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

 type ApiAppPostSuppliesInspectCategoriesResponseSuccess = ApiAppPostSuppliesInspectCategoriesResponse[200]
/**
 * @description
 *   查询车辆点检物资分类
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectCategories = (option?: DeepPartial<ApiAppPostSuppliesInspectCategoriesOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectCategoriesResponseSuccess>('/suppliesInspect/categories', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectCategorySuppliesOption = CarInspectionDetailReq;

/** @description response type for apiAppPostSuppliesInspectCategorySupplies */
interface ApiAppPostSuppliesInspectCategorySuppliesResponse {
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

 type ApiAppPostSuppliesInspectCategorySuppliesResponseSuccess = ApiAppPostSuppliesInspectCategorySuppliesResponse[200]
/**
 * @description
 *   查询车辆点检物资项
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectCategorySupplies = (option?: DeepPartial<ApiAppPostSuppliesInspectCategorySuppliesOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectCategorySuppliesResponseSuccess>('/suppliesInspect/categorySupplies', { method: 'post', body: option}, config);

type ApiAppGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateOption = {
    /**
    @description
      licensePlate */
    'licensePlate': string
    };

/** @description response type for apiAppGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlate */
interface ApiAppGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateResponse {
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

 type ApiAppGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateResponseSuccess = ApiAppGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateResponse[200]
/**
 * @description
 *   异常提醒信息
 * @tags 车辆物资点检
 * @produces *
 */
export const apiAppGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlate = (option?: DeepPartial<ApiAppGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateOption>, config?: AxiosRequestConfig) => requester<ApiAppGetSuppliesInspectGetInspectionSummaryByLicensePlateLicensePlateResponseSuccess>('/suppliesInspect/getInspectionSummaryByLicensePlate/:licensePlate', { method: 'get', path: option}, config);

type ApiAppPostSuppliesInspectInspectionDetailOption = CarInspectionDetailReq;

/** @description response type for apiAppPostSuppliesInspectInspectionDetail */
interface ApiAppPostSuppliesInspectInspectionDetailResponse {
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

 type ApiAppPostSuppliesInspectInspectionDetailResponseSuccess = ApiAppPostSuppliesInspectInspectionDetailResponse[200]
/**
 * @description
 *   查询车辆点检详情
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectInspectionDetail = (option?: DeepPartial<ApiAppPostSuppliesInspectInspectionDetailOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectInspectionDetailResponseSuccess>('/suppliesInspect/inspectionDetail', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectResetOption = CarInspectionReq;

/** @description response type for apiAppPostSuppliesInspectReset */
interface ApiAppPostSuppliesInspectResetResponse {
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

 type ApiAppPostSuppliesInspectResetResponseSuccess = ApiAppPostSuppliesInspectResetResponse[200]
/**
 * @description
 *   重新开始点检
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectReset = (option?: DeepPartial<ApiAppPostSuppliesInspectResetOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectResetResponseSuccess>('/suppliesInspect/reset', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectSubmitOption = CarInspectionReq;

/** @description response type for apiAppPostSuppliesInspectSubmit */
interface ApiAppPostSuppliesInspectSubmitResponse {
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

 type ApiAppPostSuppliesInspectSubmitResponseSuccess = ApiAppPostSuppliesInspectSubmitResponse[200]
/**
 * @description
 *   提交点检
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectSubmit = (option?: DeepPartial<ApiAppPostSuppliesInspectSubmitOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectSubmitResponseSuccess>('/suppliesInspect/submit', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectSuppliesFeedbackOption = SuppliesFeedbackReq;

/** @description response type for apiAppPostSuppliesInspectSuppliesFeedback */
interface ApiAppPostSuppliesInspectSuppliesFeedbackResponse {
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

 type ApiAppPostSuppliesInspectSuppliesFeedbackResponseSuccess = ApiAppPostSuppliesInspectSuppliesFeedbackResponse[200]
/**
 * @description
 *   物资反馈
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectSuppliesFeedback = (option?: DeepPartial<ApiAppPostSuppliesInspectSuppliesFeedbackOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectSuppliesFeedbackResponseSuccess>('/suppliesInspect/supplies/feedback', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectSuppliesIntactOption = SuppliesIntactReq;

/** @description response type for apiAppPostSuppliesInspectSuppliesIntact */
interface ApiAppPostSuppliesInspectSuppliesIntactResponse {
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

 type ApiAppPostSuppliesInspectSuppliesIntactResponseSuccess = ApiAppPostSuppliesInspectSuppliesIntactResponse[200]
/**
 * @description
 *   物资完好
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectSuppliesIntact = (option?: DeepPartial<ApiAppPostSuppliesInspectSuppliesIntactOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectSuppliesIntactResponseSuccess>('/suppliesInspect/supplies/intact', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectSuppliesIntactBatchOption = SuppliesBatchReq;

/** @description response type for apiAppPostSuppliesInspectSuppliesIntactBatch */
interface ApiAppPostSuppliesInspectSuppliesIntactBatchResponse {
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

 type ApiAppPostSuppliesInspectSuppliesIntactBatchResponseSuccess = ApiAppPostSuppliesInspectSuppliesIntactBatchResponse[200]
/**
 * @description
 *   物资批量完好
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectSuppliesIntactBatch = (option?: DeepPartial<ApiAppPostSuppliesInspectSuppliesIntactBatchOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectSuppliesIntactBatchResponseSuccess>('/suppliesInspect/supplies/intactBatch', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectSuppliesLackOption = SuppliesLackReq;

/** @description response type for apiAppPostSuppliesInspectSuppliesLack */
interface ApiAppPostSuppliesInspectSuppliesLackResponse {
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

 type ApiAppPostSuppliesInspectSuppliesLackResponseSuccess = ApiAppPostSuppliesInspectSuppliesLackResponse[200]
/**
 * @description
 *   物资缺失
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectSuppliesLack = (option?: DeepPartial<ApiAppPostSuppliesInspectSuppliesLackOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectSuppliesLackResponseSuccess>('/suppliesInspect/supplies/lack', { method: 'post', body: option}, config);

type ApiAppPostSuppliesInspectSuppliesLackBatchOption = SuppliesBatchReq;

/** @description response type for apiAppPostSuppliesInspectSuppliesLackBatch */
interface ApiAppPostSuppliesInspectSuppliesLackBatchResponse {
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

 type ApiAppPostSuppliesInspectSuppliesLackBatchResponseSuccess = ApiAppPostSuppliesInspectSuppliesLackBatchResponse[200]
/**
 * @description
 *   物资批量缺失
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectSuppliesLackBatch = (option?: DeepPartial<ApiAppPostSuppliesInspectSuppliesLackBatchOption>, config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectSuppliesLackBatchResponseSuccess>('/suppliesInspect/supplies/lackBatch', { method: 'post', body: option}, config);

/** @description response type for apiAppPostSuppliesInspectSuppliesTask */
interface ApiAppPostSuppliesInspectSuppliesTaskResponse {
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

 type ApiAppPostSuppliesInspectSuppliesTaskResponseSuccess = ApiAppPostSuppliesInspectSuppliesTaskResponse[200]
/**
 * @description
 *   task
 * @tags 车辆物资点检
 * @produces *
 * @consumes application/json
 */
export const apiAppPostSuppliesInspectSuppliesTask = (config?: AxiosRequestConfig) => requester<ApiAppPostSuppliesInspectSuppliesTaskResponseSuccess>('/suppliesInspect/supplies/task', { method: 'post'}, config);

type ApiAppGetTerminationCheckByEventIdEventIdPreplanIdOption = {
    /**
    @description
      eventId
    @format int64 */
    'eventId': number
    /**
    @description
      preplanId
    @format int64 */
    'preplanId': number
    };

/** @description response type for apiAppGetTerminationCheckByEventIdEventIdPreplanId */
interface ApiAppGetTerminationCheckByEventIdEventIdPreplanIdResponse {
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

 type ApiAppGetTerminationCheckByEventIdEventIdPreplanIdResponseSuccess = ApiAppGetTerminationCheckByEventIdEventIdPreplanIdResponse[200]
/**
 * @description
 *   终止响应操作时，各流程环节的必需任务和通知都需要完成
 * @tags 终止响应场景预案接口模块
 * @produces *
 */
export const apiAppGetTerminationCheckByEventIdEventIdPreplanId = (option?: DeepPartial<ApiAppGetTerminationCheckByEventIdEventIdPreplanIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetTerminationCheckByEventIdEventIdPreplanIdResponseSuccess>('/termination/checkByEventId/:eventId/:preplanId', { method: 'get', path: option}, config);

type ApiAppPostTerminationTerminationTaskOption = EmergencyTerminationTaskInput;

/** @description response type for apiAppPostTerminationTerminationTask */
interface ApiAppPostTerminationTerminationTaskResponse {
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

 type ApiAppPostTerminationTerminationTaskResponseSuccess = ApiAppPostTerminationTerminationTaskResponse[200]
/**
 * @description
 *   终止响应下发任务接口
 * @tags 终止响应场景预案接口模块
 * @produces *
 * @consumes application/json
 */
export const apiAppPostTerminationTerminationTask = (option?: DeepPartial<ApiAppPostTerminationTerminationTaskOption>, config?: AxiosRequestConfig) => requester<ApiAppPostTerminationTerminationTaskResponseSuccess>('/termination/terminationTask', { method: 'post', body: option}, config);

/** @description response type for apiAppGetTest */
interface ApiAppGetTestResponse {
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

 type ApiAppGetTestResponseSuccess = ApiAppGetTestResponse[200]
/**
 * @description
 *   test
 * @tags 应急事件事件模块
 * @produces *
 */
export const apiAppGetTest = (config?: AxiosRequestConfig) => requester<ApiAppGetTestResponseSuccess>('/test', { method: 'get'}, config);

/** @description response type for apiAppGetUid */
interface ApiAppGetUidResponse {
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

 type ApiAppGetUidResponseSuccess = ApiAppGetUidResponse[200]
/**
 * @description
 *   getUid
 * @tags $-proxy-172
 * @produces *
 */
export const apiAppGetUid = (config?: AxiosRequestConfig) => requester<ApiAppGetUidResponseSuccess>('/uid', { method: 'get'}, config);

type ApiAppGetUidParseOption = {
    /**
    @description
      param0
    @format int64 */
    'param0': number
    };

/** @description response type for apiAppGetUidParse */
interface ApiAppGetUidParseResponse {
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

 type ApiAppGetUidParseResponseSuccess = ApiAppGetUidParseResponse[200]
/**
 * @description
 *   parseUid
 * @tags $-proxy-172
 * @produces *
 */
export const apiAppGetUidParse = (option?: DeepPartial<ApiAppGetUidParseOption>, config?: AxiosRequestConfig) => requester<ApiAppGetUidParseResponseSuccess>('/uid/parse', { method: 'get', query: option}, config);

type ApiAppPostVehicleAndGoodsGoodsAddOption = GoodsInfoInput;

/** @description response type for apiAppPostVehicleAndGoodsGoodsAdd */
interface ApiAppPostVehicleAndGoodsGoodsAddResponse {
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

 type ApiAppPostVehicleAndGoodsGoodsAddResponseSuccess = ApiAppPostVehicleAndGoodsGoodsAddResponse[200]
/**
 * @description
 *   新增物资
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostVehicleAndGoodsGoodsAdd = (option?: DeepPartial<ApiAppPostVehicleAndGoodsGoodsAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostVehicleAndGoodsGoodsAddResponseSuccess>('/vehicleAndGoods/goods/add', { method: 'post', body: option}, config);

type ApiAppGetVehicleAndGoodsGoodsBatchDeleteIdsOption = {
    /**
    @description
      ids */
    'ids': string
    };

/** @description response type for apiAppGetVehicleAndGoodsGoodsBatchDeleteIds */
interface ApiAppGetVehicleAndGoodsGoodsBatchDeleteIdsResponse {
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

 type ApiAppGetVehicleAndGoodsGoodsBatchDeleteIdsResponseSuccess = ApiAppGetVehicleAndGoodsGoodsBatchDeleteIdsResponse[200]
/**
 * @description
 *   批量删除自定义物资
 * @tags 车辆和物资管理
 * @produces *
 */
export const apiAppGetVehicleAndGoodsGoodsBatchDeleteIds = (option?: DeepPartial<ApiAppGetVehicleAndGoodsGoodsBatchDeleteIdsOption>, config?: AxiosRequestConfig) => requester<ApiAppGetVehicleAndGoodsGoodsBatchDeleteIdsResponseSuccess>('/vehicleAndGoods/goods/batch/delete/:ids', { method: 'get', path: option}, config);

type ApiAppPostVehicleAndGoodsGoodsBatchSetNumberOption = Array<GoodsInfoInput>;

/** @description response type for apiAppPostVehicleAndGoodsGoodsBatchSetNumber */
interface ApiAppPostVehicleAndGoodsGoodsBatchSetNumberResponse {
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

 type ApiAppPostVehicleAndGoodsGoodsBatchSetNumberResponseSuccess = ApiAppPostVehicleAndGoodsGoodsBatchSetNumberResponse[200]
/**
 * @description
 *   批量设置物资数量
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostVehicleAndGoodsGoodsBatchSetNumber = (option?: DeepPartial<ApiAppPostVehicleAndGoodsGoodsBatchSetNumberOption>, config?: AxiosRequestConfig) => requester<ApiAppPostVehicleAndGoodsGoodsBatchSetNumberResponseSuccess>('/vehicleAndGoods/goods/batch/setNumber', { method: 'post', body: option}, config);

type ApiAppGetVehicleAndGoodsGoodsDeleteIdOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetVehicleAndGoodsGoodsDeleteId */
interface ApiAppGetVehicleAndGoodsGoodsDeleteIdResponse {
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

 type ApiAppGetVehicleAndGoodsGoodsDeleteIdResponseSuccess = ApiAppGetVehicleAndGoodsGoodsDeleteIdResponse[200]
/**
 * @description
 *   删除自定义物资
 * @tags 车辆和物资管理
 * @produces *
 */
export const apiAppGetVehicleAndGoodsGoodsDeleteId = (option?: DeepPartial<ApiAppGetVehicleAndGoodsGoodsDeleteIdOption>, config?: AxiosRequestConfig) => requester<ApiAppGetVehicleAndGoodsGoodsDeleteIdResponseSuccess>('/vehicleAndGoods/goods/delete/:id', { method: 'get', path: option}, config);

type ApiAppPostVehicleAndGoodsGoodsInspectDetailOption = GoodsDetailQueryDTO;

/** @description response type for apiAppPostVehicleAndGoodsGoodsInspectDetail */
interface ApiAppPostVehicleAndGoodsGoodsInspectDetailResponse {
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

 type ApiAppPostVehicleAndGoodsGoodsInspectDetailResponseSuccess = ApiAppPostVehicleAndGoodsGoodsInspectDetailResponse[200]
/**
 * @description
 *   查看点检记录详情
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostVehicleAndGoodsGoodsInspectDetail = (option?: DeepPartial<ApiAppPostVehicleAndGoodsGoodsInspectDetailOption>, config?: AxiosRequestConfig) => requester<ApiAppPostVehicleAndGoodsGoodsInspectDetailResponseSuccess>('/vehicleAndGoods/goods/inspect/detail', { method: 'post', body: option}, config);

type ApiAppPostVehicleAndGoodsGoodsInspectListOption = GoodsCheckQueryDTO;

/** @description response type for apiAppPostVehicleAndGoodsGoodsInspectList */
interface ApiAppPostVehicleAndGoodsGoodsInspectListResponse {
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

 type ApiAppPostVehicleAndGoodsGoodsInspectListResponseSuccess = ApiAppPostVehicleAndGoodsGoodsInspectListResponse[200]
/**
 * @description
 *   查询物资点检记录
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostVehicleAndGoodsGoodsInspectList = (option?: DeepPartial<ApiAppPostVehicleAndGoodsGoodsInspectListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostVehicleAndGoodsGoodsInspectListResponseSuccess>('/vehicleAndGoods/goods/inspect/list', { method: 'post', body: option}, config);

type ApiAppPostVehicleAndGoodsGoodsModifyOption = GoodsInfoInput;

/** @description response type for apiAppPostVehicleAndGoodsGoodsModify */
interface ApiAppPostVehicleAndGoodsGoodsModifyResponse {
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

 type ApiAppPostVehicleAndGoodsGoodsModifyResponseSuccess = ApiAppPostVehicleAndGoodsGoodsModifyResponse[200]
/**
 * @description
 *   编辑自定义物资
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostVehicleAndGoodsGoodsModify = (option?: DeepPartial<ApiAppPostVehicleAndGoodsGoodsModifyOption>, config?: AxiosRequestConfig) => requester<ApiAppPostVehicleAndGoodsGoodsModifyResponseSuccess>('/vehicleAndGoods/goods/modify', { method: 'post', body: option}, config);

type ApiAppPostVehicleAndGoodsGoodsQueryOption = GoodsDetailQueryDTO;

/** @description response type for apiAppPostVehicleAndGoodsGoodsQuery */
interface ApiAppPostVehicleAndGoodsGoodsQueryResponse {
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

 type ApiAppPostVehicleAndGoodsGoodsQueryResponseSuccess = ApiAppPostVehicleAndGoodsGoodsQueryResponse[200]
/**
 * @description
 *   查询随车物资清单
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostVehicleAndGoodsGoodsQuery = (option?: DeepPartial<ApiAppPostVehicleAndGoodsGoodsQueryOption>, config?: AxiosRequestConfig) => requester<ApiAppPostVehicleAndGoodsGoodsQueryResponseSuccess>('/vehicleAndGoods/goods/query', { method: 'post', body: option}, config);

type ApiAppGetVehicleAndGoodsGoodsSetNumberIdNumsOption = {
    /**
    @description
      id
    @format int64 */
    'id': number
    /**
    @description
      nums
    @format int32 */
    'nums': number
    };

/** @description response type for apiAppGetVehicleAndGoodsGoodsSetNumberIdNums */
interface ApiAppGetVehicleAndGoodsGoodsSetNumberIdNumsResponse {
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

 type ApiAppGetVehicleAndGoodsGoodsSetNumberIdNumsResponseSuccess = ApiAppGetVehicleAndGoodsGoodsSetNumberIdNumsResponse[200]
/**
 * @description
 *   设置物资数量
 * @tags 车辆和物资管理
 * @produces *
 */
export const apiAppGetVehicleAndGoodsGoodsSetNumberIdNums = (option?: DeepPartial<ApiAppGetVehicleAndGoodsGoodsSetNumberIdNumsOption>, config?: AxiosRequestConfig) => requester<ApiAppGetVehicleAndGoodsGoodsSetNumberIdNumsResponseSuccess>('/vehicleAndGoods/goods/setNumber/:id/:nums', { method: 'get', path: option}, config);

type ApiAppGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateOption = {
    /**
    @description
      licensePlate */
    'licensePlate': string
    };

/** @description response type for apiAppGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlate */
interface ApiAppGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateResponse {
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

 type ApiAppGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateResponseSuccess = ApiAppGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateResponse[200]
/**
 * @description
 *   查询树形结构全部类别
 * @tags 车辆和物资管理
 * @produces *
 */
export const apiAppGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlate = (option?: DeepPartial<ApiAppGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateOption>, config?: AxiosRequestConfig) => requester<ApiAppGetVehicleAndGoodsGoodsTreeGetTypeSortLicensePlateResponseSuccess>('/vehicleAndGoods/goods/tree/getTypeSort/:licensePlate', { method: 'get', path: option}, config);

type ApiAppPostVehicleAndGoodsInitializeGoodsOption = InitializeGoodsInput;

/** @description response type for apiAppPostVehicleAndGoodsInitializeGoods */
interface ApiAppPostVehicleAndGoodsInitializeGoodsResponse {
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

 type ApiAppPostVehicleAndGoodsInitializeGoodsResponseSuccess = ApiAppPostVehicleAndGoodsInitializeGoodsResponse[200]
/**
 * @description
 *   初始化数据接口
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostVehicleAndGoodsInitializeGoods = (option?: DeepPartial<ApiAppPostVehicleAndGoodsInitializeGoodsOption>, config?: AxiosRequestConfig) => requester<ApiAppPostVehicleAndGoodsInitializeGoodsResponseSuccess>('/vehicleAndGoods/initializeGoods', { method: 'post', body: option}, config);

type ApiAppPostVehicleAndGoodsVehicleAddOption = VehicleInfo;

/** @description response type for apiAppPostVehicleAndGoodsVehicleAdd */
interface ApiAppPostVehicleAndGoodsVehicleAddResponse {
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

 type ApiAppPostVehicleAndGoodsVehicleAddResponseSuccess = ApiAppPostVehicleAndGoodsVehicleAddResponse[200]
/**
 * @description
 *   新增车辆
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostVehicleAndGoodsVehicleAdd = (option?: DeepPartial<ApiAppPostVehicleAndGoodsVehicleAddOption>, config?: AxiosRequestConfig) => requester<ApiAppPostVehicleAndGoodsVehicleAddResponseSuccess>('/vehicleAndGoods/vehicle/add', { method: 'post', body: option}, config);

type ApiAppGetVehicleAndGoodsVehicleDeleteIdEntityCodeOption = {
    /**
    @description
      entityCode */
    'entityCode': string
    /**
    @description
      id
    @format int64 */
    'id': number
    };

/** @description response type for apiAppGetVehicleAndGoodsVehicleDeleteIdEntityCode */
interface ApiAppGetVehicleAndGoodsVehicleDeleteIdEntityCodeResponse {
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

 type ApiAppGetVehicleAndGoodsVehicleDeleteIdEntityCodeResponseSuccess = ApiAppGetVehicleAndGoodsVehicleDeleteIdEntityCodeResponse[200]
/**
 * @description
 *   删除车辆
 * @tags 车辆和物资管理
 * @produces *
 */
export const apiAppGetVehicleAndGoodsVehicleDeleteIdEntityCode = (option?: DeepPartial<ApiAppGetVehicleAndGoodsVehicleDeleteIdEntityCodeOption>, config?: AxiosRequestConfig) => requester<ApiAppGetVehicleAndGoodsVehicleDeleteIdEntityCodeResponseSuccess>('/vehicleAndGoods/vehicle/delete/:id/:entityCode', { method: 'get', path: option}, config);

type ApiAppPostVehicleAndGoodsVehicleModifyOption = VehicleInfo;

/** @description response type for apiAppPostVehicleAndGoodsVehicleModify */
interface ApiAppPostVehicleAndGoodsVehicleModifyResponse {
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

 type ApiAppPostVehicleAndGoodsVehicleModifyResponseSuccess = ApiAppPostVehicleAndGoodsVehicleModifyResponse[200]
/**
 * @description
 *   修改车辆
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostVehicleAndGoodsVehicleModify = (option?: DeepPartial<ApiAppPostVehicleAndGoodsVehicleModifyOption>, config?: AxiosRequestConfig) => requester<ApiAppPostVehicleAndGoodsVehicleModifyResponseSuccess>('/vehicleAndGoods/vehicle/modify', { method: 'post', body: option}, config);

type ApiAppPostVehicleAndGoodsVehicleQueryOption = VehicleSortInput;

/** @description response type for apiAppPostVehicleAndGoodsVehicleQuery */
interface ApiAppPostVehicleAndGoodsVehicleQueryResponse {
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

 type ApiAppPostVehicleAndGoodsVehicleQueryResponseSuccess = ApiAppPostVehicleAndGoodsVehicleQueryResponse[200]
/**
 * @description
 *   查询车辆清单
 * @tags 车辆和物资管理
 * @produces *
 * @consumes application/json
 */
export const apiAppPostVehicleAndGoodsVehicleQuery = (option?: DeepPartial<ApiAppPostVehicleAndGoodsVehicleQueryOption>, config?: AxiosRequestConfig) => requester<ApiAppPostVehicleAndGoodsVehicleQueryResponseSuccess>('/vehicleAndGoods/vehicle/query', { method: 'post', body: option}, config);

type ApiAppPostWarningMsgGetlastOption = WarningMsgQueryDTO;

/** @description response type for apiAppPostWarningMsgGetlast */
interface ApiAppPostWarningMsgGetlastResponse {
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

 type ApiAppPostWarningMsgGetlastResponseSuccess = ApiAppPostWarningMsgGetlastResponse[200]
/**
 * @description
 *   查询最新消息列表
 * @tags 消息提醒
 * @produces *
 * @consumes application/json
 */
export const apiAppPostWarningMsgGetlast = (option?: DeepPartial<ApiAppPostWarningMsgGetlastOption>, config?: AxiosRequestConfig) => requester<ApiAppPostWarningMsgGetlastResponseSuccess>('/warningMsg/getlast', { method: 'post', body: option}, config);

type ApiAppPostWarningMsgListOption = WarningMsgQueryDTO;

/** @description response type for apiAppPostWarningMsgList */
interface ApiAppPostWarningMsgListResponse {
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

 type ApiAppPostWarningMsgListResponseSuccess = ApiAppPostWarningMsgListResponse[200]
/**
 * @description
 *   查询消息列表
 * @tags 消息提醒
 * @produces *
 * @consumes application/json
 */
export const apiAppPostWarningMsgList = (option?: DeepPartial<ApiAppPostWarningMsgListOption>, config?: AxiosRequestConfig) => requester<ApiAppPostWarningMsgListResponseSuccess>('/warningMsg/list', { method: 'post', body: option}, config);

type ApiAppPostWarningMsgSetTopOption = SetTopReqDTO;

/** @description response type for apiAppPostWarningMsgSetTop */
interface ApiAppPostWarningMsgSetTopResponse {
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

 type ApiAppPostWarningMsgSetTopResponseSuccess = ApiAppPostWarningMsgSetTopResponse[200]
/**
 * @description
 *   设置或取消置顶
 * @tags 消息提醒
 * @produces *
 * @consumes application/json
 */
export const apiAppPostWarningMsgSetTop = (option?: DeepPartial<ApiAppPostWarningMsgSetTopOption>, config?: AxiosRequestConfig) => requester<ApiAppPostWarningMsgSetTopResponseSuccess>('/warningMsg/setTop', { method: 'post', body: option}, config);
