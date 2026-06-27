---
id: outlierscontributingfeatureaccessitems
title: Outlierscontributingfeatureaccessitems
pagination_label: Outlierscontributingfeatureaccessitems
sidebar_label: Outlierscontributingfeatureaccessitems
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Outlierscontributingfeatureaccessitems', 'Outlierscontributingfeatureaccessitems'] 
slug: /tools/sdk/python/iai-outliers/models/outlierscontributingfeatureaccessitems
tags: ['SDK', 'Software Development Kit', 'Outlierscontributingfeatureaccessitems', 'Outlierscontributingfeatureaccessitems']
---

# Outlierscontributingfeatureaccessitems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the access item | [optional] 
**display_name** | **str** | the display name of the access item | [optional] 
**description** | **str** | Description of the access item. | [optional] 
**access_type** |  **Enum** [  'ENTITLEMENT',    'ACCESS_PROFILE',    'ROLE' ] | The type of the access item. | [optional] 
**source_name** | **str** | the associated source name if it exists | [optional] 
**extremely_rare** | **bool** | rarest access | [optional] [default to False]
}

## Example

```python
from sailpoint.iai_outliers.models.outlierscontributingfeatureaccessitems import Outlierscontributingfeatureaccessitems

outlierscontributingfeatureaccessitems = Outlierscontributingfeatureaccessitems(
id='2c938083633d259901633d2623ec0375',
display_name='Applied Research Access',
description='Access to research information, lab results, and schematics',
access_type='ENTITLEMENT',
source_name='appName',
extremely_rare=True
)

```
[[Back to top]](#) 

