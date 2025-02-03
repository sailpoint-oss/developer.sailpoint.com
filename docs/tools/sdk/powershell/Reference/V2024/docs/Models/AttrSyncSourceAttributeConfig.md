---
id: v2024-attr-sync-source-attribute-config
title: AttrSyncSourceAttributeConfig
pagination_label: AttrSyncSourceAttributeConfig
sidebar_label: AttrSyncSourceAttributeConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttrSyncSourceAttributeConfig', 'V2024AttrSyncSourceAttributeConfig'] 
slug: /tools/sdk/powershell/v2024/models/attr-sync-source-attribute-config
tags: ['SDK', 'Software Development Kit', 'AttrSyncSourceAttributeConfig', 'V2024AttrSyncSourceAttributeConfig']
---


# AttrSyncSourceAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | Name of the identity attribute | [required]
**DisplayName** |  **String** | Display name of the identity attribute | [required]
**Enabled** |  **Boolean** | Determines whether or not the attribute is enabled for synchronization | [required]
**Target** |  **String** | Name of the source account attribute to which the identity attribute value will be synchronized if enabled | [required]

## Examples

- Prepare the resource
```powershell
$AttrSyncSourceAttributeConfig = Initialize-PSSailpoint.V2024AttrSyncSourceAttributeConfig  -Name email `
 -DisplayName Email `
 -Enabled true `
 -Target mail
```

- Convert the resource to JSON
```powershell
$AttrSyncSourceAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

