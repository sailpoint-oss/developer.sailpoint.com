---
id: provisioning-policy-dto
title: ProvisioningPolicyDto
pagination_label: ProvisioningPolicyDto
sidebar_label: ProvisioningPolicyDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningPolicyDto'] 
slug: /tools/sdk/powershell/beta/models/provisioning-policy-dto
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicyDto']
---


# ProvisioningPolicyDto

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
$ProvisioningPolicyDto = Initialize-PSSailpointBetaProvisioningPolicyDto  -Name example provisioning policy for inactive identities `
 -Description this provisioning policy creates access based on an identity going inactive `
 -UsageType null `
 -Fields null
```

- Convert the resource to JSON
```powershell
$ProvisioningPolicyDto | ConvertTo-JSON
```


[[Back to top]](#) 

