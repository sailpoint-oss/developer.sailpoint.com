---
id: report-results
title: ReportResults
pagination_label: ReportResults
sidebar_label: ReportResults
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ReportResults'] 
slug: /tools/sdk/powershell/v3/models/report-results
tags: ['SDK', 'Software Development Kit', 'ReportResults']
---


# ReportResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportType** |  Pointer to  **Enum** [  "ACCOUNTS",    "IDENTITIES_DETAILS",    "IDENTITIES",    "IDENTITY_PROFILE_IDENTITY_ERROR",    "ORPHAN_IDENTITIES",    "SEARCH_EXPORT",    "UNCORRELATED_ACCOUNTS" ] | Use this property to define what report should be processed in the RDE service. | [optional] 
**TaskDefName** |  Pointer to **String** | Name of the task definition which is started to process requesting report. Usually the same as report name | [optional] 
**Id** |  Pointer to **String** | Unique task definition identifier. | [optional] 
**Created** |  Pointer to **System.DateTime** | Report processing start date | [optional] 
**Status** |  Pointer to  **Enum** [  "SUCCESS",    "FAILURE",    "WARNING",    "TERMINATED" ] | Report current state or result status. | [optional] 
**Duration** |  Pointer to **Int64** | Report processing time in ms. | [optional] 
**Rows** |  Pointer to **Int64** | Report size in rows. | [optional] 
**AvailableFormats** |  Pointer to **[]String** | Output report file formats. This are formats for calling get endpoint as a query parameter &#39;fileFormat&#39;.  In case report won&#39;t have this argument there will be [&#39;CSV&#39;, &#39;PDF&#39;] as default. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReportResults = Initialize-ReportResults  -ReportType IDENTITIES_DETAILS `
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

