# ProvisioningPolicyDtoV2

# ProvisioningPolicyDtoV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the provisioning policy. | [optional] 
**name** | **str** | the provisioning policy name | [required]
**subtype_id** | **str** | Subtype ID for which provisioning policy will be created when usageType is CREATE_MACHINE_ACCOUNT. | [optional] 
**description** | **str** | the description of the provisioning policy | [optional] 
**usage_type** | **Usagetypev2** |  | [optional] 
**fields** | [**[]FieldDetailsDtoV2**](field-details-dto-v2) |  | [optional] 
\}

## Example

```python
from sailpoint.sources.models.provisioning_policy_dto_v2 import ProvisioningPolicyDtoV2

provisioning_policy_dto_v2 = ProvisioningPolicyDtoV2(
id='d7ae9ea3-507f-4d00-9d4f-b4464b344b88',
name='example provisioning policy for inactive identities',
subtype_id='d7ae9ea3-507f-4d00-9d4f-b4464b344b88',
description='this provisioning policy creates access based on an identity going inactive',
usage_type='CREATE',
fields=[
                    sailpoint.sources.models.field_details_dto_v2.Field Details Dto V2(
                        name = 'userName', 
                        transform = {"type":"rule","attributes":{"name":"Create Unique LDAP Attribute"}}, 
                        attributes = {"template":"firstname.lastname.uniqueCounter","cloudMaxUniqueChecks":"50","cloudMaxSize":"20","cloudRequired":"true"}, 
                        is_required = False, 
                        type = 'string', 
                        is_multi_valued = False, )
                    ]
)

```
[[Back to top]](#) 

