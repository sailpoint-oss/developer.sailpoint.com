# CreateDomainDkimV1405Response

# CreateDomainDkimV1405Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** | **AnyType** | A message describing the error | [optional] 
**ErrorMessage** | **AnyType** | Description of the error | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateDomainDkimV1405Response = Initialize-CreateDomainDkimV1405Response  -ErrorName NotSupportedException `
 -ErrorMessage Cannot consume content type `
 -TrackingId e7eab60924f64aa284175b9fa3309599
```

- Convert the resource to JSON
```powershell
$CreateDomainDkimV1405Response | ConvertTo-JSON
```


[[Back to top]](#) 

