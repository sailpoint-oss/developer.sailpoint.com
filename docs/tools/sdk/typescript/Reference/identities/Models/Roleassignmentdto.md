---
id: v1-roleassignmentdto-v1
title: RoleassignmentdtoV1
pagination_label: RoleassignmentdtoV1
sidebar_label: RoleassignmentdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleassignmentdtoV1', 'v1RoleassignmentdtoV1']
slug: /tools/sdk/typescript/identities/models/roleassignmentdto-v1
tags: ['SDK', 'Software Development Kit', 'RoleassignmentdtoV1', 'v1RoleassignmentdtoV1']
---

# RoleassignmentdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Assignment Id | [default to undefined]
**role** | **(optional)** `BasereferencedtoV1` |  | [default to undefined]
**comments** | **(optional)** `string` | Comments added by the user when the assignment was made | [default to undefined]
**assignmentSource** | **(optional)** `string` | Source describing how this assignment was made | [default to undefined]
**assigner** | **(optional)** `RoleassignmentdtoAssignerV1` |  | [default to undefined]
**assignedDimensions** | **(optional)** `Array<BasereferencedtoV1>` | Dimensions assigned related to this role | [default to undefined]
**assignmentContext** | **(optional)** `RoleassignmentdtoAssignmentContextV1` |  | [default to undefined]
**accountTargets** | **(optional)** `Array<RoletargetdtoV1>` |  | [default to undefined]
**startDate** | **(optional)** `string` | Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately | [default to undefined]
**removeDate** | **(optional)** `string` | Date that the assignment will be removed | [default to undefined]
**addedDate** | **(optional)** `string` | Date that the assignment was added | [default to undefined]

