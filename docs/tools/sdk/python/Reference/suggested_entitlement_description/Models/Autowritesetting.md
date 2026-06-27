---
id: autowritesetting
title: Autowritesetting
pagination_label: Autowritesetting
sidebar_label: Autowritesetting
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Autowritesetting', 'Autowritesetting'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/autowritesetting
tags: ['SDK', 'Software Development Kit', 'Autowritesetting', 'Autowritesetting']
---

# Autowritesetting

Auto-Write Setting for SED

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether auto-write is currently enabled for the tenant | [optional] [default to False]
**included_source_ids** | **[]str** | Source IDs in the allowlist. Empty array means not in allowlist mode. | [optional] 
**excluded_source_ids** | **[]str** | Source IDs to exclude from auto-write. Always applied. | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.autowritesetting import Autowritesetting

autowritesetting = Autowritesetting(
enabled=True,
included_source_ids=["2c91808a7813090a017814552e526349","2c91808a7813090a017814552e52634a"],
excluded_source_ids=["2c91808a7813090a017814552e526350"]
)

```
[[Back to top]](#) 

