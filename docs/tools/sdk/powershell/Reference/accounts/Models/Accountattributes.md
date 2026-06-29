---
id: accountattributes
title: Accountattributes
pagination_label: Accountattributes
sidebar_label: Accountattributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountattributes', 'Accountattributes'] 
slug: /tools/sdk/powershell/accounts/models/accountattributes
tags: ['SDK', 'Software Development Kit', 'Accountattributes', 'Accountattributes']
---


# Accountattributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The schema attribute values for the account | [required]

## Examples

- Prepare the resource
```powershell
$Accountattributes = Initialize-Accountattributes  -Attributes {"city":"Austin","displayName":"John Doe","userName":"jdoe","sAMAccountName":"jDoe","mail":"john.doe@sailpoint.com"}
```

- Convert the resource to JSON
```powershell
$Accountattributes | ConvertTo-JSON
```


[[Back to top]](#) 

