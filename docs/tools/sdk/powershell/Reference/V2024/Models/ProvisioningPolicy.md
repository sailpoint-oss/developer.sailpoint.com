---
id: v2024-provisioning-policy
title: ProvisioningPolicy
pagination_label: ProvisioningPolicy
sidebar_label: ProvisioningPolicy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningPolicy', 'V2024ProvisioningPolicy'] 
slug: /tools/sdk/powershell/v2024/models/provisioning-policy
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicy', 'V2024ProvisioningPolicy']
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
$ProvisioningPolicy = Initialize-PSSailpoint.V2024ProvisioningPolicy  -Name example provisioning policy for inactive identities `
 -Description this provisioning policy creates access based on an identity going inactive `
 -UsageType null `
 -Fields null
```

- Convert the resource to JSON
```powershell
$ProvisioningPolicy | ConvertTo-JSON
```


[[Back to top]](#) 

