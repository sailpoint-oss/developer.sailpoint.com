---
id: v1-configuration-hub
title: ConfigurationHub
pagination_label: ConfigurationHub
sidebar_label: ConfigurationHub
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConfigurationHub', 'V1ConfigurationHub'] 
slug: /tools/sdk/go/configurationhub/methods/configuration-hub
tags: ['SDK', 'Software Development Kit', 'ConfigurationHub', 'V1ConfigurationHub']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-deploy-v1**](#create-deploy-v1) | **Post** `/configuration-hub/v1/deploys` | Create a deploy
[**create-object-mapping-v1**](#create-object-mapping-v1) | **Post** `/configuration-hub/v1/object-mappings/{sourceOrg}` | Creates an object mapping
[**create-object-mappings-v1**](#create-object-mappings-v1) | **Post** `/configuration-hub/v1/object-mappings/{sourceOrg}/bulk-create` | Bulk creates object mappings
[**create-scheduled-action-v1**](#create-scheduled-action-v1) | **Post** `/configuration-hub/v1/scheduled-actions` | Create scheduled action
[**create-uploaded-configuration-v1**](#create-uploaded-configuration-v1) | **Post** `/configuration-hub/v1/backups/uploads` | Upload a configuration
[**delete-backup-v1**](#delete-backup-v1) | **Delete** `/configuration-hub/v1/backups/{id}` | Delete a backup
[**delete-draft-v1**](#delete-draft-v1) | **Delete** `/configuration-hub/v1/drafts/{id}` | Delete a draft
[**delete-object-mapping-v1**](#delete-object-mapping-v1) | **Delete** `/configuration-hub/v1/object-mappings/{sourceOrg}/{objectMappingId}` | Deletes an object mapping
[**delete-scheduled-action-v1**](#delete-scheduled-action-v1) | **Delete** `/configuration-hub/v1/scheduled-actions/{id}` | Delete scheduled action
[**delete-uploaded-configuration-v1**](#delete-uploaded-configuration-v1) | **Delete** `/configuration-hub/v1/backups/uploads/{id}` | Delete an uploaded configuration
[**get-deploy-v1**](#get-deploy-v1) | **Get** `/configuration-hub/v1/deploys/{id}` | Get a deploy
[**get-object-mappings-v1**](#get-object-mappings-v1) | **Get** `/configuration-hub/v1/object-mappings/{sourceOrg}` | Gets list of object mappings
[**get-uploaded-configuration-v1**](#get-uploaded-configuration-v1) | **Get** `/configuration-hub/v1/backups/uploads/{id}` | Get an uploaded configuration
[**list-backups-v1**](#list-backups-v1) | **Get** `/configuration-hub/v1/backups` | List backups
[**list-deploys-v1**](#list-deploys-v1) | **Get** `/configuration-hub/v1/deploys` | List deploys
[**list-drafts-v1**](#list-drafts-v1) | **Get** `/configuration-hub/v1/drafts` | List drafts
[**list-scheduled-actions-v1**](#list-scheduled-actions-v1) | **Get** `/configuration-hub/v1/scheduled-actions` | List scheduled actions
[**list-uploaded-configurations-v1**](#list-uploaded-configurations-v1) | **Get** `/configuration-hub/v1/backups/uploads` | List uploaded configurations
[**update-object-mappings-v1**](#update-object-mappings-v1) | **Post** `/configuration-hub/v1/object-mappings/{sourceOrg}/bulk-patch` | Bulk updates object mappings
[**update-scheduled-action-v1**](#update-scheduled-action-v1) | **Patch** `/configuration-hub/v1/scheduled-actions/{id}` | Update scheduled action


## create-deploy-v1
Create a deploy
This API performs a deploy based on an existing daft.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-deploy-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDeployV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployrequest** | [**Deployrequest**](../models/deployrequest) | The deploy request body. | 

### Return type

[**Deployresponse**](../models/deployresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    deployrequest := []byte(`{"draftId":"c9a38d8c-5edf-4182-9d39-f6581d3ebd05"}`) // Deployrequest | The deploy request body.

    var deployrequest v1.Deployrequest
    if err := json.Unmarshal(deployrequest, &deployrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.CreateDeployV1(context.Background()).Deployrequest(deployrequest).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.CreateDeployV1(context.Background()).Deployrequest(deployrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateDeployV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDeployV1`: Deployresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateDeployV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-object-mapping-v1
Creates an object mapping
This creates an object mapping between current org and source org.
Source org should be "default" when creating an object mapping that is not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-object-mapping-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceOrg** | **string** | The name of the source org. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateObjectMappingV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **objectmappingrequest** | [**Objectmappingrequest**](../models/objectmappingrequest) | The object mapping request body. | 

### Return type

[**Objectmappingresponse**](../models/objectmappingresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    objectmappingrequest := []byte(`{"objectType":"GOVERNANCE_GROUP","jsonPath":"$.description","sourceValue":"Sample Governance Group","targetValue":"Sample Governance Group - Updated","enabled":true}`) // Objectmappingrequest | The object mapping request body.

    var objectmappingrequest v1.Objectmappingrequest
    if err := json.Unmarshal(objectmappingrequest, &objectmappingrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.CreateObjectMappingV1(context.Background(), sourceOrg).Objectmappingrequest(objectmappingrequest).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.CreateObjectMappingV1(context.Background(), sourceOrg).Objectmappingrequest(objectmappingrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateObjectMappingV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateObjectMappingV1`: Objectmappingresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateObjectMappingV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-object-mappings-v1
Bulk creates object mappings
This creates a set of object mappings (Max 25) between current org and source org.
Source org should be "default" when creating object mappings that are not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-object-mappings-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceOrg** | **string** | The name of the source org. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateObjectMappingsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **objectmappingbulkcreaterequest** | [**Objectmappingbulkcreaterequest**](../models/objectmappingbulkcreaterequest) | The bulk create object mapping request body. | 

### Return type

[**Objectmappingbulkcreateresponse**](../models/objectmappingbulkcreateresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    objectmappingbulkcreaterequest := []byte(`{"newObjectsMappings":[{"objectType":"SOURCE","jsonPath":"$.name","sourceValue":"Original SOURCE Name","targetValue":"New SOURCE Name","enabled":true},{"objectType":"IDENTITY","jsonPath":"$.name","sourceValue":"Original IDENTITY Name","targetValue":"New IDENTITY Name ","enabled":true}]}`) // Objectmappingbulkcreaterequest | The bulk create object mapping request body.

    var objectmappingbulkcreaterequest v1.Objectmappingbulkcreaterequest
    if err := json.Unmarshal(objectmappingbulkcreaterequest, &objectmappingbulkcreaterequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.CreateObjectMappingsV1(context.Background(), sourceOrg).Objectmappingbulkcreaterequest(objectmappingbulkcreaterequest).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.CreateObjectMappingsV1(context.Background(), sourceOrg).Objectmappingbulkcreaterequest(objectmappingbulkcreaterequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateObjectMappingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateObjectMappingsV1`: Objectmappingbulkcreateresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateObjectMappingsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-scheduled-action-v1
Create scheduled action
This API creates a new scheduled action for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-scheduled-action-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateScheduledActionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledactionpayload** | [**Scheduledactionpayload**](../models/scheduledactionpayload) | The scheduled action creation request body. | 

### Return type

[**Scheduledactionresponse**](../models/scheduledactionresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    scheduledactionpayload := []byte(`{"jobType":"BACKUP","startTime":"2024-08-16T14:16:58.389Z","cronString":"0 0 * * * *","timeZoneId":"America/Chicago","content":{"name":"Daily Backup","backupOptions":{"includeTypes":["SOURCE","IDENTITY"],"objectOptions":{"SOURCE":{"includedNames":["Source1","Source2"]}}}}}`) // Scheduledactionpayload | The scheduled action creation request body.

    var scheduledactionpayload v1.Scheduledactionpayload
    if err := json.Unmarshal(scheduledactionpayload, &scheduledactionpayload); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.CreateScheduledActionV1(context.Background()).Scheduledactionpayload(scheduledactionpayload).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.CreateScheduledActionV1(context.Background()).Scheduledactionpayload(scheduledactionpayload).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateScheduledActionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateScheduledActionV1`: Scheduledactionresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateScheduledActionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-uploaded-configuration-v1
Upload a configuration
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects) for more information about supported objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-uploaded-configuration-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateUploadedConfigurationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | ***os.File** | JSON file containing the objects to be imported. | 
 **name** | **string** | Name that will be assigned to the uploaded configuration file. | 

### Return type

[**Backupresponse**](../models/backupresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    data := BINARY_DATA_HERE // *os.File | JSON file containing the objects to be imported. # *os.File | JSON file containing the objects to be imported.
    name := `name_example` // string | Name that will be assigned to the uploaded configuration file. # string | Name that will be assigned to the uploaded configuration file.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.CreateUploadedConfigurationV1(context.Background()).Data(data).Name(name).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.CreateUploadedConfigurationV1(context.Background()).Data(data).Name(name).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.CreateUploadedConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateUploadedConfigurationV1`: Backupresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.CreateUploadedConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-backup-v1
Delete a backup
This API deletes an existing backup for the current tenant.

On success, this endpoint will return an empty response.

The backup id can be obtained from the response after a backup was successfully created, or from the list backups endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-backup-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the backup to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBackupV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    id := `07659d7d-2cce-47c0-9e49-185787ee565a` // string | The id of the backup to delete. # string | The id of the backup to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ConfigurationHubAPI.DeleteBackupV1(context.Background(), id).Execute()
	  //r, err := apiClient.ConfigurationHubAPI.DeleteBackupV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteBackupV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-draft-v1
Delete a draft
This API deletes an existing draft for the current tenant.

On success, this endpoint will return an empty response.

The draft id can be obtained from the response after a draft was successfully created, or from the list drafts endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-draft-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the draft to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDraftV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    id := `07659d7d-2cce-47c0-9e49-185787ee565a` // string | The id of the draft to delete. # string | The id of the draft to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ConfigurationHubAPI.DeleteDraftV1(context.Background(), id).Execute()
	  //r, err := apiClient.ConfigurationHubAPI.DeleteDraftV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteDraftV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-object-mapping-v1
Deletes an object mapping
This deletes an existing object mapping.
Source org should be "default" when deleting an object mapping that is not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-object-mapping-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceOrg** | **string** | The name of the source org. | 
**objectMappingId** | **string** | The id of the object mapping to be deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteObjectMappingV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    objectMappingId := `3d6e0144-963f-4bd6-8d8d-d77b4e507ce4` // string | The id of the object mapping to be deleted. # string | The id of the object mapping to be deleted.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ConfigurationHubAPI.DeleteObjectMappingV1(context.Background(), sourceOrg, objectMappingId).Execute()
	  //r, err := apiClient.ConfigurationHubAPI.DeleteObjectMappingV1(context.Background(), sourceOrg, objectMappingId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteObjectMappingV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-scheduled-action-v1
Delete scheduled action
This API deletes an existing scheduled action.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-scheduled-action-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the scheduled action. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteScheduledActionV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    id := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | The ID of the scheduled action. # string | The ID of the scheduled action.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ConfigurationHubAPI.DeleteScheduledActionV1(context.Background(), id).Execute()
	  //r, err := apiClient.ConfigurationHubAPI.DeleteScheduledActionV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteScheduledActionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-uploaded-configuration-v1
Delete an uploaded configuration
This API deletes an uploaded configuration based on Id.

On success, this endpoint will return an empty response.

The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-uploaded-configuration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the uploaded configuration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUploadedConfigurationV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    id := `3d0fe04b-57df-4a46-a83b-8f04b0f9d10b` // string | The id of the uploaded configuration. # string | The id of the uploaded configuration.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ConfigurationHubAPI.DeleteUploadedConfigurationV1(context.Background(), id).Execute()
	  //r, err := apiClient.ConfigurationHubAPI.DeleteUploadedConfigurationV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.DeleteUploadedConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-deploy-v1
Get a deploy
This API gets an existing deploy for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-deploy-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the deploy. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDeployV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Deployresponse**](../models/deployresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    id := `3d0fe04b-57df-4a46-a83b-8f04b0f9d10b` // string | The id of the deploy. # string | The id of the deploy.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.GetDeployV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.GetDeployV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.GetDeployV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDeployV1`: Deployresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.GetDeployV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-object-mappings-v1
Gets list of object mappings
This gets a list of existing object mappings between current org and source org.
Source org should be "default" when getting object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:read

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-object-mappings-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceOrg** | **string** | The name of the source org. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetObjectMappingsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Objectmappingresponse**](../models/objectmappingresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.GetObjectMappingsV1(context.Background(), sourceOrg).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.GetObjectMappingsV1(context.Background(), sourceOrg).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.GetObjectMappingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetObjectMappingsV1`: []Objectmappingresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.GetObjectMappingsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-uploaded-configuration-v1
Get an uploaded configuration
This API gets an existing uploaded configuration for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-uploaded-configuration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the uploaded configuration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUploadedConfigurationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Backupresponse**](../models/backupresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    id := `3d0fe04b-57df-4a46-a83b-8f04b0f9d10b` // string | The id of the uploaded configuration. # string | The id of the uploaded configuration.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.GetUploadedConfigurationV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.GetUploadedConfigurationV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.GetUploadedConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUploadedConfigurationV1`: Backupresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.GetUploadedConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-backups-v1
List backups
This API gets a list of existing backups for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-backups-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListBackupsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* | 

### Return type

[**[]Backupresponse**](../models/backupresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    filters := `status eq "COMPLETE"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.ListBackupsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.ListBackupsV1(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.ListBackupsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListBackupsV1`: []Backupresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.ListBackupsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-deploys-v1
List deploys
This API gets a list of deploys for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-deploys-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListDeploysV1Request struct via the builder pattern


### Return type

[**ListDeploysV1200Response**](../models/list-deploys-v1200-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.ListDeploysV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.ListDeploysV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.ListDeploysV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListDeploysV1`: ListDeploysV1200Response
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.ListDeploysV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-drafts-v1
List drafts
This API gets a list of existing drafts for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-drafts-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListDraftsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* | 

### Return type

[**[]Draftresponse**](../models/draftresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    filters := `status eq "COMPLETE"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.ListDraftsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.ListDraftsV1(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.ListDraftsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListDraftsV1`: []Draftresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.ListDraftsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-scheduled-actions-v1
List scheduled actions
This API gets a list of existing scheduled actions for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-scheduled-actions-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListScheduledActionsV1Request struct via the builder pattern


### Return type

[**[]Scheduledactionresponse**](../models/scheduledactionresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.ListScheduledActionsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.ListScheduledActionsV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.ListScheduledActionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListScheduledActionsV1`: []Scheduledactionresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.ListScheduledActionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-uploaded-configurations-v1
List uploaded configurations
This API gets a list of existing uploaded configurations for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-uploaded-configurations-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListUploadedConfigurationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* | 

### Return type

[**[]Backupresponse**](../models/backupresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    filters := `status eq "COMPLETE"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.ListUploadedConfigurationsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.ListUploadedConfigurationsV1(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.ListUploadedConfigurationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListUploadedConfigurationsV1`: []Backupresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.ListUploadedConfigurationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-object-mappings-v1
Bulk updates object mappings
This updates a set of object mappings, only enabled and targetValue fields can be updated.
Source org should be "default" when updating object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-object-mappings-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceOrg** | **string** | The name of the source org. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateObjectMappingsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **objectmappingbulkpatchrequest** | [**Objectmappingbulkpatchrequest**](../models/objectmappingbulkpatchrequest) | The object mapping request body. | 

### Return type

[**Objectmappingbulkpatchresponse**](../models/objectmappingbulkpatchresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    sourceOrg := `source-org` // string | The name of the source org. # string | The name of the source org.
    objectmappingbulkpatchrequest := []byte(`{"patches":{"603b1a61-d03d-4ed1-864f-a508fbd1995d":[{"op":"replace","path":"/enabled","value":true}],"00bece34-f50d-4227-8878-76f620b5a971":[{"op":"replace","path":"/targetValue","value":"New Target Value"}]}}`) // Objectmappingbulkpatchrequest | The object mapping request body.

    var objectmappingbulkpatchrequest v1.Objectmappingbulkpatchrequest
    if err := json.Unmarshal(objectmappingbulkpatchrequest, &objectmappingbulkpatchrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.UpdateObjectMappingsV1(context.Background(), sourceOrg).Objectmappingbulkpatchrequest(objectmappingbulkpatchrequest).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.UpdateObjectMappingsV1(context.Background(), sourceOrg).Objectmappingbulkpatchrequest(objectmappingbulkpatchrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.UpdateObjectMappingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateObjectMappingsV1`: Objectmappingbulkpatchresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.UpdateObjectMappingsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-scheduled-action-v1
Update scheduled action
This API updates an existing scheduled action using JSON Patch format.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-scheduled-action-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the scheduled action. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateScheduledActionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatch** | [**Jsonpatch**](../models/jsonpatch) | The JSON Patch document containing the changes to apply to the scheduled action. | 

### Return type

[**Scheduledactionresponse**](../models/scheduledactionresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/configuration_hub"
)

func main() {
    id := `0f11f2a4-7c94-4bf3-a2bd-742580fe3bde` // string | The ID of the scheduled action. # string | The ID of the scheduled action.
    jsonpatch := []byte(`[{"op":"replace","path":"/content/name","value":"Updated Backup Name"},{"op":"replace","path":"/cronString","value":"0 0 9 * * ?"}]`) // Jsonpatch | The JSON Patch document containing the changes to apply to the scheduled action.

    var jsonpatch v1.Jsonpatch
    if err := json.Unmarshal(jsonpatch, &jsonpatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConfigurationHubAPI.UpdateScheduledActionV1(context.Background(), id).Jsonpatch(jsonpatch).Execute()
	  //resp, r, err := apiClient.ConfigurationHubAPI.UpdateScheduledActionV1(context.Background(), id).Jsonpatch(jsonpatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConfigurationHubAPI.UpdateScheduledActionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateScheduledActionV1`: Scheduledactionresponse
    fmt.Fprintf(os.Stdout, "Response from `ConfigurationHubAPI.UpdateScheduledActionV1`: %v\n", resp)
}
```

[[Back to top]](#)

