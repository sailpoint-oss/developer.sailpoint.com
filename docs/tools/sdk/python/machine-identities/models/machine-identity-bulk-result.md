# MachineIdentityBulkResult

# MachineIdentityBulkResult

Outcome of a bulk operation for one requested machine identity ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The requested machine identity ID. | [optional] 
**status** | **int** | HTTP status code for this ID. `200` means the operation succeeded. Other values explain why it did not, for example `400` when the ID is missing or not valid, `404` when the machine identity is not found or the caller does not own it, and `409` when the ID appears more than once in the request. | [optional] 
**message** | **str** | Message describing the outcome for this ID. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_bulk_result import MachineIdentityBulkResult

machine_identity_bulk_result = MachineIdentityBulkResult(
id='ef38f94347e94562b5bb8424a56397d8',
status=200,
message='Success'
)

```
[[Back to top]](#) 

