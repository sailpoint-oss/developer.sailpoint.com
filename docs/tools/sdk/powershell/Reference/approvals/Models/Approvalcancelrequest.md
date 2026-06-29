---
id: approvalcancelrequest
title: Approvalcancelrequest
pagination_label: Approvalcancelrequest
sidebar_label: Approvalcancelrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalcancelrequest', 'Approvalcancelrequest'] 
slug: /tools/sdk/powershell/approvals/models/approvalcancelrequest
tags: ['SDK', 'Software Development Kit', 'Approvalcancelrequest', 'Approvalcancelrequest']
---


# Approvalcancelrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Optional comment associated with the cancel request. | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalcancelrequest = Initialize-Approvalcancelrequest  -Comment Cancelled by administrator
```

- Convert the resource to JSON
```powershell
$Approvalcancelrequest | ConvertTo-JSON
```


[[Back to top]](#) 

