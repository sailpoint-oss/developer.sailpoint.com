---
id: v2024-connector-customizer-update-response
title: ConnectorCustomizerUpdateResponse
pagination_label: ConnectorCustomizerUpdateResponse
sidebar_label: ConnectorCustomizerUpdateResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorCustomizerUpdateResponse', 'V2024ConnectorCustomizerUpdateResponse'] 
slug: /tools/sdk/python/v2024/models/connector-customizer-update-response
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerUpdateResponse', 'V2024ConnectorCustomizerUpdateResponse']
---

# ConnectorCustomizerUpdateResponse

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
from sailpoint.v2024.models.connector_customizer_update_response import ConnectorCustomizerUpdateResponse

connector_customizer_update_response = ConnectorCustomizerUpdateResponse(
id='b07dc46a-1498-4de8-bfbb-259a68e70c8a',
name='connector-customizer-name',
tenant_id='2c91808568c529c60168cca6f90c1324',
created=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
image_version=1,
image_id='2c91808568c529c60168cca6f90c1324'
)

```
[[Back to top]](#) 

