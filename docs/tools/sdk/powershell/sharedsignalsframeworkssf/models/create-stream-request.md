# CreateStreamRequest

# CreateStreamRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Delivery** | [**CreateStreamDeliveryRequest**](create-stream-delivery-request) |  | [required]
**EventsRequested** | **[]String** | Optional list of event types the receiver wants. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [optional] 
**Description** | **String** | Optional human-readable description of the stream. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateStreamRequest = Initialize-CreateStreamRequest  -Delivery null `
 -EventsRequested ["https://schemas.openid.net/secevent/caep/event-type/session-revoked"] `
 -Description Production event stream
```

- Convert the resource to JSON
```powershell
$CreateStreamRequest | ConvertTo-JSON
```


[[Back to top]](#) 

