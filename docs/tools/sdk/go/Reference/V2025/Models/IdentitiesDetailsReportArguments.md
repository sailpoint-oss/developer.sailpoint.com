---
id: v2025-identities-details-report-arguments
title: IdentitiesDetailsReportArguments
pagination_label: IdentitiesDetailsReportArguments
sidebar_label: IdentitiesDetailsReportArguments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentitiesDetailsReportArguments', 'V2025IdentitiesDetailsReportArguments'] 
slug: /tools/sdk/go/v2025/models/identities-details-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentitiesDetailsReportArguments', 'V2025IdentitiesDetailsReportArguments']
---

# IdentitiesDetailsReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelatedOnly** | **bool** | Flag to specify if only correlated identities are included in report. | [default to false]

## Methods

### NewIdentitiesDetailsReportArguments

`func NewIdentitiesDetailsReportArguments(correlatedOnly bool, ) *IdentitiesDetailsReportArguments`

NewIdentitiesDetailsReportArguments instantiates a new IdentitiesDetailsReportArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitiesDetailsReportArgumentsWithDefaults

`func NewIdentitiesDetailsReportArgumentsWithDefaults() *IdentitiesDetailsReportArguments`

NewIdentitiesDetailsReportArgumentsWithDefaults instantiates a new IdentitiesDetailsReportArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorrelatedOnly

`func (o *IdentitiesDetailsReportArguments) GetCorrelatedOnly() bool`

GetCorrelatedOnly returns the CorrelatedOnly field if non-nil, zero value otherwise.

### GetCorrelatedOnlyOk

`func (o *IdentitiesDetailsReportArguments) GetCorrelatedOnlyOk() (*bool, bool)`

GetCorrelatedOnlyOk returns a tuple with the CorrelatedOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedOnly

`func (o *IdentitiesDetailsReportArguments) SetCorrelatedOnly(v bool)`

SetCorrelatedOnly sets CorrelatedOnly field to given value.



