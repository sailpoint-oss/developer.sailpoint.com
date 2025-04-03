---
id: v2024-source-app-account-source
title: SourceAppAccountSource
pagination_label: SourceAppAccountSource
sidebar_label: SourceAppAccountSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceAppAccountSource', 'V2024SourceAppAccountSource'] 
slug: /tools/sdk/python/v2024/models/source-app-account-source
tags: ['SDK', 'Software Development Kit', 'SourceAppAccountSource', 'V2024SourceAppAccountSource']
---

# SourceAppAccountSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source ID | [optional] 
**type** | **str** | The source type, will always be \"SOURCE\" | [optional] 
**name** | **str** | The source name | [optional] 
**use_for_password_management** | **bool** | If the source is used for password management | [optional] [default to False]
**password_policies** | [**[]BaseReferenceDto**](base-reference-dto) | The password policies for the source | [optional] 
}

## Example

```python
from sailpoint.v2024.models.source_app_account_source import SourceAppAccountSource

source_app_account_source = SourceAppAccountSource(
id='2c9180827ca885d7017ca8ce28a000eb',
type='SOURCE',
name='ODS-AD-Source',
use_for_password_management=False,
password_policies=[{type=PASSWORD_POLICY, id=006a072ecc6647f68bba9f4a4ad34649, name=Password Policy 1}]
)

```
[[Back to top]](#) 

