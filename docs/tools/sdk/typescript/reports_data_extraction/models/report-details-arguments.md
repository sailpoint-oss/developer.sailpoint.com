# ReportDetailsArguments

# ReportDetailsArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | `string` | Source ID. | [default to undefined]
**sourceName** | `string` | Source name. | [default to undefined]
**correlatedOnly** | `boolean` | Flag to specify if only correlated identities are included in report. | [default to false]
**authoritativeSource** | `string` | Source ID. | [default to undefined]
**selectedFormats** | **(optional)** `Array<string>` | Output report file formats. These are formats for calling GET endpoint as query parameter \'fileFormat\'.  In case report won\'t have this argument there will be [\'CSV\', \'PDF\'] as default. | [default to undefined]
**indices** | **(optional)** `Array<Index>` | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [default to undefined]
**query** | `string` | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [default to undefined]
**columns** | **(optional)** `string` | Comma separated string consisting of technical attribute names of fields to include in report.  Use `access.spread`, `apps.spread`, `accounts.spread` to include respective identity access details.  Use `accessProfiles.spread` to unclude access profile details.  Use `entitlements.spread` to include entitlement details.  | [default to undefined]
**sort** | **(optional)** `Array<string>` | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [default to undefined]

