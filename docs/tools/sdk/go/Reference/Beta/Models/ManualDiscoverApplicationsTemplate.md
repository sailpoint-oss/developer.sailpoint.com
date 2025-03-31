---
id: beta-manual-discover-applications-template
title: ManualDiscoverApplicationsTemplate
pagination_label: ManualDiscoverApplicationsTemplate
sidebar_label: ManualDiscoverApplicationsTemplate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManualDiscoverApplicationsTemplate', 'BetaManualDiscoverApplicationsTemplate'] 
slug: /tools/sdk/go/beta/models/manual-discover-applications-template
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplicationsTemplate', 'BetaManualDiscoverApplicationsTemplate']
---

# ManualDiscoverApplicationsTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationName** | Pointer to **string** | Name of the example application. | [optional] 
**Description** | Pointer to **string** | Description of the example application. | [optional] 

## Methods

### NewManualDiscoverApplicationsTemplate

`func NewManualDiscoverApplicationsTemplate() *ManualDiscoverApplicationsTemplate`

NewManualDiscoverApplicationsTemplate instantiates a new ManualDiscoverApplicationsTemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManualDiscoverApplicationsTemplateWithDefaults

`func NewManualDiscoverApplicationsTemplateWithDefaults() *ManualDiscoverApplicationsTemplate`

NewManualDiscoverApplicationsTemplateWithDefaults instantiates a new ManualDiscoverApplicationsTemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationName

`func (o *ManualDiscoverApplicationsTemplate) GetApplicationName() string`

GetApplicationName returns the ApplicationName field if non-nil, zero value otherwise.

### GetApplicationNameOk

`func (o *ManualDiscoverApplicationsTemplate) GetApplicationNameOk() (*string, bool)`

GetApplicationNameOk returns a tuple with the ApplicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationName

`func (o *ManualDiscoverApplicationsTemplate) SetApplicationName(v string)`

SetApplicationName sets ApplicationName field to given value.

### HasApplicationName

`func (o *ManualDiscoverApplicationsTemplate) HasApplicationName() bool`

HasApplicationName returns a boolean if a field has been set.

### GetDescription

`func (o *ManualDiscoverApplicationsTemplate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ManualDiscoverApplicationsTemplate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ManualDiscoverApplicationsTemplate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ManualDiscoverApplicationsTemplate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


