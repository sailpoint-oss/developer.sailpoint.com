# CreateFormDefinitionRequest

# CreateFormDefinitionRequest

Import this model from the entry point of its package:

```typescript
import { CreateFormDefinitionRequest } from '@sailpoint/angular-sdk/custom_forms';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **(optional)** `string` | Description is the form definition description | [default to undefined]
**formConditions** | **(optional)** `Array<FormCondition>` | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [default to undefined]
**formElements** | **(optional)** `Array<FormElement>` | FormElements is a list of nested form elements | [default to undefined]
**formInput** | **(optional)** `Array<FormDefinitionInput>` | FormInput is a list of form inputs that are required when creating a form-instance object | [default to undefined]
**name** | `string` | Name is the form definition name | [default to undefined]
**owner** | `FormOwner` |  | [default to undefined]
**usedBy** | **(optional)** `Array<FormUsedBy>` | UsedBy is a list of objects where when any system uses a particular form it reaches out to the form service to record it is currently being used | [default to undefined]

