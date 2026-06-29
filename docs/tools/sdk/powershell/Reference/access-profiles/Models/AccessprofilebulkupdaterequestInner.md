---
id: accessprofilebulkupdaterequest-inner
title: AccessprofilebulkupdaterequestInner
pagination_label: AccessprofilebulkupdaterequestInner
sidebar_label: AccessprofilebulkupdaterequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessprofilebulkupdaterequestInner', 'AccessprofilebulkupdaterequestInner'] 
slug: /tools/sdk/powershell/accessprofiles/models/accessprofilebulkupdaterequest-inner
tags: ['SDK', 'Software Development Kit', 'AccessprofilebulkupdaterequestInner', 'AccessprofilebulkupdaterequestInner']
---


# AccessprofilebulkupdaterequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access Profile ID. | [optional] 
**Requestable** | **Boolean** | Access Profile is requestable or not. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessprofilebulkupdaterequestInner = Initialize-AccessprofilebulkupdaterequestInner  -Id 464ae7bf-791e-49fd-b746-06a2e4a8 `
 -Requestable false
```

- Convert the resource to JSON
```powershell
$AccessprofilebulkupdaterequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

