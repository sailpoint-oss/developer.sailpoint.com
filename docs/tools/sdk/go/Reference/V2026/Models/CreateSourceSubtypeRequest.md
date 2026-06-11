---
id: v2026-create-source-subtype-request
title: CreateSourceSubtypeRequest
pagination_label: CreateSourceSubtypeRequest
sidebar_label: CreateSourceSubtypeRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateSourceSubtypeRequest', 'V2026CreateSourceSubtypeRequest'] 
slug: /tools/sdk/go/v2026/models/create-source-subtype-request
tags: ['SDK', 'Software Development Kit', 'CreateSourceSubtypeRequest', 'V2026CreateSourceSubtypeRequest']
---

# CreateSourceSubtypeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **string** | ID of the source where subtype is created. | 
**TechnicalName** | **string** | Technical name of the subtype. | 
**DisplayName** | **string** | Display name of the subtype. | 
**Description** | **string** | Description of the subtype. | 
**Type** | Pointer to **string** | Type of the subtype. | [optional] 

## Methods

### NewCreateSourceSubtypeRequest

`func NewCreateSourceSubtypeRequest(sourceId string, technicalName string, displayName string, description string, ) *CreateSourceSubtypeRequest`

NewCreateSourceSubtypeRequest instantiates a new CreateSourceSubtypeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateSourceSubtypeRequestWithDefaults

`func NewCreateSourceSubtypeRequestWithDefaults() *CreateSourceSubtypeRequest`

NewCreateSourceSubtypeRequestWithDefaults instantiates a new CreateSourceSubtypeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *CreateSourceSubtypeRequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *CreateSourceSubtypeRequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *CreateSourceSubtypeRequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetTechnicalName

`func (o *CreateSourceSubtypeRequest) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *CreateSourceSubtypeRequest) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *CreateSourceSubtypeRequest) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *CreateSourceSubtypeRequest) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *CreateSourceSubtypeRequest) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *CreateSourceSubtypeRequest) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *CreateSourceSubtypeRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateSourceSubtypeRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateSourceSubtypeRequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *CreateSourceSubtypeRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateSourceSubtypeRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateSourceSubtypeRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CreateSourceSubtypeRequest) HasType() bool`

HasType returns a boolean if a field has been set.


