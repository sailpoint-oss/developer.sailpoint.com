---
id: generate-random-string
title: GenerateRandomString
pagination_label: GenerateRandomString
sidebar_label: GenerateRandomString
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'GenerateRandomString'] 
slug: /tools/sdk/powershell/v3/models/generate-random-string
tags: ['SDK', 'Software Development Kit', 'GenerateRandomString']
---


# GenerateRandomString

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | This must always be set to &quot;&quot;Cloud Services Deployment Utility&quot;&quot; | 
**Operation** |  **String** | The operation to perform &#x60;generateRandomString&#x60; | 
**IncludeNumbers** |  **Boolean** | This must be either &quot;&quot;true&quot;&quot; or &quot;&quot;false&quot;&quot; to indicate whether the generator logic should include numbers | 
**IncludeSpecialChars** |  **Boolean** | This must be either &quot;&quot;true&quot;&quot; or &quot;&quot;false&quot;&quot; to indicate whether the generator logic should include special characters | 
**Length** |  **String** | This specifies how long the randomly generated string needs to be   &gt;NOTE Due to identity attribute data constraints, the maximum allowable value is 450 characters  | 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] 

## Examples

- Prepare the resource
```powershell
$GenerateRandomString = Initialize-PSSailpointGenerateRandomString  -Name Cloud Services Deployment Utility `
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

