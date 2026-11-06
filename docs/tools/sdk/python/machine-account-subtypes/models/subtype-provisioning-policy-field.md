# SubtypeProvisioningPolicyField

# SubtypeProvisioningPolicyField

One field of a subtype provisioning policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the attribute. | [required]
**transform** | **map[string]object** | Transform to apply to the field. | [optional] 
**attributes** | **map[string]object** | Attributes required for the transform. | [optional] 
**is_required** | **bool** | Indicates whether the attribute is required. | [optional] [default to False]
**type** | **str** | Type of the attribute. | [optional] 
**is_multi_valued** | **bool** | Indicates whether the attribute is multi-valued. | [optional] [default to False]
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.subtype_provisioning_policy_field import SubtypeProvisioningPolicyField

subtype_provisioning_policy_field = SubtypeProvisioningPolicyField(
name='userName',
transform={"type":"rule","attributes":{"name":"Create Unique LDAP Attribute"}},
attributes={"template":"{firstname}.{lastname}{uniqueCounter}","cloudMaxUniqueChecks":"50","cloudMaxSize":"20","cloudRequired":"true"},
is_required=False,
type='string',
is_multi_valued=False
)

```
[[Back to top]](#) 

