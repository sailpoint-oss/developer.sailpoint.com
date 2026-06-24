---
id: beta-work-reassignment
title: WorkReassignment
pagination_label: WorkReassignment
sidebar_label: WorkReassignment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkReassignment', 'BetaWorkReassignment'] 
slug: /tools/sdk/go/beta/methods/work-reassignment
tags: ['SDK', 'Software Development Kit', 'WorkReassignment', 'BetaWorkReassignment']
---

# WorkReassignmentAPI
  Use this API to implement work reassignment functionality.

Work Reassignment allows access request reviews, certifications, and manual provisioning tasks assigned to a user to be reassigned to a different user. This is primarily used for:

- Temporarily redirecting work for users who are out of office, such as on vacation or sick leave
- Permanently redirecting work for users who should not be assigned these tasks at all, such as senior executives or service identities

Users can define reassignments for themselves, managers can add them for their team members, and administrators can configure them on any user’s behalf. Work assigned during the specified reassignment timeframes will be automatically reassigned to the designated user as it is created.

Refer to [Work Reassignment](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html) for more information about this topic.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-reassignment-configuration**](#create-reassignment-configuration) | **Post** `/reassignment-configurations` | Create a reassignment configuration
[**delete-reassignment-configuration**](#delete-reassignment-configuration) | **Delete** `/reassignment-configurations/{identityId}/{configType}` | Delete reassignment configuration
[**get-evaluate-reassignment-configuration**](#get-evaluate-reassignment-configuration) | **Get** `/reassignment-configurations/{identityId}/evaluate/{configType}` | Evaluate reassignment configuration
[**get-reassignment-config-types**](#get-reassignment-config-types) | **Get** `/reassignment-configurations/types` | List reassignment config types
[**get-reassignment-configuration**](#get-reassignment-configuration) | **Get** `/reassignment-configurations/{identityId}` | Get reassignment configuration
[**get-tenant-config-configuration**](#get-tenant-config-configuration) | **Get** `/reassignment-configurations/tenant-config` | Get tenant-wide reassignment configuration settings
[**list-reassignment-configurations**](#list-reassignment-configurations) | **Get** `/reassignment-configurations` | List reassignment configurations
[**put-reassignment-config**](#put-reassignment-config) | **Put** `/reassignment-configurations/{identityId}` | Update reassignment configuration
[**put-tenant-configuration**](#put-tenant-configuration) | **Put** `/reassignment-configurations/tenant-config` | Update tenant-wide reassignment configuration settings


## create-reassignment-configuration
Create a reassignment configuration
Creates a new Reassignment Configuration for the specified identity.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-reassignment-configuration)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateReassignmentConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    configurationitemrequest := []byte(`{
          "endDate" : "2022-07-30T17:00:00Z",
          "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
          "configType" : "ACCESS_REQUESTS",
          "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
          "startDate" : "2022-07-21T11:13:12.345Z"
        }`) // ConfigurationItemRequest | 

    var configurationItemRequest beta.ConfigurationItemRequest
    if err := json.Unmarshal(configurationitemrequest, &configurationItemRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.WorkReassignmentAPI.CreateReassignmentConfiguration(context.Background()).ConfigurationItemRequest(configurationItemRequest).Execute()
	  //resp, r, err := apiClient.Beta.WorkReassignmentAPI.CreateReassignmentConfiguration(context.Background()).ConfigurationItemRequest(configurationItemRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.CreateReassignmentConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateReassignmentConfiguration`: ConfigurationItemResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.CreateReassignmentConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-reassignment-configuration
Delete reassignment configuration
Deletes a single reassignment configuration for the specified identity

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-reassignment-configuration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | unique identity id | 
**configType** | [**ConfigTypeEnum**](../models/) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReassignmentConfigurationRequest struct via the builder pattern


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
    identityId := `2c91808781a71ddb0181b9090b5c504e` // string | unique identity id # string | unique identity id
    configType :=  // ConfigTypeEnum |  # ConfigTypeEnum | 

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.WorkReassignmentAPI.DeleteReassignmentConfiguration(context.Background(), identityId, configType).Execute()
	  //r, err := apiClient.Beta.WorkReassignmentAPI.DeleteReassignmentConfiguration(context.Background(), identityId, configType).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.DeleteReassignmentConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-evaluate-reassignment-configuration
Evaluate reassignment configuration
Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-evaluate-reassignment-configuration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | unique identity id | 
**configType** | [**ConfigTypeEnum**](../models/) | Reassignment work type | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEvaluateReassignmentConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    identityId := `2c91808781a71ddb0181b9090b5c504e` // string | unique identity id # string | unique identity id
    configType := accessRequests // ConfigTypeEnum | Reassignment work type # ConfigTypeEnum | Reassignment work type
    exclusionfilters := []byte(`SELF_REVIEW_DELEGATION`) // []string | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.WorkReassignmentAPI.GetEvaluateReassignmentConfiguration(context.Background(), identityId, configType).Execute()
	  //resp, r, err := apiClient.Beta.WorkReassignmentAPI.GetEvaluateReassignmentConfiguration(context.Background(), identityId, configType).ExclusionFilters(exclusionFilters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.GetEvaluateReassignmentConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEvaluateReassignmentConfiguration`: []EvaluateResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.GetEvaluateReassignmentConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## get-reassignment-config-types
List reassignment config types
Gets a collection of types which are available in the Reassignment Configuration UI.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-reassignment-config-types)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetReassignmentConfigTypesRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.WorkReassignmentAPI.GetReassignmentConfigTypes(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.WorkReassignmentAPI.GetReassignmentConfigTypes(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.GetReassignmentConfigTypes``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReassignmentConfigTypes`: []ConfigType
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.GetReassignmentConfigTypes`: %v\n", resp)
}
```

[[Back to top]](#)

## get-reassignment-configuration
Get reassignment configuration
Gets the Reassignment Configuration for an identity.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-reassignment-configuration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | unique identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReassignmentConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    identityId := `2c91808781a71ddb0181b9090b5c504f` // string | unique identity id # string | unique identity id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.WorkReassignmentAPI.GetReassignmentConfiguration(context.Background(), identityId).Execute()
	  //resp, r, err := apiClient.Beta.WorkReassignmentAPI.GetReassignmentConfiguration(context.Background(), identityId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.GetReassignmentConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReassignmentConfiguration`: ConfigurationResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.GetReassignmentConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## get-tenant-config-configuration
Get tenant-wide reassignment configuration settings
Gets the global Reassignment Configuration settings for the requestor's tenant.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-tenant-config-configuration)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantConfigConfigurationRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.WorkReassignmentAPI.GetTenantConfigConfiguration(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.WorkReassignmentAPI.GetTenantConfigConfiguration(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.GetTenantConfigConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTenantConfigConfiguration`: TenantConfigurationResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.GetTenantConfigConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## list-reassignment-configurations
List reassignment configurations
Gets all Reassignment configuration for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-reassignment-configurations)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListReassignmentConfigurationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. | [default to 20]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 20 // int32 | Max number of results to return. (optional) (default to 20) # int32 | Max number of results to return. (optional) (default to 20)
    offset := 10 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.WorkReassignmentAPI.ListReassignmentConfigurations(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.WorkReassignmentAPI.ListReassignmentConfigurations(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.ListReassignmentConfigurations``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListReassignmentConfigurations`: []ConfigurationResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.ListReassignmentConfigurations`: %v\n", resp)
}
```

[[Back to top]](#)

## put-reassignment-config
Update reassignment configuration
Replaces existing Reassignment configuration for an identity with the newly provided configuration.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-reassignment-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | unique identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReassignmentConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    identityId := `2c91808781a71ddb0181b9090b5c504e` // string | unique identity id # string | unique identity id
    configurationitemrequest := []byte(`{
          "endDate" : "2022-07-30T17:00:00Z",
          "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
          "configType" : "ACCESS_REQUESTS",
          "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
          "startDate" : "2022-07-21T11:13:12.345Z"
        }`) // ConfigurationItemRequest | 

    var configurationItemRequest beta.ConfigurationItemRequest
    if err := json.Unmarshal(configurationitemrequest, &configurationItemRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.WorkReassignmentAPI.PutReassignmentConfig(context.Background(), identityId).ConfigurationItemRequest(configurationItemRequest).Execute()
	  //resp, r, err := apiClient.Beta.WorkReassignmentAPI.PutReassignmentConfig(context.Background(), identityId).ConfigurationItemRequest(configurationItemRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.PutReassignmentConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReassignmentConfig`: ConfigurationItemResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.PutReassignmentConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## put-tenant-configuration
Update tenant-wide reassignment configuration settings
Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-tenant-configuration)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTenantConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    tenantconfigurationrequest := []byte(`{
          "configDetails" : {
            "disabled" : true
          }
        }`) // TenantConfigurationRequest | 

    var tenantConfigurationRequest beta.TenantConfigurationRequest
    if err := json.Unmarshal(tenantconfigurationrequest, &tenantConfigurationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.WorkReassignmentAPI.PutTenantConfiguration(context.Background()).TenantConfigurationRequest(tenantConfigurationRequest).Execute()
	  //resp, r, err := apiClient.Beta.WorkReassignmentAPI.PutTenantConfiguration(context.Background()).TenantConfigurationRequest(tenantConfigurationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkReassignmentAPI.PutTenantConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTenantConfiguration`: TenantConfigurationResponse
    fmt.Fprintf(os.Stdout, "Response from `WorkReassignmentAPI.PutTenantConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

