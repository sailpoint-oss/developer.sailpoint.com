---
id: cancelledrequestdetails
title: Cancelledrequestdetails
pagination_label: Cancelledrequestdetails
sidebar_label: Cancelledrequestdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Cancelledrequestdetails', 'Cancelledrequestdetails'] 
slug: /tools/sdk/python/access-requests/models/cancelledrequestdetails
tags: ['SDK', 'Software Development Kit', 'Cancelledrequestdetails', 'Cancelledrequestdetails']
---

# Cancelledrequestdetails

Provides additional details for a request that has been cancelled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment made by the owner when cancelling the associated request. | [optional] 
**owner** | [**Ownerdto**](ownerdto) |  | [optional] 
**modified** | **datetime** | Date comment was added by the owner when cancelling the associated request. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.cancelledrequestdetails import Cancelledrequestdetails

cancelledrequestdetails = Cancelledrequestdetails(
comment='This request must be cancelled.',
owner=sailpoint.access_requests.models.owner_dto.Owner Dto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
modified='2019-12-20T09:17:12.192Z'
)

```
[[Back to top]](#) 

