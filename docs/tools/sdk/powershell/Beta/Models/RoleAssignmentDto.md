---
id: role-assignment-dto
title: RoleAssignmentDto
pagination_label: RoleAssignmentDto
sidebar_label: RoleAssignmentDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleAssignmentDto'] 
slug: /tools/sdk/powershell/beta/models/role-assignment-dto
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDto']
---


# RoleAssignmentDto

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
$RoleAssignmentDto = Initialize-PSSailpointBetaRoleAssignmentDto  -Id 1cbb0705b38c4226b1334eadd8874086 `
 -Role null `
 -Comments I&#39;m a new Engineer and need this role to do my work `
 -AssignmentSource UI `
 -Assigner null `
 -AssignedDimensions [{id&#x3D;1acc8ffe5fcf457090de28bee2af36ee, type&#x3D;DIMENSION, name&#x3D;Northeast region}] `
 -AccessRequestContext null `
 -AccountTargets null `
 -RemoveDate Wed Feb 14 10:58:42
```

- Convert the resource to JSON
```powershell
$RoleAssignmentDto | ConvertTo-JSON
```


[[Back to top]](#) 

