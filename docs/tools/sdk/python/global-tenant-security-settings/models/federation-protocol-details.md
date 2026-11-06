# FederationProtocolDetails

# FederationProtocolDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** |  **Enum** [  'SAML_IDP',    'SAML_SP' ] | Federation protocol role | [optional] 
**entity_id** | **str** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
\}

## Example

```python
from sailpoint.global_tenant_security_settings.models.federation_protocol_details import FederationProtocolDetails

federation_protocol_details = FederationProtocolDetails(
role='SAML_IDP',
entity_id='http://www.okta.com/exkdaruy8Ln5Ry7C54x6'
)

```
[[Back to top]](#) 

