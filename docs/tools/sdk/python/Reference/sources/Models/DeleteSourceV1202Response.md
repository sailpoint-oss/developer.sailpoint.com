---
id: delete-source-v1202-response
title: DeleteSourceV1202Response
pagination_label: DeleteSourceV1202Response
sidebar_label: DeleteSourceV1202Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DeleteSourceV1202Response', 'DeleteSourceV1202Response'] 
slug: /tools/sdk/python/sources/models/delete-source-v1202-response
tags: ['SDK', 'Software Development Kit', 'DeleteSourceV1202Response', 'DeleteSourceV1202Response']
---

# DeleteSourceV1202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'TASK_RESULT' ] | Type of object being referenced. | [optional] 
**id** | **str** | Task result ID. | [optional] 
**name** | **str** | Task result's human-readable display name (this should be null/empty). | [optional] 
}

## Example

```python
from sailpoint.sources.models.delete_source_v1202_response import DeleteSourceV1202Response

delete_source_v1202_response = DeleteSourceV1202Response(
type='TASK_RESULT',
id='2c91808779ecf55b0179f720942f181a',
name=''
)

```
[[Back to top]](#) 

