---
id: userlevelrequest
title: Userlevelrequest
pagination_label: Userlevelrequest
sidebar_label: Userlevelrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Userlevelrequest', 'Userlevelrequest'] 
slug: /tools/sdk/python/custom-user-levels/models/userlevelrequest
tags: ['SDK', 'Software Development Kit', 'Userlevelrequest', 'Userlevelrequest']
---

# Userlevelrequest

Payload containing details for creating a custom user level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the user level. | [required]
**description** | **str** | A brief description of the user level. | [required]
**owner** | [**Publicidentity**](publicidentity) |  | [required]
**right_sets** | **[]str** | A list of rights associated with the user level. | [optional] 
}

## Example

```python
from sailpoint.custom_user_levels.models.userlevelrequest import Userlevelrequest

userlevelrequest = Userlevelrequest(
name='Custom User Level Name',
description='This is a description of the custom user level.',
owner=sailpoint.custom_user_levels.models.public_identity.Public Identity(
                    id = '2c9180857182305e0171993735622948', 
                    name = 'Alison Ferguso', 
                    alias = 'alison.ferguso', 
                    email = 'alison.ferguso@acme-solar.com', 
                    status = 'Active', 
                    identity_state = 'ACTIVE', 
                    manager = sailpoint.custom_user_levels.models.identity_reference.Identity Reference(
                        type = 'IDENTITY', 
                        id = '2c9180a46faadee4016fb4e018c20639', 
                        name = 'Thomas Edison', ), 
                    attributes = [
                        sailpoint.custom_user_levels.models.publicidentity_attributes_inner.publicidentity_attributes_inner(
                            key = 'country', 
                            name = 'Country', 
                            value = 'US', )
                        ], ),
right_sets=["idn:ui-right-set-list-read-example","idn:ui-right-set-write-example"]
)

```
[[Back to top]](#) 

