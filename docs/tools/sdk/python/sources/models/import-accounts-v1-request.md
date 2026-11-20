# ImportAccountsV1Request

# ImportAccountsV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | The CSV file containing the source accounts to aggregate. | [optional] 
**disable_optimization** | **str** | Use this flag to reprocess every account whether or not the data has changed. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.import_accounts_v1_request import ImportAccountsV1Request

import_accounts_v1_request = ImportAccountsV1Request(
file=bytes(b'blah'),
disable_optimization='true'
)

```
[[Back to top]](#) 

