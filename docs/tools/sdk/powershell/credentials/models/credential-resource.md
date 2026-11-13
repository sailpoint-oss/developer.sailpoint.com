# CredentialResource

# CredentialResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The source resource identifier. | [optional] 
**Type** | **String** | The type of the source resource. | [optional] 
**Name** | **String** | The display name of the source resource. | [optional] 
**Features** | **[]String** | The set of features supported by the source resource. | [optional] 

## Examples

- Prepare the resource
```powershell
$CredentialResource = Initialize-CredentialResource  -Id 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Type aws:iam-access-key `
 -Name nightly-export-key `
 -Features ["PROVISIONING"]
```

- Convert the resource to JSON
```powershell
$CredentialResource | ConvertTo-JSON
```


[[Back to top]](#) 

