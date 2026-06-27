---
id: accessrequestpreapproval2
title: Accessrequestpreapproval2
pagination_label: Accessrequestpreapproval2
sidebar_label: Accessrequestpreapproval2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestpreapproval2', 'Accessrequestpreapproval2'] 
slug: /tools/sdk/powershell/triggers/models/accessrequestpreapproval2
tags: ['SDK', 'Software Development Kit', 'Accessrequestpreapproval2', 'Accessrequestpreapproval2']
---


# Accessrequestpreapproval2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | **Boolean** | Whether or not to approve the access request. | [required]
**Comment** | **String** | A comment about the decision to approve or deny the request. | [required]
**Approver** | **String** | The name of the entity that approved or denied the request. | [required]

## Examples

- Prepare the resource
```powershell
$Accessrequestpreapproval2 = Initialize-Accessrequestpreapproval2  -Approved false `
 -Comment This access should be denied, because this will cause an SOD violation. `
 -Approver AcmeCorpExternalIntegration
```

- Convert the resource to JSON
```powershell
$Accessrequestpreapproval2 | ConvertTo-JSON
```


[[Back to top]](#) 

