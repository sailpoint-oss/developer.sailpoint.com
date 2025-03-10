---
id: manual-discover-applications
title: ManualDiscoverApplications
pagination_label: ManualDiscoverApplications
sidebar_label: ManualDiscoverApplications
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManualDiscoverApplications', 'ManualDiscoverApplications'] 
slug: /tools/sdk/powershell/v3/models/manual-discover-applications
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplications', 'ManualDiscoverApplications']
---


# ManualDiscoverApplications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. | [required]

## Examples

- Prepare the resource
```powershell
$ManualDiscoverApplications = Initialize-PSSailpoint.V3ManualDiscoverApplications  -File application_name,description
"Sample App","This is a sample description for Sample App."
"Another App","Description for Another App."
```

- Convert the resource to JSON
```powershell
$ManualDiscoverApplications | ConvertTo-JSON
```


[[Back to top]](#) 

