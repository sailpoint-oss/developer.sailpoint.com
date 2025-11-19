---
id: v2025-entitlement-attribute-bulk-update-filter-request
title: EntitlementAttributeBulkUpdateFilterRequest
pagination_label: EntitlementAttributeBulkUpdateFilterRequest
sidebar_label: EntitlementAttributeBulkUpdateFilterRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementAttributeBulkUpdateFilterRequest', 'V2025EntitlementAttributeBulkUpdateFilterRequest'] 
slug: /tools/sdk/python/v2025/models/entitlement-attribute-bulk-update-filter-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateFilterRequest', 'V2025EntitlementAttributeBulkUpdateFilterRequest']
---

# EntitlementAttributeBulkUpdateFilterRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] 
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute and values. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.entitlement_attribute_bulk_update_filter_request import EntitlementAttributeBulkUpdateFilterRequest

entitlement_attribute_bulk_update_filter_request = EntitlementAttributeBulkUpdateFilterRequest(
filters='id eq 2c9180867817ac4d017817c491119a20',
operation='add',
replace_scope='attribute',
values=[{attribute=iscFederalClassifications, values=[topSecret]}]
)

```
[[Back to top]](#) 

