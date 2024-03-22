---
id: identity-attribute-preview
title: IdentityAttributePreview
pagination_label: IdentityAttributePreview
sidebar_label: IdentityAttributePreview
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttributePreview'] 
slug: /tools/sdk/powershell/beta/models/identity-attribute-preview
tags: ['SDK', 'Software Development Kit', 'IdentityAttributePreview']
---


# IdentityAttributePreview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Name of the attribute that is being previewed. | [optional] 
**Value** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | Value that was derived during the preview. | [optional] 
**PreviousValue** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | The value of the attribute before the preview. | [optional] 
**ErrorMessages** |  Pointer to [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributePreview = Initialize-PSSailpointBetaIdentityAttributePreview  -Name email `
 -Value email@mail.com `
 -PreviousValue oldEmail@mail.com `
 -ErrorMessages null
```

- Convert the resource to JSON
```powershell
$IdentityAttributePreview | ConvertTo-JSON
```


[[Back to top]](#) 

