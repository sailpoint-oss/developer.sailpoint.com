---
id: sourceappcreatedto-account-source
title: SourceappcreatedtoAccountSource
pagination_label: SourceappcreatedtoAccountSource
sidebar_label: SourceappcreatedtoAccountSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceappcreatedtoAccountSource', 'SourceappcreatedtoAccountSource'] 
slug: /tools/sdk/python/apps/models/sourceappcreatedto-account-source
tags: ['SDK', 'Software Development Kit', 'SourceappcreatedtoAccountSource', 'SourceappcreatedtoAccountSource']
---

# SourceappcreatedtoAccountSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source ID | [required]
**type** | **str** | The source type, will always be \"SOURCE\" | [optional] 
**name** | **str** | The source name | [optional] 
}

## Example

```python
from sailpoint.apps.models.sourceappcreatedto_account_source import SourceappcreatedtoAccountSource

sourceappcreatedto_account_source = SourceappcreatedtoAccountSource(
id='2c9180827ca885d7017ca8ce28a000eb',
type='SOURCE',
name='ODS-AD-Source'
)

```
[[Back to top]](#) 

