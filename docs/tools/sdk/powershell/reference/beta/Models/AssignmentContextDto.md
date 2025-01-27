---
id: assignment-context-dto
title: AssignmentContextDto
pagination_label: AssignmentContextDto
sidebar_label: AssignmentContextDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AssignmentContextDto'] 
slug: /tools/sdk/powershell/beta/models/assignment-context-dto
tags: ['SDK', 'Software Development Kit', 'AssignmentContextDto']
---


# AssignmentContextDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requested** |  Pointer to [**AccessRequestContext**](access-request-context) |  | [optional] 
**Matched** |  Pointer to [**[]RoleMatchDto**](role-match-dto) |  | [optional] 
**ComputedDate** |  Pointer to **String** | Date that the assignment will was evaluated | [optional] 

## Examples

- Prepare the resource
```powershell
$AssignmentContextDto = Initialize-PSSailpoint.BetaAssignmentContextDto  -Requested null `
 -Matched null `
 -ComputedDate Wed Feb 14 10:58:42
```

- Convert the resource to JSON
```powershell
$AssignmentContextDto | ConvertTo-JSON
```


[[Back to top]](#) 

