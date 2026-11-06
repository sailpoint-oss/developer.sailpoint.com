# DomainStatusDto

# DomainStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | New UUID associated with domain to be verified | [optional] 
**Domain** | **String** | A domain address | [optional] 
**DkimEnabled** | **Boolean** | DKIM is enabled for this domain | [optional] [default to $false]
**DkimTokens** | **[]String** | DKIM tokens required for authentication | [optional] 
**DkimVerificationStatus** | **String** | Status of DKIM authentication | [optional] 
**Region** | **String** | The AWS SES region the domain is associated with | [optional] 

## Examples

- Prepare the resource
```powershell
$DomainStatusDto = Initialize-DomainStatusDto  -Id 123b45b0-aaaa-bbbb-a7db-123456a56abc `
 -Domain sailpoint.com `
 -DkimEnabled true `
 -DkimTokens ["token1","token2","token3"] `
 -DkimVerificationStatus PENDING `
 -Region us-east-1
```

- Convert the resource to JSON
```powershell
$DomainStatusDto | ConvertTo-JSON
```


[[Back to top]](#) 

