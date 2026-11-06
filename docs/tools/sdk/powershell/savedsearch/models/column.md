# Column

# Column

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Field** | **String** | The name of the field.  | [required]
**Header** | **String** | The value of the header.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Column = Initialize-Column  -Field email `
 -Header Work Email
```

- Convert the resource to JSON
```powershell
$Column | ConvertTo-JSON
```


[[Back to top]](#) 

