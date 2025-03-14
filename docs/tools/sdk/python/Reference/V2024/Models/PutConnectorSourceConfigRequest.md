---
id: v2024-put-connector-source-config-request
title: PutConnectorSourceConfigRequest
pagination_label: PutConnectorSourceConfigRequest
sidebar_label: PutConnectorSourceConfigRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PutConnectorSourceConfigRequest', 'V2024PutConnectorSourceConfigRequest'] 
slug: /tools/sdk/python/v2024/models/put-connector-source-config-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorSourceConfigRequest', 'V2024PutConnectorSourceConfigRequest']
---

# PutConnectorSourceConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | connector source config xml file | [required]
}

## Example

```python
from sailpoint.v2024.models.put_connector_source_config_request import PutConnectorSourceConfigRequest

put_connector_source_config_request = PutConnectorSourceConfigRequest(
file=bytes(b'blah')
)

```
[[Back to top]](#) 

