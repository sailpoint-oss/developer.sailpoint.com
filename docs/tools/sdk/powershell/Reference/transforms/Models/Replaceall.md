---
id: replaceall
title: Replaceall
pagination_label: Replaceall
sidebar_label: Replaceall
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Replaceall', 'Replaceall'] 
slug: /tools/sdk/powershell/transforms/models/replaceall
tags: ['SDK', 'Software Development Kit', 'Replaceall', 'Replaceall']
---


# Replaceall

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Table** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | An attribute of key-value pairs. Each pair identifies the pattern to search for as its key, and the replacement string as its value. | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Replaceall = Initialize-Replaceall  -Table {"-":" ","\"":"'","ñ":"n"} `
 -RequiresPeriodicRefresh false `
 -VarInput {"type":"accountAttribute","attributes":{"attributeName":"first_name","sourceName":"Source"}}
```

- Convert the resource to JSON
```powershell
$Replaceall | ConvertTo-JSON
```


[[Back to top]](#) 

