---
id: v1-cancelaccessrequest
title: Cancelaccessrequest
pagination_label: Cancelaccessrequest
sidebar_label: Cancelaccessrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Cancelaccessrequest', 'V1Cancelaccessrequest'] 
slug: /tools/sdk/go/accessrequests/models/cancelaccessrequest
tags: ['SDK', 'Software Development Kit', 'Cancelaccessrequest', 'V1Cancelaccessrequest']
---

# Cancelaccessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** | **string** | This refers to the identityRequestId. To successfully cancel an access request, you must provide the identityRequestId. | 
**Comment** | **string** | Reason for cancelling the pending access request. | 

## Methods

### NewCancelaccessrequest

`func NewCancelaccessrequest(accountActivityId string, comment string, ) *Cancelaccessrequest`

NewCancelaccessrequest instantiates a new Cancelaccessrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelaccessrequestWithDefaults

`func NewCancelaccessrequestWithDefaults() *Cancelaccessrequest`

NewCancelaccessrequestWithDefaults instantiates a new Cancelaccessrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountActivityId

`func (o *Cancelaccessrequest) GetAccountActivityId() string`

GetAccountActivityId returns the AccountActivityId field if non-nil, zero value otherwise.

### GetAccountActivityIdOk

`func (o *Cancelaccessrequest) GetAccountActivityIdOk() (*string, bool)`

GetAccountActivityIdOk returns a tuple with the AccountActivityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountActivityId

`func (o *Cancelaccessrequest) SetAccountActivityId(v string)`

SetAccountActivityId sets AccountActivityId field to given value.


### GetComment

`func (o *Cancelaccessrequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Cancelaccessrequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Cancelaccessrequest) SetComment(v string)`

SetComment sets Comment field to given value.



