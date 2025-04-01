---
id: v2025-account-attributes-create-attributes
title: AccountAttributesCreateAttributes
pagination_label: AccountAttributesCreateAttributes
sidebar_label: AccountAttributesCreateAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAttributesCreateAttributes', 'V2025AccountAttributesCreateAttributes'] 
slug: /tools/sdk/powershell/v2025/models/account-attributes-create-attributes
tags: ['SDK', 'Software Development Kit', 'AccountAttributesCreateAttributes', 'V2025AccountAttributesCreateAttributes']
---


# AccountAttributesCreateAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | Target source to create an account | [required]

## Examples

- Prepare the resource
```powershell
$AccountAttributesCreateAttributes = Initialize-PSSailpoint.V2025AccountAttributesCreateAttributes  -SourceId 34bfcbe116c9407464af37acbaf7a4dc
```

- Convert the resource to JSON
```powershell
$AccountAttributesCreateAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

