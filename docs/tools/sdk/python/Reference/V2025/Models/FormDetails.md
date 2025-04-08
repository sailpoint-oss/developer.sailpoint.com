---
id: v2025-form-details
title: FormDetails
pagination_label: FormDetails
sidebar_label: FormDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormDetails', 'V2025FormDetails'] 
slug: /tools/sdk/python/v2025/models/form-details
tags: ['SDK', 'Software Development Kit', 'FormDetails', 'V2025FormDetails']
---

# FormDetails


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
from sailpoint.v2025.models.form_details import FormDetails

form_details = FormDetails(
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

