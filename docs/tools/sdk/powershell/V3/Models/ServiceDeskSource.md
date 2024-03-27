---
id: service-desk-source
title: ServiceDeskSource
pagination_label: ServiceDeskSource
sidebar_label: ServiceDeskSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ServiceDeskSource'] 
slug: /tools/sdk/powershell/v3/models/service-desk-source
tags: ['SDK', 'Software Development Kit', 'ServiceDeskSource']
---


# ServiceDeskSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "SOURCE" ] | DTO type of source for service desk integration template. | [optional] 
**Id** |  Pointer to **String** | ID of source for service desk integration template. | [optional] 
**Name** |  Pointer to **String** | Human-readable name of source for service desk integration template. | [optional] 

## Examples

- Prepare the resource
```powershell
$ServiceDeskSource = Initialize-PSSailpointServiceDeskSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$ServiceDeskSource | ConvertTo-JSON
```


[[Back to top]](#) 

