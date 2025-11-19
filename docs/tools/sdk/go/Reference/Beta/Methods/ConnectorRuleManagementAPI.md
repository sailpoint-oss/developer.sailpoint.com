---
id: beta-connector-rule-management
title: ConnectorRuleManagement
pagination_label: ConnectorRuleManagement
sidebar_label: ConnectorRuleManagement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorRuleManagement', 'BetaConnectorRuleManagement'] 
slug: /tools/sdk/go/beta/methods/connector-rule-management
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleManagement', 'BetaConnectorRuleManagement']
---

# ConnectorRuleManagementAPI
  Use this API to implement connector rule management functionality. 
With this functionality in place, administrators can implement connector-executed rules in a programmatic, scalable way. 

In Identity Security Cloud (ISC), [rules](https://developer.sailpoint.com/docs/extensibility/rules) serve as a flexible configuration framework you can leverage to perform complex or advanced configurations. 
[Connector-executed rules](https://developer.sailpoint.com/docs/extensibility/rules/connector-rules) are rules that are executed in the ISC virtual appliance (VA), usually extensions of the [connector](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) itself, the bridge between the data source and ISC. 
This API allows administrators to view existing connector-executed rules, make changes to them, delete them, and create new ones from the available types.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-rule**](#create-connector-rule) | **Post** `/connector-rules` | Create connector rule
[**delete-connector-rule**](#delete-connector-rule) | **Delete** `/connector-rules/{id}` | Delete a connector-rule
[**get-connector-rule**](#get-connector-rule) | **Get** `/connector-rules/{id}` | Connector-rule by id
[**get-connector-rule-list**](#get-connector-rule-list) | **Get** `/connector-rules` | List connector rules
[**update-connector-rule**](#update-connector-rule) | **Put** `/connector-rules/{id}` | Update a connector rule
[**validate-connector-rule**](#validate-connector-rule) | **Post** `/connector-rules/validate` | Validate connector rule


## create-connector-rule
Create connector rule
Creates a new connector rule.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-connector-rule)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateConnectorRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorRuleCreateRequest** | [**ConnectorRuleCreateRequest**](../models/connector-rule-create-request) | The connector rule to create | 

### Return type

[**ConnectorRuleResponse**](../models/connector-rule-response)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    connectorrulecreaterequest := []byte(`{
          "sourceCode" : {
            "version" : "1.0",
            "script" : "return \"Mr. \" + firstName;"
          },
          "signature" : {
            "output" : {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            },
            "input" : [ {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            }, {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            } ]
          },
          "name" : "WebServiceBeforeOperationRule",
          "description" : "This rule does that",
          "attributes" : { },
          "type" : "BuildMap"
        }`) // ConnectorRuleCreateRequest | The connector rule to create

    var connectorRuleCreateRequest beta.ConnectorRuleCreateRequest
    if err := json.Unmarshal(connectorrulecreaterequest, &connectorRuleCreateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.ConnectorRuleManagementAPI.CreateConnectorRule(context.Background()).ConnectorRuleCreateRequest(connectorRuleCreateRequest).Execute()
	  //resp, r, err := apiClient.Beta.ConnectorRuleManagementAPI.CreateConnectorRule(context.Background()).ConnectorRuleCreateRequest(connectorRuleCreateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.CreateConnectorRule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateConnectorRule`: ConnectorRuleResponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.CreateConnectorRule`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-connector-rule
Delete a connector-rule
Deletes the connector rule specified by the given ID.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-connector-rule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector rule to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConnectorRuleRequest struct via the builder pattern


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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | ID of the connector rule to delete # string | ID of the connector rule to delete

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.ConnectorRuleManagementAPI.DeleteConnectorRule(context.Background(), id).Execute()
	  //r, err := apiClient.Beta.ConnectorRuleManagementAPI.DeleteConnectorRule(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.DeleteConnectorRule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-connector-rule
Connector-rule by id
Returns the connector rule specified by ID.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-connector-rule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector rule to retrieve | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ConnectorRuleResponse**](../models/connector-rule-response)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | ID of the connector rule to retrieve # string | ID of the connector rule to retrieve

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.ConnectorRuleManagementAPI.GetConnectorRule(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.ConnectorRuleManagementAPI.GetConnectorRule(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.GetConnectorRule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorRule`: ConnectorRuleResponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.GetConnectorRule`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-rule-list
List connector rules
Returns the list of connector rules.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-connector-rule-list)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorRuleListRequest struct via the builder pattern


### Return type

[**[]ConnectorRuleResponse**](../models/connector-rule-response)

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
    resp, r, err := apiClient.Beta.ConnectorRuleManagementAPI.GetConnectorRuleList(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.ConnectorRuleManagementAPI.GetConnectorRuleList(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.GetConnectorRuleList``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorRuleList`: []ConnectorRuleResponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.GetConnectorRuleList`: %v\n", resp)
}
```

[[Back to top]](#)

## update-connector-rule
Update a connector rule
Updates an existing connector rule with the one provided in the request body. Note that the fields 'id', 'name', and 'type' are immutable.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-connector-rule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector rule to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateConnectorRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **connectorRuleUpdateRequest** | [**ConnectorRuleUpdateRequest**](../models/connector-rule-update-request) | The connector rule with updated data | 

### Return type

[**ConnectorRuleResponse**](../models/connector-rule-response)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | ID of the connector rule to update # string | ID of the connector rule to update
    connectorruleupdaterequest := []byte(`{
          "sourceCode" : {
            "version" : "1.0",
            "script" : "return \"Mr. \" + firstName;"
          },
          "signature" : {
            "output" : {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            },
            "input" : [ {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            }, {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            } ]
          },
          "name" : "WebServiceBeforeOperationRule",
          "description" : "This rule does that",
          "attributes" : { },
          "id" : "8113d48c0b914f17b4c6072d4dcb9dfe",
          "type" : "BuildMap"
        }`) // ConnectorRuleUpdateRequest | The connector rule with updated data (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.ConnectorRuleManagementAPI.UpdateConnectorRule(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.ConnectorRuleManagementAPI.UpdateConnectorRule(context.Background(), id).ConnectorRuleUpdateRequest(connectorRuleUpdateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.UpdateConnectorRule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateConnectorRule`: ConnectorRuleResponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.UpdateConnectorRule`: %v\n", resp)
}
```

[[Back to top]](#)

## validate-connector-rule
Validate connector rule
Returns a list of issues within the code to fix, if any.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/validate-connector-rule)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiValidateConnectorRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceCode** | [**SourceCode**](../models/source-code) | The code to validate | 

### Return type

[**ConnectorRuleValidationResponse**](../models/connector-rule-validation-response)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourcecode := []byte(`{
          "version" : "1.0",
          "script" : "return \"Mr. \" + firstName;"
        }`) // SourceCode | The code to validate

    var sourceCode beta.SourceCode
    if err := json.Unmarshal(sourcecode, &sourceCode); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.ConnectorRuleManagementAPI.ValidateConnectorRule(context.Background()).SourceCode(sourceCode).Execute()
	  //resp, r, err := apiClient.Beta.ConnectorRuleManagementAPI.ValidateConnectorRule(context.Background()).SourceCode(sourceCode).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.ValidateConnectorRule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateConnectorRule`: ConnectorRuleValidationResponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.ValidateConnectorRule`: %v\n", resp)
}
```

[[Back to top]](#)

