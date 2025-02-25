---
id: v2024-put-connector-source-template-request
title: PutConnectorSourceTemplateRequest
pagination_label: PutConnectorSourceTemplateRequest
sidebar_label: PutConnectorSourceTemplateRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PutConnectorSourceTemplateRequest', 'V2024PutConnectorSourceTemplateRequest'] 
slug: /tools/sdk/python/v2024/models/put-connector-source-template-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorSourceTemplateRequest', 'V2024PutConnectorSourceTemplateRequest']
---

# PutConnectorSourceTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | connector source template xml file | [required]
}

## Example

```python
from sailpoint.v2024.models.put_connector_source_template_request import PutConnectorSourceTemplateRequest

put_connector_source_template_request = PutConnectorSourceTemplateRequest(
file=bytes(b'blah')
)

```
[[Back to top]](#) 

