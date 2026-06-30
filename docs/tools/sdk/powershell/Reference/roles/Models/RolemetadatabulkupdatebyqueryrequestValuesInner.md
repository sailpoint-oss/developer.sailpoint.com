---
id: rolemetadatabulkupdatebyqueryrequest-values-inner
title: RolemetadatabulkupdatebyqueryrequestValuesInner
pagination_label: RolemetadatabulkupdatebyqueryrequestValuesInner
sidebar_label: RolemetadatabulkupdatebyqueryrequestValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RolemetadatabulkupdatebyqueryrequestValuesInner', 'RolemetadatabulkupdatebyqueryrequestValuesInner'] 
slug: /tools/sdk/powershell/roles/models/rolemetadatabulkupdatebyqueryrequest-values-inner
tags: ['SDK', 'Software Development Kit', 'RolemetadatabulkupdatebyqueryrequestValuesInner', 'RolemetadatabulkupdatebyqueryrequestValuesInner']
---


# RolemetadatabulkupdatebyqueryrequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeKey** | **String** | the key of metadata attribute | [optional] 
**AttributeValue** | **[]String** | the values of attribute to be updated | [optional] 

## Examples

- Prepare the resource
```powershell
$RolemetadatabulkupdatebyqueryrequestValuesInner = Initialize-RolemetadatabulkupdatebyqueryrequestValuesInner  -AttributeKey iscFederalClassifications `
 -AttributeValue ["topSecret"]
```

- Convert the resource to JSON
```powershell
$RolemetadatabulkupdatebyqueryrequestValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

