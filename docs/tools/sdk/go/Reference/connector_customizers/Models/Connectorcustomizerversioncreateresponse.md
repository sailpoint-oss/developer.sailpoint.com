---
id: v1-connectorcustomizerversioncreateresponse
title: Connectorcustomizerversioncreateresponse
pagination_label: Connectorcustomizerversioncreateresponse
sidebar_label: Connectorcustomizerversioncreateresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectorcustomizerversioncreateresponse', 'V1Connectorcustomizerversioncreateresponse'] 
slug: /tools/sdk/go/connectorcustomizers/models/connectorcustomizerversioncreateresponse
tags: ['SDK', 'Software Development Kit', 'Connectorcustomizerversioncreateresponse', 'V1Connectorcustomizerversioncreateresponse']
---

# Connectorcustomizerversioncreateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomizerID** | Pointer to **string** | ID of connector customizer. | [optional] 
**ImageID** | Pointer to **string** | ImageID of the connector customizer. | [optional] 
**Version** | Pointer to **int64** | Image version of the connector customizer. | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the connector customizer version was created. | [optional] 

## Methods

### NewConnectorcustomizerversioncreateresponse

`func NewConnectorcustomizerversioncreateresponse() *Connectorcustomizerversioncreateresponse`

NewConnectorcustomizerversioncreateresponse instantiates a new Connectorcustomizerversioncreateresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorcustomizerversioncreateresponseWithDefaults

`func NewConnectorcustomizerversioncreateresponseWithDefaults() *Connectorcustomizerversioncreateresponse`

NewConnectorcustomizerversioncreateresponseWithDefaults instantiates a new Connectorcustomizerversioncreateresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomizerID

`func (o *Connectorcustomizerversioncreateresponse) GetCustomizerID() string`

GetCustomizerID returns the CustomizerID field if non-nil, zero value otherwise.

### GetCustomizerIDOk

`func (o *Connectorcustomizerversioncreateresponse) GetCustomizerIDOk() (*string, bool)`

GetCustomizerIDOk returns a tuple with the CustomizerID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomizerID

`func (o *Connectorcustomizerversioncreateresponse) SetCustomizerID(v string)`

SetCustomizerID sets CustomizerID field to given value.

### HasCustomizerID

`func (o *Connectorcustomizerversioncreateresponse) HasCustomizerID() bool`

HasCustomizerID returns a boolean if a field has been set.

### GetImageID

`func (o *Connectorcustomizerversioncreateresponse) GetImageID() string`

GetImageID returns the ImageID field if non-nil, zero value otherwise.

### GetImageIDOk

`func (o *Connectorcustomizerversioncreateresponse) GetImageIDOk() (*string, bool)`

GetImageIDOk returns a tuple with the ImageID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageID

`func (o *Connectorcustomizerversioncreateresponse) SetImageID(v string)`

SetImageID sets ImageID field to given value.

### HasImageID

`func (o *Connectorcustomizerversioncreateresponse) HasImageID() bool`

HasImageID returns a boolean if a field has been set.

### GetVersion

`func (o *Connectorcustomizerversioncreateresponse) GetVersion() int64`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Connectorcustomizerversioncreateresponse) GetVersionOk() (*int64, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Connectorcustomizerversioncreateresponse) SetVersion(v int64)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *Connectorcustomizerversioncreateresponse) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetCreated

`func (o *Connectorcustomizerversioncreateresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Connectorcustomizerversioncreateresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Connectorcustomizerversioncreateresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Connectorcustomizerversioncreateresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


