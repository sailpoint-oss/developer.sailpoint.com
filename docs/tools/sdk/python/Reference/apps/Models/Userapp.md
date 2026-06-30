---
id: userapp
title: Userapp
pagination_label: Userapp
sidebar_label: Userapp
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Userapp', 'Userapp'] 
slug: /tools/sdk/python/apps/models/userapp
tags: ['SDK', 'Software Development Kit', 'Userapp', 'Userapp']
---

# Userapp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The user app id | [optional] 
**created** | **datetime** | Time when the user app was created | [optional] 
**modified** | **datetime** | Time when the user app was last modified | [optional] 
**has_multiple_accounts** | **bool** | True if the owner has multiple accounts for the source | [optional] [default to False]
**use_for_password_management** | **bool** | True if the source has password feature | [optional] [default to False]
**provision_request_enabled** | **bool** | True if the app allows access request | [optional] [default to False]
**app_center_enabled** | **bool** | True if the app is visible in the request center | [optional] [default to True]
**source_app** | [**UserappSourceApp**](userapp-source-app) |  | [optional] 
**source** | [**UserappSource**](userapp-source) |  | [optional] 
**account** | [**UserappAccount**](userapp-account) |  | [optional] 
**owner** | [**UserappOwner**](userapp-owner) |  | [optional] 
}

## Example

```python
from sailpoint.apps.models.userapp import Userapp

userapp = Userapp(
id='2c91808874ff91550175097daaec161c',
created='2020-10-08T18:33:52.029Z',
modified='2020-10-08T18:33:52.029Z',
has_multiple_accounts=False,
use_for_password_management=True,
provision_request_enabled=True,
app_center_enabled=True,
source_app=sailpoint.apps.models.userapp_source_app.userapp_sourceApp(
                    id = 'edcb0951812949d085b60cd8bf35bc78', 
                    type = 'APPLICATION', 
                    name = 'test-app', ),
source=sailpoint.apps.models.userapp_source.userapp_source(
                    id = '9870808a7190d06e01719938fcd20792', 
                    type = 'SOURCE', 
                    name = 'test-source', ),
account=sailpoint.apps.models.userapp_account.userapp_account(
                    id = '85d173e7d57e496569df763231d6deb6a', 
                    type = 'ACCOUNT', 
                    name = 'test account', ),
owner=sailpoint.apps.models.userapp_owner.userapp_owner(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'IDENTITY', 
                    name = 'John', 
                    alias = 'John.Doe', )
)

```
[[Back to top]](#) 

