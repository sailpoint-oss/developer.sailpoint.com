---
id: beta-service-desk-integration-dto
title: ServiceDeskIntegrationDto
pagination_label: ServiceDeskIntegrationDto
sidebar_label: ServiceDeskIntegrationDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ServiceDeskIntegrationDto', 'BetaServiceDeskIntegrationDto'] 
slug: /tools/sdk/powershell/beta/models/service-desk-integration-dto
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationDto', 'BetaServiceDeskIntegrationDto']
---


# ServiceDeskIntegrationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Service Desk integration's name. The name must be unique. | [required]
**Description** | **String** | Service Desk integration's description. | [required]
**Type** | **String** | Service Desk integration types:  - ServiceNowSDIM - ServiceNow  | [required][default to "ServiceNowSDIM"]
**OwnerRef** | [**OwnerDto**](owner-dto) |  | [optional] 
**ClusterRef** | [**SourceClusterDto**](source-cluster-dto) |  | [optional] 
**Cluster** | **String** | Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility). | [optional] 
**ManagedSources** | **[]String** | Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility). | [optional] 
**ProvisioningConfig** | [**ProvisioningConfig**](provisioning-config) |  | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Service Desk integration's attributes. Validation constraints enforced by the implementation. | [required]
**BeforeProvisioningRule** | [**BeforeProvisioningRuleDto**](before-provisioning-rule-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ServiceDeskIntegrationDto = Initialize-PSSailpoint.BetaServiceDeskIntegrationDto  -Name Service Desk Integration Name `
 -Description A very nice Service Desk integration `
 -Type ServiceNowSDIM `
 -OwnerRef null `
 -ClusterRef null `
 -Cluster xyzzy999 `
 -ManagedSources [2c9180835d191a86015d28455b4a2329, 2c5680835d191a85765d28455b4a9823] `
 -ProvisioningConfig null `
 -Attributes {property&#x3D;value, key&#x3D;value} `
 -BeforeProvisioningRule null
```

- Convert the resource to JSON
```powershell
$ServiceDeskIntegrationDto | ConvertTo-JSON
```


[[Back to top]](#) 

