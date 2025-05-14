---
id: v2024-configuration-hub
title: ConfigurationHub
pagination_label: ConfigurationHub
sidebar_label: ConfigurationHub
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConfigurationHub', 'V2024ConfigurationHub'] 
slug: /tools/sdk/go/v2024/methods/configuration-hub
tags: ['SDK', 'Software Development Kit', 'ConfigurationHub', 'V2024ConfigurationHub']
---

# ConfigurationHubAPI
  Use this API to implement and customize configuration settings management. With this functionality, you can access the Configuration Hub actions and build your own automated pipeline for Identity Security Cloud configuration change delivery and deployment.

Common usages for Configuration Hub includes:

- Upload configuration file - Configuration files can be managed and deployed using Configuration Hub by uploading a JSON file which contains configuration data.
- Manage object mapping - Create rules to map and substitute attributes when migrating configurations.
- Manage backups for configuration settings
- Manage configuration drafts
- Upload configurations and manage object mappings between tenants.

Refer to [Using the SailPoint Configuration Hub](https://documentation.sailpoint.com/saas/help/confighub/config_hub.html) for more information about Configuration Hub.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-deploy**](#create-deploy) | **Post** `/configuration-hub/deploys` | Create a Deploy
[**create-object-mapping**](#create-object-mapping) | **Post** `/configuration-hub/object-mappings/{sourceOrg}` | Creates an object mapping
[**create-object-mappings**](#create-object-mappings) | **Post** `/configuration-hub/object-mappings/{sourceOrg}/bulk-create` | Bulk creates object mappings
[**create-scheduled-action**](#create-scheduled-action) | **Post** `/configuration-hub/scheduled-actions` | Create Scheduled Action
[**create-uploaded-configuration**](#create-uploaded-configuration) | **Post** `/configuration-hub/backups/uploads` | Upload a Configuration
[**delete-backup**](#delete-backup) | **Delete** `/configuration-hub/backups/{id}` | Delete a Backup
[**delete-draft**](#delete-draft) | **Delete** `/configuration-hub/drafts/{id}` | Delete a draft
[**delete-object-mapping**](#delete-object-mapping) | **Delete** `/configuration-hub/object-mappings/{sourceOrg}/{objectMappingId}` | Deletes an object mapping
[**delete-scheduled-action**](#delete-scheduled-action) | **Delete** `/configuration-hub/scheduled-actions/{id}` | Delete Scheduled Action
[**delete-uploaded-configuration**](#delete-uploaded-configuration) | **Delete** `/configuration-hub/backups/uploads/{id}` | Delete an Uploaded Configuration
[**get-deploy**](#get-deploy) | **Get** `/configuration-hub/deploys/{id}` | Get a Deploy
[**get-object-mappings**](#get-object-mappings) | **Get** `/configuration-hub/object-mappings/{sourceOrg}` | Gets list of object mappings
[**get-uploaded-configuration**](#get-uploaded-configuration) | **Get** `/configuration-hub/backups/uploads/{id}` | Get an Uploaded Configuration
[**list-backups**](#list-backups) | **Get** `/configuration-hub/backups` | List Backups
[**list-deploys**](#list-deploys) | **Get** `/configuration-hub/deploys` | List Deploys
[**list-drafts**](#list-drafts) | **Get** `/configuration-hub/drafts` | List Drafts
[**list-scheduled-actions**](#list-scheduled-actions) | **Get** `/configuration-hub/scheduled-actions` | List Scheduled Actions
[**list-uploaded-configurations**](#list-uploaded-configurations) | **Get** `/configuration-hub/backups/uploads` | List Uploaded Configurations
[**update-object-mappings**](#update-object-mappings) | **Post** `/configuration-hub/object-mappings/{sourceOrg}/bulk-patch` | Bulk updates object mappings
[**update-scheduled-action**](#update-scheduled-action) | **Patch** `/configuration-hub/scheduled-actions/{id}` | Update Scheduled Action


## create-deploy
Create a Deploy
This API performs a deploy based on an existing daft.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-deploy)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDeployRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployRequest** | [**DeployRequest**](../models/deploy-request) | The deploy request body. | 

### Return type

[**DeployResponse**](../models/deploy-response)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    deployrequest := []byte(`{
          "draftId" : "3d0fe04b-57df-4a46-a83b-8f04b0f9d10b"
        }`) // DeployRequest | The deploy request body.

    var deployRequest v2024.DeployRequest
    if err := json.Unmarshal(deployrequest, &deployRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.CreateDeploy(context.Background()).DeployRequest(deployRequest).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.CreateDeploy(context.Background()).DeployRequest(deployRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateDeploy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDeploy`: DeployResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateDeploy`: %v\n", resp)
}
```

[[Back to top]](#)

## create-object-mapping
Creates an object mapping
This creates an object mapping between current org and source org.
Source org should be "default" when creating an object mapping that is not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-object-mapping)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    objectmappingrequest := []byte(`{
          "targetValue" : "My New Governance Group Name",
          "jsonPath" : "$.name",
          "sourceValue" : "My Governance Group Name",
          "enabled" : false,
          "objectType" : "IDENTITY"
        }`) // ObjectMappingRequest | The object mapping request body.

    var objectMappingRequest v2024.ObjectMappingRequest
    if err := json.Unmarshal(objectmappingrequest, &objectMappingRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.CreateObjectMapping(context.Background(), sourceOrg).ObjectMappingRequest(objectMappingRequest).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.CreateObjectMapping(context.Background(), sourceOrg).ObjectMappingRequest(objectMappingRequest).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-object-mappings)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    objectmappingbulkcreaterequest := []byte(`{
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

    var objectMappingBulkCreateRequest v2024.ObjectMappingBulkCreateRequest
    if err := json.Unmarshal(objectmappingbulkcreaterequest, &objectMappingBulkCreateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.CreateObjectMappings(context.Background(), sourceOrg).ObjectMappingBulkCreateRequest(objectMappingBulkCreateRequest).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.CreateObjectMappings(context.Background(), sourceOrg).ObjectMappingBulkCreateRequest(objectMappingBulkCreateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateObjectMappings``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateObjectMappings`: ObjectMappingBulkCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateObjectMappings`: %v\n", resp)
}
```

[[Back to top]](#)

## create-scheduled-action
Create Scheduled Action
This API creates a new scheduled action for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-scheduled-action)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateScheduledActionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledActionPayload** | [**ScheduledActionPayload**](../models/scheduled-action-payload) | The scheduled action creation request body. | 

### Return type

[**ScheduledActionResponse**](../models/scheduled-action-response)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scheduledactionpayload := []byte(`{
          "cronString" : "0 0 12 * * * *",
          "timeZoneId" : "America/Chicago",
          "startTime" : "2024-08-16T14:16:58.389Z",
          "jobType" : "BACKUP",
          "content" : {
            "sourceTenant" : "tenant-name",
            "draftId" : "9012b87d-48ca-439a-868f-2160001da8c3",
            "name" : "Daily Backup",
            "backupOptions" : {
              "includeTypes" : [ "ROLE", "IDENTITY_PROFILE" ],
              "objectOptions" : {
                "SOURCE" : {
                  "includedNames" : [ "Source1", "Source2" ]
                },
                "ROLE" : {
                  "includedNames" : [ "Admin Role", "User Role" ]
                }
              }
            },
            "sourceBackupId" : "5678b87d-48ca-439a-868f-2160001da8c2"
          }
        }`) // ScheduledActionPayload | The scheduled action creation request body.

    var scheduledActionPayload v2024.ScheduledActionPayload
    if err := json.Unmarshal(scheduledactionpayload, &scheduledActionPayload); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.CreateScheduledAction(context.Background()).ScheduledActionPayload(scheduledActionPayload).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.CreateScheduledAction(context.Background()).ScheduledActionPayload(scheduledActionPayload).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateScheduledAction``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateScheduledAction`: ScheduledActionResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateScheduledAction`: %v\n", resp)
}
```

[[Back to top]](#)

## create-uploaded-configuration
Upload a Configuration
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects) for more information about supported objects.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-uploaded-configuration)

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
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.CreateUploadedConfiguration(context.Background()).Data(data).Name(name).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.CreateUploadedConfiguration(context.Background()).Data(data).Name(name).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateUploadedConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateUploadedConfiguration`: BackupResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateUploadedConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-backup
Delete a Backup
This API deletes an existing backup for the current tenant.

On success, this endpoint will return an empty response.

The backup id can be obtained from the response after a backup was successfully created, or from the list backups endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-backup)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the backup to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBackupRequest struct via the builder pattern


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
    id := `07659d7d-2cce-47c0-9e49-185787ee565a` // string | The id of the backup to delete. # string | The id of the backup to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.ConfigurationHubAPI.DeleteBackup(context.Background(), id).Execute()
	  //r, err := apiClient.V2024.ConfigurationHubAPI.DeleteBackup(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteBackup``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-draft
Delete a draft
This API deletes an existing draft for the current tenant.

On success, this endpoint will return an empty response.

The draft id can be obtained from the response after a draft was successfully created, or from the list drafts endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-draft)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the draft to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDraftRequest struct via the builder pattern


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
    id := `07659d7d-2cce-47c0-9e49-185787ee565a` // string | The id of the draft to delete. # string | The id of the draft to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.ConfigurationHubAPI.DeleteDraft(context.Background(), id).Execute()
	  //r, err := apiClient.V2024.ConfigurationHubAPI.DeleteDraft(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteDraft``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-object-mapping
Deletes an object mapping
This deletes an existing object mapping.
Source org should be "default" when deleting an object mapping that is not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-object-mapping)

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
    r, err := apiClient.V2024.ConfigurationHubAPI.DeleteObjectMapping(context.Background(), sourceOrg, objectMappingId).Execute()
	  //r, err := apiClient.V2024.ConfigurationHubAPI.DeleteObjectMapping(context.Background(), sourceOrg, objectMappingId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteObjectMapping``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-scheduled-action
Delete Scheduled Action
This API deletes an existing scheduled action.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-scheduled-action)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scheduledActionId** | **string** | The ID of the scheduled action. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteScheduledActionRequest struct via the builder pattern


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
    scheduledActionId := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | The ID of the scheduled action. # string | The ID of the scheduled action.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.ConfigurationHubAPI.DeleteScheduledAction(context.Background(), scheduledActionId).Execute()
	  //r, err := apiClient.V2024.ConfigurationHubAPI.DeleteScheduledAction(context.Background(), scheduledActionId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteScheduledAction``: %v\n", err)
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

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-uploaded-configuration)

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
    r, err := apiClient.V2024.ConfigurationHubAPI.DeleteUploadedConfiguration(context.Background(), id).Execute()
	  //r, err := apiClient.V2024.ConfigurationHubAPI.DeleteUploadedConfiguration(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteUploadedConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-deploy
Get a Deploy
This API gets an existing deploy for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-deploy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the deploy. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDeployRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeployResponse**](../models/deploy-response)

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
    id := `3d0fe04b-57df-4a46-a83b-8f04b0f9d10b` // string | The id of the deploy. # string | The id of the deploy.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.GetDeploy(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.GetDeploy(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.GetDeploy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDeploy`: DeployResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.GetDeploy`: %v\n", resp)
}
```

[[Back to top]](#)

## get-object-mappings
Gets list of object mappings
This gets a list of existing object mappings between current org and source org.
Source org should be "default" when getting object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:read

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-object-mappings)

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
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.GetObjectMappings(context.Background(), sourceOrg).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.GetObjectMappings(context.Background(), sourceOrg).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-uploaded-configuration)

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
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.GetUploadedConfiguration(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.GetUploadedConfiguration(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.GetUploadedConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUploadedConfiguration`: BackupResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.GetUploadedConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## list-backups
List Backups
This API gets a list of existing backups for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-backups)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListBackupsRequest struct via the builder pattern


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
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.ListBackups(context.Background()).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.ListBackups(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.ListBackups``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListBackups`: []BackupResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.ListBackups`: %v\n", resp)
}
```

[[Back to top]](#)

## list-deploys
List Deploys
This API gets a list of deploys for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-deploys)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListDeploysRequest struct via the builder pattern


### Return type

[**ListDeploys200Response**](../models/list-deploys200-response)

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
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.ListDeploys(context.Background()).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.ListDeploys(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.ListDeploys``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListDeploys`: ListDeploys200Response
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.ListDeploys`: %v\n", resp)
}
```

[[Back to top]](#)

## list-drafts
List Drafts
This API gets a list of existing drafts for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-drafts)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListDraftsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* | 

### Return type

[**[]DraftResponse**](../models/draft-response)

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
    filters := `status eq "COMPLETE"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.ListDrafts(context.Background()).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.ListDrafts(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.ListDrafts``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListDrafts`: []DraftResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.ListDrafts`: %v\n", resp)
}
```

[[Back to top]](#)

## list-scheduled-actions
List Scheduled Actions
This API gets a list of existing scheduled actions for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-scheduled-actions)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListScheduledActionsRequest struct via the builder pattern


### Return type

[**[]ScheduledActionResponse**](../models/scheduled-action-response)

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
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.ListScheduledActions(context.Background()).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.ListScheduledActions(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.ListScheduledActions``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListScheduledActions`: []ScheduledActionResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.ListScheduledActions`: %v\n", resp)
}
```

[[Back to top]](#)

## list-uploaded-configurations
List Uploaded Configurations
This API gets a list of existing uploaded configurations for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-uploaded-configurations)

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
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.ListUploadedConfigurations(context.Background()).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.ListUploadedConfigurations(context.Background()).Filters(filters).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-object-mappings)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    objectmappingbulkpatchrequest := []byte(`{
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

    var objectMappingBulkPatchRequest v2024.ObjectMappingBulkPatchRequest
    if err := json.Unmarshal(objectmappingbulkpatchrequest, &objectMappingBulkPatchRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.UpdateObjectMappings(context.Background(), sourceOrg).ObjectMappingBulkPatchRequest(objectMappingBulkPatchRequest).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.UpdateObjectMappings(context.Background(), sourceOrg).ObjectMappingBulkPatchRequest(objectMappingBulkPatchRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.UpdateObjectMappings``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateObjectMappings`: ObjectMappingBulkPatchResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.UpdateObjectMappings`: %v\n", resp)
}
```

[[Back to top]](#)

## update-scheduled-action
Update Scheduled Action
This API updates an existing scheduled action using JSON Patch format.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-scheduled-action)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scheduledActionId** | **string** | The ID of the scheduled action. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateScheduledActionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatch** | [**JsonPatch**](../models/json-patch) | The JSON Patch document containing the changes to apply to the scheduled action. | 

### Return type

[**ScheduledActionResponse**](../models/scheduled-action-response)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scheduledActionId := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | The ID of the scheduled action. # string | The ID of the scheduled action.
    jsonpatch := []byte(`{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }`) // JsonPatch | The JSON Patch document containing the changes to apply to the scheduled action.

    var jsonPatch v2024.JsonPatch
    if err := json.Unmarshal(jsonpatch, &jsonPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConfigurationHubAPI.UpdateScheduledAction(context.Background(), scheduledActionId).JsonPatch(jsonPatch).Execute()
	  //resp, r, err := apiClient.V2024.ConfigurationHubAPI.UpdateScheduledAction(context.Background(), scheduledActionId).JsonPatch(jsonPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.UpdateScheduledAction``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateScheduledAction`: ScheduledActionResponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.UpdateScheduledAction`: %v\n", resp)
}
```

[[Back to top]](#)

