---
id: v2024-get-role-assignments200-response-inner
title: GetRoleAssignments200ResponseInner
pagination_label: GetRoleAssignments200ResponseInner
sidebar_label: GetRoleAssignments200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetRoleAssignments200ResponseInner', 'V2024GetRoleAssignments200ResponseInner'] 
slug: /tools/sdk/powershell/v2024/models/get-role-assignments200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignments200ResponseInner', 'V2024GetRoleAssignments200ResponseInner']
---


# GetRoleAssignments200ResponseInner

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
$GetRoleAssignments200ResponseInner = Initialize-V2024GetRoleAssignments200ResponseInner  -Id 1cbb0705b38c4226b1334eadd8874086 `
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
$GetRoleAssignments200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

