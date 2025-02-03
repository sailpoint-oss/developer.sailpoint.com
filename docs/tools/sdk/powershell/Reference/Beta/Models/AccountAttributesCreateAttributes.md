---
id: beta-account-attributes-create-attributes
title: AccountAttributesCreateAttributes
pagination_label: AccountAttributesCreateAttributes
sidebar_label: AccountAttributesCreateAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAttributesCreateAttributes', 'BetaAccountAttributesCreateAttributes'] 
slug: /tools/sdk/powershell/beta/models/account-attributes-create-attributes
tags: ['SDK', 'Software Development Kit', 'AccountAttributesCreateAttributes', 'BetaAccountAttributesCreateAttributes']
---


# AccountAttributesCreateAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | Target source to create an account | [required]

## Examples

- Prepare the resource
```powershell
$AccountAttributesCreateAttributes = Initialize-PSSailpoint.BetaAccountAttributesCreateAttributes  -SourceId 34bfcbe116c9407464af37acbaf7a4dc
```

- Convert the resource to JSON
```powershell
$AccountAttributesCreateAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

