---
id: configtype
title: Configtype
pagination_label: Configtype
sidebar_label: Configtype
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Configtype', 'Configtype'] 
slug: /tools/sdk/python/work-reassignment/models/configtype
tags: ['SDK', 'Software Development Kit', 'Configtype', 'Configtype']
---

# Configtype

Type of Reassignment Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **int** |  | [optional] 
**internal_name** | [**Configtypeenumcamel**](configtypeenumcamel) |  | [optional] 
**internal_name_camel** | [**Configtypeenum**](configtypeenum) |  | [optional] 
**display_name** | **str** | Human readable display name of the type to be shown on UI | [optional] 
**description** | **str** | Description of the type of work to be reassigned, displayed by the UI. | [optional] 
}

## Example

```python
from sailpoint.work_reassignment.models.configtype import Configtype

configtype = Configtype(
priority=1,
internal_name='accessRequests',
internal_name_camel='ACCESS_REQUESTS',
display_name='Access Requests',
description='Reassign Access Request Work Items for an identity'
)

```
[[Back to top]](#) 

