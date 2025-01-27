---
id: beta-sp-config-rule
title: SpConfigRule
pagination_label: SpConfigRule
sidebar_label: SpConfigRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigRule'] 
slug: /tools/sdk/powershell/beta/models/sp-config-rule
tags: ['SDK', 'Software Development Kit', 'SpConfigRule']
---


# SpConfigRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** |  Pointer to **String** | JSONPath expression denoting the path within the object where a value substitution should be applied | [optional] 
**Value** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Value to be assigned at the jsonPath location within the object | [optional] 
**Mode** |  Pointer to **[]String** | Draft modes to which this rule will apply | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigRule = Initialize-PSSailpoint.BetaSpConfigRule  -Path $.enabled `
 -Value null `
 -Mode [RESTORE, PROMOTE]
```

- Convert the resource to JSON
```powershell
$SpConfigRule | ConvertTo-JSON
```


[[Back to top]](#) 

