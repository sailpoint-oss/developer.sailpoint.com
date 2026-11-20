# ProvisioningPolicyDto

# ProvisioningPolicyDto

CREATE_MACHINE_ACCOUNT provisioning policy stored on a source subtype. Field-compatible with source provisioning-policy documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of the stored provisioning policy. | [optional] 
**subtype_id** | **str** | Identifier of the subtype that owns this policy. | [optional] 
**name** | **str** | Name of the provisioning policy. | [optional] 
**description** | **str** | Description of the provisioning policy. | [optional] 
**usage_type** | **str** | Usage type of the policy. This API stores only `CREATE_MACHINE_ACCOUNT`. | [optional] [default to '']
**fields** | [**[]FieldDetailsDto**](field-details-dto) | Fields in the provisioning policy. Field order is not semantically meaningful. | [optional] [default to []]
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.provisioning_policy_dto import ProvisioningPolicyDto

provisioning_policy_dto = ProvisioningPolicyDto(
id='54f626b4-c9d8-4f7e-b768-046c20583abb',
subtype_id='43bdd144-4b17-4fce-a744-17c7fd3e717b',
name='Create Machine Account',
description='Fields used when creating a machine account for this subtype',
usage_type='',
fields=[
                    sailpoint.machine_account_subtypes.models.field_details_dto.Field Details Dto(
                        name = '', 
                        transform = {"type":"rule","attributes":{"name":"Create Unique LDAP Attribute"}}, 
                        attributes = {"template":"firstname.lastname.uniqueCounter","cloudMaxUniqueChecks":"50","cloudMaxSize":"20","cloudRequired":"true"}, 
                        is_required = False, 
                        type = 'string', 
                        is_multi_valued = False, )
                    ]
)

```
[[Back to top]](#) 

