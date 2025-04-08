---
id: v2025-requested-item-status-requested-for
title: RequestedItemStatusRequestedFor
pagination_label: RequestedItemStatusRequestedFor
sidebar_label: RequestedItemStatusRequestedFor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusRequestedFor', 'V2025RequestedItemStatusRequestedFor'] 
slug: /tools/sdk/powershell/v2025/models/requested-item-status-requested-for
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusRequestedFor', 'V2025RequestedItemStatusRequestedFor']
---


# RequestedItemStatusRequestedFor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Type of the object to which this reference applies | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusRequestedFor = Initialize-PSSailpoint.V2025RequestedItemStatusRequestedFor  -Type IDENTITY `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusRequestedFor | ConvertTo-JSON
```


[[Back to top]](#) 

