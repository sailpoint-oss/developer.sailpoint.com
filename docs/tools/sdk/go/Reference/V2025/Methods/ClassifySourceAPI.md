---
id: v2025-classify-source
title: ClassifySource
pagination_label: ClassifySource
sidebar_label: ClassifySource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClassifySource', 'V2025ClassifySource'] 
slug: /tools/sdk/go/v2025/methods/classify-source
tags: ['SDK', 'Software Development Kit', 'ClassifySource', 'V2025ClassifySource']
---

# ClassifySourceAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-classify-machine-account-from-source**](#delete-classify-machine-account-from-source) | **Delete** `/sources/{sourceId}/classify` | Cancel classify source&#39;s accounts process
[**get-classify-machine-account-from-source-status**](#get-classify-machine-account-from-source-status) | **Get** `/sources/{sourceId}/classify` | Source accounts classification status
[**send-classify-machine-account-from-source**](#send-classify-machine-account-from-source) | **Post** `/sources/{sourceId}/classify` | Classify source&#39;s all accounts


## delete-classify-machine-account-from-source
Cancel classify source's accounts process
Use this API to cancel account classification process on a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-classify-machine-account-from-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteClassifyMachineAccountFromSourceRequest struct via the builder pattern


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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.ClassifySourceAPI.DeleteClassifyMachineAccountFromSource(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.ClassifySourceAPI.DeleteClassifyMachineAccountFromSource(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ClassifySourceAPI.DeleteClassifyMachineAccountFromSource``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-classify-machine-account-from-source-status
Source accounts classification status
Use this API to get the status of Machine Account Classification process for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-classify-machine-account-from-source-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetClassifyMachineAccountFromSourceStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SourceClassificationStatus**](../models/source-classification-status)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ClassifySourceAPI.GetClassifyMachineAccountFromSourceStatus(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.ClassifySourceAPI.GetClassifyMachineAccountFromSourceStatus(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ClassifySourceAPI.GetClassifyMachineAccountFromSourceStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetClassifyMachineAccountFromSourceStatus`: SourceClassificationStatus
    fmt.Fprintf(os.Stdout, "Response from `ClassifySourceAPI.GetClassifyMachineAccountFromSourceStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## send-classify-machine-account-from-source
Classify source's all accounts
Use this API to classify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/send-classify-machine-account-from-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSendClassifyMachineAccountFromSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SendClassifyMachineAccountFromSource200Response**](../models/send-classify-machine-account-from-source200-response)

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
    resp, r, err := apiClient.V2025.ClassifySourceAPI.SendClassifyMachineAccountFromSource(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.V2025.ClassifySourceAPI.SendClassifyMachineAccountFromSource(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ClassifySourceAPI.SendClassifyMachineAccountFromSource``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SendClassifyMachineAccountFromSource`: SendClassifyMachineAccountFromSource200Response
    fmt.Fprintf(os.Stdout, "Response from `ClassifySourceAPI.SendClassifyMachineAccountFromSource`: %v\n", resp)
}
```

[[Back to top]](#)

