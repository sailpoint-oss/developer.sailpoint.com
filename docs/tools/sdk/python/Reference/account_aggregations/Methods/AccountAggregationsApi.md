---
id: account-aggregations
title: Account_Aggregations
pagination_label: Account_Aggregations
sidebar_label: Account_Aggregations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Account_Aggregations', 'Account_Aggregations'] 
slug: /tools/sdk/python/account-aggregations/methods/account-aggregations
tags: ['SDK', 'Software Development Kit', 'Account_Aggregations', 'Account_Aggregations']
---

# sailpoint.account_aggregations.AccountAggregationsApi
  Use this API to implement account aggregation progress tracking functionality.
With this functionality in place, administrators can view in-progress account aggregations, their statuses, and their relevant details.

An account aggregation refers to the process Identity Security Cloud uses to gather and load account data from a source into Identity Security Cloud.

Whenever Identity Security Cloud is in the process of aggregating a source, it adds an entry to the Aggregation Activity Log, along with its relevant details.
To view aggregation activity, administrators can select the Connections drop-down menu, select Sources, and select the relevant source, select its Import Data tab, and select Account Aggregation.
In Account Aggregation, administrators can view the account aggregations&#39; statuses and details in the Account Activity Log.

Refer to [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) for more information about account aggregations.

If you are looking for the endpoint for account aggregations in a source, [click here](https://developer.sailpoint.com/docs/api/v2025/import-accounts)
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-account-aggregation-status-v1**](#get-account-aggregation-status-v1) | **GET** `/account-aggregations/v1/{id}/status` | In-progress account aggregation status


## get-account-aggregation-status-v1
In-progress account aggregation status
This API returns the status of an *in-progress* account aggregation, along with the total number of **NEW**, **CHANGED** and **DELETED** accounts found since the previous aggregation, and the number of those accounts that have been processed so far.

Accounts that have not changed since the previous aggregation are not included in **totalAccounts** and **processedAccounts** counts returned by this API. This is distinct from **Accounts Scanned** shown in the Aggregation UI, which indicates total accounts scanned regardless of whether they changed or not.

Since this endpoint reports on the status of an *in-progress* account aggregation, totalAccounts and processedAccounts may change between calls to this endpoint.

*Only available up to an hour after the aggregation completes. May respond with *404 Not Found* after that.*
required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-account-aggregation-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The account aggregation id

### Return type
[**Accountaggregationstatus**](../models/accountaggregationstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An account aggregation status object | Accountaggregationstatus |  -  |
400 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccountAggregationStatusV1400Response |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccountAggregationStatusV1400Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccountAggregationStatusV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.account_aggregations.api.account_aggregations_api import AccountAggregationsApi
from sailpoint.account_aggregations.api_client import ApiClient
from sailpoint.account_aggregations.models.accountaggregationstatus import Accountaggregationstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808477a6b0c60177a81146b8110b' # str | The account aggregation id # str | The account aggregation id

    try:
        # In-progress account aggregation status
        
        results = AccountAggregationsApi(api_client).get_account_aggregation_status_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = AccountAggregationsApi(api_client).get_account_aggregation_status_v1(id)
        print("The response of AccountAggregationsApi->get_account_aggregation_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccountAggregationsApi->get_account_aggregation_status_v1: %s\n" % e)
```



[[Back to top]](#) 



