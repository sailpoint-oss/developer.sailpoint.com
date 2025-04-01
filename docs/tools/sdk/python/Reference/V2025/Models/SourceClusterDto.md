---
id: v2025-source-cluster-dto
title: SourceClusterDto
pagination_label: SourceClusterDto
sidebar_label: SourceClusterDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceClusterDto', 'V2025SourceClusterDto'] 
slug: /tools/sdk/python/v2025/models/source-cluster-dto
tags: ['SDK', 'Software Development Kit', 'SourceClusterDto', 'V2025SourceClusterDto']
---

# SourceClusterDto

Source cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CLUSTER' ] | Source cluster DTO type. | [optional] 
**id** | **str** | Source cluster ID. | [optional] 
**name** | **str** | Source cluster display name. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.source_cluster_dto import SourceClusterDto

source_cluster_dto = SourceClusterDto(
type='CLUSTER',
id='2c9180847a7fccdd017aa5896f9f4f6f',
name='Training VA'
)

```
[[Back to top]](#) 

