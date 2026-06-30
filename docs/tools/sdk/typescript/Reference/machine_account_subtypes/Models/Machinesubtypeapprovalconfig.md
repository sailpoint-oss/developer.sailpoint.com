---
id: v1-machinesubtypeapprovalconfig-v1
title: MachinesubtypeapprovalconfigV1
pagination_label: MachinesubtypeapprovalconfigV1
sidebar_label: MachinesubtypeapprovalconfigV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachinesubtypeapprovalconfigV1', 'v1MachinesubtypeapprovalconfigV1']
slug: /tools/sdk/typescript/machine_account_subtypes/models/machinesubtypeapprovalconfig-v1
tags: ['SDK', 'Software Development Kit', 'MachinesubtypeapprovalconfigV1', 'v1MachinesubtypeapprovalconfigV1']
---

# MachinesubtypeapprovalconfigV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvers** | **(optional)** `string` | Comma separated string of approvers.  Following are the options for approver types: manager, sourceOwner, accountOwner, workgroup:[workgroupId] (Governance group).  Approval request will be assigned based on the order of the approvers passed.  Multiple workgroups(governance groups) can be selected as an approver.  >**Note:** accountOwner approver type is only for machine account delete approval settings. | [default to undefined]
**comments** | **(optional)** `string` | Comment configurations for the approval request.  Following are the options for comments: ALL, OFF, APPROVAL, REJECT. | [default to undefined]

