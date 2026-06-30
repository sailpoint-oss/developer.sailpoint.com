---
id: conditioneffect-config
title: ConditioneffectConfig
pagination_label: ConditioneffectConfig
sidebar_label: ConditioneffectConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConditioneffectConfig', 'ConditioneffectConfig'] 
slug: /tools/sdk/powershell/customforms/models/conditioneffect-config
tags: ['SDK', 'Software Development Kit', 'ConditioneffectConfig', 'ConditioneffectConfig']
---


# ConditioneffectConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultValueLabel** | **String** | Effect type's label. | [optional] 
**Element** | **String** | Element's identifier. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConditioneffectConfig = Initialize-ConditioneffectConfig  -DefaultValueLabel Access to Remove `
 -Element 8110662963316867
```

- Convert the resource to JSON
```powershell
$ConditioneffectConfig | ConvertTo-JSON
```


[[Back to top]](#) 

