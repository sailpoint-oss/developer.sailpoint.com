---
id: account-aggregation-status
title: AccountAggregationStatus
pagination_label: AccountAggregationStatus
sidebar_label: AccountAggregationStatus
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountAggregationStatus'] 
slug: /tools/sdk/powershell/beta/models/account-aggregation-status
tags: ['SDK', 'Software Development Kit', 'AccountAggregationStatus']
---


# AccountAggregationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** |  Pointer to **System.DateTime** | When the aggregation started. | [optional] 
**Status** |  Pointer to  **Enum** [  "STARTED",    "ACCOUNTS_COLLECTED",    "COMPLETED",    "CANCELLED",    "RETRIED",    "TERMINATED" ] | STARTED - Aggregation started, but source account iteration has not completed.  ACCOUNTS_COLLECTED - Source account iteration completed, but all accounts have not yet been processed.  COMPLETED - Aggregation completed (*possibly with errors*).  CANCELLED - Aggregation cancelled by user.  RETRIED - Aggregation retried because of connectivity issues with the Virtual Appliance.  TERMINATED - Aggregation marked as failed after 3 tries after connectivity issues with the Virtual Appliance.  | [optional] 
**TotalAccounts** |  Pointer to **Int32** | The total number of *NEW, CHANGED and DELETED* accounts that need to be processed for this aggregation. This does not include accounts that were unchanged since the previous aggregation. This can be zero if there were no new, changed or deleted accounts since the previous aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**ProcessedAccounts** |  Pointer to **Int32** | The number of *NEW, CHANGED and DELETED* accounts that have been processed so far. This reflects the number of accounts that have been processed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountAggregationStatus = Initialize-BetaAccountAggregationStatus  -Start 2021-01-31T14:30:05.104Z `
 -Status ACCOUNTS_COLLECTED `
 -TotalAccounts 520 `
 -ProcessedAccounts 150
```

- Convert the resource to JSON
```powershell
$AccountAggregationStatus | ConvertTo-JSON
```


[[Back to top]](#) 

