---
id: vendor-connector-mappings
title: Vendor_Connector_Mappings
pagination_label: Vendor_Connector_Mappings
sidebar_label: Vendor_Connector_Mappings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Vendor_Connector_Mappings', 'Vendor_Connector_Mappings'] 
slug: /tools/sdk/python/v3/methods/vendor-connector-mappings
tags: ['SDK', 'Software Development Kit', 'Vendor_Connector_Mappings', 'Vendor_Connector_Mappings']
---

# sailpoint.v3.VendorConnectorMappingsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_vendor_connector_mapping**](VendorConnectorMappingsApi#create-vendor-connector-mapping) | **POST** `/vendor-connector-mappings` | Create Vendor Connector Mapping
[**delete_vendor_connector_mapping**](VendorConnectorMappingsApi#delete-vendor-connector-mapping) | **DELETE** `/vendor-connector-mappings` | Delete Vendor Connector Mapping
[**get_vendor_connector_mappings**](VendorConnectorMappingsApi#get-vendor-connector-mappings) | **GET** `/vendor-connector-mappings` | List Vendor Connector Mappings


## create-vendor-connector-mapping
Create Vendor Connector Mapping
Create a new mapping between a SaaS vendor and an ISC connector to establish correlation paths.


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-vendor-connector-mapping)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | vendor_connector_mapping | [**VendorConnectorMapping**](../models/vendor-connector-mapping) | True  | 

### Return type
[**VendorConnectorMapping**](../models/vendor-connector-mapping)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully created a new vendor connector mapping. | VendorConnectorMapping |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | GetVendorConnectorMappings405Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.models.vendor_connector_mapping import VendorConnectorMapping
from sailpoint.v3.rest import ApiException
from pprint import pprint

    vendor_connector_mapping = {
          "createdAt" : "2024-03-13T12:56:19.391294Z",
          "deletedAt" : {
            "Valid" : false,
            "Time" : "0001-01-01T00:00:00Z"
          },
          "updatedBy" : {
            "Valid" : true,
            "String" : "user-67891"
          },
          "connector" : "Example connector",
          "createdBy" : "admin",
          "vendor" : "Example vendor",
          "id" : "78733556-9ea3-4f59-bf69-e5cd92b011b4",
          "deletedBy" : {
            "Valid" : false,
            "String" : ""
          },
          "updatedAt" : {
            "Valid" : true,
            "Time" : "2024-03-14T12:56:19.391294Z"
          }
        } # VendorConnectorMapping | 

    try:
        # Create Vendor Connector Mapping
        Result = vendor_connector_mapping.from_json(vendor_connector_mapping)
        api_response = api_instance.create_vendor_connector_mapping(Result)
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.create_vendor_connector_mapping(Result)
        print("The response of VendorConnectorMappingsApi->create_vendor_connector_mapping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VendorConnectorMappingsApi->create_vendor_connector_mapping: %s\n" % e)
```



[[Back to top]](#) 

## delete-vendor-connector-mapping
Delete Vendor Connector Mapping
Soft delete a mapping between a SaaS vendor and an ISC connector, removing the established correlation.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-vendor-connector-mapping)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | vendor_connector_mapping | [**VendorConnectorMapping**](../models/vendor-connector-mapping) | True  | 

### Return type
[**DeleteVendorConnectorMapping200Response**](../models/delete-vendor-connector-mapping200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully deleted the specified vendor connector mapping. | DeleteVendorConnectorMapping200Response |  -  |
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
import sailpoint.v3
from sailpoint.v3.models.delete_vendor_connector_mapping200_response import DeleteVendorConnectorMapping200Response
from sailpoint.v3.models.vendor_connector_mapping import VendorConnectorMapping
from sailpoint.v3.rest import ApiException
from pprint import pprint

    vendor_connector_mapping = {
          "createdAt" : "2024-03-13T12:56:19.391294Z",
          "deletedAt" : {
            "Valid" : false,
            "Time" : "0001-01-01T00:00:00Z"
          },
          "updatedBy" : {
            "Valid" : true,
            "String" : "user-67891"
          },
          "connector" : "Example connector",
          "createdBy" : "admin",
          "vendor" : "Example vendor",
          "id" : "78733556-9ea3-4f59-bf69-e5cd92b011b4",
          "deletedBy" : {
            "Valid" : false,
            "String" : ""
          },
          "updatedAt" : {
            "Valid" : true,
            "Time" : "2024-03-14T12:56:19.391294Z"
          }
        } # VendorConnectorMapping | 

    try:
        # Delete Vendor Connector Mapping
        Result = vendor_connector_mapping.from_json(vendor_connector_mapping)
        api_response = api_instance.delete_vendor_connector_mapping(Result)
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.delete_vendor_connector_mapping(Result)
        print("The response of VendorConnectorMappingsApi->delete_vendor_connector_mapping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VendorConnectorMappingsApi->delete_vendor_connector_mapping: %s\n" % e)
```



[[Back to top]](#) 

## get-vendor-connector-mappings
List Vendor Connector Mappings
Get a list of mappings between SaaS vendors and ISC connectors, detailing the connections established for correlation.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-vendor-connector-mappings)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[VendorConnectorMapping]**](../models/vendor-connector-mapping)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully retrieved list. | List[VendorConnectorMapping] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | GetVendorConnectorMappings405Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.models.vendor_connector_mapping import VendorConnectorMapping
from sailpoint.v3.rest import ApiException
from pprint import pprint


    try:
        # List Vendor Connector Mappings
        
        api_response = api_instance.get_vendor_connector_mappings()
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.get_vendor_connector_mappings()
        print("The response of VendorConnectorMappingsApi->get_vendor_connector_mappings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VendorConnectorMappingsApi->get_vendor_connector_mappings: %s\n" % e)
```



[[Back to top]](#) 



