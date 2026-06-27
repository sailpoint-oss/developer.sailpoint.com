---
id: v1-errorresponsedto
title: Errorresponsedto
pagination_label: Errorresponsedto
sidebar_label: Errorresponsedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Errorresponsedto', 'V1Errorresponsedto'] 
slug: /tools/sdk/go/passwordsyncgroups/models/errorresponsedto
tags: ['SDK', 'Software Development Kit', 'Errorresponsedto', 'V1Errorresponsedto']
---

# Errorresponsedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 
**Messages** | Pointer to [**[]Errormessagedto**](errormessagedto) | Generic localized reason for error | [optional] 
**Causes** | Pointer to [**[]Errormessagedto**](errormessagedto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 

## Methods

### NewErrorresponsedto

`func NewErrorresponsedto() *Errorresponsedto`

NewErrorresponsedto instantiates a new Errorresponsedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorresponsedtoWithDefaults

`func NewErrorresponsedtoWithDefaults() *Errorresponsedto`

NewErrorresponsedtoWithDefaults instantiates a new Errorresponsedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *Errorresponsedto) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *Errorresponsedto) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *Errorresponsedto) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *Errorresponsedto) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetTrackingId

`func (o *Errorresponsedto) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *Errorresponsedto) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *Errorresponsedto) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *Errorresponsedto) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.

### GetMessages

`func (o *Errorresponsedto) GetMessages() []Errormessagedto`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *Errorresponsedto) GetMessagesOk() (*[]Errormessagedto, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *Errorresponsedto) SetMessages(v []Errormessagedto)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *Errorresponsedto) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetCauses

`func (o *Errorresponsedto) GetCauses() []Errormessagedto`

GetCauses returns the Causes field if non-nil, zero value otherwise.

### GetCausesOk

`func (o *Errorresponsedto) GetCausesOk() (*[]Errormessagedto, bool)`

GetCausesOk returns a tuple with the Causes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCauses

`func (o *Errorresponsedto) SetCauses(v []Errormessagedto)`

SetCauses sets Causes field to given value.

### HasCauses

`func (o *Errorresponsedto) HasCauses() bool`

HasCauses returns a boolean if a field has been set.


