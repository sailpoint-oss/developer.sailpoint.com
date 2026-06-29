---
id: v1-reviewablerole-v1
title: ReviewableroleV1
pagination_label: ReviewableroleV1
sidebar_label: ReviewableroleV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ReviewableroleV1', 'v1ReviewableroleV1']
slug: /tools/sdk/typescript/certification_summaries/models/reviewablerole-v1
tags: ['SDK', 'Software Development Kit', 'ReviewableroleV1', 'v1ReviewableroleV1']
---

# ReviewableroleV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id for the Role | [default to undefined]
**name** | **(optional)** `string` | The name of the Role | [default to undefined]
**description** | **(optional)** `string` | Information about the Role | [default to undefined]
**privileged** | **(optional)** `boolean` | Indicates if the entitlement is a privileged entitlement | [default to undefined]
**owner** | **(optional)** `IdentityreferencewithnameandemailV1` |  | [default to undefined]
**revocable** | **(optional)** `boolean` | Indicates whether the Role can be revoked or requested | [default to undefined]
**endDate** | **(optional)** `string` | The date when a user\'s access expires. | [default to undefined]
**accessProfiles** | **(optional)** `Array<ReviewableaccessprofileV1>` | The list of Access Profiles associated with this Role | [default to undefined]
**entitlements** | **(optional)** `Array<ReviewableentitlementV1>` | The list of entitlements associated with this Role | [default to undefined]

