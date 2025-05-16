---
id: beta-access-request-item-response
title: AccessRequestItemResponse
pagination_label: AccessRequestItemResponse
sidebar_label: AccessRequestItemResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestItemResponse', 'BetaAccessRequestItemResponse'] 
slug: /tools/sdk/powershell/beta/models/access-request-item-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestItemResponse', 'BetaAccessRequestItemResponse']
---


# AccessRequestItemResponse

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
**ApprovalInfos** | [**[]ApprovalInfoResponse**](approval-info-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestItemResponse = Initialize-BetaAccessRequestItemResponse  -Operation Add `
 -AccessItemType role `
 -Name Role-1 `
 -Decision APPROVED `
 -Description The role descrition `
 -SourceId 8a80828f643d484f01643e14202e206f `
 -SourceName Source1 `
 -ApprovalInfos [{name=John Snow, id=8a80828f643d484f01643e14202e2000, status=Approved}]
```

- Convert the resource to JSON
```powershell
$AccessRequestItemResponse | ConvertTo-JSON
```


[[Back to top]](#) 

