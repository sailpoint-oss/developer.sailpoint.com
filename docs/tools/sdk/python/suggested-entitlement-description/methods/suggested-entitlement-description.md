# Suggested_Entitlement_Description

# sailpoint.suggested_entitlement_description.SuggestedEntitlementDescriptionApi
  Use this API to implement Suggested Entitlement Description (SED) functionality. 
SED functionality leverages the power of LLM to generate suggested entitlement descriptions. 
Refer to [GenAI Entitlement Descriptions](https://documentation.sailpoint.com/saas/help/access/entitlements.html#genai-entitlement-descriptions) to learn more about SED in Identity Security Cloud (ISC). 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-bulk-entitlement-recommendations-v1**](#approve-bulk-entitlement-recommendations-v1) | **POST** `/entitlement-recommendations/v1/bulk-approve` | Bulk approve entitlement recommendations
[**create-auto-write-settings-v1**](#create-auto-write-settings-v1) | **POST** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Create auto-write settings for SED
[**get-auto-write-settings-v1**](#get-auto-write-settings-v1) | **GET** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Get auto-write settings for SED
[**get-sed-batch-stats-v1**](#get-sed-batch-stats-v1) | **GET** `/suggested-entitlement-description-batches/v1/{batchId}/stats` | Submit sed batch stats request
[**get-sed-batches-v1**](#get-sed-batches-v1) | **GET** `/suggested-entitlement-description-batches/v1` | List Sed Batch Record
[**list-pending-entitlement-recommendation-approvals-v1**](#list-pending-entitlement-recommendation-approvals-v1) | **GET** `/entitlement-recommendations/v1/pending-approvals` | List pending entitlement recommendation approvals
[**list-privileged-entitlement-recommendations-v1**](#list-privileged-entitlement-recommendations-v1) | **GET** `/privileged-recommendations/v1` | List privileged entitlement recommendations
[**list-seds-v1**](#list-seds-v1) | **GET** `/suggested-entitlement-descriptions/v1` | List suggested entitlement descriptions
[**patch-entitlement-recommendation-v1**](#patch-entitlement-recommendation-v1) | **PATCH** `/entitlement-recommendations/v1/{id}` | Update an entitlement recommendation
[**patch-sed-v1**](#patch-sed-v1) | **PATCH** `/suggested-entitlement-descriptions/v1` | Patch suggested entitlement description
[**submit-entitlement-recommendations-assignment-v1**](#submit-entitlement-recommendations-assignment-v1) | **POST** `/entitlement-recommendations/v1/assign` | Assign entitlement recommendations for review
[**submit-sed-approval-v1**](#submit-sed-approval-v1) | **POST** `/suggested-entitlement-description-approvals/v1` | Submit bulk approval request
[**submit-sed-assignment-v1**](#submit-sed-assignment-v1) | **POST** `/suggested-entitlement-description-assignments/v1` | Submit sed assignment request
[**submit-sed-batch-request-v1**](#submit-sed-batch-request-v1) | **POST** `/suggested-entitlement-description-batches/v1` | Submit sed batch request
[**update-auto-write-settings-v1**](#update-auto-write-settings-v1) | **PATCH** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Update auto-write settings for SED


## approve-bulk-entitlement-recommendations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Bulk approve entitlement recommendations
Approve multiple entitlement recommendations in a single request. Each item in the request must include the recommendation ID and, depending on the record type, either an approved description (SED items) or an approved privilege level (privilege items). Returns a per-item result indicating success or failure.

[API Spec](https://developer.sailpoint.com/docs/api/approve-bulk-entitlement-recommendations-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulk_approve_entitlement_recommendation_request | [**BulkApproveEntitlementRecommendationRequest**](../models/bulk-approve-entitlement-recommendation-request) | True  | The list of recommendation items to approve.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[BulkApproveEntitlementRecommendationResult]**](../models/bulk-approve-entitlement-recommendation-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Per-item approval results. | List[BulkApproveEntitlementRecommendationResult] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.bulk_approve_entitlement_recommendation_request import BulkApproveEntitlementRecommendationRequest
from sailpoint.suggested_entitlement_description.models.bulk_approve_entitlement_recommendation_result import BulkApproveEntitlementRecommendationResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    bulk_approve_entitlement_recommendation_request = '''{
          "items" : [ {
            "id" : "79db50d4-723c-4aa0-a824-83c2205d82d1",
            "recordType" : "SED",
            "description" : "Provides access and permissions related to the Delinea Secret Server Cloud system."
          }, {
            "id" : "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
            "recordType" : "privilege",
            "privilegeLevel" : "high"
          } ]
        }''' # BulkApproveEntitlementRecommendationRequest | The list of recommendation items to approve.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Bulk approve entitlement recommendations
        new_bulk_approve_entitlement_recommendation_request = BulkApproveEntitlementRecommendationRequest.from_json(bulk_approve_entitlement_recommendation_request)
        results = SuggestedEntitlementDescriptionApi(api_client).approve_bulk_entitlement_recommendations_v1(bulk_approve_entitlement_recommendation_request=new_bulk_approve_entitlement_recommendation_request)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).approve_bulk_entitlement_recommendations_v1(new_bulk_approve_entitlement_recommendation_request, x_sail_point_experimental)
        print("The response of SuggestedEntitlementDescriptionApi->approve_bulk_entitlement_recommendations_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->approve_bulk_entitlement_recommendations_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-auto-write-settings-v1
Create auto-write settings for SED
Create the initial auto-write settings for a tenant. Returns 409 Conflict if settings already exist. Use PATCH to update existing settings.

[API Spec](https://developer.sailpoint.com/docs/api/create-auto-write-settings-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | auto_write_setting | [**AutoWriteSetting**](../models/auto-write-setting) | True  | Auto-write settings to create

### Return type
[**AutoWriteSettingResponse**](../models/auto-write-setting-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Auto-write settings created successfully | AutoWriteSettingResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | CreateAutoWriteSettingsV1409Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.auto_write_setting import AutoWriteSetting
from sailpoint.suggested_entitlement_description.models.auto_write_setting_response import AutoWriteSettingResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    auto_write_setting = '''{
          "excludedSourceIds" : [ "2c91808a7813090a017814552e526350" ],
          "includedSourceIds" : [ "2c91808a7813090a017814552e526349", "2c91808a7813090a017814552e52634a" ],
          "enabled" : true
        }''' # AutoWriteSetting | Auto-write settings to create

    try:
        # Create auto-write settings for SED
        new_auto_write_setting = AutoWriteSetting.from_json(auto_write_setting)
        results = SuggestedEntitlementDescriptionApi(api_client).create_auto_write_settings_v1(auto_write_setting=new_auto_write_setting)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).create_auto_write_settings_v1(new_auto_write_setting)
        print("The response of SuggestedEntitlementDescriptionApi->create_auto_write_settings_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->create_auto_write_settings_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-auto-write-settings-v1
Get auto-write settings for SED
Get the current auto-write configuration for the tenant, including the enabled state and source include/exclude lists.

[API Spec](https://developer.sailpoint.com/docs/api/get-auto-write-settings-v-1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**AutoWriteSettingResponse**](../models/auto-write-setting-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Current auto-write settings | AutoWriteSettingResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.auto_write_setting_response import AutoWriteSettingResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get auto-write settings for SED
        
        results = SuggestedEntitlementDescriptionApi(api_client).get_auto_write_settings_v1()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).get_auto_write_settings_v1()
        print("The response of SuggestedEntitlementDescriptionApi->get_auto_write_settings_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->get_auto_write_settings_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sed-batch-stats-v1
Submit sed batch stats request
'Submit Sed Batch Stats Request.

 Submits batchId in the path param `(e.g. {batchId}/stats)`. API responses with stats
 of the batchId.'


[API Spec](https://developer.sailpoint.com/docs/api/get-sed-batch-stats-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | batch_id | **str** | True  | Batch Id

### Return type
[**SedBatchStats**](../models/sed-batch-stats)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Stats of Sed batch. | SedBatchStats |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sed_batch_stats import SedBatchStats
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    batch_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | Batch Id # str | Batch Id

    try:
        # Submit sed batch stats request
        
        results = SuggestedEntitlementDescriptionApi(api_client).get_sed_batch_stats_v1(batch_id=batch_id)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).get_sed_batch_stats_v1(batch_id)
        print("The response of SuggestedEntitlementDescriptionApi->get_sed_batch_stats_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->get_sed_batch_stats_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sed-batches-v1
List Sed Batch Record
List Sed Batches.
API responses with Sed Batch Records

[API Spec](https://developer.sailpoint.com/docs/api/get-sed-batches-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0.
  Query | limit | **int** |   (optional) (default to 250) | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | count | **bool** |   (optional) (default to False) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used.
  Query | count_only | **bool** |   (optional) (default to False) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array.
  Query | status | **str** |   (optional) | Batch Status

### Return type
[**List[SedBatchRecord]**](../models/sed-batch-record)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Sed Batch Records | List[SedBatchRecord] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sed_batch_record import SedBatchRecord
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit = 250 # int | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
    count = False # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional) (default to False) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional) (default to False)
    count_only = False # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to False) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to False)
    status = 'completed, failed, submitted, materialized, failed' # str | Batch Status (optional) # str | Batch Status (optional)

    try:
        # List Sed Batch Record
        
        results = SuggestedEntitlementDescriptionApi(api_client).get_sed_batches_v1()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).get_sed_batches_v1(offset, limit, count, count_only, status)
        print("The response of SuggestedEntitlementDescriptionApi->get_sed_batches_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->get_sed_batches_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-pending-entitlement-recommendation-approvals-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List pending entitlement recommendation approvals
Returns a list of entitlement recommendations (SED and/or privilege) that are currently awaiting review or approval. Each record includes the recommendation type, entitlement details, and any AI-generated suggestions.

[API Spec](https://developer.sailpoint.com/docs/api/list-pending-entitlement-recommendation-approvals-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[EntitlementRecommendationRecord]**](../models/entitlement-recommendation-record)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of pending entitlement recommendation records. | List[EntitlementRecommendationRecord] |  * X-Total-Count - The total number of recommendation groups available.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.entitlement_recommendation_record import EntitlementRecommendationRecord
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List pending entitlement recommendation approvals
        
        results = SuggestedEntitlementDescriptionApi(api_client).list_pending_entitlement_recommendation_approvals_v1()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).list_pending_entitlement_recommendation_approvals_v1(offset, limit, x_sail_point_experimental)
        print("The response of SuggestedEntitlementDescriptionApi->list_pending_entitlement_recommendation_approvals_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->list_pending_entitlement_recommendation_approvals_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-privileged-entitlement-recommendations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List privileged entitlement recommendations
Returns a list of privileged entitlement recommendation groups. Each group aggregates individual entitlement instances that share the same entitlement name and connector type, along with a recommendation score and instance count.

[API Spec](https://developer.sailpoint.com/docs/api/list-privileged-entitlement-recommendations-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[PrivilegedRecommendationGroup]**](../models/privileged-recommendation-group)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of privileged recommendation groups. | List[PrivilegedRecommendationGroup] |  * X-Total-Count - The total number of recommendation groups available.  * X-Total-Entitlements - The total number of individual entitlement instances across all groups.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.privileged_recommendation_group import PrivilegedRecommendationGroup
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List privileged entitlement recommendations
        
        results = SuggestedEntitlementDescriptionApi(api_client).list_privileged_entitlement_recommendations_v1()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).list_privileged_entitlement_recommendations_v1(offset, limit, x_sail_point_experimental)
        print("The response of SuggestedEntitlementDescriptionApi->list_privileged_entitlement_recommendations_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->list_privileged_entitlement_recommendations_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-seds-v1
List suggested entitlement descriptions
List of Suggested Entitlement Descriptions (SED)

SED field descriptions:

**batchId**: the ID of the batch of entitlements that are submitted for description generation

**displayName**: the display name of the entitlement that we are generating a description for

**sourceName**: the name of the source associated with the entitlement that we are generating the description for

**sourceId**: the ID of the source associated with the entitlement that we are generating the description for

**status**: the status of the suggested entitlement description, valid status options: "requested", "suggested", "not_suggested", "failed", "assigned", "approved", "denied"

**fullText**: will filter suggested entitlement description records by text found in any of the following fields: entitlement name, entitlement display name, suggested description, source name

[API Spec](https://developer.sailpoint.com/docs/api/list-seds-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status**
  Query | count_only | **bool** |   (optional) (default to False) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array.
  Query | requested_by_anyone | **bool** |   (optional) (default to False) | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested
  Query | show_pending_status_only | **bool** |   (optional) (default to False) | Will limit records to items that are in \"suggested\" or \"approved\" status

### Return type
[**List[Sed]**](../models/sed)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Suggested Entitlement Details | List[Sed] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sed import Sed
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'displayName co \"Read and Write\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional)
    sorters = 'sorters=displayName' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional)
    count_only = False # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to False) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to False)
    requested_by_anyone = False # bool | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional) (default to False) # bool | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional) (default to False)
    show_pending_status_only = False # bool | Will limit records to items that are in \"suggested\" or \"approved\" status (optional) (default to False) # bool | Will limit records to items that are in \"suggested\" or \"approved\" status (optional) (default to False)

    try:
        # List suggested entitlement descriptions
        
        results = SuggestedEntitlementDescriptionApi(api_client).list_seds_v1()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).list_seds_v1(limit, offset, count, filters, sorters, count_only, requested_by_anyone, show_pending_status_only)
        print("The response of SuggestedEntitlementDescriptionApi->list_seds_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->list_seds_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-entitlement-recommendation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update an entitlement recommendation
Partially update a single entitlement recommendation record by its ID. Use this endpoint to update the status, description, or privilege level of a specific SED or privilege recommendation.

[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-recommendation-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The unique identifier of the entitlement recommendation to update.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The patch operations to apply to the entitlement recommendation record.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**EntitlementRecommendationRecord**](../models/entitlement-recommendation-record)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated entitlement recommendation record. | EntitlementRecommendationRecord |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.entitlement_recommendation_record import EntitlementRecommendationRecord
from sailpoint.suggested_entitlement_description.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '79db50d4-723c-4aa0-a824-83c2205d82d1' # str | The unique identifier of the entitlement recommendation to update. # str | The unique identifier of the entitlement recommendation to update.
    json_patch_operation = '''[sailpoint.suggested_entitlement_description.JsonPatchOperation()]''' # List[JsonPatchOperation] | The patch operations to apply to the entitlement recommendation record.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update an entitlement recommendation
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = SuggestedEntitlementDescriptionApi(api_client).patch_entitlement_recommendation_v1(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).patch_entitlement_recommendation_v1(id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of SuggestedEntitlementDescriptionApi->patch_entitlement_recommendation_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->patch_entitlement_recommendation_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-sed-v1
Patch suggested entitlement description
Patch Suggested Entitlement Description

[API Spec](https://developer.sailpoint.com/docs/api/patch-sed-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | id is sed id
 Body  | sed_patch | [**[]SedPatch**](../models/sed-patch) | True  | Sed Patch Request

### Return type
[**Sed**](../models/sed)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | detail of patched sed | Sed |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sed import Sed
from sailpoint.suggested_entitlement_description.models.sed_patch import SedPatch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ebab396f-0af1-4050-89b7-dafc63ec70e7' # str | id is sed id # str | id is sed id
    sed_patch = '''[sailpoint.suggested_entitlement_description.SedPatch()]''' # List[SedPatch] | Sed Patch Request

    try:
        # Patch suggested entitlement description
        new_sed_patch = SedPatch.from_json(sed_patch)
        results = SuggestedEntitlementDescriptionApi(api_client).patch_sed_v1(id=id, sed_patch=new_sed_patch)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).patch_sed_v1(id, new_sed_patch)
        print("The response of SuggestedEntitlementDescriptionApi->patch_sed_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->patch_sed_v1: %s\n" % e)
```



[[Back to top]](#) 

## submit-entitlement-recommendations-assignment-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Assign entitlement recommendations for review
Assign a set of entitlement recommendation records to a reviewer. The assignee can be a specific identity, a governance group, or a role-based assignee such as source owner or entitlement owner. Returns a batch ID that can be used to track the assignment.

[API Spec](https://developer.sailpoint.com/docs/api/submit-entitlement-recommendations-assignment-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlement_recommendation_assign_request | [**EntitlementRecommendationAssignRequest**](../models/entitlement-recommendation-assign-request) | True  | The recommendation IDs and the target assignee.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**EntitlementRecommendationAssignResult**](../models/entitlement-recommendation-assign-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Assignment queued successfully. Returns the batch ID for tracking. | EntitlementRecommendationAssignResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.entitlement_recommendation_assign_request import EntitlementRecommendationAssignRequest
from sailpoint.suggested_entitlement_description.models.entitlement_recommendation_assign_result import EntitlementRecommendationAssignResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    entitlement_recommendation_assign_request = '''{
          "assignee" : {
            "type" : "IDENTITY",
            "value" : "2c91808a7f3b2e8a017f3c3e5f6d0099"
          },
          "items" : [ "79db50d4-723c-4aa0-a824-83c2205d82d1", "a1b2c3d4-e5f6-7890-abcd-ef1234567890" ]
        }''' # EntitlementRecommendationAssignRequest | The recommendation IDs and the target assignee.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Assign entitlement recommendations for review
        new_entitlement_recommendation_assign_request = EntitlementRecommendationAssignRequest.from_json(entitlement_recommendation_assign_request)
        results = SuggestedEntitlementDescriptionApi(api_client).submit_entitlement_recommendations_assignment_v1(entitlement_recommendation_assign_request=new_entitlement_recommendation_assign_request)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_entitlement_recommendations_assignment_v1(new_entitlement_recommendation_assign_request, x_sail_point_experimental)
        print("The response of SuggestedEntitlementDescriptionApi->submit_entitlement_recommendations_assignment_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_entitlement_recommendations_assignment_v1: %s\n" % e)
```



[[Back to top]](#) 

## submit-sed-approval-v1
Submit bulk approval request
Submit Bulk Approval Request for SED.
Request body takes list of SED Ids. API responses with list of SED Approval Status

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-approval-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sed_approval | [**[]SedApproval**](../models/sed-approval) | True  | Sed Approval

### Return type
[**List[SedApprovalStatus]**](../models/sed-approval-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of SED Approval Status | List[SedApprovalStatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sed_approval import SedApproval
from sailpoint.suggested_entitlement_description.models.sed_approval_status import SedApprovalStatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sed_approval = '''[sailpoint.suggested_entitlement_description.SedApproval()]''' # List[SedApproval] | Sed Approval

    try:
        # Submit bulk approval request
        new_sed_approval = SedApproval.from_json(sed_approval)
        results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_approval_v1(sed_approval=new_sed_approval)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_approval_v1(new_sed_approval)
        print("The response of SuggestedEntitlementDescriptionApi->submit_sed_approval_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_sed_approval_v1: %s\n" % e)
```



[[Back to top]](#) 

## submit-sed-assignment-v1
Submit sed assignment request
Submit Assignment Request.
Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-assignment-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sed_assignment | [**SedAssignment**](../models/sed-assignment) | True  | Sed Assignment Request

### Return type
[**SedAssignmentResponse**](../models/sed-assignment-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Sed Assignment Response | SedAssignmentResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sed_assignment import SedAssignment
from sailpoint.suggested_entitlement_description.models.sed_assignment_response import SedAssignmentResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sed_assignment = '''{
          "assignee" : {
            "type" : "SOURCE_OWNER",
            "value" : "016629d1-1d25-463f-97f3-c6686846650"
          },
          "items" : [ "016629d1-1d25-463f-97f3-0c6686846650", "016629d1-1d25-463f-97f3-0c6686846650" ]
        }''' # SedAssignment | Sed Assignment Request

    try:
        # Submit sed assignment request
        new_sed_assignment = SedAssignment.from_json(sed_assignment)
        results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_assignment_v1(sed_assignment=new_sed_assignment)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_assignment_v1(new_sed_assignment)
        print("The response of SuggestedEntitlementDescriptionApi->submit_sed_assignment_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_sed_assignment_v1: %s\n" % e)
```



[[Back to top]](#) 

## submit-sed-batch-request-v1
Submit sed batch request
Submit Sed Batch Request.
Request body has one of the following: - a list of entitlement Ids - a list of SED Ids that user wants to have description generated by LLM.  API responses with batchId that groups Ids together

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-batch-request-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sed_batch_request | [**SedBatchRequest**](../models/sed-batch-request) |   (optional) | Sed Batch Request

### Return type
[**SedBatchResponse**](../models/sed-batch-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Sed Batch Response | SedBatchResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sed_batch_request import SedBatchRequest
from sailpoint.suggested_entitlement_description.models.sed_batch_response import SedBatchResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sed_batch_request = '''{
          "entitlements" : [ "016629d1-1d25-463f-97f3-c6686846650", "016629d1-1d25-463f-97f3-c6686846650" ],
          "seds" : [ "016629d1-1d25-463f-97f3-c6686846650", "016629d1-1d25-463f-97f3-c6686846650" ],
          "searchCriteria" : {
            "key" : {
              "indices" : [ "entitlements" ],
              "query" : {
                "query" : "status:active"
              },
              "textQuery" : {
                "terms" : [ "admin", "user" ],
                "matchAny" : true,
                "fields" : [ "role", "name" ]
              },
              "searchAfter" : [ "12345", "67890" ],
              "filters" : {
                "status" : {
                  "type" : "TERMS",
                  "terms" : [ "active", "inactive" ]
                }
              },
              "sort" : [ "name:asc", "createdAt:desc" ],
              "queryType" : "TEXT",
              "includeNested" : true
            }
          }
        }''' # SedBatchRequest | Sed Batch Request (optional)

    try:
        # Submit sed batch request
        
        results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_batch_request_v1()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_batch_request_v1(new_sed_batch_request)
        print("The response of SuggestedEntitlementDescriptionApi->submit_sed_batch_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_sed_batch_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-auto-write-settings-v1
Update auto-write settings for SED
Partially update the auto-write settings for a tenant using JSON Patch operations. Only the "replace" operation is supported. Returns 404 if no settings exist yet - use POST to create them first.

[API Spec](https://developer.sailpoint.com/docs/api/update-auto-write-settings-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | auto_write_setting_patch | [**[]AutoWriteSettingPatch**](../models/auto-write-setting-patch) | True  | Patch operations for auto-write settings

### Return type
[**AutoWriteSettingResponse**](../models/auto-write-setting-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated auto-write settings | AutoWriteSettingResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.auto_write_setting_patch import AutoWriteSettingPatch
from sailpoint.suggested_entitlement_description.models.auto_write_setting_response import AutoWriteSettingResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    auto_write_setting_patch = '''[sailpoint.suggested_entitlement_description.AutoWriteSettingPatch()]''' # List[AutoWriteSettingPatch] | Patch operations for auto-write settings

    try:
        # Update auto-write settings for SED
        new_auto_write_setting_patch = AutoWriteSettingPatch.from_json(auto_write_setting_patch)
        results = SuggestedEntitlementDescriptionApi(api_client).update_auto_write_settings_v1(auto_write_setting_patch=new_auto_write_setting_patch)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).update_auto_write_settings_v1(new_auto_write_setting_patch)
        print("The response of SuggestedEntitlementDescriptionApi->update_auto_write_settings_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->update_auto_write_settings_v1: %s\n" % e)
```



[[Back to top]](#) 



