---
id: beta-identity-preview-request
title: IdentityPreviewRequest
pagination_label: IdentityPreviewRequest
sidebar_label: IdentityPreviewRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityPreviewRequest'] 
slug: /tools/sdk/powershell/beta/models/identity-preview-request
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewRequest']
---


# IdentityPreviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** |  Pointer to **String** |  | [optional] 
**IdentityAttributeConfig** |  Pointer to [**IdentityAttributeConfig**](identity-attribute-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityPreviewRequest = Initialize-PSSailpoint.BetaIdentityPreviewRequest  -IdentityId null `
 -IdentityAttributeConfig null
```

- Convert the resource to JSON
```powershell
$IdentityPreviewRequest | ConvertTo-JSON
```


[[Back to top]](#) 

