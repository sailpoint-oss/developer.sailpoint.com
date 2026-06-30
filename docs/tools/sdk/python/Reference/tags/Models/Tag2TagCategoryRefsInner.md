---
id: tag2-tag-category-refs-inner
title: Tag2TagCategoryRefsInner
pagination_label: Tag2TagCategoryRefsInner
sidebar_label: Tag2TagCategoryRefsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tag2TagCategoryRefsInner', 'Tag2TagCategoryRefsInner'] 
slug: /tools/sdk/python/tags/models/tag2-tag-category-refs-inner
tags: ['SDK', 'Software Development Kit', 'Tag2TagCategoryRefsInner', 'Tag2TagCategoryRefsInner']
---

# Tag2TagCategoryRefsInner

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
from sailpoint.tags.models.tag2_tag_category_refs_inner import Tag2TagCategoryRefsInner

tag2_tag_category_refs_inner = Tag2TagCategoryRefsInner(
type='ENTITLEMENT',
id='2c91809773dee32014e13e122092014e',
name='CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local'
)

```
[[Back to top]](#) 

