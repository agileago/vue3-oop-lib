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

export interface View {
  contentType: string;
}
