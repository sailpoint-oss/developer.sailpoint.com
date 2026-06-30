---
id: put-connector-correlation-config-v1-request
title: PutConnectorCorrelationConfigV1Request
pagination_label: PutConnectorCorrelationConfigV1Request
sidebar_label: PutConnectorCorrelationConfigV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PutConnectorCorrelationConfigV1Request', 'PutConnectorCorrelationConfigV1Request'] 
slug: /tools/sdk/python/connectors/models/put-connector-correlation-config-v1-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorCorrelationConfigV1Request', 'PutConnectorCorrelationConfigV1Request']
---

# PutConnectorCorrelationConfigV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | connector correlation config xml file | [required]
}

## Example

```python
from sailpoint.connectors.models.put_connector_correlation_config_v1_request import PutConnectorCorrelationConfigV1Request

put_connector_correlation_config_v1_request = PutConnectorCorrelationConfigV1Request(
file=bytes(b'blah')
)

```
[[Back to top]](#) 

