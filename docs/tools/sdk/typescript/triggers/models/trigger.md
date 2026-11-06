# Trigger

# Trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Unique identifier of the trigger. | [default to undefined]
**name** | `string` | Trigger Name. | [default to undefined]
**type** | `TriggerType` |  | [default to undefined]
**description** | **(optional)** `string` | Trigger Description. | [default to undefined]
**inputSchema** | `string` | The JSON schema of the payload that will be sent by the trigger to the subscribed service. | [default to undefined]
**exampleInput** | `TriggerExampleInput` |  | [default to undefined]
**outputSchema** | **(optional)** `string` | The JSON schema of the response that will be sent by the subscribed service to the trigger in response to an event.  This only applies to a trigger type of `REQUEST_RESPONSE`. | [default to undefined]
**exampleOutput** | **(optional)** `TriggerExampleOutput` |  | [default to undefined]

