---
id: connectorcustomizerupdateresponse
title: Connectorcustomizerupdateresponse
pagination_label: Connectorcustomizerupdateresponse
sidebar_label: Connectorcustomizerupdateresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connectorcustomizerupdateresponse', 'Connectorcustomizerupdateresponse'] 
slug: /tools/sdk/python/connector-customizers/models/connectorcustomizerupdateresponse
tags: ['SDK', 'Software Development Kit', 'Connectorcustomizerupdateresponse', 'Connectorcustomizerupdateresponse']
---

# Connectorcustomizerupdateresponse

ConnectorCustomizerUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the ID of connector customizer. | [optional] 
**name** | **str** | name of the connector customizer. | [optional] 
**tenant_id** | **str** | Connector customizer tenant id. | [optional] 
**created** | **datetime** | Date-time when the connector customizer was created. | [optional] 
**image_version** | **int** | Connector customizer image version. | [optional] 
**image_id** | **str** | Connector customizer image id. | [optional] 
}

## Example

```python
from sailpoint.connector_customizers.models.connectorcustomizerupdateresponse import Connectorcustomizerupdateresponse

connectorcustomizerupdateresponse = Connectorcustomizerupdateresponse(
id='b07dc46a-1498-4de8-bfbb-259a68e70c8a',
name='connector-customizer-name',
tenant_id='2c91808568c529c60168cca6f90c1324',
created=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
image_version=1,
image_id='2c91808568c529c60168cca6f90c1324'
)

```
[[Back to top]](#) 

