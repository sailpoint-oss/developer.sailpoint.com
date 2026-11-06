# AccessRequest

# AccessRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_for** | **[]str** | A list of Identity IDs for whom the Access is requested. If it's a Revoke request, there can only be one Identity ID. * Used for human identity requests with the 'requestedItems' field. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`   (including all machine identity requests). | [optional] 
**request_type** | **AccessRequestType** |  | [optional] 
**requested_items** | [**[]AccessRequestItem**](access-request-item) | * Used for human identity requests with the 'requestedFor' field. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`. | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
**requested_for_with_requested_items** | [**[]RequestedForDtoRef**](requested-for-dto-ref) | Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity. * Can only be used when 'requestedFor' and 'requestedItems' are not separately provided * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source. * Allows the ability to request items with different start dates and remove dates. * Also allows different combinations of request items and identities in the same request. * For human identities, primarily used with GRANT_ACCESS (and related multi-account flows). Human REVOKE_ACCESS continues to use the flat `requestedFor` / `requestedItems` shape. * Required for machine identity access requests. Set `identityType: MACHINE` on each entry. Machine requests support GRANT_ACCESS, MODIFY_ACCESS, and REVOKE_ACCESS with the constraints documented on the create endpoint and item schemas (entitlement-only; grant/modify account selection; revoke nativeIdentity).  | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.access_request import AccessRequest

access_request = AccessRequest(
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

