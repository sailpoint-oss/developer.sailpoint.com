---
id: account-attributes
title: AccountAttributes
pagination_label: AccountAttributes
sidebar_label: AccountAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAttributes', 'AccountAttributes'] 
slug: /tools/sdk/powershell/v3/models/account-attributes
tags: ['SDK', 'Software Development Kit', 'AccountAttributes', 'AccountAttributes']
---


# AccountAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The schema attribute values for the account | [required]

## Examples

- Prepare the resource
```powershell
$AccountAttributes = Initialize-PSSailpoint.V3AccountAttributes  -Attributes {city&#x3D;Austin, displayName&#x3D;John Doe, userName&#x3D;jdoe, sAMAccountName&#x3D;jDoe, mail&#x3D;john.doe@sailpoint.com}
```

- Convert the resource to JSON
```powershell
$AccountAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

