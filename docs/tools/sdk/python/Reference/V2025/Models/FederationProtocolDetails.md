---
id: v2025-federation-protocol-details
title: FederationProtocolDetails
pagination_label: FederationProtocolDetails
sidebar_label: FederationProtocolDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FederationProtocolDetails', 'V2025FederationProtocolDetails'] 
slug: /tools/sdk/python/v2025/models/federation-protocol-details
tags: ['SDK', 'Software Development Kit', 'FederationProtocolDetails', 'V2025FederationProtocolDetails']
---

# FederationProtocolDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** |  **Enum** [  'SAML_IDP',    'SAML_SP' ] | Federation protocol role | [optional] 
**entity_id** | **str** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
}

## Example

```python
from sailpoint.v2025.models.federation_protocol_details import FederationProtocolDetails

federation_protocol_details = FederationProtocolDetails(
role='SAML_IDP',
entity_id='http://www.okta.com/exkdaruy8Ln5Ry7C54x6'
)

```
[[Back to top]](#) 

