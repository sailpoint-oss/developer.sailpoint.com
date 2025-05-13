---
id: v2024-identity-exception-report-reference
title: IdentityExceptionReportReference
pagination_label: IdentityExceptionReportReference
sidebar_label: IdentityExceptionReportReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityExceptionReportReference', 'V2024IdentityExceptionReportReference'] 
slug: /tools/sdk/go/v2024/models/identity-exception-report-reference
tags: ['SDK', 'Software Development Kit', 'IdentityExceptionReportReference', 'V2024IdentityExceptionReportReference']
---

# IdentityExceptionReportReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskResultId** | Pointer to **string** | Task result ID. | [optional] 
**ReportName** | Pointer to **string** | Report name. | [optional] 

## Methods

### NewIdentityExceptionReportReference

`func NewIdentityExceptionReportReference() *IdentityExceptionReportReference`

NewIdentityExceptionReportReference instantiates a new IdentityExceptionReportReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityExceptionReportReferenceWithDefaults

`func NewIdentityExceptionReportReferenceWithDefaults() *IdentityExceptionReportReference`

NewIdentityExceptionReportReferenceWithDefaults instantiates a new IdentityExceptionReportReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskResultId

`func (o *IdentityExceptionReportReference) GetTaskResultId() string`

GetTaskResultId returns the TaskResultId field if non-nil, zero value otherwise.

### GetTaskResultIdOk

`func (o *IdentityExceptionReportReference) GetTaskResultIdOk() (*string, bool)`

GetTaskResultIdOk returns a tuple with the TaskResultId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskResultId

`func (o *IdentityExceptionReportReference) SetTaskResultId(v string)`

SetTaskResultId sets TaskResultId field to given value.

### HasTaskResultId

`func (o *IdentityExceptionReportReference) HasTaskResultId() bool`

HasTaskResultId returns a boolean if a field has been set.

### GetReportName

`func (o *IdentityExceptionReportReference) GetReportName() string`

GetReportName returns the ReportName field if non-nil, zero value otherwise.

### GetReportNameOk

`func (o *IdentityExceptionReportReference) GetReportNameOk() (*string, bool)`

GetReportNameOk returns a tuple with the ReportName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportName

`func (o *IdentityExceptionReportReference) SetReportName(v string)`

SetReportName sets ReportName field to given value.

### HasReportName

`func (o *IdentityExceptionReportReference) HasReportName() bool`

HasReportName returns a boolean if a field has been set.


