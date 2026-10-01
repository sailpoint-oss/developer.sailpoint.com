# WorkflowLibraryOperator

# WorkflowLibraryOperator

Import this model from the entry point of its package:

```typescript
import { WorkflowLibraryOperator } from '@sailpoint/angular-sdk/workflows';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Operator ID. | [default to undefined]
**name** | **(optional)** `string` | Operator friendly name | [default to undefined]
**type** | **(optional)** `string` | Operator type | [default to undefined]
**description** | **(optional)** `string` | Description of the operator | [default to undefined]
**isDynamicSchema** | **(optional)** `boolean` | Determines whether the dynamic output schema is returned in place of the action\'s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [default to undefined]
**deprecated** | **(optional)** `boolean` |  | [default to undefined]
**deprecatedBy** | **(optional)** `string` |  | [default to undefined]
**isSimulationEnabled** | **(optional)** `boolean` |  | [default to undefined]
**formFields** | **(optional)** `Array<WorkflowLibraryFormFields>` | One or more inputs that the operator accepts | [default to undefined]

