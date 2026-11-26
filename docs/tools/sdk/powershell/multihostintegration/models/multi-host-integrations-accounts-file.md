# MultiHostIntegrationsAccountsFile

# MultiHostIntegrationsAccountsFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the accounts file. | [optional] 
**Key** | **String** | The accounts file key. | [optional] 
**UploadTime** | **System.DateTime** | Date-time when the file was uploaded | [optional] 
**Expiry** | **System.DateTime** | Date-time when the accounts file expired. | [optional] 
**Expired** | **Boolean** | If this is true, it indicates that the accounts file has expired. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsAccountsFile = Initialize-MultiHostIntegrationsAccountsFile  -Name My Accounts File `
 -Key 2c91808568c529c60168cca6f90c2222 `
 -UploadTime 2022-02-08T14:50:03.827Z `
 -Expiry 2022-02-08T14:50:03.827Z `
 -Expired false
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsAccountsFile | ConvertTo-JSON
```


[[Back to top]](#) 

