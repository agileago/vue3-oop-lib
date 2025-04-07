/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import {
  fastdfsRequester as requester,
  type AxiosRequestConfig,
} from "../http";
import type { FileUploadOutput, UploadFileDto } from "./definition";

type ApiFastdfsGetDeleteOption = {
  /**
    @description
      filePath */
  filePath: string;
};

/** @description response type for apiFastdfsGetDelete */
interface ApiFastdfsGetDeleteResponse {
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

type ApiFastdfsGetDeleteResponseSuccess = ApiFastdfsGetDeleteResponse[200];
/**
 * @description
 *   删除文件
 *   删除文件
 * @tags FastDfs API
 * @produces *
 */
export const apiFastdfsGetDelete = (
  option?: ApiFastdfsGetDeleteOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiFastdfsGetDeleteResponseSuccess>(
    "/delete",
    { method: "get", query: option },
    config
  );

type ApiFastdfsDeleteDeleteByUrlOption = {
  /**
    @description
      fileUrl */
  fileUrl: string;
};

/** @description response type for apiFastdfsDeleteDeleteByUrl */
interface ApiFastdfsDeleteDeleteByUrlResponse {
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

type ApiFastdfsDeleteDeleteByUrlResponseSuccess =
  ApiFastdfsDeleteDeleteByUrlResponse[200];
/**
 * @description
 *   删除文件2.0
 *   删除文件
 * @tags FastDfs API
 * @produces *
 */
export const apiFastdfsDeleteDeleteByUrl = (
  option?: ApiFastdfsDeleteDeleteByUrlOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiFastdfsDeleteDeleteByUrlResponseSuccess>(
    "/deleteByUrl",
    { method: "delete", query: option },
    config
  );

type ApiFastdfsGetDownloadOption = {
  /**
    @description
      fileName */
  fileName: string;
  /**
    @description
      filePath */
  filePath: string;
};

/** @description response type for apiFastdfsGetDownload */
interface ApiFastdfsGetDownloadResponse {
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

type ApiFastdfsGetDownloadResponseSuccess = ApiFastdfsGetDownloadResponse[200];
/**
 * @description
 *   downloadFile
 * @tags FastDfs API
 * @produces *
 * @consumes application/json;charset=UTF-8
 */
export const apiFastdfsGetDownload = (
  option?: ApiFastdfsGetDownloadOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiFastdfsGetDownloadResponseSuccess>(
    "/download",
    { method: "get", query: option },
    config
  );

type ApiFastdfsGetDownloadFileOption = {
  /**
    @description
      fileName */
  fileName: string;
  /**
    @description
      filePath */
  filePath: string;
};

/** @description response type for apiFastdfsGetDownloadFile */
interface ApiFastdfsGetDownloadFileResponse {
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

type ApiFastdfsGetDownloadFileResponseSuccess =
  ApiFastdfsGetDownloadFileResponse[200];
/**
 * @description
 *   downloadFile
 * @tags FastDfs API
 * @produces *
 */
export const apiFastdfsGetDownloadFile = (
  option?: ApiFastdfsGetDownloadFileOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiFastdfsGetDownloadFileResponseSuccess>(
    "/download/file",
    { method: "get", query: option },
    config
  );

type ApiFastdfsGetPlayOption = {
  /**
    @description
      filePath */
  filePath: string;
};

/** @description response type for apiFastdfsGetPlay */
interface ApiFastdfsGetPlayResponse {
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

type ApiFastdfsGetPlayResponseSuccess = ApiFastdfsGetPlayResponse[200];
/**
 * @description
 *   streamMedia
 * @tags FastDfs API
 * @produces *
 */
export const apiFastdfsGetPlay = (
  option?: ApiFastdfsGetPlayOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiFastdfsGetPlayResponseSuccess>(
    "/play",
    { method: "get", query: option },
    config
  );

type ApiFastdfsPostUploadOption = {
  enterpriseCode: string;
  file: File;
};

/** @description response type for apiFastdfsPostUpload */
interface ApiFastdfsPostUploadResponse {
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

type ApiFastdfsPostUploadResponseSuccess = ApiFastdfsPostUploadResponse[200];
/**
 * @description
 *   MultipartFile 方式
 *   上传文件
 * @tags FastDfs API
 * @produces *
 * @consumes multipart/form-data
 */
export const apiFastdfsPostUpload = (
  option?: ApiFastdfsPostUploadOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiFastdfsPostUploadResponseSuccess>(
    "/upload",
    { method: "post", body: option },
    config
  );

type ApiFastdfsPostUploadBytesOption = UploadFileDto;

/** @description response type for apiFastdfsPostUploadBytes */
interface ApiFastdfsPostUploadBytesResponse {
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

type ApiFastdfsPostUploadBytesResponseSuccess =
  ApiFastdfsPostUploadBytesResponse[200];
/**
 * @description
 *   字节数组方式
 *   上传文件
 * @tags FastDfs API
 * @produces *
 * @consumes application/json
 */
export const apiFastdfsPostUploadBytes = (
  option?: ApiFastdfsPostUploadBytesOption,
  config?: AxiosRequestConfig
) =>
  requester<ApiFastdfsPostUploadBytesResponseSuccess>(
    "/upload/bytes",
    { method: "post", body: option },
    config
  );

/** @description response type for apiFastdfsGetZipUpload */
interface ApiFastdfsGetZipUploadResponse {
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

type ApiFastdfsGetZipUploadResponseSuccess =
  ApiFastdfsGetZipUploadResponse[200];
/**
 * @description
 *   zipUpload
 * @tags FastDfs API
 * @produces *
 */
export const apiFastdfsGetZipUpload = (config?: AxiosRequestConfig) =>
  requester<ApiFastdfsGetZipUploadResponseSuccess>(
    "/zip/upload",
    { method: "get" },
    config
  );
