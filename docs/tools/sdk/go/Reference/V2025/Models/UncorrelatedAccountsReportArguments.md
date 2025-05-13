---
id: v2025-uncorrelated-accounts-report-arguments
title: UncorrelatedAccountsReportArguments
pagination_label: UncorrelatedAccountsReportArguments
sidebar_label: UncorrelatedAccountsReportArguments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UncorrelatedAccountsReportArguments', 'V2025UncorrelatedAccountsReportArguments'] 
slug: /tools/sdk/go/v2025/models/uncorrelated-accounts-report-arguments
tags: ['SDK', 'Software Development Kit', 'UncorrelatedAccountsReportArguments', 'V2025UncorrelatedAccountsReportArguments']
---

# UncorrelatedAccountsReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SelectedFormats** | Pointer to **[]string** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 

## Methods

### NewUncorrelatedAccountsReportArguments

`func NewUncorrelatedAccountsReportArguments() *UncorrelatedAccountsReportArguments`

NewUncorrelatedAccountsReportArguments instantiates a new UncorrelatedAccountsReportArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUncorrelatedAccountsReportArgumentsWithDefaults

`func NewUncorrelatedAccountsReportArgumentsWithDefaults() *UncorrelatedAccountsReportArguments`

NewUncorrelatedAccountsReportArgumentsWithDefaults instantiates a new UncorrelatedAccountsReportArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSelectedFormats

`func (o *UncorrelatedAccountsReportArguments) GetSelectedFormats() []string`

GetSelectedFormats returns the SelectedFormats field if non-nil, zero value otherwise.

### GetSelectedFormatsOk

`func (o *UncorrelatedAccountsReportArguments) GetSelectedFormatsOk() (*[]string, bool)`

GetSelectedFormatsOk returns a tuple with the SelectedFormats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedFormats

`func (o *UncorrelatedAccountsReportArguments) SetSelectedFormats(v []string)`

SetSelectedFormats sets SelectedFormats field to given value.

### HasSelectedFormats

`func (o *UncorrelatedAccountsReportArguments) HasSelectedFormats() bool`

HasSelectedFormats returns a boolean if a field has been set.


