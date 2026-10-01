# SendClassifyMachineAccountFromSourceV1200Response

# SendClassifyMachineAccountFromSourceV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountsSubmittedForProcessing** | **Int32** | Returns the number of all the accounts from source submitted for processing. | [optional] 

## Examples

- Prepare the resource
```powershell
$SendClassifyMachineAccountFromSourceV1200Response = Initialize-SendClassifyMachineAccountFromSourceV1200Response  -AccountsSubmittedForProcessing 100
```

- Convert the resource to JSON
```powershell
$SendClassifyMachineAccountFromSourceV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

