---
id: sourcecode
title: Sourcecode
pagination_label: Sourcecode
sidebar_label: Sourcecode
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourcecode', 'Sourcecode'] 
slug: /tools/sdk/powershell/connectorrulemanagement/models/sourcecode
tags: ['SDK', 'Software Development Kit', 'Sourcecode', 'Sourcecode']
---


# Sourcecode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | the version of the code | [required]
**Script** | **String** | The code | [required]

## Examples

- Prepare the resource
```powershell
$Sourcecode = Initialize-Sourcecode  -Version 1.0 `
 -Script return "Mr. " + firstName;
```

- Convert the resource to JSON
```powershell
$Sourcecode | ConvertTo-JSON
```


[[Back to top]](#) 

