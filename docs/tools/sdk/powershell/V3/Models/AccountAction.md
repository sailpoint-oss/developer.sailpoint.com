---
id: account-action
title: AccountAction
pagination_label: AccountAction
sidebar_label: AccountAction
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountAction'] 
slug: /tools/sdk/powershell/v3/models/account-action
tags: ['SDK', 'Software Development Kit', 'AccountAction']
---


# AccountAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** |  Pointer to  **Enum** [  "ENABLE",    "DISABLE" ] | Describes if action will be enabled or disabled | [optional] 
**SourceIds** |  Pointer to **[]String** | List of unique source IDs. The sources must have the ENABLE feature or flat file source. See &quot;&quot;/sources&quot;&quot; endpoint for source features. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountAction = Initialize-AccountAction  -Action ENABLE `
 -SourceIds [2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500]
```

- Convert the resource to JSON
```powershell
$AccountAction | ConvertTo-JSON
```


[[Back to top]](#) 

