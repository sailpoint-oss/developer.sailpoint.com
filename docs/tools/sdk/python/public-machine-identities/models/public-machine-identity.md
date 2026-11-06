# PublicMachineIdentity

# PublicMachineIdentity

Reduced machine identity details for public catalog and request workflows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Machine identity id. | [optional] 
**name** | **str** | Human-readable display name of the machine identity. | [optional] 
**description** | **str** | Description of the machine identity. | [optional] 
**subtype** | **str** | Machine identity subtype. Present when your tenant returns enriched public machine identity data; otherwise omitted or null. | [optional] 
**owner** | [**PublicMachineIdentityOwner**](public-machine-identity-owner) |  | [optional] 
\}

## Example

```python
from sailpoint.public_machine_identities.models.public_machine_identity import PublicMachineIdentity

public_machine_identity = PublicMachineIdentity(
id='2c9180857182305e0171993735622948',
name='Production API Agent',
description='Agent used for nightly reconciliation jobs.',
subtype='AI Agent',
owner=sailpoint.public_machine_identities.models.public_machine_identity_owner.Public Machine Identity Owner(
                    id = '2c9180857182305e0171993735622948', 
                    name = 'Alison Ferguso', 
                    email = 'alison.ferguso@acme-solar.com', )
)

```
[[Back to top]](#) 

