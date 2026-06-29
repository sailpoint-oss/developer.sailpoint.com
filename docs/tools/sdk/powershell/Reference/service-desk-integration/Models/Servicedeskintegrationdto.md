---
id: servicedeskintegrationdto
title: Servicedeskintegrationdto
pagination_label: Servicedeskintegrationdto
sidebar_label: Servicedeskintegrationdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Servicedeskintegrationdto', 'Servicedeskintegrationdto'] 
slug: /tools/sdk/powershell/servicedeskintegration/models/servicedeskintegrationdto
tags: ['SDK', 'Software Development Kit', 'Servicedeskintegrationdto', 'Servicedeskintegrationdto']
---


# Servicedeskintegrationdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the Service Desk integration | [optional] 
**Name** | **String** | Service Desk integration's name. The name must be unique. | [required]
**Created** | **System.DateTime** | The date and time the Service Desk integration was created | [optional] 
**Modified** | **System.DateTime** | The date and time the Service Desk integration was last modified | [optional] 
**Description** | **String** | Service Desk integration's description. | [required]
**Type** | **String** | Service Desk integration types:  - ServiceNowSDIM - ServiceNow  | [required][default to "ServiceNowSDIM"]
**OwnerRef** | [**Ownerdto**](ownerdto) |  | [optional] 
**ClusterRef** | [**Sourceclusterdto**](sourceclusterdto) |  | [optional] 
**Cluster** | **String** | Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility). | [optional] 
**ManagedSources** | **[]String** | Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility). | [optional] 
**ProvisioningConfig** | [**Provisioningconfig**](provisioningconfig) |  | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Service Desk integration's attributes. Validation constraints enforced by the implementation. | [required]
**BeforeProvisioningRule** | [**Beforeprovisioningruledto**](beforeprovisioningruledto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Servicedeskintegrationdto = Initialize-Servicedeskintegrationdto  -Id 62945a496ef440189b1f03e3623411c8 `
 -Name Service Desk Integration Name `
 -Created 2024-01-17T18:45:25.994Z `
 -Modified 2024-02-18T18:45:25.994Z `
 -Description A very nice Service Desk integration `
 -Type ServiceNowSDIM `
 -OwnerRef null `
 -ClusterRef null `
 -Cluster xyzzy999 `
 -ManagedSources ["2c9180835d191a86015d28455b4a2329","2c5680835d191a85765d28455b4a9823"] `
 -ProvisioningConfig null `
 -Attributes {"property":"value","key":"value"} `
 -BeforeProvisioningRule null
```

- Convert the resource to JSON
```powershell
$Servicedeskintegrationdto | ConvertTo-JSON
```


[[Back to top]](#) 

