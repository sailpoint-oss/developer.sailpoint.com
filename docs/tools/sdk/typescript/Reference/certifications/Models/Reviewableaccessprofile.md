---
id: v1-reviewableaccessprofile-v1
title: ReviewableaccessprofileV1
pagination_label: ReviewableaccessprofileV1
sidebar_label: ReviewableaccessprofileV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ReviewableaccessprofileV1', 'v1ReviewableaccessprofileV1']
slug: /tools/sdk/typescript/certifications/models/reviewableaccessprofile-v1
tags: ['SDK', 'Software Development Kit', 'ReviewableaccessprofileV1', 'v1ReviewableaccessprofileV1']
---

# ReviewableaccessprofileV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id of the Access Profile | [default to undefined]
**name** | **(optional)** `string` | Name of the Access Profile | [default to undefined]
**description** | **(optional)** `string` | Information about the Access Profile | [default to undefined]
**privileged** | **(optional)** `boolean` | Indicates if the entitlement is a privileged entitlement | [default to undefined]
**cloudGoverned** | **(optional)** `boolean` | True if the entitlement is cloud governed | [default to undefined]
**endDate** | **(optional)** `string` | The date at which a user\'s access expires | [default to undefined]
**owner** | **(optional)** `IdentityreferencewithnameandemailV1` |  | [default to undefined]
**entitlements** | **(optional)** `Array<ReviewableentitlementV1>` | A list of entitlements associated with this Access Profile | [default to undefined]
**created** | **(optional)** `string` | Date the Access Profile was created. | [default to undefined]
**modified** | **(optional)** `string` | Date the Access Profile was last modified. | [default to undefined]

