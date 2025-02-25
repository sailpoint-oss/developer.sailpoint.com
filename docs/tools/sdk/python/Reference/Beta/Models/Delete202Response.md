---
id: beta-delete202-response
title: Delete202Response
pagination_label: Delete202Response
sidebar_label: Delete202Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Delete202Response', 'BetaDelete202Response'] 
slug: /tools/sdk/python/beta/models/delete202-response
tags: ['SDK', 'Software Development Kit', 'Delete202Response', 'BetaDelete202Response']
---

# Delete202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'TASK_RESULT' ] | Type of object being referenced. | [optional] 
**id** | **str** | Task result ID. | [optional] 
**name** | **str** | Task result's human-readable display name (this should be null/empty). | [optional] 
}

## Example

```python
from sailpoint.beta.models.delete202_response import Delete202Response

delete202_response = Delete202Response(
type='TASK_RESULT',
id='2c91808779ecf55b0179f720942f181a',
name=''
)

```
[[Back to top]](#) 

