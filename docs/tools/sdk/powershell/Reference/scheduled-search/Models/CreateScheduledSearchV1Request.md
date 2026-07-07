---
id: create-scheduled-search-v1-request
title: CreateScheduledSearchV1Request
pagination_label: CreateScheduledSearchV1Request
sidebar_label: CreateScheduledSearchV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateScheduledSearchV1Request', 'CreateScheduledSearchV1Request'] 
slug: /tools/sdk/powershell/scheduledsearch/models/create-scheduled-search-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateScheduledSearchV1Request', 'CreateScheduledSearchV1Request']
---


# CreateScheduledSearchV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the scheduled search.  | [optional] 
**Description** | **String** | The description of the scheduled search.  | [optional] 
**SavedSearchId** | **String** | The ID of the saved search that will be executed. | [required]
**Created** | **System.DateTime** | The date the scheduled search was initially created. | [optional] [readonly] 
**Modified** | **System.DateTime** | The last date the scheduled search was modified. | [optional] [readonly] 
**Schedule** | [**Schedule**](schedule) |  | [required]
**Recipients** | [**[]SearchscheduleRecipientsInner**](searchschedule-recipients-inner) | A list of identities that should receive the scheduled search report via email. | [required]
**Enabled** | **Boolean** | Indicates if the scheduled search is enabled.  | [optional] [default to $false]
**EmailEmptyResults** | **Boolean** | Indicates if email generation should occur when search returns no results.  | [optional] [default to $false]
**DisplayQueryDetails** | **Boolean** | Indicates if the generated email should include the query and search results preview (which could include PII).  | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$CreateScheduledSearchV1Request = Initialize-CreateScheduledSearchV1Request  -Name Daily disabled accounts `
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
$CreateScheduledSearchV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

