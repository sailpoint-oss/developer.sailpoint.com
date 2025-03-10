---
id: beta-import-entitlements-by-source-request
title: ImportEntitlementsBySourceRequest
pagination_label: ImportEntitlementsBySourceRequest
sidebar_label: ImportEntitlementsBySourceRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportEntitlementsBySourceRequest', 'BetaImportEntitlementsBySourceRequest'] 
slug: /tools/sdk/python/beta/models/import-entitlements-by-source-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsBySourceRequest', 'BetaImportEntitlementsBySourceRequest']
---

# ImportEntitlementsBySourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csv_file** | **bytearray** | The CSV file containing the source entitlements to aggregate. | [optional] 
}

## Example

```python
from sailpoint.beta.models.import_entitlements_by_source_request import ImportEntitlementsBySourceRequest

import_entitlements_by_source_request = ImportEntitlementsBySourceRequest(
csv_file=bytes(b'blah')
)

```
[[Back to top]](#) 

