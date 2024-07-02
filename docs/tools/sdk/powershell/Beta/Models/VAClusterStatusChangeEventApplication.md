---
id: va-cluster-status-change-event-application
title: VAClusterStatusChangeEventApplication
pagination_label: VAClusterStatusChangeEventApplication
sidebar_label: VAClusterStatusChangeEventApplication
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'VAClusterStatusChangeEventApplication'] 
slug: /tools/sdk/powershell/beta/models/va-cluster-status-change-event-application
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventApplication']
---


# VAClusterStatusChangeEventApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The GUID of the application | 
**Name** |  **String** | The name of the application | 
**Attributes** |  [map[string] **Any**] | Custom map of attributes for a source.  This will only be populated if type is &#x60;SOURCE&#x60; and the source has a proxy. | 

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEventApplication = Initialize-BetaVAClusterStatusChangeEventApplication  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Production VA Cluster `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEventApplication | ConvertTo-JSON
```


[[Back to top]](#) 

