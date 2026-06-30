---
id: machineidentityupdated-single-value-attribute-changes-inner
title: MachineidentityupdatedSingleValueAttributeChangesInner
pagination_label: MachineidentityupdatedSingleValueAttributeChangesInner
sidebar_label: MachineidentityupdatedSingleValueAttributeChangesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineidentityupdatedSingleValueAttributeChangesInner', 'MachineidentityupdatedSingleValueAttributeChangesInner'] 
slug: /tools/sdk/powershell/triggers/models/machineidentityupdated-single-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedSingleValueAttributeChangesInner', 'MachineidentityupdatedSingleValueAttributeChangesInner']
---


# MachineidentityupdatedSingleValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the attribute that was changed. | [required]
**OldValue** | [**MachineidentityupdatedSingleValueAttributeChangesInnerOldValue**](machineidentityupdated-single-value-attribute-changes-inner-old-value) |  | [required]
**NewValue** | [**MachineidentityupdatedSingleValueAttributeChangesInnerNewValue**](machineidentityupdated-single-value-attribute-changes-inner-new-value) |  | [required]

## Examples

- Prepare the resource
```powershell
$MachineidentityupdatedSingleValueAttributeChangesInner = Initialize-MachineidentityupdatedSingleValueAttributeChangesInner  -Name displayName `
 -OldValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$MachineidentityupdatedSingleValueAttributeChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

