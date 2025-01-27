---
id: beta-account-status-changed-status-change
title: AccountStatusChangedStatusChange
pagination_label: AccountStatusChangedStatusChange
sidebar_label: AccountStatusChangedStatusChange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountStatusChangedStatusChange'] 
slug: /tools/sdk/powershell/beta/models/account-status-changed-status-change
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedStatusChange']
---


# AccountStatusChangedStatusChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousStatus** |  Pointer to  **Enum** [  "enabled",    "disabled",    "locked" ] | the previous status of the account | [optional] 
**NewStatus** |  Pointer to  **Enum** [  "enabled",    "disabled",    "locked" ] | the new status of the account | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountStatusChangedStatusChange = Initialize-PSSailpoint.BetaAccountStatusChangedStatusChange  -PreviousStatus null `
 -NewStatus null
```

- Convert the resource to JSON
```powershell
$AccountStatusChangedStatusChange | ConvertTo-JSON
```


[[Back to top]](#) 

