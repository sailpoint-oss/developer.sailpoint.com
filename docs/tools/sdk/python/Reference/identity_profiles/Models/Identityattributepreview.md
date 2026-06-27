---
id: identityattributepreview
title: Identityattributepreview
pagination_label: Identityattributepreview
sidebar_label: Identityattributepreview
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityattributepreview', 'Identityattributepreview'] 
slug: /tools/sdk/python/identity-profiles/models/identityattributepreview
tags: ['SDK', 'Software Development Kit', 'Identityattributepreview', 'Identityattributepreview']
---

# Identityattributepreview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the attribute that is being previewed. | [optional] 
**value** | **str** | Value that was derived during the preview. | [optional] 
**previous_value** | **str** | The value of the attribute before the preview. | [optional] 
**error_messages** | [**[]Errormessagedto**](errormessagedto) | List of error messages | [optional] 
}

## Example

```python
from sailpoint.identity_profiles.models.identityattributepreview import Identityattributepreview

identityattributepreview = Identityattributepreview(
name='email',
value='email@mail.com',
previous_value='oldEmail@mail.com',
error_messages={"locale":"en-US","localeOrigin":"DEFAULT","text":"Error Message"}
)

```
[[Back to top]](#) 

