---
id: v2024-certification-campaign-filters
title: Certification_Campaign_Filters
pagination_label: Certification_Campaign_Filters
sidebar_label: Certification_Campaign_Filters
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certification_Campaign_Filters', 'V2024Certification_Campaign_Filters'] 
slug: /tools/sdk/python/v2024/methods/certification-campaign-filters
tags: ['SDK', 'Software Development Kit', 'Certification_Campaign_Filters', 'V2024Certification_Campaign_Filters']
---

# sailpoint.v2024.CertificationCampaignFiltersApi
  Use this API to implement the certification campaign filter functionality. These filters can be used to create a certification campaign that includes a subset of your entitlements or users to certify.

For example, if for a certification campaign an organization wants to certify only specific users or entitlements, then those can be included/excluded on the basis of campaign filters.

For more information about creating a campaign filter, refer to [Creating a Campaign Filter](https://documentation.sailpoint.com/saas/help/certs/campaign_filters.html#creating-a-campaign-filter)

You can create campaign filters using any of the following criteria types:

- Access Profile : This criteria type includes or excludes access profiles from a campaign.

- Account Attribute : This criteria type includes or excludes certification items that match a specified value in an account attribute.

- Entitlement : This criteria type includes or excludes entitlements from a campaign.

- Identity : This criteria type includes or excludes specific identities from your campaign.

- Identity Attribute : This criteria type includes or excludes identities based on whether they have an identity attribute that matches criteria you&#39;ve chosen.

- Role : This criteria type includes or excludes roles, as opposed to identities.

- Source : This criteria type includes or excludes entitlements from a source you select.

For more information about these criteria types, refer to [Types of Campaign Filters](https://documentation.sailpoint.com/saas/help/certs/campaign_filters.html#types-of-campaign-filters)

Once the campaign filter is created, it can be linked while creating the campaign. The generated campaign will have the items to review as per the campaign filter.

For example, An inclusion campaign filter is created with a source of Source 1, an operation of Equals, and an entitlement of Entitlement 1. When this filter is selected, only users who have Entitlement 1 are included in the campaign, and only Entitlement 1 is shown in the certification.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-campaign-filter**](#create-campaign-filter) | **POST** `/campaign-filters` | Create Campaign Filter
[**delete-campaign-filters**](#delete-campaign-filters) | **POST** `/campaign-filters/delete` | Deletes Campaign Filters
[**get-campaign-filter-by-id**](#get-campaign-filter-by-id) | **GET** `/campaign-filters/{id}` | Get Campaign Filter by ID
[**list-campaign-filters**](#list-campaign-filters) | **GET** `/campaign-filters` | List Campaign Filters
[**update-campaign-filter**](#update-campaign-filter) | **POST** `/campaign-filters/{id}` | Updates a Campaign Filter


## create-campaign-filter
Create Campaign Filter
Use this API to create a campaign filter based on filter details and criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-campaign-filter)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaign_filter_details | [**CampaignFilterDetails**](../models/campaign-filter-details) | True  | 

### Return type
[**CampaignFilterDetails**](../models/campaign-filter-details)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created successfully. | CampaignFilterDetails |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certification_campaign_filters_api import CertificationCampaignFiltersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.campaign_filter_details import CampaignFilterDetails
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    campaign_filter_details = {
          "owner" : "SailPoint Support",
          "mode" : "INCLUSION",
          "isSystemFilter" : false,
          "name" : "Identity Attribute Campaign Filter",
          "description" : "Campaign filter to certify data based on an identity attribute's specified property.",
          "id" : "5ec18cef39020d6fd7a60ad3970aba61",
          "criteriaList" : [ {
            "type" : "IDENTITY_ATTRIBUTE",
            "property" : "displayName",
            "value" : "support",
            "operation" : "CONTAINS",
            "negateResult" : false,
            "shortCircuit" : false,
            "recordChildMatches" : false,
            "suppressMatchedItems" : false
          } ]
        } # CampaignFilterDetails | 

    try:
        # Create Campaign Filter
        new_campaign_filter_details = CampaignFilterDetails()
        new_campaign_filter_details.from_json(campaign_filter_details)
        results =CertificationCampaignFiltersApi(api_client).create_campaign_filter(new_campaign_filter_details)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignFiltersApi(api_client).create_campaign_filter(new_campaign_filter_details)
        print("The response of CertificationCampaignFiltersApi->create_campaign_filter:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationCampaignFiltersApi->create_campaign_filter: %s\n" % e)
```



[[Back to top]](#) 

## delete-campaign-filters
Deletes Campaign Filters
Deletes campaign filters whose Ids are specified in the provided list of campaign filter Ids. Authorized callers must be an ORG_ADMIN or a CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-campaign-filters)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | request_body | **[]str** | True  | A json list of IDs of campaign filters to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certification_campaign_filters_api import CertificationCampaignFiltersApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    request_body = ['request_body_example'] # List[str] | A json list of IDs of campaign filters to delete.
     request_body = ['request_body_example'] # List[str] | A json list of IDs of campaign filters to delete.
    

    try:
        # Deletes Campaign Filters
        new_request_body = RequestBody()
        new_request_body.from_json(request_body)
        CertificationCampaignFiltersApi(api_client).delete_campaign_filters(new_request_body)
        # Below is a request that includes all optional parameters
        # CertificationCampaignFiltersApi(api_client).delete_campaign_filters(new_request_body)
        except Exception as e:
        print("Exception when calling CertificationCampaignFiltersApi->delete_campaign_filters: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-filter-by-id
Get Campaign Filter by ID
Retrieves information for an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-campaign-filter-by-id)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the campaign filter to be retrieved.

### Return type
[**CampaignFilterDetails**](../models/campaign-filter-details)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A campaign filter object. | CampaignFilterDetails |  -  |
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
from sailpoint.v2024.api.certification_campaign_filters_api import CertificationCampaignFiltersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.campaign_filter_details import CampaignFilterDetails
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'e9f9a1397b842fd5a65842087040d3ac' # str | The ID of the campaign filter to be retrieved. # str | The ID of the campaign filter to be retrieved.

    try:
        # Get Campaign Filter by ID
        
        results =CertificationCampaignFiltersApi(api_client).get_campaign_filter_by_id(id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignFiltersApi(api_client).get_campaign_filter_by_id(id)
        print("The response of CertificationCampaignFiltersApi->get_campaign_filter_by_id:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationCampaignFiltersApi->get_campaign_filter_by_id: %s\n" % e)
```



[[Back to top]](#) 

## list-campaign-filters
List Campaign Filters
Use this API to list all campaign filters. You can reduce scope with standard V3 query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-campaign-filters)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | start | **int** |   (optional) (default to 0) | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | include_system_filters | **bool** |   (optional) (default to True) | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true. 

### Return type
[**ListCampaignFilters200Response**](../models/list-campaign-filters200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of campaign filter objects. | ListCampaignFilters200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certification_campaign_filters_api import CertificationCampaignFiltersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.list_campaign_filters200_response import ListCampaignFilters200Response
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    start = 0 # int | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    include_system_filters = True # bool | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional) (default to True) # bool | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional) (default to True)

    try:
        # List Campaign Filters
        
        results =CertificationCampaignFiltersApi(api_client).list_campaign_filters()
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignFiltersApi(api_client).list_campaign_filters(limit, start, include_system_filters)
        print("The response of CertificationCampaignFiltersApi->list_campaign_filters:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationCampaignFiltersApi->list_campaign_filters: %s\n" % e)
```



[[Back to top]](#) 

## update-campaign-filter
Updates a Campaign Filter
Updates an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-campaign-filter)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | filter_id | **str** | True  | The ID of the campaign filter being modified.
 Body  | campaign_filter_details | [**CampaignFilterDetails**](../models/campaign-filter-details) | True  | A campaign filter details with updated field values.

### Return type
[**CampaignFilterDetails**](../models/campaign-filter-details)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created successfully. | CampaignFilterDetails |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certification_campaign_filters_api import CertificationCampaignFiltersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.campaign_filter_details import CampaignFilterDetails
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    filter_id = 'e9f9a1397b842fd5a65842087040d3ac' # str | The ID of the campaign filter being modified. # str | The ID of the campaign filter being modified.
    campaign_filter_details = {
          "owner" : "SailPoint Support",
          "mode" : "INCLUSION",
          "isSystemFilter" : false,
          "name" : "Identity Attribute Campaign Filter",
          "description" : "Campaign filter to certify data based on an identity attribute's specified property.",
          "id" : "5ec18cef39020d6fd7a60ad3970aba61",
          "criteriaList" : [ {
            "type" : "IDENTITY_ATTRIBUTE",
            "property" : "displayName",
            "value" : "support",
            "operation" : "CONTAINS",
            "negateResult" : false,
            "shortCircuit" : false,
            "recordChildMatches" : false,
            "suppressMatchedItems" : false
          } ]
        } # CampaignFilterDetails | A campaign filter details with updated field values.

    try:
        # Updates a Campaign Filter
        new_campaign_filter_details = CampaignFilterDetails()
        new_campaign_filter_details.from_json(campaign_filter_details)
        results =CertificationCampaignFiltersApi(api_client).update_campaign_filter(filter_id, new_campaign_filter_details)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignFiltersApi(api_client).update_campaign_filter(filter_id, new_campaign_filter_details)
        print("The response of CertificationCampaignFiltersApi->update_campaign_filter:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationCampaignFiltersApi->update_campaign_filter: %s\n" % e)
```



[[Back to top]](#) 



