---
id: beta-va-cluster-status-change-event-application
title: VAClusterStatusChangeEventApplication
pagination_label: VAClusterStatusChangeEventApplication
sidebar_label: VAClusterStatusChangeEventApplication
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VAClusterStatusChangeEventApplication', 'BetaVAClusterStatusChangeEventApplication'] 
slug: /tools/sdk/powershell/beta/models/va-cluster-status-change-event-application
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventApplication', 'BetaVAClusterStatusChangeEventApplication']
---


# VAClusterStatusChangeEventApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Application's globally unique identifier (GUID). | [required]
**Name** | **String** | Application name. | [required]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Custom map of attributes for a source. Attributes only populate if the type is `SOURCE` and the source has a proxy. | [required]

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEventApplication = Initialize-PSSailpoint.BetaVAClusterStatusChangeEventApplication  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Production VA Cluster `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEventApplication | ConvertTo-JSON
```


[[Back to top]](#) 

