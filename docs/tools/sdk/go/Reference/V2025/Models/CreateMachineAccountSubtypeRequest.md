---
id: v2025-create-machine-account-subtype-request
title: CreateMachineAccountSubtypeRequest
pagination_label: CreateMachineAccountSubtypeRequest
sidebar_label: CreateMachineAccountSubtypeRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateMachineAccountSubtypeRequest', 'V2025CreateMachineAccountSubtypeRequest'] 
slug: /tools/sdk/go/v2025/models/create-machine-account-subtype-request
tags: ['SDK', 'Software Development Kit', 'CreateMachineAccountSubtypeRequest', 'V2025CreateMachineAccountSubtypeRequest']
---

# CreateMachineAccountSubtypeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TechnicalName** | **string** | Technical name of the subtype. | 
**DisplayName** | **string** | Display name of the subtype. | 
**Description** | **string** | Description of the subtype. | 
**Type** | Pointer to **string** | Type of the subtype. | [optional] 

## Methods

### NewCreateMachineAccountSubtypeRequest

`func NewCreateMachineAccountSubtypeRequest(technicalName string, displayName string, description string, ) *CreateMachineAccountSubtypeRequest`

NewCreateMachineAccountSubtypeRequest instantiates a new CreateMachineAccountSubtypeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateMachineAccountSubtypeRequestWithDefaults

`func NewCreateMachineAccountSubtypeRequestWithDefaults() *CreateMachineAccountSubtypeRequest`

NewCreateMachineAccountSubtypeRequestWithDefaults instantiates a new CreateMachineAccountSubtypeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTechnicalName

`func (o *CreateMachineAccountSubtypeRequest) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *CreateMachineAccountSubtypeRequest) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *CreateMachineAccountSubtypeRequest) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *CreateMachineAccountSubtypeRequest) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *CreateMachineAccountSubtypeRequest) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *CreateMachineAccountSubtypeRequest) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *CreateMachineAccountSubtypeRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateMachineAccountSubtypeRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateMachineAccountSubtypeRequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *CreateMachineAccountSubtypeRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateMachineAccountSubtypeRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateMachineAccountSubtypeRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CreateMachineAccountSubtypeRequest) HasType() bool`

HasType returns a boolean if a field has been set.


