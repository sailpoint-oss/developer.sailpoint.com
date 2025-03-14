---
id: beta-app-account-details
title: AppAccountDetails
pagination_label: AppAccountDetails
sidebar_label: AppAccountDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AppAccountDetails', 'BetaAppAccountDetails'] 
slug: /tools/sdk/python/beta/models/app-account-details
tags: ['SDK', 'Software Development Kit', 'AppAccountDetails', 'BetaAppAccountDetails']
---

# AppAccountDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The source app ID | [optional] 
**app_display_name** | **str** | The source app display name | [optional] 
**source_account** | [**AppAccountDetailsSourceAccount**](app-account-details-source-account) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.app_account_details import AppAccountDetails

app_account_details = AppAccountDetails(
app_id='fbf4f72280304f1a8bc808fc2a3bcf7b',
app_display_name='AD source app',
source_account=sailpoint.beta.models.app_account_details_source_account.AppAccountDetails_sourceAccount(
                    id = 'fbf4f72280304f1a8bc808fc2a3bcf7b', 
                    native_identity = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                    display_name = 'Abby Smith', 
                    source_id = '10efa58ea3954883b52bf74f489ce8f9', 
                    source_display_name = 'ODS-AD-SOURCE', )
)

```
[[Back to top]](#) 

