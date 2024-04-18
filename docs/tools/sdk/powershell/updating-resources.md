---
id: powershell-sdk-patch
title: Updating resources with the PowerShell SDK
pagination_label: PowerShell SDK
sidebar_label: Update a resource
sidebar_position: 3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'sdk', 'update']
description: Learn how to update resources using the PowerShell SDK in this guide.
slug: /tools/sdk/powershell/update
tags: ['SDK']
---

You can use the SDK to update resources. These cmdlets will typically start with the `Update` keyword.

To see a list of available create cmdlets, run this command:

```powershell
Get-Command -Module PSSailpoint | where-object {$_.name -like "*Update-*" } | Sort-Object Name | Get-Help | Format-Table Name, Synopsis
```

The SDK returns this output (all beta endpoints are designated by the Beta prefix):

```powershell
Name                        Synopsis
----                        --------
Update-AccessProfile        Patch a specified Access Profile
Update-Account              Update Account
Update-AuthOrgNetworkConfig Update security network configuration.
Update-AuthUser             Auth User Update
Update-BetaAccessProfile    Patch a specified Access Profile
Update-BetaAccount          Update Account
Update-BetaCampaign         Update a Campaign
Update-BetaCampaignTemplate Update a Campaign Template
Update-BetaCommonAccessSta… Bulk update common access status
Update-BetaConnectorRule    Update a Connector Rule
Update-BetaEntitlement      Patch an entitlement
Update-BetaEntitlementsInB… Bulk update an entitlement list
Update-BetaEntitlementsPot… Edit entitlements for a potential rol…
Update-BetaFormDefinition   Patch a form definition.
Update-BetaFormInstance     Patch a form instance.
Update-BetaIdentityProfile  Update the Identity Profile
Update-BetaLifecycleStates  Update Lifecycle State
...
```

Here is an example update WorkGroup script which will update the description for the previously created Workgroup from [Create a Resource](./creating-resources.md):

```powershell
$WorkGroup = Get-BetaWorkgroups -Filters 'name eq "DB Access Governance Group"'

$WorkGroupUpdate = [PSCustomObject]@{
    op = "replace"
    path = "/description"
    value =  "This is an updated description for the workgroup."
}

Update-BetaWorkgroup -Id $WorkGroup.id -JsonPatchOperation $WorkGroupUpdate
```

The updated WorkGroup will be returned by the SDK:

```powershell
Name                           Value
----                           -----
description                    This is an updated description for the workgroup.
owner                          {[displayName, Brian Mendoza], [emailAddress, ], [type, IDENTITY], [id, 0003c25c365e492381d4e557b6159f9b]…}
memberCount                    0
connectionCount                0
id                             a241d625-d948-4c41-839e-869b790837a1
name                           DB Access Governance Group
created                        12/1/2023 5:39:23 PM
modified                       12/1/2023 5:39:23 PM
```
