---
id: list-workgroups-v1429-response
title: ListWorkgroupsV1429Response
pagination_label: ListWorkgroupsV1429Response
sidebar_label: ListWorkgroupsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListWorkgroupsV1429Response', 'ListWorkgroupsV1429Response'] 
slug: /tools/sdk/powershell/governancegroups/models/list-workgroups-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListWorkgroupsV1429Response', 'ListWorkgroupsV1429Response']
---


# ListWorkgroupsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListWorkgroupsV1429Response = Initialize-ListWorkgroupsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListWorkgroupsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

