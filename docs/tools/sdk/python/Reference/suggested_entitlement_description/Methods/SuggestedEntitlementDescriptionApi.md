---
id: suggested-entitlement-description
title: Suggested_Entitlement_Description
pagination_label: Suggested_Entitlement_Description
sidebar_label: Suggested_Entitlement_Description
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Suggested_Entitlement_Description', 'Suggested_Entitlement_Description'] 
slug: /tools/sdk/python/suggested-entitlement-description/methods/suggested-entitlement-description
tags: ['SDK', 'Software Development Kit', 'Suggested_Entitlement_Description', 'Suggested_Entitlement_Description']
---

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
Bulk approve entitlement recommendations
Approve multiple entitlement recommendations in a single request. Each item in the request must include the recommendation ID and, depending on the record type, either an approved description (SED items) or an approved privilege level (privilege items). Returns a per-item result indicating success or failure.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-bulk-entitlement-recommendations-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulkapproveentitlementrecommendationrequest | [**Bulkapproveentitlementrecommendationrequest**](../models/bulkapproveentitlementrecommendationrequest) | True  | The list of recommendation items to approve.

### Return type
[**List[Bulkapproveentitlementrecommendationresult]**](../models/bulkapproveentitlementrecommendationresult)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Per-item approval results. | List[Bulkapproveentitlementrecommendationresult] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.bulkapproveentitlementrecommendationrequest import Bulkapproveentitlementrecommendationrequest
from sailpoint.suggested_entitlement_description.models.bulkapproveentitlementrecommendationresult import Bulkapproveentitlementrecommendationresult
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulkapproveentitlementrecommendationrequest = '''sailpoint.suggested_entitlement_description.Bulkapproveentitlementrecommendationrequest()''' # Bulkapproveentitlementrecommendationrequest | The list of recommendation items to approve.

    try:
        # Bulk approve entitlement recommendations
        new_bulkapproveentitlementrecommendationrequest = Bulkapproveentitlementrecommendationrequest.from_json(bulkapproveentitlementrecommendationrequest)
        results = SuggestedEntitlementDescriptionApi(api_client).approve_bulk_entitlement_recommendations_v1(bulkapproveentitlementrecommendationrequest=new_bulkapproveentitlementrecommendationrequest)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).approve_bulk_entitlement_recommendations_v1(new_bulkapproveentitlementrecommendationrequest)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-auto-write-settings-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | autowritesetting | [**Autowritesetting**](../models/autowritesetting) | True  | Auto-write settings to create

### Return type
[**Autowritesettingresponse**](../models/autowritesettingresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Auto-write settings created successfully | Autowritesettingresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | CreateAutoWriteSettingsV1409Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.autowritesetting import Autowritesetting
from sailpoint.suggested_entitlement_description.models.autowritesettingresponse import Autowritesettingresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    autowritesetting = '''sailpoint.suggested_entitlement_description.Autowritesetting()''' # Autowritesetting | Auto-write settings to create

    try:
        # Create auto-write settings for SED
        new_autowritesetting = Autowritesetting.from_json(autowritesetting)
        results = SuggestedEntitlementDescriptionApi(api_client).create_auto_write_settings_v1(autowritesetting=new_autowritesetting)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).create_auto_write_settings_v1(new_autowritesetting)
        print("The response of SuggestedEntitlementDescriptionApi->create_auto_write_settings_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->create_auto_write_settings_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-auto-write-settings-v1
Get auto-write settings for SED
Get the current auto-write configuration for the tenant, including the enabled state and source include/exclude lists.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auto-write-settings-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Autowritesettingresponse**](../models/autowritesettingresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Current auto-write settings | Autowritesettingresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.autowritesettingresponse import Autowritesettingresponse
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sed-batch-stats-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | batch_id | **str** | True  | Batch Id

### Return type
[**Sedbatchstats**](../models/sedbatchstats)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Stats of Sed batch. | Sedbatchstats |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sedbatchstats import Sedbatchstats
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sed-batches-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0.
  Query | limit | **int** |   (optional) (default to 250) | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | count | **bool** |   (optional) (default to False) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used.
  Query | count_only | **bool** |   (optional) (default to False) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array.
  Query | status | **str** |   (optional) | Batch Status

### Return type
[**List[Sedbatchrecord]**](../models/sedbatchrecord)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Sed Batch Records | List[Sedbatchrecord] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sedbatchrecord import Sedbatchrecord
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
List pending entitlement recommendation approvals
Returns a list of entitlement recommendations (SED and/or privilege) that are currently awaiting review or approval. Each record includes the recommendation type, entitlement details, and any AI-generated suggestions.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-pending-entitlement-recommendation-approvals-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Entitlementrecommendationrecord]**](../models/entitlementrecommendationrecord)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of pending entitlement recommendation records. | List[Entitlementrecommendationrecord] |  * X-Total-Count - The total number of recommendation groups available.  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.entitlementrecommendationrecord import Entitlementrecommendationrecord
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # List pending entitlement recommendation approvals
        
        results = SuggestedEntitlementDescriptionApi(api_client).list_pending_entitlement_recommendation_approvals_v1()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).list_pending_entitlement_recommendation_approvals_v1(offset, limit)
        print("The response of SuggestedEntitlementDescriptionApi->list_pending_entitlement_recommendation_approvals_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->list_pending_entitlement_recommendation_approvals_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-privileged-entitlement-recommendations-v1
List privileged entitlement recommendations
Returns a list of privileged entitlement recommendation groups. Each group aggregates individual entitlement instances that share the same entitlement name and connector type, along with a recommendation score and instance count.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-privileged-entitlement-recommendations-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Privilegedrecommendationgroup]**](../models/privilegedrecommendationgroup)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of privileged recommendation groups. | List[Privilegedrecommendationgroup] |  * X-Total-Count - The total number of recommendation groups available.  * X-Total-Entitlements - The total number of individual entitlement instances across all groups.  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.privilegedrecommendationgroup import Privilegedrecommendationgroup
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # List privileged entitlement recommendations
        
        results = SuggestedEntitlementDescriptionApi(api_client).list_privileged_entitlement_recommendations_v1()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).list_privileged_entitlement_recommendations_v1(offset, limit)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-seds-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

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
Update an entitlement recommendation
Partially update a single entitlement recommendation record by its ID. Use this endpoint to update the status, description, or privilege level of a specific SED or privilege recommendation.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-entitlement-recommendation-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The unique identifier of the entitlement recommendation to update.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | The patch operations to apply to the entitlement recommendation record.

### Return type
[**Entitlementrecommendationrecord**](../models/entitlementrecommendationrecord)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated entitlement recommendation record. | Entitlementrecommendationrecord |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.entitlementrecommendationrecord import Entitlementrecommendationrecord
from sailpoint.suggested_entitlement_description.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '79db50d4-723c-4aa0-a824-83c2205d82d1' # str | The unique identifier of the entitlement recommendation to update. # str | The unique identifier of the entitlement recommendation to update.
    jsonpatchoperation = '''[sailpoint.suggested_entitlement_description.Jsonpatchoperation()]''' # List[Jsonpatchoperation] | The patch operations to apply to the entitlement recommendation record.

    try:
        # Update an entitlement recommendation
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = SuggestedEntitlementDescriptionApi(api_client).patch_entitlement_recommendation_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).patch_entitlement_recommendation_v1(id, new_jsonpatchoperation)
        print("The response of SuggestedEntitlementDescriptionApi->patch_entitlement_recommendation_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->patch_entitlement_recommendation_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-sed-v1
Patch suggested entitlement description
Patch Suggested Entitlement Description

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-sed-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | id is sed id
 Body  | sedpatch | [**[]Sedpatch**](../models/sedpatch) | True  | Sed Patch Request

### Return type
[**Sed**](../models/sed)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | detail of patched sed | Sed |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sed import Sed
from sailpoint.suggested_entitlement_description.models.sedpatch import Sedpatch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ebab396f-0af1-4050-89b7-dafc63ec70e7' # str | id is sed id # str | id is sed id
    sedpatch = '''[sailpoint.suggested_entitlement_description.Sedpatch()]''' # List[Sedpatch] | Sed Patch Request

    try:
        # Patch suggested entitlement description
        new_sedpatch = Sedpatch.from_json(sedpatch)
        results = SuggestedEntitlementDescriptionApi(api_client).patch_sed_v1(id=id, sedpatch=new_sedpatch)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).patch_sed_v1(id, new_sedpatch)
        print("The response of SuggestedEntitlementDescriptionApi->patch_sed_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->patch_sed_v1: %s\n" % e)
```



[[Back to top]](#) 

## submit-entitlement-recommendations-assignment-v1
Assign entitlement recommendations for review
Assign a set of entitlement recommendation records to a reviewer. The assignee can be a specific identity, a governance group, or a role-based assignee such as source owner or entitlement owner. Returns a batch ID that can be used to track the assignment.

[API Spec](https://developer.sailpoint.com/docs/api/v1/submit-entitlement-recommendations-assignment-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlementrecommendationassignrequest | [**Entitlementrecommendationassignrequest**](../models/entitlementrecommendationassignrequest) | True  | The recommendation IDs and the target assignee.

### Return type
[**Entitlementrecommendationassignresult**](../models/entitlementrecommendationassignresult)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Assignment queued successfully. Returns the batch ID for tracking. | Entitlementrecommendationassignresult |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.entitlementrecommendationassignrequest import Entitlementrecommendationassignrequest
from sailpoint.suggested_entitlement_description.models.entitlementrecommendationassignresult import Entitlementrecommendationassignresult
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlementrecommendationassignrequest = '''sailpoint.suggested_entitlement_description.Entitlementrecommendationassignrequest()''' # Entitlementrecommendationassignrequest | The recommendation IDs and the target assignee.

    try:
        # Assign entitlement recommendations for review
        new_entitlementrecommendationassignrequest = Entitlementrecommendationassignrequest.from_json(entitlementrecommendationassignrequest)
        results = SuggestedEntitlementDescriptionApi(api_client).submit_entitlement_recommendations_assignment_v1(entitlementrecommendationassignrequest=new_entitlementrecommendationassignrequest)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_entitlement_recommendations_assignment_v1(new_entitlementrecommendationassignrequest)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/submit-sed-approval-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sedapproval | [**[]Sedapproval**](../models/sedapproval) | True  | Sed Approval

### Return type
[**List[Sedapprovalstatus]**](../models/sedapprovalstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of SED Approval Status | List[Sedapprovalstatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sedapproval import Sedapproval
from sailpoint.suggested_entitlement_description.models.sedapprovalstatus import Sedapprovalstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sedapproval = '''[sailpoint.suggested_entitlement_description.Sedapproval()]''' # List[Sedapproval] | Sed Approval

    try:
        # Submit bulk approval request
        new_sedapproval = Sedapproval.from_json(sedapproval)
        results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_approval_v1(sedapproval=new_sedapproval)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_approval_v1(new_sedapproval)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/submit-sed-assignment-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sedassignment | [**Sedassignment**](../models/sedassignment) | True  | Sed Assignment Request

### Return type
[**Sedassignmentresponse**](../models/sedassignmentresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Sed Assignment Response | Sedassignmentresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sedassignment import Sedassignment
from sailpoint.suggested_entitlement_description.models.sedassignmentresponse import Sedassignmentresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sedassignment = '''sailpoint.suggested_entitlement_description.Sedassignment()''' # Sedassignment | Sed Assignment Request

    try:
        # Submit sed assignment request
        new_sedassignment = Sedassignment.from_json(sedassignment)
        results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_assignment_v1(sedassignment=new_sedassignment)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_assignment_v1(new_sedassignment)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/submit-sed-batch-request-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sedbatchrequest | [**Sedbatchrequest**](../models/sedbatchrequest) |   (optional) | Sed Batch Request

### Return type
[**Sedbatchresponse**](../models/sedbatchresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Sed Batch Response | Sedbatchresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.sedbatchrequest import Sedbatchrequest
from sailpoint.suggested_entitlement_description.models.sedbatchresponse import Sedbatchresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sedbatchrequest = '''sailpoint.suggested_entitlement_description.Sedbatchrequest()''' # Sedbatchrequest | Sed Batch Request (optional)

    try:
        # Submit sed batch request
        
        results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_batch_request_v1()
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).submit_sed_batch_request_v1(new_sedbatchrequest)
        print("The response of SuggestedEntitlementDescriptionApi->submit_sed_batch_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->submit_sed_batch_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-auto-write-settings-v1
Update auto-write settings for SED
Partially update the auto-write settings for a tenant using JSON Patch operations. Only the "replace" operation is supported. Returns 404 if no settings exist yet - use POST to create them first.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-auto-write-settings-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | autowritesettingpatch | [**[]Autowritesettingpatch**](../models/autowritesettingpatch) | True  | Patch operations for auto-write settings

### Return type
[**Autowritesettingresponse**](../models/autowritesettingresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated auto-write settings | Autowritesettingresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.suggested_entitlement_description.api.suggested_entitlement_description_api import SuggestedEntitlementDescriptionApi
from sailpoint.suggested_entitlement_description.api_client import ApiClient
from sailpoint.suggested_entitlement_description.models.autowritesettingpatch import Autowritesettingpatch
from sailpoint.suggested_entitlement_description.models.autowritesettingresponse import Autowritesettingresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    autowritesettingpatch = '''[sailpoint.suggested_entitlement_description.Autowritesettingpatch()]''' # List[Autowritesettingpatch] | Patch operations for auto-write settings

    try:
        # Update auto-write settings for SED
        new_autowritesettingpatch = Autowritesettingpatch.from_json(autowritesettingpatch)
        results = SuggestedEntitlementDescriptionApi(api_client).update_auto_write_settings_v1(autowritesettingpatch=new_autowritesettingpatch)
        # Below is a request that includes all optional parameters
        # results = SuggestedEntitlementDescriptionApi(api_client).update_auto_write_settings_v1(new_autowritesettingpatch)
        print("The response of SuggestedEntitlementDescriptionApi->update_auto_write_settings_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SuggestedEntitlementDescriptionApi->update_auto_write_settings_v1: %s\n" % e)
```



[[Back to top]](#) 



