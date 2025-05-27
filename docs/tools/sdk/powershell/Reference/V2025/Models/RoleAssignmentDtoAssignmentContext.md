---
id: v2025-role-assignment-dto-assignment-context
title: RoleAssignmentDtoAssignmentContext
pagination_label: RoleAssignmentDtoAssignmentContext
sidebar_label: RoleAssignmentDtoAssignmentContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleAssignmentDtoAssignmentContext', 'V2025RoleAssignmentDtoAssignmentContext'] 
slug: /tools/sdk/powershell/v2025/models/role-assignment-dto-assignment-context
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDtoAssignmentContext', 'V2025RoleAssignmentDtoAssignmentContext']
---


# RoleAssignmentDtoAssignmentContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requested** | [**AccessRequestContext**](access-request-context) |  | [optional] 
**Matched** | [**[]RoleMatchDto**](role-match-dto) |  | [optional] 
**ComputedDate** | **String** | Date that the assignment will was evaluated | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleAssignmentDtoAssignmentContext = Initialize-V2025RoleAssignmentDtoAssignmentContext  -Requested null `
 -Matched null `
 -ComputedDate Wed Feb 14 10:58:42
```

- Convert the resource to JSON
```powershell
$RoleAssignmentDtoAssignmentContext | ConvertTo-JSON
```


[[Back to top]](#) 

