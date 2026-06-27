---
id: accountrequestinfo
title: Accountrequestinfo
pagination_label: Accountrequestinfo
sidebar_label: Accountrequestinfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountrequestinfo', 'Accountrequestinfo'] 
slug: /tools/sdk/powershell/accountactivities/models/accountrequestinfo
tags: ['SDK', 'Software Development Kit', 'Accountrequestinfo', 'Accountrequestinfo']
---


# Accountrequestinfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedObjectId** | **String** | Id of requested object | [optional] 
**RequestedObjectName** | **String** | Human-readable name of requested object | [optional] 
**RequestedObjectType** | [**Requestableobjecttype**](requestableobjecttype) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountrequestinfo = Initialize-Accountrequestinfo  -RequestedObjectId 2c91808563ef85690164001c31140c0c `
 -RequestedObjectName Treasury Analyst `
 -RequestedObjectType null
```

- Convert the resource to JSON
```powershell
$Accountrequestinfo | ConvertTo-JSON
```


[[Back to top]](#) 

