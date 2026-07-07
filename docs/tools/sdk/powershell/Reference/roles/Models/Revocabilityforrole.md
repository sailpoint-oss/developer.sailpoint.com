---
id: revocabilityforrole
title: Revocabilityforrole
pagination_label: Revocabilityforrole
sidebar_label: Revocabilityforrole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Revocabilityforrole', 'Revocabilityforrole'] 
slug: /tools/sdk/powershell/roles/models/revocabilityforrole
tags: ['SDK', 'Software Development Kit', 'Revocabilityforrole', 'Revocabilityforrole']
---


# Revocabilityforrole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** | **Boolean** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to $false]
**DenialCommentsRequired** | **Boolean** | Whether an approver must provide comments when denying the request | [optional] [default to $false]
**ApprovalSchemes** | [**[]Approvalschemeforrole**](approvalschemeforrole) | List describing the steps in approving the revocation request | [optional] 

## Examples

- Prepare the resource
```powershell
$Revocabilityforrole = Initialize-Revocabilityforrole  -CommentsRequired false `
 -DenialCommentsRequired false `
 -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$Revocabilityforrole | ConvertTo-JSON
```


[[Back to top]](#) 

