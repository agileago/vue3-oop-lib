/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import {
  abilityRequester as requester,
  type AxiosRequestConfig,
} from "../http";
import type {
  MsgAccountModel,
  AccountInput,
  MsgAccount,
  CompSearchInput,
  AddressGroupDelInput,
  EmergencyGroupRoleOutput,
  RoleBySessionIdInput,
  EmergencyGroupOutput,
  AddressGroupSearchInput,
  PageInfo,
  SceneGroupListOutput,
  AddressGroupSaveInput,
  AddressListDelInput,
  AddressListSearchInput,
  AddressListInput,
  AddressListTree,
  PersonRoleInput,
  RoleGroupOutput,
  RoleGroupChooseOutput,
  AddressListSaveInput,
  SuperInput,
  CallRecordsInputDto,
  CallRecordInput,
  CallRecordsOutput,
  PhoneCallOutInput,
  PhoneOptSaveInput,
  PhoneCallOutSpecialInput,
  IcomeGroupInput,
  IcomeGroupOutput,
  IcomeServiceAccountSendMsgInput,
  IcomeTodoInput,
  MsgTemplateDelInput,
  MsgTemplateSaveInput,
  MsgTemplate,
  TypeOutput,
  QueryTypeInput,
  MsgTemplateSearchInput,
  MsgTemplateValidUniqueInput,
  PhoneCallSearchInput,
  PhoneCallRecordOutput,
  PhoneMsgSearchInput,
  PhoneMsgRecordOutput,
  EmergencyRoleDelInput,
  EmergencyRoleAddInput,
  EmergencyRoleGroupDelInput,
  EmergencyRoleGroupAddInput,
  EmergencyRoleGroupListInput,
  EmergencyRoleGroupListOutput,
  EmergencyRoleListInput,
  PageInfoEmergencyRoleListOutput,
} from "./definition";

type ApiAbilityPostAccountAddOption = MsgAccountModel;

/** @description response type for apiAbilityPostAccountAdd */
interface ApiAbilityPostAccountAddResponse {
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

type ApiAbilityPostAccountAddResponseSuccess =
  ApiAbilityPostAccountAddResponse[200];
/**
 * @description
 *   外呼-账号-添加接口
 * @tags 外呼-账号-管理API
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAccountAdd = (
  option?: ApiAbilityPostAccountAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAccountAddResponseSuccess>(
    "/account/add",
    { method: "post", body: option },
    config
  );

type ApiAbilityGetAccountDelIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiAbilityGetAccountDelId */
interface ApiAbilityGetAccountDelIdResponse {
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

type ApiAbilityGetAccountDelIdResponseSuccess =
  ApiAbilityGetAccountDelIdResponse[200];
/**
 * @description
 *   外呼-账号-删除接口
 * @tags 外呼-账号-管理API
 * @produces *
 */
export const apiAbilityGetAccountDelId = (
  option?: ApiAbilityGetAccountDelIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetAccountDelIdResponseSuccess>(
    "/account/del/:id",
    { method: "get", path: option },
    config
  );

type ApiAbilityPostAccountGetCompanyCodeAccountStatusOption = {
  /**
    @description
      compCode */
  compCode: string;
};

/** @description response type for apiAbilityPostAccountGetCompanyCodeAccountStatus */
interface ApiAbilityPostAccountGetCompanyCodeAccountStatusResponse {
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

type ApiAbilityPostAccountGetCompanyCodeAccountStatusResponseSuccess =
  ApiAbilityPostAccountGetCompanyCodeAccountStatusResponse[200];
/**
 * @description
 *   查询当前公司下的外呼和短信是否存在并开启
 * @tags 外呼-账号-管理API
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAccountGetCompanyCodeAccountStatus = (
  option?: ApiAbilityPostAccountGetCompanyCodeAccountStatusOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAccountGetCompanyCodeAccountStatusResponseSuccess>(
    "/account/getCompanyCodeAccountStatus",
    { method: "post", query: option },
    config
  );

type ApiAbilityPostAccountListOption = AccountInput;

/** @description response type for apiAbilityPostAccountList */
interface ApiAbilityPostAccountListResponse {
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

type ApiAbilityPostAccountListResponseSuccess =
  ApiAbilityPostAccountListResponse[200];
/**
 * @description
 *   外呼-账号-列表接口
 * @tags 外呼-账号-管理API
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAccountList = (
  option?: ApiAbilityPostAccountListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAccountListResponseSuccess>(
    "/account/list",
    { method: "post", body: option },
    config
  );

/** @description response type for apiAbilityGetAccountRestorePwd */
interface ApiAbilityGetAccountRestorePwdResponse {
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

type ApiAbilityGetAccountRestorePwdResponseSuccess =
  ApiAbilityGetAccountRestorePwdResponse[200];
/**
 * @description
 *   还原加密过之后的密码
 * @tags 外呼-账号-管理API
 * @produces *
 */
export const apiAbilityGetAccountRestorePwd = (config?: AxiosRequestConfig) =>
  requester<ApiAbilityGetAccountRestorePwdResponseSuccess>(
    "/account/restorePwd",
    { method: "get" },
    config
  );

type ApiAbilityPostAccountUpdOption = MsgAccountModel;

/** @description response type for apiAbilityPostAccountUpd */
interface ApiAbilityPostAccountUpdResponse {
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

type ApiAbilityPostAccountUpdResponseSuccess =
  ApiAbilityPostAccountUpdResponse[200];
/**
 * @description
 *   外呼-账号-修改接口
 * @tags 外呼-账号-管理API
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAccountUpd = (
  option?: ApiAbilityPostAccountUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAccountUpdResponseSuccess>(
    "/account/upd",
    { method: "post", body: option },
    config
  );

type ApiAbilityGetAccountIdOption = {
  /**
    @description
      id */
  id: string;
};

/** @description response type for apiAbilityGetAccountId */
interface ApiAbilityGetAccountIdResponse {
  /**
   * @description
   *   OK
   */
  200: MsgAccount;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityGetAccountIdResponseSuccess =
  ApiAbilityGetAccountIdResponse[200];
/**
 * @description
 *   外呼-账号-详情接口
 * @tags 外呼-账号-管理API
 * @produces *
 */
export const apiAbilityGetAccountId = (
  option?: ApiAbilityGetAccountIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetAccountIdResponseSuccess>(
    "/account/:id",
    { method: "get", path: option },
    config
  );

/** @description response type for apiAbilityPostAddressGroupAllCompList */
interface ApiAbilityPostAddressGroupAllCompListResponse {
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

type ApiAbilityPostAddressGroupAllCompListResponseSuccess =
  ApiAbilityPostAddressGroupAllCompListResponse[200];
/**
 * @description
 *   所有公司列表
 * @tags 通讯录群组
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressGroupAllCompList = (
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressGroupAllCompListResponseSuccess>(
    "/addressGroup/allCompList",
    { method: "post" },
    config
  );

type ApiAbilityPostAddressGroupAllCompListInCpmoOption = {
  [propertyName: string]: string;
};

/** @description response type for apiAbilityPostAddressGroupAllCompListInCpmo */
interface ApiAbilityPostAddressGroupAllCompListInCpmoResponse {
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

type ApiAbilityPostAddressGroupAllCompListInCpmoResponseSuccess =
  ApiAbilityPostAddressGroupAllCompListInCpmoResponse[200];
/**
 * @description
 *   管理实体下所有公司列表
 * @tags 通讯录群组
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressGroupAllCompListInCpmo = (
  option?: ApiAbilityPostAddressGroupAllCompListInCpmoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressGroupAllCompListInCpmoResponseSuccess>(
    "/addressGroup/allCompListInCpmo",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostAddressGroupCompListOption = CompSearchInput;

/** @description response type for apiAbilityPostAddressGroupCompList */
interface ApiAbilityPostAddressGroupCompListResponse {
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

type ApiAbilityPostAddressGroupCompListResponseSuccess =
  ApiAbilityPostAddressGroupCompListResponse[200];
/**
 * @description
 *   公司列表
 * @tags 通讯录群组
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressGroupCompList = (
  option?: ApiAbilityPostAddressGroupCompListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressGroupCompListResponseSuccess>(
    "/addressGroup/compList",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostAddressGroupDelOption = AddressGroupDelInput;

/** @description response type for apiAbilityPostAddressGroupDel */
interface ApiAbilityPostAddressGroupDelResponse {
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

type ApiAbilityPostAddressGroupDelResponseSuccess =
  ApiAbilityPostAddressGroupDelResponse[200];
/**
 * @description
 *   删除
 * @tags 通讯录群组
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressGroupDel = (
  option?: ApiAbilityPostAddressGroupDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressGroupDelResponseSuccess>(
    "/addressGroup/del",
    { method: "post", body: option },
    config
  );

type ApiAbilityGetAddressGroupGroupRolesGroupIdOption = {
  /**
    @description
      groupId
    @format int32 */
  groupId: number;
};

/** @description response type for apiAbilityGetAddressGroupGroupRolesGroupId */
interface ApiAbilityGetAddressGroupGroupRolesGroupIdResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyGroupRoleOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityGetAddressGroupGroupRolesGroupIdResponseSuccess =
  ApiAbilityGetAddressGroupGroupRolesGroupIdResponse[200];
/**
 * @description
 *   getRoleGroups
 * @tags 通讯录群组
 * @produces *
 */
export const apiAbilityGetAddressGroupGroupRolesGroupId = (
  option?: ApiAbilityGetAddressGroupGroupRolesGroupIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetAddressGroupGroupRolesGroupIdResponseSuccess>(
    "/addressGroup/group/roles/:groupId",
    { method: "get", path: option },
    config
  );

type ApiAbilityPostAddressGroupGroupRolesBySessionIdOption =
  RoleBySessionIdInput;

/** @description response type for apiAbilityPostAddressGroupGroupRolesBySessionId */
interface ApiAbilityPostAddressGroupGroupRolesBySessionIdResponse {
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

type ApiAbilityPostAddressGroupGroupRolesBySessionIdResponseSuccess =
  ApiAbilityPostAddressGroupGroupRolesBySessionIdResponse[200];
/**
 * @description
 *   rolesBySessionId
 * @tags 通讯录群组
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressGroupGroupRolesBySessionId = (
  option?: ApiAbilityPostAddressGroupGroupRolesBySessionIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressGroupGroupRolesBySessionIdResponseSuccess>(
    "/addressGroup/group/rolesBySessionId",
    { method: "post", body: option },
    config
  );

type ApiAbilityGetAddressGroupGroupsGroupIdsOption = {
  /**
    @description
      groupIds */
  groupIds: string;
};

/** @description response type for apiAbilityGetAddressGroupGroupsGroupIds */
interface ApiAbilityGetAddressGroupGroupsGroupIdsResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyGroupOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityGetAddressGroupGroupsGroupIdsResponseSuccess =
  ApiAbilityGetAddressGroupGroupsGroupIdsResponse[200];
/**
 * @description
 *   getGroups
 * @tags 通讯录群组
 * @produces *
 */
export const apiAbilityGetAddressGroupGroupsGroupIds = (
  option?: ApiAbilityGetAddressGroupGroupsGroupIdsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetAddressGroupGroupsGroupIdsResponseSuccess>(
    "/addressGroup/groups/:groupIds",
    { method: "get", path: option },
    config
  );

type ApiAbilityPostAddressGroupListOption = AddressGroupSearchInput;

/** @description response type for apiAbilityPostAddressGroupList */
interface ApiAbilityPostAddressGroupListResponse {
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

type ApiAbilityPostAddressGroupListResponseSuccess =
  ApiAbilityPostAddressGroupListResponse[200];
/**
 * @description
 *   查询
 * @tags 通讯录群组
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressGroupList = (
  option?: ApiAbilityPostAddressGroupListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressGroupListResponseSuccess>(
    "/addressGroup/list",
    { method: "post", body: option },
    config
  );

type ApiAbilityGetAddressGroupListCpmoCodeLevelOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      level */
  level: string;
};

/** @description response type for apiAbilityGetAddressGroupListCpmoCodeLevel */
interface ApiAbilityGetAddressGroupListCpmoCodeLevelResponse {
  /**
   * @description
   *   OK
   */
  200: Array<SceneGroupListOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityGetAddressGroupListCpmoCodeLevelResponseSuccess =
  ApiAbilityGetAddressGroupListCpmoCodeLevelResponse[200];
/**
 * @description
 *   getGroupList
 * @tags 通讯录群组
 * @produces *
 */
export const apiAbilityGetAddressGroupListCpmoCodeLevel = (
  option?: ApiAbilityGetAddressGroupListCpmoCodeLevelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetAddressGroupListCpmoCodeLevelResponseSuccess>(
    "/addressGroup/list/:cpmoCode/:level",
    { method: "get", path: option },
    config
  );

type ApiAbilityGetAddressGroupListAllCompanyCodeOption = {
  /**
    @description
      companyCode */
  companyCode: string;
};

/** @description response type for apiAbilityGetAddressGroupListAllCompanyCode */
interface ApiAbilityGetAddressGroupListAllCompanyCodeResponse {
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

type ApiAbilityGetAddressGroupListAllCompanyCodeResponseSuccess =
  ApiAbilityGetAddressGroupListAllCompanyCodeResponse[200];
/**
 * @description
 *   查询公司下所有通讯录群组
 * @tags 通讯录群组
 * @produces *
 */
export const apiAbilityGetAddressGroupListAllCompanyCode = (
  option?: ApiAbilityGetAddressGroupListAllCompanyCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetAddressGroupListAllCompanyCodeResponseSuccess>(
    "/addressGroup/listAll/:companyCode",
    { method: "get", path: option },
    config
  );

type ApiAbilityGetAddressGroupListGroupByCcodeCompCodeOption = {
  /**
    @description
      compCode */
  compCode: string;
};

/** @description response type for apiAbilityGetAddressGroupListGroupByCcodeCompCode */
interface ApiAbilityGetAddressGroupListGroupByCcodeCompCodeResponse {
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

type ApiAbilityGetAddressGroupListGroupByCcodeCompCodeResponseSuccess =
  ApiAbilityGetAddressGroupListGroupByCcodeCompCodeResponse[200];
/**
 * @description
 *   查询公司下所有通讯录群组（仅包含具有短信、外呼权限的公司所属群组）
 * @tags 通讯录群组
 * @produces *
 */
export const apiAbilityGetAddressGroupListGroupByCcodeCompCode = (
  option?: ApiAbilityGetAddressGroupListGroupByCcodeCompCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetAddressGroupListGroupByCcodeCompCodeResponseSuccess>(
    "/addressGroup/listGroupByCcode/:compCode",
    { method: "get", path: option },
    config
  );

type ApiAbilityGetAddressGroupListGroupByEcodeEntityCodeOption = {
  /**
    @description
      entityCode */
  entityCode: string;
};

/** @description response type for apiAbilityGetAddressGroupListGroupByEcodeEntityCode */
interface ApiAbilityGetAddressGroupListGroupByEcodeEntityCodeResponse {
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

type ApiAbilityGetAddressGroupListGroupByEcodeEntityCodeResponseSuccess =
  ApiAbilityGetAddressGroupListGroupByEcodeEntityCodeResponse[200];
/**
 * @description
 *   查询公司下所有通讯录群组（仅包含具有短信、外呼权限的公司所属群组）
 * @tags 通讯录群组
 * @produces *
 */
export const apiAbilityGetAddressGroupListGroupByEcodeEntityCode = (
  option?: ApiAbilityGetAddressGroupListGroupByEcodeEntityCodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetAddressGroupListGroupByEcodeEntityCodeResponseSuccess>(
    "/addressGroup/listGroupByEcode/:entityCode",
    { method: "get", path: option },
    config
  );

type ApiAbilityPostAddressGroupSaveOption = AddressGroupSaveInput;

/** @description response type for apiAbilityPostAddressGroupSave */
interface ApiAbilityPostAddressGroupSaveResponse {
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

type ApiAbilityPostAddressGroupSaveResponseSuccess =
  ApiAbilityPostAddressGroupSaveResponse[200];
/**
 * @description
 *   保存
 * @tags 通讯录群组
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressGroupSave = (
  option?: ApiAbilityPostAddressGroupSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressGroupSaveResponseSuccess>(
    "/addressGroup/save",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostAddressListDelOption = AddressListDelInput;

/** @description response type for apiAbilityPostAddressListDel */
interface ApiAbilityPostAddressListDelResponse {
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

type ApiAbilityPostAddressListDelResponseSuccess =
  ApiAbilityPostAddressListDelResponse[200];
/**
 * @description
 *   删除
 * @tags 通讯录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressListDel = (
  option?: ApiAbilityPostAddressListDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListDelResponseSuccess>(
    "/addressList/del",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostAddressListListOption = AddressListSearchInput;

/** @description response type for apiAbilityPostAddressListList */
interface ApiAbilityPostAddressListListResponse {
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

type ApiAbilityPostAddressListListResponseSuccess =
  ApiAbilityPostAddressListListResponse[200];
/**
 * @description
 *   查询
 * @tags 通讯录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressListList = (
  option?: ApiAbilityPostAddressListListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListListResponseSuccess>(
    "/addressList/list",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostAddressListListByGroupIdsOption = AddressListInput;

/** @description response type for apiAbilityPostAddressListListByGroupIds */
interface ApiAbilityPostAddressListListByGroupIdsResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AddressListTree>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityPostAddressListListByGroupIdsResponseSuccess =
  ApiAbilityPostAddressListListByGroupIdsResponse[200];
/**
 * @description
 *   根据群组ID返回通讯录树
 *   根据群组ID返回通讯录树
 * @tags 通讯录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressListListByGroupIds = (
  option?: ApiAbilityPostAddressListListByGroupIdsOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListListByGroupIdsResponseSuccess>(
    "/addressList/listByGroupIds",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostAddressListNewListOption = AddressListSearchInput;

/** @description response type for apiAbilityPostAddressListNewList */
interface ApiAbilityPostAddressListNewListResponse {
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

type ApiAbilityPostAddressListNewListResponseSuccess =
  ApiAbilityPostAddressListNewListResponse[200];
/**
 * @description
 *   查询
 * @tags 通讯录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressListNewList = (
  option?: ApiAbilityPostAddressListNewListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListNewListResponseSuccess>(
    "/addressList/newList",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostAddressListNewListFromTaskOption = AddressListSearchInput;

/** @description response type for apiAbilityPostAddressListNewListFromTask */
interface ApiAbilityPostAddressListNewListFromTaskResponse {
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

type ApiAbilityPostAddressListNewListFromTaskResponseSuccess =
  ApiAbilityPostAddressListNewListFromTaskResponse[200];
/**
 * @description
 *   查询
 * @tags 通讯录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressListNewListFromTask = (
  option?: ApiAbilityPostAddressListNewListFromTaskOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListNewListFromTaskResponseSuccess>(
    "/addressList/newListFromTask",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostAddressListReadExcelOption = File;

/** @description response type for apiAbilityPostAddressListReadExcel */
interface ApiAbilityPostAddressListReadExcelResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: Array<{
      [propertyName: string]: any;
    }>;
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

type ApiAbilityPostAddressListReadExcelResponseSuccess =
  ApiAbilityPostAddressListReadExcelResponse[200];
/**
 * @description
 *   解析文件，true为校验通过的，false为校验不通过的
 * @tags 通讯录
 * @produces *
 * @consumes multipart/form-data
 */
export const apiAbilityPostAddressListReadExcel = (
  option?: ApiAbilityPostAddressListReadExcelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListReadExcelResponseSuccess>(
    "/addressList/readExcel",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostAddressListRolesListOption = PersonRoleInput;

/** @description response type for apiAbilityPostAddressListRolesList */
interface ApiAbilityPostAddressListRolesListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<RoleGroupOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityPostAddressListRolesListResponseSuccess =
  ApiAbilityPostAddressListRolesListResponse[200];
/**
 * @description
 *   应急角色选择
 *   应急角色选择
 * @tags 通讯录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressListRolesList = (
  option?: ApiAbilityPostAddressListRolesListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListRolesListResponseSuccess>(
    "/addressList/roles/list",
    { method: "post", body: option },
    config
  );

type ApiAbilityGetAddressListRolesGroupIdItcodeOption = {
  /**
    @description
      groupId
    @format int32 */
  groupId: number;
  /**
    @description
      itcode */
  itcode: string;
};

/** @description response type for apiAbilityGetAddressListRolesGroupIdItcode */
interface ApiAbilityGetAddressListRolesGroupIdItcodeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<RoleGroupChooseOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityGetAddressListRolesGroupIdItcodeResponseSuccess =
  ApiAbilityGetAddressListRolesGroupIdItcodeResponse[200];
/**
 * @description
 *   应急角色选择渲染
 *   应急角色选择渲染
 * @tags 通讯录
 * @produces *
 */
export const apiAbilityGetAddressListRolesGroupIdItcode = (
  option?: ApiAbilityGetAddressListRolesGroupIdItcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetAddressListRolesGroupIdItcodeResponseSuccess>(
    "/addressList/roles/:groupId/:itcode",
    { method: "get", path: option },
    config
  );

type ApiAbilityPostAddressListSaveOption = AddressListSaveInput;

/** @description response type for apiAbilityPostAddressListSave */
interface ApiAbilityPostAddressListSaveResponse {
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

type ApiAbilityPostAddressListSaveResponseSuccess =
  ApiAbilityPostAddressListSaveResponse[200];
/**
 * @description
 *   保存
 * @tags 通讯录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressListSave = (
  option?: ApiAbilityPostAddressListSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListSaveResponseSuccess>(
    "/addressList/save",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostAddressListSaveAllOption = Array<AddressListSaveInput>;

/** @description response type for apiAbilityPostAddressListSaveAll */
interface ApiAbilityPostAddressListSaveAllResponse {
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

type ApiAbilityPostAddressListSaveAllResponseSuccess =
  ApiAbilityPostAddressListSaveAllResponse[200];
/**
 * @description
 *   保存,返回保存成功条数
 * @tags 通讯录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressListSaveAll = (
  option?: ApiAbilityPostAddressListSaveAllOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListSaveAllResponseSuccess>(
    "/addressList/saveAll",
    { method: "post", body: option },
    config
  );

/** @description response type for apiAbilityGetAddressListTempFile */
interface ApiAbilityGetAddressListTempFileResponse {
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

type ApiAbilityGetAddressListTempFileResponseSuccess =
  ApiAbilityGetAddressListTempFileResponse[200];
/**
 * @description
 *   模版文件
 * @tags 通讯录
 * @produces *
 */
export const apiAbilityGetAddressListTempFile = (config?: AxiosRequestConfig) =>
  requester<ApiAbilityGetAddressListTempFileResponseSuccess>(
    "/addressList/tempFile",
    { method: "get" },
    config
  );

type ApiAbilityPostAddressListTreeOption = SuperInput;

/** @description response type for apiAbilityPostAddressListTree */
interface ApiAbilityPostAddressListTreeResponse {
  /**
   * @description
   *   OK
   */
  200: Array<AddressListTree>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityPostAddressListTreeResponseSuccess =
  ApiAbilityPostAddressListTreeResponse[200];
/**
 * @description
 *   返回成功条数
 *   通讯录树
 * @tags 通讯录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostAddressListTree = (
  option?: ApiAbilityPostAddressListTreeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListTreeResponseSuccess>(
    "/addressList/tree",
    { method: "post", body: option },
    config
  );

/** @description request parameter type for apiAbilityPostAddressListUpload */
interface ApiAbilityPostAddressListUploadOption {
  /**
   * @description
   *   cpmoCop
   */
  query: {
    /**
        @description
          cpmoCop */
    cpmoCop: string;
    /**
        @description
          groupId
        @format int32 */
    groupId: number;
    /**
        @description
          optUserAccount */
    optUserAccount: string;
    /**
        @description
          optUserName */
    optUserName: string;
  };
}

/** @description request parameter type for apiAbilityPostAddressListUpload */
interface ApiAbilityPostAddressListUploadOption {
  /**
   * @description
   *   file
   */
  body: File;
}

/** @description response type for apiAbilityPostAddressListUpload */
interface ApiAbilityPostAddressListUploadResponse {
  /**
   * @description
   *   OK
   */
  200: {
    [propertyName: string]: Array<{
      [propertyName: string]: any;
    }>;
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

type ApiAbilityPostAddressListUploadResponseSuccess =
  ApiAbilityPostAddressListUploadResponse[200];
/**
 * @description
 *   文件导入
 * @tags 通讯录
 * @produces *
 * @consumes multipart/form-data
 */
export const apiAbilityPostAddressListUpload = (
  option: ApiAbilityPostAddressListUploadOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostAddressListUploadResponseSuccess>(
    "/addressList/upload",
    { method: "post", ...option },
    config
  );

type ApiAbilityPostCallRecordsAddOption = CallRecordsInputDto;

/** @description response type for apiAbilityPostCallRecordsAdd */
interface ApiAbilityPostCallRecordsAddResponse {
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

type ApiAbilityPostCallRecordsAddResponseSuccess =
  ApiAbilityPostCallRecordsAddResponse[200];
/**
 * @description
 *   添加通话记录接口
 * @tags 通话记录相关
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostCallRecordsAdd = (
  option?: ApiAbilityPostCallRecordsAddOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostCallRecordsAddResponseSuccess>(
    "/call/records/add",
    { method: "post", body: option },
    config
  );

/** @description response type for apiAbilityPostCallRecordsDel */
interface ApiAbilityPostCallRecordsDelResponse {
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

type ApiAbilityPostCallRecordsDelResponseSuccess =
  ApiAbilityPostCallRecordsDelResponse[200];
/**
 * @description
 *   删除两天前的文件接口
 * @tags 通话记录相关
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostCallRecordsDel = (config?: AxiosRequestConfig) =>
  requester<ApiAbilityPostCallRecordsDelResponseSuccess>(
    "/call/records/del",
    { method: "post" },
    config
  );

type ApiAbilityGetCallRecordsGetVideoContentCallIdOption = {
  /**
    @description
      callId */
  callId: string;
};

/** @description response type for apiAbilityGetCallRecordsGetVideoContentCallId */
interface ApiAbilityGetCallRecordsGetVideoContentCallIdResponse {
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

type ApiAbilityGetCallRecordsGetVideoContentCallIdResponseSuccess =
  ApiAbilityGetCallRecordsGetVideoContentCallIdResponse[200];
/**
 * @description
 *   录音转文字接口
 * @tags 通话记录相关
 * @produces *
 */
export const apiAbilityGetCallRecordsGetVideoContentCallId = (
  option?: ApiAbilityGetCallRecordsGetVideoContentCallIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetCallRecordsGetVideoContentCallIdResponseSuccess>(
    "/call/records/getVideoContent/:callId",
    { method: "get", path: option },
    config
  );

type ApiAbilityPostCallRecordsUpdateOption = CallRecordInput;

/** @description response type for apiAbilityPostCallRecordsUpdate */
interface ApiAbilityPostCallRecordsUpdateResponse {
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

type ApiAbilityPostCallRecordsUpdateResponseSuccess =
  ApiAbilityPostCallRecordsUpdateResponse[200];
/**
 * @description
 *   更新通话记录录音url接口
 * @tags 通话记录相关
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostCallRecordsUpdate = (
  option?: ApiAbilityPostCallRecordsUpdateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostCallRecordsUpdateResponseSuccess>(
    "/call/records/update",
    { method: "post", body: option },
    config
  );

type ApiAbilityGetCallRecordsRemarkOption = {
  /**
    @description
      remark */
  remark: string;
};

/** @description response type for apiAbilityGetCallRecordsRemark */
interface ApiAbilityGetCallRecordsRemarkResponse {
  /**
   * @description
   *   OK
   */
  200: Array<CallRecordsOutput>;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityGetCallRecordsRemarkResponseSuccess =
  ApiAbilityGetCallRecordsRemarkResponse[200];
/**
 * @description
 *   getCallRecords
 * @tags 通话记录相关
 * @produces *
 */
export const apiAbilityGetCallRecordsRemark = (
  option?: ApiAbilityGetCallRecordsRemarkOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetCallRecordsRemarkResponseSuccess>(
    "/call/records/:remark",
    { method: "get", path: option },
    config
  );

type ApiAbilityPostCallOutCommonOption = PhoneCallOutInput;

/** @description response type for apiAbilityPostCallOutCommon */
interface ApiAbilityPostCallOutCommonResponse {
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

type ApiAbilityPostCallOutCommonResponseSuccess =
  ApiAbilityPostCallOutCommonResponse[200];
/**
 * @description
 *   短信外呼对外接口
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostCallOutCommon = (
  option?: ApiAbilityPostCallOutCommonOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostCallOutCommonResponseSuccess>(
    "/callOut/common",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostCallOutOutOption = PhoneOptSaveInput;

/** @description response type for apiAbilityPostCallOutOut */
interface ApiAbilityPostCallOutOutResponse {
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

type ApiAbilityPostCallOutOutResponseSuccess =
  ApiAbilityPostCallOutOutResponse[200];
/**
 * @description
 *   返回信息，KEY：姓名(手机号)，VALUE:OK(成功),其它错误原因
 *   呼叫短信
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostCallOutOut = (
  option?: ApiAbilityPostCallOutOutOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostCallOutOutResponseSuccess>(
    "/callOut/out",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostCallOutSpecialOption = PhoneCallOutSpecialInput;

/** @description response type for apiAbilityPostCallOutSpecial */
interface ApiAbilityPostCallOutSpecialResponse {
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

type ApiAbilityPostCallOutSpecialResponseSuccess =
  ApiAbilityPostCallOutSpecialResponse[200];
/**
 * @description
 *   短信外呼对外接口(聚安卫士使用，支持给座机打电话)
 * @tags 呼出
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostCallOutSpecial = (
  option?: ApiAbilityPostCallOutSpecialOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostCallOutSpecialResponseSuccess>(
    "/callOut/special",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostCalloutIcomeMsgOption = {
  [propertyName: string]: any;
};

/** @description response type for apiAbilityPostCalloutIcomeMsg */
interface ApiAbilityPostCalloutIcomeMsgResponse {
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

type ApiAbilityPostCalloutIcomeMsgResponseSuccess =
  ApiAbilityPostCalloutIcomeMsgResponse[200];
/**
 * @description
 *   sendCallOutMsg
 * @tags icome-msg-controller
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostCalloutIcomeMsg = (
  option?: ApiAbilityPostCalloutIcomeMsgOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostCalloutIcomeMsgResponseSuccess>(
    "/callout/icome/msg",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostIcomeInfoOption = IcomeGroupInput;

/** @description response type for apiAbilityPostIcomeInfo */
interface ApiAbilityPostIcomeInfoResponse {
  /**
   * @description
   *   OK
   */
  200: IcomeGroupOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityPostIcomeInfoResponseSuccess =
  ApiAbilityPostIcomeInfoResponse[200];
/**
 * @description
 *   查看icome群组信息
 * @tags icome群组
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostIcomeInfo = (
  option?: ApiAbilityPostIcomeInfoOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostIcomeInfoResponseSuccess>(
    "/icome/info",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostIcomeRelateOption = IcomeGroupInput;

/** @description response type for apiAbilityPostIcomeRelate */
interface ApiAbilityPostIcomeRelateResponse {
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

type ApiAbilityPostIcomeRelateResponseSuccess =
  ApiAbilityPostIcomeRelateResponse[200];
/**
 * @description
 *   通讯录关联icome群组
 * @tags icome群组
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostIcomeRelate = (
  option?: ApiAbilityPostIcomeRelateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostIcomeRelateResponseSuccess>(
    "/icome/relate",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostIcomeRelateCancelOption = IcomeGroupInput;

/** @description response type for apiAbilityPostIcomeRelateCancel */
interface ApiAbilityPostIcomeRelateCancelResponse {
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

type ApiAbilityPostIcomeRelateCancelResponseSuccess =
  ApiAbilityPostIcomeRelateCancelResponse[200];
/**
 * @description
 *   通讯录取消关联icome群组
 * @tags icome群组
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostIcomeRelateCancel = (
  option?: ApiAbilityPostIcomeRelateCancelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostIcomeRelateCancelResponseSuccess>(
    "/icome/relate/cancel",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostIcomeSendOption = any;

/** @description response type for apiAbilityPostIcomeSend */
interface ApiAbilityPostIcomeSendResponse {
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

type ApiAbilityPostIcomeSendResponseSuccess =
  ApiAbilityPostIcomeSendResponse[200];
/**
 * @description
 *   sendIcomeMsg
 * @tags icome-msg-controller
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostIcomeSend = (
  option?: ApiAbilityPostIcomeSendOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostIcomeSendResponseSuccess>(
    "/icome/send",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostIcomeServiceAccountSendOption =
  IcomeServiceAccountSendMsgInput;

/** @description response type for apiAbilityPostIcomeServiceAccountSend */
interface ApiAbilityPostIcomeServiceAccountSendResponse {
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

type ApiAbilityPostIcomeServiceAccountSendResponseSuccess =
  ApiAbilityPostIcomeServiceAccountSendResponse[200];
/**
 * @description
 *   sendServiceAccountMsg
 * @tags icome-msg-controller
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostIcomeServiceAccountSend = (
  option?: ApiAbilityPostIcomeServiceAccountSendOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostIcomeServiceAccountSendResponseSuccess>(
    "/icome/service/account/send",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostIcomeTodoCreateOption = IcomeTodoInput;

/** @description response type for apiAbilityPostIcomeTodoCreate */
interface ApiAbilityPostIcomeTodoCreateResponse {
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

type ApiAbilityPostIcomeTodoCreateResponseSuccess =
  ApiAbilityPostIcomeTodoCreateResponse[200];
/**
 * @description
 *   createIcomeTodo
 * @tags icome-msg-controller
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostIcomeTodoCreate = (
  option?: ApiAbilityPostIcomeTodoCreateOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostIcomeTodoCreateResponseSuccess>(
    "/icome/todo/create",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostIcomeTodoDeleteOption = IcomeTodoInput;

/** @description response type for apiAbilityPostIcomeTodoDelete */
interface ApiAbilityPostIcomeTodoDeleteResponse {
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

type ApiAbilityPostIcomeTodoDeleteResponseSuccess =
  ApiAbilityPostIcomeTodoDeleteResponse[200];
/**
 * @description
 *   deleteIcomeTodo
 * @tags icome-msg-controller
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostIcomeTodoDelete = (
  option?: ApiAbilityPostIcomeTodoDeleteOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostIcomeTodoDeleteResponseSuccess>(
    "/icome/todo/delete",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostMsgTemplateDelOption = MsgTemplateDelInput;

/** @description response type for apiAbilityPostMsgTemplateDel */
interface ApiAbilityPostMsgTemplateDelResponse {
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

type ApiAbilityPostMsgTemplateDelResponseSuccess =
  ApiAbilityPostMsgTemplateDelResponse[200];
/**
 * @description
 *   删除
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostMsgTemplateDel = (
  option?: ApiAbilityPostMsgTemplateDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostMsgTemplateDelResponseSuccess>(
    "/msgTemplate/del",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostMsgTemplateDelNewOption = MsgTemplateSaveInput;

/** @description response type for apiAbilityPostMsgTemplateDelNew */
interface ApiAbilityPostMsgTemplateDelNewResponse {
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

type ApiAbilityPostMsgTemplateDelNewResponseSuccess =
  ApiAbilityPostMsgTemplateDelNewResponse[200];
/**
 * @description
 *   删除
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostMsgTemplateDelNew = (
  option?: ApiAbilityPostMsgTemplateDelNewOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostMsgTemplateDelNewResponseSuccess>(
    "/msgTemplate/delNew",
    { method: "post", body: option },
    config
  );

type ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeOption =
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

/** @description response type for apiAbilityGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCode */
interface ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponse {
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

type ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponseSuccess =
  ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponse[200];
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiAbilityGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCode =
  (
    option?: ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeCompanyCodeSceneTypeCodeResponseSuccess>(
      "/msgTemplate/getAllTemplateByCompCode/:companyCode/:scene/:typeCode",
      { method: "get", path: option },
      config
    );

type ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeOption =
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

/** @description response type for apiAbilityGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeType */
interface ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponse {
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

type ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponseSuccess =
  ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponse[200];
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiAbilityGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeType =
  (
    option?: ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeOption,
    config?: AxiosRequestConfig
  ) =>
    requester<ApiAbilityGetMsgTemplateGetAllTemplateByCompCodeAndModelCompanyCodeSceneTypeCodeTypeResponseSuccess>(
      "/msgTemplate/getAllTemplateByCompCodeAndModel/:companyCode/:scene/:typeCode/:type",
      { method: "get", path: option },
      config
    );

type ApiAbilityGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneOption = {
  /**
    @description
      cpmoCode */
  cpmoCode: string;
  /**
    @description
      scene */
  scene: string;
};

/** @description response type for apiAbilityGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeScene */
interface ApiAbilityGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponse {
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

type ApiAbilityGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponseSuccess =
  ApiAbilityGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponse[200];
/**
 * @description
 *   查询管理实体下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiAbilityGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeScene = (
  option?: ApiAbilityGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetMsgTemplateGetAllTemplateByCpmoCodeCpmoCodeSceneResponseSuccess>(
    "/msgTemplate/getAllTemplateByCpmoCode/:cpmoCode/:scene",
    { method: "get", path: option },
    config
  );

type ApiAbilityGetMsgTemplateGetAllTemplateByIdTemplateIdOption = {
  /**
    @description
      templateId
    @format int64 */
  templateId: number;
};

/** @description response type for apiAbilityGetMsgTemplateGetAllTemplateByIdTemplateId */
interface ApiAbilityGetMsgTemplateGetAllTemplateByIdTemplateIdResponse {
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

type ApiAbilityGetMsgTemplateGetAllTemplateByIdTemplateIdResponseSuccess =
  ApiAbilityGetMsgTemplateGetAllTemplateByIdTemplateIdResponse[200];
/**
 * @description
 *   查询公司下配置的短信和外呼模版
 * @tags 信息模版
 * @produces *
 */
export const apiAbilityGetMsgTemplateGetAllTemplateByIdTemplateId = (
  option?: ApiAbilityGetMsgTemplateGetAllTemplateByIdTemplateIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetMsgTemplateGetAllTemplateByIdTemplateIdResponseSuccess>(
    "/msgTemplate/getAllTemplateById/:templateId",
    { method: "get", path: option },
    config
  );

type ApiAbilityGetMsgTemplateGetTemplateTypeCodeTemplateIdOption = {
  /**
    @description
      templateId */
  templateId: string;
};

/** @description response type for apiAbilityGetMsgTemplateGetTemplateTypeCodeTemplateId */
interface ApiAbilityGetMsgTemplateGetTemplateTypeCodeTemplateIdResponse {
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

type ApiAbilityGetMsgTemplateGetTemplateTypeCodeTemplateIdResponseSuccess =
  ApiAbilityGetMsgTemplateGetTemplateTypeCodeTemplateIdResponse[200];
/**
 * @description
 *   查询当前下配置typeCode类型
 * @tags 信息模版
 * @produces *
 */
export const apiAbilityGetMsgTemplateGetTemplateTypeCodeTemplateId = (
  option?: ApiAbilityGetMsgTemplateGetTemplateTypeCodeTemplateIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetMsgTemplateGetTemplateTypeCodeTemplateIdResponseSuccess>(
    "/msgTemplate/getTemplateTypeCode/:templateId",
    { method: "get", path: option },
    config
  );

type ApiAbilityPostMsgTemplateGetTypeListOption = QueryTypeInput;

/** @description response type for apiAbilityPostMsgTemplateGetTypeList */
interface ApiAbilityPostMsgTemplateGetTypeListResponse {
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

type ApiAbilityPostMsgTemplateGetTypeListResponseSuccess =
  ApiAbilityPostMsgTemplateGetTypeListResponse[200];
/**
 * @description
 *   查询模板可配置类型
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostMsgTemplateGetTypeList = (
  option?: ApiAbilityPostMsgTemplateGetTypeListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostMsgTemplateGetTypeListResponseSuccess>(
    "/msgTemplate/getTypeList",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostMsgTemplateListOption = MsgTemplateSearchInput;

/** @description response type for apiAbilityPostMsgTemplateList */
interface ApiAbilityPostMsgTemplateListResponse {
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

type ApiAbilityPostMsgTemplateListResponseSuccess =
  ApiAbilityPostMsgTemplateListResponse[200];
/**
 * @description
 *   查询
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostMsgTemplateList = (
  option?: ApiAbilityPostMsgTemplateListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostMsgTemplateListResponseSuccess>(
    "/msgTemplate/list",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostMsgTemplateSaveOption = MsgTemplateSaveInput;

/** @description response type for apiAbilityPostMsgTemplateSave */
interface ApiAbilityPostMsgTemplateSaveResponse {
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

type ApiAbilityPostMsgTemplateSaveResponseSuccess =
  ApiAbilityPostMsgTemplateSaveResponse[200];
/**
 * @description
 *   保存
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostMsgTemplateSave = (
  option?: ApiAbilityPostMsgTemplateSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostMsgTemplateSaveResponseSuccess>(
    "/msgTemplate/save",
    { method: "post", body: option },
    config
  );

/** @description response type for apiAbilityGetMsgTemplateSensitiveWords */
interface ApiAbilityGetMsgTemplateSensitiveWordsResponse {
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

type ApiAbilityGetMsgTemplateSensitiveWordsResponseSuccess =
  ApiAbilityGetMsgTemplateSensitiveWordsResponse[200];
/**
 * @description
 *   查询敏感词汇
 * @tags 信息模版
 * @produces *
 */
export const apiAbilityGetMsgTemplateSensitiveWords = (
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetMsgTemplateSensitiveWordsResponseSuccess>(
    "/msgTemplate/sensitive/words",
    { method: "get" },
    config
  );

type ApiAbilityPostMsgTemplateTemplateSaveOption = MsgTemplateSaveInput;

/** @description response type for apiAbilityPostMsgTemplateTemplateSave */
interface ApiAbilityPostMsgTemplateTemplateSaveResponse {
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

type ApiAbilityPostMsgTemplateTemplateSaveResponseSuccess =
  ApiAbilityPostMsgTemplateTemplateSaveResponse[200];
/**
 * @description
 *   批量添加模板
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostMsgTemplateTemplateSave = (
  option?: ApiAbilityPostMsgTemplateTemplateSaveOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostMsgTemplateTemplateSaveResponseSuccess>(
    "/msgTemplate/templateSave",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostMsgTemplateTemplateUpdOption = MsgTemplateSaveInput;

/** @description response type for apiAbilityPostMsgTemplateTemplateUpd */
interface ApiAbilityPostMsgTemplateTemplateUpdResponse {
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

type ApiAbilityPostMsgTemplateTemplateUpdResponseSuccess =
  ApiAbilityPostMsgTemplateTemplateUpdResponse[200];
/**
 * @description
 *   批量修改模板
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostMsgTemplateTemplateUpd = (
  option?: ApiAbilityPostMsgTemplateTemplateUpdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostMsgTemplateTemplateUpdResponseSuccess>(
    "/msgTemplate/templateUpd",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostMsgTemplateValidUniqueOption = MsgTemplateValidUniqueInput;

/** @description response type for apiAbilityPostMsgTemplateValidUnique */
interface ApiAbilityPostMsgTemplateValidUniqueResponse {
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

type ApiAbilityPostMsgTemplateValidUniqueResponseSuccess =
  ApiAbilityPostMsgTemplateValidUniqueResponse[200];
/**
 * @description
 *   重复校验，true为无重复，校验通过
 * @tags 信息模版
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostMsgTemplateValidUnique = (
  option?: ApiAbilityPostMsgTemplateValidUniqueOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostMsgTemplateValidUniqueResponseSuccess>(
    "/msgTemplate/validUnique",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostPhoneCallListOption = PhoneCallSearchInput;

/** @description response type for apiAbilityPostPhoneCallList */
interface ApiAbilityPostPhoneCallListResponse {
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

type ApiAbilityPostPhoneCallListResponseSuccess =
  ApiAbilityPostPhoneCallListResponse[200];
/**
 * @description
 *   查询
 * @tags 呼叫记录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostPhoneCallList = (
  option?: ApiAbilityPostPhoneCallListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostPhoneCallListResponseSuccess>(
    "/phoneCall/list",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostPhoneCallSearchByTaskIdTaskIdOption = {
  /**
    @description
      taskId
    @format int64 */
  taskId: number;
};

/** @description response type for apiAbilityPostPhoneCallSearchByTaskIdTaskId */
interface ApiAbilityPostPhoneCallSearchByTaskIdTaskIdResponse {
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

type ApiAbilityPostPhoneCallSearchByTaskIdTaskIdResponseSuccess =
  ApiAbilityPostPhoneCallSearchByTaskIdTaskIdResponse[200];
/**
 * @description
 *   通过任务ID查询
 * @tags 呼叫记录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostPhoneCallSearchByTaskIdTaskId = (
  option?: ApiAbilityPostPhoneCallSearchByTaskIdTaskIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostPhoneCallSearchByTaskIdTaskIdResponseSuccess>(
    "/phoneCall/searchByTaskId/:taskId",
    { method: "post", path: option },
    config
  );

type ApiAbilityPostPhoneMsgListOption = PhoneMsgSearchInput;

/** @description response type for apiAbilityPostPhoneMsgList */
interface ApiAbilityPostPhoneMsgListResponse {
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

type ApiAbilityPostPhoneMsgListResponseSuccess =
  ApiAbilityPostPhoneMsgListResponse[200];
/**
 * @description
 *   查询
 * @tags 短信记录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostPhoneMsgList = (
  option?: ApiAbilityPostPhoneMsgListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostPhoneMsgListResponseSuccess>(
    "/phoneMsg/list",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostPhoneMsgSearchByTaskIdTaskIdOption = {
  /**
    @description
      taskId
    @format int64 */
  taskId: number;
};

/** @description response type for apiAbilityPostPhoneMsgSearchByTaskIdTaskId */
interface ApiAbilityPostPhoneMsgSearchByTaskIdTaskIdResponse {
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

type ApiAbilityPostPhoneMsgSearchByTaskIdTaskIdResponseSuccess =
  ApiAbilityPostPhoneMsgSearchByTaskIdTaskIdResponse[200];
/**
 * @description
 *   通过任务ID查询
 * @tags 短信记录
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostPhoneMsgSearchByTaskIdTaskId = (
  option?: ApiAbilityPostPhoneMsgSearchByTaskIdTaskIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostPhoneMsgSearchByTaskIdTaskIdResponseSuccess>(
    "/phoneMsg/searchByTaskId/:taskId",
    { method: "post", path: option },
    config
  );

type ApiAbilityPostRoleBatchDelOption = EmergencyRoleDelInput;

/** @description response type for apiAbilityPostRoleBatchDel */
interface ApiAbilityPostRoleBatchDelResponse {
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

type ApiAbilityPostRoleBatchDelResponseSuccess =
  ApiAbilityPostRoleBatchDelResponse[200];
/**
 * @description
 *   应急角色批量删除
 * @tags 应急角色接口
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostRoleBatchDel = (
  option?: ApiAbilityPostRoleBatchDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostRoleBatchDelResponseSuccess>(
    "/role/batchDel",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostRoleDelOption = EmergencyRoleDelInput;

/** @description response type for apiAbilityPostRoleDel */
interface ApiAbilityPostRoleDelResponse {
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

type ApiAbilityPostRoleDelResponseSuccess = ApiAbilityPostRoleDelResponse[200];
/**
 * @description
 *   应急角色删除
 * @tags 应急角色接口
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostRoleDel = (
  option?: ApiAbilityPostRoleDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostRoleDelResponseSuccess>(
    "/role/del",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostRoleEditOption = EmergencyRoleAddInput;

/** @description response type for apiAbilityPostRoleEdit */
interface ApiAbilityPostRoleEditResponse {
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

type ApiAbilityPostRoleEditResponseSuccess =
  ApiAbilityPostRoleEditResponse[200];
/**
 * @description
 *   应急角色新增/编辑
 * @tags 应急角色接口
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostRoleEdit = (
  option?: ApiAbilityPostRoleEditOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostRoleEditResponseSuccess>(
    "/role/edit",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostRoleGroupDelOption = EmergencyRoleGroupDelInput;

/** @description response type for apiAbilityPostRoleGroupDel */
interface ApiAbilityPostRoleGroupDelResponse {
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

type ApiAbilityPostRoleGroupDelResponseSuccess =
  ApiAbilityPostRoleGroupDelResponse[200];
/**
 * @description
 *   应急角色分组删除
 * @tags 应急角色接口
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostRoleGroupDel = (
  option?: ApiAbilityPostRoleGroupDelOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostRoleGroupDelResponseSuccess>(
    "/role/group/del",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostRoleGroupEditOption = EmergencyRoleGroupAddInput;

/** @description response type for apiAbilityPostRoleGroupEdit */
interface ApiAbilityPostRoleGroupEditResponse {
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

type ApiAbilityPostRoleGroupEditResponseSuccess =
  ApiAbilityPostRoleGroupEditResponse[200];
/**
 * @description
 *   应急角色分组新增/编辑
 * @tags 应急角色接口
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostRoleGroupEdit = (
  option?: ApiAbilityPostRoleGroupEditOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostRoleGroupEditResponseSuccess>(
    "/role/group/edit",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostRoleGroupListOption = EmergencyRoleGroupListInput;

/** @description response type for apiAbilityPostRoleGroupList */
interface ApiAbilityPostRoleGroupListResponse {
  /**
   * @description
   *   OK
   */
  200: Array<EmergencyRoleGroupListOutput>;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityPostRoleGroupListResponseSuccess =
  ApiAbilityPostRoleGroupListResponse[200];
/**
 * @description
 *   应急角色分组列表
 * @tags 应急角色接口
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostRoleGroupList = (
  option?: ApiAbilityPostRoleGroupListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostRoleGroupListResponseSuccess>(
    "/role/group/list",
    { method: "post", body: option },
    config
  );

type ApiAbilityPostRoleListOption = EmergencyRoleListInput;

/** @description response type for apiAbilityPostRoleList */
interface ApiAbilityPostRoleListResponse {
  /**
   * @description
   *   OK
   */
  200: PageInfoEmergencyRoleListOutput;
  /**
   * @description
   *   Created
   */
  201: any;
  /**
   * @description
   *   Unauthorized
   */
  401: any;
  /**
   * @description
   *   Forbidden
   */
  403: any;
  /**
   * @description
   *   Not Found
   */
  404: any;
}

type ApiAbilityPostRoleListResponseSuccess =
  ApiAbilityPostRoleListResponse[200];
/**
 * @description
 *   应急角色列表
 * @tags 应急角色接口
 * @produces *
 * @consumes application/json
 */
export const apiAbilityPostRoleList = (
  option?: ApiAbilityPostRoleListOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityPostRoleListResponseSuccess>(
    "/role/list",
    { method: "post", body: option },
    config
  );

/** @description response type for apiAbilityGetUid */
interface ApiAbilityGetUidResponse {
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

type ApiAbilityGetUidResponseSuccess = ApiAbilityGetUidResponse[200];
/**
 * @description
 *   getUid
 * @tags $-proxy-121
 * @produces *
 */
export const apiAbilityGetUid = (config?: AxiosRequestConfig) =>
  requester<ApiAbilityGetUidResponseSuccess>("/uid", { method: "get" }, config);

type ApiAbilityGetUidParseOption = {
  /**
    @description
      param0
    @format int64 */
  param0: number;
};

/** @description response type for apiAbilityGetUidParse */
interface ApiAbilityGetUidParseResponse {
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

type ApiAbilityGetUidParseResponseSuccess = ApiAbilityGetUidParseResponse[200];
/**
 * @description
 *   parseUid
 * @tags $-proxy-121
 * @produces *
 */
export const apiAbilityGetUidParse = (
  option?: ApiAbilityGetUidParseOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetUidParseResponseSuccess>(
    "/uid/parse",
    { method: "get", query: option },
    config
  );

type ApiAbilityGetUserDetailInfoItcodeOption = {
  /**
    @description
      itcode */
  itcode: string;
};

/** @description response type for apiAbilityGetUserDetailInfoItcode */
interface ApiAbilityGetUserDetailInfoItcodeResponse {
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

type ApiAbilityGetUserDetailInfoItcodeResponseSuccess =
  ApiAbilityGetUserDetailInfoItcodeResponse[200];
/**
 * @description
 *   getUserDetailInfo
 * @tags user-detail-controller
 * @produces *
 */
export const apiAbilityGetUserDetailInfoItcode = (
  option?: ApiAbilityGetUserDetailInfoItcodeOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetUserDetailInfoItcodeResponseSuccess>(
    "/user/detail/info/:itcode",
    { method: "get", path: option },
    config
  );

type ApiAbilityGetUserEmpDetailInfoUserIdOption = {
  /**
    @description
      userId */
  userId: string;
};

/** @description response type for apiAbilityGetUserEmpDetailInfoUserId */
interface ApiAbilityGetUserEmpDetailInfoUserIdResponse {
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

type ApiAbilityGetUserEmpDetailInfoUserIdResponseSuccess =
  ApiAbilityGetUserEmpDetailInfoUserIdResponse[200];
/**
 * @description
 *   getUserEmpDetailInfo
 * @tags user-detail-controller
 * @produces *
 */
export const apiAbilityGetUserEmpDetailInfoUserId = (
  option?: ApiAbilityGetUserEmpDetailInfoUserIdOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiAbilityGetUserEmpDetailInfoUserIdResponseSuccess>(
    "/user/emp/detail/info/:userId",
    { method: "get", path: option },
    config
  );
