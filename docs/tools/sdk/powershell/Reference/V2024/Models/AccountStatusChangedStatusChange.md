---
id: v2024-account-status-changed-status-change
title: AccountStatusChangedStatusChange
pagination_label: AccountStatusChangedStatusChange
sidebar_label: AccountStatusChangedStatusChange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountStatusChangedStatusChange', 'V2024AccountStatusChangedStatusChange'] 
slug: /tools/sdk/powershell/v2024/models/account-status-changed-status-change
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedStatusChange', 'V2024AccountStatusChangedStatusChange']
---


# AccountStatusChangedStatusChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousStatus** |  **Enum** [  "enabled",    "disabled",    "locked" ] | the previous status of the account | [optional] 
**NewStatus** |  **Enum** [  "enabled",    "disabled",    "locked" ] | the new status of the account | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountStatusChangedStatusChange = Initialize-V2024AccountStatusChangedStatusChange  -PreviousStatus null `
 -NewStatus null
```

- Convert the resource to JSON
```powershell
$AccountStatusChangedStatusChange | ConvertTo-JSON
```


[[Back to top]](#) 

