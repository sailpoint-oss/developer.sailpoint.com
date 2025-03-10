---
id: create-o-auth-client-response
title: CreateOAuthClientResponse
pagination_label: CreateOAuthClientResponse
sidebar_label: CreateOAuthClientResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateOAuthClientResponse', 'CreateOAuthClientResponse'] 
slug: /tools/sdk/python/v3/models/create-o-auth-client-response
tags: ['SDK', 'Software Development Kit', 'CreateOAuthClientResponse', 'CreateOAuthClientResponse']
---

# CreateOAuthClientResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the OAuth client | [required]
**secret** | **str** | Secret of the OAuth client (This field is only returned on the intial create call.) | [required]
**business_name** | **str** | The name of the business the API Client should belong to | [required]
**homepage_url** | **str** | The homepage URL associated with the owner of the API Client | [required]
**name** | **str** | A human-readable name for the API Client | [required]
**description** | **str** | A description of the API Client | [required]
**access_token_validity_seconds** | **int** | The number of seconds an access token generated for this API Client is valid for | [required]
**refresh_token_validity_seconds** | **int** | The number of seconds a refresh token generated for this API Client is valid for | [required]
**redirect_uris** | **[]str** | A list of the approved redirect URIs used with the authorization_code flow | [required]
**grant_types** | [**[]GrantType**](grant-type) | A list of OAuth 2.0 grant types this API Client can be used with | [required]
**access_type** | [**AccessType**](access-type) |  | [required]
**type** | [**ClientType**](client-type) |  | [required]
**internal** | **bool** | An indicator of whether the API Client can be used for requests internal to IDN | [required]
**enabled** | **bool** | An indicator of whether the API Client is enabled for use | [required]
**strong_auth_supported** | **bool** | An indicator of whether the API Client supports strong authentication | [required]
**claims_supported** | **bool** | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | [required]
**created** | **datetime** | The date and time, down to the millisecond, when the API Client was created | [required]
**modified** | **datetime** | The date and time, down to the millisecond, when the API Client was last updated | [required]
**scope** | **[]str** | Scopes of the API Client. | [required]
}

## Example

```python
from sailpoint.v3.models.create_o_auth_client_response import CreateOAuthClientResponse

create_o_auth_client_response = CreateOAuthClientResponse(
id='2c9180835d2e5168015d32f890ca1581',
secret='5c32dd9b21adb51c77794d46e71de117a1d0ddb36a7ff941fa28014ab7de2cf3',
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
created='2017-07-11T18:45:37.098Z',
modified='2018-06-25T20:22:28.104Z',
scope=[demo:api-client-scope:first, demo:api-client-scope:second]
)

```
[[Back to top]](#) 

