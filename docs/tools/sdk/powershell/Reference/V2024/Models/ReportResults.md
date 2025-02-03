---
id: v2024-report-results
title: ReportResults
pagination_label: ReportResults
sidebar_label: ReportResults
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReportResults', 'V2024ReportResults'] 
slug: /tools/sdk/powershell/v2024/models/report-results
tags: ['SDK', 'Software Development Kit', 'ReportResults', 'V2024ReportResults']
---


# ReportResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportType** |  **Enum** [  "ACCOUNTS",    "IDENTITIES_DETAILS",    "IDENTITIES",    "IDENTITY_PROFILE_IDENTITY_ERROR",    "ORPHAN_IDENTITIES",    "SEARCH_EXPORT",    "UNCORRELATED_ACCOUNTS" ] | Use this property to define what report should be processed in the RDE service. | [optional] 
**TaskDefName** | **String** | Name of the task definition which is started to process requesting report. Usually the same as report name | [optional] 
**Id** | **String** | Unique task definition identifier. | [optional] 
**Created** | **System.DateTime** | Report processing start date | [optional] 
**Status** |  **Enum** [  "SUCCESS",    "FAILURE",    "WARNING",    "TERMINATED" ] | Report current state or result status. | [optional] 
**Duration** | **Int64** | Report processing time in ms. | [optional] 
**Rows** | **Int64** | Report size in rows. | [optional] 
**AvailableFormats** | **[]String** | Output report file formats. This are formats for calling get endpoint as a query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReportResults = Initialize-PSSailpoint.V2024ReportResults  -ReportType IDENTITIES_DETAILS `
 -TaskDefName Identities Details Report `
 -Id a248c16fe22222b2bd49615481311111 `
 -Created null `
 -Status SUCCESS `
 -Duration 342 `
 -Rows 37 `
 -AvailableFormats [CSV]
```

- Convert the resource to JSON
```powershell
$ReportResults | ConvertTo-JSON
```


[[Back to top]](#) 

