---
id: reportdetails-arguments
title: ReportdetailsArguments
pagination_label: ReportdetailsArguments
sidebar_label: ReportdetailsArguments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReportdetailsArguments', 'ReportdetailsArguments'] 
slug: /tools/sdk/python/reports-data-extraction/models/reportdetails-arguments
tags: ['SDK', 'Software Development Kit', 'ReportdetailsArguments', 'ReportdetailsArguments']
---

# ReportdetailsArguments

The string-object map(dictionary) with the arguments needed for report processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | **str** | Source ID. | [required]
**source_name** | **str** | Source name. | [required]
**correlated_only** | **bool** | Flag to specify if only correlated identities are included in report. | [required][default to False]
**authoritative_source** | **str** | Source ID. | [required]
**selected_formats** | **[]str** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 
**indices** | **[]Index** | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**query** | **str** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [required]
**columns** | **str** | Comma separated string consisting of technical attribute names of fields to include in report.  Use `access.spread`, `apps.spread`, `accounts.spread` to include respective identity access details.  Use `accessProfiles.spread` to unclude access profile details.  Use `entitlements.spread` to include entitlement details.  | [optional] 
**sort** | **[]str** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 
}

## Example

```python
from sailpoint.reports_data_extraction.models.reportdetails_arguments import ReportdetailsArguments

reportdetails_arguments = ReportdetailsArguments(
application='2c9180897eSourceIde781782f705b9',
source_name='Active Directory',
correlated_only=True,
authoritative_source='1234sourceId5678902',
selected_formats=[CSV],
indices=[entitlements],
query='name:a*',
columns='displayName,firstName,lastName,email,created,attributes.cloudLifecycleState',
sort=[displayName, +id]
)

```
[[Back to top]](#) 

