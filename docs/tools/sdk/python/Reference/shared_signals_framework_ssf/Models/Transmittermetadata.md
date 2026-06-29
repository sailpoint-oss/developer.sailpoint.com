---
id: transmittermetadata
title: Transmittermetadata
pagination_label: Transmittermetadata
sidebar_label: Transmittermetadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Transmittermetadata', 'Transmittermetadata'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/transmittermetadata
tags: ['SDK', 'Software Development Kit', 'Transmittermetadata', 'Transmittermetadata']
---

# Transmittermetadata

SSF transmitter discovery metadata per the SSF specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec_version** | **str** | Version of the SSF specification supported. | [optional] 
**issuer** | **str** | Base URL of the transmitter (issuer). | [optional] 
**jwks_uri** | **str** | URL of the transmitter's JSON Web Key Set. | [optional] 
**delivery_methods_supported** | **[]str** | Supported delivery methods (e.g. push URN). | [optional] 
**configuration_endpoint** | **str** | Endpoint for stream configuration (create, read, update, replace, delete). | [optional] 
**status_endpoint** | **str** | Endpoint for reading and updating stream status. | [optional] 
**verification_endpoint** | **str** | Endpoint for receiver verification. | [optional] 
**authorization_schemes** | [**[]Authorizationscheme**](authorizationscheme) | Supported authorization schemes (e.g. OAuth2, Bearer). | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.transmittermetadata import Transmittermetadata

transmittermetadata = Transmittermetadata(
spec_version='10',
issuer='https://tenant.api.identitynow.com',
jwks_uri='https://tenant.api.identitynow.com/ssf/jwks',
delivery_methods_supported=["urn:ietf:rfc:8935"],
configuration_endpoint='https://tenant.api.identitynow.com/latest/ssf/streams',
status_endpoint='https://tenant.api.identitynow.com/latest/ssf/streams/status',
verification_endpoint='https://tenant.api.identitynow.com/latest/ssf/streams/verify',
authorization_schemes=[
                    sailpoint.shared_signals_framework_ssf.models.authorizationscheme.authorizationscheme(
                        spec_urn = 'urn:ietf:rfc:6749', )
                    ]
)

```
[[Back to top]](#) 

