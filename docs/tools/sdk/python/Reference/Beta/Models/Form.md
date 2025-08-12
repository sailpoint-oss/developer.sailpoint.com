---
id: beta-form
title: Form
pagination_label: Form
sidebar_label: Form
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Form', 'BetaForm'] 
slug: /tools/sdk/python/beta/models/form
tags: ['SDK', 'Software Development Kit', 'Form', 'BetaForm']
---

# Form


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the form | [optional] 
**name** | **str** | Name of the form | [optional] 
**title** | **str** | The form title | [optional] 
**subtitle** | **str** | The form subtitle. | [optional] 
**target_user** | **str** | The name of the user that should be shown this form | [optional] 
**sections** | [**[]SectionDetails**](section-details) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.form import Form

form = Form(
id='2c9180835d2e5168015d32f890ca1581',
name='AccountSelection Form',
title='Account Selection for John.Doe',
subtitle='Please select from the following',
target_user='Jane.Doe',
sections=[
                    sailpoint.beta.models.section_details.Section Details()
                    ]
)

```
[[Back to top]](#) 

