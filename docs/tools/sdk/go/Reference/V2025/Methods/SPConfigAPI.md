---
id: v2025-sp-config
title: SPConfig
pagination_label: SPConfig
sidebar_label: SPConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SPConfig', 'V2025SPConfig'] 
slug: /tools/sdk/go/v2025/methods/sp-config
tags: ['SDK', 'Software Development Kit', 'SPConfig', 'V2025SPConfig']
---

# SPConfigAPI
  Import and export configuration for some objects between tenants. 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export-sp-config**](#export-sp-config) | **Post** `/sp-config/export` | Initiates configuration objects export job
[**get-sp-config-export**](#get-sp-config-export) | **Get** `/sp-config/export/{id}/download` | Download export job result.
[**get-sp-config-export-status**](#get-sp-config-export-status) | **Get** `/sp-config/export/{id}` | Get export job status
[**get-sp-config-import**](#get-sp-config-import) | **Get** `/sp-config/import/{id}/download` | Download import job result
[**get-sp-config-import-status**](#get-sp-config-import-status) | **Get** `/sp-config/import/{id}` | Get import job status
[**import-sp-config**](#import-sp-config) | **Post** `/sp-config/import` | Initiates configuration objects import job
[**list-sp-config-objects**](#list-sp-config-objects) | **Get** `/sp-config/config-objects` | List Config Objects


## export-sp-config
Initiates configuration objects export job
This post will export objects from the tenant to a JSON configuration file.
For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).

[API Spec](https://developer.sailpoint.com/docs/api/v2025/export-sp-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExportSpConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportPayload** | [**ExportPayload**](../models/export-payload) | Export options control what will be included in the export. | 

### Return type

[**SpConfigExportJob**](../models/sp-config-export-job)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
          "description" : "Export Job 1 Test"
        }`) // ExportPayload | Export options control what will be included in the export.

  
   var exportPayload v2025.ExportPayload
   if err := json.Unmarshal(data, &exportPayload); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.SPConfigAPI.ExportSpConfig(context.Background()).ExportPayload(exportPayload).Execute()
	//resp, r, err := apiClient.V2025.SPConfigAPI.ExportSpConfig(context.Background()).ExportPayload(exportPayload).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.ExportSpConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ExportSpConfig`: SpConfigExportJob
	fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.ExportSpConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sp-config-export
Download export job result.
This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sp-config-export)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the export job whose results will be downloaded. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSpConfigExportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SpConfigExportResults**](../models/sp-config-export-results)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the export job whose results will be downloaded. # string | The ID of the export job whose results will be downloaded.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.SPConfigAPI.GetSpConfigExport(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.SPConfigAPI.GetSpConfigExport(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.GetSpConfigExport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSpConfigExport`: SpConfigExportResults
	fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.GetSpConfigExport`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sp-config-export-status
Get export job status
This gets the status of the export job identified by the `id` parameter.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sp-config-export-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the export job whose status will be returned. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSpConfigExportStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SpConfigExportJobStatus**](../models/sp-config-export-job-status)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the export job whose status will be returned. # string | The ID of the export job whose status will be returned.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.SPConfigAPI.GetSpConfigExportStatus(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.SPConfigAPI.GetSpConfigExportStatus(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.GetSpConfigExportStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSpConfigExportStatus`: SpConfigExportJobStatus
	fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.GetSpConfigExportStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sp-config-import
Download import job result
This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import.
The request will need the following security scope:
- sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sp-config-import)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the import job whose results will be downloaded. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSpConfigImportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SpConfigImportResults**](../models/sp-config-import-results)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the import job whose results will be downloaded. # string | The ID of the import job whose results will be downloaded.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.SPConfigAPI.GetSpConfigImport(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.SPConfigAPI.GetSpConfigImport(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.GetSpConfigImport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSpConfigImport`: SpConfigImportResults
	fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.GetSpConfigImport`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sp-config-import-status
Get import job status
'This gets the status of the import job identified by the `id` parameter.

 For more information about the object types that currently support import functionality,
 refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).'


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sp-config-import-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the import job whose status will be returned. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSpConfigImportStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SpConfigImportJobStatus**](../models/sp-config-import-job-status)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the import job whose status will be returned. # string | The ID of the import job whose status will be returned.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.SPConfigAPI.GetSpConfigImportStatus(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.SPConfigAPI.GetSpConfigImportStatus(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.GetSpConfigImportStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSpConfigImportStatus`: SpConfigImportJobStatus
	fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.GetSpConfigImportStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## import-sp-config
Initiates configuration objects import job
This post will import objects from a JSON configuration file into a tenant.
By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted.
The backup is provided so that the state of the configuration prior to the import is available for inspection or restore if needed.
The backup can be skipped by setting "excludeBackup" to true in the import options.
If a backup is performed, the id of the backup will be provided in the ImportResult as the "exportJobId". This can be downloaded 
using the `/sp-config/export/{exportJobId}/download` endpoint.

You cannot currently import from the Non-Employee Lifecycle Management (NELM) source. You cannot use this endpoint to back up or store NELM data. 

For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).


[API Spec](https://developer.sailpoint.com/docs/api/v2025/import-sp-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportSpConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | ***os.File** | JSON file containing the objects to be imported. | 
 **preview** | **bool** | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \&quot;true\&quot;, no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  | [default to false]
 **options** | [**ImportOptions**](../models/import-options) |  | 

### Return type

[**SpConfigJob**](../models/sp-config-job)

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
    preview := true // bool | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to false) # bool | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to false)
    data := []byte(``) // ImportOptions |  (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.SPConfigAPI.ImportSpConfig(context.Background()).Data(data).Execute()
	//resp, r, err := apiClient.V2025.SPConfigAPI.ImportSpConfig(context.Background()).Data(data).Preview(preview).Options(options).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.ImportSpConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportSpConfig`: SpConfigJob
	fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.ImportSpConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## list-sp-config-objects
List Config Objects
Get a list of object configurations that the tenant export/import service knows.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-sp-config-objects)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListSpConfigObjectsRequest struct via the builder pattern


### Return type

[**[]SpConfigObject**](../models/sp-config-object)

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
    resp, r, err := apiClient.V2025.SPConfigAPI.ListSpConfigObjects(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.SPConfigAPI.ListSpConfigObjects(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.ListSpConfigObjects``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListSpConfigObjects`: []SpConfigObject
	fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.ListSpConfigObjects`: %v\n", resp)
}
```

[[Back to top]](#)

