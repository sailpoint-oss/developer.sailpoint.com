---
id: conditioneffect
title: Conditioneffect
pagination_label: Conditioneffect
sidebar_label: Conditioneffect
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Conditioneffect', 'Conditioneffect'] 
slug: /tools/sdk/powershell/customforms/models/conditioneffect
tags: ['SDK', 'Software Development Kit', 'Conditioneffect', 'Conditioneffect']
---


# Conditioneffect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EffectType** |  **Enum** [  "HIDE",    "SHOW",    "DISABLE",    "ENABLE",    "REQUIRE",    "OPTIONAL",    "SUBMIT_MESSAGE",    "SUBMIT_NOTIFICATION",    "SET_DEFAULT_VALUE" ] | Type of effect to perform when the conditions are evaluated for this logic block. HIDE ConditionEffectTypeHide  Disables validations. SHOW ConditionEffectTypeShow  Enables validations. DISABLE ConditionEffectTypeDisable  Disables validations. ENABLE ConditionEffectTypeEnable  Enables validations. REQUIRE ConditionEffectTypeRequire OPTIONAL ConditionEffectTypeOptional SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose. | [optional] 
**Config** | [**ConditioneffectConfig**](conditioneffect-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Conditioneffect = Initialize-Conditioneffect  -EffectType HIDE `
 -Config null
```

- Convert the resource to JSON
```powershell
$Conditioneffect | ConvertTo-JSON
```


[[Back to top]](#) 

