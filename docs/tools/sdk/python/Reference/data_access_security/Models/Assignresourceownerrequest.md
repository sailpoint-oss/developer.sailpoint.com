---
id: assignresourceownerrequest
title: Assignresourceownerrequest
pagination_label: Assignresourceownerrequest
sidebar_label: Assignresourceownerrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Assignresourceownerrequest', 'Assignresourceownerrequest'] 
slug: /tools/sdk/python/data-access-security/models/assignresourceownerrequest
tags: ['SDK', 'Software Development Kit', 'Assignresourceownerrequest', 'Assignresourceownerrequest']
---

# Assignresourceownerrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **int** | The unique identifier of the application containing the resource. | [optional] 
**full_path** | **str** | The full path to the resource within the application (e.g., file path or object path). | [optional] 
**identity_id** | **str** | The unique identifier (UUID) of the identity to be assigned as the resource owner. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.assignresourceownerrequest import Assignresourceownerrequest

assignresourceownerrequest = Assignresourceownerrequest(
app_id=12345,
full_path='/shared/hr/documents/employee-records.pdf',
identity_id='d290f1ee-6c54-4b01-90e6-d701748f0851'
)

```
[[Back to top]](#) 

