---
id: servicedeskintegrationtemplatedto
title: Servicedeskintegrationtemplatedto
pagination_label: Servicedeskintegrationtemplatedto
sidebar_label: Servicedeskintegrationtemplatedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Servicedeskintegrationtemplatedto', 'Servicedeskintegrationtemplatedto'] 
slug: /tools/sdk/powershell/servicedeskintegration/models/servicedeskintegrationtemplatedto
tags: ['SDK', 'Software Development Kit', 'Servicedeskintegrationtemplatedto', 'Servicedeskintegrationtemplatedto']
---


# Servicedeskintegrationtemplatedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Type** | **String** | The 'type' property specifies the type of the Service Desk integration template. | [required][default to "Web Service SDIM"]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The 'attributes' property value is a map of attributes available for integrations using this Service Desk integration template. | [required]
**ProvisioningConfig** | [**Provisioningconfig**](provisioningconfig) |  | [required]

## Examples

- Prepare the resource
```powershell
$Servicedeskintegrationtemplatedto = Initialize-Servicedeskintegrationtemplatedto  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Type Web Service SDIM `
 -Attributes {"property":"value","key":"value"} `
 -ProvisioningConfig null
```

- Convert the resource to JSON
```powershell
$Servicedeskintegrationtemplatedto | ConvertTo-JSON
```


[[Back to top]](#) 

