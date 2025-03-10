---
id: v2024-entitlement-document-all-of-manually-updated-fields
title: EntitlementDocumentAllOfManuallyUpdatedFields
pagination_label: EntitlementDocumentAllOfManuallyUpdatedFields
sidebar_label: EntitlementDocumentAllOfManuallyUpdatedFields
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementDocumentAllOfManuallyUpdatedFields', 'V2024EntitlementDocumentAllOfManuallyUpdatedFields'] 
slug: /tools/sdk/python/v2024/models/entitlement-document-all-of-manually-updated-fields
tags: ['SDK', 'Software Development Kit', 'EntitlementDocumentAllOfManuallyUpdatedFields', 'V2024EntitlementDocumentAllOfManuallyUpdatedFields']
---

# EntitlementDocumentAllOfManuallyUpdatedFields

Indicates whether the entitlement's display name and/or description have been manually updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **bool** |  | [optional] [default to False]
**display_name** | **bool** |  | [optional] [default to False]
}

## Example

```python
from sailpoint.v2024.models.entitlement_document_all_of_manually_updated_fields import EntitlementDocumentAllOfManuallyUpdatedFields

entitlement_document_all_of_manually_updated_fields = EntitlementDocumentAllOfManuallyUpdatedFields(
description=False,
display_name=False
)

```
[[Back to top]](#) 

