# TemplateVariablesDto

# TemplateVariablesDto

Import this model from the entry point of its package:

```typescript
import { TemplateVariablesDto } from '@sailpoint/angular-sdk/notifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The notification template key. | [default to undefined]
**medium** | **(optional)** `TemplateMediumDto` |  | [default to undefined]
**globalVariables** | **(optional)** `Array<TemplateVariable>` | Global variables available to all templates for this tenant (e.g. __global.*, __recipient, __util.*, __dateTool.*, __esc.*). Includes both data variables and function-type helpers.  | [default to undefined]
**templateVariables** | **(optional)** `Array<TemplateVariable>` | Template-specific variables for the given key and medium (e.g. approverPath, requester, attributes). | [default to undefined]

