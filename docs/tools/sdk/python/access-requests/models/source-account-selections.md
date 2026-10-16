# SourceAccountSelections

# SourceAccountSelections


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [optional] 
**id** | **str** | The source id | [optional] 
**name** | **str** | The source name | [optional] 
**accounts** | [**[]AccountInfoRef**](account-info-ref) | The accounts information for a particular source in the requested item | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.source_account_selections import SourceAccountSelections

source_account_selections = SourceAccountSelections(
type='IDENTITY',
id='3ac3c43785a845fa9820b0c1ac767cd5',
name='Test Source_Name',
accounts=[
                    sailpoint.access_requests.models.account_info_ref.AccountInfoRef(
                        uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                        native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', 
                        type = 'IDENTITY', 
                        id = 'f19d168c27374fd1aff3b483573f997f', 
                        name = 'UserAccount.761a2248b', )
                    ]
)

```
[[Back to top]](#) 

