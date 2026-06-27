---
id: authuserlevelsidentitycount
title: Authuserlevelsidentitycount
pagination_label: Authuserlevelsidentitycount
sidebar_label: Authuserlevelsidentitycount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Authuserlevelsidentitycount', 'Authuserlevelsidentitycount'] 
slug: /tools/sdk/powershell/customuserlevels/models/authuserlevelsidentitycount
tags: ['SDK', 'Software Development Kit', 'Authuserlevelsidentitycount', 'Authuserlevelsidentitycount']
---


# Authuserlevelsidentitycount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the user level. | [optional] 
**Count** | **Int32** | Number of identities having this user level. | [optional] 

## Examples

- Prepare the resource
```powershell
$Authuserlevelsidentitycount = Initialize-Authuserlevelsidentitycount  -Id idn:access-request-administrator `
 -Count 10
```

- Convert the resource to JSON
```powershell
$Authuserlevelsidentitycount | ConvertTo-JSON
```


[[Back to top]](#) 

