# CustomForms

# CustomForms
  Use this API to build and manage custom forms.
With this functionality in place, administrators can create and view form definitions and form instances.

Forms are composed of sections and fields. Sections split the form into logical groups of fields and fields are the data collection points within the form. Configure conditions to modify elements of the form as the responder provides input. Create form inputs to pass information from a calling feature, like a workflow, to your form.

Forms can be used within workflows as an action or as a trigger. The Form Action allows you to assign a form as a step in a running workflow, suspending the workflow until the form is submitted or times out, and the workflow resumes. The Form Submitted Trigger initiates a workflow when a form is submitted. The trigger can be configured to initiate on submission of a full form, a form element with any value, or a form element with a particular value.

Refer to [Forms](https://documentation.sailpoint.com/saas/help/forms/index.html) for more information about using forms in Identity Security Cloud.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-FormDefinitionDynamicSchemaV1**](#create-form-definition-dynamic-schema-v1) | **POST** `/form-definitions/v1/forms-action-dynamic-schema` | Generate json schema dynamically.
[**New-FormDefinitionFileRequestV1**](#create-form-definition-file-request-v1) | **POST** `/form-definitions/v1/{formDefinitionID}/upload` | Upload new form definition file.
[**New-FormDefinitionV1**](#create-form-definition-v1) | **POST** `/form-definitions/v1` | Creates a form definition.
[**New-FormInstanceV1**](#create-form-instance-v1) | **POST** `/form-instances/v1` | Creates a form instance.
[**Remove-FormDefinitionV1**](#delete-form-definition-v1) | **DELETE** `/form-definitions/v1/{formDefinitionID}` | Deletes a form definition.
[**Export-FormDefinitionsByTenantV1**](#export-form-definitions-by-tenant-v1) | **GET** `/form-definitions/v1/export` | List form definitions by tenant.
[**Get-FileFromS3V1**](#get-file-from-s3-v1) | **GET** `/form-definitions/v1/{formDefinitionID}/file/{fileID}` | Download definition file by fileid.
[**Get-FormDefinitionByKeyV1**](#get-form-definition-by-key-v1) | **GET** `/form-definitions/v1/{formDefinitionID}` | Return a form definition.
[**Get-FormInstanceByKeyV1**](#get-form-instance-by-key-v1) | **GET** `/form-instances/v1/{formInstanceID}` | Returns a form instance.
[**Get-FormInstanceFileV1**](#get-form-instance-file-v1) | **GET** `/form-instances/v1/{formInstanceID}/file/{fileID}` | Download instance file by fileid.
[**Import-FormDefinitionsV1**](#import-form-definitions-v1) | **POST** `/form-definitions/v1/import` | Import form definitions from export.
[**Update-FormDefinitionV1**](#patch-form-definition-v1) | **PATCH** `/form-definitions/v1/{formDefinitionID}` | Patch a form definition.
[**Update-FormInstanceV1**](#patch-form-instance-v1) | **PATCH** `/form-instances/v1/{formInstanceID}` | Patch a form instance.
[**Search-FormDefinitionsByTenantV1**](#search-form-definitions-by-tenant-v1) | **GET** `/form-definitions/v1` | Export form definitions by tenant.
[**Search-FormElementDataByElementIDV1**](#search-form-element-data-by-element-idv1) | **GET** `/form-instances/v1/{formInstanceID}/data-source/{formElementID}` | Retrieves dynamic data by element.
[**Search-FormInstancesByTenantV1**](#search-form-instances-by-tenant-v1) | **GET** `/form-instances/v1` | List form instances by tenant.
[**Search-PreDefinedSelectOptionsV1**](#search-pre-defined-select-options-v1) | **GET** `/form-definitions/v1/predefined-select-options` | List predefined select options.
[**Show-PreviewDataSourceV1**](#show-preview-data-source-v1) | **POST** `/form-definitions/v1/{formDefinitionID}/data-source` | Preview form definition data source.


## create-form-definition-dynamic-schema-v1


[API Spec](https://developer.sailpoint.com/docs/api/create-form-definition-dynamic-schema-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Body | [**FormDefinitionDynamicSchemaRequest**](../models/form-definition-dynamic-schema-request) |   (optional) | Body is the request payload to create a form definition dynamic schema

### Return type
[**FormDefinitionDynamicSchemaResponse**](../models/form-definition-dynamic-schema-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a form elements dynamic schema | FormDefinitionDynamicSchemaResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the item not found | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Body = @"{
  "description" : "A description",
  "attributes" : {
    "formDefinitionId" : "00000000-0000-0000-0000-000000000000"
  },
  "id" : "00000000-0000-0000-0000-000000000000",
  "type" : "action",
  "versionNumber" : 1
}"@

# Generate json schema dynamically.

try {
    New-FormDefinitionDynamicSchemaV1 
    
    # Below is a request that includes all optional parameters
    # New-FormDefinitionDynamicSchemaV1 -Body $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-FormDefinitionDynamicSchemaV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-form-definition-file-request-v1
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/create-form-definition-file-request-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FormDefinitionID | **String** | True  | FormDefinitionID  String specifying FormDefinitionID
   | File | **System.IO.FileInfo** | True  | File specifying the multipart

### Return type
[**FormDefinitionFileUploadResponse**](../models/form-definition-file-upload-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Returns a new form definition file | FormDefinitionFileUploadResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the item not found | SearchFormDefinitionsByTenantV1400Response
413 | An error with payload size too large | SearchFormDefinitionsByTenantV1400Response
415 | An error with unsupported media type | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response
503 | An external service is not available | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$FormDefinitionID = "00000000-0000-0000-0000-000000000000" # String | FormDefinitionID  String specifying FormDefinitionID
$File =  # System.IO.FileInfo | File specifying the multipart

# Upload new form definition file.

try {
    New-FormDefinitionFileRequestV1 -FormDefinitionID $FormDefinitionID -File $File 
    
    # Below is a request that includes all optional parameters
    # New-FormDefinitionFileRequestV1 -FormDefinitionID $FormDefinitionID -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-FormDefinitionFileRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-form-definition-v1


[API Spec](https://developer.sailpoint.com/docs/api/create-form-definition-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Body | [**CreateFormDefinitionRequest**](../models/create-form-definition-request) |   (optional) | Body is the request payload to create form definition request

### Return type
[**FormDefinitionResponse**](../models/form-definition-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Returns a new form definition | FormDefinitionResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Body = @"{
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
}"@

# Creates a form definition.

try {
    New-FormDefinitionV1 
    
    # Below is a request that includes all optional parameters
    # New-FormDefinitionV1 -Body $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-FormDefinitionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-form-instance-v1


[API Spec](https://developer.sailpoint.com/docs/api/create-form-instance-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Body | [**CreateFormInstanceRequest**](../models/create-form-instance-request) |   (optional) | Body is the request payload to create a form instance

### Return type
[**FormInstanceResponse**](../models/form-instance-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Returns a new form instance | FormInstanceResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Body = @"{
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
}"@

# Creates a form instance.

try {
    New-FormInstanceV1 
    
    # Below is a request that includes all optional parameters
    # New-FormInstanceV1 -Body $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-FormInstanceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-form-definition-v1
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-form-definition-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FormDefinitionID | **String** | True  | Form definition ID

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Returns an empty body | SystemCollectionsHashtable
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the item not found | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$FormDefinitionID = "00000000-0000-0000-0000-000000000000" # String | Form definition ID

# Deletes a form definition.

try {
    Remove-FormDefinitionV1 -FormDefinitionID $FormDefinitionID 
    
    # Below is a request that includes all optional parameters
    # Remove-FormDefinitionV1 -FormDefinitionID $FormDefinitionID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-FormDefinitionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-form-definitions-by-tenant-v1
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api/export-form-definitions-by-tenant-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int64** |   (optional) (default to 0) | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0.
  Query | Limit | **Int64** |   (optional) (default to 250) | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in*
  Query | Sorters | **String** |   (optional) (default to "name") | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified**

### Return type
[**ExportFormDefinitionsByTenantV1200ResponseInner[]**](../models/export-form-definitions-by-tenant-v1200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a list of form definition objects by tenant used by SP-Config | ExportFormDefinitionsByTenantV1200ResponseInner[]
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 0 # Int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
$Limit = 250 # Int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
$Filters = 'name sw "my form"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to "name")

# List form definitions by tenant.

try {
    Export-FormDefinitionsByTenantV1 
    
    # Below is a request that includes all optional parameters
    # Export-FormDefinitionsByTenantV1 -Offset $Offset -Limit $Limit -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-FormDefinitionsByTenantV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-file-from-s3-v1


[API Spec](https://developer.sailpoint.com/docs/api/get-file-from-s3-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FormDefinitionID | **String** | True  | FormDefinitionID  Form definition ID
Path   | FileID | **String** | True  | FileID  String specifying the hashed name of the uploaded file we are retrieving.

### Return type
**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a file that is referred to by fileID and associated with the formDefinitionID | System.IO.FileInfo
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the item not found | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response
503 | An external service is not available | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json, image/jpeg, image/png, application/octet-stream

### Example
```powershell
$FormDefinitionID = "00000000-0000-0000-0000-000000000000" # String | FormDefinitionID  Form definition ID
$FileID = "00000031N0J7R2B57M8YG73J7M.png" # String | FileID  String specifying the hashed name of the uploaded file we are retrieving.

# Download definition file by fileid.

try {
    Get-FileFromS3V1 -FormDefinitionID $FormDefinitionID -FileID $FileID 
    
    # Below is a request that includes all optional parameters
    # Get-FileFromS3V1 -FormDefinitionID $FormDefinitionID -FileID $FileID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-FileFromS3V1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-form-definition-by-key-v1
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-form-definition-by-key-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FormDefinitionID | **String** | True  | Form definition ID

### Return type
[**FormDefinitionResponse**](../models/form-definition-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a form definition | FormDefinitionResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the item not found | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$FormDefinitionID = "00000000-0000-0000-0000-000000000000" # String | Form definition ID

# Return a form definition.

try {
    Get-FormDefinitionByKeyV1 -FormDefinitionID $FormDefinitionID 
    
    # Below is a request that includes all optional parameters
    # Get-FormDefinitionByKeyV1 -FormDefinitionID $FormDefinitionID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-FormDefinitionByKeyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-form-instance-by-key-v1
Parameter `{formInstanceID}` should match a form instance ID.

Only the assigned recipient (`recipients[].id` when `type` is `IDENTITY`) may call this.

[API Spec](https://developer.sailpoint.com/docs/api/get-form-instance-by-key-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FormInstanceID | **String** | True  | Form instance ID

### Return type
[**FormInstanceResponse**](../models/form-instance-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a form instance by its key | FormInstanceResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the item not found | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$FormInstanceID = "00000000-0000-0000-0000-000000000000" # String | Form instance ID

# Returns a form instance.

try {
    Get-FormInstanceByKeyV1 -FormInstanceID $FormInstanceID 
    
    # Below is a request that includes all optional parameters
    # Get-FormInstanceByKeyV1 -FormInstanceID $FormInstanceID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-FormInstanceByKeyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-form-instance-file-v1


[API Spec](https://developer.sailpoint.com/docs/api/get-form-instance-file-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FormInstanceID | **String** | True  | FormInstanceID  Form instance ID
Path   | FileID | **String** | True  | FileID  String specifying the hashed name of the uploaded file we are retrieving.

### Return type
**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a file that is referred to by fileID and associated with the formInstanceID | System.IO.FileInfo
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the item not found | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response
503 | An external service is not available | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json, image/jpeg, image/png, application/octet-stream

### Example
```powershell
$FormInstanceID = "00000000-0000-0000-0000-000000000000" # String | FormInstanceID  Form instance ID
$FileID = "00000031N0J7R2B57M8YG73J7M.png" # String | FileID  String specifying the hashed name of the uploaded file we are retrieving.

# Download instance file by fileid.

try {
    Get-FormInstanceFileV1 -FormInstanceID $FormInstanceID -FileID $FileID 
    
    # Below is a request that includes all optional parameters
    # Get-FormInstanceFileV1 -FormInstanceID $FormInstanceID -FileID $FileID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-FormInstanceFileV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-form-definitions-v1


[API Spec](https://developer.sailpoint.com/docs/api/import-form-definitions-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Body | [**[]ImportFormDefinitionsV1RequestInner**](../models/import-form-definitions-v1-request-inner) |   (optional) | Body is the request payload to import form definitions

### Return type
[**ImportFormDefinitionsV1202Response**](../models/import-form-definitions-v1202-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Returns statuses of those form definition objects imported | ImportFormDefinitionsV1202Response
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell






 $Body = @"[{"version":1,"self":{"name":"All fields not required","id":"05ed4edb-d0a9-41d9-ad0c-2f6e486ec4aa","type":"FORM_DEFINITION"},"object":{"id":"05ed4edb-d0a9-41d9-ad0c-2f6e486ec4aa","name":"All fields not required","description":"description","owner":{"type":"IDENTITY","id":"3447d8ec2602455ab6f1e8408a0f0150"},"usedBy":[{"type":"WORKFLOW","id":"5008594c-dacc-4295-8fee-41df60477304"},{"type":"WORKFLOW","id":"97e75a75-c179-4fbc-a2da-b5fa4aaa8743"}],"formInput":[{"type":"STRING","label":"input1","description":"A single dynamic scalar value (i.e. number, string, date, etc) that can be passed into the form for use in conditional logic"}],"formElements":[{"id":"3069272797630701","elementType":"SECTION","config":{"label":"First Section","formElements":[{"id":"3069272797630700","elementType":"TEXT","key":"firstName","config":{"label":"First Name"}},{"id":"3498415402897539","elementType":"TEXT","key":"lastName","config":{"label":"Last Name"}}]}}],"formConditions":[{"ruleOperator":"AND","rules":[{"sourceType":"INPUT","source":"Department","operator":"EQ","valueType":"STRING","value":"Sales"}],"effects":[{"effectType":"HIDE","config":{"element":"2614088730489570"}}]}],"created":"2022-10-04T19:27:04.456Z","modified":"2022-11-16T20:45:02.172Z"}}]"@ # ImportFormDefinitionsV1RequestInner[] | Body is the request payload to import form definitions (optional)
 

# Import form definitions from export.

try {
    Import-FormDefinitionsV1 
    
    # Below is a request that includes all optional parameters
    # Import-FormDefinitionsV1 -Body $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-FormDefinitionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-form-definition-v1
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/patch-form-definition-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FormDefinitionID | **String** | True  | Form definition ID
 Body  | Body | [**[]System.Collections.Hashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) |   (optional) | Body is the request payload to patch a form definition, check: https://jsonpatch.com

### Return type
[**FormDefinitionResponse**](../models/form-definition-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns the form definition updated | FormDefinitionResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$FormDefinitionID = "00000000-0000-0000-0000-000000000000" # String | Form definition ID
$Body = @{ key_example =  } # Map[] | Body is the request payload to patch a form definition, check: https://jsonpatch.com (optional)
 $Body = @"[{"op":"replace","path":"/description","value":"test-description"}]"@ # Map[] | Body is the request payload to patch a form definition, check: https://jsonpatch.com (optional)
 

# Patch a form definition.

try {
    Update-FormDefinitionV1 -FormDefinitionID $FormDefinitionID 
    
    # Below is a request that includes all optional parameters
    # Update-FormDefinitionV1 -FormDefinitionID $FormDefinitionID -Body $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-FormDefinitionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-form-instance-v1
Parameter `{formInstanceID}` should match a form instance ID.

Only the assigned recipient (`recipients[].id` when `type` is `IDENTITY`) may call this.

[API Spec](https://developer.sailpoint.com/docs/api/patch-form-instance-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FormInstanceID | **String** | True  | Form instance ID
 Body  | Body | [**[]System.Collections.Hashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) |   (optional) | Body is the request payload to patch a form instance, check: https://jsonpatch.com

### Return type
[**FormInstanceResponse**](../models/form-instance-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns the form instance updated | FormInstanceResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the item not found | SearchFormDefinitionsByTenantV1400Response
409 | An error with the request property conflicts with stored | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$FormInstanceID = "00000000-0000-0000-0000-000000000000" # String | Form instance ID
$Body = @{ key_example =  } # Map[] | Body is the request payload to patch a form instance, check: https://jsonpatch.com (optional)
 $Body = @"[{"op":"replace","path":"/state","value":"SUBMITTED"},{"op":"replace","path":"/formData","value":{"a-key-1":"a-value-1","a-key-2":true,"a-key-3":1}}]"@ # Map[] | Body is the request payload to patch a form instance, check: https://jsonpatch.com (optional)
 

# Patch a form instance.

try {
    Update-FormInstanceV1 -FormInstanceID $FormInstanceID 
    
    # Below is a request that includes all optional parameters
    # Update-FormInstanceV1 -FormInstanceID $FormInstanceID -Body $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-FormInstanceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-form-definitions-by-tenant-v1
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api/search-form-definitions-by-tenant-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int64** |   (optional) (default to 0) | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0.
  Query | Limit | **Int64** |   (optional) (default to 250) | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in*
  Query | Sorters | **String** |   (optional) (default to "name") | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified**

### Return type
[**ListFormDefinitionsByTenantResponse**](../models/list-form-definitions-by-tenant-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a list of form definitions by tenant | ListFormDefinitionsByTenantResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 250 # Int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
$Limit = 250 # Int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
$Filters = 'name sw "my form"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to "name")

# Export form definitions by tenant.

try {
    Search-FormDefinitionsByTenantV1 
    
    # Below is a request that includes all optional parameters
    # Search-FormDefinitionsByTenantV1 -Offset $Offset -Limit $Limit -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-FormDefinitionsByTenantV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-form-element-data-by-element-idv1
Parameter `{formInstanceID}` should match a form instance ID.
Parameter `{formElementID}` should match a form element ID at the data source configuration.

[API Spec](https://developer.sailpoint.com/docs/api/search-form-element-data-by-element-idv1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FormInstanceID | **String** | True  | Form instance ID
Path   | FormElementID | **String** | True  | Form element ID
  Query | Limit | **Int64** |   (optional) (default to 250) | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (""ID01"")`
  Query | Query | **String** |   (optional) | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a ""starts with"" filter against  several fields.

### Return type
[**ListFormElementDataByElementIDResponse**](../models/list-form-element-data-by-element-id-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Retrieves dynamic data to aid in correctly completing a valid form by form element ID from data source configuration | ListFormElementDataByElementIDResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the item not found | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$FormInstanceID = "00000000-0000-0000-0000-000000000000" # String | Form instance ID
$FormElementID = "1" # String | Form element ID
$Limit = 250 # Int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
$Filters = 'value eq "ID01"" # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (""ID01"')` (optional)
$Query = "support" # String | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a ""starts with"" filter against  several fields. (optional)

# Retrieves dynamic data by element.

try {
    Search-FormElementDataByElementIDV1 -FormInstanceID $FormInstanceID -FormElementID $FormElementID 
    
    # Below is a request that includes all optional parameters
    # Search-FormElementDataByElementIDV1 -FormInstanceID $FormInstanceID -FormElementID $FormElementID -Limit $Limit -Filters $Filters -Query $Query  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-FormElementDataByElementIDV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-form-instances-by-tenant-v1
Returns a list of form instances for the tenant. Optionally filter by form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/search-form-instances-by-tenant-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int64** |   (optional) (default to 0) | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0.
  Query | Limit | **Int64** |   (optional) (default to 250) | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **formDefinitionId**: *eq*

### Return type
[**ListFormInstancesByTenantResponse[]**](../models/list-form-instances-by-tenant-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a list of form instances by tenant | ListFormInstancesByTenantResponse[]
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests. The list form instances operation is limited to 50 requests per 10 seconds per tenant; reduce call frequency or wait before retrying. | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 0 # Int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
$Limit = 100 # Int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
$Filters = 'formDefinitionId eq "351c1daa-56f6-4bbf-b32c-49844c0b716e"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **formDefinitionId**: *eq* (optional)

# List form instances by tenant.

try {
    Search-FormInstancesByTenantV1 
    
    # Below is a request that includes all optional parameters
    # Search-FormInstancesByTenantV1 -Offset $Offset -Limit $Limit -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-FormInstancesByTenantV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-pre-defined-select-options-v1
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api/search-pre-defined-select-options-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**ListPredefinedSelectOptionsResponse**](../models/list-predefined-select-options-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a list of available predefined select options | ListPredefinedSelectOptionsResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List predefined select options.

try {
    Search-PreDefinedSelectOptionsV1 
    
    # Below is a request that includes all optional parameters
    # Search-PreDefinedSelectOptionsV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-PreDefinedSelectOptionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## show-preview-data-source-v1


[API Spec](https://developer.sailpoint.com/docs/api/show-preview-data-source-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FormDefinitionID | **String** | True  | Form definition ID
  Query | Limit | **Int64** |   (optional) (default to 10) | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (""ID01"")`
  Query | Query | **String** |   (optional) | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a ""starts with"" filter against  several fields.
 Body  | FormElementPreviewRequest | [**FormElementPreviewRequest**](../models/form-element-preview-request) |   (optional) | Body is the request payload to create a form definition dynamic schema

### Return type
[**PreviewDataSourceResponse**](../models/preview-data-source-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a preview of a form definition data source | PreviewDataSourceResponse
400 | An error with the request occurred | SearchFormDefinitionsByTenantV1400Response
401 | An error with the authorization occurred | SearchFormDefinitionsByTenantV1400Response
403 | An error with the user permissions occurred | SearchFormDefinitionsByTenantV1400Response
404 | An error with the item not found | SearchFormDefinitionsByTenantV1400Response
429 | Too many requests | ModelError
500 | An internal server error occurred | SearchFormDefinitionsByTenantV1400Response

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$FormDefinitionID = "00000000-0000-0000-0000-000000000000" # String | Form definition ID
$Limit = 10 # Int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 10)
$Filters = 'value eq "ID01"" # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (""ID01"')` (optional)
$Query = "ac" # String | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a ""starts with"" filter against  several fields. (optional)
$FormElementPreviewRequest = @"{
  "dataSource" : {
    "config" : {
      "indices" : [ "identities" ],
      "query" : "*",
      "aggregationBucketField" : "attributes.cloudStatus.exact",
      "objectType" : "IDENTITY"
    },
    "dataSourceType" : "STATIC"
  }
}"@

# Preview form definition data source.

try {
    Show-PreviewDataSourceV1 -FormDefinitionID $FormDefinitionID 
    
    # Below is a request that includes all optional parameters
    # Show-PreviewDataSourceV1 -FormDefinitionID $FormDefinitionID -Limit $Limit -Filters $Filters -Query $Query -FormElementPreviewRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Show-PreviewDataSourceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
