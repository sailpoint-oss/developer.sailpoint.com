---
id: v2024-reviewer
title: Reviewer
pagination_label: Reviewer
sidebar_label: Reviewer
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reviewer', 'V2024Reviewer'] 
slug: /tools/sdk/go/v2024/models/reviewer
tags: ['SDK', 'Software Development Kit', 'Reviewer', 'V2024Reviewer']
---

# Reviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id of the reviewer. | [optional] 
**Name** | Pointer to **string** | The name of the reviewer. | [optional] 
**Email** | Pointer to **string** | The email of the reviewing identity. | [optional] 
**Type** | Pointer to **string** | The type of the reviewing identity. | [optional] 
**Created** | Pointer to **NullableTime** | The created date of the reviewing identity. | [optional] 
**Modified** | Pointer to **NullableTime** | The modified date of the reviewing identity. | [optional] 

## Methods

### NewReviewer

`func NewReviewer() *Reviewer`

NewReviewer instantiates a new Reviewer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewerWithDefaults

`func NewReviewerWithDefaults() *Reviewer`

NewReviewerWithDefaults instantiates a new Reviewer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

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

### HasId

`func (o *Reviewer) HasId() bool`

HasId returns a boolean if a field has been set.

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

### HasName

`func (o *Reviewer) HasName() bool`

HasName returns a boolean if a field has been set.

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

### HasType

`func (o *Reviewer) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCreated

`func (o *Reviewer) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Reviewer) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Reviewer) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Reviewer) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *Reviewer) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *Reviewer) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *Reviewer) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Reviewer) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Reviewer) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Reviewer) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Reviewer) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Reviewer) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil

