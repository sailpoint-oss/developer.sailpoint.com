---
id: v1-entitlementaccessrequestconfig-v1
title: EntitlementaccessrequestconfigV1
pagination_label: EntitlementaccessrequestconfigV1
sidebar_label: EntitlementaccessrequestconfigV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EntitlementaccessrequestconfigV1', 'v1EntitlementaccessrequestconfigV1']
slug: /tools/sdk/typescript/entitlements/models/entitlementaccessrequestconfig-v1
tags: ['SDK', 'Software Development Kit', 'EntitlementaccessrequestconfigV1', 'v1EntitlementaccessrequestconfigV1']
---

# EntitlementaccessrequestconfigV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalSchemes** | **(optional)** `Array<EntitlementapprovalschemeV1>` | Ordered list of approval steps for the access request. Empty when no approval is required. | [default to undefined]
**requestCommentRequired** | **(optional)** `boolean` | If the requester must provide a comment during access request. | [default to false]
**denialCommentRequired** | **(optional)** `boolean` | If the reviewer must provide a comment when denying the access request. | [default to false]
**reauthorizationRequired** | **(optional)** `boolean` | Is Reauthorization Required | [default to false]
**requireEndDate** | **(optional)** `boolean` | If true, then remove date or sunset date is required in access request of the entitlement. | [default to false]
**maxPermittedAccessDuration** | **(optional)** `EntitlementaccessrequestconfigMaxPermittedAccessDurationV1` |  | [default to undefined]

