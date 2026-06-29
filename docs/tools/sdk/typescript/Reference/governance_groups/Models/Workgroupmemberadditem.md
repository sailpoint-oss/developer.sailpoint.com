---
id: v1-workgroupmemberadditem-v1
title: WorkgroupmemberadditemV1
pagination_label: WorkgroupmemberadditemV1
sidebar_label: WorkgroupmemberadditemV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'WorkgroupmemberadditemV1', 'v1WorkgroupmemberadditemV1']
slug: /tools/sdk/typescript/governance_groups/models/workgroupmemberadditem-v1
tags: ['SDK', 'Software Development Kit', 'WorkgroupmemberadditemV1', 'v1WorkgroupmemberadditemV1']
---

# WorkgroupmemberadditemV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Identifier of identity in bulk member add request. | [default to undefined]
**status** | `number` |  The HTTP response status code returned for an individual member that is requested for addition during a bulk add operation. The HTTP response status code returned for an individual Governance Group is requested for deletion.  > 201   - Identity is added into Governance Group members list.  > 409   - Identity is already member of  Governance Group.  | [default to undefined]
**description** | **(optional)** `string` | Human readable status description and containing additional context information about success or failures etc.  | [default to undefined]

