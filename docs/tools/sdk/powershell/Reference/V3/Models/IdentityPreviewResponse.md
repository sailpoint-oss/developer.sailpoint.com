---
id: identity-preview-response
title: IdentityPreviewResponse
pagination_label: IdentityPreviewResponse
sidebar_label: IdentityPreviewResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityPreviewResponse', 'IdentityPreviewResponse'] 
slug: /tools/sdk/powershell/v3/models/identity-preview-response
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponse', 'IdentityPreviewResponse']
---


# IdentityPreviewResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentityPreviewResponseIdentity**](identity-preview-response-identity) |  | [optional] 
**PreviewAttributes** | [**[]IdentityAttributePreview**](identity-attribute-preview) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityPreviewResponse = Initialize-IdentityPreviewResponse  -Identity null `
 -PreviewAttributes null
```

- Convert the resource to JSON
```powershell
$IdentityPreviewResponse | ConvertTo-JSON
```


[[Back to top]](#) 

