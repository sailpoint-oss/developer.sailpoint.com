---
id: beta-iai-message-catalogs
title: IAI_Message_Catalogs
pagination_label: IAI_Message_Catalogs
sidebar_label: IAI_Message_Catalogs
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IAI_Message_Catalogs', 'BetaIAI_Message_Catalogs'] 
slug: /tools/sdk/python/beta/methods/iai-message-catalogs
tags: ['SDK', 'Software Development Kit', 'IAI_Message_Catalogs', 'BetaIAI_Message_Catalogs']
---

# sailpoint.beta.IAIMessageCatalogsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-message-catalogs**](#get-message-catalogs) | **GET** `/translation-catalogs/{catalog-id}` | Get Message catalogs


## get-message-catalogs
Get Message catalogs
The getMessageCatalogs API returns message catalog based on the language headers in the requested object.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-message-catalogs)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | catalog_id | **str** | True  | The ID of the message catalog.

### Return type
[**List[MessageCatalogDto]**](../models/message-catalog-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The message catalogs based on the request headers | List[MessageCatalogDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.iai_message_catalogs_api import IAIMessageCatalogsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.message_catalog_dto import MessageCatalogDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    catalog_id = 'recommender' # str | The ID of the message catalog. # str | The ID of the message catalog.

    try:
        # Get Message catalogs
        
        results =IAIMessageCatalogsApi(api_client).get_message_catalogs(catalog_id)
        # Below is a request that includes all optional parameters
        # results = IAIMessageCatalogsApi(api_client).get_message_catalogs(catalog_id)
        print("The response of IAIMessageCatalogsApi->get_message_catalogs:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling IAIMessageCatalogsApi->get_message_catalogs: %s\n" % e)
```



[[Back to top]](#) 



