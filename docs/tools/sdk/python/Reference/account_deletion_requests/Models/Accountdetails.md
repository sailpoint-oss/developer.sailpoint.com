---
id: accountdetails
title: Accountdetails
pagination_label: Accountdetails
sidebar_label: Accountdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountdetails', 'Accountdetails'] 
slug: /tools/sdk/python/account-deletion-requests/models/accountdetails
tags: ['SDK', 'Software Development Kit', 'Accountdetails', 'Accountdetails']
---

# Accountdetails

Account Details

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
from sailpoint.account_deletion_requests.models.accountdetails import Accountdetails

accountdetails = Accountdetails(
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
attributes=None,
application=None,
identity=None,
var_schema=None,
pending_access_request_ids=[
                    ''
                    ],
features=[
                    'AUTHENTICATE'
                    ],
meta=None
)

```
[[Back to top]](#) 

