---
id: v2025-connector-customizers
title: ConnectorCustomizers
pagination_label: ConnectorCustomizers
sidebar_label: ConnectorCustomizers
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorCustomizers', 'V2025ConnectorCustomizers'] 
slug: /tools/sdk/go/v2025/methods/connector-customizers
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizers', 'V2025ConnectorCustomizers']
---

# ConnectorCustomizersAPI
  Saas Connectivity Customizers are cloud-based connector customizers. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors.

Use these APIs to implement connector customizers functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-customizer**](#create-connector-customizer) | **Post** `/connector-customizers` | Create Connector Customizer
[**create-connector-customizer-version**](#create-connector-customizer-version) | **Post** `/connector-customizers/{id}/versions` | Creates a connector customizer version
[**delete-connector-customizer**](#delete-connector-customizer) | **Delete** `/connector-customizers/{id}` | Delete Connector Customizer
[**get-connector-customizer**](#get-connector-customizer) | **Get** `/connector-customizers/{id}` | Get connector customizer
[**list-connector-customizers**](#list-connector-customizers) | **Get** `/connector-customizers` | List All Connector Customizers
[**put-connector-customizer**](#put-connector-customizer) | **Put** `/connector-customizers/{id}` | Update Connector Customizer


## create-connector-customizer
Create Connector Customizer
Create a connector customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-connector-customizer)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateConnectorCustomizerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorCustomizerCreateRequest** | [**ConnectorCustomizerCreateRequest**](../models/connector-customizer-create-request) | Connector customizer to create. | 

### Return type

[**ConnectorCustomizerCreateResponse**](../models/connector-customizer-create-response)

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
    connectorcustomizercreaterequest := []byte(`{
          "name" : "My Custom Connector"
        }`) // ConnectorCustomizerCreateRequest | Connector customizer to create.

  
   var connectorCustomizerCreateRequest v2025.ConnectorCustomizerCreateRequest
   if err := json.Unmarshal(connectorcustomizercreaterequest, &connectorCustomizerCreateRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ConnectorCustomizersAPI.CreateConnectorCustomizer(context.Background()).ConnectorCustomizerCreateRequest(connectorCustomizerCreateRequest).Execute()
	//resp, r, err := apiClient.V2025.ConnectorCustomizersAPI.CreateConnectorCustomizer(context.Background()).ConnectorCustomizerCreateRequest(connectorCustomizerCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.CreateConnectorCustomizer``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateConnectorCustomizer`: ConnectorCustomizerCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorCustomizersAPI.CreateConnectorCustomizer`: %v\n", resp)
}
```

[[Back to top]](#)

## create-connector-customizer-version
Creates a connector customizer version
Creates a new version for the customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-connector-customizer-version)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the connector customizer. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateConnectorCustomizerVersionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ConnectorCustomizerVersionCreateResponse**](../models/connector-customizer-version-create-response)

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
    id := `b07dc46a-1498-4de8-bfbb-259a68e70c8a` // string | The id of the connector customizer. # string | The id of the connector customizer.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ConnectorCustomizersAPI.CreateConnectorCustomizerVersion(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.ConnectorCustomizersAPI.CreateConnectorCustomizerVersion(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.CreateConnectorCustomizerVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateConnectorCustomizerVersion`: ConnectorCustomizerVersionCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorCustomizersAPI.CreateConnectorCustomizerVersion`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-connector-customizer
Delete Connector Customizer
Delete the connector customizer for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-connector-customizer)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector customizer to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConnectorCustomizerRequest struct via the builder pattern


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
    id := `b07dc46a-1498-4de8-bfbb-259a68e70c8a` // string | ID of the connector customizer to delete. # string | ID of the connector customizer to delete.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.ConnectorCustomizersAPI.DeleteConnectorCustomizer(context.Background(), id).Execute()
	//r, err := apiClient.V2025.ConnectorCustomizersAPI.DeleteConnectorCustomizer(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.DeleteConnectorCustomizer``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-connector-customizer
Get connector customizer
Gets connector customizer by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector-customizer)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector customizer to get. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorCustomizerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ConnectorCustomizersResponse**](../models/connector-customizers-response)

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
    id := `b07dc46a-1498-4de8-bfbb-259a68e70c8a` // string | ID of the connector customizer to get. # string | ID of the connector customizer to get.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ConnectorCustomizersAPI.GetConnectorCustomizer(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.ConnectorCustomizersAPI.GetConnectorCustomizer(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.GetConnectorCustomizer``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConnectorCustomizer`: ConnectorCustomizersResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorCustomizersAPI.GetConnectorCustomizer`: %v\n", resp)
}
```

[[Back to top]](#)

## list-connector-customizers
List All Connector Customizers
List all connector customizers.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-connector-customizers)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListConnectorCustomizersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]

### Return type

[**[]ConnectorCustomizersResponse**](../models/connector-customizers-response)

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
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ConnectorCustomizersAPI.ListConnectorCustomizers(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.ConnectorCustomizersAPI.ListConnectorCustomizers(context.Background()).Offset(offset).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.ListConnectorCustomizers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListConnectorCustomizers`: []ConnectorCustomizersResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorCustomizersAPI.ListConnectorCustomizers`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-customizer
Update Connector Customizer
Update an existing connector customizer with the one provided in the request body. These fields are immutable: `id`, `name`, `type`.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-connector-customizer)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector customizer to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorCustomizerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **connectorCustomizerUpdateRequest** | [**ConnectorCustomizerUpdateRequest**](../models/connector-customizer-update-request) | Connector rule with updated data. | 

### Return type

[**ConnectorCustomizerUpdateResponse**](../models/connector-customizer-update-response)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `b07dc46a-1498-4de8-bfbb-259a68e70c8a` // string | ID of the connector customizer to update. # string | ID of the connector customizer to update.
    connectorcustomizerupdaterequest := []byte(`{
          "name" : "My Custom Connector"
        }`) // ConnectorCustomizerUpdateRequest | Connector rule with updated data. (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ConnectorCustomizersAPI.PutConnectorCustomizer(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.ConnectorCustomizersAPI.PutConnectorCustomizer(context.Background(), id).ConnectorCustomizerUpdateRequest(connectorCustomizerUpdateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.PutConnectorCustomizer``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutConnectorCustomizer`: ConnectorCustomizerUpdateResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorCustomizersAPI.PutConnectorCustomizer`: %v\n", resp)
}
```

[[Back to top]](#)

