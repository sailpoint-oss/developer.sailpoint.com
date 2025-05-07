---
id: beta-message-catalog-dto
title: MessageCatalogDto
pagination_label: MessageCatalogDto
sidebar_label: MessageCatalogDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MessageCatalogDto', 'BetaMessageCatalogDto'] 
slug: /tools/sdk/powershell/beta/models/message-catalog-dto
tags: ['SDK', 'Software Development Kit', 'MessageCatalogDto', 'BetaMessageCatalogDto']
---


# MessageCatalogDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | The language in which the messages are returned | [optional] 
**Messages** | [**[]ResourceBundleMessage**](resource-bundle-message) | The list of message with their keys and formats | [optional] 

## Examples

- Prepare the resource
```powershell
$MessageCatalogDto = Initialize-BetaMessageCatalogDto  -Locale en_US `
 -Messages null
```

- Convert the resource to JSON
```powershell
$MessageCatalogDto | ConvertTo-JSON
```


[[Back to top]](#) 

