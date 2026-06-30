---
id: identitypreviewresponse
title: Identitypreviewresponse
pagination_label: Identitypreviewresponse
sidebar_label: Identitypreviewresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identitypreviewresponse', 'Identitypreviewresponse'] 
slug: /tools/sdk/python/identity-profiles/models/identitypreviewresponse
tags: ['SDK', 'Software Development Kit', 'Identitypreviewresponse', 'Identitypreviewresponse']
---

# Identitypreviewresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentitypreviewresponseIdentity**](identitypreviewresponse-identity) |  | [optional] 
**preview_attributes** | [**[]Identityattributepreview**](identityattributepreview) |  | [optional] 
}

## Example

```python
from sailpoint.identity_profiles.models.identitypreviewresponse import Identitypreviewresponse

identitypreviewresponse = Identitypreviewresponse(
identity=sailpoint.identity_profiles.models.identitypreviewresponse_identity.identitypreviewresponse_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
preview_attributes=[
                    sailpoint.identity_profiles.models.identity_attribute_preview.Identity Attribute Preview(
                        name = 'email', 
                        value = 'email@mail.com', 
                        previous_value = 'oldEmail@mail.com', 
                        error_messages = {"locale":"en-US","localeOrigin":"DEFAULT","text":"Error Message"}, )
                    ]
)

```
[[Back to top]](#) 

