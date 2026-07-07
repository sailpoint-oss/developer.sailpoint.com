---
id: connectedobject
title: Connectedobject
pagination_label: Connectedobject
sidebar_label: Connectedobject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectedobject', 'Connectedobject'] 
slug: /tools/sdk/powershell/governancegroups/models/connectedobject
tags: ['SDK', 'Software Development Kit', 'Connectedobject', 'Connectedobject']
---


# Connectedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Connectedobjecttype**](connectedobjecttype) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable name of Connected object | [optional] 
**Description** | **String** | Description of the Connected object. | [optional] 

## Examples

- Prepare the resource
```powershell
$Connectedobject = Initialize-Connectedobject  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database.
```

- Convert the resource to JSON
```powershell
$Connectedobject | ConvertTo-JSON
```


[[Back to top]](#) 

