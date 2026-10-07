# WorkReassignment

# WorkReassignmentAPI
  Use this API to implement work reassignment functionality.

Work Reassignment allows access request reviews, certifications, and manual provisioning tasks assigned to a user to be reassigned to a different user. This is primarily used for:

- Temporarily redirecting work for users who are out of office, such as on vacation or sick leave
- Permanently redirecting work for users who should not be assigned these tasks at all, such as senior executives or service identities

Users can define reassignments for themselves, managers can add them for their team members, and administrators can configure them on any user&#39;s behalf. Work assigned during the specified reassignment timeframes will be automatically reassigned to the designated user as it is created.

Refer to [Work Reassignment](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html) for more information about this topic.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-reassignment-configuration-v1**](#create-reassignment-configuration-v1) | **Post** `/reassignment-configurations/v1` | Create a reassignment configuration
[**delete-reassignment-configuration-v1**](#delete-reassignment-configuration-v1) | **Delete** `/reassignment-configurations/v1/{identityId}/{configType}` | Delete reassignment configuration
[**get-evaluate-reassignment-configuration-v1**](#get-evaluate-reassignment-configuration-v1) | **Get** `/reassignment-configurations/v1/{identityId}/evaluate/{configType}` | Evaluate reassignment configuration
[**get-reassignment-config-types-v1**](#get-reassignment-config-types-v1) | **Get** `/reassignment-configurations/v1/types` | List reassignment config types
[**get-reassignment-configuration-v1**](#get-reassignment-configuration-v1) | **Get** `/reassignment-configurations/v1/{identityId}` | Get reassignment configuration
[**get-tenant-config-configuration-v1**](#get-tenant-config-configuration-v1) | **Get** `/reassignment-configurations/v1/tenant-config` | Get tenant-wide reassignment configuration settings
[**list-reassignment-configurations-v1**](#list-reassignment-configurations-v1) | **Get** `/reassignment-configurations/v1` | List reassignment configurations
[**put-reassignment-config-v1**](#put-reassignment-config-v1) | **Put** `/reassignment-configurations/v1/{identityId}` | Update reassignment configuration
[**put-tenant-configuration-v1**](#put-tenant-configuration-v1) | **Put** `/reassignment-configurations/v1/tenant-config` | Update tenant-wide reassignment configuration settings


## create-reassignment-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create a reassignment configuration
Creates a new Reassignment Configuration for the specified identity.

[API Spec](https://developer.sailpoint.com/docs/api/create-reassignment-configuration-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateReassignmentConfigurationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **configurationItemRequest** | [**ConfigurationItemRequest**](../models/configuration-item-request) |  | 

### Return type

[**ConfigurationItemResponse**](../models/configuration-item-response)

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
    work_reassignment "github.com/sailpoint-oss/golang-sdk/v3/work_reassignment"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    configurationitemrequestJson := []byte(`{
          "endDate" : "2022-07-30T17:00:00Z",
          "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
          "configType" : "ACCESS_REQUESTS",
          "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
          "startDate" : "2022-07-21T11:13:12.345Z"
        }`) // ConfigurationItemRequest | 

    var configurationItemRequest work_reassignment.ConfigurationItemRequest
    if err := json.Unmarshal(configurationitemrequestJson, &configurationItemRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkReassignmentAPI.CreateReassignmentConfigurationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).ConfigurationItemRequest(configurationItemRequest).Execute()
	  //resp, r, err := apiClient.WorkReassignmentAPI.CreateReassignmentConfigurationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).ConfigurationItemRequest(configurationItemRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.CreateReassignmentConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateReassignmentConfigurationV1`: ConfigurationItemResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.CreateReassignmentConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-reassignment-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete reassignment configuration
Deletes a single reassignment configuration for the specified identity

[API Spec](https://developer.sailpoint.com/docs/api/delete-reassignment-configuration-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | unique identity id | 
**configType** | [**ConfigTypeEnum**](../models/) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReassignmentConfigurationV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    identityId := `2c91808781a71ddb0181b9090b5c504e` // string | unique identity id # string | unique identity id
    configType :=  // ConfigTypeEnum |  # ConfigTypeEnum | 
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.WorkReassignmentAPI.DeleteReassignmentConfigurationV1(context.Background(), identityId, configType).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.WorkReassignmentAPI.DeleteReassignmentConfigurationV1(context.Background(), identityId, configType).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.DeleteReassignmentConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-evaluate-reassignment-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Evaluate reassignment configuration
Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.

[API Spec](https://developer.sailpoint.com/docs/api/get-evaluate-reassignment-configuration-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | unique identity id | 
**configType** | [**ConfigTypeEnum**](../models/) | Reassignment work type | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEvaluateReassignmentConfigurationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **exclusionFilters** | **[]string** | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - &#x60;SELF_REVIEW_DELEGATION&#x60;: This will exclude delegations of self-review reassignments | 

### Return type

[**[]EvaluateResponse**](../models/evaluate-response)

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
    identityId := `2c91808781a71ddb0181b9090b5c504e` // string | unique identity id # string | unique identity id
    configType := accessRequests // ConfigTypeEnum | Reassignment work type # ConfigTypeEnum | Reassignment work type
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    exclusionfilters := []byte(`SELF_REVIEW_DELEGATION`) // []string | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkReassignmentAPI.GetEvaluateReassignmentConfigurationV1(context.Background(), identityId, configType).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.WorkReassignmentAPI.GetEvaluateReassignmentConfigurationV1(context.Background(), identityId, configType).XSailPointExperimental(xSailPointExperimental).ExclusionFilters(exclusionFilters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.GetEvaluateReassignmentConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEvaluateReassignmentConfigurationV1`: []EvaluateResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.GetEvaluateReassignmentConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-reassignment-config-types-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List reassignment config types
Gets a collection of types which are available in the Reassignment Configuration UI.

[API Spec](https://developer.sailpoint.com/docs/api/get-reassignment-config-types-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetReassignmentConfigTypesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**[]ConfigType**](../models/config-type)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkReassignmentAPI.GetReassignmentConfigTypesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.WorkReassignmentAPI.GetReassignmentConfigTypesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.GetReassignmentConfigTypesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReassignmentConfigTypesV1`: []ConfigType
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.GetReassignmentConfigTypesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-reassignment-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get reassignment configuration
Gets the Reassignment Configuration for an identity.

[API Spec](https://developer.sailpoint.com/docs/api/get-reassignment-configuration-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | unique identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReassignmentConfigurationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**ConfigurationResponse**](../models/configuration-response)

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
    identityId := `2c91808781a71ddb0181b9090b5c504f` // string | unique identity id # string | unique identity id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkReassignmentAPI.GetReassignmentConfigurationV1(context.Background(), identityId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.WorkReassignmentAPI.GetReassignmentConfigurationV1(context.Background(), identityId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.GetReassignmentConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReassignmentConfigurationV1`: ConfigurationResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.GetReassignmentConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-tenant-config-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get tenant-wide reassignment configuration settings
Gets the global Reassignment Configuration settings for the requestor's tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-config-configuration-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantConfigConfigurationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**TenantConfigurationResponse**](../models/tenant-configuration-response)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkReassignmentAPI.GetTenantConfigConfigurationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.WorkReassignmentAPI.GetTenantConfigConfigurationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.GetTenantConfigConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTenantConfigConfigurationV1`: TenantConfigurationResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.GetTenantConfigConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-reassignment-configurations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List reassignment configurations
Gets a paginated list of Reassignment configurations for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/list-reassignment-configurations-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListReassignmentConfigurationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. | [default to 20]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]ConfigurationResponse**](../models/configuration-response)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 20 // int32 | Max number of results to return. (optional) (default to 20) # int32 | Max number of results to return. (optional) (default to 20)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkReassignmentAPI.ListReassignmentConfigurationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.WorkReassignmentAPI.ListReassignmentConfigurationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.ListReassignmentConfigurationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListReassignmentConfigurationsV1`: []ConfigurationResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.ListReassignmentConfigurationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-reassignment-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update reassignment configuration
Replaces existing Reassignment configuration for an identity with the newly provided configuration.

[API Spec](https://developer.sailpoint.com/docs/api/put-reassignment-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | unique identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReassignmentConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **configurationItemRequest** | [**ConfigurationItemRequest**](../models/configuration-item-request) |  | 

### Return type

[**ConfigurationItemResponse**](../models/configuration-item-response)

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
    work_reassignment "github.com/sailpoint-oss/golang-sdk/v3/work_reassignment"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    identityId := `2c91808781a71ddb0181b9090b5c504e` // string | unique identity id # string | unique identity id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    configurationitemrequestJson := []byte(`{
          "endDate" : "2022-07-30T17:00:00Z",
          "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
          "configType" : "ACCESS_REQUESTS",
          "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
          "startDate" : "2022-07-21T11:13:12.345Z"
        }`) // ConfigurationItemRequest | 

    var configurationItemRequest work_reassignment.ConfigurationItemRequest
    if err := json.Unmarshal(configurationitemrequestJson, &configurationItemRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkReassignmentAPI.PutReassignmentConfigV1(context.Background(), identityId).XSailPointExperimental(xSailPointExperimental).ConfigurationItemRequest(configurationItemRequest).Execute()
	  //resp, r, err := apiClient.WorkReassignmentAPI.PutReassignmentConfigV1(context.Background(), identityId).XSailPointExperimental(xSailPointExperimental).ConfigurationItemRequest(configurationItemRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.PutReassignmentConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReassignmentConfigV1`: ConfigurationItemResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.PutReassignmentConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-tenant-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update tenant-wide reassignment configuration settings
Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.

[API Spec](https://developer.sailpoint.com/docs/api/put-tenant-configuration-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTenantConfigurationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **tenantConfigurationRequest** | [**TenantConfigurationRequest**](../models/tenant-configuration-request) |  | 

### Return type

[**TenantConfigurationResponse**](../models/tenant-configuration-response)

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
    work_reassignment "github.com/sailpoint-oss/golang-sdk/v3/work_reassignment"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    tenantconfigurationrequestJson := []byte(`{
          "configDetails" : {
            "disabled" : true
          }
        }`) // TenantConfigurationRequest | 

    var tenantConfigurationRequest work_reassignment.TenantConfigurationRequest
    if err := json.Unmarshal(tenantconfigurationrequestJson, &tenantConfigurationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkReassignmentAPI.PutTenantConfigurationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).TenantConfigurationRequest(tenantConfigurationRequest).Execute()
	  //resp, r, err := apiClient.WorkReassignmentAPI.PutTenantConfigurationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).TenantConfigurationRequest(tenantConfigurationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.PutTenantConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTenantConfigurationV1`: TenantConfigurationResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.PutTenantConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

