---
id: v2024-account-aggregation-status
title: AccountAggregationStatus
pagination_label: AccountAggregationStatus
sidebar_label: AccountAggregationStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAggregationStatus', 'V2024AccountAggregationStatus'] 
slug: /tools/sdk/python/v2024/models/account-aggregation-status
tags: ['SDK', 'Software Development Kit', 'AccountAggregationStatus', 'V2024AccountAggregationStatus']
---

# AccountAggregationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **datetime** | When the aggregation started. | [optional] 
**status** |  **Enum** [  'STARTED',    'ACCOUNTS_COLLECTED',    'COMPLETED',    'CANCELLED',    'RETRIED',    'TERMINATED',    'NOT_FOUND' ] | STARTED - Aggregation started, but source account iteration has not completed.  ACCOUNTS_COLLECTED - Source account iteration completed, but all accounts have not yet been processed.  COMPLETED - Aggregation completed (*possibly with errors*).  CANCELLED - Aggregation cancelled by user.  RETRIED - Aggregation retried because of connectivity issues with the Virtual Appliance.  TERMINATED - Aggregation marked as failed after 3 tries after connectivity issues with the Virtual Appliance.  | [optional] 
**total_accounts** | **int** | The total number of *NEW, CHANGED and DELETED* accounts that need to be processed for this aggregation. This does not include accounts that were unchanged since the previous aggregation. This can be zero if there were no new, changed or deleted accounts since the previous aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**processed_accounts** | **int** | The number of *NEW, CHANGED and DELETED* accounts that have been processed so far. This reflects the number of accounts that have been processed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**total_accounts_marked_for_deletion** | **int** | The total number of accounts that have been marked for deletion during the aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**deleted_accounts** | **int** | The number of accounts that have been deleted during the aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**total_identities** | **int** | The total number of unique identities that have been marked for refresh. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**processed_identities** | **int** | The number of unique identities that have been refreshed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
}

## Example

```python
from sailpoint.v2024.models.account_aggregation_status import AccountAggregationStatus

account_aggregation_status = AccountAggregationStatus(
start='2021-01-31T14:30:05.104Z',
status='ACCOUNTS_COLLECTED',
total_accounts=520,
processed_accounts=150,
total_accounts_marked_for_deletion=10,
deleted_accounts=5,
total_identities=300,
processed_identities=250
)

```
[[Back to top]](#) 

