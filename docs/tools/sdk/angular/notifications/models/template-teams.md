# TemplateTeams

# TemplateTeams

Import this model from the entry point of its package:

```typescript
import { TemplateTeams } from '@sailpoint/angular-sdk/notifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The template key | [default to undefined]
**title** | **(optional)** `string` | The title of the Teams message | [default to undefined]
**text** | **(optional)** `string` | The main text content of the Teams message | [default to undefined]
**messageJSON** | **(optional)** `string` | JSON string of the Teams adaptive card | [default to undefined]
**isSubscription** | **(optional)** `boolean` | Whether this is a subscription notification | [default to false]
**approvalId** | **(optional)** `string` | The approval request ID | [default to undefined]
**requestId** | **(optional)** `string` | The request ID | [default to undefined]
**requestedById** | **(optional)** `string` | The ID of the user who made the request | [default to undefined]
**notificationType** | **(optional)** `string` | The type of notification | [default to undefined]
**autoApprovalData** | **(optional)** `TemplateSlackAutoApprovalData` |  | [default to undefined]
**customFields** | **(optional)** `TemplateSlackCustomFields` |  | [default to undefined]

