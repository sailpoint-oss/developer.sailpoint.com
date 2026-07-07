---
id: errormessage
title: Errormessage
pagination_label: Errormessage
sidebar_label: Errormessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Errormessage', 'Errormessage'] 
slug: /tools/sdk/python/custom-forms/models/errormessage
tags: ['SDK', 'Software Development Kit', 'Errormessage', 'Errormessage']
---

# Errormessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | Locale is the current Locale | [optional] 
**locale_origin** | **str** | LocaleOrigin holds possible values of how the locale was selected | [optional] 
**text** | **str** | Text is the actual text of the error message | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.errormessage import Errormessage

errormessage = Errormessage(
locale='en-US',
locale_origin='DEFAULT',
text='This is an error'
)

```
[[Back to top]](#) 

