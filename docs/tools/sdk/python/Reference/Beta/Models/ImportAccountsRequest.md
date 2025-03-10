---
id: beta-import-accounts-request
title: ImportAccountsRequest
pagination_label: ImportAccountsRequest
sidebar_label: ImportAccountsRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportAccountsRequest', 'BetaImportAccountsRequest'] 
slug: /tools/sdk/python/beta/models/import-accounts-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsRequest', 'BetaImportAccountsRequest']
---

# ImportAccountsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | The CSV file containing the source accounts to aggregate. | [optional] 
**disable_optimization** |  **Enum** [  'true',    'false' ] | Use this flag to reprocess every account whether or not the data has changed. | [optional] 
}

## Example

```python
from sailpoint.beta.models.import_accounts_request import ImportAccountsRequest

import_accounts_request = ImportAccountsRequest(
file=bytes(b'blah'),
disable_optimization='true'
)

```
[[Back to top]](#) 

