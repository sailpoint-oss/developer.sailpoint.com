# MachineAccountBulkRequest

# MachineAccountBulkRequest

The machine accounts to process in a bulk operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | IDs of the machine accounts to process. Provide between 1 and 100 IDs. | [required]
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_bulk_request import MachineAccountBulkRequest

machine_account_bulk_request = MachineAccountBulkRequest(
ids=["ef38f94347e94562b5bb8424a56397d8","2c9180835d2e5168015d32f890ca1581"]
)

```
[[Back to top]](#) 

