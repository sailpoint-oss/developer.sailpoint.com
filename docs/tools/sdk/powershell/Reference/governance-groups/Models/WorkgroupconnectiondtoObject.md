---
id: workgroupconnectiondto-object
title: WorkgroupconnectiondtoObject
pagination_label: WorkgroupconnectiondtoObject
sidebar_label: WorkgroupconnectiondtoObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkgroupconnectiondtoObject', 'WorkgroupconnectiondtoObject'] 
slug: /tools/sdk/powershell/governancegroups/models/workgroupconnectiondto-object
tags: ['SDK', 'Software Development Kit', 'WorkgroupconnectiondtoObject', 'WorkgroupconnectiondtoObject']
---


# WorkgroupconnectiondtoObject

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
$WorkgroupconnectiondtoObject = Initialize-WorkgroupconnectiondtoObject  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database.
```

- Convert the resource to JSON
```powershell
$WorkgroupconnectiondtoObject | ConvertTo-JSON
```


[[Back to top]](#) 

