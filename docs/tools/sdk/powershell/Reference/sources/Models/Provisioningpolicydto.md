---
id: provisioningpolicydto
title: Provisioningpolicydto
pagination_label: Provisioningpolicydto
sidebar_label: Provisioningpolicydto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Provisioningpolicydto', 'Provisioningpolicydto'] 
slug: /tools/sdk/powershell/sources/models/provisioningpolicydto
tags: ['SDK', 'Software Development Kit', 'Provisioningpolicydto', 'Provisioningpolicydto']
---


# Provisioningpolicydto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the provisioning policy name | [required]
**Description** | **String** | the description of the provisioning policy | [optional] 
**UsageType** | [**Usagetype**](usagetype) |  | [optional] 
**Fields** | [**[]Fielddetailsdto**](fielddetailsdto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Provisioningpolicydto = Initialize-Provisioningpolicydto  -Name example provisioning policy for inactive identities `
 -Description this provisioning policy creates access based on an identity going inactive `
 -UsageType null `
 -Fields null
```

- Convert the resource to JSON
```powershell
$Provisioningpolicydto | ConvertTo-JSON
```


[[Back to top]](#) 

