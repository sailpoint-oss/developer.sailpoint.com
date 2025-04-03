---
id: accounts-export-report-arguments
title: AccountsExportReportArguments
pagination_label: AccountsExportReportArguments
sidebar_label: AccountsExportReportArguments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountsExportReportArguments', 'AccountsExportReportArguments'] 
slug: /tools/sdk/go/v3/models/accounts-export-report-arguments
tags: ['SDK', 'Software Development Kit', 'AccountsExportReportArguments', 'AccountsExportReportArguments']
---

# AccountsExportReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **string** | Source ID. | 
**SourceName** | **string** | Source name. | 

## Methods

### NewAccountsExportReportArguments

`func NewAccountsExportReportArguments(application string, sourceName string, ) *AccountsExportReportArguments`

NewAccountsExportReportArguments instantiates a new AccountsExportReportArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountsExportReportArgumentsWithDefaults

`func NewAccountsExportReportArgumentsWithDefaults() *AccountsExportReportArguments`

NewAccountsExportReportArgumentsWithDefaults instantiates a new AccountsExportReportArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplication

`func (o *AccountsExportReportArguments) GetApplication() string`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *AccountsExportReportArguments) GetApplicationOk() (*string, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *AccountsExportReportArguments) SetApplication(v string)`

SetApplication sets Application field to given value.


### GetSourceName

`func (o *AccountsExportReportArguments) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccountsExportReportArguments) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccountsExportReportArguments) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.



