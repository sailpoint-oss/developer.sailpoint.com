# EmailStatusDto

# EmailStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the verified sender address | [optional] 
**Email** | **String** | The verified sender email address | [optional] 
**IsVerifiedByDomain** | **Boolean** | Whether the sender address is verified by domain | [optional] [default to $false]
**VerificationStatus** |  **Enum** [  "PENDING",    "SUCCESS",    "FAILED",    "NA" ] | The verification status of the sender address | [optional] 
**Region** | **String** | The AWS SES region the sender address is associated with | [optional] 

## Examples

- Prepare the resource
```powershell
$EmailStatusDto = Initialize-EmailStatusDto  -Id null `
 -Email sender@example.com `
 -IsVerifiedByDomain false `
 -VerificationStatus SUCCESS `
 -Region us-east-1
```

- Convert the resource to JSON
```powershell
$EmailStatusDto | ConvertTo-JSON
```


[[Back to top]](#) 

