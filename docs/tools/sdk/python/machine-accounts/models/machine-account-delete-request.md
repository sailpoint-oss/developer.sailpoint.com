# MachineAccountDeleteRequest

# MachineAccountDeleteRequest

Details for a request to delete a machine account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | Comments about the deletion request. Depending on the tenant's account deletion approval settings, comments can be required. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_delete_request import MachineAccountDeleteRequest

machine_account_delete_request = MachineAccountDeleteRequest(
comments='This machine account is no longer used.'
)

```
[[Back to top]](#) 

