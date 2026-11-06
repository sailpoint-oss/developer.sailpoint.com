# Compensatingcontrolupdate

# Compensatingcontrolupdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The display name of the compensating control. | [default to undefined]
**description** | **(optional)** `string` | A human-readable description of the compensating control. | [default to undefined]
**owner** | **(optional)** `Referenceinput` |  | [default to undefined]
**secondaryOwners** | **(optional)** `Array<Referenceinput>` | References to additional identities or governance groups that share ownership of the compensating control (maximum 10). | [default to undefined]
**type** | **(optional)** `string` | The type of compensating control that determines how a violation is addressed. | [default to undefined]
**action** | **(optional)** `string` | The action performed when the compensating control is applied. | [default to undefined]
**expiration** | **(optional)** `string` | The duration after which the applied control expires, expressed as a duration string. | [default to undefined]
**justificationRequired** | **(optional)** `boolean` | Indicates whether a justification is required when applying this control. | [default to false]
**workflowID** | **(optional)** `string` | Workflow definition ID used when the control action is a workflow. | [default to undefined]

