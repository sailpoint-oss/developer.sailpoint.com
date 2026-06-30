---
id: accountupdated-multi-value-attribute-changes-inner
title: AccountupdatedMultiValueAttributeChangesInner
pagination_label: AccountupdatedMultiValueAttributeChangesInner
sidebar_label: AccountupdatedMultiValueAttributeChangesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountupdatedMultiValueAttributeChangesInner', 'AccountupdatedMultiValueAttributeChangesInner'] 
slug: /tools/sdk/powershell/triggers/models/accountupdated-multi-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedMultiValueAttributeChangesInner', 'AccountupdatedMultiValueAttributeChangesInner']
---


# AccountupdatedMultiValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the attribute that was changed. | [required]
**AddedValues** | [**[]AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner**](accountupdated-multi-value-attribute-changes-inner-added-values-inner) | The values that were added to the attribute. | [required]
**RemovedValues** | [**[]AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner**](accountupdated-multi-value-attribute-changes-inner-added-values-inner) | The values that were removed from the attribute. | [required]

## Examples

- Prepare the resource
```powershell
$AccountupdatedMultiValueAttributeChangesInner = Initialize-AccountupdatedMultiValueAttributeChangesInner  -Name memberOf `
 -AddedValues ["CN=Sales,OU=Groups,DC=acme,DC=com","CN=AllEmployees,OU=Groups,DC=acme,DC=com"] `
 -RemovedValues ["CN=AllEmployees,OU=Groups,DC=acme,DC=com","CN=Contractors,OU=Groups,DC=acme,DC=com"]
```

- Convert the resource to JSON
```powershell
$AccountupdatedMultiValueAttributeChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

