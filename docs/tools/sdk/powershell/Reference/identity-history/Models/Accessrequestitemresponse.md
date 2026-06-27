---
id: accessrequestitemresponse
title: Accessrequestitemresponse
pagination_label: Accessrequestitemresponse
sidebar_label: Accessrequestitemresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestitemresponse', 'Accessrequestitemresponse'] 
slug: /tools/sdk/powershell/identityhistory/models/accessrequestitemresponse
tags: ['SDK', 'Software Development Kit', 'Accessrequestitemresponse', 'Accessrequestitemresponse']
---


# Accessrequestitemresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | **String** | the access request item operation | [optional] 
**AccessItemType** | **String** | the access item type | [optional] 
**Name** | **String** | the name of access request item | [optional] 
**Decision** |  **Enum** [  "APPROVED",    "REJECTED" ] | the final decision for the access request | [optional] 
**Description** | **String** | the description of access request item | [optional] 
**SourceId** | **String** | the source id | [optional] 
**SourceName** | **String** | the source Name | [optional] 
**ApprovalInfos** | [**[]Approvalinforesponse**](approvalinforesponse) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequestitemresponse = Initialize-Accessrequestitemresponse  -Operation Add `
 -AccessItemType role `
 -Name Role-1 `
 -Decision APPROVED `
 -Description The role descrition `
 -SourceId 8a80828f643d484f01643e14202e206f `
 -SourceName Source1 `
 -ApprovalInfos [{"name":"John Snow","id":"8a80828f643d484f01643e14202e2000","status":"Approved"}]
```

- Convert the resource to JSON
```powershell
$Accessrequestitemresponse | ConvertTo-JSON
```


[[Back to top]](#) 

