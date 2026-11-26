# Mfaclear1userprofilematchingattributes

# Mfaclear1userprofilematchingattributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstName** | **String** | Name of the identity attribute mapped to the CLEAR1 first name attribute. | [optional] 
**LastName** | **String** | Name of the identity attribute mapped to the CLEAR1 last name attribute. | [optional] 
**Dob** | **String** | Name of the identity attribute mapped to the CLEAR1 date of birth attribute. | [optional] 
**Email** | **String** | Name of the identity attribute mapped to the CLEAR1 email address attribute. | [optional] 
**Phone** | **String** | Name of the identity attribute mapped to the CLEAR1 phone number attribute. | [optional] 
**Line1** | **String** | Name of the identity attribute mapped to the first line of the CLEAR1 street address attribute. | [optional] 
**Line2** | **String** | Name of the identity attribute mapped to the second line of the CLEAR1 street address attribute. | [optional] 
**City** | **String** | Name of the identity attribute mapped to the CLEAR1 city attribute. | [optional] 
**State** | **String** | Name of the identity attribute mapped to the CLEAR1 state attribute. | [optional] 
**PostalCode** | **String** | Name of the identity attribute mapped to the CLEAR1 postal code attribute. | [optional] 
**Country** | **String** | Name of the identity attribute mapped to the CLEAR1 country attribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$Mfaclear1userprofilematchingattributes = Initialize-Mfaclear1userprofilematchingattributes  -FirstName null `
 -LastName null `
 -Dob null `
 -Email null `
 -Phone null `
 -Line1 null `
 -Line2 null `
 -City null `
 -State null `
 -PostalCode null `
 -Country null
```

- Convert the resource to JSON
```powershell
$Mfaclear1userprofilematchingattributes | ConvertTo-JSON
```


[[Back to top]](#) 

