# DimensionRef

# DimensionRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "DIMENSION" ] | The type of the object to which this reference applies | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$DimensionRef = Initialize-DimensionRef  -Type DIMENSION `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Role 2
```

- Convert the resource to JSON
```powershell
$DimensionRef | ConvertTo-JSON
```


[[Back to top]](#) 

