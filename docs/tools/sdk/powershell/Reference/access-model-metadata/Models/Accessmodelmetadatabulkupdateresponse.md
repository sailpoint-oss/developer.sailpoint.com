---
id: accessmodelmetadatabulkupdateresponse
title: Accessmodelmetadatabulkupdateresponse
pagination_label: Accessmodelmetadatabulkupdateresponse
sidebar_label: Accessmodelmetadatabulkupdateresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessmodelmetadatabulkupdateresponse', 'Accessmodelmetadatabulkupdateresponse'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/accessmodelmetadatabulkupdateresponse
tags: ['SDK', 'Software Development Kit', 'Accessmodelmetadatabulkupdateresponse', 'Accessmodelmetadatabulkupdateresponse']
---


# Accessmodelmetadatabulkupdateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the task which is executing the bulk update. | [optional] 
**Type** | **String** | Type of the bulk update object. | [optional] 
**Status** |  **Enum** [  "CREATED",    "PRE_PROCESS",    "PRE_PROCESS_COMPLETED",    "POST_PROCESS",    "COMPLETED",    "CHUNK_PENDING",    "CHUNK_PROCESSING",    "RE_PROCESSING",    "PRE_PROCESS_FAILED",    "FAILED" ] | The status of the bulk update request, only list unfinished request's status. | [optional] 
**Created** | **System.DateTime** | Time when the bulk update request was created | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessmodelmetadatabulkupdateresponse = Initialize-Accessmodelmetadatabulkupdateresponse  -Id 2c9180867817ac4d017817c491119a20 `
 -Type Role `
 -Status CREATED `
 -Created 2020-10-08T18:33:52.029Z
```

- Convert the resource to JSON
```powershell
$Accessmodelmetadatabulkupdateresponse | ConvertTo-JSON
```


[[Back to top]](#) 

