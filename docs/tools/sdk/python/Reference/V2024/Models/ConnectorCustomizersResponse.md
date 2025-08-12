---
id: v2024-connector-customizers-response
title: ConnectorCustomizersResponse
pagination_label: ConnectorCustomizersResponse
sidebar_label: ConnectorCustomizersResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorCustomizersResponse', 'V2024ConnectorCustomizersResponse'] 
slug: /tools/sdk/python/v2024/models/connector-customizers-response
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizersResponse', 'V2024ConnectorCustomizersResponse']
---

# ConnectorCustomizersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Connector customizer ID. | [optional] [readonly] 
**name** | **str** | Connector customizer name. | [optional] 
**image_version** | **int** | Connector customizer image version. | [optional] 
**image_id** | **str** | Connector customizer image id. | [optional] 
**tenant_id** | **str** | Connector customizer tenant id. | [optional] 
**created** | **datetime** | Date-time when the connector customizer was created | [optional] 
}

## Example

```python
from sailpoint.v2024.models.connector_customizers_response import ConnectorCustomizersResponse

connector_customizers_response = ConnectorCustomizersResponse(
id='b07dc46a-1498-4de8-bfbb-259a68e70c8a',
name='connector-customizer-name',
image_version=1,
image_id='2c91808568c529c60168cca6f90c1324',
tenant_id='2c91808568c529c60168cca6f90c1324',
created=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f')
)

```
[[Back to top]](#) 

