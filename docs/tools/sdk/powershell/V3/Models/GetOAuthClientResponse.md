---
id: get-o-auth-client-response
title: GetOAuthClientResponse
pagination_label: GetOAuthClientResponse
sidebar_label: GetOAuthClientResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'GetOAuthClientResponse'] 
slug: /tools/sdk/powershell/v3/models/get-o-auth-client-response
tags: ['SDK', 'Software Development Kit', 'GetOAuthClientResponse']
---


# GetOAuthClientResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | ID of the OAuth client | 
**BusinessName** |  **String** | The name of the business the API Client should belong to | 
**HomepageUrl** |  **String** | The homepage URL associated with the owner of the API Client | 
**Name** |  **String** | A human-readable name for the API Client | 
**Description** |  **String** | A description of the API Client | 
**AccessTokenValiditySeconds** |  **Int32** | The number of seconds an access token generated for this API Client is valid for | 
**RefreshTokenValiditySeconds** |  **Int32** | The number of seconds a refresh token generated for this API Client is valid for | 
**RedirectUris** |  **[]String** | A list of the approved redirect URIs used with the authorization_code flow | 
**GrantTypes** |  [**[]GrantType**](grant-type) | A list of OAuth 2.0 grant types this API Client can be used with | 
**AccessType** |  [**AccessType**](access-type) |  | 
**Type** |  [**ClientType**](client-type) |  | 
**Internal** |  **Boolean** | An indicator of whether the API Client can be used for requests internal to IDN | 
**Enabled** |  **Boolean** | An indicator of whether the API Client is enabled for use | 
**StrongAuthSupported** |  **Boolean** | An indicator of whether the API Client supports strong authentication | 
**ClaimsSupported** |  **Boolean** | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | 
**Created** |  **System.DateTime** | The date and time, down to the millisecond, when the API Client was created | 
**Modified** |  **System.DateTime** | The date and time, down to the millisecond, when the API Client was last updated | 
**LastUsed** |  Pointer to **System.DateTime** | The date and time, down to the millisecond, when this API Client was last used to generate an access token. This timestamp does not get updated on every API Client usage, but only once a day. This property can be useful for identifying which API Clients are no longer actively used and can be removed. | [optional] 
**Scope** |  **[]String** | Scopes of the API Client. | 

## Examples

- Prepare the resource
```powershell
$GetOAuthClientResponse = Initialize-PSSailpointGetOAuthClientResponse  -Id 2c9180835d2e5168015d32f890ca1581 `
 -BusinessName Acme-Solar `
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
 -Created 2017-07-11T18:45:37.098Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -LastUsed 2017-07-11T18:45:37.098Z `
 -Scope [demo:api-client-scope:first, demo:api-client-scope:second]
```

- Convert the resource to JSON
```powershell
$GetOAuthClientResponse | ConvertTo-JSON
```


[[Back to top]](#) 

