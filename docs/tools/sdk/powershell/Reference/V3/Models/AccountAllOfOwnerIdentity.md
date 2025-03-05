---
id: account-all-of-owner-identity
title: AccountAllOfOwnerIdentity
pagination_label: AccountAllOfOwnerIdentity
sidebar_label: AccountAllOfOwnerIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAllOfOwnerIdentity', 'AccountAllOfOwnerIdentity'] 
slug: /tools/sdk/powershell/v3/models/account-all-of-owner-identity
tags: ['SDK', 'Software Development Kit', 'AccountAllOfOwnerIdentity', 'AccountAllOfOwnerIdentity']
---


# AccountAllOfOwnerIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountAllOfOwnerIdentity = Initialize-PSSailpoint.V3AccountAllOfOwnerIdentity  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$AccountAllOfOwnerIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

