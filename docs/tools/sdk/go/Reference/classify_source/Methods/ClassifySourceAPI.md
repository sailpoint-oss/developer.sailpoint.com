---
id: v1-classify-source
title: ClassifySource
pagination_label: ClassifySource
sidebar_label: ClassifySource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClassifySource', 'V1ClassifySource'] 
slug: /tools/sdk/go/classifysource/methods/classify-source
tags: ['SDK', 'Software Development Kit', 'ClassifySource', 'V1ClassifySource']
---

# ClassifySourceAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-classify-machine-account-from-source-v1**](#delete-classify-machine-account-from-source-v1) | **Delete** `/sources/v1/{sourceId}/classify` | Cancel classify source&#39;s accounts process
[**get-classify-machine-account-from-source-status-v1**](#get-classify-machine-account-from-source-status-v1) | **Get** `/sources/v1/{sourceId}/classify` | Source accounts classification status
[**send-classify-machine-account-from-source-v1**](#send-classify-machine-account-from-source-v1) | **Post** `/sources/v1/{sourceId}/classify` | Classify source&#39;s all accounts


## delete-classify-machine-account-from-source-v1
Cancel classify source's accounts process
Use this API to cancel account classification process on a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-classify-machine-account-from-source-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteClassifyMachineAccountFromSourceV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/classify_source"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ClassifySourceAPI.DeleteClassifyMachineAccountFromSourceV1(context.Background(), sourceId).Execute()
	  //r, err := apiClient.ClassifySourceAPI.DeleteClassifyMachineAccountFromSourceV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ClassifySourceAPI.DeleteClassifyMachineAccountFromSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-classify-machine-account-from-source-status-v1
Source accounts classification status
Use this API to get the status of Machine Account Classification process for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-classify-machine-account-from-source-status-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetClassifyMachineAccountFromSourceStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Sourceclassificationstatus**](../models/sourceclassificationstatus)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/classify_source"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ClassifySourceAPI.GetClassifyMachineAccountFromSourceStatusV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.ClassifySourceAPI.GetClassifyMachineAccountFromSourceStatusV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ClassifySourceAPI.GetClassifyMachineAccountFromSourceStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetClassifyMachineAccountFromSourceStatusV1`: Sourceclassificationstatus
    fmt.Fprintf(os.Stdout, "Response from `ClassifySourceAPI.GetClassifyMachineAccountFromSourceStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## send-classify-machine-account-from-source-v1
Classify source's all accounts
Use this API to classify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-classify-machine-account-from-source-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSendClassifyMachineAccountFromSourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SendClassifyMachineAccountFromSourceV1200Response**](../models/send-classify-machine-account-from-source-v1200-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/classify_source"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ClassifySourceAPI.SendClassifyMachineAccountFromSourceV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.ClassifySourceAPI.SendClassifyMachineAccountFromSourceV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ClassifySourceAPI.SendClassifyMachineAccountFromSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SendClassifyMachineAccountFromSourceV1`: SendClassifyMachineAccountFromSourceV1200Response
    fmt.Fprintf(os.Stdout, "Response from `ClassifySourceAPI.SendClassifyMachineAccountFromSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

