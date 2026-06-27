---
id: formelementdynamicdatasourceconfig
title: Formelementdynamicdatasourceconfig
pagination_label: Formelementdynamicdatasourceconfig
sidebar_label: Formelementdynamicdatasourceconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formelementdynamicdatasourceconfig', 'Formelementdynamicdatasourceconfig'] 
slug: /tools/sdk/python/custom-forms/models/formelementdynamicdatasourceconfig
tags: ['SDK', 'Software Development Kit', 'Formelementdynamicdatasourceconfig', 'Formelementdynamicdatasourceconfig']
---

# Formelementdynamicdatasourceconfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_bucket_field** | **str** | AggregationBucketField is the aggregation bucket field name | [optional] 
**indices** | **[]str** | Indices is a list of indices to use | [optional] 
**object_type** |  **Enum** [  'IDENTITY',    'ACCESS_PROFILE',    'SOURCES',    'ROLE',    'ENTITLEMENT' ] | ObjectType is a PreDefinedSelectOption value IDENTITY PreDefinedSelectOptionIdentity ACCESS_PROFILE PreDefinedSelectOptionAccessProfile SOURCES PreDefinedSelectOptionSources ROLE PreDefinedSelectOptionRole ENTITLEMENT PreDefinedSelectOptionEntitlement | [optional] 
**query** | **str** | Query is a text | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formelementdynamicdatasourceconfig import Formelementdynamicdatasourceconfig

formelementdynamicdatasourceconfig = Formelementdynamicdatasourceconfig(
aggregation_bucket_field='attributes.cloudStatus.exact',
indices=["identities"],
object_type='IDENTITY',
query='*'
)

```
[[Back to top]](#) 

