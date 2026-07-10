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
Get-SailPointCommand -Name 'Update-*' | Get-Help | Format-Table Name, Synopsis
```

The SDK returns this output (each cmdlet name carries the endpoint version as a suffix, such as `V1`):

```powershell
Name                            Synopsis
----                            --------
Update-AccessProfileV1          Patch a specified Access Profile
Update-AccessProfilesInBulkV1   Update Access Profiles In Bulk
Update-AccountV1                Update Account
Update-AuthOrgNetworkConfigV1   Update security network configuration.
Update-AuthUserV1               Auth User Update
Update-CampaignTemplateV1       Update a Campaign Template
Update-CampaignV1               Update a Campaign
Update-CommonAccessStatusInBulkV1 Bulk update common access status
Update-EntitlementV1            Patch an entitlement
Update-EntitlementsInBulkV1     Bulk update an entitlement list
Update-EntitlementsPotentialRoleV1 Edit entitlements for a potential rol…
Update-FormDefinitionV1         Patch a form definition.
Update-FormInstanceV1           Patch a form instance.
Update-IdentityProfileV1        Update the Identity Profile
Update-LifecycleStatesV1        Update Lifecycle State
...
```

Here is an example update WorkGroup script which will update the description for the previously created Workgroup from [Create a Resource](./creating-resources.md):

```powershell
$WorkGroup = Get-WorkgroupsV1 -Filters 'name eq "DB Access Governance Group"'

$WorkGroupUpdate = [PSCustomObject]@{
    op = "replace"
    path = "/description"
    value =  "This is an updated description for the workgroup."
}

Update-WorkgroupV1 -Id $WorkGroup.id -JsonPatchOperation $WorkGroupUpdate
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
