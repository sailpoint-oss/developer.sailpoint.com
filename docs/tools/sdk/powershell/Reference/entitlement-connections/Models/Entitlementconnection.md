---
id: entitlementconnection
title: Entitlementconnection
pagination_label: Entitlementconnection
sidebar_label: Entitlementconnection
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementconnection', 'Entitlementconnection'] 
slug: /tools/sdk/powershell/entitlementconnections/models/entitlementconnection
tags: ['SDK', 'Software Development Kit', 'Entitlementconnection', 'Entitlementconnection']
---


# Entitlementconnection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TenantId** | **String** | Tenant identifier that owns the connection. | [optional] 
**ConnectionId** | **String** | Entitlement connection identifier. | [optional] 
**IdentityId** | **String** | Identity identifier associated with the connection. | [optional] 
**MachineIdentityId** | **String** | Machine identity identifier when the connection is machine-backed. | [optional] 
**AccountId** | **String** | Account identifier for the connected source account. | [optional] 
**EntitlementId** | **String** | Entitlement identifier on the source. | [optional] 
**SourceId** | **String** | Source identifier that provides the account and entitlement. | [optional] 
**Standalone** | **Boolean** | Indicates whether the connection is marked as standalone. | [optional] [default to $false]
**AttributeName** | **String** | Entitlement attribute name on the source. | [optional] 
**AttributeValue** | **String** | Entitlement attribute value on the source. | [optional] 
**Type** |  **Enum** [  "JIT",    "STANDING",    "NA" ] | Connection type classification. | [optional] 
**State** | **String** | Current lifecycle state of the connection. | [optional] 
**StateChanged** | **System.DateTime** | Time the connection state was last updated. | [optional] 
**StateChangedBy** | **String** | Identifier of the actor that last changed state. | [optional] 
**JitActivation** | **System.DateTime** | Time JIT activation occurred. | [optional] 
**JitProvision** | **System.DateTime** | Time provisioning completed for JIT activation. | [optional] 
**JitDeactivation** | **System.DateTime** | Time JIT deactivation occurred. | [optional] 
**JitDeprovision** | **System.DateTime** | Time deprovisioning completed after JIT deactivation. | [optional] 
**JitExpiration** | **System.DateTime** | Time when JIT access expires. | [optional] 
**DeleteAfter** | **System.DateTime** | Time after which the connection is eligible for deletion. | [optional] 
**Created** | **System.DateTime** | Time when the connection was created. | [optional] 
**Modified** | **System.DateTime** | Time when the connection was last modified. | [optional] 
**ActorName** | **String** | Display value for the actor associated with the latest change. | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementconnection = Initialize-Entitlementconnection  -TenantId 0b0d4856-4f0b-490a-a7da-3a741946e1d9 `
 -ConnectionId 6c692d9972f8400ca4560a68f62c4c5f `
 -IdentityId 35d80d89f3274418ba5748f0b3838d49 `
 -MachineIdentityId 77c4ca79c5554f09afd87d651f62af79 `
 -AccountId 17a0e011f3fc4b43a19ddf13d6b92ede `
 -EntitlementId d532fa5cb15748e2873c6a01e5923ec4 `
 -SourceId 60ab87390360421f8b7d731cb1f7017b `
 -Standalone true `
 -AttributeName memberOf `
 -AttributeValue CN=cloud support,OU=Automation_Users,OU=slpt-automation,DC=TestAutomationAD,DC=local `
 -Type JIT `
 -State AVAILABLE `
 -StateChanged 2025-10-30T15:02:12.345-05:00 `
 -StateChangedBy c0bd1330f1c34d7989dd10dc39a1b561 `
 -JitActivation 2025-12-03T10:15:30+01:00 `
 -JitProvision 2025-12-03T10:15:30+01:00 `
 -JitDeactivation 2025-12-03T10:15:30+01:00 `
 -JitDeprovision 2025-12-03T10:15:30+01:00 `
 -JitExpiration 2025-12-03T10:15:30+01:00 `
 -DeleteAfter 2026-12-03T10:15:30+01:00 `
 -Created 2025-10-29T09:00-05:00 `
 -Modified 2025-10-30T15:02:12.345-05:00 `
 -ActorName e29b41d4a41644679df31f96c209888a
```

- Convert the resource to JSON
```powershell
$Entitlementconnection | ConvertTo-JSON
```


[[Back to top]](#) 

