---
id: certification-campaign-filters
title: Certification_Campaign_Filters
pagination_label: Certification_Campaign_Filters
sidebar_label: Certification_Campaign_Filters
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certification_Campaign_Filters', 'Certification_Campaign_Filters'] 
slug: /tools/sdk/python/certification-campaign-filters/methods/certification-campaign-filters
tags: ['SDK', 'Software Development Kit', 'Certification_Campaign_Filters', 'Certification_Campaign_Filters']
---

# sailpoint.certification_campaign_filters.CertificationCampaignFiltersApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-campaign-filter-v1**](#create-campaign-filter-v1) | **POST** `/campaign-filters/v1` | Create campaign filter
[**delete-campaign-filters-v1**](#delete-campaign-filters-v1) | **POST** `/campaign-filters/v1/delete` | Deletes campaign filters
[**get-campaign-filter-by-id-v1**](#get-campaign-filter-by-id-v1) | **GET** `/campaign-filters/v1/{id}` | Get campaign filter by id
[**list-campaign-filters-v1**](#list-campaign-filters-v1) | **GET** `/campaign-filters/v1` | List campaign filters
[**update-campaign-filter-v1**](#update-campaign-filter-v1) | **POST** `/campaign-filters/v1/{id}` | Updates a campaign filter


## create-campaign-filter-v1
Create campaign filter
Use this API to create a campaign filter based on filter details and criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-campaign-filter-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | campaignfilterdetails | [**Campaignfilterdetails**](../models/campaignfilterdetails) | True  | 

### Return type
[**Campaignfilterdetails**](../models/campaignfilterdetails)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created successfully. | Campaignfilterdetails |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaign_filters.api.certification_campaign_filters_api import CertificationCampaignFiltersApi
from sailpoint.certification_campaign_filters.api_client import ApiClient
from sailpoint.certification_campaign_filters.models.campaignfilterdetails import Campaignfilterdetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    campaignfilterdetails = '''sailpoint.certification_campaign_filters.Campaignfilterdetails()''' # Campaignfilterdetails | 

    try:
        # Create campaign filter
        new_campaignfilterdetails = Campaignfilterdetails.from_json(campaignfilterdetails)
        results = CertificationCampaignFiltersApi(api_client).create_campaign_filter_v1(campaignfilterdetails=new_campaignfilterdetails)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignFiltersApi(api_client).create_campaign_filter_v1(new_campaignfilterdetails)
        print("The response of CertificationCampaignFiltersApi->create_campaign_filter_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignFiltersApi->create_campaign_filter_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-campaign-filters-v1
Deletes campaign filters
Deletes campaign filters whose Ids are specified in the provided list of campaign filter Ids. Authorized callers must be an ORG_ADMIN or a CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-campaign-filters-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaign_filters.api.certification_campaign_filters_api import CertificationCampaignFiltersApi
from sailpoint.certification_campaign_filters.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    request_body = '''['request_body_example']''' # List[str] | A json list of IDs of campaign filters to delete.

    try:
        # Deletes campaign filters
        new_request_body = RequestBody.from_json(request_body)
        CertificationCampaignFiltersApi(api_client).delete_campaign_filters_v1(request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # CertificationCampaignFiltersApi(api_client).delete_campaign_filters_v1(new_request_body)
    except Exception as e:
        print("Exception when calling CertificationCampaignFiltersApi->delete_campaign_filters_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-campaign-filter-by-id-v1
Get campaign filter by id
Retrieves information for an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-filter-by-id-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the campaign filter to be retrieved.

### Return type
[**Campaignfilterdetails**](../models/campaignfilterdetails)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A campaign filter object. | Campaignfilterdetails |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaign_filters.api.certification_campaign_filters_api import CertificationCampaignFiltersApi
from sailpoint.certification_campaign_filters.api_client import ApiClient
from sailpoint.certification_campaign_filters.models.campaignfilterdetails import Campaignfilterdetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'e9f9a1397b842fd5a65842087040d3ac' # str | The ID of the campaign filter to be retrieved. # str | The ID of the campaign filter to be retrieved.

    try:
        # Get campaign filter by id
        
        results = CertificationCampaignFiltersApi(api_client).get_campaign_filter_by_id_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignFiltersApi(api_client).get_campaign_filter_by_id_v1(id)
        print("The response of CertificationCampaignFiltersApi->get_campaign_filter_by_id_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignFiltersApi->get_campaign_filter_by_id_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-campaign-filters-v1
List campaign filters
Use this API to list all campaign filters. You can reduce scope with standard V3 query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-campaign-filters-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | start | **int** |   (optional) (default to 0) | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | include_system_filters | **bool** |   (optional) (default to True) | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true. 

### Return type
[**ListCampaignFiltersV1200Response**](../models/list-campaign-filters-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of campaign filter objects. | ListCampaignFiltersV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaign_filters.api.certification_campaign_filters_api import CertificationCampaignFiltersApi
from sailpoint.certification_campaign_filters.api_client import ApiClient
from sailpoint.certification_campaign_filters.models.list_campaign_filters_v1200_response import ListCampaignFiltersV1200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    start = 0 # int | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    include_system_filters = True # bool | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional) (default to True) # bool | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional) (default to True)

    try:
        # List campaign filters
        
        results = CertificationCampaignFiltersApi(api_client).list_campaign_filters_v1()
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignFiltersApi(api_client).list_campaign_filters_v1(limit, start, include_system_filters)
        print("The response of CertificationCampaignFiltersApi->list_campaign_filters_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignFiltersApi->list_campaign_filters_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-campaign-filter-v1
Updates a campaign filter
Updates an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-campaign-filter-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the campaign filter being modified.
 Body  | campaignfilterdetails | [**Campaignfilterdetails**](../models/campaignfilterdetails) | True  | A campaign filter details with updated field values.

### Return type
[**Campaignfilterdetails**](../models/campaignfilterdetails)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created successfully. | Campaignfilterdetails |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCampaignFiltersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCampaignFiltersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.certification_campaign_filters.api.certification_campaign_filters_api import CertificationCampaignFiltersApi
from sailpoint.certification_campaign_filters.api_client import ApiClient
from sailpoint.certification_campaign_filters.models.campaignfilterdetails import Campaignfilterdetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'e9f9a1397b842fd5a65842087040d3ac' # str | The ID of the campaign filter being modified. # str | The ID of the campaign filter being modified.
    campaignfilterdetails = '''sailpoint.certification_campaign_filters.Campaignfilterdetails()''' # Campaignfilterdetails | A campaign filter details with updated field values.

    try:
        # Updates a campaign filter
        new_campaignfilterdetails = Campaignfilterdetails.from_json(campaignfilterdetails)
        results = CertificationCampaignFiltersApi(api_client).update_campaign_filter_v1(id=id, campaignfilterdetails=new_campaignfilterdetails)
        # Below is a request that includes all optional parameters
        # results = CertificationCampaignFiltersApi(api_client).update_campaign_filter_v1(id, new_campaignfilterdetails)
        print("The response of CertificationCampaignFiltersApi->update_campaign_filter_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CertificationCampaignFiltersApi->update_campaign_filter_v1: %s\n" % e)
```



[[Back to top]](#) 



