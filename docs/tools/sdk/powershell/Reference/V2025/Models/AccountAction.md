---
id: v2025-account-action
title: AccountAction
pagination_label: AccountAction
sidebar_label: AccountAction
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAction', 'V2025AccountAction'] 
slug: /tools/sdk/powershell/v2025/models/account-action
tags: ['SDK', 'Software Development Kit', 'AccountAction', 'V2025AccountAction']
---


# AccountAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** |  **Enum** [  "ENABLE",    "DISABLE" ] | Describes if action will be enabled or disabled | [optional] 
**SourceIds** | **[]String** | A unique list of specific source IDs to apply the action to. The sources must have the ENABLE feature or flat file source. Required if allSources is not true. Must not be provided if allSources is true. Cannot be used together with excludeSourceIds See ""/sources"" endpoint for source features. | [optional] 
**ExcludeSourceIds** | **[]String** | A list of source IDs to exclude from the action. Cannot be used together with sourceIds. | [optional] 
**AllSources** | **Boolean** | If true, the action applies to all available sources. If true, sourceIds must not be provided. If false or not set, sourceIds is required. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$AccountAction = Initialize-V2025AccountAction  -Action ENABLE `
 -SourceIds [2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500] `
 -ExcludeSourceIds [3b551ccf5566478b9b77f37de25303aa] `
 -AllSources true
```

- Convert the resource to JSON
```powershell
$AccountAction | ConvertTo-JSON
```


[[Back to top]](#) 

