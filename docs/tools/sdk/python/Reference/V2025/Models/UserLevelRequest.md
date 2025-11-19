---
id: v2025-user-level-request
title: UserLevelRequest
pagination_label: UserLevelRequest
sidebar_label: UserLevelRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserLevelRequest', 'V2025UserLevelRequest'] 
slug: /tools/sdk/python/v2025/models/user-level-request
tags: ['SDK', 'Software Development Kit', 'UserLevelRequest', 'V2025UserLevelRequest']
---

# UserLevelRequest

Payload containing details for creating a custom user level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the user level. | [required]
**description** | **str** | A brief description of the user level. | [required]
**owner** | [**PublicIdentity**](public-identity) |  | [required]
**right_sets** | **[]str** | A list of rights associated with the user level. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.user_level_request import UserLevelRequest

user_level_request = UserLevelRequest(
name='Custom User Level Name',
description='This is a description of the custom user level.',
owner=sailpoint.v2025.models.public_identity.Public Identity(
                    id = '2c9180857182305e0171993735622948', 
                    name = 'Alison Ferguso', 
                    alias = 'alison.ferguso', 
                    email = 'alison.ferguso@acme-solar.com', 
                    status = 'Active', 
                    identity_state = 'ACTIVE', 
                    manager = sailpoint.v2025.models.identity_reference.Identity Reference(
                        type = 'IDENTITY', 
                        id = '2c9180a46faadee4016fb4e018c20639', 
                        name = 'Thomas Edison', ), 
                    attributes = [
                        sailpoint.v2025.models.public_identity_attributes_inner.PublicIdentity_attributes_inner(
                            key = 'country', 
                            name = 'Country', 
                            value = 'US', )
                        ], ),
right_sets=[idn:ui-right-set-list-read-example, idn:ui-right-set-write-example]
)

```
[[Back to top]](#) 

