---
id: beta-access-request-admin-item-status-cancelled-request-details
title: AccessRequestAdminItemStatusCancelledRequestDetails
pagination_label: AccessRequestAdminItemStatusCancelledRequestDetails
sidebar_label: AccessRequestAdminItemStatusCancelledRequestDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestAdminItemStatusCancelledRequestDetails', 'BetaAccessRequestAdminItemStatusCancelledRequestDetails'] 
slug: /tools/sdk/go/beta/models/access-request-admin-item-status-cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'AccessRequestAdminItemStatusCancelledRequestDetails', 'BetaAccessRequestAdminItemStatusCancelledRequestDetails']
---

# AccessRequestAdminItemStatusCancelledRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** | Pointer to [**OwnerDto**](owner-dto) |  | [optional] 
**Modified** | Pointer to **SailPointTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Methods

### NewAccessRequestAdminItemStatusCancelledRequestDetails

`func NewAccessRequestAdminItemStatusCancelledRequestDetails() *AccessRequestAdminItemStatusCancelledRequestDetails`

NewAccessRequestAdminItemStatusCancelledRequestDetails instantiates a new AccessRequestAdminItemStatusCancelledRequestDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestAdminItemStatusCancelledRequestDetailsWithDefaults

`func NewAccessRequestAdminItemStatusCancelledRequestDetailsWithDefaults() *AccessRequestAdminItemStatusCancelledRequestDetails`

NewAccessRequestAdminItemStatusCancelledRequestDetailsWithDefaults instantiates a new AccessRequestAdminItemStatusCancelledRequestDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetOwner

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) GetOwner() OwnerDto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) GetOwnerOk() (*OwnerDto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) SetOwner(v OwnerDto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetModified

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AccessRequestAdminItemStatusCancelledRequestDetails) HasModified() bool`

HasModified returns a boolean if a field has been set.


