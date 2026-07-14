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
Get-SailPointCommand -Name 'New-*' | Get-Help | Format-Table Name, Synopsis
```

The SDK returns this output (each cmdlet name carries the endpoint version as a suffix, such as `V1`):

```powershell
Name                                    Synopsis
----                                    --------
New-AccessModelMetadataAttributeV1      Create Access Model Metadata Attribute
New-AccessProfileV1                     Create an Access Profile
New-AccessRequestV1                     Submit an Access Request
New-AccountV1                           Create Account
New-ApplicationV1                       Create Application
New-AuthOrgNetworkConfigV1              Create security network configuration.
New-BrandingItemV1                      Create a branding item
New-CampaignFilterV1                    Create a Campaign Filter
New-CampaignTemplateV1                  Create a Campaign Template
New-CampaignV1                          Create a campaign
New-CommonAccessV1                      Create common access items
New-ConnectorCustomizerV1               Create Connector Customizer
New-ConnectorRuleV1                     Create Connector Rule
New-CustomPasswordInstructionsV1        Create Custom Password Instructions
...
```

Here is an example create workgroup script you can copy into your PowerShell instance to try it out:

```powershell showLineNumbers
$Identity = Get-PublicIdentitiesV1 -Limit 1

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

$WorkGroup = ConvertFrom-JsonToWorkgroupdto -Json $JSON

$WorkGroup = Initialize-Workgroupdto -Name "DB Access Governance Group" -Description "Description of the Governance Group" -Owner @{
    "type" = "IDENTITY"
    "id" = $Identity.id
    "name" = $Identity.name
}

New-WorkgroupV1 -WorkgroupDto $WorkGroup
```

The example uses the `Get-PublicIdentitiesV1 -Limit` cmdlet to pull an identity needed to be the owner of the Workgroup and shows two ways of creating the new WorkGroup to send with the request.

The first on lines 3-15 initializes a json string then converts the string into a WorkGroup object with `ConvertFrom-JsonToWorkgroupdto`

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
