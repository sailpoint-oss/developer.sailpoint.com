# CorrelationRule

# CorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Omit for new rules (server mints a UUID). Send only when updating a rule that already exists on this config (merge on PATCH). Unknown ids are rejected. | [optional] 
**Priority** | **Int32** | The evaluation priority of the rule. Lower values are evaluated first. | [required]
**DefaultRule** | **Boolean** | Whether this rule is the default rule for the config. | [required]
**RuleType** |  **Enum** [  "IDENTITY",    "ACCOUNT",    "GOVERNANCE_GROUP" ] | The rule subject type. When either ruleType or ruleAction.type is GOVERNANCE_GROUP, both must be; ruleType GOVERNANCE_GROUP is allowed only when the parent config type is OWNER_SECONDARY. | [required]
**RuleAction** | [**CorrelationRuleAction**](correlation-rule-action) |  | [required]
**ConditionExpressions** | [**[]CorrelationCondition**](correlation-condition) | The conditions that must match for this rule to apply. | [required]

## Examples

- Prepare the resource
```powershell
$CorrelationRule = Initialize-CorrelationRule  -Id 9c1f0b6a-2f2e-4a2b-8b7c-1a2b3c4d5e6f `
 -Priority 1 `
 -DefaultRule false `
 -RuleType IDENTITY `
 -RuleAction null `
 -ConditionExpressions null
```

- Convert the resource to JSON
```powershell
$CorrelationRule | ConvertTo-JSON
```


[[Back to top]](#) 

