---
id: certificationreference
title: Certificationreference
pagination_label: Certificationreference
sidebar_label: Certificationreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Certificationreference', 'Certificationreference'] 
slug: /tools/sdk/powershell/certifications/models/certificationreference
tags: ['SDK', 'Software Development Kit', 'Certificationreference', 'Certificationreference']
---


# Certificationreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id of the certification. | [optional] 
**Name** | **String** | The name of the certification. | [optional] 
**Type** |  **Enum** [  "CERTIFICATION" ] |  | [optional] 
**Reviewer** | [**Reviewer**](reviewer) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Certificationreference = Initialize-Certificationreference  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Name Certification Name `
 -Type CERTIFICATION `
 -Reviewer null
```

- Convert the resource to JSON
```powershell
$Certificationreference | ConvertTo-JSON
```


[[Back to top]](#) 

