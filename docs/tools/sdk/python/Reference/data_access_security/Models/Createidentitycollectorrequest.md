---
id: createidentitycollectorrequest
title: Createidentitycollectorrequest
pagination_label: Createidentitycollectorrequest
sidebar_label: Createidentitycollectorrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Createidentitycollectorrequest', 'Createidentitycollectorrequest'] 
slug: /tools/sdk/python/data-access-security/models/createidentitycollectorrequest
tags: ['SDK', 'Software Development Kit', 'Createidentitycollectorrequest', 'Createidentitycollectorrequest']
---

# Createidentitycollectorrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The display name for the new identity collector. Must be unique within the tenant. | [required]
**source_id** | **str** | The identifier of the source to create the identity collector for, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. The identity collector type is derived from this source. | [required]
}

## Example

```python
from sailpoint.data_access_security.models.createidentitycollectorrequest import Createidentitycollectorrequest

createidentitycollectorrequest = Createidentitycollectorrequest(
name='Active Directory Identity Collector',
source_id='2c9180835d2e5168015d32f890ca1581'
)

```
[[Back to top]](#) 

