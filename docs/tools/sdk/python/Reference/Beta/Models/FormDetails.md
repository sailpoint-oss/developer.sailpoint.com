---
id: beta-form-details
title: FormDetails
pagination_label: FormDetails
sidebar_label: FormDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormDetails', 'BetaFormDetails'] 
slug: /tools/sdk/python/beta/models/form-details
tags: ['SDK', 'Software Development Kit', 'FormDetails', 'BetaFormDetails']
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
**sections** | [**[]SectionDetails**](section-details) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.form_details import FormDetails

form_details = FormDetails(
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

