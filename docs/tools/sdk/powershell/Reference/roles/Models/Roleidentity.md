---
id: roleidentity
title: Roleidentity
pagination_label: Roleidentity
sidebar_label: Roleidentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleidentity', 'Roleidentity'] 
slug: /tools/sdk/powershell/roles/models/roleidentity
tags: ['SDK', 'Software Development Kit', 'Roleidentity', 'Roleidentity']
---


# Roleidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the Identity | [optional] 
**AliasName** | **String** | The alias / username of the Identity | [optional] 
**Name** | **String** | The human-readable display name of the Identity | [optional] 
**Email** | **String** | Email address of the Identity | [optional] 
**RoleAssignmentSource** | [**Roleassignmentsourcetype**](roleassignmentsourcetype) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleidentity = Initialize-Roleidentity  -Id 2c9180a46faadee4016fb4e018c20639 `
 -AliasName t.edison `
 -Name Thomas Edison `
 -Email t.edison@identitynow.com `
 -RoleAssignmentSource null
```

- Convert the resource to JSON
```powershell
$Roleidentity | ConvertTo-JSON
```


[[Back to top]](#) 

