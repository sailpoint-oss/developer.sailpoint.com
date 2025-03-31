---
id: beta-entitlement-manually-updated-fields
title: EntitlementManuallyUpdatedFields
pagination_label: EntitlementManuallyUpdatedFields
sidebar_label: EntitlementManuallyUpdatedFields
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementManuallyUpdatedFields', 'BetaEntitlementManuallyUpdatedFields'] 
slug: /tools/sdk/python/beta/models/entitlement-manually-updated-fields
tags: ['SDK', 'Software Development Kit', 'EntitlementManuallyUpdatedFields', 'BetaEntitlementManuallyUpdatedFields']
---

# EntitlementManuallyUpdatedFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **bool** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `name` property. | [optional] [default to False]
**description** | **bool** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `description` property. | [optional] [default to False]
}

## Example

```python
from sailpoint.beta.models.entitlement_manually_updated_fields import EntitlementManuallyUpdatedFields

entitlement_manually_updated_fields = EntitlementManuallyUpdatedFields(
display_name=True,
description=True
)

```
[[Back to top]](#) 

