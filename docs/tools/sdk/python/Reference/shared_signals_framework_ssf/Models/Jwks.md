---
id: jwks
title: Jwks
pagination_label: Jwks
sidebar_label: Jwks
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jwks', 'Jwks'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/jwks
tags: ['SDK', 'Software Development Kit', 'Jwks', 'Jwks']
---

# Jwks

JSON Web Key Set containing the transmitter's public keys for verifying signed delivery requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**[]Jwk**](jwk) | Array of JSON Web Keys. | [required]
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.jwks import Jwks

jwks = Jwks(
keys=[{"alg":"RS256","e":"AQAB","kid":"mrk-3db792b3d0a642dbbb5bb28b542929cd","kty":"RSA","n":"xMPKL_ccvjTDQAJ60jg5kP9XJmEIpeSb1FIjzvAnM9RP-vSiY5iW2eK0-VLHYB_XbcDT8jzneUmX90mCfiwF_F4Mjh3f0D79ncrXDglnBLKnuqmvNcblUOuOyNFts3jQSBAqB_GR_dSjKLzbs1wP3K8EJqosQGfPNuh5HxFfU79v-uZFdtkYzf_xtu8phrO84VT_DLuFJyIxLOcY5MVJ6uHlmlKXSJbMO8xTKzvcz6TTZM8XrrT73GpTCdtmNVpCLz2v14XQb-6sNeya2v037ktrgdUWFLC63iIgNKzgNr88L7x3j5AeeOi1VX_2ZAxLrz4BUtJxxyWxVthrpDCYuQ","use":"sig"}]
)

```
[[Back to top]](#) 

