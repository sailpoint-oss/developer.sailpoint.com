# MachineAccountLinkedMachineIdentity

# MachineAccountLinkedMachineIdentity

A machine identity that is linked to a machine account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**description** | **str** | The description of the machine identity. | [optional] 
**attributes** | **map[string]object** | The attributes of the machine identity, including the attributes read from the source. | [optional] 
**manually_edited** | **bool** | Indicates whether the machine identity has been manually edited. | [optional] [default to False]
**manually_created** | **bool** | Indicates whether the machine identity was created manually rather than by aggregation. | [optional] [default to False]
**owners** | [**MachineAccountLinkedMachineIdentityAllOfOwners**](machine-account-linked-machine-identity-all-of-owners) |  | [optional] 
**subtype** | **str** | The subtype of the machine identity. | [optional] 
**source_id** | **str** | ID of the source the machine identity comes from. | [optional] 
**uuid** | **str** | The UUID of the machine identity, as read from the source. | [optional] 
**native_identity** | **str** | The native identity of the machine identity, as read from the source. | [optional] 
**dataset_id** | **str** | ID of the dataset the machine identity was aggregated from. | [optional] 
**source** | [**BaseReferenceDto**](base-reference-dto) | The source the machine identity comes from. | [optional] 
**user_entitlements** | [**[]MachineAccountLinkedMachineIdentityAllOfUserEntitlements**](machine-account-linked-machine-identity-all-of-user-entitlements) | The user entitlements associated with the machine identity. | [optional] 
**exists_on_source** |  **Enum** [  'TRUE',    'FALSE',    'NOT_APPLICABLE' ] | Indicates whether the machine identity still exists on the source. | [optional] 
**business_application_refs** | [**[]MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs**](machine-account-linked-machine-identity-all-of-business-application-refs) | The business applications linked to the machine identity. This field is omitted when business application links are not available for the machine identity. | [optional] 
**effective_sanctioned_status** |  **Enum** [  'SANCTIONED',    'UNSANCTIONED',    'UNKNOWN' ] | The sanctioned status derived from the linked business applications. This field is present only when `businessApplicationRefs` is present. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_linked_machine_identity import MachineAccountLinkedMachineIdentity

machine_account_linked_machine_identity = MachineAccountLinkedMachineIdentity(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
description='Service identity for nightly batch jobs',
attributes={"Region":"EU"},
manually_edited=False,
manually_created=False,
owners=sailpoint.machine_accounts.models.machine_account_linked_machine_identity_all_of_owners.MachineAccountLinkedMachineIdentity_allOf_owners(
                    primary_identity = {"id":"2c918084660f45d6016617daa9210584","type":"IDENTITY","name":"Adam Kennedy"}, 
                    secondary_identities = [{"id":"2c9180858082150f0180893dbaf44202","type":"IDENTITY","name":"Jane Doe"}], ),
subtype='Application',
source_id='8d3e0094e99445de98eef6c75e25jc04',
uuid='f5dd23fe-3414-42b7-bb1c-869400ad7a10',
native_identity='abc:123:dddd',
dataset_id='aws-iam-roles',
source=sailpoint.machine_accounts.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
user_entitlements=[
                    sailpoint.machine_accounts.models.machine_account_linked_machine_identity_all_of_user_entitlements.MachineAccountLinkedMachineIdentity_allOf_userEntitlements(
                        source_id = '8d3e0094e99445de98eef6c75e25jc04', 
                        entitlement_id = '2c9180835d2e5168015d32f890ca1581', 
                        display_name = 'Administrators', 
                        source = {"id":"8d3e0094e99445de98eef6c75e25jc04","type":"SOURCE","name":"Active Directory"}, )
                    ],
exists_on_source='NOT_APPLICABLE',
business_application_refs=[
                    sailpoint.machine_accounts.models.machine_account_linked_machine_identity_all_of_business_application_refs.MachineAccountLinkedMachineIdentity_allOf_businessApplicationRefs(
                        type = 'BUSINESS_APPLICATION', 
                        id = '2ee5e239-e68c-4d69-93fb-6c7ce4576190', 
                        name = 'Cursor', 
                        sanctioned_status = 'SANCTIONED', 
                        correlation_type = 'MANUAL', )
                    ],
effective_sanctioned_status='SANCTIONED'
)

```
[[Back to top]](#) 

