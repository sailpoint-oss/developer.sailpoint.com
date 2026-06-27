---
id: applicationitem
title: Applicationitem
pagination_label: Applicationitem
sidebar_label: Applicationitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Applicationitem', 'Applicationitem'] 
slug: /tools/sdk/python/data-access-security/models/applicationitem
tags: ['SDK', 'Software Development Kit', 'Applicationitem', 'Applicationitem']
---

# Applicationitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier of the application. | [optional] 
**name** | **str** | The display name of the application. | [optional] 
**description** | **str** | A brief description of the application and its purpose. | [optional] 
**type** | **str** | The type of the application. | [optional] 
**tags** | [**[]Tag**](tag) | A list of tags associated with the application. | [optional] 
**test_connection_status** | **str** | The status of the last connection test performed on the application. | [optional] 
**test_connection_date** | **int** | The timestamp of the last connection test performed on the application, in milliseconds since epoch. | [optional] 
**rc_cluster_id** | **str** | The identifier of the cluster used for crawling resources. | [optional] 
**dc_cluster_id** | **str** | The identifier of the cluster used for data classification. | [optional] 
**pc_cluster_id** | **str** | The identifier of the cluster used for permission collection. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.applicationitem import Applicationitem

applicationitem = Applicationitem(
id=12345,
name='HR File Server',
description='Stores HR documents and employee records.',
type='OneDriveForBusiness',
tags=[{"id":101,"name":"Confidential"}],
test_connection_status='Success',
test_connection_date=1700000000000,
rc_cluster_id='459B5ABB-47BE-4069-8DB1-D6A8BE3F4D47',
dc_cluster_id='B28B4B37-9E47-426B-BAFD-A1FF048B4DAC',
pc_cluster_id='E1304AA9-D8FA-4574-A5CD-B59A6D8CB918'
)

```
[[Back to top]](#) 

