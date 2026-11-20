# ApplicationDiscoveryRequest

# ApplicationDiscoveryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]String** | List of dataset Ids to discover applications | [required]

## Examples

- Prepare the resource
```powershell
$ApplicationDiscoveryRequest = Initialize-ApplicationDiscoveryRequest  -DatasetIds null
```

- Convert the resource to JSON
```powershell
$ApplicationDiscoveryRequest | ConvertTo-JSON
```


[[Back to top]](#) 

