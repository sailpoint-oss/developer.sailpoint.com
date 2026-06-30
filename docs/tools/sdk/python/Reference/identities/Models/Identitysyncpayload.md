---
id: identitysyncpayload
title: Identitysyncpayload
pagination_label: Identitysyncpayload
sidebar_label: Identitysyncpayload
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identitysyncpayload', 'Identitysyncpayload'] 
slug: /tools/sdk/python/identities/models/identitysyncpayload
tags: ['SDK', 'Software Development Kit', 'Identitysyncpayload', 'Identitysyncpayload']
---

# Identitysyncpayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Payload type. | [required]
**data_json** | **str** | Payload type. | [required]
}

## Example

```python
from sailpoint.identities.models.identitysyncpayload import Identitysyncpayload

identitysyncpayload = Identitysyncpayload(
type='SYNCHRONIZE_IDENTITY_ATTRIBUTES',
data_json='{"identityId":"2c918083746f642c01746f990884012a"}'
)

```
[[Back to top]](#) 

