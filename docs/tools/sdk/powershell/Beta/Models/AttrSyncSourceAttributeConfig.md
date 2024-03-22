---
id: attr-sync-source-attribute-config
title: AttrSyncSourceAttributeConfig
pagination_label: AttrSyncSourceAttributeConfig
sidebar_label: AttrSyncSourceAttributeConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AttrSyncSourceAttributeConfig'] 
slug: /tools/sdk/powershell/beta/models/attr-sync-source-attribute-config
tags: ['SDK', 'Software Development Kit', 'AttrSyncSourceAttributeConfig']
---


# AttrSyncSourceAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | Name of the identity attribute | 
**DisplayName** |  **String** | Display name of the identity attribute | 
**Enabled** |  **Boolean** | Determines whether or not the attribute is enabled for synchronization | 
**Target** |  **String** | Name of the source account attribute to which the identity attribute value will be synchronized if enabled | 

## Examples

- Prepare the resource
```powershell
$AttrSyncSourceAttributeConfig = Initialize-PSSailpointBetaAttrSyncSourceAttributeConfig  -Name email `
 -DisplayName Email `
 -Enabled true `
 -Target mail
```

- Convert the resource to JSON
```powershell
$AttrSyncSourceAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

