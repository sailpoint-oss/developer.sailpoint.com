---
id: accountstatuschanged-status-change
title: AccountstatuschangedStatusChange
pagination_label: AccountstatuschangedStatusChange
sidebar_label: AccountstatuschangedStatusChange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountstatuschangedStatusChange', 'AccountstatuschangedStatusChange'] 
slug: /tools/sdk/powershell/identityhistory/models/accountstatuschanged-status-change
tags: ['SDK', 'Software Development Kit', 'AccountstatuschangedStatusChange', 'AccountstatuschangedStatusChange']
---


# AccountstatuschangedStatusChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousStatus** |  **Enum** [  "enabled",    "disabled",    "locked" ] | the previous status of the account | [optional] 
**NewStatus** |  **Enum** [  "enabled",    "disabled",    "locked" ] | the new status of the account | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountstatuschangedStatusChange = Initialize-AccountstatuschangedStatusChange  -PreviousStatus enabled `
 -NewStatus disabled
```

- Convert the resource to JSON
```powershell
$AccountstatuschangedStatusChange | ConvertTo-JSON
```


[[Back to top]](#) 

