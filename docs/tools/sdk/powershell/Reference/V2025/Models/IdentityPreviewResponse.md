---
id: v2025-identity-preview-response
title: IdentityPreviewResponse
pagination_label: IdentityPreviewResponse
sidebar_label: IdentityPreviewResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityPreviewResponse', 'V2025IdentityPreviewResponse'] 
slug: /tools/sdk/powershell/v2025/models/identity-preview-response
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponse', 'V2025IdentityPreviewResponse']
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
$IdentityPreviewResponse = Initialize-PSSailpoint.V2025IdentityPreviewResponse  -Identity null `
 -PreviewAttributes null
```

- Convert the resource to JSON
```powershell
$IdentityPreviewResponse | ConvertTo-JSON
```


[[Back to top]](#) 

