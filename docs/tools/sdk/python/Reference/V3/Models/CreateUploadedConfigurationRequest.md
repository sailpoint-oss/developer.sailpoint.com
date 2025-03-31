---
id: create-uploaded-configuration-request
title: CreateUploadedConfigurationRequest
pagination_label: CreateUploadedConfigurationRequest
sidebar_label: CreateUploadedConfigurationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateUploadedConfigurationRequest', 'CreateUploadedConfigurationRequest'] 
slug: /tools/sdk/python/v3/models/create-uploaded-configuration-request
tags: ['SDK', 'Software Development Kit', 'CreateUploadedConfigurationRequest', 'CreateUploadedConfigurationRequest']
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
from sailpoint.v3.models.create_uploaded_configuration_request import CreateUploadedConfigurationRequest

create_uploaded_configuration_request = CreateUploadedConfigurationRequest(
data=bytes(b'blah'),
name=''
)

```
[[Back to top]](#) 

