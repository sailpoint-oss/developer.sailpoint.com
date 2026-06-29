---
id: workgroupdeleteitem
title: Workgroupdeleteitem
pagination_label: Workgroupdeleteitem
sidebar_label: Workgroupdeleteitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workgroupdeleteitem', 'Workgroupdeleteitem'] 
slug: /tools/sdk/powershell/governancegroups/models/workgroupdeleteitem
tags: ['SDK', 'Software Development Kit', 'Workgroupdeleteitem', 'Workgroupdeleteitem']
---


# Workgroupdeleteitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the Governance Group. | [required]
**Status** | **Int32** |  The HTTP response status code returned for an individual Governance Group that is requested for deletion during a bulk delete operation.  > 204   -  Governance Group deleted successfully.  > 409   - Governance Group is in use,hence can not be deleted.  > 404   - Governance Group not found.  | [required]
**Description** | **String** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Workgroupdeleteitem = Initialize-Workgroupdeleteitem  -Id 464ae7bf791e49fdb74606a2e4a89635 `
 -Status 204 `
 -Description 
> Governance Group deleted successfully.

> Unable to delete Governance Group f80bba83-98c4-4ec2-81c8-373c00e9663b because it is in use.

> Referenced Governance Group 2b711763-ed35-42a2-a80c-8f1ce0dc4a7f was not found.

```

- Convert the resource to JSON
```powershell
$Workgroupdeleteitem | ConvertTo-JSON
```


[[Back to top]](#) 

