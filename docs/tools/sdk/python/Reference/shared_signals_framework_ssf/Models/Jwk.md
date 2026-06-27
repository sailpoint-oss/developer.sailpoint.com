---
id: jwk
title: Jwk
pagination_label: Jwk
sidebar_label: Jwk
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jwk', 'Jwk'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/jwk
tags: ['SDK', 'Software Development Kit', 'Jwk', 'Jwk']
---

# Jwk

A single JSON Web Key used for verifying signed delivery requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **str** | Algorithm intended for use with the key (e.g. RS256). | [optional] 
**e** | **str** | RSA public exponent (Base64url encoded). | [optional] 
**kid** | **str** | Key ID - unique identifier for the key. | [optional] 
**kty** | **str** | Key type (e.g. RSA). | [optional] 
**n** | **str** | RSA modulus (Base64url encoded). | [optional] 
**use** | **str** | Intended use of the key (e.g. sig for signature verification). | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.jwk import Jwk

jwk = Jwk(
alg='RS256',
e='AQAB',
kid='mrk-3db792b3d0a642dbbb5bb28b542929cd',
kty='RSA',
n='xMPKL_ccvjTDQAJ60jg5kP9XJmEIpeSb1FIjzvAnM9RP-vSiY5iW2eK0-VLHYB_XbcDT8jzneUmX90mCfiwF_F4Mjh3f0D79ncrXDglnBLKnuqmvNcblUOuOyNFts3jQSBAqB_GR_dSjKLzbs1wP3K8EJqosQGfPNuh5HxFfU79v-uZFdtkYzf_xtu8phrO84VT_DLuFJyIxLOcY5MVJ6uHlmlKXSJbMO8xTKzvcz6TTZM8XrrT73GpTCdtmNVpCLz2v14XQb-6sNeya2v037ktrgdUWFLC63iIgNKzgNr88L7x3j5AeeOi1VX_2ZAxLrz4BUtJxxyWxVthrpDCYuQ',
use='sig'
)

```
[[Back to top]](#) 

