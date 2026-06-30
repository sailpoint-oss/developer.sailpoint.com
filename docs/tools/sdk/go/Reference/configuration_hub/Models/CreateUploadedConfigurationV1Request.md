---
id: v1-create-uploaded-configuration-v1-request
title: CreateUploadedConfigurationV1Request
pagination_label: CreateUploadedConfigurationV1Request
sidebar_label: CreateUploadedConfigurationV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateUploadedConfigurationV1Request', 'V1CreateUploadedConfigurationV1Request'] 
slug: /tools/sdk/go/configurationhub/models/create-uploaded-configuration-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateUploadedConfigurationV1Request', 'V1CreateUploadedConfigurationV1Request']
---

# CreateUploadedConfigurationV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | ***os.File** | JSON file containing the objects to be imported. | 
**Name** | **string** | Name that will be assigned to the uploaded configuration file. | 

## Methods

### NewCreateUploadedConfigurationV1Request

`func NewCreateUploadedConfigurationV1Request(data *os.File, name string, ) *CreateUploadedConfigurationV1Request`

NewCreateUploadedConfigurationV1Request instantiates a new CreateUploadedConfigurationV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateUploadedConfigurationV1RequestWithDefaults

`func NewCreateUploadedConfigurationV1RequestWithDefaults() *CreateUploadedConfigurationV1Request`

NewCreateUploadedConfigurationV1RequestWithDefaults instantiates a new CreateUploadedConfigurationV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *CreateUploadedConfigurationV1Request) GetData() *os.File`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CreateUploadedConfigurationV1Request) GetDataOk() (**os.File, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CreateUploadedConfigurationV1Request) SetData(v *os.File)`

SetData sets Data field to given value.


### GetName

`func (o *CreateUploadedConfigurationV1Request) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateUploadedConfigurationV1Request) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateUploadedConfigurationV1Request) SetName(v string)`

SetName sets Name field to given value.



