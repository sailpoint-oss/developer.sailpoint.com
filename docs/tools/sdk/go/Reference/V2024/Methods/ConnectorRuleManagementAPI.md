---
id: v2024-connector-rule-management
title: ConnectorRuleManagement
pagination_label: ConnectorRuleManagement
sidebar_label: ConnectorRuleManagement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorRuleManagement', 'V2024ConnectorRuleManagement'] 
slug: /tools/sdk/go/v2024/methods/connector-rule-management
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleManagement', 'V2024ConnectorRuleManagement']
---

# \ConnectorRuleManagementAPI
  Use this API to implement connector rule management functionality. 
With this functionality in place, administrators can implement connector-executed rules in a programmatic, scalable way. 

In Identity Security Cloud (ISC), [rules](https://developer.sailpoint.com/docs/extensibility/rules) serve as a flexible configuration framework you can leverage to perform complex or advanced configurations. 
[Connector-executed rules](https://developer.sailpoint.com/docs/extensibility/rules/connector-rules) are rules that are executed in the ISC virtual appliance (VA), usually extensions of the [connector](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) itself, the bridge between the data source and ISC. 

This API allows administrators to view existing connector-executed rules, make changes to them, delete them, and create new ones from the available types.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-rule**](#create-connector-rule) | **Post** `/connector-rules` | Create Connector Rule
[**delete-connector-rule**](#delete-connector-rule) | **Delete** `/connector-rules/{id}` | Delete Connector Rule
[**get-connector-rule**](#get-connector-rule) | **Get** `/connector-rules/{id}` | Get Connector Rule
[**get-connector-rule-list**](#get-connector-rule-list) | **Get** `/connector-rules` | List Connector Rules
[**put-connector-rule**](#put-connector-rule) | **Put** `/connector-rules/{id}` | Update Connector Rule
[**test-connector-rule**](#test-connector-rule) | **Post** `/connector-rules/validate` | Validate Connector Rule


## create-connector-rule
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create Connector Rule
Create a connector rule from the available types.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-connector-rule)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateConnectorRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **connectorRuleCreateRequest** | [**ConnectorRuleCreateRequest**](../models/connector-rule-create-request) | Connector rule to create. | 

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    connectorRuleCreateRequest := fmt.Sprintf(`{
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
        }`) # ConnectorRuleCreateRequest | Connector rule to create.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorRuleManagementAPI.CreateConnectorRule(context.Background()).XSailPointExperimental(xSailPointExperimental).ConnectorRuleCreateRequest(connectorRuleCreateRequest).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete Connector Rule
Delete the connector rule for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-connector-rule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector rule to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConnectorRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | ID of the connector rule to delete. # string | ID of the connector rule to delete.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.ConnectorRuleManagementAPI.DeleteConnectorRule(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.DeleteConnectorRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-connector-rule
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Connector Rule
Get a connector rule by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-connector-rule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector rule to get. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | ID of the connector rule to get. # string | ID of the connector rule to get.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorRuleManagementAPI.GetConnectorRule(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Connector Rules
List existing connector rules.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-connector-rule-list)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorRuleListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 50 # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorRuleManagementAPI.GetConnectorRuleList(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.GetConnectorRuleList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConnectorRuleList`: []ConnectorRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.GetConnectorRuleList`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-rule
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update Connector Rule
Update an existing connector rule with the one provided in the request body. These fields are immutable: `id`, `name`, `type`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-connector-rule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector rule to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **connectorRuleUpdateRequest** | [**ConnectorRuleUpdateRequest**](../models/connector-rule-update-request) | Connector rule with updated data. | 

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | ID of the connector rule to update. # string | ID of the connector rule to update.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    connectorRuleUpdateRequest := fmt.Sprintf(`{
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
        }`) # ConnectorRuleUpdateRequest | Connector rule with updated data. (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorRuleManagementAPI.PutConnectorRule(context.Background(), id).XSailPointExperimental(xSailPointExperimental).ConnectorRuleUpdateRequest(connectorRuleUpdateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.PutConnectorRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutConnectorRule`: ConnectorRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.PutConnectorRule`: %v\n", resp)
}
```

[[Back to top]](#)

## test-connector-rule
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Validate Connector Rule
Detect issues within the connector rule's code to fix and list them.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/test-connector-rule)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTestConnectorRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceCode** | [**SourceCode**](../models/source-code) | Code to validate. | 

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sourceCode := fmt.Sprintf(`{
          "version" : "1.0",
          "script" : "return \"Mr. \" + firstName;"
        }`) # SourceCode | Code to validate.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorRuleManagementAPI.TestConnectorRule(context.Background()).XSailPointExperimental(xSailPointExperimental).SourceCode(sourceCode).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.TestConnectorRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TestConnectorRule`: ConnectorRuleValidationResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.TestConnectorRule`: %v\n", resp)
}
```

[[Back to top]](#)

