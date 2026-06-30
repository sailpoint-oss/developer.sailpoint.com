---
id: updatedetail
title: Updatedetail
pagination_label: Updatedetail
sidebar_label: Updatedetail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Updatedetail', 'Updatedetail'] 
slug: /tools/sdk/powershell/connectors/models/updatedetail
tags: ['SDK', 'Software Development Kit', 'Updatedetail', 'Updatedetail']
---


# Updatedetail

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
$Updatedetail = Initialize-Updatedetail  -Message unsupported xsd version, please ensure latest xsd version http://www.sailpoint.com/xsd/sailpoint_form_2_0.xsd is used for source config `
 -ScriptName servicenow `
 -UpdatedFiles ["pod/org/connectorFiles/testconnector/test1.jar"] `
 -Status ERROR
```

- Convert the resource to JSON
```powershell
$Updatedetail | ConvertTo-JSON
```


[[Back to top]](#) 

