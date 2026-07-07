---
id: connectorcustomizerversioncreateresponse
title: Connectorcustomizerversioncreateresponse
pagination_label: Connectorcustomizerversioncreateresponse
sidebar_label: Connectorcustomizerversioncreateresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connectorcustomizerversioncreateresponse', 'Connectorcustomizerversioncreateresponse'] 
slug: /tools/sdk/python/connector-customizers/models/connectorcustomizerversioncreateresponse
tags: ['SDK', 'Software Development Kit', 'Connectorcustomizerversioncreateresponse', 'Connectorcustomizerversioncreateresponse']
---

# Connectorcustomizerversioncreateresponse

ConnectorCustomizerVersionCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customizer_id** | **str** | ID of connector customizer. | [optional] 
**image_id** | **str** | ImageID of the connector customizer. | [optional] 
**version** | **int** | Image version of the connector customizer. | [optional] 
**created** | **datetime** | Date-time when the connector customizer version was created. | [optional] 
}

## Example

```python
from sailpoint.connector_customizers.models.connectorcustomizerversioncreateresponse import Connectorcustomizerversioncreateresponse

connectorcustomizerversioncreateresponse = Connectorcustomizerversioncreateresponse(
customizer_id='b07dc46a-1498-4de8-bfbb-259a68e70c8a',
image_id='2c91808568c529c60168cca6f90c1324',
version=1,
created='2022-02-08T14:50:03.827Z'
)

```
[[Back to top]](#) 

