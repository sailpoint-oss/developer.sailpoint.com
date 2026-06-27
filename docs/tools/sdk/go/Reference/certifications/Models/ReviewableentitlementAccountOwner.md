---
id: v1-reviewableentitlement-account-owner
title: ReviewableentitlementAccountOwner
pagination_label: ReviewableentitlementAccountOwner
sidebar_label: ReviewableentitlementAccountOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReviewableentitlementAccountOwner', 'V1ReviewableentitlementAccountOwner'] 
slug: /tools/sdk/go/certifications/models/reviewableentitlement-account-owner
tags: ['SDK', 'Software Development Kit', 'ReviewableentitlementAccountOwner', 'V1ReviewableentitlementAccountOwner']
---

# ReviewableentitlementAccountOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | The id associated with the machine account owner | [optional] 
**Type** | Pointer to **string** | An enumeration of the types of Owner supported within the IdentityNow infrastructure. | [optional] 
**DisplayName** | Pointer to **NullableString** | The machine account owner's display name | [optional] 

## Methods

### NewReviewableentitlementAccountOwner

`func NewReviewableentitlementAccountOwner() *ReviewableentitlementAccountOwner`

NewReviewableentitlementAccountOwner instantiates a new ReviewableentitlementAccountOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewableentitlementAccountOwnerWithDefaults

`func NewReviewableentitlementAccountOwnerWithDefaults() *ReviewableentitlementAccountOwner`

NewReviewableentitlementAccountOwnerWithDefaults instantiates a new ReviewableentitlementAccountOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReviewableentitlementAccountOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReviewableentitlementAccountOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReviewableentitlementAccountOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReviewableentitlementAccountOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *ReviewableentitlementAccountOwner) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *ReviewableentitlementAccountOwner) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetType

`func (o *ReviewableentitlementAccountOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReviewableentitlementAccountOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReviewableentitlementAccountOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ReviewableentitlementAccountOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDisplayName

`func (o *ReviewableentitlementAccountOwner) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *ReviewableentitlementAccountOwner) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *ReviewableentitlementAccountOwner) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *ReviewableentitlementAccountOwner) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### SetDisplayNameNil

`func (o *ReviewableentitlementAccountOwner) SetDisplayNameNil(b bool)`

 SetDisplayNameNil sets the value for DisplayName to be an explicit nil

### UnsetDisplayName
`func (o *ReviewableentitlementAccountOwner) UnsetDisplayName()`

UnsetDisplayName ensures that no value is present for DisplayName, not even an explicit nil

