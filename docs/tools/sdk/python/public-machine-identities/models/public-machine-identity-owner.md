# PublicMachineIdentityOwner

# PublicMachineIdentityOwner

Primary owner of a machine identity exposed by the public list endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity id of the primary owner. | [optional] 
**name** | **str** | Human-readable display name of the primary owner. | [optional] 
**email** | **str** | Email address of the primary owner. | [optional] 
\}

## Example

```python
from sailpoint.public_machine_identities.models.public_machine_identity_owner import PublicMachineIdentityOwner

public_machine_identity_owner = PublicMachineIdentityOwner(
id='2c9180857182305e0171993735622948',
name='Alison Ferguso',
email='alison.ferguso@acme-solar.com'
)

```
[[Back to top]](#) 

