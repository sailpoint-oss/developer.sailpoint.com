---
id: v2025-delete-source202-response
title: DeleteSource202Response
pagination_label: DeleteSource202Response
sidebar_label: DeleteSource202Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DeleteSource202Response', 'V2025DeleteSource202Response'] 
slug: /tools/sdk/python/v2025/models/delete-source202-response
tags: ['SDK', 'Software Development Kit', 'DeleteSource202Response', 'V2025DeleteSource202Response']
---

# DeleteSource202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'TASK_RESULT' ] | Type of object being referenced. | [optional] 
**id** | **str** | Task result ID. | [optional] 
**name** | **str** | Task result's human-readable display name (this should be null/empty). | [optional] 
}

## Example

```python
from sailpoint.v2025.models.delete_source202_response import DeleteSource202Response

delete_source202_response = DeleteSource202Response(
type='TASK_RESULT',
id='2c91808779ecf55b0179f720942f181a',
name=''
)

```
[[Back to top]](#) 

