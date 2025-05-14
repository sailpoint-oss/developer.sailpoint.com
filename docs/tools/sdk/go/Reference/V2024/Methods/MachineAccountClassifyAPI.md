---
id: v2024-machine-account-classify
title: MachineAccountClassify
pagination_label: MachineAccountClassify
sidebar_label: MachineAccountClassify
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineAccountClassify', 'V2024MachineAccountClassify'] 
slug: /tools/sdk/go/v2024/methods/machine-account-classify
tags: ['SDK', 'Software Development Kit', 'MachineAccountClassify', 'V2024MachineAccountClassify']
---

# MachineAccountClassifyAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-classify-machine-account**](#send-classify-machine-account) | **Post** `/accounts/{id}/classify` | Classify a Single Machine Account


## send-classify-machine-account
Classify a Single Machine Account
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/send-classify-machine-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSendClassifyMachineAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **classificationMode** | **string** | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. | [default to &quot;default&quot;]

### Return type

[**SendClassifyMachineAccount200Response**](../models/send-classify-machine-account200-response)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Account ID. # string | Account ID.
    classificationMode := `forceMachine` // string | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default") # string | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineAccountClassifyAPI.SendClassifyMachineAccount(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2024.MachineAccountClassifyAPI.SendClassifyMachineAccount(context.Background(), id).ClassificationMode(classificationMode).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountClassifyAPI.SendClassifyMachineAccount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SendClassifyMachineAccount`: SendClassifyMachineAccount200Response
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountClassifyAPI.SendClassifyMachineAccount`: %v\n", resp)
}
```

[[Back to top]](#)

