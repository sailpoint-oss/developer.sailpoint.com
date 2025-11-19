---
id: form-details
title: FormDetails
pagination_label: FormDetails
sidebar_label: FormDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormDetails', 'FormDetails'] 
slug: /tools/sdk/python/v3/models/form-details
tags: ['SDK', 'Software Development Kit', 'FormDetails', 'FormDetails']
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
from sailpoint.v3.models.form_details import FormDetails

form_details = FormDetails(
id='2c9180835d2e5168015d32f890ca1581',
name='AccountSelection Form',
title='Account Selection for John.Doe',
subtitle='Please select from the following',
target_user='Jane.Doe',
sections=[
                    sailpoint.v3.models.section_details.Section Details()
                    ]
)

```
[[Back to top]](#) 

