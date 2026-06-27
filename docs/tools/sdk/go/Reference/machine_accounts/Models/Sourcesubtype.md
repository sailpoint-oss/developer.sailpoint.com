---
id: v1-sourcesubtype
title: Sourcesubtype
pagination_label: Sourcesubtype
sidebar_label: Sourcesubtype
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourcesubtype', 'V1Sourcesubtype'] 
slug: /tools/sdk/go/machineaccounts/models/sourcesubtype
tags: ['SDK', 'Software Development Kit', 'Sourcesubtype', 'V1Sourcesubtype']
---

# Sourcesubtype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the subtype. | [optional] 
**SourceId** | Pointer to **string** | The ID of the source. | [optional] [readonly] 
**TechnicalName** | **string** | Technical name of the subtype. | 
**DisplayName** | **string** | Display name of the subtype. | 
**Description** | **string** | Description of the subtype. | 
**Created** | Pointer to **SailPointTime** | Creation timestamp. | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modified timestamp. | [optional] 
**Type** | Pointer to **string** | Type of the subtype. Either MACHINE OR null. | [optional] 

## Methods

### NewSourcesubtype

`func NewSourcesubtype(technicalName string, displayName string, description string, ) *Sourcesubtype`

NewSourcesubtype instantiates a new Sourcesubtype object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcesubtypeWithDefaults

`func NewSourcesubtypeWithDefaults() *Sourcesubtype`

NewSourcesubtypeWithDefaults instantiates a new Sourcesubtype object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sourcesubtype) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sourcesubtype) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sourcesubtype) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sourcesubtype) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *Sourcesubtype) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Sourcesubtype) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Sourcesubtype) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Sourcesubtype) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetTechnicalName

`func (o *Sourcesubtype) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *Sourcesubtype) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *Sourcesubtype) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *Sourcesubtype) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Sourcesubtype) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Sourcesubtype) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *Sourcesubtype) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Sourcesubtype) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Sourcesubtype) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCreated

`func (o *Sourcesubtype) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Sourcesubtype) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Sourcesubtype) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Sourcesubtype) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Sourcesubtype) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Sourcesubtype) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Sourcesubtype) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Sourcesubtype) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetType

`func (o *Sourcesubtype) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sourcesubtype) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sourcesubtype) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Sourcesubtype) HasType() bool`

HasType returns a boolean if a field has been set.


