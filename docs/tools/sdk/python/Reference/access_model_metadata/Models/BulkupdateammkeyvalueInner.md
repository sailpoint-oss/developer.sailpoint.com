---
id: bulkupdateammkeyvalue-inner
title: BulkupdateammkeyvalueInner
pagination_label: BulkupdateammkeyvalueInner
sidebar_label: BulkupdateammkeyvalueInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkupdateammkeyvalueInner', 'BulkupdateammkeyvalueInner'] 
slug: /tools/sdk/python/access-model-metadata/models/bulkupdateammkeyvalue-inner
tags: ['SDK', 'Software Development Kit', 'BulkupdateammkeyvalueInner', 'BulkupdateammkeyvalueInner']
---

# BulkupdateammkeyvalueInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | the key of metadata attribute | [required]
**values** | **[]str** | the values of attribute to be updated | [required]
}

## Example

```python
from sailpoint.access_model_metadata.models.bulkupdateammkeyvalue_inner import BulkupdateammkeyvalueInner

bulkupdateammkeyvalue_inner = BulkupdateammkeyvalueInner(
attribute='iscFederalClassifications',
values=["secret"]
)

```
[[Back to top]](#) 

