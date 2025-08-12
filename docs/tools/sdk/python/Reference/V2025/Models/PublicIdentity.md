---
id: v2025-public-identity
title: PublicIdentity
pagination_label: PublicIdentity
sidebar_label: PublicIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PublicIdentity', 'V2025PublicIdentity'] 
slug: /tools/sdk/python/v2025/models/public-identity
tags: ['SDK', 'Software Development Kit', 'PublicIdentity', 'V2025PublicIdentity']
---

# PublicIdentity

Details about a public identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity id | [optional] 
**name** | **str** | Human-readable display name of identity. | [optional] 
**alias** | **str** | Alternate unique identifier for the identity. | [optional] 
**email** | **str** | Email address of identity. | [optional] 
**status** | **str** | The lifecycle status for the identity | [optional] 
**identity_state** |  **Enum** [  'ACTIVE',    'INACTIVE_SHORT_TERM',    'INACTIVE_LONG_TERM' ] | The current state of the identity, which determines how Identity Security Cloud interacts with the identity. An identity that is Active will be included identity picklists in Request Center, identity processing, and more. Identities that are Inactive will be excluded from these features.  | [optional] 
**manager** | [**IdentityReference**](identity-reference) |  | [optional] 
**attributes** | [**[]PublicIdentityAttributesInner**](public-identity-attributes-inner) | The public identity attributes of the identity | [optional] 
}

## Example

```python
from sailpoint.v2025.models.public_identity import PublicIdentity

public_identity = PublicIdentity(
id='2c9180857182305e0171993735622948',
name='Alison Ferguso',
alias='alison.ferguso',
email='alison.ferguso@acme-solar.com',
status='Active',
identity_state='ACTIVE',
manager=sailpoint.v2025.models.identity_reference.Identity Reference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Thomas Edison', ),
attributes=[
                    sailpoint.v2025.models.public_identity_attributes_inner.PublicIdentity_attributes_inner(
                        key = 'country', 
                        name = 'Country', 
                        value = 'US', )
                    ]
)

```
[[Back to top]](#) 

