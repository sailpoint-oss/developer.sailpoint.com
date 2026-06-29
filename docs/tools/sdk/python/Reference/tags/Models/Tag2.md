---
id: tag2
title: Tag2
pagination_label: Tag2
sidebar_label: Tag2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tag2', 'Tag2'] 
slug: /tools/sdk/python/tags/models/tag2
tags: ['SDK', 'Software Development Kit', 'Tag2', 'Tag2']
---

# Tag2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Tag id | [required][readonly] 
**name** | **str** | Name of the tag. | [required]
**created** | **datetime** | Date the tag was created. | [required][readonly] 
**modified** | **datetime** | Date the tag was last modified. | [required][readonly] 
**tag_category_refs** | [**[]Tag2TagCategoryRefsInner**](tag2-tag-category-refs-inner) |  | [required][readonly] 
}

## Example

```python
from sailpoint.tags.models.tag2 import Tag2

tag2 = Tag2(
id='449ecdc0-d4ff-4341-acf6-92f6f7ce604f',
name='PCI',
created='2022-05-04T14:48:49Z',
modified='2022-07-14T16:31:11Z',
tag_category_refs=[
                    sailpoint.tags.models.tag_2_tag_category_refs_inner.tag_2_tagCategoryRefs_inner(
                        type = 'ENTITLEMENT', 
                        id = '2c91809773dee32014e13e122092014e', 
                        name = 'CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local', )
                    ]
)

```
[[Back to top]](#) 

