---
id: v1-createoauthclientrequest-v1
title: CreateoauthclientrequestV1
pagination_label: CreateoauthclientrequestV1
sidebar_label: CreateoauthclientrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreateoauthclientrequestV1', 'v1CreateoauthclientrequestV1']
slug: /tools/sdk/typescript/oauth_clients/models/createoauthclientrequest-v1
tags: ['SDK', 'Software Development Kit', 'CreateoauthclientrequestV1', 'v1CreateoauthclientrequestV1']
---

# CreateoauthclientrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **(optional)** `string` | The name of the business the API Client should belong to | [default to undefined]
**homepageUrl** | **(optional)** `string` | The homepage URL associated with the owner of the API Client | [default to undefined]
**name** | `string` | A human-readable name for the API Client | [default to undefined]
**description** | `string` | A description of the API Client | [default to undefined]
**accessTokenValiditySeconds** | `number` | The number of seconds an access token generated for this API Client is valid for | [default to undefined]
**refreshTokenValiditySeconds** | **(optional)** `number` | The number of seconds a refresh token generated for this API Client is valid for | [default to undefined]
**redirectUris** | **(optional)** `Array<string>` | A list of the approved redirect URIs. Provide one or more URIs when assigning the AUTHORIZATION_CODE grant type to a new OAuth Client. | [default to undefined]
**grantTypes** | `Array<GranttypeV1>` | A list of OAuth 2.0 grant types this API Client can be used with | [default to undefined]
**accessType** | `AccesstypeV1` |  | [default to undefined]
**type** | **(optional)** `ClienttypeV1` |  | [default to undefined]
**internal** | **(optional)** `boolean` | An indicator of whether the API Client can be used for requests internal within the product. | [default to undefined]
**enabled** | `boolean` | An indicator of whether the API Client is enabled for use | [default to undefined]
**strongAuthSupported** | **(optional)** `boolean` | An indicator of whether the API Client supports strong authentication | [default to undefined]
**claimsSupported** | **(optional)** `boolean` | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | [default to undefined]
**scope** | **(optional)** `Array<string>` | Scopes of the API Client. If no scope is specified, the client will be created with the default scope \"sp:scopes:all\". This means the API Client will have all the rights of the owner who created it. | [default to undefined]

