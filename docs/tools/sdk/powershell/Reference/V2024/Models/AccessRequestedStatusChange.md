---
id: v2024-access-requested-status-change
title: AccessRequestedStatusChange
pagination_label: AccessRequestedStatusChange
sidebar_label: AccessRequestedStatusChange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestedStatusChange', 'V2024AccessRequestedStatusChange'] 
slug: /tools/sdk/powershell/v2024/models/access-requested-status-change
tags: ['SDK', 'Software Development Kit', 'AccessRequestedStatusChange', 'V2024AccessRequestedStatusChange']
---


# AccessRequestedStatusChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousStatus** |  **Enum** [  "enabled",    "disabled",    "locked" ] | the previous status of the account | [optional] 
**NewStatus** |  **Enum** [  "enabled",    "disabled",    "locked" ] | the new status of the account | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestedStatusChange = Initialize-V2024AccessRequestedStatusChange  -PreviousStatus enabled `
 -NewStatus disabled
```

- Convert the resource to JSON
```powershell
$AccessRequestedStatusChange | ConvertTo-JSON
```


[[Back to top]](#) 

