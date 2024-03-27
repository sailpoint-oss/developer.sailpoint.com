---
id: rule
title: Rule
pagination_label: Rule
sidebar_label: Rule
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Rule'] 
slug: /tools/sdk/powershell/beta/models/rule
tags: ['SDK', 'Software Development Kit', 'Rule']
---


# Rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | This must always be set to &quot;&quot;Cloud Services Deployment Utility&quot;&quot; | 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] 
**Operation** |  **String** | The operation to perform &#x60;getReferenceIdentityAttribute&#x60; | 
**IncludeNumbers** |  **Boolean** | This must be either &quot;&quot;true&quot;&quot; or &quot;&quot;false&quot;&quot; to indicate whether the generator logic should include numbers | 
**IncludeSpecialChars** |  **Boolean** | This must be either &quot;&quot;true&quot;&quot; or &quot;&quot;false&quot;&quot; to indicate whether the generator logic should include special characters | 
**Length** |  **String** | This specifies how long the randomly generated string needs to be   &gt;NOTE Due to identity attribute data constraints, the maximum allowable value is 450 characters  | 
**Uid** |  **String** | This is the SailPoint User Name (uid) value of the identity whose attribute is desired  As a convenience feature, you can use the &#x60;manager&#x60; keyword to dynamically look up the user&#39;s manager and then get that manager&#39;s identity attribute.  | 

## Examples

- Prepare the resource
```powershell
$Rule = Initialize-PSSailpointBetaRule  -Name Cloud Services Deployment Utility `
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

