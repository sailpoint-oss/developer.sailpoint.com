# OutlierValueType

# OutlierValueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **Enum** [  "INTEGER",    "FLOAT" ] | The data type of the value field | [optional] 
**Ordinal** | **Int32** | The position of the value type | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierValueType = Initialize-OutlierValueType  -Name INTEGER `
 -Ordinal 0
```

- Convert the resource to JSON
```powershell
$OutlierValueType | ConvertTo-JSON
```


[[Back to top]](#) 

