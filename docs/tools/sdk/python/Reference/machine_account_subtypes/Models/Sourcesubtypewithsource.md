---
id: sourcesubtypewithsource
title: Sourcesubtypewithsource
pagination_label: Sourcesubtypewithsource
sidebar_label: Sourcesubtypewithsource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourcesubtypewithsource', 'Sourcesubtypewithsource'] 
slug: /tools/sdk/python/machine-account-subtypes/models/sourcesubtypewithsource
tags: ['SDK', 'Software Development Kit', 'Sourcesubtypewithsource', 'Sourcesubtypewithsource']
---

# Sourcesubtypewithsource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the subtype. | [optional] 
**source_id** | **str** | The ID of the source. | [optional] [readonly] 
**technical_name** | **str** | Technical name of the subtype. | [optional] 
**display_name** | **str** | Display name of the subtype. | [optional] 
**description** | **str** | Description of the subtype. | [optional] 
**created** | **datetime** | Creation timestamp. | [optional] 
**modified** | **datetime** | Last modified timestamp. | [optional] 
**type** | **str** | Type of the subtype. Either MACHINE OR null. | [optional] 
**source** | [**SourcesubtypewithsourceSource**](sourcesubtypewithsource-source) |  | [optional] 
**system_managed** | **bool** | Indicates if the subtype is managed by the system. | [optional] [default to False]
}

## Example

```python
from sailpoint.machine_account_subtypes.models.sourcesubtypewithsource import Sourcesubtypewithsource

sourcesubtypewithsource = Sourcesubtypewithsource(
id='38453251-6be2-5f8f-df93-5ce19e295838',
source_id='',
technical_name='foo',
display_name='Mr Foo',
description='fighters',
created='2025-07-28T16:13:42.801300Z',
modified='2025-07-28T16:13:42.750850Z',
type='MACHINE',
source=sailpoint.machine_account_subtypes.models.sourcesubtypewithsource_source.sourcesubtypewithsource_source(
                    type = 'SOURCE', 
                    id = '6d0458373bec4b4b80460992b76016da', 
                    name = 'Test Source', ),
system_managed=True
)

```
[[Back to top]](#) 

