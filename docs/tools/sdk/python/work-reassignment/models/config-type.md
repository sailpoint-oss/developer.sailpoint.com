# ConfigType

# ConfigType

Type of Reassignment Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **int** |  | [optional] 
**internal_name** | **ConfigTypeEnumCamel** |  | [optional] 
**internal_name_camel** | **ConfigTypeEnum** |  | [optional] 
**display_name** | **str** | Human readable display name of the type to be shown on UI | [optional] 
**description** | **str** | Description of the type of work to be reassigned, displayed by the UI. | [optional] 
\}

## Example

```python
from sailpoint.work_reassignment.models.config_type import ConfigType

config_type = ConfigType(
priority=1,
internal_name='accessRequests',
internal_name_camel='ACCESS_REQUESTS',
display_name='Access Requests',
description='Reassign Access Request Work Items for an identity'
)

```
[[Back to top]](#) 

