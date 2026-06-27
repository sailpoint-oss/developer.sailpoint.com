---
id: forminstancecreatedby
title: Forminstancecreatedby
pagination_label: Forminstancecreatedby
sidebar_label: Forminstancecreatedby
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Forminstancecreatedby', 'Forminstancecreatedby'] 
slug: /tools/sdk/python/custom-forms/models/forminstancecreatedby
tags: ['SDK', 'Software Development Kit', 'Forminstancecreatedby', 'Forminstancecreatedby']
---

# Forminstancecreatedby


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID is a unique identifier | [optional] 
**type** |  **Enum** [  'WORKFLOW_EXECUTION',    'SOURCE' ] | Type is a form instance created by type enum value WORKFLOW_EXECUTION FormInstanceCreatedByTypeWorkflowExecution SOURCE FormInstanceCreatedByTypeSource | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.forminstancecreatedby import Forminstancecreatedby

forminstancecreatedby = Forminstancecreatedby(
id='00000000-0000-0000-0000-000000000000',
type='WORKFLOW_EXECUTION'
)

```
[[Back to top]](#) 

