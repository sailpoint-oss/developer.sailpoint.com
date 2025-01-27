---
id: beta-message-catalog-dto
title: MessageCatalogDto
pagination_label: MessageCatalogDto
sidebar_label: MessageCatalogDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MessageCatalogDto'] 
slug: /tools/sdk/powershell/beta/models/message-catalog-dto
tags: ['SDK', 'Software Development Kit', 'MessageCatalogDto']
---


# MessageCatalogDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** |  Pointer to **String** | The language in which the messages are returned | [optional] 
**Messages** |  Pointer to [**[]ResourceBundleMessage**](resource-bundle-message) | The list of message with their keys and formats | [optional] 

## Examples

- Prepare the resource
```powershell
$MessageCatalogDto = Initialize-PSSailpoint.BetaMessageCatalogDto  -Locale en_US `
 -Messages null
```

- Convert the resource to JSON
```powershell
$MessageCatalogDto | ConvertTo-JSON
```


[[Back to top]](#) 

