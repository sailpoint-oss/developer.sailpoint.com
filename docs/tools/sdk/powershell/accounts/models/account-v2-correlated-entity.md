# AccountV2CorrelatedEntity

# AccountV2CorrelatedEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **DtoType** |  | [optional] 
**Id** | **String** | The unique ID of the correlated entity. | [optional] 
**Name** | **String** | The display name of the correlated entity. | [optional] 
**State** | **String** | The identity state. Populated for IDENTITY entries only. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountV2CorrelatedEntity = Initialize-AccountV2CorrelatedEntity  -Type null `
 -Id 2c918084660f45d6016617daa9210584 `
 -Name John Doe `
 -State ACTIVE
```

- Convert the resource to JSON
```powershell
$AccountV2CorrelatedEntity | ConvertTo-JSON
```


[[Back to top]](#) 

