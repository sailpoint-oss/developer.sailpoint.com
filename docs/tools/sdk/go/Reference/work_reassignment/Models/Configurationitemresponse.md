---
id: v1-configurationitemresponse
title: Configurationitemresponse
pagination_label: Configurationitemresponse
sidebar_label: Configurationitemresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Configurationitemresponse', 'V1Configurationitemresponse'] 
slug: /tools/sdk/go/workreassignment/models/configurationitemresponse
tags: ['SDK', 'Software Development Kit', 'Configurationitemresponse', 'V1Configurationitemresponse']
---

# Configurationitemresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | Pointer to [**Identity2**](identity2) |  | [optional] 
**ConfigDetails** | Pointer to [**[]Configurationdetailsresponse**](configurationdetailsresponse) | Details of how work should be reassigned for an Identity | [optional] 

## Methods

### NewConfigurationitemresponse

`func NewConfigurationitemresponse() *Configurationitemresponse`

NewConfigurationitemresponse instantiates a new Configurationitemresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigurationitemresponseWithDefaults

`func NewConfigurationitemresponseWithDefaults() *Configurationitemresponse`

NewConfigurationitemresponseWithDefaults instantiates a new Configurationitemresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Configurationitemresponse) GetIdentity() Identity2`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Configurationitemresponse) GetIdentityOk() (*Identity2, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Configurationitemresponse) SetIdentity(v Identity2)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *Configurationitemresponse) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetConfigDetails

`func (o *Configurationitemresponse) GetConfigDetails() []Configurationdetailsresponse`

GetConfigDetails returns the ConfigDetails field if non-nil, zero value otherwise.

### GetConfigDetailsOk

`func (o *Configurationitemresponse) GetConfigDetailsOk() (*[]Configurationdetailsresponse, bool)`

GetConfigDetailsOk returns a tuple with the ConfigDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigDetails

`func (o *Configurationitemresponse) SetConfigDetails(v []Configurationdetailsresponse)`

SetConfigDetails sets ConfigDetails field to given value.

### HasConfigDetails

`func (o *Configurationitemresponse) HasConfigDetails() bool`

HasConfigDetails returns a boolean if a field has been set.


