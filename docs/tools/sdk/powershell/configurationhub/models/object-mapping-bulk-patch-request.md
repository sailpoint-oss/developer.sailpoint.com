# ObjectMappingBulkPatchRequest

# ObjectMappingBulkPatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Patches** | **map[string]JsonPatchOperation[]** | Map of id of the object mapping to a JsonPatchOperation describing what to patch on that object mapping. | [required]

## Examples

- Prepare the resource
```powershell
$ObjectMappingBulkPatchRequest = Initialize-ObjectMappingBulkPatchRequest  -Patches {"603b1a61-d03d-4ed1-864f-a508fbd1995d":[{"op":"replace","path":"/enabled","value":true}],"00bece34-f50d-4227-8878-76f620b5a971":[{"op":"replace","path":"/targetValue","value":"New Target Value"}]}
```

- Convert the resource to JSON
```powershell
$ObjectMappingBulkPatchRequest | ConvertTo-JSON
```


[[Back to top]](#) 

