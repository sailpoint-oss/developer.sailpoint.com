# RequestedAccountRef

# RequestedAccountRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Display name of the account for the user | [optional] 
**type** | **DtoType** |  | [optional] 
**account_uuid** | **str** | The uuid for the account | [optional] 
**account_id** | **str** | The native identity for the account | [optional] 
**source_name** | **str** | Display name of the source for the account | [optional] 
\}

## Example

```python
from sailpoint.access_request_approvals.models.requested_account_ref import RequestedAccountRef

requested_account_ref = RequestedAccountRef(
name='Glen.067da3248e914',
type='IDENTITY',
account_uuid='{fab7119e-004f-4822-9c33-b8d570d6c6a6}',
account_id='CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local',
source_name='Multi Account AD source name'
)

```
[[Back to top]](#) 

