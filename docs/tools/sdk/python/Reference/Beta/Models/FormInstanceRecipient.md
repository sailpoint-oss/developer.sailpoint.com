---
id: beta-form-instance-recipient
title: FormInstanceRecipient
pagination_label: FormInstanceRecipient
sidebar_label: FormInstanceRecipient
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormInstanceRecipient', 'BetaFormInstanceRecipient'] 
slug: /tools/sdk/python/beta/models/form-instance-recipient
tags: ['SDK', 'Software Development Kit', 'FormInstanceRecipient', 'BetaFormInstanceRecipient']
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
from sailpoint.beta.models.form_instance_recipient import FormInstanceRecipient

form_instance_recipient = FormInstanceRecipient(
id='00000000-0000-0000-0000-000000000000',
type='IDENTITY'
)

```
[[Back to top]](#) 

