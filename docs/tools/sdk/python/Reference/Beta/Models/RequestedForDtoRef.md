---
id: beta-requested-for-dto-ref
title: RequestedForDtoRef
pagination_label: RequestedForDtoRef
sidebar_label: RequestedForDtoRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedForDtoRef', 'BetaRequestedForDtoRef'] 
slug: /tools/sdk/python/beta/models/requested-for-dto-ref
tags: ['SDK', 'Software Development Kit', 'RequestedForDtoRef', 'BetaRequestedForDtoRef']
---

# RequestedForDtoRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The identity id for which the access is requested | [required]
**requested_items** | [**[]RequestedItemDtoRef**](requested-item-dto-ref) | the details for the access items that are requested for the identity | [required]
}

## Example

```python
from sailpoint.beta.models.requested_for_dto_ref import RequestedForDtoRef

requested_for_dto_ref = RequestedForDtoRef(
identity_id='cb89bc2f1ee6445fbea12224c526ba3a',
requested_items=[
                    sailpoint.beta.models.requested_item_dto_ref.RequestedItemDtoRef(
                        type = 'ACCESS_PROFILE', 
                        id = '2c9180835d2e5168015d32f890ca1581', 
                        comment = 'Requesting access profile for John Doe', 
                        client_metadata = {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1}, 
                        remove_date = '2020-07-11T21:23:15Z', 
                        account_selection = [
                            sailpoint.beta.models.source_item_ref.SourceItemRef(
                                source_id = 'cb89bc2f1ee6445fbea12224c526ba3a', 
                                accounts = [
                                    sailpoint.beta.models.account_item_ref.AccountItemRef(
                                        account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                                        native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', )
                                    ], )
                            ], )
                    ]
)

```
[[Back to top]](#) 

