# SubtypeTargetRef

# SubtypeTargetRef

Resolved target of a tiered subtype. Present on v2 responses; not accepted on create.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE',    'CONNECTOR' ] | DTO type of the target. `SOURCE` for source-tier rows; `CONNECTOR` for connector-tier rows. | [optional] 
**id** | **str** | Target identifier. Source id for `SOURCE`. Connector specification id or connector type for `CONNECTOR`. | [optional] 
**name** | **str** | Human-readable target name. Falls back to `id` when a display name is not available. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.subtype_target_ref import SubtypeTargetRef

subtype_target_ref = SubtypeTargetRef(
type='CONNECTOR',
id='65de7634-d315-482c-aad4-7fdbd1e42056',
name='15Five'
)

```
[[Back to top]](#) 

