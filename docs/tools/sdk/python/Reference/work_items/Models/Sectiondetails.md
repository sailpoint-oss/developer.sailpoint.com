---
id: sectiondetails
title: Sectiondetails
pagination_label: Sectiondetails
sidebar_label: Sectiondetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sectiondetails', 'Sectiondetails'] 
slug: /tools/sdk/python/work-items/models/sectiondetails
tags: ['SDK', 'Software Development Kit', 'Sectiondetails', 'Sectiondetails']
---

# Sectiondetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the FormItem | [optional] 
**label** | **str** | Label of the section | [optional] 
**form_items** | **[]object** | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 
}

## Example

```python
from sailpoint.work_items.models.sectiondetails import Sectiondetails

sectiondetails = Sectiondetails(
name='Field1',
label='Section 1',
form_items=[]
)

```
[[Back to top]](#) 

