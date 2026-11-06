# MachineIdentityBulkRequest

# MachineIdentityBulkRequest

Machine identities to act on in a single bulk request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | IDs of the machine identities. Provide between 1 and 100 IDs. | [required]
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_bulk_request import MachineIdentityBulkRequest

machine_identity_bulk_request = MachineIdentityBulkRequest(
ids=["ef38f94347e94562b5bb8424a56397d8","2c9180858082150f0180893dbaf44201"]
)

```
[[Back to top]](#) 

