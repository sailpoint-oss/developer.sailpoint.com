---
id: v2025-account-attributes-create
title: AccountAttributesCreate
pagination_label: AccountAttributesCreate
sidebar_label: AccountAttributesCreate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAttributesCreate', 'V2025AccountAttributesCreate'] 
slug: /tools/sdk/powershell/v2025/models/account-attributes-create
tags: ['SDK', 'Software Development Kit', 'AccountAttributesCreate', 'V2025AccountAttributesCreate']
---


# AccountAttributesCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**AccountAttributesCreateAttributes**](account-attributes-create-attributes) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccountAttributesCreate = Initialize-PSSailpoint.V2025AccountAttributesCreate  -Attributes null
```

- Convert the resource to JSON
```powershell
$AccountAttributesCreate | ConvertTo-JSON
```


[[Back to top]](#) 

