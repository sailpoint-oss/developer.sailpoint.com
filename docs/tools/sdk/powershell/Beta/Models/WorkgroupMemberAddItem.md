---
id: workgroup-member-add-item
title: WorkgroupMemberAddItem
pagination_label: WorkgroupMemberAddItem
sidebar_label: WorkgroupMemberAddItem
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkgroupMemberAddItem'] 
slug: /tools/sdk/powershell/beta/models/workgroup-member-add-item
tags: ['SDK', 'Software Development Kit', 'WorkgroupMemberAddItem']
---


# WorkgroupMemberAddItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Identifier of identity in bulk member add request. | 
**Status** |  **String** |  The HTTP response status code returned for an individual member that is requested for addition during a bulk add operation.   The HTTP response status code returned for an individual Governance Group is requested for deletion.   &gt; 201   - Identity is added into Governance Group members list.  &gt; 409   - Identity is already member of  Governance Group.  | 
**Description** |  Pointer to **String** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkgroupMemberAddItem = Initialize-BetaWorkgroupMemberAddItem  -Id 464ae7bf791e49fdb74606a2e4a89635 `
 -Status 201 `
 -Description 
> Identity is added into Governance Group members list.

> Unable to set Membership of Identity "3244d5f2d04447498520f54c6789ae33" to Governance Group "f80bba83-98c4-4ec2-81c8-373c00e9663b"; the relationship already exists.

```

- Convert the resource to JSON
```powershell
$WorkgroupMemberAddItem | ConvertTo-JSON
```


[[Back to top]](#) 

