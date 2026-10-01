# DeleteParameterV1409Response

# DeleteParameterV1409Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** | **AnyType** | A message describing the error | [optional] 
**ErrorMessage** | **AnyType** | Description of the error | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 

## Examples

- Prepare the resource
```powershell
$DeleteParameterV1409Response = Initialize-DeleteParameterV1409Response  -ErrorName ConflictException `
 -ErrorMessage Failed to store object `
 -TrackingId e7eab60924f64aa284175b9fa3309599
```

- Convert the resource to JSON
```powershell
$DeleteParameterV1409Response | ConvertTo-JSON
```


[[Back to top]](#) 

