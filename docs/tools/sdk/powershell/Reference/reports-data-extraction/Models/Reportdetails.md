---
id: reportdetails
title: Reportdetails
pagination_label: Reportdetails
sidebar_label: Reportdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reportdetails', 'Reportdetails'] 
slug: /tools/sdk/powershell/reportsdataextraction/models/reportdetails
tags: ['SDK', 'Software Development Kit', 'Reportdetails', 'Reportdetails']
---


# Reportdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportType** |  **Enum** [  "ACCOUNTS",    "IDENTITIES_DETAILS",    "IDENTITIES",    "IDENTITY_PROFILE_IDENTITY_ERROR",    "ORPHAN_IDENTITIES",    "SEARCH_EXPORT",    "UNCORRELATED_ACCOUNTS" ] | Use this property to define what report should be processed in the RDE service. | [optional] 
**Arguments** | [**ReportdetailsArguments**](reportdetails-arguments) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Reportdetails = Initialize-Reportdetails  -ReportType ACCOUNTS `
 -Arguments null
```

- Convert the resource to JSON
```powershell
$Reportdetails | ConvertTo-JSON
```


[[Back to top]](#) 

