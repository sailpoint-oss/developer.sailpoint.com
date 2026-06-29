---
id: authorizationscheme
title: Authorizationscheme
pagination_label: Authorizationscheme
sidebar_label: Authorizationscheme
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Authorizationscheme', 'Authorizationscheme'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/authorizationscheme
tags: ['SDK', 'Software Development Kit', 'Authorizationscheme', 'Authorizationscheme']
---

# Authorizationscheme

Authorization scheme supported by the transmitter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec_urn** | **str** | URN describing the authorization specification. OAuth 2.0: `urn:ietf:rfc:6749`; Bearer token: `urn:ietf:rfc:6750`.  | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.authorizationscheme import Authorizationscheme

authorizationscheme = Authorizationscheme(
spec_urn='urn:ietf:rfc:6749'
)

```
[[Back to top]](#) 

