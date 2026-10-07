# MachineIdentityUpdatedOwnerChanges

# MachineIdentityUpdatedOwnerChanges

Changes to owners.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | Name of the attribute that changed. | [optional] 
**added** | **[]MachineIdentityOwnerReference** | Owners that were added. | [optional] 
**removed** | **[]MachineIdentityOwnerReference** | Owners that were removed. | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.machine_identity_updated_owner_changes import MachineIdentityUpdatedOwnerChanges

machine_identity_updated_owner_changes = MachineIdentityUpdatedOwnerChanges(
attribute_name='owners',
added=[
                    {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                    ],
removed=[
                    {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                    ]
)

```
[[Back to top]](#) 

