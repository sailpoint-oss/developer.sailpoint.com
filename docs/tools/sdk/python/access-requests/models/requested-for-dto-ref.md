# RequestedForDtoRef

# RequestedForDtoRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The identity id the access is requested for. * `HUMAN` (default): the human identity id. * `MACHINE`: the machine identity id (hyphenated RFC-4122 UUID, not the correlated human identity).  | [required]
**identity_type** |  **Enum** [  'HUMAN',    'MACHINE' ] | Type of identity the access is requested for. * `HUMAN` (default) - standard human identity access request. * `MACHINE` - machine identity access request. When `MACHINE`, all entries in the request must also be `MACHINE` (mixed human and machine identities in one request are not supported), and only `ENTITLEMENT` items are allowed.  | [optional] [default to 'HUMAN']
**requested_items** | [**[]RequestedItemDtoRef**](requested-item-dto-ref) | the details for the access items that are requested for the identity | [required]
\}

## Example

```python
from sailpoint.access_requests.models.requested_for_dto_ref import RequestedForDtoRef

requested_for_dto_ref = RequestedForDtoRef(
identity_id='cb89bc2f1ee6445fbea12224c526ba3a',
identity_type='HUMAN',
requested_items=[
                    sailpoint.access_requests.models.requested_item_dto_ref.RequestedItemDtoRef(
                        type = 'ACCESS_PROFILE', 
                        id = '2c9180835d2e5168015d32f890ca1581', 
                        comment = 'Requesting access profile for John Doe', 
                        client_metadata = {"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"}, 
                        start_date = '2020-06-12T21:22:23Z', 
                        remove_date = '2020-07-11T21:23:15Z', 
                        account_selection = [
                            sailpoint.access_requests.models.source_item_ref.SourceItemRef(
                                source_id = 'cb89bc2f1ee6445fbea12224c526ba3a', 
                                accounts = [
                                    sailpoint.access_requests.models.account_item_ref.AccountItemRef(
                                        account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                                        native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', )
                                    ], )
                            ], 
                        native_identity = 'CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN', 
                        form_instance_id = '9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e', )
                    ]
)

```
[[Back to top]](#) 

