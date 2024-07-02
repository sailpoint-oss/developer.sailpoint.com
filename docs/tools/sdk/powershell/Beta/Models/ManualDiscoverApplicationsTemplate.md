---
id: manual-discover-applications-template
title: ManualDiscoverApplicationsTemplate
pagination_label: ManualDiscoverApplicationsTemplate
sidebar_label: ManualDiscoverApplicationsTemplate
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ManualDiscoverApplicationsTemplate'] 
slug: /tools/sdk/powershell/beta/models/manual-discover-applications-template
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplicationsTemplate']
---


# ManualDiscoverApplicationsTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationName** |  Pointer to **String** | Name of the example application. | [optional] 
**Domain** |  Pointer to **String** | Description of the example application&#39;s domain. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualDiscoverApplicationsTemplate = Initialize-BetaManualDiscoverApplicationsTemplate  -ApplicationName Example Application `
 -Domain Example Description
```

- Convert the resource to JSON
```powershell
$ManualDiscoverApplicationsTemplate | ConvertTo-JSON
```


[[Back to top]](#) 

