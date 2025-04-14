---
id: beta-access-request
title: AccessRequest
pagination_label: AccessRequest
sidebar_label: AccessRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequest', 'BetaAccessRequest'] 
slug: /tools/sdk/python/beta/models/access-request
tags: ['SDK', 'Software Development Kit', 'AccessRequest', 'BetaAccessRequest']
---

# AccessRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_for** | **[]str** | A list of Identity IDs for whom the Access is requested. If it's a Revoke request, there can only be one Identity ID. | [required]
**request_type** | [**AccessRequestType**](access-request-type) |  | [optional] 
**requested_items** | [**[]AccessRequestItem**](access-request-item) |  | [required]
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
**requested_for_with_requested_items** | [**[]RequestedForDtoRef**](requested-for-dto-ref) | Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity. * Can only be used when 'requestedFor' and 'requestedItems' are not separately provided * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source * Allows the ability to request items with different remove dates * Also allows different combinations of request items and identities in the same request  | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_request import AccessRequest

access_request = AccessRequest(
requested_for=2c918084660f45d6016617daa9210584,
request_type='GRANT_ACCESS',
requested_items=[
                    sailpoint.beta.models.access_request_item.AccessRequestItem(
                        type = 'ACCESS_PROFILE', 
                        id = '2c9180835d2e5168015d32f890ca1581', 
                        comment = 'Requesting access profile for John Doe', 
                        client_metadata = {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1}, 
                        remove_date = '2020-07-11T21:23:15Z', 
                        assignment_id = 'ee48a191c00d49bf9264eb0a4fc3a9fc', 
                        native_identity = 'CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN', )
                    ],
client_metadata={requestedAppId=2c91808f7892918f0178b78da4a305a1, requestedAppName=test-app},
requested_for_with_requested_items=[
                    sailpoint.beta.models.requested_for_dto_ref.RequestedForDtoRef(
                        identity_id = 'cb89bc2f1ee6445fbea12224c526ba3a', 
                        requested_items = [
                            sailpoint.beta.models.requested_item_dto_ref.RequestedItemDtoRef(
                                type = 'ACCESS_PROFILE', 
                                id = '2c9180835d2e5168015d32f890ca1581', 
                                comment = 'Requesting access profile for John Doe', 
                                client_metadata = {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1}, 
                                remove_date = '2020-07-11T21:23:15Z', 
                                assignment_id = 'ee48a191c00d49bf9264eb0a4fc3a9fc', 
                                native_identity = 'CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN', 
                                account_selection = [
                                    sailpoint.beta.models.source_item_ref.SourceItemRef(
                                        source_id = 'cb89bc2f1ee6445fbea12224c526ba3a', 
                                        accounts = [
                                            sailpoint.beta.models.account_item_ref.AccountItemRef(
                                                account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                                                native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', )
                                            ], )
                                    ], )
                            ], )
                    ]
)

```
[[Back to top]](#) 

