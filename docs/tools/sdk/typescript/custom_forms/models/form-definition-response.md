# FormDefinitionResponse

# FormDefinitionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique guid identifying the form definition. | [default to undefined]
**name** | **(optional)** `string` | Name of the form definition. | [default to undefined]
**description** | **(optional)** `string` | Form definition\'s description. | [default to undefined]
**owner** | **(optional)** `FormOwner` |  | [default to undefined]
**usedBy** | **(optional)** `Array<FormUsedBy>` | List of objects using the form definition. Whenever a system uses a form, the API reaches out to the form service to record that the system is currently using it. | [default to undefined]
**formInput** | **(optional)** `Array<FormDefinitionInput>` | List of form inputs required to create a form-instance object. | [default to undefined]
**formElements** | **(optional)** `Array<FormElement>` | List of nested form elements. | [default to undefined]
**formConditions** | **(optional)** `Array<FormCondition>` | Conditional logic that can dynamically modify the form as the recipient is interacting with it. | [default to undefined]
**created** | **(optional)** `string` | Created is the date the form definition was created | [default to undefined]
**modified** | **(optional)** `string` | Modified is the last date the form definition was modified | [default to undefined]

