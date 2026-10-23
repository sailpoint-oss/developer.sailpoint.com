# IdentityAttributesChangedIdentity

# IdentityAttributesChangedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity whose attributes changed. | [required]
**Id** | **String** | ID of identity whose attributes changed. | [required]
**Name** | **String** | Display name of identity whose attributes changed. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityAttributesChangedIdentity = Initialize-IdentityAttributesChangedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChangedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

