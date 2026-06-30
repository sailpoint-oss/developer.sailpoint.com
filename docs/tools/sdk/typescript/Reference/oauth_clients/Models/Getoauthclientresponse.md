---
id: v1-getoauthclientresponse-v1
title: GetoauthclientresponseV1
pagination_label: GetoauthclientresponseV1
sidebar_label: GetoauthclientresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'GetoauthclientresponseV1', 'v1GetoauthclientresponseV1']
slug: /tools/sdk/typescript/oauth_clients/models/getoauthclientresponse-v1
tags: ['SDK', 'Software Development Kit', 'GetoauthclientresponseV1', 'v1GetoauthclientresponseV1']
---

# GetoauthclientresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | ID of the OAuth client | [default to undefined]
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
**secret** | **(optional)** `string` |  | [default to undefined]
**metadata** | **(optional)** `string` |  | [default to undefined]
**lastUsed** | **(optional)** `string` | The date and time, down to the millisecond, when this API Client was last used to generate an access token. This timestamp does not get updated on every API Client usage, but only once a day. This property can be useful for identifying which API Clients are no longer actively used and can be removed. | [default to undefined]
**scope** | `Array<string>` | Scopes of the API Client. | [default to undefined]

