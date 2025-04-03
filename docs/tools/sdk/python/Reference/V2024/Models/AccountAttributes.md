---
id: v2024-account-attributes
title: AccountAttributes
pagination_label: AccountAttributes
sidebar_label: AccountAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAttributes', 'V2024AccountAttributes'] 
slug: /tools/sdk/python/v2024/models/account-attributes
tags: ['SDK', 'Software Development Kit', 'AccountAttributes', 'V2024AccountAttributes']
---

# AccountAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **map[string]object** | The schema attribute values for the account | [required]
}

## Example

```python
from sailpoint.v2024.models.account_attributes import AccountAttributes

account_attributes = AccountAttributes(
attributes={city=Austin, displayName=John Doe, userName=jdoe, sAMAccountName=jDoe, mail=john.doe@sailpoint.com}
)

```
[[Back to top]](#) 

