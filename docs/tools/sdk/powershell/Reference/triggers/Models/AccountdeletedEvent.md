---
id: accountdeleted-event
title: AccountdeletedEvent
pagination_label: AccountdeletedEvent
sidebar_label: AccountdeletedEvent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountdeletedEvent', 'AccountdeletedEvent'] 
slug: /tools/sdk/powershell/triggers/models/accountdeleted-event
tags: ['SDK', 'Software Development Kit', 'AccountdeletedEvent', 'AccountdeletedEvent']
---


# AccountdeletedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT_DELETED_V2" ] | The type of event. | [required]
**Cause** |  **Enum** [  "AGGREGATION",    "PROVISIONING" ] | The cause of the event. | [required]

## Examples

- Prepare the resource
```powershell
$AccountdeletedEvent = Initialize-AccountdeletedEvent  -Type ACCOUNT_DELETED_V2 `
 -Cause AGGREGATION
```

- Convert the resource to JSON
```powershell
$AccountdeletedEvent | ConvertTo-JSON
```


[[Back to top]](#) 

