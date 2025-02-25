---
id: beta-identity-reference-with-name-and-email
title: IdentityReferenceWithNameAndEmail
pagination_label: IdentityReferenceWithNameAndEmail
sidebar_label: IdentityReferenceWithNameAndEmail
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityReferenceWithNameAndEmail', 'BetaIdentityReferenceWithNameAndEmail'] 
slug: /tools/sdk/python/beta/models/identity-reference-with-name-and-email
tags: ['SDK', 'Software Development Kit', 'IdentityReferenceWithNameAndEmail', 'BetaIdentityReferenceWithNameAndEmail']
---

# IdentityReferenceWithNameAndEmail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type can only be IDENTITY. This is read-only. | [optional] 
**id** | **str** | Identity ID. | [optional] 
**name** | **str** | Identity's human-readable display name. This is read-only. | [optional] 
**email** | **str** | Identity's email address. This is read-only. | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_reference_with_name_and_email import IdentityReferenceWithNameAndEmail

identity_reference_with_name_and_email = IdentityReferenceWithNameAndEmail(
type='IDENTITY',
id='5168015d32f890ca15812c9180835d2e',
name='Alison Ferguso',
email='alison.ferguso@identitysoon.com'
)

```
[[Back to top]](#) 

