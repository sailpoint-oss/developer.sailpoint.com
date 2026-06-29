---
id: requesteditemstatus-requested-for
title: RequesteditemstatusRequestedFor
pagination_label: RequesteditemstatusRequestedFor
sidebar_label: RequesteditemstatusRequestedFor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequesteditemstatusRequestedFor', 'RequesteditemstatusRequestedFor'] 
slug: /tools/sdk/powershell/accessrequests/models/requesteditemstatus-requested-for
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusRequestedFor', 'RequesteditemstatusRequestedFor']
---


# RequesteditemstatusRequestedFor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Type of the object to which this reference applies | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$RequesteditemstatusRequestedFor = Initialize-RequesteditemstatusRequestedFor  -Type IDENTITY `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$RequesteditemstatusRequestedFor | ConvertTo-JSON
```


[[Back to top]](#) 

