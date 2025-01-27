---
id: beta-manual-discover-applications
title: ManualDiscoverApplications
pagination_label: ManualDiscoverApplications
sidebar_label: ManualDiscoverApplications
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManualDiscoverApplications'] 
slug: /tools/sdk/powershell/beta/models/manual-discover-applications
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplications']
---


# ManualDiscoverApplications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  **System.IO.FileInfo** | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. | [required]

## Examples

- Prepare the resource
```powershell
$ManualDiscoverApplications = Initialize-PSSailpoint.BetaManualDiscoverApplications  -File application_name,description
&quot;Sample App&quot;,&quot;This is a sample description for Sample App.&quot;
&quot;Another App&quot;,&quot;Description for Another App.&quot;
```

- Convert the resource to JSON
```powershell
$ManualDiscoverApplications | ConvertTo-JSON
```


[[Back to top]](#) 

