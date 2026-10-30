# SourceItemRef

# SourceItemRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | The id for the source on which account selections are made | [optional] 
**accounts** | [**[]AccountItemRef**](account-item-ref) | A list of account selections on the source. Currently, only one selection per source is supported. | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.source_item_ref import SourceItemRef

source_item_ref = SourceItemRef(
source_id='cb89bc2f1ee6445fbea12224c526ba3a',
accounts=[
                    sailpoint.access_requests.models.account_item_ref.AccountItemRef(
                        account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                        native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', )
                    ]
)

```
[[Back to top]](#) 

