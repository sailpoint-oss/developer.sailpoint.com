# ProvisioningCriteriaLevel

# ProvisioningCriteriaLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | **ProvisioningCriteriaOperation** |  | [optional] 
**Attribute** | **String** | Name of the Account attribute to be tested. If **operation** is one of EQUALS, NOT_EQUALS, CONTAINS, or HAS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Value** | **String** | String value to test the Account attribute w/r/t the specified operation. If the operation is one of EQUALS, NOT_EQUALS, or CONTAINS, this field is required. Otherwise, specifying it is an error. If the Attribute is not String-typed, it will be converted to the appropriate type. | [optional] 
**Children** | [**[]ProvisioningCriteriaLevel**](provisioning-criteria-level) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningCriteriaLevel = Initialize-ProvisioningCriteriaLevel  -Operation null `
 -Attribute email `
 -Value carlee.cert1c9f9b6fd@mailinator.com `
 -Children [{"operation":"EQUALS","attribute":"department","value":"Engineering"}]
```

- Convert the resource to JSON
```powershell
$ProvisioningCriteriaLevel | ConvertTo-JSON
```


[[Back to top]](#) 

