---
id: beta-iai-message-catalogs
title: IAIMessageCatalogs
pagination_label: IAIMessageCatalogs
sidebar_label: IAIMessageCatalogs
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAIMessageCatalogs', 'BetaIAIMessageCatalogs'] 
slug: /tools/sdk/go/beta/methods/iai-message-catalogs
tags: ['SDK', 'Software Development Kit', 'IAIMessageCatalogs', 'BetaIAIMessageCatalogs']
---

# \IAIMessageCatalogsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-message-catalogs**](#get-message-catalogs) | **Get** `/translation-catalogs/{catalog-id}` | Get Message catalogs


## get-message-catalogs
Get Message catalogs
The getMessageCatalogs API returns message catalog based on the language headers in the requested object.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-message-catalogs)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**catalogId** | **string** | The ID of the message catalog. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMessageCatalogsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]MessageCatalogDto**](../models/message-catalog-dto)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    catalogId := recommender # string | The ID of the message catalog. # string | The ID of the message catalog.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.IAIMessageCatalogsAPI.GetMessageCatalogs(context.Background(), catalogId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIMessageCatalogsAPI.GetMessageCatalogs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMessageCatalogs`: []MessageCatalogDto
	fmt.Fprintf(os.Stdout, "Response from `IAIMessageCatalogsAPI.GetMessageCatalogs`: %v\n", resp)
}
```

[[Back to top]](#)

