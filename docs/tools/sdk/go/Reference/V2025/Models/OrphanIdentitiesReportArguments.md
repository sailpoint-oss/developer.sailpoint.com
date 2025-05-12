---
id: v2025-orphan-identities-report-arguments
title: OrphanIdentitiesReportArguments
pagination_label: OrphanIdentitiesReportArguments
sidebar_label: OrphanIdentitiesReportArguments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OrphanIdentitiesReportArguments', 'V2025OrphanIdentitiesReportArguments'] 
slug: /tools/sdk/go/v2025/models/orphan-identities-report-arguments
tags: ['SDK', 'Software Development Kit', 'OrphanIdentitiesReportArguments', 'V2025OrphanIdentitiesReportArguments']
---

# OrphanIdentitiesReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SelectedFormats** | Pointer to **[]string** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 

## Methods

### NewOrphanIdentitiesReportArguments

`func NewOrphanIdentitiesReportArguments() *OrphanIdentitiesReportArguments`

NewOrphanIdentitiesReportArguments instantiates a new OrphanIdentitiesReportArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrphanIdentitiesReportArgumentsWithDefaults

`func NewOrphanIdentitiesReportArgumentsWithDefaults() *OrphanIdentitiesReportArguments`

NewOrphanIdentitiesReportArgumentsWithDefaults instantiates a new OrphanIdentitiesReportArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSelectedFormats

`func (o *OrphanIdentitiesReportArguments) GetSelectedFormats() []string`

GetSelectedFormats returns the SelectedFormats field if non-nil, zero value otherwise.

### GetSelectedFormatsOk

`func (o *OrphanIdentitiesReportArguments) GetSelectedFormatsOk() (*[]string, bool)`

GetSelectedFormatsOk returns a tuple with the SelectedFormats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedFormats

`func (o *OrphanIdentitiesReportArguments) SetSelectedFormats(v []string)`

SetSelectedFormats sets SelectedFormats field to given value.

### HasSelectedFormats

`func (o *OrphanIdentitiesReportArguments) HasSelectedFormats() bool`

HasSelectedFormats returns a boolean if a field has been set.


