---
id: v2024-tag-tag-category-refs-inner
title: TagTagCategoryRefsInner
pagination_label: TagTagCategoryRefsInner
sidebar_label: TagTagCategoryRefsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TagTagCategoryRefsInner', 'V2024TagTagCategoryRefsInner'] 
slug: /tools/sdk/python/v2024/models/tag-tag-category-refs-inner
tags: ['SDK', 'Software Development Kit', 'TagTagCategoryRefsInner', 'V2024TagTagCategoryRefsInner']
---

# TagTagCategoryRefsInner

Tagged object's category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'APPLICATION',    'CAMPAIGN',    'ENTITLEMENT',    'IDENTITY',    'ROLE',    'SOD_POLICY',    'SOURCE' ] | DTO type of the tagged object's category. | [optional] 
**id** | **str** | Tagged object's ID. | [optional] 
**name** | **str** | Tagged object's display name. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.tag_tag_category_refs_inner import TagTagCategoryRefsInner

tag_tag_category_refs_inner = TagTagCategoryRefsInner(
type='ENTITLEMENT',
id='2c91809773dee32014e13e122092014e',
name='CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local'
)

```
[[Back to top]](#) 

