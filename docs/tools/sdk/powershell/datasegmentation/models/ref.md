# Ref

# Ref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **DtoType** |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$Ref = Initialize-Ref  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313
```

- Convert the resource to JSON
```powershell
$Ref | ConvertTo-JSON
```


[[Back to top]](#) 

