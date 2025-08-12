---
id: v2025-account-attributes-create
title: AccountAttributesCreate
pagination_label: AccountAttributesCreate
sidebar_label: AccountAttributesCreate
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAttributesCreate', 'V2025AccountAttributesCreate'] 
slug: /tools/sdk/python/v2025/models/account-attributes-create
tags: ['SDK', 'Software Development Kit', 'AccountAttributesCreate', 'V2025AccountAttributesCreate']
---

# AccountAttributesCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AccountAttributesCreateAttributes**](account-attributes-create-attributes) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.account_attributes_create import AccountAttributesCreate

account_attributes_create = AccountAttributesCreate(
attributes={sourceId=34bfcbe116c9407464af37acbaf7a4dc, city=Austin, displayName=John Doe, userName=jdoe, sAMAccountName=jDoe, mail=john.doe@sailpoint.com}
)

```
[[Back to top]](#) 

