---
id: v2025-generate-random-string
title: GenerateRandomString
pagination_label: GenerateRandomString
sidebar_label: GenerateRandomString
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GenerateRandomString', 'V2025GenerateRandomString'] 
slug: /tools/sdk/powershell/v2025/models/generate-random-string
tags: ['SDK', 'Software Development Kit', 'GenerateRandomString', 'V2025GenerateRandomString']
---


# GenerateRandomString

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
$GenerateRandomString = Initialize-V2025GenerateRandomString  -Name Cloud Services Deployment Utility `
 -Operation generateRandomString `
 -IncludeNumbers true `
 -IncludeSpecialChars true `
 -Length 10 `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$GenerateRandomString | ConvertTo-JSON
```


[[Back to top]](#) 

