# DimensionCriteriaKey

# DimensionCriteriaKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **DimensionCriteriaKeyType** |  | [required]
**Property** | **String** | The name of the identity attribute to which the associated criteria applies. | [required]

## Examples

- Prepare the resource
```powershell
$DimensionCriteriaKey = Initialize-DimensionCriteriaKey  -Type null `
 -Property attribute.email
```

- Convert the resource to JSON
```powershell
$DimensionCriteriaKey | ConvertTo-JSON
```


[[Back to top]](#) 

