---
id: beta-section
title: Section
pagination_label: Section
sidebar_label: Section
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Section', 'BetaSection'] 
slug: /tools/sdk/python/beta/models/section
tags: ['SDK', 'Software Development Kit', 'Section', 'BetaSection']
---

# Section


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the FormItem | [optional] 
**label** | **str** | Label of the section | [optional] 
**form_items** | **[]object** | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 
}

## Example

```python
from sailpoint.beta.models.section import Section

section = Section(
name='Field1',
label='Section 1',
form_items=[]
)

```
[[Back to top]](#) 

