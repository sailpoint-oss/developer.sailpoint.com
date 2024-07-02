---
id: non-employee-source-request-body
title: NonEmployeeSourceRequestBody
pagination_label: NonEmployeeSourceRequestBody
sidebar_label: NonEmployeeSourceRequestBody
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeSourceRequestBody'] 
slug: /tools/sdk/powershell/v3/models/non-employee-source-request-body
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceRequestBody']
---


# NonEmployeeSourceRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | Name of non-employee source. | 
**Description** |  **String** | Description of non-employee source. | 
**Owner** |  [**NonEmployeeIdnUserRequest**](non-employee-idn-user-request) |  | 
**ManagementWorkgroup** |  Pointer to **String** | The ID for the management workgroup that contains source sub-admins | [optional] 
**Approvers** |  Pointer to [**[]NonEmployeeIdnUserRequest**](non-employee-idn-user-request) | List of approvers. | [optional] 
**AccountManagers** |  Pointer to [**[]NonEmployeeIdnUserRequest**](non-employee-idn-user-request) | List of account managers. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeSourceRequestBody = Initialize-NonEmployeeSourceRequestBody  -Name Retail `
 -Description Source description `
 -Owner null `
 -ManagementWorkgroup 123299 `
 -Approvers null `
 -AccountManagers null
```

- Convert the resource to JSON
```powershell
$NonEmployeeSourceRequestBody | ConvertTo-JSON
```


[[Back to top]](#) 

