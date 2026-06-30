---
id: accountsselectionrequest
title: Accountsselectionrequest
pagination_label: Accountsselectionrequest
sidebar_label: Accountsselectionrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountsselectionrequest', 'Accountsselectionrequest'] 
slug: /tools/sdk/python/access-requests/models/accountsselectionrequest
tags: ['SDK', 'Software Development Kit', 'Accountsselectionrequest', 'Accountsselectionrequest']
---

# Accountsselectionrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_for** | **[]str** | A list of Identity IDs for whom the Access is requested. | [required]
**request_type** | [**Accessrequesttype**](accessrequesttype) |  | [optional] 
**requested_items** | [**[]Accessrequestitem**](accessrequestitem) |  | [required]
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities.   | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.accountsselectionrequest import Accountsselectionrequest

accountsselectionrequest = Accountsselectionrequest(
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
client_metadata={"requestedAppId":"2c91808f7892918f0178b78da4a305a1","requestedAppName":"test-app"}
)

```
[[Back to top]](#) 

