---
id: v2024-get-o-auth-client-response
title: GetOAuthClientResponse
pagination_label: GetOAuthClientResponse
sidebar_label: GetOAuthClientResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetOAuthClientResponse', 'V2024GetOAuthClientResponse'] 
slug: /tools/sdk/python/v2024/models/get-o-auth-client-response
tags: ['SDK', 'Software Development Kit', 'GetOAuthClientResponse', 'V2024GetOAuthClientResponse']
---

# GetOAuthClientResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the OAuth client | [required]
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
**secret** | **str** |  | [optional] 
**metadata** | **str** |  | [optional] 
**last_used** | **datetime** | The date and time, down to the millisecond, when this API Client was last used to generate an access token. This timestamp does not get updated on every API Client usage, but only once a day. This property can be useful for identifying which API Clients are no longer actively used and can be removed. | [optional] 
**scope** | **[]str** | Scopes of the API Client. | [required]
}

## Example

```python
from sailpoint.v2024.models.get_o_auth_client_response import GetOAuthClientResponse

get_o_auth_client_response = GetOAuthClientResponse(
id='2c9180835d2e5168015d32f890ca1581',
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
secret='',
metadata='',
last_used='2017-07-11T18:45:37.098Z',
scope=[demo:api-client-scope:first, demo:api-client-scope:second]
)

```
[[Back to top]](#) 

