---
id: beta-connected-object
title: ConnectedObject
pagination_label: ConnectedObject
sidebar_label: ConnectedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectedObject', 'BetaConnectedObject'] 
slug: /tools/sdk/powershell/beta/models/connected-object
tags: ['SDK', 'Software Development Kit', 'ConnectedObject', 'BetaConnectedObject']
---


# ConnectedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**ConnectedObjectType**](connected-object-type) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable name of Connected object | [optional] 
**Description** | **String** | Description of the Connected object. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectedObject = Initialize-BetaConnectedObject  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database.
```

- Convert the resource to JSON
```powershell
$ConnectedObject | ConvertTo-JSON
```


[[Back to top]](#) 

