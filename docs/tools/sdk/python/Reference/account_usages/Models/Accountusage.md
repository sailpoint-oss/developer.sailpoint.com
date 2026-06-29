---
id: accountusage
title: Accountusage
pagination_label: Accountusage
sidebar_label: Accountusage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountusage', 'Accountusage'] 
slug: /tools/sdk/python/account-usages/models/accountusage
tags: ['SDK', 'Software Development Kit', 'Accountusage', 'Accountusage']
---

# Accountusage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** | The first day of the month for which activity is aggregated. | [optional] 
**count** | **int** | The number of days within the month that the account was active in a source. | [optional] 
}

## Example

```python
from sailpoint.account_usages.models.accountusage import Accountusage

accountusage = Accountusage(
var_date='Thu Apr 20 20:00:00 EDT 2023',
count=10
)

```
[[Back to top]](#) 

