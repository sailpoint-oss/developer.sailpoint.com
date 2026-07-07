---
id: v1-requesteditemstatus-cancelled-request-details
title: RequesteditemstatusCancelledRequestDetails
pagination_label: RequesteditemstatusCancelledRequestDetails
sidebar_label: RequesteditemstatusCancelledRequestDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequesteditemstatusCancelledRequestDetails', 'V1RequesteditemstatusCancelledRequestDetails'] 
slug: /tools/sdk/go/accessrequests/models/requesteditemstatus-cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusCancelledRequestDetails', 'V1RequesteditemstatusCancelledRequestDetails']
---

# RequesteditemstatusCancelledRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** | Pointer to [**Ownerdto**](ownerdto) |  | [optional] 
**Modified** | Pointer to **SailPointTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Methods

### NewRequesteditemstatusCancelledRequestDetails

`func NewRequesteditemstatusCancelledRequestDetails() *RequesteditemstatusCancelledRequestDetails`

NewRequesteditemstatusCancelledRequestDetails instantiates a new RequesteditemstatusCancelledRequestDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequesteditemstatusCancelledRequestDetailsWithDefaults

`func NewRequesteditemstatusCancelledRequestDetailsWithDefaults() *RequesteditemstatusCancelledRequestDetails`

NewRequesteditemstatusCancelledRequestDetailsWithDefaults instantiates a new RequesteditemstatusCancelledRequestDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *RequesteditemstatusCancelledRequestDetails) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *RequesteditemstatusCancelledRequestDetails) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *RequesteditemstatusCancelledRequestDetails) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *RequesteditemstatusCancelledRequestDetails) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetOwner

`func (o *RequesteditemstatusCancelledRequestDetails) GetOwner() Ownerdto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *RequesteditemstatusCancelledRequestDetails) GetOwnerOk() (*Ownerdto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *RequesteditemstatusCancelledRequestDetails) SetOwner(v Ownerdto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *RequesteditemstatusCancelledRequestDetails) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetModified

`func (o *RequesteditemstatusCancelledRequestDetails) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *RequesteditemstatusCancelledRequestDetails) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *RequesteditemstatusCancelledRequestDetails) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *RequesteditemstatusCancelledRequestDetails) HasModified() bool`

HasModified returns a boolean if a field has been set.


