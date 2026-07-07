---
id: v1-reviewdecision-v1
title: ReviewdecisionV1
pagination_label: ReviewdecisionV1
sidebar_label: ReviewdecisionV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ReviewdecisionV1', 'v1ReviewdecisionV1']
slug: /tools/sdk/typescript/certifications/models/reviewdecision-v1
tags: ['SDK', 'Software Development Kit', 'ReviewdecisionV1', 'v1ReviewdecisionV1']
---

# ReviewdecisionV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The id of the review decision | [default to undefined]
**decision** | `CertificationdecisionV1` |  | [default to undefined]
**proposedEndDate** | **(optional)** `string` | The date at which a user\'s access should be taken away. Should only be set for `REVOKE` decisions. | [default to undefined]
**bulk** | `boolean` | Indicates whether decision should be marked as part of a larger bulk decision | [default to undefined]
**recommendation** | **(optional)** `ReviewrecommendationV1` |  | [default to undefined]
**comments** | **(optional)** `string` | Comments recorded when the decision was made | [default to undefined]

