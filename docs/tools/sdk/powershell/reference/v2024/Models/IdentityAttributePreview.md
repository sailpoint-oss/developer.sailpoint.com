---
id: v2024-identity-attribute-preview
title: IdentityAttributePreview
pagination_label: IdentityAttributePreview
sidebar_label: IdentityAttributePreview
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributePreview'] 
slug: /tools/sdk/powershell/v2024/models/identity-attribute-preview
tags: ['SDK', 'Software Development Kit', 'IdentityAttributePreview']
---


# IdentityAttributePreview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Name of the attribute that is being previewed. | [optional] 
**Value** |  Pointer to **String** | Value that was derived during the preview. | [optional] 
**PreviousValue** |  Pointer to **String** | The value of the attribute before the preview. | [optional] 
**ErrorMessages** |  Pointer to [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributePreview = Initialize-PSSailpoint.V2024IdentityAttributePreview  -Name email `
 -Value email@mail.com `
 -PreviousValue oldEmail@mail.com `
 -ErrorMessages null
```

- Convert the resource to JSON
```powershell
$IdentityAttributePreview | ConvertTo-JSON
```


[[Back to top]](#) 

