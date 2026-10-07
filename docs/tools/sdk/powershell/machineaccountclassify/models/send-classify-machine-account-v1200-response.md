# SendClassifyMachineAccountV1200Response

# SendClassifyMachineAccountV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsMachine** | **Boolean** | Indicates if account is classified as machine | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SendClassifyMachineAccountV1200Response = Initialize-SendClassifyMachineAccountV1200Response  -IsMachine true
```

- Convert the resource to JSON
```powershell
$SendClassifyMachineAccountV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

