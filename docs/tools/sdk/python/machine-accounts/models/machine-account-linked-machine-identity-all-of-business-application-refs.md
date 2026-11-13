# MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs

# MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'BUSINESS_APPLICATION' ] | The reference type. | [optional] 
**id** | **str** | ID of the business application. | [optional] 
**name** | **str** | The display name of the business application. | [optional] 
**sanctioned_status** |  **Enum** [  'SANCTIONED',    'UNSANCTIONED',    'UNKNOWN' ] | The sanctioned status of the business application. | [optional] 
**correlation_type** |  **Enum** [  'MANUAL',    'AUTOMATIC' ] | How the business application was linked to the machine identity. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_linked_machine_identity_all_of_business_application_refs import MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs

machine_account_linked_machine_identity_all_of_business_application_refs = MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs(
type='BUSINESS_APPLICATION',
id='2ee5e239-e68c-4d69-93fb-6c7ce4576190',
name='Cursor',
sanctioned_status='SANCTIONED',
correlation_type='MANUAL'
)

```
[[Back to top]](#) 

