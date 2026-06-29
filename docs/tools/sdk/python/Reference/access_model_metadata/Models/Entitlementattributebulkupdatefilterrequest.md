---
id: entitlementattributebulkupdatefilterrequest
title: Entitlementattributebulkupdatefilterrequest
pagination_label: Entitlementattributebulkupdatefilterrequest
sidebar_label: Entitlementattributebulkupdatefilterrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementattributebulkupdatefilterrequest', 'Entitlementattributebulkupdatefilterrequest'] 
slug: /tools/sdk/python/access-model-metadata/models/entitlementattributebulkupdatefilterrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementattributebulkupdatefilterrequest', 'Entitlementattributebulkupdatefilterrequest']
---

# Entitlementattributebulkupdatefilterrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] 
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]BulkupdateammkeyvalueInner**](bulkupdateammkeyvalue-inner) | The metadata to be updated, including attribute and values. | [optional] 
}

## Example

```python
from sailpoint.access_model_metadata.models.entitlementattributebulkupdatefilterrequest import Entitlementattributebulkupdatefilterrequest

entitlementattributebulkupdatefilterrequest = Entitlementattributebulkupdatefilterrequest(
filters='id eq 2c9180867817ac4d017817c491119a20',
operation='add',
replace_scope='attribute',
values=[{"attribute":"iscFederalClassifications","values":["topSecret"]}]
)

```
[[Back to top]](#) 

