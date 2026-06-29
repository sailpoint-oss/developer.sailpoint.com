---
id: requesteditemaccountselections
title: Requesteditemaccountselections
pagination_label: Requesteditemaccountselections
sidebar_label: Requesteditemaccountselections
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Requesteditemaccountselections', 'Requesteditemaccountselections'] 
slug: /tools/sdk/python/access-requests/models/requesteditemaccountselections
tags: ['SDK', 'Software Development Kit', 'Requesteditemaccountselections', 'Requesteditemaccountselections']
---

# Requesteditemaccountselections


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description for this requested item | [optional] 
**accounts_selection_blocked** | **bool** | This field indicates if account selections are not allowed for this requested item. * If true, this field indicates that account selections will not be available for this item and user combination. In this case, no account selections should be provided in the access request for this item and user combination, irrespective of whether the user has single or multiple accounts on a source. * An example is where a user is requesting an access profile that is already assigned to one of their accounts.  | [optional] [default to False]
**accounts_selection_blocked_reason** | **str** | If account selections are not allowed for an item, this field will denote the reason. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | The type of the item being requested. | [optional] 
**id** | **str** | The id of the requested item | [optional] 
**name** | **str** | The name of the requested item | [optional] 
**sources** | [**[]Sourceaccountselections**](sourceaccountselections) | The details for the sources and accounts for the requested item and identity combination | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.requesteditemaccountselections import Requesteditemaccountselections

requesteditemaccountselections = Requesteditemaccountselections(
description='An access profile for the admins',
accounts_selection_blocked=False,
accounts_selection_blocked_reason='ACCESS_PROFILE_ALREADY_ASSIGNED_TO_AN_ACCOUNT',
type='ACCESS_PROFILE',
id='720fd239701344aea76c93ba91376aec',
name='Test Access Profile',
sources=[
                    sailpoint.access_requests.models.sourceaccountselections.sourceaccountselections(
                        type = 'IDENTITY', 
                        id = '3ac3c43785a845fa9820b0c1ac767cd5', 
                        name = 'Test Source_Name', 
                        accounts = [
                            sailpoint.access_requests.models.accountinforef.accountinforef(
                                uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                                native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', 
                                id = 'f19d168c27374fd1aff3b483573f997f', 
                                name = 'UserAccount.761a2248b', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

