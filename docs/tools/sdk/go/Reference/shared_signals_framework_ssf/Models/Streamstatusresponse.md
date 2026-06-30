---
id: v1-streamstatusresponse
title: Streamstatusresponse
pagination_label: Streamstatusresponse
sidebar_label: Streamstatusresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Streamstatusresponse', 'V1Streamstatusresponse'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/streamstatusresponse
tags: ['SDK', 'Software Development Kit', 'Streamstatusresponse', 'V1Streamstatusresponse']
---

# Streamstatusresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | Pointer to **string** | Stream identifier. | [optional] 
**Status** | Pointer to **string** | Operational status of the stream (enabled, paused, or disabled). | [optional] 
**Reason** | Pointer to **string** | Optional reason for the current status (e.g. set when status is updated). | [optional] 

## Methods

### NewStreamstatusresponse

`func NewStreamstatusresponse() *Streamstatusresponse`

NewStreamstatusresponse instantiates a new Streamstatusresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamstatusresponseWithDefaults

`func NewStreamstatusresponseWithDefaults() *Streamstatusresponse`

NewStreamstatusresponseWithDefaults instantiates a new Streamstatusresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *Streamstatusresponse) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *Streamstatusresponse) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *Streamstatusresponse) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.

### HasStreamId

`func (o *Streamstatusresponse) HasStreamId() bool`

HasStreamId returns a boolean if a field has been set.

### GetStatus

`func (o *Streamstatusresponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Streamstatusresponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Streamstatusresponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Streamstatusresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetReason

`func (o *Streamstatusresponse) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Streamstatusresponse) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Streamstatusresponse) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *Streamstatusresponse) HasReason() bool`

HasReason returns a boolean if a field has been set.


