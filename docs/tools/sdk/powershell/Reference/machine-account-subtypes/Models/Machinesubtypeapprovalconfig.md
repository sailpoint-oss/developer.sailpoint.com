---
id: machinesubtypeapprovalconfig
title: Machinesubtypeapprovalconfig
pagination_label: Machinesubtypeapprovalconfig
sidebar_label: Machinesubtypeapprovalconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machinesubtypeapprovalconfig', 'Machinesubtypeapprovalconfig'] 
slug: /tools/sdk/powershell/machineaccountsubtypes/models/machinesubtypeapprovalconfig
tags: ['SDK', 'Software Development Kit', 'Machinesubtypeapprovalconfig', 'Machinesubtypeapprovalconfig']
---


# Machinesubtypeapprovalconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approvers** | **String** | Comma separated string of approvers.  Following are the options for approver types: manager, sourceOwner, accountOwner, workgroup:[workgroupId] (Governance group).  Approval request will be assigned based on the order of the approvers passed.  Multiple workgroups(governance groups) can be selected as an approver.  >**Note:** accountOwner approver type is only for machine account delete approval settings. | [optional] 
**Comments** | **String** | Comment configurations for the approval request.  Following are the options for comments: ALL, OFF, APPROVAL, REJECT. | [optional] 

## Examples

- Prepare the resource
```powershell
$Machinesubtypeapprovalconfig = Initialize-Machinesubtypeapprovalconfig  -Approvers manager, workgroup:1419fc28-a8ed-4a07-9f5c-0cb5dfad6311 `
 -Comments ALL
```

- Convert the resource to JSON
```powershell
$Machinesubtypeapprovalconfig | ConvertTo-JSON
```


[[Back to top]](#) 

