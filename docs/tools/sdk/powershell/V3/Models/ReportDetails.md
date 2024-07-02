---
id: report-details
title: ReportDetails
pagination_label: ReportDetails
sidebar_label: ReportDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ReportDetails'] 
slug: /tools/sdk/powershell/v3/models/report-details
tags: ['SDK', 'Software Development Kit', 'ReportDetails']
---


# ReportDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportType** |  Pointer to  **Enum** [  "ACCOUNTS",    "IDENTITIES_DETAILS",    "IDENTITIES",    "IDENTITY_PROFILE_IDENTITY_ERROR",    "ORPHAN_IDENTITIES",    "SEARCH_EXPORT",    "UNCORRELATED_ACCOUNTS" ] | Use this property to define what report should be processed in the RDE service. | [optional] 
**Arguments** |  Pointer to [**ReportDetailsArguments**](report-details-arguments) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ReportDetails = Initialize-ReportDetails  -ReportType IDENTITIES_DETAILS `
 -Arguments null
```

- Convert the resource to JSON
```powershell
$ReportDetails | ConvertTo-JSON
```


[[Back to top]](#) 

