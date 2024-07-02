---
id: access-request-response
title: AccessRequestResponse
pagination_label: AccessRequestResponse
sidebar_label: AccessRequestResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestResponse'] 
slug: /tools/sdk/powershell/beta/models/access-request-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse']
---


# AccessRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequesterId** |  Pointer to **String** | the requester Id | [optional] 
**RequesterName** |  Pointer to **String** | the requesterName | [optional] 
**Items** |  Pointer to [**[]AccessRequestItemResponse**](access-request-item-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestResponse = Initialize-BetaAccessRequestResponse  -RequesterId 2c91808a77ff216301782327a50f09bf `
 -RequesterName Bing C `
 -Items [{operation=Add, accessItemType=role, name=Role-1, decision=APPROVED, description=The role descrition, sourceId=8a80828f643d484f01643e14202e206f, sourceName=Source1, approvalInfos=[{name=John Snow, id=8a80828f643d484f01643e14202e2000, status=Approved}]}]
```

- Convert the resource to JSON
```powershell
$AccessRequestResponse | ConvertTo-JSON
```


[[Back to top]](#) 

