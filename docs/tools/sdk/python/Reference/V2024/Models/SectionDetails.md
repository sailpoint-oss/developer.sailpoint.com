---
id: v2024-section-details
title: SectionDetails
pagination_label: SectionDetails
sidebar_label: SectionDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SectionDetails', 'V2024SectionDetails'] 
slug: /tools/sdk/python/v2024/models/section-details
tags: ['SDK', 'Software Development Kit', 'SectionDetails', 'V2024SectionDetails']
---

# SectionDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the FormItem | [optional] 
**label** | **str** | Label of the section | [optional] 
**form_items** | **[]object** | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 
}

## Example

```python
from sailpoint.v2024.models.section_details import SectionDetails

section_details = SectionDetails(
name='Field1',
label='Section 1',
form_items=[]
)

```
[[Back to top]](#) 

