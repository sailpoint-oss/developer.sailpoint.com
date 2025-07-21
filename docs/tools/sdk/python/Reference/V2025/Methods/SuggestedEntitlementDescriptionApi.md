---
id: v2025-suggested-entitlement-description
title: Suggested_Entitlement_Description
pagination_label: Suggested_Entitlement_Description
sidebar_label: Suggested_Entitlement_Description
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Suggested_Entitlement_Description', 'V2025Suggested_Entitlement_Description'] 
slug: /tools/sdk/python/v2025/methods/suggested-entitlement-description
tags: ['SDK', 'Software Development Kit', 'Suggested_Entitlement_Description', 'V2025Suggested_Entitlement_Description']
---

# sailpoint.v2025.SuggestedEntitlementDescriptionApi
  Use this API to implement Suggested Entitlement Description (SED) functionality. 
SED functionality leverages the power of LLM to generate suggested entitlement descriptions. 
Refer to [GenAI Entitlement Descriptions](https://documentation.sailpoint.com/saas/help/access/entitlements.html#genai-entitlement-descriptions) to learn more about SED in Identity Security Cloud (ISC). 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-sed-batch-stats**](#get-sed-batch-stats) | **GET** `/suggested-entitlement-description-batches/{batchId}/stats` | Submit sed batch stats request
[**get-sed-batches**](#get-sed-batches) | **GET** `/suggested-entitlement-description-batches` | List Sed Batch Record
[**list-seds**](#list-seds) | **GET** `/suggested-entitlement-descriptions` | List suggested entitlement descriptions
[**patch-sed**](#patch-sed) | **PATCH** `/suggested-entitlement-descriptions` | Patch suggested entitlement description
[**submit-sed-approval**](#submit-sed-approval) | **POST** `/suggested-entitlement-description-approvals` | Submit bulk approval request
[**submit-sed-assignment**](#submit-sed-assignment) | **POST** `/suggested-entitlement-description-assignments` | Submit sed assignment request
[**submit-sed-batch-request**](#submit-sed-batch-request) | **POST** `/suggested-entitlement-description-batches` | Submit sed batch request


## get-sed-batch-stats
Submit sed batch stats request
'Submit Sed Batch Stats Request.

 Submits batchId in the path param `(e.g. {batchId}/stats)`. API responses with stats
 of the batchId.'


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sed-batch-stats)

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
from sailpoint.v2025.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.sed_batch_stats import SedBatchStats
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    batch_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | Batch Id # str | Batch Id

    try:
        # Submit sed batch stats request
        
        results = SuggestedEntitlementDescriptionApi(api_client).get_sed_batch_stats(batch_id=batch_id)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).get_sed_batch_stats(batch_id)
        print("The response of SuggestedEntitlementDescriptionApi->get_sed_batch_stats:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->get_sed_batch_stats: %s\n" % e)
```



[[Back to top]](#) 

## get-sed-batches
List Sed Batch Record
List Sed Batches.
API responses with Sed Batch Records

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sed-batches)

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
from sailpoint.v2025.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.sed_batch_record import SedBatchRecord
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
        
        results = SuggestedEntitlementDescriptionApi(api_client).get_sed_batches()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).get_sed_batches(offset, limit, count, count_only, status)
        print("The response of SuggestedEntitlementDescriptionApi->get_sed_batches:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->get_sed_batches: %s\n" % e)
```



[[Back to top]](#) 

## list-seds
List suggested entitlement descriptions
List of Suggested Entitlement Descriptions (SED)

SED field descriptions:

**batchId**: the ID of the batch of entitlements that are submitted for description generation

**displayName**: the display name of the entitlement that we are generating a description for

**sourceName**: the name of the source associated with the entitlement that we are generating the description for

**sourceId**: the ID of the source associated with the entitlement that we are generating the description for

**status**: the status of the suggested entitlement description, valid status options: "requested", "suggested", "not_suggested", "failed", "assigned", "approved", "denied"

**fullText**: will filter suggested entitlement description records by text found in any of the following fields: entitlement name, entitlement display name, suggested description, source name

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-seds)

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
from sailpoint.v2025.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.sed import Sed
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
        
        results = SuggestedEntitlementDescriptionApi(api_client).list_seds()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).list_seds(limit, offset, count, filters, sorters, count_only, requested_by_anyone, show_pending_status_only)
        print("The response of SuggestedEntitlementDescriptionApi->list_seds:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->list_seds: %s\n" % e)
```



[[Back to top]](#) 

## patch-sed
Patch suggested entitlement description
Patch Suggested Entitlement Description

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-sed)

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
from sailpoint.v2025.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.sed import Sed
from sailpoint.v2025.models.sed_patch import SedPatch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ebab396f-0af1-4050-89b7-dafc63ec70e7' # str | id is sed id # str | id is sed id
    sed_patch = '''[sailpoint.v2025.SedPatch()]''' # List[SedPatch] | Sed Patch Request

    try:
        # Patch suggested entitlement description
        new_sed_patch = SedPatch.from_json(sed_patch)
        results = SuggestedEntitlementDescriptionApi(api_client).patch_sed(id=id, sed_patch=new_sed_patch)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).patch_sed(id, new_sed_patch)
        print("The response of SuggestedEntitlementDescriptionApi->patch_sed:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->patch_sed: %s\n" % e)
```



[[Back to top]](#) 

## submit-sed-approval
Submit bulk approval request
Submit Bulk Approval Request for SED.
Request body takes list of SED Ids. API responses with list of SED Approval Status

[API Spec](https://developer.sailpoint.com/docs/api/v2025/submit-sed-approval)

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
from sailpoint.v2025.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.sed_approval import SedApproval
from sailpoint.v2025.models.sed_approval_status import SedApprovalStatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sed_approval = '''[sailpoint.v2025.SedApproval()]''' # List[SedApproval] | Sed Approval

    try:
        # Submit bulk approval request
        new_sed_approval = SedApproval.from_json(sed_approval)
        results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_approval(sed_approval=new_sed_approval)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_approval(new_sed_approval)
        print("The response of SuggestedEntitlementDescriptionApi->submit_sed_approval:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_sed_approval: %s\n" % e)
```



[[Back to top]](#) 

## submit-sed-assignment
Submit sed assignment request
Submit Assignment Request.
Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

[API Spec](https://developer.sailpoint.com/docs/api/v2025/submit-sed-assignment)

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
from sailpoint.v2025.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.sed_assignment import SedAssignment
from sailpoint.v2025.models.sed_assignment_response import SedAssignmentResponse
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
        results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_assignment(sed_assignment=new_sed_assignment)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_assignment(new_sed_assignment)
        print("The response of SuggestedEntitlementDescriptionApi->submit_sed_assignment:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_sed_assignment: %s\n" % e)
```



[[Back to top]](#) 

## submit-sed-batch-request
Submit sed batch request
Submit Sed Batch Request.
Request body has one of the following: - a list of entitlement Ids - a list of SED Ids that user wants to have description generated by LLM. API responses with batchId that groups Ids together

[API Spec](https://developer.sailpoint.com/docs/api/v2025/submit-sed-batch-request)

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
from sailpoint.v2025.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.sed_batch_request import SedBatchRequest
from sailpoint.v2025.models.sed_batch_response import SedBatchResponse
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
        
        results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_batch_request()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_batch_request(new_sed_batch_request)
        print("The response of SuggestedEntitlementDescriptionApi->submit_sed_batch_request:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_sed_batch_request: %s\n" % e)
```



[[Back to top]](#) 



