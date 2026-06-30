---
id: spconfigrule
title: Spconfigrule
pagination_label: Spconfigrule
sidebar_label: Spconfigrule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Spconfigrule', 'Spconfigrule'] 
slug: /tools/sdk/powershell/spconfig/models/spconfigrule
tags: ['SDK', 'Software Development Kit', 'Spconfigrule', 'Spconfigrule']
---


# Spconfigrule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** | **String** | JSONPath expression denoting the path within the object where a value substitution should be applied. | [optional] 
**Value** | [**SpconfigruleValue**](spconfigrule-value) |  | [optional] 
**Modes** | **[]String** | Draft modes the rule will apply to. | [optional] 

## Examples

- Prepare the resource
```powershell
$Spconfigrule = Initialize-Spconfigrule  -Path $.enabled `
 -Value null `
 -Modes ["RESTORE","PROMOTE"]
```

- Convert the resource to JSON
```powershell
$Spconfigrule | ConvertTo-JSON
```


[[Back to top]](#) 

