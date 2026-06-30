---
id: accountcreated-event
title: AccountcreatedEvent
pagination_label: AccountcreatedEvent
sidebar_label: AccountcreatedEvent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountcreatedEvent', 'AccountcreatedEvent'] 
slug: /tools/sdk/powershell/triggers/models/accountcreated-event
tags: ['SDK', 'Software Development Kit', 'AccountcreatedEvent', 'AccountcreatedEvent']
---


# AccountcreatedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT_CREATED_V2" ] | The type of event. | [required]
**Cause** |  **Enum** [  "AGGREGATION",    "PROVISIONING" ] | The cause of the event. | [required]

## Examples

- Prepare the resource
```powershell
$AccountcreatedEvent = Initialize-AccountcreatedEvent  -Type ACCOUNT_CREATED_V2 `
 -Cause AGGREGATION
```

- Convert the resource to JSON
```powershell
$AccountcreatedEvent | ConvertTo-JSON
```


[[Back to top]](#) 

