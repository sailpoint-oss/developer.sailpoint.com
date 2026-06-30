---
id: put-connector-source-template-v1-request
title: PutConnectorSourceTemplateV1Request
pagination_label: PutConnectorSourceTemplateV1Request
sidebar_label: PutConnectorSourceTemplateV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PutConnectorSourceTemplateV1Request', 'PutConnectorSourceTemplateV1Request'] 
slug: /tools/sdk/python/connectors/models/put-connector-source-template-v1-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorSourceTemplateV1Request', 'PutConnectorSourceTemplateV1Request']
---

# PutConnectorSourceTemplateV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | connector source template xml file | [required]
}

## Example

```python
from sailpoint.connectors.models.put_connector_source_template_v1_request import PutConnectorSourceTemplateV1Request

put_connector_source_template_v1_request = PutConnectorSourceTemplateV1Request(
file=bytes(b'blah')
)

```
[[Back to top]](#) 

