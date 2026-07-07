---
id: v1-userlevelsummarydto-v1
title: UserlevelsummarydtoV1
pagination_label: UserlevelsummarydtoV1
sidebar_label: UserlevelsummarydtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'UserlevelsummarydtoV1', 'v1UserlevelsummarydtoV1']
slug: /tools/sdk/typescript/custom_user_levels/models/userlevelsummarydto-v1
tags: ['SDK', 'Software Development Kit', 'UserlevelsummarydtoV1', 'v1UserlevelsummarydtoV1']
---

# UserlevelsummarydtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The unique identifier of the UserLevel. | [default to undefined]
**name** | **(optional)** `string` | The human-readable name of the UserLevel. | [default to undefined]
**description** | **(optional)** `string` | A human-readable description of the UserLevel. | [default to undefined]
**legacyGroup** | **(optional)** `string` | The legacy group associated with the UserLevel, used for backward compatibility for the UserLevel id. | [default to undefined]
**rightSets** | **(optional)** `Array<RightsetdtoV1>` | List of RightSets associated with the UserLevel. | [default to undefined]
**custom** | **(optional)** `boolean` | Indicates whether the UserLevel is custom. | [default to true]
**adminAssignable** | **(optional)** `boolean` | Indicates whether the UserLevel is admin-assignable. | [default to true]
**translatedName** | **(optional)** `string` | The translated name of the UserLevel. | [default to undefined]
**translatedGrant** | **(optional)** `string` | The translated grant message for the UserLevel. | [default to undefined]
**translatedRemove** | **(optional)** `string` | The translated remove message for the UserLevel. | [default to undefined]
**owner** | **(optional)** `PublicidentityV1` |  | [default to undefined]
**status** | **(optional)** `string` | The status of the UserLevel. | [default to undefined]
**created** | **(optional)** `string` | The creation timestamp of the UserLevel. | [default to undefined]
**modified** | **(optional)** `string` | The last modification timestamp of the UserLevel. | [default to undefined]
**associatedIdentitiesCount** | **(optional)** `number` | The count of associated identities for the UserLevel. | [default to undefined]

