---
id: v2025-access-request-response1
title: AccessRequestResponse1
pagination_label: AccessRequestResponse1
sidebar_label: AccessRequestResponse1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestResponse1', 'V2025AccessRequestResponse1'] 
slug: /tools/sdk/powershell/v2025/models/access-request-response1
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse1', 'V2025AccessRequestResponse1']
---


# AccessRequestResponse1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequesterId** | **String** | the requester Id | [optional] 
**RequesterName** | **String** | the requesterName | [optional] 
**Items** | [**[]AccessRequestItemResponse**](access-request-item-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestResponse1 = Initialize-V2025AccessRequestResponse1  -RequesterId 2c91808a77ff216301782327a50f09bf `
 -RequesterName Bing C `
 -Items [{operation=Add, accessItemType=role, name=Role-1, decision=APPROVED, description=The role descrition, sourceId=8a80828f643d484f01643e14202e206f, sourceName=Source1, approvalInfos=[{name=John Snow, id=8a80828f643d484f01643e14202e2000, status=Approved}]}]
```

- Convert the resource to JSON
```powershell
$AccessRequestResponse1 | ConvertTo-JSON
```


[[Back to top]](#) 

