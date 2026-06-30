---
id: identityreferencewithnameandemail
title: Identityreferencewithnameandemail
pagination_label: Identityreferencewithnameandemail
sidebar_label: Identityreferencewithnameandemail
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityreferencewithnameandemail', 'Identityreferencewithnameandemail'] 
slug: /tools/sdk/python/requestable-objects/models/identityreferencewithnameandemail
tags: ['SDK', 'Software Development Kit', 'Identityreferencewithnameandemail', 'Identityreferencewithnameandemail']
---

# Identityreferencewithnameandemail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type can only be IDENTITY. This is read-only. | [optional] 
**id** | **str** | Identity ID. | [optional] 
**name** | **str** | Identity's human-readable display name. This is read-only. | [optional] 
**email** | **str** | Identity's email address. This is read-only. | [optional] 
}

## Example

```python
from sailpoint.requestable_objects.models.identityreferencewithnameandemail import Identityreferencewithnameandemail

identityreferencewithnameandemail = Identityreferencewithnameandemail(
type='IDENTITY',
id='5168015d32f890ca15812c9180835d2e',
name='Alison Ferguso',
email='alison.ferguso@identitysoon.com'
)

```
[[Back to top]](#) 

