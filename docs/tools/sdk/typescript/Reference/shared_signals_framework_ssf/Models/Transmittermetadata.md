---
id: v1-transmittermetadata-v1
title: TransmittermetadataV1
pagination_label: TransmittermetadataV1
sidebar_label: TransmittermetadataV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TransmittermetadataV1', 'v1TransmittermetadataV1']
slug: /tools/sdk/typescript/shared_signals_framework_ssf/models/transmittermetadata-v1
tags: ['SDK', 'Software Development Kit', 'TransmittermetadataV1', 'v1TransmittermetadataV1']
---

# TransmittermetadataV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec_version** | **(optional)** `string` | Version of the SSF specification supported. | [default to undefined]
**issuer** | **(optional)** `string` | Base URL of the transmitter (issuer). | [default to undefined]
**jwks_uri** | **(optional)** `string` | URL of the transmitter\'s JSON Web Key Set. | [default to undefined]
**delivery_methods_supported** | **(optional)** `Array<string>` | Supported delivery methods (e.g. push URN). | [default to undefined]
**configuration_endpoint** | **(optional)** `string` | Endpoint for stream configuration (create, read, update, replace, delete). | [default to undefined]
**status_endpoint** | **(optional)** `string` | Endpoint for reading and updating stream status. | [default to undefined]
**verification_endpoint** | **(optional)** `string` | Endpoint for receiver verification. | [default to undefined]
**authorization_schemes** | **(optional)** `Array<AuthorizationschemeV1>` | Supported authorization schemes (e.g. OAuth2, Bearer). | [default to undefined]

