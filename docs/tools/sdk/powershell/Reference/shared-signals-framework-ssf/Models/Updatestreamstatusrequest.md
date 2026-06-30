---
id: updatestreamstatusrequest
title: Updatestreamstatusrequest
pagination_label: Updatestreamstatusrequest
sidebar_label: Updatestreamstatusrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Updatestreamstatusrequest', 'Updatestreamstatusrequest'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/updatestreamstatusrequest
tags: ['SDK', 'Software Development Kit', 'Updatestreamstatusrequest', 'Updatestreamstatusrequest']
---


# Updatestreamstatusrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **String** | ID of the stream whose status to update. | [required]
**Status** |  **Enum** [  "enabled",    "paused",    "disabled" ] | Desired stream status. | [required]
**Reason** | **String** | Optional reason for the status change. | [optional] 

## Examples

- Prepare the resource
```powershell
$Updatestreamstatusrequest = Initialize-Updatestreamstatusrequest  -StreamId 550e8400-e29b-41d4-a716-446655440000 `
 -Status paused `
 -Reason manually paused
```

- Convert the resource to JSON
```powershell
$Updatestreamstatusrequest | ConvertTo-JSON
```


[[Back to top]](#) 

