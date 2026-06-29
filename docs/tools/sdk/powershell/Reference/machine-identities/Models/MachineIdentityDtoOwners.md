---
id: machine-identity-dto-owners
title: MachineIdentityDtoOwners
pagination_label: MachineIdentityDtoOwners
sidebar_label: MachineIdentityDtoOwners
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineIdentityDtoOwners', 'MachineIdentityDtoOwners'] 
slug: /tools/sdk/powershell/machineidentities/models/machine-identity-dto-owners
tags: ['SDK', 'Software Development Kit', 'MachineIdentityDtoOwners', 'MachineIdentityDtoOwners']
---


# MachineIdentityDtoOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryIdentity** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Defines the identity which is selected as the primary owner | [required]
**SecondaryIdentities** | [**[]Basereferencedto**](basereferencedto) | Defines the identities which are selected as secondary owners | [required]

## Examples

- Prepare the resource
```powershell
$MachineIdentityDtoOwners = Initialize-MachineIdentityDtoOwners  -PrimaryIdentity null `
 -SecondaryIdentities null
```

- Convert the resource to JSON
```powershell
$MachineIdentityDtoOwners | ConvertTo-JSON
```


[[Back to top]](#) 

