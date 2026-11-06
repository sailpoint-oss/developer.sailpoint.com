# DeployRequest

# DeployRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DraftId** | **String** | The id of the draft to be used by this deploy. | [required]

## Examples

- Prepare the resource
```powershell
$DeployRequest = Initialize-DeployRequest  -DraftId 3d0fe04b-57df-4a46-a83b-8f04b0f9d10b
```

- Convert the resource to JSON
```powershell
$DeployRequest | ConvertTo-JSON
```


[[Back to top]](#) 

