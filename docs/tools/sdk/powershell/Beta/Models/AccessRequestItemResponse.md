---
id: access-request-item-response
title: AccessRequestItemResponse
pagination_label: AccessRequestItemResponse
sidebar_label: AccessRequestItemResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestItemResponse'] 
slug: /tools/sdk/powershell/beta/models/access-request-item-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestItemResponse']
---


# AccessRequestItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** |  Pointer to **String** | the access request item operation | [optional] 
**AccessItemType** |  Pointer to **String** | the access item type | [optional] 
**Name** |  Pointer to **String** | the name of access request item | [optional] 
**Decision** |  Pointer to  **Enum** [  "APPROVED",    "REJECTED" ] | the final decision for the access request | [optional] 
**Description** |  Pointer to **String** | the description of access request item | [optional] 
**SourceId** |  Pointer to **String** | the source id | [optional] 
**SourceName** |  Pointer to **String** | the source Name | [optional] 
**ApprovalInfos** |  Pointer to [**[]ApprovalInfoResponse**](approval-info-response) |  | [optional] 

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

