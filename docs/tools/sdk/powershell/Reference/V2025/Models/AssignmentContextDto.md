---
id: v2025-assignment-context-dto
title: AssignmentContextDto
pagination_label: AssignmentContextDto
sidebar_label: AssignmentContextDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AssignmentContextDto', 'V2025AssignmentContextDto'] 
slug: /tools/sdk/powershell/v2025/models/assignment-context-dto
tags: ['SDK', 'Software Development Kit', 'AssignmentContextDto', 'V2025AssignmentContextDto']
---


# AssignmentContextDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requested** | [**AccessRequestContext**](access-request-context) |  | [optional] 
**Matched** | [**[]RoleMatchDto**](role-match-dto) |  | [optional] 
**ComputedDate** | **String** | Date that the assignment will was evaluated | [optional] 

## Examples

- Prepare the resource
```powershell
$AssignmentContextDto = Initialize-PSSailpoint.V2025AssignmentContextDto  -Requested null `
 -Matched null `
 -ComputedDate Wed Feb 14 10:58:42
```

- Convert the resource to JSON
```powershell
$AssignmentContextDto | ConvertTo-JSON
```


[[Back to top]](#) 

