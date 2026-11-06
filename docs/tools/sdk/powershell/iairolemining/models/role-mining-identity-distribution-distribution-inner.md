# RoleMiningIdentityDistributionDistributionInner

# RoleMiningIdentityDistributionDistributionInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeValue** | **String** | The attribute value that identities are grouped by | [optional] 
**Count** | **Int32** | The number of identities that have this attribute value | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningIdentityDistributionDistributionInner = Initialize-RoleMiningIdentityDistributionDistributionInner  -AttributeValue NM Tier 3 `
 -Count 6
```

- Convert the resource to JSON
```powershell
$RoleMiningIdentityDistributionDistributionInner | ConvertTo-JSON
```


[[Back to top]](#) 

