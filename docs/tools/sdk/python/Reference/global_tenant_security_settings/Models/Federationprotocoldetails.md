---
id: federationprotocoldetails
title: Federationprotocoldetails
pagination_label: Federationprotocoldetails
sidebar_label: Federationprotocoldetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Federationprotocoldetails', 'Federationprotocoldetails'] 
slug: /tools/sdk/python/global-tenant-security-settings/models/federationprotocoldetails
tags: ['SDK', 'Software Development Kit', 'Federationprotocoldetails', 'Federationprotocoldetails']
---

# Federationprotocoldetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** |  **Enum** [  'SAML_IDP',    'SAML_SP' ] | Federation protocol role | [optional] 
**entity_id** | **str** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
}

## Example

```python
from sailpoint.global_tenant_security_settings.models.federationprotocoldetails import Federationprotocoldetails

federationprotocoldetails = Federationprotocoldetails(
role='SAML_IDP',
entity_id='http://www.okta.com/exkdaruy8Ln5Ry7C54x6'
)

```
[[Back to top]](#) 

