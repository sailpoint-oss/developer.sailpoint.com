---
id: powershell-sdk-pagination
title: Paginate results with the PowerShell SDK
pagination_label: PowerShell SDK
sidebar_label: Paginate Results
sidebar_position: 5
sidebar_class_name: powershellsdk
keywords: ['powershell', 'sdk', 'paginate']
description: Learn how to paginate results using the PowerShell SDK in this guide.
slug: /tools/sdk/powershell/paginate
tags: ['SDK']
---

By default, your requests will return a maximum of 250 records. To return more, you must implement pagination. To learn more about pagination, refer to [Paginating Results](/idn/api/standard-collection-parameters/#paginating-results).

Pagination is implemented with the SDK in the following code block on line 8:

```powershell showLineNumbers
$Parameters = @{
    "Filters" = 'name co "Andrew"'
}

# Accounts List
try {

    Invoke-Paginate -Function "Get-Accounts" -Increment 250 -Limit 1000 -InitialOffset 0 -Parameters $Parameters

} catch {
    Write-Host $_
    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Get-Accounts")
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```


The `Invoke-Paginate` cmdlet takes a few paramters. The first is the cmdlet you wish to call.

The `-Function` specifies the name of the cmdlet you wish to call. This only works on list endpoints.

The `-Increment` specifies the number of results returned in each call to the endpoint. Defaults to 250.

The `-Limit` specifies the total number of results you can return, 1000.

The `-Parameters` specifies a hashtable of additional values passed to the API endpoint. You would use this for `filters`, `sorters`, and any other query parameters.

You can also provide an `-InitialOffset` value to specify the record number to start the request on. For example, you can provide add `-InitialOffset 10` to start getting accounts from 11 instead of 0. 

To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in [Paginating Results](/idn/api/standard-collection-parameters/#paginating-results).
