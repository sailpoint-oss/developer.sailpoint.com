---
id: beta-import-accounts-request1
title: ImportAccountsRequest1
pagination_label: ImportAccountsRequest1
sidebar_label: ImportAccountsRequest1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportAccountsRequest1', 'BetaImportAccountsRequest1'] 
slug: /tools/sdk/python/beta/models/import-accounts-request1
tags: ['SDK', 'Software Development Kit', 'ImportAccountsRequest1', 'BetaImportAccountsRequest1']
---

# ImportAccountsRequest1

This content type is provided for compatibility with services that don't support multipart/form-data, such as SailPoint Workflows. This content type does not support files, so it can only be used for direct connect sources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_optimization** |  **Enum** [  'true',    'false' ] | Use this flag to reprocess every account whether or not the data has changed. | [optional] 
}

## Example

```python
from sailpoint.beta.models.import_accounts_request1 import ImportAccountsRequest1

import_accounts_request1 = ImportAccountsRequest1(
disable_optimization='true'
)

```
[[Back to top]](#) 

