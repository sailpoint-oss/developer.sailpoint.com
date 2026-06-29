---
id: nonemployeesourcerequestbody
title: Nonemployeesourcerequestbody
pagination_label: Nonemployeesourcerequestbody
sidebar_label: Nonemployeesourcerequestbody
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeesourcerequestbody', 'Nonemployeesourcerequestbody'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeesourcerequestbody
tags: ['SDK', 'Software Development Kit', 'Nonemployeesourcerequestbody', 'Nonemployeesourcerequestbody']
---


# Nonemployeesourcerequestbody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of non-employee source. | [required]
**Description** | **String** | Description of non-employee source. | [required]
**Owner** | [**Nonemployeeidnuserrequest**](nonemployeeidnuserrequest) |  | [required]
**ManagementWorkgroup** | **String** | The ID for the management workgroup that contains source sub-admins | [optional] 
**Approvers** | [**[]Nonemployeeidnuserrequest**](nonemployeeidnuserrequest) | List of approvers. | [optional] 
**AccountManagers** | [**[]Nonemployeeidnuserrequest**](nonemployeeidnuserrequest) | List of account managers. | [optional] 

## Examples

- Prepare the resource
```powershell
$Nonemployeesourcerequestbody = Initialize-Nonemployeesourcerequestbody  -Name Retail `
 -Description Source description `
 -Owner null `
 -ManagementWorkgroup 123299 `
 -Approvers null `
 -AccountManagers null
```

- Convert the resource to JSON
```powershell
$Nonemployeesourcerequestbody | ConvertTo-JSON
```


[[Back to top]](#) 

