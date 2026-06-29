---
id: delete-parameter-v1409-response
title: DeleteParameterV1409Response
pagination_label: DeleteParameterV1409Response
sidebar_label: DeleteParameterV1409Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DeleteParameterV1409Response', 'DeleteParameterV1409Response'] 
slug: /tools/sdk/python/parameter-storage/models/delete-parameter-v1409-response
tags: ['SDK', 'Software Development Kit', 'DeleteParameterV1409Response', 'DeleteParameterV1409Response']
---

# DeleteParameterV1409Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_name** | **object** | A message describing the error | [optional] 
**error_message** | **object** | Description of the error | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
}

## Example

```python
from sailpoint.parameter_storage.models.delete_parameter_v1409_response import DeleteParameterV1409Response

delete_parameter_v1409_response = DeleteParameterV1409Response(
error_name=ConflictException,
error_message=Failed to store object,
tracking_id='e7eab60924f64aa284175b9fa3309599'
)

```
[[Back to top]](#) 

