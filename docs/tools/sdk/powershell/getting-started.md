---
id: powershell-sdk-getting-started
title: Getting started with the PowerShell SDK
pagination_label: PowerShell SDK
sidebar_label: Getting Started
sidebar_position: 1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'sdk', 'start']
description: Learn how to use the PowerShell SDK in this guide.
slug: /tools/sdk/powershell/getting-started
tags: ['SDK']
---

Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. To learn how to install and configure the PowerShell SDK, refer to [Installation and Configuration](./index.mdx).

The SDK loads its API cmdlets into separate, per-resource partition modules (`PSSailpoint.Transforms`, `PSSailpoint.Accounts`, and so on), all of which are imported for you when you import `PSSailpoint`. Because those cmdlets don't live in the root `PSSailpoint` module, `Get-Command -Module PSSailpoint` won't list them. Use the `Get-SailPointCommand` cmdlet instead — it discovers cmdlets across all the loaded partition modules and accepts an optional `-Name` wildcard filter.

To get an idea of what cmdlets the SDK offers run the following command. This command lists all available Get cmdlets within the SDK:

```powershell
Get-SailPointCommand -Name 'Get-*' | Get-Help | Format-Table Name, Synopsis
```

The SDK returns this output:

```powershell
Name                               Synopsis
----                               --------
Get-AccessProfileV1                Get an Access Profile
Get-AccessProfileEntitlementsV1    List Access Profile's Entitlements
Get-AccessProfilesV1               List Access Profiles
Get-AccessRequestApprovalSummaryV1 Get the number of access-requests-approvals
Get-AccessRequestConfigV1          Get Access Request Configuration
Get-AccessRequestStatusV1          Access Request Status
Get-AccountV1                      Account Details
Get-AccountActivitiesV1            List Account Activities
Get-AccountActivityV1              Get an Account Activity
Get-AccountEntitlementsV1          Account Entitlements
Get-AccountsV1                     Accounts List
Get-AccountsSchemaV1               Downloads source accounts schema template
Get-ActiveCampaignsV1              List Campaigns
...
```

## List transforms

Let's say that you wanted to see all the transforms available in your tenant. You can search for the cmdlet:

```powershell
Get-SailPointCommand -Name 'Get-*Transform*' | Get-Help | Format-Table Name, Synopsis
```

The SDK returns this output (each cmdlet name carries the endpoint version as a suffix, such as `V1`):

```powershell
Name             Synopsis
----             --------
Get-TransformV1  Transform by ID
Get-TransformsV1 List transforms
```

To get syntax, description and parameters for a single cmdlet, run this command:

```powershell
Get-Help Get-TransformsV1 -Detailed
```

<details>
<summary>Cmdlet response</summary>

```text
NAME
    Get-TransformsV1

SYNOPSIS
    List transforms


SYNTAX
    Get-TransformsV1 [[-Offset] <Nullable`1>] [[-Limit] <Nullable`1>] [[-Count] <Nullable`1>] [[-Name] <String>] [[-Filters] <String>] [-WithHttpInfo] [<CommonParameters>]


DESCRIPTION
    Gets a list of all saved transform objects. A token with 'transforms-list read' authority is required to call this API.


PARAMETERS
    -Offset <Nullable`1>
        Offset into the full result set. Usually specified with *limit* to paginate through the results. For more information, refer to [V3 API Standard Collection
        Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters).

    -Limit <Nullable`1>
        Max number of results to return. For more information, refer to [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters).

    -Count <Nullable`1>
        If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a
        performance impact, it is recommended not to send **count=true** if that value will not be used. For more information, refer to [V3 API Standard Collection
        Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters).

    -Name <String>
        Name of the transform to retrieve from the list.

    -Filters <String>
        Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results). Filtering is
        supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw*

    -WithHttpInfo [<SwitchParameter>]
        A switch that, when enabled, will return a hash table of Response, StatusCode and Headers, instead of just the Response.

    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, refer to
        about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).
```

</details>

Running `Get-TransformsV1` will return a list of all transforms in your tenant.

Running `Get-TransformsV1 -Limit 10 -Filters 'name sw "Test"'` will return a list of no more than 10 transforms whose names start with `Test`.

## WithHttpInfo switch

By default, the cmdlets return just the response from the API without including any information about status code or headers returned. Use the `-WithHttpInfo` switch to return this information with the response.

```powershell
Get-TransformsV1 -WithHttpInfo

Name                           Value
----                           -----
Headers                        {[Date, System.String[]], [Transfer-Encoding, System.String[]], [Connection, System.String[]], [Server, System.String[]]…}
StatusCode                     200
Response                       {System.Management.Automation.OrderedHashtable, System.Management.Automation.OrderedHashtable, System.Management.Automation.Ordered…
```
