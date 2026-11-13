# Int64StringKeyValuePair

# Int64StringKeyValuePair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **Int64** | The key for the tag or pair. | [optional] 
**Value** | **String** | The value for the tag or pair. | [optional] 

## Examples

- Prepare the resource
```powershell
$Int64StringKeyValuePair = Initialize-Int64StringKeyValuePair  -Key 1 `
 -Value Confidential
```

- Convert the resource to JSON
```powershell
$Int64StringKeyValuePair | ConvertTo-JSON
```


[[Back to top]](#) 

