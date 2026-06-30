---
id: rolemetadatabulkupdatebyidrequest-values-inner
title: RolemetadatabulkupdatebyidrequestValuesInner
pagination_label: RolemetadatabulkupdatebyidrequestValuesInner
sidebar_label: RolemetadatabulkupdatebyidrequestValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RolemetadatabulkupdatebyidrequestValuesInner', 'RolemetadatabulkupdatebyidrequestValuesInner'] 
slug: /tools/sdk/powershell/roles/models/rolemetadatabulkupdatebyidrequest-values-inner
tags: ['SDK', 'Software Development Kit', 'RolemetadatabulkupdatebyidrequestValuesInner', 'RolemetadatabulkupdatebyidrequestValuesInner']
---


# RolemetadatabulkupdatebyidrequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | the key of metadata attribute | [required]
**Values** | **[]String** | the values of attribute to be updated | [required]

## Examples

- Prepare the resource
```powershell
$RolemetadatabulkupdatebyidrequestValuesInner = Initialize-RolemetadatabulkupdatebyidrequestValuesInner  -Attribute iscFederalClassifications `
 -Values ["secret"]
```

- Convert the resource to JSON
```powershell
$RolemetadatabulkupdatebyidrequestValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

