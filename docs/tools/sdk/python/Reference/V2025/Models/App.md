---
id: v2025-app
title: App
pagination_label: App
sidebar_label: App
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'App', 'V2025App'] 
slug: /tools/sdk/python/v2025/models/app
tags: ['SDK', 'Software Development Kit', 'App', 'V2025App']
---

# App


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**source** | [**Reference**](reference) |  | [optional] 
**account** | [**AppAllOfAccount**](app-all-of-account) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.app import App

app = App(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
source=sailpoint.v2025.models.reference.Reference(
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'John Doe', ),
account=sailpoint.v2025.models.app_all_of_account.App_allOf_account(
                    id = '2c9180837dfe6949017e21f3d8cd6d49', 
                    account_id = 'CN=Carol Adams,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=sailpointdemo,DC=com', )
)

```
[[Back to top]](#) 

