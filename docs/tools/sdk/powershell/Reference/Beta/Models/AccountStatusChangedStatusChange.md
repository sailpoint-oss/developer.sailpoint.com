---
id: beta-account-status-changed-status-change
title: AccountStatusChangedStatusChange
pagination_label: AccountStatusChangedStatusChange
sidebar_label: AccountStatusChangedStatusChange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountStatusChangedStatusChange', 'BetaAccountStatusChangedStatusChange'] 
slug: /tools/sdk/powershell/beta/models/account-status-changed-status-change
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedStatusChange', 'BetaAccountStatusChangedStatusChange']
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
$AccountStatusChangedStatusChange = Initialize-BetaAccountStatusChangedStatusChange  -PreviousStatus null `
 -NewStatus null
```

- Convert the resource to JSON
```powershell
$AccountStatusChangedStatusChange | ConvertTo-JSON
```


[[Back to top]](#) 

