---
id: accessprofilesourceref
title: Accessprofilesourceref
pagination_label: Accessprofilesourceref
sidebar_label: Accessprofilesourceref
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessprofilesourceref', 'Accessprofilesourceref'] 
slug: /tools/sdk/python/dimensions/models/accessprofilesourceref
tags: ['SDK', 'Software Development Kit', 'Accessprofilesourceref', 'Accessprofilesourceref']
---

# Accessprofilesourceref


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the source the access profile is associated with. | [optional] 
**type** |  **Enum** [  'SOURCE' ] | Source's DTO type. | [optional] 
**name** | **str** | Source name. | [optional] 
}

## Example

```python
from sailpoint.dimensions.models.accessprofilesourceref import Accessprofilesourceref

accessprofilesourceref = Accessprofilesourceref(
id='2c91809773dee3610173fdb0b6061ef4',
type='SOURCE',
name='ODS-AD-SOURCE'
)

```
[[Back to top]](#) 

