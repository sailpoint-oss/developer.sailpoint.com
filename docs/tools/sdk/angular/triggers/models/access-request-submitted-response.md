# AccessRequestSubmittedResponse

# AccessRequestSubmittedResponse

Import this model from the entry point of its package:

```typescript
import { AccessRequestSubmittedResponse } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | `boolean` | Approval or denial of the request by the subscribing service. | [default to undefined]
**comment** | `string` | Comment from the subscribing service approving or denying the request. | [default to undefined]
**approver** | `string` | Name of the subscribing service approving the request.  This doesn\'t normally have to be the name of an existing identity in ISC, but it does if you have an active subscription to the [Access Request Decision trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision). If you don\'t provide the `username` of an existing identity in your tenant, your Access Request Decision subscriptions will never trigger. | [default to undefined]

