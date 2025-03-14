---
id: v2024-form-instance-recipient
title: FormInstanceRecipient
pagination_label: FormInstanceRecipient
sidebar_label: FormInstanceRecipient
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormInstanceRecipient', 'V2024FormInstanceRecipient'] 
slug: /tools/sdk/python/v2024/models/form-instance-recipient
tags: ['SDK', 'Software Development Kit', 'FormInstanceRecipient', 'V2024FormInstanceRecipient']
---

# FormInstanceRecipient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID is a unique identifier | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | Type is a FormInstanceRecipientType value IDENTITY FormInstanceRecipientIdentity | [optional] 
}

## Example

```python
from sailpoint.v2024.models.form_instance_recipient import FormInstanceRecipient

form_instance_recipient = FormInstanceRecipient(
id='00000000-0000-0000-0000-000000000000',
type='IDENTITY'
)

```
[[Back to top]](#) 

