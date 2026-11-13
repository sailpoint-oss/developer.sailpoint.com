# ProvisioningCriteriaLevel

# ProvisioningCriteriaLevel

Defines matching criteria for an Account to be provisioned with a specific Access Profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **ProvisioningCriteriaOperation** |  | [optional] 
**attribute** | **str** | Name of the Account attribute to be tested. If **operation** is one of EQUALS, NOT_EQUALS, CONTAINS, or HAS, this field is required. Otherwise, specifying it is an error. | [optional] 
**value** | **str** | String value to test the Account attribute w/r/t the specified operation. If the operation is one of EQUALS, NOT_EQUALS, or CONTAINS, this field is required. Otherwise, specifying it is an error. If the Attribute is not String-typed, it will be converted to the appropriate type. | [optional] 
**children** | [**[]ProvisioningCriteriaLevel**](provisioning-criteria-level) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.provisioning_criteria_level import ProvisioningCriteriaLevel

provisioning_criteria_level = ProvisioningCriteriaLevel(
operation='EQUALS',
attribute='email',
value='carlee.cert1c9f9b6fd@mailinator.com',
children=[{"operation":"EQUALS","attribute":"department","value":"Engineering"}]
)

```
[[Back to top]](#) 

