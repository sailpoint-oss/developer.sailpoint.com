---
id: accountrequest
title: Accountrequest
pagination_label: Accountrequest
sidebar_label: Accountrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountrequest', 'Accountrequest'] 
slug: /tools/sdk/powershell/search/models/accountrequest
tags: ['SDK', 'Software Development Kit', 'Accountrequest', 'Accountrequest']
---


# Accountrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **String** | Unique ID of the account | [optional] 
**AttributeRequests** | [**[]Attributerequest**](attributerequest) |  | [optional] 
**Op** | **String** | The operation that was performed | [optional] 
**ProvisioningTarget** | [**Accountsource**](accountsource) |  | [optional] 
**Result** | [**AccountrequestResult**](accountrequest-result) |  | [optional] 
**Source** | [**Accountsource**](accountsource) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountrequest = Initialize-Accountrequest  -AccountId John.Doe `
 -AttributeRequests null `
 -Op Modify `
 -ProvisioningTarget null `
 -Result null `
 -Source null
```

- Convert the resource to JSON
```powershell
$Accountrequest | ConvertTo-JSON
```


[[Back to top]](#) 

