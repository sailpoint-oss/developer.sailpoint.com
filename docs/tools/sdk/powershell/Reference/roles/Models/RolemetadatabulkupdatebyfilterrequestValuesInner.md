---
id: rolemetadatabulkupdatebyfilterrequest-values-inner
title: RolemetadatabulkupdatebyfilterrequestValuesInner
pagination_label: RolemetadatabulkupdatebyfilterrequestValuesInner
sidebar_label: RolemetadatabulkupdatebyfilterrequestValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RolemetadatabulkupdatebyfilterrequestValuesInner', 'RolemetadatabulkupdatebyfilterrequestValuesInner'] 
slug: /tools/sdk/powershell/roles/models/rolemetadatabulkupdatebyfilterrequest-values-inner
tags: ['SDK', 'Software Development Kit', 'RolemetadatabulkupdatebyfilterrequestValuesInner', 'RolemetadatabulkupdatebyfilterrequestValuesInner']
---


# RolemetadatabulkupdatebyfilterrequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeKey** | **String** | the key of metadata attribute | [optional] 
**Values** | **[]String** | the values of attribute to be updated | [required]

## Examples

- Prepare the resource
```powershell
$RolemetadatabulkupdatebyfilterrequestValuesInner = Initialize-RolemetadatabulkupdatebyfilterrequestValuesInner  -AttributeKey iscFederalClassifications `
 -Values ["secret"]
```

- Convert the resource to JSON
```powershell
$RolemetadatabulkupdatebyfilterrequestValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

