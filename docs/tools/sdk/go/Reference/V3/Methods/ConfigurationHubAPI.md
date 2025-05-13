---
id: configuration-hub
title: ConfigurationHub
pagination_label: ConfigurationHub
sidebar_label: ConfigurationHub
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConfigurationHub', 'ConfigurationHub'] 
slug: /tools/sdk/go/v3/methods/configuration-hub
tags: ['SDK', 'Software Development Kit', 'ConfigurationHub', 'ConfigurationHub']
---

# ConfigurationHubAPI
  Upload configurations and manage object mappings between tenants.

Configuration files can be managed and deployed using Configuration Hub by uploading a JSON file which contains configuration data.

The function of object mapping allows objects with varying names and IDs to be compared. While objects are compared, a user can replace a value in the source tenant with a new value. Object mapping also helps in locating referenced objects to the source object during the drafting process.

Refer to [Uploading a Configuration File](https://documentation.sailpoint.com/saas/help/confighub/config_hub.html#uploading-a-configuration-file) for more information about uploading Configuration Files

Refer to [Mapping Objects](https://documentation.sailpoint.com/saas/help/confighub/config_hub.html#mapping-objects) for more information about object mappings.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-object-mapping**](#create-object-mapping) | **Post** `/configuration-hub/object-mappings/{sourceOrg}` | Creates an object mapping
[**create-object-mappings**](#create-object-mappings) | **Post** `/configuration-hub/object-mappings/{sourceOrg}/bulk-create` | Bulk creates object mappings
[**create-uploaded-configuration**](#create-uploaded-configuration) | **Post** `/configuration-hub/backups/uploads` | Upload a Configuration
[**delete-object-mapping**](#delete-object-mapping) | **Delete** `/configuration-hub/object-mappings/{sourceOrg}/{objectMappingId}` | Deletes an object mapping
[**delete-uploaded-configuration**](#delete-uploaded-configuration) | **Delete** `/configuration-hub/backups/uploads/{id}` | Delete an Uploaded Configuration
[**get-object-mappings**](#get-object-mappings) | **Get** `/configuration-hub/object-mappings/{sourceOrg}` | Gets list of object mappings
[**get-uploaded-configuration**](#get-uploaded-configuration) | **Get** `/configuration-hub/backups/uploads/{id}` | Get an Uploaded Configuration
[**list-uploaded-configurations**](#list-uploaded-configurations) | **Get** `/configuration-hub/backups/uploads` | List Uploaded Configurations
[**update-object-mappings**](#update-object-mappings) | **Post** `/configuration-hub/object-mappings/{sourceOrg}/bulk-patch` | Bulk updates object mappings


## create-object-mapping
Creates an object mapping
This creates an object mapping between current org and source org.
Source org should be "default" when creating an object mapping that is not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-object-mapping)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceOrg** | **string** | The name of the source org. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateObjectMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **objectMappingRequest** | [**ObjectMappingRequest**](../models/object-mapping-request) | The object mapping request body. | 

### Return type

[**ObjectMappingResponse**](../models/object-mapping-response)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    data := []byte(`{
          "targetValue" : "My New Governance Group Name",
          "jsonPath" : "$.name",
          "sourceValue" : "My Governance Group Name",
          "enabled" : false,
          "objectType" : "IDENTITY"
        }`) // ObjectMappingRequest | The object mapping request body.

  
   var objectMappingRequest v3.ObjectMappingRequest
   if err := json.Unmarshal(data, &objectMappingRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ConfigurationHubAPI.CreateObjectMapping(context.Background(), sourceOrg).ObjectMappingRequest(objectMappingRequest).Execute()
	//resp, r, err := apiClient.V3.ConfigurationHubAPI.CreateObjectMapping(context.Background(), sourceOrg).ObjectMappingRequest(objectMappingRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateObjectMapping``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateObjectMapping`: ObjectMappingResponse
	fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateObjectMapping`: %v\n", resp)
}
```

[[Back to top]](#)

## create-object-mappings
Bulk creates object mappings
This creates a set of object mappings (Max 25) between current org and source org.
Source org should be "default" when creating object mappings that are not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-object-mappings)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceOrg** | **string** | The name of the source org. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateObjectMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **objectMappingBulkCreateRequest** | [**ObjectMappingBulkCreateRequest**](../models/object-mapping-bulk-create-request) | The bulk create object mapping request body. | 

### Return type

[**ObjectMappingBulkCreateResponse**](../models/object-mapping-bulk-create-response)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    data := []byte(`{
          "newObjectsMappings" : [ {
            "targetValue" : "My New Governance Group Name",
            "jsonPath" : "$.name",
            "sourceValue" : "My Governance Group Name",
            "enabled" : false,
            "objectType" : "IDENTITY"
          }, {
            "targetValue" : "My New Governance Group Name",
            "jsonPath" : "$.name",
            "sourceValue" : "My Governance Group Name",
            "enabled" : false,
            "objectType" : "IDENTITY"
          } ]
        }`) // ObjectMappingBulkCreateRequest | The bulk create object mapping request body.

  
   var objectMappingBulkCreateRequest v3.ObjectMappingBulkCreateRequest
   if err := json.Unmarshal(data, &objectMappingBulkCreateRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ConfigurationHubAPI.CreateObjectMappings(context.Background(), sourceOrg).ObjectMappingBulkCreateRequest(objectMappingBulkCreateRequest).Execute()
	//resp, r, err := apiClient.V3.ConfigurationHubAPI.CreateObjectMappings(context.Background(), sourceOrg).ObjectMappingBulkCreateRequest(objectMappingBulkCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateObjectMappings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateObjectMappings`: ObjectMappingBulkCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateObjectMappings`: %v\n", resp)
}
```

[[Back to top]](#)

## create-uploaded-configuration
Upload a Configuration
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects) for more information about supported objects.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-uploaded-configuration)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateUploadedConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | ***os.File** | JSON file containing the objects to be imported. | 
 **name** | **string** | Name that will be assigned to the uploaded configuration file. | 

### Return type

[**BackupResponse**](../models/backup-response)

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
    data := BINARY_DATA_HERE // *os.File | JSON file containing the objects to be imported. # *os.File | JSON file containing the objects to be imported.
    name := `name_example` // string | Name that will be assigned to the uploaded configuration file. # string | Name that will be assigned to the uploaded configuration file.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ConfigurationHubAPI.CreateUploadedConfiguration(context.Background()).Data(data).Name(name).Execute()
	//resp, r, err := apiClient.V3.ConfigurationHubAPI.CreateUploadedConfiguration(context.Background()).Data(data).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateUploadedConfiguration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateUploadedConfiguration`: BackupResponse
	fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateUploadedConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-object-mapping
Deletes an object mapping
This deletes an existing object mapping.
Source org should be "default" when deleting an object mapping that is not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-object-mapping)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceOrg** | **string** | The name of the source org. | 
**objectMappingId** | **string** | The id of the object mapping to be deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteObjectMappingRequest struct via the builder pattern


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
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    objectMappingId := `3d6e0144-963f-4bd6-8d8d-d77b4e507ce4` // string | The id of the object mapping to be deleted. # string | The id of the object mapping to be deleted.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.ConfigurationHubAPI.DeleteObjectMapping(context.Background(), sourceOrg, objectMappingId).Execute()
	//r, err := apiClient.V3.ConfigurationHubAPI.DeleteObjectMapping(context.Background(), sourceOrg, objectMappingId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteObjectMapping``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-uploaded-configuration
Delete an Uploaded Configuration
This API deletes an uploaded configuration based on Id.

On success, this endpoint will return an empty response.

The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-uploaded-configuration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the uploaded configuration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUploadedConfigurationRequest struct via the builder pattern


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
    id := `3d0fe04b-57df-4a46-a83b-8f04b0f9d10b` // string | The id of the uploaded configuration. # string | The id of the uploaded configuration.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.ConfigurationHubAPI.DeleteUploadedConfiguration(context.Background(), id).Execute()
	//r, err := apiClient.V3.ConfigurationHubAPI.DeleteUploadedConfiguration(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteUploadedConfiguration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-object-mappings
Gets list of object mappings
This gets a list of existing object mappings between current org and source org.
Source org should be "default" when getting object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:read

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-object-mappings)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceOrg** | **string** | The name of the source org. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetObjectMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]ObjectMappingResponse**](../models/object-mapping-response)

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
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ConfigurationHubAPI.GetObjectMappings(context.Background(), sourceOrg).Execute()
	//resp, r, err := apiClient.V3.ConfigurationHubAPI.GetObjectMappings(context.Background(), sourceOrg).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.GetObjectMappings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetObjectMappings`: []ObjectMappingResponse
	fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.GetObjectMappings`: %v\n", resp)
}
```

[[Back to top]](#)

## get-uploaded-configuration
Get an Uploaded Configuration
This API gets an existing uploaded configuration for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-uploaded-configuration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the uploaded configuration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUploadedConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**BackupResponse**](../models/backup-response)

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
    id := `3d0fe04b-57df-4a46-a83b-8f04b0f9d10b` // string | The id of the uploaded configuration. # string | The id of the uploaded configuration.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ConfigurationHubAPI.GetUploadedConfiguration(context.Background(), id).Execute()
	//resp, r, err := apiClient.V3.ConfigurationHubAPI.GetUploadedConfiguration(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.GetUploadedConfiguration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUploadedConfiguration`: BackupResponse
	fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.GetUploadedConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## list-uploaded-configurations
List Uploaded Configurations
This API gets a list of existing uploaded configurations for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-uploaded-configurations)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListUploadedConfigurationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* | 

### Return type

[**[]BackupResponse**](../models/backup-response)

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
    filters := `status eq "COMPLETE"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ConfigurationHubAPI.ListUploadedConfigurations(context.Background()).Execute()
	//resp, r, err := apiClient.V3.ConfigurationHubAPI.ListUploadedConfigurations(context.Background()).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.ListUploadedConfigurations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListUploadedConfigurations`: []BackupResponse
	fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.ListUploadedConfigurations`: %v\n", resp)
}
```

[[Back to top]](#)

## update-object-mappings
Bulk updates object mappings
This updates a set of object mappings, only enabled and targetValue fields can be updated.
Source org should be "default" when updating object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v3/update-object-mappings)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceOrg** | **string** | The name of the source org. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateObjectMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **objectMappingBulkPatchRequest** | [**ObjectMappingBulkPatchRequest**](../models/object-mapping-bulk-patch-request) | The object mapping request body. | 

### Return type

[**ObjectMappingBulkPatchResponse**](../models/object-mapping-bulk-patch-response)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    data := []byte(`{
          "patches" : {
            "603b1a61-d03d-4ed1-864f-a508fbd1995d" : [ {
              "op" : "replace",
              "path" : "/enabled",
              "value" : true
            } ],
            "00bece34-f50d-4227-8878-76f620b5a971" : [ {
              "op" : "replace",
              "path" : "/targetValue",
              "value" : "New Target Value"
            } ]
          }
        }`) // ObjectMappingBulkPatchRequest | The object mapping request body.

  
   var objectMappingBulkPatchRequest v3.ObjectMappingBulkPatchRequest
   if err := json.Unmarshal(data, &objectMappingBulkPatchRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ConfigurationHubAPI.UpdateObjectMappings(context.Background(), sourceOrg).ObjectMappingBulkPatchRequest(objectMappingBulkPatchRequest).Execute()
	//resp, r, err := apiClient.V3.ConfigurationHubAPI.UpdateObjectMappings(context.Background(), sourceOrg).ObjectMappingBulkPatchRequest(objectMappingBulkPatchRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.UpdateObjectMappings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateObjectMappings`: ObjectMappingBulkPatchResponse
	fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.UpdateObjectMappings`: %v\n", resp)
}
```

[[Back to top]](#)

