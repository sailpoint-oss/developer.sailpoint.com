---
id: beta-access-profile-source-ref
title: AccessProfileSourceRef
pagination_label: AccessProfileSourceRef
sidebar_label: AccessProfileSourceRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileSourceRef', 'BetaAccessProfileSourceRef'] 
slug: /tools/sdk/python/beta/models/access-profile-source-ref
tags: ['SDK', 'Software Development Kit', 'AccessProfileSourceRef', 'BetaAccessProfileSourceRef']
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
from sailpoint.beta.models.access_profile_source_ref import AccessProfileSourceRef

access_profile_source_ref = AccessProfileSourceRef(
id='2c91809773dee3610173fdb0b6061ef4',
type='SOURCE',
name='ODS-AD-SOURCE'
)

```
[[Back to top]](#) 

