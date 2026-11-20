# SubtypeTarget

# SubtypeTarget

Resolved target of a tiered subtype on get-by-id. Extends the list/create/patch target reference with `supportsProvisioning`. Not accepted on create.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE',    'CONNECTOR' ] | DTO type of the target. `SOURCE` for source-tier rows; `CONNECTOR` for connector-tier rows. | [optional] 
**id** | **str** | Target identifier. Source id for `SOURCE`. Connector specification id or connector type for `CONNECTOR`. | [optional] 
**name** | **str** | Human-readable target name. Falls back to `id` when a display name is not available. | [optional] 
**supports_provisioning** | **bool** | Whether the target can provision accounts. `false` when the target does not support provisioning. | [optional] [default to False]
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.subtype_target import SubtypeTarget

subtype_target = SubtypeTarget(
type='CONNECTOR',
id='65de7634-d315-482c-aad4-7fdbd1e42056',
name='15Five',
supports_provisioning=True
)

```
[[Back to top]](#) 

