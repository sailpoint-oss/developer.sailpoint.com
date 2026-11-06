# WorkgroupConnectionDto

# WorkgroupConnectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | [**WorkgroupConnectionDtoObject**](workgroup-connection-dto-object) |  | [optional] 
**connection_type** |  **Enum** [  'AccessRequestReviewer',    'Owner',    'ManagementWorkgroup' ] | Connection Type. | [optional] 
\}

## Example

```python
from sailpoint.governance_groups.models.workgroup_connection_dto import WorkgroupConnectionDto

workgroup_connection_dto = WorkgroupConnectionDto(
object=,
connection_type='AccessRequestReviewer'
)

```
[[Back to top]](#) 

