---
id: beta-form-used-by
title: FormUsedBy
pagination_label: FormUsedBy
sidebar_label: FormUsedBy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormUsedBy', 'BetaFormUsedBy'] 
slug: /tools/sdk/python/beta/models/form-used-by
tags: ['SDK', 'Software Development Kit', 'FormUsedBy', 'BetaFormUsedBy']
---

# FormUsedBy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'WORKFLOW',    'SOURCE',    'MySailPoint' ] | FormUsedByType value.  WORKFLOW FormUsedByTypeWorkflow SOURCE FormUsedByTypeSource MySailPoint FormUsedByType | [optional] 
**id** | **str** | Unique identifier of the system using the form. | [optional] 
**name** | **str** | Name of the system using the form. | [optional] 
}

## Example

```python
from sailpoint.beta.models.form_used_by import FormUsedBy

form_used_by = FormUsedBy(
type='WORKFLOW',
id='61940a92-5484-42bc-bc10-b9982b218cdf',
name='Access Request Form'
)

```
[[Back to top]](#) 

