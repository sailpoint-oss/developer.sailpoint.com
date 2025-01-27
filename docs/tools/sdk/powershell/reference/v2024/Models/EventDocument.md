---
id: event-document
title: EventDocument
pagination_label: EventDocument
sidebar_label: EventDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventDocument'] 
slug: /tools/sdk/powershell/v2024/models/event-document
tags: ['SDK', 'Software Development Kit', 'EventDocument']
---


# EventDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** |  | [required]
**Name** |  **String** |  | [required]
**Type** |  [**DocumentType**](document-type) |  | [required]
**Created** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Synced** |  Pointer to **String** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Action** |  Pointer to **String** | Name of the event as it's displayed in audit reports. | [optional] 
**Type** |  Pointer to **String** | Event type. Refer to [Event Types](https://documentation.sailpoint.com/saas/help/search/index.html#event-types) for a list of event types and their meanings. | [optional] 
**Actor** |  Pointer to **String** | Name of the actor that generated the event. | [optional] 
**Target** |  Pointer to **String** | Name of the target, or recipient, of the event. | [optional] 
**Stack** |  Pointer to **String** | The event's stack. | [optional] 
**TrackingNumber** |  Pointer to **String** | ID of the group of events. | [optional] 
**IpAddress** |  Pointer to **String** | Target system's IP address. | [optional] 
**Details** |  Pointer to **String** | ID of event's details. | [optional] 
**Attributes** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Attributes involved in the event. | [optional] 
**Objects** |  Pointer to **[]String** | Objects the event is happening to. | [optional] 
**Operation** |  Pointer to **String** | Operation, or action, performed during the event. | [optional] 
**Status** |  Pointer to **String** | Event status. Refer to [Event Statuses](https://documentation.sailpoint.com/saas/help/search/index.html#event-statuses) for a list of event statuses and their meanings. | [optional] 
**TechnicalName** |  Pointer to **String** | Event's normalized name. This normalized name always follows the pattern of 'objects_operation_status'. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventDocument = Initialize-PSSailpoint.V2024EventDocument  -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name john.doe `
 -Type null `
 -Created 2018-06-25T20:22:28.104Z `
 -Synced null `
 -Action update `
 -Type SYSTEM_CONFIG `
 -Actor System `
 -Target Carol.Adams `
 -Stack tpe `
 -TrackingNumber 63f891e0735f4cc8bf1968144a1e7440 `
 -IpAddress 52.52.97.85 `
 -Details 73b65dfbed1842548c207432a18c84b0 `
 -Attributes {pod&#x3D;stg03-useast1, org&#x3D;acme, sourceName&#x3D;SailPoint} `
 -Objects null `
 -Operation REQUEST `
 -Status PASSED `
 -TechnicalName AUTHENTICATION_REQUEST_PASSED
```

- Convert the resource to JSON
```powershell
$EventDocument | ConvertTo-JSON
```


[[Back to top]](#) 

