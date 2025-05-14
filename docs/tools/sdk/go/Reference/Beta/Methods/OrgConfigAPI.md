---
id: beta-org-config
title: OrgConfig
pagination_label: OrgConfig
sidebar_label: OrgConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OrgConfig', 'BetaOrgConfig'] 
slug: /tools/sdk/go/beta/methods/org-config
tags: ['SDK', 'Software Development Kit', 'OrgConfig', 'BetaOrgConfig']
---

# OrgConfigAPI
  Use this API to implement organization configuration functionality. 
Administrators can use this functionality to manage organization settings, such as time zones.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-org-config**](#get-org-config) | **Get** `/org-config` | Get Org configuration settings
[**get-valid-time-zones**](#get-valid-time-zones) | **Get** `/org-config/valid-time-zones` | Get list of time zones
[**patch-org-config**](#patch-org-config) | **Patch** `/org-config` | Patch an Org configuration property


## get-org-config
Get Org configuration settings
Get org configuration with only external (org admin) accessible properties for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-org-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrgConfigRequest struct via the builder pattern


### Return type

[**OrgConfig**](../models/org-config)

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
    resp, r, err := apiClient.Beta.OrgConfigAPI.GetOrgConfig(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.OrgConfigAPI.GetOrgConfig(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OrgConfigAPI.GetOrgConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOrgConfig`: OrgConfig
    fmt.Fprintf(os.Stdout, "Response from `OrgConfigAPI.GetOrgConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-valid-time-zones
Get list of time zones
Get a list of valid time zones that can be set in org configurations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-valid-time-zones)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetValidTimeZonesRequest struct via the builder pattern


### Return type

**[]string**

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
    resp, r, err := apiClient.Beta.OrgConfigAPI.GetValidTimeZones(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.OrgConfigAPI.GetValidTimeZones(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OrgConfigAPI.GetValidTimeZones``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetValidTimeZones`: []string
    fmt.Fprintf(os.Stdout, "Response from `OrgConfigAPI.GetValidTimeZones`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-org-config
Patch an Org configuration property
Patch configuration of the current org using http://jsonpatch.com/ syntax.  Commonly used for changing the time zone of an org.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-org-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchOrgConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**OrgConfig**](../models/org-config)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    jsonpatchoperation := []byte(`[{op=replace, path=/timeZone, value=America/Toronto}]`) // []JsonPatchOperation | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var jsonPatchOperation []beta.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.OrgConfigAPI.PatchOrgConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.Beta.OrgConfigAPI.PatchOrgConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OrgConfigAPI.PatchOrgConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchOrgConfig`: OrgConfig
    fmt.Fprintf(os.Stdout, "Response from `OrgConfigAPI.PatchOrgConfig`: %v\n", resp)
}
```

[[Back to top]](#)

