---
id: appaccountdetails
title: Appaccountdetails
pagination_label: Appaccountdetails
sidebar_label: Appaccountdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Appaccountdetails', 'Appaccountdetails'] 
slug: /tools/sdk/python/apps/models/appaccountdetails
tags: ['SDK', 'Software Development Kit', 'Appaccountdetails', 'Appaccountdetails']
---

# Appaccountdetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The source app ID | [optional] 
**app_display_name** | **str** | The source app display name | [optional] 
**source_account** | [**AppaccountdetailsSourceAccount**](appaccountdetails-source-account) |  | [optional] 
}

## Example

```python
from sailpoint.apps.models.appaccountdetails import Appaccountdetails

appaccountdetails = Appaccountdetails(
app_id='fbf4f72280304f1a8bc808fc2a3bcf7b',
app_display_name='AD source app',
source_account=sailpoint.apps.models.appaccountdetails_source_account.appaccountdetails_sourceAccount(
                    id = 'fbf4f72280304f1a8bc808fc2a3bcf7b', 
                    native_identity = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                    display_name = 'Abby Smith', 
                    source_id = '10efa58ea3954883b52bf74f489ce8f9', 
                    source_display_name = 'ODS-AD-SOURCE', )
)

```
[[Back to top]](#) 

