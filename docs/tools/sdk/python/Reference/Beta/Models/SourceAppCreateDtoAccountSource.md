---
id: beta-source-app-create-dto-account-source
title: SourceAppCreateDtoAccountSource
pagination_label: SourceAppCreateDtoAccountSource
sidebar_label: SourceAppCreateDtoAccountSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceAppCreateDtoAccountSource', 'BetaSourceAppCreateDtoAccountSource'] 
slug: /tools/sdk/python/beta/models/source-app-create-dto-account-source
tags: ['SDK', 'Software Development Kit', 'SourceAppCreateDtoAccountSource', 'BetaSourceAppCreateDtoAccountSource']
---

# SourceAppCreateDtoAccountSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source ID | [required]
**type** | **str** | The source type, will always be \"SOURCE\" | [optional] 
**name** | **str** | The source name | [optional] 
}

## Example

```python
from sailpoint.beta.models.source_app_create_dto_account_source import SourceAppCreateDtoAccountSource

source_app_create_dto_account_source = SourceAppCreateDtoAccountSource(
id='2c9180827ca885d7017ca8ce28a000eb',
type='SOURCE',
name='ODS-AD-Source'
)

```
[[Back to top]](#) 

