---
id: v2024-entitlement1-manually-updated-fields
title: Entitlement1ManuallyUpdatedFields
pagination_label: Entitlement1ManuallyUpdatedFields
sidebar_label: Entitlement1ManuallyUpdatedFields
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlement1ManuallyUpdatedFields', 'V2024Entitlement1ManuallyUpdatedFields'] 
slug: /tools/sdk/python/v2024/models/entitlement1-manually-updated-fields
tags: ['SDK', 'Software Development Kit', 'Entitlement1ManuallyUpdatedFields', 'V2024Entitlement1ManuallyUpdatedFields']
---

# Entitlement1ManuallyUpdatedFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **bool** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `name` property. | [optional] [default to False]
**description** | **bool** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `description` property. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2024.models.entitlement1_manually_updated_fields import Entitlement1ManuallyUpdatedFields

entitlement1_manually_updated_fields = Entitlement1ManuallyUpdatedFields(
display_name=True,
description=True
)

```
[[Back to top]](#) 

