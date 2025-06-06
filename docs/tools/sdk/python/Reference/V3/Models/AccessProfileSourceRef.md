---
id: access-profile-source-ref
title: AccessProfileSourceRef
pagination_label: AccessProfileSourceRef
sidebar_label: AccessProfileSourceRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileSourceRef', 'AccessProfileSourceRef'] 
slug: /tools/sdk/python/v3/models/access-profile-source-ref
tags: ['SDK', 'Software Development Kit', 'AccessProfileSourceRef', 'AccessProfileSourceRef']
---

# AccessProfileSourceRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the source the access profile is associated with. | [optional] 
**type** |  **Enum** [  'SOURCE' ] | Source's DTO type. | [optional] 
**name** | **str** | Source name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_profile_source_ref import AccessProfileSourceRef

access_profile_source_ref = AccessProfileSourceRef(
id='2c91809773dee3610173fdb0b6061ef4',
type='SOURCE',
name='ODS-AD-SOURCE'
)

```
[[Back to top]](#) 

