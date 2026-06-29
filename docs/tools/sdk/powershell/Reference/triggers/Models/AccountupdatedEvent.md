---
id: accountupdated-event
title: AccountupdatedEvent
pagination_label: AccountupdatedEvent
sidebar_label: AccountupdatedEvent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountupdatedEvent', 'AccountupdatedEvent'] 
slug: /tools/sdk/powershell/triggers/models/accountupdated-event
tags: ['SDK', 'Software Development Kit', 'AccountupdatedEvent', 'AccountupdatedEvent']
---


# AccountupdatedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT_UPDATED_V2" ] | The type of event. | [required]
**Cause** |  **Enum** [  "AGGREGATION",    "PROVISIONING",    "PASSWORD_CHANGE" ] | The cause of the event. | [required]

## Examples

- Prepare the resource
```powershell
$AccountupdatedEvent = Initialize-AccountupdatedEvent  -Type ACCOUNT_UPDATED_V2 `
 -Cause AGGREGATION
```

- Convert the resource to JSON
```powershell
$AccountupdatedEvent | ConvertTo-JSON
```


[[Back to top]](#) 

