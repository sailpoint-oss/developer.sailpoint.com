# Compensatingcontrolresponse

# Compensatingcontrolresponse

Import this model from the entry point of its package:

```typescript
import { Compensatingcontrolresponse } from '@sailpoint/angular-sdk/sod_controls';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The system-generated unique identifier of the compensating control. | [readonly] [default to undefined]
**name** | **(optional)** `string` | The display name of the compensating control. | [readonly] [default to undefined]
**description** | **(optional)** `string` | A human-readable description of the compensating control. | [readonly] [default to undefined]
**owner** | `Reference` |  | [default to undefined]
**secondaryOwners** | **(optional)** `Array<Reference>` | References to additional identities or governance groups that share ownership of the compensating control. | [readonly] [default to undefined]
**type** | **(optional)** `string` | The type of compensating control that determines how a violation is addressed. | [readonly] [default to undefined]
**action** | **(optional)** `string` | The action performed when the compensating control is applied. | [readonly] [default to undefined]
**expiration** | **(optional)** `string` | The duration after which the applied control expires, expressed as a duration string. | [readonly] [default to undefined]
**justificationRequired** | `boolean` | Indicates whether a justification is required when applying this control. | [readonly] [default to undefined]
**workflowID** | **(optional)** `string` | Opaque workflow definition identifier in the exact form required by the owning service.  | [readonly] [default to undefined]

