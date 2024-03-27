---
id: identity-preview-response
title: IdentityPreviewResponse
pagination_label: IdentityPreviewResponse
sidebar_label: IdentityPreviewResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityPreviewResponse'] 
slug: /tools/sdk/powershell/beta/models/identity-preview-response
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponse']
---


# IdentityPreviewResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  Pointer to [**IdentityPreviewResponseIdentity**](identity-preview-response-identity) |  | [optional] 
**PreviewAttributes** |  Pointer to [**[]IdentityAttributePreview**](identity-attribute-preview) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityPreviewResponse = Initialize-PSSailpointBetaIdentityPreviewResponse  -Identity null `
 -PreviewAttributes null
```

- Convert the resource to JSON
```powershell
$IdentityPreviewResponse | ConvertTo-JSON
```


[[Back to top]](#) 

