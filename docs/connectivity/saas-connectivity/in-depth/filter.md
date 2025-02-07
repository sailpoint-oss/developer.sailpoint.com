---
id: typescript-sdk-filter
title: Filtering using TypeScript SDK
pagination_label: Filtering
sidebar_label: Filtering
sidebar_position: 9
sidebar_class_name: typescriptsdk
keywords: ['tsc', 'typescript', 'sdk', 'filter', 'filterString', 'account filtering','group filtering', 'filtering']
description: Learn how to use the TypeScript SDK to filter results.
slug: /tools/sdk/typescript/filter
tags: ['SDK']
---

Often there is a need to filter resource objects (e.g accounts) on a source during an aggregation process.

While some source connectors offer an ability to filter accounts/groups natively, other source connectors may not, usually due to technical limitations - such as a lack of filtering abilities in APIs the connector is calling.

Filter class does have an ability to filter resource objects on its side, as part of the aggregation process. This is configured by setting a filterString property on the source configuration. Once configured, the aggregation process matches resource objects as they are aggregated against the filter string.


### Filter is implemented with the SDK in the following code block on line 11:

```typescript showLineNumbers
import {Filter} from '@sailpoint/connector-sdk';

const resourceObject = {
    name: null,
    login: "example-name",
    address: ["line1", "line2", "line3"]
};

const filterString = "(login == \"example-name\")"

const filterEvaluator = new Filter(resourceObject);
// matcher() returns true if (login == example-name) else returns false
const isMatched = filterEvaluator.matcher(filterString)

console.log(isMatched);
```

Run this command to compile and run the code:

```bash
tsc src/index.ts && node src/index.js
```

### Rules for correctly parsing filter string

| Rule                                                      | Valid Examples               |
| --------------------------------------------------------- | --------------------- |
| String literals should have double-quotes.                 | ```firstname == "Ritesh"``` |
| True / false values are treated as boolean literals.       | ```inactive != false```     |
| Digits are treated as numbers.                             | ```age < 18```              |
| The string value 'null' (no quotes) is treated as null.    | ```name != null```          |
| Both ```property``` and its respective ```value``` inputed should be case-sensitive.    | ```firstname == "Ritesh"``` , ```firstName == "ritesh"```          |
| ```containsAll()``` and ```containsAllIgnoreCase()``` should have comma separated values without enclosing it in curly braces.    | ```address.containsAll("line1","line2")```          |


### Supported Filters with Example

#### Composite Filters

Filters can also be grouped and used together as composite filters.

| Composite Filter                                                     | Pattern              | Valid Examples |
| --------------------------------------------------------- | --------------------- |--|
| AND   | ```( {expression} && {expression} )```	 |```( type != "Employee" && location == "Austin" && name.isNull() )```|
| OR   | ```( {expression} \|\| {expression} )```	 |```( type == "Employee" \|\| location == "Austin" \|\| name.isNull() )```|
| NOT   | ```!( {expression} )```	 |```!( company == "SailPoint" )```|

#### Operation Filters

|Operation	|Pattern	| Valid Examples|
|---------|----------|--------|
|Equals|	```{property} == {value}```	|```firstname == "Neil"```|
|Not Equals	|```{property} != {value}```	|```lastname != "Smith"```|
|Less Than|	```{property} < {value}```	|```age < 18```|
|Greater Than|	```{property} > value```	|```age > 18```|
|Less Than, Equals	|```{property} <= {value}```	|```age <= 18```|
|Greater Than, Equals|	```{property} >= value```	|```age >= 18```|
|Is Null	|```{property}.isNull()```	|```email.isNull()```|
|Not Null|	```{property}.notNull()```	|```company.notNull()```|
|Is Empty|	```{property}.isEmpty()```	|```Groups.isEmpty()```|
|Like, Exact|	```{property} == {value}```	|```firstname == "Neil"```|
|Like, Start	|```{property}.startsWith( {value} )```	|```lastname.startsWith( "Mc" )```|
|Like, Start (Ignoring Case)|	   ```{property}.startsWithIgnoreCase( {value} )``` | ```lastname.startsWithIgnoreCase( "Mc" )```|
|Like, End|	```{property}.endsWith( {value} )```	|```email.endsWith( "@sailpoint.com" )```|
|Like, End (Ignoring Case)|	```{property}.endsWithIgnoreCase( {value} )```|	```email.endsWithIgnoreCase( "@sailpoint.com" )```|
|Like, Anywhere	|```{property}.contains( {value} )```|	```email.contains( "sail" )```|
|Like, Anywhere (Ignoring Case)|	```{property}.containsIgnoreCase( {value} )```|```email.containsIgnoreCase( "sail" )```|
|Contains All|	```{property}.containsAll({value}, {value}, {value}, ...)	```|```Groups.containsAll( "A", "B", "C" )```|
|Contains All (Ignoring Case)|	```{property}.containsAllIgnoreCase( {value}, {value}, {value}, ... )```|	```Groups.containsAllIgnoreCase( "A", "B", "C" )```|

#### Complex Filters

Filters embedded into an another filter by grouping it with && or || operations.

| Valid Examples|
|--------|
|```(((login == \"ritesh\" && name.isNull()) && company == \"sailpoint\") \|\| city == \"pune\")```|
|```((login == \"ritesh\" \|\| name == null) && (company == \"sailpoint\" \|\| city == \"pune\"))```|
|```((login == \"ritesh\" && name == null) \|\| (company == \"sailpoint\" && city == \"pune\"))```|