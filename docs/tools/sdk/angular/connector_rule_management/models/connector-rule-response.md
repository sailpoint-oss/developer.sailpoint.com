# ConnectorRuleResponse

# ConnectorRuleResponse

Import this model from the entry point of its package:

```typescript
import { ConnectorRuleResponse } from '@sailpoint/angular-sdk/connector_rule_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | the name of the rule | [default to undefined]
**description** | **(optional)** `string` | a description of the rule\'s purpose | [default to undefined]
**type** | `string` | the type of rule | [default to undefined]
**signature** | **(optional)** `ConnectorRuleCreateRequestSignature` |  | [default to undefined]
**sourceCode** | `SourceCode` |  | [default to undefined]
**attributes** | **(optional)** `object` | a map of string to objects | [default to undefined]
**id** | `string` | the ID of the rule | [default to undefined]
**created** | `string` | an ISO 8601 UTC timestamp when this rule was created | [default to undefined]
**modified** | **(optional)** `string` | an ISO 8601 UTC timestamp when this rule was last modified | [default to undefined]

