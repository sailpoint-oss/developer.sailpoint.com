# Subscription

# Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Subscription ID. | [default to undefined]
**name** | `string` | Subscription name. | [default to undefined]
**description** | **(optional)** `string` | Subscription description. | [default to undefined]
**triggerId** | `string` | ID of trigger subscribed to. | [default to undefined]
**triggerName** | `string` | Trigger name of trigger subscribed to. | [default to undefined]
**type** | `SubscriptionType` |  | [default to undefined]
**responseDeadline** | **(optional)** `string` | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [default to 'PT1H']
**httpConfig** | **(optional)** `HttpConfig` |  | [default to undefined]
**eventBridgeConfig** | **(optional)** `EventBridgeConfig` |  | [default to undefined]
**enabled** | `boolean` | Whether subscription should receive real-time trigger invocations or not. Test trigger invocations are always enabled regardless of this option. | [default to true]
**filter** | **(optional)** `string` | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [default to undefined]

