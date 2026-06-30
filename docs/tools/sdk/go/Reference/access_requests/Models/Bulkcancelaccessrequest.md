---
id: v1-bulkcancelaccessrequest
title: Bulkcancelaccessrequest
pagination_label: Bulkcancelaccessrequest
sidebar_label: Bulkcancelaccessrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkcancelaccessrequest', 'V1Bulkcancelaccessrequest'] 
slug: /tools/sdk/go/accessrequests/models/bulkcancelaccessrequest
tags: ['SDK', 'Software Development Kit', 'Bulkcancelaccessrequest', 'V1Bulkcancelaccessrequest']
---

# Bulkcancelaccessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestIds** | **[]string** | List of access requests ids to cancel the pending requests | 
**Comment** | **string** | Reason for cancelling the pending access request. | 

## Methods

### NewBulkcancelaccessrequest

`func NewBulkcancelaccessrequest(accessRequestIds []string, comment string, ) *Bulkcancelaccessrequest`

NewBulkcancelaccessrequest instantiates a new Bulkcancelaccessrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkcancelaccessrequestWithDefaults

`func NewBulkcancelaccessrequestWithDefaults() *Bulkcancelaccessrequest`

NewBulkcancelaccessrequestWithDefaults instantiates a new Bulkcancelaccessrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestIds

`func (o *Bulkcancelaccessrequest) GetAccessRequestIds() []string`

GetAccessRequestIds returns the AccessRequestIds field if non-nil, zero value otherwise.

### GetAccessRequestIdsOk

`func (o *Bulkcancelaccessrequest) GetAccessRequestIdsOk() (*[]string, bool)`

GetAccessRequestIdsOk returns a tuple with the AccessRequestIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestIds

`func (o *Bulkcancelaccessrequest) SetAccessRequestIds(v []string)`

SetAccessRequestIds sets AccessRequestIds field to given value.


### GetComment

`func (o *Bulkcancelaccessrequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Bulkcancelaccessrequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Bulkcancelaccessrequest) SetComment(v string)`

SetComment sets Comment field to given value.



