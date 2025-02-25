---
id: beta-account-aggregation
title: AccountAggregation
pagination_label: AccountAggregation
sidebar_label: AccountAggregation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAggregation', 'BetaAccountAggregation'] 
slug: /tools/sdk/python/beta/models/account-aggregation
tags: ['SDK', 'Software Development Kit', 'AccountAggregation', 'BetaAccountAggregation']
---

# AccountAggregation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **datetime** | When the aggregation started. | [optional] 
**status** |  **Enum** [  'STARTED',    'ACCOUNTS_COLLECTED',    'COMPLETED',    'CANCELLED',    'RETRIED',    'TERMINATED' ] | STARTED - Aggregation started, but source account iteration has not completed.  ACCOUNTS_COLLECTED - Source account iteration completed, but all accounts have not yet been processed.  COMPLETED - Aggregation completed (*possibly with errors*).  CANCELLED - Aggregation cancelled by user.  RETRIED - Aggregation retried because of connectivity issues with the Virtual Appliance.  TERMINATED - Aggregation marked as failed after 3 tries after connectivity issues with the Virtual Appliance.  | [optional] 
**total_accounts** | **int** | The total number of *NEW, CHANGED and DELETED* accounts that need to be processed for this aggregation. This does not include accounts that were unchanged since the previous aggregation. This can be zero if there were no new, changed or deleted accounts since the previous aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**processed_accounts** | **int** | The number of *NEW, CHANGED and DELETED* accounts that have been processed so far. This reflects the number of accounts that have been processed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
}

## Example

```python
from sailpoint.beta.models.account_aggregation import AccountAggregation

account_aggregation = AccountAggregation(
start='2021-01-31T14:30:05.104Z',
status='ACCOUNTS_COLLECTED',
total_accounts=520,
processed_accounts=150
)

```
[[Back to top]](#) 

