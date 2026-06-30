---
id: v1-configurationresponse
title: Configurationresponse
pagination_label: Configurationresponse
sidebar_label: Configurationresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Configurationresponse', 'V1Configurationresponse'] 
slug: /tools/sdk/go/workreassignment/models/configurationresponse
tags: ['SDK', 'Software Development Kit', 'Configurationresponse', 'V1Configurationresponse']
---

# Configurationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | Pointer to [**Identity2**](identity2) |  | [optional] 
**ConfigDetails** | Pointer to [**[]Configurationdetailsresponse**](configurationdetailsresponse) | Details of how work should be reassigned for an Identity | [optional] 

## Methods

### NewConfigurationresponse

`func NewConfigurationresponse() *Configurationresponse`

NewConfigurationresponse instantiates a new Configurationresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigurationresponseWithDefaults

`func NewConfigurationresponseWithDefaults() *Configurationresponse`

NewConfigurationresponseWithDefaults instantiates a new Configurationresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Configurationresponse) GetIdentity() Identity2`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Configurationresponse) GetIdentityOk() (*Identity2, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Configurationresponse) SetIdentity(v Identity2)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *Configurationresponse) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetConfigDetails

`func (o *Configurationresponse) GetConfigDetails() []Configurationdetailsresponse`

GetConfigDetails returns the ConfigDetails field if non-nil, zero value otherwise.

### GetConfigDetailsOk

`func (o *Configurationresponse) GetConfigDetailsOk() (*[]Configurationdetailsresponse, bool)`

GetConfigDetailsOk returns a tuple with the ConfigDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigDetails

`func (o *Configurationresponse) SetConfigDetails(v []Configurationdetailsresponse)`

SetConfigDetails sets ConfigDetails field to given value.

### HasConfigDetails

`func (o *Configurationresponse) HasConfigDetails() bool`

HasConfigDetails returns a boolean if a field has been set.


