---
id: v2024-workgroup-connection-dto-object
title: WorkgroupConnectionDtoObject
pagination_label: WorkgroupConnectionDtoObject
sidebar_label: WorkgroupConnectionDtoObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkgroupConnectionDtoObject', 'V2024WorkgroupConnectionDtoObject'] 
slug: /tools/sdk/powershell/v2024/models/workgroup-connection-dto-object
tags: ['SDK', 'Software Development Kit', 'WorkgroupConnectionDtoObject', 'V2024WorkgroupConnectionDtoObject']
---


# WorkgroupConnectionDtoObject

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
$WorkgroupConnectionDtoObject = Initialize-PSSailpoint.V2024WorkgroupConnectionDtoObject  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database.
```

- Convert the resource to JSON
```powershell
$WorkgroupConnectionDtoObject | ConvertTo-JSON
```


[[Back to top]](#) 

