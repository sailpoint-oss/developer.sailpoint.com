---
id: create-uploaded-configuration-v1-request
title: CreateUploadedConfigurationV1Request
pagination_label: CreateUploadedConfigurationV1Request
sidebar_label: CreateUploadedConfigurationV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateUploadedConfigurationV1Request', 'CreateUploadedConfigurationV1Request'] 
slug: /tools/sdk/python/configuration-hub/models/create-uploaded-configuration-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateUploadedConfigurationV1Request', 'CreateUploadedConfigurationV1Request']
---

# CreateUploadedConfigurationV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | JSON file containing the objects to be imported. | [required]
**name** | **str** | Name that will be assigned to the uploaded configuration file. | [required]
}

## Example

```python
from sailpoint.configuration_hub.models.create_uploaded_configuration_v1_request import CreateUploadedConfigurationV1Request

create_uploaded_configuration_v1_request = CreateUploadedConfigurationV1Request(
data=bytes(b'blah'),
name=''
)

```
[[Back to top]](#) 

