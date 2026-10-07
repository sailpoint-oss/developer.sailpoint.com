# AccountCorrelatedIdentity

# AccountCorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity the account is correlated with. | [required]
**Id** | **String** | ID of the identity the account is correlated with. | [required]
**Name** | **String** | Display name of the identity the account is correlated with. | [required]

## Examples

- Prepare the resource
```powershell
$AccountCorrelatedIdentity = Initialize-AccountCorrelatedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$AccountCorrelatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

