---
id: scheduled-search
title: ScheduledSearch
pagination_label: ScheduledSearch
sidebar_label: ScheduledSearch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledSearch'] 
slug: /tools/sdk/powershell/v2024/models/scheduled-search
tags: ['SDK', 'Software Development Kit', 'ScheduledSearch']
---


# ScheduledSearch

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
**Id** |  **String** | The scheduled search ID. | [required][readonly] 
**Owner** |  [**ScheduledSearchAllOfOwner**](scheduled-search-all-of-owner) |  | [required]
**OwnerId** |  **String** | The ID of the scheduled search owner.  Please use the `id` in the `owner` object instead.  | [required][readonly] 

## Examples

- Prepare the resource
```powershell
$ScheduledSearch = Initialize-PSSailpoint.V2024ScheduledSearch  -Name Daily disabled accounts `
 -Description Daily disabled accounts `
 -SavedSearchId 554f1511-f0a1-4744-ab14-599514d3e57c `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Schedule null `
 -Recipients null `
 -Enabled false `
 -EmailEmptyResults false `
 -DisplayQueryDetails false `
 -Id 0de46054-fe90-434a-b84e-c6b3359d0c64 `
 -Owner null `
 -OwnerId 2c9180867624cbd7017642d8c8c81f67
```

- Convert the resource to JSON
```powershell
$ScheduledSearch | ConvertTo-JSON
```


[[Back to top]](#) 

