---
id: taggedobjectdto
title: Taggedobjectdto
pagination_label: Taggedobjectdto
sidebar_label: Taggedobjectdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Taggedobjectdto', 'Taggedobjectdto'] 
slug: /tools/sdk/python/identities/models/taggedobjectdto
tags: ['SDK', 'Software Development Kit', 'Taggedobjectdto', 'Taggedobjectdto']
---

# Taggedobjectdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'APPLICATION',    'CAMPAIGN',    'ENTITLEMENT',    'IDENTITY',    'ROLE',    'SOD_POLICY',    'SOURCE' ] | DTO type | [optional] 
**id** | **str** | ID of the object this reference applies to | [optional] 
**name** | **str** | Human-readable display name of the object this reference applies to | [optional] 
}

## Example

```python
from sailpoint.identities.models.taggedobjectdto import Taggedobjectdto

taggedobjectdto = Taggedobjectdto(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

