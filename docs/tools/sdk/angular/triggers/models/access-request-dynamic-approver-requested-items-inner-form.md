# AccessRequestDynamicApproverRequestedItemsInnerForm

# AccessRequestDynamicApproverRequestedItemsInnerForm

Import this model from the entry point of its package:

```typescript
import { AccessRequestDynamicApproverRequestedItemsInnerForm } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formDefinitionId** | **(optional)** `string` | ID of the form definition that was completed for this item. | [default to undefined]
**formInstanceId** | **(optional)** `string` | ID of the completed form instance. | [default to undefined]
**formData** | **(optional)**  | Key-value pairs (form field technical name to value) from the completed form instance. | [default to undefined]
**formElements** | **(optional)** `Array<{ [key: string]: any; }>` | Optional form element definitions when present. Shape follows the form instance payload. | [default to undefined]
**formConditions** | **(optional)** `Array<{ [key: string]: any; }>` | Optional conditional display rules when present. Shape follows the form instance payload; do not depend on a fixed condition schema in this API. | [default to undefined]
**formInstanceInputs** | **(optional)**  | Optional inputs passed into the form instance when present. Copied from the form instance payload as-is. | [default to undefined]

