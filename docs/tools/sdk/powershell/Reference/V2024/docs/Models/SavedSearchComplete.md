---
id: v2024-saved-search-complete
title: SavedSearchComplete
pagination_label: SavedSearchComplete
sidebar_label: SavedSearchComplete
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchComplete', 'V2024SavedSearchComplete'] 
slug: /tools/sdk/powershell/v2024/models/saved-search-complete
tags: ['SDK', 'Software Development Kit', 'SavedSearchComplete', 'V2024SavedSearchComplete']
---


# SavedSearchComplete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileName** |  **String** | A name for the report file. | [required]
**OwnerEmail** |  **String** | The email address of the identity that owns the saved search. | [required]
**OwnerName** |  **String** | The name of the identity that owns the saved search. | [required]
**Query** |  **String** | The search query that was used to generate the report. | [required]
**SearchName** |  **String** | The name of the saved search. | [required]
**SearchResults** |  [**SavedSearchCompleteSearchResults**](saved-search-complete-search-results) |  | [required]
**SignedS3Url** |  **String** | The Amazon S3 URL to download the report from. | [required]

## Examples

- Prepare the resource
```powershell
$SavedSearchComplete = Initialize-PSSailpoint.V2024SavedSearchComplete  -FileName Modified.zip `
 -OwnerEmail test@sailpoint.com `
 -OwnerName Cloud Support `
 -Query modified:[now-7y/d TO now] `
 -SearchName Modified Activity `
 -SearchResults null `
 -SignedS3Url https://sptcbu-org-data-useast1.s3.amazonaws.com/arsenal-john/reports/Events%20Export.2020-05-06%2018%2759%20GMT.3e580592-86e4-4953-8aea-49e6ef20a086.zip?X-Amz-Algorithm&#x3D;AWS4-HMAC-SHA256&amp;X-Amz-Date&#x3D;20200506T185919Z&amp;X-Amz-SignedHeaders&#x3D;host&amp;X-Amz-Expires&#x3D;899&amp;X-Amz-Credential&#x3D;AKIAV5E54XOGTS4Q4L7A%2F20200506%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Signature&#x3D;2e732bb97a12a1fd8a215613e3c31fcdae8ba1fb6a25916843ab5b51d2ddefbc
```

- Convert the resource to JSON
```powershell
$SavedSearchComplete | ConvertTo-JSON
```


[[Back to top]](#) 

