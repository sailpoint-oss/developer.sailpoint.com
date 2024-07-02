---
id: get-role-assignments200-response-inner
title: GetRoleAssignments200ResponseInner
pagination_label: GetRoleAssignments200ResponseInner
sidebar_label: GetRoleAssignments200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'GetRoleAssignments200ResponseInner'] 
slug: /tools/sdk/powershell/beta/models/get-role-assignments200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignments200ResponseInner']
---


# GetRoleAssignments200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Assignment Id | [optional] 
**Role** |  Pointer to [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**Comments** |  Pointer to **String** | Comments added by the user when the assignment was made | [optional] 
**AssignmentSource** |  Pointer to **String** | Source describing how this assignment was made | [optional] 
**Assigner** |  Pointer to [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**AssignedDimensions** |  Pointer to [**[]BaseReferenceDto**](base-reference-dto) | Dimensions assigned related to this role | [optional] 
**AccessRequestContext** |  Pointer to [**AccessRequestContext**](access-request-context) |  | [optional] 
**AccountTargets** |  Pointer to [**[]RoleTargetDto**](role-target-dto) |  | [optional] 
**RemoveDate** |  Pointer to **String** | Date that the assignment will be removed | [optional] 

## Examples

- Prepare the resource
```powershell
$GetRoleAssignments200ResponseInner = Initialize-BetaGetRoleAssignments200ResponseInner  -Id 1cbb0705b38c4226b1334eadd8874086 `
 -Role null `
 -Comments I'm a new Engineer and need this role to do my work `
 -AssignmentSource UI `
 -Assigner null `
 -AssignedDimensions [{id=1acc8ffe5fcf457090de28bee2af36ee, type=DIMENSION, name=Northeast region}] `
 -AccessRequestContext null `
 -AccountTargets null `
 -RemoveDate Wed Feb 14 10:58:42
```

- Convert the resource to JSON
```powershell
$GetRoleAssignments200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

