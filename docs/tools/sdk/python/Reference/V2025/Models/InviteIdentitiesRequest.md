---
id: v2025-invite-identities-request
title: InviteIdentitiesRequest
pagination_label: InviteIdentitiesRequest
sidebar_label: InviteIdentitiesRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'InviteIdentitiesRequest', 'V2025InviteIdentitiesRequest'] 
slug: /tools/sdk/python/v2025/models/invite-identities-request
tags: ['SDK', 'Software Development Kit', 'InviteIdentitiesRequest', 'V2025InviteIdentitiesRequest']
---

# InviteIdentitiesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | The list of Identities IDs to invite - required when 'uninvited' is false | [optional] 
**uninvited** | **bool** | indicator (optional) to invite all unregistered identities in the system within a limit 1000. This parameter makes sense only when 'ids' is empty. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.invite_identities_request import InviteIdentitiesRequest

invite_identities_request = InviteIdentitiesRequest(
ids=[2b568c65bc3c4c57a43bd97e3a8e55, 2c9180867769897d01776ed5f125512f],
uninvited=False
)

```
[[Back to top]](#) 

