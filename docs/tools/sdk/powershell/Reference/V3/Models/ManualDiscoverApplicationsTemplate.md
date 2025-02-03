---
id: manual-discover-applications-template
title: ManualDiscoverApplicationsTemplate
pagination_label: ManualDiscoverApplicationsTemplate
sidebar_label: ManualDiscoverApplicationsTemplate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManualDiscoverApplicationsTemplate', 'ManualDiscoverApplicationsTemplate'] 
slug: /tools/sdk/powershell/v3/models/manual-discover-applications-template
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplicationsTemplate', 'ManualDiscoverApplicationsTemplate']
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
$ManualDiscoverApplicationsTemplate = Initialize-PSSailpoint.V3ManualDiscoverApplicationsTemplate  -ApplicationName Example Application `
 -Description Example Description
```

- Convert the resource to JSON
```powershell
$ManualDiscoverApplicationsTemplate | ConvertTo-JSON
```


[[Back to top]](#) 

