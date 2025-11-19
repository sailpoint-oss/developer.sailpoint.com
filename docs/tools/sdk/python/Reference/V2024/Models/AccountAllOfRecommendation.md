---
id: v2024-account-all-of-recommendation
title: AccountAllOfRecommendation
pagination_label: AccountAllOfRecommendation
sidebar_label: AccountAllOfRecommendation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAllOfRecommendation', 'V2024AccountAllOfRecommendation'] 
slug: /tools/sdk/python/v2024/models/account-all-of-recommendation
tags: ['SDK', 'Software Development Kit', 'AccountAllOfRecommendation', 'V2024AccountAllOfRecommendation']
---

# AccountAllOfRecommendation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'HUMAN',    'MACHINE' ] | Recommended type of account. | [required]
**method** |  **Enum** [  'DISCOVERY',    'SOURCE',    'CRITERIA' ] | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [required]
}

## Example

```python
from sailpoint.v2024.models.account_all_of_recommendation import AccountAllOfRecommendation

account_all_of_recommendation = AccountAllOfRecommendation(
type='MACHINE',
method='DISCOVERY'
)

```
[[Back to top]](#) 

