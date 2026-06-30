---
id: requestedfordtoref
title: Requestedfordtoref
pagination_label: Requestedfordtoref
sidebar_label: Requestedfordtoref
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Requestedfordtoref', 'Requestedfordtoref'] 
slug: /tools/sdk/python/access-requests/models/requestedfordtoref
tags: ['SDK', 'Software Development Kit', 'Requestedfordtoref', 'Requestedfordtoref']
---

# Requestedfordtoref


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The identity id for which the access is requested | [required]
**requested_items** | [**[]Requesteditemdtoref**](requesteditemdtoref) | the details for the access items that are requested for the identity | [required]
}

## Example

```python
from sailpoint.access_requests.models.requestedfordtoref import Requestedfordtoref

requestedfordtoref = Requestedfordtoref(
identity_id='cb89bc2f1ee6445fbea12224c526ba3a',
requested_items=[
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
                    ]
)

```
[[Back to top]](#) 

