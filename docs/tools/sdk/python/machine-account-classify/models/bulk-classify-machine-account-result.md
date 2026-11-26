# BulkClassifyMachineAccountResult

# BulkClassifyMachineAccountResult

Classification result for one account in a bulk classify request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Account ID from the request. | [optional] 
**status** | **int** | HTTP status code for this account. `200` means the account was classified, `404` means the account was not found, and other codes describe why classification failed. | [optional] 
**is_machine** | **bool** | Indicates if the account is classified as machine. `false` when classification did not succeed. | [optional] [default to False]
**message** | **str** | Result message for this account. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_classify.models.bulk_classify_machine_account_result import BulkClassifyMachineAccountResult

bulk_classify_machine_account_result = BulkClassifyMachineAccountResult(
id='ef38f94347e94562b5bb8424a56397d8',
status=200,
is_machine=True,
message='Account classified successfully'
)

```
[[Back to top]](#) 

