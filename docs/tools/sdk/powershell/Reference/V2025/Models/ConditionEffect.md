---
id: v2025-condition-effect
title: ConditionEffect
pagination_label: ConditionEffect
sidebar_label: ConditionEffect
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConditionEffect', 'V2025ConditionEffect'] 
slug: /tools/sdk/powershell/v2025/models/condition-effect
tags: ['SDK', 'Software Development Kit', 'ConditionEffect', 'V2025ConditionEffect']
---


# ConditionEffect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EffectType** |  **Enum** [  "HIDE",    "SHOW",    "DISABLE",    "ENABLE",    "REQUIRE",    "OPTIONAL",    "SUBMIT_MESSAGE",    "SUBMIT_NOTIFICATION",    "SET_DEFAULT_VALUE" ] | Type of effect to perform when the conditions are evaluated for this logic block. HIDE ConditionEffectTypeHide  Disables validations. SHOW ConditionEffectTypeShow  Enables validations. DISABLE ConditionEffectTypeDisable  Disables validations. ENABLE ConditionEffectTypeEnable  Enables validations. REQUIRE ConditionEffectTypeRequire OPTIONAL ConditionEffectTypeOptional SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose. | [optional] 
**Config** | [**ConditionEffectConfig**](condition-effect-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ConditionEffect = Initialize-V2025ConditionEffect  -EffectType HIDE `
 -Config null
```

- Convert the resource to JSON
```powershell
$ConditionEffect | ConvertTo-JSON
```


[[Back to top]](#) 

