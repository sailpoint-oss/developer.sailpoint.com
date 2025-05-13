---
id: v2025-vendor-connector-mappings
title: VendorConnectorMappings
pagination_label: VendorConnectorMappings
sidebar_label: VendorConnectorMappings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VendorConnectorMappings', 'V2025VendorConnectorMappings'] 
slug: /tools/sdk/go/v2025/methods/vendor-connector-mappings
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappings', 'V2025VendorConnectorMappings']
---

# VendorConnectorMappingsAPI
  Vendors use ISC connectors to connect their source data to ISC, but the data in their source and the data in ISC may be stored in different formats. 
Connector mappings allow vendors to match their data on both sides of the connection. 
The vendors can then track and manage access across their sources from ISC. 
This API allows you to create and manage these vendor connector mappings. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-vendor-connector-mapping**](#create-vendor-connector-mapping) | **Post** `/vendor-connector-mappings` | Create Vendor Connector Mapping
[**delete-vendor-connector-mapping**](#delete-vendor-connector-mapping) | **Delete** `/vendor-connector-mappings` | Delete Vendor Connector Mapping
[**get-vendor-connector-mappings**](#get-vendor-connector-mappings) | **Get** `/vendor-connector-mappings` | List Vendor Connector Mappings


## create-vendor-connector-mapping
Create Vendor Connector Mapping
Create a new mapping between a SaaS vendor and an ISC connector to establish correlation paths.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-vendor-connector-mapping)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateVendorConnectorMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorConnectorMapping** | [**VendorConnectorMapping**](../models/vendor-connector-mapping) |  | 

### Return type

[**VendorConnectorMapping**](../models/vendor-connector-mapping)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
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
        }`) // VendorConnectorMapping | 

  
   var vendorConnectorMapping v2025.VendorConnectorMapping
   if err := json.Unmarshal(data, &vendorConnectorMapping); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.VendorConnectorMappingsAPI.CreateVendorConnectorMapping(context.Background()).VendorConnectorMapping(vendorConnectorMapping).Execute()
	//resp, r, err := apiClient.V2025.VendorConnectorMappingsAPI.CreateVendorConnectorMapping(context.Background()).VendorConnectorMapping(vendorConnectorMapping).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VendorConnectorMappingsAPI.CreateVendorConnectorMapping``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateVendorConnectorMapping`: VendorConnectorMapping
	fmt.Fprintf(os.Stdout, "Response from `VendorConnectorMappingsAPI.CreateVendorConnectorMapping`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-vendor-connector-mapping
Delete Vendor Connector Mapping
Soft delete a mapping between a SaaS vendor and an ISC connector, removing the established correlation.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-vendor-connector-mapping)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteVendorConnectorMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorConnectorMapping** | [**VendorConnectorMapping**](../models/vendor-connector-mapping) |  | 

### Return type

[**DeleteVendorConnectorMapping200Response**](../models/delete-vendor-connector-mapping200-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
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
        }`) // VendorConnectorMapping | 

  
   var vendorConnectorMapping v2025.VendorConnectorMapping
   if err := json.Unmarshal(data, &vendorConnectorMapping); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.VendorConnectorMappingsAPI.DeleteVendorConnectorMapping(context.Background()).VendorConnectorMapping(vendorConnectorMapping).Execute()
	//resp, r, err := apiClient.V2025.VendorConnectorMappingsAPI.DeleteVendorConnectorMapping(context.Background()).VendorConnectorMapping(vendorConnectorMapping).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VendorConnectorMappingsAPI.DeleteVendorConnectorMapping``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteVendorConnectorMapping`: DeleteVendorConnectorMapping200Response
	fmt.Fprintf(os.Stdout, "Response from `VendorConnectorMappingsAPI.DeleteVendorConnectorMapping`: %v\n", resp)
}
```

[[Back to top]](#)

## get-vendor-connector-mappings
List Vendor Connector Mappings
Get a list of mappings between SaaS vendors and ISC connectors, detailing the connections established for correlation.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-vendor-connector-mappings)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetVendorConnectorMappingsRequest struct via the builder pattern


### Return type

[**[]VendorConnectorMapping**](../models/vendor-connector-mapping)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.VendorConnectorMappingsAPI.GetVendorConnectorMappings(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.VendorConnectorMappingsAPI.GetVendorConnectorMappings(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VendorConnectorMappingsAPI.GetVendorConnectorMappings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetVendorConnectorMappings`: []VendorConnectorMapping
	fmt.Fprintf(os.Stdout, "Response from `VendorConnectorMappingsAPI.GetVendorConnectorMappings`: %v\n", resp)
}
```

[[Back to top]](#)

