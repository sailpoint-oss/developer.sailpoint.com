# DimensionSchema

# DimensionSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DimensionAttributes** | [**[]DimensionAttribute**](dimension-attribute) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DimensionSchema = Initialize-DimensionSchema  -DimensionAttributes null
```

- Convert the resource to JSON
```powershell
$DimensionSchema | ConvertTo-JSON
```


[[Back to top]](#) 

