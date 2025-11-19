---
id: beta-entitlement-source-reset-base-reference-dto
title: EntitlementSourceResetBaseReferenceDto
pagination_label: EntitlementSourceResetBaseReferenceDto
sidebar_label: EntitlementSourceResetBaseReferenceDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementSourceResetBaseReferenceDto', 'BetaEntitlementSourceResetBaseReferenceDto'] 
slug: /tools/sdk/python/beta/models/entitlement-source-reset-base-reference-dto
tags: ['SDK', 'Software Development Kit', 'EntitlementSourceResetBaseReferenceDto', 'BetaEntitlementSourceResetBaseReferenceDto']
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
from sailpoint.beta.models.entitlement_source_reset_base_reference_dto import EntitlementSourceResetBaseReferenceDto

entitlement_source_reset_base_reference_dto = EntitlementSourceResetBaseReferenceDto(
type='TASK_RESULT',
id='2c91808568c529c60168cca6f90c1313',
name='Entitlement Source Reset'
)

```
[[Back to top]](#) 

