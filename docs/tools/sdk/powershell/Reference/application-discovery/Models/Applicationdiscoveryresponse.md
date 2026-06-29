---
id: applicationdiscoveryresponse
title: Applicationdiscoveryresponse
pagination_label: Applicationdiscoveryresponse
sidebar_label: Applicationdiscoveryresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Applicationdiscoveryresponse', 'Applicationdiscoveryresponse'] 
slug: /tools/sdk/powershell/applicationdiscovery/models/applicationdiscoveryresponse
tags: ['SDK', 'Software Development Kit', 'Applicationdiscoveryresponse', 'Applicationdiscoveryresponse']
---


# Applicationdiscoveryresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] 
**Type** |  **Enum** [  "QUARTZ",    "QPOC",    "QUEUED_TASK" ] | Type of task for app discovery | [optional] 
**UniqueName** | **String** | Name of the task for app discovery | [optional] 
**Description** | **String** | Description of the app discovery aggregation | [optional] 
**ParentName** | **String** | Name of the parent of the task for app discovery | [optional] 
**Launcher** | **String** | Service to execute app discovery | [optional] 
**Target** | [**ApplicationdiscoveryresponseTarget**](applicationdiscoveryresponse-target) |  | [optional] 
**Created** | **System.DateTime** | Creation date of app discovery task | [optional] 
**Modified** | **System.DateTime** | Last modification date of app discovery task | [optional] 
**Launched** | **System.DateTime** | Launch date of app discovery task | [optional] 
**Completed** | **System.DateTime** | Completion date of app discovery task | [optional] 
**TaskDefinitionSummary** | [**Taskdefinitionsummary**](taskdefinitionsummary) |  | [optional] 
**CompletionStatus** |  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMPERROR" ] | Completion status of app discovery task | [optional] 
**Messages** | [**[]Taskstatusmessage**](taskstatusmessage) | Messages associated with the app discovery task | [optional] 
**Returns** | [**[]Taskreturndetails**](taskreturndetails) | Return values associated with the app discovery task | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Attributes of the app discovery task | [optional] 
**Progress** | **String** | Current progress of aggregation | [optional] 
**PercentComplete** | **Int32** | Current percentage completion of app discovery task | [optional] 

## Examples

- Prepare the resource
```powershell
$Applicationdiscoveryresponse = Initialize-Applicationdiscoveryresponse  -Id 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Type QUARTZ `
 -UniqueName Application Discovery - ID123 `
 -Description Application Discovery - From given dataset IDs `
 -ParentName Parent Task `
 -Launcher System `
 -Target null `
 -Created 2020-07-11T21:23:15Z `
 -Modified 2020-07-11T21:23:15Z `
 -Launched 2020-07-11T21:23:15Z `
 -Completed 2020-07-11T21:23:15Z `
 -TaskDefinitionSummary null `
 -CompletionStatus SUCCESS `
 -Messages null `
 -Returns null `
 -Attributes {"creatorRequestId":"ed5a371bbaba411fb8f1f6970b842334"} `
 -Progress Started `
 -PercentComplete 100
```

- Convert the resource to JSON
```powershell
$Applicationdiscoveryresponse | ConvertTo-JSON
```


[[Back to top]](#) 

