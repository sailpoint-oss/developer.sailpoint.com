---
id: v1-accountactivityitem-v1
title: AccountactivityitemV1
pagination_label: AccountactivityitemV1
sidebar_label: AccountactivityitemV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountactivityitemV1', 'v1AccountactivityitemV1']
slug: /tools/sdk/typescript/account_activities/models/accountactivityitem-v1
tags: ['SDK', 'Software Development Kit', 'AccountactivityitemV1', 'v1AccountactivityitemV1']
---

# AccountactivityitemV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Item id | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of item | [default to undefined]
**requested** | **(optional)** `string` | Date and time item was requested | [default to undefined]
**approvalStatus** | **(optional)** `AccountactivityapprovalstatusV1` |  | [default to undefined]
**provisioningStatus** | **(optional)** `ProvisioningstateV1` |  | [default to undefined]
**requesterComment** | **(optional)** `CommentV1` |  | [default to undefined]
**reviewerIdentitySummary** | **(optional)** `IdentitysummaryV1` |  | [default to undefined]
**reviewerComment** | **(optional)** `CommentV1` |  | [default to undefined]
**operation** | **(optional)** `AccountactivityitemoperationV1` |  | [default to undefined]
**attribute** | **(optional)** `string` | Attribute to which account activity applies | [default to undefined]
**value** | **(optional)** `string` | Value of attribute | [default to undefined]
**nativeIdentity** | **(optional)** `string` | Native identity in the target system to which the account activity applies | [default to undefined]
**sourceId** | **(optional)** `string` | Id of Source to which account activity applies | [default to undefined]
**accountRequestInfo** | **(optional)** `AccountrequestinfoV1` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs, if any were included in the corresponding access request item | [default to undefined]
**removeDate** | **(optional)** `string` | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [default to undefined]

