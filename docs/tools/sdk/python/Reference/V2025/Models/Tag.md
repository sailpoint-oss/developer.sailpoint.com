---
id: v2025-tag
title: Tag
pagination_label: Tag
sidebar_label: Tag
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tag', 'V2025Tag'] 
slug: /tools/sdk/python/v2025/models/tag
tags: ['SDK', 'Software Development Kit', 'Tag', 'V2025Tag']
---

# Tag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Tag id | [required][readonly] 
**name** | **str** | Name of the tag. | [required]
**created** | **datetime** | Date the tag was created. | [required][readonly] 
**modified** | **datetime** | Date the tag was last modified. | [required][readonly] 
**tag_category_refs** | [**[]TagTagCategoryRefsInner**](tag-tag-category-refs-inner) |  | [required][readonly] 
}

## Example

```python
from sailpoint.v2025.models.tag import Tag

tag = Tag(
id='449ecdc0-d4ff-4341-acf6-92f6f7ce604f',
name='PCI',
created='2022-05-04T14:48:49Z',
modified='2022-07-14T16:31:11Z',
tag_category_refs=[
                    sailpoint.v2025.models.tag_tag_category_refs_inner.Tag_tagCategoryRefs_inner(
                        type = 'ENTITLEMENT', 
                        id = '2c91809773dee32014e13e122092014e', 
                        name = 'CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local', )
                    ]
)

```
[[Back to top]](#) 

