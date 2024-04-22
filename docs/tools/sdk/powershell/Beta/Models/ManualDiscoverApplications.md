---
id: manual-discover-applications
title: ManualDiscoverApplications
pagination_label: ManualDiscoverApplications
sidebar_label: ManualDiscoverApplications
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ManualDiscoverApplications'] 
slug: /tools/sdk/powershell/beta/models/manual-discover-applications
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplications']
---


# ManualDiscoverApplications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  **System.IO.FileInfo** | The CSV file to upload containing &#x60;application_name&#x60; and &#x60;description&#x60; columns. Each row represents an application to be discovered. | 

## Examples

- Prepare the resource
```powershell
$ManualDiscoverApplications = Initialize-BetaManualDiscoverApplications  -File application_name,description
"Sample App","This is a sample description for Sample App."
"Another App","Description for Another App."
```

- Convert the resource to JSON
```powershell
$ManualDiscoverApplications | ConvertTo-JSON
```


[[Back to top]](#) 

