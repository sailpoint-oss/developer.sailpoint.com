---
id: v2025-provisioning-policy
title: ProvisioningPolicy
pagination_label: ProvisioningPolicy
sidebar_label: ProvisioningPolicy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningPolicy', 'V2025ProvisioningPolicy'] 
slug: /tools/sdk/powershell/v2025/models/provisioning-policy
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicy', 'V2025ProvisioningPolicy']
---


# ProvisioningPolicy

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
$ProvisioningPolicy = Initialize-V2025ProvisioningPolicy  -Name example provisioning policy for inactive identities `
 -Description this provisioning policy creates access based on an identity going inactive `
 -UsageType null `
 -Fields null
```

- Convert the resource to JSON
```powershell
$ProvisioningPolicy | ConvertTo-JSON
```


[[Back to top]](#) 

