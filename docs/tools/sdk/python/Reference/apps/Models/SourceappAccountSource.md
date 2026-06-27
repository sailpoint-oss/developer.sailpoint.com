---
id: sourceapp-account-source
title: SourceappAccountSource
pagination_label: SourceappAccountSource
sidebar_label: SourceappAccountSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceappAccountSource', 'SourceappAccountSource'] 
slug: /tools/sdk/python/apps/models/sourceapp-account-source
tags: ['SDK', 'Software Development Kit', 'SourceappAccountSource', 'SourceappAccountSource']
---

# SourceappAccountSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source ID | [optional] 
**type** | **str** | The source type, will always be \"SOURCE\" | [optional] 
**name** | **str** | The source name | [optional] 
**use_for_password_management** | **bool** | If the source is used for password management | [optional] [default to False]
**password_policies** | [**[]Basereferencedto**](basereferencedto) | The password policies for the source | [optional] 
}

## Example

```python
from sailpoint.apps.models.sourceapp_account_source import SourceappAccountSource

sourceapp_account_source = SourceappAccountSource(
id='2c9180827ca885d7017ca8ce28a000eb',
type='SOURCE',
name='ODS-AD-Source',
use_for_password_management=False,
password_policies=[{"type":"PASSWORD_POLICY","id":"006a072ecc6647f68bba9f4a4ad34649","name":"Password Policy 1"}]
)

```
[[Back to top]](#) 

