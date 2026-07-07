---
id: updateidentitycollectorrequest
title: Updateidentitycollectorrequest
pagination_label: Updateidentitycollectorrequest
sidebar_label: Updateidentitycollectorrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Updateidentitycollectorrequest', 'Updateidentitycollectorrequest'] 
slug: /tools/sdk/python/data-access-security/models/updateidentitycollectorrequest
tags: ['SDK', 'Software Development Kit', 'Updateidentitycollectorrequest', 'Updateidentitycollectorrequest']
---

# Updateidentitycollectorrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The display name of the identity collector. Must be unique within the tenant. | [required]
**source_id** | **str** | The identifier of the associated source, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. This value cannot be modified for an existing identity collector and must match the current value. | [required]
**type** | **str** | The identity collector type. This value cannot be modified for an existing identity collector and must match the current value. | [required]
}

## Example

```python
from sailpoint.data_access_security.models.updateidentitycollectorrequest import Updateidentitycollectorrequest

updateidentitycollectorrequest = Updateidentitycollectorrequest(
name='Active Directory Identity Collector',
source_id='2c9180835d2e5168015d32f890ca1581',
type='Active Directory'
)

```
[[Back to top]](#) 

