---
id: create-o-auth-client-request
title: CreateOAuthClientRequest
pagination_label: CreateOAuthClientRequest
sidebar_label: CreateOAuthClientRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CreateOAuthClientRequest'] 
slug: /tools/sdk/powershell/v3/models/create-o-auth-client-request
tags: ['SDK', 'Software Development Kit', 'CreateOAuthClientRequest']
---


# CreateOAuthClientRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessName** |  Pointer to **String** | The name of the business the API Client should belong to | [optional] 
**HomepageUrl** |  Pointer to **String** | The homepage URL associated with the owner of the API Client | [optional] 
**Name** |  **String** | A human-readable name for the API Client | 
**Description** |  **String** | A description of the API Client | 
**AccessTokenValiditySeconds** |  **Int32** | The number of seconds an access token generated for this API Client is valid for | 
**RefreshTokenValiditySeconds** |  Pointer to **Int32** | The number of seconds a refresh token generated for this API Client is valid for | [optional] 
**RedirectUris** |  Pointer to **[]String** | A list of the approved redirect URIs. Provide one or more URIs when assigning the AUTHORIZATION_CODE grant type to a new OAuth Client. | [optional] 
**GrantTypes** |  [**[]GrantType**](grant-type) | A list of OAuth 2.0 grant types this API Client can be used with | 
**AccessType** |  [**AccessType**](access-type) |  | 
**Type** |  Pointer to [**ClientType**](client-type) |  | [optional] 
**Internal** |  Pointer to **Boolean** | An indicator of whether the API Client can be used for requests internal within the product. | [optional] 
**Enabled** |  **Boolean** | An indicator of whether the API Client is enabled for use | 
**StrongAuthSupported** |  Pointer to **Boolean** | An indicator of whether the API Client supports strong authentication | [optional] 
**ClaimsSupported** |  Pointer to **Boolean** | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | [optional] 
**Scope** |  Pointer to **[]String** | Scopes of the API Client. If no scope is specified, the client will be created with the default scope &quot;&quot;sp:scopes:all&quot;&quot;. This means the API Client will have all the rights of the owner who created it. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateOAuthClientRequest = Initialize-PSSailpointCreateOAuthClientRequest  -BusinessName Acme-Solar `
 -HomepageUrl http://localhost:12345 `
 -Name Demo API Client `
 -Description An API client used for the authorization_code, refresh_token, and client_credentials flows `
 -AccessTokenValiditySeconds 750 `
 -RefreshTokenValiditySeconds 86400 `
 -RedirectUris [http://localhost:12345] `
 -GrantTypes [AUTHORIZATION_CODE, CLIENT_CREDENTIALS, REFRESH_TOKEN] `
 -AccessType null `
 -Type null `
 -Internal false `
 -Enabled true `
 -StrongAuthSupported false `
 -ClaimsSupported false `
 -Scope [demo:api-client-scope:first, demo:api-client-scope:second]
```

- Convert the resource to JSON
```powershell
$CreateOAuthClientRequest | ConvertTo-JSON
```


[[Back to top]](#) 

