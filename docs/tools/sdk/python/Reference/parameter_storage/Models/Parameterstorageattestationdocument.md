---
id: parameterstorageattestationdocument
title: Parameterstorageattestationdocument
pagination_label: Parameterstorageattestationdocument
sidebar_label: Parameterstorageattestationdocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Parameterstorageattestationdocument', 'Parameterstorageattestationdocument'] 
slug: /tools/sdk/python/parameter-storage/models/parameterstorageattestationdocument
tags: ['SDK', 'Software Development Kit', 'Parameterstorageattestationdocument', 'Parameterstorageattestationdocument']
---

# Parameterstorageattestationdocument

The attestation document. This is Base64Url encoded binary data containing the attestation document. This has a cert with a public key that needs to be used to encrypt the private fields of the parameter on creation or update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestation_document** | **str** | The Base64Url encoded attestation document. | [optional] 
}

## Example

```python
from sailpoint.parameter_storage.models.parameterstorageattestationdocument import Parameterstorageattestationdocument

parameterstorageattestationdocument = Parameterstorageattestationdocument(
attestation_document='YmFzZTY0IGVuY29kZWQgYXR0ZXN0YXRpb24gZG9jdW1lbnQgZ29lcyBoZXJlLg=='
)

```
[[Back to top]](#) 

