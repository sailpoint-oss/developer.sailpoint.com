---
id: account-attributes
title: AccountAttributes
pagination_label: AccountAttributes
sidebar_label: AccountAttributes
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountAttributes'] 
slug: /tools/sdk/powershell/beta/models/account-attributes
tags: ['SDK', 'Software Development Kit', 'AccountAttributes']
---


# AccountAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** |  [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | The schema attribute values for the account | 

## Examples

- Prepare the resource
```powershell
$AccountAttributes = Initialize-BetaAccountAttributes  -Attributes {city=Austin, displayName=John Doe, userName=jdoe, sAMAccountName=jDoe, mail=john.doe@sailpoint.com}
```

- Convert the resource to JSON
```powershell
$AccountAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

