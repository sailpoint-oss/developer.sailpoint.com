# ListCompleteWorkflowLibraryV1200ResponseInner

# ListCompleteWorkflowLibraryV1200ResponseInner

Import this model from the entry point of its package:

```typescript
import { ListCompleteWorkflowLibraryV1200ResponseInner } from '@sailpoint/angular-sdk/workflows';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Operator ID. | [default to undefined]
**name** | **(optional)** `string` | Operator friendly name | [default to undefined]
**type** | **(optional)** `string` | Operator type | [default to undefined]
**description** | **(optional)** `string` | Description of the operator | [default to undefined]
**formFields** | **(optional)** `Array<WorkflowLibraryFormFields>` | One or more inputs that the operator accepts | [default to undefined]
**exampleOutput** | **(optional)** `WorkflowLibraryActionExampleOutput` |  | [default to undefined]
**deprecated** | **(optional)** `boolean` |  | [default to undefined]
**deprecatedBy** | **(optional)** `string` |  | [default to undefined]
**versionNumber** | **(optional)** `number` | Version number | [default to undefined]
**isSimulationEnabled** | **(optional)** `boolean` |  | [default to undefined]
**isDynamicSchema** | **(optional)** `boolean` | Determines whether the dynamic output schema is returned in place of the action\'s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [default to undefined]
**outputSchema** | **(optional)** `object` | Example output schema | [default to undefined]
**inputExample** | **(optional)** `object` | Example trigger payload if applicable | [default to undefined]

