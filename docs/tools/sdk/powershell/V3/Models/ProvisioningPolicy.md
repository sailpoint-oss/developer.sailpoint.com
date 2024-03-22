---
id: provisioning-policy
title: ProvisioningPolicy
pagination_label: ProvisioningPolicy
sidebar_label: ProvisioningPolicy
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningPolicy'] 
slug: /tools/sdk/powershell/v3/models/provisioning-policy
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicy']
---


# ProvisioningPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | the provisioning policy name | 
**Description** |  Pointer to **String** | the description of the provisioning policy | [optional] 
**UsageType** |  Pointer to [**UsageType**](usage-type) |  | [optional] 
**Fields** |  Pointer to [**[]FieldDetailsDto**](field-details-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningPolicy = Initialize-PSSailpointProvisioningPolicy  -Name example provisioning policy for inactive identities `
 -Description this provisioning policy creates access based on an identity going inactive `
 -UsageType null `
 -Fields null
```

- Convert the resource to JSON
```powershell
$ProvisioningPolicy | ConvertTo-JSON
```


[[Back to top]](#) 

