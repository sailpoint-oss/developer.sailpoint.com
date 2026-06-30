---
id: accessprofileusage-used-by-inner
title: AccessprofileusageUsedByInner
pagination_label: AccessprofileusageUsedByInner
sidebar_label: AccessprofileusageUsedByInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessprofileusageUsedByInner', 'AccessprofileusageUsedByInner'] 
slug: /tools/sdk/powershell/accessprofiles/models/accessprofileusage-used-by-inner
tags: ['SDK', 'Software Development Kit', 'AccessprofileusageUsedByInner', 'AccessprofileusageUsedByInner']
---


# AccessprofileusageUsedByInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ROLE" ] | DTO type of role using the access profile. | [optional] 
**Id** | **String** | ID of role using the access profile. | [optional] 
**Name** | **String** | Display name of role using the access profile. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessprofileusageUsedByInner = Initialize-AccessprofileusageUsedByInner  -Type ROLE `
 -Id 2c8180857a9b3da0017aa03418480f9d `
 -Name Manager Role
```

- Convert the resource to JSON
```powershell
$AccessprofileusageUsedByInner | ConvertTo-JSON
```


[[Back to top]](#) 

