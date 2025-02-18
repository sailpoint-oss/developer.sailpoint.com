---
id: v2024-attr-sync-source-config
title: AttrSyncSourceConfig
pagination_label: AttrSyncSourceConfig
sidebar_label: AttrSyncSourceConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttrSyncSourceConfig', 'V2024AttrSyncSourceConfig'] 
slug: /tools/sdk/powershell/v2024/models/attr-sync-source-config
tags: ['SDK', 'Software Development Kit', 'AttrSyncSourceConfig', 'V2024AttrSyncSourceConfig']
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
$AttrSyncSourceConfig = Initialize-PSSailpoint.V2024AttrSyncSourceConfig  -Source null `
 -Attributes [{name&#x3D;email, displayName&#x3D;Email, enabled&#x3D;true, target&#x3D;mail}, {name&#x3D;firstname, displayName&#x3D;First Name, enabled&#x3D;false, target&#x3D;givenName}]
```

- Convert the resource to JSON
```powershell
$AttrSyncSourceConfig | ConvertTo-JSON
```


[[Back to top]](#) 

