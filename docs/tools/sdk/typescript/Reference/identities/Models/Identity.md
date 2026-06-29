---
id: v1-identity-v1
title: IdentityV1
pagination_label: IdentityV1
sidebar_label: IdentityV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IdentityV1', 'v1IdentityV1']
slug: /tools/sdk/typescript/identities/models/identity-v1
tags: ['SDK', 'Software Development Kit', 'IdentityV1', 'v1IdentityV1']
---

# IdentityV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the identity | [readonly] [default to undefined]
**name** | `string` | The identity\'s name is equivalent to its Display Name attribute. | [default to undefined]
**created** | **(optional)** `string` | Creation date of the identity | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the identity | [readonly] [default to undefined]
**alias** | **(optional)** `string` | The identity\'s alternate unique identifier is equivalent to its Account Name on the authoritative source account schema. | [default to undefined]
**emailAddress** | **(optional)** `string` | The email address of the identity | [default to undefined]
**processingState** | **(optional)** `string` | The processing state of the identity | [default to undefined]
**identityStatus** | **(optional)** `string` | The identity\'s status in the system | [default to undefined]
**managerRef** | **(optional)** `IdentityManagerRefV1` |  | [default to undefined]
**isManager** | **(optional)** `boolean` | Whether this identity is a manager of another identity | [default to false]
**lastRefresh** | **(optional)** `string` | The last time the identity was refreshed by the system | [default to undefined]
**attributes** | **(optional)** `object` | A map with the identity attributes for the identity | [default to undefined]
**lifecycleState** | **(optional)** `IdentityLifecycleStateV1` |  | [default to undefined]

