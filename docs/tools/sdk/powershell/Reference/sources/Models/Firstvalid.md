---
id: firstvalid
title: Firstvalid
pagination_label: Firstvalid
sidebar_label: Firstvalid
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Firstvalid', 'Firstvalid'] 
slug: /tools/sdk/powershell/sources/models/firstvalid
tags: ['SDK', 'Software Development Kit', 'Firstvalid', 'Firstvalid']
---


# Firstvalid

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Values** | [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | An array of attributes to evaluate for existence. | [required]
**IgnoreErrors** | **Boolean** | a true or false value representing to move on to the next option if an error (like an Null Pointer Exception) were to occur. | [optional] [default to $false]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Firstvalid = Initialize-Firstvalid  -Values [{"attributes":{"sourceName":"Active Directory","attributeName":"sAMAccountName"},"type":"accountAttribute"},{"attributes":{"sourceName":"Okta","attributeName":"login"},"type":"accountAttribute"},{"attributes":{"sourceName":"HR Source","attributeName":"employeeID"},"type":"accountAttribute"}] `
 -IgnoreErrors false `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$Firstvalid | ConvertTo-JSON
```


[[Back to top]](#) 

