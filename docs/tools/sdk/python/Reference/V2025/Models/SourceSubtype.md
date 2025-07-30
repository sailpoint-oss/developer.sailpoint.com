---
id: v2025-source-subtype
title: SourceSubtype
pagination_label: SourceSubtype
sidebar_label: SourceSubtype
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceSubtype', 'V2025SourceSubtype'] 
slug: /tools/sdk/python/v2025/models/source-subtype
tags: ['SDK', 'Software Development Kit', 'SourceSubtype', 'V2025SourceSubtype']
---

# SourceSubtype


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the subtype. | [optional] 
**source_id** | **str** | The ID of the source. | [optional] [readonly] 
**technical_name** | **str** | Technical name of the subtype. | [required]
**display_name** | **str** | Display name of the subtype. | [required]
**description** | **str** | Description of the subtype. | [required]
**created** | **datetime** | Creation timestamp. | [optional] 
**modified** | **datetime** | Last modified timestamp. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.source_subtype import SourceSubtype

source_subtype = SourceSubtype(
id='43bdd144-4b17-4fce-a744-17c7fd3e717b',
source_id='',
technical_name='foo',
display_name='Mr Foo',
description='fighters',
created='2025-07-28T16:13:42.801300Z',
modified='2025-07-28T16:13:42.750850Z'
)

```
[[Back to top]](#) 

