---
id: rolegetallbulkupdateresponse
title: Rolegetallbulkupdateresponse
pagination_label: Rolegetallbulkupdateresponse
sidebar_label: Rolegetallbulkupdateresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolegetallbulkupdateresponse', 'Rolegetallbulkupdateresponse'] 
slug: /tools/sdk/powershell/roles/models/rolegetallbulkupdateresponse
tags: ['SDK', 'Software Development Kit', 'Rolegetallbulkupdateresponse', 'Rolegetallbulkupdateresponse']
---


# Rolegetallbulkupdateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the task which is executing the bulk update. This also used in to the bulk-update/** API to track status. | [optional] 
**Type** | **String** | Type of the bulk update object. | [optional] 
**Status** |  **Enum** [  "CREATED",    "PRE_PROCESS",    "POST_PROCESS",    "CHUNK_PENDING",    "CHUNK_PROCESSING" ] | The status of the bulk update request, only list unfinished request's status, the status could also checked by getBulkUpdateStatus API | [optional] 
**Created** | **System.DateTime** | Time when the bulk update request was created | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolegetallbulkupdateresponse = Initialize-Rolegetallbulkupdateresponse  -Id 2c9180867817ac4d017817c491119a20 `
 -Type Role `
 -Status CREATED `
 -Created 2020-10-08T18:33:52.029Z
```

- Convert the resource to JSON
```powershell
$Rolegetallbulkupdateresponse | ConvertTo-JSON
```


[[Back to top]](#) 

