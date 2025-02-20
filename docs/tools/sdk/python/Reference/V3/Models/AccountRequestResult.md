---
id: account-request-result
title: AccountRequestResult
pagination_label: AccountRequestResult
sidebar_label: AccountRequestResult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountRequestResult', 'AccountRequestResult'] 
slug: /tools/sdk/python/v3/models/account-request-result
tags: ['SDK', 'Software Development Kit', 'AccountRequestResult', 'AccountRequestResult']
---

# AccountRequestResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **[]str** |  | [optional] 
**status** | **str** | The status of the account request | [optional] 
**ticket_id** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.account_request_result import AccountRequestResult

account_request_result = AccountRequestResult(
errors=[
                    '[ConnectorError] [
  {
    "code": "unrecognized_keys",
    "keys": [
      "groups"
    ],
    "path": [],
    "message": "Unrecognized key(s) in object: 'groups'"
  }
] (requestId: 5e9d6df5-9b1b-47d9-9bf1-dc3a2893299e)'
                    ],
status='failed',
ticket_id=''
)

```
[[Back to top]](#) 

