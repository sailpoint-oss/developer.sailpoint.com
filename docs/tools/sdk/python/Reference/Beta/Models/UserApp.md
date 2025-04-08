---
id: beta-user-app
title: UserApp
pagination_label: UserApp
sidebar_label: UserApp
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserApp', 'BetaUserApp'] 
slug: /tools/sdk/python/beta/models/user-app
tags: ['SDK', 'Software Development Kit', 'UserApp', 'BetaUserApp']
---

# UserApp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The user app id | [optional] 
**created** | **datetime** | Time when the user app was created | [optional] 
**modified** | **datetime** | Time when the user app was last modified | [optional] 
**has_multiple_accounts** | **bool** | True if the owner has multiple accounts for the source | [optional] [default to False]
**use_for_password_management** | **bool** | True if the source has password feature | [optional] [default to False]
**provision_request_enabled** | **bool** | True if the source app related to the user app is provision request enabled | [optional] [default to False]
**app_center_enabled** | **bool** | True if the source app related to the user app is shown in the app center | [optional] [default to True]
**source_app** | [**UserAppSourceApp**](user-app-source-app) |  | [optional] 
**source** | [**UserAppSource**](user-app-source) |  | [optional] 
**account** | [**UserAppAccount**](user-app-account) |  | [optional] 
**owner** | [**UserAppOwner**](user-app-owner) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.user_app import UserApp

user_app = UserApp(
id='2c91808874ff91550175097daaec161c',
created='2020-10-08T18:33:52.029Z',
modified='2020-10-08T18:33:52.029Z',
has_multiple_accounts=False,
use_for_password_management=True,
provision_request_enabled=True,
app_center_enabled=True,
source_app=sailpoint.beta.models.user_app_source_app.UserApp_sourceApp(
                    id = 'edcb0951812949d085b60cd8bf35bc78', 
                    type = 'APPLICATION', 
                    name = 'test-app', ),
source=sailpoint.beta.models.user_app_source.UserApp_source(
                    id = '9870808a7190d06e01719938fcd20792', 
                    type = 'SOURCE', 
                    name = 'test-source', ),
account=sailpoint.beta.models.user_app_account.UserApp_account(
                    id = '85d173e7d57e496569df763231d6deb6a', 
                    type = 'ACCOUNT', 
                    name = 'test account', ),
owner=sailpoint.beta.models.user_app_owner.UserApp_owner(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'IDENTITY', 
                    name = 'John', 
                    alias = 'John.Doe', )
)

```
[[Back to top]](#) 

