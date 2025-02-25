---
id: beta-localized-message
title: LocalizedMessage
pagination_label: LocalizedMessage
sidebar_label: LocalizedMessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LocalizedMessage', 'BetaLocalizedMessage'] 
slug: /tools/sdk/python/beta/models/localized-message
tags: ['SDK', 'Software Development Kit', 'LocalizedMessage', 'BetaLocalizedMessage']
---

# LocalizedMessage

Localized error message to indicate a failed invocation or error if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | Message locale | [required]
**message** | **str** | Message text | [required]
}

## Example

```python
from sailpoint.beta.models.localized_message import LocalizedMessage

localized_message = LocalizedMessage(
locale='An error has occurred!',
message='Error has occurred!'
)

```
[[Back to top]](#) 

