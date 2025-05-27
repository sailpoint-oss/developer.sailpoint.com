---
id: v2025-workgroup-connection-dto-object
title: WorkgroupConnectionDtoObject
pagination_label: WorkgroupConnectionDtoObject
sidebar_label: WorkgroupConnectionDtoObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkgroupConnectionDtoObject', 'V2025WorkgroupConnectionDtoObject'] 
slug: /tools/sdk/powershell/v2025/models/workgroup-connection-dto-object
tags: ['SDK', 'Software Development Kit', 'WorkgroupConnectionDtoObject', 'V2025WorkgroupConnectionDtoObject']
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
$WorkgroupConnectionDtoObject = Initialize-V2025WorkgroupConnectionDtoObject  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database.
```

- Convert the resource to JSON
```powershell
$WorkgroupConnectionDtoObject | ConvertTo-JSON
```


[[Back to top]](#) 

