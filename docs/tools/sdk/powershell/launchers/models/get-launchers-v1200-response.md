# GetLaunchersV1200Response

# GetLaunchersV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Next** | **String** | Pagination marker | [optional] 
**Items** | [**[]Launcher**](launcher) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$GetLaunchersV1200Response = Initialize-GetLaunchersV1200Response  -Next null `
 -Items null
```

- Convert the resource to JSON
```powershell
$GetLaunchersV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

