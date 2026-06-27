---
id: v1-accountaggregationstatus-v1
title: AccountaggregationstatusV1
pagination_label: AccountaggregationstatusV1
sidebar_label: AccountaggregationstatusV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountaggregationstatusV1', 'v1AccountaggregationstatusV1']
slug: /tools/sdk/typescript/account_aggregations/models/accountaggregationstatus-v1
tags: ['SDK', 'Software Development Kit', 'AccountaggregationstatusV1', 'v1AccountaggregationstatusV1']
---

# AccountaggregationstatusV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **(optional)** `string` | When the aggregation started. | [default to undefined]
**status** | **(optional)** `string` | STARTED - Aggregation started, but source account iteration has not completed.  ACCOUNTS_COLLECTED - Source account iteration completed, but all accounts have not yet been processed.  COMPLETED - Aggregation completed (*possibly with errors*).  CANCELLED - Aggregation cancelled by user.  RETRIED - Aggregation retried because of connectivity issues with the Virtual Appliance.  TERMINATED - Aggregation marked as failed after 3 tries after connectivity issues with the Virtual Appliance.  | [default to undefined]
**totalAccounts** | **(optional)** `number` | The total number of *NEW, CHANGED and DELETED* accounts that need to be processed for this aggregation. This does not include accounts that were unchanged since the previous aggregation. This can be zero if there were no new, changed or deleted accounts since the previous aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [default to undefined]
**processedAccounts** | **(optional)** `number` | The number of *NEW, CHANGED and DELETED* accounts that have been processed so far. This reflects the number of accounts that have been processed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [default to undefined]
**totalAccountsMarkedForDeletion** | **(optional)** `number` | The total number of accounts that have been marked for deletion during the aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [default to undefined]
**deletedAccounts** | **(optional)** `number` | The number of accounts that have been deleted during the aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [default to undefined]
**totalIdentities** | **(optional)** `number` | The total number of unique identities that have been marked for refresh. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [default to undefined]
**processedIdentities** | **(optional)** `number` | The number of unique identities that have been refreshed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [default to undefined]

