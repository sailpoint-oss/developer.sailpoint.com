---
id: v1-workgroupdeleteitem-v1
title: WorkgroupdeleteitemV1
pagination_label: WorkgroupdeleteitemV1
sidebar_label: WorkgroupdeleteitemV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'WorkgroupdeleteitemV1', 'v1WorkgroupdeleteitemV1']
slug: /tools/sdk/typescript/governance_groups/models/workgroupdeleteitem-v1
tags: ['SDK', 'Software Development Kit', 'WorkgroupdeleteitemV1', 'v1WorkgroupdeleteitemV1']
---

# WorkgroupdeleteitemV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Id of the Governance Group. | [default to undefined]
**status** | `number` |  The HTTP response status code returned for an individual Governance Group that is requested for deletion during a bulk delete operation.  > 204   -  Governance Group deleted successfully.  > 409   - Governance Group is in use,hence can not be deleted.  > 404   - Governance Group not found.  | [default to undefined]
**description** | **(optional)** `string` | Human readable status description and containing additional context information about success or failures etc.  | [default to undefined]

