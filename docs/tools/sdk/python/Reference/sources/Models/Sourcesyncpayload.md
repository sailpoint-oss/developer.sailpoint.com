---
id: sourcesyncpayload
title: Sourcesyncpayload
pagination_label: Sourcesyncpayload
sidebar_label: Sourcesyncpayload
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourcesyncpayload', 'Sourcesyncpayload'] 
slug: /tools/sdk/python/sources/models/sourcesyncpayload
tags: ['SDK', 'Software Development Kit', 'Sourcesyncpayload', 'Sourcesyncpayload']
---

# Sourcesyncpayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Payload type. | [required]
**data_json** | **str** | Payload type. | [required]
}

## Example

```python
from sailpoint.sources.models.sourcesyncpayload import Sourcesyncpayload

sourcesyncpayload = Sourcesyncpayload(
type='SYNCHRONIZE_SOURCE_ATTRIBUTES',
data_json='{"sourceId":"2c918083746f642c01746f990884012a"}'
)

```
[[Back to top]](#) 

