---
id: discovered-applications-inner
title: DiscoveredApplicationsInner
pagination_label: DiscoveredApplicationsInner
sidebar_label: DiscoveredApplicationsInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'DiscoveredApplicationsInner'] 
slug: /tools/sdk/powershell/beta/models/discovered-applications-inner
tags: ['SDK', 'Software Development Kit', 'DiscoveredApplicationsInner']
---


# DiscoveredApplicationsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Unique identifier for the discovered application. | [optional] 
**Name** |  Pointer to **String** | Name of the discovered application. | [optional] 
**DiscoverySource** |  Pointer to **String** | Source from which the application was discovered. | [optional] 
**DiscoveredVendor** |  Pointer to **String** | The vendor associated with the discovered application. | [optional] 
**Description** |  Pointer to **String** | A brief description of the discovered application. | [optional] 
**RecommendedConnectors** |  Pointer to **[]String** | List of recommended connectors for the application. | [optional] 
**DiscoveredTimestamp** |  Pointer to **System.DateTime** | The timestamp when the application was discovered, in ISO 8601 format. | [optional] 

## Examples

- Prepare the resource
```powershell
$DiscoveredApplicationsInner = Initialize-BetaDiscoveredApplicationsInner  -Id null `
 -Name ExampleApp `
 -DiscoverySource CSV `
 -DiscoveredVendor ExampleVendor `
 -Description An application for managing examples. `
 -RecommendedConnectors [ConnectorA, ConnectorB] `
 -DiscoveredTimestamp 2023-01-01T12:00Z
```

- Convert the resource to JSON
```powershell
$DiscoveredApplicationsInner | ConvertTo-JSON
```


[[Back to top]](#) 

