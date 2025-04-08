/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { appRequester as requester, type AxiosRequestConfig } from '../http'
import type { GetPetFindByStatusStatus,Pet,ApiResponse,Order,User } from './definition'

type ApiAppPutPetOption = Pet;

/** @description response type for apiAppPutPet */
interface ApiAppPutPetResponse {
    /**
     * @description
     *   Successful operation
     */
    200: Pet;
    /**
     * @description
     *   Invalid ID supplied
     */
    400: any;
    /**
     * @description
     *   Pet not found
     */
    404: any;
    /**
     * @description
     *   Validation exception
     */
    422: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppPutPetResponseSuccess = ApiAppPutPetResponse[200]
/**
 * @description
 *   Update an existing pet by Id.
 *   Update an existing pet.
 * @tags pet
 */
export const apiAppPutPet = (option?: ApiAppPutPetOption, config?: AxiosRequestConfig) => requester<ApiAppPutPetResponseSuccess>('/pet', { method: 'put', body: option}, config);

type ApiAppPostPetOption = Pet;

/** @description response type for apiAppPostPet */
interface ApiAppPostPetResponse {
    /**
     * @description
     *   Successful operation
     */
    200: Pet;
    /**
     * @description
     *   Invalid input
     */
    400: any;
    /**
     * @description
     *   Validation exception
     */
    422: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppPostPetResponseSuccess = ApiAppPostPetResponse[200]
/**
 * @description
 *   Add a new pet to the store.
 *   Add a new pet to the store.
 * @tags pet
 */
export const apiAppPostPet = (option?: ApiAppPostPetOption, config?: AxiosRequestConfig) => requester<ApiAppPostPetResponseSuccess>('/pet', { method: 'post', body: option}, config);

type ApiAppGetPetFindByStatusOption = {
    /**
    @description
      Status values that need to be considered for filter */
    'status': GetPetFindByStatusStatus
    };

/** @description response type for apiAppGetPetFindByStatus */
interface ApiAppGetPetFindByStatusResponse {
    /**
     * @description
     *   successful operation
     */
    200: Array<Pet>;
    /**
     * @description
     *   Invalid status value
     */
    400: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppGetPetFindByStatusResponseSuccess = ApiAppGetPetFindByStatusResponse[200]
/**
 * @description
 *   Multiple status values can be provided with comma separated strings.
 *   Finds Pets by status.
 * @tags pet
 */
export const apiAppGetPetFindByStatus = (option?: ApiAppGetPetFindByStatusOption, config?: AxiosRequestConfig) => requester<ApiAppGetPetFindByStatusResponseSuccess>('/pet/findByStatus', { method: 'get', query: option}, config);

type ApiAppGetPetFindByTagsOption = {
    /**
    @description
      Tags to filter by */
    'tags': Array<string>
    };

/** @description response type for apiAppGetPetFindByTags */
interface ApiAppGetPetFindByTagsResponse {
    /**
     * @description
     *   successful operation
     */
    200: Array<Pet>;
    /**
     * @description
     *   Invalid tag value
     */
    400: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppGetPetFindByTagsResponseSuccess = ApiAppGetPetFindByTagsResponse[200]
/**
 * @description
 *   Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 *   Finds Pets by tags.
 * @tags pet
 */
export const apiAppGetPetFindByTags = (option?: ApiAppGetPetFindByTagsOption, config?: AxiosRequestConfig) => requester<ApiAppGetPetFindByTagsResponseSuccess>('/pet/findByTags', { method: 'get', query: option}, config);

type ApiAppGetPetPetIdOption = {
    /**
    @description
      ID of pet to return */
    'petId': number
    };

/** @description response type for apiAppGetPetPetId */
interface ApiAppGetPetPetIdResponse {
    /**
     * @description
     *   successful operation
     */
    200: Pet;
    /**
     * @description
     *   Invalid ID supplied
     */
    400: any;
    /**
     * @description
     *   Pet not found
     */
    404: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppGetPetPetIdResponseSuccess = ApiAppGetPetPetIdResponse[200]
/**
 * @description
 *   Returns a single pet.
 *   Find pet by ID.
 * @tags pet
 */
export const apiAppGetPetPetId = (option?: ApiAppGetPetPetIdOption, config?: AxiosRequestConfig) => requester<ApiAppGetPetPetIdResponseSuccess>('/pet/:petId', { method: 'get', path: option}, config);

/** @description request parameter type for apiAppPostPetPetId */
interface ApiAppPostPetPetIdOption {
    /**
     * @description
     *   ID of pet that needs to be updated
     */
    path: {
        /**
        @description
          ID of pet that needs to be updated */
        'petId': number
        };
}

/** @description request parameter type for apiAppPostPetPetId */
interface ApiAppPostPetPetIdOption {
    /**
     * @description
     *   Name of pet that needs to be updated
     */
    query?: {
        /**
        @description
          Name of pet that needs to be updated */
        'name': string
        /**
        @description
          Status of pet that needs to be updated */
        'status': string
        };
}

/** @description response type for apiAppPostPetPetId */
interface ApiAppPostPetPetIdResponse {
    /**
     * @description
     *   successful operation
     */
    200: Pet;
    /**
     * @description
     *   Invalid input
     */
    400: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppPostPetPetIdResponseSuccess = ApiAppPostPetPetIdResponse[200]
/**
 * @description
 *   Updates a pet resource based on the form data.
 *   Updates a pet in the store with form data.
 * @tags pet
 */
export const apiAppPostPetPetId = (option: ApiAppPostPetPetIdOption, config?: AxiosRequestConfig) => requester<ApiAppPostPetPetIdResponseSuccess>('/pet/:petId', { method: 'post', ...option}, config);

/** @description request parameter type for apiAppDeletePetPetId */
interface ApiAppDeletePetPetIdOption {
    /** @description */
    header?: {
        /**
        @description */
        'api_key': string
        };
}

/** @description request parameter type for apiAppDeletePetPetId */
interface ApiAppDeletePetPetIdOption {
    /**
     * @description
     *   Pet id to delete
     */
    path: {
        /**
        @description
          Pet id to delete */
        'petId': number
        };
}

/** @description response type for apiAppDeletePetPetId */
interface ApiAppDeletePetPetIdResponse {
    /**
     * @description
     *   Pet deleted
     */
    200: any;
    /**
     * @description
     *   Invalid pet value
     */
    400: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppDeletePetPetIdResponseSuccess = ApiAppDeletePetPetIdResponse[200]
/**
 * @description
 *   Delete a pet.
 *   Deletes a pet.
 * @tags pet
 */
export const apiAppDeletePetPetId = (option: ApiAppDeletePetPetIdOption, config?: AxiosRequestConfig) => requester<ApiAppDeletePetPetIdResponseSuccess>('/pet/:petId', { method: 'delete', ...option}, config);

/** @description request parameter type for apiAppPostPetPetIdUploadImage */
interface ApiAppPostPetPetIdUploadImageOption {
    /**
     * @description
     *   ID of pet to update
     */
    path: {
        /**
        @description
          ID of pet to update */
        'petId': number
        };
}

/** @description request parameter type for apiAppPostPetPetIdUploadImage */
interface ApiAppPostPetPetIdUploadImageOption {
    /**
     * @description
     *   Additional Metadata
     */
    query?: {
        /**
        @description
          Additional Metadata */
        'additionalMetadata': string
        };
}

/** @description request parameter type for apiAppPostPetPetIdUploadImage */
interface ApiAppPostPetPetIdUploadImageOption {
    body?: File;
}

/** @description response type for apiAppPostPetPetIdUploadImage */
interface ApiAppPostPetPetIdUploadImageResponse {
    /**
     * @description
     *   successful operation
     */
    200: ApiResponse;
    /**
     * @description
     *   No file uploaded
     */
    400: any;
    /**
     * @description
     *   Pet not found
     */
    404: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppPostPetPetIdUploadImageResponseSuccess = ApiAppPostPetPetIdUploadImageResponse[200]
/**
 * @description
 *   Upload image of the pet.
 *   Uploads an image.
 * @tags pet
 */
export const apiAppPostPetPetIdUploadImage = (option: ApiAppPostPetPetIdUploadImageOption, config?: AxiosRequestConfig) => requester<ApiAppPostPetPetIdUploadImageResponseSuccess>('/pet/:petId/uploadImage', { method: 'post', ...option}, config);

/** @description response type for apiAppGetStoreInventory */
interface ApiAppGetStoreInventoryResponse {
    /**
     * @description
     *   successful operation
     */
    200: {
        [propertyName: string]: number
        };
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppGetStoreInventoryResponseSuccess = ApiAppGetStoreInventoryResponse[200]
/**
 * @description
 *   Returns a map of status codes to quantities.
 *   Returns pet inventories by status.
 * @tags store
 */
export const apiAppGetStoreInventory = (config?: AxiosRequestConfig) => requester<ApiAppGetStoreInventoryResponseSuccess>('/store/inventory', { method: 'get'}, config);

type ApiAppPostStoreOrderOption = Order;

/** @description response type for apiAppPostStoreOrder */
interface ApiAppPostStoreOrderResponse {
    /**
     * @description
     *   successful operation
     */
    200: Order;
    /**
     * @description
     *   Invalid input
     */
    400: any;
    /**
     * @description
     *   Validation exception
     */
    422: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppPostStoreOrderResponseSuccess = ApiAppPostStoreOrderResponse[200]
/**
 * @description
 *   Place a new order in the store.
 *   Place an order for a pet.
 * @tags store
 */
export const apiAppPostStoreOrder = (option?: ApiAppPostStoreOrderOption, config?: AxiosRequestConfig) => requester<ApiAppPostStoreOrderResponseSuccess>('/store/order', { method: 'post', body: option}, config);

type ApiAppGetStoreOrderOrderIdOption = {
    /**
    @description
      ID of order that needs to be fetched */
    'orderId': number
    };

/** @description response type for apiAppGetStoreOrderOrderId */
interface ApiAppGetStoreOrderOrderIdResponse {
    /**
     * @description
     *   successful operation
     */
    200: Order;
    /**
     * @description
     *   Invalid ID supplied
     */
    400: any;
    /**
     * @description
     *   Order not found
     */
    404: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppGetStoreOrderOrderIdResponseSuccess = ApiAppGetStoreOrderOrderIdResponse[200]
/**
 * @description
 *   For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 *   Find purchase order by ID.
 * @tags store
 */
export const apiAppGetStoreOrderOrderId = (option?: ApiAppGetStoreOrderOrderIdOption, config?: AxiosRequestConfig) => requester<ApiAppGetStoreOrderOrderIdResponseSuccess>('/store/order/:orderId', { method: 'get', path: option}, config);

type ApiAppDeleteStoreOrderOrderIdOption = {
    /**
    @description
      ID of the order that needs to be deleted */
    'orderId': number
    };

/** @description response type for apiAppDeleteStoreOrderOrderId */
interface ApiAppDeleteStoreOrderOrderIdResponse {
    /**
     * @description
     *   order deleted
     */
    200: any;
    /**
     * @description
     *   Invalid ID supplied
     */
    400: any;
    /**
     * @description
     *   Order not found
     */
    404: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppDeleteStoreOrderOrderIdResponseSuccess = ApiAppDeleteStoreOrderOrderIdResponse[200]
/**
 * @description
 *   For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.
 *   Delete purchase order by identifier.
 * @tags store
 */
export const apiAppDeleteStoreOrderOrderId = (option?: ApiAppDeleteStoreOrderOrderIdOption, config?: AxiosRequestConfig) => requester<ApiAppDeleteStoreOrderOrderIdResponseSuccess>('/store/order/:orderId', { method: 'delete', path: option}, config);

type ApiAppPostUserOption = User;

/** @description response type for apiAppPostUser */
interface ApiAppPostUserResponse {
    /**
     * @description
     *   successful operation
     */
    200: User;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppPostUserResponseSuccess = ApiAppPostUserResponse[200]
/**
 * @description
 *   This can only be done by the logged in user.
 *   Create user.
 * @tags user
 */
export const apiAppPostUser = (option?: ApiAppPostUserOption, config?: AxiosRequestConfig) => requester<ApiAppPostUserResponseSuccess>('/user', { method: 'post', body: option}, config);

type ApiAppPostUserCreateWithListOption = Array<User>;

/** @description response type for apiAppPostUserCreateWithList */
interface ApiAppPostUserCreateWithListResponse {
    /**
     * @description
     *   Successful operation
     */
    200: User;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppPostUserCreateWithListResponseSuccess = ApiAppPostUserCreateWithListResponse[200]
/**
 * @description
 *   Creates list of users with given input array.
 *   Creates list of users with given input array.
 * @tags user
 */
export const apiAppPostUserCreateWithList = (option?: ApiAppPostUserCreateWithListOption, config?: AxiosRequestConfig) => requester<ApiAppPostUserCreateWithListResponseSuccess>('/user/createWithList', { method: 'post', body: option}, config);

type ApiAppGetUserLoginOption = {
    /**
    @description
      The user name for login */
    'username': string
    /**
    @description
      The password for login in clear text */
    'password': string
    };

/** @description response type for apiAppGetUserLogin */
interface ApiAppGetUserLoginResponse {
    /**
     * @description
     *   successful operation
     */
    200: string;
    /**
     * @description
     *   Invalid username/password supplied
     */
    400: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppGetUserLoginResponseSuccess = ApiAppGetUserLoginResponse[200]
/**
 * @description
 *   Log into the system.
 *   Logs user into the system.
 * @tags user
 */
export const apiAppGetUserLogin = (option?: ApiAppGetUserLoginOption, config?: AxiosRequestConfig) => requester<ApiAppGetUserLoginResponseSuccess>('/user/login', { method: 'get', query: option}, config);

/** @description response type for apiAppGetUserLogout */
interface ApiAppGetUserLogoutResponse {
    /**
     * @description
     *   successful operation
     */
    200: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppGetUserLogoutResponseSuccess = ApiAppGetUserLogoutResponse[200]
/**
 * @description
 *   Log user out of the system.
 *   Logs out current logged in user session.
 * @tags user
 */
export const apiAppGetUserLogout = (config?: AxiosRequestConfig) => requester<ApiAppGetUserLogoutResponseSuccess>('/user/logout', { method: 'get'}, config);

type ApiAppGetUserUsernameOption = {
    /**
    @description
      The name that needs to be fetched. Use user1 for testing */
    'username': string
    };

/** @description response type for apiAppGetUserUsername */
interface ApiAppGetUserUsernameResponse {
    /**
     * @description
     *   successful operation
     */
    200: User;
    /**
     * @description
     *   Invalid username supplied
     */
    400: any;
    /**
     * @description
     *   User not found
     */
    404: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppGetUserUsernameResponseSuccess = ApiAppGetUserUsernameResponse[200]
/**
 * @description
 *   Get user detail based on username.
 *   Get user by user name.
 * @tags user
 */
export const apiAppGetUserUsername = (option?: ApiAppGetUserUsernameOption, config?: AxiosRequestConfig) => requester<ApiAppGetUserUsernameResponseSuccess>('/user/:username', { method: 'get', path: option}, config);

/** @description request parameter type for apiAppPutUserUsername */
interface ApiAppPutUserUsernameOption {
    /**
     * @description
     *   name that need to be deleted
     */
    path: {
        /**
        @description
          name that need to be deleted */
        'username': string
        };
}

/** @description request parameter type for apiAppPutUserUsername */
interface ApiAppPutUserUsernameOption {
    body?: User;
}

/** @description response type for apiAppPutUserUsername */
interface ApiAppPutUserUsernameResponse {
    /**
     * @description
     *   successful operation
     */
    200: any;
    /**
     * @description
     *   bad request
     */
    400: any;
    /**
     * @description
     *   user not found
     */
    404: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppPutUserUsernameResponseSuccess = ApiAppPutUserUsernameResponse[200]
/**
 * @description
 *   This can only be done by the logged in user.
 *   Update user resource.
 * @tags user
 */
export const apiAppPutUserUsername = (option: ApiAppPutUserUsernameOption, config?: AxiosRequestConfig) => requester<ApiAppPutUserUsernameResponseSuccess>('/user/:username', { method: 'put', ...option}, config);

type ApiAppDeleteUserUsernameOption = {
    /**
    @description
      The name that needs to be deleted */
    'username': string
    };

/** @description response type for apiAppDeleteUserUsername */
interface ApiAppDeleteUserUsernameResponse {
    /**
     * @description
     *   User deleted
     */
    200: any;
    /**
     * @description
     *   Invalid username supplied
     */
    400: any;
    /**
     * @description
     *   User not found
     */
    404: any;
    /**
     * @description
     *   Unexpected error
     */
    default: any;
}

 type ApiAppDeleteUserUsernameResponseSuccess = ApiAppDeleteUserUsernameResponse[200]
/**
 * @description
 *   This can only be done by the logged in user.
 *   Delete user resource.
 * @tags user
 */
export const apiAppDeleteUserUsername = (option?: ApiAppDeleteUserUsernameOption, config?: AxiosRequestConfig) => requester<ApiAppDeleteUserUsernameResponseSuccess>('/user/:username', { method: 'delete', path: option}, config);
