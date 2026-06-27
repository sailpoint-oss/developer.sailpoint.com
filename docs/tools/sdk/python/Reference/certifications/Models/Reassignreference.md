---
id: reassignreference
title: Reassignreference
pagination_label: Reassignreference
sidebar_label: Reassignreference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reassignreference', 'Reassignreference'] 
slug: /tools/sdk/python/certifications/models/reassignreference
tags: ['SDK', 'Software Development Kit', 'Reassignreference', 'Reassignreference']
---

# Reassignreference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of item or identity being reassigned. | [required]
**type** |  **Enum** [  'TARGET_SUMMARY',    'ITEM',    'IDENTITY_SUMMARY' ] | The type of item or identity being reassigned. | [required]
}

## Example

```python
from sailpoint.certifications.models.reassignreference import Reassignreference

reassignreference = Reassignreference(
id='ef38f94347e94562b5bb8424a56397d8',
type='ITEM'
)

```
[[Back to top]](#) 

