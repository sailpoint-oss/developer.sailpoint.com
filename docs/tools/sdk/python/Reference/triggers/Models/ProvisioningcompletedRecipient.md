---
id: provisioningcompleted-recipient
title: ProvisioningcompletedRecipient
pagination_label: ProvisioningcompletedRecipient
sidebar_label: ProvisioningcompletedRecipient
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningcompletedRecipient', 'ProvisioningcompletedRecipient'] 
slug: /tools/sdk/python/triggers/models/provisioningcompleted-recipient
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedRecipient', 'ProvisioningcompletedRecipient']
---

# ProvisioningcompletedRecipient

Provisioning recpient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Provisioning recipient DTO type. | [required]
**id** | **str** | Provisioning recipient's identity ID. | [required]
**name** | **str** | Provisioning recipient's display name. | [required]
}

## Example

```python
from sailpoint.triggers.models.provisioningcompleted_recipient import ProvisioningcompletedRecipient

provisioningcompleted_recipient = ProvisioningcompletedRecipient(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

