# CreateIdentityCollectorV1409Response

# CreateIdentityCollectorV1409Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 
**Messages** | [**[]CreateIdentityCollectorV1409ResponseMessagesInner**](create-identity-collector-v1409-response-messages-inner) | Generic localized reason for error. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateIdentityCollectorV1409Response = Initialize-CreateIdentityCollectorV1409Response  -DetailCode 409.1 Conflict `
 -TrackingId e7eab60924f64aa284175b9fa3309599 `
 -Messages null
```

- Convert the resource to JSON
```powershell
$CreateIdentityCollectorV1409Response | ConvertTo-JSON
```


[[Back to top]](#) 

