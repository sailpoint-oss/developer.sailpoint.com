---
id: accessrequest
title: Accessrequest
pagination_label: Accessrequest
sidebar_label: Accessrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequest', 'Accessrequest'] 
slug: /tools/sdk/python/access-requests/models/accessrequest
tags: ['SDK', 'Software Development Kit', 'Accessrequest', 'Accessrequest']
---

# Accessrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_for** | **[]str** | A list of Identity IDs for whom the Access is requested. If it's a Revoke request, there can only be one Identity ID. | [required]
**request_type** | [**Accessrequesttype**](accessrequesttype) |  | [optional] 
**requested_items** | [**[]Accessrequestitem**](accessrequestitem) |  | [required]
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
**requested_for_with_requested_items** | [**[]Requestedfordtoref**](requestedfordtoref) | Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity. * Can only be used when 'requestedFor' and 'requestedItems' are not separately provided * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source * Allows the ability to request items with different start dates * Allows the ability to request items with different remove dates * Also allows different combinations of request items and identities in the same request * Only for use in GRANT_ACCESS type requests  | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.accessrequest import Accessrequest

accessrequest = Accessrequest(
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
                        native_identity = 'CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN', )
                    ],
client_metadata={"requestedAppId":"2c91808f7892918f0178b78da4a305a1","requestedAppName":"test-app"},
requested_for_with_requested_items=[
                    sailpoint.access_requests.models.requestedfordtoref.requestedfordtoref(
                        identity_id = 'cb89bc2f1ee6445fbea12224c526ba3a', 
                        requested_items = [
                            sailpoint.access_requests.models.requesteditemdtoref.requesteditemdtoref(
                                type = 'ACCESS_PROFILE', 
                                id = '2c9180835d2e5168015d32f890ca1581', 
                                comment = 'Requesting access profile for John Doe', 
                                client_metadata = {"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"}, 
                                start_date = '2020-06-12T21:22:23Z', 
                                remove_date = '2020-07-11T21:23:15Z', 
                                account_selection = [
                                    sailpoint.access_requests.models.sourceitemref.sourceitemref(
                                        source_id = 'cb89bc2f1ee6445fbea12224c526ba3a', 
                                        accounts = [
                                            sailpoint.access_requests.models.accountitemref.accountitemref(
                                                account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                                                native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', )
                                            ], )
                                    ], )
                            ], )
                    ]
)

```
[[Back to top]](#) 

