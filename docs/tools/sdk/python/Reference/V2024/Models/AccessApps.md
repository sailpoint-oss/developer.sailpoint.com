---
id: v2024-access-apps
title: AccessApps
pagination_label: AccessApps
sidebar_label: AccessApps
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessApps', 'V2024AccessApps'] 
slug: /tools/sdk/python/v2024/models/access-apps
tags: ['SDK', 'Software Development Kit', 'AccessApps', 'V2024AccessApps']
---

# AccessApps


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | Name of application | [optional] 
**description** | **str** | Description of application. | [optional] 
**owner** | [**AccessAppsOwner**](access-apps-owner) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_apps import AccessApps

access_apps = AccessApps(
id='2c91808568c529c60168cca6f90c1313',
name='Travel and Expense',
description='Travel and Expense Application',
owner=sailpoint.v2024.models.access_apps_owner.AccessApps_owner(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'John Doe', 
                    email = 'john.doe@sailpoint.com', )
)

```
[[Back to top]](#) 

