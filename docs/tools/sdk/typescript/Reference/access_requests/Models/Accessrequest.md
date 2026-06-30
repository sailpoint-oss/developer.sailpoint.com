---
id: v1-accessrequest-v1
title: AccessrequestV1
pagination_label: AccessrequestV1
sidebar_label: AccessrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessrequestV1', 'v1AccessrequestV1']
slug: /tools/sdk/typescript/access_requests/models/accessrequest-v1
tags: ['SDK', 'Software Development Kit', 'AccessrequestV1', 'v1AccessrequestV1']
---

# AccessrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | `Array<string>` | A list of Identity IDs for whom the Access is requested. If it\'s a Revoke request, there can only be one Identity ID. | [default to undefined]
**requestType** | **(optional)** `AccessrequesttypeV1` |  | [default to undefined]
**requestedItems** | `Array<AccessrequestitemV1>` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [default to undefined]
**requestedForWithRequestedItems** | **(optional)** `Array<RequestedfordtorefV1>` | Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity. * Can only be used when \'requestedFor\' and \'requestedItems\' are not separately provided * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source * Allows the ability to request items with different start dates * Allows the ability to request items with different remove dates * Also allows different combinations of request items and identities in the same request * Only for use in GRANT_ACCESS type requests  | [default to undefined]

