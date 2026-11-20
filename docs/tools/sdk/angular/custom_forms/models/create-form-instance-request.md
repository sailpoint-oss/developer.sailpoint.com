# CreateFormInstanceRequest

# CreateFormInstanceRequest

Import this model from the entry point of its package:

```typescript
import { CreateFormInstanceRequest } from '@sailpoint/angular-sdk/custom_forms';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | `FormInstanceCreatedBy` |  | [default to undefined]
**expire** | `string` | Expire is required | [default to undefined]
**formDefinitionId** | `string` | FormDefinitionID is the id of the form definition that created this form | [default to undefined]
**formInput** | **(optional)**  | FormInput is an object of form input labels to value | [default to undefined]
**recipients** | `Array<FormInstanceRecipient>` | Recipients is required | [default to undefined]
**standAloneForm** | **(optional)** `boolean` | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [default to false]
**state** | **(optional)** `string` | State is required, if not present initial state is FormInstanceStateAssigned ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [default to undefined]
**ttl** | **(optional)** `number` | TTL an epoch timestamp in seconds, it most be in seconds or dynamodb will ignore it SEE: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html | [default to undefined]

