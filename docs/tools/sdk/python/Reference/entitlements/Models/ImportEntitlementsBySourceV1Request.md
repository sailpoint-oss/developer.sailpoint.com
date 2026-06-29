---
id: import-entitlements-by-source-v1-request
title: ImportEntitlementsBySourceV1Request
pagination_label: ImportEntitlementsBySourceV1Request
sidebar_label: ImportEntitlementsBySourceV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportEntitlementsBySourceV1Request', 'ImportEntitlementsBySourceV1Request'] 
slug: /tools/sdk/python/entitlements/models/import-entitlements-by-source-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsBySourceV1Request', 'ImportEntitlementsBySourceV1Request']
---

# ImportEntitlementsBySourceV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csv_file** | **bytearray** | The CSV file containing the source entitlements to aggregate. | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.import_entitlements_by_source_v1_request import ImportEntitlementsBySourceV1Request

import_entitlements_by_source_v1_request = ImportEntitlementsBySourceV1Request(
csv_file=bytes(b'blah')
)

```
[[Back to top]](#) 

