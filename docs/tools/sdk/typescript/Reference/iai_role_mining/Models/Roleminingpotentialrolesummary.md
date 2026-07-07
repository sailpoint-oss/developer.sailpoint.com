---
id: v1-roleminingpotentialrolesummary-v1
title: RoleminingpotentialrolesummaryV1
pagination_label: RoleminingpotentialrolesummaryV1
sidebar_label: RoleminingpotentialrolesummaryV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleminingpotentialrolesummaryV1', 'v1RoleminingpotentialrolesummaryV1']
slug: /tools/sdk/typescript/iai_role_mining/models/roleminingpotentialrolesummary-v1
tags: ['SDK', 'Software Development Kit', 'RoleminingpotentialrolesummaryV1', 'v1RoleminingpotentialrolesummaryV1']
---

# RoleminingpotentialrolesummaryV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the potential role | [default to undefined]
**name** | **(optional)** `string` | Name of the potential role | [default to undefined]
**potentialRoleRef** | **(optional)** `RoleminingpotentialrolerefV1` |  | [default to undefined]
**identityCount** | **(optional)** `number` | The number of identities in a potential role. | [default to undefined]
**entitlementCount** | **(optional)** `number` | The number of entitlements in a potential role. | [default to undefined]
**identityGroupStatus** | **(optional)** `string` | The status for this identity group which can be \"REQUESTED\" or \"OBTAINED\" | [default to undefined]
**provisionState** | **(optional)** `RoleminingpotentialroleprovisionstateV1` |  | [default to undefined]
**roleId** | **(optional)** `string` | ID of the provisioned role in IIQ or IDN.  Null if this potential role has not been provisioned. | [default to undefined]
**density** | **(optional)** `number` | The density metric (0-100) of this potential role. Higher density values indicate higher similarity amongst the identities. | [default to undefined]
**freshness** | **(optional)** `number` | The freshness metric (0-100) of this potential role. Higher freshness values indicate this potential role is more distinctive compared to existing roles. | [default to undefined]
**quality** | **(optional)** `number` | The quality metric (0-100) of this potential role. Higher quality values indicate this potential role has high density and freshness. | [default to undefined]
**type** | **(optional)** `RoleminingroletypeV1` |  | [default to undefined]
**createdBy** | **(optional)** `RoleminingpotentialrolesummaryCreatedByV1` |  | [default to undefined]
**createdDate** | **(optional)** `string` | The date-time when this potential role was created. | [default to undefined]
**saved** | **(optional)** `boolean` | The potential role\'s saved status | [default to false]
**description** | **(optional)** `string` | Description of the potential role | [default to undefined]
**session** | **(optional)** `RoleminingsessionparametersdtoV1` |  | [default to undefined]

