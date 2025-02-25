---
id: v2024-create-o-auth-client-request
title: CreateOAuthClientRequest
pagination_label: CreateOAuthClientRequest
sidebar_label: CreateOAuthClientRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateOAuthClientRequest', 'V2024CreateOAuthClientRequest'] 
slug: /tools/sdk/python/v2024/models/create-o-auth-client-request
tags: ['SDK', 'Software Development Kit', 'CreateOAuthClientRequest', 'V2024CreateOAuthClientRequest']
---

# CreateOAuthClientRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_name** | **str** | The name of the business the API Client should belong to | [optional] 
**homepage_url** | **str** | The homepage URL associated with the owner of the API Client | [optional] 
**name** | **str** | A human-readable name for the API Client | [required]
**description** | **str** | A description of the API Client | [required]
**access_token_validity_seconds** | **int** | The number of seconds an access token generated for this API Client is valid for | [required]
**refresh_token_validity_seconds** | **int** | The number of seconds a refresh token generated for this API Client is valid for | [optional] 
**redirect_uris** | **[]str** | A list of the approved redirect URIs. Provide one or more URIs when assigning the AUTHORIZATION_CODE grant type to a new OAuth Client. | [optional] 
**grant_types** | [**[]GrantType**](grant-type) | A list of OAuth 2.0 grant types this API Client can be used with | [required]
**access_type** | [**AccessType**](access-type) |  | [required]
**type** | [**ClientType**](client-type) |  | [optional] 
**internal** | **bool** | An indicator of whether the API Client can be used for requests internal within the product. | [optional] 
**enabled** | **bool** | An indicator of whether the API Client is enabled for use | [required]
**strong_auth_supported** | **bool** | An indicator of whether the API Client supports strong authentication | [optional] 
**claims_supported** | **bool** | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | [optional] 
**scope** | **[]str** | Scopes of the API Client. If no scope is specified, the client will be created with the default scope \"sp:scopes:all\". This means the API Client will have all the rights of the owner who created it. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.create_o_auth_client_request import CreateOAuthClientRequest

create_o_auth_client_request = CreateOAuthClientRequest(
business_name='Acme-Solar',
homepage_url='http://localhost:12345',
name='Demo API Client',
description='An API client used for the authorization_code, refresh_token, and client_credentials flows',
access_token_validity_seconds=750,
refresh_token_validity_seconds=86400,
redirect_uris=[http://localhost:12345],
grant_types=[AUTHORIZATION_CODE, CLIENT_CREDENTIALS, REFRESH_TOKEN],
access_type='OFFLINE',
type='CONFIDENTIAL',
internal=False,
enabled=True,
strong_auth_supported=False,
claims_supported=False,
scope=[demo:api-client-scope:first, demo:api-client-scope:second]
)

```
[[Back to top]](#) 

