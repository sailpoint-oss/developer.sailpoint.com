# ReplaceStreamConfigurationRequest

# ReplaceStreamConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **String** | ID of the stream to replace. | [required]
**Delivery** | [**ReplaceStreamConfigurationRequestDelivery**](replace-stream-configuration-request-delivery) |  | [required]
**EventsRequested** | **[]String** | Event types the receiver wants. Use CAEP event-type URIs. | [optional] 
**Description** | **String** | Optional human-readable description of the stream. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReplaceStreamConfigurationRequest = Initialize-ReplaceStreamConfigurationRequest  -StreamId 550e8400-e29b-41d4-a716-446655440000 `
 -Delivery null `
 -EventsRequested ["https://schemas.openid.net/secevent/caep/event-type/session-revoked"] `
 -Description Production event stream
```

- Convert the resource to JSON
```powershell
$ReplaceStreamConfigurationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

