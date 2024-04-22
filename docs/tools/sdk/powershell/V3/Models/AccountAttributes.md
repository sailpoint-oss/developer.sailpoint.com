---
id: account-attributes
title: AccountAttributes
pagination_label: AccountAttributes
sidebar_label: AccountAttributes
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountAttributes'] 
slug: /tools/sdk/powershell/v3/models/account-attributes
tags: ['SDK', 'Software Development Kit', 'AccountAttributes']
---


# AccountAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** |  [map[string] **Any**] | The schema attribute values for the account | 

## Examples

- Prepare the resource
```powershell
$AccountAttributes = Initialize-AccountAttributes  -Attributes {city=Austin, displayName=John Doe, userName=jdoe, sAMAccountName=jDoe, mail=john.doe@sailpoint.com}
```

- Convert the resource to JSON
```powershell
$AccountAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

