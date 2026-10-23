# SearchRequest

# SearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueryString** | **String** | Query String | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchRequest = Initialize-SearchRequest  -QueryString identity 2023
```

- Convert the resource to JSON
```powershell
$SearchRequest | ConvertTo-JSON
```


[[Back to top]](#) 

