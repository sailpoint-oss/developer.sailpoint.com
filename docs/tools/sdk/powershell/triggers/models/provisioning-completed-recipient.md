# ProvisioningCompletedRecipient

# ProvisioningCompletedRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Provisioning recipient DTO type. | [required]
**Id** | **String** | Provisioning recipient's identity ID. | [required]
**Name** | **String** | Provisioning recipient's display name. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedRecipient = Initialize-ProvisioningCompletedRecipient  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedRecipient | ConvertTo-JSON
```


[[Back to top]](#) 

