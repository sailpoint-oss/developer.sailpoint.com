---
id: v2025-identities-report-arguments
title: IdentitiesReportArguments
pagination_label: IdentitiesReportArguments
sidebar_label: IdentitiesReportArguments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentitiesReportArguments', 'V2025IdentitiesReportArguments'] 
slug: /tools/sdk/go/v2025/models/identities-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentitiesReportArguments', 'V2025IdentitiesReportArguments']
---

# IdentitiesReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelatedOnly** | Pointer to **bool** | Flag to specify if only correlated identities are included in report. | [optional] [default to false]

## Methods

### NewIdentitiesReportArguments

`func NewIdentitiesReportArguments() *IdentitiesReportArguments`

NewIdentitiesReportArguments instantiates a new IdentitiesReportArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitiesReportArgumentsWithDefaults

`func NewIdentitiesReportArgumentsWithDefaults() *IdentitiesReportArguments`

NewIdentitiesReportArgumentsWithDefaults instantiates a new IdentitiesReportArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorrelatedOnly

`func (o *IdentitiesReportArguments) GetCorrelatedOnly() bool`

GetCorrelatedOnly returns the CorrelatedOnly field if non-nil, zero value otherwise.

### GetCorrelatedOnlyOk

`func (o *IdentitiesReportArguments) GetCorrelatedOnlyOk() (*bool, bool)`

GetCorrelatedOnlyOk returns a tuple with the CorrelatedOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedOnly

`func (o *IdentitiesReportArguments) SetCorrelatedOnly(v bool)`

SetCorrelatedOnly sets CorrelatedOnly field to given value.

### HasCorrelatedOnly

`func (o *IdentitiesReportArguments) HasCorrelatedOnly() bool`

HasCorrelatedOnly returns a boolean if a field has been set.


