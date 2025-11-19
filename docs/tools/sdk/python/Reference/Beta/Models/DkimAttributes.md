---
id: beta-dkim-attributes
title: DkimAttributes
pagination_label: DkimAttributes
sidebar_label: DkimAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DkimAttributes', 'BetaDkimAttributes'] 
slug: /tools/sdk/python/beta/models/dkim-attributes
tags: ['SDK', 'Software Development Kit', 'DkimAttributes', 'BetaDkimAttributes']
---

# DkimAttributes

DKIM attributes for a domain or identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | UUID associated with domain to be verified | [optional] 
**address** | **str** | The identity or domain address | [optional] 
**dkim_enabled** | **bool** | Whether or not DKIM has been enabled for this domain / identity | [optional] [default to False]
**dkim_tokens** | **[]str** | The tokens to be added to a DNS for verification | [optional] 
**dkim_verification_status** | **str** | The current status if the domain /identity has been verified. Ie Success, Failed, Pending | [optional] 
}

## Example

```python
from sailpoint.beta.models.dkim_attributes import DkimAttributes

dkim_attributes = DkimAttributes(
id='123b45b0-aaaa-bbbb-a7db-123456a56abc',
address='BobSmith@sailpoint.com',
dkim_enabled=True,
dkim_tokens=[uq1m3jjk25ckd3whl4n7y46c56r5l6aq, u7pm38jky9ckdawhlsn7y4dcj6f5lpgq, uhpm3jjkjjckdkwhlqn7yw6cjer5tpay],
dkim_verification_status='Success'
)

```
[[Back to top]](#) 

