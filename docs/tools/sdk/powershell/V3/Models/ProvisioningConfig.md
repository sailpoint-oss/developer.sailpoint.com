---
id: provisioning-config
title: ProvisioningConfig
pagination_label: ProvisioningConfig
sidebar_label: ProvisioningConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningConfig'] 
slug: /tools/sdk/powershell/v3/models/provisioning-config
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfig']
---


# ProvisioningConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UniversalManager** |  Pointer to **Boolean** | Specifies whether this configuration is used to manage provisioning requests for all sources from the org.  If true, no managedResourceRefs are allowed. | [optional] [readonly] [default to $false]
**ManagedResourceRefs** |  Pointer to [**[]ServiceDeskSource**](service-desk-source) | References to sources for the Service Desk integration template.  May only be specified if universalManager is false. | [optional] 
**PlanInitializerScript** |  Pointer to [**ProvisioningConfigPlanInitializerScript**](provisioning-config-plan-initializer-script) |  | [optional] 
**NoProvisioningRequests** |  Pointer to **Boolean** | Name of an attribute that when true disables the saving of ProvisioningRequest objects whenever plans are sent through this integration. | [optional] [default to $false]
**ProvisioningRequestExpiration** |  Pointer to **Int32** | When saving pending requests is enabled, this defines the number of hours the request is allowed to live before it is considered expired and no longer affects plan compilation. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningConfig = Initialize-ProvisioningConfig  -UniversalManager true `
 -ManagedResourceRefs [{type=SOURCE, id=2c9180855d191c59015d291ceb051111, name=My Source 1}, {type=SOURCE, id=2c9180855d191c59015d291ceb052222, name=My Source 2}] `
 -PlanInitializerScript null `
 -NoProvisioningRequests true `
 -ProvisioningRequestExpiration 7
```

- Convert the resource to JSON
```powershell
$ProvisioningConfig | ConvertTo-JSON
```


[[Back to top]](#) 

