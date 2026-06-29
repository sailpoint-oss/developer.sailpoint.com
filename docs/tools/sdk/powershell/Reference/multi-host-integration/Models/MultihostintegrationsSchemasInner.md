---
id: multihostintegrations-schemas-inner
title: MultihostintegrationsSchemasInner
pagination_label: MultihostintegrationsSchemasInner
sidebar_label: MultihostintegrationsSchemasInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsSchemasInner', 'MultihostintegrationsSchemasInner'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-schemas-inner
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsSchemasInner', 'MultihostintegrationsSchemasInner']
---


# MultihostintegrationsSchemasInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CONNECTOR_SCHEMA" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Schema ID. | [optional] 
**Name** | **String** | Schema's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsSchemasInner = Initialize-MultihostintegrationsSchemasInner  -Type CONNECTOR_SCHEMA `
 -Id 2c91808568c529c60168cca6f90c1777 `
 -Name MySchema
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsSchemasInner | ConvertTo-JSON
```


[[Back to top]](#) 

