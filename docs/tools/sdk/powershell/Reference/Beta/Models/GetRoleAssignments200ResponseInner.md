---
id: beta-get-role-assignments200-response-inner
title: GetRoleAssignments200ResponseInner
pagination_label: GetRoleAssignments200ResponseInner
sidebar_label: GetRoleAssignments200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetRoleAssignments200ResponseInner', 'BetaGetRoleAssignments200ResponseInner'] 
slug: /tools/sdk/powershell/beta/models/get-role-assignments200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignments200ResponseInner', 'BetaGetRoleAssignments200ResponseInner']
---


# GetRoleAssignments200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Assignment Id | [optional] 
**Role** | [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**Comments** | **String** | Comments added by the user when the assignment was made | [optional] 
**AssignmentSource** | **String** | Source describing how this assignment was made | [optional] 
**Assigner** | [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**AssignedDimensions** | [**[]BaseReferenceDto1**](base-reference-dto1) | Dimensions assigned related to this role | [optional] 
**AssignmentContext** | [**AssignmentContextDto**](assignment-context-dto) |  | [optional] 
**AccountTargets** | [**[]RoleTargetDto**](role-target-dto) |  | [optional] 
**RemoveDate** | **String** | Date that the assignment will be removed | [optional] 

## Examples

- Prepare the resource
```powershell
$GetRoleAssignments200ResponseInner = Initialize-BetaGetRoleAssignments200ResponseInner  -Id 1cbb0705b38c4226b1334eadd8874086 `
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

