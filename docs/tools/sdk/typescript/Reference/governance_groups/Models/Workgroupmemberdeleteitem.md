---
id: v1-workgroupmemberdeleteitem-v1
title: WorkgroupmemberdeleteitemV1
pagination_label: WorkgroupmemberdeleteitemV1
sidebar_label: WorkgroupmemberdeleteitemV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'WorkgroupmemberdeleteitemV1', 'v1WorkgroupmemberdeleteitemV1']
slug: /tools/sdk/typescript/governance_groups/models/workgroupmemberdeleteitem-v1
tags: ['SDK', 'Software Development Kit', 'WorkgroupmemberdeleteitemV1', 'v1WorkgroupmemberdeleteitemV1']
---

# WorkgroupmemberdeleteitemV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Identifier of identity in bulk member add /remove request. | [default to undefined]
**status** | `number` | The HTTP response status code returned for an individual  member that is requested for deletion during a bulk delete operation.  > 204   - Identity is removed from Governance Group members list.  > 404   - Identity is not member of Governance Group.  | [default to undefined]
**description** | **(optional)** `string` | Human readable status description and containing additional context information about success or failures etc.  | [default to undefined]

