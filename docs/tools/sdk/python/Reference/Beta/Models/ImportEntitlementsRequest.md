---
id: beta-import-entitlements-request
title: ImportEntitlementsRequest
pagination_label: ImportEntitlementsRequest
sidebar_label: ImportEntitlementsRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportEntitlementsRequest', 'BetaImportEntitlementsRequest'] 
slug: /tools/sdk/python/beta/models/import-entitlements-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsRequest', 'BetaImportEntitlementsRequest']
---

# ImportEntitlementsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | The CSV file containing the source entitlements to aggregate. | [optional] 
}

## Example

```python
from sailpoint.beta.models.import_entitlements_request import ImportEntitlementsRequest

import_entitlements_request = ImportEntitlementsRequest(
file=bytes(b'blah')
)

```
[[Back to top]](#) 

