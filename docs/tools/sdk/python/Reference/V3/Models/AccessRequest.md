---
id: access-request
title: AccessRequest
pagination_label: AccessRequest
sidebar_label: AccessRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequest', 'AccessRequest'] 
slug: /tools/sdk/python/v3/models/access-request
tags: ['SDK', 'Software Development Kit', 'AccessRequest', 'AccessRequest']
---

# AccessRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_for** | **[]str** | A list of Identity IDs for whom the Access is requested. If it's a Revoke request, there can only be one Identity ID. | [required]
**request_type** | [**AccessRequestType**](access-request-type) |  | [optional] 
**requested_items** | [**[]AccessRequestItem**](access-request-item) |  | [required]
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_request import AccessRequest

access_request = AccessRequest(
requested_for=[
                    '2c918084660f45d6016617daa9210584'
                    ],
request_type='GRANT_ACCESS',
requested_items=[
                    sailpoint.v3.models.access_request_item.AccessRequestItem(
                        type = 'ACCESS_PROFILE', 
                        id = '2c9180835d2e5168015d32f890ca1581', 
                        comment = 'Requesting access profile for John Doe', 
                        client_metadata = {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1}, 
                        remove_date = '2020-07-11T21:23:15Z', )
                    ],
client_metadata={requestedAppId=2c91808f7892918f0178b78da4a305a1, requestedAppName=test-app}
)

```
[[Back to top]](#) 

