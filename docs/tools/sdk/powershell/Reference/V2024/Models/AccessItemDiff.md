---
id: v2024-access-item-diff
title: AccessItemDiff
pagination_label: AccessItemDiff
sidebar_label: AccessItemDiff
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemDiff', 'V2024AccessItemDiff'] 
slug: /tools/sdk/powershell/v2024/models/access-item-diff
tags: ['SDK', 'Software Development Kit', 'AccessItemDiff', 'V2024AccessItemDiff']
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
$AccessItemDiff = Initialize-V2024AccessItemDiff  -Id null `
 -EventType null `
 -DisplayName null `
 -SourceName null
```

- Convert the resource to JSON
```powershell
$AccessItemDiff | ConvertTo-JSON
```


[[Back to top]](#) 

