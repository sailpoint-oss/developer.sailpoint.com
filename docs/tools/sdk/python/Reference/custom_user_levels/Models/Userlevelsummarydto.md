---
id: userlevelsummarydto
title: Userlevelsummarydto
pagination_label: Userlevelsummarydto
sidebar_label: Userlevelsummarydto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Userlevelsummarydto', 'Userlevelsummarydto'] 
slug: /tools/sdk/python/custom-user-levels/models/userlevelsummarydto
tags: ['SDK', 'Software Development Kit', 'Userlevelsummarydto', 'Userlevelsummarydto']
---

# Userlevelsummarydto

It represents a summary of a user level, including its metadata, attributes, and associated properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the UserLevel. | [optional] 
**name** | **str** | The human-readable name of the UserLevel. | [optional] 
**description** | **str** | A human-readable description of the UserLevel. | [optional] 
**legacy_group** | **str** | The legacy group associated with the UserLevel, used for backward compatibility for the UserLevel id. | [optional] 
**right_sets** | [**[]Rightsetdto**](rightsetdto) | List of RightSets associated with the UserLevel. | [optional] 
**custom** | **bool** | Indicates whether the UserLevel is custom. | [optional] [default to True]
**admin_assignable** | **bool** | Indicates whether the UserLevel is admin-assignable. | [optional] [default to True]
**translated_name** | **str** | The translated name of the UserLevel. | [optional] 
**translated_grant** | **str** | The translated grant message for the UserLevel. | [optional] 
**translated_remove** | **str** | The translated remove message for the UserLevel. | [optional] 
**owner** | [**Publicidentity**](publicidentity) |  | [optional] 
**status** |  **Enum** [  'ACTIVE',    'DRAFT' ] | The status of the UserLevel. | [optional] 
**created** | **datetime** | The creation timestamp of the UserLevel. | [optional] 
**modified** | **datetime** | The last modification timestamp of the UserLevel. | [optional] 
**associated_identities_count** | **int** | The count of associated identities for the UserLevel. | [optional] 
}

## Example

```python
from sailpoint.custom_user_levels.models.userlevelsummarydto import Userlevelsummarydto

userlevelsummarydto = Userlevelsummarydto(
id='beb02a57-010f-4c29-a6d2-fae9628bda73',
name='Custom User Level Name',
description='This is a description of the CustomUserLevel.',
legacy_group='ORG_ADMIN',
right_sets=[
                    sailpoint.custom_user_levels.models.rightsetdto.rightsetdto(
                        id = 'idn:ui-right-set-example', 
                        name = 'Right Set Name', 
                        description = 'This is a description of the RightSet.', 
                        category = 'identity', 
                        rights = ["idn:ui-right-set-example:read","idn:ui-right-set-example:write"], 
                        right_set_ids = ["idn:ui-right-set-example-update","idn:ui-right-set-example-delete"], 
                        ui_assignable_child_right_set_ids = ["idn:ui-right-set-example-detail","idn:ui-right-set-example-management"], 
                        ui_assignable = True, 
                        translated_name = 'Translated Right Set Name', 
                        translated_description = 'This is a translated description of the RightSet.', 
                        parent_id = 'idn:ui-parent-example', )
                    ],
custom=True,
admin_assignable=True,
translated_name='Translated Custom User Level Name',
translated_grant='Grant Message',
translated_remove='Remove Message',
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
status='Active',
created='2023-01-01T12:00Z',
modified='2023-01-02T12:00Z',
associated_identities_count=10
)

```
[[Back to top]](#) 

