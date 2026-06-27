---
id: accountactionrequestdto-account-details
title: AccountactionrequestdtoAccountDetails
pagination_label: AccountactionrequestdtoAccountDetails
sidebar_label: AccountactionrequestdtoAccountDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountactionrequestdtoAccountDetails', 'AccountactionrequestdtoAccountDetails'] 
slug: /tools/sdk/python/account-deletion-requests/models/accountactionrequestdto-account-details
tags: ['SDK', 'Software Development Kit', 'AccountactionrequestdtoAccountDetails', 'AccountactionrequestdtoAccountDetails']
---

# AccountactionrequestdtoAccountDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | unique id of this object | [optional] 
**name** | **str** |  | [optional] 
**account_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**native_identity** | **str** |  | [optional] 
**uuid** | **str** |  | [optional] 
**display_name** | **str** |  | [optional] 
**disabled** | **bool** |  | [optional] 
**locked** | **bool** |  | [optional] 
**uncorrelated** | **bool** |  | [optional] 
**system_account** | **bool** |  | [optional] 
**authoritative** | **bool** |  | [optional] 
**supports_password_change** | **bool** |  | [optional] 
**attributes** | **object** |  | [optional] 
**application** | **object** |  | [optional] 
**identity** | **object** |  | [optional] 
**var_schema** | **object** |  | [optional] 
**pending_access_request_ids** | **[]str** |  | [optional] 
**features** | **[]str** |  | [optional] 
**meta** | **object** |  | [optional] 
}

## Example

```python
from sailpoint.account_deletion_requests.models.accountactionrequestdto_account_details import AccountactionrequestdtoAccountDetails

accountactionrequestdto_account_details = AccountactionrequestdtoAccountDetails(
id='2c91808474683da6017468693c260195',
name='',
account_id='4191808474683da6017468693c260195',
description='',
native_identity='',
uuid='',
display_name='',
disabled=True,
locked=True,
uncorrelated=True,
system_account=True,
authoritative=True,
supports_password_change=True,
attributes=sailpoint.account_deletion_requests.models.attributes.attributes(),
application=sailpoint.account_deletion_requests.models.application.application(),
identity=sailpoint.account_deletion_requests.models.identity.identity(),
var_schema=sailpoint.account_deletion_requests.models.schema.schema(),
pending_access_request_ids=[
                    ''
                    ],
features=[
                    'AUTHENTICATE'
                    ],
meta=sailpoint.account_deletion_requests.models.meta.meta()
)

```
[[Back to top]](#) 

