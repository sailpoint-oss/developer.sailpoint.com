# AccessItemRequestedFor

# AccessItemRequestedFor

Identity the access item is requested for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'MACHINE_IDENTITY' ] | DTO type of identity the access item is requested for. `IDENTITY` for human identities. `MACHINE_IDENTITY` for machine identities. When `MACHINE_IDENTITY`, `id` is the machine identity id.  | [optional] 
**id** | **str** | ID of identity the access item is requested for. | [optional] 
**name** | **str** | Human-readable display name of identity the access item is requested for. | [optional] 
\}

## Example

```python
from sailpoint.access_request_approvals.models.access_item_requested_for import AccessItemRequestedFor

access_item_requested_for = AccessItemRequestedFor(
type='IDENTITY',
id='2c4180a46faadee4016fb4e018c20626',
name='Robert Robinson'
)

```
[[Back to top]](#) 

