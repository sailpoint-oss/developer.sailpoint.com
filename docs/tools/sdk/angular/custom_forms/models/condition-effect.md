# ConditionEffect

# ConditionEffect

Import this model from the entry point of its package:

```typescript
import { ConditionEffect } from '@sailpoint/angular-sdk/custom_forms';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effectType** | **(optional)** `string` | Type of effect to perform when the conditions are evaluated for this logic block. HIDE ConditionEffectTypeHide  Disables validations. SHOW ConditionEffectTypeShow  Enables validations. DISABLE ConditionEffectTypeDisable  Disables validations. ENABLE ConditionEffectTypeEnable  Enables validations. REQUIRE ConditionEffectTypeRequire OPTIONAL ConditionEffectTypeOptional SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose. | [default to undefined]
**config** | **(optional)** `ConditionEffectConfig` |  | [default to undefined]

