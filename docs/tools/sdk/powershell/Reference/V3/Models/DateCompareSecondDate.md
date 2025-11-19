---
id: date-compare-second-date
title: DateCompareSecondDate
pagination_label: DateCompareSecondDate
sidebar_label: DateCompareSecondDate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DateCompareSecondDate', 'DateCompareSecondDate'] 
slug: /tools/sdk/powershell/v3/models/date-compare-second-date
tags: ['SDK', 'Software Development Kit', 'DateCompareSecondDate', 'DateCompareSecondDate']
---


# DateCompareSecondDate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceName** | **String** | A reference to the source to search for the account | [required]
**AttributeName** | **String** | The name of the attribute on the account to return. This should match the name of the account attribute name visible in the user interface, or on the source schema. | [required]
**AccountSortAttribute** | **String** | The value of this configuration is a string name of the attribute to use when determining the ordering of returned accounts when there are multiple entries | [optional] [default to "created"]
**AccountSortDescending** | **Boolean** | The value of this configuration is a boolean (true/false). Controls the order of the sort when there are multiple accounts. If not defined, the transform will default to false (ascending order) | [optional] [default to $false]
**AccountReturnFirstLink** | **Boolean** | The value of this configuration is a boolean (true/false). Controls which account to source a value from for an attribute.  If this flag is set to true, the transform returns the value from the first account in the list, even if it is null. If it is set to false, the transform returns the first non-null value. If not defined, the transform will default to false | [optional] [default to $false]
**AccountFilter** | **String** | This expression queries the database to narrow search results. The value of this configuration is a sailpoint.object.Filter expression and used when searching against the database.  The default filter will always include the source and identity, and any subsequent expressions will be combined in an AND operation to the existing search criteria. Only certain searchable attributes are available:  - `nativeIdentity` - the Account ID  - `displayName` - the Account Name  - `entitlements` - a boolean value to determine if the account has entitlements | [optional] 
**AccountPropertyFilter** | **String** | This expression is used to search and filter accounts in memory. The value of this configuration is a sailpoint.object.Filter expression and used when searching against the returned resultset.  All account attributes are available for filtering as this operation is performed in memory. | [optional] 
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 
**InputFormat** | [**DateFormatInputFormat**](date-format-input-format) |  | [optional] 
**OutputFormat** | [**DateFormatOutputFormat**](date-format-output-format) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DateCompareSecondDate = Initialize-DateCompareSecondDate  -SourceName Workday `
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
$DateCompareSecondDate | ConvertTo-JSON
```


[[Back to top]](#) 

