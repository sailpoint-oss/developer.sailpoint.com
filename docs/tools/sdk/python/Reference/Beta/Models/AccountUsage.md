---
id: beta-account-usage
title: AccountUsage
pagination_label: AccountUsage
sidebar_label: AccountUsage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountUsage', 'BetaAccountUsage'] 
slug: /tools/sdk/python/beta/models/account-usage
tags: ['SDK', 'Software Development Kit', 'AccountUsage', 'BetaAccountUsage']
---

# AccountUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** | The first day of the month for which activity is aggregated. | [optional] 
**count** | **int** | The number of days within the month that the account was active in a source. | [optional] 
}

## Example

```python
from sailpoint.beta.models.account_usage import AccountUsage

account_usage = AccountUsage(
var_date='Thu Apr 20 20:00:00 EDT 2023',
count=10
)

```
[[Back to top]](#) 

