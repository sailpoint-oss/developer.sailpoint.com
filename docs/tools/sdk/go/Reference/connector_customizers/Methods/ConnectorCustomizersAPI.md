---
id: v1-connector-customizers
title: ConnectorCustomizers
pagination_label: ConnectorCustomizers
sidebar_label: ConnectorCustomizers
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorCustomizers', 'V1ConnectorCustomizers'] 
slug: /tools/sdk/go/connectorcustomizers/methods/connector-customizers
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizers', 'V1ConnectorCustomizers']
---

# ConnectorCustomizersAPI
  Saas Connectivity Customizers are cloud-based connector customizers. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors.

Use these APIs to implement connector customizers functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-customizer-v1**](#create-connector-customizer-v1) | **Post** `/connector-customizers/v1` | Create connector customizer
[**create-connector-customizer-version-v1**](#create-connector-customizer-version-v1) | **Post** `/connector-customizers/v1/{id}/versions` | Creates a connector customizer version
[**delete-connector-customizer-v1**](#delete-connector-customizer-v1) | **Delete** `/connector-customizers/v1/{id}` | Delete connector customizer
[**get-connector-customizer-v1**](#get-connector-customizer-v1) | **Get** `/connector-customizers/v1/{id}` | Get connector customizer
[**list-connector-customizers-v1**](#list-connector-customizers-v1) | **Get** `/connector-customizers/v1` | List all connector customizers
[**put-connector-customizer-v1**](#put-connector-customizer-v1) | **Put** `/connector-customizers/v1/{id}` | Update connector customizer


## create-connector-customizer-v1
Create connector customizer
Create a connector customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-connector-customizer-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateConnectorCustomizerV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorcustomizercreaterequest** | [**Connectorcustomizercreaterequest**](../models/connectorcustomizercreaterequest) | Connector customizer to create. | 

### Return type

[**Connectorcustomizercreateresponse**](../models/connectorcustomizercreateresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/connector_customizers"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connector_customizers"
)

func main() {
    connectorcustomizercreaterequest := []byte(``) // Connectorcustomizercreaterequest | Connector customizer to create.

    var connectorcustomizercreaterequest v1.Connectorcustomizercreaterequest
    if err := json.Unmarshal(connectorcustomizercreaterequest, &connectorcustomizercreaterequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorCustomizersAPI.CreateConnectorCustomizerV1(context.Background()).Connectorcustomizercreaterequest(connectorcustomizercreaterequest).Execute()
	  //resp, r, err := apiClient.ConnectorCustomizersAPI.CreateConnectorCustomizerV1(context.Background()).Connectorcustomizercreaterequest(connectorcustomizercreaterequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.CreateConnectorCustomizerV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateConnectorCustomizerV1`: Connectorcustomizercreateresponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorCustomizersAPI.CreateConnectorCustomizerV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-connector-customizer-version-v1
Creates a connector customizer version
Creates a new version for the customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-connector-customizer-version-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the connector customizer. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateConnectorCustomizerVersionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Connectorcustomizerversioncreateresponse**](../models/connectorcustomizerversioncreateresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connector_customizers"
)

func main() {
    id := `b07dc46a-1498-4de8-bfbb-259a68e70c8a` // string | The id of the connector customizer. # string | The id of the connector customizer.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorCustomizersAPI.CreateConnectorCustomizerVersionV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ConnectorCustomizersAPI.CreateConnectorCustomizerVersionV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.CreateConnectorCustomizerVersionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateConnectorCustomizerVersionV1`: Connectorcustomizerversioncreateresponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorCustomizersAPI.CreateConnectorCustomizerVersionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-connector-customizer-v1
Delete connector customizer
Delete the connector customizer for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-connector-customizer-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector customizer to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConnectorCustomizerV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connector_customizers"
)

func main() {
    id := `b07dc46a-1498-4de8-bfbb-259a68e70c8a` // string | ID of the connector customizer to delete. # string | ID of the connector customizer to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ConnectorCustomizersAPI.DeleteConnectorCustomizerV1(context.Background(), id).Execute()
	  //r, err := apiClient.ConnectorCustomizersAPI.DeleteConnectorCustomizerV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.DeleteConnectorCustomizerV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-connector-customizer-v1
Get connector customizer
Gets connector customizer by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-customizer-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector customizer to get. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorCustomizerV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Connectorcustomizersresponse**](../models/connectorcustomizersresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connector_customizers"
)

func main() {
    id := `b07dc46a-1498-4de8-bfbb-259a68e70c8a` // string | ID of the connector customizer to get. # string | ID of the connector customizer to get.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorCustomizersAPI.GetConnectorCustomizerV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ConnectorCustomizersAPI.GetConnectorCustomizerV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.GetConnectorCustomizerV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorCustomizerV1`: Connectorcustomizersresponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorCustomizersAPI.GetConnectorCustomizerV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-connector-customizers-v1
List all connector customizers
List all connector customizers.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-connector-customizers-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListConnectorCustomizersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]

### Return type

[**[]Connectorcustomizersresponse**](../models/connectorcustomizersresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connector_customizers"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorCustomizersAPI.ListConnectorCustomizersV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ConnectorCustomizersAPI.ListConnectorCustomizersV1(context.Background()).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.ListConnectorCustomizersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListConnectorCustomizersV1`: []Connectorcustomizersresponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorCustomizersAPI.ListConnectorCustomizersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-customizer-v1
Update connector customizer
Update an existing connector customizer with the one provided in the request body. These fields are immutable: `id`, `name`, `type`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-customizer-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector customizer to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorCustomizerV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **connectorcustomizerupdaterequest** | [**Connectorcustomizerupdaterequest**](../models/connectorcustomizerupdaterequest) | Connector rule with updated data. | 

### Return type

[**Connectorcustomizerupdateresponse**](../models/connectorcustomizerupdateresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connector_customizers"
)

func main() {
    id := `b07dc46a-1498-4de8-bfbb-259a68e70c8a` // string | ID of the connector customizer to update. # string | ID of the connector customizer to update.
    connectorcustomizerupdaterequest := []byte(``) // Connectorcustomizerupdaterequest | Connector rule with updated data. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorCustomizersAPI.PutConnectorCustomizerV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ConnectorCustomizersAPI.PutConnectorCustomizerV1(context.Background(), id).Connectorcustomizerupdaterequest(connectorcustomizerupdaterequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorCustomizersAPI.PutConnectorCustomizerV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutConnectorCustomizerV1`: Connectorcustomizerupdateresponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorCustomizersAPI.PutConnectorCustomizerV1`: %v\n", resp)
}
```

[[Back to top]](#)

