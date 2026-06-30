---
id: dkimattributes
title: Dkimattributes
pagination_label: Dkimattributes
sidebar_label: Dkimattributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dkimattributes', 'Dkimattributes'] 
slug: /tools/sdk/python/notifications/models/dkimattributes
tags: ['SDK', 'Software Development Kit', 'Dkimattributes', 'Dkimattributes']
---

# Dkimattributes

DKIM attributes for a domain or identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | UUID associated with domain to be verified | [optional] 
**address** | **str** | The identity or domain address | [optional] 
**dkim_enabled** | **bool** | Whether or not DKIM has been enabled for this domain / identity | [optional] [default to False]
**dkim_tokens** | **[]str** | The tokens to be added to a DNS for verification | [optional] 
**dkim_verification_status** | **str** | The current status if the domain /identity has been verified. Ie SUCCESS, FAILED, PENDING | [optional] 
**region** | **str** | The AWS SES region the domain is associated with | [optional] 
}

## Example

```python
from sailpoint.notifications.models.dkimattributes import Dkimattributes

dkimattributes = Dkimattributes(
id='123b45b0-aaaa-bbbb-a7db-123456a56abc',
address='BobSmith@sailpoint.com',
dkim_enabled=True,
dkim_tokens=["uq1m3jjk25ckd3whl4n7y46c56r5l6aq","u7pm38jky9ckdawhlsn7y4dcj6f5lpgq","uhpm3jjkjjckdkwhlqn7yw6cjer5tpay"],
dkim_verification_status='SUCCESS',
region='us-east-1'
)

```
[[Back to top]](#) 

