---
id: v1-createoauthclientresponse-v1
title: CreateoauthclientresponseV1
pagination_label: CreateoauthclientresponseV1
sidebar_label: CreateoauthclientresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreateoauthclientresponseV1', 'v1CreateoauthclientresponseV1']
slug: /tools/sdk/typescript/oauth_clients/models/createoauthclientresponse-v1
tags: ['SDK', 'Software Development Kit', 'CreateoauthclientresponseV1', 'v1CreateoauthclientresponseV1']
---

# CreateoauthclientresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | ID of the OAuth client | [default to undefined]
**secret** | `string` | Secret of the OAuth client (This field is only returned on the intial create call.) | [default to undefined]
**businessName** | `string` | The name of the business the API Client should belong to | [default to undefined]
**homepageUrl** | `string` | The homepage URL associated with the owner of the API Client | [default to undefined]
**name** | `string` | A human-readable name for the API Client | [default to undefined]
**description** | `string` | A description of the API Client | [default to undefined]
**accessTokenValiditySeconds** | `number` | The number of seconds an access token generated for this API Client is valid for | [default to undefined]
**refreshTokenValiditySeconds** | `number` | The number of seconds a refresh token generated for this API Client is valid for | [default to undefined]
**redirectUris** | `Array<string>` | A list of the approved redirect URIs used with the authorization_code flow | [default to undefined]
**grantTypes** | `Array<GranttypeV1>` | A list of OAuth 2.0 grant types this API Client can be used with | [default to undefined]
**accessType** | `AccesstypeV1` |  | [default to undefined]
**type** | `ClienttypeV1` |  | [default to undefined]
**internal** | `boolean` | An indicator of whether the API Client can be used for requests internal to IDN | [default to undefined]
**enabled** | `boolean` | An indicator of whether the API Client is enabled for use | [default to undefined]
**strongAuthSupported** | `boolean` | An indicator of whether the API Client supports strong authentication | [default to undefined]
**claimsSupported** | `boolean` | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | [default to undefined]
**created** | `string` | The date and time, down to the millisecond, when the API Client was created | [default to undefined]
**modified** | `string` | The date and time, down to the millisecond, when the API Client was last updated | [default to undefined]
**scope** | `Array<string>` | Scopes of the API Client. | [default to undefined]

