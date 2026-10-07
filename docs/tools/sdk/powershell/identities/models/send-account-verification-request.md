# SendAccountVerificationRequest

# SendAccountVerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceName** | **String** | The source name where identity account password should be reset | [optional] 
**Via** |  **Enum** [  "EMAIL_WORK",    "EMAIL_PERSONAL",    "LINK_WORK",    "LINK_PERSONAL" ] | The method to send notification | [required]

## Examples

- Prepare the resource
```powershell
$SendAccountVerificationRequest = Initialize-SendAccountVerificationRequest  -SourceName Active Directory Source `
 -Via EMAIL_WORK
```

- Convert the resource to JSON
```powershell
$SendAccountVerificationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

