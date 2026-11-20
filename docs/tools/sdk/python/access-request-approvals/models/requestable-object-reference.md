# RequestableObjectReference

# RequestableObjectReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the object. | [optional] 
**name** | **str** | Name of the object. | [optional] 
**description** | **str** | Description of the object. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | Type of the object. | [optional] 
\}

## Example

```python
from sailpoint.access_request_approvals.models.requestable_object_reference import RequestableObjectReference

requestable_object_reference = RequestableObjectReference(
id='2c9180835d2e5168015d32f890ca1581',
name='Applied Research Access',
description='Access to research information, lab results, and schematics',
type='ROLE'
)

```
[[Back to top]](#) 

