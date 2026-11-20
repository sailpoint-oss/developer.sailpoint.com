# DeliveryResponse

# DeliveryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | **String** | Delivery method. | [optional] 
**EndpointUrl** | **String** | Receiver endpoint URL. | [optional] 

## Examples

- Prepare the resource
```powershell
$DeliveryResponse = Initialize-DeliveryResponse  -Method urn:ietf:rfc:8935 `
 -EndpointUrl https://receiver.example.com/ssf/events
```

- Convert the resource to JSON
```powershell
$DeliveryResponse | ConvertTo-JSON
```


[[Back to top]](#) 

