---
id: v2025-event-document
title: EventDocument
pagination_label: EventDocument
sidebar_label: EventDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventDocument', 'V2025EventDocument'] 
slug: /tools/sdk/powershell/v2025/models/event-document
tags: ['SDK', 'Software Development Kit', 'EventDocument', 'V2025EventDocument']
---


# EventDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the entitlement. | [optional] 
**Name** | **String** | Name of the entitlement. | [optional] 
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Synced** | **String** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Action** | **String** | Name of the event as it's displayed in audit reports. | [optional] 
**Type** | **String** | Event type. Refer to [Event Types](https://documentation.sailpoint.com/saas/help/search/index.html#event-types) for a list of event types and their meanings. | [optional] 
**Actor** | [**EventActor**](event-actor) |  | [optional] 
**Target** | [**EventTarget**](event-target) |  | [optional] 
**Stack** | **String** | The event's stack. | [optional] 
**TrackingNumber** | **String** | ID of the group of events. | [optional] 
**IpAddress** | **String** | Target system's IP address. | [optional] 
**Details** | **String** | ID of event's details. | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Attributes involved in the event. | [optional] 
**Objects** | **[]String** | Objects the event is happening to. | [optional] 
**Operation** | **String** | Operation, or action, performed during the event. | [optional] 
**Status** | **String** | Event status. Refer to [Event Statuses](https://documentation.sailpoint.com/saas/help/search/index.html#event-statuses) for a list of event statuses and their meanings. | [optional] 
**TechnicalName** | **String** | Event's normalized name. This normalized name always follows the pattern of 'objects_operation_status'. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventDocument = Initialize-V2025EventDocument  -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name Add Entitlement Passed `
 -Created 2018-06-25T20:22:28.104Z `
 -Synced 2018-06-25T20:22:28.104Z `
 -Action AddEntitlement `
 -Type ACCESS_ITEM `
 -Actor null `
 -Target null `
 -Stack tpe `
 -TrackingNumber 63f891e0735f4cc8bf1968144a1e7440 `
 -IpAddress 52.52.97.85 `
 -Details 73b65dfbed1842548c207432a18c84b0 `
 -Attributes {pod=stg03-useast1, org=acme, sourceName=SailPoint} `
 -Objects null `
 -Operation ADD `
 -Status PASSED `
 -TechnicalName ENTITLEMENT_ADD_PASSED
```

- Convert the resource to JSON
```powershell
$EventDocument | ConvertTo-JSON
```


[[Back to top]](#) 

