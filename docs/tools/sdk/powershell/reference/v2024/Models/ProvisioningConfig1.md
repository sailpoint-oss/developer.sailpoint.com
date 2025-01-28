---
id: v2024-provisioning-config1
title: ProvisioningConfig1
pagination_label: ProvisioningConfig1
sidebar_label: ProvisioningConfig1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningConfig1', 'V2024ProvisioningConfig1'] 
slug: /tools/sdk/powershell/v2024/models/provisioning-config1
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfig1', 'V2024ProvisioningConfig1']
---


# ProvisioningConfig1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UniversalManager** |  Pointer to **Boolean** | Specifies whether this configuration is used to manage provisioning requests for all sources from the org.  If true, no managedResourceRefs are allowed. | [optional] [readonly] [default to $false]
**ManagedResourceRefs** |  Pointer to [**[]ProvisioningConfig1ManagedResourceRefsInner**](provisioning-config1-managed-resource-refs-inner) | References to sources for the Service Desk integration template.  May only be specified if universalManager is false. | [optional] 
**PlanInitializerScript** |  Pointer to [**ProvisioningConfig1PlanInitializerScript**](provisioning-config1-plan-initializer-script) |  | [optional] 
**NoProvisioningRequests** |  Pointer to **Boolean** | Name of an attribute that when true disables the saving of ProvisioningRequest objects whenever plans are sent through this integration. | [optional] [default to $false]
**ProvisioningRequestExpiration** |  Pointer to **Int32** | When saving pending requests is enabled, this defines the number of hours the request is allowed to live before it is considered expired and no longer affects plan compilation. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningConfig1 = Initialize-PSSailpoint.V2024ProvisioningConfig1  -UniversalManager true `
 -ManagedResourceRefs [{type&#x3D;SOURCE, id&#x3D;2c9180855d191c59015d291ceb051111, name&#x3D;My Source 1}, {type&#x3D;SOURCE, id&#x3D;2c9180855d191c59015d291ceb052222, name&#x3D;My Source 2}] `
 -PlanInitializerScript null `
 -NoProvisioningRequests true `
 -ProvisioningRequestExpiration 7
```

- Convert the resource to JSON
```powershell
$ProvisioningConfig1 | ConvertTo-JSON
```


[[Back to top]](#) 

