---
id: v1-roleminingsessiondto-v1
title: RoleminingsessiondtoV1
pagination_label: RoleminingsessiondtoV1
sidebar_label: RoleminingsessiondtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleminingsessiondtoV1', 'v1RoleminingsessiondtoV1']
slug: /tools/sdk/typescript/iai_role_mining/models/roleminingsessiondto-v1
tags: ['SDK', 'Software Development Kit', 'RoleminingsessiondtoV1', 'v1RoleminingsessiondtoV1']
---

# RoleminingsessiondtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **(optional)** `RoleminingsessionscopeV1` |  | [default to undefined]
**pruneThreshold** | **(optional)** `number` | The prune threshold to be used or null to calculate prescribedPruneThreshold | [default to undefined]
**prescribedPruneThreshold** | **(optional)** `number` | The calculated prescribedPruneThreshold | [default to undefined]
**minNumIdentitiesInPotentialRole** | **(optional)** `number` | Minimum number of identities in a potential role | [default to undefined]
**potentialRoleCount** | **(optional)** `number` | Number of potential roles | [default to undefined]
**potentialRolesReadyCount** | **(optional)** `number` | Number of potential roles ready | [default to undefined]
**type** | **(optional)** `RoleminingroletypeV1` |  | [default to undefined]
**emailRecipientId** | **(optional)** `string` | The id of the user who will receive an email about the role mining session | [default to undefined]
**identityCount** | **(optional)** `number` | Number of identities in the population which meet the search criteria or identity list provided | [default to undefined]
**saved** | **(optional)** `boolean` | The session\'s saved status | [default to false]
**name** | **(optional)** `string` | The session\'s saved name | [default to undefined]

