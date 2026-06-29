---
id: v1-role-propagation-status-response-v1
title: RolePropagationStatusResponseV1
pagination_label: RolePropagationStatusResponseV1
sidebar_label: RolePropagationStatusResponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RolePropagationStatusResponseV1', 'v1RolePropagationStatusResponseV1']
slug: /tools/sdk/typescript/role_propagation/models/role-propagation-status-response-v1
tags: ['SDK', 'Software Development Kit', 'RolePropagationStatusResponseV1', 'v1RolePropagationStatusResponseV1']
---

# RolePropagationStatusResponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the Role Propagation process triggered. | [default to undefined]
**status** | **(optional)** `string` | Status of the Role Propagation process. | [default to undefined]
**executionStage** | **(optional)** `string` | Current execution stage of the Role Propagation process. | [default to undefined]
**launched** | **(optional)** `string` | Time when the Role Propagation process was launched. | [default to undefined]
**launchedBy** | **(optional)** `RolePropagationStatusResponseLaunchedByV1` |  | [default to undefined]
**terminatedBy** | **(optional)** `RolePropagationStatusResponseTerminatedByV1` |  | [default to undefined]
**completed** | **(optional)** `string` | Time when the Role Propagation process was completed. | [default to undefined]
**failureReason** | **(optional)** `string` | Reason for failure if the Role Propagation process failed. | [default to undefined]
**skipRoleRefresh** | **(optional)** `boolean` | Indicates if the role refresh was skipped during the Role Propagation process. | [default to false]

