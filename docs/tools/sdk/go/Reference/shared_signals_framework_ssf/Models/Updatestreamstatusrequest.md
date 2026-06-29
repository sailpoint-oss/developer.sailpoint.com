---
id: v1-updatestreamstatusrequest
title: Updatestreamstatusrequest
pagination_label: Updatestreamstatusrequest
sidebar_label: Updatestreamstatusrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Updatestreamstatusrequest', 'V1Updatestreamstatusrequest'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/updatestreamstatusrequest
tags: ['SDK', 'Software Development Kit', 'Updatestreamstatusrequest', 'V1Updatestreamstatusrequest']
---

# Updatestreamstatusrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **string** | ID of the stream whose status to update. | 
**Status** | **string** | Desired stream status. | 
**Reason** | Pointer to **string** | Optional reason for the status change. | [optional] 

## Methods

### NewUpdatestreamstatusrequest

`func NewUpdatestreamstatusrequest(streamId string, status string, ) *Updatestreamstatusrequest`

NewUpdatestreamstatusrequest instantiates a new Updatestreamstatusrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdatestreamstatusrequestWithDefaults

`func NewUpdatestreamstatusrequestWithDefaults() *Updatestreamstatusrequest`

NewUpdatestreamstatusrequestWithDefaults instantiates a new Updatestreamstatusrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *Updatestreamstatusrequest) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *Updatestreamstatusrequest) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *Updatestreamstatusrequest) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.


### GetStatus

`func (o *Updatestreamstatusrequest) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Updatestreamstatusrequest) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Updatestreamstatusrequest) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReason

`func (o *Updatestreamstatusrequest) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Updatestreamstatusrequest) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Updatestreamstatusrequest) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *Updatestreamstatusrequest) HasReason() bool`

HasReason returns a boolean if a field has been set.


