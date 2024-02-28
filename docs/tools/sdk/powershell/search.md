---
id: powershell-sdk-search
title: Search with the PowerShell SDK
pagination_label: PowerShell SDK
sidebar_label: Search
sidebar_position: 5
sidebar_class_name: powershellsdk
keywords: ['powershell', 'sdk', 'search']
description: Learn how to search using the PowerShell SDK in this guide.
slug: /tools/sdk/powershell/search
tags: ['SDK']
---

The PowerShell SDK provides you access to IdentityNow's [Search](https://documentation.sailpoint.com/saas/help/search/index.html) functionality.

Here is an example search you can copy into your PowerShell instance to try it out:

```powershell
$Json = @"
{
 "indices": [
  "identities"
 ],
 "query": {
  "query": "\"john.doe\"",
  "fields": [
  "name"
  ]
 }
 }
"@

$Search = ConvertFrom-JsonToSearch -Json $Json

try {
    Search-Post -Search $Search
} catch {
    Write-Host ("Exception occurred when calling Search-Post: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example request uses the [Perform Search endpoint](/docs/api/v3/search-post) to search your tenant for identities with the name "john.doe".

### Paginate search results

You can paginate your search results to get records past the default limit of 10000. With pagination, you can get as many records as you want.

Use the syntax shown in this example to paginate your search results:

```powershell
$JSON = @"
{
 "indices": [
  "identities"
 ],
 "query": {
  "query": "*",
  "fields": [
  "name"
  ]
 },
 "sort": [
  "-displayName"
 ]
 }
"@

$Search = ConvertFrom-JsonToSearch -Json $JSON

try {

    Invoke-PaginateSearch -Increment 5000 -Limit 150000 -Search $Search

} catch {
    Write-Host $_
    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Paginate-Search")
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example searches your IdentityNow tenant for all identities and sorts them by their `displayName` in descending order. The search returns a maximum of 150000 records (the `Limit`) and 5000 records per page (the `Increment`).

To paginate the search results, you can specify these parameters:

- `-Increment`: The number of records to return per page.
- `-Limit`: The maximum number of records to return per request. The default is 10000.
- `-Offset`: The number of the first record to return with the request. The default is 0.
