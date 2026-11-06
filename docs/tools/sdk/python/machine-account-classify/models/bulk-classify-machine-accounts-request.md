# BulkClassifyMachineAccountsRequest

# BulkClassifyMachineAccountsRequest

Accounts to classify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | IDs of the accounts to classify. Provide between 1 and 250 account IDs. | [required]
\}

## Example

```python
from sailpoint.machine_account_classify.models.bulk_classify_machine_accounts_request import BulkClassifyMachineAccountsRequest

bulk_classify_machine_accounts_request = BulkClassifyMachineAccountsRequest(
ids=["ef38f94347e94562b5bb8424a56397d8","2c9180835d191a86015d28455b4a2329"]
)

```
[[Back to top]](#) 

