---
id: v2024-requested-item-status-requested-for
title: RequestedItemStatusRequestedFor
pagination_label: RequestedItemStatusRequestedFor
sidebar_label: RequestedItemStatusRequestedFor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusRequestedFor'] 
slug: /tools/sdk/powershell/v2024/models/requested-item-status-requested-for
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusRequestedFor']
---


# RequestedItemStatusRequestedFor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Type of the object to which this reference applies | [optional] 
**Id** |  Pointer to **String** | ID of the object to which this reference applies | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusRequestedFor = Initialize-PSSailpoint.V2024RequestedItemStatusRequestedFor  -Type IDENTITY `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusRequestedFor | ConvertTo-JSON
```


[[Back to top]](#) 

