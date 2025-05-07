---
id: beta-multi-host-sources-schemas-inner
title: MultiHostSourcesSchemasInner
pagination_label: MultiHostSourcesSchemasInner
sidebar_label: MultiHostSourcesSchemasInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostSourcesSchemasInner', 'BetaMultiHostSourcesSchemasInner'] 
slug: /tools/sdk/powershell/beta/models/multi-host-sources-schemas-inner
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesSchemasInner', 'BetaMultiHostSourcesSchemasInner']
---


# MultiHostSourcesSchemasInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CONNECTOR_SCHEMA" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Schema ID. | [optional] 
**Name** | **String** | Schema's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostSourcesSchemasInner = Initialize-BetaMultiHostSourcesSchemasInner  -Type CONNECTOR_SCHEMA `
 -Id 2c91808568c529c60168cca6f90c1777 `
 -Name MySchema
```

- Convert the resource to JSON
```powershell
$MultiHostSourcesSchemasInner | ConvertTo-JSON
```


[[Back to top]](#) 

