---
id: task-result-details
title: TaskResultDetails
pagination_label: TaskResultDetails
sidebar_label: TaskResultDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskResultDetails'] 
slug: /tools/sdk/powershell/v2024/models/task-result-details
tags: ['SDK', 'Software Development Kit', 'TaskResultDetails']
---


# TaskResultDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "QUARTZ",    "QPOC",    "MENTOS",    "QUEUED_TASK" ] | Type of the job or task underlying in the report processing. It could be a quartz task, QPOC or MENTOS jobs or a refresh/sync task. | [optional] 
**Id** |  Pointer to **String** | Unique task definition identifier. | [optional] 
**ReportType** |  Pointer to  **Enum** [  "ACCOUNTS",    "IDENTITIES_DETAILS",    "IDENTITIES",    "IDENTITY_PROFILE_IDENTITY_ERROR",    "ORPHAN_IDENTITIES",    "SEARCH_EXPORT",    "UNCORRELATED_ACCOUNTS" ] | Use this property to define what report should be processed in the RDE service. | [optional] 
**Description** |  Pointer to **String** | Description of the report purpose and/or contents. | [optional] 
**ParentName** |  Pointer to **String** | Name of the parent task/report if exists. | [optional] 
**Launcher** |  Pointer to **String** | Name of the report processing initiator. | [optional] 
**Created** |  Pointer to **System.DateTime** | Report creation date | [optional] 
**Launched** |  Pointer to **System.DateTime** | Report start date | [optional] 
**Completed** |  Pointer to **System.DateTime** | Report completion date | [optional] 
**CompletionStatus** |  Pointer to  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMP_ERROR" ] | Report completion status. | [optional] 
**Messages** |  Pointer to [**[]TaskResultDetailsMessagesInner**](task-result-details-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Returns** |  Pointer to [**[]TaskResultDetailsReturnsInner**](task-result-details-returns-inner) | Task definition results, if necessary. | [optional] 
**Attributes** |  Pointer to [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Extra attributes map(dictionary) needed for the report. | [optional] 
**Progress** |  Pointer to **String** | Current report state. | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskResultDetails = Initialize-PSSailpoint.V2024TaskResultDetails  -Type MENTOS `
 -Id a248c16fe22222b2bd49615481311111 `
 -ReportType IDENTITIES_DETAILS `
 -Description A detailed view of the identities in the system. `
 -ParentName Audit Report `
 -Launcher cloudadmin `
 -Created null `
 -Launched null `
 -Completed null `
 -CompletionStatus Success `
 -Messages [] `
 -Returns [] `
 -Attributes {org&#x3D;an-org} `
 -Progress Initializing...
```

- Convert the resource to JSON
```powershell
$TaskResultDetails | ConvertTo-JSON
```


[[Back to top]](#) 

