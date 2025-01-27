---
id: beta-get-discovered-applications200-response-inner
title: GetDiscoveredApplications200ResponseInner
pagination_label: GetDiscoveredApplications200ResponseInner
sidebar_label: GetDiscoveredApplications200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetDiscoveredApplications200ResponseInner'] 
slug: /tools/sdk/powershell/beta/models/get-discovered-applications200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetDiscoveredApplications200ResponseInner']
---


# GetDiscoveredApplications200ResponseInner

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
**AssociatedSources** |  Pointer to **[]String** | List of associated sources related to this discovered application. | [optional] 

## Examples

- Prepare the resource
```powershell
$GetDiscoveredApplications200ResponseInner = Initialize-PSSailpoint.BetaGetDiscoveredApplications200ResponseInner  -Id null `
 -Name ExampleApp `
 -DiscoverySource csv `
 -DiscoveredVendor ExampleVendor `
 -Description An application for managing examples. `
 -RecommendedConnectors [ConnectorA, ConnectorB] `
 -DiscoveredAt 2023-01-01T12:00Z `
 -CreatedAt 2023-01-01T12:00Z `
 -Status ACTIVE `
 -AssociatedSources [e0cc5d7d-bf7f-4f81-b2af-8885b09d9923, a0303682-5e4a-44f7-bdc2-6ce6112549c1]
```

- Convert the resource to JSON
```powershell
$GetDiscoveredApplications200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

