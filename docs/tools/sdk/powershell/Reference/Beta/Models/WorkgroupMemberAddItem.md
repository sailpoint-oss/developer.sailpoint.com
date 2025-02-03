---
id: beta-workgroup-member-add-item
title: WorkgroupMemberAddItem
pagination_label: WorkgroupMemberAddItem
sidebar_label: WorkgroupMemberAddItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkgroupMemberAddItem', 'BetaWorkgroupMemberAddItem'] 
slug: /tools/sdk/powershell/beta/models/workgroup-member-add-item
tags: ['SDK', 'Software Development Kit', 'WorkgroupMemberAddItem', 'BetaWorkgroupMemberAddItem']
---


# WorkgroupMemberAddItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identifier of identity in bulk member add request. | [required]
**Status** | **Int32** |  The HTTP response status code returned for an individual member that is requested for addition during a bulk add operation. The HTTP response status code returned for an individual Governance Group is requested for deletion.  > 201   - Identity is added into Governance Group members list.  > 409   - Identity is already member of  Governance Group.  | [required]
**Description** | **String** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkgroupMemberAddItem = Initialize-PSSailpoint.BetaWorkgroupMemberAddItem  -Id 464ae7bf791e49fdb74606a2e4a89635 `
 -Status 201 `
 -Description 
&gt; Identity is added into Governance Group members list.

&gt; Unable to set Membership of Identity &quot;3244d5f2d04447498520f54c6789ae33&quot; to Governance Group &quot;f80bba83-98c4-4ec2-81c8-373c00e9663b&quot;; the relationship already exists.

```

- Convert the resource to JSON
```powershell
$WorkgroupMemberAddItem | ConvertTo-JSON
```


[[Back to top]](#) 

