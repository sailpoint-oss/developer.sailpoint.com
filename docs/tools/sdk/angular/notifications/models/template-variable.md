# TemplateVariable

# TemplateVariable

Import this model from the entry point of its package:

```typescript
import { TemplateVariable } from '@sailpoint/angular-sdk/notifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The variable name as used when rendering context in templates. | [default to undefined]
**type** | **(optional)** `string` | The data type for this variable. Use JSON Schema-like names for values (string, boolean, number, object, array) or \"function\" for template utility/helper functions (e.g. __dateTool.format(), __esc.html()).  | [default to undefined]
**description** | **(optional)** `string` | Human-readable description explaining what this variable represents. | [default to undefined]
**example** | **(optional)** `any` | Example value demonstrating the format and usage. For type \"function\", often a Velocity-style call (e.g. $__esc.html($value)). Can be a string, number, boolean, object, array, or null when no example is defined.  | [default to undefined]

