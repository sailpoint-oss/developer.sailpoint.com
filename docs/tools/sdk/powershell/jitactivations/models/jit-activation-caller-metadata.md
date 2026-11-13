# JitActivationCallerMetadata

# JitActivationCallerMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Request origin type. Matches `requestOrigin` when both are sent. | [optional] 
**SlackUserId** | **String** | Slack user identifier of the caller. | [optional] 
**CommandText** | **String** | Slack command text that produced this request. | [optional] 
**ChannelId** | **String** | Slack channel identifier. | [optional] 
**ThreadId** | **String** | Slack thread identifier of the message that produced this request. | [optional] 
**MessageId** | **String** | Slack message identifier of the message that produced this request. | [optional] 
**WorkspaceId** | **String** | Slack workspace identifier. | [optional] 

## Examples

- Prepare the resource
```powershell
$JitActivationCallerMetadata = Initialize-JitActivationCallerMetadata  -Type slack `
 -SlackUserId U123 `
 -CommandText /jit activate `
 -ChannelId C456 `
 -ThreadId 1699887766.123456 `
 -MessageId 1699887770.654321 `
 -WorkspaceId T789
```

- Convert the resource to JSON
```powershell
$JitActivationCallerMetadata | ConvertTo-JSON
```


[[Back to top]](#) 

