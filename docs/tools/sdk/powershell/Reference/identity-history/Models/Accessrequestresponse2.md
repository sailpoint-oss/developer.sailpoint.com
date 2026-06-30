---
id: accessrequestresponse2
title: Accessrequestresponse2
pagination_label: Accessrequestresponse2
sidebar_label: Accessrequestresponse2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestresponse2', 'Accessrequestresponse2'] 
slug: /tools/sdk/powershell/identityhistory/models/accessrequestresponse2
tags: ['SDK', 'Software Development Kit', 'Accessrequestresponse2', 'Accessrequestresponse2']
---


# Accessrequestresponse2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequesterId** | **String** | the requester Id | [optional] 
**RequesterName** | **String** | the requesterName | [optional] 
**Items** | [**[]Accessrequestitemresponse**](accessrequestitemresponse) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequestresponse2 = Initialize-Accessrequestresponse2  -RequesterId 2c91808a77ff216301782327a50f09bf `
 -RequesterName Bing C `
 -Items [{"operation":"Add","accessItemType":"role","name":"Role-1","decision":"APPROVED","description":"The role descrition","sourceId":"8a80828f643d484f01643e14202e206f","sourceName":"Source1","approvalInfos":[{"name":"John Snow","id":"8a80828f643d484f01643e14202e2000","status":"Approved"}]}]
```

- Convert the resource to JSON
```powershell
$Accessrequestresponse2 | ConvertTo-JSON
```


[[Back to top]](#) 

