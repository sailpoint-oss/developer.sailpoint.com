---
id: create-form-instance-request
title: CreateFormInstanceRequest
pagination_label: CreateFormInstanceRequest
sidebar_label: CreateFormInstanceRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateFormInstanceRequest'] 
slug: /tools/sdk/powershell/v2024/models/create-form-instance-request
tags: ['SDK', 'Software Development Kit', 'CreateFormInstanceRequest']
---


# CreateFormInstanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedBy** |  [**FormInstanceCreatedBy**](form-instance-created-by) |  | [required]
**Expire** |  **String** | Expire is required | [required]
**FormDefinitionId** |  **String** | FormDefinitionID is the id of the form definition that created this form | [required]
**FormInput** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | FormInput is an object of form input labels to value | [optional] 
**Recipients** |  [**[]FormInstanceRecipient**](form-instance-recipient) | Recipients is required | [required]
**StandAloneForm** |  Pointer to **Boolean** | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [optional] [default to $false]
**State** |  Pointer to  **Enum** [  "ASSIGNED",    "IN_PROGRESS",    "SUBMITTED",    "COMPLETED",    "CANCELLED" ] | State is required, if not present initial state is FormInstanceStateAssigned ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [optional] 
**Ttl** |  Pointer to **Int64** | TTL an epoch timestamp in seconds, it most be in seconds or dynamodb will ignore it SEE: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateFormInstanceRequest = Initialize-PSSailpoint.V2024CreateFormInstanceRequest  -CreatedBy null `
 -Expire 2023-08-12T20:14:57.74486Z `
 -FormDefinitionId 00000000-0000-0000-0000-000000000000 `
 -FormInput {input1&#x3D;Sales} `
 -Recipients null `
 -StandAloneForm false `
 -State ASSIGNED `
 -Ttl 1571827560
```

- Convert the resource to JSON
```powershell
$CreateFormInstanceRequest | ConvertTo-JSON
```


[[Back to top]](#) 

