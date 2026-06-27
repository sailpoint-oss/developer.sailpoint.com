---
id: get-role-assignments-v1200-response-inner
title: GetRoleAssignmentsV1200ResponseInner
pagination_label: GetRoleAssignmentsV1200ResponseInner
sidebar_label: GetRoleAssignmentsV1200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetRoleAssignmentsV1200ResponseInner', 'GetRoleAssignmentsV1200ResponseInner'] 
slug: /tools/sdk/powershell/identities/models/get-role-assignments-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignmentsV1200ResponseInner', 'GetRoleAssignmentsV1200ResponseInner']
---


# GetRoleAssignmentsV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Assignment Id | [optional] 
**Role** | [**Basereferencedto**](basereferencedto) |  | [optional] 
**AddedDate** | **System.DateTime** | Date that the assignment was added | [optional] 
**StartDate** | **System.DateTime** | Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately | [optional] 
**RemoveDate** | **System.DateTime** | Date that the assignment will be removed | [optional] 
**Comments** | **String** | Comments added by the user when the assignment was made | [optional] 
**AssignmentSource** | **String** | Source describing how this assignment was made | [optional] 
**Assigner** | [**RoleassignmentdtoAssigner**](roleassignmentdto-assigner) |  | [optional] 
**AssignedDimensions** | [**[]Basereferencedto**](basereferencedto) | Dimensions assigned related to this role | [optional] 
**AssignmentContext** | [**RoleassignmentdtoAssignmentContext**](roleassignmentdto-assignment-context) |  | [optional] 
**AccountTargets** | [**[]Roletargetdto**](roletargetdto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$GetRoleAssignmentsV1200ResponseInner = Initialize-GetRoleAssignmentsV1200ResponseInner  -Id 1cbb0705b38c4226b1334eadd8874086 `
 -Role null `
 -AddedDate 2025-07-11T18:45:37.098Z `
 -StartDate 2026-07-10T18:45:37.098Z `
 -RemoveDate 2026-07-11T18:45:37.098Z `
 -Comments I'm a new Engineer and need this role to do my work `
 -AssignmentSource UI `
 -Assigner null `
 -AssignedDimensions [{id=1acc8ffe5fcf457090de28bee2af36ee, type=DIMENSION, name=Northeast region}] `
 -AssignmentContext null `
 -AccountTargets null
```

- Convert the resource to JSON
```powershell
$GetRoleAssignmentsV1200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

