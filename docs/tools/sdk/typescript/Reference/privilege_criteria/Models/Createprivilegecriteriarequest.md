---
id: v1-createprivilegecriteriarequest-v1
title: CreateprivilegecriteriarequestV1
pagination_label: CreateprivilegecriteriarequestV1
sidebar_label: CreateprivilegecriteriarequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreateprivilegecriteriarequestV1', 'v1CreateprivilegecriteriarequestV1']
slug: /tools/sdk/typescript/privilege_criteria/models/createprivilegecriteriarequest-v1
tags: ['SDK', 'Software Development Kit', 'CreateprivilegecriteriarequestV1', 'v1CreateprivilegecriteriarequestV1']
---

# CreateprivilegecriteriarequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceId** | **(optional)** `string` | The Id of the source that the criteria is applied to. | [default to undefined]
**type** | **(optional)** `string` | The type of criteria being created. Expects \"CUSTOM\". | [default to undefined]
**operator** | **(optional)** `string` | The logical operator to apply between groups. | [default to undefined]
**groups** | **(optional)** `Array<CreateprivilegecriteriarequestGroupsInnerV1>` |  | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The privilege level assigned by this criteria. | [default to undefined]

