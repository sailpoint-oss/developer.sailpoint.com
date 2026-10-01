# AccessRequestPhases

# AccessRequestPhases

Import this model from the entry point of its package:

```typescript
import { AccessRequestPhases } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**started** | **(optional)** `string` | The time that this phase started. | [default to undefined]
**finished** | **(optional)** `string` | The time that this phase finished. | [default to undefined]
**name** | **(optional)** `string` | The name of this phase. | [default to undefined]
**state** | **(optional)** `string` | The state of this phase. | [default to undefined]
**result** | **(optional)** `string` | The state of this phase. | [default to undefined]
**phaseReference** | **(optional)** `string` | A reference to another object on the RequestedItemStatus that contains more details about the phase. Note that for the Provisioning phase, this will be empty if there are no manual work items. | [default to undefined]

