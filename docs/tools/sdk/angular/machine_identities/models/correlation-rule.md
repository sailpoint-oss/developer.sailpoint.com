# CorrelationRule

# CorrelationRule

Import this model from the entry point of its package:

```typescript
import { CorrelationRule } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Omit for new rules (server mints a UUID). Send only when updating a rule that already exists on this config (merge on PATCH). Unknown ids are rejected. | [default to undefined]
**priority** | `number` | The evaluation priority of the rule. Lower values are evaluated first. | [default to undefined]
**defaultRule** | `boolean` | Whether this rule is the default rule for the config. | [default to undefined]
**ruleType** | `string` | The rule subject type. When either ruleType or ruleAction.type is GOVERNANCE_GROUP, both must be; ruleType GOVERNANCE_GROUP is allowed only when the parent config type is OWNER_SECONDARY. | [default to undefined]
**ruleAction** | `CorrelationRuleAction` |  | [default to undefined]
**conditionExpressions** | `Array<CorrelationCondition>` | The conditions that must match for this rule to apply. | [default to undefined]

