---
id: beta-section-details
title: SectionDetails
pagination_label: SectionDetails
sidebar_label: SectionDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SectionDetails', 'BetaSectionDetails'] 
slug: /tools/sdk/python/beta/models/section-details
tags: ['SDK', 'Software Development Kit', 'SectionDetails', 'BetaSectionDetails']
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
from sailpoint.beta.models.section_details import SectionDetails

section_details = SectionDetails(
name='Field1',
label='Section 1',
form_items=[]
)

```
[[Back to top]](#) 

