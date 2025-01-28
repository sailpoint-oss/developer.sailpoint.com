---
id: v2024-create-scheduled-search-request
title: CreateScheduledSearchRequest
pagination_label: CreateScheduledSearchRequest
sidebar_label: CreateScheduledSearchRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateScheduledSearchRequest'] 
slug: /tools/sdk/powershell/v2024/models/create-scheduled-search-request
tags: ['SDK', 'Software Development Kit', 'CreateScheduledSearchRequest']
---


# CreateScheduledSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The name of the scheduled search.  | [optional] 
**Description** |  Pointer to **String** | The description of the scheduled search.  | [optional] 
**SavedSearchId** |  **String** | The ID of the saved search that will be executed. | [required]
**Created** |  Pointer to **System.DateTime** | The date the scheduled search was initially created. | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | The last date the scheduled search was modified. | [optional] [readonly] 
**Schedule** |  [**Schedule2**](schedule2) |  | [required]
**Recipients** |  [**[]SearchScheduleRecipientsInner**](search-schedule-recipients-inner) | A list of identities that should receive the scheduled search report via email. | [required]
**Enabled** |  Pointer to **Boolean** | Indicates if the scheduled search is enabled.  | [optional] [default to $false]
**EmailEmptyResults** |  Pointer to **Boolean** | Indicates if email generation should occur when search returns no results.  | [optional] [default to $false]
**DisplayQueryDetails** |  Pointer to **Boolean** | Indicates if the generated email should include the query and search results preview (which could include PII).  | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$CreateScheduledSearchRequest = Initialize-PSSailpoint.V2024CreateScheduledSearchRequest  -Name Daily disabled accounts `
 -Description Daily disabled accounts `
 -SavedSearchId 554f1511-f0a1-4744-ab14-599514d3e57c `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Schedule null `
 -Recipients null `
 -Enabled false `
 -EmailEmptyResults false `
 -DisplayQueryDetails false
```

- Convert the resource to JSON
```powershell
$CreateScheduledSearchRequest | ConvertTo-JSON
```


[[Back to top]](#) 

