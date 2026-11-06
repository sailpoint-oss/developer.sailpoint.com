# TypedReference

# TypedReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **DtoType** |  | [required]
**Id** | **String** | The id of the object.  | [required]

## Examples

- Prepare the resource
```powershell
$TypedReference = Initialize-TypedReference  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313
```

- Convert the resource to JSON
```powershell
$TypedReference | ConvertTo-JSON
```


[[Back to top]](#) 

