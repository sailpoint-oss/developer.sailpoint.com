---
id: attr-sync-source
title: AttrSyncSource
pagination_label: AttrSyncSource
sidebar_label: AttrSyncSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttrSyncSource'] 
slug: /tools/sdk/powershell/v2024/models/attr-sync-source
tags: ['SDK', 'Software Development Kit', 'AttrSyncSource']
---


# AttrSyncSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "SOURCE" ] | DTO type of target source for attribute synchronization. | [optional] 
**Id** |  Pointer to **String** | ID of target source for attribute synchronization. | [optional] 
**Name** |  Pointer to **String** | Human-readable name of target source for attribute synchronization. | [optional] 

## Examples

- Prepare the resource
```powershell
$AttrSyncSource = Initialize-PSSailpoint.V2024AttrSyncSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$AttrSyncSource | ConvertTo-JSON
```


[[Back to top]](#) 

