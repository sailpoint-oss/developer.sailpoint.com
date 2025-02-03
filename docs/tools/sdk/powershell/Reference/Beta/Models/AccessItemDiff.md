---
id: beta-access-item-diff
title: AccessItemDiff
pagination_label: AccessItemDiff
sidebar_label: AccessItemDiff
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemDiff', 'BetaAccessItemDiff'] 
slug: /tools/sdk/powershell/beta/models/access-item-diff
tags: ['SDK', 'Software Development Kit', 'AccessItemDiff', 'BetaAccessItemDiff']
---


# AccessItemDiff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the id of the access item | [optional] 
**EventType** |  **Enum** [  "ADD",    "REMOVE" ] |  | [optional] 
**DisplayName** | **String** | the display name of the access item | [optional] 
**SourceName** | **String** | the source name of the access item | [optional] 

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

