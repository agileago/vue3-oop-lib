/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { obsRequester as requester, type AxiosRequestConfig } from "../http";
import type {
  TemporarySignature,
  FileUploadInput,
  FileUploadOutput,
} from "./definition";

type ApiObsDeleteDeleteOption = {
  /**
    @description
      fileUrl */
  fileUrl: string;
};

/** @description response type for apiObsDeleteDelete */
interface ApiObsDeleteDeleteResponse {
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

type ApiObsDeleteDeleteResponseSuccess = ApiObsDeleteDeleteResponse[200];
/**
 * @description
 *   删除文件-前后端用
 * @tags 华为云OBS文件上传下载接口
 * @produces *
 */
export const apiObsDeleteDelete = (
  option?: ApiObsDeleteDeleteOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiObsDeleteDeleteResponseSuccess>(
    "/delete",
    { method: "delete", query: option },
    config
  );

type ApiObsGetDownloadOption = {
  /**
    @description
      fileUrl */
  fileUrl: string;
};

/** @description response type for apiObsGetDownload */
interface ApiObsGetDownloadResponse {
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

type ApiObsGetDownloadResponseSuccess = ApiObsGetDownloadResponse[200];
/**
 * @description
 *   下载文件
 * @tags 华为云OBS文件上传下载接口
 * @produces *
 */
export const apiObsGetDownload = (
  option?: ApiObsGetDownloadOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiObsGetDownloadResponseSuccess>(
    "/download",
    { method: "get", query: option },
    config
  );

type ApiObsGetDownloadBinaryOption = {
  /**
    @description
      fileUrl */
  fileUrl: string;
};

/** @description response type for apiObsGetDownloadBinary */
interface ApiObsGetDownloadBinaryResponse {
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

type ApiObsGetDownloadBinaryResponseSuccess =
  ApiObsGetDownloadBinaryResponse[200];
/**
 * @description
 *   下载二进制文件
 * @tags 华为云OBS文件上传下载接口
 * @produces *
 */
export const apiObsGetDownloadBinary = (
  option?: ApiObsGetDownloadBinaryOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiObsGetDownloadBinaryResponseSuccess>(
    "/download/binary",
    { method: "get", query: option },
    config
  );

type ApiObsGetDownloadSignOption = {
  /**
    @description
      fileUrl */
  fileUrl: string;
};

/** @description response type for apiObsGetDownloadSign */
interface ApiObsGetDownloadSignResponse {
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

type ApiObsGetDownloadSignResponseSuccess = ApiObsGetDownloadSignResponse[200];
/**
 * @description
 *   获取下载签名地址-前端用
 * @tags 华为云OBS文件上传下载接口
 * @produces *
 */
export const apiObsGetDownloadSign = (
  option?: ApiObsGetDownloadSignOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiObsGetDownloadSignResponseSuccess>(
    "/download/sign",
    { method: "get", query: option },
    config
  );

type ApiObsPostUploadOption = FileUploadInput;

/** @description response type for apiObsPostUpload */
interface ApiObsPostUploadResponse {
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

type ApiObsPostUploadResponseSuccess = ApiObsPostUploadResponse[200];
/**
 * @description
 *   上传二进制文件(后端微服务间Feign调用)
 * @tags 华为云OBS文件上传下载接口
 * @produces *
 * @consumes application/json
 */
export const apiObsPostUpload = (
  option?: ApiObsPostUploadOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiObsPostUploadResponseSuccess>(
    "/upload",
    { method: "post", body: option },
    config
  );

type ApiObsGetUploadSignOption = {
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

/** @description response type for apiObsGetUploadSign */
interface ApiObsGetUploadSignResponse {
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

type ApiObsGetUploadSignResponseSuccess = ApiObsGetUploadSignResponse[200];
/**
 * @description
 *   获取上传签名地址-前端用
 * @tags 华为云OBS文件上传下载接口
 * @produces *
 */
export const apiObsGetUploadSign = (
  option?: ApiObsGetUploadSignOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiObsGetUploadSignResponseSuccess>(
    "/upload/sign",
    { method: "get", query: option },
    config
  );
