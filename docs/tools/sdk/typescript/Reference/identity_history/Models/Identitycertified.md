---
id: v1-identitycertified-v1
title: IdentitycertifiedV1
pagination_label: IdentitycertifiedV1
sidebar_label: IdentitycertifiedV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IdentitycertifiedV1', 'v1IdentitycertifiedV1']
slug: /tools/sdk/typescript/identity_history/models/identitycertified-v1
tags: ['SDK', 'Software Development Kit', 'IdentitycertifiedV1', 'v1IdentitycertifiedV1']
---

# IdentitycertifiedV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificationId** | `string` | the id of the certification item | [default to undefined]
**certificationName** | `string` | the certification item name | [default to undefined]
**signedDate** | **(optional)** `string` | the date ceritification was signed | [default to undefined]
**certifiers** | **(optional)** `Array<CertifierresponseV1>` | this field is deprecated and may go away | [default to undefined]
**reviewers** | **(optional)** `Array<CertifierresponseV1>` | The list of identities who review this certification | [default to undefined]
**signer** | **(optional)** `CertifierresponseV1` |  | [default to undefined]
**eventType** | **(optional)** `string` | the event type | [default to undefined]
**dateTime** | **(optional)** `string` | the date of event | [default to undefined]

