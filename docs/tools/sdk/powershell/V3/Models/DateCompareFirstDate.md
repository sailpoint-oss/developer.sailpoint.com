---
id: date-compare-first-date
title: DateCompareFirstDate
pagination_label: DateCompareFirstDate
sidebar_label: DateCompareFirstDate
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'DateCompareFirstDate'] 
slug: /tools/sdk/powershell/v3/models/date-compare-first-date
tags: ['SDK', 'Software Development Kit', 'DateCompareFirstDate']
---


# DateCompareFirstDate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceName** |  **String** | A reference to the source to search for the account | 
**AttributeName** |  **String** | The name of the attribute on the account to return. This should match the name of the account attribute name visible in the user interface, or on the source schema. | 
**AccountSortAttribute** |  Pointer to **String** | The value of this configuration is a string name of the attribute to use when determining the ordering of returned accounts when there are multiple entries | [optional] [default to "created"]
**AccountSortDescending** |  Pointer to **Boolean** | The value of this configuration is a boolean (true/false). Controls the order of the sort when there are multiple accounts. If not defined, the transform will default to false (ascending order) | [optional] [default to $false]
**AccountReturnFirstLink** |  Pointer to **Boolean** | The value of this configuration is a boolean (true/false). Controls which account to source a value from for an attribute.  If this flag is set to true, the transform returns the value from the first account in the list, even if it is null. If it is set to false, the transform returns the first non-null value. If not defined, the transform will default to false | [optional] [default to $false]
**AccountFilter** |  Pointer to **String** | This expression queries the database to narrow search results. The value of this configuration is a sailpoint.object.Filter expression and used when searching against the database.  The default filter will always include the source and identity, and any subsequent expressions will be combined in an AND operation to the existing search criteria. Only certain searchable attributes are available:  - &#x60;nativeIdentity&#x60; - the Account ID  - &#x60;displayName&#x60; - the Account Name  - &#x60;entitlements&#x60; - a boolean value to determine if the account has entitlements | [optional] 
**AccountPropertyFilter** |  Pointer to **String** | This expression is used to search and filter accounts in memory. The value of this configuration is a sailpoint.object.Filter expression and used when searching against the returned resultset.  All account attributes are available for filtering as this operation is performed in memory. | [optional] 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [map[string] **Any**] | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 
**InputFormat** |  Pointer to [**DateFormatInputFormat**](date-format-input-format) |  | [optional] 
**OutputFormat** |  Pointer to [**DateFormatOutputFormat**](date-format-output-format) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DateCompareFirstDate = Initialize-DateCompareFirstDate  -SourceName Workday `
 -AttributeName DEPARTMENT `
 -AccountSortAttribute created `
 -AccountSortDescending false `
 -AccountReturnFirstLink false `
 -AccountFilter !(nativeIdentity.startsWith("*DELETED*")) `
 -AccountPropertyFilter (groups.containsAll({'Admin'}) || location == 'Austin') `
 -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}} `
 -InputFormat null `
 -OutputFormat null
```

- Convert the resource to JSON
```powershell
$DateCompareFirstDate | ConvertTo-JSON
```


[[Back to top]](#) 

