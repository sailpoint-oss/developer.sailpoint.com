---
id: generaterandomstring
title: Generaterandomstring
pagination_label: Generaterandomstring
sidebar_label: Generaterandomstring
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Generaterandomstring', 'Generaterandomstring'] 
slug: /tools/sdk/powershell/sources/models/generaterandomstring
tags: ['SDK', 'Software Development Kit', 'Generaterandomstring', 'Generaterandomstring']
---


# Generaterandomstring

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | This must always be set to ""Cloud Services Deployment Utility"" | [required]
**Operation** | **String** | The operation to perform `generateRandomString` | [required]
**IncludeNumbers** | **Boolean** | This must be either ""true"" or ""false"" to indicate whether the generator logic should include numbers | [required]
**IncludeSpecialChars** | **Boolean** | This must be either ""true"" or ""false"" to indicate whether the generator logic should include special characters | [required]
**Length** | **String** | This specifies how long the randomly generated string needs to be   >NOTE Due to identity attribute data constraints, the maximum allowable value is 450 characters  | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] 

## Examples

- Prepare the resource
```powershell
$Generaterandomstring = Initialize-Generaterandomstring  -Name Cloud Services Deployment Utility `
 -Operation generateRandomString `
 -IncludeNumbers true `
 -IncludeSpecialChars true `
 -Length 10 `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$Generaterandomstring | ConvertTo-JSON
```


[[Back to top]](#) 

