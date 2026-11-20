# RequestedItemStatusRequestedFor

# RequestedItemStatusRequestedFor

Identity access was requested for. For machine identity requests, `type` is `MACHINE_IDENTITY` and `id` is the machine identity id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'MACHINE_IDENTITY' ] | Type of the object to which this reference applies | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.requested_item_status_requested_for import RequestedItemStatusRequestedFor

requested_item_status_requested_for = RequestedItemStatusRequestedFor(
type='IDENTITY',
id='2c9180835d191a86015d28455b4b232a',
name='William Wilson'
)

```
[[Back to top]](#) 

