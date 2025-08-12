---
id: v2025-account-attributes
title: AccountAttributes
pagination_label: AccountAttributes
sidebar_label: AccountAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAttributes', 'V2025AccountAttributes'] 
slug: /tools/sdk/powershell/v2025/models/account-attributes
tags: ['SDK', 'Software Development Kit', 'AccountAttributes', 'V2025AccountAttributes']
---


# AccountAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The schema attribute values for the account | [required]

## Examples

- Prepare the resource
```powershell
$AccountAttributes = Initialize-V2025AccountAttributes  -Attributes {city=Austin, displayName=John Doe, userName=jdoe, sAMAccountName=jDoe, mail=john.doe@sailpoint.com}
```

- Convert the resource to JSON
```powershell
$AccountAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

