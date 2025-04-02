---
id: custom-forms
title: CustomForms
pagination_label: CustomForms
sidebar_label: CustomForms
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CustomForms', 'CustomForms'] 
slug: /tools/sdk/go//methods/custom-forms
tags: ['SDK', 'Software Development Kit', 'CustomForms', 'CustomForms']
---

# CustomFormsAPI
  Use this API to build and manage custom forms.
With this functionality in place, administrators can create and view form definitions and form instances.

Forms are composed of sections and fields. Sections split the form into logical groups of fields and fields are the data collection points within the form. Configure conditions to modify elements of the form as the responder provides input. Create form inputs to pass information from a calling feature, like a workflow, to your form.

Forms can be used within workflows as an action or as a trigger. The Form Action allows you to assign a form as a step in a running workflow, suspending the workflow until the form is submitted or times out, and the workflow resumes. The Form Submitted Trigger initiates a workflow when a form is submitted. The trigger can be configured to initiate on submission of a full form, a form element with any value, or a form element with a particular value.

Refer to [Forms](https://documentation.sailpoint.com/saas/help/forms/index.html) for more information about using forms in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-form-definition**](#create-form-definition) | **Post** `/form-definitions` | Creates a form definition.
[**create-form-definition-dynamic-schema**](#create-form-definition-dynamic-schema) | **Post** `/form-definitions/forms-action-dynamic-schema` | Generate JSON Schema dynamically.
[**create-form-definition-file-request**](#create-form-definition-file-request) | **Post** `/form-definitions/{formDefinitionID}/upload` | Upload new form definition file.
[**create-form-instance**](#create-form-instance) | **Post** `/form-instances` | Creates a form instance.
[**delete-form-definition**](#delete-form-definition) | **Delete** `/form-definitions/{formDefinitionID}` | Deletes a form definition.
[**export-form-definitions-by-tenant**](#export-form-definitions-by-tenant) | **Get** `/form-definitions/export` | List form definitions by tenant.
[**get-file-from-s3**](#get-file-from-s3) | **Get** `/form-definitions/{formDefinitionID}/file/{fileID}` | Download definition file by fileId.
[**get-form-definition-by-key**](#get-form-definition-by-key) | **Get** `/form-definitions/{formDefinitionID}` | Return a form definition.
[**get-form-instance-by-key**](#get-form-instance-by-key) | **Get** `/form-instances/{formInstanceID}` | Returns a form instance.
[**get-form-instance-file**](#get-form-instance-file) | **Get** `/form-instances/{formInstanceID}/file/{fileID}` | Download instance file by fileId.
[**import-form-definitions**](#import-form-definitions) | **Post** `/form-definitions/import` | Import form definitions from export.
[**patch-form-definition**](#patch-form-definition) | **Patch** `/form-definitions/{formDefinitionID}` | Patch a form definition.
[**patch-form-instance**](#patch-form-instance) | **Patch** `/form-instances/{formInstanceID}` | Patch a form instance.
[**search-form-definitions-by-tenant**](#search-form-definitions-by-tenant) | **Get** `/form-definitions` | Export form definitions by tenant.
[**search-form-element-data-by-element-id**](#search-form-element-data-by-element-id) | **Get** `/form-instances/{formInstanceID}/data-source/{formElementID}` | Retrieves dynamic data by element.
[**search-form-instances-by-tenant**](#search-form-instances-by-tenant) | **Get** `/form-instances` | List form instances by tenant.
[**search-pre-defined-select-options**](#search-pre-defined-select-options) | **Get** `/form-definitions/predefined-select-options` | List predefined select options.
[**show-preview-data-source**](#show-preview-data-source) | **Post** `/form-definitions/{formDefinitionID}/data-source` | Preview form definition data source.


## create-form-definition
Creates a form definition.


[API Spec](https://developer.sailpoint.com/docs/api//create-form-definition)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFormDefinitionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFormDefinitionRequest**](../models/create-form-definition-request) | Body is the request payload to create form definition request | 

### Return type

[**FormDefinitionResponse**](../models/form-definition-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    body := fmt.Sprintf(`{
          "owner" : {
            "name" : "Grant Smith",
            "id" : "2c9180867624cbd7017642d8c8c81f67",
            "type" : "IDENTITY"
          },
          "formConditions" : [ {
            "ruleOperator" : "AND",
            "effects" : [ {
              "config" : {
                "defaultValueLabel" : "Access to Remove",
                "element" : "8110662963316867"
              },
              "effectType" : "HIDE"
            }, {
              "config" : {
                "defaultValueLabel" : "Access to Remove",
                "element" : "8110662963316867"
              },
              "effectType" : "HIDE"
            } ],
            "rules" : [ {
              "sourceType" : "ELEMENT",
              "valueType" : "STRING",
              "source" : "department",
              "value" : "Engineering",
              "operator" : "EQ"
            }, {
              "sourceType" : "ELEMENT",
              "valueType" : "STRING",
              "source" : "department",
              "value" : "Engineering",
              "operator" : "EQ"
            } ]
          }, {
            "ruleOperator" : "AND",
            "effects" : [ {
              "config" : {
                "defaultValueLabel" : "Access to Remove",
                "element" : "8110662963316867"
              },
              "effectType" : "HIDE"
            }, {
              "config" : {
                "defaultValueLabel" : "Access to Remove",
                "element" : "8110662963316867"
              },
              "effectType" : "HIDE"
            } ],
            "rules" : [ {
              "sourceType" : "ELEMENT",
              "valueType" : "STRING",
              "source" : "department",
              "value" : "Engineering",
              "operator" : "EQ"
            }, {
              "sourceType" : "ELEMENT",
              "valueType" : "STRING",
              "source" : "department",
              "value" : "Engineering",
              "operator" : "EQ"
            } ]
          } ],
          "formInput" : [ {
            "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
            "id" : "00000000-0000-0000-0000-000000000000",
            "label" : "input1",
            "type" : "STRING"
          }, {
            "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
            "id" : "00000000-0000-0000-0000-000000000000",
            "label" : "input1",
            "type" : "STRING"
          } ],
          "name" : "My form",
          "description" : "My form description",
          "usedBy" : [ {
            "name" : "Access Request Form",
            "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
            "type" : "WORKFLOW"
          }, {
            "name" : "Access Request Form",
            "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
            "type" : "WORKFLOW"
          } ],
          "formElements" : [ {
            "id" : "00000000-0000-0000-0000-000000000000",
            "validations" : [ {
              "validationType" : "REQUIRED"
            }, {
              "validationType" : "REQUIRED"
            } ],
            "elementType" : "TEXT",
            "config" : {
              "label" : "Department"
            },
            "key" : "department"
          }, {
            "id" : "00000000-0000-0000-0000-000000000000",
            "validations" : [ {
              "validationType" : "REQUIRED"
            }, {
              "validationType" : "REQUIRED"
            } ],
            "elementType" : "TEXT",
            "config" : {
              "label" : "Department"
            },
            "key" : "department"
          } ]
        }`) # CreateFormDefinitionRequest | Body is the request payload to create form definition request (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.CreateFormDefinition(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.CreateFormDefinition``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFormDefinition`: FormDefinitionResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.CreateFormDefinition`: %v\n", resp)
}
```

[[Back to top]](#)

## create-form-definition-dynamic-schema
Generate JSON Schema dynamically.


[API Spec](https://developer.sailpoint.com/docs/api//create-form-definition-dynamic-schema)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFormDefinitionDynamicSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FormDefinitionDynamicSchemaRequest**](../models/form-definition-dynamic-schema-request) | Body is the request payload to create a form definition dynamic schema | 

### Return type

[**FormDefinitionDynamicSchemaResponse**](../models/form-definition-dynamic-schema-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    body := fmt.Sprintf(`{
          "description" : "A description",
          "attributes" : {
            "formDefinitionId" : "00000000-0000-0000-0000-000000000000"
          },
          "id" : "00000000-0000-0000-0000-000000000000",
          "type" : "action",
          "versionNumber" : 1
        }`) # FormDefinitionDynamicSchemaRequest | Body is the request payload to create a form definition dynamic schema (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.CreateFormDefinitionDynamicSchema(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.CreateFormDefinitionDynamicSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFormDefinitionDynamicSchema`: FormDefinitionDynamicSchemaResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.CreateFormDefinitionDynamicSchema`: %v\n", resp)
}
```

[[Back to top]](#)

## create-form-definition-file-request
Upload new form definition file.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api//create-form-definition-file-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | FormDefinitionID  String specifying FormDefinitionID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateFormDefinitionFileRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** | File specifying the multipart | 

### Return type

[**FormDefinitionFileUploadResponse**](../models/form-definition-file-upload-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    formDefinitionID := 00000000-0000-0000-0000-000000000000 # string | FormDefinitionID  String specifying FormDefinitionID # string | FormDefinitionID  String specifying FormDefinitionID
    file := BINARY_DATA_HERE # *os.File | File specifying the multipart # *os.File | File specifying the multipart

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.CreateFormDefinitionFileRequest(context.Background(), formDefinitionID).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.CreateFormDefinitionFileRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFormDefinitionFileRequest`: FormDefinitionFileUploadResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.CreateFormDefinitionFileRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## create-form-instance
Creates a form instance.


[API Spec](https://developer.sailpoint.com/docs/api//create-form-instance)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFormInstanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFormInstanceRequest**](../models/create-form-instance-request) | Body is the request payload to create a form instance | 

### Return type

[**FormInstanceResponse**](../models/form-instance-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    body := fmt.Sprintf(`{
          "formInput" : {
            "input1" : "Sales"
          },
          "standAloneForm" : false,
          "createdBy" : {
            "id" : "00000000-0000-0000-0000-000000000000",
            "type" : "WORKFLOW_EXECUTION"
          },
          "recipients" : [ {
            "id" : "00000000-0000-0000-0000-000000000000",
            "type" : "IDENTITY"
          }, {
            "id" : "00000000-0000-0000-0000-000000000000",
            "type" : "IDENTITY"
          } ],
          "expire" : "2023-08-12T20:14:57.74486Z",
          "formDefinitionId" : "00000000-0000-0000-0000-000000000000",
          "state" : "ASSIGNED",
          "ttl" : 1571827560
        }`) # CreateFormInstanceRequest | Body is the request payload to create a form instance (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.CreateFormInstance(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.CreateFormInstance``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFormInstance`: FormInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.CreateFormInstance`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-form-definition
Deletes a form definition.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api//delete-form-definition)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | Form definition ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFormDefinitionRequest struct via the builder pattern


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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    formDefinitionID := 00000000-0000-0000-0000-000000000000 # string | Form definition ID # string | Form definition ID

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.DeleteFormDefinition(context.Background(), formDefinitionID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.DeleteFormDefinition``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteFormDefinition`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.DeleteFormDefinition`: %v\n", resp)
}
```

[[Back to top]](#)

## export-form-definitions-by-tenant
List form definitions by tenant.
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api//export-form-definitions-by-tenant)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExportFormDefinitionsByTenantRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** | [default to &quot;name&quot;]

### Return type

[**[]ExportFormDefinitionsByTenant200ResponseInner**](../models/export-form-definitions-by-tenant200-response-inner)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    offset := 0 # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
    filters := name sw "my form" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional)
    sorters := name # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to "name") # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to "name")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.ExportFormDefinitionsByTenant(context.Background()).Offset(offset).Limit(limit).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.ExportFormDefinitionsByTenant``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ExportFormDefinitionsByTenant`: []ExportFormDefinitionsByTenant200ResponseInner
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.ExportFormDefinitionsByTenant`: %v\n", resp)
}
```

[[Back to top]](#)

## get-file-from-s3
Download definition file by fileId.


[API Spec](https://developer.sailpoint.com/docs/api//get-file-from-s3)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | FormDefinitionID  Form definition ID | 
**fileID** | **string** | FileID  String specifying the hashed name of the uploaded file we are retrieving. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFileFromS3Request struct via the builder pattern


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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    formDefinitionID := 00000000-0000-0000-0000-000000000000 # string | FormDefinitionID  Form definition ID # string | FormDefinitionID  Form definition ID
    fileID := 00000031N0J7R2B57M8YG73J7M.png # string | FileID  String specifying the hashed name of the uploaded file we are retrieving. # string | FileID  String specifying the hashed name of the uploaded file we are retrieving.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.GetFileFromS3(context.Background(), formDefinitionID, fileID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.GetFileFromS3``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetFileFromS3`: *os.File
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.GetFileFromS3`: %v\n", resp)
}
```

[[Back to top]](#)

## get-form-definition-by-key
Return a form definition.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api//get-form-definition-by-key)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | Form definition ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFormDefinitionByKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**FormDefinitionResponse**](../models/form-definition-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    formDefinitionID := 00000000-0000-0000-0000-000000000000 # string | Form definition ID # string | Form definition ID

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.GetFormDefinitionByKey(context.Background(), formDefinitionID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.GetFormDefinitionByKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetFormDefinitionByKey`: FormDefinitionResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.GetFormDefinitionByKey`: %v\n", resp)
}
```

[[Back to top]](#)

## get-form-instance-by-key
Returns a form instance.
Parameter `{formInstanceID}` should match a form instance ID.

[API Spec](https://developer.sailpoint.com/docs/api//get-form-instance-by-key)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formInstanceID** | **string** | Form instance ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFormInstanceByKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**FormInstanceResponse**](../models/form-instance-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    formInstanceID := 00000000-0000-0000-0000-000000000000 # string | Form instance ID # string | Form instance ID

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.GetFormInstanceByKey(context.Background(), formInstanceID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.GetFormInstanceByKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetFormInstanceByKey`: FormInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.GetFormInstanceByKey`: %v\n", resp)
}
```

[[Back to top]](#)

## get-form-instance-file
Download instance file by fileId.


[API Spec](https://developer.sailpoint.com/docs/api//get-form-instance-file)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formInstanceID** | **string** | FormInstanceID  Form instance ID | 
**fileID** | **string** | FileID  String specifying the hashed name of the uploaded file we are retrieving. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFormInstanceFileRequest struct via the builder pattern


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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    formInstanceID := 00000000-0000-0000-0000-000000000000 # string | FormInstanceID  Form instance ID # string | FormInstanceID  Form instance ID
    fileID := 00000031N0J7R2B57M8YG73J7M.png # string | FileID  String specifying the hashed name of the uploaded file we are retrieving. # string | FileID  String specifying the hashed name of the uploaded file we are retrieving.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.GetFormInstanceFile(context.Background(), formInstanceID, fileID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.GetFormInstanceFile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetFormInstanceFile`: *os.File
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.GetFormInstanceFile`: %v\n", resp)
}
```

[[Back to top]](#)

## import-form-definitions
Import form definitions from export.


[API Spec](https://developer.sailpoint.com/docs/api//import-form-definitions)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportFormDefinitionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[]ImportFormDefinitionsRequestInner**](../models/import-form-definitions-request-inner) | Body is the request payload to import form definitions | 

### Return type

[**ImportFormDefinitions202Response**](../models/import-form-definitions202-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    body := fmt.Sprintf(`[{version=1, self={name=All fields not required, id=05ed4edb-d0a9-41d9-ad0c-2f6e486ec4aa, type=FORM_DEFINITION}, object={id=05ed4edb-d0a9-41d9-ad0c-2f6e486ec4aa, name=All fields not required, description=description, owner={type=IDENTITY, id=3447d8ec2602455ab6f1e8408a0f0150}, usedBy=[{type=WORKFLOW, id=5008594c-dacc-4295-8fee-41df60477304}, {type=WORKFLOW, id=97e75a75-c179-4fbc-a2da-b5fa4aaa8743}], formInput=[{type=STRING, label=input1, description=A single dynamic scalar value (i.e. number, string, date, etc) that can be passed into the form for use in conditional logic}], formElements=[{id=3069272797630701, elementType=SECTION, config={label=First Section, formElements=[{id=3069272797630700, elementType=TEXT, key=firstName, config={label=First Name}}, {id=3498415402897539, elementType=TEXT, key=lastName, config={label=Last Name}}]}}], formConditions=[{ruleOperator=AND, rules=[{sourceType=INPUT, source=Department, operator=EQ, valueType=STRING, value=Sales}], effects=[{effectType=HIDE, config={element=2614088730489570}}]}], created=2022-10-04T19:27:04.456Z, modified=2022-11-16T20:45:02.172Z}}]`) # []ImportFormDefinitionsRequestInner | Body is the request payload to import form definitions (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.ImportFormDefinitions(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.ImportFormDefinitions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportFormDefinitions`: ImportFormDefinitions202Response
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.ImportFormDefinitions`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-form-definition
Patch a form definition.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api//patch-form-definition)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | Form definition ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchFormDefinitionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **[]map[string]map[string]interface{}** | Body is the request payload to patch a form definition, check: https://jsonpatch.com | 

### Return type

[**FormDefinitionResponse**](../models/form-definition-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    formDefinitionID := 00000000-0000-0000-0000-000000000000 # string | Form definition ID # string | Form definition ID
    body := fmt.Sprintf(`[{op=replace, path=/description, value=test-description}]`) # []map[string]map[string]interface{} | Body is the request payload to patch a form definition, check: https://jsonpatch.com (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.PatchFormDefinition(context.Background(), formDefinitionID).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.PatchFormDefinition``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchFormDefinition`: FormDefinitionResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.PatchFormDefinition`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-form-instance
Patch a form instance.
Parameter `{formInstanceID}` should match a form instance ID.

[API Spec](https://developer.sailpoint.com/docs/api//patch-form-instance)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formInstanceID** | **string** | Form instance ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchFormInstanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **[]map[string]map[string]interface{}** | Body is the request payload to patch a form instance, check: https://jsonpatch.com | 

### Return type

[**FormInstanceResponse**](../models/form-instance-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    formInstanceID := 00000000-0000-0000-0000-000000000000 # string | Form instance ID # string | Form instance ID
    body := fmt.Sprintf(`[{op=replace, path=/state, value=SUBMITTED}, {op=replace, path=/formData, value={a-key-1=a-value-1, a-key-2=true, a-key-3=1}}]`) # []map[string]map[string]interface{} | Body is the request payload to patch a form instance, check: https://jsonpatch.com (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.PatchFormInstance(context.Background(), formInstanceID).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.PatchFormInstance``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchFormInstance`: FormInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.PatchFormInstance`: %v\n", resp)
}
```

[[Back to top]](#)

## search-form-definitions-by-tenant
Export form definitions by tenant.
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api//search-form-definitions-by-tenant)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchFormDefinitionsByTenantRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** | [default to &quot;name&quot;]

### Return type

[**ListFormDefinitionsByTenantResponse**](../models/list-form-definitions-by-tenant-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    offset := 250 # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
    filters := name sw "my form" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional)
    sorters := name # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to "name") # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to "name")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.SearchFormDefinitionsByTenant(context.Background()).Offset(offset).Limit(limit).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.SearchFormDefinitionsByTenant``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchFormDefinitionsByTenant`: ListFormDefinitionsByTenantResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.SearchFormDefinitionsByTenant`: %v\n", resp)
}
```

[[Back to top]](#)

## search-form-element-data-by-element-id
Retrieves dynamic data by element.
Parameter `{formInstanceID}` should match a form instance ID.
Parameter `{formElementID}` should match a form element ID at the data source configuration.

[API Spec](https://developer.sailpoint.com/docs/api//search-form-element-data-by-element-id)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formInstanceID** | **string** | Form instance ID | 
**formElementID** | **string** | Form element ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiSearchFormElementDataByElementIDRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the &#x60;in&#x60; operator. The &#x60;not&#x60; composite operator must be used in front of the field. For example, the following is valid: &#x60;not value in (\&quot;ID01\&quot;)&#x60; | 
 **query** | **string** | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \&quot;starts with\&quot; filter against  several fields. | 

### Return type

[**ListFormElementDataByElementIDResponse**](../models/list-form-element-data-by-element-id-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    formInstanceID := 00000000-0000-0000-0000-000000000000 # string | Form instance ID # string | Form instance ID
    formElementID := 1 # string | Form element ID # string | Form element ID
    limit := 250 # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
    filters := value eq "ID01" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (\"ID01\")` (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (\"ID01\")` (optional)
    query := support # string | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \"starts with\" filter against  several fields. (optional) # string | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \"starts with\" filter against  several fields. (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.SearchFormElementDataByElementID(context.Background(), formInstanceID, formElementID).Limit(limit).Filters(filters).Query(query).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.SearchFormElementDataByElementID``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchFormElementDataByElementID`: ListFormElementDataByElementIDResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.SearchFormElementDataByElementID`: %v\n", resp)
}
```

[[Back to top]](#)

## search-form-instances-by-tenant
List form instances by tenant.
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api//search-form-instances-by-tenant)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiSearchFormInstancesByTenantRequest struct via the builder pattern


### Return type

[**[]ListFormInstancesByTenantResponse**](../models/list-form-instances-by-tenant-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.SearchFormInstancesByTenant(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.SearchFormInstancesByTenant``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchFormInstancesByTenant`: []ListFormInstancesByTenantResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.SearchFormInstancesByTenant`: %v\n", resp)
}
```

[[Back to top]](#)

## search-pre-defined-select-options
List predefined select options.
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api//search-pre-defined-select-options)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiSearchPreDefinedSelectOptionsRequest struct via the builder pattern


### Return type

[**ListPredefinedSelectOptionsResponse**](../models/list-predefined-select-options-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.SearchPreDefinedSelectOptions(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.SearchPreDefinedSelectOptions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchPreDefinedSelectOptions`: ListPredefinedSelectOptionsResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.SearchPreDefinedSelectOptions`: %v\n", resp)
}
```

[[Back to top]](#)

## show-preview-data-source
Preview form definition data source.


[API Spec](https://developer.sailpoint.com/docs/api//show-preview-data-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**formDefinitionID** | **string** | Form definition ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiShowPreviewDataSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 10]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the &#x60;in&#x60; operator. The &#x60;not&#x60; composite operator must be used in front of the field. For example, the following is valid: &#x60;not value in (\&quot;ID01\&quot;)&#x60; | 
 **query** | **string** | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \&quot;starts with\&quot; filter against  several fields. | 
 **formElementPreviewRequest** | [**FormElementPreviewRequest**](../models/form-element-preview-request) | Body is the request payload to create a form definition dynamic schema | 

### Return type

[**PreviewDataSourceResponse**](../models/preview-data-source-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    formDefinitionID := 00000000-0000-0000-0000-000000000000 # string | Form definition ID # string | Form definition ID
    limit := 10 # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 10) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 10)
    filters := value eq "ID01" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (\"ID01\")` (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (\"ID01\")` (optional)
    query := ac # string | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \"starts with\" filter against  several fields. (optional) # string | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \"starts with\" filter against  several fields. (optional)
    formElementPreviewRequest := fmt.Sprintf(`{
          "dataSource" : {
            "config" : {
              "indices" : [ "identities" ],
              "query" : "*",
              "aggregationBucketField" : "attributes.cloudStatus.exact",
              "objectType" : "IDENTITY"
            },
            "dataSourceType" : "STATIC"
          }
        }`) # FormElementPreviewRequest | Body is the request payload to create a form definition dynamic schema (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..CustomFormsAPI.ShowPreviewDataSource(context.Background(), formDefinitionID).Limit(limit).Filters(filters).Query(query).FormElementPreviewRequest(formElementPreviewRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomFormsAPI.ShowPreviewDataSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ShowPreviewDataSource`: PreviewDataSourceResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomFormsAPI.ShowPreviewDataSource`: %v\n", resp)
}
```

[[Back to top]](#)

