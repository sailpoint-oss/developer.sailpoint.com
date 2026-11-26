# MailFromAttributesDto

# MailFromAttributesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | **String** | The identity or domain address | [optional] 
**MailFromDomain** | **String** | The new MAIL FROM domain of the identity. Must be a subdomain of the identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$MailFromAttributesDto = Initialize-MailFromAttributesDto  -Identity BobSmith@sailpoint.com `
 -MailFromDomain example.sailpoint.com
```

- Convert the resource to JSON
```powershell
$MailFromAttributesDto | ConvertTo-JSON
```


[[Back to top]](#) 

