---
id: v2025-account-request
title: AccountRequest
pagination_label: AccountRequest
sidebar_label: AccountRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountRequest', 'V2025AccountRequest'] 
slug: /tools/sdk/python/v2025/models/account-request
tags: ['SDK', 'Software Development Kit', 'AccountRequest', 'V2025AccountRequest']
---

# AccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Unique ID of the account | [optional] 
**attribute_requests** | [**[]AttributeRequest**](attribute-request) |  | [optional] 
**op** | **str** | The operation that was performed | [optional] 
**provisioning_target** | [**AccountSource**](account-source) |  | [optional] 
**result** | [**AccountRequestResult**](account-request-result) |  | [optional] 
**source** | [**AccountSource**](account-source) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.account_request import AccountRequest

account_request = AccountRequest(
account_id='John.Doe',
attribute_requests=[
                    sailpoint.v2025.models.attribute_request.AttributeRequest(
                        name = 'groups', 
                        op = 'Add', 
                        value = null, )
                    ],
op='Modify',
provisioning_target=,
result=sailpoint.v2025.models.account_request_result.AccountRequest_result(
                    errors = [
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
                    status = 'failed', 
                    ticket_id = '', ),
source=
)

```
[[Back to top]](#) 

