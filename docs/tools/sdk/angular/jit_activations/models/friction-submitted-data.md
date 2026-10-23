# FrictionSubmittedData

# FrictionSubmittedData

Import this model from the entry point of its package:

```typescript
import { FrictionSubmittedData } from '@sailpoint/angular-sdk/jit_activations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**justification** | **(optional)** `string` | Justification text. | [default to undefined]
**bypass** | **(optional)** `boolean` | Whether this step was bypassed. | [default to false]
**ticketId** | **(optional)** `string` | Ticketing system identifier. | [default to undefined]
**isValidTicket** | **(optional)** `boolean` | Whether the ticket is valid. Set by the server. | [readonly] [default to false]
**attempts** | **(optional)** `number` | Count of failed submissions for this step. The server sets this value and ignores it on PATCH. | [readonly] [default to undefined]
**reauthSuccessful** | **(optional)** `boolean` | Whether reauthentication succeeded. | [default to false]
**reauthDate** | **(optional)** `string` | Time of reauthentication. | [default to undefined]
**integrationDisabled** | **(optional)** `boolean` | Whether the ticketing integration is disabled. Set by the server. | [readonly] [default to false]

