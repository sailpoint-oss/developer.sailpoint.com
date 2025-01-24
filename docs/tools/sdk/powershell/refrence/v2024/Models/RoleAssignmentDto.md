---
id: role-assignment-dto
title: RoleAssignmentDto
pagination_label: RoleAssignmentDto
sidebar_label: RoleAssignmentDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleAssignmentDto'] 
slug: /tools/sdk/powershell/v2024/models/role-assignment-dto
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDto']
---


# RoleAssignmentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Assignment Id | [optional] 
**Role** |  Pointer to [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**Comments** |  Pointer to **String** | Comments added by the user when the assignment was made | [optional] 
**AssignmentSource** |  Pointer to **String** | Source describing how this assignment was made | [optional] 
**Assigner** |  Pointer to [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**AssignedDimensions** |  Pointer to [**[]BaseReferenceDto1**](base-reference-dto1) | Dimensions assigned related to this role | [optional] 
**AssignmentContext** |  Pointer to [**AssignmentContextDto**](assignment-context-dto) |  | [optional] 
**AccountTargets** |  Pointer to [**[]RoleTargetDto**](role-target-dto) |  | [optional] 
**RemoveDate** |  Pointer to **String** | Date that the assignment will be removed | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleAssignmentDto = Initialize-PSSailpoint.V2024RoleAssignmentDto  -Id 1cbb0705b38c4226b1334eadd8874086 `
 -Role null `
 -Comments I&#39;m a new Engineer and need this role to do my work `
 -AssignmentSource UI `
 -Assigner null `
 -AssignedDimensions [{id&#x3D;1acc8ffe5fcf457090de28bee2af36ee, type&#x3D;DIMENSION, name&#x3D;Northeast region}] `
 -AssignmentContext null `
 -AccountTargets null `
 -RemoveDate Wed Feb 14 10:58:42
```

- Convert the resource to JSON
```powershell
$RoleAssignmentDto | ConvertTo-JSON
```


[[Back to top]](#) 

