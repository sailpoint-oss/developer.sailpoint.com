---
id: roleassignmentdto
title: Roleassignmentdto
pagination_label: Roleassignmentdto
sidebar_label: Roleassignmentdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleassignmentdto', 'Roleassignmentdto'] 
slug: /tools/sdk/powershell/identities/models/roleassignmentdto
tags: ['SDK', 'Software Development Kit', 'Roleassignmentdto', 'Roleassignmentdto']
---


# Roleassignmentdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Assignment Id | [optional] 
**Role** | [**Basereferencedto**](basereferencedto) |  | [optional] 
**Comments** | **String** | Comments added by the user when the assignment was made | [optional] 
**AssignmentSource** | **String** | Source describing how this assignment was made | [optional] 
**Assigner** | [**RoleassignmentdtoAssigner**](roleassignmentdto-assigner) |  | [optional] 
**AssignedDimensions** | [**[]Basereferencedto**](basereferencedto) | Dimensions assigned related to this role | [optional] 
**AssignmentContext** | [**RoleassignmentdtoAssignmentContext**](roleassignmentdto-assignment-context) |  | [optional] 
**AccountTargets** | [**[]Roletargetdto**](roletargetdto) |  | [optional] 
**StartDate** | **System.DateTime** | Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately | [optional] 
**RemoveDate** | **System.DateTime** | Date that the assignment will be removed | [optional] 
**AddedDate** | **System.DateTime** | Date that the assignment was added | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleassignmentdto = Initialize-Roleassignmentdto  -Id 1cbb0705b38c4226b1334eadd8874086 `
 -Role null `
 -Comments I'm a new Engineer and need this role to do my work `
 -AssignmentSource UI `
 -Assigner null `
 -AssignedDimensions [{"id":"1acc8ffe5fcf457090de28bee2af36ee","type":"DIMENSION","name":"Northeast region"}] `
 -AssignmentContext null `
 -AccountTargets null `
 -StartDate 2026-07-10T18:45:37.098Z `
 -RemoveDate 2026-07-11T18:45:37.098Z `
 -AddedDate 2025-07-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$Roleassignmentdto | ConvertTo-JSON
```


[[Back to top]](#) 

