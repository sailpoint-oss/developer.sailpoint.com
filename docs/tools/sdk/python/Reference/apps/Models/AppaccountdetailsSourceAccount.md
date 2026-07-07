---
id: appaccountdetails-source-account
title: AppaccountdetailsSourceAccount
pagination_label: AppaccountdetailsSourceAccount
sidebar_label: AppaccountdetailsSourceAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AppaccountdetailsSourceAccount', 'AppaccountdetailsSourceAccount'] 
slug: /tools/sdk/python/apps/models/appaccountdetails-source-account
tags: ['SDK', 'Software Development Kit', 'AppaccountdetailsSourceAccount', 'AppaccountdetailsSourceAccount']
---

# AppaccountdetailsSourceAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The account ID | [optional] 
**native_identity** | **str** | The native identity of account | [optional] 
**display_name** | **str** | The display name of account | [optional] 
**source_id** | **str** | The source ID of account | [optional] 
**source_display_name** | **str** | The source name of account | [optional] 
}

## Example

```python
from sailpoint.apps.models.appaccountdetails_source_account import AppaccountdetailsSourceAccount

appaccountdetails_source_account = AppaccountdetailsSourceAccount(
id='fbf4f72280304f1a8bc808fc2a3bcf7b',
native_identity='CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com',
display_name='Abby Smith',
source_id='10efa58ea3954883b52bf74f489ce8f9',
source_display_name='ODS-AD-SOURCE'
)

```
[[Back to top]](#) 

