---
id: v2025-transform-attributes
title: TransformAttributes
pagination_label: TransformAttributes
sidebar_label: TransformAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TransformAttributes', 'V2025TransformAttributes'] 
slug: /tools/sdk/powershell/v2025/models/transform-attributes
tags: ['SDK', 'Software Development Kit', 'TransformAttributes', 'V2025TransformAttributes']
---


# TransformAttributes

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
**Values** | **String** | This must evaluate to a JSON string, either through a fixed value or through conditional logic using the Apache Velocity Template Language. | [required]
**Expression** | **String** | A string value of the date and time components to operation on, along with the math operations to execute.  | [required]
**PositiveCondition** | **String** | The output of the transform if the expression evalutes to true | [required]
**NegativeCondition** | **String** | The output of the transform if the expression evalutes to false | [required]
**FirstDate** | [**DateCompareFirstDate**](date-compare-first-date) |  | [required]
**SecondDate** | [**DateCompareSecondDate**](date-compare-second-date) |  | [required]
**Operator** |  **Enum** [  "LT",    "LTE",    "GT",    "GTE" ] | This is the comparison to perform. | Operation | Description | | --------- | ------- | | LT        | Strictly less than: `firstDate < secondDate` | | LTE       | Less than or equal to: `firstDate <= secondDate` | | GT        | Strictly greater than: `firstDate > secondDate` | | GTE       | Greater than or equal to: `firstDate >= secondDate` |  | [required]
**InputFormat** | [**DateFormatInputFormat**](date-format-input-format) |  | [optional] 
**OutputFormat** | [**DateFormatOutputFormat**](date-format-output-format) |  | [optional] 
**RoundUp** | **Boolean** | A boolean value to indicate whether the transform should round up or down when a rounding `/` operation is defined in the expression.    If not provided, the transform will default to `false`   `true` indicates the transform should round up (i.e., truncate the fractional date/time component indicated and then add one unit of that component)   `false` indicates the transform should round down (i.e., truncate the fractional date/time component indicated)  | [optional] [default to $false]
**DefaultRegion** | **String** | This is an optional attribute that can be used to define the region of the phone number to format into.   If defaultRegion is not provided, it will take US as the default country.   The format of the country code should be in [ISO 3166-1 alpha-2 format](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)  | [optional] 
**IgnoreErrors** | **Boolean** | a true or false value representing to move on to the next option if an error (like an Null Pointer Exception) were to occur. | [optional] [default to $false]
**Name** | **String** | The system (camel-cased) name of the identity attribute to bring in | [required]
**Operation** | **String** | The operation to perform `getReferenceIdentityAttribute` | [required]
**IncludeNumbers** | **Boolean** | This must be either ""true"" or ""false"" to indicate whether the generator logic should include numbers | [required]
**IncludeSpecialChars** | **Boolean** | This must be either ""true"" or ""false"" to indicate whether the generator logic should include special characters | [required]
**Length** | **String** | An integer value for the desired length of the final output string | [required]
**Uid** | **String** | This is the SailPoint User Name (uid) value of the identity whose attribute is desired  As a convenience feature, you can use the `manager` keyword to dynamically look up the user's manager and then get that manager's identity attribute.  | [required]
**Substring** | **String** | A substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. | [required]
**Format** | **String** | An optional value to denote which ISO 3166 format to return. Valid values are:   `alpha2` - Two-character country code (e.g., ""US""); this is the default value if no format is supplied   `alpha3` - Three-character country code (e.g., ""USA"")   `numeric` - The numeric country code (e.g., ""840"")  | [optional] 
**Padding** | **String** | A string value representing the character that the incoming data should be padded with to get to the desired length   If not provided, the transform will default to a single space ("" "") character for padding  | [optional] 
**Table** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | An attribute of key-value pairs. Each pair identifies the pattern to search for as its key, and the replacement string as its value. | [required]
**Id** | **String** | This ID specifies the name of the pre-existing transform which you want to use within your current transform | [required]
**Regex** | **String** | This can be a string or a regex pattern in which you want to replace. | [required]
**Replacement** | **String** | This is the replacement string that should be substituded wherever the string or pattern is found. | [required]
**Delimiter** | **String** | This can be either a single character or a regex expression, and is used by the transform to identify the break point between two substrings in the incoming data | [required]
**Index** | **String** | An integer value for the desired array element after the incoming data has been split into a list; the array is a 0-based object, so the first array element would be index 0, the second element would be index 1, etc. | [required]
**Throws** | **Boolean** | A boolean (true/false) value which indicates whether an exception should be thrown and returned as an output when an index is out of bounds with the resultant array (i.e., the provided index value is larger than the size of the array)   `true` - The transform should return ""IndexOutOfBoundsException""   `false` - The transform should return null   If not provided, the transform will default to false and return a null  | [optional] [default to $false]
**VarBegin** | **Int32** | The index of the first character to include in the returned substring.   If `begin` is set to -1, the transform will begin at character 0 of the input data  | [required]
**BeginOffset** | **Int32** | This integer value is the number of characters to add to the begin attribute when returning a substring.   This attribute is only used if begin is not -1.  | [optional] 
**VarEnd** | **Int32** | The index of the first character to exclude from the returned substring.  If end is -1 or not provided at all, the substring transform will return everything up to the end of the input string.  | [optional] 
**EndOffset** | **Int32** | This integer value is the number of characters to add to the end attribute when returning a substring.   This attribute is only used if end is provided and is not -1.  | [optional] 

## Examples

- Prepare the resource
```powershell
$TransformAttributes = Initialize-V2025TransformAttributes  -SourceName Workday `
 -AttributeName DEPARTMENT `
 -AccountSortAttribute created `
 -AccountSortDescending false `
 -AccountReturnFirstLink false `
 -AccountFilter !(nativeIdentity.startsWith("*DELETED*")) `
 -AccountPropertyFilter (groups.containsAll({'Admin'}) || location == 'Austin') `
 -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}} `
 -Values string$variable `
 -Expression now+1w `
 -PositiveCondition true `
 -NegativeCondition false `
 -FirstDate null `
 -SecondDate null `
 -Operator LT `
 -InputFormat null `
 -OutputFormat null `
 -RoundUp false `
 -DefaultRegion US `
 -IgnoreErrors false `
 -Name email `
 -Operation getReferenceIdentityAttribute `
 -IncludeNumbers true `
 -IncludeSpecialChars true `
 -Length 4 `
 -Uid 2c91808570313110017040b06f344ec9 `
 -Substring admin_ `
 -Format alpha2 `
 -Padding 0 `
 -Table {-= , "=', ñ=n} `
 -Id Existing Transform `
 -Regex [^a-zA-Z] `
 -Replacement   `
 -Delimiter , `
 -Index 5 `
 -Throws true `
 -VarBegin 1 `
 -BeginOffset 3 `
 -VarEnd 6 `
 -EndOffset 1
```

- Convert the resource to JSON
```powershell
$TransformAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

