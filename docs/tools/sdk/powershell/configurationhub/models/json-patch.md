# JsonPatch

# JsonPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operations** | [**[]JsonPatchOperation**](json-patch-operation) | Operations to be applied | [optional] 

## Examples

- Prepare the resource
```powershell
$JsonPatch = Initialize-JsonPatch  -Operations null
```

- Convert the resource to JSON
```powershell
$JsonPatch | ConvertTo-JSON
```


[[Back to top]](#) 

