---
id: access-request-pre-approval1
title: AccessRequestPreApproval1
pagination_label: AccessRequestPreApproval1
sidebar_label: AccessRequestPreApproval1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestPreApproval1'] 
slug: /tools/sdk/powershell/v2024/models/access-request-pre-approval1
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApproval1']
---


# AccessRequestPreApproval1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** |  **Boolean** | Whether or not to approve the access request. | [required]
**Comment** |  **String** | A comment about the decision to approve or deny the request. | [required]
**Approver** |  **String** | The name of the entity that approved or denied the request. | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestPreApproval1 = Initialize-PSSailpoint.V2024AccessRequestPreApproval1  -Approved false `
 -Comment This access should be denied, because this will cause an SOD violation. `
 -Approver AcmeCorpExternalIntegration
```

- Convert the resource to JSON
```powershell
$AccessRequestPreApproval1 | ConvertTo-JSON
```


[[Back to top]](#) 

