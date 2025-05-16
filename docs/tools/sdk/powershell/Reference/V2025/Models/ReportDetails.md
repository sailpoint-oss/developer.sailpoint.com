---
id: v2025-report-details
title: ReportDetails
pagination_label: ReportDetails
sidebar_label: ReportDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReportDetails', 'V2025ReportDetails'] 
slug: /tools/sdk/powershell/v2025/models/report-details
tags: ['SDK', 'Software Development Kit', 'ReportDetails', 'V2025ReportDetails']
---


# ReportDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportType** |  **Enum** [  "ACCOUNTS",    "IDENTITIES_DETAILS",    "IDENTITIES",    "IDENTITY_PROFILE_IDENTITY_ERROR",    "ORPHAN_IDENTITIES",    "SEARCH_EXPORT",    "UNCORRELATED_ACCOUNTS" ] | Use this property to define what report should be processed in the RDE service. | [optional] 
**Arguments** | [**ReportDetailsArguments**](report-details-arguments) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ReportDetails = Initialize-V2025ReportDetails  -ReportType ACCOUNTS `
 -Arguments null
```

- Convert the resource to JSON
```powershell
$ReportDetails | ConvertTo-JSON
```


[[Back to top]](#) 

