---
id: approvalstatusdto
title: Approvalstatusdto
pagination_label: Approvalstatusdto
sidebar_label: Approvalstatusdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalstatusdto', 'Approvalstatusdto'] 
slug: /tools/sdk/powershell/accessrequests/models/approvalstatusdto
tags: ['SDK', 'Software Development Kit', 'Approvalstatusdto', 'Approvalstatusdto']
---


# Approvalstatusdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** | **Boolean** | True if the request for this item was forwarded from one owner to another. | [optional] [default to $false]
**OriginalOwner** | [**ApprovalstatusdtoOriginalOwner**](approvalstatusdto-original-owner) |  | [optional] 
**CurrentOwner** | [**ApprovalstatusdtoCurrentOwner**](approvalstatusdto-current-owner) |  | [optional] 
**Modified** | **System.DateTime** | Time at which item was modified. | [optional] 
**Status** | [**Manualworkitemstate**](manualworkitemstate) |  | [optional] 
**Scheme** | [**Approvalscheme**](approvalscheme) |  | [optional] 
**ErrorMessages** | [**[]Errormessagedto**](errormessagedto) | If the request failed, includes any error messages that were generated. | [optional] 
**Comment** | **String** | Comment, if any, provided by the approver. | [optional] 
**RemoveDate** | **System.DateTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalstatusdto = Initialize-Approvalstatusdto  -Forwarded false `
 -OriginalOwner null `
 -CurrentOwner null `
 -Modified 2019-08-23T18:52:57.398Z `
 -Status null `
 -Scheme null `
 -ErrorMessages null `
 -Comment I approve this request `
 -RemoveDate 2020-07-11T00:00Z
```

- Convert the resource to JSON
```powershell
$Approvalstatusdto | ConvertTo-JSON
```


[[Back to top]](#) 

