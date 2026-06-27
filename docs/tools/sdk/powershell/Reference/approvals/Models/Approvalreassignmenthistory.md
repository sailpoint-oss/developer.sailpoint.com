---
id: approvalreassignmenthistory
title: Approvalreassignmenthistory
pagination_label: Approvalreassignmenthistory
sidebar_label: Approvalreassignmenthistory
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalreassignmenthistory', 'Approvalreassignmenthistory'] 
slug: /tools/sdk/powershell/approvals/models/approvalreassignmenthistory
tags: ['SDK', 'Software Development Kit', 'Approvalreassignmenthistory', 'Approvalreassignmenthistory']
---


# Approvalreassignmenthistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentID** | **String** | Unique identifier for the comment associated with the reassignment. | [optional] 
**ReassignedFrom** | [**Approvalidentity**](approvalidentity) |  | [optional] 
**ReassignedTo** | [**Approvalidentity**](approvalidentity) |  | [optional] 
**Reassigner** | [**Approvalidentity**](approvalidentity) |  | [optional] 
**ReassignmentDate** | **System.DateTime** | Date and time when the reassignment occurred. | [optional] 
**ReassignmentType** |  **Enum** [  "ESCALATION",    "MANUAL_REASSIGNMENT",    "AUTO_REASSIGNMENT" ] | Type of reassignment, such as escalation or manual reassignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalreassignmenthistory = Initialize-Approvalreassignmenthistory  -CommentID f47ac10b-58cc-4372-a567-0e02b2c3d479 `
 -ReassignedFrom null `
 -ReassignedTo null `
 -Reassigner null `
 -ReassignmentDate 2023-10-01T12:34:56.789Z `
 -ReassignmentType ESCALATION
```

- Convert the resource to JSON
```powershell
$Approvalreassignmenthistory | ConvertTo-JSON
```


[[Back to top]](#) 

