---
id: beta-manual-discover-applications
title: ManualDiscoverApplications
pagination_label: ManualDiscoverApplications
sidebar_label: ManualDiscoverApplications
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManualDiscoverApplications', 'BetaManualDiscoverApplications'] 
slug: /tools/sdk/go/beta/models/manual-discover-applications
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplications', 'BetaManualDiscoverApplications']
---

# ManualDiscoverApplications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | ***os.File** | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. | 

## Methods

### NewManualDiscoverApplications

`func NewManualDiscoverApplications(file *os.File, ) *ManualDiscoverApplications`

NewManualDiscoverApplications instantiates a new ManualDiscoverApplications object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManualDiscoverApplicationsWithDefaults

`func NewManualDiscoverApplicationsWithDefaults() *ManualDiscoverApplications`

NewManualDiscoverApplicationsWithDefaults instantiates a new ManualDiscoverApplications object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *ManualDiscoverApplications) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *ManualDiscoverApplications) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *ManualDiscoverApplications) SetFile(v *os.File)`

SetFile sets File field to given value.



