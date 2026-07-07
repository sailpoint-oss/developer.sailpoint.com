---
id: v1-create-machine-account-subtype-v1-request
title: CreateMachineAccountSubtypeV1Request
pagination_label: CreateMachineAccountSubtypeV1Request
sidebar_label: CreateMachineAccountSubtypeV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateMachineAccountSubtypeV1Request', 'V1CreateMachineAccountSubtypeV1Request'] 
slug: /tools/sdk/go/machineaccounts/models/create-machine-account-subtype-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateMachineAccountSubtypeV1Request', 'V1CreateMachineAccountSubtypeV1Request']
---

# CreateMachineAccountSubtypeV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TechnicalName** | **string** | Technical name of the subtype. | 
**DisplayName** | **string** | Display name of the subtype. | 
**Description** | **string** | Description of the subtype. | 
**Type** | Pointer to **string** | Type of the subtype. | [optional] 

## Methods

### NewCreateMachineAccountSubtypeV1Request

`func NewCreateMachineAccountSubtypeV1Request(technicalName string, displayName string, description string, ) *CreateMachineAccountSubtypeV1Request`

NewCreateMachineAccountSubtypeV1Request instantiates a new CreateMachineAccountSubtypeV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateMachineAccountSubtypeV1RequestWithDefaults

`func NewCreateMachineAccountSubtypeV1RequestWithDefaults() *CreateMachineAccountSubtypeV1Request`

NewCreateMachineAccountSubtypeV1RequestWithDefaults instantiates a new CreateMachineAccountSubtypeV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTechnicalName

`func (o *CreateMachineAccountSubtypeV1Request) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *CreateMachineAccountSubtypeV1Request) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *CreateMachineAccountSubtypeV1Request) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *CreateMachineAccountSubtypeV1Request) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *CreateMachineAccountSubtypeV1Request) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *CreateMachineAccountSubtypeV1Request) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *CreateMachineAccountSubtypeV1Request) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateMachineAccountSubtypeV1Request) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateMachineAccountSubtypeV1Request) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *CreateMachineAccountSubtypeV1Request) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateMachineAccountSubtypeV1Request) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateMachineAccountSubtypeV1Request) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CreateMachineAccountSubtypeV1Request) HasType() bool`

HasType returns a boolean if a field has been set.


