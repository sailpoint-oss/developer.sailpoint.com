---
id: v2024-create-uploaded-configuration-request
title: CreateUploadedConfigurationRequest
pagination_label: CreateUploadedConfigurationRequest
sidebar_label: CreateUploadedConfigurationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateUploadedConfigurationRequest', 'V2024CreateUploadedConfigurationRequest'] 
slug: /tools/sdk/go/v2024/models/create-uploaded-configuration-request
tags: ['SDK', 'Software Development Kit', 'CreateUploadedConfigurationRequest', 'V2024CreateUploadedConfigurationRequest']
---

# CreateUploadedConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | ***os.File** | JSON file containing the objects to be imported. | 
**Name** | **string** | Name that will be assigned to the uploaded configuration file. | 

## Methods

### NewCreateUploadedConfigurationRequest

`func NewCreateUploadedConfigurationRequest(data *os.File, name string, ) *CreateUploadedConfigurationRequest`

NewCreateUploadedConfigurationRequest instantiates a new CreateUploadedConfigurationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateUploadedConfigurationRequestWithDefaults

`func NewCreateUploadedConfigurationRequestWithDefaults() *CreateUploadedConfigurationRequest`

NewCreateUploadedConfigurationRequestWithDefaults instantiates a new CreateUploadedConfigurationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *CreateUploadedConfigurationRequest) GetData() *os.File`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CreateUploadedConfigurationRequest) GetDataOk() (**os.File, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CreateUploadedConfigurationRequest) SetData(v *os.File)`

SetData sets Data field to given value.


### GetName

`func (o *CreateUploadedConfigurationRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateUploadedConfigurationRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateUploadedConfigurationRequest) SetName(v string)`

SetName sets Name field to given value.



