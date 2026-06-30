---
id: v1-connectorrulevalidationresponse
title: Connectorrulevalidationresponse
pagination_label: Connectorrulevalidationresponse
sidebar_label: Connectorrulevalidationresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectorrulevalidationresponse', 'V1Connectorrulevalidationresponse'] 
slug: /tools/sdk/go/connectorrulemanagement/models/connectorrulevalidationresponse
tags: ['SDK', 'Software Development Kit', 'Connectorrulevalidationresponse', 'V1Connectorrulevalidationresponse']
---

# Connectorrulevalidationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | **string** |  | 
**Details** | [**[]ConnectorrulevalidationresponseDetailsInner**](connectorrulevalidationresponse-details-inner) |  | 

## Methods

### NewConnectorrulevalidationresponse

`func NewConnectorrulevalidationresponse(state string, details []ConnectorrulevalidationresponseDetailsInner, ) *Connectorrulevalidationresponse`

NewConnectorrulevalidationresponse instantiates a new Connectorrulevalidationresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorrulevalidationresponseWithDefaults

`func NewConnectorrulevalidationresponseWithDefaults() *Connectorrulevalidationresponse`

NewConnectorrulevalidationresponseWithDefaults instantiates a new Connectorrulevalidationresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *Connectorrulevalidationresponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Connectorrulevalidationresponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Connectorrulevalidationresponse) SetState(v string)`

SetState sets State field to given value.


### GetDetails

`func (o *Connectorrulevalidationresponse) GetDetails() []ConnectorrulevalidationresponseDetailsInner`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *Connectorrulevalidationresponse) GetDetailsOk() (*[]ConnectorrulevalidationresponseDetailsInner, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *Connectorrulevalidationresponse) SetDetails(v []ConnectorrulevalidationresponseDetailsInner)`

SetDetails sets Details field to given value.



