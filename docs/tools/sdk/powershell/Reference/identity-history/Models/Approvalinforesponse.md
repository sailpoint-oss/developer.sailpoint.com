---
id: approvalinforesponse
title: Approvalinforesponse
pagination_label: Approvalinforesponse
sidebar_label: Approvalinforesponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalinforesponse', 'Approvalinforesponse'] 
slug: /tools/sdk/powershell/identityhistory/models/approvalinforesponse
tags: ['SDK', 'Software Development Kit', 'Approvalinforesponse', 'Approvalinforesponse']
---


# Approvalinforesponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the id of approver | [optional] 
**Name** | **String** | the name of approver | [optional] 
**Status** | **String** | the status of the approval request | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalinforesponse = Initialize-Approvalinforesponse  -Id 8a80828f643d484f01643e14202e2000 `
 -Name John Snow `
 -Status Approved
```

- Convert the resource to JSON
```powershell
$Approvalinforesponse | ConvertTo-JSON
```


[[Back to top]](#) 

