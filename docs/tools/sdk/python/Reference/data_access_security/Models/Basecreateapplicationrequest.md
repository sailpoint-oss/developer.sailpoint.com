---
id: basecreateapplicationrequest
title: Basecreateapplicationrequest
pagination_label: Basecreateapplicationrequest
sidebar_label: Basecreateapplicationrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Basecreateapplicationrequest', 'Basecreateapplicationrequest'] 
slug: /tools/sdk/python/data-access-security/models/basecreateapplicationrequest
tags: ['SDK', 'Software Development Kit', 'Basecreateapplicationrequest', 'Basecreateapplicationrequest']
---

# Basecreateapplicationrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type** | [**Applicationtype**](applicationtype) |  | [required]
**name** | **str** | The display name of the application. | [required]
**description** | **str** | A brief description of the application and its purpose. | [optional] 
**tags** | [**[]Int64stringkeyvaluepair**](int64stringkeyvaluepair) | A list of tags to categorize or identify the application. | [optional] 
**identity_collector_id** | **int** | The unique identifier for the identity collector associated with this application. | [optional] 
**ad_identity_collector_id** | **int** | The unique identifier for the AD identity collector. | [optional] 
**nis_identity_collector_id** | **int** | The unique identifier for the NIS identity collector. | [optional] 
**application_crawler_settings** | [**Applicationcrawlersettings**](applicationcrawlersettings) |  | [optional] 
**permission_collector_settings** | [**Permissioncollectorsettings**](permissioncollectorsettings) |  | [optional] 
**data_classification_settings** | [**Dataclassificationsettings**](dataclassificationsettings) |  | [optional] 
**activity_configuration_settings** | [**Activityconfigurationsettings**](activityconfigurationsettings) |  | [optional] 
**execute_now** | **bool** | If true, the application setup will be executed immediately after creation. | [optional] [default to False]
}

## Example

```python
from sailpoint.data_access_security.models.basecreateapplicationrequest import Basecreateapplicationrequest

basecreateapplicationrequest = Basecreateapplicationrequest(
application_type=9,
name='HR File Server',
description='Stores HR documents and employee records.',
tags=[{"key":1,"value":"Confidential"}],
identity_collector_id=123456789,
ad_identity_collector_id=987654321,
nis_identity_collector_id=192837465,
application_crawler_settings=,
permission_collector_settings=,
data_classification_settings=,
activity_configuration_settings=,
execute_now=False
)

```
[[Back to top]](#) 

