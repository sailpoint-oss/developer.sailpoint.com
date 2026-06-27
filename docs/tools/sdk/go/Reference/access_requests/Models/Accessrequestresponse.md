---
id: v1-accessrequestresponse
title: Accessrequestresponse
pagination_label: Accessrequestresponse
sidebar_label: Accessrequestresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestresponse', 'V1Accessrequestresponse'] 
slug: /tools/sdk/go/accessrequests/models/accessrequestresponse
tags: ['SDK', 'Software Development Kit', 'Accessrequestresponse', 'V1Accessrequestresponse']
---

# Accessrequestresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewRequests** | Pointer to [**[]Accessrequesttracking**](accessrequesttracking) | A list of new access request tracking data mapped to the values requested. | [optional] 
**ExistingRequests** | Pointer to [**[]Accessrequesttracking**](accessrequesttracking) | A list of existing access request tracking data mapped to the values requested.  This indicates access has already been requested for this item. | [optional] 

## Methods

### NewAccessrequestresponse

`func NewAccessrequestresponse() *Accessrequestresponse`

NewAccessrequestresponse instantiates a new Accessrequestresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestresponseWithDefaults

`func NewAccessrequestresponseWithDefaults() *Accessrequestresponse`

NewAccessrequestresponseWithDefaults instantiates a new Accessrequestresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNewRequests

`func (o *Accessrequestresponse) GetNewRequests() []Accessrequesttracking`

GetNewRequests returns the NewRequests field if non-nil, zero value otherwise.

### GetNewRequestsOk

`func (o *Accessrequestresponse) GetNewRequestsOk() (*[]Accessrequesttracking, bool)`

GetNewRequestsOk returns a tuple with the NewRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRequests

`func (o *Accessrequestresponse) SetNewRequests(v []Accessrequesttracking)`

SetNewRequests sets NewRequests field to given value.

### HasNewRequests

`func (o *Accessrequestresponse) HasNewRequests() bool`

HasNewRequests returns a boolean if a field has been set.

### GetExistingRequests

`func (o *Accessrequestresponse) GetExistingRequests() []Accessrequesttracking`

GetExistingRequests returns the ExistingRequests field if non-nil, zero value otherwise.

### GetExistingRequestsOk

`func (o *Accessrequestresponse) GetExistingRequestsOk() (*[]Accessrequesttracking, bool)`

GetExistingRequestsOk returns a tuple with the ExistingRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingRequests

`func (o *Accessrequestresponse) SetExistingRequests(v []Accessrequesttracking)`

SetExistingRequests sets ExistingRequests field to given value.

### HasExistingRequests

`func (o *Accessrequestresponse) HasExistingRequests() bool`

HasExistingRequests returns a boolean if a field has been set.


