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

To get an idea of what cmdlets the SDK offers run the following command. This command lists all available Get cmdlets within the SDK:

```powershell
Get-Command -Module PSSailpoint | where-object {$_.name -like "*Get-*" } | Sort-Object Name | Get-Help | Format-Table Name, Synopsis
```

The SDK returns this output:

```powershell
Name                             Synopsis
----                             --------
Get-AccessProfile                Get an Access Profile
Get-AccessProfileEntitlements    List Access Profile's Entitlements
Get-AccessProfiles               List Access Profiles
Get-AccessRequestApprovalSummary Get the number of access-requests-approvals
Get-AccessRequestConfig          Get Access Request Configuration
Get-AccessRequestStatus          Access Request Status
Get-Account                      Account Details
Get-AccountActivities            List Account Activities
Get-AccountActivity              Get an Account Activity
Get-AccountEntitlements          Account Entitlements
Get-Accounts                     Accounts List
Get-AccountsSchema               Downloads source accounts schema template
Get-ActiveCampaigns              List Campaigns
...
```

## List Transforms

Let's say that you wanted to see all the transforms available in your tenant. You can search for the cmdlet:

```powershell
Get-Command -Module PSSailpoint | where-object {$_.name -like "Get-*Transform*" } | Sort-Object Name | Get-Help | Format-Table Name, Synopsis
```

The SDK returns this output (all beta endpoints are designated by the Beta prefix):

```powershell
Name               Synopsis
----               --------
Get-BetaTransform  Transform by ID
Get-BetaTransforms List transforms
Get-Transform      Transform by ID
Get-Transforms     List transforms
```

To get syntax, description and parameters for a single cmdlet, run this command:

```powershell
Get-Help Get-Transforms -Detailed
```

<details>
<summary>Cmdlet Response</summary>

```text
NAME
    Get-Transforms
    
SYNOPSIS
    List transforms
    
    
SYNTAX
    Get-Transforms [[-Offset] <Nullable`1>] [[-Limit] <Nullable`1>] [[-Count] <Nullable`1>] [[-Name] <String>] [[-Filters] <String>] [-WithHttpInfo] [<CommonParameters>]
    
    
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

Running `Get-Transforms` will return a list of all transforms in your tenant.

Running `Get-Transforms -Limit 10 -Filter 'name sw Test"'` will return a list of no more than 10 transforms whose names start with `Test`.

## WithHttpInfo Switch

By default, the cmdlets return just the response from the API without including any information about status code or headers returned. Use the `-WithHttpInfo` switch to return this information with the response.

```powershell
Get-Transforms -WithHttpInfo

Name                           Value
----                           -----
Headers                        {[Date, System.String[]], [Transfer-Encoding, System.String[]], [Connection, System.String[]], [Server, System.String[]]…}
StatusCode                     200
Response                       {System.Management.Automation.OrderedHashtable, System.Management.Automation.OrderedHashtable, System.Management.Automation.Ordered…
```
