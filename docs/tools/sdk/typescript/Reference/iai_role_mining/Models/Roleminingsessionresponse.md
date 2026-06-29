---
id: v1-roleminingsessionresponse-v1
title: RoleminingsessionresponseV1
pagination_label: RoleminingsessionresponseV1
sidebar_label: RoleminingsessionresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleminingsessionresponseV1', 'v1RoleminingsessionresponseV1']
slug: /tools/sdk/typescript/iai_role_mining/models/roleminingsessionresponse-v1
tags: ['SDK', 'Software Development Kit', 'RoleminingsessionresponseV1', 'v1RoleminingsessionresponseV1']
---

# RoleminingsessionresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **(optional)** `RoleminingsessionscopeV1` |  | [default to undefined]
**minNumIdentitiesInPotentialRole** | **(optional)** `number` | Minimum number of identities in a potential role | [default to undefined]
**scopingMethod** | **(optional)** `string` | The scoping method of the role mining session | [default to undefined]
**prescribedPruneThreshold** | **(optional)** `number` | The computed (or prescribed) prune threshold for this session | [default to undefined]
**pruneThreshold** | **(optional)** `number` | The prune threshold to be used for this role mining session | [default to undefined]
**potentialRoleCount** | **(optional)** `number` | The number of potential roles | [default to undefined]
**potentialRolesReadyCount** | **(optional)** `number` | The number of potential roles which have completed processing | [default to undefined]
**status** | **(optional)** `RoleminingsessionstatusV1` |  | [default to undefined]
**emailRecipientId** | **(optional)** `string` | The id of the user who will receive an email about the role mining session | [default to undefined]
**createdBy** | **(optional)** `RoleminingsessionresponseCreatedByV1` |  | [default to undefined]
**identityCount** | **(optional)** `number` | The number of identities | [default to undefined]
**saved** | **(optional)** `boolean` | The session\'s saved status | [default to false]
**name** | **(optional)** `string` | The session\'s saved name | [default to undefined]
**dataFilePath** | **(optional)** `string` | The data file path of the role mining session | [default to undefined]
**id** | **(optional)** `string` | Session Id for this role mining session | [default to undefined]
**createdDate** | **(optional)** `string` | The date-time when this role mining session was created. | [default to undefined]
**modifiedDate** | **(optional)** `string` | The date-time when this role mining session was completed. | [default to undefined]
**type** | **(optional)** `RoleminingroletypeV1` |  | [default to undefined]

