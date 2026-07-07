---
id: v1-sp-config
title: SPConfig
pagination_label: SPConfig
sidebar_label: SPConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SPConfig', 'V1SPConfig'] 
slug: /tools/sdk/go/spconfig/methods/sp-config
tags: ['SDK', 'Software Development Kit', 'SPConfig', 'V1SPConfig']
---

# SPConfigAPI
  Import and export configuration for some objects between tenants. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export-sp-config-v1**](#export-sp-config-v1) | **Post** `/sp-config/v1/export` | Initiates configuration objects export job
[**get-sp-config-export-status-v1**](#get-sp-config-export-status-v1) | **Get** `/sp-config/v1/export/{id}` | Get export job status
[**get-sp-config-export-v1**](#get-sp-config-export-v1) | **Get** `/sp-config/v1/export/{id}/download` | Download export job result.
[**get-sp-config-import-status-v1**](#get-sp-config-import-status-v1) | **Get** `/sp-config/v1/import/{id}` | Get import job status
[**get-sp-config-import-v1**](#get-sp-config-import-v1) | **Get** `/sp-config/v1/import/{id}/download` | Download import job result
[**import-sp-config-v1**](#import-sp-config-v1) | **Post** `/sp-config/v1/import` | Initiates configuration objects import job
[**list-sp-config-objects-v1**](#list-sp-config-objects-v1) | **Get** `/sp-config/v1/config-objects` | List config objects


## export-sp-config-v1
Initiates configuration objects export job
This post will export objects from the tenant to a JSON configuration file.
For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-sp-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExportSpConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportpayload** | [**Exportpayload**](../models/exportpayload) | Export options control what will be included in the export. | 

### Return type

[**Spconfigexportjob**](../models/spconfigexportjob)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/sp_config"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sp_config"
)

func main() {
    exportpayload := []byte(`{"description":"Export all available objects","excludeTypes":[],"includeTypes":["ACCESS_PROFILE","ACCESS_REQUEST_CONFIG","ATTR_SYNC_SOURCE_CONFIG","AUTH_ORG","CAMPAIGN_FILTER","CONNECTOR_RULE","FORM_DEFINITION","GOVERNANCE_GROUP","IDENTITY_OBJECT_CONFIG","IDENTITY_PROFILE","LIFECYCLE_STATE","NOTIFICATION_TEMPLATE","PASSWORD_POLICY","PASSWORD_SYNC_GROUP","PUBLIC_IDENTITIES_CONFIG","ROLE","RULE","SEGMENT","SERVICE_DESK_INTEGRATION","SOD_POLICY","SOURCE","TAG","TRANSFORM","TRIGGER_SUBSCRIPTION","WORKFLOW"],"objectOptions":{}}`) // Exportpayload | Export options control what will be included in the export.

    var exportpayload v1.Exportpayload
    if err := json.Unmarshal(exportpayload, &exportpayload); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SPConfigAPI.ExportSpConfigV1(context.Background()).Exportpayload(exportpayload).Execute()
	  //resp, r, err := apiClient.SPConfigAPI.ExportSpConfigV1(context.Background()).Exportpayload(exportpayload).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.ExportSpConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportSpConfigV1`: Spconfigexportjob
    fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.ExportSpConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sp-config-export-status-v1
Get export job status
This gets the status of the export job identified by the `id` parameter.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-export-status-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the export job whose status will be returned. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSpConfigExportStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Spconfigexportjobstatus**](../models/spconfigexportjobstatus)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sp_config"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the export job whose status will be returned. # string | The ID of the export job whose status will be returned.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SPConfigAPI.GetSpConfigExportStatusV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SPConfigAPI.GetSpConfigExportStatusV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.GetSpConfigExportStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSpConfigExportStatusV1`: Spconfigexportjobstatus
    fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.GetSpConfigExportStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sp-config-export-v1
Download export job result.
This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-export-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the export job whose results will be downloaded. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSpConfigExportV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Spconfigexportresults**](../models/spconfigexportresults)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sp_config"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the export job whose results will be downloaded. # string | The ID of the export job whose results will be downloaded.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SPConfigAPI.GetSpConfigExportV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SPConfigAPI.GetSpConfigExportV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.GetSpConfigExportV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSpConfigExportV1`: Spconfigexportresults
    fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.GetSpConfigExportV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sp-config-import-status-v1
Get import job status
'This gets the status of the import job identified by the `id` parameter.

 For more information about the object types that currently support import functionality,
 refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).'


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-import-status-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the import job whose status will be returned. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSpConfigImportStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Spconfigimportjobstatus**](../models/spconfigimportjobstatus)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sp_config"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the import job whose status will be returned. # string | The ID of the import job whose status will be returned.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SPConfigAPI.GetSpConfigImportStatusV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SPConfigAPI.GetSpConfigImportStatusV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.GetSpConfigImportStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSpConfigImportStatusV1`: Spconfigimportjobstatus
    fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.GetSpConfigImportStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sp-config-import-v1
Download import job result
This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import.
The request will need the following security scope:
- sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-import-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the import job whose results will be downloaded. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSpConfigImportV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Spconfigimportresults**](../models/spconfigimportresults)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sp_config"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the import job whose results will be downloaded. # string | The ID of the import job whose results will be downloaded.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SPConfigAPI.GetSpConfigImportV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SPConfigAPI.GetSpConfigImportV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.GetSpConfigImportV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSpConfigImportV1`: Spconfigimportresults
    fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.GetSpConfigImportV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-sp-config-v1
Initiates configuration objects import job
This post will import objects from a JSON configuration file into a tenant.
By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted.
The backup is provided so that the state of the configuration prior to the import is available for inspection or restore if needed.
The backup can be skipped by setting "excludeBackup" to true in the import options.
If a backup is performed, the id of the backup will be provided in the ImportResult as the "exportJobId". This can be downloaded 
using the `/sp-config/export/{exportJobId}/download` endpoint.

You cannot currently import from the Non-Employee Lifecycle Management (NELM) source. You cannot use this endpoint to back up or store NELM data. 

For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).


[API Spec](https://developer.sailpoint.com/docs/api/v1/import-sp-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportSpConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | ***os.File** | JSON file containing the objects to be imported. | 
 **preview** | **bool** | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \&quot;true\&quot;, no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  | [default to false]
 **options** | [**Importoptions**](../models/importoptions) |  | 

### Return type

[**Spconfigjob**](../models/spconfigjob)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sp_config"
)

func main() {
    data := BINARY_DATA_HERE // *os.File | JSON file containing the objects to be imported. # *os.File | JSON file containing the objects to be imported.
    preview := true // bool | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to false) # bool | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to false)
    options := []byte(``) // Importoptions |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SPConfigAPI.ImportSpConfigV1(context.Background()).Data(data).Execute()
	  //resp, r, err := apiClient.SPConfigAPI.ImportSpConfigV1(context.Background()).Data(data).Preview(preview).Options(options).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.ImportSpConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportSpConfigV1`: Spconfigjob
    fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.ImportSpConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-sp-config-objects-v1
List config objects
Get a list of object configurations that the tenant export/import service knows.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-sp-config-objects-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListSpConfigObjectsV1Request struct via the builder pattern


### Return type

[**[]Spconfigobject**](../models/spconfigobject)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sp_config"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SPConfigAPI.ListSpConfigObjectsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SPConfigAPI.ListSpConfigObjectsV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SPConfigAPI.ListSpConfigObjectsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSpConfigObjectsV1`: []Spconfigobject
    fmt.Fprintf(os.Stdout, "Response from `SPConfigAPI.ListSpConfigObjectsV1`: %v\n", resp)
}
```

[[Back to top]](#)

