---
id: beta-attr-sync-source-config
title: AttrSyncSourceConfig
pagination_label: AttrSyncSourceConfig
sidebar_label: AttrSyncSourceConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttrSyncSourceConfig', 'BetaAttrSyncSourceConfig'] 
slug: /tools/sdk/powershell/beta/models/attr-sync-source-config
tags: ['SDK', 'Software Development Kit', 'AttrSyncSourceConfig', 'BetaAttrSyncSourceConfig']
---


# AttrSyncSourceConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AttrSyncSource**](attr-sync-source) |  | [required]
**Attributes** | [**[]AttrSyncSourceAttributeConfig**](attr-sync-source-attribute-config) | Attribute synchronization configuration for specific identity attributes in the context of a source | [required]

## Examples

- Prepare the resource
```powershell
$AttrSyncSourceConfig = Initialize-PSSailpoint.BetaAttrSyncSourceConfig  -Source null `
 -Attributes [{name&#x3D;email, displayName&#x3D;Email, enabled&#x3D;true, target&#x3D;mail}, {name&#x3D;firstname, displayName&#x3D;First Name, enabled&#x3D;false, target&#x3D;givenName}]
```

- Convert the resource to JSON
```powershell
$AttrSyncSourceConfig | ConvertTo-JSON
```


[[Back to top]](#) 

