---
id: v2025-entitlement-source-reset-base-reference-dto
title: EntitlementSourceResetBaseReferenceDto
pagination_label: EntitlementSourceResetBaseReferenceDto
sidebar_label: EntitlementSourceResetBaseReferenceDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementSourceResetBaseReferenceDto', 'V2025EntitlementSourceResetBaseReferenceDto'] 
slug: /tools/sdk/python/v2025/models/entitlement-source-reset-base-reference-dto
tags: ['SDK', 'Software Development Kit', 'EntitlementSourceResetBaseReferenceDto', 'V2025EntitlementSourceResetBaseReferenceDto']
---

# EntitlementSourceResetBaseReferenceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The DTO type | [optional] 
**id** | **str** | The task ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.v2025.models.entitlement_source_reset_base_reference_dto import EntitlementSourceResetBaseReferenceDto

entitlement_source_reset_base_reference_dto = EntitlementSourceResetBaseReferenceDto(
type='TASK_RESULT',
id='2c91808568c529c60168cca6f90c1313',
name='Entitlement Source Reset'
)

```
[[Back to top]](#) 

