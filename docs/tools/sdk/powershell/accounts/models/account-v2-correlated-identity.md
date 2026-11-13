# AccountV2CorrelatedIdentity

# AccountV2CorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the identity. | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The DTO type of the identity. | [optional] 
**Name** | **String** | The display name of the identity. | [optional] 
**State** | **String** | The identity state. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountV2CorrelatedIdentity = Initialize-AccountV2CorrelatedIdentity  -Id 2c918084660f45d6016617daa9210584 `
 -Type IDENTITY `
 -Name John Doe `
 -State ACTIVE
```

- Convert the resource to JSON
```powershell
$AccountV2CorrelatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

