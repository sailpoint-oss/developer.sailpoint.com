---
id: account-deletion-requests
title: Account_Deletion_Requests
pagination_label: Account_Deletion_Requests
sidebar_label: Account_Deletion_Requests
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Account_Deletion_Requests', 'Account_Deletion_Requests'] 
slug: /tools/sdk/python/account-deletion-requests/methods/account-deletion-requests
tags: ['SDK', 'Software Development Kit', 'Account_Deletion_Requests', 'Account_Deletion_Requests']
---

# sailpoint.account_deletion_requests.AccountDeletionRequestsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-account-request-v1**](#delete-account-request-v1) | **POST** `/account-requests/v1/account/{accountId}/delete` | Delete account
[**get-account-deletion-requests-v1**](#get-account-deletion-requests-v1) | **GET** `/account-requests/v1/deletion` | List of Account Deletion Requests


## delete-account-request-v1
Delete account
Initiates an account deletion request for the specified account.
This method validates the input data, processes the deletion request,
and generates an asynchronous result containing a tracking ID. 
>**NOTE: You can only delete accounts from sources of the "Connected" type. which supports account deletion**

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-account-request-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | account_id | **str** | True  | Account ID.
 Body  | accountdeleterequestinput | [**Accountdeleterequestinput**](../models/accountdeleterequestinput) |   (optional) | 

### Return type
[**Accountrequestasyncresult**](../models/accountrequestasyncresult)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Account deletion request details. | Accountrequestasyncresult |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccountDeletionRequestsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccountDeletionRequestsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.account_deletion_requests.api.account_deletion_requests_api import AccountDeletionRequestsApi
from sailpoint.account_deletion_requests.api_client import ApiClient
from sailpoint.account_deletion_requests.models.accountdeleterequestinput import Accountdeleterequestinput
from sailpoint.account_deletion_requests.models.accountrequestasyncresult import Accountrequestasyncresult
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    account_id = 'ef38f94347e94562b5bb8424a56498d8' # str | Account ID. # str | Account ID.
    accountdeleterequestinput = '''{"comments":"I requested this account deletion."}''' # Accountdeleterequestinput |  (optional)

    try:
        # Delete account
        
        results = AccountDeletionRequestsApi(api_client).delete_account_request_v1(account_id=account_id)
        # Below is a request that includes all optional parameters
        # results = AccountDeletionRequestsApi(api_client).delete_account_request_v1(account_id, new_accountdeleterequestinput)
        print("The response of AccountDeletionRequestsApi->delete_account_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccountDeletionRequestsApi->delete_account_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-account-deletion-requests-v1
List of Account Deletion Requests
Retrieves a paginated list of account deletion requests filtered by the provided query parameters. When the "mine" parameter is set to true, the response includes only those deletion requests that were initiated by the currently authenticated user. If "mine" is false or not specified, the endpoint returns all account deletion requests associated with the current tenant, regardless of the initiator. This allows both users and administrators to view relevant deletion requests based on their access level and intent.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-account-deletion-requests-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | mine | **bool** |   (optional) (default to False) | Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant.

### Return type
[**List[Accountactionrequestdto]**](../models/accountactionrequestdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Account Action Request objects. | List[Accountactionrequestdto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccountDeletionRequestsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccountDeletionRequestsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.account_deletion_requests.api.account_deletion_requests_api import AccountDeletionRequestsApi
from sailpoint.account_deletion_requests.api_client import ApiClient
from sailpoint.account_deletion_requests.models.accountactionrequestdto import Accountactionrequestdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    mine = False # bool | Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant. (optional) (default to False) # bool | Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant. (optional) (default to False)

    try:
        # List of Account Deletion Requests
        
        results = AccountDeletionRequestsApi(api_client).get_account_deletion_requests_v1()
        # Below is a request that includes all optional parameters
        # results = AccountDeletionRequestsApi(api_client).get_account_deletion_requests_v1(limit, offset, count, mine)
        print("The response of AccountDeletionRequestsApi->get_account_deletion_requests_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccountDeletionRequestsApi->get_account_deletion_requests_v1: %s\n" % e)
```



[[Back to top]](#) 



