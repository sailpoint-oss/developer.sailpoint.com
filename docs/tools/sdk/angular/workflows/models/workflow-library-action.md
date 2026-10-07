# WorkflowLibraryAction

# WorkflowLibraryAction

Import this model from the entry point of its package:

```typescript
import { WorkflowLibraryAction } from '@sailpoint/angular-sdk/workflows';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Action ID. This is a static namespaced ID for the action | [default to undefined]
**name** | **(optional)** `string` | Action Name | [default to undefined]
**type** | **(optional)** `string` | Action type | [default to undefined]
**description** | **(optional)** `string` | Action Description | [default to undefined]
**formFields** | **(optional)** `Array<WorkflowLibraryFormFields>` | One or more inputs that the action accepts | [default to undefined]
**exampleOutput** | **(optional)** `WorkflowLibraryActionExampleOutput` |  | [default to undefined]
**deprecated** | **(optional)** `boolean` |  | [default to undefined]
**deprecatedBy** | **(optional)** `string` |  | [default to undefined]
**versionNumber** | **(optional)** `number` | Version number | [default to undefined]
**isSimulationEnabled** | **(optional)** `boolean` |  | [default to undefined]
**isDynamicSchema** | **(optional)** `boolean` | Determines whether the dynamic output schema is returned in place of the action\'s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [default to false]
**outputSchema** | **(optional)** `object` | Defines the output schema, if any, that this action produces. | [default to undefined]

