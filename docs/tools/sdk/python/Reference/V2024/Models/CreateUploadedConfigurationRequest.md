---
id: v2024-create-uploaded-configuration-request
title: CreateUploadedConfigurationRequest
pagination_label: CreateUploadedConfigurationRequest
sidebar_label: CreateUploadedConfigurationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateUploadedConfigurationRequest', 'V2024CreateUploadedConfigurationRequest'] 
slug: /tools/sdk/python/v2024/models/create-uploaded-configuration-request
tags: ['SDK', 'Software Development Kit', 'CreateUploadedConfigurationRequest', 'V2024CreateUploadedConfigurationRequest']
---

# CreateUploadedConfigurationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | JSON file containing the objects to be imported. | [required]
**name** | **str** | Name that will be assigned to the uploaded configuration file. | [required]
}

## Example

```python
from sailpoint.v2024.models.create_uploaded_configuration_request import CreateUploadedConfigurationRequest

create_uploaded_configuration_request = CreateUploadedConfigurationRequest(
data=bytes(b'blah'),
name=''
)

```
[[Back to top]](#) 

