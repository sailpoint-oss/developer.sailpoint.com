# UpdateMultiHostSourcesV1RequestInner

# UpdateMultiHostSourcesV1RequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "add",    "replace" ] | The operation to be performed | [required]
**Path** | **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** | [**UpdateMultiHostSourcesV1RequestInnerValue**](update-multi-host-sources-v1-request-inner-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$UpdateMultiHostSourcesV1RequestInner = Initialize-UpdateMultiHostSourcesV1RequestInner  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$UpdateMultiHostSourcesV1RequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

