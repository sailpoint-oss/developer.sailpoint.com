# JitActivationCallerMetadata

# JitActivationCallerMetadata

Import this model from the entry point of its package:

```typescript
import { JitActivationCallerMetadata } from '@sailpoint/angular-sdk/jit_activations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Request origin type. Matches `requestOrigin` when both are sent. | [default to undefined]
**slackUserId** | **(optional)** `string` | Slack user identifier of the caller. | [default to undefined]
**commandText** | **(optional)** `string` | Slack command text that produced this request. | [default to undefined]
**channelId** | **(optional)** `string` | Slack channel identifier. | [default to undefined]
**threadId** | **(optional)** `string` | Slack thread identifier of the message that produced this request. | [default to undefined]
**messageId** | **(optional)** `string` | Slack message identifier of the message that produced this request. | [default to undefined]
**workspaceId** | **(optional)** `string` | Slack workspace identifier. | [default to undefined]

