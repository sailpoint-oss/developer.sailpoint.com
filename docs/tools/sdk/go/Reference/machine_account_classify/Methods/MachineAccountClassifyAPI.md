---
id: v1-machine-account-classify
title: MachineAccountClassify
pagination_label: MachineAccountClassify
sidebar_label: MachineAccountClassify
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineAccountClassify', 'V1MachineAccountClassify'] 
slug: /tools/sdk/go/machineaccountclassify/methods/machine-account-classify
tags: ['SDK', 'Software Development Kit', 'MachineAccountClassify', 'V1MachineAccountClassify']
---

# MachineAccountClassifyAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-classify-machine-account-v1**](#send-classify-machine-account-v1) | **Post** `/accounts/v1/{id}/classify` | Classify single machine account


## send-classify-machine-account-v1
Classify single machine account
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-classify-machine-account-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSendClassifyMachineAccountV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **classificationMode** | **string** | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. | [default to &quot;default&quot;]

### Return type

[**SendClassifyMachineAccountV1200Response**](../models/send-classify-machine-account-v1200-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/machine_account_classify"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Account ID. # string | Account ID.
    classificationMode := `forceMachine` // string | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default") # string | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountClassifyAPI.SendClassifyMachineAccountV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.MachineAccountClassifyAPI.SendClassifyMachineAccountV1(context.Background(), id).ClassificationMode(classificationMode).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountClassifyAPI.SendClassifyMachineAccountV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SendClassifyMachineAccountV1`: SendClassifyMachineAccountV1200Response
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountClassifyAPI.SendClassifyMachineAccountV1`: %v\n", resp)
}
```

[[Back to top]](#)

