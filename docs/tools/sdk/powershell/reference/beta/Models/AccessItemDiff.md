---
id: beta-access-item-diff
title: AccessItemDiff
pagination_label: AccessItemDiff
sidebar_label: AccessItemDiff
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemDiff'] 
slug: /tools/sdk/powershell/beta/models/access-item-diff
tags: ['SDK', 'Software Development Kit', 'AccessItemDiff']
---


# AccessItemDiff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the id of the access item | [optional] 
**EventType** |  Pointer to  **Enum** [  "ADD",    "REMOVE" ] |  | [optional] 
**DisplayName** |  Pointer to **String** | the display name of the access item | [optional] 
**SourceName** |  Pointer to **String** | the source name of the access item | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemDiff = Initialize-PSSailpoint.BetaAccessItemDiff  -Id null `
 -EventType null `
 -DisplayName null `
 -SourceName null
```

- Convert the resource to JSON
```powershell
$AccessItemDiff | ConvertTo-JSON
```


[[Back to top]](#) 

