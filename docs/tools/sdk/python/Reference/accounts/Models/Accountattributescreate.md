---
id: accountattributescreate
title: Accountattributescreate
pagination_label: Accountattributescreate
sidebar_label: Accountattributescreate
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountattributescreate', 'Accountattributescreate'] 
slug: /tools/sdk/python/accounts/models/accountattributescreate
tags: ['SDK', 'Software Development Kit', 'Accountattributescreate', 'Accountattributescreate']
---

# Accountattributescreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AccountattributescreateAttributes**](accountattributescreate-attributes) |  | [required]
}

## Example

```python
from sailpoint.accounts.models.accountattributescreate import Accountattributescreate

accountattributescreate = Accountattributescreate(
attributes={"sourceId":"34bfcbe116c9407464af37acbaf7a4dc","city":"Austin","displayName":"John Doe","userName":"jdoe","sAMAccountName":"jDoe","mail":"john.doe@sailpoint.com"}
)

```
[[Back to top]](#) 

