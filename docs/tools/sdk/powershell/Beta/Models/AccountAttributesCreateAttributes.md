---
id: account-attributes-create-attributes
title: AccountAttributesCreateAttributes
pagination_label: AccountAttributesCreateAttributes
sidebar_label: AccountAttributesCreateAttributes
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountAttributesCreateAttributes'] 
slug: /tools/sdk/powershell/beta/models/account-attributes-create-attributes
tags: ['SDK', 'Software Development Kit', 'AccountAttributesCreateAttributes']
---


# AccountAttributesCreateAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** |  **String** | Target source to create an account | 

## Examples

- Prepare the resource
```powershell
$AccountAttributesCreateAttributes = Initialize-PSSailpointBetaAccountAttributesCreateAttributes  -SourceId 34bfcbe116c9407464af37acbaf7a4dc
```

- Convert the resource to JSON
```powershell
$AccountAttributesCreateAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

