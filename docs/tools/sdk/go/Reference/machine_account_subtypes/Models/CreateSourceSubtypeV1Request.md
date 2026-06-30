---
id: v1-create-source-subtype-v1-request
title: CreateSourceSubtypeV1Request
pagination_label: CreateSourceSubtypeV1Request
sidebar_label: CreateSourceSubtypeV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateSourceSubtypeV1Request', 'V1CreateSourceSubtypeV1Request'] 
slug: /tools/sdk/go/machineaccountsubtypes/models/create-source-subtype-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateSourceSubtypeV1Request', 'V1CreateSourceSubtypeV1Request']
---

# CreateSourceSubtypeV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **string** | ID of the source where subtype is created. | 
**TechnicalName** | **string** | Technical name of the subtype. | 
**DisplayName** | **string** | Display name of the subtype. | 
**Description** | **string** | Description of the subtype. | 
**Type** | Pointer to **string** | Type of the subtype. | [optional] 

## Methods

### NewCreateSourceSubtypeV1Request

`func NewCreateSourceSubtypeV1Request(sourceId string, technicalName string, displayName string, description string, ) *CreateSourceSubtypeV1Request`

NewCreateSourceSubtypeV1Request instantiates a new CreateSourceSubtypeV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateSourceSubtypeV1RequestWithDefaults

`func NewCreateSourceSubtypeV1RequestWithDefaults() *CreateSourceSubtypeV1Request`

NewCreateSourceSubtypeV1RequestWithDefaults instantiates a new CreateSourceSubtypeV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *CreateSourceSubtypeV1Request) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *CreateSourceSubtypeV1Request) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *CreateSourceSubtypeV1Request) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetTechnicalName

`func (o *CreateSourceSubtypeV1Request) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *CreateSourceSubtypeV1Request) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *CreateSourceSubtypeV1Request) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *CreateSourceSubtypeV1Request) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *CreateSourceSubtypeV1Request) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *CreateSourceSubtypeV1Request) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *CreateSourceSubtypeV1Request) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateSourceSubtypeV1Request) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateSourceSubtypeV1Request) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *CreateSourceSubtypeV1Request) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateSourceSubtypeV1Request) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateSourceSubtypeV1Request) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CreateSourceSubtypeV1Request) HasType() bool`

HasType returns a boolean if a field has been set.


