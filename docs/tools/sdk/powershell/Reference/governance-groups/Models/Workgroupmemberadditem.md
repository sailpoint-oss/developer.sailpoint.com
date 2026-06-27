---
id: workgroupmemberadditem
title: Workgroupmemberadditem
pagination_label: Workgroupmemberadditem
sidebar_label: Workgroupmemberadditem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workgroupmemberadditem', 'Workgroupmemberadditem'] 
slug: /tools/sdk/powershell/governancegroups/models/workgroupmemberadditem
tags: ['SDK', 'Software Development Kit', 'Workgroupmemberadditem', 'Workgroupmemberadditem']
---


# Workgroupmemberadditem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identifier of identity in bulk member add request. | [required]
**Status** | **Int32** |  The HTTP response status code returned for an individual member that is requested for addition during a bulk add operation. The HTTP response status code returned for an individual Governance Group is requested for deletion.  > 201   - Identity is added into Governance Group members list.  > 409   - Identity is already member of  Governance Group.  | [required]
**Description** | **String** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Workgroupmemberadditem = Initialize-Workgroupmemberadditem  -Id 464ae7bf791e49fdb74606a2e4a89635 `
 -Status 201 `
 -Description 
> Identity is added into Governance Group members list.

> Unable to set Membership of Identity "3244d5f2d04447498520f54c6789ae33" to Governance Group "f80bba83-98c4-4ec2-81c8-373c00e9663b"; the relationship already exists.

```

- Convert the resource to JSON
```powershell
$Workgroupmemberadditem | ConvertTo-JSON
```


[[Back to top]](#) 

