---
id: beta-account-attributes-create
title: AccountAttributesCreate
pagination_label: AccountAttributesCreate
sidebar_label: AccountAttributesCreate
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAttributesCreate', 'BetaAccountAttributesCreate'] 
slug: /tools/sdk/python/beta/models/account-attributes-create
tags: ['SDK', 'Software Development Kit', 'AccountAttributesCreate', 'BetaAccountAttributesCreate']
---

# AccountAttributesCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AccountAttributesCreateAttributes**](account-attributes-create-attributes) |  | [required]
}

## Example

```python
from sailpoint.beta.models.account_attributes_create import AccountAttributesCreate

account_attributes_create = AccountAttributesCreate(
attributes={sourceId=34bfcbe116c9407464af37acbaf7a4dc, city=Austin, displayName=John Doe, userName=jdoe, sAMAccountName=jDoe, mail=john.doe@sailpoint.com}
)

```
[[Back to top]](#) 

