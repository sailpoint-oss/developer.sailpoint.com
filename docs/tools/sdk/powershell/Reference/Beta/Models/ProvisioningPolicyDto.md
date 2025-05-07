---
id: beta-provisioning-policy-dto
title: ProvisioningPolicyDto
pagination_label: ProvisioningPolicyDto
sidebar_label: ProvisioningPolicyDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningPolicyDto', 'BetaProvisioningPolicyDto'] 
slug: /tools/sdk/powershell/beta/models/provisioning-policy-dto
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicyDto', 'BetaProvisioningPolicyDto']
---


# ProvisioningPolicyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the provisioning policy name | [required]
**Description** | **String** | the description of the provisioning policy | [optional] 
**UsageType** | [**UsageType**](usage-type) |  | [optional] 
**Fields** | [**[]FieldDetailsDto**](field-details-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningPolicyDto = Initialize-BetaProvisioningPolicyDto  -Name example provisioning policy for inactive identities `
 -Description this provisioning policy creates access based on an identity going inactive `
 -UsageType null `
 -Fields null
```

- Convert the resource to JSON
```powershell
$ProvisioningPolicyDto | ConvertTo-JSON
```


[[Back to top]](#) 

