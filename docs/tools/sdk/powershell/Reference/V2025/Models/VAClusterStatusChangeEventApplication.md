---
id: v2025-va-cluster-status-change-event-application
title: VAClusterStatusChangeEventApplication
pagination_label: VAClusterStatusChangeEventApplication
sidebar_label: VAClusterStatusChangeEventApplication
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VAClusterStatusChangeEventApplication', 'V2025VAClusterStatusChangeEventApplication'] 
slug: /tools/sdk/powershell/v2025/models/va-cluster-status-change-event-application
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventApplication', 'V2025VAClusterStatusChangeEventApplication']
---


# VAClusterStatusChangeEventApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The GUID of the application | [required]
**Name** | **String** | The name of the application | [required]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Custom map of attributes for a source.  This will only be populated if type is `SOURCE` and the source has a proxy. | [required]

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEventApplication = Initialize-V2025VAClusterStatusChangeEventApplication  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Production VA Cluster `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEventApplication | ConvertTo-JSON
```


[[Back to top]](#) 

