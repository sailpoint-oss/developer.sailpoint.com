---
id: dataownermodel
title: Dataownermodel
pagination_label: Dataownermodel
sidebar_label: Dataownermodel
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dataownermodel', 'Dataownermodel'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/dataownermodel
tags: ['SDK', 'Software Development Kit', 'Dataownermodel', 'Dataownermodel']
---


# Dataownermodel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The unique identifier (UUID) of the identity assigned as the owner of the resource. | [optional] 
**ResourceId** | **Int64** | The unique identifier of the resource owned by the identity. | [optional] 
**FullPath** | **String** | The full path to the resource within the system or application. | [optional] 

## Examples

- Prepare the resource
```powershell
$Dataownermodel = Initialize-Dataownermodel  -IdentityId c1a2b3d4-e5f6-7890-abcd-1234567890ab `
 -ResourceId 1001 `
 -FullPath /departments/finance/shared
```

- Convert the resource to JSON
```powershell
$Dataownermodel | ConvertTo-JSON
```


[[Back to top]](#) 

