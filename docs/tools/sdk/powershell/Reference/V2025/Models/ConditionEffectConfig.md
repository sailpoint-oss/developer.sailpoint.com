---
id: v2025-condition-effect-config
title: ConditionEffectConfig
pagination_label: ConditionEffectConfig
sidebar_label: ConditionEffectConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConditionEffectConfig', 'V2025ConditionEffectConfig'] 
slug: /tools/sdk/powershell/v2025/models/condition-effect-config
tags: ['SDK', 'Software Development Kit', 'ConditionEffectConfig', 'V2025ConditionEffectConfig']
---


# ConditionEffectConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultValueLabel** | **String** | Effect type's label. | [optional] 
**Element** | **String** | Element's identifier. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConditionEffectConfig = Initialize-V2025ConditionEffectConfig  -DefaultValueLabel Access to Remove `
 -Element 8110662963316867
```

- Convert the resource to JSON
```powershell
$ConditionEffectConfig | ConvertTo-JSON
```


[[Back to top]](#) 

