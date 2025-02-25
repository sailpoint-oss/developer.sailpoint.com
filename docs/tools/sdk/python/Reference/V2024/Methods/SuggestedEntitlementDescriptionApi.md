---
id: v2024-suggested-entitlement-description
title: Suggested_Entitlement_Description
pagination_label: Suggested_Entitlement_Description
sidebar_label: Suggested_Entitlement_Description
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Suggested_Entitlement_Description', 'V2024Suggested_Entitlement_Description'] 
slug: /tools/sdk/python/v2024/methods/suggested-entitlement-description
tags: ['SDK', 'Software Development Kit', 'Suggested_Entitlement_Description', 'V2024Suggested_Entitlement_Description']
---

# sailpoint.v2024.SuggestedEntitlementDescriptionApi
  Use this API to implement Suggested Entitlement Description (SED) functionality. 
SED functionality leverages the power of LLM to generate suggested entitlement descriptions. 
Refer to [GenAI Entitlement Descriptions](https://documentation.sailpoint.com/saas/help/access/entitlements.html#genai-entitlement-descriptions) to learn more about SED in Identity Security Cloud (ISC). 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-sed-batch-stats**](#get-sed-batch-stats) | **GET** `/suggested-entitlement-description-batches/{batchId}/stats` | Submit Sed Batch Stats Request
[**get-sed-batches**](#get-sed-batches) | **GET** `/suggested-entitlement-description-batches` | List Sed Batch Request
[**list-seds**](#list-seds) | **GET** `/suggested-entitlement-descriptions` | List Suggested Entitlement Descriptions
[**patch-sed**](#patch-sed) | **PATCH** `/suggested-entitlement-descriptions` | Patch Suggested Entitlement Description
[**submit-sed-approval**](#submit-sed-approval) | **POST** `/suggested-entitlement-description-approvals` | Submit Bulk Approval Request
[**submit-sed-assignment**](#submit-sed-assignment) | **POST** `/suggested-entitlement-description-assignments` | Submit Sed Assignment Request
[**submit-sed-batch-request**](#submit-sed-batch-request) | **POST** `/suggested-entitlement-description-batches` | Submit Sed Batch Request


## get-sed-batch-stats
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Submit Sed Batch Stats Request
'Submit Sed Batch Stats Request.

 Submits batchId in the path param `(e.g. {batchId}/stats)`. API responses with stats
 of the batchId.'


[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sed-batch-stats)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | batch_id | **str** | True  | Batch Id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SedBatchStats**](../models/sed-batch-stats)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Stats of Sed batch. | SedBatchStats |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sed_batch_stats import SedBatchStats
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    batch_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | Batch Id # str | Batch Id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Submit Sed Batch Stats Request
        
        results =SuggestedEntitlementDescriptionApi(api_client).get_sed_batch_stats(batch_id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).get_sed_batch_stats(batch_id, x_sail_point_experimental)
        print("The response of SuggestedEntitlementDescriptionApi->get_sed_batch_stats:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->get_sed_batch_stats: %s\n" % e)
```



[[Back to top]](#) 

## get-sed-batches
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Sed Batch Request
List Sed Batches.
API responses with Sed Batch Status

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sed-batches)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SedBatchStatus**](../models/sed-batch-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of batch | SedBatchStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sed_batch_status import SedBatchStatus
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # List Sed Batch Request
        
        results =SuggestedEntitlementDescriptionApi(api_client).get_sed_batches(x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).get_sed_batches(x_sail_point_experimental)
        print("The response of SuggestedEntitlementDescriptionApi->get_sed_batches:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->get_sed_batches: %s\n" % e)
```



[[Back to top]](#) 

## list-seds
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Suggested Entitlement Descriptions
List of Suggested Entitlement Descriptions (SED)

SED field descriptions:

**batchId**: the ID of the batch of entitlements that are submitted for description generation

**displayName**: the display name of the entitlement that we are generating a description for

**sourceName**: the name of the source associated with the entitlement that we are generating the description for

**sourceId**: the ID of the source associated with the entitlement that we are generating the description for

**status**: the status of the suggested entitlement description, valid status options: "requested", "suggested", "not_suggested", "failed", "assigned", "approved", "denied"

**fullText**: will filter suggested entitlement description records by text found in any of the following fields: entitlement name, entitlement display name, suggested description, source name

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-seds)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) | Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status**
  Query | count | **bool** |   (optional) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used.
  Query | count_only | **bool** |   (optional) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array.
  Query | requested_by_anyone | **bool** |   (optional) | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested
  Query | show_pending_status_only | **bool** |   (optional) | Will limit records to items that are in \"suggested\" or \"approved\" status

### Return type
[**List[Sed]**](../models/sed)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Suggested Entitlement Details | List[Sed] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sed import Sed
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = limit=25 # int | Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) # int | Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
    filters = 'displayName co \"Read and Write\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional)
    sorters = 'sorters=displayName' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional)
    count = count=true # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional)
    count_only = count-only=true # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array. (optional) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array. (optional)
    requested_by_anyone = requested-by-anyone=true # bool | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional) # bool | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional)
    show_pending_status_only = show-pending-status-only=true # bool | Will limit records to items that are in \"suggested\" or \"approved\" status (optional) # bool | Will limit records to items that are in \"suggested\" or \"approved\" status (optional)

    try:
        # List Suggested Entitlement Descriptions
        
        results =SuggestedEntitlementDescriptionApi(api_client).list_seds(x_sail_point_experimental, )
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).list_seds(x_sail_point_experimental, limit, filters, sorters, count, count_only, requested_by_anyone, show_pending_status_only)
        print("The response of SuggestedEntitlementDescriptionApi->list_seds:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->list_seds: %s\n" % e)
```



[[Back to top]](#) 

## patch-sed
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch Suggested Entitlement Description
Patch Suggested Entitlement Description

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-sed)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | id is sed id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | sed_patch | [**[]SedPatch**](../models/sed-patch) | True  | Sed Patch Request

### Return type
[**Sed**](../models/sed)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | detail of patched sed | Sed |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sed import Sed
from sailpoint.v2024.models.sed_patch import SedPatch
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ebab396f-0af1-4050-89b7-dafc63ec70e7' # str | id is sed id # str | id is sed id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    [sailpoint.v2024.SedPatch()] # List[SedPatch] | Sed Patch Request
     sed_patch = {
          "op" : "replace",
          "path" : "status",
          "value" : "approved"
        } # List[SedPatch] | Sed Patch Request
    

    try:
        # Patch Suggested Entitlement Description
        new_sed_patch = SedPatch()
        new_sed_patch.from_json(sed_patch)
        results =SuggestedEntitlementDescriptionApi(api_client).patch_sed(id, x_sail_point_experimental, new_sed_patch)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).patch_sed(id, x_sail_point_experimental, new_sed_patch)
        print("The response of SuggestedEntitlementDescriptionApi->patch_sed:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->patch_sed: %s\n" % e)
```



[[Back to top]](#) 

## submit-sed-approval
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Submit Bulk Approval Request
Submit Bulk Approval Request for SED.
Request body takes list of SED Ids. API responses with list of SED Approval Status

[API Spec](https://developer.sailpoint.com/docs/api/v2024/submit-sed-approval)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | sed_approval | [**[]SedApproval**](../models/sed-approval) | True  | Sed Approval

### Return type
[**List[SedApprovalStatus]**](../models/sed-approval-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of SED Approval Status | List[SedApprovalStatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sed_approval import SedApproval
from sailpoint.v2024.models.sed_approval_status import SedApprovalStatus
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    [sailpoint.v2024.SedApproval()] # List[SedApproval] | Sed Approval
     sed_approval = {
          "items" : "016629d1-1d25-463f-97f3-c6686846650"
        } # List[SedApproval] | Sed Approval
    

    try:
        # Submit Bulk Approval Request
        new_sed_approval = SedApproval()
        new_sed_approval.from_json(sed_approval)
        results =SuggestedEntitlementDescriptionApi(api_client).submit_sed_approval(x_sail_point_experimental, new_sed_approval)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_approval(x_sail_point_experimental, new_sed_approval)
        print("The response of SuggestedEntitlementDescriptionApi->submit_sed_approval:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_sed_approval: %s\n" % e)
```



[[Back to top]](#) 

## submit-sed-assignment
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Submit Sed Assignment Request
Submit Assignment Request.
Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

[API Spec](https://developer.sailpoint.com/docs/api/v2024/submit-sed-assignment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | sed_assignment | [**SedAssignment**](../models/sed-assignment) | True  | Sed Assignment Request

### Return type
[**SedAssignmentResponse**](../models/sed-assignment-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Sed Assignment Response | SedAssignmentResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sed_assignment import SedAssignment
from sailpoint.v2024.models.sed_assignment_response import SedAssignmentResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    sed_assignment = {
          "assignee" : {
            "type" : "SOURCE_OWNER",
            "value" : "016629d1-1d25-463f-97f3-c6686846650"
          },
          "items" : [ "016629d1-1d25-463f-97f3-0c6686846650", "016629d1-1d25-463f-97f3-0c6686846650" ]
        } # SedAssignment | Sed Assignment Request

    try:
        # Submit Sed Assignment Request
        new_sed_assignment = SedAssignment()
        new_sed_assignment.from_json(sed_assignment)
        results =SuggestedEntitlementDescriptionApi(api_client).submit_sed_assignment(x_sail_point_experimental, new_sed_assignment)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_assignment(x_sail_point_experimental, new_sed_assignment)
        print("The response of SuggestedEntitlementDescriptionApi->submit_sed_assignment:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_sed_assignment: %s\n" % e)
```



[[Back to top]](#) 

## submit-sed-batch-request
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Submit Sed Batch Request
Submit Sed Batch Request.
Request body has one of the following: - a list of entitlement Ids - a list of SED Ids that user wants to have description generated by LLM. API responses with batchId that groups Ids together

[API Spec](https://developer.sailpoint.com/docs/api/v2024/submit-sed-batch-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | sed_batch_request | [**SedBatchRequest**](../models/sed-batch-request) |   (optional) | Sed Batch Request

### Return type
[**SedBatchResponse**](../models/sed-batch-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Sed Batch Response | SedBatchResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sed_batch_request import SedBatchRequest
from sailpoint.v2024.models.sed_batch_response import SedBatchResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    sed_batch_request = {
          "entitlements" : [ "016629d1-1d25-463f-97f3-c6686846650", "016629d1-1d25-463f-97f3-c6686846650" ],
          "seds" : [ "016629d1-1d25-463f-97f3-c6686846650", "016629d1-1d25-463f-97f3-c6686846650" ]
        } # SedBatchRequest | Sed Batch Request (optional)

    try:
        # Submit Sed Batch Request
        
        results =SuggestedEntitlementDescriptionApi(api_client).submit_sed_batch_request(x_sail_point_experimental, )
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_batch_request(x_sail_point_experimental, new_sed_batch_request)
        print("The response of SuggestedEntitlementDescriptionApi->submit_sed_batch_request:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_sed_batch_request: %s\n" % e)
```



[[Back to top]](#) 



