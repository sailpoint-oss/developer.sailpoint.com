---
id: streamstatusresponse
title: Streamstatusresponse
pagination_label: Streamstatusresponse
sidebar_label: Streamstatusresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Streamstatusresponse', 'Streamstatusresponse'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/streamstatusresponse
tags: ['SDK', 'Software Development Kit', 'Streamstatusresponse', 'Streamstatusresponse']
---


# Streamstatusresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **String** | Stream identifier. | [optional] 
**Status** |  **Enum** [  "enabled",    "paused",    "disabled" ] | Operational status of the stream (enabled, paused, or disabled). | [optional] 
**Reason** | **String** | Optional reason for the current status (e.g. set when status is updated). | [optional] 

## Examples

- Prepare the resource
```powershell
$Streamstatusresponse = Initialize-Streamstatusresponse  -StreamId 550e8400-e29b-41d4-a716-446655440000 `
 -Status enabled `
 -Reason 
```

- Convert the resource to JSON
```powershell
$Streamstatusresponse | ConvertTo-JSON
```


[[Back to top]](#) 

