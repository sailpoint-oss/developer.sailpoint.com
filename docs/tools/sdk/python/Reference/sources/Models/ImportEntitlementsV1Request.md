---
id: import-entitlements-v1-request
title: ImportEntitlementsV1Request
pagination_label: ImportEntitlementsV1Request
sidebar_label: ImportEntitlementsV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportEntitlementsV1Request', 'ImportEntitlementsV1Request'] 
slug: /tools/sdk/python/sources/models/import-entitlements-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsV1Request', 'ImportEntitlementsV1Request']
---

# ImportEntitlementsV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | The CSV file containing the source entitlements to aggregate. | [optional] 
}

## Example

```python
from sailpoint.sources.models.import_entitlements_v1_request import ImportEntitlementsV1Request

import_entitlements_v1_request = ImportEntitlementsV1Request(
file=bytes(b'blah')
)

```
[[Back to top]](#) 

