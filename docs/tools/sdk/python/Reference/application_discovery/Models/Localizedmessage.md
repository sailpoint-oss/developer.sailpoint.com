---
id: localizedmessage
title: Localizedmessage
pagination_label: Localizedmessage
sidebar_label: Localizedmessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Localizedmessage', 'Localizedmessage'] 
slug: /tools/sdk/python/application-discovery/models/localizedmessage
tags: ['SDK', 'Software Development Kit', 'Localizedmessage', 'Localizedmessage']
---

# Localizedmessage

Localized error message to indicate a failed invocation or error if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | Message locale | [required]
**message** | **str** | Message text | [required]
}

## Example

```python
from sailpoint.application_discovery.models.localizedmessage import Localizedmessage

localizedmessage = Localizedmessage(
locale='An error has occurred!',
message='Error has occurred!'
)

```
[[Back to top]](#) 

