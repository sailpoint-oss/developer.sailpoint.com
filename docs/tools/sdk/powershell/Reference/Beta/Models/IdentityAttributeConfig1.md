---
id: beta-identity-attribute-config1
title: IdentityAttributeConfig1
pagination_label: IdentityAttributeConfig1
sidebar_label: IdentityAttributeConfig1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributeConfig1', 'BetaIdentityAttributeConfig1'] 
slug: /tools/sdk/powershell/beta/models/identity-attribute-config1
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeConfig1', 'BetaIdentityAttributeConfig1']
---


# IdentityAttributeConfig1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Backend will only promote values if the profile/mapping is enabled. | [optional] [default to $false]
**AttributeTransforms** | [**[]IdentityAttributeTransform1**](identity-attribute-transform1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeConfig1 = Initialize-PSSailpoint.BetaIdentityAttributeConfig1  -Enabled true `
 -AttributeTransforms null
```

- Convert the resource to JSON
```powershell
$IdentityAttributeConfig1 | ConvertTo-JSON
```


[[Back to top]](#) 

