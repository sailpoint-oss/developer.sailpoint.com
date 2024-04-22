---
id: attr-sync-source-config
title: AttrSyncSourceConfig
pagination_label: AttrSyncSourceConfig
sidebar_label: AttrSyncSourceConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AttrSyncSourceConfig'] 
slug: /tools/sdk/powershell/beta/models/attr-sync-source-config
tags: ['SDK', 'Software Development Kit', 'AttrSyncSourceConfig']
---


# AttrSyncSourceConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** |  [**AttrSyncSource**](attr-sync-source) |  | 
**Attributes** |  [**[]AttrSyncSourceAttributeConfig**](attr-sync-source-attribute-config) | Attribute synchronization configuration for specific identity attributes in the context of a source | 

## Examples

- Prepare the resource
```powershell
$AttrSyncSourceConfig = Initialize-BetaAttrSyncSourceConfig  -Source null `
 -Attributes [{name=email, displayName=Email, enabled=true, target=mail}, {name=firstname, displayName=First Name, enabled=false, target=givenName}]
```

- Convert the resource to JSON
```powershell
$AttrSyncSourceConfig | ConvertTo-JSON
```


[[Back to top]](#) 

