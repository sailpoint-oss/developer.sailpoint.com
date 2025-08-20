---
id: v2025-list-form-instances-by-tenant-response
title: ListFormInstancesByTenantResponse
pagination_label: ListFormInstancesByTenantResponse
sidebar_label: ListFormInstancesByTenantResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListFormInstancesByTenantResponse', 'V2025ListFormInstancesByTenantResponse'] 
slug: /tools/sdk/powershell/v2025/models/list-form-instances-by-tenant-response
tags: ['SDK', 'Software Development Kit', 'ListFormInstancesByTenantResponse', 'V2025ListFormInstancesByTenantResponse']
---


# ListFormInstancesByTenantResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique guid identifying this form instance | [optional] 
**Expire** | **String** | Expire is the maximum amount of time that a form can be in progress. After this time is reached then the form will be moved to a CANCELED state automatically. The user will no longer be able to complete the submission. When a form instance is expires an audit log will be generated for that record | [optional] 
**State** |  **Enum** [  "ASSIGNED",    "IN_PROGRESS",    "SUBMITTED",    "COMPLETED",    "CANCELLED" ] | State the state of the form instance ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [optional] 
**StandAloneForm** | **Boolean** | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [optional] [default to $false]
**StandAloneFormUrl** | **String** | StandAloneFormURL is the URL where this form may be completed by the designated recipients using the standalone form UI | [optional] 
**CreatedBy** | [**FormInstanceCreatedBy**](form-instance-created-by) |  | [optional] 
**FormDefinitionId** | **String** | FormDefinitionID is the id of the form definition that created this form | [optional] 
**FormInput** | [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | FormInput is an object of form input labels to value | [optional] 
**FormElements** | [**[]FormElement**](form-element) | FormElements is the configuration of the form, this would be a repeat of the fields from the form-config | [optional] 
**FormData** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | FormData is the data provided by the form on submit. The data is in a key -> value map | [optional] 
**FormErrors** | [**[]FormError**](form-error) | FormErrors is an array of form validation errors from the last time the form instance was transitioned to the SUBMITTED state. If the form instance had validation errors then it would be moved to the IN PROGRESS state where the client can retrieve these errors | [optional] 
**FormConditions** | [**[]FormCondition**](form-condition) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] 
**Created** | **System.DateTime** | Created is the date the form instance was assigned | [optional] 
**Modified** | **System.DateTime** | Modified is the last date the form instance was modified | [optional] 
**Recipients** | [**[]FormInstanceRecipient**](form-instance-recipient) | Recipients references to the recipient of a form. The recipients are those who are responsible for filling out a form and completing it | [optional] 

## Examples

- Prepare the resource
```powershell
$ListFormInstancesByTenantResponse = Initialize-V2025ListFormInstancesByTenantResponse  -Id 06a2d961-07fa-44d1-8d0a-2f6470e30fd2 `
 -Expire 2023-08-12T20:14:57.74486Z `
 -State ASSIGNED `
 -StandAloneForm false `
 -StandAloneFormUrl https://my-org.identitynow.com/ui/d/forms/00000000-0000-0000-0000-000000000000 `
 -CreatedBy null `
 -FormDefinitionId 49841cb8-00a5-4fbd-9888-8bbb28d48331 `
 -FormInput {input1=Sales} `
 -FormElements null `
 -FormData {department=Engineering} `
 -FormErrors null `
 -FormConditions null `
 -Created 2023-07-12T20:14:57.744860Z `
 -Modified 2023-07-12T20:14:57.744860Z `
 -Recipients null
```

- Convert the resource to JSON
```powershell
$ListFormInstancesByTenantResponse | ConvertTo-JSON
```


[[Back to top]](#) 

