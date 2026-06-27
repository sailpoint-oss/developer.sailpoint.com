---
id: entitlementattributebulkupdateidsrequest
title: Entitlementattributebulkupdateidsrequest
pagination_label: Entitlementattributebulkupdateidsrequest
sidebar_label: Entitlementattributebulkupdateidsrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementattributebulkupdateidsrequest', 'Entitlementattributebulkupdateidsrequest'] 
slug: /tools/sdk/python/access-model-metadata/models/entitlementattributebulkupdateidsrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementattributebulkupdateidsrequest', 'Entitlementattributebulkupdateidsrequest']
---

# Entitlementattributebulkupdateidsrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | **[]str** | List of entitlement IDs to update. | [optional] 
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]BulkupdateammkeyvalueInner**](bulkupdateammkeyvalue-inner) | The metadata to be updated, including attribute and values. | [optional] 
}

## Example

```python
from sailpoint.access_model_metadata.models.entitlementattributebulkupdateidsrequest import Entitlementattributebulkupdateidsrequest

entitlementattributebulkupdateidsrequest = Entitlementattributebulkupdateidsrequest(
entitlements=["2c9180867817ac4d017817c491119a20","2c9180867817ac4d017817c491119a21"],
operation='add',
replace_scope='attribute',
values=[{"attribute":"iscFederalClassifications","values":["topSecret"]}]
)

```
[[Back to top]](#) 

