---
id: v2024-branding
title: Branding
pagination_label: Branding
sidebar_label: Branding
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Branding', 'V2024Branding'] 
slug: /tools/sdk/go/v2024/methods/branding
tags: ['SDK', 'Software Development Kit', 'Branding', 'V2024Branding']
---

# BrandingAPI
  Use this API to implement and customize branding functionality. 
With this functionality in place, administrators can get and manage existing branding items, and they can also create new branding items and configure them for use throughout Identity Security Cloud. 
The Branding APIs provide administrators with a way to customize branding items. 
This customization includes details like their colors, logos, and other information. 
Refer to [Certifications](https://documentation.sailpoint.com/saas/user-help/certifications.html) for more information about certifications.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-branding-item**](#create-branding-item) | **Post** `/brandings` | Create a branding item
[**delete-branding**](#delete-branding) | **Delete** `/brandings/{name}` | Delete a branding item
[**get-branding**](#get-branding) | **Get** `/brandings/{name}` | Get a branding item
[**get-branding-list**](#get-branding-list) | **Get** `/brandings` | List of branding items
[**set-branding-item**](#set-branding-item) | **Put** `/brandings/{name}` | Update a branding item


## create-branding-item
Create a branding item
This API endpoint creates a branding item.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-branding-item)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateBrandingItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string** | name of branding item | 
 **productName** | **string** | product name | 
 **actionButtonColor** | **string** | hex value of color for action button | 
 **activeLinkColor** | **string** | hex value of color for link | 
 **navigationColor** | **string** | hex value of color for navigation bar | 
 **emailFromAddress** | **string** | email from address | 
 **loginInformationalMessage** | **string** | login information message | 
 **fileStandard** | ***os.File** | png file with logo | 

### Return type

[**BrandingItem**](../models/branding-item)

### HTTP request headers

- **Content-Type**: multipart/form-data
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
    name := `name_example` // string | name of branding item # string | name of branding item
    productName := `productName_example` // string | product name # string | product name
    actionButtonColor := `actionButtonColor_example` // string | hex value of color for action button (optional) # string | hex value of color for action button (optional)
    activeLinkColor := `activeLinkColor_example` // string | hex value of color for link (optional) # string | hex value of color for link (optional)
    navigationColor := `navigationColor_example` // string | hex value of color for navigation bar (optional) # string | hex value of color for navigation bar (optional)
    emailFromAddress := `emailFromAddress_example` // string | email from address (optional) # string | email from address (optional)
    loginInformationalMessage := `loginInformationalMessage_example` // string | login information message (optional) # string | login information message (optional)
    fileStandard := BINARY_DATA_HERE // *os.File | png file with logo (optional) # *os.File | png file with logo (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.BrandingAPI.CreateBrandingItem(context.Background()).Name(name).ProductName(productName).Execute()
	//resp, r, err := apiClient.V2024.BrandingAPI.CreateBrandingItem(context.Background()).Name(name).ProductName(productName).ActionButtonColor(actionButtonColor).ActiveLinkColor(activeLinkColor).NavigationColor(navigationColor).EmailFromAddress(emailFromAddress).LoginInformationalMessage(loginInformationalMessage).FileStandard(fileStandard).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BrandingAPI.CreateBrandingItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateBrandingItem`: BrandingItem
	fmt.Fprintf(os.Stdout, "Response from `BrandingAPI.CreateBrandingItem`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-branding
Delete a branding item
This API endpoint delete information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-branding)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The name of the branding item to be deleted | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBrandingRequest struct via the builder pattern


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
    name := `default` // string | The name of the branding item to be deleted # string | The name of the branding item to be deleted

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.BrandingAPI.DeleteBranding(context.Background(), name).Execute()
	//r, err := apiClient.V2024.BrandingAPI.DeleteBranding(context.Background(), name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BrandingAPI.DeleteBranding``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-branding
Get a branding item
This API endpoint retrieves information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-branding)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The name of the branding item to be retrieved | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBrandingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**BrandingItem**](../models/branding-item)

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
    name := `default` // string | The name of the branding item to be retrieved # string | The name of the branding item to be retrieved

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.BrandingAPI.GetBranding(context.Background(), name).Execute()
	//resp, r, err := apiClient.V2024.BrandingAPI.GetBranding(context.Background(), name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BrandingAPI.GetBranding``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBranding`: BrandingItem
	fmt.Fprintf(os.Stdout, "Response from `BrandingAPI.GetBranding`: %v\n", resp)
}
```

[[Back to top]](#)

## get-branding-list
List of branding items
This API endpoint returns a list of branding items.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-branding-list)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetBrandingListRequest struct via the builder pattern


### Return type

[**[]BrandingItem**](../models/branding-item)

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
    resp, r, err := apiClient.V2024.BrandingAPI.GetBrandingList(context.Background()).Execute()
	//resp, r, err := apiClient.V2024.BrandingAPI.GetBrandingList(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BrandingAPI.GetBrandingList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBrandingList`: []BrandingItem
	fmt.Fprintf(os.Stdout, "Response from `BrandingAPI.GetBrandingList`: %v\n", resp)
}
```

[[Back to top]](#)

## set-branding-item
Update a branding item
This API endpoint updates information for an existing branding item.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-branding-item)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The name of the branding item to be retrieved | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetBrandingItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **name2** | **string** | name of branding item | 
 **productName** | **string** | product name | 
 **actionButtonColor** | **string** | hex value of color for action button | 
 **activeLinkColor** | **string** | hex value of color for link | 
 **navigationColor** | **string** | hex value of color for navigation bar | 
 **emailFromAddress** | **string** | email from address | 
 **loginInformationalMessage** | **string** | login information message | 
 **fileStandard** | ***os.File** | png file with logo | 

### Return type

[**BrandingItem**](../models/branding-item)

### HTTP request headers

- **Content-Type**: multipart/form-data
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
    name := `default` // string | The name of the branding item to be retrieved # string | The name of the branding item to be retrieved
    name2 := `name_example` // string | name of branding item # string | name of branding item
    productName := `productName_example` // string | product name # string | product name
    actionButtonColor := `actionButtonColor_example` // string | hex value of color for action button (optional) # string | hex value of color for action button (optional)
    activeLinkColor := `activeLinkColor_example` // string | hex value of color for link (optional) # string | hex value of color for link (optional)
    navigationColor := `navigationColor_example` // string | hex value of color for navigation bar (optional) # string | hex value of color for navigation bar (optional)
    emailFromAddress := `emailFromAddress_example` // string | email from address (optional) # string | email from address (optional)
    loginInformationalMessage := `loginInformationalMessage_example` // string | login information message (optional) # string | login information message (optional)
    fileStandard := BINARY_DATA_HERE // *os.File | png file with logo (optional) # *os.File | png file with logo (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.BrandingAPI.SetBrandingItem(context.Background(), name).Name2(name2).ProductName(productName).Execute()
	//resp, r, err := apiClient.V2024.BrandingAPI.SetBrandingItem(context.Background(), name).Name2(name2).ProductName(productName).ActionButtonColor(actionButtonColor).ActiveLinkColor(activeLinkColor).NavigationColor(navigationColor).EmailFromAddress(emailFromAddress).LoginInformationalMessage(loginInformationalMessage).FileStandard(fileStandard).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BrandingAPI.SetBrandingItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SetBrandingItem`: BrandingItem
	fmt.Fprintf(os.Stdout, "Response from `BrandingAPI.SetBrandingItem`: %v\n", resp)
}
```

[[Back to top]](#)

