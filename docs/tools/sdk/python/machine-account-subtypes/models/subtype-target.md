# SubtypeTarget

# SubtypeTarget

Reference to the source or connector the subtype is defined for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE',    'CONNECTOR' ] | Type of the target. | [optional] 
**id** | **str** | Source ID for a `SOURCE` target, or connector type for a `CONNECTOR` target. | [optional] 
**name** | **str** | Name of the source or connector. | [optional] 
**supports_provisioning** | **bool** | Indicates whether the target supports provisioning. Only returned when you get a single subtype by ID. | [optional] [default to False]
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.subtype_target import SubtypeTarget

subtype_target = SubtypeTarget(
type='CONNECTOR',
id='active-directory',
name='Active Directory',
supports_provisioning=True
)

```
[[Back to top]](#) 

