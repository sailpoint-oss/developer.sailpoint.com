# PrivilegeCriteria

# PrivilegeCriteriaAPI
  Use this API to create, retrieve, update, and delete privilege criteria.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-privilege-criteria-v1**](#create-custom-privilege-criteria-v1) | **Post** `/criteria/v1/privilege` | Create custom privilege criteria
[**delete-custom-privilege-criteria-v1**](#delete-custom-privilege-criteria-v1) | **Delete** `/criteria/v1/privilege/{criteriaId}` | Delete privilege criteria
[**get-privilege-criteria-v1**](#get-privilege-criteria-v1) | **Get** `/criteria/v1/privilege/{criteriaId}` | Get privilege criteria
[**list-privilege-criteria-v1**](#list-privilege-criteria-v1) | **Get** `/criteria/v1/privilege` | List privilege criteria
[**put-custom-privilege-criteria-value-v1**](#put-custom-privilege-criteria-value-v1) | **Put** `/criteria/v1/privilege/{criteriaId}` | Update privilege criteria


## create-custom-privilege-criteria-v1
Create custom privilege criteria
Use this API to create a custom privilege criteria

[API Spec](https://developer.sailpoint.com/docs/api/create-custom-privilege-criteria-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomPrivilegeCriteriaV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPrivilegeCriteriaRequest** | [**CreatePrivilegeCriteriaRequest**](../models/create-privilege-criteria-request) | Create custom privilege criteria request body. | 

### Return type

[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

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
    privilege_criteria "github.com/sailpoint-oss/golang-sdk/v3/privilege_criteria"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    createprivilegecriteriarequestJson := []byte(`{
          "sourceId" : "c42c45d8d7c04d2da64d215cd8c32f21",
          "privilegeLevel" : "HIGH",
          "groups" : [ {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "displayName"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "displayName"
            } ],
            "operator" : "AND"
          }, {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "displayName"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "displayName"
            } ],
            "operator" : "AND"
          } ],
          "type" : "CUSTOM",
          "operator" : "AND"
        }`) // CreatePrivilegeCriteriaRequest | Create custom privilege criteria request body.

    var createPrivilegeCriteriaRequest privilege_criteria.CreatePrivilegeCriteriaRequest
    if err := json.Unmarshal(createprivilegecriteriarequestJson, &createPrivilegeCriteriaRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PrivilegeCriteriaAPI.CreateCustomPrivilegeCriteriaV1(context.Background()).CreatePrivilegeCriteriaRequest(createPrivilegeCriteriaRequest).Execute()
	  //resp, r, err := apiClient.PrivilegeCriteriaAPI.CreateCustomPrivilegeCriteriaV1(context.Background()).CreatePrivilegeCriteriaRequest(createPrivilegeCriteriaRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaAPI.CreateCustomPrivilegeCriteriaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCustomPrivilegeCriteriaV1`: PrivilegeCriteriaDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaAPI.CreateCustomPrivilegeCriteriaV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-custom-privilege-criteria-v1
Delete privilege criteria
Use this API to delete a specific custom privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/delete-custom-privilege-criteria-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**criteriaId** | **string** | The Id of the custom privilege criteria to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomPrivilegeCriteriaV1Request struct via the builder pattern


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
    criteriaId := `6d123044-5834-4e8d-a49f-9c70089b0de1` // string | The Id of the custom privilege criteria to delete. # string | The Id of the custom privilege criteria to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.PrivilegeCriteriaAPI.DeleteCustomPrivilegeCriteriaV1(context.Background(), criteriaId).Execute()
	  //r, err := apiClient.PrivilegeCriteriaAPI.DeleteCustomPrivilegeCriteriaV1(context.Background(), criteriaId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaAPI.DeleteCustomPrivilegeCriteriaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-privilege-criteria-v1
Get privilege criteria
Use this API to get a specific privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/get-privilege-criteria-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**criteriaId** | **string** | The Id of the privilege criteria record to return. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPrivilegeCriteriaV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

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
    criteriaId := `6d123044-5834-4e8d-a49f-9c70089b0de1` // string | The Id of the privilege criteria record to return. # string | The Id of the privilege criteria record to return.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PrivilegeCriteriaAPI.GetPrivilegeCriteriaV1(context.Background(), criteriaId).Execute()
	  //resp, r, err := apiClient.PrivilegeCriteriaAPI.GetPrivilegeCriteriaV1(context.Background(), criteriaId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaAPI.GetPrivilegeCriteriaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPrivilegeCriteriaV1`: PrivilegeCriteriaDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaAPI.GetPrivilegeCriteriaV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-privilege-criteria-v1
List privilege criteria
Use this API to list all privilege criteria matching a filter

[API Spec](https://developer.sailpoint.com/docs/api/list-privilege-criteria-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPrivilegeCriteriaV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;type eq \&quot;CUSTOM\&quot; and sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60; | 

### Return type

[**[]PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

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
    filters := `type eq "CUSTOM" and sourceId eq "c42c45d8d7c04d2da64d215cd8c32f21"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=type eq \"CUSTOM\" and sourceId eq \"2c91809175e6c63f0175fb5570220569\"` # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=type eq \"CUSTOM\" and sourceId eq \"2c91809175e6c63f0175fb5570220569\"`

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PrivilegeCriteriaAPI.ListPrivilegeCriteriaV1(context.Background()).Filters(filters).Execute()
	  //resp, r, err := apiClient.PrivilegeCriteriaAPI.ListPrivilegeCriteriaV1(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaAPI.ListPrivilegeCriteriaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPrivilegeCriteriaV1`: []PrivilegeCriteriaDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaAPI.ListPrivilegeCriteriaV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-custom-privilege-criteria-value-v1
Update privilege criteria
Use this API to update a specific custom privilege criteria by overwriting the information with new information.

[API Spec](https://developer.sailpoint.com/docs/api/put-custom-privilege-criteria-value-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**criteriaId** | **string** | The Id of the privilege criteria record to return. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCustomPrivilegeCriteriaValueV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **privilegeCriteriaDTO** | [**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto) | The new version of the custom privilege criteria. This overwrites the existing privilege criteria. | 

### Return type

[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

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
    privilege_criteria "github.com/sailpoint-oss/golang-sdk/v3/privilege_criteria"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    criteriaId := `6d123044-5834-4e8d-a49f-9c70089b0de1` // string | The Id of the privilege criteria record to return. # string | The Id of the privilege criteria record to return.
    privilegecriteriadtoJson := []byte(`{
          "sourceId" : "c42c45d8d7c04d2da64d215cd8c32f21",
          "privilegeLevel" : "HIGH",
          "groups" : [ {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "displayName",
              "targetType" : "group",
              "operator" : "IN"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "displayName",
              "targetType" : "group",
              "operator" : "IN"
            } ],
            "operator" : "AND"
          }, {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "displayName",
              "targetType" : "group",
              "operator" : "IN"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "displayName",
              "targetType" : "group",
              "operator" : "IN"
            } ],
            "operator" : "AND"
          } ],
          "id" : "2c9180867817ac4d017817c491119a20",
          "type" : "CUSTOM",
          "operator" : "AND"
        }`) // PrivilegeCriteriaDTO | The new version of the custom privilege criteria. This overwrites the existing privilege criteria.

    var privilegeCriteriaDTO privilege_criteria.PrivilegeCriteriaDTO
    if err := json.Unmarshal(privilegecriteriadtoJson, &privilegeCriteriaDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PrivilegeCriteriaAPI.PutCustomPrivilegeCriteriaValueV1(context.Background(), criteriaId).PrivilegeCriteriaDTO(privilegeCriteriaDTO).Execute()
	  //resp, r, err := apiClient.PrivilegeCriteriaAPI.PutCustomPrivilegeCriteriaValueV1(context.Background(), criteriaId).PrivilegeCriteriaDTO(privilegeCriteriaDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaAPI.PutCustomPrivilegeCriteriaValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCustomPrivilegeCriteriaValueV1`: PrivilegeCriteriaDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaAPI.PutCustomPrivilegeCriteriaValueV1`: %v\n", resp)
}
```

[[Back to top]](#)

