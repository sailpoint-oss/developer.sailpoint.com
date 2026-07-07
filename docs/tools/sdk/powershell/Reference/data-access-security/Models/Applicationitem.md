---
id: applicationitem
title: Applicationitem
pagination_label: Applicationitem
sidebar_label: Applicationitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Applicationitem', 'Applicationitem'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/applicationitem
tags: ['SDK', 'Software Development Kit', 'Applicationitem', 'Applicationitem']
---


# Applicationitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int64** | The unique identifier of the application. | [optional] 
**Name** | **String** | The display name of the application. | [optional] 
**Description** | **String** | A brief description of the application and its purpose. | [optional] 
**Type** | **String** | The type of the application. | [optional] 
**Tags** | [**[]Tag**](tag) | A list of tags associated with the application. | [optional] 
**TestConnectionStatus** | **String** | The status of the last connection test performed on the application. | [optional] 
**TestConnectionDate** | **Int64** | The timestamp of the last connection test performed on the application, in milliseconds since epoch. | [optional] 
**RcClusterId** | **String** | The identifier of the cluster used for crawling resources. | [optional] 
**DcClusterId** | **String** | The identifier of the cluster used for data classification. | [optional] 
**PcClusterId** | **String** | The identifier of the cluster used for permission collection. | [optional] 

## Examples

- Prepare the resource
```powershell
$Applicationitem = Initialize-Applicationitem  -Id 12345 `
 -Name HR File Server `
 -Description Stores HR documents and employee records. `
 -Type OneDriveForBusiness `
 -Tags [{"id":101,"name":"Confidential"}] `
 -TestConnectionStatus Success `
 -TestConnectionDate 1700000000000 `
 -RcClusterId 459B5ABB-47BE-4069-8DB1-D6A8BE3F4D47 `
 -DcClusterId B28B4B37-9E47-426B-BAFD-A1FF048B4DAC `
 -PcClusterId E1304AA9-D8FA-4574-A5CD-B59A6D8CB918
```

- Convert the resource to JSON
```powershell
$Applicationitem | ConvertTo-JSON
```


[[Back to top]](#) 

