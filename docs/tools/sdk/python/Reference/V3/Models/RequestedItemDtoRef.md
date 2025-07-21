---
id: requested-item-dto-ref
title: RequestedItemDtoRef
pagination_label: RequestedItemDtoRef
sidebar_label: RequestedItemDtoRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemDtoRef', 'RequestedItemDtoRef'] 
slug: /tools/sdk/python/v3/models/requested-item-dto-ref
tags: ['SDK', 'Software Development Kit', 'RequestedItemDtoRef', 'RequestedItemDtoRef']
---

# RequestedItemDtoRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | The type of the item being requested. | [required]
**id** | **str** | ID of Role, Access Profile or Entitlement being requested. | [required]
**comment** | **str** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**remove_date** | **datetime** | The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date-time in the future. * The current SLA for the deprovisioning is 24 hours. * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for.  | [optional] 
**account_selection** | [**[]SourceItemRef**](source-item-ref) | The accounts where the access item will be provisioned to * Includes selections performed by the user in the event of multiple accounts existing on the same source * Also includes details for sources where user only has one account  | [optional] 
}

## Example

```python
from sailpoint.v3.models.requested_item_dto_ref import RequestedItemDtoRef

requested_item_dto_ref = RequestedItemDtoRef(
type='ACCESS_PROFILE',
id='2c9180835d2e5168015d32f890ca1581',
comment='Requesting access profile for John Doe',
client_metadata={requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1},
remove_date='2020-07-11T21:23:15Z',
account_selection=[
                    sailpoint.v3.models.source_item_ref.SourceItemRef(
                        source_id = 'cb89bc2f1ee6445fbea12224c526ba3a', 
                        accounts = [
                            sailpoint.v3.models.account_item_ref.AccountItemRef(
                                account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                                native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

