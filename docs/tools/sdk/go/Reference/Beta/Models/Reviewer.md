---
id: beta-reviewer
title: Reviewer
pagination_label: Reviewer
sidebar_label: Reviewer
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reviewer', 'BetaReviewer'] 
slug: /tools/sdk/go/beta/models/reviewer
tags: ['SDK', 'Software Development Kit', 'Reviewer', 'BetaReviewer']
---

# Reviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Reviewer&#39;s DTO type. | 
**Id** | **string** | Reviewer&#39;s ID. | 
**Name** | **string** | Reviewer&#39;s display name. | 
**Email** | Pointer to **NullableString** | Reviewing identity&#39;s email. This is only applicable to reviewers of the &#x60;IDENTITY&#x60; type. | [optional] 

## Methods

### NewReviewer

`func NewReviewer(type_ string, id string, name string, ) *Reviewer`

NewReviewer instantiates a new Reviewer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewerWithDefaults

`func NewReviewerWithDefaults() *Reviewer`

NewReviewerWithDefaults instantiates a new Reviewer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Reviewer) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Reviewer) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Reviewer) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *Reviewer) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reviewer) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reviewer) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Reviewer) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Reviewer) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Reviewer) SetName(v string)`

SetName sets Name field to given value.


### GetEmail

`func (o *Reviewer) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Reviewer) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Reviewer) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Reviewer) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### SetEmailNil

`func (o *Reviewer) SetEmailNil(b bool)`

 SetEmailNil sets the value for Email to be an explicit nil

### UnsetEmail
`func (o *Reviewer) UnsetEmail()`

UnsetEmail ensures that no value is present for Email, not even an explicit nil

