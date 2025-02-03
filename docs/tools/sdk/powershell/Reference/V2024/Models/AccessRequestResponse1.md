---
id: v2024-access-request-response1
title: AccessRequestResponse1
pagination_label: AccessRequestResponse1
sidebar_label: AccessRequestResponse1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestResponse1', 'V2024AccessRequestResponse1'] 
slug: /tools/sdk/powershell/v2024/models/access-request-response1
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse1', 'V2024AccessRequestResponse1']
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
$AccessRequestResponse1 = Initialize-PSSailpoint.V2024AccessRequestResponse1  -RequesterId 2c91808a77ff216301782327a50f09bf `
 -RequesterName Bing C `
 -Items [{operation&#x3D;Add, accessItemType&#x3D;role, name&#x3D;Role-1, decision&#x3D;APPROVED, description&#x3D;The role descrition, sourceId&#x3D;8a80828f643d484f01643e14202e206f, sourceName&#x3D;Source1, approvalInfos&#x3D;[{name&#x3D;John Snow, id&#x3D;8a80828f643d484f01643e14202e2000, status&#x3D;Approved}]}]
```

- Convert the resource to JSON
```powershell
$AccessRequestResponse1 | ConvertTo-JSON
```


[[Back to top]](#) 

