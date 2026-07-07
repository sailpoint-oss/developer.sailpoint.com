---
id: accessprofilebulkdeleteresponse
title: Accessprofilebulkdeleteresponse
pagination_label: Accessprofilebulkdeleteresponse
sidebar_label: Accessprofilebulkdeleteresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessprofilebulkdeleteresponse', 'Accessprofilebulkdeleteresponse'] 
slug: /tools/sdk/powershell/accessprofiles/models/accessprofilebulkdeleteresponse
tags: ['SDK', 'Software Development Kit', 'Accessprofilebulkdeleteresponse', 'Accessprofilebulkdeleteresponse']
---


# Accessprofilebulkdeleteresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskId** | **String** | ID of the task which is executing the bulk deletion. This can be passed to the **/task-status** API to track status. | [optional] 
**Pending** | **[]String** | List of IDs of Access Profiles which are pending deletion. | [optional] 
**InUse** | [**[]Accessprofileusage**](accessprofileusage) | List of usages of Access Profiles targeted for deletion. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessprofilebulkdeleteresponse = Initialize-Accessprofilebulkdeleteresponse  -TaskId 2c9180867817ac4d017817c491119a20 `
 -Pending ["2c91808876438bbb017668c21919ecca","2c91808876438bb201766e129f151816"] `
 -InUse null
```

- Convert the resource to JSON
```powershell
$Accessprofilebulkdeleteresponse | ConvertTo-JSON
```


[[Back to top]](#) 

