---
id: managedclusterencryptionconfig
title: Managedclusterencryptionconfig
pagination_label: Managedclusterencryptionconfig
sidebar_label: Managedclusterencryptionconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managedclusterencryptionconfig', 'Managedclusterencryptionconfig'] 
slug: /tools/sdk/powershell/managedclusters/models/managedclusterencryptionconfig
tags: ['SDK', 'Software Development Kit', 'Managedclusterencryptionconfig', 'Managedclusterencryptionconfig']
---


# Managedclusterencryptionconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Format** |  **Enum** [  "V2",    "V3" ] | Specifies the format used for encrypted data, such as secrets. The format determines how the encrypted data is structured and processed. | [optional] 

## Examples

- Prepare the resource
```powershell
$Managedclusterencryptionconfig = Initialize-Managedclusterencryptionconfig  -Format V3
```

- Convert the resource to JSON
```powershell
$Managedclusterencryptionconfig | ConvertTo-JSON
```


[[Back to top]](#) 

