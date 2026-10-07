# ListDeploysV1200Response

# ListDeploysV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]DeployResponse**](deploy-response) | list of deployments | [optional] 

## Examples

- Prepare the resource
```powershell
$ListDeploysV1200Response = Initialize-ListDeploysV1200Response  -Items null
```

- Convert the resource to JSON
```powershell
$ListDeploysV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

