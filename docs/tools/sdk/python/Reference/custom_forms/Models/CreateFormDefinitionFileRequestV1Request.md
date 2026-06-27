---
id: create-form-definition-file-request-v1-request
title: CreateFormDefinitionFileRequestV1Request
pagination_label: CreateFormDefinitionFileRequestV1Request
sidebar_label: CreateFormDefinitionFileRequestV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateFormDefinitionFileRequestV1Request', 'CreateFormDefinitionFileRequestV1Request'] 
slug: /tools/sdk/python/custom-forms/models/create-form-definition-file-request-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionFileRequestV1Request', 'CreateFormDefinitionFileRequestV1Request']
---

# CreateFormDefinitionFileRequestV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | File specifying the multipart | [required]
}

## Example

```python
from sailpoint.custom_forms.models.create_form_definition_file_request_v1_request import CreateFormDefinitionFileRequestV1Request

create_form_definition_file_request_v1_request = CreateFormDefinitionFileRequestV1Request(
file=bytes(b'blah')
)

```
[[Back to top]](#) 

