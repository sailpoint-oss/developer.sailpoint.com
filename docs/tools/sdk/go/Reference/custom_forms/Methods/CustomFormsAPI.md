---
id: v1-custom-forms
title: CustomForms
pagination_label: CustomForms
sidebar_label: CustomForms
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CustomForms', 'V1CustomForms'] 
slug: /tools/sdk/go/customforms/methods/custom-forms
tags: ['SDK', 'Software Development Kit', 'CustomForms', 'V1CustomForms']
---

# CustomFormsAPI
  Use this API to build and manage custom forms.
With this functionality in place, administrators can create and view form definitions and form instances.

Forms are composed of sections and fields. Sections split the form into logical groups of fields and fields are the data collection points within the form. Configure conditions to modify elements of the form as the responder provides input. Create form inputs to pass information from a calling feature, like a workflow, to your form.

Forms can be used within workflows as an action or as a trigger. The Form Action allows you to assign a form as a step in a running workflow, suspending the workflow until the form is submitted or times out, and the workflow resumes. The Form Submitted Trigger initiates a workflow when a form is submitted. The trigger can be configured to initiate on submission of a full form, a form element with any value, or a form element with a particular value.

Refer to [Forms](https://documentation.sailpoint.com/saas/help/forms/index.html) for more information about using forms in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-form-definition-dynamic-schema-v1**](#create-form-definition-dynamic-schema-v1) | **Post** `/form-definitions/v1/forms-action-dynamic-schema` | Generate json schema dynamically.
[**create-form-definition-file-request-v1**](#create-form-definition-file-request-v1) | **Post** `/form-definitions/v1/{formDefinitionID}/upload` | Upload new form definition file.
[**create-form-definition-v1**](#create-form-definition-v1) | **Post** `/form-definitions/v1` | Creates a form definition.
[**create-form-instance-v1**](#create-form-instance-v1) | **Post** `/form-instances/v1` | Creates a form instance.
[**delete-form-definition-v1**](#delete-form-definition-v1) | **Delete** `/form-definitions/v1/{formDefinitionID}` | Deletes a form definition.
[**export-form-definitions-by-tenant-v1**](#export-form-definitions-by-tenant-v1) | **Get** `/form-definitions/v1/export` | List form definitions by tenant.
[**get-file-from-s3-v1**](#get-file-from-s3-v1) | **Get** `/form-definitions/v1/{formDefinitionID}/file/{fileID}` | Download definition file by fileid.
[**get-form-definition-by-key-v1**](#get-form-definition-by-key-v1) | **Get** `/form-definitions/v1/{formDefinitionID}` | Return a form definition.
[**get-form-instance-by-key-v1**](#get-form-instance-by-key-v1) | **Get** `/form-instances/v1/{formInstanceID}` | Returns a form instance.
[**get-form-instance-file-v1**](#get-form-instance-file-v1) | **Get** `/form-instances/v1/{formInstanceID}/file/{fileID}` | Download instance file by fileid.
[**import-form-definitions-v1**](#import-form-definitions-v1) | **Post** `/form-definitions/v1/import` | Import form definitions from export.
[**patch-form-definition-v1**](#patch-form-definition-v1) | **Patch** `/form-definitions/v1/{formDefinitionID}` | Patch a form definition.
[**patch-form-instance-v1**](#patch-form-instance-v1) | **Patch** `/form-instances/v1/{formInstanceID}` | Patch a form instance.
[**search-form-definitions-by-tenant-v1**](#search-form-definitions-by-tenant-v1) | **Get** `/form-definitions/v1` | Export form definitions by tenant.
[**search-form-element-data-by-element-idv1**](#search-form-element-data-by-element-idv1) | **Get** `/form-instances/v1/{formInstanceID}/data-source/{formElementID}` | Retrieves dynamic data by element.
[**search-form-instances-by-tenant-v1**](#search-form-instances-by-tenant-v1) | **Get** `/form-instances/v1` | List form instances by tenant.
[**search-pre-defined-select-options-v1**](#search-pre-defined-select-options-v1) | **Get** `/form-definitions/v1/predefined-select-options` | List predefined select options.
[**show-preview-data-source-v1**](#show-preview-data-source-v1) | **Post** `/form-definitions/v1/{formDefinitionID}/data-source` | Preview form definition data source.


## create-form-definition-dynamic-schema-v1
Generate json schema dynamically.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-form-definition-dynamic-schema-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFormDefinitionDynamicSchemaV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Formdefinitiondynamicschemarequest**](../models/formdefinitiondynamicschemarequest) | Body is the request payload to create a form definition dynamic schema | 

### Return type

[**Formdefinitiondynamicschemaresponse**](../models/formdefinitiondynamicschemaresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    body := []byte(`{"id":"sp:forms","attributes":{"formDefinitionId":"00000000-0000-0000-0000-000000000000"},"description":"AnotherDescription","type":"action","versionNumber":1}`) // Formdefinitiondynamicschemarequest | Body is the request payload to create a form definition dynamic schema (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.CreateFormDefinitionDynamicSchemaV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.CreateFormDefinitionDynamicSchemaV1(context.Background()).Body(body).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.CreateFormDefinitionDynamicSchemaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateFormDefinitionDynamicSchemaV1`: Formdefinitiondynamicschemaresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.CreateFormDefinitionDynamicSchemaV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-form-definition-file-request-v1
Upload new form definition file.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-form-definition-file-request-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | FormDefinitionID  String specifying FormDefinitionID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateFormDefinitionFileRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** | File specifying the multipart | 

### Return type

[**Formdefinitionfileuploadresponse**](../models/formdefinitionfileuploadresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    formDefinitionID := `00000000-0000-0000-0000-000000000000` // string | FormDefinitionID  String specifying FormDefinitionID # string | FormDefinitionID  String specifying FormDefinitionID
    file := BINARY_DATA_HERE // *os.File | File specifying the multipart # *os.File | File specifying the multipart

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.CreateFormDefinitionFileRequestV1(context.Background(), formDefinitionID).File(file).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.CreateFormDefinitionFileRequestV1(context.Background(), formDefinitionID).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.CreateFormDefinitionFileRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateFormDefinitionFileRequestV1`: Formdefinitionfileuploadresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.CreateFormDefinitionFileRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-form-definition-v1
Creates a form definition.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-form-definition-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFormDefinitionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Createformdefinitionrequest**](../models/createformdefinitionrequest) | Body is the request payload to create form definition request | 

### Return type

[**Formdefinitionresponse**](../models/formdefinitionresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    body := []byte(`{"name":"my form","description":"my form description","owner":{"type":"IDENTITY","id":"00000000-0000-0000-0000-000000000000"},"formElements":[{"id":"000000000000","elementType":"SECTION","config":{"alignment":"LEFT","description":"elementType must be 'SECTION' for the root formElements,  child formElements must be within the 'config' attribute","label":"Section","labelStyle":"h2","showLabel":true,"formElements":[{"id":"0000000000000","key":"textField","elementType":"TEXT","config":{"default":"","description":"","helpText":"form element type text","label":"Text Field","placeholder":"","required":false},"validations":[]}]}}]}`) // Createformdefinitionrequest | Body is the request payload to create form definition request (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.CreateFormDefinitionV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.CreateFormDefinitionV1(context.Background()).Body(body).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.CreateFormDefinitionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateFormDefinitionV1`: Formdefinitionresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.CreateFormDefinitionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-form-instance-v1
Creates a form instance.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-form-instance-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFormInstanceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Createforminstancerequest**](../models/createforminstancerequest) | Body is the request payload to create a form instance | 

### Return type

[**Forminstanceresponse**](../models/forminstanceresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    body := []byte(`{"expire":"2023-06-20T15:57:55.332882Z","formDefinitionId":"00000000-0000-0000-0000-000000000000","recipients":[{"type":"IDENTITY","id":"an-identity-id"}],"createdBy":{"type":"WORKFLOW_EXECUTION","id":"a-workflow-execution-id"}}`) // Createforminstancerequest | Body is the request payload to create a form instance (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.CreateFormInstanceV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.CreateFormInstanceV1(context.Background()).Body(body).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.CreateFormInstanceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateFormInstanceV1`: Forminstanceresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.CreateFormInstanceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-form-definition-v1
Deletes a form definition.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-form-definition-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | Form definition ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFormDefinitionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**map[string]interface{}**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    formDefinitionID := `00000000-0000-0000-0000-000000000000` // string | Form definition ID # string | Form definition ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.DeleteFormDefinitionV1(context.Background(), formDefinitionID).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.DeleteFormDefinitionV1(context.Background(), formDefinitionID).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.DeleteFormDefinitionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteFormDefinitionV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.DeleteFormDefinitionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## export-form-definitions-by-tenant-v1
List form definitions by tenant.
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-form-definitions-by-tenant-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExportFormDefinitionsByTenantV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** | [default to &quot;name&quot;]

### Return type

[**[]ExportFormDefinitionsByTenantV1200ResponseInner**](../models/export-form-definitions-by-tenant-v1200-response-inner)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    offset := 0 // int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 // int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
    filters := `name sw "my form"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to "name") # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to "name")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.ExportFormDefinitionsByTenantV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.ExportFormDefinitionsByTenantV1(context.Background()).Offset(offset).Limit(limit).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.ExportFormDefinitionsByTenantV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportFormDefinitionsByTenantV1`: []ExportFormDefinitionsByTenantV1200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.ExportFormDefinitionsByTenantV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-file-from-s3-v1
Download definition file by fileid.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-file-from-s3-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | FormDefinitionID  Form definition ID | 
**fileID** | **string** | FileID  String specifying the hashed name of the uploaded file we are retrieving. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFileFromS3V1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[***os.File**](https://pkg.go.dev/os)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, image/jpeg, image/png, application/octet-stream

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    formDefinitionID := `00000000-0000-0000-0000-000000000000` // string | FormDefinitionID  Form definition ID # string | FormDefinitionID  Form definition ID
    fileID := `00000031N0J7R2B57M8YG73J7M.png` // string | FileID  String specifying the hashed name of the uploaded file we are retrieving. # string | FileID  String specifying the hashed name of the uploaded file we are retrieving.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.GetFileFromS3V1(context.Background(), formDefinitionID, fileID).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.GetFileFromS3V1(context.Background(), formDefinitionID, fileID).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.GetFileFromS3V1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFileFromS3V1`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.GetFileFromS3V1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-form-definition-by-key-v1
Return a form definition.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-form-definition-by-key-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | Form definition ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFormDefinitionByKeyV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Formdefinitionresponse**](../models/formdefinitionresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    formDefinitionID := `00000000-0000-0000-0000-000000000000` // string | Form definition ID # string | Form definition ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.GetFormDefinitionByKeyV1(context.Background(), formDefinitionID).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.GetFormDefinitionByKeyV1(context.Background(), formDefinitionID).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.GetFormDefinitionByKeyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFormDefinitionByKeyV1`: Formdefinitionresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.GetFormDefinitionByKeyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-form-instance-by-key-v1
Returns a form instance.
Parameter `{formInstanceID}` should match a form instance ID.

Only the assigned recipient (`recipients[].id` when `type` is `IDENTITY`) may call this.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-form-instance-by-key-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formInstanceID** | **string** | Form instance ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFormInstanceByKeyV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Forminstanceresponse**](../models/forminstanceresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    formInstanceID := `00000000-0000-0000-0000-000000000000` // string | Form instance ID # string | Form instance ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.GetFormInstanceByKeyV1(context.Background(), formInstanceID).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.GetFormInstanceByKeyV1(context.Background(), formInstanceID).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.GetFormInstanceByKeyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFormInstanceByKeyV1`: Forminstanceresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.GetFormInstanceByKeyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-form-instance-file-v1
Download instance file by fileid.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-form-instance-file-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formInstanceID** | **string** | FormInstanceID  Form instance ID | 
**fileID** | **string** | FileID  String specifying the hashed name of the uploaded file we are retrieving. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFormInstanceFileV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[***os.File**](https://pkg.go.dev/os)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, image/jpeg, image/png, application/octet-stream

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    formInstanceID := `00000000-0000-0000-0000-000000000000` // string | FormInstanceID  Form instance ID # string | FormInstanceID  Form instance ID
    fileID := `00000031N0J7R2B57M8YG73J7M.png` // string | FileID  String specifying the hashed name of the uploaded file we are retrieving. # string | FileID  String specifying the hashed name of the uploaded file we are retrieving.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.GetFormInstanceFileV1(context.Background(), formInstanceID, fileID).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.GetFormInstanceFileV1(context.Background(), formInstanceID, fileID).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.GetFormInstanceFileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFormInstanceFileV1`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.GetFormInstanceFileV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-form-definitions-v1
Import form definitions from export.


[API Spec](https://developer.sailpoint.com/docs/api/v1/import-form-definitions-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportFormDefinitionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[]ImportFormDefinitionsV1RequestInner**](../models/import-form-definitions-v1-request-inner) | Body is the request payload to import form definitions | 

### Return type

[**ImportFormDefinitionsV1202Response**](../models/import-form-definitions-v1202-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    body := []byte(`[{"version":1,"self":{"name":"All fields not required","id":"05ed4edb-d0a9-41d9-ad0c-2f6e486ec4aa","type":"FORM_DEFINITION"},"object":{"id":"05ed4edb-d0a9-41d9-ad0c-2f6e486ec4aa","name":"All fields not required","description":"description","owner":{"type":"IDENTITY","id":"3447d8ec2602455ab6f1e8408a0f0150"},"usedBy":[{"type":"WORKFLOW","id":"5008594c-dacc-4295-8fee-41df60477304"},{"type":"WORKFLOW","id":"97e75a75-c179-4fbc-a2da-b5fa4aaa8743"}],"formInput":[{"type":"STRING","label":"input1","description":"A single dynamic scalar value (i.e. number, string, date, etc) that can be passed into the form for use in conditional logic"}],"formElements":[{"id":"3069272797630701","elementType":"SECTION","config":{"label":"First Section","formElements":[{"id":"3069272797630700","elementType":"TEXT","key":"firstName","config":{"label":"First Name"}},{"id":"3498415402897539","elementType":"TEXT","key":"lastName","config":{"label":"Last Name"}}]}}],"formConditions":[{"ruleOperator":"AND","rules":[{"sourceType":"INPUT","source":"Department","operator":"EQ","valueType":"STRING","value":"Sales"}],"effects":[{"effectType":"HIDE","config":{"element":"2614088730489570"}}]}],"created":"2022-10-04T19:27:04.456Z","modified":"2022-11-16T20:45:02.172Z"}}]`) // []ImportFormDefinitionsV1RequestInner | Body is the request payload to import form definitions (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.ImportFormDefinitionsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.ImportFormDefinitionsV1(context.Background()).Body(body).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.ImportFormDefinitionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportFormDefinitionsV1`: ImportFormDefinitionsV1202Response
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.ImportFormDefinitionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-form-definition-v1
Patch a form definition.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-form-definition-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | Form definition ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchFormDefinitionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **[]map[string]map[string]interface{}** | Body is the request payload to patch a form definition, check: https://jsonpatch.com | 

### Return type

[**Formdefinitionresponse**](../models/formdefinitionresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    formDefinitionID := `00000000-0000-0000-0000-000000000000` // string | Form definition ID # string | Form definition ID
    body := []byte(`[{"op":"replace","path":"/description","value":"test-description"}]`) // []map[string]map[string]interface{} | Body is the request payload to patch a form definition, check: https://jsonpatch.com (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.PatchFormDefinitionV1(context.Background(), formDefinitionID).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.PatchFormDefinitionV1(context.Background(), formDefinitionID).Body(body).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.PatchFormDefinitionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchFormDefinitionV1`: Formdefinitionresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.PatchFormDefinitionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-form-instance-v1
Patch a form instance.
Parameter `{formInstanceID}` should match a form instance ID.

Only the assigned recipient (`recipients[].id` when `type` is `IDENTITY`) may call this.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-form-instance-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formInstanceID** | **string** | Form instance ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchFormInstanceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **[]map[string]map[string]interface{}** | Body is the request payload to patch a form instance, check: https://jsonpatch.com | 

### Return type

[**Forminstanceresponse**](../models/forminstanceresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    formInstanceID := `00000000-0000-0000-0000-000000000000` // string | Form instance ID # string | Form instance ID
    body := []byte(`[{"op":"replace","path":"/state","value":"SUBMITTED"},{"op":"replace","path":"/formData","value":{"a-key-1":"a-value-1","a-key-2":true,"a-key-3":1}}]`) // []map[string]map[string]interface{} | Body is the request payload to patch a form instance, check: https://jsonpatch.com (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.PatchFormInstanceV1(context.Background(), formInstanceID).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.PatchFormInstanceV1(context.Background(), formInstanceID).Body(body).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.PatchFormInstanceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchFormInstanceV1`: Forminstanceresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.PatchFormInstanceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-form-definitions-by-tenant-v1
Export form definitions by tenant.
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-form-definitions-by-tenant-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchFormDefinitionsByTenantV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** | [default to &quot;name&quot;]

### Return type

[**Listformdefinitionsbytenantresponse**](../models/listformdefinitionsbytenantresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    offset := 250 // int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 // int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
    filters := `name sw "my form"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to "name") # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to "name")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.SearchFormDefinitionsByTenantV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.SearchFormDefinitionsByTenantV1(context.Background()).Offset(offset).Limit(limit).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.SearchFormDefinitionsByTenantV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchFormDefinitionsByTenantV1`: Listformdefinitionsbytenantresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.SearchFormDefinitionsByTenantV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-form-element-data-by-element-idv1
Retrieves dynamic data by element.
Parameter `{formInstanceID}` should match a form instance ID.
Parameter `{formElementID}` should match a form element ID at the data source configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-form-element-data-by-element-idv1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formInstanceID** | **string** | Form instance ID | 
**formElementID** | **string** | Form element ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiSearchFormElementDataByElementIDV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the &#x60;in&#x60; operator. The &#x60;not&#x60; composite operator must be used in front of the field. For example, the following is valid: &#x60;not value in (\&quot;ID01\&quot;)&#x60; | 
 **query** | **string** | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \&quot;starts with\&quot; filter against  several fields. | 

### Return type

[**Listformelementdatabyelementidresponse**](../models/listformelementdatabyelementidresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    formInstanceID := `00000000-0000-0000-0000-000000000000` // string | Form instance ID # string | Form instance ID
    formElementID := `1` // string | Form element ID # string | Form element ID
    limit := 250 // int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
    filters := `value eq "ID01"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (\"ID01\")` (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (\"ID01\")` (optional)
    query := `support` // string | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \"starts with\" filter against  several fields. (optional) # string | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \"starts with\" filter against  several fields. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.SearchFormElementDataByElementIDV1(context.Background(), formInstanceID, formElementID).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.SearchFormElementDataByElementIDV1(context.Background(), formInstanceID, formElementID).Limit(limit).Filters(filters).Query(query).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.SearchFormElementDataByElementIDV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchFormElementDataByElementIDV1`: Listformelementdatabyelementidresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.SearchFormElementDataByElementIDV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-form-instances-by-tenant-v1
List form instances by tenant.
Returns a list of form instances for the tenant. Optionally filter by form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-form-instances-by-tenant-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchFormInstancesByTenantV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **formDefinitionId**: *eq* | 

### Return type

[**[]Listforminstancesbytenantresponse**](../models/listforminstancesbytenantresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    offset := 0 // int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 100 // int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
    filters := `formDefinitionId eq "351c1daa-56f6-4bbf-b32c-49844c0b716e"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **formDefinitionId**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **formDefinitionId**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.SearchFormInstancesByTenantV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.SearchFormInstancesByTenantV1(context.Background()).Offset(offset).Limit(limit).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.SearchFormInstancesByTenantV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchFormInstancesByTenantV1`: []Listforminstancesbytenantresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.SearchFormInstancesByTenantV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-pre-defined-select-options-v1
List predefined select options.
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-pre-defined-select-options-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiSearchPreDefinedSelectOptionsV1Request struct via the builder pattern


### Return type

[**Listpredefinedselectoptionsresponse**](../models/listpredefinedselectoptionsresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.SearchPreDefinedSelectOptionsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.SearchPreDefinedSelectOptionsV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.SearchPreDefinedSelectOptionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchPreDefinedSelectOptionsV1`: Listpredefinedselectoptionsresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.SearchPreDefinedSelectOptionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## show-preview-data-source-v1
Preview form definition data source.


[API Spec](https://developer.sailpoint.com/docs/api/v1/show-preview-data-source-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | Form definition ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiShowPreviewDataSourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 10]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the &#x60;in&#x60; operator. The &#x60;not&#x60; composite operator must be used in front of the field. For example, the following is valid: &#x60;not value in (\&quot;ID01\&quot;)&#x60; | 
 **query** | **string** | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \&quot;starts with\&quot; filter against  several fields. | 
 **formelementpreviewrequest** | [**Formelementpreviewrequest**](../models/formelementpreviewrequest) | Body is the request payload to create a form definition dynamic schema | 

### Return type

[**Previewdatasourceresponse**](../models/previewdatasourceresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/custom_forms"
)

func main() {
    formDefinitionID := `00000000-0000-0000-0000-000000000000` // string | Form definition ID # string | Form definition ID
    limit := 10 // int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 10) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 10)
    filters := `value eq "ID01"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (\"ID01\")` (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (\"ID01\")` (optional)
    query := `ac` // string | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \"starts with\" filter against  several fields. (optional) # string | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \"starts with\" filter against  several fields. (optional)
    formelementpreviewrequest := []byte(``) // Formelementpreviewrequest | Body is the request payload to create a form definition dynamic schema (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomFormsAPI.ShowPreviewDataSourceV1(context.Background(), formDefinitionID).Execute()
	  //resp, r, err := apiClient.CustomFormsAPI.ShowPreviewDataSourceV1(context.Background(), formDefinitionID).Limit(limit).Filters(filters).Query(query).Formelementpreviewrequest(formelementpreviewrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.ShowPreviewDataSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ShowPreviewDataSourceV1`: Previewdatasourceresponse
    fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.ShowPreviewDataSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

