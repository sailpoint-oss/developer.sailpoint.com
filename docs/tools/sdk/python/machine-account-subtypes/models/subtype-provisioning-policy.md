# SubtypeProvisioningPolicy

# SubtypeProvisioningPolicy

The machine account creation provisioning policy of a subtype.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the provisioning policy. Must not be supplied on create. | [optional] [readonly] 
**subtype_id** | **str** | ID of the subtype the policy belongs to. Must not be supplied on create. | [optional] [readonly] 
**name** | **str** | Name of the provisioning policy. Defaults to the subtype's display name when omitted or blank. | [optional] 
**description** | **str** | Description of the provisioning policy. | [optional] 
**usage_type** |  **Enum** [  'CREATE_MACHINE_ACCOUNT' ] | Usage type of the provisioning policy. Only `CREATE_MACHINE_ACCOUNT` is supported. | [optional] [default to 'CREATE_MACHINE_ACCOUNT']
**fields** | [**[]SubtypeProvisioningPolicyField**](subtype-provisioning-policy-field) | Fields of the provisioning policy. Every field must have a non-blank `name`. When two fields share a name, only the first is kept. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.subtype_provisioning_policy import SubtypeProvisioningPolicy

subtype_provisioning_policy = SubtypeProvisioningPolicy(
id='d7ae9ea3-507f-4d00-9d4f-b4464b344b88',
subtype_id='43bdd144-4b17-4fce-a744-17c7fd3e717b',
name='Service Account',
description='Fields collected when creating a service account.',
usage_type='CREATE_MACHINE_ACCOUNT',
fields=[
                    sailpoint.machine_account_subtypes.models.subtype_provisioning_policy_field.Subtype Provisioning Policy Field(
                        name = 'userName', 
                        transform = {"type":"rule","attributes":{"name":"Create Unique LDAP Attribute"}}, 
                        attributes = {"template":"{firstname}.{lastname}{uniqueCounter}","cloudMaxUniqueChecks":"50","cloudMaxSize":"20","cloudRequired":"true"}, 
                        is_required = False, 
                        type = 'string', 
                        is_multi_valued = False, )
                    ]
)

```
[[Back to top]](#) 

