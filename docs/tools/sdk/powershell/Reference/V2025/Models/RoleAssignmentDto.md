---
id: v2025-role-assignment-dto
title: RoleAssignmentDto
pagination_label: RoleAssignmentDto
sidebar_label: RoleAssignmentDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleAssignmentDto', 'V2025RoleAssignmentDto'] 
slug: /tools/sdk/powershell/v2025/models/role-assignment-dto
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDto', 'V2025RoleAssignmentDto']
---


# RoleAssignmentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Assignment Id | [optional] 
**Role** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**Comments** | **String** | Comments added by the user when the assignment was made | [optional] 
**AssignmentSource** | **String** | Source describing how this assignment was made | [optional] 
**Assigner** | [**RoleAssignmentDtoAssigner**](role-assignment-dto-assigner) |  | [optional] 
**AssignedDimensions** | [**[]BaseReferenceDto**](base-reference-dto) | Dimensions assigned related to this role | [optional] 
**AssignmentContext** | [**RoleAssignmentDtoAssignmentContext**](role-assignment-dto-assignment-context) |  | [optional] 
**AccountTargets** | [**[]RoleTargetDto**](role-target-dto) |  | [optional] 
**RemoveDate** | **String** | Date that the assignment will be removed | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleAssignmentDto = Initialize-PSSailpoint.V2025RoleAssignmentDto  -Id 1cbb0705b38c4226b1334eadd8874086 `
 -Role null `
 -Comments I'm a new Engineer and need this role to do my work `
 -AssignmentSource UI `
 -Assigner null `
 -AssignedDimensions [{id=1acc8ffe5fcf457090de28bee2af36ee, type=DIMENSION, name=Northeast region}] `
 -AssignmentContext null `
 -AccountTargets null `
 -RemoveDate Wed Feb 14 10:58:42
```

- Convert the resource to JSON
```powershell
$RoleAssignmentDto | ConvertTo-JSON
```


[[Back to top]](#) 

