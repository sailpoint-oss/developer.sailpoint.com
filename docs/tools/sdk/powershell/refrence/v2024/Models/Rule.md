---
id: rule
title: Rule
pagination_label: Rule
sidebar_label: Rule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rule'] 
slug: /tools/sdk/powershell/v2024/models/rule
tags: ['SDK', 'Software Development Kit', 'Rule']
---


# Rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | This must always be set to ""Cloud Services Deployment Utility"" | [required]
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] 
**Operation** |  **String** | The operation to perform `getReferenceIdentityAttribute` | [required]
**IncludeNumbers** |  **Boolean** | This must be either ""true"" or ""false"" to indicate whether the generator logic should include numbers | [required]
**IncludeSpecialChars** |  **Boolean** | This must be either ""true"" or ""false"" to indicate whether the generator logic should include special characters | [required]
**Length** |  **String** | This specifies how long the randomly generated string needs to be   >NOTE Due to identity attribute data constraints, the maximum allowable value is 450 characters  | [required]
**Uid** |  **String** | This is the SailPoint User Name (uid) value of the identity whose attribute is desired  As a convenience feature, you can use the `manager` keyword to dynamically look up the user's manager and then get that manager's identity attribute.  | [required]

## Examples

- Prepare the resource
```powershell
$Rule = Initialize-PSSailpoint.V2024Rule  -Name Cloud Services Deployment Utility `
 -RequiresPeriodicRefresh false `
 -Operation getReferenceIdentityAttribute `
 -IncludeNumbers true `
 -IncludeSpecialChars true `
 -Length 10 `
 -Uid 2c91808570313110017040b06f344ec9
```

- Convert the resource to JSON
```powershell
$Rule | ConvertTo-JSON
```


[[Back to top]](#) 

