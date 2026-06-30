---
id: formdetails
title: Formdetails
pagination_label: Formdetails
sidebar_label: Formdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formdetails', 'Formdetails'] 
slug: /tools/sdk/python/work-items/models/formdetails
tags: ['SDK', 'Software Development Kit', 'Formdetails', 'Formdetails']
---

# Formdetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the form | [optional] 
**name** | **str** | Name of the form | [optional] 
**title** | **str** | The form title | [optional] 
**subtitle** | **str** | The form subtitle. | [optional] 
**target_user** | **str** | The name of the user that should be shown this form | [optional] 
**sections** | [**[]Sectiondetails**](sectiondetails) | Sections of the form | [optional] 
}

## Example

```python
from sailpoint.work_items.models.formdetails import Formdetails

formdetails = Formdetails(
id='2c9180835d2e5168015d32f890ca1581',
name='AccountSelection Form',
title='Account Selection for John.Doe',
subtitle='Please select from the following',
target_user='Jane.Doe',
sections=[
                    sailpoint.work_items.models.section_details.Section Details()
                    ]
)

```
[[Back to top]](#) 

