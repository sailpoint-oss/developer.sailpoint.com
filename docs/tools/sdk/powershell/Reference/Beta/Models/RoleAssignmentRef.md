---
id: beta-role-assignment-ref
title: RoleAssignmentRef
pagination_label: RoleAssignmentRef
sidebar_label: RoleAssignmentRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleAssignmentRef', 'BetaRoleAssignmentRef'] 
slug: /tools/sdk/powershell/beta/models/role-assignment-ref
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentRef', 'BetaRoleAssignmentRef']
---


# RoleAssignmentRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Assignment Id | [optional] 
**Role** | [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleAssignmentRef = Initialize-PSSailpoint.BetaRoleAssignmentRef  -Id 1cbb0705b38c4226b1334eadd8874086 `
 -Role null
```

- Convert the resource to JSON
```powershell
$RoleAssignmentRef | ConvertTo-JSON
```


[[Back to top]](#) 

