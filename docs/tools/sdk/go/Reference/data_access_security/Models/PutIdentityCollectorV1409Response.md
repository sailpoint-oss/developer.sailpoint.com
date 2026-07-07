---
id: v1-put-identity-collector-v1409-response
title: PutIdentityCollectorV1409Response
pagination_label: PutIdentityCollectorV1409Response
sidebar_label: PutIdentityCollectorV1409Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PutIdentityCollectorV1409Response', 'V1PutIdentityCollectorV1409Response'] 
slug: /tools/sdk/go/dataaccesssecurity/models/put-identity-collector-v1409-response
tags: ['SDK', 'Software Development Kit', 'PutIdentityCollectorV1409Response', 'V1PutIdentityCollectorV1409Response']
---

# PutIdentityCollectorV1409Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 
**Messages** | Pointer to [**[]PutIdentityCollectorV1409ResponseMessagesInner**](put-identity-collector-v1409-response-messages-inner) | Generic localized reason for error. | [optional] 

## Methods

### NewPutIdentityCollectorV1409Response

`func NewPutIdentityCollectorV1409Response() *PutIdentityCollectorV1409Response`

NewPutIdentityCollectorV1409Response instantiates a new PutIdentityCollectorV1409Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutIdentityCollectorV1409ResponseWithDefaults

`func NewPutIdentityCollectorV1409ResponseWithDefaults() *PutIdentityCollectorV1409Response`

NewPutIdentityCollectorV1409ResponseWithDefaults instantiates a new PutIdentityCollectorV1409Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *PutIdentityCollectorV1409Response) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *PutIdentityCollectorV1409Response) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *PutIdentityCollectorV1409Response) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *PutIdentityCollectorV1409Response) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetTrackingId

`func (o *PutIdentityCollectorV1409Response) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *PutIdentityCollectorV1409Response) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *PutIdentityCollectorV1409Response) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *PutIdentityCollectorV1409Response) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.

### GetMessages

`func (o *PutIdentityCollectorV1409Response) GetMessages() []PutIdentityCollectorV1409ResponseMessagesInner`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *PutIdentityCollectorV1409Response) GetMessagesOk() (*[]PutIdentityCollectorV1409ResponseMessagesInner, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *PutIdentityCollectorV1409Response) SetMessages(v []PutIdentityCollectorV1409ResponseMessagesInner)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *PutIdentityCollectorV1409Response) HasMessages() bool`

HasMessages returns a boolean if a field has been set.


