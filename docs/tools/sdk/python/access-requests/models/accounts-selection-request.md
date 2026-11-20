# AccountsSelectionRequest

# AccountsSelectionRequest

Prefetch account selections for an access request before submit. Machine identity accounts-selection must use `requestedForWithRequestedItems` with `identityType: MACHINE` on each entry and only `ENTITLEMENT` items. Flat `requestedFor` / `requestedItems` must be omitted (do not send an empty array) for machine requests. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_for** | **[]str** | A list of Identity IDs for whom the Access is requested. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`   (including all machine identity requests). | [optional] 
**request_type** | **AccessRequestType** |  | [optional] 
**requested_items** | [**[]AccessRequestItem**](access-request-item) | Access items requested. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`.  | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
**requested_for_with_requested_items** | [**[]RequestedForDtoRef**](requested-for-dto-ref) | Nested payload pairing each identity with its requested items. * Required for machine identity accounts-selection. Set `identityType: MACHINE` on each entry. * Machine requests support `ENTITLEMENT` items only and do not allow mixed human and machine identities. * When present, `requestedFor` and `requestedItems` must be omitted (do not send an empty array). | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.accounts_selection_request import AccountsSelectionRequest

accounts_selection_request = AccountsSelectionRequest(
requested_for=2c918084660f45d6016617daa9210584,
request_type='GRANT_ACCESS',
requested_items=[
                    sailpoint.access_requests.models.access_request_item.Access Request Item(
                        type = 'ACCESS_PROFILE', 
                        id = '2c9180835d2e5168015d32f890ca1581', 
                        comment = 'Requesting access profile for John Doe', 
                        client_metadata = {"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"}, 
                        start_date = '2020-06-12T21:22:23Z', 
                        remove_date = '2020-07-11T21:23:15Z', 
                        assignment_id = 'ee48a191c00d49bf9264eb0a4fc3a9fc', 
                        native_identity = 'CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN', 
                        form_instance_id = '9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e', )
                    ],
client_metadata={"requestedAppId":"2c91808f7892918f0178b78da4a305a1","requestedAppName":"test-app"},
requested_for_with_requested_items=[
                    sailpoint.access_requests.models.requested_for_dto_ref.RequestedForDtoRef(
                        identity_id = 'cb89bc2f1ee6445fbea12224c526ba3a', 
                        identity_type = 'HUMAN', 
                        requested_items = [
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
                            ], )
                    ]
)

```
[[Back to top]](#) 

