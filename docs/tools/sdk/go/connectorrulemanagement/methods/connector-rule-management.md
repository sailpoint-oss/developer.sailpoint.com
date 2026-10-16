# ConnectorRuleManagement

# ConnectorRuleManagementAPI
  Use this API to implement connector rule management functionality. 
With this functionality in place, administrators can implement connector-executed rules in a programmatic, scalable way. 

In Identity Security Cloud (ISC), [rules](https://developer.sailpoint.com/docs/extensibility/rules) serve as a flexible configuration framework you can leverage to perform complex or advanced configurations. 
[Connector-executed rules](https://developer.sailpoint.com/docs/extensibility/rules/connector-rules) are rules that are executed in the ISC virtual appliance (VA), usually extensions of the [connector](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) itself, the bridge between the data source and ISC. 

This API allows administrators to view existing connector-executed rules, make changes to them, delete them, and create new ones from the available types.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-rule-v1**](#create-connector-rule-v1) | **Post** `/connector-rules/v1` | Create connector rule
[**delete-connector-rule-v1**](#delete-connector-rule-v1) | **Delete** `/connector-rules/v1/{id}` | Delete connector rule
[**get-connector-rule-list-v1**](#get-connector-rule-list-v1) | **Get** `/connector-rules/v1` | List connector rules
[**get-connector-rule-v1**](#get-connector-rule-v1) | **Get** `/connector-rules/v1/{id}` | Get connector rule
[**put-connector-rule-v1**](#put-connector-rule-v1) | **Put** `/connector-rules/v1/{id}` | Update connector rule
[**test-connector-rule-v1**](#test-connector-rule-v1) | **Post** `/connector-rules/v1/validate` | Validate connector rule


## create-connector-rule-v1
Create connector rule
Create a connector rule from the available types.

[API Spec](https://developer.sailpoint.com/docs/api/create-connector-rule-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateConnectorRuleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  "encoding/json"
    connector_rule_management "github.com/sailpoint-oss/golang-sdk/v3/connector_rule_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    connectorrulecreaterequestJson := []byte(`{
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
        }`) // ConnectorRuleCreateRequest | Connector rule to create.

    var connectorRuleCreateRequest connector_rule_management.ConnectorRuleCreateRequest
    if err := json.Unmarshal(connectorrulecreaterequestJson, &connectorRuleCreateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorRuleManagementAPI.CreateConnectorRuleV1(context.Background()).ConnectorRuleCreateRequest(connectorRuleCreateRequest).Execute()
	  //resp, r, err := apiClient.ConnectorRuleManagementAPI.CreateConnectorRuleV1(context.Background()).ConnectorRuleCreateRequest(connectorRuleCreateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.CreateConnectorRuleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateConnectorRuleV1`: ConnectorRuleResponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.CreateConnectorRuleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-connector-rule-v1
Delete connector rule
Delete the connector rule for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-connector-rule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector rule to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConnectorRuleV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | ID of the connector rule to delete. # string | ID of the connector rule to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ConnectorRuleManagementAPI.DeleteConnectorRuleV1(context.Background(), id).Execute()
	  //r, err := apiClient.ConnectorRuleManagementAPI.DeleteConnectorRuleV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.DeleteConnectorRuleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-connector-rule-list-v1
List connector rules
List existing connector rules.

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-rule-list-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorRuleListV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorRuleManagementAPI.GetConnectorRuleListV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ConnectorRuleManagementAPI.GetConnectorRuleListV1(context.Background()).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.GetConnectorRuleListV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorRuleListV1`: []ConnectorRuleResponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.GetConnectorRuleListV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-rule-v1
Get connector rule
Get a connector rule by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-rule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector rule to get. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorRuleV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | ID of the connector rule to get. # string | ID of the connector rule to get.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorRuleManagementAPI.GetConnectorRuleV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ConnectorRuleManagementAPI.GetConnectorRuleV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.GetConnectorRuleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorRuleV1`: ConnectorRuleResponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.GetConnectorRuleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-rule-v1
Update connector rule
Update an existing connector rule with the one provided in the request body. These fields are immutable: `id`, `name`, `type`

[API Spec](https://developer.sailpoint.com/docs/api/put-connector-rule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the connector rule to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorRuleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | ID of the connector rule to update. # string | ID of the connector rule to update.
    connectorruleupdaterequestJson := []byte(`{
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
        }`) // ConnectorRuleUpdateRequest | Connector rule with updated data. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorRuleManagementAPI.PutConnectorRuleV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ConnectorRuleManagementAPI.PutConnectorRuleV1(context.Background(), id).ConnectorRuleUpdateRequest(connectorRuleUpdateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.PutConnectorRuleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutConnectorRuleV1`: ConnectorRuleResponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.PutConnectorRuleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## test-connector-rule-v1
Validate connector rule
Detect issues within the connector rule's code to fix and list them.

[API Spec](https://developer.sailpoint.com/docs/api/test-connector-rule-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTestConnectorRuleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  "encoding/json"
    connector_rule_management "github.com/sailpoint-oss/golang-sdk/v3/connector_rule_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourcecodeJson := []byte(`{
          "version" : "1.0",
          "script" : "return \"Mr. \" + firstName;"
        }`) // SourceCode | Code to validate.

    var sourceCode connector_rule_management.SourceCode
    if err := json.Unmarshal(sourcecodeJson, &sourceCode); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorRuleManagementAPI.TestConnectorRuleV1(context.Background()).SourceCode(sourceCode).Execute()
	  //resp, r, err := apiClient.ConnectorRuleManagementAPI.TestConnectorRuleV1(context.Background()).SourceCode(sourceCode).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorRuleManagementAPI.TestConnectorRuleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestConnectorRuleV1`: ConnectorRuleValidationResponse
    fmt.Fprintf(os.Stdout, "Response from `ConnectorRuleManagementAPI.TestConnectorRuleV1`: %v\n", resp)
}
```

[[Back to top]](#)

