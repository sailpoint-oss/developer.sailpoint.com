---
id: v2025-manual-discover-applications-template
title: ManualDiscoverApplicationsTemplate
pagination_label: ManualDiscoverApplicationsTemplate
sidebar_label: ManualDiscoverApplicationsTemplate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManualDiscoverApplicationsTemplate', 'V2025ManualDiscoverApplicationsTemplate'] 
slug: /tools/sdk/powershell/v2025/models/manual-discover-applications-template
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplicationsTemplate', 'V2025ManualDiscoverApplicationsTemplate']
---


# ManualDiscoverApplicationsTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationName** | **String** | Name of the application. | [optional] 
**Description** | **String** | Description of the application. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualDiscoverApplicationsTemplate = Initialize-PSSailpoint.V2025ManualDiscoverApplicationsTemplate  -ApplicationName Example Application `
 -Description Example Description
```

- Convert the resource to JSON
```powershell
$ManualDiscoverApplicationsTemplate | ConvertTo-JSON
```


[[Back to top]](#) 

