---
id: put-connector-source-config-v1-request
title: PutConnectorSourceConfigV1Request
pagination_label: PutConnectorSourceConfigV1Request
sidebar_label: PutConnectorSourceConfigV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PutConnectorSourceConfigV1Request', 'PutConnectorSourceConfigV1Request'] 
slug: /tools/sdk/python/connectors/models/put-connector-source-config-v1-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorSourceConfigV1Request', 'PutConnectorSourceConfigV1Request']
---

# PutConnectorSourceConfigV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | connector source config xml file | [required]
}

## Example

```python
from sailpoint.connectors.models.put_connector_source_config_v1_request import PutConnectorSourceConfigV1Request

put_connector_source_config_v1_request = PutConnectorSourceConfigV1Request(
file=bytes(b'blah')
)

```
[[Back to top]](#) 

