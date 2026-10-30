# MachineAccountEntitlement

# MachineAccountEntitlement

An entitlement held by a machine account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**attribute** | **str** | The name of the account attribute that holds the entitlement. | [optional] 
**value** | **str** | The value of the entitlement. | [optional] 
**description** | **str** | The description of the entitlement. | [optional] 
**source_schema_object_type** | **str** | The source schema object type of the entitlement. | [optional] 
**privileged** | **bool** | Indicates whether the entitlement is privileged. | [optional] [default to False]
**cloud_governed** | **bool** | Indicates whether the entitlement is governed in the cloud. | [optional] [default to False]
**requestable** | **bool** | Indicates whether the entitlement can be requested. | [optional] [default to False]
**attributes** | **map[string]object** | Additional attributes of the entitlement. | [optional] 
**source** | [**BaseReferenceDto**](base-reference-dto) | The source the entitlement belongs to. | [optional] 
**owner** | [**BaseReferenceDto**](base-reference-dto) | The owner of the entitlement. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_entitlement import MachineAccountEntitlement

machine_account_entitlement = MachineAccountEntitlement(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
attribute='memberOf',
value='CN=Administrators,CN=Builtin,DC=example,DC=com',
description='Members can fully administer the domain.',
source_schema_object_type='group',
privileged=True,
cloud_governed=False,
requestable=True,
attributes={"groupType":"security"},
source=sailpoint.machine_accounts.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
owner=sailpoint.machine_accounts.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

