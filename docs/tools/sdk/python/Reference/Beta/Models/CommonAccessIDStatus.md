---
id: beta-common-access-id-status
title: CommonAccessIDStatus
pagination_label: CommonAccessIDStatus
sidebar_label: CommonAccessIDStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommonAccessIDStatus', 'BetaCommonAccessIDStatus'] 
slug: /tools/sdk/python/beta/models/common-access-id-status
tags: ['SDK', 'Software Development Kit', 'CommonAccessIDStatus', 'BetaCommonAccessIDStatus']
---

# CommonAccessIDStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed_ids** | **[]str** | List of confirmed common access ids. | [optional] 
**denied_ids** | **[]str** | List of denied common access ids. | [optional] 
}

## Example

```python
from sailpoint.beta.models.common_access_id_status import CommonAccessIDStatus

common_access_id_status = CommonAccessIDStatus(
confirmed_ids=[
                    ''
                    ],
denied_ids=[
                    ''
                    ]
)

```
[[Back to top]](#) 

