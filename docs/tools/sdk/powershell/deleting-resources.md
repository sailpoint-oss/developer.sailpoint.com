---
id: powershell-sdk-delete
title: Deleting resources with the PowerShell SDK
pagination_label: PowerShell SDK
sidebar_label: Delete a resource
sidebar_position: 4
sidebar_class_name: powershellsdk
keywords: ['powershell', 'sdk', 'delete']
description: Learn how to delete resources using the PowerShell SDK in this guide.
slug: /tools/sdk/powershell/delete
tags: ['SDK']
---

You can use the SDK to delete resources. These cmdlets will typically start with the `Remove` keyword.

Here is an example script that searches for the previously created Workgroup by name and calls the delete cmdlet to remove it from your environment.

```powershell
$WorkGroup = Get-BetaWorkgroups -Filters 'name eq "DB Access Governance Group"'

Remove-BetaWorkgroup -Id $WorkGroup.id -WithHttpInfo
```

Using the [WithHttpInfo Switch](./getting-started.md#withhttpinfo-switch) in the script above, we can verify the operation completed successfully by the 204 status code.

```powershell
Name                           Value
----                           -----
Response                       
StatusCode                     204
Headers                        {[Date, System.String[]], [Connection, System.String[]], [Server, System.String[]], [Vary, System.String[]]…}
```
