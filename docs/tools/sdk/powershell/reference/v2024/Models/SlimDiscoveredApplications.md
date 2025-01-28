---
id: v2024-slim-discovered-applications
title: SlimDiscoveredApplications
pagination_label: SlimDiscoveredApplications
sidebar_label: SlimDiscoveredApplications
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SlimDiscoveredApplications'] 
slug: /tools/sdk/powershell/v2024/models/slim-discovered-applications
tags: ['SDK', 'Software Development Kit', 'SlimDiscoveredApplications']
---


# SlimDiscoveredApplications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Unique identifier for the discovered application. | [optional] 
**Name** |  Pointer to **String** | Name of the discovered application. | [optional] 
**DiscoverySource** |  Pointer to **String** | Source from which the application was discovered. | [optional] 
**DiscoveredVendor** |  Pointer to **String** | The vendor associated with the discovered application. | [optional] 
**Description** |  Pointer to **String** | A brief description of the discovered application. | [optional] 
**RecommendedConnectors** |  Pointer to **[]String** | List of recommended connectors for the application. | [optional] 
**DiscoveredAt** |  Pointer to **System.DateTime** | The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format. | [optional] 
**CreatedAt** |  Pointer to **System.DateTime** | The timestamp when the application was first discovered, in ISO 8601 format. | [optional] 
**Status** |  Pointer to **String** | The status of an application within the discovery source.  By default this field is set to ""ACTIVE"" when the application is discovered.  If an application has been deleted from within the discovery source, the status will be set to ""INACTIVE"". | [optional] 

## Examples

- Prepare the resource
```powershell
$SlimDiscoveredApplications = Initialize-PSSailpoint.V2024SlimDiscoveredApplications  -Id null `
 -Name ExampleApp `
 -DiscoverySource csv `
 -DiscoveredVendor ExampleVendor `
 -Description An application for managing examples. `
 -RecommendedConnectors [ConnectorA, ConnectorB] `
 -DiscoveredAt 2023-01-01T12:00Z `
 -CreatedAt 2023-01-01T12:00Z `
 -Status ACTIVE
```

- Convert the resource to JSON
```powershell
$SlimDiscoveredApplications | ConvertTo-JSON
```


[[Back to top]](#) 

