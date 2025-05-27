---
id: update-detail
title: UpdateDetail
pagination_label: UpdateDetail
sidebar_label: UpdateDetail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UpdateDetail', 'UpdateDetail'] 
slug: /tools/sdk/powershell/v3/models/update-detail
tags: ['SDK', 'Software Development Kit', 'UpdateDetail', 'UpdateDetail']
---


# UpdateDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **String** | The detailed message for an update. Typically the relevent error message when status is error. | [optional] 
**ScriptName** | **String** | The connector script name | [optional] 
**UpdatedFiles** | **[]String** | The list of updated files supported by the connector | [optional] 
**Status** |  **Enum** [  "ERROR",    "UPDATED",    "UNCHANGED",    "SKIPPED" ] | The connector update status | [optional] 

## Examples

- Prepare the resource
```powershell
$UpdateDetail = Initialize-UpdateDetail  -Message unsupported xsd version, please ensure latest xsd version http://www.sailpoint.com/xsd/sailpoint_form_2_0.xsd is used for source config `
 -ScriptName servicenow `
 -UpdatedFiles [pod/org/connectorFiles/testconnector/test1.jar] `
 -Status ERROR
```

- Convert the resource to JSON
```powershell
$UpdateDetail | ConvertTo-JSON
```


[[Back to top]](#) 

