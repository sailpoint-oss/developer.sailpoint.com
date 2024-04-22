---
id: condition-effect-config
title: ConditionEffectConfig
pagination_label: ConditionEffectConfig
sidebar_label: ConditionEffectConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ConditionEffectConfig'] 
slug: /tools/sdk/powershell/beta/models/condition-effect-config
tags: ['SDK', 'Software Development Kit', 'ConditionEffectConfig']
---


# ConditionEffectConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultValueLabel** |  Pointer to **String** | Effect type&#39;s label. | [optional] 
**Element** |  Pointer to **String** | Element&#39;s identifier. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConditionEffectConfig = Initialize-BetaConditionEffectConfig  -DefaultValueLabel Access to Remove `
 -Element 8110662963316867
```

- Convert the resource to JSON
```powershell
$ConditionEffectConfig | ConvertTo-JSON
```


[[Back to top]](#) 

