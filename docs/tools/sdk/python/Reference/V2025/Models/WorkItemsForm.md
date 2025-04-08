---
id: v2025-work-items-form
title: WorkItemsForm
pagination_label: WorkItemsForm
sidebar_label: WorkItemsForm
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkItemsForm', 'V2025WorkItemsForm'] 
slug: /tools/sdk/python/v2025/models/work-items-form
tags: ['SDK', 'Software Development Kit', 'WorkItemsForm', 'V2025WorkItemsForm']
---

# WorkItemsForm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the form | [optional] 
**name** | **str** | Name of the form | [optional] 
**title** | **str** | The form title | [optional] 
**subtitle** | **str** | The form subtitle. | [optional] 
**target_user** | **str** | The name of the user that should be shown this form | [optional] 
**sections** | [**[]SectionDetails**](section-details) | Sections of the form | [optional] 
}

## Example

```python
from sailpoint.v2025.models.work_items_form import WorkItemsForm

work_items_form = WorkItemsForm(
id='2c9180835d2e5168015d32f890ca1581',
name='AccountSelection Form',
title='Account Selection for John.Doe',
subtitle='Please select from the following',
target_user='Jane.Doe',
sections=[
                    sailpoint.v2025.models.section_details.SectionDetails()
                    ]
)

```
[[Back to top]](#) 

