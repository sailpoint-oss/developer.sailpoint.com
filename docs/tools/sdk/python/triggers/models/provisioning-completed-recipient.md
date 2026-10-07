# ProvisioningCompletedRecipient

# ProvisioningCompletedRecipient

Provisioning recpient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Provisioning recipient DTO type. | [required]
**id** | **str** | Provisioning recipient's identity ID. | [required]
**name** | **str** | Provisioning recipient's display name. | [required]
\}

## Example

```python
from sailpoint.triggers.models.provisioning_completed_recipient import ProvisioningCompletedRecipient

provisioning_completed_recipient = ProvisioningCompletedRecipient(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

