---
id: powershell-sdk-create
title: Creating resources with the PowerShell SDK
pagination_label: PowerShell SDK
sidebar_label: Create a resource
sidebar_position: 2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'sdk', 'create']
description: Learn how to create new resources using the PowerShell SDK in this guide.
slug: /tools/sdk/powershell/create
tags: ['SDK']
---

You can use the SDK to create new resources. These cmdlets will typically start with the `New` keyword.

To see a list of available create cmdlets, run this command:

```powershell
Get-Command -Module PSSailpoint | where-object {$_.name -like "*New-*" } | Sort-Object Name | Get-Help | Format-Table Name, Synopsis
```

The SDK returns this output (all beta endpoints are designated by the Beta prefix):

```powershell
Name                     Synopsis
----                     --------
New-AccessProfile        Create an Access Profile
New-AccessRequest        Submit an Access Request
New-Account              Create Account
New-AuthOrgNetworkConfig Create security network configuration.
New-BetaAccessProfile    Create an Access Profile
New-BetaAccessRequest    Submit an Access Request
New-BetaAccount          Create Account
New-BetaCampaign         Create a campaign
New-BetaCampaignTemplate Create a Campaign Template
New-BetaCommonAccess     Create common access items
New-BetaConnectorRule    Create Connector Rule
New-BetaCustomPasswordI… Create Custom Password Instructions
New-BetaDigitToken       Generate a digit token
New-BetaDomainDkim       Verify domain address via DKIM
...
```

Here is an example create workgroup script from the beta APIs you can copy into your PowerShell instance to try it out:

```powershell showLineNumbers
$Identity = Get-PublicIdentities -Limit 1

$JSON = @"
{
    "owner": {
      "type": "IDENTITY",
      "id": "$($Identity.id)",
      "name": "$($Identity.name)"
    },
    "name": "DB Access Governance Group",
    "description": "Description of the Governance Group"
  }
"@

$WorkGroup = ConvertFrom-BetaJsonToWorkgroupDto -Json $JSON

$WorkGroup = Initialize-BetaWorkgroupDto -Name "DB Access Governance Group" -Description "Description of the Governance Group" -Owner @{
    "type" = "IDENTITY"
    "id" = $Identity.id
    "name" = $Identity.name
}

New-BetaWorkgroup -WorkgroupDto $WorkGroup
```

The example uses the `Get-PublicIdentities -Limit` cmdlet to pull an identity needed to be the owner of the Workgroup and shows two ways of creating the new WorkGroup to send with the request.

The first on lines 3-15 initializes a json string then converts the string into a WorkGroup object with `ConvertFrom-BetaJsonToWorkgroupDto`

The second on lines 17-21 initializes the WorkGroup object by passing in each property of the WorkGroup.

The WorkGroup will be returned by the SDK:

```powershell
Name                           Value
----                           -----
description                    Description of the Governance Group
owner                          {[displayName, Brian Mendoza], [emailAddress, ], [type, IDENTITY], [id, 0003c25c365e492381d4e557b6159f9b]…}
memberCount                    0
connectionCount                0
id                             a241d625-d948-4c41-839e-869b790837a1
name                           DB Access Governance Group
created
modified
```
