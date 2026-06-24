---
id: v2025-declassify-source
title: DeclassifySource
pagination_label: DeclassifySource
sidebar_label: DeclassifySource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DeclassifySource', 'V2025DeclassifySource'] 
slug: /tools/sdk/go/v2025/methods/declassify-source
tags: ['SDK', 'Software Development Kit', 'DeclassifySource', 'V2025DeclassifySource']
---

# DeclassifySourceAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-declassify-machine-account-from-source**](#send-declassify-machine-account-from-source) | **Post** `/sources/{sourceId}/declassify` | Declassify source&#39;s all accounts


## send-declassify-machine-account-from-source
Declassify source's all accounts
Use this API to declassify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/send-declassify-machine-account-from-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSendDeclassifyMachineAccountFromSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

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
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.DeclassifySourceAPI.SendDeclassifyMachineAccountFromSource(context.Background(), sourceId).Execute()
	  //r, err := apiClient.V2025.DeclassifySourceAPI.SendDeclassifyMachineAccountFromSource(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DeclassifySourceAPI.SendDeclassifyMachineAccountFromSource``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

