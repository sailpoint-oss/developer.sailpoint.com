---
id: v2024-account-attributes-create
title: AccountAttributesCreate
pagination_label: AccountAttributesCreate
sidebar_label: AccountAttributesCreate
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAttributesCreate', 'V2024AccountAttributesCreate'] 
slug: /tools/sdk/python/v2024/models/account-attributes-create
tags: ['SDK', 'Software Development Kit', 'AccountAttributesCreate', 'V2024AccountAttributesCreate']
---

# AccountAttributesCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AccountAttributesCreateAttributes**](account-attributes-create-attributes) |  | [required]
}

## Example

```python
from sailpoint.v2024.models.account_attributes_create import AccountAttributesCreate

account_attributes_create = AccountAttributesCreate(
attributes={sourceId=34bfcbe116c9407464af37acbaf7a4dc, city=Austin, displayName=John Doe, userName=jdoe, sAMAccountName=jDoe, mail=john.doe@sailpoint.com}
)

```
[[Back to top]](#) 

