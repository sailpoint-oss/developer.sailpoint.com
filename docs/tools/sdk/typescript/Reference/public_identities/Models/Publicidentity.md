---
id: v1-publicidentity-v1
title: PublicidentityV1
pagination_label: PublicidentityV1
sidebar_label: PublicidentityV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PublicidentityV1', 'v1PublicidentityV1']
slug: /tools/sdk/typescript/public_identities/models/publicidentity-v1
tags: ['SDK', 'Software Development Kit', 'PublicidentityV1', 'v1PublicidentityV1']
---

# PublicidentityV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Identity id | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of identity. | [default to undefined]
**alias** | **(optional)** `string` | Alternate unique identifier for the identity. | [default to undefined]
**email** | **(optional)** `string` | Email address of identity. | [default to undefined]
**status** | **(optional)** `string` | The lifecycle status for the identity | [default to undefined]
**identityState** | **(optional)** `string` | The current state of the identity, which determines how Identity Security Cloud interacts with the identity. An identity that is Active will be included identity picklists in Request Center, identity processing, and more. Identities that are Inactive will be excluded from these features.  | [default to undefined]
**manager** | **(optional)** `IdentityreferenceV1` |  | [default to undefined]
**attributes** | **(optional)** `Array<PublicidentityAttributesInnerV1>` | The public identity attributes of the identity | [default to undefined]

