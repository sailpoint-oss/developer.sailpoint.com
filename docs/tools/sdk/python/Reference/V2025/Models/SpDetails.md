---
id: v2025-sp-details
title: SpDetails
pagination_label: SpDetails
sidebar_label: SpDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpDetails', 'V2025SpDetails'] 
slug: /tools/sdk/python/v2025/models/sp-details
tags: ['SDK', 'Software Development Kit', 'SpDetails', 'V2025SpDetails']
---

# SpDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** |  **Enum** [  'SAML_IDP',    'SAML_SP' ] | Federation protocol role | [optional] 
**entity_id** | **str** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
**alias** | **str** | Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations. | [optional] 
**callback_url** | **str** | The allowed callback URL where users will be redirected to after authentication. Used with SP configurations. | [required]
**legacy_acs_url** | **str** | The legacy ACS URL used for SAML authentication. Used with SP configurations. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.sp_details import SpDetails

sp_details = SpDetails(
role='SAML_IDP',
entity_id='http://www.okta.com/exkdaruy8Ln5Ry7C54x6',
alias='acme-sp',
callback_url='https://example-tenant.identitynow.com/sso/Consumer/metaAlias/example-tenant-sp',
legacy_acs_url='https://megapod-useast1-sso.identitysoon.com/sso/Consumer/metaAlias/acme/sp'
)

```
[[Back to top]](#) 

