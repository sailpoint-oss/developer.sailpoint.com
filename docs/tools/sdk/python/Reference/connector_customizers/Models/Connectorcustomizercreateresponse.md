---
id: connectorcustomizercreateresponse
title: Connectorcustomizercreateresponse
pagination_label: Connectorcustomizercreateresponse
sidebar_label: Connectorcustomizercreateresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connectorcustomizercreateresponse', 'Connectorcustomizercreateresponse'] 
slug: /tools/sdk/python/connector-customizers/models/connectorcustomizercreateresponse
tags: ['SDK', 'Software Development Kit', 'Connectorcustomizercreateresponse', 'Connectorcustomizercreateresponse']
---

# Connectorcustomizercreateresponse

ConnectorCustomizerResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the ID of connector customizer. | [optional] 
**name** | **str** | name of the connector customizer. | [optional] 
**tenant_id** | **str** | Connector customizer tenant id. | [optional] 
**created** | **datetime** | Date-time when the connector customizer was created. | [optional] 
}

## Example

```python
from sailpoint.connector_customizers.models.connectorcustomizercreateresponse import Connectorcustomizercreateresponse

connectorcustomizercreateresponse = Connectorcustomizercreateresponse(
id='b07dc46a-1498-4de8-bfbb-259a68e70c8a',
name='connector-customizer-name',
tenant_id='2c91808568c529c60168cca6f90c1324',
created=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f')
)

```
[[Back to top]](#) 

